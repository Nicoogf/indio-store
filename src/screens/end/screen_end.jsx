import React from 'react' ;
import "./end.css" ;
import EndButton from '../../components/btn-end/buttonEnd';
import trabajo from "../../assets/trabajo.png";
import reactImg from "../../assets/react.png";
import porco from "../../assets/porco.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';



const EndView = () => {
  return (
    <div className='end_page' id="redes">

       

        <div className='end-countent'>

          <div className='end_container'>

          <img src={trabajo} alt="" className='img-trabajo'/>  
          <img src={reactImg} alt="" className='img-trabajo'/>
          <p>Trabajo final realizado en ReactJS para el curso de FullStack UTN</p>
            <p>Alumno Nicolas Falabella</p> 
            <p>Fecha de presentacion 4/09/2023</p> 

          <EndButton />
      

    
          </div>

          <div className='flyer-porco'>
            <img src={porco} alt="" className='img-flyer'/>
          </div>

         
        </div>

        <div className="redes">

          <div className='redes-propias'>

            <h2>Propias</h2>

            <div className='icons-redes'>
            <a href="https://www.instagram.com/nfalabella_/" target='_blank'> <InstagramIcon /> </a>
            <a href="https://twitter.com/NicooGF_"target='_blank'> <TwitterIcon /> </a>
            <a href="https://github.com/Nicoogf"target='_blank'> <GitHubIcon /> </a>
            </div>
           

          </div>

          <div className='redes-artista'>
            
          <h2>Artista</h2>

          <div className='icons-redes'>
          <a href="https://www.instagram.com/indiosolarioficial/" target='_blank'> <InstagramIcon /> </a>
          <a href="https://twitter.com/Indio_Solari_ok" target='_blank'> <TwitterIcon /> </a>
          <a href="https://www.facebook.com/indiosolari" target='_blank'> <FacebookIcon /> </a>
          </div>

          </div>

        </div>
        
    </div>
  )
}

export default EndView ;