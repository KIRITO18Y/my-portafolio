'use client'
import { useRouter } from 'next/navigation'
import '../services/services.css'
import { useEffect, useState } from 'react'
import { CreditsSlider } from '@/components/CreditsSlider/CreditsSlider'

const ServicesPage = () => {
    const router = useRouter();
    const [services, setServices] = useState<any[]>([]);

    useEffect(() => {
        fetch('/api/services/?depth=2')
            .then(resp => resp.json())
            .then(data => {
                setServices(data.docs ?? []);
            })
    }, [])

    return (
        <div className="services-container">
            <h1 className="services-titulo"> servicios </h1>
            <div className='services-header'>
                {services.map((service) => (
                    <div key={service.id} className='service-card'>
                        <div >
                            <img src={service.photo?.url} alt={service.title} className='service-img' />
                        </div>
                        <h2 className='service-title'>{service.title} </h2>
                    </div>
                ))}
            </div>
            <div className='btn-contacto-container'>
                <button className='btn-contacto' onClick={() => router.push('/contacts')}>Contactar ahora </button>
            </div>
            < CreditsSlider />
        </div>
    )
}

export default ServicesPage