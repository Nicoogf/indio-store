import React from 'react';
import "./store.css";
import remeraPorco from "../../assets/producto_5.png";
import shop_title from "../../assets/shop.png";
import discoTesoro from "../../assets/producto_1fix.png";
import libroSecretos from "../../assets/producto_11fix.png" ;
import libroSuenio from "../../assets/producto_12fix.png" ;
import discoPerfume from "../../assets/producto_2fix.png" ;
import remeraIndio from "../../assets/producto_6.png" ;


function Store() {

 


  return (
    
    <div className='store-main' id="store">

        <div className='store-container'>

        <img src={shop_title} alt="" className='img-recitales'/>

        <div className='products'>

            <div className='product'>

                <img src={remeraPorco} alt="" />


                <div className='article-text'>

                <h3>Remera</h3>

                <div className='article-text-info'>
                    <p className='name-product'>PORCO REX - UNISEX</p>
                   
                </div>

                <div className='buy-options'>
                    <h6>$7500</h6>
                    <a href="">Agregar al carrito</a>
                </div>

                </div>



                

            </div> 

            <div className='product'>

                <img src={discoTesoro} alt="" />


                <div className='article-text'>

                <h3>Album</h3>

                <div className='article-text-info'>
                    <p className='name-product'>EL TESORO DE LOS INOCENTES</p>
                  
                </div>

                <div className='buy-options'>
                    <h6>$9500</h6>
                    <a href="">Agregar al carrito</a>
                </div>

            </div>





            </div> 

            <div className='product'>

            <img src={libroSecretos} alt="" />


            <div className='article-text'>

            <h3>Libro</h3>

            <div className='article-text-info'>
                <p className='name-product'>RECUERDOS QUE MIENTEN</p>
              
            </div>

            <div className='buy-options'>
                <h6>$16000</h6>
                <a href="">Agregar al carrito</a>
            </div>

            </div>





            </div> 

            <div className='product'>

            <img src={libroSuenio} alt="" />


            <div className='article-text'>

            <h3>Libro</h3>

            <div className='article-text-info'>
                <p className='name-product'>LA VIDA ES UNA MISIÓN SECRETA</p>
                
            </div>

            <div className='buy-options'>
                <h6>$6900</h6>
                <a href="">Agregar al carrito</a>
            </div>

            </div>





            </div> 

            <div className='product'>

            <img src={discoPerfume} alt="" />


            <div className='article-text'>

            <h3>Album</h3>

            <div className='article-text-info'>
                <p className='name-product'>EL PERFUME DE LA TEMPESTAD</p>
                
            </div>

            <div className='buy-options'>
                <h6>$5000</h6>
                <a href="">Agregar al carrito</a>
            </div>

            </div>





            </div> 

            <div className='product'>

            <img src={remeraIndio} alt="" />


            <div className='article-text'>

            <h3>Remera</h3>

            <div className='article-text-info'>
                <p className='name-product'>REMERA INDIO - UNISEX </p>
              
            </div>

            <div className='buy-options'>
                <h6>$7500</h6>
                <a href="">Agregar al carrito</a>
            </div>

            </div>





            </div> 




        </div>


        </div>

        
      
        
    </div>
  )
}

export default Store ;