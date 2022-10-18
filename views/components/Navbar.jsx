const React = require('react')


class Navbar extends React.Component {
    render() {
        return( 
            <nav>
            <head>
                <link rel = 'stylesheet' href = '/CSS/nav.css'/>
            </head>
                <ul>
                
               <li><a class='navlink' href='/'>Home</a></li> 
               <li><a class='navlink'href='/blog'>Blogs</a></li> 
               <li><a class='navlink' href='/user/signin'>Sign In</a></li> 
               <li><a class='navlink' href='/user/signout'>Sign Out</a></li> 
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