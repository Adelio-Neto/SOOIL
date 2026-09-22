(() => {
  const pillars = Array.from(document.querySelectorAll(".sustainability-pillar"));
  const title = document.getElementById("sustainabilityTitle");
  const description = document.getElementById("sustainabilityDescription");
  const image = document.getElementById("sustainabilityFeatureImage");

  if (!pillars.length || !title || !description || !image) return;

  const mobileView = window.matchMedia("(max-width: 768px)");

  const showPillar = (index) => {
    const pillar = pillars[index];
    if (!pillar) return;

    title.textContent = pillar.dataset.title;
    description.textContent = pillar.dataset.description;

    image.src = pillar.dataset.image;
    image.alt = pillar.dataset.imageAlt;

    pillars.forEach((item, itemIndex) => {
      const isActive = itemIndex === index;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-current", String(isActive));
    });
  };

  const updateModalBehaviour = () => {
    document.querySelectorAll(".sustainability-pillar .sector-more").forEach((button) => {
      if (mobileView.matches) {
        button.setAttribute("data-bs-toggle", "modal");
        button.setAttribute("data-bs-target", "#sectorModal");
      } else {
        button.removeAttribute("data-bs-toggle");
        button.removeAttribute("data-bs-target");
      }
    });
  };

  updateModalBehaviour();
  mobileView.addEventListener("change", updateModalBehaviour);

  pillars.forEach((pillar, index) => {
    pillar.addEventListener("click", (event) => {
      const learnMore = event.target.closest(".sector-more");
      if (learnMore && mobileView.matches) return;

      // Em desktop o botão atualiza o conteúdo apresentado no topo, sem modal.
      if (learnMore) {
        event.preventDefault();
        event.stopPropagation();
      }
      showPillar(index);
    });

    pillar.addEventListener("keydown", (event) => {
      if (event.target.closest(".sector-more")) return;
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      showPillar(index);
    });
  });
})();
