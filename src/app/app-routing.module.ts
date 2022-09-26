import { TaskUpdateComponent } from './task-update/task-update.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskListComponent } from './task-list/task-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'tasks', component: TaskListComponent },
  { path: 'create', component: TaskCreateComponent },
  { path: 'tasks/:id', component: TaskUpdateComponent },
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
