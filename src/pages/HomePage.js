import Page from "./Page";
import style from "./HomePage.module.css";
import LocationIcon from "../assets/images/location.svg";

class HomePage extends Page {
  createReservation = () => {
    const div = document.createElement("div");
    div.className = style.reservation;

    const reserveLink = document.createElement("a");
    reserveLink.href = "#";
    reserveLink.textContent = "Make a reservation";

    const icon = document.createElement("img");
    icon.src = LocationIcon;

    div.append(reserveLink, icon);

    return div;
  };

  createHero = () => {
    const div = document.createElement("div");
    div.className = style.hero;

    const heroContent = document.createElement("div");
    const heroTitle = document.createElement("h1");
    heroTitle.textContent = "- Redclaw -";
    const heroText = document.createElement("p");
    heroText.textContent = '"Where every dish makes waves!" ';

    heroContent.append(heroTitle, heroText);

    div.append(heroContent);

    return div;
  };

  constructor() {
    super({
      name: "home",
      index: true,
      create: () => {
        const page = document.createElement("div");
        page.className = "container page";

        const reservation = this.createReservation();
        const hero = this.createHero();

        page.append(reservation, hero);

        return page;
      },
    });
  }
}

export default HomePage;
