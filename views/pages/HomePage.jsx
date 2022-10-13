const React = require('react')
const Navbar = require('../components/Navbar')
class HomePage extends React.Component {
    render(){
        return(
        <div>
            <Navbar/>
            <head>
                <link rel= "stylesheet" href="/CSS/app.css"/>
            </head>
            <h1>BLOGSTIN</h1>
        </div>)
    }
}

module.exports = HomePage