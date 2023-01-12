import React from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [test, setTest] = React.useState();
  const url = "http://localhost:3050";

  React.useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setTest(JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(test);

  return <h1> Test{test}</h1>;
}

export default App;
