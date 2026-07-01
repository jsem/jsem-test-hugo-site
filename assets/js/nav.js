// Mobile menu toggle + sticky-header shadow. Progressive enhancement only —
// the site is fully usable without JS.
(function () {
  "use strict";

  var toggle = document.querySelector("[data-nav-toggle]");
  var list = document.querySelector("[data-nav-list]");
  var header = document.querySelector("[data-header]");

  // --- Mobile menu ---
  if (toggle && list) {
    var setOpen = function (open) {
      list.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    };

    toggle.addEventListener("click", function () {
      setOpen(!list.classList.contains("is-open"));
    });

    // Close when a nav link is tapped
    list.addEventListener("click", function (e) {
      if (e.target.closest("a")) setOpen(false);
    });

    // Close on Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });

    // Reset when resizing up to desktop
    window.addEventListener("resize", function () {
      if (window.innerWidth > 760) setOpen(false);
    });
  }

  // --- Sticky header shadow once scrolled ---
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-stuck", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }
})();
