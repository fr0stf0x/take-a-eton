import React from 'react'

import deleteIcon from '@/assets/trash.svg';

import CheckBox from '@/components/CheckBox';
import Button from '@/components/Button';
import { ITodoItem } from '@/interfaces/TodoItem'
import { TodoStatus } from '@/constants/TodoStatus';

import { TodoItemStyled, RightSideStyled, LeftSideStyled } from './styled';

interface ITodoItemProps {
  todo: ITodoItem;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
}

const TodoItem: React.FC<ITodoItemProps> = ({ todo, removeTodo, toggleTodo }) => {
  // React.useEffect(() => {
  //   console.log('TodoItem update', todo.id);
  // });

  const pToggleTodo = () => {
    toggleTodo(todo.id);
  }

  const pRemoveTodo = () => {
    removeTodo(todo.id);
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
        <Button className="small simple danger" onClick={pRemoveTodo}>
          <img className="icon" src={deleteIcon} alt="x" />
        </Button>
      </RightSideStyled>
    </TodoItemStyled>
  )
}

export default React.memo(TodoItem);