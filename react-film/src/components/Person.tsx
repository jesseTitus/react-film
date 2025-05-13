import React from "react";

interface PersonProps {
  person: {
    name: string;
    age: number;
  };
}

function Person({ person }: PersonProps) {
  return (
    <div>
      <h2>
        I am {person.name} and {person.age} years old.
      </h2>
    </div>
  );
}

export default Person;
