import React from 'react'

//importing components
import Story from './Story/Story'
//importing styles
import useStyles from './StoriesStyle'
import {Grid,CircularProgress}  from '@material-ui/core'
//redux
import {useSelector} from 'react-redux' 

const Stories = ({setCurrentId}) => {
    const classes = useStyles();
    //Hooks
    const stories = useSelector(state => state.stories.stories)

    return (
        !stories.length ? <CircularProgress/> : (
            <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
                {stories.map((story)=>(
                 <Grid key={story._id} item xs={12} sm={6} >
                     
                     <Story story={story} setCurrentId={setCurrentId}/>

                 </Grid>   
                ))}
            </Grid>
        )
    )
}

export default Stories
