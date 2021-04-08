import axios from 'axios'

class TransactionService{
    //retrieve all transactions
    retrieveAllTransactions(){
        return axios.get(`http://localhost:8080/retrieveAllTransactions`)
    }
    //retrieve transaction
    retrieveTransaction(id){
        return axios.get(`http://localhost:8080//retreiveTransaction/${id}`)
    }
    //update transaction
    updateTransaction(transaction){
        return axios.put(`http://localhost:8080/updateTransaction`,transaction)
    }
    //add transaction
    addTransaction(transaction){
        return axios.post(`http://localhost:8080/addTransaction/`,transaction)
    }
    //delete transaction
    deleteTransaction(id){
        return axios.delete(`http://localhost:8080/deleteTransaction/${id}`)
    }
}
export default new TransactionService()