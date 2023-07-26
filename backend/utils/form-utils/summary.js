const makeOperation = require("../findInput");
const makeOperationTextArea = require("../findTextArea");

async function Summary(pageInstance) {
  const targetValues = ["summary", "Summary"];
  try {
    const inputElement = await makeOperation(targetValues, pageInstance); //try to find input first

    if (inputElement) {
      await inputElement.click();
      await inputElement.type("Summary text");
    } else {
      const inputElement = await makeOperationTextArea(
        targetValues,
        pageInstance
      );
       //try to find textarea
      if (inputElement) {
        await inputElement.click();
        await inputElement.type(process.env.SUMMARY);
      } else {
        console.log("Input element not found.");
      }
    }
  } catch(err) {
    console.log(err);
  }
}

module.exports = Summary;
