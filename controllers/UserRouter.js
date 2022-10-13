const express = require('express')
const UserModel = require('../models/UserSchema')

const router = express.Router()

router.get('/', async(req,res) =>{
    try{
    const users = await UserModel.find({})
    res.send(users)
    } catch(error){
        console.log(error);
        res.status(403).send('Cannot create')
    }
})
router.get('/:id', async(req,res) =>{
    try {
        const user = await UserModel.findById(req.params.id)
        res.send(user)
    } catch(error) {
        console.log(error)
        res.status(403).send('Cannot get')

    }

})
//POST: CREATE a New User
 router.post('/', async (req,res) =>{
   try{
    const newUser = await UserModel.create(req.body)
    res.send(newUser)
   } catch(error){
    console.log(error);
    res.status(403).send('Cannot create')
   }
 })

 //PUT: Update by ID
router.put('/:id', async (req,res) =>{
    try{
        const updatedUser = await UserModel.findByIdAndUpdate(req.params.id, req.body,{'returnDocument' : "after"})
    }catch(error){
        console.log(error);
        res.status(403).send('Cannot create')
    }
})


//DELETE
router.delete('/:id', async (req, res) =>{
    try{
        const userBlog = await UserModel.findByIdAndRemove(req.params.id)
        console.log(userBlog)
        res.send('User deleted')
    }catch(error){
        console.log(error);
        res.status(403).send('Cannot create')
    }
})

module.exports = router;