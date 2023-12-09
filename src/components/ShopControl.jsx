import React, { useState } from 'react'
import ShopDisplay from './ShopDisplay.jsx'
import CoffeeDetails from './CoffeeDetails.jsx'
import NewInventoryForm from './NewInventoryForm.jsx'
import EditInventoryForm from './EditInventoryForm.jsx';

const ShopControl = () => {
  const [coffee, setCoffee] = useState([
    { name: 'Deja Brew', origin: 'guatemala', price: 9, roast: 'dark', quantity: 130, profit: 0, id: '0' },
    { name: 'Best Beans', origin: 'colombia', price: 11, roast: 'medium', quantity: 130, profit: 0, id: '1' },
    { name: 'Mocha Mountain Coffee', origin: 'seattle', price: 8, roast: 'dark', quantity: 130, profit: 0, id: '2' },
  ]);

  const [selectedCoffee, setSelectedCoffee] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedCoffee, setEditedCoffee] = useState(null);

  const showCoffee = (coffee) => {
    setSelectedCoffee(coffee);
  };

  const handleHomeShop = () => {
    setSelectedCoffee(null);
    setEditMode(false);
    setEditedCoffee(null);
  };

  const handleNewInventory = (newBurlap) => {
    setCoffee((prevCoffee) => {
      const updatedCoffee = [...prevCoffee, newBurlap];
      return updatedCoffee;
    });
  }

  const handlePurchase = () => {
    setCoffee((prevCoffee) => {
      const updatedCoffee = prevCoffee.map((item) => {
        return item.id === selectedCoffee.id && item.quantity > 0 ? {
          ...item,
          quantity: item.quantity - 1,
          profit: item.profit + item.price
        } : item
      })
      const updatedBurlap = updatedCoffee.find((item) => item.id === selectedCoffee.id);
      setSelectedCoffee(updatedBurlap);
      return updatedCoffee;
    });
  }

  const handleDelete = () => {
    setCoffee((prevCoffee) => {
      const updatedCoffee = prevCoffee.filter((item) => item.id !== selectedCoffee.id);
      setSelectedCoffee(null);
      return updatedCoffee;
    });
  }

  const handleEdit = () => {
    setEditMode(true);
    setEditedCoffee(selectedCoffee);
  };

  const handleEditSubmit = (editedValues) => {
    setCoffee((prevCoffee) => {
      return prevCoffee.map((item) =>
        item.id === editedCoffee.id ? { ...item, ...editedValues } : item
      );
    });
    setEditMode(false);
    setSelectedCoffee(null);
    setEditedCoffee(null);
  };  

  return (
    <div>
      {editMode ? (
        <div className="coffee-details">
          <div className="coffee-details-inner">
            <EditInventoryForm editedCoffee={editedCoffee} onSubmit={handleEditSubmit}/>
            <button onClick={handleHomeShop} className="btn btn-dark">Back to Shop</button>
          </div>
        </div>
      ) : selectedCoffee ? (
        <div className="coffee-details">
          <div className="coffee-details-inner">
            <CoffeeDetails coffee={selectedCoffee} />
            <div>
              <button onClick={handlePurchase} style={{ marginRight: '5px'}} className="btn btn-success"> Sold a Pound </button>
              <button onClick={handleDelete} className="btn btn-danger"> Delete Burlap </button>
            </div>
            <div>
            <button onClick={handleEdit} style={{ marginRight: '5px'}} className="btn btn-secondary"> Edit Burlap </button>
              <button onClick={handleHomeShop} className="btn btn-dark"> Back to Shop </button>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ backgroundColor: '#6F4E37', height: '100vh' }}>
          <NewInventoryForm onSubmit={handleNewInventory} />
          <ShopDisplay coffee={coffee} onItemClick={showCoffee} />
        </div>
      )}
    </div>
  );
};

export default ShopControl;