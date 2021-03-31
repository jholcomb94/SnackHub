package com.example.demo.REST;

import com.example.demo.IMPL.CRUD;
import com.example.demo.entities.MenuItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class MenuItemController {
    private CRUD crud;

    @Autowired
    public MenuItemController(@Qualifier("menuItemCRUD") CRUD crud){
        this.crud = crud;
    }
    @GetMapping({"/retrieveAllMenuItems"})
    public List<Object> getAll(){
        return crud.getAll();
    }
    @GetMapping({"/retrieveMenuItem/{Id}"})
    public Object getMenuItem(@PathVariable int Id){
        return this.crud.getById(Id);
    }
    @PutMapping({"/updateMenuItem"})
    public Object updateMenuItem(@RequestBody MenuItem menuItem){
        crud.update(menuItem); return menuItem;
    }
    @DeleteMapping({"/deleteMenuItem/{Id}"})
    public String deleteMenuItem(@PathVariable int Id){
        MenuItem menuItem = (MenuItem) crud.getById(Id);
        if(menuItem == null)
        {
            throw new RuntimeException("Menu Item Not Found! id: " + Id);
        }
        crud.deleteById(Id);
        return "deleted Menu Item with ID: " + Id;
    }
    @PostMapping("/addMenuItem")
    public MenuItem addMenuItem(@RequestBody MenuItem menuItem)
    {
        menuItem.setId(0);
        crud.update(menuItem);
        return menuItem;
    }

}
