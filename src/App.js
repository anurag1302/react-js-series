import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Textform from "./components/Textform/Textform";

function App() {
  return (
    <>
      <Navbar
        title="Text Utilities"
        home="Home"
        about="About Us"
        color="lightgrey"
      />
      <Textform heading="Enter the text to analyze" />
      {/* <Navbar /> */}
    </>
  );
}

export default App;
