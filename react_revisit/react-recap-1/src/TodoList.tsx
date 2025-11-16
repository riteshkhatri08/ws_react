import React, {useContext} from "react";
import ListItem from "./ListItem";
import {type Task} from './interface/Common'
import { TodoAppContext } from "./TodoApp";

const TodoList: React.FC = () => {
    const {list} = useContext(TodoAppContext);
    return (
        <ul className="todoList-ul">
            {list.map((task: Task) => (
                // Add a list item for each item
                <ListItem key={"listItem-" + task.id} task={task} />
            ))}
        </ul>
    );
};

export function getTodoList() {
    return TodoList;
}

