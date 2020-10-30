'use strict';

const mongoose = require('mongoose');
const User = require('@models/User');
const Email = require('@utils/sendEmail');
const generatePassword = require('password-generator');
const { responseStructure, responseValid } = require('@utils/constants');
const bcrypt = require('bcrypt');
const saltRounds = 10;

async function aggregate(req, res) {
    try {
        const { nameUser, email, phone, idcustomer, intents, status } = req.body;

        const customUsers = await User.find({ Customer_id: idcustomer });
        if (customUsers.length >= 0 && customUsers.length < 10) {
            const pass = generatePassword(12, false);
            const hashPassword = await bcrypt.hash(pass, saltRounds);

            const user = {
                _id: mongoose.Types.ObjectId(),
                User_Name: nameUser,
                User_Email: email,
                User_Pass: hashPassword,
                User_Phone: phone,
                User_Login_Fail: 0,
                User_Number_Intents: intents,
                User_Status: status
            };
            const newUser = new User(user);
            if (newUser) {
                await Email.sendEmailUserAdd(nameUser, email, pass);
                await newUser.save();
                const response = await responseStructure(200, 'Se creo el usuario nuevo', { newUser });
                if (responseValid(response)) {
                    return res.status(200).send(response);
                };
            }
            const response = await responseStructure(204, 'Hubo un error al crear al usuario', {});
            return res.status(200).send(response);
        }
        const response = await responseStructure(204, 'Exediste el limite de usuarios', {});
        return res.status(200).send(response);
    } catch (err) {
        console.log(err);
        return res.status(500).send(await responseStructure(500, 'Error en la peticion al servidor', {}));
    }
}

async function update(req, res) {
    try {
        // eslint-disable-next-line camelcase
        const { idUser, User_Name, User_Email, User_Status } = req.body;
        const user = {
            User_Name: User_Name,
            User_Email: User_Email,
            User_Status: User_Status
        };
        const UserUpdate = await User.findOneAndUpdate({ _id: idUser }, user);
        console.log(UserUpdate, 'aaaaaaaaaaaa');
        if (UserUpdate) {
            const response = await responseStructure(200, 'Se actualizo el usuario', user);
            if (responseValid(response)) {
                return res.status(200).send(response);
            };
        }
        const response = await responseStructure(204, 'No se pudo actualizar el usuario', {});
        return res.status(200).send(response);
    } catch (err) {
        console.log(err);
        return res.status(500).send(await responseStructure(500, 'Error en la peticion al servidor', {}));
    }
}

module.exports = { aggregate, update };
