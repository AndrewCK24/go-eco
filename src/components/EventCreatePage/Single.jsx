import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Text1 = styled.div`
    display: 'flex';
    font-size: '2rem';
    font-weight: '700';
    color: 'rgba(0, 0, 0, 1)';
`;
   
const Text2 = styled.div`
    display: 'flex';
    font-size: '1.5rem';
    font-weight: '400;
    color: 'rgba(0, 0, 0, 1)';
`;

function Single(){
    const style={
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '1.5rem',
        backgroundColor: ' rgba(179, 230, 193, 0.5)',
        textDecoration: 'none'
    };
    return(
    <Link to="/EventCreatePage/ProposalPage" style={style}>
        <Text1>Single activity</Text1>
        <Text2>For only one time</Text2>
    </Link>
    )
}
export default Single;