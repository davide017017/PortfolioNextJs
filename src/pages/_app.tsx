import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import {memo} from 'react';

const MyApp = memo(({Component, pageProps}: AppProps) => {
  return <Component {...pageProps} />;
});

MyApp.displayName = 'MyApp';

export default MyApp;
