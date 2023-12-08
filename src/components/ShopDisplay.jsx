import PropTypes from 'prop-types';

const ShopDisplay = (props) => {
  const { coffee, onItemClick } = props;

  return (
    <div>
      <h2>Coffee List</h2>
      <ul>
        {coffee.map(burlap => (
          <li key={burlap.id} onClick={() => onItemClick(burlap)}>{burlap.name}</li>
        ))}
      </ul>
    </div>
  );
}

ShopDisplay.propTypes = {
  coffee: PropTypes.array,
  name: PropTypes.string,
  id: PropTypes.number
};

export default ShopDisplay;