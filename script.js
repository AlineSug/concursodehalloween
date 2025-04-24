let lastIndex = 0;
let images = document.querySelectorAll(".container img");
images.forEach((item, index) => {
  document
    .querySelectorAll(".bullet-single")
    [index].addEventListener("click", () => {
      let lastImage = document.querySelectorAll(".container img")[lastIndex];
      let actualImage = document.querySelectorAll(".container img")[index];

      //Resetando os bullets
      document
        .querySelectorAll(".bullet-single")
        [lastIndex].classList.remove("active-bullet");
      document
        .querySelectorAll(".bullet-single")
        [index].classList.add("active-bullet");
      lastIndex = index;

      lastImage.style.opacity = 0;
      actualImage.style.opacity = 1;
    });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

document.querySelectorAll(".box").forEach((el) => observer.observe(el));

const observers = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("shows");
    } else {
      entry.target.classList.remove("shows");
    }
  });
});

document.querySelectorAll(".box2").forEach((eli) => observers.observe(eli));

function mostrarImagem(imagemClicada) {
  const previewDiv = document.getElementById("preview");
  previewDiv.innerHTML = `<img src= "${imagemClicada.src}" alt="Imagem ampliada">`;
}

document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    document.querySelectorAll("section").forEach((section) => {
      section.style.display = "none";
    });

    targetSection.style.display = "block";

    window.scrollTo({
      top: targetSection.offsetTop - 100,
      behavior: "smooth",
    });
  });
});

const menu = document.querySelectorAll("nav a");
menu.forEach((options) => {
  options.addEventListener("click", (event) => {
    const links = options.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        console.log(`clicked link: ${link.textContent}`);
      });
    });
  });
});
