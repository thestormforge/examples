# StormForge - Examples

This repository contains examples to be used with the [StormForge Optimize Controller](https://docs.stormforge.io/optimize/getting-started/install/).

Each example contains additional documentation for usage and describing how it works.

**Table of Contents**

<!-- toc -->

- [Issues](#issues)
- [Contributing](#contributing)
- [Optimize Pro Version](#optimize-pro-version)

<!-- tocstop -->

## Running Experiments
Each example can be run by executing `kubectl apply -k .` from each of the example directories.

## Issues

If you have any problems with or questions about this image, please contact us
through a [GitHub issue][issues].

## Contributing

You are invited to contribute to new features, fixes, or updates, large or
small; we are always thrilled to receive pull requests, and do our best to
process them as fast as we can.

Before you start to code, we recommend discussing your plans through a [GitHub
issue][issues], especially for more ambitious contributions. This gives other
contributors a chance to point you in the right direction, give you feedback on
your design, and help you find out if someone else is working on the same thing.

[issues]: https://github.com/thestormforge/examples/issues
[controller]: https://github.com/thestormforge/optimize-controller

## Optimize Pro Version

The examples here are all designed to run with the latest version of the Optimize Pro controller, (~> 3.0).

You can check your controller version by running `stormforge check optimize-pro`.

To view older examples designed for the Optimize Pro controller (~> 2.0), please switch to the [`controller-v2`][controller-v2] branch of this repository.

If you need to upgrade your controller, see the [upgrade documentation][upgrade].

[controller-v2]: https://github.com/thestormforge/examples/tree/controller-v2/
[upgrade]: https://docs.stormforge.io/optimize-pro/getting-started/upgrade/
