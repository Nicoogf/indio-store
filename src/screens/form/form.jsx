import React from 'react';
import "./form.css"

const Form = () => {
    return (
        <div className='form-container'>

             <div className='fondo-formulario'>

                <div className='flyer'>
                    <h5> Para no perderte ninguna <br />
                    <span>Novedad</span> </h5>
                </div>

                <form className='formulario'>
                    <h3> Suscribite </h3>
                    <input placeholder='Ingresar nombre de usuario'/>
                    <input placeholder='Ingresar Email'/>
                    <input placeholder='Ingresar Contraseña'/>
                    <input placeholder='Ingresar Confirmar Contraseña'/>                

                    <div className='terminos'>
                    <input type="checkbox" name="" id="" />
                    <p>Acepto terminos y condiciones </p>
                    </div>

                   
                    <button type='submit'> Crear cuenta </button>
                </form>
            </div>

        </div>
    );
}

export default Form;
