import React, { useState } from 'react'

const EditInventoryForm = ({ editedBurlap, onSubmit }) => {
  const [editedValues, setEditedValues] = useState({
    name: editedBurlap.name,
    origin: editedBurlap.origin.toLowerCase(),
    price: editedBurlap.price,
    roast: editedBurlap.roast.toLowerCase(),
    quantity: editedBurlap.quantity,
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