import logo from "../../logo.svg";
import Button from "../../components/Button/Button";
import { useState } from "react";
import Input from "../../components/Input/Input";
import style from "./Home.module.css";

const user = {
  name: "Pepe",
};

const user2 = {
  name: "Jose",
};

const user3 = {
  name: "Charlie",
};

const users = [user, user2, user3];

const Home = () => {
  const [likes, setLikes] = useState(0);

  const onClickLikeHandler = () => {
    setLikes(likes + 1);
  };

  const [valueInput1, setValueInput1] = useState("");
  const [userState, setUsersState] = useState(users);

  const onChangeHandler = (event) => {
    setValueInput1(event.target.value);
  };

  const guardarUsuario = () => {
    const newUser = {
      name: valueInput1,
    };
    setUsersState([...userState, newUser]);
  };

  console.log(users);

  return (
    <div className={style.container}>
      <img src={logo} className="App-logo" alt="logo" />
      <p>Tenes {likes} Me gusta</p>
      <Button onClick={onClickLikeHandler} text="Like" />
      <Button text="Share" />
      <Button text="post" />
      {likes > 10 ? <p>Tenes muchos likes</p> : <p>No tenes muchos likes</p>}
      {userState.map((user) => {
        return <p key={user.name}>Hola {user.name}</p>;
      })}

      <p>ValueInput1: {valueInput1}</p>

      <div className={style.flexColumn}>
        <Input value={valueInput1} onChangeHandler={onChangeHandler} />

        <Button text="Guardar" onClick={guardarUsuario} />
      </div>
    </div>
  );
};

export default Home;
