import axios from 'axios'

class MenuItemService{
     //retreive Menu Items
     retrieveAllMenuItems(){
        return axios.get(`http://localhost:8080/retrieveAllMenuItems`);
    }
    //retreive a Menu Item
    retreiveMenuItem(id){
        return axios.get(`http://localhost:8080/retrieveMenuItem/${id}`);

    }
    //update a Menu Item
    updateMenuItem(menuItem){
        return axios.put(`http://localhost:8080/updateMenuItem/`,menuItem)

    }
    //add a Menu Item
    registerMenuItem(menuItem){
        return axios.post(`http://localhost:8080/addMenuItem/`, menuItem)

    }

    //delete a Menu Item
    deleteMenuItem(id){
        return axios.delete(`http://localhost:8080//deleteMenuItem/{Id}`)

    }
}
export default new MenuItemService()