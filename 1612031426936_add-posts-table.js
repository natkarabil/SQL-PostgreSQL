/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
	pgm.sql (`
	CREATE TABLE posts (
	id SERIAL PRIMARY KEY,
	url VARCHAR (300),
	lat NUMERIC,
	lng NUMERIC
	);
	`);
};

exports.down = pgm => {
	pgm.sql (`
	DROP TABLE posts;
	`);
};


/* For windows cmd
set DATABASE_URL=postgres://USERNAME:PASSWORD@localhost:5432/socialnetwork&&npm run migrate up */
