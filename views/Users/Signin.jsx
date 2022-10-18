const React = require('react')
const Navbar = require('../components/Navbar')

class Signin extends React.Component{
    render()
  {  return(
        <div>
            <Navbar/>
            <head>
            <link rel= "stylesheet" href="/CSS/app.css"/>
            <link rel= "stylesheet" href="/CSS/user.css"/>
            </head>
        <h1>Sign In</h1>
        <form action="/user/signin" method="post">
            Email: <input type='text' name='email'/><br/>
            Password: <input type='password' name='password'/><br/>
            <input type='submit' value='Sign In'/> 
        </form>
        <h3> No Account? <a href='/user/signup'> Create One!</a></h3>
        </div>
    )}
}

module.exports = Signin