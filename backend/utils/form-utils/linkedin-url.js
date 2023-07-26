const makeOperationInclude = require("../findInputInclude");

async function LinkedinUrl(pageInstance) {

  const targetValues = [
    "linkedin",
  ];
  try {
    const inputElement = await makeOperationInclude(targetValues, pageInstance)
    if (inputElement) {
      // Input element found, do something with it
      // For example, you can click or type in the input field
      await inputElement.click();
      await inputElement.type(process.env.LINKEDIN);
    } else {
      console.log("Input linkedin element not found.");
    }
  } catch(err) {
    console.log(err);
  }
}

module.exports = LinkedinUrl;
