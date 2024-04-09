import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button/Button";

const user = {
  name: "Pepe",
};

const calculateInitialState = () => 10 + 15;

function App() {
  let message = "Hola ";

  const [likes, setLikes] = useState(calculateInitialState());

  const onClickLikeHandler = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hola {user.name}</p>
        <p>Tenes {likes} Me gusta</p>
        <Button onClick={onClickLikeHandler} text="Like" />
        <Button text="Share" />
        <Button text="post" />
      </header>
    </div>
  );
}

export default App;
