import logo from "../../logo.svg";
import Button from "../../components/Button/Button";
import { useEffect, useState } from "react";
import Input from "../../components/Input/Input";
import style from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../const/routes";

// let temp = 0;

// for (let i = 0; i < 1000; i++) {
//   for (let j = 0; j < 1000; j++) {
//     for (let k = 0; k < 1000; k++) {
//       temp = Math.sqrt(k) + Math.pow(j, 2);
//     }
//   }
// }

const Titulo = (text) => {
  console.time("Tiempo que tarda en renderizar");
  const mayusText = "hola".toUpperCase();
  console.timeEnd("Tiempo que tarda en renderizar");
  return <h1>{mayusText}</h1>;
};

const Home = () => {
  const navigate = useNavigate();

  const [likes, setLikes] = useState(0);
  const [mensaje, setMensaje] = useState("");

  const onClickLikeHandler = () => {
    setLikes(likes + 1);
  };

  const [valueInput1, setValueInput1] = useState("");
  const [userState, setUsersState] = useState([]);

  const onChangeHandler = (event) => {
    setValueInput1(event.target.value);
  };

  const guardarUsuario = () => {
    const newUser = {
      name: valueInput1,
    };
    setUsersState([...userState, newUser]);
  };

  const fetchUsers = async () => {
    console.log("Hola!");
    const response = await fetch("/mocks/usuarios.json");
    const result = await response.json();
    setUsersState(result);
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
    fetchUsers();
    const likesRecuperados = localStorage.getItem("likes");
    setLikes(likesRecuperados);
  }, []);

  const onClickLoginHandler = () => {
    navigate(ROUTES.login);
  };

  return (
    <div className={style.container}>
      <Titulo text="hola" />
      <img src={logo} className="App-logo" alt="logo" />
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
        <Button text="Guardar" onClick={guardarUsuario} />
      </div>

      <Button text="Login" onClick={onClickLoginHandler} />
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
