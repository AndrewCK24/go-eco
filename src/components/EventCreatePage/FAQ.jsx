import Faq from "react-faq-component";

const  data = {
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
        }],
}

const styles = {
    rowTitleTextSize: '1.75rem',
    rowContentTextSize: '1.5rem',
    rowContentPaddingTop: '1rem',
    rowContentPaddingBottom: '1rem',
};

const FAQ= () => {
  return(
    <Faq data={data} styles={styles} />
  )
}
 export default FAQ;