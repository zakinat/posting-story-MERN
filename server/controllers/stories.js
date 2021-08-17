//importing dependencies
const express =require('express') 
const mongoose =require('mongoose') 

//importing the model of data that would send to the server 
const Story=require('../models/Story')


// @desc  Get  stories
// @route Get /stories
const getStories=async(req,res)=>{
    try {
        const stories=await Story.find()
        res.status(200).json(stories)

    } catch (err) {
        res.status(404).json({message:err.message})
    }
    
}


// @desc  Post  story
// @route Post /stories
const createStory=async(req,res)=>{
        const { title, message, selectedFile, creator, tags } = req.body

        const newStory=new Story({ title, message, selectedFile, creator, tags })
    try {
        await newStory.save()
        res.status(201).json(newStory)
    } catch (err) {
        res.status(409).json({message:err.message})
    }
    
}


// @desc  update  story
// @route Patch /stories/:id
const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, message, creator, selectedFile, tags } = req.body;
    
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

        const pendedPost = { creator, title, message, tags, selectedFile, _id: id };

        const updatedPost=await Story.findByIdAndUpdate(id, pendedPost, { new: true });

        res.json(updatedPost);
    } catch (err) {
        res.status(409).json({message:err.message})
    }
    
}


// @desc  Delete  story
// @route Delete /stories/:id
const deletePost= async (req, res) => {
    try {
        const {id} =req.params
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
        await Story.findByIdAndRemove(id) 

        res.status(200).json({
            success:true,
            data:{}
        })
    } catch (err) {
        return res.status(500).json({message:err.message})
    }
}


// @desc  Like  story
// @route Patch /stories/:id
const likedPost= async (req, res) => {
    try {
        const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

        const story = await Story.findById(id)

        const updatestory=await Story.findByIdAndUpdate(id, {likeCount:story.likeCount+1}, { new: true });

    res.json(updatestory);
    } catch (err) {
        return res.status(500).json({message:err.message})
    }
}


module.exports={getStories,createStory,updatePost,deletePost,likedPost}
//exporting to "/routes/stories.js"

