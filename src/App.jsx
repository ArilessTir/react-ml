import "./App.css";
import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState({
    Pclass: [],
    Sex: [],
    Age: [],
  });

  // eslint-disable-next-line no-unused-vars
  const [apiAnswer, setApiAnswer] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post("https://my-flask-ml.herokuapp.com/predict", data)
      .then((response) => {
        console.log(response);
        setApiAnswer(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (key, value) => {
    setData((obj) => ({
      ...obj,
      [key]: [value],
    }));
  };

  return (
    <div className="App">
      <h1> Titanic Prediction </h1>
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
      <h1 hidden={apiAnswer === ""}>
        Resultat: {apiAnswer === 0 ? "Decés" : "Survie"}
      </h1>
    </div>
  );
};

export default App;
