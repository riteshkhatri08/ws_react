import Button from "@mui/material/Button";
import React from "react";
import type { ListProps, Task } from "./interface/Common";
const ListItem: React.FC<{ task: Task; listProps: ListProps; }> = ({
    task,
    listProps,
}) => {
    const removeItem = (id: string) => {
        listProps.listSetter(listProps.list.filter((current) => current.id === id ? false : true));
    }
    
    return (
        <li key={"li-" + task.id} className="listItem">
            <input type="checkbox" id={"input-" + task.id} value={task.value} />{" "}
            <label className="listItemLabel" htmlFor={"input-" + task.id}>
                {task.value}
            </label>{" "}
            <Button variant="contained" size="small" onClick={() => removeItem(task.id)}>
                x
            </Button>
        </li>
    );
};

export default ListItem;
