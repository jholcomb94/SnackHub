package com.example.demo.IMPL;

import com.example.demo.entities.TransactionDetails;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;
@Repository
public class TransactionDetailsCRUD implements CRUD{
    private final EntityManager manager;
    @Autowired
    public TransactionDetailsCRUD(EntityManager manager){
        this.manager = manager;
    }
    @Transactional
    @Override
    public List<Object> getAll() {
        Session session = manager.unwrap(Session.class);
        Query<Object> query  = session.createQuery("from TransactionDetails ");
        return query.getResultList();
    }
    @Transactional
    @Override
    public Object getById(int Id) {
       Session session = manager.unwrap(Session.class);
       return  session.get(TransactionDetails.class,Id);
    }
    @Transactional
    @Override
    public void update(Object object) {
        Session session = manager.unwrap(Session.class);
        session.saveOrUpdate(object);
    }
    @Transactional
    @Override
    public void deleteById(int Id) {
        Session session = manager.unwrap(Session.class);
        TransactionDetails t = session.get(TransactionDetails.class,Id);
        session.delete(t);

    }
}
