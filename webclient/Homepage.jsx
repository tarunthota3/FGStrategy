import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory, Route, Router, Redirect} from 'react-router';
import Cookie from 'react-cookie';
import {Grid} from 'semantic-ui-react';
import Home from './components/landingPage/home';
import Login from './components/users/login';

class MainComp extends React.Component {
  render() {
        return (
            <div>
                <br/><br/><br/><br/> {this.props.children}
            </div>
        );
      }
}
ReactDOM.render(
    <Router history={hashHistory}>
    <Route path="/" component={Login}/>
    <Route component={MainComp}>
        <Route path="/home" component={Home}/>

    </Route>
</Router>, document.getElementById('mountapp'));
