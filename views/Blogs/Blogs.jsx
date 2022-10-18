const React = require('react')
const Navbar = require('../components/Navbar')

class Blogs extends React.Component{
    render(){
        const {blogs, loggedInUser} = this.props
        const latestBlogs = blogs.reverse()
        return(
        <div>
            <Navbar/>
            <head>
                <link rel= "stylesheet" href="/CSS/app.css"/>
                <link rel= "stylesheet" href="/CSS/blog.css"/>
                
            </head>
            <h1>Posts</h1>
            <form action='/blog' id= 'newPost' method='POST'>
            Title: <input type = 'text' name='title'/> <br/>
            Author: <input type = 'text' name='author'/> <br/>
            Body: <textarea  name='body' id='body'/> <br/>
            Sponsored?: <input type = 'checkbox' name='sponsored'/> <br/>
            <input type='submit' value='POST'/> 
            </form>
            <ul id='allBlogs'>
                {latestBlogs.map((blog,idx)=>{
                    return(
                        <div>
                        <ol id='blog'>
                            <h1>{blog.title}</h1><br/>
                            <h3>Written By: {blog.author}</h3><br/>
                            <h2>{blog.body}</h2>
                            {blog.author === loggedInUser ? (
                                <div>
                            <a style={styles.submit} class ='btn' href={`blog/${blog._id}/edit`}> Edit Post</a>
                            <form action={`/blog/${blog._id}?_method=DELETE`} method= 'POST' >
                                <input class='btn' type='submit' value="DELETE POST"/>
                            </form>
                            </div>
                            ) :null}
                          
                        </ol>
                        </div>
                    )
                })}
            </ul>    
        </div>)

        }
        }
const styles = {
    list: {
        marginTop:"30px"
    },
    submit: {
        padding:'10px',
        borderRadius:'2rem'

    }
}
module.exports = Blogs