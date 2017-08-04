const db = require('../db/config');

const Coin = {};

Coin.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM coins
    WHERE id = $1
  `, [id]);
}

module.exports = Coin;