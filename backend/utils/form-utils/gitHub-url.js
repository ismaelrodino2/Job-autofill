const makeOperationInclude = require("../findInputInclude");

async function GithubUrl(pageInstance) {

  const targetValues = [
    "github",
  ];
  try {
    const inputElement = await makeOperationInclude(targetValues, pageInstance)
    if (inputElement) {
      // Input element found, do something with it
      // For example, you can click or type in the input field
      await inputElement.click();
      await inputElement.type(process.env.GITHUB_URL);
    } else {
      console.log("Input github element not found.");
    }
  } catch(err) {
    console.log(err);
  }
}

module.exports = GithubUrl;