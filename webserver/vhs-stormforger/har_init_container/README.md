# HAR to Stormforger test case conversion container

This container can be used to convert a HTTP Archive (HAR) file created with `vhs` to a StormForger test case.
It will limit the size of the HAR file before calling `forge` to avoid issues with file size limits.
It will also replace any IPv4 addresses in the resulting test case with the specified ingress address.

## Configuration

| Environment Variable | Description |
| -------------------- | ----------- |
| `HAR_FILE`           | Path to the HAR file mounted in the container. |
| `HAR_LIMIT`          | HAR file size limit in bytes. |
| `TEST_CASE_FILE`     | Path to the test case file mounted in the container. |
| `INGRESS_ADDRESS`    | Publicly-accessible ingress address. |
| `STORMFORGER_JWT`    | Access token for the StormForger API. |
