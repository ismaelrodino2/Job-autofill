const makeOperation = async (targetValues, pageInstance) => {//checks the input attributes to  match the exactly targetvalue
  async function findInputWithNameAttributeValue(inputElements, targetValue) {
    //get all the attribute names that match with the targetValue
    const matchingInputs = [];
    for (const input of inputElements) {
      const attributes = await input.evaluate((node) => {
        return Array.from(node.attributes).map((attr) => ({
          name: attr.name,
          value: attr.value,
        }));
      });
      for (const attribute of attributes) {
        if (attribute.value === targetValue) {
          matchingInputs.push(attribute.name);
        }
      }
    }
    return matchingInputs;
  }

  const inputElements = await pageInstance.$$("input");

  let matchingNames = [];
  for (const targetValue of targetValues) {
    const names = await findInputWithNameAttributeValue(
      inputElements,
      targetValue
    );
    matchingNames = [...matchingNames, ...names];
  }

  // Generate a dynamic query selector based on the number of target values
  
  const dynamicSelector = targetValues
    .map(
      (value) =>
        `input[${matchingNames[0]}="${value}"]`
    )
    .join(", ");

  const inputElement = await pageInstance.$(dynamicSelector);
  return inputElement;
};

module.exports = makeOperation;
