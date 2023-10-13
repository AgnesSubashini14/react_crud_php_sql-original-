import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function ListUser(){
    const navigate=useNavigate();
    
    const [inputs,setInputs]=useState([]);
    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setInputs(values=>({...values,[name]:value}))
    }
    const handleSubmit=(e)=>{
e.preventDefault();
axios.post('http://localhost/php/crud/create.php',inputs).then(function(response){
    // console.log(response.data);
    navigate('/')
})

}
   
    return(

        <>
        <h3> CreateUsers</h3>
        <div>
          <form onSubmit={handleSubmit}>
        <table cellSpacing={10}>
            <tbody>
                <tr>
                    <th>
<label>Name :</label>
                    </th>
                    <td>
<input type='text' name="name" onChange={handleChange} />
                    </td>
                </tr>
                <tr>
                    <th>
<label>Email :</label>
                    </th>
                    <td>
<input type='email' name="email"   onChange={handleChange}  />
                    </td>
                </tr>
                <tr>
                    <th>
<label>mobile :</label>
                    </th>
                    <td>
<input type='number' name="mobile"  onChange={handleChange}  />
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
