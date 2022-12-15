package com.example.MedSearchBackend.controllers;


import com.example.MedSearchBackend.Model.Medicine;
import com.example.MedSearchBackend.Repository.MedicineRepository;
import com.example.MedSearchBackend.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class MedicineController {

    @Autowired

    private MedicineRepository medicineRepository;

    //get all medicines
    @GetMapping("/medicines")
    public List<Medicine> getallMedicines(){

        return medicineRepository.findAll();
    }

    // add new medicine details
    @PostMapping("/add_medicines")
    public Medicine addMedicine(@RequestBody Medicine medicine) {

        return medicineRepository.save(medicine);
    }

    //get a list of places where the medicine is available
    @GetMapping("/medicines/{medName}")
    public List<Medicine> findPlaces(@PathVariable String medName) {

        return medicineRepository.findByNameAndAvilability(medName);
    }

    // update details about medicine
    @PutMapping("/medicines/{medName}/{compRegNo}")
    public ResponseEntity<Medicine> updateMedDetails(@PathVariable String medName, @PathVariable String compRegNo, @RequestBody Medicine medicineDetails){
        Medicine medicine = medicineRepository.findByNameAndCompany(medName,compRegNo);

                // orElseThorw is not working ??
               // .orElseThrow(() -> new ResourceNotFoundException("medicine does not exist in a pharmacy :" + medName+compRegNo));

        medicine.setCompAddress(medicineDetails.getCompAddress());
        medicine.setCompTeleNo(medicineDetails.getCompTeleNo());
        medicine.setUnitPrice(medicineDetails.getUnitPrice());
        medicine.setAvailability(medicineDetails.getAvailability());
        medicine.setCompName(medicineDetails.getCompName());

        Medicine updatedMedicine = medicineRepository.save(medicine);
        return ResponseEntity.ok(updatedMedicine);
    }

    // delete medicine details
    @DeleteMapping("/medicines/delete/{medName}/{compRegNo}")
    public ResponseEntity<Map<String, Boolean>> deleteMedDetails(@PathVariable String medName,@PathVariable String compRegNo){
        Medicine medicine = medicineRepository.findByNameAndCompany(medName,compRegNo);
               // .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));

        medicineRepository.delete(medicine);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
    
    
    //To get all available medicine items
    //Available list
    @GetMapping("/medicines/available")
    public List<Medicine> allAvailable() {

        return medicineRepository.findByAvilability();
    }


}
