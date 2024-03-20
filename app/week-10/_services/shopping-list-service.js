import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";
import { ShoppingListItem } from "../_models/shopping-list-item";
import { useEffect } from "react";

try {
  const user = getItems();
} catch (error) {
  console.error("Error getting documents: ", error);
}
