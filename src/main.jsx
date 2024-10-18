import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./routes/App.jsx";
import NotFound from "./routes/NotFound.jsx";
import Privacy from "./routes/Privacy.jsx";
import Terms from "./routes/Terms.jsx";
import { ThemeProvider } from "@/components/ui/theme-provider";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/Focus-Fox/",
    element: <App />,
  },
  {
    path: "/Focus-Fox/Privacy/",
    element: <Privacy />,
  },
  {
    path: "/Focus-Fox/Terms/",
    element: <Terms />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme" className="theme-transition">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
