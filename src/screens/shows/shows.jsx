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

       <div className='shows'> 

        <div className='list-show'>

            <div className='show-info'>
    
              <img src={tandil} alt="" className='img-show' />
          

              <div className='info-show'>      

              <h3 className='info-title'>Mendoza</h3>

              <p className='texto-show'>Arrancó su show y en un intervalo del espectáculo expresó: “Son unos talibanes, como se gastaron tanta plata para venir al recital y no guardaron para las fiestas” y luego  afirmó que 150 mil personas habían asistido al recital.</p>
              </div>

              <div className='add-info-show'>

                <h5>21/09/2014</h5>
                <h5>22 Canciones</h5>
                <h5> 175.000 Espectadores</h5>

              </div>

            </div>


        </div>

        <div className='list-show'>

            <div className='show-info'>
    
              <img src={tandil} alt="" className='img-show' />
          

              <div className='info-show'>      

              <h3 className='info-title'>Tandil</h3>

              <p className='texto-show'> Las instalaciones del Hipódromo se vio colmada para disfrutar  del primer recital en el 2016 del rockero, quien durante el show reconoció que la enfermedad que padece es el mal de Parkinson.En este recital fue filmado Tsunami</p>

              </div>

              <div className='add-info-show'>

                <h5>12/03/2016</h5>
                <h5>29 Canciones</h5>
                <h5> 150.000 Espectadores</h5>

              </div>

            </div>


        </div>

        <div className='list-show'>

            <div className='show-info'>
    
              <img src={tandil} alt="" className='img-show' />
          

              <div className='info-show'>      

              <h3 className='info-title'>Olavarria</h3>

              <p className='texto-show'>El cantante comenzó a hacer vibrar a Olavarría con "Barba azul vs el amor letal". Luego continuó con "Porco Rex", "Arca Monster" y "Chau Mohicano", .El show debió ser pausado por la continuidad de incidentes.Fue su ultima funcion</p>

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

    </div>
  )
}

export default Shows ;