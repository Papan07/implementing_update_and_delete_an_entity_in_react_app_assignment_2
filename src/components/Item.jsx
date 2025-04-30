const Item = ({ item, onDelete }) => {
    return (
        <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <button onClick={() => onDelete(item.id)} style={{ marginRight: "10px" }}>
                Delete
            </button>
            <button onClick={() => alert(`Edit functionality for ${item.name} not implemented yet`)}>
                Edit
            </button>
        </div>
    );
};

export default Item;