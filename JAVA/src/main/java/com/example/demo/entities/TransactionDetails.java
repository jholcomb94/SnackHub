package com.example.demo.entities;

import javax.persistence.*;

@Entity
@Table(name = "transactiondetails")
public class TransactionDetails {
    @Id
    @Column(name = "TransactionID")
    private int id;
    @Column(name = "quantity")
    private int quantity;
    @Column(name = "MenuItemID")
    private int menuItemID;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public int getMenuItemID() {
        return menuItemID;
    }

    public void setMenuItemID(int menuItemID) {
        this.menuItemID = menuItemID;
    }

    @Override
    public String toString() {
        return "TransactionDetails{" +
                "id=" + id +
                ", quantity=" + quantity +
                ", menuItemID=" + menuItemID +
                '}';
    }
}
