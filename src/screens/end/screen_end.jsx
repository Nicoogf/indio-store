import React from 'react' ;
import "./end.css" ;
import proyecto from "../../assets/end.png"

const EndView = () => {
  return (
    <div className='end_page'>

        <div className='end_container'>

            <img src={proyecto} alt="" />

            <h6>Landing-page realizada para el proyecto final del curso full-stack.Abajo el link del repositorio en GitHub</h6>

            <a href="https://github.com/Nicoogf/indio-store" target="_blank" className='end_subtitle'>Ir a Git</a>
        </div>
        
    </div>
  )
}

export default EndView ;