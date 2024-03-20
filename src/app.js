import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";

import Logo from "./assets/images/logo.svg";

class App {
  #container = document.querySelector("#content");
  #navButtons = document.querySelectorAll("nav > button");
  #pages = [new HomePage(), new MenuPage(), new AboutPage()];

  clearContainer = () => {
    const container = this.#container;

    while (container.lastElementChild) {
      container.removeChild(container.lastElementChild);
    }
  };

  navigate = (pageName) => {
    const to = this.#pages.find((item) => item.name === pageName);

    this.clearContainer();
    this.#container.appendChild(to.create());
  };

  attachNavListener = () => {
    this.#navButtons.forEach((item) => {
      item.addEventListener("click", (e) => {
        this.navigate(e.currentTarget.dataset.pageName);
      });
    });
  };

  init = () => {
    this.attachNavListener();

    const logo = document.querySelector("img#logo");
    logo.src = Logo;

    const defaultPage = this.#pages.find((item) => item.index) || this.pages[0];
    this.#container.appendChild(new MenuPage().create());
  };
}

export default new App();
