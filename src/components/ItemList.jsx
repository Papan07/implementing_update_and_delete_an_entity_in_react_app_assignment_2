import Item from "./Item";
const API_URI = "http://localhost:8000/doors";
const ItemList = ({ items, setItems }) => {
    const handleDelete = (id) => {
        fetch(`${API_URI}/${id}`, { method: "DELETE" })
            .then((response) => {
                if (response.ok) {
                    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
                } else {
                    console.error("Failed to delete item");
                }
            })
            .catch((error) => console.error("Error deleting item:", error));
    };

    return (
        <>
            {items.map((item) => (
                <Item key={item.id} item={item} onDelete={handleDelete} />
            ))}
        </>
    );
};

export default ItemList;