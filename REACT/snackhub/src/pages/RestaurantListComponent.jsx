import React,{ Component } from 'react';
import RestaurantDataService from '../services/RestaurantDataService';

class RestaurantListComponent extends Component{
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
        return (
        <div>
            <h1>Restaurant List</h1>
            <table className = "table">
                <thead>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Description</td>
                    <td>hours</td>
                </thead>
                <tbody>
                    {
                        this.state.restaurants.map(
                            restaurants=>
                            <tr>
                                <td>{restaurants.id}</td>
                                <td>{restaurants.name}</td>
                                <td>{restaurants.description}</td>
                                <td>{restaurants.hours}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
        );
    }
}
export default RestaurantListComponent 