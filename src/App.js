import { useState } from "react";
import "./App.css";

function App() {
  const [response, setResponse] = useState("");
  const hitBackend = () => {
    console.log("BAMF ---2---");
    console.log("BAMF - process.env", process.env);
    fetch(`${process.env.REACT_APP_API_URL}/route1`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ key: "value" }) // replace with your data
    })
      .then((response) => {
        const val = response.json();
        return val;
      })
      .then((data) => {
        setResponse(data);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        {response?.message && <p>{response.message}</p>}
        <p>Hello</p>
        <button onClick={() => hitBackend()}>Click me</button>
      </header>
    </div>
  );
}

export default App;
