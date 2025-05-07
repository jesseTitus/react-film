import type { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "San fafjldkasf", "London", "Italy"];
  let selectedIndex = 0;
  // Event Handler
  const handleClick = (event: MouseEvent) => console.log(selectedIndex);
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
