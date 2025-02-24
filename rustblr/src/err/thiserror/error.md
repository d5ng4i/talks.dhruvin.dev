# `#[error("...")]`

- inside format string:
  - `#[error("{var}")]`
  - `#[error("{0}")]`
- as format string arg:
  - `#[error("{}", .var)]`
  - `#[error("{}", .0)]`

## Examples

### Arguments

```rust,ignore,editable
use thiserror::Error;

#[derive(Error, Debug)]
pub enum Error {
    #[error("first letter must be lowercase but was {:?}", first_char(.0))]
    WrongCase(String),
    #[error("invalid index {idx}, expected at least {} and at most {}", .limits.lo, .limits.hi)]
    OutOfBounds { idx: usize, limits: Limits },
}
```

## References

- [thiserror](https://docs.rs/thiserror/latest/thiserror/#details)
