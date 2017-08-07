

CREATE TABLE IF NOT EXISTS users (
    id SERIAL primary key,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_digest TEXT NOT NULL,
    firstname VARCHAR(255),
    lastname VARCHAR(255) 
);


CREATE TABLE IF NOT EXISTS coins (
    id SERIAL primary key,
    name VARCHAR(255) UNIQUE NOT NULL,
    handle VARCHAR(255) UNIQUE NOT NULL,
    symbol VARCHAR(255) UNIQUE NOT NULL,
    description VARCHAR(2500) UNIQUE NOT NULL
);