/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('TBNOTAFISCALVENDA').del()
    await knex('TBNOTAFISCALVENDA').insert([
      {id: 1, codigo: "1", data: "21/02", valorNota: "322", cliente_id: "1", itemNotaFiscal_id: "10"},
      {id: 2, codigo: "2", data: "09/07", valorNota: "433", cliente_id: "2", itemNotaFiscal_id: "20"},
      {id: 3, codigo: "3", data: "15/10", valorNota: "544", cliente_id: "3", itemNotaFiscal_id: "30"},
    ]);
  };