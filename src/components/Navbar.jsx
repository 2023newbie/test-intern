import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  width: fit-content;
  justify-content: center;
  padding: 1rem 2rem;
  margin: 0.5rem auto;
  background-color: #ddd;
  border-radius: 1rem;
`

const Navbar = () => {
  return (
    <Nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'active' : 'normal')}
      >
        Home
      </NavLink>
      <NavLink
        to="/users"
        className={({ isActive }) => (isActive ? 'active' : 'normal')}
      >
        Users
      </NavLink>
    </Nav>
  )
}

export default Navbar
