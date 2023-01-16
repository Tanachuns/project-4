import React from "react";
import axios from "axios";
import NavbarComp from "./components/Navbar/NavbarComp";

function App() {
  const [test, setTest] = React.useState();

  React.useEffect(() => {
    axios
      .get(process.env.REACT_APP_URL + "/plan")
      .then((res) => {
        console.log(res);
        setTest(JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <NavbarComp />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1> Test{test}</h1>
    </div>
  );
}

export default App;
