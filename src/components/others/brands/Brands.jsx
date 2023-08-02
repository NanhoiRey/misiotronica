import React from 'react';
import asus from "../../../assets/asus.png";
import bosch from "../../../assets/bosch.png";
import inova from "../../../assets/inova.png";

import './brand.css'


function Brands() {
  return (
    <section className='brands'>
        <img src={asus} alt="asus" className='brands-img' />
        <img src={bosch} alt="bosh"  className='brands-img'/>
        <img src={inova} alt="inova" className='brands-img' />
    </section>
  )
}

export default Brands