import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  heading: {
    flexGrow: 1
  },
  navbar: {
    listStyleType: "none",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex"
    }
  },
  navbar_links: {
    textDecoration: "none",
    color: "white",
    marginLeft: 20,
    "&:hover": {
      color: "skyblue"
    }
  },
  menuButton: {
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  }
});

class Header extends Component {
  state = {
    selected: null,
    link: "/"
  };

  handleMenu = event => {
    this.setState({ selected: event.currentTarget });
  };

  handleClose = link => () => {
    this.setState({ selected: null, link }, () => this.redirect(link));
  };
  redirect = link => {
    if (this.props.location) this.props.history.push(`${link}`);
  };

  render() {
    const {
      classes: { root, heading, navbar, navbar_links, menuButton },
      children
    } = this.props;
    const { selected } = this.state;
    const open = Boolean(selected);

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
                  <Link className={navbar_links} to="/">
                    HOME
                  </Link>
                </li>
                <li>
                  <Link className={navbar_links} to="/new/">
                    NEW PROFILE
                  </Link>
                </li>
                {/* <li>
                  <Link className={navbar_links} to={`/rohan/`}>PROFILE</Link>
                </li> */}
              </ul>
            </nav>
            <IconButton
              className={menuButton}
              color="inherit"
              aria-label="Menu"
              aria-owns={open ? "menu-appbar" : undefined}
              aria-haspopup="true"
              onClick={this.handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={selected}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={open}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleClose("/")}>Home</MenuItem>
              <MenuItem onClick={this.handleClose("/new/")}>
                Create a new Profile
              </MenuItem>
              {/* <MenuItem onClick={this.handleClose('/rohan/')}>
                    Profile
                  </MenuItem> */}
            </Menu>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
