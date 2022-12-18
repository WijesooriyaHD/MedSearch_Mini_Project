import axios from "axios";
import { Link } from "react-router-dom";
import { login } from "./userSlice";

import { useNavigate } from 'react-router-dom';
import ListMedicine from "../Pages/listMedicine";

export const userLogin = async(user,dispatch)=>{

    


    dispatch(login({
        idNo:user.idNo,
        password:user.password,
        isloggedin:false,
    }));

   

    axios.get(`http://localhost:8080/api/shopowners/${user.idNo}/${user.password}`)
    .then(res=>{

       // console.log(res);
        //console.log(res.data.idNo);
        if(res.status===200 && res.data!=="" ){

            console.log(res);

           
            
            dispatch(login({
                idNo:user.idNo,
                password:user.password,
                isloggedin:true,
            }));
        

            console.log("user in api :");
            console.log(user);
            console.log("api log ;"+user.isloggedin);

            //return 2;

           // handleNavigate(user.isloggedin);

            //const navigate = useNavigate();
            //navigate('/listmedicines');
            //alert(`login successfull`);s
           // history.push('./listmedicines');
//<ListMedicine/>
            
        }
        
     }
    )

}