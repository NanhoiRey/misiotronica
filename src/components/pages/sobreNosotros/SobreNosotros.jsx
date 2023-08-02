import './sobreNosotros.css';
import nosotros from "../../../assets/sobreNosotros.jpg"

const SobreNosotros = () => {
    return (

        <section className="sobreNosotros-container">

            <header className="sobreNosotros-header">
                <h1 className="sobreNosotros-title">Sobre <b>Nosotros</b></h1>
            </header>

            <div className="sobreNosotros-contenido">
                <img src={nosotros} alt="nosotros" className='sobreNosotros-img' />

                <article className="sobreNosotros-descripción">
                    <p>Somos una empresa dedicada a la distribución de componentes electrónicos y proveedor de soluciones de Internet en las Cosas (IoT). <br /><br />
 
                    MISIOTRÓNICA se fundó en el año 1986, más de tres décadas de trayectoria en la representación, distribución y soporte de componentes electrónicos en el mercado Argentino y Latinoamérica. <br /><br />
                    
                    A lo largo de estos años, MISIOTRÓNICA ha tenido un crecimiento sólido y sostenido, convirtiéndose en uno de los distribuidores más importantes del mercado. <br /><br />
                    
                    Comenzó su actividad como Representante de National Semiconductor e International Rectifier, de esta manera se consolidó en el proveedor líder de electrónica de potencia. Luego de un tiempo, al ver que el mercado requería mejor atención y soporte, se tomó la decisión de adquirir más productos para acortar los tiempos de entrega y reforzar el vínculo con la Industria. De esta manera, se convirtió en Distribuidor Oficial en Argentina y más personas empezaron a formar parte de MISIOTRÓNICA para seguir creciendo en conjunto. <br /><br />
                    
                    MISIOTRÓNICA ha adquirido un compromiso hace años para la implementación de una cultura de mejora continua en la calidad de los servicios que brinda, además de los productos que distribuye, en respuesta a los retos de competitividad que se presentan en un entorno cada vez mas exigente. <br /><br />
                    
                    </p>
                </article>
            </div>


        </section>
    );

};

export default SobreNosotros;