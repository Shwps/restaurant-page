import CatImage from "./assets/images/black-cat-illustration.png";

let pageLoad = () => {
  const content = document.getElementById("content");
  const header = document.createElement("header");
  const logoCon = document.createElement("div");
  const logoText = document.createElement("h1");
  const logo = document.createElement("img");
  const nav = document.createElement("nav");
  const container = document.createElement("div");

  logoText.textContent = "Kuroneko Sushi";
  logoCon.classList.add("logoCon");

  logoCon.appendChild(logo);
  logoCon.appendChild(logoText);
  logo.src = CatImage;
  logo.classList.add("logo");

  let homeNav = document.createElement("a"),
    menuNav = document.createElement("a"),
    contactNav = document.createElement("a");
  let navLinks = [homeNav, menuNav, contactNav];

  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.add("header-nav-item");
  }

  homeNav.textContent = "Home";
  homeNav.classList.add("home-nav-btn");
  menuNav.textContent = "Menu";
  menuNav.classList.add("menu-nav-btn");
  contactNav.textContent = "Contact";
  contactNav.classList.add("contact-nav-btn");

  nav.appendChild(homeNav);
  nav.appendChild(menuNav);
  nav.appendChild(contactNav);

  header.appendChild(logoCon);
  header.appendChild(nav);

  container.classList.add("container");

  content.appendChild(container);
  content.appendChild(header);
  content.appendChild(container);
};

export default pageLoad;
