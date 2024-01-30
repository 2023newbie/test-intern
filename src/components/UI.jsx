import styled from "styled-components"

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #2E86C1;
  color: #2E86C1;
  padding: 0.5em 2em;
  font-size: 1rem;
  transition: all .3s;
  &:hover {
    cursor: pointer;
    background: #2E86C1;
    color: white;
  }
`

export const Header = styled.div`
margin-bottom: 0.5rem;
font-weight: 600;
`

export const Wrapper = styled.div`
  max-width: fit-content;
  margin: 4rem 0;
  border: 1px solid #ccc;
  padding: 2rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Container = styled.div`
  display: flex;
  gap: 2rem;
  margin: 0 auto;
  width: max-content;
`