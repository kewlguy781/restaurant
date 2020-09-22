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
      //if error occurs inside of here code flow will go to catch clause
    })
    .catch((err) => {
      // good way for development to catch error but bad for production
      alert("error occurred fetching todos");
    });
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
    setMenus([res.data, ...menus])
  })
};

const updateMenu = (id) => {
  // API CALL TO UPDATE ITEM
  axios.put(`/api/menus/${id}`)
  .then((res)=>{
    const updatedMenu = menus.map((menu)=>{
      if (menu.id===res.data.id){
        return res.data
      }
      return menu
    })
    setMenus(updatedMenu)
  })
  .catch((error) => {
    alert("error updating menu (Apps.js:72)")
  })
};

const deleteMenu = (id) => {
  console.log('id :>> ', id);
axios.delete(`api/menus/${id}`)
.then ((res)=>{
  setMenus(menus.filter((menu) => menu.id !== res.data.menu.id))
})
.catch((err) => {
  alert("error deleting message (Apps.js:82)")
})
//need to add Promise here
};

return (
  <Container>
    <h1>Menu List</h1>
    <MenuForm addMenu={addMenu} />
    <MenuList updateMenu={updateMenu} deleteMenu={deleteMenu} menus={menus} />
  </Container>
);
}

export default App;