import { useAtomValue } from 'jotai'
import { filteredAtom } from '../../atoms/todo-list'
import TodoItem from './TodoItem'
import { TodoListWrapper } from './styled';
import Empty from './Empty';
import Button from '../Button';

const TodoList = () => {
  const list = useAtomValue(filteredAtom);

  return (
    <TodoListWrapper>
      {!list.length ? (
        <Empty />
      ) : list.map((todo, i) => {
        return (
          <TodoItem key={todo.id} todo={todo} />
        );
      })}
      <Button style={{ marginTop: 10 }}>Toggle All</Button>
    </TodoListWrapper>
  )
}

export default TodoList;
