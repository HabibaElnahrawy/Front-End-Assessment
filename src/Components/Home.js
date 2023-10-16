import React from 'react'
import NavBar from './NavBar'
import styled from 'styled-components'
import Wrapper from '../Components/Wapper';
function Home() {
  return (
    <Container>
      <Wrapper>
       <NavBar/>
      </Wrapper>
       
    </Container>
  )
}
const Container =styled.div`
    width: 100%;
`;

export default Home