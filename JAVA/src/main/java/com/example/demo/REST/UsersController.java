package com.example.demo.REST;

import com.example.demo.IMPL.CRUD;
import com.example.demo.entities.Users;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class UsersController {
    private CRUD crud;

    @Autowired
    public UsersController(@Qualifier("usersCRUD") CRUD crud){
        this.crud = crud;
    }

    @GetMapping("/getAllUsers")
    public List<Object> getAll(){
        return crud.getAll();
    }

    @GetMapping("/getUser/{Id}")
    public Object getUser(@PathVariable int Id){
        return this.crud.getById(Id);
    }

    @PutMapping("/updateUser")
    public Object updateUser(@RequestBody Users user){
        crud.update(user);
        return user;
    }

    @DeleteMapping("/deleteUser/{Id}")
    public String deleteUser(@PathVariable int Id){
        Object user = crud.getById(Id);
        if(user == null){
             throw new RuntimeException("User not found with ID: " + Id);
        }
        crud.deleteById(Id);
        return "User with id: " + Id + "deleted";
    }

    @PostMapping("/addUser")
    public Object addUser(@RequestBody Users user){
        user.setId(0);
        crud.update(user);
        return user;
    }

}
