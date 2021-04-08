import React, {Component} from 'react'
import MenuItemListComponent from './MenuItemListComponent'
import RestaurantListComponent from './RestaurantListComponent'
import TransactionDetailsListComponent from './TransactionDetailsListComponent'
import TransactionListComponent from './TransactionListComponent'
import UsersListComponent from './UsersListComponent'

class EditDatabasesPage extends Component{
    render(){
        return (
            <div>
                <MenuItemListComponent></MenuItemListComponent>
                <RestaurantListComponent></RestaurantListComponent>
                <TransactionDetailsListComponent></TransactionDetailsListComponent>
                <TransactionListComponent></TransactionListComponent>
                <UsersListComponent></UsersListComponent>
            </div>
        );
    }
}
export default EditDatabasesPage