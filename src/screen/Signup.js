import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
export default function Signup() {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geolocation: "" })
    const navigate = useNavigate();
    const handle = ()=>{
        console.log("running");
        console.log(credentials);
        if(!credentials.email){//format check
            alert("Fill the details correctly ")
        
            navigate("/Home")
        }
    //    e.preventDefault();
      // const response = fetch("localhost url")/*here u should change to connect wwith backend when we click submit form*/
    }

    const onChange = (event) =>{
        setCredentials({...credentials,[event.target.name]:event.target.value})
    }

  return (
    <>
    <div className = " bg-success">
    <Link className=" navbar-brand fs-1 fst-italic bg-success text-white" to="/Home">Food DELV</Link>     
    </div> 
    <div className = "container">
     <form onSubmit={handle}>
     <div className="mb-3">        
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control " name ='name' value = {credentials.name} onChange={onChange} />

  </div>
  <div className="mb-3">        
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChange} name ='email' value = {credentials.email}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name = 'password' value = {credentials.password} onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
    <input type="address" className="form-control" id="exampleInputPassword1" name = 'geolocation' value = {credentials.geolocation} onChange={onChange}/>
  </div>
 
  <button type="submit" className="m-3 btn btn-success" onSubmit={handle}>Submit</button>
  <Link to = "/login" className = 'm-3 btn btn-danger'>Already a user</Link>
</form>
 
</div>
    </>
  )
}
