import {IToDo} from '../atoms';

const ToDo = ({text, category}: IToDo) => {
  // onClick 항목에서 변수를 넘겨줘야하는 형태
  // const onClick = (newCategory: IToDo['category']) => {};

  // 컴포넌트에 name 이라는 속성 부여해서 판단한하는 형태
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: {name},
    } = event;
    console.log(name);
  };

  return (
    <li>
      <span>{text}</span>
      {category !== 'DOING' && (
        <button name={'DOING'} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== 'TODO' && (
        <button name={'TODO'} onClick={onClick}>
          To Do
        </button>
      )}
      {category !== 'DONE' && (
        <button name={'DONE'} onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
};

export default ToDo;
