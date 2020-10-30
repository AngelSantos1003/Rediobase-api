var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/example', (req, res) => {
    const { num1, num2 } = req.query;
    if (num1 && num2) {
        const operacion = parseInt(num1) + parseInt(num2);
        const dataResult = {
            headerResponse: {
                code: 200,
                message: 'ok'
            },
            payload: {
                nombre: 'Angel Eduardo',
                Apellidos: 'Santos Ramirez',
                datos: operacion
            }
        };
        res.status(200).send(dataResult);
    } else {
        const dataResult = {
            headerResponse: {
                code: 204,
                message: 'Error'
            },
            payload: {

            }
        };
        res.status(200).send(dataResult);
    };
});

module.exports = router;
