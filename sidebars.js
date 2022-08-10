module.exports = {
  docs: {
    OpenPix: ['getting-started', 'login'],
    'Single Sign On': [
      'single-sign-on-getting-started',
      'single-sign-on-gmail',
    ],
    Integrations: [
      'integrations/integration-overview',
      'integrations/integration-itau-bank',
      'integrations/integration-bradesco-bank',
      'integrations/integration-banco-do-brasil-bank',
      'integrations/integration-gerencianet-bank',
      'integrations/integration-bs2',
      'integrations/integration-flagship',
      'integrations/integration-sicoob',
      'integrations/integration-original-bank',
      'integrations/integration-santander',
    ],
    'E-commerce': [
      'ecommerce/woocommerce-plugin',
      'ecommerce/magento1-plugin',
      'ecommerce/magento2-plugin',
      'ecommerce/oracle-commerce-cloud',
    ],
    API: ['apis/api-getting-started', 'apis/api-samples', 'apis/api-postman'],
    Webhook: [
      {
        Platform: [
          'webhook/platform/webhook-platform-role',
          'webhook/platform/webhook-platform-api',
        ],
        API: ['webhook/api/webhook-api'],
      },
      'webhook/webhook-samples',
      'webhook/webhook-hmac',
    ],
    Giftback: [
      'giftback/giftback-what-is',
      'giftback/giftback-enable',
      'giftback/giftback-charge-states',
      'giftback/giftback-give-giftback-customer',
      {
        'E-commerce': [['giftback/ecommerce/woocommerce-enable-giftback']],
      },
    ],
    'Modo Teste': [
      'test/flow-company-bank-test',
      'test/test-pay-pix',
      'test/test-pay-pix-qrcode',
    ],
    Flows: [
      'flows/flow-create-charge-api',
      'flows/flow-edit-default-expiration',
      'flows/charge-flow-state-machine',
    ],
    Políticas: [
      'security/security-policy',
      'security/security-guidelines',
      'security/backup-policy',
    ],
    FAQ: [
      'FAQ/faq-banks',
      'FAQ/faq-charge',
      'FAQ/faq-virtual-account',
      'FAQ/faq-flagship',
      'FAQ/faq-pixQRCode-static',
      'FAQ/faq-general-policies',
      'FAQ/faq-withdraw',
      'FAQ/faq-transactions',
      'FAQ/faq-not-display-QRCode-checkout',
      'FAQ/faq-users',
      'FAQ/faq-cloudflare',
    ],
  },
  Plugin: [
    'plugin/app-id',
    'plugin/plugin',
    'plugin/plugin-samples',
    'plugin/plugin-react',
  ],
};
