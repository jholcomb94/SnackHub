import React,{ Component } from 'react';
import MenuItemService from '../services/MenuItemService';

class MenuItemListComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            MenuItems: [],
        }
        this.refreshList = this.refreshList.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);

        
    }
    componentDidMount(){
        this.refreshList();
    }
    refreshList(){
        MenuItemService.retrieveAllMenuItems().then(Response=>{
            this.setState({
                MenuItems:Response.data
            })
            console.log(Response.data)
        })
    }
    render(){
        return (
            <div>
                <h1>Menu Item List</h1>
                <table className = "table">
                <thead>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Description</td>
                    <td>Price</td>
                    <td>Restaurant ID</td>
                </thead>
                <tbody>{
                    this.state.MenuItems.map(
                        MenuItems=>
                        <tr>
                            <td>{MenuItems.id}</td>
                            <td>{MenuItems.name}</td>
                            <td>{MenuItems.description}</td>
                            <td>{MenuItems.price}</td>
                            <td>{MenuItems.restaurantID}</td>
                        </tr>
                    )
                    }
                </tbody>

                </table>
            </div>
        );
    }
}
export default MenuItemListComponent