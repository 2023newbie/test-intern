import { useState } from 'react'
import styled from 'styled-components'
import { Button, Header } from './UI'

const FlexBox = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`

const CounterSpan = styled.span`
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2E86C1;
  font-weight: 700;
  color: white;
  border-radius: 50%;
`

const Counter = () => {
  const [counter, setCounter] = useState(0)

  const increaseCounter = () => {
    setCounter(prevState => ++prevState)
  }
  const decreaseCounter = () => {
    setCounter(prevState => --prevState)
  }

  return (
    <div>
      <Header>Counter Tool</Header>
      <FlexBox>
        <Button onClick={decreaseCounter}>Decrease</Button>
        <CounterSpan>{counter}</CounterSpan>
        <Button onClick={increaseCounter}>Increase</Button>
      </FlexBox>
    </div>
  )
}

export default Counter