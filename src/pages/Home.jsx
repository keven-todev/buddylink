import "../styles/App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/home.css";
import apple from  "../assets/apple.png"
import playstore from "../assets/playstore.png"
import encouragementIMG from "../assets/encouragementIMG.jpg"
import encouragerIMG from "../assets/encouragerIMG.png"
import socialIMG from "../assets/socialIMG.jpg"
import PhoneIMG from "../assets/phone.png"
import doublePhone from "../assets/DoublePhone.png"
import createAccount from "../assets/createAccountMobile.png"
import apphome from "../assets/mobilAppHome.png"
import findActivity from "../assets/findMobile.png"
  


function App() {
  return (
    <div>
      <Navbar />
      <header>
        <div className="container">
          <div className="header-title">
            <h1>
              Connectez les générations, <br />
              Bienvenue sur notre plateforme intergénérationnelles.
            </h1>
            <h2>
              Créez des liens intergénérationnels uniques à travers des
              activités enrichissantes. <br />
              Rejoignez notre communauté pour partager, apprendre et grandir
              ensemble !
            </h2>
          </div>
          <div className="header-information">
            <div className="information">
              <h1>+200</h1>
              <p>
              Explorez plus de  <br /> 200 activités variées !
              </p>
            </div>
            <div className="information">
              <h1>+1000</h1>
              <p>
               1000 utilisateurs engagés,<br /> qui sont parmis nous !
              </p>
            </div>
            <div className="information">
              <h1>+50</h1>
              <p>
              50 partenaires locaux, <br /> qui nous soutiennent !
              </p>
            </div>
          </div>
          <div className="webApp">
            <div className="webApp-information">
            <h1>Rejoignez-nous !</h1>
            <p>Transformez des moments ordinaires en souvenirs extraordinaires et rejoignez une communauté qui valorise les liens intergénérationnels. <br />
            
              Téléchargez notre application dès maintenant pour commencer à tisser des liens significatifs et enrichir la vie des personnes âgées autour de vous.</p>
            <div className="btn-app">

            <button id="ios">Disponible IOS <img src={apple} alt="" /></button>
            <button id="android">Disponible Android <img src={playstore} alt="" /></button>
            </div>
          </div>

          <div className="webApp-phone">
            <img src={doublePhone} alt="" />
          </div>


            
          </div>
        </div>     
      </header>

      <main className="home-container">
        <h1 className="home-container-h1">Notre mission</h1>
        <div className="mission">
          <div className="mission-content">
            <img src={socialIMG} alt="" />
            <h2>Resocialiser</h2>
            <p>Engagement pour reconnecter  à travers échanges enrichissants, rompant l'isolement par des activités communes.</p>
          </div>
          <div className="mission-content">
            <img src={encouragerIMG} alt="" />
            <h2>Engagement</h2>
            <p>Stimulation de l'engagement pour tous âges via volontariat, renforçant liens communautaires et soutien mutuel.</p>
          </div>
          <div className="mission-content">
            <img src={encouragementIMG} alt="" />
            <h2>Encourager</h2>
            <p>Promotion de l'échange de savoirs entre âges, enrichissant le tissu social par ateliers et interactions valorisantes.</p>
          </div>
        </div>
      </main>

      <aside>
        <div className="aside-title">
          <h1>D'accord mais ..</h1>
          <h2>Comment ça marche ?</h2>
          <p>Nous nous engageons à rétablir le lien social en favorisant des rencontres intergénérationnelles vivifiantes. <br/> Ensemble, redonnons-leur un réseau social actif et enrichissant</p>
        </div>

        <div className="aside-content">
          <div className="content-step">
            <div className="information">
              <h1>Etape <span>1</span></h1>
              <h2>Télécharge l'application</h2>
              <p>Nous nous engageons à rétablir le lien social en favorisant des rencontres <br/> intergénérationnelles vivifiantes. <br /> Ensemble, redonnons-leur un réseau social actif et enrichissant</p>
            </div>
            <div className="phone">
              <img src={apphome} alt="" />
            </div>
          </div>
          
          <div className="content-step2">
          <div className="phone">
              <img src={createAccount} alt="" />
            </div>
            <div className="information">
              <h1>Etape <span>2</span></h1>
              <h2>Créer ton compte</h2>
              <p>Nous nous engageons à rétablir le lien social en favorisant des rencontres <br/> intergénérationnelles vivifiantes. <br /> Ensemble, redonnons-leur un réseau social actif et enrichissant</p>
            </div>
            
          </div>

          <div className="content-step">
            <div className="information">
              <h1>Etape <span>3</span></h1>
              <h2>Trouve des activitées ! </h2>
              <p>Nous nous engageons à rétablir le lien social en favorisant des rencontres <br/> intergénérationnelles vivifiantes. <br /> Ensemble, redonnons-leur un réseau social actif et enrichissant</p>
            </div>
            <div className="phone">
              <img src={findActivity} alt="" />
            </div>
          </div>
        </div>
      </aside>

      <Footer />

    </div>
  );
}

export default App;
