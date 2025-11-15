import React from "react";
import ListItem from "./ListItem";

export interface TodoListProps {
    items: string[];
}

const TodoList: React.FC<TodoListProps> = ({ items }) => {
    return (
        <ul>
            {items.map((value: string, index: number) => (
                // Add a list item for each item
                <ListItem key={"listItem-" + index} itemText={value} index={index} />
            ))}
        </ul>
    );
};

export function getTodoList() {
    return TodoList;
}

