import '../contacts/contacts.css'

const ContactsPage = () => {
    return (
        <div className="contacts-container">

            <div className="contacts-header">
                <div className="contacts-inputs">
                    <h1 className="contacts-title">Contacto</h1>
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
                    src="/ruta/de/tu/foto.jpg"
                    alt="Foto"
                    className="contacts-foto"
                />
            </div>
        </div>
    )
}

export default ContactsPage
