import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/reducer/bucketSlice";
import styled from "styled-components";
import { IProduct } from "../redux/reducer/productSlice";

const BucketItemListWrapper = styled.div``;

const BucketTitle = styled.div`
  font-weight: bolder;
  color: black;
`;

const BucketCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    margin-bottom: 20px;
    padding: 14px;
    border-radius: 5px;
    img {
      height: 80px;
      transition: transform 0.3s;
      &:hover {
        transform: scale(1.1);
      }
    }
`;

const BucketItemList = () => {
  const dispatch = useDispatch();
  const selectedItemList = useSelector((state: any) => state?.bucket);

  const handleItemDelete = (id: any) => dispatch(remove(id));

  return (
    <>
      <BucketTitle>Bucket Items List</BucketTitle>
      <BucketItemListWrapper>
        {selectedItemList &&
          selectedItemList?.map((item: IProduct) => (
            <BucketCard>
              <img src={item.image} alt="img" />
              <h5>{item.title}</h5>
              <h5>{item.price}</h5>
              <button onClick={() => handleItemDelete(item.id)}>Remove</button>
            </BucketCard>
          ))}
      </BucketItemListWrapper>
    </>
  );
};

export default BucketItemList;
