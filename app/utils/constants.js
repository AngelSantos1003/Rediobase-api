const responseStructure = async (code, message, payload) => {
    if (typeof payload === 'object') {
        let dataResult = [];
        if (Array.isArray(payload)) {
            dataResult = {
                headerResponse: {
                    code,
                    message
                },
                payload: { List: payload }
            };
        } else {
            dataResult = {
                headerResponse: {
                    code,
                    message
                },
                payload
            };
        }
        return dataResult;
    } else {
        const dataResult = {
            headerResponse: {
                code: 210,
                message: 'el cuerpo del payload no es un objeto'
            },
            payload
        };
        console.error(210, 'Payload no es un object');
        return dataResult;
    }
};
const responseValid = response => {
    const { headerResponse } = response;
    if (headerResponse.code !== 210) {
        return true;
    } else {
        return false;
    }
};
const emailValidation = email => {
    // eslint-disable-next-line no-useless-escape
    if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test((email))) {
        return true;
    } else {
        return false;
    }
};
module.exports = { responseStructure, responseValid, emailValidation };
