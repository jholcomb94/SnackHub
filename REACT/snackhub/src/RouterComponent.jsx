import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EditDatabasesPage from './pages/EditDatabasesPage';

class RouterComponent extends Component{
    render(){
        return(
           
                <Router>
                    <>
                        <Switch>
                            <Route path = "/" exact component={HomePage}/>
                            <Route path ="/editDB" exact component={EditDatabasesPage}/>
                        </Switch>
                    </>
                </Router>
        )
    }
}

export default RouterComponent