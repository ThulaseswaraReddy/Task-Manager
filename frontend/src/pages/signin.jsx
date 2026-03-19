import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Signin() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");   
  const navigate = useNavigate();
  const signin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/auth/signin", {
        email,
        password,
      });

    if(res.data.message!=="login success"){
        alert(res.data.message);
        return;
    }
    localStorage.setItem('userid',res.data.userid);
    navigate("/dashboard");
} catch(err){
      alert("An error occurred while signin.");
    }}
  return (
     <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow mx-auto" style={{width: "350px"}}>
        <h2 className="text-center mb-4">Sign In</h2>
        <form onSubmit={signin}>
        <input type="email" className="form-control mb-3" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} required/>
         <input type="password"   className="form-control mb-3" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} required/>
         <button className="btn btn-primary w-100" type="submit">SignIn</button>
         </form>
         <p   className="text-center mt-3 text-primary"
          style={{cursor:"pointer",textDecoration:"underline"}} onClick={()=>navigate("/")}>New user? Signup</p>
    </div>
    </div>
  );
}
    export default Signin