import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  const title = "Ottawa Fence Pros";
  const pvcFences = ["Black Lava", "Classic Beige", "Grey Special"]
  return (
    <div className="App">
      <Home></Home>
      

        {/* <h1> {title} </h1> */}
        {/* <p> {pvcFences[0]} </p> */}
    </div>
  );
}

export default App;
