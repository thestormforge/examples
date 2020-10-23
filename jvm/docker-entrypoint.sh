#!/usr/bin/env sh
# Default to the no-op benchmark
BENCHMARK="${1:-dummy}"
# Use a fixed heap size
# Defaults for heap from https://github.com/renaissance-benchmarks/measurements#measurement-information
JAVA_OPTS="-Xms${HEAP_SIZE:-12288}m -Xmx${HEAP_SIZE:-12288}m"
if [ -n "$GC_COLLECTOR" ]; then
	JAVA_OPTS="$JAVA_OPTS -XX:+Use${GC_COLLECTOR:-G1}GC"
fi
# Survivor Space Sizing
if [ -n "$NEW_RATIO" ]; then
	JAVA_OPTS="$JAVA_OPTS -XX:NewRatio=${NEW_RATIO}"
fi
if [ -n "$NEW_SIZE" ]; then
	JAVA_OPTS="$JAVA_OPTS -XX:NewSize=${NEW_SIZE}"
fi
if [ -n "$MAX_NEW_SIZE" ]; then
	JAVA_OPTS="$JAVA_OPTS -XX:MaxNewSize=${MAX_NEW_SIZE}"
fi
if [ -n "$SURVIVOR_RATIO" ]; then
	JAVA_OPTS="$JAVA_OPTS -XX:SurvivorRatio=${SURVIVOR_RATIO}"
fi
if [ -n "$PARALLEL_GC_THREADS" ]; then
	JAVA_OPTS="$JAVA_OPTS -XX:ParallelGCThreads=${PARALLEL_GC_THREADS}" # unused unless we set -XX:+UseParallelGC
fi
if [ -n "$CON_GC_THREADS" ]; then
	JAVA_OPTS="$JAVA_OPTS -XX:ConcGCThreads=${CON_GC_THREADS}"
fi
if [ -n "$INITIATING_HEAP_OCC_PCT" ]; then
	JAVA_OPTS="$JAVA_OPTS -XX:InitiatingHeapOccupancyPercent=${INITIATING_HEAP_OCC_PCT}"
fi

echo "Using JVM options: $JAVA_OPTS"
eval set -- $JAVA_OPTS -jar /opt/renaissance/lib/renaissance-gpl-0.10.0.jar "$BENCHMARK"
exec java "$@"
