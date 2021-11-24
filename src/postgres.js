const { Pool } = require('pg');
const dbConfig = require('./dbconfig.json');

const pool = new Pool(dbConfig);

exports.db = {
  query(text, params) {
    return new Promise((resolve, reject) => { 
      pool.connect().then(client => {
        client
          .query(text, params)
          .then(res => {
            client.release();
            resolve(res);
          })
          .catch(err => {
            client.release();
            reject(err);
          });
      });
    });
  },
};

exports.pool = pool;
