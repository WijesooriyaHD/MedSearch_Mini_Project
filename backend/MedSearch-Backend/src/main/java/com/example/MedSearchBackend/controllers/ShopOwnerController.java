package com.example.MedSearchBackend.controllers;

import com.example.MedSearchBackend.Model.Medicine;
import com.example.MedSearchBackend.Model.ShopOwner;
import com.example.MedSearchBackend.Repository.MedicineRepository;
import com.example.MedSearchBackend.Repository.ShopOwnerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class ShopOwnerController {

    @Autowired

    private ShopOwnerRepository shopOwnerRepository;

    //get all shop owners
    @GetMapping("/shopowners")
    public List<ShopOwner> getallShopOwners(){

        return shopOwnerRepository.findAll();
    }



    // get shopOwner by id and password
    @GetMapping("/shopowners/{idNo}/{password}")
    public  ResponseEntity<ShopOwner> getShopOwnerByIdAndPassword(@PathVariable String idNo, @PathVariable String password){

        ShopOwner shopowner =shopOwnerRepository.findByIdAndPassword(idNo,password);
        return ResponseEntity.ok(shopowner);

    }



}
