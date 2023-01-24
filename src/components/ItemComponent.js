import React, { useEffect, useState } from "react";

function ItemComponent(props) {
  // get item list and delete function from props 
  const { items, deleteItem } = props;
  // if items exist --> show items/ else --> show message of nothing
  const number_of_items = items.length;
  const ListItem = number_of_items > 0 ? (items.map((item) => {
    return (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.age}</td>
        <td onClick={() => { deleteItem(item.id) }}>
          <div>
            <button type="button" className="close float-left text-white" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </td>
      </tr>)
  }))
    : <tr><td colSpan="4" >nothing</td></tr>

  return (
    <table className="table table-striped table-dark" key={items} >
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Age</th>
          <th scope="col">#</th>
        </tr>
      </thead>
      <tbody>
        {ListItem}
      </tbody>
    </table>
  );
}

export default ItemComponent;
