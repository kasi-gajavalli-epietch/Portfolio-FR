import React from 'react'

const AboutBox = () => {
  return (
    <div className="about__boxes grid">

        <div className="about__box">
            <i className="about__icon icon-fire"></i>
            <div>
                <h3 className="about__title">5+</h3>
                <span className="about__subtitle">Années d'expérience</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-cup"></i>
            <div>
                <h3 className="about__title">7</h3>
                <span className="about__subtitle">Publications Internationales</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-people"></i>
            <div>
                <h3 className="about__title">5+</h3>
                <span className="about__subtitle">Collaborations internationales</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-badge"></i>
            <div>
                <h3 className="about__title">3</h3>
                <span className="about__subtitle">Reconnaissances</span>
            </div>
        </div>
    </div>
  )
}

export default AboutBox