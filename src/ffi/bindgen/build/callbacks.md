# Callbacks

- rerun-if-env-changed for used env variables
  - `SOURCE_DATE_EPOCH`
- rerun-if-changed for included header files
  - `wrapper.h`

## Examples

```rust,noplayground
# extern crate bindgen;
bindgen::builder()
    .header("wrapper.h")
    .parse_callbacks(Box::new(bindgen::CargoCallbacks::new()));
```

```ignore
cargo:rerun-if-env-changed=TARGET
cargo:rerun-if-env-changed=BINDGEN_EXTRA_CLANG_ARGS
cargo:rerun-if-changed=wrapper.h
```

## References

- [`Builder::parse_callbacks`](https://docs.rs/bindgen/latest/bindgen/struct.Builder.html#method.parse_callbacks)
- [`ParseCallbacks`](https://docs.rs/bindgen/latest/bindgen/callbacks/trait.ParseCallbacks.html)
- [`CargoCallbacks`](https://docs.rs/bindgen/latest/bindgen/struct.CargoCallbacks.html)
