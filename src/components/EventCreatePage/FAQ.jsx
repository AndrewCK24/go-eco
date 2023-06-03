import Faq from "react-faq-component";

const data = {
	rows: [
		{
			title: "Is there a time limit for fundraising?",
			content: "Fundraising activities typically do not have a specific time limit imposed by any regulatory or legal requirements. However, the duration of a fundraising campaign or effort can vary depending on the specific goals, circumstances, and strategies of the organization or individuals involved.",
		},
		{
			title: "Is there a limit to fundraising goals?",
			content: "There is no inherent limit to fundraising goals if it is related to the topic of our page. It is essential to set goals that are realistic, strategic, and aligned with the objectives of the fundraising campaign or initiative.",
		},
		{
			title: "Do I need to pay to start a project?",
			content: "There is no need to pay for starting a project on our page. Feel free to create a proposal and gather people to join!",
		},
		{
			title:
				"The fundraising project I launched is successful,when will I get the sponsorship money?",
			content: "One or two months after the project ends. The related information will be sent to your email. Please remember to check it.",
		},
	],
};

const styles = {
	rowTitleTextSize: "1.75rem",
	rowContentTextSize: "1.2rem",
	rowContentPaddingTop: "1rem",
	rowContentPaddingBottom: "1rem",
};

const FAQ = () => {
	return <Faq data={data} styles={styles} />;
};
export default FAQ;
