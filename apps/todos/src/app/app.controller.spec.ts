import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from '@myorg/auth';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoService } from './todo/todo.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController, AuthController],
      providers: [AppService, TodoService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to todos!"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getData()).toEqual([{"done": false, "message": "Take out trash"}, {"done": false, "message": "Continue using Nx"}, { message: 'Testing Nx before using it in production', done: false, doing: true }]);
    });
  });
});
