/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex, Promise) {
    return knex.schema.createTable('ITEM_NOTA_FISCAL'), function(table) {
      table.increments();
      table.integer('codigo').notNullable();
      table.integer('id').notNullable().unique();
      table.integer('valor').notNullable();
      table.string('descricao').notNullable();
    }
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('ITEM_NOTA_FISCAL');
  }