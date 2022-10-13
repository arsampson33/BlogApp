const React = require('react')

class Blogs extends React.Component{
    render(){
        const blogs = this.props.blogs
        const latestBlogs = blogs.reverse()
        return(
        <div>
            <head>
                <link rel= "stylesheet" href="/CSS/app.css"/>
                <link rel= "stylesheet" href="/CSS/blog.css"/>
                
            </head>
            <h1>Blogs</h1>
            <form action='/blog' method='POST'>
            Title: <input type = 'text' name='title'/> <br/>
            Author: <input type = 'text' name='author'/> <br/>
            Body: <input type = 'text' name='body'/> <br/>
            Sponsored?: <input type = 'checkbox' name='sponsored'/> <br/>
            <input type='submit' value='POST'/> 
            </form>
            <ul>
                {latestBlogs.map((blog,idx)=>{
                    return(
                        <ol style={styles.list}>
                            <h1>{blog.title}</h1><br/>
                            <h3>{blog.author}</h3><br/>
                            <h2>{blog.body}</h2>
                            <a href={`blog/${blog._id}/edit`}> Edit Post</a>
                          
                        </ol>
                    )
                })}
            </ul>    
        </div>)

        }
        }
const styles = {
    list: {
        marginTop:"30px"
    }
}
module.exports = Blogs