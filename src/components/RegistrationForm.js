import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'

const styles = theme => ({
  container: {
    marginTop: 20,
    padding: 10,
    background: `#d3d3d378`,
    display:'flex',
    flexDirection:'column'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
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
  state = {
    name: '',
    imagePreviewUrl: null,
    description: '',
    file:''
  }

  handleChange = name => event => {
    if(name === 'file'){
      let reader = new FileReader();
      let file = event.target.files[0];
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
      reader.readAsDataURL(file)
    }
    this.setState({
      [name]: event.target.value,
    })
  }

  render() {
    const { classes: { container, textField, button, avatar} } = this.props

    return (
      <Grid container justify="center" alignItems="center">
        <form className={container} noValidate autoComplete="off">
          <Avatar alt="Profile Picture" src={this.state.imagePreviewUrl} className={avatar} />
          <Button className={button} containerelement='label' label='Choose Image'>
            <input type='file' onChange={this.handleChange('file')}/>
          </Button>
          <TextField
            label="Name"
            className={textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
            autoFocus
            fullWidth
          />
          <TextField
            id="standard-textarea"
            label="About Yourself"
            multiline
            onChange={this.handleChange('description')}
            className={textField}
            margin="normal"
          />
        </form>
      </Grid>
      )
  }
}
export default withStyles(styles)(Form)