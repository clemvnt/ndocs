import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Neos',
  description: 'A full stack C# framework, from the database to the UI.',
  srcDir: 'src',
  themeConfig: {
    nav: [
      {
        text: 'Blog',
        link: '/blog/',
      },
      {
        text: 'Docs',
        link: '/docs',
        items: [
          {
            text: 'Getting started',
            link: '/docs/getting-started/',
          },
          { text: 'Quick start', link: '/quick-start' },
          { text: 'Essentials', link: '/essentials' },
          { text: 'Guides', link: '/guides' },
        ],
      },
      { text: 'API', link: '/api' },
      {
        text: 'About',
        link: '/about',
        items: [
          { text: 'Releases', link: '/releases' },
          { text: 'Team', link: '/team' },
        ],
      },
    ],
    sidebar: {
      blog: false,
      docs: [
        {
          text: 'Getting started',
          children: [
            { text: 'Introduction', link: '' },
            { text: 'Architecture', link: '' },
            { text: 'Installation', link: '' },
            { text: 'CLI', link: '' },
          ],
        },
        {
          text: 'Quick start',
          link: '',
        },
        {
          text: 'Essentials',
          children: [
            {
              text: 'Database',
              link: '',
              collapsable: true,
              children: [
                { text: 'Configuration', link: '' },
                { text: 'Data tables', link: '' },
              ],
            },
            {
              text: 'Backend',
              link: '',
              collapsable: true,
              children: [
                {
                  text: 'Entities',
                  link: '',
                },
                {
                  text: 'Entity views',
                  link: '',
                },
                { text: 'Server methods', link: '' },
              ],
            },
            {
              text: 'Frontend',
              link: '',
              collapsable: true,
              children: [
                { text: 'UI views', link: '' },
                { text: 'UI components', link: '' },
                { text: 'Menu', link: '' },
                { text: 'Lookups', link: '' },
              ],
            },
            {
              text: 'Shared',
              link: '',
              collapsable: true,
              children: [
                { text: 'Data objects', link: '' },
                { text: 'Notifications', link: '' },
                { text: 'String resources', link: '' },
              ],
            },
          ],
        },
        {
          text: 'Guides',
          children: [
            { text: 'Authentication', link: '' },
            { text: 'Debugging', link: '' },
          ],
        },
      ],
    },
  },
});
