import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/home/Home.jsx';
import Blog from './Pages/blog/Blog.jsx';
import AboutMe from './Pages/aboutme/AboutMe.jsx';
import MyProject from './Pages/myproject/MyProject.jsx';
import ContactMe from './Pages/contactme/ContactMe.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "blog",
        element: <Blog />
      },
      {
        path: "aboutme",
        element: <AboutMe />
      },
      {
        path: "myproject",
        element: <MyProject />
      },
      {
        path: "contactme",
        element: <ContactMe />
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)
