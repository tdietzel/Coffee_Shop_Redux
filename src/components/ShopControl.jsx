import { useState } from 'react';
import ShopDisplay from './ShopDisplay';

const ShopControl = () => {
  const [coffee, setCoffee] = useState([
    {name: 'Deja Brew', origin: 'guatemala', price: '9', roast: 'dark', id: 0},
    {name: 'Best Beans', origin: 'colombia', price: '11', roast: 'medium', id: 1},
    {name: 'Mocha Mountain Coffee', origin: 'seattle', price: '8', roast: 'dark', id: 2},
  ]);

  return (
    <div>
      <ShopDisplay coffee={coffee}/>
    </div>
  );
}

export default ShopControl;