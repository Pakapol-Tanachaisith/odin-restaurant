import Page from "./Page";
import style from "./HomePage.module.css";

class HomePage extends Page {
  constructor() {
    super({
      name: "home",
      index: true,
      create: () => {
        const page = document.createElement("div");

        const title = document.createElement("h1");
        title.textContent = "Home Page";
        title.className = style.title;

        page.append(title);

        return page;
      },
    });
  }
}

export default HomePage;
