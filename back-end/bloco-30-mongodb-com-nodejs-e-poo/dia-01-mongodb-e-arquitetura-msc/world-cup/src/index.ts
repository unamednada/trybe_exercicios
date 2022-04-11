import App from './app';

const app = new App().express;

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});