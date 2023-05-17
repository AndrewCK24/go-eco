import styled from "@emotion/styled";
// import "../../../pageCSS/BottomNav.css";
import BottomNavCol from "./BottomNavCol";
import { ReactComponent as Logo } from "../../../public/favicon.svg";

const Footer = styled.div`
  margin-top: 100%;
  width: 100%;
  height: 55%;
  display: flex;
  overflow: hidden;
  position: absolute;
  background-color: rgba(30, 30, 30, 1);
`;

const LeftFooter = styled.div``;

const LeftFooterText = styled.div`
  top: 110px;
  left: 110px;
  color: rgba(255, 255, 255, 1);
  position: absolute;
  font-size: larger;
  font-weight: 700;
`;

const IconContainer = styled.div`
  svg {
    top: 45px;
    left: 103px;
    width: 193px;
    height: 50px;
    position: absolute;
  }
`;

const RightFooter = styled.div`
  gap: 40px;
  top: 10%;
  right: 10%;
  display: flex;
  position: absolute;
  background-color: rgba(30, 30, 30, 1);
`;

const RightFooterRow = styled.div`
  color: rgba(217, 217, 217, 1);
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
`;

const FooterText = styled.div`
  top: 325px;
  left: 97px;
  color: rgba(217, 217, 217, 1);
  position: absolute;
  font-size: 18px;
  font-style: Medium;
  text-align: right;
  font-weight: 700;
`;

const BottomNav = () => {
  return (
    <Footer>
      <LeftFooter>
        <IconContainer>
          <Logo />
        </IconContainer>
        {/* Icons */}
        <LeftFooterText>
          The earth is a fine place
          <br />
          and worth fighting for.
        </LeftFooterText>
      </LeftFooter>
      <RightFooter>
        <BottomNavCol
          text1="Information"
          text2="About"
          text3="Product"
          text4="Blog"
        />
        <BottomNavCol
          text1="Company"
          text2="Community"
          text3="Career"
          text4="Our story"
        />
        <BottomNavCol
          text1="Contact"
          text2="Getting Started"
          text3="Pricing"
          text4="Resources"
        />
        <FooterText>2023 all Right Reserved Term of use GO ECO</FooterText>
      </RightFooter>
    </Footer>
  );
};

export default BottomNav;
