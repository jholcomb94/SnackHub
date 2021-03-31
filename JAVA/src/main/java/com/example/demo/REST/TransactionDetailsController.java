package com.example.demo.REST;

import com.example.demo.IMPL.CRUD;
import com.example.demo.entities.TransactionDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class TransactionDetailsController {
    private CRUD crud;

    @Autowired
    public TransactionDetailsController(@Qualifier("transactionDetailsCRUD") CRUD crud){
        this.crud = crud;
    }
    @GetMapping({"/retrieveAllTransactionDetails"})
    public List<Object> getAll(){
        return crud.getAll();
    }
    @GetMapping({"/retrieveTransactionDetails/{Id}"})
    public Object getTransactionDetails(@PathVariable int Id){
        return this.crud.getById(Id);
    }
    @PutMapping({"/updateTransactionDetails"})
    public Object updateTransactionDetails(@RequestBody TransactionDetails transactionDetails){
        crud.update(transactionDetails);
        return transactionDetails;
    }
    @DeleteMapping({"/deleteTransactionDetails/{Id}"})
    public String DeleteTransactionDetails(@PathVariable int Id){
        TransactionDetails transactionDetails = (TransactionDetails)  crud.getById(Id);
        if(transactionDetails == null)
        {
            throw new RuntimeException("Transaction Details Not Found! ID: " + Id);
        }
        crud.deleteById(Id);
        return "deleted Transaction Details with ID: " + Id;
    }
    @PostMapping("/addTransactionDetails")
    public TransactionDetails addTransactionDetails(@RequestBody TransactionDetails transactionDetails)
    {
        transactionDetails.setId(0);
        crud.update(transactionDetails);
        return transactionDetails;
    }
}
