import { Task } from './task';

export interface Tasks {
  hasNext: boolean;
  items: [Task];
}
