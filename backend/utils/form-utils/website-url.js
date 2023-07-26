const makeOperation = require("../findInput");
const makeOperationInclude = require("../findInputInclude");

async function WebsiteUrl(pageInstance) {

  const targetValues = [
    "Personalwebsite",
    "Website",
    "website",
    "personal_website",
    "portfolio",
    "urls[Portfolio]",
    "websiteUrl"
  ];

  try {
    const inputElement = await makeOperationInclude(targetValues, pageInstance)
    if (inputElement) {
      // Input element found, do something with it
      // For example, you can click or type in the input field
      await inputElement.click();
      await inputElement.type(process.env.WEBSITE);
    } else {
      console.log("Input website element not found.");
    }
  } catch(err) {
    console.log(err);
  }
}

module.exports = WebsiteUrl;