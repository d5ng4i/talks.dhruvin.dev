CARGO := cargo
MDBOOK := mdbook
RSYNC := rsync

CARGOBUILDFLAGS :=
MDBOOKBUILDFLAGS :=
MDBOOKTESTFLAGS := -L target/debug/deps
RSYNCFLAGS := --rsync-path=openrsync -av --delete . talks.dhruvin.dev:/var/www/htdocs/talks.dhruvin.dev/rustblr

all:
	$(MDBOOK) build $(MDBOOKBUILDFLAGS)

check:
	$(CARGO) build $(CARGOBUILDFLAGS)
	$(MDBOOK) test $(MDBOOKTESTFLAGS)

publish: all check
	cd book && $(RSYNC) $(RSYNCFLAGS)

.PHONY: all check publish
