import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Statistics from "./components/Statistics/Statistics";
import Blog from "./components/Blog/Blog";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: async () => {
            return await fetch("https://openapi.programming-hero.com/api/quiz");
          },

          element: <Hero></Hero>,
        },

        {
          path: "/statistics",
          element: <Statistics></Statistics>,
        },

        {
          path: "/blog",
          element: <Blog></Blog>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
