import { useState } from "react";
import Item from "./item";
//import Items.json from "./items.json";

//creating a state variable to store the items

const [sortBy, setSortBy] = useState("name", "category");
//sort the items two different ways to sort
