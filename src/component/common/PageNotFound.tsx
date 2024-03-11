import { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PageNotFoundWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const BodyContained = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .maintext {
    color: var(--grey-2, #E6E6E6);
    text-align: center;
    font-family: Poppins;
    font-size: 190px;
    font-style: normal;
    font-weight: 500;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 100px;
    }
  }

  .pagenotfound {
    text-align: center;
    color: var(--grey-2, #E6E6E6);
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    padding: 0;

    @media (max-width: 576px) {
      font-size: 13px;
    }
  }

  button {
    width: 155px;
    padding: 16px 0px;
    border-radius: 100px;
    border: 2px solid var(--primary-7, #5A63FF);
    background: var(--primary-7, #5A63FF);
    color: var(--White, #fff);
    font-family: Work Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 24px;
  }
`;

const ConnectImg = styled.img`
  width: 68px;
  height: 68px;

  @media (max-width: 576px) {
    width: 32px;
    height: 32px;
  }
`;

const PageNotFound = () => {
  const navigate = useNavigate();
  
  const handleNavigation = () => {
    navigate("/");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <PageNotFoundWrapper />
      <ContentWrapper>
        <BodyContained>
          <div className="d-flex justify-content-center">
            <ConnectImg src="./images/pageNotFound/connect404.svg" alt="connect logo" />
          </div>
          <h1 className="maintext">404</h1>
          <p className="pagenotfound">page not found</p>
          <div className="d-flex justify-content-center">
            <button onClick={handleNavigation}>BACK HOME</button>
          </div>
        </BodyContained>
      </ContentWrapper>
    </>
  );
};

export default PageNotFound;
