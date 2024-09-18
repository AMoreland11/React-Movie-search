import React from 'react';
import '../pages/LoginStyle.css';


const Login = () => {
  return (
    <div className='form__wrapper'>
       <div className='form__container'>
            <h1>Login</h1>
            <form>
                <div className='user'>
                    <label>Username: </label>
                    <input type="text" name="username" />
                </div>
                <div className='pass'>
                    <label>Password: </label>
                    <input type="password" name="password" />
                </div>
                <button className='login' type="submit">Login</button>
            </form>
        </div> 
    </div>
  );
};

export default Login;
