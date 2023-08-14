import React from 'react';
import "./discografia.css"
import discografia_title from "../../assets/discografia.png";
import gulp from "../../assets/gulp.webp";
import Oktubre from "../../assets/okrtubre.jpg";
import unBaion from "../../assets/unbaion.jpg";
import bang from "../../assets/bang.jpg"
import laMosca from "../../assets/lamosca.jpg";
import cordero from "../../assets/cordero.jpg";
import lobo from "../../assets/lobo.jpg";
import luzbelito from "../../assets/luzbelito.jpg";
import bondi from "../../assets/bondi.jpg";
import momo from "../../assets/momo.jpg" ;
import StarIcon from '@mui/icons-material/Star';

function Discografia() {
  return (

    <div className='discografia' id="discografia">

        <div className='discografia-container'>

            <div className="discografia-principal">

                <div className='img-content'>
                    <img src={discografia_title} alt="" className='img-discografia' />
                </div>

                <div className='disc-container'>

                    <div className='album-content'>

                        <img src={gulp} alt="" />
                        <h3>Gulp! <span>1985</span> </h3>

                        <div className='calificacion'> 
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        </div>

                    </div>

                    <div className='album-content'>

                        <img src={Oktubre} alt="" />
                        <h3>Oktubre <span>1986</span> </h3>

                        <div className='calificacion'> 
                        <StarIcon />
                        <StarIcon />                                              
                        </div>

                    </div>

                    <div className='album-content'>

                        <img src={unBaion} alt="" />
                        <h3>Un baion para el ojo idiota <span>1988</span> </h3>

                        <div className='calificacion'> 
                        <StarIcon />
                        <StarIcon /> 
                        <StarIcon />                                                  
                        </div>

                    </div>

                    <div className='album-content'>

                        <img src={bang} alt="" />
                        <h3>¡bang!¡bang!Estas liquidado <span>1989</span> </h3>

                        <div className='calificacion'> 
                        <StarIcon />
                        <StarIcon /> 
                        <StarIcon />
                        <StarIcon />     
                        <StarIcon />                                                       
                        </div>

                    </div>

                    <div className='album-content'>

                        <img src={laMosca} alt="" />
                        <h3>La mosca y la sopa <span>1991</span> </h3>

                        <div className='calificacion'> 
                        <StarIcon />
                        <StarIcon /> 
                        <StarIcon />                                                                             
                        </div>

                    </div>

                    <div className='album-content'>

                        <img src={cordero} alt="" />
                        <h3>Cordero atado <span>1993</span> </h3>

                        <div className='calificacion'> 
                        <StarIcon />
                        <StarIcon /> 
                        <StarIcon />                                                                             
                        </div>

                    </div>

                    <div className='album-content'>

                        <img src={lobo} alt="" />
                        <h3>Lobo suelto <span>1993</span> </h3>

                        <div className='calificacion'> 
                        <StarIcon />
                        <StarIcon /> 
                        <StarIcon />                                                                             
                        </div>

                    </div>

                    <div className='album-content'>

                    <img src={luzbelito} alt="" />
                    <h3>Luzbelito <span>1996</span> </h3>

                    <div className='calificacion'> 
                        <StarIcon />
                        <StarIcon /> 
                        <StarIcon />    
                        <StarIcon />                                                                          
                    </div>

                    </div>

                    <div className='album-content'>

                    <img src={bondi} alt="" />
                    <h3>Último bondi a Finisterre <span>1998</span> </h3>

                    <div className='calificacion'> 
                        <StarIcon />
                        <StarIcon />                                                                                              
                    </div>

                    </div>

                    <div className='album-content'>

                    <img src={momo} alt="" />
                    <h3>Momo Sampler  <span>2000</span> </h3>

                    <div className='calificacion'> 
                        <StarIcon />
                        <StarIcon /> 
                        <StarIcon />
                        <StarIcon />                                                                                                  
                    </div>

                    </div>

                </div>

            </div>
        </div>

    </div>
  )
}

export default Discografia ;