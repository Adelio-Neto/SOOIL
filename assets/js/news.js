// =========================================================
// NEWS-DETAILS — JSON DRIVEN
// Carrega assets/data/news.json, renderiza o artigo a partir
// do ?id= e filtra as restantes notícias (aside + relacionadas).
// Nas relacionadas, clicar num card atualiza o artigo em cima
// (detalhe completo + imagem), sem sair da página.
// =========================================================

(function () {
  var params = new URLSearchParams(window.location.search);
  var currentId = params.get("id") || "bfa-stock-exchange";

  var heroImg = document.getElementById("articleHeroImg");
  var heroEyebrow = document.getElementById("articleHeroEyebrow");
  var heroTitle = document.getElementById("articleHeroTitle");
  var metaEyebrow = document.getElementById("articleMetaEyebrow");
  var metaTime = document.getElementById("articleMetaTime");
  var bodyWrap = document.getElementById("articleBody");
  var asideList = document.getElementById("articleAsideList");
  var relatedGrid = document.getElementById("relatedGrid");
  var filterInput = document.getElementById("newsFilterInput");
  var filterList = document.getElementById("newsFilterList");
  var filterEmpty = document.getElementById("newsFilterEmpty");
  var newsGrid = document.getElementById("newsPageGrid");

  var allNews = [];

  if (!bodyWrap && !newsGrid) return;

  function esc(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderBody(article) {
    var html = '<p class="lead">' + esc(article.lead) + "</p>";
    article.body.forEach(function (block) {
      if (block.type === "p") {
        html += "<p>" + esc(block.text) + "</p>";
      } else if (block.type === "h2") {
        html += "<h2>" + esc(block.text) + "</h2>";
      } else if (block.type === "quote") {
        html +=
          '<blockquote class="article-quote"><p>' +
          esc(block.text) +
          "</p></blockquote>";
      } else if (block.type === "figure") {
        html +=
          '<figure class="article-figure"><img src="' +
          esc(block.src) +
          '" alt="' +
          esc(block.alt) +
          '" /><figcaption>' +
          esc(block.caption) +
          "</figcaption></figure>";
      }
    });
    return html;
  }

  function renderOthers(others) {
    if (asideList) {
      asideList.innerHTML = others
        .slice(0, 3)
        .map(
          function (n) {
            return (
              '<a href="news-details.html?id=' +
              esc(n.id) +
              '" data-switch="' +
              esc(n.id) +
              '">' +
              esc(n.title) +
              "</a>"
            );
          }
        )
        .join("");
    }

    if (relatedGrid) {
      relatedGrid.innerHTML = others
        .slice(0, 3)
        .map(
          function (n) {
            return (
              '<div class="swiper-slide"><article class="news-card"><img class="news-cover" src="' +
              esc(n.image) +
              '" alt="' +
              esc(n.imageAlt || n.title) +
              '" /><p class="eyebrow">' +
              esc(n.eyebrow) +
              "</p><h3>" +
              esc(n.title) +
              '</h3><a class="icon-round" href="news-details.html?id=' +
              esc(n.id) +
              '" data-switch="' +
              esc(n.id) +
              '" aria-label="Read article">↗</a></article></div>'
            );
          }
        )
        .join("");
      initRelatedSwiper();
    }
  }

  function initRelatedSwiper() {
    var el = document.querySelector(".related-swiper");
    if (!el || typeof window.Swiper === "undefined") return;
    if (window.__relatedSwiper) window.__relatedSwiper.destroy(true, true);
    window.__relatedSwiper = new Swiper(el, {
      slidesPerView: 1.15,
      spaceBetween: 14,
      pagination: {
        el: ".related-pagination",
        clickable: true
      },
      breakpoints: {
        560: { slidesPerView: 2 },
        900: { slidesPerView: 3 }
      }
    });
  }

  function renderFilterList(others) {
    if (!filterList) return;
    filterList.innerHTML = others
      .map(function (n) {
        return (
          '<a href="news-details.html?id=' +
          esc(n.id) +
          '" data-switch="' +
          esc(n.id) +
          '" data-title="' +
          esc(n.title.toLowerCase()) +
          '"><span class="news-filter-thumb"><img src="' +
          esc(n.image) +
          '" alt="" /></span><span class="news-filter-title">' +
          esc(n.title) +
          "</span></a>"
        );
      })
      .join("");
    if (filterEmpty) filterEmpty.hidden = true;
  }

  function renderNewsGrid(list) {
    if (!newsGrid) return;
    newsGrid.innerHTML = list
      .map(function (n, i) {
        return (
          '<article class="news-card' +
          (i === 0 ? " featured" : "") +
          '" data-aos="fade-up"><img class="news-cover" src="' +
          esc(n.image) +
          '" alt="' +
          esc(n.imageAlt || n.title) +
          '" /><p class="eyebrow">' +
          esc(n.eyebrow) +
          "</p><h3>" +
          esc(n.title) +
          '</h3><a class="icon-round" href="news-details.html?id=' +
          esc(n.id) +
          '" aria-label="Read article">↗</a></article>'
        );
      })
      .join("");
    if (typeof window.AOS === "object") window.AOS.refreshHard();
    if (typeof window.setLanguage === "function" && window.currentLang) {
      window.setLanguage(window.currentLang);
    }
  }

  function runFilter() {
    if (!filterInput || !filterList || !filterEmpty) return;
    var q = filterInput.value.trim().toLowerCase();
    var found = 0;
    filterList
      .querySelectorAll("a")
      .forEach(function (a) {
        var match = a.dataset.title && a.dataset.title.indexOf(q) !== -1;
        a.style.display = match ? "" : "none";
        if (match) found++;
      });
    filterEmpty.hidden = found !== 0;
  }

  function render(article, others) {
    if (heroImg) {
      heroImg.src = article.image;
      heroImg.alt = article.imageAlt || article.title;
    }
    if (heroEyebrow) heroEyebrow.textContent = article.eyebrow;
    if (heroTitle) heroTitle.textContent = article.title;
    if (metaEyebrow) metaEyebrow.textContent = article.eyebrow;
    if (metaTime) metaTime.textContent = article.date;
    if (bodyWrap) bodyWrap.innerHTML = renderBody(article);
    renderOthers(others);
    renderFilterList(others);
    if (filterInput) filterInput.value = "";
    runFilter();

    document.title = article.title + " — Sooil Services";
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", article.description || article.lead);

    // Re-aplica as traduções aos novos conteúdos (rótulos presentes no dicionário)
    if (typeof window.setLanguage === "function" && window.currentLang) {
      window.setLanguage(window.currentLang);
    }
  }

  function selectArticle(id) {
    if (!allNews.length) return;
    var current = allNews.filter(function (n) {
      return n.id === id;
    })[0];
    if (!current) return;
    var others = allNews.filter(function (n) {
      return n.id !== current.id;
    });
    render(current, others);
    try {
      history.pushState(
        { id: current.id },
        "",
        "news-details.html?id=" + current.id
      );
    } catch (e) {
      /* ignore */
    }
    var target = document.getElementById("articleMain") || document.querySelector("main");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  // Clicar numa notícia (relacionadas / aside / filtro) atualiza o artigo em cima
  document.addEventListener("click", function (e) {
    var a = e.target.closest("a[data-switch]");
    if (!a) return;
    e.preventDefault();
    selectArticle(a.getAttribute("data-switch"));
  });

  // Voltar / avançar do navegador
  window.addEventListener("popstate", function () {
    var id = new URLSearchParams(window.location.search).get("id");
    if (id) selectArticle(id);
  });

  fetch("assets/data/news.json", { cache: "no-store" })
    .then(function (res) {
      if (!res.ok) throw new Error("HTTP " + res.status);
      return res.json();
    })
    .then(function (list) {
      if (!Array.isArray(list) || list.length === 0) return;
      allNews = list;
      if (newsGrid) {
        renderNewsGrid(list);
        return;
      }
      var current = list.filter(function (n) {
        return n.id === currentId;
      })[0];
      if (!current) current = list[0];
      var others = list.filter(function (n) {
        return n.id !== current.id;
      });
      render(current, others);
    })
    .catch(function () {
      // Mantém o conteúdo estático da página como fallback
    });

  if (filterInput) {
    filterInput.addEventListener("input", runFilter);
  }
})();