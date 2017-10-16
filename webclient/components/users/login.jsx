let React = require('react');
let {hashHistory} = require('react-router');
import {Button, Grid, Icon, Form, Modal} from 'semantic-ui-react';
import validator from 'validator';
import Cookie from 'react-cookie';
// import graph from 'fbgraph';
import $ from 'jquery';
class Login extends React.Component {
   constructor() {
       super();
       this.state =
       {

        };
   }
render() {
return (
  <div style={{margin:'10%'}}>
    <h3>Sample App</h3>
    <Button.Group id='buttonGroup' style={{margin:'0%'}}>
        <a href='users/auth/facebook'>
        <Button color='blue' circular>
        <Button.Content visible><Icon name='facebook'/>
        Login With Facebook</Button.Content>
        </Button>
        </a>
        <Button.Or />
        <a href = '/users/auth/google'>
          <Button color='red' circular>
          <Button.Content visible><Icon name='google'/>Login With Google</Button.Content>
          </Button>
        </a>
        {/* <Button.Or />
        <a href='users/auth/instagram'>
        <Button color='green' circular>
        <Button.Content visible>
        Login With Instagram</Button.Content>
        </Button>
        </a> */}
  </Button.Group>
</div>
);
  }
}
module.exports = Login;
