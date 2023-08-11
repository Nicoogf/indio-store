import React from 'react';
import title_store from "../../assets/store.png"
import product_1 from "../../assets/producto_1.png"
import product_2 from "../../assets/producto_2.png"
import product_5 from "../../assets/producto_5.png"
import product_13 from "../../assets/producto_13.png"
import product_7 from "../../assets/producto_7.png" ;

import product_12 from "../../assets/producto_12.jpg"


import "./store.css";

function Store() {

 


  return (
    
    <div className='store-container'>

        <section className='product-container'>

            <img src={ title_store } alt="" className='img-store'/>

            <div className='product-countent'>

                <article className='product'>

                <h6>Album</h6>

                <img src={ product_2 } alt="" className='img-producto'/>

                <div className='info-producto'>
                    <h4>Album</h4>
                    <h6>Ceremonia en la Tormenta</h6>
                    <p>$15.000</p>
                </div>
                

                </article>

                <article className='product'>

                <h6>Remera</h6>

                <img src={ product_5} alt="" className='img-producto'/>

                <div className='info-producto'>
                    <h4>Remera</h4>
                    <h6>Edicion PorcoRex</h6>
                    <p>$10.000</p>
                </div>
                

                </article>


                <article className='product'>

                    <h6>Remera</h6>

                    <img src={product_13 } alt="" className='img-producto'/>

                    <div className='info-producto'>
                        <h4>Libro</h4>
                        <h6>Delito Americano</h6>
                        <p>$1500.000</p>
                    </div>


                </article>

                <article className='product'>

                    <h6>Remera</h6>

                    <img src={product_1 } alt="" className='img-producto'/>

                    <div className='info-producto'>
                        <h4>Album</h4>
                        <h6>El Tesoro de los inocentes (Bingo-Fuel)</h6>
                        <p>$1500.000</p>
                    </div>


                </article>

                <article className='product'>

                <h6>Remera</h6>

                <img src={product_12 } alt="" className='img-producto'/>

                <div className='info-producto'>
                    <h4>Libro</h4>
                    <h6>La vida es una mision secreta</h6>
                    <p>$15000.00</p>
                </div>


                </article>

                <article className='product'>

                <h6>Remera</h6>

                <img src={product_7 } alt="" className='img-producto'/>

                <div className='info-producto'>
                    <h4>Remera</h4>
                    <h6>Edicion cantante Timido</h6>
                    <p>$7800.00</p>
                </div>


                </article>
              
              

            </div>

        </section>      
        
    </div>
  )
}

export default Store ;