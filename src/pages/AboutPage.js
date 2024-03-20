import Page from "./Page";
import style from "./AboutPage.module.css";

class AboutPage extends Page {
  constructor() {
    super({
      name: "about",
      create: () => {
        const page = document.createElement("div");
        page.className = style.page;

        const info = document.createElement("div");
        info.className = style.info;
        info.innerHTML = `
        <h1 class="${style.title}">Contact Up</h1>
        <p>We love hearing from our Guests! Let us know how we can help.</p>
        <br>
        <p>Tel: 555-555-5554</p>
        <p>totallyRealEmail@notFake.com</p>
        `;

        page.append(info);

        return page;
      },
    });
  }
}

export default AboutPage;
