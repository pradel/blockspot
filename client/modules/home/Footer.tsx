import * as React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { List, Paragraph, Heading } from 'reakit';
import { FaTwitter, FaTelegram, FaGithub } from 'react-icons/fa';
import { Container } from '../../components';
import { config } from '../../config';

const FooterContainer = styled.footer`
  margin-top: 40px;
  margin-bottom: 40px;
`;

const StyledBox: any = styled(Box)`
  @media screen and (min-width: 40em) {
    border-right: ${(props: any) =>
      props.border ? '1px solid black' : 'none'};
  }
`;

const FooterColumn = styled.div`
  padding: 10px 0px;

  @media screen and (min-width: 40em) {
    padding: 20px 40px;
  }
`;

const FooterTitle = styled(Heading)`
  font-weight: 700;
  margin-bottom: 10px;
  font-size: 1em !important;
`;

const FooterLogo = styled.img`
  width: 185px;
  max-width: 100%;
`;

const FooterSocial = styled.a`
  margin-right: 6px;
`;

const FooterListItem = styled.li`
  display: flex;
  align-items: center;
`;

const FooterCoinImg = styled.img`
  height: 18px;
  margin-right: 6px;
`;

export const Footer = () => (
  <FooterContainer>
    <Container>
      <Flex flexWrap="wrap">
        <StyledBox width={[1, 1 / 3]} border="true">
          <FooterColumn>
            <FooterLogo alt="logo" src="/static/logo.png" />
            <div style={{ marginTop: 10 }}>
              <FooterSocial
                href={config.twitterUrl}
                target="_blank"
                rel="noreferrer"
                title="Twitter"
              >
                <FaTwitter size={25} color="#000000" />
              </FooterSocial>
              <FooterSocial
                href={config.telegramUrl}
                target="_blank"
                rel="noreferrer"
                title="Telegram"
              >
                <FaTelegram size={25} color="#000000" />
              </FooterSocial>
              <FooterSocial
                href={config.githubUrl}
                target="_blank"
                rel="noreferrer"
                title="Github"
              >
                <FaGithub size={25} color="#000000" />
              </FooterSocial>
            </div>
          </FooterColumn>
        </StyledBox>
        <StyledBox width={[1, 1 / 3]} border="true">
          <FooterColumn>
            <FooterTitle as="h5">About the project</FooterTitle>
            <Paragraph>
              BlockSpot is an open source project that allows you to find spots
              (as restaurants, bars, clubs, stores…) where you can actually
              spend your cryptocurrencies.
            </Paragraph>
            <Paragraph>
              This is the first version of BlockSpot!
              <br />
              And much more important, this is a crowdsourced map. That means
              your contribution is everything. Help us by adding new spots for
              the community and don't hesitate to give us feedback!
              <br />
              Have fun!
            </Paragraph>
            <Paragraph>The blockSpot Team 🤘</Paragraph>
          </FooterColumn>
        </StyledBox>
        <StyledBox width={[1, 1 / 3]}>
          <FooterColumn>
            <FooterTitle as="h5">Donate</FooterTitle>
            <Paragraph>
              If you like this project and want to support the development
              please consider making a donation ❤️
            </Paragraph>
            <List>
              {/* TODO show qrcode on click */}
              {/* TODO migrate static svg to react components */}
              <FooterListItem>
                <FooterCoinImg src="/static/btc.svg" alt="btc" />
                {config.btcAddress}
              </FooterListItem>
              <FooterListItem>
                <FooterCoinImg src="/static/eth.svg" alt="eth" />
                {config.ethAddress}
              </FooterListItem>
              <FooterListItem>
                <FooterCoinImg src="/static/bch.svg" alt="btc" />
                {config.bchAddress}
              </FooterListItem>
              <FooterListItem>
                <FooterCoinImg src="/static/ltc.svg" alt="btc" />
                {config.ltcAddress}
              </FooterListItem>
            </List>
          </FooterColumn>
        </StyledBox>
      </Flex>
    </Container>
  </FooterContainer>
);
