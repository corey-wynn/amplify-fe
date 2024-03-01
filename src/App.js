import "./App.css";

function App() {
  const hitBackend = () => {
    const url = "https://rjb792f1wi.execute-api.us-east-2.amazonaws.com/default/Python_API_test";
    fetch(url)
      .then((response) => response.json())
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
