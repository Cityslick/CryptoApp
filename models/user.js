const db = require('../db/config');

const User = {};

User.findByUserName = (username) => {
    return db.oneOrNone(`
    SELECT * FROM users
    WHERE username = $1
    `, [username]);
};

User.create = (user) => {
    return db.one(`
    INSERT INTO users
    (username, password_digest, email, firstname, lastname)
    VALUES
    ($1, $2, $3, $4, $5)
    RETURNING *
    `, [user.username, user.password_digest, user.email, user.firstname, user.lastname]);
};

User.showFollowed = (id) => {
    return db.query(`
        SELECT * FROM tracking
        JOIN coins ON coin_id = coins.id
        JOIN users ON user_id = users.id WHERE users.id = $1
    `, [id]);
}

User.destroy = (id) => {
    return db.none(`
        DELETE FROM tracking
        WHERE id = $1
    `, [id])
}

module.exports = User;