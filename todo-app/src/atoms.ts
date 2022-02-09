import {atom, selector} from 'recoil';

export enum Categories {
  TODO = 'TODO',
  DOING = 'DOING',
  DONE = 'DONE',
}

export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: 'category',
  default: Categories.TODO,
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
export const minuteState = atom({
  key: 'minutes',
  default: 0,
});

export const hourSelector = selector({
  key: 'hours',
  get: ({get}) => {
    const minutes = get(minuteState);
    return minutes / 60;
  },
});
