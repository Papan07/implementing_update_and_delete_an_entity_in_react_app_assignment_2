import { useState, useEffect } from "react";
import ItemList from "./components/ItemList";

const API_URI = `https://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(API_URI)
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching items:", error));
  }, []);

  return <ItemList items={items} setItems={setItems} />;
}

export default App;