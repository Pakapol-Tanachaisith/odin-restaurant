import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";

class App {
  #container = document.querySelector("#content");

  #pages = [new HomePage(), new MenuPage(), new AboutPage()];

  init = () => {
    const defaultPage = this.#pages.find((item) => item.index) || this.pages[0];
    this.#container.appendChild(defaultPage.create());
  };
}

export default new App();
