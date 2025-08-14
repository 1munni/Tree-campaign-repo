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
import Profile from "../Components/Profile";
import MyAppliedEvents from "../pages/MyAppliedEvents/MyAppliedEvents";
import ErrorPage from "../Components/Error";
import AboutUs from "../pages/AboutUs/AboutUs";

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
        path:'/*',
        Component:ErrorPage
      },
         {
        path:'/aboutUs',
        Component:AboutUs
      },
        {
            path:'/profile',
            Component:Profile
        },
        {
            path:'/users',
            loader:()=>fetch('https://my-assignment-11-server-xi.vercel.app/users'),
            Component:User,
            hydrateFallbackElement:<Loading></Loading>
        },
        {
            path:'/createEvents',
            element:<PrivateRoute><CreateEvents></CreateEvents></PrivateRoute>
        },
        {
            path:'/updateEvents/:id',
            loader:({params})=>fetch(`https://my-assignment-11-server-xi.vercel.app/events/${params.id}`),
            element:<PrivateRoute><UpdateEvents></UpdateEvents></PrivateRoute>,
            hydrateFallbackElement:<Loading></Loading>
        },
        {
            path:'/upEvents',
            loader:()=>fetch('https://my-assignment-11-server-xi.vercel.app/events'),
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
            path:'/joinEvents/:id',
          element:<PrivateRoute>
            <JoinEvents></JoinEvents>
          </PrivateRoute>
        },
        {
            path:'/myAppliedEvents',
          element:<PrivateRoute>
           <MyAppliedEvents></MyAppliedEvents>
          </PrivateRoute>
        },
    ]
  },
]);

export default router;