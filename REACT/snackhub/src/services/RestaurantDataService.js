import axios from 'axios'

class RestaurantDataService{
    //retrieve all restaurants
    retrieveAllRestaurants(){
        return axios.get(`http://localhost:8080/retrieveAllRestaurants`);
    }
    //retrieve a restaurant
    retrieveRestaurant(id){
        return axios.get(`http://localhost:8080//retreiveRestaurant/${id}`)
    }
    //update restaurant
    updateRestaurant(restaurant){
        return axios.put(`http://localhost:8080/updateRestaurant/`,restaurant)
    }

    //add a restaurant
    addRestaurant(restaurant){
        return axios.post(`http://localhost:8080/addPRestaurant/`, restaurant)
    }
    //delete a restaurant
    deleteRestaurant(id){
        return axios.delete(`http://localhost:8080/deleteRestaurant/${id}`)
    }


}
export default new RestaurantDataService()