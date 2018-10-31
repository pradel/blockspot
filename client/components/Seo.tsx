import * as React from 'react';
import Head from 'next/head';
import { config } from '../config';

interface Props {
  title: string;
  description: string;
  url: string;
}

export const Seo: React.SFC<Props> = ({ title, description, url }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Blockspot" />
    <meta property="og:url" content={url} />
    <meta
      property="og:image"
      content={`${config.appUrl}/static/facebook_share.png`}
    />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@Blockspotapp" />
  </Head>
);
