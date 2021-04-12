import React,{ Component } from 'react';
import TransactionService from '../services/TransactionService';

class TransactionListComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            Transactions: [],
        }
        this.refreshList = this.refreshList.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount(){
        this.refreshList();
    }
    refreshList(){
        TransactionService.retrieveAllTransactions().then(Response=>{
            this.setState({
                Transactions: Response.data
            })
            console.log(Response.data)
        })
    }
    render(){
        return (
            <div>
            <h1>Transaction List</h1>
                <table className = "table">
                    <thead>
                        <td>ID</td>
                        <td>Instructions</td>
                        <td>Order Date</td>
                        <td>total</td>
                        <td>user ID</td>
                    </thead>
                    <tbody>
                        {
                            this.state.Transactions.map(
                                Transactions =>
                                <tr>
                                    <td>{Transactions.id}</td>
                                    <td>{Transactions.instructions}</td>
                                    <td>{Transactions.order_date}</td>
                                    <td>{Transactions.total}</td>
                                    <td>{Transactions.userID}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        );
    }
}
export default TransactionListComponent