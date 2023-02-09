import AdressIcon from "./assets/images/map-marker.svg";
import PhoneIcon from "./assets/images/phone-classic.svg";
import ClockIcon from "./assets/images/clock-time-four.svg";
import EmailIcon from "./assets/images/email.svg";
import InstagramIcon from "./assets/images/instagram.svg";
import FacebookIcon from "./assets/images/facebook.svg";


let contact = () => {
  const main = document.createElement("main");
  const container = document.querySelector(".container");
  const content = document.getElementById("content");

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  main.innerHTML = `<a href="https://en.wikipedia.org/wiki/Map" class="contact-element adress"> <img src="assets/images/map-marker.svg" alt="" class="contact-item-icon">Sushi Street 4, Town, Country </a>
  <a href="https://dayspedia.com/time/online/" class="contact-element clock"> <img src="assets/images/clock-time-four.svg" alt="" class="contact-item-icon">10:00 - 22:00</a>
  <a href="https://en.wikipedia.org/wiki/Mobile_phone" class="contact-element phone-num"> <img src="assets/images/phone-classic.svg" alt="" class="contact-item-icon">+0123456789</a>
  <a href="https://en.wikipedia.org/wiki/Email" class="contact-element email"> <img src="assets/images/email.svg" alt="" class="contact-item-icon"> info@kuronekosushi.com</a>
  <a href="https://en.wikipedia.org/wiki/Instagram" class="contact-element instagram"> <img src="assets/images/instagram.svg" alt="" class="contact-item-icon"> Kuroneko Sushi</a>
  <a href="https://en.wikipedia.org/wiki/Facebook" class="contact-element facebook"> <img src="assets/images/facebook.svg" alt="" class="contact-item-icon"> Kuroneko Sushi</a>`;

  container.appendChild(main);
};

export default contact;
