MDBOOK := mdbook
RSYNC := openrsync

MDBOOKBUILDFLAGS :=
MDBOOKTESTFLAGS :=
RSYNCFLAGS := --rsync-path=openrsync -av --delete . talks.dhruvin.dev:/var/www/htdocs/talks.dhruvin.dev/rustblr

all:
	$(MDBOOK) build $(MDBOOKBUILDFLAGS)

check:
	$(MDBOOK) test $(MDBOOKTESTFLAGS)

publish: all check
	cd book && $(RSYNC) $(RSYNCFLAGS)

.PHONY: all check publish
