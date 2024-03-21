// import css
import "../styles/about.css";
// import components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// import images header
import leftChevron from "../assets/chevron-left.png"
import rightChevron from "../assets/chevron-right.png"
import headerImg from "../assets/asMorgane/15.jpg";

// images categorie
import catImg1 from "../assets/asMorgane/24.jpg";
import catImg2 from "../assets/asMorgane/3.png";
import catImg3 from "../assets/asMorgane/25.png";
import catImg4 from "../assets/asMorgane/26.jpg";

// images card blog

import blogImg1 from "../assets/asMorgane/22.png";
import blogImg2 from "../assets/asMorgane/17.jpg";
import blogImg3 from "../assets/asMorgane/18.jpg";
import blogImg4 from "../assets/asMorgane/19.jpg";
import blogImg5 from "../assets/asMorgane/20.jpg";
import blogImg6 from "../assets/asMorgane/21.jpg";
import blogImg7 from "../assets/asMorgane/23.jpg";






export default function About() {
  return (
    <div>
      <Navbar />
      <header className="about-header">
        <div className="test">
          <h1>Le Blog</h1>
          <p>
            Bienvenue dans notre communauté , un espace ou les rencontres
            forment de vrais liens d’amitiés Ici, nous célébrons diversité
            création et sérénitude , Rejoignez-nous pour découvrir des histoires
            inspirantes, partager vos expériences et rencontrer des personnes
            merveilleuses de tous âges. Ensemble, créons une communauté où
            chacun se sent écouté, soutenu et valorisé. Bienvenue chez Buddy
            Links, où la connexion et l'entraide sont au cœur de tout ce que
            nous faisons.
          </p>
        </div>

       

        <div className="category">
          <div className="category-img">
            <img src={headerImg} alt="" />
          </div>
          <div className="others">
            <div className="other-category">
              <h1>Catégories</h1>
              <div className="all-category">
                <div className="first-category">
                  <p>Santé</p>
                  <p>Cuisine</p>
                  <p>Sport</p>
                </div>
                <div className="second-category">
                  <p>Style de vie</p>
                  <p>Santé</p>
                  <p>Jeux</p>
                </div>
              </div>
            </div>
            <div className="posts">
              <h1>Nos autres post</h1>
              <div className="card-post">
                <img src={catImg1} alt="" />
                <p><a href="/article1">Vieillir en beauté : 4 façons d’accepter les changements </a></p>
              </div>
              <div className="card-post">
                <img src={catImg2} alt="" />
                <p><a href="">Quels sont les 14 besoins des personnes âgées ?</a> </p>
              </div>
              <div className="card-post">
                <img src={catImg3} alt="" />
                <p>Devenir aidant : nos conseils </p>
              </div>
              <div className="card-post">
                <img src={catImg4} alt="" />
                <p>Vieillir en beauté : 4 façons d’accepter les changements </p>
              </div>
            </div>
          </div>
        </div>

        <div className="category-information">
          <h1>
            Soin visage anti-âge : quand procéder et comment choisir <br /> les
            produits ?
          </h1>
          <p>
            Se concentrer sur son visage lors des rituels de beauté est un geste
            essentiel. En effet, il est important de s’attarder sur cette zone
            de notre corps. Il s’avère que le visage représente une partie qui
            nécessite des soins particuliers en raison de la fragilité de sa
            peau comparée à celle du reste du corps. Parmi les rituels
            spécifiques du visage, il y a le soin anti-âge. Il vise à réduire et
            aussi à ralentir les effets de la vieillesse sur le visage. Quand
            faut-il le faire ? Et comment effectuer le bon choix des produits ?
            À quel âge commencer son soin anti-âge ?En effet, on a tendance à
            croire que le rituel en question est dédié aux personnes ayant déjà
            des marques de vieillesses visibles. Ce n’est pourtant pas le cas !
            Il n’y a pratiquement aucun âge prédéfini pour commencer des soins
            anti-âges.
          </p>
        </div>

        <div className="blog-content">
          <div className="all-card-blog">
            <div className="card-blog">
              <img src={blogImg2} alt="" />
              <h1>
              Comment devenir un pro du bingo ?
              </h1>
              <p>
              Vous êtes férus de tarot, bridge et autres jeux de cartes ? Avez-vous déjà essayé le bingo ?.
              </p>
              <div className="card-date">
                <p> 12 juillet , 2022</p>
              </div>
            </div>
            <div className="card-blog">
              <img src={blogImg1} alt="" />
              <h1>
                Appareil de massage pour le cou et cervicales : les bienfait
              </h1>
              <p>
                vous pouvez compter sur de nombreux appareils de massage. Mais
                sont-ils vraiment efficaces ?{" "}
              </p>
              <div className="card-date">
                <p> 14 juillet , 2022</p>
              </div>
            </div>
            <div className="card-blog">
              <img src={blogImg3} alt="" />
              <h1>
              Où voyager quand on est un célibataire senior ?
              </h1>
              <p>
              Quand on est célibataire senior, on a plus de temps à consacrer pour soi et pour son propre plaisir. 
              </p>
              <div className="card-date">
                <p> 17 juillet , 2022</p>
              </div>
            </div>
            <div className="card-blog">
              <img src={blogImg4} alt="" />
              <h1>
              Quelles sont les destinations préférées des seniors en voyage ?

              </h1>
              <p>
              Depuis que vous êtes à la retraite, vous vous êtes promis de profiter au maximum de votre temps libre pour aller à la découverte de nouveaux horizons.
              </p>
              <div className="card-date">
                <p> 20 juillet , 2022</p>
              </div>
            </div>
          </div>
          <div className="all-card-blog">
            <div className="card-blog">
              <img src={blogImg4} alt="" />
              <h1>
            Les bienfaits des jeux de sport pour les séniors.
              </h1>
              <p>
              À mesure que les années avancent, maintenir un mode de vie actif devient essentiel pour la santé des seniors.
              </p>
              <div className="card-date">
                <p> 23 juillet , 2022</p>
              </div>
            </div>
            <div className="card-blog">
              <img src={blogImg5} alt="" />
              <h1>
              L'importance des loisirs créatifs dans la vie des seniors.
              </h1>
              <p>
                vous pouvez compter sur de nombreux appareils de massage. Mais
                sont-ils vraiment efficaces ?{" "}
              </p>
              <div className="card-date">
                <p> 26 juillet , 2022</p>
              </div>
            </div>
            <div className="card-blog">
              <img src={blogImg6} alt="" />
              <h1>
              Découvrez la thérapie holistique pour votre santé d’aidant
              </h1>
              <p>
              Migraines, troubles du sommeil, problèmes de peau, de digestion, maux de dos insupportables…{" "}
              </p>
              <div className="card-date">
                <p> 29 juillet , 2022</p>
              </div>
            </div>
            <div className="card-blog">
              <img src={blogImg7} alt="" />
              <h1>
              Repérer la dépression chez les personnes âgées
              </h1>
              <p>
              Bien que très fréquente chez les personnes âgées, la dépression est souvent difficile à diagnostiquer, car souvent confondue avec d’autres pathologies liées au vieillissement.{" "}
              </p>
              <div className="card-date">
                <p> 30 juillet , 2022</p>
              </div>
            </div>
          </div>

          <div className="number-cardBlog">
            <ul className="nbrCard">
              <li><img src={leftChevron} alt="" /></li>
              <li> <span>1</span></li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li><img src={rightChevron} alt="" /></li>
            </ul>
          </div>
        </div>
      <Footer />
      </header>


      
    </div>
  );
}
