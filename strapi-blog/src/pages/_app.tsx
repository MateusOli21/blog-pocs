import React from 'react';
import { AppProps } from 'next/app';

import { GlobalStyles } from '../styles/globals';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
};

export default App;
