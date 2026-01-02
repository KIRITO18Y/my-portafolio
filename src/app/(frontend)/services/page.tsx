import { CreditsSlider } from '@/components/CreditsSlider/CreditsSlider'
import '../services/services.css'

const ServicesPage = () => {
    return (
        <div className="services-container">

            <div className='services-header'>

                <h1 className="services-titulo"> servicios </h1>

                <div className='service-card'>
                    <div className='service-img'>

                    </div>
                    <h2 className='service-title'>Desarrollo de aplicaciones web </h2>
                </div>
            </div>
            <div className='btn-contacto-container'>
                <button className='btn-contacto'>Contactar ahora </button>
            </div>
            < CreditsSlider />
        </div>
    )
}

export default ServicesPage