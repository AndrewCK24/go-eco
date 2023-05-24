import { Link } from "react-router-dom";
import styled from "@emotion/styled";

import { ReactComponent as LogoIcon } from "../icons/favicon.svg";
import { ReactComponent as UserIcon } from "../icons/userIcon.svg";
import { ReactComponent as SearchIcon } from "../icons/search.svg";

const OuterContainer = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Container = styled.nav`
	width: 90%;
	padding: 0.75rem 0;
	display: grid;
	grid-template-columns: auto 1fr auto;
	grid-column-gap: 1rem;
	align-items: center;
`;

const Logo = styled(LogoIcon)`
	width: 20vw;
	max-width: 12rem;
	height: 3rem;
`;

const MenuContainer = styled.div`
	font-family: "Poppins", sans-serif;
	gap: 1rem;
	font-size: auto;
	width: max-content;
	display: flex;
	flex-direction: row;
`;

const MenuText = styled(Link)`
	color: var(--primary-black);
	display: flex;
	align-items: center;
	flex-direction: column;
	text-decoration: none;
`;

const RightNav = styled.div`
	right: 0%;
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
	grid-template-columns: auto auto;
	background-color: var(--background-gray);
	border-radius: 0.5rem;
`;

const SearchInput = styled.input`
	width: auto;
	border: none;
	padding-left: 0.5rem;
	background-color: transparent;
	/* border-radius: 0.5rem; */
	&:focus {
		outline: none;
	}
`;

const SearchBtn = styled.button`
	border: none;
	background-color: transparent;
	display: flex;
	align-items: center;
	svg {
		height: 1.25rem;
		width: 1.25rem;
	}
`;

const TopNav = () => {
	return (
		<OuterContainer>
		<Container>
			<Logo />
			<MenuContainer>
				<MenuText to="/">Home</MenuText>
				<MenuText to="/EventCreatePage">Proposals</MenuText>
				<MenuText to="/UserPage">Contacts</MenuText>
			</MenuContainer>
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
		</OuterContainer>
	);
};

export default TopNav;
