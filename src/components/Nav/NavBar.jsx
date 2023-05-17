
import "../../../pageCSS/NavBar.css"
import { Link } from "react-router-dom";
function NavBar(){
    return(
        <div className="Nav">
        <div><img src="/assets/LOGO_GOECO.png" /></div>
        <Link to="/" className="text">Home</Link>
        <Link to="/EventCreatePage" className="text">Proposals</Link>
        <Link to="/" className="text">Contacts</Link>
        <Link to="/LogInPage" className="LogIn"><img src="/assets/personelIcon.svg" /></Link>
        </div>
    )
}
export default NavBar;