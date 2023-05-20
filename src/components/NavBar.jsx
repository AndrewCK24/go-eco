import { Link } from "react-router-dom";
import styled from "@emotion/styled";
// import Logo from "../../../public/assets/LOGO_GOECO.png";
import { ReactComponent as Logo } from "../../icons/favicon.svg";
import { ReactComponent as UserIcon } from "../../icons/userIcon.svg";
import { ReactComponent as SearchIcon } from "../../icons/search.svg";

const Container = styled.nav`
	width: 100%;
	padding: 1rem 0;
	display: grid;
	grid-template-columns: auto 1fr auto;
	grid-column-gap: 1rem;
	align-items: center;
	a {
		display: flex;
		align-items: center;
		text-decoration: none;
	}
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
	color: var(--primary-black);
	display: flex;
	align-items: center;
	flex-direction: column;
	position: relative;
`;

const RightNav = styled.div`
	right: 0%;
	padding-right: 2rem;
	display: flex;
	gap: 0.5rem;
	height: auto;
	svg {
		width: 2rem;
		height: 2rem;
	}
`;

const SearchContainer = styled.form`
	display: grid;
	grid-template-columns: 1fr auto;
	background-color: var(--background-gray);
	border-radius: 0.5rem;
`;

const SearchInput = styled.input`
	border: none;
	background-color: transparent;
	border-radius: 0.5rem;
`;

const SearchBtn = styled.button`
	border: none;
	background-color: transparent;
	display: flex;
	align-items: center;
	svg {
		height: 1.5rem;
		width: 1.5rem;
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
				<Link to="/UserPage">
					<TabText>Contacts</TabText>
				</Link>
			</LinkContainer>
			<RightNav>
				<SearchContainer>
					<SearchInput />
					<SearchBtn>
						<SearchIcon />
					</SearchBtn>
				</SearchContainer>
				<Link to="/LogInPage">
					<UserIcon />
				</Link>
			</RightNav>
		</Container>
	);
};

export default TopNav;
