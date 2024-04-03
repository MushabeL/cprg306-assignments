"use client";

import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import MealIdeas from "./meal-ideas.js";
import { useState } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { getItems } from "../_utils/firebase.js";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const { user, firebaseSignOut } = useUserAuth();

  if (!user) {
    return (
      <div className="flex absolute justify-center align-middle flex-col">
        <h1 className="m-2 text-2xl content-center">WOAH COWBOY!</h1>
        <p className="m-2 text-lg content-center">
          You need to sign in to use this app
        </p>
        <button
          className="p-2 m-2 bg-blue-500 text-white rounded hover:bg-blue-900"
          onClick={() => (location.href = "/week-8")}
        >
          Go back to where you belong
        </button>
      </div>
    );
  }

  const handleItemSelect = (ingredient) => {
    const cleanedIngredient = ingredient.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g,
      ""
    );
    console.log("item selected");
    console.log(cleanedIngredient);
    setSelectedItem(cleanedIngredient);
  };

  return (
    <main className="bg-gradient-to-r from-comet-950 to-comet-500">
      <div className="flex flex-row">
        <div>
          <h2 className="font-bold text-3xl m-2 p-2">Shopping List</h2>
          <div>
            <NewItem items={items} setItems={setItems} />
          </div>
          <div className="flex flex-row">
            <ul>
              <ItemList items={items} onItemSelect={handleItemSelect} />
            </ul>
            <MealIdeas ingredient={selectedItem} />
          </div>
        </div>
      </div>
    </main>
  );
}
