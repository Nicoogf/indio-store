import React from 'react';
import "./home.css";
import  logoNav from "../../assets/logo-nav.png";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AlbumOutlinedIcon from '@mui/icons-material/AlbumOutlined';
import SpatialAudioOutlinedIcon from '@mui/icons-material/SpatialAudioOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

function Home() {
  return (
    <div>

      <div className='app-main'>


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

        </section>

      </div>


    </div>
  )
}

export default Home ;