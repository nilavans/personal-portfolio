const DELAY = 325;
const navItems = document.querySelectorAll(".nav-item");
const main = document.querySelector("#main");
const articles = document.querySelectorAll("article");
const header = document.querySelector("#header");
const body = document.querySelector("body");
const socialLinks = document.querySelectorAll(".social-link");

main.style.display = "none";
articles.forEach((article) => (article.style.display = "none"));

window.addEventListener("load", function () {
  setTimeout(() => {
    body.classList.remove("preload");
  }, 100);
});

function showArticle(id) {
  const targetArticle = document.getElementById(id);
  const isAlreadyActive = body.classList.contains("is-article-active");

  articles.forEach((article) => article.classList.remove("active"));

  if (isAlreadyActive) {
    // Switching between articles — header is already hidden, just cross-fade
    setTimeout(() => {
      articles.forEach((article) => (article.style.display = "none"));
      targetArticle.style.display = "";
      setTimeout(() => {
        targetArticle.classList.add("active");
      }, 25);
    }, DELAY);
  } else {
    // Opening from the landing view — animate header out first
    body.classList.add("is-article-active");
    setTimeout(() => {
      header.style.display = "none";
      articles.forEach((article) => (article.style.display = "none"));
      targetArticle.style.display = "";
      main.style.display = "";
      setTimeout(() => {
        targetArticle.classList.add("active");
      }, 25);
    }, DELAY);
  }
}

function hideArticles() {
  articles.forEach((article) => article.classList.remove("active"));
  setTimeout(() => {
    main.style.display = "none";
    articles.forEach((article) => (article.style.display = "none"));
    header.style.display = "";
    setTimeout(() => {
      body.classList.remove("is-article-active");
    }, 25);
  }, DELAY);
}

navItems.forEach((item) => {
  item.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    const id = this.getAttribute("href").substring(1);
    showArticle(id);
  });
});

document.querySelectorAll(".close").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    hideArticles();
  });
});

socialLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});

body.addEventListener("click", function (e) {
  if (!main.contains(e.target) && !e.target.closest("nav")) {
    hideArticles();
  }
});
