import React from 'react'
import './footer.css'
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom";
import {AiTwotoneMail, AiFillFacebook, AiFillInstagram} from "react-icons/ai";


function Footer() {
  return (
    <footer>
      <div className="container-footer">

          <Link to="/"><img src={logo} alt="logo" className="logo-footer" /></Link>

          <article className="redes">
            <Link to="/" className='icono'><AiTwotoneMail/></Link>
            <Link to="/" className='icono'><AiFillFacebook/></Link>
            <Link to="/" className='icono'><AiFillInstagram/></Link>
          </article>

          <p>Todos los derechos reservados <br />
          <span>Misiotrónica</span> 

          </p>
        
      </div>
    </footer>
  )
}

export default Footer