import React from 'react';
import {Button, Icon} from "semantic-ui-react";

debugger 
const Menu = ({id, menu_name, updateMenu, deleteMenu}) => (
    <div>
<h2>{menu_name} {id} 
    <Button 
    icon color="yellow"
    size="medium"
    onClick={ () => updateMenu(id)}>
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