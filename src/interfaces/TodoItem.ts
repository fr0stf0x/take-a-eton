import { TodoStatus } from "../constants/TodoStatus";

export interface ITodoItem {
  id: string;
  title: string;
  createdAt: Date;
  status: TodoStatus;
}