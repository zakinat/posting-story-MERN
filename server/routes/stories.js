//importing dependencies
const express=require('express')

//importing functions
const {getStories,createStory,updatePost,deletePost,likedPost}=require('../controllers/stories')

//declare variables
const router=express.Router()

//declaring routes
router.get('/',getStories)
router.post('/',createStory)
router.patch('/:id', updatePost);
router.patch('/:id/likepost', likedPost);
router.delete('/:id', deletePost);


module.exports=router
//exporting to "server.js"