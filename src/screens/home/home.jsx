import React from 'react';
import "./home.css";
import Options from "../../components/home-appContainer-nav/nav";
import MainScreen from "../../components/home-mainScreen/mainApp";
import RankProduct from '../../components/rankProduct/rankProduct';


import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AlbumOutlinedIcon from '@mui/icons-material/AlbumOutlined';
import SpatialAudioOutlinedIcon from '@mui/icons-material/SpatialAudioOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import CircleIcon from '@mui/icons-material/Circle';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WebIcon from '@mui/icons-material/Web';
import GradeIcon from '@mui/icons-material/Grade';

import logoNav from "../../assets/logo-nav.png";



function Home() {

  const cerrarMenu = () =>{    
    const menuLateral = document.getElementById("menu")
    menuLateral.classList.toggle("visible")
  }


  return (
    <div className='contenedor-pricipal-inicio'>

      <div className='app-main' id="main">

        <nav className='app-nav' id="menu">

            <div className='nav-logo'>
            <img src={logoNav} alt="" />
            </div>

            <div className='nav-menu'>

              <h4 className='nav-title-main'>Menu</h4>


              <ul className='ul-nav'>

                  <li className='nav-li'>  <ShoppingBagOutlinedIcon className='icon'/> <a href="#store" className='options-nav-a'> Productos</a> </li>

                  <li className='nav-li'>  <AlbumOutlinedIcon className='icon'/> <a href="#discografia" className='options-nav-a'>Discografia</a> </li>

                  <li className='nav-li'>  <SpatialAudioOutlinedIcon className='icon'/> <a href="#shows" className='options-nav-a'>Recitales</a> </li>

                  <li className='nav-li'>  <LanguageOutlinedIcon className='icon'/><a href="#redes" className='options-nav-a'>Redes</a> </li>                 

                  <li className='nav-li opc-secundarias'>  <YouTubeIcon className='icon'/><a href="https://www.youtube.com/@indiosolarioficial" className='options-nav-a '>Youtube</a> </li>

                  <li className='nav-li opc-secundarias'>  <WebIcon className='icon'/><a href="https://tienda.indiosolarioficial.com/" className='options-nav-a '>Web</a> </li>

                  <li className='nav-li opc-secundarias'>  <GradeIcon className='icon'/><a href="https://indiosolarioficial.com/novedades.html" className='options-nav-a'>Novedades</a> </li>

                  <li className='nav-li opc-secundarias'>  <PlayCircleIcon className='icon'/><a href="https://open.spotify.com/intl-es/artist/0nUGkxUncFeXt0Dr0hhrc4" className='options-nav-a'>Spotify</a> </li>

              </ul>

            </div>

          <div className='nav-bottom'>
            <div className='nav-bottom-uno'>
            <h3>we are</h3>
            <h5>In socials networks</h5>
            <div className='icons-container'>
              <FacebookRoundedIcon className='icon-face'/>
              <SendRoundedIcon className='icon-telegram'/>
              <WhatsAppIcon className='icon-whatsapp'/>
            </div>
            </div>

            <div className='nav-bottom-dos'>
              <div>
                
              <PhoneCallbackIcon className='phone-icon'/>
              <CircleIcon className='punto-icon'/>
              </div>              
              <h3>Online <br /> Support</h3>
            </div>
           
          </div>

        
          <div className='btn-exit'>
            <button onClick={cerrarMenu} className='btn-salir'>  <CloseOutlinedIcon className='icon icon-exit'/> </button>
          </div>

         

        </nav>


        <section className='app-container'>


          <Options />

          <MainScreen />

          <RankProduct />



        </section>

        
        

      </div>


    </div>
  )
}

export default Home ;