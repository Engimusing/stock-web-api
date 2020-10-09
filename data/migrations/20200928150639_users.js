
exports.up = function(knex) {
  return knex.schema.createTable("users", tbl => {
      tbl.increments("id")
      tbl.text("username").unique().notNullable()
      tbl.text("password").notNullable()
      tbl.text("name")
  }).createTable("status", tbl => {
    tbl.increments("id")
    tbl.string('symbol_dict')
    tbl.string('ticker_list')
    tbl.string('filled_order_dict')
    tbl.string('working_order_dict')
    tbl.timestamp('time_run').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("users").dropTableIfExists("status")
};
