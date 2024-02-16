import { Component } from '@angular/core';

// The @Component decorator function marks the class as an Angular component
// and provides Angular with metadata about the component.
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
})
export class TaskListComponent {
  tasks: string[] = ['This is my First task', 'This is my second task'];
  newTask = '';

  // deleteTask is a method that takes an index (number) as an argument.
  // It uses the splice method to remove an item from the tasks array at the specified index,
  // effectively deleting a task from the list.
  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  // addTask is a method that adds a new task to the tasks array.
  // It first checks if newTask contains a string (to avoid adding empty tasks),
  // then pushes the newTask value into the tasks array and resets newTask to an empty string.
  addTask() {
    if (this.newTask) {
      this.tasks.push(this.newTask);
      this.newTask = '';
    }
  }
}
