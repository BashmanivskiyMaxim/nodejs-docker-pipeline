let url = "http://localhost:3001";

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

describe('NodeJSApp', () => {

    describe('Scenario #1', () => {
        it('Get /', function (done) {
            chai.request(url)
                .get('/')
                .end((err, res) => {
                    res.status.should.be.equal(200);
                    res.text.should.be.equal('Hello World!')
                    done();
                });
        });
        it('Get /users', function (done) {
            chai.request(url)
                .get('/users')
                .end((err, res) => {
                    res.status.should.be.equal(200);
                    res.body.should.have.length(3);
                    done();
                });
        });
    });

});