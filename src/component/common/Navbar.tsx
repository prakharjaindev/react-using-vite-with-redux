import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 0;
  background-color: #24262b;
`;

const NavbarLogo = styled.div`
  font-weight: bolder;
  color: #fff;
`;

const NavLink = styled(Link)`
  font-weight: bolder;
  margin-right: 7px;
  text-decoration: none;
  color: #fff;
  margin-left: 20px;
`;

const ItemsCount = styled.span`
  font-weight: bolder;
  color: #fff;
`;

const Navbar = () => {
  const selectedItems = useSelector((state: any) => state?.bucket);

  return (
    <NavbarWrapper>
      <NavbarLogo>StyleHub</NavbarLogo>
      <div>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/bucket"}>Bucket</NavLink>
        <ItemsCount>items:{selectedItems.length}</ItemsCount>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
