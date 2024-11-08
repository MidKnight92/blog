import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./../src/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ArticalPage from "./pages/ArticalPage";
import ArticlesListPage from "./pages/ArticlesListPage";
import NotFound from "./pages/NotFoundPage";
import articles from "./pages/article-content.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // loader: articles,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "articles",
        element: <ArticlesListPage />,
      },
      {
        path: "articles/:articleId",
        element: <ArticalPage />,
      }
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
