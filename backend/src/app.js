const mongoose = require('mongoose');

require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

const express = require('express');

// Separa a lógica de criação do servidor da lógica de alocação da porta.
// Quando for executar os testes, não quero que aloque portas. Testes direto dentro da aplicação

class AppController {
  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
    this.database();
  }

  middlewares() {
    // To understand body with json format
    this.express.use(express.json());
  }

  routes() {
    this.express.use(require('./routes'));
  }

  database() {
    // Verify the DB environment
    if (process.env.NODE_ENV == 'production') {
      mongoose.connect(
        'mongodb+srv://omni:omni@cluster0-kj5ow.mongodb.net/omni-devmap?retryWrites=true&w=majority',
        {
          useNewUrlParser: true,
          useUnifiedTopology: true
        }
      );
    } else {
      mongoose.connect(
        `mongodb://${process.env.DB_HOST}:27017/${process.env.DB_NAME}`,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true
        },
        () => {
          console.log('connected.');
        }
      );
    }
  }
}

module.exports = new AppController().express;
