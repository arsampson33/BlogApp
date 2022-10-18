const React = require('react')
const Navbar = require('../components/Navbar')
class HomePage extends React.Component {
    render(){
        return(
        <div>
            <Navbar/>
            <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@1,700&display=swap" rel="stylesheet"/>
                <link rel= "stylesheet" href="/CSS/app.css"/>
       
            </head>
            <h1 style={styles.blogstin}>Blogstin</h1>
            <img src='https://images.unsplash.com/photo-1555601568-c9e6f328489b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdyaXRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'></img>
        </div>)
    }
}
const styles = {
    blogstin:{
        fontSize:'80px'
    }
}
module.exports = HomePage