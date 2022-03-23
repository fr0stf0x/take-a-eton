import { ITodoItem } from './../interfaces/TodoItem';
import { atom, PrimitiveAtom } from "jotai"
import { FilterStatus } from '../constants/TodoStatus';

const filterAtom = atom<FilterStatus>("ALL");

const todosAtom = atom<ITodoItem[]>([]);

const filteredAtom = atom<ITodoItem[]>((get) => {
  const filter = get(filterAtom)
  const todos = get(todosAtom)

  if (filter === 'ALL') return todos;

  return todos.filter((todo) => todo.status === filter);
})

export {
  todosAtom,
  filterAtom,
  filteredAtom,
};
