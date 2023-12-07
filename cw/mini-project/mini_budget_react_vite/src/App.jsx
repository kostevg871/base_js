import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import Home, { homeLoader } from "./pages/Home";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: homeLoader,
    errorElement: <Error />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
