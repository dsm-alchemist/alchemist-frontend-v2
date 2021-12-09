export interface TodoItem {
    id: number;
    text: string;
    date: string;
    done: boolean;
}

export interface TodoState {
    todoItems: TodoItem[];
}