const makeOperation = require("../findInput");

async function Email(pageInstance) {

  //EMAIL
  const targetValues1 = [
    "Email",
    "email",
    "E-mail",
    "e-mail",
    "inputEmail"
  ];
  try {
    const inputElement = await makeOperation(targetValues1, pageInstance)
    if (inputElement) {
      // Input element found, do something with it
      // For example, you can click or type in the input field
      await inputElement.click();
      await inputElement.type(process.env.EMAIL);
    } else {
      console.log("Input email element not found.");
    }
  } catch(err) {
    console.log(err);
  }

  //CONFIRM EMAIL
    //EMAIL
    const targetValues2 = [
      "emailconfirmation",
      "email confirmation",
      "email Confirmation",
      "emailConfirmation",
      "confirm-email-input",
      "confirm-email",
      "confirmemail",
      "confirm email",
    ];
    try {
      const inputElement = await makeOperation(targetValues2, pageInstance)
      if (inputElement) {
        // Input element found, do something with it
        // For example, you can click or type in the input field
        await inputElement.click();
        await inputElement.type(process.env.EMAIL);
      } else {
        console.log("Input email element not found.");
      }
    } catch(err) {
      console.log(err);
    }
}

module.exports = Email;