import Page from "./Page";
import style from "./MenuPage.module.css";

class MenuPage extends Page {
  constructor() {
    super({
      name: "menu",
      create: () => {
        const page = document.createElement("div");

        const title = document.createElement("h1");
        title.textContent = "Menu Page";
        title.className = style.title;

        page.append(title);

        return page;
      },
    });
  }
}

export default MenuPage;
