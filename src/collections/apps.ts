import type { CollectionConfig } from "payload";
export const Apps: CollectionConfig =
{
    slug: 'Apps',
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
            type: 'text',
        },

        {
            name: 'descrption',
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
            label: 'Etquetas',
            fields: [
                {
                    name: 'tag',
                    type: 'text',

                }
            ]
        },

    ]
}