import Head from 'next/head';
import { FC, memo, PropsWithChildren } from 'react';

import { HomepageMeta } from '../../data/types';

interface PageProps extends PropsWithChildren<HomepageMeta> {}

const Page: FC<PageProps> = memo(({ children, title, description }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta content={description} name="description" />
      {/* Favicon e icone */}
      <link href="/favicon.ico" rel="icon" sizes="any" />
      <link href="/icon.svg" rel="icon" type="image/svg+xml" />
      {/* Open Graph / SEO */}
      <meta content={title} property="og:title" />
      <meta content={description} property="og:description" />
      <meta content="/ogImage.webp" property="og:image" />
      <meta
        content="https://yourwebsite.com"
        property="og:https://davide-martinico-portfolio.netlify.app/"
      />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </Head>
    {children}
  </>
));

Page.displayName = 'Page';
export default Page;
