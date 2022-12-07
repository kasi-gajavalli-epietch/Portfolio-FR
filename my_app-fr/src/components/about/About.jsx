import React from 'react';
import './about.css'
import Image from "../../assests/profile-5.jpg";
import AboutBox from './AboutBox';
import CV from "../../assests/Kasi_GAJAVALLI_CV.pdf";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">À Propos de Moi</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">Je suis Kasi GAJAVALLI, développeur web de Marseille, France. 
            J'ai une première expérience dans le développement web et j'ai également travaillé comme développeur pendant mes années de travail en tant qu'ingénieur de recherche.
            Dans un passé récent, j'ai également construit des sites web pour des petites entreprises.</p>
            {/*eslint-disable-next-line*/}
            <a href={CV} className="btn">Télécharger CV</a>
          </div>
         {/*<div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number">60%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titiles">
                <h3 className="skills__name">UI/UX design</h3>
                <span className="skills__number">70%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titiles">
                <h3 className="skills__name">Backend</h3>
                <span className="skills__number">60%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage backend"></span>
              </div>
            </div>
         </div>*/}
        </div>
      </div>

      <AboutBox />

    </section>
  )
}

export default About