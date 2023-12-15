import { useSelector, useDispatch } from "react-redux"
import { addBurlap, deleteBurlap, showBurlap, editBurlap, updateBurlap, purchasedPound, backToShop, shopControlSelector } from '../redux/shopControlSlice.js'
import ShopDisplay from './ShopDisplay.jsx'
import CoffeeDetails from './CoffeeDetails.jsx'
import NewInventoryForm from './NewInventoryForm.jsx'
import EditInventoryForm from './EditInventoryForm.jsx';

const ShopControl = () => {
  const shopControl = useSelector(shopControlSelector);
  const dispatch = useDispatch();

  const showSelectedBurlap = (burlap) => {
    dispatch(showBurlap(burlap));
  };
 
  const handleHomeShop = () => {
    dispatch(backToShop());
  };

  const handleNewInventory = (newBurlap) => {
    dispatch(addBurlap(newBurlap));
  }

  const handlePurchase = () => {
    dispatch(purchasedPound());
  }

  const handleDelete = () => {
    const selectedBurlap = shopControl.selectedBurlap;
    dispatch(deleteBurlap(selectedBurlap.id));
  }

  const handleEdit = () => {
    dispatch(editBurlap())
  };

  const handleEditSubmit = (editedValues) => {
    dispatch(updateBurlap(editedValues));
  };  

  return (
    <div>
      {shopControl.editMode ? (
        <div className="coffee-details">
          <div className="coffee-details-inner">
            <EditInventoryForm editedBurlap={shopControl.editedBurlap} onSubmit={handleEditSubmit}/>
            <button onClick={handleHomeShop} className="btn btn-dark">Back to Shop</button>
          </div>
        </div>
      ) : shopControl.selectedBurlap ? (
        <div className="coffee-details">
          <div className="coffee-details-inner">
            <CoffeeDetails burlap={shopControl.selectedBurlap} />
            <div>
              <button onClick={handlePurchase} style={{ marginRight: '5px'}} className="btn btn-success"> Sold a Pound </button>
              <button onClick={handleDelete} className="btn btn-danger"> Delete Burlap </button>
            </div>
            <div>
            <button onClick={handleEdit} style={{ marginRight: '5px'}} className="btn btn-secondary"> Edit Burlap </button>
              <button onClick={handleHomeShop} className="btn btn-dark"> Back to Shop </button>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ backgroundColor: '#6F4E37', height: '100vh' }}>
          <NewInventoryForm onSubmit={handleNewInventory} />
          <ShopDisplay burlaps={shopControl.burlaps} onItemClick={showSelectedBurlap} />
        </div>
      )}
    </div>
  );
};

export default ShopControl;