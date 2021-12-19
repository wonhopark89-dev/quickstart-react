import styled, { keyframes } from 'styled-components';

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

// styled(A)
// A 속성그대로 + 추가옵션
const Circle = styled(Box)`
  background-color: ${(props) => props.bgColor};
  border-radius: 50px;
`;

// 디자인을 그대로 컴포넌트 속성만 바꾸고 싶을때, as 이용 ( 사용하는 곳에서 )
const Btn = styled.button`
  color: white;
  background-color: tomato;
  border-radius: 15px;
  border: 0;
`;

const Input = styled.input.attrs({ required: true })`
  background-color: tomato;
`;

const Text = styled.span`
  color: white;
`;

const Wrapper = styled.div`
  display: flex;
`;

const rotationAnimation = keyframes`
  0% {
    transform:rotate(0deg);
    border-radius:0px;
  }
  50% {
    border-radius:100px;
  }
  100%{
    transform:rotate(360deg);
    border-radius:0px;
  }
`;

// 자식의 엘리먼트 속성을 지정할 수 있음
const Square = styled.div`
  width: 100px;
  height: 100px;
  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1s linear infinite;
  span {
    font-size: 36px;
    &:hover {
      font-size: 48px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

// Emoji 를 컴포넌트가 다른속성(as) 으로 바껴도 적용된다.
// Pseudo Selector
const Square2 = styled.div`
  width: 100px;
  height: 100px;
  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1s linear infinite;
  ${Emoji} {
    font-size: 36px;
    &:hover {
      font-size: 48px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Square>
        <span>😍</span>
      </Square>
      <Square2>
        <Emoji as='a'>🥶</Emoji>
      </Square2>
    </Wrapper>
  );
}

export default App;
