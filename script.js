// =========================================================
// INTERAÇÕES DA PÁGINA
// =========================================================

const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");
const backTop = document.getElementById("backTop");
const videoBox = document.getElementById("videoBox");

// Menu mobile
menuBtn.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", isOpen);
});

// Fecha o menu ao selecionar uma secção
mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// Botão voltar ao topo
window.addEventListener("scroll", () => {
  backTop.classList.toggle("show", window.scrollY > 650);
});

backTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Demonstração de interação para o bloco de vídeo
videoBox.addEventListener("click", () => {
  videoBox.classList.toggle("playing");
  const label = videoBox.querySelector("span");

  if (videoBox.classList.contains("playing")) {
    label.textContent = "Vídeo em reprodução";
  } else {
    label.textContent = "Vídeo";
  }
});

// Pequena animação de entrada ao aparecer no viewport
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.animate(
          [
            { opacity: 0, transform: "translateY(18px)" },
            { opacity: 1, transform: "translateY(0)" }
          ],
          {
            duration: 550,
            easing: "ease-out",
            fill: "forwards"
          }
        );
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document
  .querySelectorAll(".media-card, .news-card, .stat-card, .bento-card, .people-grid article")
  .forEach((element) => observer.observe(element));
