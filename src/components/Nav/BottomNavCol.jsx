import { Link } from "react-router-dom";
function BottomNavCol(prop){
    const col={
        gap: '24px',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        backgroundColor: 'rgba(30, 30, 30, 1)'
    };
    const row={
        color: 'rgba(217, 217, 217, 1)',
        fontSize: '18px',
        fontWeight: '700',
        textDecoration: 'none'
    };
    return(<div style={col}>
        <Link to="/" style={row}>{prop.text1}</Link>
        <Link to="/" style={row}>{prop.text2}</Link>
        <Link to="/" style={row}>{prop.text3}</Link>
        <Link to="/" style={row}>{prop.text4}</Link>
    </div>
    )
}
export default BottomNavCol;