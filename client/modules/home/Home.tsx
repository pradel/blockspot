import * as React from 'react';
import styled from 'styled-components';
import { config } from '../../config';
import { Seo } from '../../components';
import { Header } from './Header';
import { Hero } from './Hero';
import { Footer } from './Footer';
import { CitiesList } from './CitiesList';

const BackgroundContainer = styled.div`
  background: #eeeeee;
`;

export const Home = () => (
  <React.Fragment>
    <Seo
      title="Blockspot - Find the best spots to spend your crypto"
      description="Have you ever wondered where you could spend your crypto in your city? Join the community and discover / help other people to find new spots!"
      url={config.appUrl}
    />
    <Header />
    <Hero />
    <BackgroundContainer>
      <CitiesList />
    </BackgroundContainer>
    <Footer />
  </React.Fragment>
);
