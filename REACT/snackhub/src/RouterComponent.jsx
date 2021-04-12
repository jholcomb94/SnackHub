import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EditDatabasesPage from './pages/EditDatabasesPage';
import LogIn from './pages/LogIn';

class RouterComponent extends Component{
    render(){
        return(
           
                <Router>
                    <>
                        <Switch>
                            <Route path = "/" exact component={HomePage}/>
                            <Route path ="/editDB" exact component={EditDatabasesPage}/>
                            <Route path ="/logIn" exact component={LogIn}/>
                        </Switch>
                    </>
                </Router>
        )
    }
}

export default RouterComponent