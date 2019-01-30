import React, { Fragment, Component } from 'react'
import Header from '../components/Header'
import RegistrationForm from "../components/RegistrationForm";
import ProfileCard from '../components/ProfileCard'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root:{
    flexGrow: 1,
  },
  header: {
    marginBottom: 20,
  }
}

class Profile extends Component {
  componentDidMount(){
    const { name: username } = this.props.match.params
    let keys = Object.keys(localStorage)
    let users_keys = keys.filter(key => key.substring(0,4) === 'user' )
    let users_data = users_keys.map( user => JSON.parse(localStorage.getItem(user)))
    let user_data = users_data.filter( data => data.name === username)
    console.log({user_data})
    const { name, description, image } = users_data[0]
    this.setState({ name, description,image})
  }
  constructor(){
    super()
    this.state={
      name:'',
      description:'',
      image:''
    }
  }
  
  render(){
    const { classes: { root, header}, ...other} = this.props
    return(
      <Fragment>
        <Grid container className={root} >
          <Grid item xs={12} className={header} >
            <Header {...other}> Profile </Header>
          </Grid>
          <Grid container justify='space-around' alignItems='center'>
            <Grid item xs={12} sm={4} >
              <ProfileCard edit={true} {...this.state}/>
            </Grid>
            <Grid item xs={12} sm={4}  >
              <RegistrationForm edit={true} {...this.state}/>
            </Grid>
          </Grid>
        </Grid>
      </Fragment> 
    )
  }

}

export default withStyles(styles)(Profile)