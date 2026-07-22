// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: 'https://sam-lair.knowledge-forge.ai',
    integrations: [starlight({
        title: 'My Docs',
        social: [
            { icon: 'server', label: 'Knowledge Forge AI', href: 'https://www.knowledge-forge.ai'},
            { icon: 'linkedin', label: 'LinkedIn', href: 'https://https://www.linkedin.com/in/samuel-lair' },
            { icon: 'github', label: 'GitHub', href: 'https://github.com/lair001' }
        ],
        sidebar: [
            {
                label: 'Guides',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Example Guide', slug: 'guides/example' },
                ],
            },
            {
                label: 'Reference',
                items: [{ autogenerate: { directory: 'reference' } }],
            },

        ],
        plugins: [
            starlightBlog(),
        ],
    }), react()],
});