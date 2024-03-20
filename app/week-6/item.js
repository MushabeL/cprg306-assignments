
const Item = ({ name, quantity, category }) => {
  <li className="list-disc list-inside p-2 bg-white shadow rounded-md">
    <ul>
      <li>{name}</li>
      <li>{quantity}</li>
      <li>{category}</li>
    </ul>
  </li>;
};
