const React = require('react')
const Navbar = require('../components/Navbar')

class Signup extends React.Component{
    render()
  {  return(
        <div>
            <Navbar/>
            <head>
            <link rel= "stylesheet" href="/CSS/app.css"/>
            <link rel= "stylesheet" href="/CSS/user.css"/>
            </head>
        <h1>Create an Account</h1>
        <form action="/user/signup" method="post">
            Username: <input type='text' name='username'/><br/>
            Email: <input type='text' name='email'/><br/>
            Password: <input type='password' name='password'/><br/>
            <input type='submit' value='Create Account'/> 
        </form>
        </div>
    )}
}

module.exports = Signup