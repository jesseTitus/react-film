import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { useState } from "react";
import Counter from "./components/Counter";
function App() {
  // let items = ["New York", "San fafjldkasf", "London", "Italy"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  const [alertVisible, setAlertVisibility] = useState(false); //state hook: used to only show alert if true
  return (
    <div>
      <Counter />
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)} children="Alert" />
      )}
      <Button onClick={() => setAlertVisibility(true)}>My button</Button>
    </div>
  );
}

export default App;
