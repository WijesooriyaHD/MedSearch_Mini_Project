package com.example.MedSearchBackend.Model;

import jakarta.persistence.*;



@Entity
@Table(name="medicine")
@IdClass(MedicinePkId.class)

public class Medicine {

    @Id

    private String medName;

    @Id

    private String compRegNo;



    @Column(name="comp_address")
    private String compAddress;

    @Column(name="comp_name")
    private String compName;


    @Column(name="comp_tele_no")
    private String compTeleNo;

    @Column(name="unit_price")
    private  float unitPrice;

    @Column(name="availability")
    private  String availability;

    public String getMedName() {
        return medName;
    }

    public void setMedName(String medName) {
        this.medName = medName;
    }

    public String getCompName() {
        return compName;
    }

    public void setCompName(String compName) {
        this.compName = compName;
    }

    public String getCompRegNo() {
        return compRegNo;
    }

    public void setCompRegNo(String compRegNo) {
        this.compRegNo = compRegNo;
    }

    public String getCompAddress() {
        return compAddress;
    }

    public void setCompAddress(String compAddress) {
        this.compAddress = compAddress;
    }

    public String getCompTeleNo() {
        return compTeleNo;
    }

    public void setCompTeleNo(String compTeleNo) {
        this.compTeleNo = compTeleNo;
    }

    public float getUnitPrice() {
        return unitPrice;
    }

    public void setUnitPrice(float unitPrice) {
        this.unitPrice = unitPrice;
    }

    public String getAvailability() {
        return availability;
    }

    public void setAvailability(String availability) {
        this.availability = availability;
    }

    public Medicine() {
    }

    public Medicine(String medName, String compRegNo, String compAddress,String compName,String compTeleNo, float unitPrice, String availability) {
        this.medName = medName;
        this.compRegNo = compRegNo;
        this.compAddress = compAddress;
        this.compName=compName;
        this.compTeleNo = compTeleNo;
        this.unitPrice = unitPrice;
        this.availability = availability;
    }

    public Medicine(String compAddress,String compName, String compTeleNo, float unitPrice, String availability) {
        this.compAddress = compAddress;
        this.compName=compName;
        this.compTeleNo = compTeleNo;
        this.unitPrice = unitPrice;
        this.availability = availability;
    }
}
