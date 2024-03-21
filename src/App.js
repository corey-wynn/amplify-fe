import "./App.css";

function App() {
  const hitBackend = () => {
    console.log("BAMF - process.env", process.env);
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
