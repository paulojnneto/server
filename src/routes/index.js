const express = require('express');
const fs = require("fs");
const JSON_FILE = "src/mock/database.json";

const { default: axios } = require('axios');

const jsonData = fs.readFileSync(JSON_FILE);

const data = JSON.parse(jsonData);

const router = express.Router();
router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "Node Express API",
        version: "0.0.1"
    });
});


router.get('/teste', function (req, res, next) {
    const { todos = [] } = data;
    res.status(200).send(todos);

});
module.exports = router;