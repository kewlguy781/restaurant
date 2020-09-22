import React, {useState} from 'react';
import {Form} from "semantic-ui-react";

const MenuForm = ({ addMenu, updateMenu, id }) => {
    const [menu_name, setName] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!id) {
        addMenu(menu_name);
        }
        else {
        updateMenu(id) 
        // Not sure if I need to pass menu_name above as well.
        }
        setName("");
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Input
            label="Name"
            placeholder="Menu Name"
            required
            value={menu_name}
            onChange={(e) => setName(e.target.value)}
        />
        </Form>
    )
}

export default MenuForm

