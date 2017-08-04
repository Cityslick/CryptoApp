const db = require('../db/config');

const Coin = {};

Coin.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM coins
    WHERE id = $1
  `, [id]);
}

Coin.findByHandle = (handle) => {
    return db.oneOrNone(`
    SELECT * FROM coins
    WHERE handle = $1
    `, [handle]);
}

module.exports = Coin;