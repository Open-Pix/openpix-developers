import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

import {
  FaMagento,
  FaJsSquare,
  FaReact,
  FaPhp,
  FaJava,
  FaPython,
  FaWhatsapp,
  FaOpencart,
} from 'react-icons/fa';
import { GrOracle } from 'react-icons/gr';
import { SiVtex, SiNodedotjs, SiPowershell, SiWoo, SiDelphi, SiRuby } from 'react-icons/si';
import { TbBrandCSharp, TbWebhook } from 'react-icons/tb';

import Layout from '@theme/Layout';

import { CardLink } from '../components/Card/CardLink';
import BotConversaIcon from '../icons/BotConversaIcon';
import SocPanelIcon from '../icons/SocPanelIcon';
import N8nIcon from '../icons/N8NIcon';
import AssineOnlineIcon from '../icons/AssineOnlineIcon';

import WabizIcon from '../icons/WabizIcon';

import styles from './index.module.css';

const links = [
  {
    title: 'Introdução',
    description: 'Dê os primeiros passos e aprenda sobre a plataforma aqui',
    href: '/docs/intro/getting-started',
  },
  {
    title: 'E-commerces',
    description: 'Integre a OpenPix com o seu e-commerce',
    href: '/docs/category/e-commerce',
  },
  {
    title: 'Integrações',
    description:
      'Integre a OpenPix com as suas necessidades - WhatsApp, Telegram, Discord, etc',
    href: '/docs/category/integra%C3%A7%C3%B5es',
  },
  {
    title: 'API',
    description:
      'Para você que quer integrar a OpenPix diretamente, fornecemos nossa API também',
    href: '/api',
  },
];

const products = [
  {
    title: 'Cashback',
    description: 'Receba uma % da compra quando pagar a cobrança',
    href: '/docs/category/cashback',
  },
  {
    title: 'Cashback fidelidade',
    description:
      'Uma % da compra na próxima compra que ele fizer na sua plataforma',
    href: '/docs/category/cashback-fidelidade',
  },
  {
    title: 'Maquininha Pix',
    description:
      'Imprima suas cobranças em um clique com a maquininha que você já tem',
    href: '/docs/category/maquininha-pix',
  },
];

