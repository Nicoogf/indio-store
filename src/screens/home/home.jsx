import React from 'react';
import "./home.css";
import Options from "../../components/home-appContainer-nav/nav";


import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AlbumOutlinedIcon from '@mui/icons-material/AlbumOutlined';
import SpatialAudioOutlinedIcon from '@mui/icons-material/SpatialAudioOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import logoNav from "../../assets/logo-nav.png";
import cara_png from "../../assets/prueba_figura.png"


import product_remera from "../../assets/producto_2.png";
import product_album from "../../assets/producto_5.png";
import product_libros from "../../assets/producto_13.png";

function Home() {
  return (
    <div>

      <div className='app-main' id="main">


        <nav className='app-nav'>

          <div className='nav-logo'>
            <img src={logoNav} alt="" />

          </div>

          <div className='nav-menu'>

          <h4 className='nav-title-main'>Menu</h4>


            <ul className='ul-nav'>

              <li className='nav-li'>  <ShoppingBagOutlinedIcon className='icon'/> <a href="#" className='options-nav-a'> Productos</a> </li>

              <li className='nav-li'>  <AlbumOutlinedIcon className='icon'/> <a href="#" className='options-nav-a'>Discografia</a> </li>

              <li className='nav-li'>  <SpatialAudioOutlinedIcon className='icon'/> <a href="#" className='options-nav-a'>Recitales</a> </li>

              <li className='nav-li'>  <LanguageOutlinedIcon className='icon'/><a href="#" className='options-nav-a'>Redes</a> </li>

            </ul>
          </div>

          <div className='btn-exit'>
              <CloseOutlinedIcon className='icon icon-exit'/>
          </div>

         

        </nav>


        <section className='app-container'>




          <Options />













            <article className='views-flyers'>

              <img src={cara_png} alt=""  className='img_face'/>
                

            </article>


            <div className='rank-products'>            

                                
                  <a href="#" className='product'>
                    <article className='product_card'>
                      <img src={product_remera}alt="" />
                      <h5>Albumes</h5>
                      <h6> Ver mas</h6>
                    </article>
                  </a>

                  <a href="#" className='product'>
                    <article className='product_card'>
                      <img src={product_album}alt="" />
                      <h5>Remeras</h5>
                      <h6> Ver mas</h6>
                    </article>
                  </a>

                  <a href="#" className='product'>
                    <article className='product_card'>
                      <img src={product_libros}alt="" />
                      <h5>Libros</h5>
                      <h6> Ver mas</h6>
                    </article>
                  </a>

            </div>


        </section>

        
        

      </div>


    </div>
  )
}

export default Home ;