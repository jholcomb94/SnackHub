package com.example.demo.REST;

import com.example.demo.IMPL.CRUD;
import com.example.demo.entities.Restaurant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class RestaurantController {
    private CRUD crud;
    @Autowired
    public RestaurantController(@Qualifier("restaurantCRUD") CRUD crud){
        this.crud = crud;
    }
    @GetMapping({"/retrieveAllRestaurants"})
    public List<Object> getAll(){
        return crud.getAll();
    }
    @GetMapping({"/retrieveRestaurant/{Id}"})
    public  Object getRestaurant(@PathVariable int Id){
        return this.crud.getById(Id);
    }
    @PutMapping({"/updateRestaurant"})
    public Object updateRestaurant(@RequestBody Restaurant restaurant){
        crud.update(restaurant);
        return restaurant;
    }

    @DeleteMapping({"/deleteRestaurant/{id}"})
    public String deleteRestaurant(@PathVariable int Id){
        Restaurant restaurant = (Restaurant) crud.getById(Id);
        if(restaurant == null)
        {
            throw new RuntimeException("Restaurant not found! id: " + Id);
        }
        crud.deleteById(Id);
        return "deleted restaurant with ID: " + Id;
    }
    @PostMapping("/addRestaurant")
    public Restaurant addRestaurant(@RequestBody Restaurant restaurant){
        restaurant.setId(0);
        crud.update(restaurant);
        return restaurant;
    }


}
