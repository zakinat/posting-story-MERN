import axios from 'axios'

const url='/stories'

export const fetchStories=()=>axios.get(url)
export const createStory=(newStory)=>axios.post(url,newStory)
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost)
export const deleteStory = (id) => axios.delete(`${url}/${id}`)
export const likedStory = (id) => axios.patch(`${url}/${id}/likepost`)
//exporting to "/src/redux/stories.js"