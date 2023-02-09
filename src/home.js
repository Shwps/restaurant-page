import Icon from "./assets/images/sushi-img.jpg";
import "./style.css";

let home = () => {
  const main = document.createElement("main");
  const container = document.querySelector(".container");
  const content = document.getElementById("content");

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  const homeHeader = document.createElement("h2");
  homeHeader.textContent = "We have the best sushi in town";

  const homeImage = new Image();
  homeImage.classList.add("home-image");
  homeImage.src = Icon;

  const paragraph = document.createElement("p");
  paragraph.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat nibh id suscipit feugiat. Proin imperdiet, tellus ut convallis mollis, odio ipsum viverra nisl, at vehicula nisl purus nec metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. In ipsum tellus, ullamcorper nec semper eu, facilisis in nibh. Mauris velit metus, molestie nec leo quis, lobortis finibus felis. Curabitur vel tortor finibus, rutrum libero vitae, auctor tellus. Fusce eget malesuada neque.";

  main.appendChild(homeHeader);
  main.appendChild(homeImage);
  main.appendChild(paragraph);

  container.appendChild(main);
};

export default home;
