const chai = require('chai');
const app = require('../bin/www');
const chaiHttp = require('chai-http');

const { expect } = chai;

chai.use(chaiHttp);

describe('Server!', () => {
    it('API example', done => {
        chai
            .request(app)
            .get('/example?num1=5&num2=5')
            //.send({ num1: 5, num2: 5 }) post 
            .end((err, res) => {
            expect(res).to.have.status(200)
            expect(res.body.headerResponse.code).to.equals(200)
            done();
        })
    });
});
