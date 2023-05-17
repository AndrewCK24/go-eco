import { Link } from "react-router-dom";
function Single(){
    const style={
        width: '100%',
        height: '231.52268981933594px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'hidden',
        borderRadius: '15px',
        backgroundColor: ' rgba(179, 230, 193, 0.5)',
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
    return(<Link path="/" style={style}>
        <div style={text1}>Single activity</div>
        <div style={text2}>For only one time</div> 
    </Link>
    )
}
export default Single;