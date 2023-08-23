import React from 'react';
import "./form.css"

const Form = () => {
    return (
        <div className='form-container'>

             <div className='fondo-formulario'>
                <form className='formulario'>
                    <h3> Informacion del Envio</h3>
                    <input placeholder='Ingresar Pais'/>
                    <input placeholder='Ingresar Provincia'/>
                    <input placeholder='Ingresar Cuidad'/>
                    <input placeholder='Ingresar Codigo Postal'/>
                    <input placeholder='Ingresar Domicilio'/>
                    <input placeholder='Ingresar Nombre completo'/>

                    <button type='submit'> Confirmar Datos </button>
                </form>
            </div>

        </div>
    );
}

export default Form;
