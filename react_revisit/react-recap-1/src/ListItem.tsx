
import React from "react";
import type { ListProps, Task } from "./interface/Common";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const ListItem: React.FC<{ task: Task; listProps: ListProps; }> = ({
    task,
    listProps,
}) => {
    const removeTask = (id: string) => {
        listProps.listSetter(listProps.list.filter((current) => current.id === id ? false : true));
    }
    const completeTask = (id: string) => {
        console.log("completing task - ", id, "list is ", listProps.list)
        listProps.listSetter(listProps.list.map((current) => { return current.id === id ? { ...current, isComplete: true } : current }));
    }

    return (
        <li key={"li-" + task.id} className="listItem">
            <input type="checkbox" id={"input-" + task.id} value={task.value} />{" "}
            <label className="listItemLabel" htmlFor={"input-" + task.id} style={{ textDecorationStyle: "double", textDecoration: task.isComplete ? 'line-through' : 'none' }}>
                {task.value}
            </label>
            <IconButton aria-label="delete" sx={{ color: "green" }} disabled={task.isComplete} onClick={() => completeTask(task.id)}>
                <CheckCircleIcon />
            </IconButton>
            <IconButton aria-label="delete" color="error" onClick={() => removeTask(task.id)}>
                <DeleteIcon />
            </IconButton>

        </li>
    );
};

export default ListItem;
