export interface TodoItem {
    id: number;
    text: string;
    done: boolean;
}

export interface TodoState {
    todoItems: TodoItem[];
}