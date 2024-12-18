import { themes } from 'prism-react-renderer';
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

// const locales = ['en'];

// const localeConfigs = {
//   en: {
//     label: 'English',
//   },
//   'pt-BR': {
//     label: 'Português',
//   },
// };

module.exports = {
  // i18n: {
  //   defaultLocale: 'en',
  //   locales,
  //   localeConfigs
  // },
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
    [
      '@gracefullight/docusaurus-plugin-microsoft-clarity',
      { projectId: 'j6ihzvjzvu' },
    ],
    require.resolve('./sitePlugin'),
    require.resolve('@cmfcmf/docusaurus-search-local', { language: 'pt-BR' }),
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/docs/ecommerce/woocommerce-plugin',
            to: '/docs/ecommerce/woocommerce/woocommerce-plugin',
          },
          {
            from: '/docs/ecommerce/woocommerce-subscriptions',
            to: '/docs/ecommerce/woocommerce/woocommerce-subscriptions',
          },
          {
            from: '/docs/ecommerce/magento1-plugin',
            to: '/docs/ecommerce/magento1/magento1-plugin',
          },
          {
            from: '/docs/ecommerce/magento2-plugin',
            to: '/docs/ecommerce/magento2/magento2-plugin',
          },
          {
            from: '/docs/integrations/n8n-with-woovi',
            to: '/docs/integrations/n8n-with-openpix',
          },
          {
            from: '/docs/integrations/woovi-trigger-n8n',
            to: '/docs/integrations/openpix-trigger-n8n',
          },
          {
            from: '/docs/ecommerce/oracle-commerce-cloud',
            to: '/docs/ecommerce/oracle/occ-getting-started',
          },
          {
            from: '/docs/getting-started',
            to: '/docs/intro/getting-started',
          },
        ],
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
      additionalLanguages: ['php', 'ruby', 'java', 'scala'],
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
          // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
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
            spec: './src/swaggers/bacen-pix.yaml',
          },
          {
            route: '/dict/',
            spec: './src/swaggers/bacen-dict.json',
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
