

export interface Task {
    id: string;
    value: string;
}
export interface ListProps {
    list: Task[];
    listSetter: React.Dispatch<React.SetStateAction<Task[]>>;
}


