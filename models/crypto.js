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

Coin.follow = (user_id, coin_id) => {
    return db.none(`
        INSERT INTO tracking
        (user_id, coin_id)
        VALUES
        ($1, $2)   
    `, [user_id, coin_id]);
}

Coin.showFollowed = (id) => {
    console.log('following')
    return db.query(`
        SELECT * FROM tracking
        JOIN users ON user_id = users.id WHERE users.id = $1
        JOIN coins ON coin_id = coins.id
    `, [id]);
}

module.exports = Coin;