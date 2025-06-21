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
import JoinEvents from "../pages/JoinEvents/JoinEvents";
import UpdateEvents from "../Components/UpdateEvents";
import ManageEvents from "../pages/ManageEvents/ManageEvents";
import User from "../Components/User";

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
            path:'/users',
            loader:()=>fetch('http://localhost:3000/users'),
            Component:User,
            hydrateFallbackElement:<Loading></Loading>
        },
        {
            path:'/createEvents',
            element:<PrivateRoute><CreateEvents></CreateEvents></PrivateRoute>
        },
        {
            path:'/updateEvents/:id',
            loader:({params})=>fetch(`http://localhost:3000/events/${params.id}`),
            element:<PrivateRoute><UpdateEvents></UpdateEvents></PrivateRoute>,
            hydrateFallbackElement:<Loading></Loading>
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
        {
            path:'/manageEvents',
          element:<PrivateRoute>
            <ManageEvents></ManageEvents>
          </PrivateRoute>
        },
        {
            path:'/joinEvents',
          element:<PrivateRoute>
            <JoinEvents></JoinEvents>
          </PrivateRoute>
        },
    ]
  },
]);

export default router;