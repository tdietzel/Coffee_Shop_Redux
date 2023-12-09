import React from 'react'
import { v4 } from 'uuid'
import PropTypes from 'prop-types'

function NewInventoryForm({ onSubmit }) {
  const handleNewInventory = (e) => {
    e.preventDefault();
    const newBurlap = {
      name: e.target.name.value,
      origin: e.target.origin.value.toLowerCase(),
      price: parseInt(e.target.price.value),
      roast: e.target.roast.value.toLowerCase(),
      quantity: 130,
      id: v4()
    };

    onSubmit(newBurlap);
  };

  return (
    <div className="form-styling">
      <form onSubmit={handleNewInventory}>
        <h2>Add Inventory</h2>
      <input
        type='text'
        name='name'
        placeholder='Name' 
        required
      />
      <input
        type='text'
        name='origin'
        placeholder='Origin of burlap' 
        required
      />
      <input
        type='number'
        name='price'
        placeholder='Price/burlap' 
        required
      />
      <input
        type='text'
        name='roast'
        placeholder='light, medium or dark' 
        required
      />
      <br />
      <button type="submit" style={{ textAlign: 'center', marginTop: '10px', fontWeight: 900 }} className="btn btn-info">Add Burlap</button>
      </form>
    </div>
  );
}

NewInventoryForm.propTypes = {
  onSubmit: PropTypes.func
};

export default NewInventoryForm;