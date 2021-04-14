import axios from 'axios'

class UsersService{
    //retrieve all users
    retrieveAllUsers(){
        return axios.get(`http://localhost:8080/getAllUsers`)
    }
    //retrieve a user
    retrieveUser(id){
        return axios.get(`http://localhost:8080/getUser/${id}`)
    }
    updateUser(user){
        return axios.put(`http://localhost:8080/updateUser`,user)
    }
    addUser(user){
        return axios.post(`http://localhost:8080/addUser`,user)
    }

    deleteUser(id){
        return axios.delete(`http://localhost:8080/deleteUser/${id}`)
    }

}
export default new UsersService()