import PropTypes from 'prop-types';

const ShopDisplay = (props) => {
  const { coffee } = props;

  return (
    <div>
      <h2>Coffee List</h2>
      <ul>
        {coffee.map(burlap => (
          <li key={burlap.id}>{burlap.name}</li>
        ))}
      </ul>
    </div>
  );
}

ShopDisplay.propTypes = {
  burlap: PropTypes.array,
  name: PropTypes.string,
  id: PropTypes.number
};

export default ShopDisplay;