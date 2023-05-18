import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { ReactComponent as UserIcon } from "../../assets/userIcon.svg";

const IconContainer = styled.div`
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const TopNav = () => {
  const Nav = {
    gap: "40px",
    top: "2.5%",
    width: "100%",
    display: "flex",
    position: "absolute",
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
    <div style={Nav}>
      <div>
        <img src="../../assets/LOGO_GOECO.png" alt="logo" />
      </div>
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
    </div>
  );
};

export default TopNav;
