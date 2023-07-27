const makeOperation = require("../findInput");
const makeOperationInclude = require("../findInputInclude");

async function Address(pageInstance) {
  const targetValues = [
    "Location",
    "City",
    "location",
    "city",
    "location_autocomplete_label",
    "job_application[location]",
    "streetAddress",
  ];

  try {
    const inputElement = await makeOperationInclude(targetValues, pageInstance);
    if (inputElement) {
      // Input element found, do something with it
      // For example, you can click or type in the input field
      await inputElement.click();
      await inputElement.type(process.env.ADDRESS);
    } else {
      console.log("Input number element not found.");
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = Address;
