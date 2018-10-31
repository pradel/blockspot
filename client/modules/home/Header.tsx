import * as React from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import { Container } from '../../components';
import { config } from '../../config';

const HeaderContainer = styled.header`
  border-bottom: 1px solid #ececec;
`;

const StyledContainer = styled(Container)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderLogo = styled.img`
  margin-right: 20px;
  height: 20px;
`;

export const Header = () => (
  <HeaderContainer>
    <StyledContainer>
      <HeaderLeftContainer>
        <HeaderLogo alt="logo" src="/static/logo.png" />
        {/* <SearchInput placeholder="Berlin, Paris..." /> */}
      </HeaderLeftContainer>
      <a
        href={config.githubUrl}
        target="_blank"
        rel="noreferrer"
        title="Github"
      >
        <FaGithub size={28} />
      </a>
    </StyledContainer>
  </HeaderContainer>
);
