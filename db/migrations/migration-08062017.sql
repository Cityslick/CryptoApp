\c cryptocurrency

CREATE TABLE IF NOT EXISTS tracking (
    id SERIAL primary key,
    user_id INTEGER REFERENCES users(id),
    coin_id INTEGER REFERENCES coins(id)
);