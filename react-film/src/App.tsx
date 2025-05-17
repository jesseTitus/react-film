import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { useState } from "react";
import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./components/Form";
import LifecycleA from "./components/LifecycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ClickCounter2 from "./components/ClickCounter2";
import HoverCounter2 from "./components/HoverCounter2";
import User from "./components/User";
import User2 from "./components/User2";
import { UserProvider } from "./components/UserContext";
import ComponentC from "./components/ComponentC";

function App() {
  // let items = ["New York", "San fafjldkasf", "London", "Italy"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  const [alertVisible, setAlertVisibility] = useState(false); //state hook: used to only show alert if true
  return (
    <div className="App">
      {/* <Counter2>
        {(count, incrementCount) => (
          <ClickCounter2 count={count} incrementCount={incrementCount} />
        )}
      </Counter2>
      <Counter2
        render={(count, incrementCount) => (
          <HoverCounter2 count={count} incrementCount={incrementCount} />
        )}
      /> */}
      <UserProvider value="jesse">
        <ComponentC />
      </UserProvider>
      {/* <Counter render={(count, incrementCount) => <HoverCounter2 count={count} incrementCount={incrementCount} />} /> */}
      {/* <User name={() => "jesse"} /> */}
      {/* <User2 render={(isLoggedIn) => (isLoggedIn ? "jesse" : "guest")} /> */}
      {/* <ClickCounter name="jesse" />
      <HoverCounter /> */}
      {/* <PortalDemo /> */}
      {/* <ErrorBoundary>
        <Hero heroName={"Joker"} />
        <Hero heroName={"Batman"} />
      </ErrorBoundary> */}
      {/* <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <FRParentInput /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <PureComp />
      <ParentComp />
      <Table />
      <LifecycleA />
      <FragmentDemo />
      <Form />
      <ParentComponent />
      <UserGreeting />
      <NameList />
      <Stylesheet primary={true} />
      <Inline />
      <Counter />
      <EventBind /> */}
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)} children="Alert" />
      )}
      <Button onClick={() => setAlertVisibility(true)}>My button</Button>
    </div>
  );
}

export default App;
