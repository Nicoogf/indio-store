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

import logoNav from "../../assets/logo-nav.png";



function Home() {

  const cerrarMenu = () =>{    
    const menuLateral = document.getElementById("menu")
    menuLateral.classList.toggle("visible")
  }


  return (
    <div>

      <div className='app-main' id="main">


        <nav className='app-nav' id="menu">

          <div className='nav-logo'>
            <img src={logoNav} alt="" />

          </div>

          <div className='nav-menu'>

          <h4 className='nav-title-main'>Menu</h4>


            <ul className='ul-nav'>

              <li className='nav-li'>  <ShoppingBagOutlinedIcon className='icon'/> <a href="#store" className='options-nav-a'> Productos</a> </li>

              <li className='nav-li'>  <AlbumOutlinedIcon className='icon'/> <a href="#" className='options-nav-a'>Discografia</a> </li>

              <li className='nav-li'>  <SpatialAudioOutlinedIcon className='icon'/> <a href="#shows" className='options-nav-a'>Recitales</a> </li>

              <li className='nav-li'>  <LanguageOutlinedIcon className='icon'/><a href="#redes" className='options-nav-a'>Redes</a> </li>

            </ul>
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