import Head from 'next/head';
import { FC, memo, PropsWithChildren } from 'react';
import { HomepageMeta } from '../../data/types';

interface PageProps extends PropsWithChildren<HomepageMeta> {}

const Page: FC<PageProps> = memo(({ children, title, description }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Favicon e icone */}
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" /> 
      <link rel="manifest" href="/site.webmanifest" />

      {/* Open Graph / SEO */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/ogImage.JPG" /> 
      <meta property="og:url" content="https://yourwebsite.com" /> {/* Aggiunta URL OG **************************/}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    {children}
  </>
));

Page.displayName = 'Page';
export default Page;