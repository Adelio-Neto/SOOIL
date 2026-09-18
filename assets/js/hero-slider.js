// =========================================================
// HERO SLIDER — crossfade + tabs (index.html)
// =========================================================

function initHeroSlider() {
  const tabs = document.querySelectorAll(".hero-tabs a");
  const bgs = document.querySelectorAll(".hero-bg");
  const heroContent = document.querySelector(".hero-content");
  const eyebrowEl = document.getElementById("heroEyebrow");
  const titleEl = document.getElementById("heroTitle");
  const linkEl = document.getElementById("heroLink");

  if (!tabs.length || !bgs.length) return;

  const DURATION = 6000; // time per slide (ms)
  let current = 0;
  let timer;

  function setContent(tab) {
    eyebrowEl.textContent = tab.dataset.eyebrow;
    titleEl.innerHTML = tab.dataset.title;
    linkEl.setAttribute("href", tab.dataset.href);
  }

  function activate(index) {
    heroContent.classList.remove("is-visible");

    setTimeout(() => {
      tabs.forEach((t) => {
        t.classList.remove("active");
        const bar = t.querySelector(".tab-progress");
        if (bar) bar.remove();
      });
      bgs.forEach((bg) => bg.classList.remove("active"));

      const tab = tabs[index];
      tab.classList.add("active");
      bgs[index].classList.add("active");
      setContent(tab);

      void heroContent.offsetWidth;
      heroContent.classList.add("is-visible");

      const bar = document.createElement("span");
      bar.className = "tab-progress";
      tab.appendChild(bar);
      void bar.offsetWidth;
      bar.style.animationDuration = DURATION + "ms";
    }, 350);
  }

  function next() {
    current = (current + 1) % tabs.length;
    activate(current);
  }

  function startCycle() {
    clearInterval(timer);
    activate(current);
    timer = setInterval(next, DURATION);
  }

  tabs.forEach((tab, i) => {
    tab.addEventListener("click", function (e) {
      e.preventDefault();
      current = i;
      startCycle();
    });
  });

  startCycle();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initHeroSlider);
} else {
  initHeroSlider();
}