/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
	pgm.sql (`
	ALTER TABLE comments
	RENAME COLUMN contents TO body;
	`);
	};

exports.down = pgm => {
	pgm.sql (`
	ALTER TABLE comments
	RENAME COLUMN body TO contents;
	`);
};


/* For windows cmd
set DATABASE_URL=postgres://USERNAME:PASSWORD@localhost:5432/socialnetwork&&npm run migrate up */
