import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './app.css'
import { faLink } from '@fortawesome/free-solid-svg-icons'
const Apps = () => {

    return (
        <div className="container-apps">
            <h1> apps</h1>
            <div className="header-apps">
                <div className='card-apps'>
                    <div className='card-img'>
                    </div>
                    <div className='logo-apps'>
                        <FontAwesomeIcon icon={faLink} className='apps-fagithub' />
                        <div className='title-apps'>
                            <span className='title-ui'>Botones Ui Flotantes</span>
                            <span className='title-offli'> Aplication web offline</span>
                        </div>
                    </div>
                    <p className='description-apps'>
                        Aplicacion sencilla de gention de contraseñas
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Apps