import {atom} from 'recoil';

export interface IToDo {
  id: number;
  content: string;
}

interface IToDoState {
  [key: string]: IToDo[];
}

export const toDoState = atom<IToDoState>({
  key: 'toDo',
  default: {
    toDo: [],
    doing: [],
    done: [],
  },
});
