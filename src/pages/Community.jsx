import "../styles/community.css";
import Navbar from "../components/Navbar";
import HeaderCommunity from "../assets/HeaderCommunity.png";
import discord from "../assets/discordIMG.png";
import linkedin from "../assets/linkedinImg.png";
import instagram from "../assets/instaImg.png";
import fuseIcon from "../assets/fuseIcon.png";
import IconWorkshop from "../assets/workshopIcon.png";
import atelier from "../assets/atelier.png";
import arrowDown from "../assets/arrowDown.png";
import email from "../assets/mailImg.png";
import Slider from "../components/Slider";
import Footer from "../components/Footer";

export default function Community() {
  return (
    <div id="header-body">
      <Navbar />
      <header>
        <div className="header-welcome">
          <div className="welcome-text">
            <h1>
              Nos communautés <br />
              s'aggrandis, et
              <br /> c'est grace à vous !{" "}
            </h1>
            <button>Rejoindre notre communauté </button>
          </div>

          <div className="welcome-img">
            <img src={HeaderCommunity} alt="" />
          </div>
        </div>
        <div className="header-contact">
          <div className="contact-discord">
            <img src={discord} alt="" />
          </div>
          <div className="contact-lkn">
            <img src={linkedin} alt="" />
          </div>
          <div className="contact-insta">
            <img src={instagram} alt="" />
          </div>
          <div className="contact-mail">
            <img src={email} alt="" />
          </div>
        </div>
      </header>
      <Slider />

      <main>
        <div className="workshop">
          <div className="card-workshop">
            <div className="workshop-information-text">
              <h1>Ateliers Culturels</h1>
              <p>
                Découvrez notre sélection d'ateliers culturels sur Buddy Links !
                De la cuisine à l'art en passant par la musique, nos activités
                stimulantes offrent une immersion enrichissante dans diverses
                cultures du monde. Rejoignez-nous pour élargir vos horizons et
                découvrir de nouvelles passions.
              </p>
            </div>
            <div className="workshopImg">
              <img src={IconWorkshop} alt="" />
            </div>
          </div>
          <div className="card-advice">
            <div className="advice-text">
              <h1>
                Accompagnement Personnalisé : Conseils adaptés à vos besoins.
              </h1>
              <p>
                Communauté Solidaire : Soutien mutuel et partage d'expérience.
                Ressources Pratiques : Guides et vidéos Formations et Ateliers :
                Espace forum : Espace pour exprimer vos préoccupations.
                Rejoignez-nous pour prendre soin de vos proches avec confiance.
              </p>
            </div>
            <div className="adviceImg">
              <img src={fuseIcon} alt="" />
            </div>
          </div>
        </div>

        <div className="faqCommunity">
          <h1>FAQ</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. <br /> Velit officia consequat duis enim velit mollit.
            Exercitation veniam consequat sunt nostrud amet.
          </p>
        </div>

        <div className="questions">
          <div className="cardAsk">
            <div className="requestion-ask">
              <input type="text" name="" id="" placeholder=" ici ta question "/>
              <button>envoyer</button>
            </div>
            <p>
              Buddy Links propose-t-il des fonctionnalités de communication
              telles que des chats ou des forums ?
            </p>
          </div>

          <div className="response">
            <div className="card-response">
              <h1>
                Buddy Links offre-t-il des filtres pour trouver des compagnons
                de loisirs basés sur la localisation ou les intérêts communs ?
              </h1>
              <button>
                <img src={arrowDown} alt="" />
              </button>
            </div>
            <div className="card-response">
              <h1>
                Buddy Links offre-t-il des filtres pour trouver des compagnons
                de loisirs basés sur la localisation ou les intérêts communs ?
              </h1>
              <button>
                <img src={arrowDown} alt="" />
              </button>
            </div>
            <div className="card-response">
              <h1>
                Buddy Links offre-t-il des filtres pour trouver des compagnons
                de loisirs basés sur la localisation ou les intérêts communs ?
              </h1>
              <button>
                <img src={arrowDown} alt="" />
              </button>
            </div>
            <div className="card-response">
              <h1>
                Buddy Links offre-t-il des filtres pour trouver des compagnons
                de loisirs basés sur la localisation ou les intérêts communs ?
              </h1>
              <button>
                <img src={arrowDown} alt="" />
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer/>
    </div>
  );
}
