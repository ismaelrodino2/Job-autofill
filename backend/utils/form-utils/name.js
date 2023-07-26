const makeOperation = require("../findInput");

async function Names(pageInstance) {
  //FULLNAME

  const targetValues = ["fullname", "full_name", "full-name", "fullName", "inputName", "inputFullName"];

  const inputElement = await makeOperation(targetValues, pageInstance);

  if (inputElement) {
    // Input element found, do something with it
    // For example, you can click or type in the input field
    await inputElement.click();
    await inputElement.type(process.env.FULL_NAME);
  } else {
    //IF DON'T FIND FULLNAME

    //TRY TO FIND FIRST AND LAST NAME

    const targetValues1 = [
      "firstName",
      'FirstName',
      "name",
      "first-name",
      "firstname",
      "first_name",
      "inputFirstName",
      "First Name",
      "mp_first_name"
    ];

    const targetValues2 = ["lastName", "last-name", "lastname", "last_name", "inputLastName", "LastName", "Last Name", "edit-mp-last-name"];

    const inputElement = await makeOperation(targetValues1, pageInstance);
    const inputElement2 = await makeOperation(targetValues2, pageInstance);

    if (inputElement) {
      await inputElement.click();
      await inputElement.type(process.env.FIRST_NAME);

      if (inputElement2) {
        await inputElement2.click();
        await inputElement2.type(process.env.LAST_NAME);
      }
    } else {
      console.log("Input name element not found.");
    }
  }
}

module.exports = Names;
