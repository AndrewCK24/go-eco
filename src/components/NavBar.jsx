import styled from "@emotion/styled";
import { Link, NavLink } from "react-router-dom";
import { useRecoilValue } from "recoil";

import userState from "../recoil/userState";
import Logo from "./Logo";
import { FaUserCircle } from "react-icons/fa";
// import { ReactComponent as SearchIcon } from "../icons/search.svg";

const OuterContainer = styled.nav`
	width: 100%;
	height: auto;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Container = styled.div`
	width: 90%;
	padding: 0.75rem 0;
	display: grid;
	grid-template-columns: auto 1fr auto;
	grid-column-gap: 1rem;
	align-items: center;
`;

const MenuContainer = styled.div`
	font-family: "Poppins", sans-serif;
	gap: 1rem;
	font-size: auto;
	width: max-content;
	display: flex;
	flex-direction: row;
`;

const MenuLink = styled(NavLink)`
	color: var(--text-gray);
	display: flex;
	align-items: center;
	flex-direction: column;
	text-decoration: none;
	&.active {
		color: var(--text-black);
		font-weight: 700;
	}
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

const UserBtn = styled(Link)`
	color: var(--text-black);
	font-size: 1.5rem;
	display: flex;
`;

const UserImg = styled.img`
	width: 1.5rem;
	height: 1.5rem;
	border-radius: 50%;
`;
// TODO: 調整使用者圖片大小

// const SearchContainer = styled.form`
// 	display: grid;
// 	grid-template-columns: auto auto;
// 	background-color: var(--bg-gray);
// 	border-radius: 0.5rem;
// `;

// const SearchInput = styled.input`
// 	width: auto;
// 	border: none;
// 	padding-left: 0.5rem;
// 	background-color: transparent;
// 	&:focus {
// 		outline: none;
// 	}
// `;

// const SearchBtn = styled.button`
// 	border: none;
// 	background-color: transparent;
// 	display: flex;
// 	align-items: center;
// 	svg {
// 		height: 1.25rem;
// 		width: 1.25rem;
// 	}
// `;

const NavBar = () => {
	const user = useRecoilValue(userState);
	const { picture, login } = user;
	console.log(user);
	return (
		<OuterContainer>
			<Container>
				<Logo />
				<MenuContainer>
					<MenuLink to="/">首頁</MenuLink>
					<MenuLink to="/event-create">舉辦活動</MenuLink>
					<MenuLink to="/knowledge">知識加值</MenuLink>
				</MenuContainer>
				<RightNav>
					{/* <SearchContainer>
					<SearchInput placeholder="Search..." />
					<SearchBtn>
						<SearchIcon />
					</SearchBtn>
				</SearchContainer> */}
					<UserBtn to={login ? "/user" : "/login"}>
						{login ? (
							<UserImg src={picture} alt={user.name} />
						) : (
							<FaUserCircle />
						)}
					</UserBtn>
				</RightNav>
			</Container>
		</OuterContainer>
	);
};

export default NavBar;
