import Link from "next/link";
import { Article } from "../components/article";

export default function SysimustaSatku() {
  return (
    <Article title="Kerkesix ry">
      <p>
        Logon muoto sekä värimaailma on määritelty ja näillä perusteilla on
        erilaiseen käyttöön luotu vaihtoehtoisia tunnuksia. Ohessa on esitelty
        viralliset logot. Kuvaa klikkaamalla saat näkyviin suuremman version
        kyseisestä logosta.
      </p>
      <p>
        Logon tekstien fontti on Arial Black ja kokosuhteet ovat mitattu
        korkeuden mukaan. KSX-tekstin korkeus on 35 yksikköä ja Kerkesix ry
        -tekstin korkeus on 10 yksikköä. Tekstin korkeus mitataan ison kirjaimen
        korkeudesta, mittaan ei huomioida mahdollisia kirjaimen ylle lisättäviä
        merkkejä (esim. Ä:n ja Ö:n pisteet). KSX- tekstin yläreunasta
        kohtisuoraan yläreunukseen mitattu etäisyys on 10 yksikköä samoin kuin
        etäisyys äärimmäisestä sivusta sivureunukseen. Kerkesix ry -teksti on
        keskitetty horisontaalisesti KSX-tekstin keskelle.
      </p>
      <p>
        KSX- ja Kerkesix ry -tekstien väli on 5 yksikköä ja väli Kerkesix ry
        -tekstin alareunasta alareunukseen on 10 yksikköä. Reunuksen paksuus on
        1 yksikkö.
      </p>
      <p>Ohessa viralliset Kerkesix-värit:</p>
      <dl>
        <dt>oranssi</dt>
        <dd>Pantone (PMS 1375) RGB (R=250 G=158 B=13)</dd>
        <dt>harmaa</dt>
        <dd>Pantone (PMS 7457) RGB (R=214 G=227 B=230)</dd>
        <dt>musta</dt>
        <dd>Pantone (Skin Tone 30) RGB (R=0 G=0 B=0)</dd>
      </dl>
      <p>
        Mustalla reunuksella rajattu harmaalla pohjalla oleva musta KSX-teksti,
        jonka s-kirjain on väritetty oranssiksi:
      </p>
      <img
        src="/assets/blog/yhdistyksen-logo/ker_mure_hapo_ors.jpg"
        alt="Värillinen logo"
      />
      <p>KSX-logon mitat:</p>
      <img src="/assets/blog/yhdistyksen-logo/mitat.jpg" alt="Logon mitat" />
    </Article>
  );
}
