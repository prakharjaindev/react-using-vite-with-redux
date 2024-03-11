import { useEffect, useState } from "react";
import { RiLoader4Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  IProduct,
  STATUSES,
  fetchproducts,
} from "../redux/reducer/productSlice";
import styled from "styled-components";
import Card from "../component/common/Card";
import UserLocation from "./userLocation";

const HomeWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  padding: 50px 0;
`;

const ActionButton = styled.div`
  padding: 50px 0 25px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
`;

const Home = () => {
  const dispatch = useDispatch();
  const [selectedTab, setSelectedTab] = useState("all");
  const { data: allProducts, status } = useSelector(
    (state: any) => state?.product
  );

  useEffect(() => {
    dispatch(fetchproducts() as any);
  }, []);

  if (status === STATUSES.Loading) {
    return (
      <div className="loader-container">
        <RiLoader4Line className="loader-icon" />
      </div>
    );
  }

  // Function to filter products based on category
  const filterProductsByCategory = (category: any) => {
    if (category === "all") {
      return allProducts;
    } else {
      return allProducts.filter(
        (product: IProduct) =>
          product.category.search(new RegExp(`\\b${category}\\b`)) >= 0
      );
    }
  };

  // Function to handle tab click
  const handleTabClick = (category: any) => {
    setSelectedTab(category);
  };

  return (
    <>
      <ActionButton>
        <button onClick={() => handleTabClick("all")}>All</button>
        <button onClick={() => handleTabClick("men's clothing")}>Men's</button>
        <button onClick={() => handleTabClick("women's clothing")}>
          Women's
        </button>
        <button onClick={() => handleTabClick("jewelery")}>Jewelery</button>
        <button onClick={() => handleTabClick("electronics")}>
          Electronics
        </button>
      </ActionButton>
      <HomeWrapper>
        {filterProductsByCategory(selectedTab)?.map((item: IProduct) => (
          <Card key={item?.id} {...item} />
        ))}
      </HomeWrapper>
      <UserLocation />
    </>
  );
};

export default Home;
