import React, { Fragment, Component } from 'react'
import Header from '../components/Header'
import ProfileCard from '../components/ProfileCard'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  header: {
    marginBottom: 15,
  },
  card_row: {
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 30,
  },
  card_item: {
    marginTop: 15,
    [theme.breakpoints.down('sm')]: {
      padding : 10,
    },
  }
});

class Home extends Component {
  componentDidMount(){
    let keys = Object.keys(localStorage)
    let users_keys = keys.filter(key => key.substring(0,4) === 'user' )
    let users_data = users_keys.map( user => JSON.parse(localStorage.getItem(user)))
    let users = this.chunkArray(users_data,3)
    this.setState({ users})
  }
  constructor(){
     super()
     this.state = {
       users:[]
     }
   }
  chunkArray(myArray, chunk_size){
    var arrayLength = myArray.length;
    var tempArray = [];
    var myChunk = 0
    for ( var index = 0; index < arrayLength; index += chunk_size) {
        myChunk = myArray.slice(index, index+chunk_size);
        tempArray.push(myChunk);
    }
  
    return tempArray;
  }
   render(){
    const { classes: { root, card_row, card_item, header }, ...remaining } = this.props 
    const { users } = this.state
    return (
      <Fragment>
        <Grid container className={root} >
          <Grid item xs={12} className={header} >
            <Header {...remaining}> Home </Header>
          </Grid>     
          {
            users.map((user,i) => <Grid key={i} container className={card_row} justify='space-evenly'>
              { 
                user.map((userData,i) => <Grid key={i} item xs={12} sm={3} className={card_item}>
                  <ProfileCard {...userData} {...this.props.history}/>
                </Grid>)
              }
            </Grid>)
          }
        </Grid>
      </Fragment>
    )
   }
 }


export default withStyles(styles)(Home)