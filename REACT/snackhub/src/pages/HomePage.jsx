import React,{ Component } from 'react';
import { BrowserRouter as Router,Link } from 'react-router-dom';
import RestaurantDataService from '../services/RestaurantDataService';

 class HomePage extends Component{
    constructor(props){
        super(props)
        this.state={
            restaurants: [],
        }
        this.refreshList = this.refreshList.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this); 
    }
    componentDidMount(){
        this.refreshList();
    }
    refreshList(){
        RestaurantDataService.retrieveAllRestaurants().then(Response =>{
            this.setState({
                restaurants: Response.data
            })
            console.log(Response.data);
        })
    }
    render(){
            return(
                <table>
                    <tbody>
                        {
                            this.state.restaurants.map(
                                restaurant=>
                                <tr><h1><Link to = {`/Restaurant/` + restaurant.id}>{restaurant.name}</Link></h1></tr>
                            
                            )
                        }
                    </tbody>
                </table>
        );
    }
 }
 export default HomePage
