const makeOperationTextArea = require("../findTextArea");

async function MessageHiringManager(pageInstance) {

  const targetValues = [
    "message",
    "hiring-manager-message-input",
    "Message",
    "Your Message",
    "Additional Comments",
    "Comments for Hiring Manager",
    "Leave a Message",
  ];
  try {
    const inputElement = await makeOperationTextArea(targetValues, pageInstance)
    if (inputElement) {
      // Input element found, do something with it
      // For example, you can click or type in the input field
      await inputElement.click();
      await inputElement.type(process.env.MESSAGE);
    } else {
      console.log("Input message to the hiring manager element not found.");
    }
  } catch(err) {
    console.log(err);
  }
}

module.exports = MessageHiringManager;