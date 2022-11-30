import React from 'react';

import BrowserOnly from '@docusaurus/BrowserOnly';
import { useColorMode } from '@docusaurus/theme-common';
const Embed = (props) => {
  const { colorMode } = useColorMode();

  return (
    <BrowserOnly>
      {() => {
        const EmbedComponent = require('react-embed').default;
        
        return <EmbedComponent isDark={colorMode === 'dark'} {...props} />;
      }}
    </BrowserOnly>
  );
};

export default Embed;
