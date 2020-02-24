"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CondominiumSchema extends Schema {
  up() {
    this.create("condominiums", table => {
      table.increments();
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .string("name", 80)
        .notNullable()
        .unique();

      table.timestamps();
    });
  }

  down() {
    this.drop("condominiums");
  }
}

module.exports = CondominiumSchema;
