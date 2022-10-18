const React = require('react')

class Edit extends React.Component{
    render(){
        const blogs = this.props.blogs
        return(
            <div>
                <h1>Edit Your Post</h1>
                <form action={`/blog/${blogs._id}?_method=put`} method="POST" >
                    Title: <input type ='text' name='title' defaultValue={blogs.title}/>
                    Author: <input type ='text' name='author' defaultValue={blogs.author}/>
                    Body: <input type ='text' name='body' defaultValue={blogs.body}/>
                    <input type ="submit" value='Update post'/>
                    <form action={`/blog/${blogs._id}?_method=DELETE`} method= 'POST' >
                                <input class='btn' type='submit' value="DELETE POST"/>
                            </form>
                </form>
            </div>
        )
    }
}

module.exports = Edit
