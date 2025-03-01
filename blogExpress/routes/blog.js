const express = require('express')
const path = require('path')
const blogs = require('../data/blogs')

const router = express.Router()

router.get('/',(req,res)=>{
    // res.sendFile(path.join(__dirname,'../templates/index.html'))
    res.render('home');
})

router.get('/blog',(req,res)=>{
    blogs.forEach(element => {
        console.log(element.title);
    });
    res.sendFile(path.join(__dirname,'../templates/blogHome.html'))
})

router.get('/blog-post/:slug',(req,res)=>{    
    myBlog = blogs.filter((element)=>{
        return element.slug = req.params.slug
    });
    console.log(myBlog);
    
    res.sendFile(path.join(__dirname,'../templates/blogPost.html'))
})

module.exports = router