import { CollectionConfig } from 'payload';
import { title } from 'process';
export const Services: CollectionConfig = {
    slug: 'services',
    access: {
        read: () => true,
    },
    fields: [

        {
            name: 'title',
            type: 'text',
        },

        {
            name: 'photo',
            type: 'upload',
            relationTo: 'media',
        }
    ]
}