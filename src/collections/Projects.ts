import { CollectionConfig } from "payload";
export const Projects: CollectionConfig ={
    slug: 'Projects',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'title',
            type: 'text',
        },

        {
            name: 'subtible',
            type: 'text',
        },

        {
            name: 'description',
            type: 'textarea',
        },

        {
            name: 'photo',        
            type: 'upload',
            relationTo: 'media',
        },

        {
            name: 'tags',
            type: 'array',
            label: 'Etiquetas',
            fields:[
            {
                    name: 'tag',
                    type: 'text',
            }
          ],
        },       
    ],
};