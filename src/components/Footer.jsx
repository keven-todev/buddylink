import React, { useState } from 'react'
import '../styles/footer.css'
import logoWhite from '../assets/logo-white.png'

export default function Footer() {

  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!email.trim()) {
      setErrorMsg('Veuillez remplir correctement votre e-mail.');
    } else {
      setErrorMsg('')
    }
  };


  return (
    <div>
        <footer>
        <div className="adress">
          <img src={logoWhite} alt="" />
          <p>8819 Ohio St. South</p>
          <p>Ourstudio@hello.com</p>
          <p>+1 386-688-3295</p>
        </div>
        <div className="services">
          <h1>Service</h1>
          <p>Avis clients</p>
          <p>FAQ</p>
          <p>Nos Offres d'emploi</p>
        </div>
        <div className="compagny">
            <h1>compagny</h1>
          <p>Accessibilité</p>
          <p>Thermes et conditions</p>
          <p>L'esprit Social Link</p>
        </div>
        <div className="social-media">
            <h1>Nos réseaux</h1>
          <p><a href="">Facebook</a></p>
          <p><a href="">Instagram</a></p>
          <p><a href="">Twitter(x)</a></p>
        </div>
        <div className="newsletter">
          <h1><a href="">Se joindre à la newsletter</a></h1>
          <form action="" onSubmit={handleSubmit}>
            <div className="form-mail">

            <input type="text" 
            placeholder="Votre e-mail"
            id='email-input'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <button>Envoyer</button>
            </div>
            <p id='errorMessage'>{errorMsg}</p>
            <div className="cookies">
            <input type="checkbox" id='cookies'/> 
            <p>j'accepte les conditions génerales</p>
            
            </div>
          </form>

        </div>
      </footer> 
    </div>
  )
}
