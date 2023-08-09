import React from 'react';
import producto_1 from "../../assets/producto_13.png";
import "./store.css";

function Store() {
  return (
    <div>
        
        <div className='store-container'>


            <article className='producto_card'>

                <img src={producto_1} alt=""  className="img_card" />

                <div className='info_product'>

                <p>Escenas del delito americano</p>
                <h3>Libro</h3>                
                <h6>$15.000</h6>

                </div>
                
            </article>

            <article className='producto_card'>

                <img src={producto_1} alt=""  className="img_card" />

                <div className='info_product'>

                <p>Escenas del delito americano</p>
                <h3>Libro</h3>                
                <h6>$15.000</h6>

                </div>
                
            </article>

            <article className='producto_card'>

                <img src={producto_1} alt=""  className="img_card" />

                <div className='info_product'>

                <p>Escenas del delito americano</p>
                <h3>Libro</h3>                
                <h6>$15.000</h6>

                </div>
                
            </article>

            <article className='producto_card'>

                <img src={producto_1} alt=""  className="img_card" />

                <div className='info_product'>

                <p>Escenas del delito americano</p>
                <h3>Libro</h3>                
                <h6>$15.000</h6>

                </div>
                
            </article>
        </div>

    </div>
  )
}

export default Store ;