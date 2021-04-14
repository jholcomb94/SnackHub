import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';
import RestaurantDataService from '../services/RestaurantDataService';
import MenuItemService from '../services/MenuItemService';

class RestaurantPage extends Component{
    constructor(props){
        super(props)
        this.state={
            RestaurantID: this.props.match.params.id,
            MenuItems:[],
            RestaurantName: ""
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
            })
            console.log(Response.data)
            console.log(this.state.MenuItems) 
            RestaurantDataService.retrieveRestaurant(this.state.RestaurantID).then(Response=>{
                this.setState({
                    RestaurantName: Response.data.name
                })
            })
         }
        )
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
                <h1>{this.state.RestaurantName}</h1>
                    <tbody>
                        {
                            
                            this.state.MenuItems.map(
                                menuItem=>
                                <tr>
                                    {
                                        menuItem.restaurantID == this.state.RestaurantID?
                                        <td>{menuItem.name}</td>:
                                        <td> id : {this.state.RestaurantID}</td>
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