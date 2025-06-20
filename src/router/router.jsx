import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import CreateEvents from "../pages/CreateEvent/CreateEvents";
import UpEvents from "../pages/UpcomingEvents/UpEvents";
import Loading from "../Components/Loading";
import PrivateRoute from "../context/PrivateRoute";
import ViewDetails from "../Components/ViewDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children:[
        {
            index:true,
            Component:Home
        },
        {
            path:'/register',
            Component:Register
        },
        {
            path:'/signIn',
            Component:SignIn
        },
        {
            path:'/createEvents',
            element:<PrivateRoute><CreateEvents></CreateEvents></PrivateRoute>
        },
        {
            path:'/upEvents',
            loader:()=>fetch('http://localhost:3000/events'),
            Component:UpEvents,
            hydrateFallbackElement:<Loading></Loading>

        },
        {
            path:'/events/:id',
          element:<PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        },
    ]
  },
]);

export default router;