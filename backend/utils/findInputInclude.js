const makeOperationInclude = async (targetValues, pageInstance) => { //checks the input attributes to match the inclusion of targetvalues
  async function findInputWithNameAttributeValue(inputElements, targetValues) {
    const matchingInputs = [];
    const matchingInputsNames = [];

    for (const targetValue of targetValues) {
      for (const input of inputElements) {
        const attributes = await input.evaluate((node) => {
          return Array.from(node.attributes).map((attr) => ({
            name: attr.name,
            value: attr.value,
          }));
        });

        for (const attribute of attributes) {
          if (attribute.value.toLowerCase().includes(targetValue)) {
            console.log('trueeee', attribute.name, attribute.value);
            matchingInputs.push(attribute.name);
            matchingInputsNames.push(attribute.value);
            break; // Break out of the loop once a match is found
          }
        }
      }
      
      // If a match is found, no need to continue checking the remaining targetValues
      if (matchingInputs.length > 0) {
        break;
      }
    }

    return { matchingInputs, matchingInputsNames };
  }

  const inputElements = await pageInstance.$$("input");
  const names = await findInputWithNameAttributeValue(inputElements, targetValues);
  console.log('names', names);

  // Generate a dynamic query selector based on the matching attribute name and value
  const dynamicSelector = targetValues
    .map(() => `input[${names.matchingInputs[0]}="${names.matchingInputsNames[0]}"]`)
    .join(", ");

  const inputElement = await pageInstance.$(dynamicSelector);
  return inputElement;
};

module.exports = makeOperationInclude;
