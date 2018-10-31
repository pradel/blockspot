import * as next from 'next';
import * as express from 'express';
import * as RateLimit from 'express-rate-limit';
import { ApolloServer, ApolloError } from 'apollo-server-express';
import * as depthLimit from 'graphql-depth-limit';

import { Binding } from './generated/binding';
import { logger } from './utils/logger';
import { mergedSchema } from './graphql';
import { checkEnv } from './utils/checkEnv';

checkEnv();

const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';

const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const expressApp = express();

const apolloServer = new ApolloServer({
  schema: mergedSchema,
  validationRules: [depthLimit(4)],
  formatError: (error: ApolloError) => {
    if (error.originalError instanceof ApolloError) {
      return error;
    }
    logger.error(error);
    return {
      message: 'Internal server error',
    };
  },
  context: {
    hasura: new Binding(),
  },
});

apolloServer.applyMiddleware({ app: expressApp });

nextApp.prepare().then(() => {
  // Needed by express-rate-limit
  expressApp.enable('trust proxy');

  if (process.env.NODE_ENV === 'production') {
    /**
     * Redirect from www to root domain
     * See https://zeit.co/docs/guides/redirect
     */
    expressApp.use((req, res, next) => {
      if (
        req.hostname !== 'blockspot.app' &&
        req.hostname !== process.env.NOW_URL
      ) {
        return res.redirect(`${process.env.APP_URL}${req.originalUrl}`);
      }
      return next();
    });

    const limiter = new RateLimit({
      windowMs: 1000,
      max: 5,
      skip: req => {
        // Whitelist static folder
        if (req.url.startsWith('/static/')) {
          return true;
        }
        return false;
      },
    });
    expressApp.use(limiter);
  }

  expressApp.get('/city/:citySlug', (req, res) => {
    return nextApp.render(req, res, '/city', {
      citySlug: req.params.citySlug,
    });
  });

  expressApp.get('*', (req, res) => {
    return handle(req, res);
  });

  expressApp.listen(port, () => {
    console.log(`Ready on ${process.env.APP_URL}`);
  });
});
