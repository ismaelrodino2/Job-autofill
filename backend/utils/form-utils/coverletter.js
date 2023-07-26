const makeOperationInclude = require("../findInputInclude");

async function CoverLetter(pageInstance) {
  const targetValues = [
    "coverLetter",
    "cover_letter",
    "cover letter",
    "coverletter",
    "cover-letter",
    "Write your letter…",
    "Add a cover letter or anything else you want to share."
  ];
  try {
    const inputElement = await makeOperationInclude(
      targetValues,
      pageInstance
    );
    //try to find textarea
    if (inputElement) {
      await inputElement.click();
      await inputElement.type(process.env.COVER_LETTER);
    } else {
      console.log("Input element not found.");
    }
  } catch(err) {
    console.log(err);
  }
}

module.exports = CoverLetter;
