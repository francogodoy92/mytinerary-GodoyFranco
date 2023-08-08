import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import Main from "./layouts/Main";
import Componente404 from "./pages/Componente404";

const router = createBrowserRouter([
  {
    path:'/',
    element: <Main />,
    children: [
      {path:'/', element: <Home /> },
      {path:'/Home', element: <Home /> },
      {path:'/Cities', element: <Cities />}
    ]
  },
  {path:'*', element: <Componente404 /> }
])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}