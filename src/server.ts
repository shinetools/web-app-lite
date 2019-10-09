import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import yes from 'yes-https';
import compression from 'compression';

process.title = 'ShineWebApp';

const dev = process.env.NODE_ENV !== 'production';
const STATIC_FOLDER = path.join(__dirname, 'static');
const PORT = dev ? 3000 : 8080;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(yes());
app.use(helmet());
app.use(compression());
app.use(express.static(STATIC_FOLDER));

// Support HTML5 History API
app.get('/*', (req, res): void => {
  res.sendFile('index.html', { root: STATIC_FOLDER });
});

const server = app.listen(PORT, (): void => {
  // eslint-disable-next-line no-console
  console.log(`🚀 Server listening on port: ${PORT}`);
});

const shutDown = (): void => {
  server.close((): void => {
    process.exit(0);
  });

  setTimeout((): void => {
    process.exit(1);
  }, 10000);
};

process.on('SIGTERM', shutDown);
process.on('SIGINT', shutDown);
