import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './listMedicine.css'
//import {userSchema} from '../Validations/formValidation'
//import * as yup from "yup";

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

class ListMedicine extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            medicines: []
        }
    };

    componentDidMount(){
        axios.get("http://localhost:8080/api/medicines").then((res)=>{
            this.setState({medicines:res.data})
            console.log(res.data)
        }
        );
    };

    handleDelete(medName,compRegNo,e){

         axios.delete(`http://localhost:8080/api/medicines/delete/${medName}/${compRegNo}`)
         .then(res=>{

            console.log(res);
            if(res.status===200){
                alert(`delete successfully`)
            }
            
         }
        )
    };
          


    render(){

        return(

            <div>
            <h2 className="text-center">Medicine  List</h2>
            <div className = "row">
               <Link to="/form">
               <button className="btn btn-primary"> Add</button>
               </Link>
            </div>
            <br></br>
            <div className = "row">
                   <table className = "table table-striped table-bordered">

                       <thead>
                           <tr>
                               <th> Medicine Name</th>
                               <th> Pharmacy Reg No</th>
                               <th> Pharmacy Address</th>
                               <th> Pharmacy Name</th>
                               <th> Pharmacy Tele No</th>
                               <th> Unit Price</th>
                               <th> Availability</th>
                               <th> Action</th>
                           </tr>
                       </thead>
                       <tbody>
                           {
                               this.state.medicines.map(
                                   meddetails=> 
                                   <tr >
                                        <td> {meddetails.medName} </td>
                                        <td> {meddetails.compRegNo} </td>               
                                        <td> {meddetails.compAddress} </td> 
                                        <td> {meddetails.compName} </td> 
                                        <td> {meddetails.compTeleNo} </td> 
                                        <td> {meddetails.unitPrice} </td> 
                                        <td> {meddetails.availability} </td> 
                                        <td>
                                        <Link to='/updatedetails'>
                                        <button className="btn btn-success">Update </button>
                                        </Link>
                                        <button style={{marginLeft: "10px"}} className="btn btn-danger"  onClick={(e)=>this.handleDelete(meddetails.medName,meddetails.compRegNo,e)}>Delete </button>
                                        </td>
                                        
                                        
                                   </tr>
                               )
                           }
                       </tbody>
                   </table>

            </div>

       </div>



        )


    }
           


}
 
export default ListMedicine;