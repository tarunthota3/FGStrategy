const should = require('chai').should();
const supertest = require('supertest');
const sinon = require('sinon');
const sinonMongoose = require('sinon-mongoose');
const expect = require('chai').expect;
// const app = require('../bin/www');
const cardDoc = require('../server/card/carddocEntity');
const url = supertest('http://localhost:8080/card');

describe('carddoc CRUD Testing using sinon',()=>{

  it('should add a card(save)',(done)=>{
    var CardMock = sinon.mock(new cardDoc({id:12}));
    var card =CardMock.object;
    var expectedResult = {status: true};
    CardMock.expects('save').yields(null, expectedResult);
    card.save(function(err,result){
    CardMock.verify();
    CardMock.restore();
    expect(result.status).to.be.true;
    done();
    });
  });
  it('should not add a card(save)',(done)=>{
        var CardMock = sinon.mock(new cardDoc({id:12}));
        var card = CardMock.object;
        var expectedResult = {status: false};
        CardMock.expects('save').yields(expectedResult, null);
        card.save(function(err,result){
        CardMock.verify();
        CardMock.restore();
        expect(err.status).to.be.false;
        done();
        });
  });
});
