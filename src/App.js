import "./App.css";

function App() {
  // Load environment variables based on the environment
  if (process.env.NODE_ENV === "local") {
    // require("dotenv").config({ path: ".env" }); // Load .env for local development
  } else {
    // require("dotenv").config({ path: ".env.development" }); // Load .env.development for S3 deployment
  }

  const hitBackend = () => {
    fetch(`${process.env.REACT_APP_API_URL}/route1`)
      .then((response) => {
        const val = response.json();
        console.log("BAMF - val", val);
        return val;
      })
      .then((data) => console.log(data));
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello</p>
        <button onClick={() => hitBackend()}>Click me</button>
      </header>
    </div>
  );
}

export default App;
