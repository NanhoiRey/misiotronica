import React from 'react';
import Productos from '../../others/productos/Productos';
import './ventas.css'

function Venta() {
  return (

    <section className='ventas-container'>

        <h1>VENTA</h1>
        <p>Catálogo completo de todos los componentes para tu proyecto</p>

        <article className='producots'>
            <Productos/>
        </article>
        
    </section>

  );
}

export default Venta