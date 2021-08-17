import React from 'react'
//style
import useStyles from './StoryStyle';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
//importing redux
import { deleteStory,likeStory} from '../../../redux/stories';
import { useDispatch} from 'react-redux';

const Story = ({story,setCurrentId}) => {
    const dispatch=useDispatch()

    const classes = useStyles();

    return (
        <Card className={classes.card}>
              <CardMedia className={classes.media} image={story.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={story.title} />
              <div className={classes.overlay}>
                <Typography variant="h6">{story.creator}</Typography>
                <Typography variant="body2">{moment(story.createdAt).fromNow()}</Typography>
              </div>
              <div className={classes.overlay2}>
                <Button style={{ color: 'white' }} size="small" onClick={()=>setCurrentId(story._id)}><MoreHorizIcon fontSize="default" /></Button>
              </div>
              <div className={classes.details}>
                <Typography variant="body2" color="textSecondary" component="h2">{story.tags.map((tag) => `#${tag} `)}</Typography>
              </div>
              <Typography className={classes.title} gutterBottom variant="h5" component="h2">{story.title}</Typography>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{story.message}</Typography>
              </CardContent>
              <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={()=>dispatch(likeStory(story._id))}><ThumbUpAltIcon fontSize="small" /> Like {story.likeCount} </Button>
                <Button size="small" color="primary" onClick={()=>dispatch(deleteStory(story._id))}><DeleteIcon fontSize="small" /> Delete</Button>
              </CardActions>
      </Card>
    )
}

export default Story
