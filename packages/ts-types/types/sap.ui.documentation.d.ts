/**
 * This is a Beta version of the OpenUI5 TypeScript Signatures.
 * Significant changes may occur in future versions,
 * including potential breaking changes.
 */
/// <reference path="./sap.f.d.ts" />
/// <reference path="./sap.m.d.ts" />
/// <reference path="./sap.tnt.d.ts" />
/// <reference path="./sap.ui.codeeditor.d.ts" />
/// <reference path="./sap.ui.commons.d.ts" />
/// <reference path="./sap.ui.core.d.ts" />
/// <reference path="./sap.ui.demokit.d.ts" />
/// <reference path="./sap.ui.dt.d.ts" />
/// <reference path="./sap.ui.fl.d.ts" />
/// <reference path="./sap.ui.integration.d.ts" />
/// <reference path="./sap.ui.layout.d.ts" />
/// <reference path="./sap.ui.rta.d.ts" />
/// <reference path="./sap.ui.suite.d.ts" />
/// <reference path="./sap.ui.support.d.ts" />
/// <reference path="./sap.ui.table.d.ts" />
/// <reference path="./sap.ui.unified.d.ts" />
/// <reference path="./sap.ui.ux3.d.ts" />
/// <reference path="./sap.uxap.d.ts" />
// For Library Version: 1.65.1

declare namespace sap {
  namespace ui {
    /**
     * SAPUI5 library with controls specialized for administrative applications.
     */
    namespace documentation {
      namespace sdk {
        namespace controller {
          class ErrorHandler extends sap.ui.base.Object {
            /**
             * Handles application errors by automatically attaching to the model events and displaying errors when
             * needed.
             */
            constructor(
              /**
               * reference to the app's component
               */
              oComponent: sap.ui.core.UIComponent
            );

            /**
             * Creates a new subclass of class sap.ui.documentation.sdk.controller.ErrorHandler with name `sClassName`
             * and enriches it with the information contained in `oClassInfo`.
             *
             * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend}.
             */
            // @ts-ignore
            static extend(
              /**
               * Name of the class being created
               */
              sClassName: string,
              /**
               * Object literal with information about the class
               */
              oClassInfo?: object,
              /**
               * Constructor function for the metadata object; if not given, it defaults to `sap.ui.core.ElementMetadata`
               */
              FNMetaImpl?: Function
            ): Function;
            /**
             * Returns a metadata object for class sap.ui.documentation.sdk.controller.ErrorHandler.
             */
            // @ts-ignore
            static getMetadata(): sap.ui.base.Metadata;
          }
        }
      }
    }
  }

  interface IUI5DefineDependencyNames {
    "sap/ui/documentation/sdk/controller/ErrorHandler": undefined;
  }
}
