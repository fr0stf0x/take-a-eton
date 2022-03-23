import React from 'react'
import { ITodoItem } from '@/interfaces/TodoItem'
import { TodoItemStyled, RightSideStyled } from './styled';
import { TodoStatus } from '@/constants/TodoStatus';
import CheckBox from '../CheckBox';
import Button from '../Button';
import { useSetAtom } from 'jotai';
import { todosAtom } from '@/atoms/todo-list';

const TodoItem: React.FC<{ todo: ITodoItem }> = ({ todo }) => {
  const setTodos = useSetAtom(todosAtom);

  const toggleTodo = () => {
    setTodos((prev) => prev.map((pTodo) => {
      if (todo.id === pTodo.id) {
        const newTodo = {
          ...pTodo,
          status: todo.status === TodoStatus.ACTIVE ? TodoStatus.DONE : TodoStatus.ACTIVE
        };

        if (todo.status === TodoStatus.ACTIVE) {
          newTodo.doneAt = new Date();
        }

        return newTodo;
      }

      return pTodo;
    }));
  }

  const removeTodo = () => {
    setTodos((prev) => prev.filter((pTodo) => pTodo.id !== todo.id));
  }

  return (
    <TodoItemStyled>
      <CheckBox
        checked={todo.status === TodoStatus.DONE}
        label={todo.title}
        onChange={toggleTodo}
      />

      <RightSideStyled>
        <div className='date-time'>
          <div>
            <i>{todo.createdAt.toLocaleDateString()}</i>
          </div>
          <div>
            <i>{todo.createdAt.toLocaleTimeString()}</i>
          </div>
        </div>
        <Button className="small simple danger" onClick={removeTodo}>&#215;</Button>
      </RightSideStyled>
    </TodoItemStyled>
  )
}

export default React.memo(TodoItem);