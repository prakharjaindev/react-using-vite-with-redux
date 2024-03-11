import styled from "styled-components";
import { IProduct } from "../../redux/reducer/productSlice";
import { useDispatch } from "react-redux";
import { add } from "../../redux/reducer/bucketSlice";

const CardWrap = styled.div`
  background: white;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  img {
    height: 80px;
  }

  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;

const Card = (productDetails: IProduct) => {
  const dispatch = useDispatch();

  const handleadd = (product: IProduct) => {
    dispatch(add(product));
  };

  return (
    <CardWrap key={productDetails?.id}>
      <img src={productDetails.image} alt="img" />
      <h4>{productDetails.title}</h4>
      <h5>{productDetails.price}</h5>
      <button className="btn" onClick={() => handleadd(productDetails)}>
        Add to cart
      </button>
    </CardWrap>
  );
};

export default Card;
