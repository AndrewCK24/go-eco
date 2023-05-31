import styled from "@emotion/styled";
import { Link } from "react-router-dom";
const HeroContainer = styled.section`
	width: 90%;
	display: grid;
	grid-template-columns: 1fr auto;
	border-radius: 1.5rem;
	background-color: var(--bg-green-main);
`;

const HeroLeft = styled.div`
	margin: 5%;
	display: grid;
	grid-template-rows: 2fr 1fr;
`;

const HeroTitle = styled.div`
	display: flex;
	align-items: flex-end;
	font-size: 4rem;
	font-weight: 700;
`;

const HeroFigureContainer = styled.div`
	display: grid;
	grid-template-columns: auto 1fr;
`;

const HeroFigure = styled.div`
	padding: 0 1.5rem 0 0;
	display: grid;
	grid-template-rows: 1fr auto;
`;

const HeroFigureNumber = styled.div`
	display: flex;
	align-items: flex-end;
	font-size: 2.5rem;
	font-weight: 700;
`;

const HeroFigureTitle = styled.div`
	font-size: 1.25rem;
`;

const HeroRight = styled.div`
	background-image: url("../public/assets/mainBlockBackGround.png");
	background-size: 75%;
	background-repeat: no-repeat;
	background-position: bottom;
	display: flex;
	align-items: flex-end;
	img {
		height: 80%;
	}
`;
const Hero = () => (
	<HeroContainer>
		<HeroLeft>
			<HeroTitle>Now’s the time to do something for our planet</HeroTitle>
			<HeroFigureContainer>
				<HeroFigure>
					<HeroFigureNumber>500+</HeroFigureNumber>
					<HeroFigureTitle>Beach cleanup</HeroFigureTitle>
				</HeroFigure>
				<HeroFigure>
					<HeroFigureNumber>1000+</HeroFigureNumber>
					<HeroFigureTitle>Eco activities</HeroFigureTitle>
				</HeroFigure>
			</HeroFigureContainer>
		</HeroLeft>
		<HeroRight>
			<Link to="/userpage">
			<img src="../public/assets/potPlant.png" alt="PotPlant" />
			</Link>
		</HeroRight>
	</HeroContainer>
);

export default Hero;
