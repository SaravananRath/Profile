import React, { Fragment } from 'react'
import Header from '../components/Header'
import ProfileCard from '../components/ProfileCard'
export default (props) => 
<Fragment>
  <Header {...props}> Home </Header>
  <ProfileCard/>
</Fragment>