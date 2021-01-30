/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
	pgm.sql(`
	CREATE TABLE comments (
	id SERIAL PRIMARY KEY,
	created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
	contents VARCHAR(240) NOT NULL
	);
	`);
};

exports.down = pgm => {
	pgm.sql (`
	DROP TABLE comments;
	`);	
};


/* For windows cmd
set DATABASE_URL=postgres://USERNAME:PASSWORD@localhost:5432/socialnetwork&&npm run migrate up */
