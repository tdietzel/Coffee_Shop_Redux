import { useState } from 'react';
import ShopDisplay from './ShopDisplay';
import CoffeeDetails from './CoffeeDetails';
import NewInventoryForm from './NewInventoryForm';

const ShopControl = () => {
  const [coffee, setCoffee] = useState([
    { name: 'Deja Brew', origin: 'guatemala', price: '9', roast: 'dark', quantity: 13, id: 0 },
    { name: 'Best Beans', origin: 'colombia', price: '11', roast: 'medium', quantity: 130, id: 1 },
    { name: 'Mocha Mountain Coffee', origin: 'seattle', price: '8', roast: 'dark', quantity: 130, id: 2 },
  ]);

  const [selectedCoffee, setSelectedCoffee] = useState(null);

  const handleHomeShop = () => {
    setSelectedCoffee(null);
  };

  const showCoffee = (coffee) => {
    setSelectedCoffee(coffee);
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

  return (
    <div>
      {selectedCoffee ? (
        <div>
          <CoffeeDetails coffee={selectedCoffee} />
          <button onClick={handleHomeShop}>Back to Shop</button>
          <button onClick={handlePurchase}>Sold a Pound</button>
        </div>
      ) : (
        <div>
          <NewInventoryForm onSubmit={handleNewInventory}/>
          <ShopDisplay coffee={coffee} onItemClick={showCoffee} />
        </div>
      )}
    </div>
  );
};

export default ShopControl;
