'use client'

import { CreditsSlider } from '@/components/CreditsSlider/CreditsSlider'
import '../contacts/contacts.css'
import { useEffect, useState } from 'react'


const ContactsPage = () => {
    const [contacts, setContacts] = useState<any>({});

    useEffect(() => {
        fetch('/api/contacts/?depth=2')
            .then(resp => resp.json())
            .then(data => setContacts(data))
    }, [])

    return (
        <div className="contacts-container">
            <div className="contacts-content">
                <div className="contacts-header">
                    <h1 className="contacts-title">Contacto</h1>
                    <div className="contacts-inputs">
                        <input type="text" placeholder="Nombre Completo" />
                        <input type="email" placeholder="Email" />
                        <input type="text" placeholder="Teléfono" />
                        <input type="text" placeholder="Ciudad" />
                        <textarea placeholder="Mensaje"></textarea>
                        <div className="contacts-btn">
                            <button className="contacts-button">Enviar Mensaje</button>
                        </div>
                    </div>
                </div>

                <div className="contacts-foto-box">
                    <img
                        src={contacts.photo?.url}
                        alt="Foto"
                        className="contacts-foto"
                    />
                </div>
            </div>
            < CreditsSlider />
        </div>
    )
}

export default ContactsPage
