import Link from "next/link";
import { Article } from "../components/article";

export default function SysimustaSatku() {
  return (
    <Article title="Kerkesix ry" coverImage="/assets/feature/campfire.jpg">
      <p>
        Kerkesix ry on monipuolista urheilua ja ulkoilua harrastavien ihmisten
        seura, joka pyrkii kehittämään jäsentensä fyysistä ja henkistä
        hyvinvointia tarjoamalla mahdollisuuksia toteuttaa itseään mukavassa
        seurassa. Tapahtumia järjestetään tai muitten järjestämiin osallistutaan
        sitä mukaan kun aktiivisuutta löytyy.
      </p>

      <h2>Jäseneksi</h2>
      <p>
        Yhdistyksen jäseneksi voi hakea yhdistyksen toiminnan mielekkääksi
        kokeva henkilö kirjallisella, vapaamuotoisella hakemuksella. Uuden
        jäsenen hyväksyminen edellyttää yhdistyksen hallituksen yksimielistä
        päätöstä. Kirjallisen hakemuksen voi toimittaa lähettämällä sähköpostia
        yhdistyksen osoitteeseen. Hallituksen hyväksynnän jälkeen hakija
        vahvistaa jäsenyytensä maksamalla kuluvan vuoden liittymis- ja
        jäsenmaksut yhdistyksen tilille.
      </p>
      <p>
        Kerkesix ry:n jäsen on oikeutettu osallistumaan yhdistyksen järjestämiin
        tapahtumiin, sekä käyttämään yhdistyksen toimintaansa varten hankkimia
        varusteita. Jäsenellä on myös mahdollisuus hankkia yhdistyksen
        verkkotunnuspäätteisen sähköpostiosoitteen.
      </p>
      <Link href="/yhdistyksen-logo">Yhdistyksen logo</Link>
    </Article>
  );
}
