import { SplitScreen } from "./LayoutComponents/SplitScreen";

const LeftHandComponent = ({ name }) => {
  return <h1 style={{ backgroundColor: "green" }}>{name}</h1>;
};

const RightHandComponent = ({ name }) => {
  return <p style={{ backgroundColor: "Red" }}>{name}</p>;
};

function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftHandComponent name="Miguel" />
      <RightHandComponent name="Samuel" />
    </SplitScreen>
  );
}

export default App;
