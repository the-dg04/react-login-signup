import React from 'react';
import ReactDOM from 'react-dom/client';
import './Signup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
export function Signup_page(){
    return (
        <div className='cover'>
            <Card />
        </div>
    );
}

function Card(){
    return (
        <div id="card-2">
    <div id="card-content">
      <div id="card-title">
        <h2>SIGNUP</h2>
      </div>
      <form method="post" className="form">
      <FontAwesomeIcon icon={icon({name: 'envelope', style: 'solid'})} style={{'padding-top':'12px'}}/>
        <input id="user-email" className="form-content" type="email" name="uname" required placeholder="light112@gmail.com"/>
        <div className="form-border"></div>
        <FontAwesomeIcon icon={icon({name: 'user', style: 'solid'})} style={{'padding-top':'12px'}}/>
        <input id="user-email" className="form-content" type="email" name="uname" required placeholder="Username"/>
        <div className="form-border"></div>
        <FontAwesomeIcon icon={icon({name: 'key', style: 'solid'})} style={{'padding-top':'12px'}}/>
        <input id="user-password" className="form-content" type="password" name="pswd" required placeholder="Password"/>
        <div className="form-border"></div>
        <input id="submit-btn" type="submit" name="submit" value="SIGN ME UP" />
        <a href="/login" id="signup">Already a user? Login here</a>
      </form>
    </div>
  </div>
    );
}