import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Save from '@material-ui/icons/Save'

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
  }
});


class Form extends Component {
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  state = {
    user :{
      name: '',
      imagePreviewUrl: '',
      description: '',
      file:'',
    },
    errors:{
      nameMsg:'',
      imgMsg:'',
      descMsg:''
    }
  }

  handleChange = name => event => {
    const user = this.state.user
    if(name === 'file'){
      let reader = new FileReader();
      let file = event.target.files[0];
      reader.onloadend = () => {
        user['file'] = file
        user['imagePreviewUrl'] = reader.result
        this.setState({ user });
      }
      reader.readAsDataURL(file)
    }
    user[name] = event.target.value
    this.setState({ user})
  }
  
  validate = () => {
    let flag = 1
    const { user: { name, description, imagePreviewUrl }, errors} = this.state
    
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
      }
      else{
        console.log(this.state)
      }
  }

  render() {
    const { classes: { container, textField, button, avatar} } = this.props
    const { user: { name, description, imagePreviewUrl} } = this.state
    return (
      <Grid container justify="center" alignItems="center">
        <form className={container} noValidate autoComplete="off">
          <Avatar alt="Profile Picture" src={imagePreviewUrl} className={avatar} />
          <Button className={button} containerelement='label' label='Choose Image'>
            <input type='file' onChange={this.handleChange('file')}/>
          </Button>
          <TextField
            label="Name"
            className={textField}
            value={name}
            onChange={this.handleChange('name')}
            margin="normal"
            autoFocus
          />
          <TextField
            id="standard-textarea"
            label="About Yourself"
            value={description}
            multiline
            onChange={this.handleChange('description')}
            className={textField}
            margin="normal"
          />
          <Button className={button} color='primary' onClick={this.handleSubmit}>
            <Save/>SAVE
          </Button>
        </form>
      </Grid>
      )
  }
}
export default withStyles(styles)(Form)