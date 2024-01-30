import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Header } from '../components/UI'
import { Link } from 'react-router-dom'
import { Container, Wrapper } from '../components/UI'

const WrapUserList = styled.div`
  width: 20.5rem;
`

const Users = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data))
      .catch(err => setError(err))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <Container>
      <Wrapper>
        <WrapUserList>
          <Header>Users</Header>
        { isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p style={{ color: 'red' }}>Fetch data failed!</p>
        ) : (
          <ul>
          {users.map(user => (
          <li key={user.id} className='flex-between'>
            <div>{user.name}</div>
            <Link to={`/users/${user.id}`}>Detail</Link>
          </li>
          ))}
        </ul>
        )}
      </WrapUserList>
      </Wrapper>
    </Container>
  )
}

export default Users