# Link

- Attributes that control the behaviour of a external block
  - `link`
    - `name`: required if `kind` is specified
    - `kind`
      - `dylib`: default
      - `static`
      - `framework`: macos
      - `raw-dylib`: windows
    - `modifiers`
      - `+bundle`: `static`
      - `-whole-archive`: `static`
      - `-verbatim`
    - `wasm_import_module`: `env`
    - `import_name_type`: windows
  - `link_name`
  - `link_ordinal`: windows

## Examples

```rust,editable
use std::ffi::*;

#[link(name = "c", kind = "dylib")]
extern "C" {
    #[link_name = "puts"]
    fn log(s: *const c_char);
}

#[cfg(target_family = "wasm")]
#[link(wasm_import_module = "foo")]
extern {
    // ...
}

fn main() {
    let s = CString::new("Hello, RustBLR!").unwrap();
    unsafe {
        log(s.as_ptr());
    }
}
```

## References

- [https://doc.rust-lang.org/stable/reference/items/external-blocks.html#the-link-attribute](https://doc.rust-lang.org/stable/reference/items/external-blocks.html#the-link-attribute)
- [https://doc.rust-lang.org/nomicon/ffi.html#linking](https://doc.rust-lang.org/nomicon/ffi.html#linking)
