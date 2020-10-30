'use strict';

const mongoose = require('mongoose');
const Radiobase = require('@models/Radiobase');
const { responseStructure, responseValid } = require('@utils/constants');


async function queryAll(req, res) {
    try {   
            // const radio = {
            //     _id: mongoose.Types.ObjectId(),
            //     RADIOBASE:'dffgfgdgdf',
            //     FECHA:'dfff'
            // }
            // const newRadio = new Radiobase(radio);
            // await newRadio.save();
            const {nPagination, nRecords, dateInitial, dateEnd, region} = req.query;
            console.log(nPagination, nRecords)
            const inicio = new Date(dateInitial)
            const fin = new Date(dateEnd)
            let query={}
            if(dateInitial || region){
                if(dateInitial && dateEnd) {
                    query.FECHA={ $gte: dateInitial , $lte: dateEnd }
                }
                if(region) {
                    query.REGION = region
                }
            }
            console.log(query)
            const contRadioBase = await Radiobase.find().count()
            const radiobase = await Radiobase.find(query).limit(parseInt(nRecords)).skip(parseInt(nPagination));
            console.log(contRadioBase);
            // console.log(radiobase)
            if (radiobase) {
                const preResponse = {totalRecord: contRadioBase, list: radiobase}
                const response = await responseStructure(200, 'Consulta a Radiobases', preResponse);
                return res.status(200).send(response);
            } else {
                const response = await responseStructure(204, 'Error', {});
                return res.status(200).send(response);
            }
            
    } catch (err) {
        console.log(err);
        return res.status(500).send(await responseStructure(500, 'Error en la peticion al servidor', {}));
    }
}

module.exports = {queryAll};