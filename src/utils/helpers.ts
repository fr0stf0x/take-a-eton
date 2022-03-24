import { ITodoItem } from '@/interfaces/TodoItem';
import { TodoStatus } from '@/constants/TodoStatus';

export const toggleTodo = (pTodo: ITodoItem): ITodoItem => {
    const newTodo = {
      ...pTodo,
      status: pTodo.status === TodoStatus.ACTIVE ? TodoStatus.DONE : TodoStatus.ACTIVE
    };

    if (pTodo.status === TodoStatus.ACTIVE) {
      newTodo.doneAt = new Date();
    }

    return newTodo;
}