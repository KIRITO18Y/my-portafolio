import { faLink } from '@fortawesome/free-solid-svg-icons'; // <-- Paquete correcto

import './Experience.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Experience = () => {
    return (
        <div className="experience-container">
            <h3 className="experience-title">Aliados y Experiencia</h3>

            <div className="experience-card">
                <div className="experience-img">

                </div>

                <div className='experience-logos'>
                    <FontAwesomeIcon icon={faLink} className='experience-fagithub' />
                    <div className='experience-titles'>
                        <span className='title-net'>SIEMPRE.NET</span>
                        <span className='title-development'>Lideres en Desarrollo de Aplicacioness</span>
                    </div>
                </div>

                <p className='experience-description'>
                    He crecido como profecinal junto a esto empersando.
                    he sido parte de su equipo de trabajo desde 2014 hasta la actualidad,
                    es una empresa con mucha experiencia en el sector Educativo. Tambien son proveedores de infrastruturas
                </p>

                <div className='experience-link'>
                    <div className='link-net'>
                        <FontAwesomeIcon icon={faLink} className='falink' />
                        <a href="">SIEMPRE.NET</a>
                    </div>
                </div>
                <div className='experience-vd'>
                    <video src="aaaaa">video</video>
                </div>
            </div>
        </div>
    )
}