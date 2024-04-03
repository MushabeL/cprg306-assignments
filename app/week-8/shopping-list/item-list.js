'use client';

import Item from "./item";
import { useState } from "react";
import itemsJson from "./items.json";

export default function ItemList({ items = [], onItemSelect }) {
  const [sortBy, setSortBy] = useState('name');
  const categories = [
    { value: "produce", label: "produce" },
    { value: "dairy", label: "dairy" },
    { value: "bakery", label: "bakery" },
    { value: "meat", label: "meat" },
    { value: "frozenFoods", label: "frozen foods" },
    { value: "cannedGoods", label: "canned goods" },
    { value: "dryGoods", label: "dry goods" },
    { value: "beverages", label: "beverages" },
    { value: "snacks", label: "snacks" },
    { value: "household", label: "household" },
    { value: "other", label: "other" },
  ];

  const itemsWithCategory = [...itemsJson, ...items].map((item) => {
    const categoryObject = categories.find(cat => cat.value === item.category);
    return { ...item, category: categoryObject ? categoryObject.label : item.category };
  });

  const sortedItems = itemsWithCategory.sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === 'category' || sortBy === 'groupedCategory') {
      return a.category.localeCompare(b.category);
    }
    return a.quantity - b.quantity;
  });

  const renderGroupedItems = () => {
    const groupedItems = sortedItems.reduce((acc, item) => {
      const category = item.category;
      acc[category] = [...(acc[category] || []), item];
      return acc;
    }, {});

    return Object.entries(groupedItems).map(([category, itemsInCategory]) => (
        <div key={category}>
          <h2 className="text-lg font-bold mb-2 capitalize px-4">{category}</h2>
          {itemsInCategory.map((item) => (
            <Item key={item.id} {...item} onSelect={onItemSelect} />
          ))}
        </div>
      ));
    };

    

  return (
    <div>
      <div className="pl-2">
      <button
  className={`${sortBy === 'name' ? 'bg-melrose-300' : 'bg-melrose-600'} text-white font-bold py-2 px-4 rounded m-2`}
  onClick={() => setSortBy('name')}
>
  Sort by Name
</button>
<button
  className={`${sortBy === 'category' ? 'bg-melrose-300' : 'bg-melrose-600'} text-white font-bold py-2 px-4 rounded m-2`}
  onClick={() => setSortBy('category')}
>
  Sort by Category
</button>
<button
  className={`${sortBy === 'groupedCategory' ? 'bg-melrose-300' : 'bg-melrose-600'} text-white font-bold py-2 px-4 rounded m-2`}
  onClick={() => setSortBy('groupedCategory')}
>
  Sort by Grouped Category
</button>
      </div>

      {sortBy === 'groupedCategory' ? (
        renderGroupedItems()
      ) : (
        sortedItems.map((item) => (
          <Item key={item.id} {...item} onSelect={onItemSelect} />
        ))
      )}
    </div>
  );
}