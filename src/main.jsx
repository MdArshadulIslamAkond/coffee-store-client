import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import Error from './components/Error/Error.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import SignIn from './components/SignIn/SignIn.jsx';
import AuthProvider from './components/Providers/AuthProvider.jsx';
import Users from './components/Users/Users.jsx';
import Home from './components/Home/Home.jsx';
// import Home from './Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    
    children:[
      {
        path: "/",
        element: <Home/>,
        loader: ()=>fetch('http://localhost:5000/coffees'),
      },
      {
        path: "addCoffee",
        element: <AddCoffee/>,
      },
      {
        path: "updateCoffee/:id",
        element: <UpdateCoffee/>,
        loader: ({params})=>fetch(`http://localhost:5000/coffees/${params.id}`),
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path:"signin",
        element:<SignIn />,
      },
      {
        path:"users",
        element:<Users />,
        loader: ()=>fetch('http://localhost:5000/user'),
      }
    ],
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
