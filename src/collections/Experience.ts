import type { CollectionConfig } from "payload";

export const Experience : CollectionConfig = {
    slug: 'Experience',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'title',
            type: 'text',
        },

        {
            name: 'subtitle',
            type: 'textarea',
        },

        {
            name: 'Description',
            type: 'textarea',
        },
        
        {
            name: 'photo',
            type: 'upload',
            relationTo: 'media',

        },

    ]
}