import React, { useEffect, useState } from "react";

function AddItemForm(props) {
  // get function add from props
  const { add } = props;
  const [name, setName] = useState(0);
  const [age, setAge] = useState(0);
  const [id, setId] = useState(0);
  return (
    <form>
      <div className="form-row">
        <div className="col">
          <input type="text" className="form-control" placeholder="id" onChange={(e) => setId(e.target.value)} />
        </div>
        <div className="col">
          <input type="text" className="form-control" placeholder="name" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="col">
          <input type="text" className="form-control" placeholder="age" onChange={(e) => setAge(e.target.value)} />
        </div>
      </div>
      <div className="align-self-center mx-auto d-flex  justify-content-center">
        <button type="button" className="btn btn-outline-dark mt-5 w-100" aria-label="Close" onClick={() => add(id, name, age)} >
          Add
        </button>
      </div>
    </form>
  );
}

export default AddItemForm;
