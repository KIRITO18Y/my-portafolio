'use client'
import Image from 'next/image'
import { CreditsSlider } from '@/components/CreditsSlider/CreditsSlider'
import '../contacts/contacts.css'
import { useEffect, useState } from 'react'


const ContactsPage = () => {
    const [contacts, setContacts] = useState<any>({});


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
        message: '',
    })

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async () => {

        try {
            const res = await fetch('/api/contacts/?depth=2', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (!res.ok) throw new Error()

            alert('Mensaje enviado correctamente ✅')

            setFormData({
                name: '',
                email: '',
                phone: '',
                city: '',
                message: '',
            })
        } catch {
            alert('Error al enviar el mensaje ❌')
        }
    }


    return (
        <div className="contacts-container">
            <div className="contacts-content">
                <div className="contacts-header">
                    <h1 className="contacts-title">Contacto</h1>
                    <div className="contacts-inputs">
                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Nombre Completo"
                        />

                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                        />

                        <input
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Teléfono"
                        />

                        <input
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="Ciudad"
                        />


                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Mensaje"
                        />

                        <div className="contacts-btn">
                            <button onClick={handleSubmit} className='contacts-button' >
                                Enviar Mensaje
                            </button>
                        </div>
                    </div>
                </div>

                <div className="contacts-foto-box">
                    <Image
                        src={contacts.photo?.url}
                        alt="Foto"
                        className="contacts-foto"
                    />
                </div>
            </div>
            <CreditsSlider />
        </div>
    )
}

export default ContactsPage
