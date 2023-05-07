import React,{useState} from 'react'
import { Link } from 'react-router-dom'
export default function Login() {
  const [credential, setCredentials] = useState({  email: "", password: "" })

 

  const handle = ()=>{
      
      if(credential.password === "12345" && credential.email === "divi@gmail.com" ){
       
         console.log("running");
       console.log(credential);
      }
      else{
        alert(" User NOT registered")
      }
  //    e.preventDefault();
    // const response = fetch("localhost url")/*here u should change to connect wwith backend when we click submit form*/
  }

  const onChange = (event) =>{
      setCredentials({...credential,[event.target.name]:event.target.value})
  }
  return (

   

    <div>
      <div className = " bg-success">
      <Link className=" navbar-brand fs-1 fst-italic bg-success text-white" to="/Home">Food DELV</Link>      </div>
       <form onSubmit={handle}>
     
  <div className="mb-3">        
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChange} name ='email' value = {credential.email}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name = 'password' value = {credential.password} onChange={onChange}/>
  </div>
  
 
  <button type="submit" className="m-3 btn btn-success" onSubmit={handle}>Submit</button>
  <Link to = "/createuser" className = 'm-3 btn btn-danger'>New user</Link>
</form>
    </div>
  )
}
