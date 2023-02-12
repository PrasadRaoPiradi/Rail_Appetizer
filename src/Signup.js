import React, { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [status, setStatus] = React.useState(true)
  const [password, setPassword] = useState('');
  const [passwordRepeat, setRepeatPassword] = useState('');
  const [email, setEmail] = useState('');

  const handlePasswordChange = event => {
    setPassword(event.target.value);

    console.log('value is:', event.target.value);
  };

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
function isValidPassword(pass)
{
  var i=0;
var character='';
var isNumber = false;
var isUpperCase = false;
var isLowerCase= false;
var islength = false;
if(pass.length <= 4)
return false;
while (i <= pass.length){
    character = pass.charAt(i);
    if (!isNaN(character * 1)){
       isNumber = true;
    }else{
        if (character === character.toUpperCase()) {
            isUpperCase = true;
        }
        if (character === character.toLowerCase()){
            isLowerCase = true;
        }
    }
    i++;
}

return isLowerCase && isUpperCase && isNumber;
}

  const handlePasswordReChange = event => {
    setRepeatPassword(event.target.value);

    console.log('value is:', event.target.value);
  };
  const handleEmailChange = event => {
    setEmail(event.target.value);

    console.log('value is:', event.target.value);
  };


  const radioHandler = (status) => {
    setStatus(status);
  };
  return (

    <form>
      <h1>Sign Up</h1>
      <div className="mb-3">
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" defaultChecked={status} name="inlineRadioOptions" id="inlineRadio1" value="option1" onClick={(e) => radioHandler(true)} />
          Customer
        </div>

        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" defaultChecked={!status} name="inlineRadioOptions" id="inlineRadio2" value="option2" onClick={(e) => radioHandler(false)} />
          Restaurant
        </div >
      </div>
      {status === false &&
        <>
          <div className="mb-3">
            <label>Restaurant Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
            />
          </div>
          <div className="mb-3">
            <label>Address</label>
            <input type="text" className="form-control" placeholder="Last name" />
          </div>
          <div className="mb-3">
            <label>GST Number</label>
            <input type="text" className="form-control" placeholder="GST Number" />
          </div>
        </>

      }
      {status === true &&

        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
          />
        </div>
      }
      <div className="mb-3">
        <label>Phone Number</label>
        <input type="text" className="form-control" placeholder="Phone Number" />
      </div>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          onChange={handleEmailChange}
        />
      </div>

      <div className="mb-3">
        <label>Password </label>
        <h7> use a combination of lower case, upper case and numbers and minumum length of 5.</h7>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={handlePasswordChange}
        />
      </div><div className="mb-3">
        <label>Confirm Password</label>
        <h7> use a combination of lower case, upper case and numbers and minumum length of 5.</h7>
        <input
          type="password"
          id='password'
          required={true}
          className="form-control"
          placeholder="Enter password"
          onChange={handlePasswordReChange}
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary" onClick={() => {
          if (password === "" || email === "") {
            alert('Enter password and Email')
          }          
          else if(isValidEmail(email) === false)
          {
             alert("please check email format.")
          }
          else if (password !== passwordRepeat)
            alert('password do not match')
            else if (isValidPassword(password) === false)
            {
              alert('Please adhere to password criteria')
            }
          else {

            console.log(password + " " + email + " " + status)
            if(status)
            sessionStorage.setItem("CredentialsCustomer", password + " " + email + " " + status);
            else
            sessionStorage.setItem("CredentialsRest", password + " " + email + " " + status);
            alert("Singup Successful.")
            navigate("/login")
          }
        }}>
          Sign Up
        </button>
      </div>
      <br></br>
      <div className="bg-light clearfix">
        <span>Already have an account?  </span>
        <button type="button" className="btn btn-success float-right" onClick={() => {
          navigate("/login")
        }}>Login</button>
      </div>
    </form>
  );
}

export default Signup;