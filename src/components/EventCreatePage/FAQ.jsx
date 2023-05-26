import styled from "@emotion/styled";
import Faq from "react-faq-component";

const FAQContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const data = {
    rows: [
        {
            title: "Is there a time limit for fundraising?",
            content: "textArea1"
        },
        {
            title: "Is there a limit to fundraising goals?",
            content: "textArea2"
        },
        {
            title: "Do I need to pay to start a project?",
            content: "textArea3"
        },
        {
            title: "The fundraising project I launched is successful,when will I get the sponsorship money?",
            content: "textArea4"
        }]
}
const styles = {
    rowTitleTextSize: "medium",
    rowContentTextSize:  "medium",
    rowContentPaddingTop: "1rem",
    rowContentPaddingBottom: "1rem",
    rowContentPaddingLeft: "1rem;",
    rowContentPaddingRight: "1rem",
};
  
 const FAQ = () =>{
    return( 
        <FAQContainer>
            <Faq data={data} styles={styles}/>
        </FAQContainer>
    )
 }
 export default FAQ;