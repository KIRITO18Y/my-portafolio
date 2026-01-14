import type { GlobalConfig } from 'payload';
export const Contacts: GlobalConfig = {
    slug: 'contacts',
    access: {
        read: () => true

    },
    fields: [
        {
            name: 'photo',
            type: 'upload',
            relationTo: 'media',
        }
    ]

}