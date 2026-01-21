import { CollectionConfig } from 'payload'
import nodemailer from 'nodemailer'

export const Contacts: CollectionConfig = {
    slug: 'contacts',

    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
        },
        {
            name: 'email',
            type: 'email',
            required: true,
        },
        {
            name: 'phone',
            type: 'text',
        },
        {
            name: 'city',
            type: 'text',
        },
        {
            name: 'message',
            type: 'textarea',
            required: true,
        },
    ],

    hooks: {
        afterChange: [
            async ({ doc, operation }) => {
                if (operation !== 'create') return

                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: process.env.GMAIL_USER,
                        pass: process.env.GMAIL_PASS,
                    },
                })

                await transporter.sendMail({
                    from: `"Formulario Web" <${process.env.GMAIL_USER}>`,
                    to: process.env.GMAIL_USER,
                    subject: '📩 Nuevo mensaje de contacto',
                    html: `
            <h3>Nuevo mensaje</h3>
            <p><b>Nombre:</b> ${doc.name}</p>
            <p><b>Email:</b> ${doc.email}</p>
            <p><b>Teléfono:</b> ${doc.phone}</p>
            <p><b>Ciudad:</b> ${doc.city}</p>
            <p><b>Mensaje:</b></p>
            <p>${doc.message}</p>
          `,
                })
            },
        ],
    },
}

