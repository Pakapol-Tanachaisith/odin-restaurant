import Page from "./Page";
import style from "./AboutPage.module.css";

class AboutPage extends Page {
  constructor() {
    super({
      name: "about",
      create: () => {
        const page = document.createElement("div");

        const title = document.createElement("h1");
        title.textContent = "About Page";
        title.className = style.title;

        page.append(title);

        return page;
      },
    });
  }
}

export default AboutPage;
