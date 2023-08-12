import React from 'react';
import "./shows.css" ;
import recitales from "../../assets/recitales.png" ;
import tandil from "../../assets/tandil.jpg"



function Shows() {
  return (
    <div className='shows'> 

    <div className='show-container'>

      <div className='show-container-elements'>

        <img src={recitales} alt="" className='show-img'/>

        <div className='list-show'>

            <div className='show-info'>
    
              <img src={tandil} alt="" className='img-show' />
          

              <div className='info-show'>      

              <h3 className='info-title'>Tandil</h3>

              <p className='texto-show'>El cantante comenzó a hacer vibrar a Olavarría con "Barba azul vs el amor letal". Luego continuó con "Porco Rex", "Arca Monster" y "Chau Mohicano", .El show debió ser pausado por la continuidad de incidentes.</p>

              </div>

              <div className='add-info-show'>

                <h5>11/03/2017</h5>
                <h5>24 Canciones</h5>
                <h5> 330.000 Espectadores</h5>

              </div>

            </div>


        </div>

      

      </div>



    </div>

    </div>
  )
}

export default Shows ;