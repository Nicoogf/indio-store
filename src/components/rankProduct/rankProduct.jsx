import React from 'react';
import "./rankProduct.css" ;

import producto from "../../assets/producto_1.png";
import producto11 from "../../assets/producto_11.jpg";
import producto3 from '../../assets/producto_3.png' ;
import producto4 from '../../assets/producto_4.png' ;


function rankProduct() {
  return (

    

    <section className='rank-product-container'>

            <div className='item-product'>

                <img src={producto} alt=""  className='img-product'/>
                <p className='type-product'>ALBUM</p>
                <p className='name-product'>Bingo Fuel</p>
                

            </div>

            <div className='item-product'>

                <img src={producto11} alt=""  className='img-product'/>
                <p className='type-product'>LIBRO</p>
                <p className='name-product'>Secretos que mienten</p>
                

            </div>

            <div className='item-product'>

                <img src={producto3} alt=""  className='img-product'/>
                <p className='type-product'>ALBUM</p>
                <p className='name-product'>PorcoRex</p>
               

            </div>

            <div className='item-product last-card'>

                <img src={producto4} alt=""  className='img-product'/>
                <p className='type-product'>ALBUM</p>
                <p className='name-product'>Bravos Muchachitos</p>


            </div>

    </section>
   
  );
};

export default rankProduct