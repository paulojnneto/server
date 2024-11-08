const express = require('express');
const { default: axios } = require('axios');
const router = express.Router();
router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "Node Express API",
        version: "0.0.1"
    });
});


router.get('/teste', function (req, res, next) {
    axios.get('https://jsonplaceholder.typicode.com/todos').then((response) => {
        res.status(200).send(response.data);
    });
});
module.exports = router;