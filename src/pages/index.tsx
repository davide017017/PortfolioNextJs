import dynamic from 'next/dynamic';
import { FC, memo } from 'react';

import Page from '../components/Layout/Page';
import Hero from '../components/Sections/Hero';
import About from '../components/Sections/About';
import Portfolio from '../components/Sections/Portfolio';
import Skills from '../components/Sections/Skills';
import Contact from '../components/Sections/Contact';
import Footer from '../components/Sections/Footer';
import { homePageMeta } from '../data/data';

const Header = dynamic(() => import('../components/Sections/Header'), { ssr: false });

const Home: FC = memo(() => {
  const { title, description } = homePageMeta;

  return (
    <Page title={title} description={description}> 
      <Header/>
      <Hero/> 
      <About/> 
      <Skills/> 
      <Portfolio/> 
      <Contact/> 
      <Footer/>
    </Page>
  );
});

Home.displayName = 'Home'; 

export default Home;