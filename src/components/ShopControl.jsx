import { useState } from 'react'
import ShopDisplay from './ShopDisplay.jsx'
import CoffeeDetails from './CoffeeDetails.jsx'
import NewInventoryForm from './NewInventoryForm.jsx'

const ShopControl = () => {
  const [coffee, setCoffee] = useState([
    { name: 'Deja Brew', origin: 'guatemala', price: 9, roast: 'dark', quantity: 130, id: '0' },
    { name: 'Best Beans', origin: 'colombia', price: 11, roast: 'medium', quantity: 130, id: '1' },
    { name: 'Mocha Mountain Coffee', origin: 'seattle', price: 8, roast: 'dark', quantity: 130, id: '2' },
  ]);

  const [selectedCoffee, setSelectedCoffee] = useState(null);

  const showCoffee = (coffee) => {
    setSelectedCoffee(coffee);
  };

  const handleHomeShop = () => {
    setSelectedCoffee(null);
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
          quantity: item.quantity - 1
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

  return (
    <div>
      {selectedCoffee ? (
        <div className="coffee-details">
          <div className="coffee-details-inner">
          <CoffeeDetails coffee={selectedCoffee} />
          <button onClick={handlePurchase} style={{ marginBottom: '10px' }} className="btn btn-dark">Sold a Pound</button>
          <button onClick={handleDelete} style={{ marginBottom: '10px' }} className="btn btn-dark">Delete Burlap</button>
          <button onClick={handleHomeShop} className="btn btn-dark">Back to Shop</button>
          </div>
        </div>
      ) : (
        <div style={{ backgroundColor: '#6F4E37', height: '100vh' }}>
          <NewInventoryForm onSubmit={handleNewInventory}/>
          <ShopDisplay coffee={coffee} onItemClick={showCoffee} />
        </div>
      )}
    </div>
  );
};

export default ShopControl;