// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="index.html">Introduction</a></li><li class="chapter-item expanded affix "><li class="part-title">Talks</li><li class="chapter-item expanded "><a href="ffi/index.html"><strong aria-hidden="true">1.</strong> Rust FFI</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ffi/extern/index.html"><strong aria-hidden="true">1.1.</strong> External Blocks</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ffi/extern/functions.html"><strong aria-hidden="true">1.1.1.</strong> Functions</a></li><li class="chapter-item expanded "><a href="ffi/extern/statics.html"><strong aria-hidden="true">1.1.2.</strong> Statics</a></li><li class="chapter-item expanded "><a href="ffi/extern/abi.html"><strong aria-hidden="true">1.1.3.</strong> Application Binary Interface</a></li><li class="chapter-item expanded "><a href="ffi/extern/variadic.html"><strong aria-hidden="true">1.1.4.</strong> Variadic Functions</a></li><li class="chapter-item expanded "><a href="ffi/extern/link.html"><strong aria-hidden="true">1.1.5.</strong> Link</a></li></ol></li><li class="chapter-item expanded "><a href="ffi/bindgen/index.html"><strong aria-hidden="true">1.2.</strong> Bindgen</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ffi/bindgen/build/index.html"><strong aria-hidden="true">1.2.1.</strong> Build Script</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ffi/bindgen/build/header.html"><strong aria-hidden="true">1.2.1.1.</strong> Header</a></li><li class="chapter-item expanded "><a href="ffi/bindgen/build/filter.html"><strong aria-hidden="true">1.2.1.2.</strong> Filter</a></li><li class="chapter-item expanded "><a href="ffi/bindgen/build/derive.html"><strong aria-hidden="true">1.2.1.3.</strong> Derive</a></li><li class="chapter-item expanded "><a href="ffi/bindgen/build/callbacks.html"><strong aria-hidden="true">1.2.1.4.</strong> Callbacks</a></li><li class="chapter-item expanded "><a href="ffi/bindgen/build/include.html"><strong aria-hidden="true">1.2.1.5.</strong> Include</a></li></ol></li></ol></li></ol></li><li class="chapter-item expanded "><a href="err/index.html"><strong aria-hidden="true">2.</strong> Rust Error</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="err/primer/index.html"><strong aria-hidden="true">2.1.</strong> Primer</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="err/primer/debug.html"><strong aria-hidden="true">2.1.1.</strong> Debug</a></li><li class="chapter-item expanded "><a href="err/primer/display.html"><strong aria-hidden="true">2.1.2.</strong> Display</a></li><li class="chapter-item expanded "><a href="err/primer/error.html"><strong aria-hidden="true">2.1.3.</strong> Error</a></li></ol></li><li class="chapter-item expanded "><a href="err/thiserror/index.html"><strong aria-hidden="true">2.2.</strong> thiserror</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="err/thiserror/error.html"><strong aria-hidden="true">2.2.1.</strong> error</a></li><li class="chapter-item expanded "><a href="err/thiserror/source.html"><strong aria-hidden="true">2.2.2.</strong> source</a></li><li class="chapter-item expanded "><a href="err/thiserror/from.html"><strong aria-hidden="true">2.2.3.</strong> from</a></li><li class="chapter-item expanded "><a href="err/thiserror/transparent.html"><strong aria-hidden="true">2.2.4.</strong> transparent</a></li></ol></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li><li class="chapter-item expanded affix "><a href="about.html">About</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
