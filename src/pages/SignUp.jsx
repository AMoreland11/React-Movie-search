import React from 'react';
import '../pages/SignUpStyle.css';


const SignUp = () => {
  return (
    <div className='signUp__wrapper'>
        <div className='signUp__container'>
            <h1>Sign Up</h1>
            <form>
                <div className='signUp__user'>
                    <label>Username: </label>
                    <input type="text" name="username" />
                </div>
                <div className='signUp__pass'>
                    <label>Password: </label>
                    <input type="password" name="password" />
                </div>
                <div className='signUp__email'>
                    <label>Email: </label>
                    <input type="email" name="email" />
                </div>
                <button className='login'type="submit">Sign Up</button>
            </form>
        </div>
    </div>
  );
};

export default SignUp;
