import type ITask from './initTask';

export default interface IList {
  title: string[];
  tasks?: Array<ITask>;
}