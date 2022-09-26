import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Task } from './task';
import { Tasks } from './tasks';

const urlBase = 'http://localhost:3002/tasks';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http: HttpClient) {}

  listTasks() {
    return this.http.get<Tasks>(`${urlBase}?_sort=dateDone`);
  }

  retrieveTask(id: number) {
    return this.http.get<Task>(`${urlBase}/${id}`);
  }

  createTask(task: Task) {
    return this.http.post<Task>(`${urlBase}`, task);
  }

  updateTask(task: Task) {
    // console.log('updateTask', task);
    // console.log('updateTask', `${urlBase}/${task.id}`);
    return this.http.put<Task>(`${urlBase}/${task.id}`, task);
  }

  deleteTask(id: number) {
    // console.log('--------> deleteTask: ', `${urlBase}/${id}`);
    return this.http.delete(`${urlBase}/${id}`);
  }
}
