import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Inicio from './components/pages/inicio/Inicio';
import Contacto from './components/pages/contacto/Contacto';
import SobreNosotros from './components/pages/sobreNosotros/SobreNosotros';
import Venta from './components/pages/venta/Venta';
import NoEncontrado from './components/pages/noEncontrado/NoEncontrado'; 
import Footer from './components/footer/Footer';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav/>}>
          <Route index element={<Inicio />}/>
          <Route path='venta' element={<Venta/>}/>
          <Route path='sobreNosotros' element={<SobreNosotros/>}/>
          <Route path='contacto' element={<Contacto/>}/>
          <Route path='*' element={<NoEncontrado/>}/>
        </Route>


      </Routes>
      <Footer/>

    </BrowserRouter>

    


  );
};

export default App;
