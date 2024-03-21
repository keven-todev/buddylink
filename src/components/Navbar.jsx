import React from 'react'
import '../styles/navbar.css'
import blackLogo from '../assets/BlackLogo.png'
import buddyLink from '../pages/Link'

export default function Navbar() {
  return (
    <div className='container'>
        <nav>
            <div className="logo">
                <img id='navBar-logo' src={blackLogo} alt="site-logo" />
            </div>
            <input type="checkbox" id='checkbox' />
            <label htmlFor="checkbox" id='icon'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

            </label>
            <ul>
                <li>
                  <a href="/" className='active'>Accueil</a>
                  <img src alt="" />
                  </li>
                <li><a href="/Link">Buddy Link</a></li>
                <li><a href="/community">Communauté</a></li>
                <li><a href="/Blog">Blog</a></li>
                <button>Download</button>
            </ul>
        </nav>
       
    </div>
  )
}
