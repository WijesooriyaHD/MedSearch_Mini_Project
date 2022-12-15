package com.example.MedSearchBackend.Model;



import jdk.jfr.DataAmount;
import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode

public class MedicinePkId implements Serializable {

    private String medName;
    private String compRegNo;
}
