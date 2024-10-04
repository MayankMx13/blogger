import Layout from "./routes/layout";
import Footer from "./components/footer"
import HomePage from "./components/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./components/login";
import SinglePage from "./components/singlePage";
import Author from "./components/author";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <>
              <HomePage />
              <Footer />
            </>

          ),
        }, {
          path: "/singlepost",
          element: (
            <>
              <SinglePage />
              <Footer />
            </>

          )
        },
        {
          path: "/authorpage",
          element: (
            <>
              <Author />
              <Footer />
            </>

          )
        }
      ],


    }, {
      path: "/login",
      element: <Login />
    }
  ]
  );


  return <RouterProvider router={router} />;
}

export default App
