import { TypedJSONModel } from "./model/model";

const Data = {
  company: {
    name: "Example Corp",
    address: {
      street: "Example Street",
      houseNumber: 123,
      city: "Example City",
    },
    employees: [
      { id: 1, name: "Alice", position: "Developer" },
      { id: 2, name: "Bob", position: "Designer" },
    ],
  },
};

const model = new TypedJSONModel(Data);
const companyContext = model.createBindingContext("/company");
const addressContext = model.createBindingContext("/company/address");

const street = addressContext.getProperty("city");
const houseNumber = addressContext.getProperty("houseNumber");
const houseNumber2 = model.getProperty("/company/address/houseNumber");
const houseNumber3 = model.getProperty("houseNumber", addressContext);

const employees = model.getProperty("/company/employees");
const employees2 = model.getProperty("employees", companyContext);

model.setProperty("/company/address/city", "Some City"); // oValue must be a string
model.setProperty("/company/address/houseNumber", 123); // oValue must be a number
model.setProperty("street", "some street", addressContext); // oValue must be a string
model.getProperty("street", addressContext);
