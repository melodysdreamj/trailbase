<p align="center">
  <a href="https://trailbase.io" target="_blank">
    <picture>
      <img alt="TrailBase logo" width="150" src="assets/logo.svg" />
    </picture>
  </a>
</p>

<p align="center">
  An open, <a href="https://trailbase.io/reference/benchmarks/">blazingly fast</a>,
  single-executable Firebase alternative with type-safe REST & realtime APIs, built-in JS/ES6/TS
  runtime, SSR, auth and admin UI built on Rust, SQLite & V8.
<p>

<p align="center">
  Simplify with fewer moving parts: an easy to self-host, single-executable,
  extensible backend for your mobile, web or desktop application.
  Sub-millisecond latencies eliminate the need for dedicated caches, no more
  stale or inconsistent data.
<p>

<p align="center">
  <a href="https://github.com/trailbaseio/trailbase/stargazers/">
    <img src="https://img.shields.io/github/stars/trailbaseio/trailbase?style=social&label=Star" />
  </a>
  <a href="https://github.com/trailbaseio/trailbase/actions?query=branch%3Amain">
    <img src="https://github.com/trailbaseio/trailbase/actions/workflows/test.yml/badge.svg?branch=main" alt="Build Status">
  </a>
  <a href="https://github.com/trailbaseio/trailbase/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-OSL_3.0-blue" alt="License - OSL 3.0">
  </a>
  <a href="https://trailbase.io/reference/roadmap/">
    <img src="https://img.shields.io/badge/status-alpha-orange" alt="Status - Alpha">
  </a>
</p>

# TrailBase

<p align="center">
  <a
    href="https://demo.trailbase.io/_/admin?loginMessage=E-mail:%20admin@localhost%20%E2%80%A2%20Password:%20secret"
    target="_blank"
  >
    <picture>
      <img alt="Admin UI" width="600" src="docs/src/assets/shelve.webp" />
    </picture>
  </a>
</p>

<p align="center">
  <strong>
    Try the
    <a href="https://demo.trailbase.io/_/admin?loginMessage=E-mail:%20admin@localhost%20%E2%80%A2%20Password:%20secret" target="_blank">
      demo
    </a> online
  </strong>
  <br/>Email: <em>admin@localhost</em>
  <br/>password: <em>secret</em>.
</p>

For more context, documentation, and a live demo, check out the website:
[trailbase.io](https://trailbase.io).
Questions? Thoughts? - Take a look at the
[FAQ](https://trailbase.io/reference/faq/) or reach out.
If you like TrailBase or want to follow along, consider leaving a ⭐🙏.

## Project Structure & Releases

This repository contains all components that make up TrailBase including client
libraries, tests, documentation and examples.
Only the [benchmarks](https://github.com/trailbaseio/trailbase-benchmark) are
kept separately due to their external dependencies.

Pre-built static binaries are available as
[GitHub releases](https://github.com/trailbaseio/trailbase/releases/) for
Linux, MacOS and Windows.
On Windows the Docker [image](https://hub.docker.com/r/trailbase/trailbase) can
be used.

Client packages for various languages are available via:

- [JavaScript/TypeScript](https://www.npmjs.com/package/trailbase)
- [Dart/Flutter](https://pub.dev/packages/trailbase)
- [Rust](https://crates.io/crates/trailbase-client)
- [C#/.Net](https://www.nuget.org/packages/TrailBase/)
- [Python](https://pypi.org/project/trailbase/)

## Running

You can get TrailBase either as a pre-built static binary (MacOS &
Linux), run it using [Docker](https://hub.docker.com/r/trailbase/trailbase)
(Windows, MacOS, Linux, ...), or [build](#building) it from source.

The latest pre-built binaries can be downloaded from [GitHub
releases](https://github.com/trailbaseio/trailbase/releases/) and run via:

```bash
$ ./trail run
```

Thanks to `trail` being a single static binary, there's no need to install
anything including system dependencies.
This also means that you can confidently update your system and deploy to
different machines without having to worry about prior set-up or shared
library compatibility.

Using [Docker](https://hub.docker.com/r/trailbase/trailbase), you can run the
following, which will also create and mount a local `./traildepot` asset
directory:

```bash
$ mkdir traildepot
$ alias trail="docker run -p 4000:4000 --mount type=bind,source=$PWD/traildepot,target=/app/traildepot trailbase/trailbase /app/trail"
$ trail run
```

To get a full list of commands, simply run `trail --help` .

## Building

If you have all the necessary dependencies (Rust, protobuf, node.js, pnpm)
installed, you can build TrailBase by running:

```bash
# Windows only: make sure to enable symlinks (w/o `mklink` permissions for your
# user, git will fall back to copies).
$ git config core.symlinks true && git reset --hard

# Download necessary git sub-modules.
$ git submodule update --init --recursive

# Install Javascript dependencies first. Required for the next step.
$ pnpm install

# Build the main executable. Adding `--release` will build a faster release
# binary but slow down the build significantly.
$ cargo build --bin trail
```

To build a static binary you'll need to explicitly specify the target platform,
e.g. Linux using the GNU glibc:

```bash
$ RUSTFLAGS="-C target-feature=+crt-static" cargo build --target x86_64-unknown-linux-gnu --release
```

Alternatively, if you want to build a Docker image or don't have to deal with
build dependencies, you can simply run:

```bash
# Download necessary git sub-modules.
$ git submodule update --init --recursive

# Build the container as defined in `Dockerfile`.
$ docker build . -t trailbase
```

## Contributing

Contributions are very much appreciated 🙏. For anything beyond bug fixes,
let's briefly chat to see how a proposal fits into the overall roadmap and
avoid any surprises.

We're not sure yet what the best setup or exact license is for compatibility
between OSL-3.0 and more popular licenses or use as a framework.
So we'd ask you to sign a simple CLA that retains your copyright, ensures that
TrailBase will continue to forever be freely available under an OSI-approved
copyleft license, while allowing for some flexibility and sub-licensing as
established by much larger, successful projects such as Grafana or Element.

## License
TrailBase is free software under the terms of the [Open Software License 3.0
(OSL-3.0)](https://opensource.org/licenses/OSL-3.0).

We chose the OSL-3.0 over other, better known copyleft licenses due to its
narrower definition of "derivative work" that **only** covers modifications to
TrailBase itself.
This means that your application's original code is **not** subject to the
OSL-3.0's copyleft provisions. This is true whether you connect over the
network (e.g. web, mobile, other services, etc.), you're serving static assets,
using the runtime to write custom server-side logic or using TrailBase as a
framework.

This limited scope is similar to the GPL's classpath or the LGPL's [linking
exception](https://en.wikipedia.org/wiki/GPL_linking_exception).
The goal is to allow building on top and around of TrailBase without any
provisions rubbing off onto your original work, while making sure that fixes
and improvements find their way back to the community.
These are our intentions - we felt the need to spell them out explicitly
because licensing is tricky and we ain't lawyers.
Graciously, the license's author provides some more
[explanations](https://rosenlaw.com/OSL3.0-explained.htm).
If you have any concerns, please reach out.

If you require an
[exception](https://www.gnu.org/philosophy/selling-exceptions.html), reach out
to contact@trailbase.io.
