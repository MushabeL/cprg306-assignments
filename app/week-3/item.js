//building the Item Component
const Item = ({ name, quantity, category }) => {
  <li className="list-disc list-inside p-2 bg-white shadow rounded-md">
    <ul>
      <li>{name}</li>
      <li>{quantity}</li>
      <li>{category}</li>
    </ul>
  </li>;
};

// lowkey, i forget what getter and setters are. i should look it up later
