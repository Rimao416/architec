// import React from 'react'

import Button from "../components/Button";


function Home() {
  return (
    <section className="header">
      <div className="navigation">
        <div className="navigation__logo">

        <img
          src="/logo-xs.png"
          alt="Logo de l'application"
        />
        </div>
        <nav className="navigation__wrapper">
          <ul className="navigation__list">
            <li className="navigation__item">
              <a href="#" className="navigation__link">Design</a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">À Propos</a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">Projets</a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">Equipes</a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">Evaluations</a>
            </li>
          </ul>
        </nav>
        <div className="navigation__wrapper">
<Button content="Nous contacter" color="yellow"/>
        </div>
      </div>
      <div className="main">
        <div className="main__wrapper">
          <h1>Architects with differents Approach</h1>
        </div>
        <div className="main__wrapper"></div>
      </div>
      <div className="custom-shape-divider-bottom-1712572400">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default Home;
