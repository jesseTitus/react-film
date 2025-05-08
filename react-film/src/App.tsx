import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  // let items = ["New York", "San fafjldkasf", "London", "Italy"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  return (
    <div>
      <Alert children="Hello world" />
      <Button onClick={() => console.log("clicked")}>My button</Button>
    </div>
  );
}

export default App;
