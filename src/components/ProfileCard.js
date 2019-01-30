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
   constructor(props){
     super(props)
     this.state = {
       user:{}
     }
   }
   render(){
    const { classes, name = 'Empty', image = 'Empty', description = 'Empty', push, edit } = this.props
    return (
      <div>
        <Card className={classes.card}>
         { !edit ? (<CardActionArea onClick ={() => push(`/${name}`) }>
            <CardMedia
              component="img"
              alt="Profile Picture"
              className={classes.media}
              height="140"
              src={image}
              title="Profile Picture"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {name}
              </Typography>
              <Typography component="p">
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>) : 
          (<><CardMedia
              component="img"
              alt="Profile Picture"
              className={classes.media}
              height="140"
              src={image}
              title="Profile Picture"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {name}
              </Typography>
              <Typography component="p">
                {description}
              </Typography>
          </CardContent></>
          )} 
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(ProfileCard);