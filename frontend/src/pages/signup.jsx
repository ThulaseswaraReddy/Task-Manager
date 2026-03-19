import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Signup() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");   
  const navigate = useNavigate(); 
  const register = async (e) => {
    e.preventDefault();
    try{
    const res = await axios.post("http://localhost:3000/api/auth/signup", {
      email,
      password,
    });
    if(res.data.message!=="User Registered"){
        alert(res.data.message);
        return;
    }
    navigate("/signin");
    }catch(err){
      alert("An error occurred while signup.");
    }
}
  return (
     <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "350px" }}>
    
        <h2 className="text-center mb-3">Sign Up</h2>
        <form onSubmit={register}>
        <input type="email"    className="form-control mb-3" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} required/>
         <input type="password"  className="form-control mb-3"placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} required/>
         <button type="submit" className="btn btn-primary w-100">SignUp</button>
         </form>
         <p className="text-center mt-3 text-primary"
          style={{cursor:"pointer",textDecoration:"underline"}} onClick={()=>navigate("/signin")}>Already have account? Signin</p>
          </div>
    </div>)}
    export default Signup