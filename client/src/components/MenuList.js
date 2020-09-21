import React from "react";
import Menu from "./Menu";

const MenuList = ({ menus, updateMenu, deleteMenu}) => (
    <div>
        {menus.map( menu =>
        <Menu 
        key={menu.id}
        {...menu}
        />
        )
        }
    </div>
)


// to be added under Menu: 
// updateMenu={}
// deleteMenu={}
export default MenuList;