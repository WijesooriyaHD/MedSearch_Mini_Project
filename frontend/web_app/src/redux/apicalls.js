import axios from "axios";
import { Link } from "react-router-dom";
import { login } from "./userSlice";

import { useNavigate } from 'react-router-dom';
import ListMedicine from "../Pages/listMedicine";

export const UserLogin = async(user,dispatch)=>{

            dispatch(login({
                idNo:user.idNo,
                password:user.password,
                isloggedin:true,
            }));
        

            console.log("user in api :");
            console.log(user);
            console.log("api log ;"+user.isloggedin);

            
            
     
    

}