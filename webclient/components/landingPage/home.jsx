import React from 'react';
import Cookie from 'react-cookie';
import {hashHistory} from 'react-router';
import $ from 'jquery';
import {Button,Image} from 'semantic-ui-react';

class Cards extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    }
    logoutCall() {
      let emailId = Cookie.load('email');
       Cookie.remove('token');
       Cookie.remove('username');
       Cookie.remove('authType');
       Cookie.remove('profilepicture');
       Cookie.remove('email');
       hashHistory.push('/');
    }
    render() {
        return (
            <div>
              <Image src={Cookie.load('profilepicture')} alt='img' avatar style={{width:'10%',height:'10%',marginLeft:'50%',marginTop:'-4%'}}/>
              <p style={{marginLeft:'2%',fontSize:'140%',marginTop:'2%'}}>Welcome <b>{Cookie.load('username')}</b></p>
              <div style={{float:'right',marginRight:'2%',marginTop:'-3%'}}>

                <Button inverted color='grey' style={{color:'black'}} onClick={this.logoutCall.bind(this)}>Logout</Button>
              </div>

              <div style={{marginLeft:'10%',fontSize:'120%'}}>You are logged in via <b>{Cookie.load('authType')}</b>. Your emailID is <b>{Cookie.load('email')}</b>.</div>

            </div>
        );
    }
}

module.exports = Cards;
