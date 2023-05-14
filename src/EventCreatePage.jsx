import "../pageCSS/EventCreatePage.css"
function EventCreatePage(){
  return(<div className="EventCreatePage">
    <div className="ECP_Container">
      <div className="ECP_Text1">Create your proposal</div>
      <div className="ECP_YellowBlock">
        <div className="ECP_YBLeftText">
            <div className="frame79-text12">
              <div className="frame79-text13">
                <div>Proposal</div>
                <br />
                <div>Make things happen!</div>
              </div>
            </div>
        </div>
        <div className="frame79-frame71">
          <div className="frame79-frame4">
            <div className="frame79-text18">5000+</div>
            <div className="frame79-text20">Successful proposal</div>
          </div>
          <div className="frame79-frame6">
            <div className="frame79-text22"><div>1000k+</div></div>
            <div className="frame79-text24">
              <div>Eco activities</div>
            </div>
          </div>
          <div className="frame79-frame5">
            <div className="frame79-text26">800k+</div>
            <div className="frame79-text28">Active volunteers</div>
          </div>
        </div>
      </div>
      <div className="ECP_2Block">
        <div className="ECP_GreenBlock">
          <div className="ECP_GBText1">Single activity</div>
          <div className="ECP_GBText2">For only one time</div>
        </div>
        <div className="ECP_BlueBlock">
          <div className="ECP_BBText1">Longterm project</div>
          <div className="ECP_BBText2">For continuous</div>
        </div>
      </div>
      <div className="ECP_Text2">FAQ</div>
      <div className="ECP_Text3">
        Is there a time limit for fundraising?
        <br/><br/><br/><br/>
        Is there a limit to fundraising goals?
        <br/><br/><br/><br/>
        Do I need to pay to start a project?
        <br/><br/><br/><br/>
        The fundraising project I launched is successful,when will I get the sponsorship money?
      </div>
    </div>
    <div className="EventCreatePageFooter">
        <div className="ECP_LeftFooter">
          <img src="/assets/LOGO_GOECO.png" className="ECP_Picture" />
          {/* Icons */}
          <div className="ECPLF_Text">
            <div>The earth is a fine place</div>
            <br />
            <div>and worth fighting for.</div> 
          </div>
        </div>
        <div className="ECP_RightFooter">
        <div className="ECP_RightFooterCol">
          <div className="ECP_RightFooterRow"><div>Information</div></div>
          <div className="frame79-text47"><div>About</div></div>
          <div className="frame79-text49"><div>Product</div></div>
          <div className="frame79-text51"><div>Blog</div></div>
        </div>
        <div className="frame79-frame54">
          <div className="frame79-text53"><div>Company</div></div>
          <div className="frame79-text55"><div>Community</div></div>
          <div className="frame79-text57"><div>Career</div></div>
          <div className="frame79-text59"><div>Our story</div></div>
        </div>
        <div className="frame79-frame55">
          <div className="frame79-text61"><div>Contact</div></div>
          <div className="frame79-text63"><div>Getting Started</div></div>
          <div className="frame79-text65"><div>Pricing</div></div>
          <div className="frame79-text67"><div>Resources</div></div>
        </div>
      </div>
      <div className="ECP_FooterText">
        2023 all Right Reserved Term of use GO ECO
      </div>  
      </div>
  </div>
  )
}
export default EventCreatePage;