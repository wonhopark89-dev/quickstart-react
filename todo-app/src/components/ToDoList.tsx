import {useRecoilState, useRecoilValue} from 'recoil';
import {Categories, categoryState, toDoSelector} from '../atoms';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

const ToDoList = () => {
  // const toDos = useRecoilValue(toDoState);
  const toDos = useRecoilValue(toDoSelector); // 각각의 배열
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    const {
      currentTarget: {value},
    } = event;
    setCategory(value as Categories);
  };

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={Categories.TODO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <CreateToDo />
      {toDos?.map(item => (
        <ToDo key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ToDoList;
