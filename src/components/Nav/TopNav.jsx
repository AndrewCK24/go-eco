import { Link } from "react-router-dom";
import styled from "@emotion/styled";
// import Logo from "../../../public/assets/LOGO_GOECO.png";
import { ReactComponent as Logo } from "../../icons/favicon.svg";
import { ReactComponent as UserIcon } from "../../icons/userIcon.svg";

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 2.5rem;
`;

const LogoContainer = styled.div`
  svg {
    width: 12rem;
    height: 3rem;
  }
`;

const IconContainer = styled.div`
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const TopNav = () => {
  const Nav = {
    gap: "40px",
    width: "100%",
    display: "flex",
  };
  const text = {
    color: "var(0, 0, 0, 0.4000000059604645)",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
  };
  const LogIn = {
    display: "flex",
    width: "5%",
    height: "auto",
    right: "0%",
    position: "absolute",
  };
  return (
    <Container>
      {/* <Container>
        {/* <img src="../../assets/LOGO_GOECO.png" alt="logo" />
        <img src={Logo} alt="logo" />
      </div> */}
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Link to="/" style={text}>
        Home
      </Link>
      <Link to="/EventCreatePage" style={text}>
        Proposals
      </Link>
      <Link to="/" style={text}>
        Contacts
      </Link>
      <Link to="/LogInPage" style={LogIn}>
        <IconContainer>
          <UserIcon />
        </IconContainer>
      </Link>
    </Container>
  );
};

export default TopNav;
