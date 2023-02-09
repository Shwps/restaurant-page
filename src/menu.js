let menu = () => {
  const main = document.createElement("main");
  const container = document.querySelector(".container");
  const content = document.getElementById("content");

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  main.innerHTML = `<div class="menu">
    <span class="menu-heading">Sushi Mix</span>
    <span class="menu-heading">Maki</span>
    <div class="left menu-column">
      <div class="menu-item">
        <span class="item-name">Sushi Mix 6pcs</span
        ><span class="price">69kr</span
        ><span class="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
      </div>
      <div class="menu-item">
        <span class="item-name">Sushi Mix 8pcs</span
        ><span class="price">89kr</span
        ><span class="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
      </div>
      <div class="menu-item">
        <span class="item-name">Sushi Mix 10pcs</span
        ><span class="price">109kr</span
        ><span class="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
      </div>
      <div class="menu-item">
        <span class="item-name">Sushi Mix 12pcs</span
        ><span class="price">129kr</span
        ><span class="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
      </div>
      <div class="menu-item">
        <span class="item-name">Sushi Mix 14pcs</span
        ><span class="price">149kr</span
        ><span class="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
      </div>
      <div class="menu-item">
        <span class="item-name">Sushi Mix 16pcs</span
        ><span class="price">169kr</span
        ><span class="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
      </div>
    </div>
    <div class="divider"></div>
    <div class="right menu-column">
      <div class="menu-item">
        <span class="item-name">Tempura Roll</span
        ><span class="price">129kr</span
        ><span class="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
      </div>
      <div class="menu-item">
        <span class="item-name">California Roll</span
        ><span class="price">139kr</span
        ><span class="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
      </div>
      <div class="menu-item">
        <span class="item-name">Spicy Tuna roll</span
        ><span class="price">149kr</span
        ><span class="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
      </div>
      <div class="menu-item">
        <span class="item-name">Twister roll</span
        ><span class="price">129kr</span
        ><span class="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
      </div>
      <div class="menu-item">
        <span class="item-name">Karaage Maki Roll</span
        ><span class="price">129kr</span
        ><span class="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
      </div>
      <div class="menu-item">
        <span class="item-name">Fried Spicy Roll</span
        ><span class="price">159kr</span
        ><span class="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
      </div>
    </div>
  </div>`;

  container.appendChild(main);
};

export default menu;
