import { createBrowserRouter } from "react-router";
import { Layout } from "./pages/Layout/Layout";
import { Animal } from "./pages/Animal/Animal";
import { Animals } from "./pages/Animals/Animals";
import { Home } from "./pages/Home/Home";
import { animalsLoader } from "./loaders/animalsLoader";

export const appRouter = createBrowserRouter([
  {
    path: '/',
    loader: animalsLoader,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'animals',
        element: <Animals />
      },
      {
        path: 'animal/:id',
        element: <Animal />
      },
    ]
  }
]);