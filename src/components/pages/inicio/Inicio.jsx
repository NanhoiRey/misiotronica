import './inicio.css';
import LastPost from '../../others/lastPost/LastPost';
import Banner from '../../others/banner/Banner';
import Brands from '../../others/brands/Brands';
import Productos from '../../others/productos/Productos';

const Inicio = () => {   
    return(
        <div className="App">
            <Banner/>
            <LastPost

                 name={Productos.name}
            
            
            />
            <Brands/>
        </div>

    );
};

export default Inicio;