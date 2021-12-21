import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Circle from './Circle';

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor}; ;
`;

function App() {
  const [value, setValue] = useState('');
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    // console.log(event.currentTarget.value);
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
  };

  // return (
  //   <div>
  //     <form>
  //       <input
  //         value={value}
  //         onSubmit={onSubmit}
  //         onChange={(event) => onChange(event)}
  //         type={'text'}
  //         placeholder='username'
  //       />
  //       <button>Log in</button>
  //     </form>
  //   </div>
  // );

  return (
    <Container>
      <Title>Hello</Title>
    </Container>
  );
}

export default App;
