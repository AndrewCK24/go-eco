import { Link } from "react-router-dom";
import styled from "@emotion/styled";

import { ReactComponent as LogoIcon } from "../icons/favicon.svg";

const Container = styled(Link)`
	svg {
		/* width: 20vw; */
		max-width: 12rem;
		height: 2.5rem;
	}
`;

const Logo = () => {
	return (
		<Container to="/">
			<LogoIcon />
		</Container>
	);
};

export default Logo;
