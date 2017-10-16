const should = require('chai').should();
const supertest = require('supertest');
const sinon = require('sinon');
// const sinonMongoose = require('sinon-mongoose');
const expect = require('chai').expect;
// const app = require('../bin/www');
const userDoc = require('../server/users/userProfileEntity').userModel;
const url = supertest('http://localhost:8080/userdoc');

describe('userdoc CRUD Testing using sinon',()=>{

  it('should add a User(Save)',(done)=>{
    var UsersMock = sinon.mock(new userDoc({emailId:'sou@gmail.com'}));
    var user =UsersMock.object;
    var expectedResult = {status: true};
    UsersMock.expects('save').yields(null, expectedResult);
    user.save(function(err,result){
    UsersMock.verify();
    UsersMock.restore();
    expect(result.status).to.be.true;
    done();
    });
});
it('should not add new Users(Save)',(done)=>{
      var UsersMock = sinon.mock(new userDoc({'emaiId':'kohli'}));
      var user = UsersMock.object;
      var expectedResult = {status: false};
      UsersMock.expects('save').yields(expectedResult, null);
      user.save(function(err,result){
      UsersMock.verify();
      UsersMock.restore();
      expect(err.status).to.be.false;
      done();
      });
});
it('should get all the Users(find)',(done)=>{
    var UsersMock = sinon.mock(userDoc);
    var expectedResult = {status:true};
    UsersMock.expects('find').yields(null, expectedResult);
    userDoc.find(function(err,result){
    UsersMock.verify();
    UsersMock.restore();
    expect(result.status).to.be.true;
    done();
    });
});
it('should not get the Users(find)',(done)=>{
    var UsersMock = sinon.mock(userDoc);
    var expectedResult = {status:false };
    UsersMock.expects('find').yields(expectedResult, null);
    userDoc.find(function(err,result){
    UsersMock.verify();
    UsersMock.restore();
    expect(err.status).to.be.false;
    done();
    });
});
it('should get all the Users(findOne)',(done)=>{
    var UsersMock = sinon.mock(userDoc);
    var expectedResult = {status:true};
    UsersMock.expects('findOne').yields(null, expectedResult);
    userDoc.findOne(function(err,result){
    UsersMock.verify();
    UsersMock.restore();
    expect(result.status).to.be.true;
    done();
    });
});
it('should not get the Users(findOne)',(done)=>{
    var UsersMock = sinon.mock(userDoc);
    var expectedResult = {status:false };
    UsersMock.expects('findOne').yields(expectedResult, null);
    userDoc.findOne(function(err,result){
    UsersMock.verify();
    UsersMock.restore();
    expect(err.status).to.be.false;
    done();
    });
});
it('should update Users by Id(update)',(done)=>{
      var UsersMock = sinon.mock(new userDoc({phone:'123445567'}));
      var user = UsersMock.object;
      var expectedResult = {status: true};
      UsersMock.expects('update').yields(null, expectedResult);
      user.update(function(err,result){
        UsersMock.verify();
        UsersMock.restore();
        expect(result.status).to.be.true;
        done();
      });
});
it('should not update Users by Id(update)',(done)=>{
      var UsersMock = sinon.mock(new userDoc({phone:'123456746'}));
      var user = UsersMock.object;
      var expectedResult = {status: false};
      UsersMock.expects('update').yields(expectedResult, null);
      user.update(function(err,result){
        UsersMock.verify();
        UsersMock.restore();
        expect(err.status).to.not.be.true;
        done();
      });
});
});
