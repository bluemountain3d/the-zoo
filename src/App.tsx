// import "./App.css";

import { RouterProvider } from "react-router";
import { appRouter } from "./Router";

const App = () => {
  return <>
  <RouterProvider router={appRouter}></RouterProvider>
  </>;
}

export default App;
