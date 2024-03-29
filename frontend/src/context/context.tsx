import { createContext } from 'react';
import type ITask from '../types/initTask';

interface IInitialContext {
  title: string;
  tasks: ITask[];
  setTitle: (arg: string) => void;
  setTasks: (arg: ITask[]) => void;
}

export const Context = createContext<IInitialContext>({
  title: '',
  tasks: [],
  setTitle: () => {},
  setTasks: () => {},
});
