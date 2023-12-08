import { useState } from 'react';
import ShopDisplay from './ShopDisplay';
import CoffeeDetails from './CoffeeDetails';

const ShopControl = () => {
  const [coffee, setCoffee] = useState([
    { name: 'Deja Brew', origin: 'guatemala', price: '9', roast: 'dark', id: 0 },
    { name: 'Best Beans', origin: 'colombia', price: '11', roast: 'medium', id: 1 },
    { name: 'Mocha Mountain Coffee', origin: 'seattle', price: '8', roast: 'dark', id: 2 },
  ]);

  const [selectedCoffee, setSelectedCoffee] = useState(null);

  const handleHomeShop = () => {
    setSelectedCoffee(null);
  };

  const showCoffee = (coffee) => {
    setSelectedCoffee(coffee);
  };

  return (
    <div>
      {selectedCoffee ? (
        <div>
          <CoffeeDetails coffee={selectedCoffee} />
          <button onClick={handleHomeShop}>Back to Shop</button>
        </div>
      ) : (
        <div>
          <ShopDisplay coffee={coffee} onItemClick={showCoffee} />
        </div>
      )}
    </div>
  );
};

export default ShopControl;
