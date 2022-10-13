const React = require('react')

class Blogs extends React.Component{
    render(){
        const blogs = this.props.blogs
        return(
        <div>
            <h1>Blog area</h1>
            <form action='/blog' method='POST'>
            Title: <input type = 'text' name='title'/> <br/>
            Author: <input type = 'text' name='author'/> <br/>
            Body: <input type = 'text' name='body'/> <br/>
            Sponsored?: <input type = 'checkbox' name='sponsored'/> <br/>
            <input type='submit' value='POST'/> 
            </form>
            <ul>
                {blogs.map((blog,idx)=>{
                    return(
                        <ol style={styles.list}>
                            {blog.title}<br/>
                            {blog.author}<br/>
                            {blog.body}
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