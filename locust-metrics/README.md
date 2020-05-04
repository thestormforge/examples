# Locust Metrics Example

This example shows how to optimize the voting app using the metrics built into Locust. This is useful when tuning an application the does not have metrics yet. Locust is now run as a deployment that lasts the length of the experiment rather than as the trial pod. The trial pod interacts with the Locust API to start and stop load tests.
