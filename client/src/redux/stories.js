/* eslint-disable no-fallthrough */
import * as ActionTypes from './ActionTypes'
import * as api from '../api'


//reducer
export const Stories = (state = {
    isLoading:true,
    errMess:null,
    stories:[]
}, action) => {
    switch (action.type) {
        case ActionTypes.STORIES_FETCHED:
            return{...state, isLoading:false, errMess:null, stories:action.payload}
        case ActionTypes.STORIES_LOADING:
            return{...state, isLoading:true, errMess:null, stories:[]}

        case ActionTypes.STORIES_FAILD:
            return{...state, isLoading:false, errMess:action.payload, stories:[]}
        case ActionTypes.STORY_CREATED:
            return{...state, stories:state.stories.concat(action.payload)}
        case ActionTypes.STORY_UPDATED:
        case ActionTypes.STORY_LIKED:
            return {...state, stories:state.stories.map((post) => (post._id === action.payload._id ? action.payload : post))}
        case ActionTypes.STORY_DELETED:
            return {...state, stories:state.stories.filter((s)=>s._id !== action.payload)}
        default:
          return state;
      }
}


//ActioCreaters

// getting stories from server
export const getStories=()=> async (dispatch)=>{
    try {
        const {data} =await api.fetchStories()
        dispatch(Stories_fetched(data))
    } catch(e){

        dispatch(Stories_failed(e.message))
    }
    
}
//helpers
const Stories_fetched=(stories)=>({
    type:ActionTypes.STORIES_FETCHED,
    payload:stories
    })
const Stories_failed=(err)=>({
    type:ActionTypes.STORIES_FETCHED,
    payload:err
    })


//createStory
export const createStory=(story)=> async (dispatch)=>{
try {
    const {data}= await api.createStory(story)
    dispatch(Story_Created(data))
} catch (err) {
    dispatch(Story_Creation_Failed(err))
}
}

 const Story_Created=(story)=>({
        type:ActionTypes.STORY_CREATED,
        payload:story
        })
    
 const Story_Creation_Failed=(err)=>({
        type:ActionTypes.STORY_CREATION_FAILED,
        payload:err
        })

//update
export const updateStory = (id, post) => async (dispatch) => {
    try {
      const { data } = await api.updatePost(id, post)
      dispatch(Story_Updated(data))
    } catch (err) {
        dispatch(Story_Update_Failed(err))
    }
  }
//helpers
  const Story_Updated=(story)=>({
        type:ActionTypes.STORY_UPDATED,
        payload:story
        })

  const Story_Update_Failed=(err)=>({
        type:ActionTypes.STORY_UPDATED,
        payload:err
        })



//deleting story
export const deleteStory = (id) => async (dispatch) => {
        try {
           await api.deleteStory(id)
           dispatch(Story_Deleted(id))
        } catch (err) {
           dispatch(Story_Deleted_Failed(err))
        }
      }
//helpers
    const Story_Deleted=(id)=>({
            type:ActionTypes.STORY_DELETED,
            payload:id
            }) 

    const Story_Deleted_Failed=(err)=>({
            type:ActionTypes.STORY_UPDATED,
            payload:err
            })

//like story
export const likeStory=(id)=>async (dispatch) => {
            try {
                const { data } = await api.likedStory(id);
            
                dispatch(Story_Liked(data));
              } catch (err) {
                dispatch(Story_Liked_Failed(err))
              }

        }
//helpers
    const Story_Liked=(story)=>({
            type:ActionTypes.STORY_LIKED,
            payload:story
            })
     const Story_Liked_Failed=(err)=>({
            type:ActionTypes.STORY_UPDATED,
            payload:err
            })
    
