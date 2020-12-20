sap.ui.define(
  ["sap/ui/core/message/MessageManager"],
  function (MessageManager: typeof sap.ui.core.message.MessageManager) {
    // "hasListener" comes from the parent class of "MessageManager"
    MessageManager.isA({}, "");
  }
);
