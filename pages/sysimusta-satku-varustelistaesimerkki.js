import Link from "next/link";
import { Article } from "../components/article";

export default function SysimustaSatkuVarustelista() {
  return (
    <Article title="Sysimusta Satku - varustelistaesimerkki">
      <h2>Varusteet päällä</h2>

      <ul className="list-disc">
        <li>heijastinliivi</li>
        <li>kalsarit mallia urheilu (ei siis ihan välttämättä puuvillaa)</li>
        <li>kosteutta siirtävä alusasu</li>
        <li>liner-sukat</li>
        <li>ja toiset (liner-)sukat päällä</li>
        <li>ulkohousut (voi olla vaikka mallia trikoot)</li>
        <li>paita</li>
        <li>hikoiluun sopiva päähine</li>
        <li>hyvällä vaimennuksella varustetut kengät</li>
        <li>selässä pikkureppu</li>
        <li>valaisin (otsalamppu on suositeltava)</li>
      </ul>

      <h2>Pikkurepussa</h2>

      <ul className="list-disc">
        <li>juomaa</li>
        <li>pikkuevästä</li>
        <li>
          henkilökohtainen EA (urheiluteippi, rakkolaastari, särkylääkettä,
          vaseliinia/talkkia)
        </li>
        <li>tyvenpyyhintäpaperia</li>
        <li>kuoritakki</li>
        <li>hanskat</li>
        <li>matkapuhelin virtalähde täynnä ja päällä</li>
      </ul>

      <h2>Huoltolaatikon sisältö</h2>

      <ul className="list-disc">
        <li>sukkia riittävän monta paria</li>
        <li>muovipusseja (jonne voi tuupata märät sukat)</li>
        <li>taukotakki (mikäli epäilee kävelevänsä vähemmän kuin 100 km)</li>
        <li>suklaata, lakua tai muuta mieltä kohottavaa hiilihydraattia...</li>
        <li>
          ja ylipäänsä jotain syötävää minkä saa alas vaikka mieli olisi hieman
          tummunut
        </li>
        <li>
          mikäli lämmin juoma maistuu, kannattaa pakata mukaan termariin kuumaa
          vettä
        </li>
      </ul>
    </Article>
  );
}
