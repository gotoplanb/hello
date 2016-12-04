'use strict'

process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();

chai.use(chaiHttp);

describe('Index', () => {

  describe('/GET root', () => {
      it('it should GET a simple hello world', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('message').and.equal('Hello, World!');
              done();
            });
      });
  });

});
