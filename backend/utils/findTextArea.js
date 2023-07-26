const makeOperationTextArea = async (targetValues, pageInstance) => {
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
  
    const inputElements = await pageInstance.$$("textarea");
  
    let matchingNames = [];
    for (const targetValue of targetValues) {
      const names = await findInputWithNameAttributeValue(
        inputElements,
        targetValue
      );
      matchingNames = [...matchingNames, ...names];
    }
  
    console.log("matchingNames", matchingNames, matchingNames[0]);
  
    // Generate a dynamic query selector based on the number of target values
    const dynamicSelector = targetValues
      .map(
        (value) =>
          `textarea[type="text"][${matchingNames[0]}="${value}"]`
      )
      .join(", ");
  
    const inputElement = await pageInstance.$(dynamicSelector);
    return inputElement;
  };
  
  module.exports = makeOperationTextArea;
  