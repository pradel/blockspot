import * as React from 'react';
import styled from 'styled-components';
import { Button } from 'reakit';
import { Container } from '../../components';

const HeroContainer = styled.div`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 70px;
  background: url(/static/home.png);
  background-position: right bottom;
  background-size: contain;
  background-repeat: no-repeat;
  margin-bottom: -1px;

  @media screen and (min-width: 40em) {
    padding-top: 150px;
  }
`;

const HeroHeadline = styled.h1`
  max-width: 340px;
  font-size: 2.3em;
  line-height: 1.3em;
  font-weight: 700;
`;

const HeroDescription = styled.div`
  max-width: 255px;
  margin-top: 20px;
  line-height: 1.3em;
`;

const HeroButton = styled(Button)`
  min-width: 130px;
  padding: 1.1em;
  margin-top: 40px;

  &:hover {
    background-color: #e33b33;
  }
`;

function scrollTo(element: HTMLElement) {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop,
  });
}

export const Hero = () => (
  <HeroContainer>
    <Container>
      <HeroHeadline>Find the best spots to spend your crypto</HeroHeadline>
      <HeroDescription>
        Have you ever wondered where you could spend your crypto in your city?
        Join the community and discover / help other people to find new spots!
      </HeroDescription>
      <HeroButton
        onClick={() => scrollTo(document.getElementById('cities-list')!)}
      >
        Let's start
      </HeroButton>
    </Container>
  </HeroContainer>
);
