import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const FooterWrapper = styled.footer`
  background-color: #24262b;
  padding: 70px 0;
`;

const Container = styled.div`
  max-width: 1170px;
  margin: auto;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const FooterCol = styled.div`
  width: 22%;
  padding: 0 15px;
`;

const FooterHeading = styled.h4`
  font-size: 18px;
  color: #ffffff;
  text-transform: capitalize;
  margin-bottom: 35px;
  font-weight: 500;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -10px;
    background-color: #e91e63;
    height: 2px;
    box-sizing: border-box;
    width: 50px;
  }
`;

const FooterList = styled.ul`
  list-style: none;
`;

const FooterLink = styled.a`
  font-size: 16px;
  text-transform: capitalize;
  color: #ffffff;
  text-decoration: none;
  font-weight: 300;
  color: #bbbbbb;
  display: block;
  transition: all 0.3s ease;

  &:hover {
    color: #ffffff;
    padding-left: 8px;
  }
`;

const SocialLinks = styled.div`
  display: inline-block;

  a {
    height: 40px;
    width: 40px;
    background-color: rgba(255, 255, 255, 0.2);
    margin: 0 10px 10px 0;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    color: #ffffff;
    transition: all 0.5s ease;

    &:hover {
      color: #24262b;
      background-color: #ffffff;
    }
  }
`;

const CopyrightText = styled.p`
  color: #ffffff;
  text-align: center;
  margin-top: 20px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Row>
          <FooterCol>
            <FooterHeading>StyleHub</FooterHeading>
            <FooterList>
              <li>
                <FooterLink href="#">about us</FooterLink>
              </li>
              <li>
                <FooterLink href="#">our services</FooterLink>
              </li>
              <li>
                <FooterLink href="#">privacy policy</FooterLink>
              </li>
              <li>
                <FooterLink href="#">affiliate program</FooterLink>
              </li>
            </FooterList>
          </FooterCol>
          <FooterCol>
            <FooterHeading>get help</FooterHeading>
            <FooterList>
              <li>
                <FooterLink href="#">FAQ</FooterLink>
              </li>
              <li>
                <FooterLink href="#">shipping</FooterLink>
              </li>
              <li>
                <FooterLink href="#">returns</FooterLink>
              </li>
              <li>
                <FooterLink href="#">order status</FooterLink>
              </li>
              <li>
                <FooterLink href="#">payment options</FooterLink>
              </li>
            </FooterList>
          </FooterCol>
          <FooterCol>
            <FooterHeading>online shop</FooterHeading>
            <FooterList>
              <li>
                <FooterLink href="#">watch</FooterLink>
              </li>
              <li>
                <FooterLink href="#">bag</FooterLink>
              </li>
              <li>
                <FooterLink href="#">shoes</FooterLink>
              </li>
              <li>
                <FooterLink href="#">dress</FooterLink>
              </li>
            </FooterList>
          </FooterCol>
          <FooterCol>
            <FooterHeading>follow us</FooterHeading>
            <SocialLinks>
              <a href="#">
                {" "}
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#">
                {" "}
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#">
                {" "}
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#">
                {" "}
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </SocialLinks>
          </FooterCol>
        </Row>
      </Container>
      <CopyrightText>&copy; 2024 StyleHub. All Rights Reserved.</CopyrightText>
    </FooterWrapper>
  );
};

export default Footer;
