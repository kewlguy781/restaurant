import React from 'react';
import {Button, Icon} from "semantic-ui-react";


debugger 
const Menu = ({id, menu_name, updateMenu, deleteMenu}) => (
    <div>
<h2><a href={'/menuview/' + id}> {menu_name} </a>{id} 
    <Button 
    icon color="yellow"
    size="medium"
    onClick={ () => updateMenu(id)}>
        {/* Need to make this a toggle one */}
    <Icon name="pencil" /></Button>
    <Button 
    icon color="red"
    size="medium"
    onClick={() => deleteMenu(id)}>
    <Icon name="trash" /></Button>
    </h2>
    </div>
)


export default Menu;