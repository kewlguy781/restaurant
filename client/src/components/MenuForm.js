import React, {useState} from 'react';
import {Form} from "semantic-ui-react";

const MenuForm = ({ addMenu }) => {
    const [menu_name, setName] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        addMenu(menu_name);
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