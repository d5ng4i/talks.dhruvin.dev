# ABI

## Cross-platform ABIs

- `extern "Rust"`: Default for regular rust function declarations
- `extern "C"`: Default for extern block function declarations
- `extern "system"`: `"C"`, but for `Win32` on `x86_32` it's `stdcall`

## Platform-specific ABIs

Non-exhaustive list:

- `extern "cdecl"`
- `extern "stdcall"`
- `extern "win64"`
- `extern "sysv64"`
- `extern "aapcs"`
- `extern "fastcall"`
- `extern "vectorcall"`
- `extern "thiscall"`
- `extern "efiapi"`

## Examples

```rust,noplayground
// Same as extern "C" { }
extern { }
```

## References

- [https://doc.rust-lang.org/stable/reference/items/external-blocks.html#abi](https://doc.rust-lang.org/stable/reference/items/external-blocks.html#abi)
- [https://doc.rust-lang.org/nomicon/ffi.html#foreign-calling-conventions](https://doc.rust-lang.org/nomicon/ffi.html#foreign-calling-conventions)
