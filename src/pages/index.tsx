import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

import Layout from '@theme/Layout';

import styles from './index.module.css'

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
    description: 'Integre a OpenPix com as suas necessidades - WhatsApp, Telegram, Discord, etc',
    href: '/docs/category/integra%C3%A7%C3%B5es',
  },
  {
    title: 'API',
    description: 'Para você que quer integrar a OpenPix diretamente, fornecemos nossa API também',
    href: '/api',
  },
];

const products = [
  {
    title: 'Cashback',
    description: 'Receba uma % da compra quando pagar a cobrança.',
    href: '/docs/category/cashback',
  },
  {
    title: 'Cashback fidelidade',
    description: 'Uma % da compra na próxima compra que ele fizer na sua plataforma',
    href: '/docs/category/cashback-fidelidade',
  },
]

const Home = () => {
  return (
    <Layout>
      <main className={clsx(styles['home-section'])}>
        <section className={clsx(styles['section-box'])}>
          {links.map((link, i) => (
            <Link href={link.href} key={`link-${i}`} className={clsx(styles['section-box--item'])}>
              <h3>{link.title}</h3>
              <p>{link.description}</p>
            </Link>
          ))}
        </section>
        <section className={clsx(styles['products-section'])}>
          <h2>Nossos produtos</h2>
          <section className={clsx(styles['products'])}>
            {products.map((product, i) => (
              <Link key={`product-${i}`} href={product.href} className={clsx(styles['products--item'])}>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </Link>
            ))}
          </section>
        </section>
      </main>
    </Layout>
  )
}

export default Home;
