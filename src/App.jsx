import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import { Button, TextField } from "@material-ui/core";

const App = () => {
  const [data, setData] = useState({
    Pclass: [],
    Sex: [],
    Age: [],
  });
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
        <TextField
          label="Pclass*"
          onChange={(e) => {
            handleChange("Pclass", e.target.value);
          }}
        />

        <TextField
          label="Sex*"
          onChange={(e) => {
            handleChange("Sex", e.target.value);
          }}
        />
        <TextField
          label="Age*"
          onChange={(e) => {
            handleChange("Age", e.target.value);
          }}
        />
        <Button onClick={handleSubmit} color="primary">
          Valider
        </Button>
      </form>
      <h1 hidden={apiAnswer === ""}>
        Resultat: {apiAnswer === 0 ? "Decés" : "Survie"}
      </h1>
    </div>
  );
};

export default App;
