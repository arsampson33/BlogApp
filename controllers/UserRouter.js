const express = require('express')
const UserModel = require('../models/UserSchema')
const bcrypt = require("bcryptjs");

const router = express.Router()



router.get('/', async(req,res) =>{
    try{
    const users = await UserModel.find({})
    res.render('Users/Signup',{users:users})
    } catch(error){
        console.log(error);
        res.status(403).send('Cannot create')
    }
})

router.get('/signup', (req, res) =>{
    res.render('Users/Signup')
})
//POST: CREATE a New User
router.post('/signup', async (req,res) =>{
   try{
       
       const emailAlreadyExists = await UserModel.find({email: req.body.email})
       if(emailAlreadyExists[0]){
        return res.send('Email Already Created') //checks for email
    }
    const userAlreadyExists = await UserModel.find({username: req.body.username})
    if(userAlreadyExists[0]){
        return res.send('User Already Created') //checks for username
    }
    
    const SALT  = await bcrypt.genSalt(10) // how secure your PW will be
    req.body.password = await bcrypt.hash(req.body.password, SALT) //reassigning the PW
    const newUser = await UserModel.create(req.body)
    res.redirect('/user/signin')
} catch(error){
    console.log(error);
    res.status(403).send('Cannot create')
}
})
router.get('/signin', (req,res) =>{
    res.render('Users/Signin')
 })

router.post('/signin', async (req, res) => {
    try{
        const user = await UserModel.findOne({ email : req.body.email}) 
        if (!user) return res.send("Please check your email and password")//checks email
        const decodePassword = await bcrypt.compare(req.body.password, user.password)
        if (!decodePassword) return res.send("Please check your email and password")//checks password
        //set the user seession
        //create a new username in the session obj using the user info from db
        if(decodePassword){
        req.session.username = user.username
        req.session.loggedIn = true
        res.redirect('/blog')}
    } catch(error){ 
        
    }
})

router.get('/signout',async (req,res) =>{
    try{
    req.session.destroy()
    res.redirect('/')
    } catch(err){

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