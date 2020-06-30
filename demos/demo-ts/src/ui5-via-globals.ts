// Accessing UI5 classes with global namespace. (NO AMD)
const toolTipInstance = new sap.ui.core.TooltipBase("myID", {
  atPosition: 666,
});
// Inherited instance methods calls.
toolTipInstance.addStyleClass("bamba");

// Inherited instance method from indirect ancestor
toolTipInstance.addCustomData(null);
