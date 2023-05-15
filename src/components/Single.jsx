import { Link } from "react-router-dom";
function Single(){
    return(<Link path="/" className="ECP_GreenBlock">
        <div className="ECP_GBText1">Single activity</div>
        <div className="ECP_GBText2">For only one time</div> 
    </Link>
    )
}
export default Single;