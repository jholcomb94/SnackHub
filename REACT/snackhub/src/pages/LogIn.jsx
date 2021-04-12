import React,{ Component } from 'react';
class LogIn extends Component{
    render(){
        return(
            <div className = "page">
                <input type = "text" placeholder = "Username"></input>
                <input type = "text" placeholder = "Password"></input>
                <button className = "button">Submit</button>
            </div>
        );
    }
}
export default LogIn