import logo from "../../logo.svg";
import Button from "../../components/Button/Button";
import { useEffect, useState } from "react";
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
  const [mensaje, setMensaje] = useState("");

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

  //Poder ejecutar una funcion cuando sucede algo.

  //Tiene dos parametros,
  // El primero es una funcion de callback
  // El segundo es un arreglo de dependecias. Lo que voy a escuchar a ver si cambia.
  useEffect(() => {
    console.log("ejecuto useEffect");
    if (likes >= 10) {
      setMensaje("ya tenes 10 likes...");
      //Guardar en storage
      localStorage.setItem("likes", likes);
    }
  }, [likes]);

  useEffect(() => {
    const likesRecuperados = localStorage.getItem("likes");
    setLikes(likesRecuperados);
  }, []);

  // const onClickDeleteHandler = (id) => {
  //   //el delete del arreglo con ese id
  // };

  return (
    <div className={style.container}>
      <img src={logo} className="App-logo" alt="logo" />
      {/* <h1 className={classes(style.title, style.bigTitle)}>HOLA !!</h1> */}
      <p>Tenes {likes} Me gusta</p>
      <Button onClick={onClickLikeHandler} text="Like" />
      <Button text="Share" />
      <Button text="post" />
      {mensaje}
      {userState.map((user) => {
        return <p key={user.name}>Hola {user.name}</p>;
      })}

      <p>ValueInput1: {valueInput1}</p>

      <div className={style.flexColumn}>
        <Input value={valueInput1} onChangeHandler={onChangeHandler} />
        {/* <input type="text" value={valueInput1} onChange={onChangeHandler} />; */}
        <Button text="Guardar" onClick={guardarUsuario} />

        {/* <ListTaks tasks={tasks} onClickDelete={onClickDeleteHandler} /> */}
      </div>
    </div>
  );
};

export default Home;

//ListTaks

{
  /* <div>
  {taks.title}

  <button onClick={() => onClickDelete(task.id)} />
</div>; */
}
