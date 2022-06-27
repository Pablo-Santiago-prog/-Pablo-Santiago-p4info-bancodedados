/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  await knex('TBITEMNOTAFISCAL').del()
  await knex('TBITEMNOTAFISCAL').insert([
    {id: 1, sequencial: '111', quantidade: "2", valor: "18.00", produto_id: "1", notaFiscal_id: "10", TipoCliente: "Pessoa_Fisica"},
    {id: 2, sequencial: '222', quantidade: "10", valor: "47.50", produto_id: "2", notaFiscal_id: "20", TipoCliente: "Pessoa_Juridica"},
    {id: 3, sequencial: '333', quantidade: "4", valor: "8.00", produto_id: "3", notaFiscal_id: "30", TipoCliente: "Pessoa_Fisica"},
  ]);
};