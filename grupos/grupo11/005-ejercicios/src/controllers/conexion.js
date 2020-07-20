import { MongoClient } from 'mongodb';

// process.env buscar
// https://github.com/motdotla/dotenv
// para definir variables de entorno y luego buscarlas, P.e.process.env.BASEDEDATOS

export async function connect(collection) {
  try {
    const assert = require('assert');

    // Connection URL
    const url = 'mongodb://localhost:27017';

    // Database Name
    const dbName = 'Diplomatura';

    // Create a new MongoClient
    const client = new MongoClient(url, { useUnifiedTopology: true });

    // Use connect method to connect to the Server
    client.connect(async function (err) {
      try {
        assert.equal(null, err);
        console.log('Connected successfully to server');
      } catch {
        (err) => console.log(err);
      }
    });
    return client;
  } catch (err) {
    console.log(err);
  }

  return null;
}

export async function connectCollection(collection) {
  try {
    const assert = require('assert');

    // Connection URL
    const url = 'mongodb://localhost:27017';

    // Database Name
    const dbName = 'Diplomatura';

    // Create a new MongoClient
    const client = new MongoClient(url, { useUnifiedTopology: true });

    // Use connect method to connect to the Server
    await client.connect(async function (err) {
      try {
        assert.equal(null, err);
        console.log('Connected successfully to server');
      } catch {
        (err) => console.log(err);
      }
    });
    return client.db(dbName).collection('profesores');
    //return client;
  } catch (err) {
    console.log(err);
  }

  return null;
}
