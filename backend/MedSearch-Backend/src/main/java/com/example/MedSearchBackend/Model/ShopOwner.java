package com.example.MedSearchBackend.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="pharmacy_owner")
public class ShopOwner {
    @Id
    private String idNo;

    @Column(name="owner_password")
    private String password;

    public String getIdNo() {
        return idNo;
    }

    public void setIdNo(String idNo) {
        this.idNo = idNo;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public ShopOwner() {
    }

    public ShopOwner(String idNo, String password) {
        this.idNo = idNo;
        this.password = password;
    }

    public ShopOwner(String password) {
        this.password = password;
    }


}
