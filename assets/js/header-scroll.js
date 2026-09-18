// =========================================================
// HEADER — scrolled state on scroll
// =========================================================

function initHeaderScroll() {
  const header = document.querySelector(".header");
  if (!header) return;

  const SCROLL_THRESHOLD = 100; // px after which the header changes

  function handleScroll() {
    header.classList.toggle("scrolled", window.scrollY > SCROLL_THRESHOLD);
  }

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initHeaderScroll);
} else {
  initHeaderScroll();
}