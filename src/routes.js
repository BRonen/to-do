const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
    res.send({"hello": (req.query.message || "world")});
});

module.exports = routes;