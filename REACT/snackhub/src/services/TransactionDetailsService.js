import axios from 'axios'

class TransactionDetailsService{

    //retrieve all transaction details
    retrieveAllTransactionDetails(){
        return axios.get(`http://localhost:8080/retrieveAllTransactionDetails`)
    }
    //retrieve transaction details
    retrieveTransactionDetails(id){
        return axios.get(`http://localhost:8080/retrieveTransactionDetails/${id}`)
    }
    //update transaction details
    updateTransactionDetails(transactionDetails){
        return axios.put(`http://localhost:8080/updateTransactionDetails`,transactionDetails)
    }
    //add transaction details
    addTransactionDetails(transactionDetails){
        return axios.post(`http://localhost:8080/addTransactionDetails`,transactionDetails)
    }
    //delete transaction details
    deleteTransactionDetails(id){
        return axios.delete(`http://localhost:8080/deleteTransactionDetails/${id}`)
    }
}
export default new TransactionDetailsService()