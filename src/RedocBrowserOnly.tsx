import React from 'react';

import BrowserOnly from '@docusaurus/BrowserOnly';

const RedocBrowserOnly = (props) => {
  return (
    <BrowserOnly>
      {() => {
        const RedocStandalone = require('redoc').RedocStandalone;

        return <RedocStandalone {...props} />;
      }}
    </BrowserOnly>
  );
};

export default RedocBrowserOnly;
