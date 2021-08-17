//importing dependencies
const mongoose = require('mongoose')


const StorySchema = new mongoose.Schema({
  title: {
    type: String,
  },
  message: {
    type: String,
  },
  status: {
    type: String,
    default: 'public',
    enum:['public','private']
  },
  creator: {
    type:String,
  },
  tags:{
    type:[String]
  },
  selectedFile:{
    type:String
  },
  likeCount:{
    type:Number,
    default:0
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Story', StorySchema)
//exporting to "/controllers/stories.js"
