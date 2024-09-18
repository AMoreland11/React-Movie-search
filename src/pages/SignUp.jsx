import React from 'react';

const SignUp = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      {/* Add form and input fields for sign up */}
      <form>
        <label>Username: </label>
        <input type="text" name="username" /><br />
        <label>Password: </label>
        <input type="password" name="password" /><br />
        <label>Email: </label>
        <input type="email" name="email" /><br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
