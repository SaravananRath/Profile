import React, { Fragment, Component } from "react";
import Header from "../components/Header";
import RegistrationForm from "../components/RegistrationForm";

class CreateProfile extends Component {

  render() {
    return (
      <Fragment>
        <Header {...this.props}> Create Profile </Header>
        <RegistrationForm {...this.props} />
      </Fragment>
    );
  }
}

export default CreateProfile;
