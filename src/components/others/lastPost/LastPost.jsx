import React from 'react';
import './lastPost.css';
import lastPostImg from "../../../assets/4775.jpg"

function LastPost() {
  return (
    <section className='lastPost-container'>
        
       <article className='lastPost-article'>
        <h1>Experiencia y Calidad</h1>
        <p>Somos un equipo de trabajo en crecimiento con más de 20 años brindando soluciones integrales en las áreas de electricidad, seguridad electrónica e informática a empresas, comercios y hogares. <br /><br />

        Con los años hemos crecido junto a nuestros clientes, conociendo sus necesidades lo que nos llevó a desarrollarnos en diferentes segmentos del mercado e incorporar nuevas herramientas, habilidades, tecnologías y capacitaciones para adaptarnos y adelantarnos a los cambios que nos presenta el mercado hoy.<br /><br />

        <span>Nos enorgullece ofrecer un servicio al cliente excepcional, y trabajamos de manera eficiente para completar cada proyecto en el menor tiempo posible sin sacrificar la calidad del trabajo.</span></p>
       </article>

       <article className='lastPost-article'>
        <img src={lastPostImg} alt=""  cl/>
       </article>

    </section>
  );
};

export default LastPost;