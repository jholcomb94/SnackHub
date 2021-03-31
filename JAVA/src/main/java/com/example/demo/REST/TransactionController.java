package com.example.demo.REST;

import com.example.demo.IMPL.CRUD;
import com.example.demo.entities.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class TransactionController {
    private CRUD crud;

    @Autowired
    public TransactionController(@Qualifier("transactionCRUD") CRUD crud){
        this.crud = crud;
    }
    @GetMapping({"/retrieveAllTransactions"})
    public List<Object> getAll(){
        return crud.getAll();
    }
    @GetMapping({"/retrieveTransaction/{Id}"})
    public Object getTransaction(@PathVariable int Id){
        return this.crud.getById(Id);
    }
    @PutMapping({"/updateTransaction"})
    public Object updateTransaction(@RequestBody Transaction transaction){
        crud.update(transaction);
        return transaction;
    }
    @DeleteMapping({"/deleteTransaction"})
    public String deleteTransaction(@PathVariable int Id){
        Transaction transaction = (Transaction) crud.getById(Id);
        if(transaction == null)
        {
            throw new RuntimeException("Transaction not found! id: " + Id);
        }
        crud.deleteById(Id);
        return "deleted Transaction with ID:" + Id;
    }
    @PostMapping("/addTransaction")
    public Transaction addTransaction(@RequestBody Transaction transaction)
    {
        transaction.setId(0);
        crud.update(transaction);
        return transaction;
    }

}
