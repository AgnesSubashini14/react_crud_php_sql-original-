import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

export default function ListUser(){
    const navigate=useNavigate();
  
    
    const [inputs,setInputs]=useState([]);
    const {id}=useParams();
    useEffect(()=>{
        getUser()
    },[]);
    function getUser(){
        axios.get(`http://localhost/php/crud/create.php/${id}`).then(function(response){
            console.log(response.data);
            setInputs(response.data)
        })
    }
    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setInputs(values=>({...values,[name]:value}))
    }
    const handleSubmit=(e)=>{
e.preventDefault();
axios.put(`http://localhost/php/crud/create.php/${id}/edit`,inputs).then(function(response){
    // console.log(response.data);
    navigate('/')
})

}
   
    return(
       

        <>
        <div>
        <h3>Edit Users </h3>
          <form onSubmit={handleSubmit}>
        <table cellSpacing={10}>
            <tbody>
                <tr>
                    <th>
<label>Name :</label>
                    </th>
                    <td>
<input type='text' name="name" onChange={handleChange} value={inputs.name} />
                    </td>
                </tr>
                <tr>
                    <th>
<label>Email :</label>
                    </th>
                    <td>
<input type='email' name="email"   onChange={handleChange} value={inputs.email}  />
                    </td>
                </tr>
                <tr>
                    <th>
<label>mobile :</label>
                    </th>
                    <td>
<input type='number' name="mobile"  onChange={handleChange} value={inputs.mobile} />
                    </td>
                </tr>
                <tr>
                  
                    <td colSpan={2} align='right'>
<button >Save</button>


                    </td>
                </tr>
            </tbody>
        </table>
       
          </form>
        </div>
        </>
    )
}

