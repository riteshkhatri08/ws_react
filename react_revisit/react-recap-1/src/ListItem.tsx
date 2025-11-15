import Button from "@mui/material/Button";
import React from "react";
const ListItem: React.FC<{ itemText: string; index: number;}> = ({
    itemText,
    index,
}) => {
    const removeItem = (itemText: string) => {
        console.log("todo")
    }
    return (
        <li key={"li-" + index} className="listItem">
            <input type="checkbox" id={"input-" + index} value={itemText} />{" "}
            <label className="listItemLabel" htmlFor={"input-" + index}>
                {itemText}
            </label>{" "}
            <Button variant="contained" size="small" onClick={() => removeItem(itemText)}>
                x
            </Button>
        </li>
    );
};

export default ListItem;
