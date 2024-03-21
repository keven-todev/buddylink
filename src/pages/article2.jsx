import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/article1.css";

import catImg2 from "../assets/asMorgane/3.png";

export default function article1() {
  return (
    <div className="article-blog">
      <Navbar />
      <header class="article-header">
        <h1 class="article-title">
        Quels sont les 14 besoins des personnes âgées ?
        </h1>
        <p class="article-author">Par Keven laroussinie</p>
        <img src={catImg2} alt="" />
      </header>
      <article class="article-content">
        <h2 className="accroche">
        Explorez les 14 besoins essentiels des personnes âgées pour une meilleure compréhension et un soutien adapté à leur bien-être.
        </h2>
        <p class="article-paragraph">
        La compréhension approfondie des 14 besoins des personnes âgées revêt une importance capitale dans la conception et la mise en œuvre de programmes de soins et de services qui répondent véritablement à leurs attentes et à leurs aspirations. Chaque besoin, qu'il soit d'ordre physique, émotionnel, social ou spirituel, interagit de manière complexe avec les autres, formant ainsi un réseau interconnecté de facteurs influençant leur bien-être global.

Pour commencer, les besoins physiologiques comme la nutrition adéquate, le repos suffisant et l'accès aux soins de santé sont fondamentaux pour maintenir leur santé et leur vitalité. De plus, une attention particulière doit être portée à la gestion de la douleur et des maladies chroniques, afin d'assurer un niveau de confort optimal et de préserver leur qualité de vie.

Sur le plan émotionnel, les personnes âgées ont besoin de se sentir en sécurité, tant sur le plan physique que psychologique. Cela implique de créer un environnement rassurant et bienveillant, où elles se sentent respectées, écoutées et soutenues dans leurs émotions. Le sentiment de sécurité est étroitement lié au besoin d'estime de soi et de dignité, qui nécessite une approche respectueuse et non discriminatoire, reconnaissant leur valeur intrinsèque en tant qu'êtres humains.
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