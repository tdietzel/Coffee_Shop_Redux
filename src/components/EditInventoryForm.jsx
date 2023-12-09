import React, { useState } from 'react'

const EditInventoryForm = ({ editedCoffee, onSubmit }) => {
  const [editedValues, setEditedValues] = useState({
    name: editedCoffee.name,
    origin: editedCoffee.origin.toLowerCase(),
    price: editedCoffee.price,
    roast: editedCoffee.roast.toLowerCase(),
    quantity: editedCoffee.quantity,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedValues((prevValues) => ({
      ...prevValues,
      [name]: (name === "roast" || name === "origin") ? value.toLowerCase() : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(editedValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label><h3> Name: &nbsp;</h3></label>
        <input
          type="text"
          name="name"
          value={editedValues.name}
          onChange={handleChange}
        />
      <br />
      <label><h3> Origin: &nbsp;</h3></label>
        <input
          type="text"
          name="origin"
          value={editedValues.origin}
          onChange={handleChange}
        />
      <br />
      <label><h3> Price: &nbsp;</h3></label>
        <input
          type="number"
          name="price"
          value={editedValues.price}
          onChange={handleChange}
        />
      <br />
      <label><h3> Roast: &nbsp;</h3></label>
        <input
          type="text"
          name="roast"
          value={editedValues.roast}
          onChange={handleChange}
        />
      <br />
      <label><h3> Quantity: &nbsp;</h3></label>
        <input
          type="number"
          name="quantity"
          value={editedValues.quantity}
          onChange={handleChange}
        />
      <br />
      <button type="submit" className="btn btn-success">Save Changes</button>
    </form>
  );
};

export default EditInventoryForm;