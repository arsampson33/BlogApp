const React = require('react')

class Users extends React.Component{
    render()
  {  return(
        <div>
        <form action="/user" method="post">
            Username: <input type='text' name='username'/><br/>
            Email: <input type='text' name='email'/><br/>
            Password: <input type='text' name='password'/><br/>
            <input type='submit' value='Create Account'/> 
        </form>
        </div>
    )}
}

module.exports = Users