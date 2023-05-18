import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { ReactComponent as Logo } from "../../icons/favicon.svg";
import { ReactComponent as UserIcon } from "../../icons/userIcon.svg";

const Container = styled.nav`
	width: 100%;
	display: grid;
	grid-template-columns: auto 1fr auto;
	grid-column-gap: 1rem;
	align-items: center;
`;

const LogoContainer = styled.div`
  padding-left: 2rem;
	svg {
		width: 12rem;
		height: 3rem;
	}
`;

const LinkContainer = styled.div`
	font-family: "Poppins", sans-serif;
	gap: 1rem;
	font-size: 1.25rem;
	width: max-content;
	display: flex;
	flex-direction: row;
`;

const TabText = styled.div`
	color: rgba(30, 30, 30, 1);
	text-decoration: none;
	display: flex;
	align-items: center;
	flex-direction: column;
	position: relative;
`;

const IconContainer = styled.div`
padding-right: 2rem;
	display: flex;
	height: auto;
	right: 0%;
	svg {
		width: 2rem;
		height: 2rem;
	}
`;

const TopNav = () => {
	return (
		<Container>
			<LogoContainer>
				<Logo />
			</LogoContainer>
			<LinkContainer>
				<Link to="/">
					<TabText>Home</TabText>
				</Link>
				<Link to="/EventCreatePage">
					<TabText>Proposals</TabText>
				</Link>
				<Link to="/">
					<TabText>Contacts</TabText>
				</Link>
			</LinkContainer>
			<Link to="/LogInPage">
				<IconContainer>
					<UserIcon />
				</IconContainer>
			</Link>
		</Container>
	);
};

export default TopNav;
