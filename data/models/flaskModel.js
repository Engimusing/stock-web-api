const db = require('../dbConfig');


module.exports = {
    add,
    getAll,
    getByTimestamp
}

async function add(data) {
    const [dataset] = await db("status").insert(data, "id")
    return dataset;
}

async function getAll() {
    const dataset = await db("status");
    return dataset;
}

async function getByTimestamp(timestamp) {
    const [dataset] = await db("status").where({ 'time_run': timestamp })
    return dataset;
}