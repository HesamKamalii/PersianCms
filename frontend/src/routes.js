import Products from "./component/sideBarComponent/products";
import Comments from "./component/sideBarComponent/comments";
import Users from "./component/sideBarComponent/users";
import Orders from "./component/sideBarComponent/orders";
import Offers from "./component/sideBarComponent/offers";

const routes = [
  { path: "/products", element: <Products /> },
  { path: "/comments", element: <Comments /> },
  { path: "/users", element: <Users /> },
  { path: "/orders", element: <Orders /> },
  { path: "/offers", element: <Offers /> },
];

export default routes