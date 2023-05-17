import { Link } from "react-router-dom";
function Longterm(){
    const style={
        width: '100%',
        display: 'flex',
        height: '231.52268981933594px',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'hidden',
        borderRadius: '15px',
        backgroundColor: 'rgba(180, 221, 231, 0.5)',
        textDecoration: 'none'
    };
    const text1={
        top: '30%',
        color: 'rgba(0, 0, 0, 1)',
        position: 'relative',
        display: 'flex',
        fontSize: '32px',
        fontWeight: '700'
    };
    const text2={
        top: '35%',
        color: 'rgba(0, 0, 0, 1)',
        position: 'relative',
        display: 'flex',
        fontSize: '24px',
        fontWeight: '400'
    };
    return(<Link to="/EventCreatePage/ProposalPage" style={style}>  
        <div style={text1}>Longterm project</div>
        <div style={text2}>For continuous</div>
    </Link>
    )  
}
export default Longterm;