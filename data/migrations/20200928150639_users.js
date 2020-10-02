
exports.up = function(knex) {
  return knex.schema.createTable("users", tbl => {
      tbl.increments("id")
      tbl.text("username").unique().notNullable()
      tbl.text("password").notNullable()
      tbl.text("name")
  }).createTable("status", tbl => {
    tbl.increments("id")
    tbl.string("ticker")
    tbl.float("delta")
    tbl.float("profit")
    tbl.float("current_price")
    tbl.float("orig_price")
    tbl.float("quantity")
    tbl.float("mark")
    tbl.string("strike_str")
    tbl.string("exp_date")
    tbl.string("position_type")
    tbl.integer("order_id")
    tbl.string("time_run")
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("users").dropTableIfExists("status")
};
