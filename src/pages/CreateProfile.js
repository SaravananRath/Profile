import React, { Fragment } from 'react'
import Header from '../components/Header'
import RegistrationForm from '../components/RegistrationForm'

export default (props) => 
  <Fragment>
    <Header {...props}> Create Profile </Header>
    <RegistrationForm/>
  </Fragment>