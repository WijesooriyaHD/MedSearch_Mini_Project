import React,{useEffect,useState} from "react";
import axios from 'axios';


export default function Searchfilter(){

const[data,setData]=useState([]);
 const[filterValue,setfilterValue]=useState(''); 
 const [searchApiData,setSearchApiData]=useState([]);


    useEffect(()=>{
        /*
        const fetchData=()=>{
            fetch('http://localhost:8080/api/v1/medicine')
            .then(response=>response.json())
            //.then((response)=>setData(response.data))
            .then(json=>console.log(json))

        } */
        
        //fetchData();
     loadUserData();
       },[])
      
       
       const loadUserData=async()=>{
          return await axios.get("http://localhost:8080/api/medicines/available")
          .then((response)=>{
            setData(response.data)
            setSearchApiData(response.data)})
            .catch((err)=>console.log(err));
       };
       
      
       console.log("data",data);
       console.log(data.length);
       console.log("Search Api data is ",searchApiData);


       const handleFilter=(e)=>{
        if(e.target.value===''){
            setData(searchApiData)
        }
        else{
           const filterResult= searchApiData.filter(item=>item.medName.toLowerCase().includes(e.target.value.toLowerCase()));
           console.log("Filter result is ",filterResult)
           setSearchApiData(filterResult)
        }
            setfilterValue(e.target.value)
       }


    return(
        <container>
          <div>
            <font size="16"> Now Available at......</font>
           
          </div>
        <form style={{
          margin:"auto",
          padding:"15px",
          maxWidth:"400px",
          alignContent:"center",
        }}
        className="d-flex input-group w- auto"
    >    
      <input
        type="text"
        className="form-control"
        placeholder="Enter the name of the Medicine..."
        value={filterValue}
        //onChange={(e)=>handleFilter(e)}/>
        onChange={(e)=>setfilterValue(e.target.value)}/>
      
       
        
      
        </form>
        <div className='container'>
            <table className='table' table-bordered>
                <thead className='thead-dark'>
                    <th> Medicine Name </th>
                    <th> Pharmacy Registration Number </th>
                    <th> Pharmacy Name </th>
                    <th> Pharmacy Address </th>
                    <th> Pharmacy Telephone Number </th>
                    <th> Unit Price </th>
                    <th> Availability </th>
      
      
                    
                </thead>
                
                  {data.filter(item=>item.medName.includes(filterValue)
                  ).map((item,index)=>(
                    <tbody key={index}>
                  
                    <tr>
      
                            <td>{item.medName}</td>
      
                            <td>{item.compRegNo}</td>
                            <td>{item.compName}</td>
                            <td>{item.compAddress} </td>
                            <td>{item.compTeleNo}</td>
                            <td>{item.unitPrice}</td>
                            <td>{item.availability}</td>
                        </tr>
                  
                </tbody>
                  ))}
            </table>
        </div>
                    
      </container>
      )
}




/*

 
*/