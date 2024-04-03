"use client";

import { useState } from "react";

export function NewItem({ items, setItems}) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    function handleSubmit(event) {
        event.preventDefault();
        const categoryObject = categories.find(cat => cat.value === category);
        const item = { name, quantity, category: categoryObject.label };
        setItems([...(items || []), item]);
        console.log("new item", item);
        alert(`Added ${quantity} ${name} from ${categoryObject.label}`);
        setName("");
        setQuantity(1);
        setCategory("produce");
    }
    
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

    return (
        <form onSubmit={handleSubmit} className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full">
            <div className="mb-2">
            <label>
                <input
                    type="text"
                    className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
                    placeholder="Item Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                />
            </label>
            </div>
            <div className="flex justify-between">
            <label>
                <input
                    type="number"
                    className="w-20 ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
                    min='1'
                    max='99'
                    value={quantity}
                    onChange={(event) => setQuantity(event.target.value)}
                    required
                />
            </label>
            <label className="">
                <select
  value={category}
  className="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans capitalize"
  onChange={(event) => setCategory(event.target.value)}
>
  {categories.map((category) => (
    <option key={category.value} value={category.value} className="capitalize" >
      {category.label}
    </option>
  ))}
</select>
            </label>
            </div>
            <button type="submit" className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">+</button>
        </form>
);
}

export default NewItem