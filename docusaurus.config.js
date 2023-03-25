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
    [
      '@docusaurus/plugin-client-redirects',
      {
        createRedirects(existingPath) {
          const redirect = ['woocommerce', 'magento1', 'magento2']

          const redirectPlugin = redirect.filter((item) => existingPath.includes(item))

          if (existingPath.includes('/docs/ecommerce') && redirectPlugin.length > 0) {

            const newPath = existingPath.replace('/docs/ecommerce', `/docs/ecommerce/${redirectPlugin}`)

            return [
              newPath,
            ]

          }
          return undefined; // Return a falsy value: no redirect created
        },
      },
      
    ],
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
          to: '/api',
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
        {
          href: 'https://github.com/Open-Pix/developers',
          label: 'Github',
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
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
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
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-DFFLN19210',
          anonymizeIP: true,
        },
      },
    ],
    [
      'redocusaurus',
      {
        specs: [
          {
            route: '/pix/',
            spec: './src/swaggers/bacen-pix.yml',
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
