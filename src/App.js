import logo from "./logo.svg";
import "./App.css";
import { SplitScreen } from "./Components/LayoutComponents/SplitScreen";

const Left = ({ name }) => {
  return (
    <h1 style={{ backgroundColor: "Red", textAlign: "center" }}>{name}</h1>
  );
};

const Right = function ({ message }) {
  return <h2>{message}</h2>;
};

function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3} color={"Red"}>
      <Left name={"John Doe"} />
      <Right message={"hello"} />
    </SplitScreen>
  );
}

export default App;

function Wrapper(props) {
  console.log(props.children);
  return <div>"Helllo"</div>;
}

export const Hello = () => {
  return (
    <div>
      <Wrapper>
        <h1>i am the first Child</h1>
      </Wrapper>
    </div>
  );
};
