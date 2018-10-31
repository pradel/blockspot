import * as ReactGA from 'react-ga';
import { config } from '../config';

export const analytics = {
  init: () => {
    if (process.browser && config.googleAnalyticsTrackingCode) {
      ReactGA.initialize(config.googleAnalyticsTrackingCode);
    }
  },

  pageview: () => {
    if (process.browser && config.googleAnalyticsTrackingCode) {
      ReactGA.set({ page: window.location.pathname });
      ReactGA.pageview(window.location.pathname);
    }
  },

  event: (category: string, action: string) => {
    if (process.browser && config.googleAnalyticsTrackingCode) {
      ReactGA.event({ category, action });
    }
  },
};
