import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { TasksService } from './../tasks.service';
import { StatusEnum } from '../status';
import { StatusInterface } from '../status.interface';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css'],
})
export class TaskCreateComponent {
  taskFormGroup = new FormGroup({
    status: new FormControl(''),
    title: new FormControl('', Validators.required),
    description: new FormControl(''),
    category: new FormControl(''),
    dateLimit: new FormControl(new Date()),
    dateDone: new FormControl(new Date()),
  });

  constructor(private tasksService: TasksService, private router: Router) {}

  createTask(): void {
    console.log(this.taskFormGroup.value);
    this.tasksService.createTask(this.taskFormGroup.value).subscribe((task) => {
      this.router.navigate(['/tasks']);
    });
  }

  taskStatus = StatusEnum;

  // selectedValue: number = 0;

  // status: StatusInterface[] = [
  //   { value: 1, viewValue: 'Concluída' },
  //   { value: 2, viewValue: 'Pendente' },
  //   { value: 3, viewValue: 'Cancelada' },
  // ];

  getStatus(status: number): string {
    if (status === this.taskStatus.Done) {
      return 'Concluída';
    }

    if (status === this.taskStatus.Pendent) {
      return 'Pendente';
    }

    if (status === this.taskStatus.Canceled) {
      return 'Cancelada';
    }

    return '';
  }
}
