import * as React from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { config } from '../../config';
import { Footer } from '../home/Footer';

const FixedFooterContainer: any = styled.div`
  z-index: 2;
  position absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  transform: ${(props: any) =>
    !props.open
      ? `translateY(calc(+100% - ${config.heightFooter}px))`
      : 'translateY(0)'};
  transition: .4s ease-in-out;
`;

const FixedFooterBarContainer = styled.div`
  height: ${config.heightFooter}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  border-top: 1px solid #ececec;
  border-bottom: 1px solid #ececec;
`;

const ArrowUpIconContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const StyledArrowUpIcon: any = styled(MdKeyboardArrowUp)`
  transition: 0.4s ease-in-out;
  transform: ${(props: any) =>
    props.open ? `rotate(180deg)` : 'rotate(0deg)'};
`;

interface State {
  open: boolean;
}

export class FixedFooter extends React.Component<{}, State> {
  state = {
    open: false,
  };

  handleToggleFooter = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { open } = this.state;
    return (
      <FixedFooterContainer open={open}>
        {/* Fix to hide the footer on this page */}
        <style type="text/css">{`body { overflow: hidden; }`}</style>
        <FixedFooterBarContainer>
          <div />
          <ArrowUpIconContainer onClick={this.handleToggleFooter}>
            <StyledArrowUpIcon open={open} size={26} />
          </ArrowUpIconContainer>
          <a
            href={config.githubUrl}
            target="_blank"
            rel="noreferrer"
            title="Github"
          >
            <FaGithub size={24} />
          </a>
        </FixedFooterBarContainer>
        <Footer />
      </FixedFooterContainer>
    );
  }
}
