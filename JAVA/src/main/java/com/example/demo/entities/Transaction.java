package com.example.demo.entities;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "transaction")
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "TansactionID")
    private int id;

    @Column(name = "Order_date")
    private Date order_date;

    @Column(name = "instructions")
    private String instructions;

    @Column(name = "Total")
    private double total;

    @Column(name = "UserID")
    private int userID;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getOrder_date() {
        return order_date;
    }

    public void setOrder_date(Date order_date) {
        this.order_date = order_date;
    }

    public String getInstructions() {
        return instructions;
    }

    public void setInstructions(String instructions) {
        this.instructions = instructions;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    @Override
    public String toString() {
        return "Transaction{" +
                "id=" + id +
                ", order_date=" + order_date +
                ", instructions='" + instructions + '\'' +
                ", total=" + total +
                ", userID=" + userID +
                '}';
    }
}
