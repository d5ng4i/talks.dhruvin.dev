# Rust FFI

## Origin story

Have you ever wondered how Rust can interoperate with other programming languages? Me neither! Well,
that was until I worked on a [pluggable authentication
module](https://en.wikipedia.org/wiki/Pluggable_authentication_module) that needed to talk to
[libpam](https://github.com/linux-pam/linux-pam).

## What to expect

The talk-series explores Rust FFI (**F**oreign **F**unction **I**nterface) ecosystem. FFI allows
Rust code to interoperate with code from various programming languages that speak well defined ABI
(**A**pplication **B**inary **I**nterface).

The talk-series assumes familiarity with Rust functions, types, and statics. It will mostly present
`unsafe` code, and ways to make safe(r) abstractions. It is intended for Rust library authors.
