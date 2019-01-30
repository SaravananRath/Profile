import React,{ Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    objectFit: 'cover',
  },
};

 class ProfileCard extends Component {
   constructor(){
     super()
     this.state = {
       user:{}
     }
   }
   componentDidMount() {
     let user = JSON.parse(localStorage.getItem('users0'))
     this.setState({ user })
   }
   render(){
    const { classes, name, image, description } = this.props
    return (
      <div>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              className={classes.media}
              height="140"
              src={image}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {name}
              </Typography>
              <Typography component="p">
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(ProfileCard);