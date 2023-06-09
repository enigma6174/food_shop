import { Outlet } from "react-router-dom";
import CategoriesComponent from "../../components/categories/categories.component";

const Home = () => {
  return (
    <>
      <Outlet />
      <CategoriesComponent />
    </>
  );
};

export default Home;
