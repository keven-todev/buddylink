// IMPORT CSS
import "../styles/link.css";

// IMPORT COMPONENTS
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// IMPORT IMAGES CARD
import encouragement from "../assets/encouragementIMG.jpg";
import imgHeader from "../assets/asMorgane/3.png";
import img1 from "../assets/asMorgane/4.jpg";
import img2 from "../assets/asMorgane/5.jpg";
import img3 from "../assets/asMorgane/6.jpg";
import img4 from "../assets/asMorgane/20.jpg";
import img5 from "../assets/asMorgane/7.png";
import img6 from "../assets/asMorgane/9.jpg";


// IMPORT IMAGES REVIEW

import imgReview1 from "../assets/reviewsImg/7.png";
import imgReview2 from "../assets/reviewsImg/10.png";
import imgReview3 from "../assets/reviewsImg/11.jpg";
import imgReview4 from "../assets/reviewsImg/12.png";
import imgReview5 from "../assets/reviewsImg/25.png";



function buddyLink() {
  return (
    <div>
      <Navbar />
      <main className="main-Link">
        <div className="main-aboutUs">
          <h1>A PROPOS</h1>
          <p>
          Buddy Links incarne notre engagement envers la connexion intergénérationnelle et le bien-être social.
          À travers cette plateforme, nous mettons en lumière la continuité de notre vision du vivre ensemble et de nos valeurs fondamentales. Buddy Links s'inscrit dans notre volonté de créer des solutions innovantes qui favorisent la cohésion sociale et l'entraide entre les différentes générations. Dans un monde en constante évolution, nous restons déterminés à développer des initiatives qui renforcent les liens sociaux et promeuvent une culture d'inclusion et de solidarité. Buddy Links représente une étape importante dans cette démarche, et nous sommes impatients de continuer à œuvrer pour un avenir où chacun se sentira pleinement connecté et soutenu.
          </p>
          <label htmlFor="">
            <button className="btn-modal">En savoir plus !</button>
          </label>
        </div>

        <div className="main-video">
          <img src={imgHeader} alt="" />
        </div>
      </main>

      <aside className="asideLink">
        <div className="advantage">
          <h1>Les avantages de l'application</h1>
          <h2>Découvrez une expérience utilisateur immersive</h2>
         
        </div>
        <div className="advantage-information">
          <div className="advantage-one">
            <h1>Pour Nous</h1>
            <p>
            Pour nous  Chaque individu, quel que soit son âge, mérite d'être entendu, respecté et soutenu et inclus.
Nous croyons au pouvoir du partage d'expériences, de connaissances et d'histoires pour enrichir mutuellement nos vies.
            </p>
          </div>

          <div className="advantage-two">
            <h1>Notre mission</h1>
            <p>
            Nous aspirons à un monde où l'âge n'est pas un obstacle à l'épanouissement social.
Nous cultivons un environnement empreint de compassion, d'empathie et de soutien mutuel. De challenge et de moment de vie épanouissant.
Nous nous engageons à rétablir le lien social en favorisant des rencontres intergénérationnelles vivifiantes sincere et durable. 
            </p>
          </div>

          <div className="advantage-three">
            <h1>Alors .. Rejoins nous !</h1>
            <p>
            Nous sommes constamment à la recherche de nouvelles façons créatives de favoriser les interactions intergénérationnelles et de répondre aux besoins changeants de notre communauté qui ne ressent de s’agrandir au fil des jours. Alors? Rejoins nous

            </p>
          </div>
        </div>
      </aside>

      <div className="Services-container">
        <h1 id="services-h1">Nos Services</h1>
        <h2>Découvrez notre gamme complète de services</h2>
        <div className="services-Link">
          <div className="card">
            <img src={img1} alt="" />
            <div className="review-services">
              <h1>cours virtuelle</h1>
              <p>⭐</p>
              <p>⭐</p>
              <p>⭐</p>
              <p>⭐</p>
            </div>

            <div className="information-card">
              <h1>Ateliers Gym sensorielle</h1>
              <p>17$</p>
            </div>

            <div className="avis-clients">
              <p>198 avis</p>
              <p>91 commentaires</p>
            </div>

            <div className="moreContent-services">
              <button id="btnSerces">Je m'inscris</button>
            </div>
          </div>

          <div className="card">
            <img src={img2} alt="" />
            <div className="review-services">
              <h1>Cours Virtuelle</h1>
              <p>⭐</p>
              <p>⭐</p>
              <p>⭐</p>
              <p>⭐</p>
            </div>

            <div className="information-card">
              <h1>Ateliers Gym sensorielle</h1>
              <p>17$</p>
            </div>

            <div className="avis-clients">
              <p>198 avis</p>
              <p>91 commentaires</p>
            </div>

            <div className="moreContent-services">
              <button id="btnSerces">Je m'inscris</button>
            </div>
          </div>

          <div className="card">
            <img src={img3} alt="" />
            <div className="review-services">
              <h1>Cours Virtuelle</h1>
              <p>⭐</p>
              <p>⭐</p>
              <p>⭐</p>
              <p>⭐</p>
            </div>

            <div className="information-card">
              <h1>Ateliers Gym sensorielle</h1>
              <p>17$</p>
            </div>

            <div className="avis-clients">
              <p>198 avis</p>
              <p>91 commentaires</p>
            </div>

            <div className="moreContent-services">
              <button id="btnSerces">Je m'inscris</button>
            </div>
          </div>
        </div>

        <div className="services-Link2">
          <div className="card">
            <img src={img4} alt="" />
            <div className="review-services">
              <h1>cours virtuelle</h1>
              <p>⭐</p>
              <p>⭐</p>
              <p>⭐</p>
              <p>⭐</p>
            </div>

            <div className="information-card">
              <h1>Ateliers Gym sensorielle</h1>
              <p>17$</p>
            </div>

            <div className="avis-clients">
              <p>198 avis</p>
              <p>91 commentaires</p>
            </div>

            <div className="moreContent-services">
              <button id="btnSerces">Je m'inscris</button>
            </div>
          </div>

          <div className="card">
            <img src={img5} alt="" />
            <div className="review-services">
              <h1>Cours Virtuelle</h1>
              <p>⭐</p>
              <p>⭐</p>
              <p>⭐</p>
              <p>⭐</p>
            </div>

            <div className="information-card">
              <h1>Ateliers Gym sensorielle</h1>
              <p>17$</p>
            </div>

            <div className="avis-clients">
              <p>198 avis</p>
              <p>91 commentaires</p>
            </div>

            <div className="moreContent-services">
              <button id="btnSerces">Je m'inscris</button>
            </div>
          </div>

          <div className="card">
            <img src={img6} alt="" />
            <div className="review-services">
              <h1>Cours Virtuelle</h1>
              <p>⭐</p>
              <p>⭐</p>
              <p>⭐</p>
              <p>⭐</p>
            </div>

            <div className="information-card">
              <h1>Ateliers Gym sensorielle</h1>
              <p>17$</p>
            </div>

            <div className="avis-clients">
              <p>198 avis</p>
              <p>91 commentaires</p>
            </div>

            <div className="moreContent-services">
              <button id="btnSerces">Je m'inscris</button>
            </div>
          </div>
        </div>
      </div>

      <div className="notice">
        <h1>Ce qu'ils en pensent</h1>
        <div className="allCard-notice">
          <div className="card-notice">
            <img src={imgReview1} alt="" />
            <p>Martin</p>
            <p>⭐⭐⭐⭐⭐</p>
            <p>
              Super !
              En tant qu'aidant, j'ai trouvé cette plateforme extrêmement pratique pour trouver des activités a faire a deux ! pour mes proches âgés. 
            </p>
          </div>
          <div className="card-notice">
            <img src={imgReview2} alt="" />
            <p>Pierre</p>
            <p>⭐⭐⭐</p>
            <p>
            Remarquable . J'apprécie particulièrement la variété des options disponibles . j’ai aidé une fois et c’était un super moment passé avec Hervé
            </p>
          </div>
          <div className="card-notice">
            <img src={imgReview3} alt="" />
            <p>Anne</p>
            <p>⭐⭐⭐⭐⭐</p>
            <p>
            Aidante depuis 2 ans maintenant j’ai pu accompagner ai aider a de nombreuse reprise . Et cela a toujours été un plaisir . vous êtes au top buddy links !
            </p>
          </div>
          <div className="card-notice">
            <img src={imgReview4} alt="" />
            <p>Tintin92</p>
            <p>⭐⭐⭐⭐⭐</p>
            <p>
            Les cours d'informatique proposés sur Buddy Links sont tout simplement géniaux ! En tant que novice en technologie, j'ai trouvé ces cours extrêmement utiles . Les instructeurs sont patients .
            </p>
          </div>
          <div className="card-notice">
            <img src={imgReview5} alt="" />
            <p>Cyclop90</p>
            <p>⭐⭐⭐⭐⭐</p>
            <p>
            Remarquable . J'apprécie particulièrement la variété des options disponibles . j’ai aidé une fois et c’était un super moment passé avec Hervé
            </p>
          </div>
        </div>
      </div>

      <div className="moreContent-link">
        <div className="moreContent">
          <div className="visitLink">
            <h1>Consulter les cours virtuelles</h1>
            <p>Cours d'essai, abonnement, tarifs</p>
            <button>consulter</button>
          </div>
          <div className="faqLink">
            <div className="faq-information">
              <h1>FAQ</h1>
              <p>Si tu as des questions c'est par ici !</p>
              <button>Consulter la FAQ</button>
            </div>
            <div className="faqLogo">
              <p>✉️</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default buddyLink;
