import React, { useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import "./App.css";

const App = () => {

  const [apiResponse, setApiResponse] = useState(0);
  const [dbResponse, setDbResponse] = useState(0);

  useEffect(() => {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => setApiResponse(res))
      .catch(err => err);

    fetch("http://localhost:9000/testDB")
      .then(res => res.text())
      .then(res => setDbResponse(res))
      .catch(err => err);
  }, [])
  console.log(React);
  return(
    <div className="App">
      <div>{apiResponse}</div>
      <div>{dbResponse}</div> 
    </div>
  );
};

export default App;
