import React from 'react'
import {Link,useNavigate} from 'react-router-dom'

export default function Navbar() {
  let x =1;
  const navigate = useNavigate();
const handlelogo = ()=>{
  x=1;//auth token remove
  navigate("/Login")
}

  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <div className="container-fluid">
    <Link className="navbar-brand fs-1 fst-italic" to="/Home">Food DELV</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2">
        <li className="nav-item">
          <Link className="nav-link active fs-5 " aria-current="page" to="/Home">Home</Link>
        </li>
             { !x?//we need auth tocken  

<li className="nav-item">
<Link className="nav-link active fs-5 " aria-current="page" to="/">MyOrders</Link>
</li>:""

}
       
      </ul>
      {
        x?
        <div className='d-flex'>
          <Link className="btn bg-white text-success mx-1" to="/Login">Login</Link>
        
       
          <Link className="btn bg-white text-success mx-1" to="/createuser">SignUp</Link>
      </div>
      :
      <div className='d-flex'>
        <div >
        <Link className="btn bg-white text-success mx-2">My Cart</Link>
          </div>
        <div>
      <Link className="btn bg-white text-danger mx-2"onClick={handlelogo}>LogOut</Link>
        </div>
        
        </div>
      }

      
    </div>
  </div>
</nav>

    </div>
  )
}
