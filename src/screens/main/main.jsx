import React from 'react' ;
import "./main.css"; 
import logo from "../../assets/logo-transparente.png";
import indioTitle from "../../assets/indio.png"


const Main = () => {
  return (

    <main className='main-container'>


      <div className='sections-containers'>

      <section className='section-logo'>

        <img src={logo} alt="Logo" />

      </section>

      <section className='section-titles'>
        <img src={indioTitle} alt="" />
        <h2 className='main-title'>Tienda Oficial</h2>
        <h5 className='main-subtitle'>Descubri todas las novedades y productos en nuestra tienda oficial</h5>

        <a href="#" className='main-link'> 
          <i></i>
          <i></i>
          <span>Ingresar</span>
        </a>

      </section>
        
      </div>

    </main>
  )
}

export default Main ;