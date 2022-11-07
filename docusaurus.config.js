const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const locales = ['pt-BR', 'en'];

const localeConfigs = {
  en: {
    label: 'English',
  },
  'pt-BR': {
    label: 'Português',
  },
};

module.exports = {
  i18n: {
    defaultLocale: 'pt-BR',
    locales,
    localeConfigs,
  },
  title: 'OpenPix Developers',
  tagline: 'Instant payments Docs, APIs, SDKs',
  url: 'https://developers.openpix.com.br',
  baseUrl: '/',
  organizationName: 'entria',
  projectName: 'developer-portal',
  scripts: [],
  favicon: 'img/icons/OpenPixIcon.svg',
  onBrokenLinks: 'log',
  trailingSlash: false,
  onBrokenMarkdownLinks: 'warn',
  plugins: [
    require.resolve('./sitePlugin'),
    require.resolve('@cmfcmf/docusaurus-search-local', { language: 'pt-BR' }),
  ],
  themeConfig: {
    navbar: {
      title: 'OpenPix Developers',
      logo: {
        alt: 'OpenPix Developers',
        src: 'img/icons/OpenPixIcon.svg',
      },
      items: [
        {
          to: 'docs/intro/getting-started',
          label: 'Documentação',
          position: 'left',
        },
        {
          to: 'docs/category/apis',
          label: 'API',
          position: 'left',
        },
        {
          to: 'docs/plugin',
          label: 'Plugin',
          position: 'left',
        },
        {
          to: 'docs/tags',
          position: 'left',
          label: 'Tags',
        },
        {
          href: 'https://openpix.com.br/',
          label: 'OpenPix',
          position: 'right',
        },
        // {
        //   to: 'docs/help',
        //   label: 'Help',
        //   position: 'right',
        // },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['php'],
    },
    footer: {
      links: [
        {
          label: 'Woovi',
          href: 'https://woovi.com',
        },
        {
          label: 'OpenPix',
          href: 'https://openpix.com.br',
        },
      ],
      copyright: 'Copyright © Woovi / OpenPix',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          path: './docs',
          sidebarPath: './sidebars.js',
          editUrl: ({ locale, versionDocsDirPath, docPath }) => {
            return `https://github.com/Open-Pix/developers/edit/main/${versionDocsDirPath}/${docPath}`;
          },
          editCurrentVersion: true,
          remarkPlugins: [require('mdx-mermaid')],
        },
        // "blog": {
        //   "path": "blog"
        // },
        theme: {
          customCss: [require.resolve('./src/theme/customTheme.css')],
        },
        googleAnalytics: {
          trackingID: 'G-DFFLN19210',
        },
      },
    ],
    [
      'redocusaurus',
      {
        specs: [
          {
            route: '/pix/',
            spec: './src/swaggers/bacen-pix.json',
          },
          {
            route: '/api/',
            spec: './src/swaggers/openpix.json',
          },
        ],
      },
    ],
  ],
};
