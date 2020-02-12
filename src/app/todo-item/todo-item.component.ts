import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

import { Todo } from '../models/todo';

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.css"]
})
export class TodoItemComponent {
  @Input() todo: Todo;

  @Output() toggle = new EventEmitter<object>();

  onToggle() {
    this.toggle.emit(this.todo);
  }
}
