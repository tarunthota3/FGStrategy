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
              <Image src={Cookie.load('profilepicture')}
                                      className='profileImageSize' alt='img' avatar style={{width:'5%',height:'5%'}}/>
              Welcome <b>{Cookie.load('username')}</b>
                You are logged in via <b>{Cookie.load('authType')}</b>. Your emailID is <b>{Cookie.load('email')}</b>.
              <Button onClick={this.logoutCall.bind(this)}>Logout</Button>
            </div>
        );
    }
}

module.exports = Cards;
