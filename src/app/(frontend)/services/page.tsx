'use client'

import { useRouter } from 'next/navigation'
import '../services/services.css'
import { CreditsSlider } from '@/components/CreditsSlider/CreditsSlider'


const ServicesPage = () => {
    const router = useRouter();

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
                <button className='btn-contacto' onClick={() => router.push('/contacts')}>Contactar ahora </button>
            </div>
            < CreditsSlider />
        </div>
    )
}

export default ServicesPage