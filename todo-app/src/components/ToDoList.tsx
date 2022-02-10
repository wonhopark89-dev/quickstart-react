import React from 'react';
import {useRecoilState, useRecoilValue} from 'recoil';
import {Categories, categoryState, hourSelector, minuteState, toDoSelector} from '../atoms';
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

  //
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const [hours, setHours] = useRecoilState(hourSelector);
  const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };
  const onHoursChange = (event: React.FormEvent<HTMLInputElement>) => {
    setHours(+event.currentTarget.value);
  };
  //
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

      <div>
        <input value={minutes} onChange={onMinutesChange} type="number" placeholder="Minutes" />
        <input value={hours} onChange={onHoursChange} type="number" placeholder="Hours" />
      </div>
    </div>
  );
};

export default ToDoList;
