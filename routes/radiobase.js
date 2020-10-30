const express = require('express');
const router = express.Router();
const {queryAll} = require('@http/RadiobaseController')
/* GET home page. */
/**
 * @swagger
 * /Radiobase:
 *  get:
 *    tags:
 *      - Radiobase
 *    description: Use to request for all Radiobase.
 *    parameters:
 *      - name: nPagination
 *        in: path
 *        required: true
 *      - name: nRecords
 *        in: path
 *        required: true
 *      - name: dateInitial
 *        in: path
 *        required: true
 *      - name: dateEnd
 *        in: path
 *        required: true
 *      - name: region
 *        in: path  
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/', queryAll);
/**
 * @swagger
 * definitions:
 *  Radiobase:
 *    description: Parameters required
 *    type: object
 *    properties:
 *      nPagination:
 *        type: string
 *      nRecords:
 *        type: string
 *      dateInitial:
 *        type: string
 *      dateEnd:
 *        type: string
 *      region:
 *        type: string
 */

module.exports = router;
