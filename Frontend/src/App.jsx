import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./Components/header/Header";
import Body from "./Components/body/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./Components/error/Error";
import AboutUS from "./Components/aboutUs/AboutUs";
import Contact from "./Components/contact/Contact";
import RestaurantMenu from "./Components/restaurantMenu/RestaurantMenu";
import useOnlineStatus from "./utils/useOnlineStatus";
import Status from "./Components/offlinePage/Status";
import { lazy } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./Components/cart/Cart";

const Grocery = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import("./Components/grocery/Grocery"));
      }, 3000); // delay of 2 seconds
    })
);

const AppLayout = () => {
  const { status } = useOnlineStatus();
  if (status === false) return <Status />;
  return (
    <Provider store={appStore}>
      <div className="app">
        <HeaderComponent />
        <Outlet />
      </div>
    </Provider>
  );
};

{
  /**create routes */
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUS />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>loading......</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
