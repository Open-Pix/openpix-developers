import React from 'react';
import LinkDocusaurus from '@docusaurus/Link';
import type { Props as PropsDocusaurus } from '@docusaurus/Link';
import clsx from 'clsx';

import styles from './card.module.css';

type Props = {
  title: string;
  content: string;
  icon?: JSX.Element;
} & PropsDocusaurus;

const CardLink = (props: Props) => {
  const { href, title, content, icon, children, ...rest } = props;

  return (
    <LinkDocusaurus
      href={href}
      className={clsx(styles['card-link--item'])}
      {...rest}
    >
      {icon ? (
        <div className={clsx(styles['card-link-div-icon'])}>
          {icon}
          <h3>{title}</h3>
        </div>
      ) : (
        <h3>{title}</h3>
      )}
      <p>{content}</p>
      {children && children}
    </LinkDocusaurus>
  );
};

export { CardLink };

