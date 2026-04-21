import type { CollectionConfig } from "payload";
export const Experience: CollectionConfig =
{
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
            name: 'description',
            type: 'textarea',
        },

        {
            name: 'link',
            type: 'text',
        },

        {
            name: 'video',
            type: 'upload',
            relationTo: 'media',
        },

        {
            name: 'photo',
            type: 'upload',
            relationTo: 'media',
        },
    ]
}