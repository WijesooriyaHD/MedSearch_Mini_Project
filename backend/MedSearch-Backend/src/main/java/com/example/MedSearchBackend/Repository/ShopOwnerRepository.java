package com.example.MedSearchBackend.Repository;

import com.example.MedSearchBackend.Model.Medicine;
import com.example.MedSearchBackend.Model.ShopOwner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ShopOwnerRepository extends JpaRepository<ShopOwner,String> {

    // find a shop onwner by id no and password
    @Query(value = "SELECT * FROM pharmacy_owner WHERE id_no =?1 AND owner_password=?2",nativeQuery = true)
    ShopOwner findByIdAndPassword(String idNo, String Password);

}
