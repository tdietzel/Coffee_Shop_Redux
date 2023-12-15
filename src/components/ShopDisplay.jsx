const ShopDisplay = (props) => {
  const { burlaps, onItemClick } = props;

  return (
    <div className="coffee-list">
      <h2>Available Coffee List</h2>
      <ul>
        {burlaps.map(burlap => (
          <li key={burlap.id} onClick={() => onItemClick(burlap)} className="shop-items">{burlap.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShopDisplay;