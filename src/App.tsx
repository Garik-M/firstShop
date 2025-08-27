import "styles/App.scss";
import Home from "pages/Home";
import Shop from "pages/Shop";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "components/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/shop/:type",
      element: <Shop />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "*",
      element: <div>404</div>
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
