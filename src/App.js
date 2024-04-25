import "./App.css";
import { ROUTES } from "./const/routes";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <Home />,
  },
  {
    path: ROUTES.login,
    element: <Login />,
  },
]);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;
