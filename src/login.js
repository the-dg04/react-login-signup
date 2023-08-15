import React from 'react';
import ReactDOM from 'react-dom/client';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
export function Login_page(){
    return (
        <div className='cover'>
            <Card />
        </div>
    );
}

function forgot_pass_func(){
    alert("Nice.");
}

function Card(){
    return (
        <div id="card">
    <div id="card-content">
      <div id="card-title">
        <h2>LOGIN</h2>
      </div>
      <form method="post" className="form">
      <FontAwesomeIcon icon={icon({name: 'user', style: 'solid'})} style={{'padding-top':'12px'}}/>
        <input id="user-email" className="form-content" type="email" name="email" autocomplete="on" required placeholder="Username"/>
        <div className="form-border"></div>
        <FontAwesomeIcon icon={icon({name: 'key', style: 'solid'})} style={{'padding-top':'12px'}}/>
        <input id="user-password" className="form-content" type="password" name="password" required placeholder="Password"/>
        <div className="form-border"></div>
        <a>
          <legend id="forgot-pass" onClick={forgot_pass_func}>Forgot password?</legend>
        </a>
        <input id="submit-btn" type="submit" name="submit" value="LOGIN" />
        <a href="/signup" id="signup">Signup here!</a>
      </form>
    </div>
  </div>
    );
}