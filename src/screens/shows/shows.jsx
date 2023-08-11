import React from 'react';
import "./shows.css" ;
import recitales from "../../assets/recitales.png" ;
import olavarria_flyer from "../../assets/olavarria-flyer.png"


function Shows() {
  return (
    <div className='shows'> 

        <div className='show_container'>

            <img src={recitales} alt="" className='img_recitales' />

            <div className='lista-shows'>

                        <div className='list_shows'>

                            <img src={olavarria_flyer} alt=""/>

                            <h3 className='fecha_show'> 11 / 03 / 2017 </h3>


                         </div>


                            <div className='list_shows'>

                            <img src={olavarria_flyer} alt=""/>

                            <h3 className='fecha_show'> 11 / 03 / 2017 </h3>


                            </div>


                            <div className='list_shows'>

                            <img src={olavarria_flyer} alt=""/>

                            <h3 className='fecha_show'> 11 / 03 / 2017 </h3>


                            </div>
           </div>

           
        </div>

    </div>
  )
}

export default Shows ;