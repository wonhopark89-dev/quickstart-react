import styled, { keyframes } from 'styled-components';
import Circle from './Circle';

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

function App() {
  return (
    <div>
      <Circle bgColor='tomato' />
    </div>
  );
}

export default App;
