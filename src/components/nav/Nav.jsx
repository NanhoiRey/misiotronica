import React, {useState} from "react";
import {FaBars} from "react-icons/fa";
import {ImCross} from "react-icons/im";
import logo from '../../assets/logo-header.png'
import { Outlet, Link } from "react-router-dom";
import './nav.css';

const Nav = () =>{

    const [Mobile, setMobile] = useState(false)
    return(
        <>
        <nav className="navbar">
            <Link to="/"><img src={logo} alt="logo" className="logo" /></Link>
            <div className="container">
                <ul className={Mobile? "nav-links-mobile" : "nav-links"} onClick={()=>setMobile(false)}>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/venta">Venta</Link></li>
                    <li><Link to="/sobreNosotros">Nosotros</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
                <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}> 
                    {Mobile ? <ImCross/> : <FaBars/> }                    
                </button>

            </div>
        </nav>

        

        <Outlet/>
        
        </>
    );

};

export default Nav;