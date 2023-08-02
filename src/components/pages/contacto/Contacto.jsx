import './contacto.css';
import FormContact from '../../others/formContact/FormContact';

const Contacto = () => {
    return (
        <section className='contacto-container'>

            <article className='contacto-aside'>
                <div className="map">

                <iframe className='map-fram' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6493.944647160715!2d-147.81628286175484!3d64.85423191547295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x51325b2346901f43%3A0x239a1a59203179b5!2sTimber%20Creek%20Senior%20Living!5e0!3m2!1ses!2sar!4v1690729106366!5m2!1ses!2sar"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                </div>
                <p>Acércate a nuestra sucursal principal <br /><br /> </p>
                    

            </article>

            <article className='contacto-aside'>
                <h1>CONTACTO</h1>
                <span></span>
                <FormContact/>
            </article>
        </section>

    );

};

export default Contacto;