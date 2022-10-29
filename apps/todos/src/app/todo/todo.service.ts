import { Injectable } from '@nestjs/common';
import { Todo } from '@myorg/data';

const todos: Todo[] = [
  { message: 'Take out trash', done: false },
  { message: 'Continue using Nx', done: false },
  { message: 'Testing Nx before using it in production', done: false, doing: true },
];

@Injectable()
export class TodoService {
  getTodos(): Todo[] {
    return todos;
  }
}