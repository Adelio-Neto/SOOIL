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
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    navigation: {
      nextEl: document.querySelector(".team-next"),
      prevEl: document.querySelector(".team-prev")
    },
    breakpoints: {
      680: { slidesPerView: 2 },
      1080: { slidesPerView: 3 }
    }
  });
}

// Sector swiper (what-we-do)
const sectorSwiperEl = document.querySelector(".sector-swiper");
if (window.Swiper && sectorSwiperEl) {
  new Swiper(sectorSwiperEl, {
    slidesPerView: 1,
    spaceBetween: 28,
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 3200,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    breakpoints: {
      680: { slidesPerView: 1 },
      950: { slidesPerView: 2 }
    }
  });
}

// Investor logo swiper (index)
const investorSwiperEl = document.querySelector(".investor-swiper");
if (window.Swiper && investorSwiperEl) {
  new Swiper(investorSwiperEl, {
    slidesPerView: 2,
    spaceBetween: 14,
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 2600,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    breakpoints: {
      480: { slidesPerView: 3 },
      760: { slidesPerView: 4 },
      1100: { slidesPerView: 5 }
    }
  });
}

if (teamSwiperEl) {
  const modalEl = document.getElementById("teamModal");

  const fillTeamModal = (card) => {
    if (!modalEl || !card) return;
    const photo = modalEl.querySelector(".team-expanded-photo");
    const cardPhoto = card.querySelector(".team-photo");
    if (photo && cardPhoto) {
      photo.src = cardPhoto.src;
      photo.alt = cardPhoto.alt;
    }
    const body = modalEl.querySelector(".team-expanded-body");
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
  };

  let wired = false;
  const wireModal = () => {
    if (wired || !modalEl || !window.bootstrap) return;
    wired = true;
    bootstrap.Modal.getOrCreateInstance(modalEl);
    modalEl.addEventListener("show.bs.modal", (e) => {
      const trigger = e.relatedTarget || modalEl;
      const card = trigger && trigger.closest ? trigger.closest(".team-card") : null;
      fillTeamModal(card);
      if (teamSwiper) teamSwiper.disable();
    });
    modalEl.addEventListener("hidden.bs.modal", () => {
      const stage = teamSwiperEl.closest(".team-stage");
      if (stage) {
        stage.querySelectorAll(".team-toggle, .team-more").forEach((b) => {
          b.setAttribute("aria-expanded", "false");
        });
      }
      if (teamSwiper) {
        teamSwiper.update();
        teamSwiper.enable();
      }
    });
  };

  if (window.bootstrap) {
    wireModal();
  } else {
    const retryModal = setInterval(() => {
      if (window.bootstrap) {
        clearInterval(retryModal);
        wireModal();
      }
    }, 150);
    window.addEventListener("load", wireModal);
  }
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