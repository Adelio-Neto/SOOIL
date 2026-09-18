// =========================================================
// PAGE INTERACTIONS
// =========================================================

const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");
const backTop = document.getElementById("backTop");
const videoBox = document.getElementById("videoBox");

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

// Mobile menu
menuBtn.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("open");
  menuBtn.classList.toggle("open", isOpen);
  menuBtn.setAttribute("aria-expanded", isOpen);
});

// Close the menu when selecting a section
mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    menuBtn.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// Close the menu with Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    mobileNav.classList.remove("open");
    menuBtn.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  }
});

// Back to top button
window.addEventListener("scroll", () => {
  backTop.classList.toggle("show", window.scrollY > 650);
});

backTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Video demo interaction (fullscreen modal)
if (videoBox) {
  const videoModal = document.getElementById("videoModal");
  const closeBtn = document.getElementById("videoClose");
  const modalFrame = videoModal ? videoModal.querySelector(".video-frame") : null;

  const openVideo = () => {
    if (!videoModal || !modalFrame) return;
    const id = videoBox.dataset.video;
    const src =
      modalFrame.dataset.src ||
      (id ? "https://www.youtube-nocookie.com/embed/" + id : "");
    modalFrame.src = src + (src.includes("?") ? "&" : "?") + "autoplay=1";
    videoModal.classList.add("open");
    videoModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeVideo = () => {
    if (!videoModal) return;
    videoModal.classList.remove("open");
    videoModal.setAttribute("aria-hidden", "true");
    modalFrame.removeAttribute("src");
    document.body.style.overflow = "";
  };

  videoBox.addEventListener("click", openVideo);
  if (closeBtn) closeBtn.addEventListener("click", closeVideo);
  videoModal.addEventListener("click", (e) => {
    if (e.target === videoModal) closeVideo();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeVideo();
  });
}

// Team swiper + expanding card overlay
const teamSwiperEl = document.querySelector(".team-swiper");
let teamSwiper = null;
if (window.Swiper && teamSwiperEl) {
  teamSwiper = new Swiper(teamSwiperEl, {
    slidesPerView: 1,
    spaceBetween: 18,
    loop: true,
    grabCursor: true,
    pagination: {
      el: teamSwiperEl.querySelector(".swiper-pagination"),
      clickable: true
    },
    navigation: {
      nextEl: teamSwiperEl.querySelector(".team-next"),
      prevEl: teamSwiperEl.querySelector(".team-prev")
    },
    breakpoints: {
      680: { slidesPerView: 2 },
      950: { slidesPerView: 3 }
    }
  });
}

if (teamSwiperEl) {
  const stage = teamSwiperEl.closest(".team-stage");
  const panel = stage ? stage.querySelector(".team-expanded") : null;

  teamSwiperEl.querySelectorAll(".team-card").forEach((card) => {
    const openBtn = card.querySelector(".team-open");

    const open = () => {
      if (!stage || !panel) return;
      const photo = panel.querySelector(".team-expanded-photo");
      const cardPhoto = card.querySelector(".team-photo");
      if (photo && cardPhoto) {
        photo.src = cardPhoto.src;
        photo.alt = cardPhoto.alt;
      }
      const body = panel.querySelector(".team-expanded-body");
      const detail = card.querySelector(".team-detail");
      if (body && detail) {
        body.innerHTML = "";
        const clone = detail.cloneNode(true);
        const insideClose = clone.querySelector(".team-close");
        if (insideClose) insideClose.remove();
        clone.classList.remove("team-detail");
        clone.classList.add("team-detail-panel");
        body.appendChild(clone);
      }
      if (openBtn) openBtn.setAttribute("aria-expanded", "true");
      stage.classList.add("has-open");
      if (teamSwiper) teamSwiper.disable();
      if (window.matchMedia("(max-width: 680px)").matches) {
        document.body.style.overflow = "hidden";
      }
    };

    const close = () => {
      if (openBtn) openBtn.setAttribute("aria-expanded", "false");
      if (stage) stage.classList.remove("has-open");
      document.body.style.overflow = "";
      if (teamSwiper) {
        teamSwiper.update();
        teamSwiper.enable();
      }
    };

    if (openBtn) openBtn.addEventListener("click", open);
    const panelClose = panel ? panel.querySelector(".team-expanded-close") : null;
    if (panelClose) panelClose.addEventListener("click", close);
  });
}

// =========================================================
// STATS COUNT-UP ANIMATION
// =========================================================
const statNumbers = document.querySelectorAll(
  ".stats-section .stat-card strong"
);

if (statNumbers.length && "IntersectionObserver" in window) {
  const parseStat = (raw) => {
    const m = raw.match(/^(\d+(?:[.,]\d+)?)(.*)$/);
    if (!m) return null;
    const sep = m[1].indexOf(",") !== -1 ? "," : ".";
    const decimals = (m[1].split(/[.,]/)[1] || "").length;
    return { value: parseFloat(m[1].replace(",", ".")), suffix: m[2], sep, decimals };
  };

  const formatStat = (num, stat) => {
    const fixed = num.toFixed(stat.decimals);
    const body = stat.decimals ? fixed.replace(".", stat.sep) : String(Math.round(num));
    return body + stat.suffix;
  };

  const countObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const strong = entry.target;
        const stat = parseStat(strong.textContent);
        countObserver.unobserve(strong);
        if (!stat) return;

        const start = performance.now();
        const duration = 1500;
        const step = (now) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          strong.textContent = formatStat(stat.value * eased, stat);
          if (t < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
    },
    { threshold: 0.5 }
  );

  statNumbers.forEach((strong) => countObserver.observe(strong));
}

// =========================================================
// POLICY MODAL (cookies / privacy / terms)
// =========================================================
const policyModal = document.getElementById("policyModal");

if (policyModal) {
  const policyBody = policyModal.querySelector(".policy-modal-body");

  const openPolicyModal = (name) => {
    policyModal.classList.add("open");
    policyModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    const target = document.getElementById("policy-" + name);
    if (target && policyBody) {
      policyBody.scrollTop = target.offsetTop - policyBody.offsetTop - 8;
    }
  };

  const closePolicyModal = () => {
    policyModal.classList.remove("open");
    policyModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  document.querySelectorAll(".footer--policy[data-policy]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      openPolicyModal(link.dataset.policy);
    });
  });

  policyModal.querySelectorAll("[data-policy-close]").forEach((el) => {
    el.addEventListener("click", closePolicyModal);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closePolicyModal();
  });
}