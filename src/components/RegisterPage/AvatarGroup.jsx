import styled from "@emotion/styled";

import { Avatar, IconButton } from "@mui/material";
import avatarArr from "../../utils/avatarArr";

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: auto 1fr;
	grid-gap: 0.5rem;
	align-items: center;
`;

const UserImg = styled(Avatar)`
	svg {
		width: 2.25rem;
		height: 2.25rem;
	}
`;

const ButtonGroup = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 0.25rem;
	align-items: stretch;
	justify-content: flex-start;
`;

const AvatarGroup = ({ user, setUser }) => {
	return (
		<Container>
			<UserImg
				alt="Avatar"
				src={user.avatar === 0 ? user.picture : ""}
				sx={{ width: 72, height: 72 }}
			>
				{avatarArr[user.avatar]}
			</UserImg>
			<ButtonGroup>
				{avatarArr.map((item, index) => {
					return (
						<IconButton
							key={index}
							title="user avatar"
							onClick={() => setUser({ ...user, avatar: index })}
							color={index === user.avatar ? "secondary" : "primary"}
							disabled={index === user.avatar}
						>
							{item}
						</IconButton>
					);
				})}
			</ButtonGroup>
		</Container>
	);
};

export default AvatarGroup;
