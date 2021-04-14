import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';
import RestaurantDataService from '../services/RestaurantDataService';
import MenuItemService from '../services/MenuItemService';

class RestaurantPage extends Component{
    constructor(props){
        super(props)
        this.state={
            RestaurantID: "",
            MenuItems:[]
        }
        this.refreshList = this.refreshList.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this); 
        //this.filterItems = this.filterItems.bind(this);
    }
    componentDidMount(){

        this.refreshList();
    }
    refreshList(){
        MenuItemService.retrieveAllMenuItems().then(Response=>{
            this.setState({
                MenuItems:Response.data,
                RestaurantID: this.props.match.params.id
            }) 
            console.log(this.state.MenuItems)  
            console.log(this.state.RestaurantID)
        })
        //this.filterItems()
        
    }
    /*filterItems(){
        console.log(this.state.RestaurantID)
        
  
        this.setState({
            MenuItems: result
        })
        console.log("menu items: " + this.state.MenuItems.name)
    }*/
    render(){
        return(
            <div>
                <table>
                    <tbody>
                        {
                            this.state.MenuItems.map(
                                menuItem=>
                                <tr>
                                    {
                                        menuItem.restaurantID === this.state.restaurantID?
                                        <td>{menuItem.name}</td>:
                                        <td>{menuItem.restaurantID}</td>
                                    }
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
export default RestaurantPage