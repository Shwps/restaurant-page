import "./style.css";
import home from "./home";
import menu from "./menu";
import contact from "./contact";
import pageLoad from "./pageload";

pageLoad();

const homeBtn = document.querySelector(".home-nav-btn");
const menuBtn = document.querySelector(".menu-nav-btn");
const contactBtn = document.querySelector(".contact-nav-btn");

homeBtn.addEventListener("click", home);
menuBtn.addEventListener("click", menu);
contactBtn.addEventListener("click", contact);

home();
