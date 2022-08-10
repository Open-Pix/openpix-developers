import React from 'react';
// import { ThemeProvider } from 'styled-components';
// import { createMuiTheme } from '@material-ui/core/styles';
// import {
//   ThemeProvider as MuiThemeProvider,
//   StylesProvider,
// } from '@material-ui/styles';

// const theme = createMuiTheme();

// Default implementation, that you can customize
const Root = ({ children }) => {
  // return (
  //   <StylesProvider injectFirst>
  //     <ThemeProvider theme={theme}>
  //       <MuiThemeProvider theme={theme}>
  //         {children}
  //       </MuiThemeProvider>
  //     </ThemeProvider>
  //   </StylesProvider>
  // )

  return <>{children}</>;
};

export default Root;
