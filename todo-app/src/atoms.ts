import {atom, selector} from 'recoil';

export interface IToDo {
  text: string;
  id: number;
  category: 'TODO' | 'DOING' | 'DONE';
}

export const categoryState = atom<IToDo['category']>({
  key: 'category',
  default: 'TODO',
});

export const toDoState = atom<IToDo[]>({
  key: 'toDo',
  default: [],
});

export const toDoSelector = selector({
  key: 'toDoSelector',
  get: ({get}) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter(toDdo => toDdo.category === category);
  },
});

// atom 이 변하면 selector 도 변함
