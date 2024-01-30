import { useRef } from 'react'
import styled from 'styled-components'
import { Button, Header } from './UI'

const Input = styled.input`
  width: 100%;
  padding: 0.6rem;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  border: 1px solid #2E86C1;
  border-radius: 0.2rem;
  position: relative;

  &&::placeholder {
    color: #566067;
    font-style: italic;
  }
`

const FormSubmit = () => {
  const inputNameRef = useRef(null)
  const inputEmailRef = useRef(null)

  const submitFormHandler = e => {
    e.preventDefault()

    const formInput = {
      name: inputNameRef.current.value,
      email: inputEmailRef.current.value
    }

    console.log(formInput);
  }

  return (
    <div>
      <Header>Form Submit</Header>
      <form onSubmit={submitFormHandler}>
        <div>
          <Input type="text" placeholder='Enter your name' ref={inputNameRef} />
        </div>
        <div>
          <Input type="email" placeholder='Enter your email' ref={inputEmailRef} />
        </div>
        <Button>Submit</Button>
      </form>
    </div>
  )
}

export default FormSubmit