const express = require('express')
const BlogModel = require('../models/BlogSchema')

const router = express.Router()
// Add privacy to router/route
router.use((req,res,next)=>{
    if(req.session.loggedIn){
        next()
    } else {
        res.redirect('/user/signin')
    }
})

router.get('/', async(req,res) =>{
    try{
    const blogs = await BlogModel.find({})
    res.render('Blogs/Blogs', {blogs:blogs, loggedInUser: req.session.username})
    } catch(error){
        console.log(error);
        res.status(403).send('Cannot create')
    }
})
router.get('/:id', async(req,res) =>{
    try {
        const blog = await BlogModel.findById(req.params.id)
        res.send(blog)
    } catch(error) {
        console.log(error)
        res.status(403).send('Cannot get')

    }

})
//POST: CREATE a New Blog
 router.post('/', async (req,res) =>{
   try{
    req.body.author = req.session.username
    const newBlog = await BlogModel.create(req.body)
    res.redirect('/blog')
   } catch(error){
    console.log(error);
    res.status(403).send('Cannot create')
   }
 })

router.get('/:id/edit' , async (req,res) =>{
    try{
        const foundBlog = await BlogModel.findById(req.params.id)
        res.render('pages/Edit',{blogs:foundBlog})
    } catch(error){
        res.status(403).send('ID NOT FOUND')
    }
})

 //PUT: Update by ID
router.put('/:id', async (req,res) =>{
    try{
        const updatedBlog = await BlogModel.findByIdAndUpdate(req.params.id, req.body,{'returnDocument' : "after"})
        res.redirect('/blog')
    }catch(error){
        console.log(error);
        res.status(403).send('Cannot create')
    }
})


//DELETE
router.delete('/:id', async (req, res) =>{
    try{
        const deletedBlog = await BlogModel.findByIdAndRemove(req.params.id)
        res.redirect('/blog')
    }catch(error){
        console.log(error);
        res.status(403).send('Cannot create')
    }
})

module.exports = router;