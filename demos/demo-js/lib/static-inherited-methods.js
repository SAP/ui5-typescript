sap.ui.define(
  ["sap/ui/core/message/MessageManager"],
  /**
   * @param {typeof sap.ui.core.message.MessageManager} MessageManager
   */
  function(MessageManager) {
    // "hasListener" comes from the parent class of "MessageManager"
    MessageManager.isA({}, "");
  }
);
