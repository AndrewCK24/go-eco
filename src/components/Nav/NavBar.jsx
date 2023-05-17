import { Link } from "react-router-dom";
function NavBar(){
    const Nav={
        gap: '40px',
        top: '2.5%',
        width: '100%',
        display: 'flex',
        position: 'absolute'
    };
    const text={
        color: 'var(0, 0, 0, 0.4000000059604645)',
        fontSize: 'xx-large',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative'
    };
    const LogIn={
        display: 'flex',
        width:'5%',
        height: 'auto',
        right: '0%',
        position: 'absolute'
    };
    return(
        <div style={Nav}>
        <div><img src="/assets/LOGO_GOECO.png" /></div>
        <Link to="/" style={text}>Home</Link>
        <Link to="/EventCreatePage" style={text}>Proposals</Link>
        <Link to="/" style={text}>Contacts</Link>
        <Link to="/LogInPage" style={LogIn}><img src="/assets/personelIcon.svg" /></Link>
        </div>
    )
}
export default NavBar;