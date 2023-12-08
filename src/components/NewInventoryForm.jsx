import { v4 } from 'uuid';

function NewInventoryForm({ onSubmit }) {
  const handleNewInventory = (e) => {
    e.preventDefault();
    const newBurlap = {
      name: e.target.name.value,
      origin: e.target.origin.value,
      price: e.target.price.value,
      roast: e.target.roast.value,
      quantity: 130,
      id: v4()
    };

    onSubmit(newBurlap);
  };

  return (
    <div>
      <form onSubmit={handleNewInventory}>
        <h2>Add a new Burlap</h2>
      <input
        type='text'
        name='name'
        placeholder='Name of burlap' 
        required
      />
      <input
        type='text'
        name='origin'
        placeholder='Origin of burlap' 
        required
      />
      <input
        type='number'
        name='price'
        placeholder='Price/burlap' 
        required
      />
      <input
        type='text'
        name='roast'
        placeholder='Type (light, medium, dark)' 
        required
      />
      <button type="submit">Add Burlap</button>
      </form>
    </div>
  );
}

export default NewInventoryForm;