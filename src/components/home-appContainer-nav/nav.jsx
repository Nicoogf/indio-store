import React from 'react';
import "./nav.css";
import MenuIcon from '@mui/icons-material/Menu';


const Options = () => {

    const abrirMenu =() =>{
        const menuLateral = document.getElementById("menu")
        menuLateral.classList.toggle("visible")
    }

   
     

  return (


    <nav className='nav-main'>

        <div className="nav-container">

            <section className='time-container'>
                <h3 className='time-bar'> 🟢  </h3>
                <h2 className='time-bar'> 07:07 </h2>
            </section>

            <section className='music-options-container'>
                <a href="https://open.spotify.com/intl-es/artist/0nUGkxUncFeXt0Dr0hhrc4" target='_blank'>Spotify</a>                
                <a href="https://www.youtube.com/@indiosolarioficial" target='_blank'>Youtube</a>
                <a href="https://www.youtube.com/@indiosolarioficial" target='_blank'>Web</a>
                <a href="https://www.youtube.com/@indiosolarioficial" target='_blank'>Novedades</a>
            </section>

            <section>
                <input type="text" className='input-busqueda' />
            </section>

            <section className='icon-menu'>

                <button onClick={abrirMenu} className='btn-open-menu'> <MenuIcon className='icono-menu'/> </button>
             
            </section>

        </div>

    </nav>

  )
}

export default Options ;