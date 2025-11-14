import React from 'react';


export interface TodoListProps {
    items: string[];
}


const TodoList: React.FC<TodoListProps> = ({ items }) => {
    console.log(items);
    return (
        <ul>
            {
                items.map((item: string, index: number) =>
                    (<li key={index} > {item}</li>)
                )
            }
        </ul>
    );
};

export function getTodoList() {
    return TodoList;
}
