import Head from 'next/head';
import {FC, memo, PropsWithChildren} from 'react';

import {HomepageMeta} from '../../data/types';

interface PageProps extends PropsWithChildren<HomepageMeta> {}

const Page: FC<PageProps> = memo(({children, title, description}) => (
  <>
    <Head>
      <title>{title}</title>
      <meta content={description} name="description" />
      {/* Favicon e icone */}
      <link href="/favicon.ico" rel="icon" sizes="any" />
      <link href="/icon.svg" rel="icon" type="image/svg+xml" />
      <link href="/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
      <link href="/site.webmanifest" rel="manifest" />
      {/* Open Graph / SEO */}
      <meta content={title} property="og:title" />
      <meta content={description} property="og:description" />
      <meta content="/ogImage.JPG" property="og:image" />
      <meta content="https://yourwebsite.com" property="og:url" /> {/* Aggiunta URL OG **************************/}
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </Head>
    {children}
  </>
));

Page.displayName = 'Page';
export default Page;
