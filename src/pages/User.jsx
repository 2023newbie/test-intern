import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { Wrapper } from '../components/UI'
import styled from 'styled-components'

const Container = styled.div`
  width: fit-content;
  margin: 0 auto;
`

const User = () => {
  const user = useLoaderData()

  console.log(user);

  return (
    <Container>
      <Wrapper>
        <div>{user.name} - {user.username}</div>
        <div>Email: {user.email}</div>
        <div>Phone: {user.phone}</div>
        <div>Website: {user.website}</div>
        <div>Company: {user.company.name}</div>
        <div>Address: {user.address.suite} - {user.address.street}</div>
      </Wrapper>
    </Container>
  )
}

export default User