import React from 'react' ;
import "./end.css" ;
import EndButton from '../../components/btn-end/buttonEnd';
import trabajo from "../../assets/trabajo.png";
import reactImg from "../../assets/react.png";
import porco from "../../assets/porco.png"


const EndView = () => {
  return (
    <div className='end_page'>

       

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
        
    </div>
  )
}

export default EndView ;