// Gallery lightbox: click a thumbnail to view a larger image, with prev/next,
// keyboard control (arrows / Esc) and click-to-close. Progressive enhancement:
// without JS the thumbnails link straight to the full image.
(function () {
  "use strict";

  var box = document.querySelector("[data-lightbox]");
  if (!box) return;

  var triggers = Array.prototype.slice.call(document.querySelectorAll("[data-lb-item]"));
  if (!triggers.length) return;

  var imgEl = box.querySelector("[data-lb-img]");
  var capEl = box.querySelector("[data-lb-caption]");
  var countEl = box.querySelector("[data-lb-count]");
  var prevBtn = box.querySelector("[data-lb-prev]");
  var nextBtn = box.querySelector("[data-lb-next]");
  var current = 0;
  var lastFocus = null;

  // No point in arrows for a single image.
  if (triggers.length < 2) {
    prevBtn.hidden = true;
    nextBtn.hidden = true;
  }

  function render() {
    var el = triggers[current];
    var caption = el.getAttribute("data-caption") || "";
    imgEl.src = el.getAttribute("data-full");
    imgEl.alt = caption;
    capEl.textContent = caption;
    capEl.hidden = !caption;
    countEl.textContent = (current + 1) + " / " + triggers.length;
  }

  function open(index) {
    current = index;
    lastFocus = document.activeElement;
    render();
    box.hidden = false;
    document.body.style.overflow = "hidden";
    box.querySelector("[data-lb-close]").focus();
  }

  function close() {
    box.hidden = true;
    document.body.style.overflow = "";
    imgEl.removeAttribute("src");
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function step(delta) {
    current = (current + delta + triggers.length) % triggers.length;
    render();
  }

  triggers.forEach(function (el, i) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      open(i);
    });
  });

  box.querySelector("[data-lb-close]").addEventListener("click", close);
  prevBtn.addEventListener("click", function () { step(-1); });
  nextBtn.addEventListener("click", function () { step(1); });

  // Clicking the dark backdrop or the area around the image closes the viewer.
  box.addEventListener("click", function (e) {
    if (e.target === box || e.target.classList.contains("lightbox-figure")) close();
  });

  document.addEventListener("keydown", function (e) {
    if (box.hidden) return;
    if (e.key === "Escape") close();
    else if (e.key === "ArrowLeft") step(-1);
    else if (e.key === "ArrowRight") step(1);
  });
})();
