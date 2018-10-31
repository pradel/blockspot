/**
 * Setup the database
 */

exports.up = async function(knex) {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

  await knex.schema.createTable('countries', function(table) {
    table
      .uuid('id')
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'));
    table
      .timestamp('created_at')
      .notNullable()
      .defaultTo('now()');
    table
      .timestamp('updated_at')
      .notNullable()
      .defaultTo('now()');

    table.string('name').notNullable();
    table.string('slug').notNullable();
    table.float('latitude').notNullable();
    table.float('longitude').notNullable();
    table.string('google_id').notNullable();
  });

  await knex.schema.createTable('cities', function(table) {
    table
      .uuid('id')
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'));
    table
      .timestamp('created_at')
      .notNullable()
      .defaultTo('now()');
    table
      .timestamp('updated_at')
      .notNullable()
      .defaultTo('now()');

    table.string('name').notNullable();
    table.string('slug').notNullable();
    table.float('latitude').notNullable();
    table.float('longitude').notNullable();
    table.string('unsplash_id').notNullable();
    table.integer('nb_places').notNullable();
    table.string('google_id').notNullable();
    table
      .uuid('country_id')
      .notNullable()
      .references('countries.id');
  });

  await knex.schema.createTable('places', function(table) {
    table
      .uuid('id')
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'));
    table
      .timestamp('created_at')
      .notNullable()
      .defaultTo('now()');
    table
      .timestamp('updated_at')
      .notNullable()
      .defaultTo('now()');

    table.string('name').notNullable();
    table.string('slug').notNullable();
    table.string('address').notNullable();
    table.float('latitude').notNullable();
    table.float('longitude').notNullable();
    table.string('google_id').notNullable();
    table.string('category').notNullable();
    table
      .uuid('city_id')
      .notNullable()
      .references('cities.id');
  });
  return knex;
};

exports.down = async function(knex) {
  await knex.schema.dropTable('places');
  await knex.schema.dropTable('cities');
  await knex.schema.dropTable('countries');
  return knex;
};
