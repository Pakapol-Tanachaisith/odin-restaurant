import Page from "./Page";
import style from "./MenuPage.module.css";

import BoiledSeafood from "../assets/images/boiled-seafood.jpg";
import Calamari from "../assets/images/calamari.jpg";
import Lobster from "../assets/images/lobster-special.jpg";

class MenuPage extends Page {
  createTitle = () => {
    const title = document.createElement("h1");
    title.textContent = "- Menu -";
    title.className = style.title;

    return title;
  };

  createMenuItem = ({ title, desc, price, img }) => {
    const card = document.createElement("div");
    card.className = style.card;

    const cardImg = document.createElement("img");
    cardImg.src = img;

    const cardContent = document.createElement("div");
    cardContent.className = style.content;
    cardContent.innerHTML = `<h2>${title}</h2>
    <p class="${style.desc}">${desc}</p>
    <p class="${style.price}">$ ${price}</p>
    `;

    card.append(cardImg, cardContent);

    return card;
  };

  createMenu = () => {
    const menu = document.createElement("div");
    menu.className = style.menu;

    const item1 = this.createMenuItem({
      title: "Seafood Boiled",
      desc: "Fresh, delicious, classic seafood boiled.",
      price: 11.99,
      img: BoiledSeafood,
    });

    const item2 = this.createMenuItem({
      title: "Fried Calamari",
      price: 10.99,
      desc: "Freshly fried calamari.",
      img: Calamari,
    });

    const item3 = this.createMenuItem({
      title: "Lobster Special",
      price: 30.99,
      desc: "Freshly caught lobster grilled to perfection with garlic and pepper.",
      img: Lobster,
    });

    menu.append(item1, item2, item3);

    return menu;
  };

  constructor() {
    super({
      name: "menu",
      create: () => {
        const page = document.createElement("div");
        page.className = style.page;

        const title = this.createTitle();
        const menu = this.createMenu();

        page.append(title, menu);

        return page;
      },
    });
  }
}

export default MenuPage;
