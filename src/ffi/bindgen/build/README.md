# Build Script

- use platform- and architecture-specific headers
- `cargo install --build bindgen`
- `wrapper.h`
  - `#include`
  - replacements
- `build.rs`
  - `.parse_callbacks(Box::new(bindgen::CargoCallbacks))`
- `include!(concat!(env!("OUT_DIR"), "/bindings.rs"))`
- `#![allow(<lint>)]`

## References

- [https://doc.rust-lang.org/cargo/reference/build-scripts.html](https://doc.rust-lang.org/cargo/reference/build-scripts.html)
