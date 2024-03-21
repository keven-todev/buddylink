import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/article1.css";

import catImg1 from "../assets/asMorgane/24.jpg";

export default function article1() {
  return (
    <div className="article-blog">
      <Navbar />
      <header class="article-header">
        <h1 class="article-title">
          Vieillir en beauté : 4 façons d’accepter les changements
        </h1>
        <p class="article-author">Par John Doe</p>
        <img src={catImg1} alt="" />
      </header>
      <article class="article-content">
        <h2 className="accroche">
          Découvrez comment embrasser le processus naturel de vieillissement
          avec grâce et confiance grâce à notre article : 'Vieillir en beauté :
          4 façons d’accepter les changements'.
        </h2>
        <p class="article-paragraph">
          Dans notre société obsédée par la jeunesse et la perfection physique,
          vieillir est souvent perçu comme un défi à relever plutôt qu'une étape
          naturelle de la vie à célébrer. Cependant, dans notre article intitulé
          "Vieillir en beauté : 4 façons d’accepter les changements", nous
          explorons une perspective différente, une approche empreinte de
          bienveillance et de sagesse, invitant nos lecteurs à voir le
          vieillissement comme une opportunité de croissance personnelle et de
          découverte de nouvelles formes de beauté. Tout au long de cet article,
          nous abordons avec sensibilité les différents aspects du
          vieillissement, qu'ils soient physiques, émotionnels ou sociaux. Nous
          reconnaissons les défis que chacun peut rencontrer en vieillissant,
          mais nous proposons également des solutions pratiques et inspirantes
          pour les surmonter avec grâce et confiance. Nos lecteurs découvriront
          quatre stratégies essentielles pour cultiver une attitude positive et
          accepter les changements qui accompagnent le processus de
          vieillissement. Nous commençons par explorer l'importance d'adopter de
          saines habitudes de vie, notamment une alimentation équilibrée, une
          activité physique régulière et un sommeil de qualité, pour maintenir
          une santé optimale et un bien-être général. Ensuite, nous plongeons
          dans le pouvoir des relations interpersonnelles et de la connexion
          sociale dans le processus de vieillissement. Nous mettons en lumière
          l'importance de cultiver des relations positives, de rester en contact
          avec ses proches et de s'entourer d'une communauté solidaire pour
          soutenir le bien-être émotionnel et mental.
        </p>
        <p class="article-paragraph">
          Dans la troisième section de notre article, nous explorons le rôle de
          la gratitude dans la construction d'une perspective positive sur le
          vieillissement. Nous encourageons nos lecteurs à pratiquer la
          gratitude au quotidien, à apprécier les petits plaisirs de la vie et à
          reconnaître les bénédictions de l'âge avancé. Enfin, nous invitons nos
          lecteurs à explorer de nouvelles passions et à embrasser les
          opportunités de croissance personnelle et d'épanouissement qui se
          présentent avec l'âge. Nous mettons en lumière l'importance de rester
          curieux, de continuer à apprendre et de s'engager dans des activités
          qui nourrissent l'âme et élargissent les horizons. En résumé, notre
          article "Vieillir en beauté : 4 façons d’accepter les changements"
          offre une perspective rafraîchissante et inspirante sur le processus
          de vieillissement. À travers des conseils pratiques, des anecdotes
          inspirantes et une approche empreinte de compassion, nous encourageons
          nos lecteurs à voir le vieillissement comme une opportunité de vivre
          pleinement, de s'épanouir et de trouver une beauté intérieure qui
          transcende les rides et les cheveux grisonnants.
        </p>
      </article>

      <section class="related-articles">
        <div class="article-card">
          <h2 class="card-title">Devenir aidant : nos conseils</h2>
          <p class="card-author">Par Dona keen</p>
          <p class="card-excerpt">
            Découvrez les secrets d'un mode de vie équilibré et sain.
          </p>
          <a href="#" class="card-link">
            Lire plus
          </a>
        </div>
        <div class="article-card">
          <h2 class="card-title">Quels sont les 14 besoins des personnes âgées ?</h2>
          <p class="card-author">Par Alice Smith</p>
          <p class="card-excerpt">
            Explorez les dernières tendances en matière de style et de mode.
          </p>
          <a href="#" class="card-link">
            Lire plus
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}
