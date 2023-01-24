import React, { useEffect, useState } from "react";
import ItemComponent from "./components/ItemComponent";
import AddItemForm from "./components/AddItemForm";
function App() {

  const [items, setItems] = useState([{ name: "nari", age: 23, id: 1 }, { name: "mami", age: 11, id: 2 }])
  // delete function -passed as props to child-
  function delet(id) {
    setItems(items.filter((item) => item.id !== id));
  }
  //add function -passed as props to child-
  function add(id, name, age) {
    const obj = {
      id: id,
      name: name,
      age: age
    }
    setItems(items => [...items, obj]);
  }
  return (
    <div className="container">
      To Do list
      <ItemComponent items={items} deleteItem={delet} />
      <AddItemForm items={items} add={add} />
    </div>
  );
}

export default App;
