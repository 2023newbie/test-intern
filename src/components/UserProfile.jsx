import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`

const ImageBox = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 2px solid #ccc;
  overflow: hidden;
  ${props => `
    background-image: url('${props.url}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  `}
`

const EmailAnchor = styled.a`
  font-style: italic;
  color: #2C3E50;
`

const UserProfile = ({ user }) => {
  return (
    <Container>
      <ImageBox url={user.imageUrl}></ImageBox>
      <div>
        <div style={{ fontWeight: 'bold' }}>{user.name}</div>
        <EmailAnchor href='mailto:devwebdev@gmail.com'>{user.email}</EmailAnchor>
      </div>
    </Container>
  )
}

export default UserProfile