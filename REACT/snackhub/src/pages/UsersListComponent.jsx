import React,{ Component } from 'react';
import UsersService from '../services/UsersService'

class UsersListComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            Users: [],
        }
        this.refreshList = this.refreshList.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount(){
        this.refreshList()
    }
    refreshList(){
        UsersService.retrieveAllUsers().then(Response =>{
            this.setState({
                Users: Response.data
            })
            console.log(Response.data)
        })
    }
    render(){
        return (
            <div>
                <h1>Users List</h1>
                    <table className = "table">
                        <thead>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Address</td>
                            <td>Phone</td>
                        </thead>
                        <tbody>
                            {
                                this.state.Users.map(
                                    users =>
                                    <tr>
                                        <td>{users.id}</td>
                                        <td>{users.name}</td>
                                        <td>{users.address}</td>
                                        <td>{users.phone}</td>
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>
            </div>
        );
    }
}
export default UsersListComponent