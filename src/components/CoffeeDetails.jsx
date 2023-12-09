import React from 'react';
import PropTypes from 'prop-types';

const CoffeeDetails = (props) => {
  const coffee = props.coffee;
  return (
    <div>
      <h1 style={{ color: '#800000' }}>{coffee.name}</h1>
      <h3>Origin: {coffee.origin}</h3>
      <h3>Price: $ {coffee.price}</h3>
      <h3>Roast: {coffee.roast}</h3>
      {coffee.quantity <= 0 ? (<h3 style={{ color: 'red' }}>Quantity: Out of Stock</h3>)
      :coffee.quantity <= 10 ? (<><h3>Quantity: {coffee.quantity}</h3> <h3 style={{ color: '#ffcc00' }}>"Almost out of stock!"</h3></>)
      :(<h3>Quantity: {coffee.quantity}</h3>)}
    </div>
  );
}

CoffeeDetails.propTypes = {
  coffee: PropTypes.shape({
    name: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    roast: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default CoffeeDetails;