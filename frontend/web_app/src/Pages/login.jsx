import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { UserLogin } from '../redux/apicalls';
import { login } from '../redux/userSlice';
import axios from "axios";

import './login.css'

import { useNavigate } from 'react-router-dom';
const Login =() =>{

    const [idNo,setIdNo]=useState("");
    const [password,setPassword]=useState("");
    const isloggedin=false;

    const[data,setData]=useState([]);
 //const[value,setValue]=useState([]);
 useEffect(()=>{
  loadUserData();
 },[]);

 const loadUserData=async()=>{
    return await axios.get("http://localhost:8080/api/shopowners").then((response)=>setData(response.data)).catch((err)=>console.log(err));
 };

 console.log("data",data);


    const navigate = useNavigate();
       
    console.log(idNo,password);

    const user1=useSelector((state)=>state.user);
    console.log("user id = "+user1.idNo);

   

    const dispatch=useDispatch();

    

    const handleSubmit = (e) =>{
        e.preventDefault();

        /*dispatch(login({
            idNo:idNo,
            password:password,
        }));
        */

        dispatch(login({
            idNo:user1.idNo,
            password:user1.password,
            isloggedin:false,
        }));

        console.log(user1);

        
 
 
 const payload=data.find(item=>item.idNo===idNo && item.password ===password)
        if(payload){

            

           
            
            dispatch(login({
                idNo:idNo,
                password:password,
                isloggedin:true,
            }));
        
            UserLogin({idNo,password,isloggedin},dispatch);
           
           
            
        }
        else{
            alert('Incorrect ID or Password')
        }
     



handleNavigate(user1.isloggedin);


    

    }

    console.log("pass : ",user1.password);


    console.log("user log in log form? :"+user1.isloggedin);

    
 const handleNavigate = (login) => {

    console.log("login ="+login);
    if(login===true){

      
       console.log("nav");
       navigate('/listmedicines');

    }
    
}

   


    return (

        <div className="login">
            <form className="login_form" >
                <h1>Login Here 🚪</h1>
                <input 
                type="idNo" placeholder='Id No'
                onChange={(e)=>setIdNo(e.target.value)}></input>

                <input
                type="password" placeholder='Password'
                onChange={(e)=>setPassword(e.target.value)}></input>

                <button type='submit' className='submit_btn' onClick={(e)=>handleSubmit(e)}>Login</button>

            </form>

        </div>


    )


}
export default Login;
