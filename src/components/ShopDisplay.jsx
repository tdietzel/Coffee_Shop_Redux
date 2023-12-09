import React from 'react';
import PropTypes from 'prop-types'

const ShopDisplay = (props) => {
  const { coffee, onItemClick } = props;

  return (
    <div className="coffee-list">
      <h2>Available Coffee List</h2>
      <ul>
        {coffee.map(burlap => (
          <li key={burlap.id} onClick={() => onItemClick(burlap)} className="shop-items">{burlap.name}</li>
        ))}
      </ul>
    </div>
  );
}

ShopDisplay.propTypes = {
  coffee: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    origin: PropTypes.string,
    price: PropTypes.number,
    roast: PropTypes.string,
    quantity: PropTypes.number,
    id: PropTypes.string,
  })),
  onItemClick: PropTypes.func,
};

export default ShopDisplay;