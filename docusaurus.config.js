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
  // customFields: {
  //   users: [
  //     {
  //       caption: 'User1',
  //       image: '/img/undraw_open_source.svg',
  //       infoLink: 'https://www.facebook.com',
  //       pinned: true,
  //     },
  //   ],
  //   repoUrl: 'https://github.com/entria/feedback-front',
  // },
  onBrokenLinks: 'log',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
          path: './docs',
          sidebarPath: './sidebars.js',
          remarkPlugins: [require('mdx-mermaid')],
          editUrl: ({ locale, versionDocsDirPath, docPath }) => {
            return `https://github.com/Open-Pix/developers/edit/main/${versionDocsDirPath}/${docPath}`;
          },
          editCurrentVersion: true,
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
            spec: './src/swaggers/openpix-with-examples.json',
          },
        ],
      },
    ],
  ],
  plugins: [
    require.resolve('./sitePlugin'),
    require.resolve('@cmfcmf/docusaurus-search-local', { language: 'pt-BR' }),
  ],
  themeConfig: {
    navbar: {
      title: 'OpenPix Developers',
      // logo: {
      //   src: 'img/icons/OpenPixIcon.svg',
      // },
      items: [
        {
          to: 'docs/getting-started',
          label: 'Documents',
          position: 'left',
        },
        {
          to: 'api',
          label: 'API',
          position: 'left',
        },
        {
          to: 'docs/plugin/',
          label: 'Plugin',
          position: 'left',
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
      additionalLanguages: ['php'],
    },
    footer: {
      links: [],
      copyright: 'Copyright © OpenPix / Entria',
    },
  },
};
