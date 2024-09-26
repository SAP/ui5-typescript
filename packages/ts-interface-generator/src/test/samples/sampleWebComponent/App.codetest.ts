import SampleWebComponent from "./SampleWebComponent";

const webcInstance = new SampleWebComponent();

const propertyValue = webcInstance.getSubtext();
const methodValue = webcInstance.somePublicMethod();
const getterValue = webcInstance.somePublicGetter;

console.log(`Property returned: ${propertyValue}`);
console.log(`Method returned: ${methodValue}`);
console.log(`Getter returned: ${getterValue}`);
