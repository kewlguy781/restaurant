import React from "react";
import Menu from "./Menu";

// debugger
const MenuList = ({ menus, updateMenu, deleteMenu}) => (
    <div>
        {menus.map( menu =>
        <Menu 
        key={menu.id}
        {...menu}
        updateMenu={updateMenu}
        deleteMenu={deleteMenu}
        />
        )
        }
    </div>
)


export default MenuList;