import {useRecoilValue} from 'recoil';
import {toDoSelector, toDoState} from '../atoms';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

const ToDoList = () => {
  // const toDos = useRecoilValue(toDoState);
  const [toDos, doing, done] = useRecoilValue(toDoSelector); // 각각의 배열

  return (
    <div>
      <CreateToDo />
      <h1>To Dos</h1>
      <ul>
        {toDos.map(toDo => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
      <h1>Doing</h1>

      <ul>
        {doing.map(toDo => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
      <h1>Done</h1>

      <ul>
        {done.map(toDo => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
    </div>
  );
};

export default ToDoList;