const cards = [
  {
    title: 'Plugin Magento1',
    content:
      'Pix para Magento1. Gestão de QRCode Pix, integração de ordens e conciliação tempo real.',
    icon: <FaMagento color={'#f46f26'} size={30} />,
    docsTo: '/docs/ecommerce/magento1/magento1-oneclick',
    to: 'https://app.woovi.com/home/applications/magento1/add/oneclick',
  },
  {
    title: 'Plugin Magento2',
    content:
      'Pix para Magento2. Gestão de QRCode Pix, integração de ordens e conciliação tempo real.',
    icon: <FaMagento color={'#f46f26'} size={30} />,
    docsTo: '/docs/ecommerce/magento2/magento2-oneclick',
    to: 'https://app.woovi.com/home/applications/magento2/add/oneclick',
  },
  {
    title: 'Plugin WooCommerce',
    content:
      'Pix para Woo. Gestão de QRCode Pix, integração de ordens e conciliação tempo real.',
    icon: <SiWoo color={'#945888'} size={30} />,
    docsTo: '/docs/ecommerce/woocommerce/woocommerce-oneclick',
    to: 'https://app.woovi.com/home/applications/woocommerce/add/oneclick',
  },
  {
    title: 'WhatsApp',
    content:
      'Envie cobranças Pix por WhatsApp para seus clientes.',
    icon: <FaWhatsapp color='#25d366' size={30} />,
    docsTo: '/docs/whatsapp/whatsapp-how-to-activate',
    to: 'https://app.woovi.com/home/applications/js/add',
  },
  {
    title: 'Plugin VTEX',
    content:
      'Pix para VTEX. Gestão de QRCode Pix, integração de ordens e conciliação tempo real.',
    icon: <SiVtex color={'#ff3464'} size={30} />,
    docsTo: '/docs/ecommerce/vtex/vtex-integrating',
    to: 'https://app.woovi.com/home/applications/vtex/add',
  },
  {
    title: 'Plugin Javascript',
    content:
      'Pix para portais de cliente ou eCommerce Nativo. Gestão de QRCode Pix, integração de ordens e conciliação tempo real.',
    icon: <FaJsSquare color={'#f7e018'} size={30} />,
    docsTo: '/docs/plugin',
    to: 'https://app.woovi.com/home/applications/js/add',
  },
  {
    title: 'API REST',
    content: 'API REST. Crie cobranças do seu back-end.',
    icon: <FaReact color={'#353535'} size={30} />,
    docsTo:
      '/docs/apis/api-getting-started#criando-uma-nova-chave-de-apiplugin',
    to: 'https://app.woovi.com/home/applications/api/add',
  },
  {
    title: 'Oracle Commerce Cloud',
    content:
      'Pix para Oracle. Gestão de QRCode Pix, integração de ordens e conciliação tempo real.',
    icon: <GrOracle color={'#ed3237'} size={30} />,
    docsTo: 'https://openpix.com.br/ecommerce/oracle-commerce-cloud',
    to: 'https://app.woovi.com/home/applications/oracle/add',
  },
  {
    title: 'Webhook',
    content:
      'Seja avisado em tempo real sempre que um pagamento via Pix for realizado.',
    icon: <TbWebhook color={'#353535'} size={30} />,
    docsTo: '/docs/webhook/platform/webhook-platform-api',
    to: 'https://app.woovi.com/home/applications/webhook/create',
  },
  {
    title: 'PHP',
    content: 'SDK PHP completo para criar cobranças, cadastrar clientes, consultar transações e muito mais.',
    icon: <FaPhp color={'#787cb5'} size={30} />,
    docsTo:
      '/docs/category/php',
    to: 'https://app.woovi.com/home/applications/php/add',
  },
  {
    title: 'Ruby',
    content: 'SDK Ruby completo para criar cobranças, cadastrar clientes, consultar transações e muito mais.',
    icon: <SiRuby color={'#CC342D'} size={30} />,
    docsTo:
      '/docs/category/ruby',
    to: 'https://app.woovi.com/home/applications/ruby/add',
  },
  {
    title: 'Shell',
    content: 'Criar cobranças Pix usando Shell',
    icon: <SiPowershell color={'#787cb5'} size={30} />,
    docsTo:
      '/docs/apis/api-getting-started#criando-uma-nova-chave-de-apiplugin.',
    to: 'https://app.woovi.com/home/applications/shell/add',
  },
  {
    title: 'NodeJs',
    content: 'Criar cobranças Pix usando Nodejs',
    icon: <SiNodedotjs color={'#80bd41'} size={30} />,
    docsTo:
      '/docs/apis/api-getting-started#criando-uma-nova-chave-de-apiplugin.',
    to: 'https://app.woovi.com/home/applications/nodejs/add',
  },
  {
    title: 'C#',
    content: 'Criar cobranças Pix usando C#',
    icon: <TbBrandCSharp color={'#9b4f97'} size={30} />,
    docsTo:
      '/docs/apis/api-getting-started#criando-uma-nova-chave-de-apiplugin.',
    to: 'https://app.woovi.com/home/applications/csharp/add',
  },
  {
    title: 'Java',
    content: 'SDK Java completo para criar cobranças, cadastrar clientes, consultar transações e muito mais.',
    icon: <FaJava color={'#f89820'} size={30} />,
    docsTo:
      '/docs/category/java',
    to: 'https://app.woovi.com/home/applications/java/add',
  },
  {
    title: 'Python',
    content: 'Criar cobranças Pix usando Python',
    icon: <FaPython size={30} />,
    docsTo:
      '/docs/apis/api-getting-started#criando-uma-nova-chave-de-apiplugin.',
    to: 'https://app.woovi.com/home/applications/python/add',
  },
  {
    title: 'Delphi',
    content: 'Criar cobranças Pix usando Delphi',
    icon: <SiDelphi color={'#f42736'} size={30} />,
    docsTo:
      '/docs/apis/api-getting-started#criando-uma-nova-chave-de-apiplugin.',
    to: 'https://app.woovi.com/home/applications/delphi/add',
  },
  {
    title: 'SDK React',
    content:
      'SDK para React. Use para integrar em aplicativos da Web usando o React Framework.',
    icon: <FaReact color={'#00cef4'} size={30} />,
    docsTo: '/docs/plugin/plugin-react/',
  },
  {
    title: 'n8n',
    content:
      'Plug-in de integração n8n.io. Crie Pix e ouça eventos Pix diretamente em seus projetos n8n.',
    icon: <N8nIcon size={30} />,
    docsTo: '/docs/integrations/n8n-with-openpix',
  },
  {
    title: 'Assine Online',
    content:
      'Assine Online. Crie Pix e envie um documento personalizado com dados da Openpix.',
    icon: <AssineOnlineIcon color={'#353535'} size={30} />,
    docsTo: '/docs/integrations/assine-online-with-woovi',
  },
  {
    title: 'BotConversa',
    content:
      'BotConversa. Crie Pix e integre com o BotConversa para enviar uma mensagem personalizada no WhatsApp.',
    icon: <BotConversaIcon color={'#353535'} size={30} />,
    docsTo: '/docs/integrations/integrating-pix-with-whatsapp',
  },
  {
    title: 'SocPanel',
    content:
      'SocPanel. Crie Pix e integre com o SocPanel para receber pagamentos via Pix.',
    icon: <SocPanelIcon size={30} />,
    docsTo: '/docs/integrations/socpanel-openpix',
  },
  {
    title: 'OpenCart 3',
    content:
      'Aumente suas vendas agora no OpenCart 3 recebendo pagamentos instantâneos com Pix!',
    icon: <FaOpencart size={30} />,
    docsTo: '/docs/ecommerce/opencart/opencart3-extension',
    to: 'https://app.woovi.com/home/applications/opencart3/add',
  },
  {
    title: 'OpenCart 4',
    content:
      'Aumente suas vendas agora no OpenCart 4 recebendo pagamentos instantâneos com Pix!',
    icon: <FaOpencart size={30} />,
    docsTo: '/docs/ecommerce/opencart/opencart4-extension',
    to: 'https://app.woovi.com/home/applications/opencart/add',
  },
  {
    title: 'Wabiz',
    content:
      'Wabiz. Crie Pix e integre com o Wabiz para receber pagamentos via Pix em seu restaurante.',
    icon: <WabizIcon size={30} />,
    docsTo: '/docs/partnerships/wabiz-partner',
    to: 'https://app.woovi.com/home/applications/wabiz/add',
  },
];

const Home = () => {
  return (
    <Layout>
      <main
        className={clsx(styles['home-section'], styles['dark-mode--override'])}
      >
        <section>
          <h2>Comece por aqui</h2>
          <section className={clsx(styles['section-box'])}>
            {links.map((link, i) => (
              <CardLink
                href={link.href}
                key={`link-${i}`}
                title={link.title}
                content={link.description}
              />
            ))}
          </section>
        </section>

        <section>
          <h2>Nossas integrações</h2>
          <section className={clsx(styles['section-box'])}>
            {cards.map(({ icon, docsTo, title, content }, key) => (
              <CardLink
                icon={icon}
                href={docsTo}
                key={`link-${key}`}
                title={title}
                content={content}
              />
            ))}
          </section>
        </section>

        <section>
          <h2>Nossos produtos</h2>
          <section className={clsx(styles['products'])}>
            {products.map((product, i) => (
              <Link
                key={`product-${i}`}
                href={product.href}
                className={clsx(styles['products--item'])}
              >
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </Link>
            ))}
          </section>
        </section>
      </main>
    </Layout>
  );
};

export default Home;