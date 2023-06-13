import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Container = styled(Link)`
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 1.5rem;
	background-color: ${(prop) =>
		prop.single ? "var(--bg-green-main)" : "var(--bg-blue-main)"};
	text-decoration: none;
`;

const TextContainer = styled.div`
	display: grid;
	grid-template-rows: 1fr 1fr;
	text-align: center;
	padding: 5%;
	color: var(--text-black);
`;

const Text1 = styled.div`
	font-size: 2rem;
	font-weight: 700;
`;

const Text2 = styled.div`
	font-size: 1.5rem;
	font-weight: 400;
`;

const Project = (prop) => {
	return (
		<Container to="/event-create/proposal" single={prop.single}>
			<TextContainer>
				<Text1>{prop.Text1}</Text1>
				<Text2>{prop.Text2}</Text2>
			</TextContainer>
		</Container>
	);
};

export default Project;
