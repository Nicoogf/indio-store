import React from 'react';
import "./store.css";
import remeraPorco from "../../assets/producto_5.png";
import recitales_title from "../../assets/recitales.png";
import discoTesoro from "../../assets/producto_1.png";
import libroSecretos from "../../assets/producto_11.jpg" ;
import libroSuenio from "../../assets/producto_12.jpg" ;


function Store() {

 


  return (
    
    <div className='store-main' id="store">

        <div className='store-container'>

        <img src={recitales_title} alt="" className='img-recitales'/>

        <div className='products'>

            <div className='product'>

                <img src={remeraPorco} alt="" />


                <div className='article-text'>

                <h3>Remera</h3>

                <div className='article-text-info'>
                    <p className='name-product'>PORCO REX - UNISEX (DTG)</p>
                    <p className='desc-product'>LOS TIEMPOS DE ENTREGA SON ESTIMADOS. PARA OBTENER MAS INFORMACION SOBRE EL ESTADO DE TU COMPRA, TE RECOMENDAMOS REVISAR EL SEGUIMIENTO DE ENVIO, UNA VEZ ACREDITADO EL PAGO.</p>
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
                    <p className='desc-product'>LOS TIEMPOS DE ENTREGA SON ESTIMADOS. PARA OBTENER MAS INFORMACION SOBRE EL ESTADO DE TU COMPRA, TE RECOMENDAMOS REVISAR EL SEGUIMIENTO DE ENVIO, UNA VEZ ACREDITADO EL PAGO.</p>
                </div>

                <div className='buy-options'>
                    <h6>$5000</h6>
                    <a href="">Agregar al carrito</a>
                </div>

            </div>





            </div> 

            <div className='product'>

            <img src={libroSecretos} alt="" />


            <div className='article-text'>

            <h3>Libro</h3>

            <div className='article-text-info'>
                <p className='name-product'>RECUERDOS QUE MIENTEN UN POCO</p>
                <p className='desc-product'>LOS TIEMPOS DE ENTREGA SON ESTIMADOS. PARA OBTENER MAS INFORMACION SOBRE EL ESTADO DE TU COMPRA, TE RECOMENDAMOS REVISAR EL SEGUIMIENTO DE ENVIO, UNA VEZ ACREDITADO EL PAGO.</p>
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

            <h3>Remera</h3>

            <div className='article-text-info'>
                <p className='name-product'>PORCO REX - UNISEX (DTG)</p>
                <p className='desc-product'>LOS TIEMPOS DE ENTREGA SON ESTIMADOS. PARA OBTENER MAS INFORMACION SOBRE EL ESTADO DE TU COMPRA, TE RECOMENDAMOS REVISAR EL SEGUIMIENTO DE ENVIO, UNA VEZ ACREDITADO EL PAGO.</p>
            </div>

            <div className='buy-options'>
                <h6>$7500</h6>
                <a href="">Agregar al carrito</a>
            </div>

            </div>





            </div> 

            <div className='product'>

            <img src={remeraPorco} alt="" />


            <div className='article-text'>

            <h3>Remera</h3>

            <div className='article-text-info'>
                <p className='name-product'>PORCO REX - UNISEX (DTG)</p>
                <p className='desc-product'>LOS TIEMPOS DE ENTREGA SON ESTIMADOS. PARA OBTENER MAS INFORMACION SOBRE EL ESTADO DE TU COMPRA, TE RECOMENDAMOS REVISAR EL SEGUIMIENTO DE ENVIO, UNA VEZ ACREDITADO EL PAGO.</p>
            </div>

            <div className='buy-options'>
                <h6>$7500</h6>
                <a href="">Agregar al carrito</a>
            </div>

            </div>





            </div> 

            <div className='product'>

            <img src={remeraPorco} alt="" />


            <div className='article-text'>

            <h3>Remera</h3>

            <div className='article-text-info'>
                <p className='name-product'>PORCO REX - UNISEX (DTG)</p>
                <p className='desc-product'>LOS TIEMPOS DE ENTREGA SON ESTIMADOS. PARA OBTENER MAS INFORMACION SOBRE EL ESTADO DE TU COMPRA, TE RECOMENDAMOS REVISAR EL SEGUIMIENTO DE ENVIO, UNA VEZ ACREDITADO EL PAGO.</p>
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