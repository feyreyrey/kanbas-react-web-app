import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signin } from '../users/client';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';



function Login() {

  const [username, setUsername] = useState('');
  const [pwd, setPwd] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
          const credentials = { username: username, password: pwd };
          const response = await signin(credentials);
          const uId = response._id;
          if (response) {
            console.log(response); 
            console.log(uId);
            setSuccess(true);
            localStorage.removeItem('user');
            localStorage.setItem('user', JSON.stringify(response));
            navigate('/labs/a3')
        } else {
            console.log('failed');
        }    
  };
  return (
    <div className="loading" data-bs-theme="dark">
            <div className="login-bubble d-flex-column" data-bs-theme="dark">
            <form className="login-form" >
              {/* <!-- Username input --> */}
              <div className="form-outline mb-4">
                <input type="name" id="name" className="form-control" 
                placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
              </div>
    
              {/* <!-- Password input --> */}
              <div className="form-outline mb-4">
                <input type="password" id="password" className="form-control" 
                placeholder="Password" value={pwd} onChange={(e) => setPwd(e.target.value)}/>
              </div>
              {/* <!-- 2 column grid layout for inline styling --> */}
              <div className="row mb-4">
                <div className="col d-flex justify-content-center">
                  {/* <!-- Checkbox --> */}
                  <div className="form-check">
                    <input className="form-check-input login-checkbox" 
                    type="checkbox" value="" id="form2Example31" />
                    <label className="form-check-label" htmlFor="rememberme"> Remember me </label>
                  </div>
                </div>
    
                <div className="col">
                  {/* <!-- Simple link --> */}
                  <a href="#!" style={{ color: '#a86ed1' }}>Forgot password?</a>
                </div>
              </div>
    
              {/* <!-- Submit button --> */}
              <div className="d-flex-col justify-content-center">
              <button type="button" className="btn btn-primary btn-md btn-block mb-4" 
              onClick={handleSubmit} >Sign in</button>
              <div style={{paddingBottom:10}}>
              </div>
              </div >
            </form>
          </div >
    </div >
  )
}


export default Login;