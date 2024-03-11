import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import BucketItemList from "../BucketItemList";
import PageNotFound from "../common/PageNotFound";
import Navbar from "../common/Navbar";
import Footer from "../common/footer";

function AppRoutes() {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/bucket", element: <BucketItemList /> },
  ];

  return (
    <>
      <Navbar />
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default AppRoutes;
