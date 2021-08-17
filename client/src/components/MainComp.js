import React,{useState,useEffect} from 'react'

//importing redux
import {useDispatch} from 'react-redux'
import {getStories} from '../redux/stories'
//importing components
import NavBar from './NavBar/NavBar'
import Form from './Form/Form'
import Stories from './Stories/Stories'
//importing styles
import {Container,Grow,Grid} from '@material-ui/core'
import useStyles from './styles';

const MainComp = () => {
  
    const classes=useStyles();
    const dispatch=useDispatch();
  //Hooks
    const [currentId, setCurrentId] = useState(0);
    const getstories=()=>dispatch(getStories())
    useEffect(()=>{
      getstories()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    
    return (
    <Container maxWidth="lg">

          <NavBar/>

          <Grow in>
            <Container>
              <Grid className={classes.maincontainer} container justify="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={7}>

                  <Stories setCurrentId={setCurrentId}/>

                </Grid>
                <Grid item xs={12} sm={4}>

                  <Form  currentId={currentId} setCurrentId={setCurrentId}/>

                </Grid>
              </Grid>
            </Container>
          </Grow>
    </Container>
    )
}

export default MainComp
//exporting to "/src/components/App.js"