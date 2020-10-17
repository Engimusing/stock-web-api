const db = require('../dbConfig');


module.exports = {
    add,
    getAll
}

async function add(data) {
    const [dataset] = await db("status").insert(data, "id")
    return dataset;
}

async function getAll() {
    const [dataset] = await db("status").orderBy('time_run', 'desc').limit(1)
    return dataset;
}

