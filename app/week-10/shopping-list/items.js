'use client';

import { useState } from 'react';

export default function Item({ name, quantity, category, onSelect }) {
  const [isSelected, setIsSelected] = useState(false);

  function handleItemClick() {
    console.log('item clicked:', name);
    const ingredient = name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '');
    onSelect && onSelect(ingredient);
    setIsSelected(true);
  }

  return (
    <li className={`p-2 m-4 bg-comet-800 max-w-sm border border-solid border-melrose-300 hover:bg-comet-600 transform-all rounded ${isSelected ? 'scale-105' : 'scale-100'}`} onClick={handleItemClick}>
      <h2 className={`text-xl font-bold capitalize ${isSelected ? 'text-white' : ''}`}>{name}</h2>
      <div className="text-sm flex flex-row">
        <p>Buy {quantity} in <span className="capitalize">{category}</span>
        </p>
      </div>
    </li>
  );
}