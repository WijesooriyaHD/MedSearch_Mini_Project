package com.example.MedSearchBackend.Repository;

import com.example.MedSearchBackend.Model.Medicine;
import com.example.MedSearchBackend.Model.MedicinePkId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

@Repository
public interface MedicineRepository extends JpaRepository<Medicine, MedicinePkId>{

    // a method to find the available places of medicine
    @Query(value = "SELECT * FROM medicine WHERE med_name =?1 AND availability ='Yes'",nativeQuery = true)
    List <Medicine> findByNameAndAvilability(String medName);

    // a method to find the medicine with correct company and medicine details
    @Query(value = "SELECT * FROM medicine WHERE med_name =?1 AND comp_reg_no =?2",nativeQuery = true)
    Medicine findByNameAndCompany(String medName,String compRegNo);
    
    
    //a method to find the all available medicine details
    @Query(value = "SELECT * FROM medicine WHERE availability='YES'",nativeQuery = true)
    List<Medicine> findByAvilability();

}
