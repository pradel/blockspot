import App, { Container } from 'next/app';
import * as React from 'react';
import Router from 'next/router';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-boost';
import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';
import { Provider as ReakitProvider, css } from 'reakit';
import defaultTheme from 'reakit-theme-default';
import { analytics } from '../client/lib/analytics';
import withApollo from '../client/lib/withApollo';

injectGlobal`
  ${reset}

  body {
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    background: white;
    line-height: 18px;
  }

  a {
    text-decoration: none;
  }
  a:visited { 
    color: black;
  }
`;

const theme = {
  ...defaultTheme,
  Button: css`
    ${defaultTheme.Button};
    border-radius: 1.8em;
    padding: 1em 2em;
    height: auto;
    background-color: black;
    font-size: 0.8em;
  `,
};

class MyApp extends App<{
  apolloClient: ApolloClient<{}>;
}> {
  componentDidMount() {
    // Init analytics module
    analytics.init();

    // Log current page
    analytics.pageview();

    Router.onRouteChangeComplete = () => {
      // Log each page change
      analytics.pageview();
    };
  }

  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <ReakitProvider theme={theme}>
            <Component {...pageProps} />
          </ReakitProvider>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
