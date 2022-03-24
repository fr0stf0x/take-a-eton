import { ITodoItem } from '@/interfaces/TodoItem';
import { atom } from "jotai"
import { atomWithStorage } from 'jotai/utils';
import { FilterStatus } from '@/constants/TodoStatus';

const filterAtom = atomWithStorage<FilterStatus>('filterAtom', "ALL");

const todosAtom = atomWithStorage<ITodoItem[]>('todosAtom', []);

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
