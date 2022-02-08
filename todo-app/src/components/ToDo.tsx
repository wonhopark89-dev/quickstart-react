import {IToDo, toDoState} from '../atoms';
import {useSetRecoilState} from 'recoil';

const ToDo = ({text, category, id}: IToDo) => {
  const setToDos = useSetRecoilState(toDoState);

  // onClick 항목에서 변수를 넘겨줘야하는 형태
  // const onClick = (newCategory: IToDo['category']) => {};

  // 컴포넌트에 name 이라는 속성 부여해서 판단한하는 형태
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: {name},
    } = event;

    setToDos(oldToDos => {
      const targetIndex = oldToDos.findIndex(todo => todo.id === id);
      const newToDo = {text, id, category: name as IToDo['category']};
      return [...oldToDos.slice(0, targetIndex), newToDo, ...oldToDos.slice(targetIndex + 1)];
    });
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
