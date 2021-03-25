import Link from "next/link";
import { Article } from "../components/article";

export default function SysimustaSatku() {
  return (
    <Article
      title="Sysimusta Satku"
      coverImage="/assets/feature/sysimusta-satku.jpg"
    >
      <p>
        Sysimusta Satku on reipashenkinen kävelymaaottelu omaa pahaa mieltä
        vastaan, jossa jokaisella on mahdollisuus voittaa itsensä. Tarkoituksena
        on kulkea jalan 100 km:n matka vuorokauden aikana ohjeistettua reittiä
        pitkin. Satku on parhaimmillaan matkantekoa hyvässä seurassa.
      </p>
      <p>
        Sysimusta Satku järjestetään vuosittain lokakuun lopulla. Seuraava
        Sysimusta Satku XVI kävellään 4.-5.11.2017. Ilmoittautuminen aukeaa
        15.8.2017 kello 00.00 osoitteessa{" "}
        <a href="https://ilmo.kerkesix.fi/satkuxvi">
          ilmo.kerkesix.fi/satkuxvi
        </a>
      </p>
      <p>
        Tapahtuma on huollettu ja tarkemmat huolto-ohjeet osallistuja saa
        ilmoittautumisen jälkeen. Huolto perustuu huoltopisteisiin, joita on
        matkan varrella 10 - 15 km välein. Kannattaa kuitenkin varautua
        kuljettamaan tarpeelliseksi katsomiansa varusteita, juomaa ja ravintoa
        repussa huoltopisteiden välillä.
      </p>
      <img
        className="my-4 rounded"
        src="/assets/sysimusta-satku/satkuVI1.jpg"
      />
      <p>
        Sysimustan Satkun reitti on rengasreitti, joten aloitus ja lopetus ovat
        samassa paikassa Espoon Kivenlahdessa. Reittiä ei ole merkitty maastoon,
        vaan kävelijät saavat kartan ja kirjallisen reittiohjeen, joiden avulla
        löytää perille. Pysyäkseen reitillä ei osallistujan tarvitse olla
        suunnistaja, mutta perustaito kartanluvusta on hallittava. Tapahtumaan
        osallistuminen edellyttää siis kykyä kulkea peruskartan avulla tieuria
        pitkin. Reitistä saa toki neuvoja matkan varrella olevilta
        huoltopisteiltä. Reitin pohja on suurimmaksi osaksi kestopäällystettyä
        tietä, joka ei ole jalkojen kannalta pehmein vaihtoehto. Toisaalta ei
        Sysimustan Satkun ole tarkoituskaan olla helppoa.
      </p>
      <p>
        Sysimusta Satku on mielenkiintoinen kokemus, jonka läpäisy riippuu
        monista tekijöistä. Ei riitä, että on rautaisen kovassa kunnossa, sillä
        esimerkiksi pieni hiertymä saattaa kumuloida vaikutuksensa matkan aikana
        ja matka voi keskeytyä vaikka voimaa olisikin vielä jatkaa. Toisaalta
        läpäisyyn ei tarvita huippu-urheilijan kuntoa, sillä 24 tuntia on
        riittävä aika kulkea 100 km:n matka myös rauhallisesti. Sopiva vauhti ja
        itsestään ja kavereista huolehtiminen matkan aikana antaa hyvän
        tuloksen.
      </p>
      <img
        className="my-4 rounded"
        src="/assets/sysimusta-satku/satkuVII1.jpg"
      />
      <p>
        Rationaalisesti ajatellen Sysimusta Satku on pahimman luokan
        ajantuhlausta, jossa ei ole pienintäkään järjen hiventä. Kuitenkin jokin
        saa ihmiset palaamaan yhä uudestaan samalle uralle tutustumaan omiin
        rajoihinsa.
      </p>
      <h4>Lisää artikkeleita aiheesta:</h4>
      <ul>
        <li>
          <Link href="/sysimusta-satku-ohje">
            Ohjeita Sysimustalle Satkulle aikovalle
          </Link>
        </li>
        <li>
          <Link href="/sysimusta-satku-varustelistaesimerkki">
            Varustelistaesimerkki
          </Link>
        </li>
        <li>
          <Link href="/kokemuksia-ja-vinkkeja-sysimustalta-satkulta">
            Kokemuksia ja vinkkejä aiemmilta kävelijöiltä
          </Link>
        </li>
        <li>
          <Link href="/satku-suomi-sanakirja">Satku-Suomi -sanakirja</Link>
        </li>
      </ul>
    </Article>
  );
}
