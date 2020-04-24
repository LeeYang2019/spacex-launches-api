const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');

//initialize express
const app = express();

//create route with graphql
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening to ${PORT}...`));
