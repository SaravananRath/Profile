import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'

const styles = {
  root: {
    flexGrow: 1,
  },
  heading: {
    flexGrow: 1,
  },
  navbar: {
    listStyleType: 'none',
    display: 'flex',
  },
  navbar_links: {
    textDecoration: 'none',
    color: 'white',
    marginLeft: 20
  }

};

const Header = (props) => {
  const { classes:{ root, heading, navbar, navbar_links }, children } = props
  return (
    <div className={root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={heading}>
            {children.toUpperCase()}
          </Typography>
          <nav>
            <ul className={navbar}>
              <li>
                <Link className={navbar_links} to="/">Home</Link>
              </li>
              <li>
                <Link className={navbar_links} to="/new/">Create a new Profile</Link>
              </li>
              <li>
                <Link className={navbar_links} to={`/rohan/`}>Profile</Link>
              </li>
            </ul>
          </nav>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Header);