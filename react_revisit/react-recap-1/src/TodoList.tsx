import React from "react";
import ListItem from "./ListItem";
import {type Task, type ListProps} from './interface/Common'


const TodoList: React.FC<ListProps> = (listProps) => {
    return (
        <ul className="todoList-ul">
            {listProps.list.map((task: Task) => (
                // Add a list item for each item
                <ListItem key={"listItem-" + task.id} task={task} listProps={listProps} />
            ))}
        </ul>
    );
};

export function getTodoList() {
    return TodoList;
}

