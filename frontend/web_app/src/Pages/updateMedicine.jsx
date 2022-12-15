import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './updateMedicine.css'
import {userSchema} from '../Validations/formValidation'
import * as yup from "yup";

import styled, { keyframes, ThemeProvider } from 'styled-components'
import doc3 from '../Assets/doc16.webp'

import axios from 'axios';

const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }`

const Doc3 = styled.div`
position: absolute;
top: 20%;
left: 5%;
width: 20vw;
animation: ${float} 2s ease infinite;
img{
    width:auto;
    height: auto;
}
`

class UpdateDetails extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            med_name:'',
            comp_reg_no:'',
            comp_address:'',
            comp_name:'',
            comp_tele_no:'',
            unit_price:'',
            availability:''
            
        }
    }

    handleMedName= event =>{
      this.setState({
          med_name:event.target.value
      })

    }

    handleCompRegNo= event =>{
      this.setState({
          comp_reg_no:event.target.value
      })

    }

    handleCompAddress= event =>{
      this.setState({
          comp_address:event.target.value
      })

    }

    handleCompName= event =>{
      this.setState({
          comp_name:event.target.value
      })

    }

    handleCompTeleNo= event =>{
      this.setState({
          comp_tele_no:event.target.value
      })

    }

    handleUnitPrice= event =>{
      this.setState({
          unit_price:event.target.value
      })

    }

    handleAvailbility= event =>{
      this.setState({
          availability:event.target.value
      })

    }

    
    handleUpdate= async (event) =>{

        event.preventDefault()

        let formData={
          med_name:this.state.med_name,
          comp_reg_no:this.state.comp_reg_no,
          comp_address:this.state.comp_address,
          comp_name:this.state.comp_name,
          comp_tele_no:this.state.comp_tele_no,
          unit_price:this.state.unit_price,
          availability:this.state.availability,


        };

        const isValid=await userSchema.isValid(formData)
        console.log(isValid)

        if(isValid===true){
          alert("Hello ! \n"+
          "This is what we received :\n"
          +"Medicine Name = "+`${formData.med_name}`+"\n"
          +"Pharmacy Reg No = "+`${formData.comp_reg_no}`+"\n"
          +"Pharmacy Address = "+`${formData.comp_address}` +"\n"
          +"Pharmacy Name =  "+`${formData.comp_name}` +"\n"
          +"Pharmacy Tele No =  "+`${formData.comp_tele_no}`+"\n"
          +"Unit Price =  "+`${formData.unit_price}`+"\n"
          +"Avilability =  "+ `${formData.availability}`);

          axios
          .put(`http://localhost:8080/api/medicines/${formData.med_name}/${formData.comp_reg_no}`,{
           // medName:formData['med_name'],
            //compRegNo:formData['comp_reg_no'],
            compAddress:formData['comp_address'],
            compName:formData['comp_name'],
            compTeleNo:formData['comp_tele_no'],
            unitPrice:formData['unit_price'],
            availability:formData['availability']

          } )
          .then( res=> {
            console.log(res);
            if(res.status===200){
              alert(`Entered data has been sent successfully`)
            }
            console.log(res.data)

          }

          )

        }else{

          alert("Invalid Input")
        
          
        }

         
          
    };
    

    render() { 
        return (
            <>
            <Doc3>
            <img src={doc3} alt="doc3" />
                </Doc3> 
                      
            
<div className="content">



            
                    
                    <form className="Form" onSubmit={this.handleUpdate}>

                    <div className="row g-3">
      
                            <div className="col-md-4">
                              <label className="form-label">Medicine Name</label></div>
                              <div className="col-md-4">
                              <input type="text" className="form-control" value={this.state.med_name}
                                      onChange={this.handleMedName}>
                              </input>

                            </div>
                      </div>

                      <br></br>

                      <div className="row g-3">
      
                        <div className="col-md-4">
                          <label className="form-label">Pharmacy Reg No</label></div>
                          <div className="col-md-4">
                          <input type="text" className="form-control" value={this.state.comp_reg_no}
                                  onChange={this.handleCompRegNo}>
                          </input>
      
                        </div>
                        </div>
                        <br></br>

                        <div className="row g-3">
      
                        <div className="col-md-4">
                          <label className="form-label">Pharmacy Address</label></div>
                          <div className="col-md-4">
                          <input type="text" className="form-control" value={this.state.comp_address}
                                  onChange={this.handleCompAddress}>
                          </input>
      
                        </div>
                        </div>
                        


                      <br></br>
                      
      
                      <div className="row g-3">
      
                        <div className="col-md-4">
                          <label className="form-label">Pharmacy Name</label></div>
                          <div className="col-md-4">
                          <input type="text" className="form-control" value={this.state.comp_name}
                                  onChange={this.handleCompName}>
                          </input>
                        </div>
                        </div>
                        <br></br>
      
                        <div className="row g-3">
                        <div className="col-md-4">
                          <label className="form-label">Pharmacy Tele No</label></div>
                          <div className="col-md-4">
                          <input type="text" className="form-control" value={this.state.comp_tele_no}
                                  onChange={this.handleCompTeleNo}>
                          </input>
                        </div>
      
                      </div>
      
                      <br></br>

                      <div className="row g-3">
                        <div className="col-md-4">
                          <label className="form-label">Unit Price</label></div>
                          <div className="col-md-4">
                          <input type="text" className="form-control" value={this.state.unit_price}
                                  onChange={this.handleUnitPrice}>
                          </input>
                        </div>
      
                      </div>

                      <br></br>
      
                      <div className="row g-3">
      
      
                          <div className="col-md-4">
                              <label  className="form-label">Availability</label></div>
                              <div className="col-md-4">
                              <select className="form-select" value={this.state.availability} 
                              onChange={this.handleAvailbility}>
                                        <option value=''>  </option>
                                        <option value='Yes'> Yes </option>
                                        <option value='No'> No</option>
                  
      
                              </select>
                          </div>
                          </div>
                      <br></br>
                    
                      <button type="submit" className="btn btn-warning" onSubmit={this.handleUpdate}>Save</button>
                    
                    </form>
                    </div>
   



        </>
        );
    }
}
 
export default UpdateDetails;