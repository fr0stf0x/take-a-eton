import React from 'react'
import { useSetAtom } from 'jotai';

import deleteIcon from '@/assets/trash.svg';

import CheckBox from '@/components/CheckBox';
import Button from '@/components/Button';
import { ITodoItem } from '@/interfaces/TodoItem'
import { TodoStatus } from '@/constants/TodoStatus';
import { todosAtom } from '@/atoms/todo-list';
import { toggleTodo } from '@/utils/helpers';

import { TodoItemStyled, RightSideStyled, LeftSideStyled } from './styled';

const TodoItem: React.FC<{ todo: ITodoItem }> = ({ todo }) => {
  const setTodos = useSetAtom(todosAtom);

  const pToggleTodo = () => {
    setTodos((prev) => prev.map(pTodo => {
      if (todo.id === pTodo.id) {
        return toggleTodo(pTodo);
      }

      return pTodo;
    }));
  }

  const removeTodo = () => {
    setTodos((prev) => prev.filter((pTodo) => pTodo.id !== todo.id));
  }

  return (
    <TodoItemStyled>
      <LeftSideStyled>
        <CheckBox
          checked={todo.status === TodoStatus.DONE}
          label={todo.title}
          onChange={pToggleTodo}
        />
        <div className='date-time'>
          <div>
            <i>{new Date(todo.createdAt).toLocaleDateString()}</i>
          </div>
          <div>
            <i>{new Date(todo.createdAt).toLocaleTimeString()}</i>
          </div>
        </div>
      </LeftSideStyled>

      <RightSideStyled>
        <Button className="small simple danger" onClick={removeTodo}>
          {/* &#215; */}
          <img className="icon" src={deleteIcon} alt="x" />
          </Button>
      </RightSideStyled>
    </TodoItemStyled>
  )
}

export default React.memo(TodoItem);