import styled from "@emotion/styled";

import Logo from "./Logo";

const OuterContainer = styled.footer`
	width: 100%;
	height: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--bg-black);
`;

const FooterContainer = styled.div`
	width: 90%;
	grid-row: 2 / 3;
	display: grid;
	grid-gap: 1rem;
	grid-template-columns: 2fr 1fr;
	grid-template-rows: 1fr auto;
	font-size: 1rem;
	overflow: hidden;
`;

const LeftFooter = styled.div`
	padding: 1rem 0;
	grid-column: 1 / 2;
	grid-row: 1 / 2;
`;

const LeftFooterText = styled.div`
	color: rgba(255, 255, 255, 1);
	font-weight: 700;
`;

// const RightFooter = styled.div`
// 	padding: 1rem 0;
// 	grid-column: 2 / 3;
// 	grid-row: 1 / 2;
// 	display: grid;
// `;

const RightFooterRow = styled.div`
	color: rgba(217, 217, 217, 1);
	font-weight: 700;
	text-decoration: none;
`;

const FooterText = styled.div`
	padding: 1rem 0;
	grid-column: 1 / 3;
	grid-row: 2 / 3;
	color: rgba(217, 217, 217, 1);
	font-weight: 700;
`;

const Footer = () => {
	return (
		<OuterContainer>
			<FooterContainer>
				<LeftFooter>
					<Logo />
					<LeftFooterText>
						The earth is a fine place
						<br />
						and worth fighting for.
					</LeftFooterText>
				</LeftFooter>
				<FooterText>2023 all Right Reserved Term of use GO ECO</FooterText>
			</FooterContainer>
		</OuterContainer>
	);
};

export default Footer;
