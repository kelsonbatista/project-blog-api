require('dotenv').config();
const router = require('./routes');
const errorMiddleware = require('./middlewares/errorMiddleware');
const app = require('./api');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(router);
app.use(errorMiddleware);

app.listen(port, () => console.log('ouvindo porta', port));
