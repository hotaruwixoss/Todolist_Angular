import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'To-do list';

  tareas = [

    {
      'todo': 'COSAS'
    }
  ];


  model: any = {};
  addTodo(): void{
    this.tareas.push(this.model);

  }

  deleteTodo(): void{

  }

  editTodo(): void{


  }
}
