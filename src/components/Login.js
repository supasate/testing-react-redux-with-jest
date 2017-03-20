import React from 'react'

const Login = () => (
  <form className="login-form">
    <div>
       <label>Username:</label><input type="text" />
    </div>
    <div>
       <label>Password:</label><input type="password" />
    </div>
    <button>Login</button>
  </form>
)

export default Login
