import "styles/App.scss";
import Home from "pages/Home";
import Shop from "pages/Shop";
import Login from "pages/Login";
import Profile from "pages/Profile";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { AddedProvider } from "Context/added/AddedProvider";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Products/:type",
      element: <Shop />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "*",
      element: <div>404</div>,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
  ]);

  return (
    <AddedProvider>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </AddedProvider>
  );
}

export default App;
