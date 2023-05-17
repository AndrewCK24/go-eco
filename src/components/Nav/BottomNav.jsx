import "../../../pageCSS/BottomNav.css"
import BottomNavCol from "./BottomNavCol";
function BottomNav(){
    return(<div className="Footer">
            <div className="LeftFooter">
                <img src="/assets/LOGO_GOECO.png" className="F_Picture" />
                {/* Icons */}
                <div className="LF_Text">
                    The earth is a fine place
                    <br />
                   and worth fighting for.
                </div>
            </div>
            <div className="RightFooter">
                <BottomNavCol text1="Information" text2="About" text3="Product" text4="Blog" />
                <BottomNavCol text1="Company" text2="Community" text3="Career" text4="Our story" />
                <BottomNavCol text1="Contact" text2="Getting Started" text3="Pricing" text4="Resources" />
                <div className="FooterText">
                2023 all Right Reserved Term of use GO ECO
                </div>  
            </div> 
    </div>
    )
}
export default BottomNav;