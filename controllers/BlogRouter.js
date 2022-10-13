const express = require('express')
const BlogModel = require('../models/BlogSchema')

const router = express.Router()

router.get('/', async(req,res) =>{
    try{
    const blogs = await BlogModel.find({})
    res.render('Blogs/Blogs', {blogs:blogs})
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
    const newBlog = await BlogModel.create(req.body)
    res.redirect('/blog')
   } catch(error){
    console.log(error);
    res.status(403).send('Cannot create')
   }
 })

 //PUT: Update by ID
router.put('/:id', async (req,res) =>{
    try{
        const updatedBlog = await BlogModel.findByIdAndUpdate(req.params.id, req.body,{'returnDocument' : "after"})
    }catch(error){
        console.log(error);
        res.status(403).send('Cannot create')
    }
})


//DELETE
router.delete('/:id', async (req, res) =>{
    try{
        const deletedBlog = await BlogModel.findByIdAndRemove(req.params.id)
        console.log(deletedBlog)
        res.send('Blog deleted')
    }catch(error){
        console.log(error);
        res.status(403).send('Cannot create')
    }
})

module.exports = router;