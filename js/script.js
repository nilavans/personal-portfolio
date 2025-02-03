const DELAY = 325;
const navItems = document.querySelectorAll(".nav-item");
const main = document.querySelector("#main");
const articles = document.querySelectorAll("article");
const header = document.querySelector("#header");
const body = document.querySelector("body");
const socialLinks = document.querySelectorAll(".social-link");
main.style.display = "none";

window.addEventListener("load", function (event) {
  setTimeout(() => {
    body.classList.remove("preload"); // Remove preload after timeout
  }, 100);
});

function activateArticle(event) {
  event.preventDefault();
  event.stopPropagation();

  articles.forEach((article) => {
    article.classList.remove("active");
    article.style.display = "none";
  });

  const id = this.getAttribute("href").substring(1);
  const targetArticle = document.getElementById(id);

  body.classList.add("is-article-active");
  setTimeout(() => {
    header.style.display = "none";
    setTimeout(() => {
      targetArticle.classList.add("active");
      targetArticle.style.display = "";
      main.style.display = "";
    }, 25);
  }, DELAY);

  const closeBtn = document.createElement("div");
  closeBtn.classList.add("close");
  closeBtn.textContent = "Close";
  targetArticle.appendChild(closeBtn);

  closeBtn.addEventListener("click", function (e) {
    articles.forEach((article) => article.classList.remove("active"));
    setTimeout(() => {
      main.style.display = "none";
      header.style.display = "";
      setTimeout(() => {
        body.classList.remove("is-article-active");
      }, 25);
    }, DELAY);
  });
}

navItems.forEach((item) => {
  item.addEventListener("click", activateArticle);
});

socialLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent event bubbling
  });
});

body.addEventListener("click", function (e) {
  if (!main.contains(e.target) & !e.target.closest("nav")) {
    articles.forEach((article) => article.classList.remove("active"));
    setTimeout(() => {
      main.style.display = "none";
      header.style.display = "";
      setTimeout(() => {
        body.classList.remove("is-article-active");
      }, 25);
    }, DELAY);
  }
});
