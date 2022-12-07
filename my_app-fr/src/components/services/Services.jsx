import React from 'react';
import "./services.css";
import Image1 from "../../assests/service-1.svg";
import Image2 from "../../assests/service-2.svg";
import Image3 from "../../assests/service-3.svg";

const data = [
    {
      id: 1,
      image: Image1,
      title: "UI/UX design",
      description:
        "Créez des interfaces interactives, animées et conviviales pour vos applications et sites web.",
    },
    {
      id: 2,
      image: Image2,
      title: "Web Development",
      description:
        "Commercialisez vos produits et services sur le web. Peut aussi analyser le site, les services et les produits.",
    },
    {
      id: 3,
      image: Image3,
      title: "App Development",
      description:
        "Peut construire des applications basées sur les entrées des clients qui peuvent gérer et traiter les tâches avec facilité.",
    },
  ];

  const Services =() => {
    return (
    <section className="services container section" id="services">
      <h2 className="section__title">Services</h2>

       <div className="services__container grid">
        {data.map(({id,image,title,description})=>{
          return(
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />
              
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
       </div>
    </section>
    );
  };

export default Services