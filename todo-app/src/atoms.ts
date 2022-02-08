import {atom, selector} from 'recoil';

export interface IToDo {
  text: string;
  id: number;
  category: 'TODO' | 'DOING' | 'DONE';
}

export const toDoState = atom<IToDo[]>({
  key: 'toDo',
  default: [],
});

export const toDoSelector = selector({
  key: 'toDoSelector',
  get: ({get}) => {
    const toDos = get(toDoState);
    return [
      toDos.filter(toDo => toDo.category === 'TODO'),
      toDos.filter(toDo => toDo.category === 'DOING'),
      toDos.filter(toDo => toDo.category === 'DONE'),
    ];
  },
});

// atom 이 변하면 selector 도 변함
