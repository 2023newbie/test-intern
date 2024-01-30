import styled from 'styled-components'
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';
import FormSubmit from './components/FormSubmit';
import { Wrapper, Container } from './components/UI';

const userInfo = {
  name: 'Vũ Ngọc Đức',
  email: 'ducwebdev@gmail.com',
  imageUrl: './lap_trinh_vien_1.jpg'
}

function App() {
  return (
    <Container>
      <Wrapper>
        <UserProfile user={userInfo} />
        <Counter />
        <FormSubmit />
      </Wrapper>
    </Container>
  );
}

export default App;
