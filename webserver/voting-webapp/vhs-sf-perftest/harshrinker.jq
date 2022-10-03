# jq script to reduce the size of an HTTP archive (HAR) file. 
# Can be executed with cat <input_harfile> | jq -c -f harshrinker.jq --arg limit <file size limit in bytes> > <output_filename>

# Function to calculate filesize in bytes. Assumes UTF8 encoding and compact output (not pretty printed).
def filesize(f): (f | tostring | utf8bytelength);

# Function to drop the last element from the HAR entries array.
def droplastentry(har): har.log.entries = har.log.entries[0:-1];

# Function to calculate the average size in bytes of an element in the HAR entry array.
def avgentrysize(har): (har.log.entries | tostring | utf8bytelength) / (har.log.entries | length);

# Function to calculate the target number of elements for the HAR entry array.
def numentries(har): (($limit | tonumber) / avgentrysize(har)) | floor;

# First, limit the entry array size to the target number of elements
.log.entries = [limit(numentries(.); .log.entries[])] |

# Then, cull the array if necessary to keep file size under target. 
# This ensures that the file size limit will be respected even if the dropped elements from the
# entries array are smaller than the average.
until(filesize(.) <= ($limit | tonumber); droplastentry(.))
