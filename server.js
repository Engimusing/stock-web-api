const express = require("express");
const server = express();

const authRouter = require("./routes/authRoutes")
const flaskRouter = require("./routes/flaskRoutes")

const setup = require('./setup');
setup(server);

server.use(authRouter)
server.use(flaskRouter)

server.get('/', (req, res) => {
    res.send({message: "Api up!"})
})

module.exports = server;