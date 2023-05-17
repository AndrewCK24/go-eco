import { Link } from "react-router-dom";
function BottomNavCol(prop){
    return(<div className="RightFooterCol">
        <Link path="/" className="RightFooterRow">{prop.text1}</Link>
        <Link path="/" className="RightFooterRow">{prop.text2}</Link>
        <Link path="/" className="RightFooterRow">{prop.text3}</Link>
        <Link path="/" className="RightFooterRow">{prop.text4}</Link>
    </div>
    )
}
export default BottomNavCol;