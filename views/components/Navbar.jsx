const React = require('react')


class Navbar extends React.Component {
    render() {
        return( 
            <nav>
            <head>
                <link rel = 'stylesheet' href = '/CSS/nav.css'/>
            </head>
                <ul>
                
               <li><a href='/'>Home</a></li> 
               <li><a href='/blog'>Blogs</a></li> 
               <li id ='end'><a href='/user/signup'>Signin/up</a></li> 
               <li><a href='/user/signout'>Signoutp</a></li> 
                </ul>
            </nav>
        )
    }
}

const style ={
    nav: {
        
       
       

    }
}

module.exports = Navbar