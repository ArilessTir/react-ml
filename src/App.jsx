import "./App.css";
import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState({
    Pclass: "",
    Sex: "",
    Age: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
    axios
      .post("http://localhost/predict", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (key, value) => {
    setData((obj) => ({
      ...obj,
      [key]: value,
    }));
  };

  return (
    <div className="App">
      <form>
        <input
          placeholder="Pclass"
          onChange={(e) => {
            handleChange("Pclass", e.target.value);
          }}
        />
        <input
          placeholder="Sex"
          onChange={(e) => {
            handleChange("Sex", e.target.value);
          }}
        />
        <input
          placeholder="Age"
          onChange={(e) => {
            handleChange("Age", e.target.value);
          }}
        />
        <input type="submit" value="Valider" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default App;
