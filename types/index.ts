export type Todo = {
  id: string;
  title: string;
  isCompleted: boolean;
  addedDate: string;
};

export type TodoList = Todo[];

export type TodosActions = {
  onDeleteTodo: (id: string) => void;
  onCompleteTodo: (id: string) => void;
};
