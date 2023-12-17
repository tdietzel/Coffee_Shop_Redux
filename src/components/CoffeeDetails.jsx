const CoffeeDetails = (props) => {
  const coffee = props.burlap;
  return (
    <div>
      <h1 style={{ color: '#800000' }}>{coffee.name}</h1>
      <h3>Origin: {coffee.origin}</h3>
      <h3>Price: $ {coffee.price}</h3>
      <h3>Roast: {coffee.roast}</h3>
      <h3>Gross Sales: ${parseFloat(coffee.profit)}</h3>
      {coffee.quantity <= 0 ? (<h3 style={{ color: 'red' }}>Quantity: Out of Stock</h3>)
      :coffee.quantity <= 10 ? (<><h3>Quantity: {coffee.quantity}</h3> <h3 style={{ color: '#ffcc00' }}>"Almost out of stock!"</h3></>)
      :(<h3>Quantity: {coffee.quantity}</h3>)}
    </div>
  );
}

export default CoffeeDetails;