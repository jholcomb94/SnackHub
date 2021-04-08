import React,{ Component } from 'react';
import TransactionDetailsService from '../services/TransactionDetailsService';

class TransactionDetailsListComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            TransactionDetails: [],
        }
        this.refreshList = this.refreshList.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount(){
        this.refreshList();
    }
    refreshList(){
        TransactionDetailsService.retrieveAllTransactionDetails().then(Response=>{
            this.setState({
                TransactionDetails: Response.data
            })
            console.log(Response.data);
        })
    }
    render(){
        return (
        <div>
            <h1>Transaction Details List</h1>
            <table className = "table">
                <thead>
                    <td>Transaction ID</td>
                    <td>Quantity</td>
                    <td>Menu Item ID</td>
                </thead>
                <tbody>{
                    this.state.TransactionDetails.map(
                        TransactionDetails=>
                        <tr>
                            <td>{TransactionDetails.id}</td>
                            <td>{TransactionDetails.quantity}</td>
                            <td>{TransactionDetails.menuItemID}</td>
                        </tr>
                    )
                    }
                </tbody>
            </table>
        </div>
        );
    }
}
export default TransactionDetailsListComponent