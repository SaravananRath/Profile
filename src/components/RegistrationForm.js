import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Save from '@material-ui/icons/Save'
import Notification from "./Notification";


const styles = theme => ({
  container: {
    marginTop: 20,
    padding: 10,
    background: `#d3d3d378`,
    display:'flex',
    flexDirection:'column'
  },
  textField: {
    margin: `10px auto`,
    width: 200,
  },
  button:{
    marginTop:20,
  },
  avatar: {
    width: 200,
    height: 200,
    margin: `10px auto`,
  },
  errText: {
    textAlign: 'center',
    color: 'red',
  }
});


class Form extends Component {
  componentDidMount(){
    let id = localStorage.getItem('Id') || 0
    this.setState({ id })
  }
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  state = {
    id:0,
    imagePreviewUrl: '',
    file:'',
    user :{
      name: '',
      description: '',
      image: ''
    },
    errors:{
      nameMsg:'',
      imgMsg:'',
      descMsg:''
    },
    open: false,
    touched: {
      name: false,
      description: false
    }
  }

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ open: false });
  };

  handleFile = event => {
    let user = this.state.user
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({ file, imagePreviewUrl:reader.result })
      user['image'] = reader.result
    }
    if(file) reader.readAsDataURL(file)
    this.setState({ user })
 
  }
  handleFocus = name => event => {
    const touched = this.state.touched
    touched[name] = true
    this.setState({ touched })
  }
  handleUser = name => event => {
    const user = this.state.user
    user[name] = event.target.value
    this.setState({ user })
  }
  
  validate = () => {
    let flag = 1
    const { user: { name, description }, errors, imagePreviewUrl} = this.state
    
    if( name === '') {
      errors['nameMsg'] = 'Name cannot be empty'
      flag = 0
    } else {
      errors['nameMsg'] = ''
    }

    if( description === '') 
    {
      errors['descMsg'] = 'Description cannot be empty'
      flag = 0
    } else {
      errors['descMsg'] = ''
    } 

    if( imagePreviewUrl === '') {
      errors['imgMsg'] = 'Choose an image'
      flag = 0
    } else {
      errors['imgMsg'] = ''
    } 
    this.setState({ errors })
    return flag
  }
   async handleSubmit (){
     let flag = await this.validate()
      if (flag){
        console.log('Saved')
        localStorage.setItem(`user${this.state.id}`, JSON.stringify(this.state.user))
        this.setState({ id : parseInt(this.state.id) + 1, open: true }, () => localStorage.setItem('Id',this.state.id))
        setTimeout(() => {
          this.props.history.push('/')
        },2200)
      }
      else{
        console.log(this.state)
      }
  }

  render() {
    const { classes: { container, textField, button, avatar, errText} } = this.props
    const { user: { name, description }, imagePreviewUrl, errors: { nameMsg ,descMsg, imgMsg}, touched } = this.state
    return (
      <Grid container justify="center" alignItems="center">
        <form className={container} noValidate autoComplete="off">
          <Avatar alt="Profile Picture" src={imagePreviewUrl} className={avatar} id='profilePic' />
          <Button className={button} containerelement='label' label='Choose Image'>
            <input type='file' onChange={this.handleFile} required/>
          </Button>
          <p className={errText}>{imgMsg}</p>
          <TextField
            label="Name"
            className={textField}
            value={name}
            onChange={this.handleUser('name')}
            margin="normal"
            error={Boolean(nameMsg) && touched.name}
            onFocus={this.handleFocus('name')}
            helperText={nameMsg}
          />
          <TextField
            id="standard-textarea"
            label="About Yourself"
            value={description}
            multiline
            onChange={this.handleUser('description')}
            className={textField}
            margin="normal"
            onFocus={this.handleFocus('description')}
            error={Boolean(descMsg) && touched.description}
            helperText={descMsg}
          />
          <Button className={button} color='primary' onClick={this.handleSubmit}>
            <Save/>SAVE
          </Button>
        </form>
        <Notification handleClose={this.handleClose} open={this.state.open}/>
      </Grid>
      )
  }
}
export default withStyles(styles)(Form)