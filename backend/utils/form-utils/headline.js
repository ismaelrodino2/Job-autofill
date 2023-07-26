const makeOperation = require("../findInput");
const makeOperationTextArea = require("../findTextArea");

async function Headline(pageInstance) {
  const targetValues = ["headline", "headLine", "Headline", "HeadLine"];
  try {
    const inputElement = await makeOperation(targetValues, pageInstance); //try to find input first

    if (inputElement) {
      await inputElement.click();
      await inputElement.type(process.env.HEADLINE);
    } else {
      const inputElement = await makeOperationTextArea(
        targetValues,
        pageInstance
      );
       //try to find textarea
      if (inputElement) {
        await inputElement.click();
        await inputElement.type(process.env.HEADLINE);
      } else {
        console.log("Input headline element not found.");
      }
    }
  } catch(err) {
    console.log(err);
  }
}

module.exports = Headline;
