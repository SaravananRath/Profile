import React, { Fragment, Component } from "react";
import Header from "../components/Header";
import RegistrationForm from "../components/RegistrationForm";
import Grid from "@material-ui/core/Grid";

class CreateProfile extends Component {
  render() {
    return (
      <Fragment>
        <Header {...this.props}> Create Profile </Header>
        <Grid container>
          <RegistrationForm {...this.props} />
        </Grid>
      </Fragment>
    );
  }
}

export default CreateProfile;
