import React from "react";

interface Item {
  id: number;
  title: string;
}

function Column() {
  const items: Item[] = [];
  return (
    <>
      {items.map((item) => (
        <React.Fragment key={item.id}>
          <h1>Title</h1>
          <p>{item.title}.</p>
        </React.Fragment>
      ))}
      <td>Name</td>
      <td>Jesse</td>
    </>
  );
}

export default Column;
