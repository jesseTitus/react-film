import React from "react";
import Person from "./Person";

function NameList() {
  const people = [
    {
      id: 1,
      name: "A",
      age: 30,
      skill: "R",
    },
    {
      id: 2,
      name: "B",
      age: 20,
      skill: "R",
    },
    {
      id: 3,
      name: "AC",
      age: 30,
      skill: "R",
    },
  ];
  const peopleList = people.map((person) => (
    <Person key={person.id} person={person} />
  ));
  return <div>{peopleList}</div>;
}

export default NameList;
