const should = require('chai').should();
const supertest = require('supertest');
const sinon = require('sinon');
const sinonMongoose = require('sinon-mongoose');
const expect = require('chai').expect;
// const app = require('../bin/www');
const listDoc = require('../server/list/listdocEntity');
const url = supertest('http://localhost:8080/search');


describe('Searchdoc CRUD Testing using sinon',()=>{


  it('should add a List(save)',(done)=>{
    var ListMock = sinon.mock(new listDoc({id:12}));
    var list =ListMock.object;
    var expectedResult = {status: true};
    ListMock.expects('save').yields(null, expectedResult);
    list.save(function(err,result){
    ListMock.verify();
    ListMock.restore();
    expect(result.status).to.be.true;
    done();
    });
  });
  it('should not add a list(save)',(done)=>{
        var ListMock = sinon.mock(new listDoc({id:12}));
        var list = ListMock.object;
        var expectedResult = {status: false};
        ListMock.expects('save').yields(expectedResult, null);
        list.save(function(err,result){
        ListMock.verify();
        ListMock.restore();
        expect(err.status).to.be.false;
        done();
        });
  });
  it('should get the list(find)',(done)=>{
      var ListMock = sinon.mock(listDoc);
      var expectedResult = {status:true};
      ListMock.expects('find').yields(null, expectedResult);
      listDoc.find(function(err,result){
      ListMock.verify();
      ListMock.restore();
      expect(result.status).to.be.true;
      done();
      });
  });
  it('should not get the list(find)',(done)=>{
      var ListMock = sinon.mock(listDoc);
      var expectedResult = {status:false };
      ListMock.expects('find').yields(expectedResult, null);
      listDoc.find(function(err,result){
      ListMock.verify();
      ListMock.restore();
      expect(err.status).to.be.false;
      done();
      });
  });
  it('should get one row and update the list(findOneAndUpdate)',(done)=>{
      var ListMock = sinon.mock(listDoc);
      var expectedResult = {status:true};
      ListMock.expects('findOneAndUpdate').yields(null, expectedResult);
      listDoc.findOneAndUpdate(function(err,result){
      ListMock.verify();
      ListMock.restore();
      expect(result.status).to.be.true;
      done();
      });
  });
  it('should not update the list(findOneAndUpdate)',(done)=>{
      var ListMock = sinon.mock(listDoc);
      var expectedResult = {status:false };
      ListMock.expects('findOneAndUpdate').yields(expectedResult, null);
      listDoc.findOneAndUpdate(function(err,result){
      ListMock.verify();
      ListMock.restore();
      expect(err.status).to.be.false;
      done();
      });
  });
  it('should get one row and update the list(update)',(done)=>{
      var ListMock = sinon.mock(listDoc);
      var expectedResult = {status:true};
      ListMock.expects('update').yields(null, expectedResult);
      listDoc.update(function(err,result){
      ListMock.verify();
      ListMock.restore();
      expect(result.status).to.be.true;
      done();
      });
  });
  it('should not update the list(update)',(done)=>{
      var ListMock = sinon.mock(listDoc);
      var expectedResult = {status:false };
      ListMock.expects('update').yields(expectedResult, null);
      listDoc.update(function(err,result){
      ListMock.verify();
      ListMock.restore();
      expect(err.status).to.be.false;
      done();
      });
  });

});