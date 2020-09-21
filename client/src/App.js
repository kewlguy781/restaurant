import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { Container } from "semantic-ui-react";
import MenuList from "./components/MenuList.js"
import MenuForm from "./components/MenuForm.js"


function App() {
const [menus, setMenus] = useState([])
// const [items, setItems] = useState([])


useEffect(() => {
  //API CALL TO GET MENUS
  // http://localhost:3001 is setup in proxy
  axios
    .get("/api/menus")
    // .then(res => res.json()) skip this with axios, not with fetch
    .then((res) => {
      setMenus(res.data);
console.log('res :>> ', res);
      //if error occurs inside of here code flow will go to catch clause
    })
    .catch((err) => {
      // good way for development to catch error but bad for production
      alert("error occurred fetching todos");
    });
console.log('menus :>> ', menus);
    // axios
    // .get("/api/items")
    // // .then(res => res.json()) skip this with axios, not with fetch
    // .then((res) => {
    //   setItems(res.data);
    //   //if error occurs inside of here code flow will go to catch clause
    // })
    // .catch((err) => {
    //   // good way for development to catch error but bad for production
    //   alert("error occurred fetching todos");
    // });

  //UPDATE states
}, []);





const addMenu = (menu_name) => {
  console.log('menu_name :>> ', menu_name);
  axios.post('/api/menus', {menu_name: menu_name})
  .then((res) => {
    debugger
    setMenus([res.data])
  })
};

const updateMenu = (id) => {
  // API CALL TO UPDATE ITEM
};

const deleteMenu = (id) => {
  // API CALL TO DELETe ITEM
  // TODO Create dependant on items if menu is deleted

  };

return (
  <Container>
    <h1>Menu List</h1>
    <MenuForm addMenu={addMenu} />
    {/* <MenuList updateMenu={updateMenu} deleteMenu={deleteMenu} menus={menus} />  */}
    <MenuList menus={menus} />
  </Container>
);
}

export default App;