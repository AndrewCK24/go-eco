import { useNavigate } from "react-router-dom";
import {
	Card,
	CardContent,
	CardActionArea,
	Typography,
	styled,
} from "@mui/material";
import {
	MdOutlineDateRange,
	MdOutlineAccessTime,
	MdOutlineLocationOn,
	MdPeopleOutline,
} from "react-icons/md";

const StyledInline = styled(Typography)`
	padding-right: 0.25rem;
`;

const EventCard = (props) => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate(`/event/${props.event._id}`);
	};

	return (
		<Card sx={{ maxWidth: 300, minWidth: 240 }}>
			<CardActionArea onClick={() => handleClick()}>
				<CardContent>
					<Typography gutterBottom variant="h6" component="div">
						新月沙灣淨灘
					</Typography>
					<Typography variant="body2" color="text.primary">
						{/* 27字以上裁切掉 */}
						新竹縣新月沙灣淨灘活動是一個旨在呼籲保護海岸環境和加強...
					</Typography>
					<StyledInline display="inline" variant="body2" color="text.secondary">
						<MdOutlineDateRange /> 05/05/2022
					</StyledInline>
					<StyledInline display="inline" variant="body2" color="text.secondary">
						<MdOutlineAccessTime /> 10:00 ~ 12:00
					</StyledInline>
					<StyledInline display="inline" variant="body2" color="text.secondary">
						<MdOutlineLocationOn /> 新竹縣新月沙灣
					</StyledInline>
					<StyledInline display="inline" variant="body2" color="text.secondary">
						<MdPeopleOutline /> 20 / 30
					</StyledInline>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default EventCard;
