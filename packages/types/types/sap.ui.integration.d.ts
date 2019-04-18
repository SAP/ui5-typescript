/// <reference path="./sap.f.d.ts" />
/// <reference path="./sap.m.d.ts" />
/// <reference path="./sap.tnt.d.ts" />
/// <reference path="./sap.ui.codeeditor.d.ts" />
/// <reference path="./sap.ui.commons.d.ts" />
/// <reference path="./sap.ui.core.d.ts" />
/// <reference path="./sap.ui.demokit.d.ts" />
/// <reference path="./sap.ui.documentation.d.ts" />
/// <reference path="./sap.ui.dt.d.ts" />
/// <reference path="./sap.ui.fl.d.ts" />
/// <reference path="./sap.ui.layout.d.ts" />
/// <reference path="./sap.ui.rta.d.ts" />
/// <reference path="./sap.ui.suite.d.ts" />
/// <reference path="./sap.ui.support.d.ts" />
/// <reference path="./sap.ui.table.d.ts" />
/// <reference path="./sap.ui.unified.d.ts" />
/// <reference path="./sap.ui.ux3.d.ts" />
/// <reference path="./sap.uxap.d.ts" />
// For Library Version: 1.64.1

declare namespace sap {
  namespace ui {
    /**
     * SAPUI5 library with controls specialized for SAP Fiori apps.
     */
    namespace integration {
      namespace widgets {
        interface CardOpts extends sap.ui.core.ControlOpts {
          /**
           * The URL of the manifest or an object.
           */
          manifest?: any;

          /**
           * Defines the width of the card.
           */
          width?: sap.ui.core.CSSSize;

          /**
           * Defines the height of the card.
           */
          height?: sap.ui.core.CSSSize;

          /**
           * @EXPERIMENTAL (since 1.64)
           *
           * Fired when an action is triggered on the card.
           */
          action?: Function;

          /**
           * The ID of the host configuration.
           */
          hostConfigurationId?: sap.ui.core.Control | string;
        }
        /**
         * @SINCE 1.62
         *
         * A control that represents a container with a header and content.
         *
         * Overview: Cards are small user interface elements which provide the most important information from an
         * application related to a specific role or task in a compact manner allowing for actions to be executed.
         * Cards can be described as small representations of an application which can be integrated in different
         * systems.
         *
         * The integration card is defined in a declarative way by using a manifest.json allowing it to:
         * 	 - Be easily integrated in an applications
         * 	 - Be easily reused across different applications.
         * 	 - Be easily understandable by other technologies.
         * 	 - Be self-contained. No need for external configuration.
         * 	 - Be easily reconfigured in different application layers (including backend).
         * 	 - Separate the roles of the card developer and the application developer.
         *
         * Card developer role - Describe the card in a manifest.json defining:
         * 	 - Header
         * 	 - Content
         * 	 - Data source
         * 	 - Possible actions
         *
         * Application developer role - Integrate the card into an application defining:
         * 	 - Dimensions of the card inside a layout of choice, using the width and height properties.
         * 	 - Behavior for the described actions in the manifest.json, using the action event.
         *
         * Usage:
         *
         * The "sap.app" type property of the manifest have to be set to "card". The namespace used to define a
         * card is "sap.card". Every card have a type. Which can be one of: List, Analytical, Timeline, Object.
         *
         * Example manifest.json:
         *
         *
         * ```javascript
         *
         *
         * {
         *   "sap.app": {
         *     "type": "card",
         *     ...
         *   },
         *   "sap.ui5": {
         *     ...
         *   },
         *   "sap.card": {
         *     "type": "List",
         *     "header": { ... },
         *     "content": { ... }
         *   }
         * }
         *
         * ```
         *
         *
         * Examples of header sections:
         *
         * The default header type can contain title, subtitle, icon and status.
         * ```javascript
         *
         *
         * {
         *   ...
         *   "sap.card": {
         *     "header": {
         *       "title": "An example title",
         *       "subTitle": "Some subtitle",
         *       "icon": {
         *         "src": "sap-icon://business-objects-experience"
         *       },
         *       "status": {
         *         "text": "5 of 20"
         *       }
         *     },
         *     ...
         *   }
         * }
         *
         *  ```
         *
         *
         * The numeric header type can contain title, subtitle, unitOfMeasurement, details, main indicator and side
         * indicators.
         * ```javascript
         *
         *
         * {
         *   ...
         *   "sap.card": {
         *     "header": {
         *       "type": "Numeric",
         *       "title": "Project Cloud Transformation",
         *       "subTitle": "Revenue",
         *       "unitOfMeasurement": "EUR",
         *       "mainIndicator": {
         *         "number": "44",
         *         "unit": "%",
         *         "trend": "Down",
         *         "state": "Critical"
         *       },
         *       "details": "Some details",
         *       "sideIndicators": [
         *         {
         *           "title": "Target",
         *           "number": "17",
         *           "unit": "%"
         *         },
         *         {
         *           "title": "Deviation",
         *           "number": "5",
         *           "unit": "%"
         *         }
         *       ]
         *     },
         *     ...
         *   }
         * }
         *
         *  ```
         *
         *
         * The content of the card is created based on the card type. Possible card types:
         * 	 - List
         * 	 - Object
         * 	 - Timeline
         * 	 - Analytical
         *
         * List card contains a set of items. "item" property defines the template for all the items of the list.
         * "data" property provides the data. Example:
         * ```javascript
         *
         * {
         *   "sap.app": {
         *     "type": "card"
         *   },
         *   "sap.card": {
         *     "type": "List",
         *     "header": {
         *       ...
         *     },
         *     "content": {
         *       "data": {
         *         "json": [{
         *             "Name": "Comfort Easy",
         *             "Description": "32 GB Digital Assistant with high-resolution color screen",
         *             "Highlight": "Error"
         *           },
         *           {
         *             "Name": "ITelO Vault",
         *             "Description": "Digital Organizer with State-of-the-Art Storage Encryption",
         *             "Highlight": "Warning"
         *           },
         *           {
         *             "Name": "Notebook Professional 15",
         *             "Description": "Notebook Professional 15 description",
         *             "Highlight": "Success"
         *           }
         *         ]
         *       },
         *       "item": {
         *         "title": {
         *           "label": "{{title_label}}",
         *           "value": "{Name}"
         *         },
         *         "description": {
         *           "label": "{{description_label}}",
         *           "value": "{Description}"
         *         },
         *         "highlight": "{Highlight}"
         *       }
         *     }
         *   }
         * }
         * ```
         *
         *
         * Analytical card contains a chart visualization configuration. Supported chart types are Line, StackedBar,
         * StackedColumn, Donut. Example:
         * ```javascript
         *
         *
         * {
         *   "sap.app": {
         *     "type": "card"
         *   },
         *   "sap.card": {
         *     "type": "Analytical",
         *     "header": {
         *       ...
         *     },
         *     "content": {
         *       "chartType": "Line",
         *       "legend": {
         *         "visible": true,
         *         "position": "Bottom",
         *         "alignment": "Left"
         *       },
         *       "plotArea": {
         *         "dataLabel": {
         *           "visible": true
         *         },
         *         "categoryAxisText": {
         *           "visible": false
         *         },
         *         "valueAxisText": {
         *           "visible": false
         *         }
         *       },
         *       "title": {
         *         "text": "Line chart",
         *         "visible": true,
         *         "alignment": "Left"
         *       },
         *       "measureAxis": "valueAxis",
         *       "dimensionAxis": "categoryAxis",
         *       "data": {
         *         "json": {
         *           "list": [
         *             {
         *               "Week": "CW14",
         *               "Revenue": 431000.22,
         *               "Cost": 230000.00,
         *               "Cost1": 24800.63,
         *               "Cost2": 205199.37,
         *               "Cost3": 199999.37,
         *               "Target": 500000.00,
         *               "Budget": 210000.00
         *             },
         *             {
         *               "Week": "CW15",
         *               "Revenue": 494000.30,
         *               "Cost": 238000.00,
         *               "Cost1": 99200.39,
         *               "Cost2": 138799.61,
         *               "Cost3": 200199.37,
         *               "Target": 500000.00,
         *               "Budget": 224000.00
         *             }
         *           ]
         *         },
         *         "path": "/list"
         *       },
         *       "dimensions": [
         *         {
         *           "label": "Weeks",
         *           "value": "{Week}"
         *         }
         *       ],
         *       "measures": [
         *         {
         *           "label": "Revenue",
         *           "value": "{Revenue}"
         *         },
         *         {
         *           "label": "Cost",
         *           "value": "{Cost}"
         *         }
         *       ]
         *     }
         *   }
         * }
         *
         * ```
         *
         *
         * Object card contains information about an object. It is structured in groups. Every group can have a
         * title and items. The items contain display name (label) and value. Example:
         * ```javascript
         *
         *
         * {
         *   "sap.app": {
         *     "type": "card"
         *   },
         *   "sap.card": {
         * 	    "type": "Object",
         *      "header": {
         *        ...
         *      },
         *      "content": {
         *        "groups": [
         *          {
         *            "title": "Group title",
         *            "items": [
         *              {
         *                "label": "Name",
         *                "value": "Ivan"
         *              },
         *              {
         *                "label": "Surname",
         *                "value": "Petrov"
         *              },
         *              {
         *                "label": "Phone",
         *                "value": "+1 1234 1234555"
         *              }
         *            ]
         *          },
         *          {
         *            "title": "Organization",
         *            "items": [
         *              {
         *                "label": "Company Name",
         *                "value": "Sap",
         *                "icon": {
         *                  "src": "../images/Woman_avatar_02.png"
         *                }
         *              }
         *            ]
         *          }
         *        ]
         *      }
         *   }
         * }
         *
         * ```
         *
         *
         * Timeline card contains a set of timeline items. "item" property defines the template for all the items
         * of the timeline. Example:
         * ```javascript
         *
         *
         * {
         *   "sap.app": {
         *     "type": "card"
         *   },
         *   "sap.card": {
         *     "type": "Timeline",
         *     "header": {
         *       ...
         *     },
         *     "content": {
         *       "data": {
         *         "json": [
         *           {
         *             "Title": "Weekly sync: Marketplace / Design Stream",
         *             "Description": "MRR WDF18 C3.2(GLASSBOX)",
         *             "Icon": "sap-icon://appointment-2",
         *             "Time": "10:00 - 10:30"
         *           },
         *           {
         *             "Title": "Video Conference for FLP@SF, S4,Hybris",
         *             "Icon": "sap-icon://my-view",
         *             "Time": "14:00 - 15:30"
         *           },
         *           {
         *             "Title": "Call 'Project Nimbus'",
         *             "Icon": "sap-icon://outgoing-call",
         *             "Time": "16:00 - 16:30"
         *           }
         *         ]
         *       },
         *       "item": {
         *         "dateTime": {
         *           "value": "{Time}"
         *         },
         *         "description" : {
         *           "value": "{Description}"
         *         },
         *         "title": {
         *           "value": "{Title}"
         *         },
         *         "icon": {
         *           "src": "{Icon}"
         *         }
         *       }
         *     }
         *   }
         * }
         *
         * ```
         *
         *
         * Item based cards (Timeline and List) have an additional content property "maxItems" which defines the
         * maximum number of items the card can have.
         *
         * Data handling: In order to add data to the card you can add a data section to the card, header or content.
         * The card will automatically create an unnamed model which then can be used to resolve binding syntaxes
         * inside the card manifest.
         *
         * Static data:
         * ```javascript
         *
         *
         * {
         *   ...
         *   "content": {
         *     "data": {
         *       "json": {
         *         "items": [
         *           {
         *             "Title": "Weekly sync: Marketplace / Design Stream",
         *             "Description": "MRR WDF18 C3.2(GLASSBOX)",
         *             "Icon": "sap-icon://appointment-2",
         *             "Time": "10:00 - 10:30"
         *           },
         *           {
         *             "Title": "Video Conference for FLP@SF, S4,Hybris",
         *             "Icon": "sap-icon://my-view",
         *             "Time": "14:00 - 15:30"
         *           }
         *         ]
         *       },
         *       "path": "/items"
         *     },
         *     ...
         *   }
         * }
         *
         * ```
         *
         *
         * Requesting data:
         * ```javascript
         *
         *
         * {
         *   ...
         *   "content": {
         *     "data": {
         *       "request": {
         *         "url": "/path/to/data"
         *       },
         *       "path": "/items"
         *     },
         *     ...
         *   }
         * }
         *
         * ```
         *
         *
         * Actions: Actions adds behavior to the card. To add a navigation action to the header and to the items
         * you can configure it inside the manifest. Actions have:
         * 	 - Type
         * 	 - Parameters
         * 	 - Enabled flag (true by default)
         *
         * In the example below navigation action is added both to the header and the list items:
         * ```javascript
         *
         *
         * {
         *   "sap.app": {
         *     "type": "card"
         *   },
         *   "sap.card": {
         *     "type": "List",
         *     "header": {
         *       "title": "Request list content Card",
         *       "subTitle": "Card Subtitle",
         *       "icon": {
         *         "src": "sap-icon://accept"
         *       },
         *       "status": "100 of 200",
         *       "actions": [
         *         {
         *           "type": "Navigation",
         *           "parameters": {
         *             "url": "/some/relative/path"
         *           }
         *         }
         *       ]
         *     },
         *     "content": {
         *       "data": {
         *         "request": {
         *           "url": "./cardcontent/someitems_services2.json"
         *         },
         *         "path": "/items"
         *       },
         *       "item": {
         *         "icon": {
         *           "src": "{icon}"
         *         },
         *         "title": {
         *           "value": "{Name}"
         *         },
         *         "description": {
         *           "value": "{Description}"
         *         },
         *         "actions": [
         *           {
         *             "type": "Navigation",
         *             "enabled": "{= ${url}}",
         *             "parameters": {
         *               "url": "{url}"
         *             }
         *           }
         *         ]
         *       }
         *     }
         *   }
         * }
         *
         * ```
         *
         *
         * When to use
         * 	 - When the card have to be reused across applications.
         * 	 - When easy integration and configuration is needed.
         *
         * When not to use
         * 	 - When more header and content flexibility is needed.
         * 	 - When you have to achieve simple card visualization. For such cases, use: {@link sap.f.Card Card}.
         *
         * 	 - When an application model have to be used. For such cases, use: {@link sap.f.Card Card}.
         * 	 - When complex behavior is needed. For such cases, use: {@link sap.f.Card Card}.
         */
        class Card extends sap.ui.core.Control implements sap.f.ICard {
          /**
           * Constructor for a new `Card`.
           *
           * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
           * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
           * of the syntax of the settings object.
           */
          constructor(
            /**
             * ID for the new control, generated automatically if no ID is given
             */
            sId?: string,
            /**
             * Initial settings for the new control
             */
            mSettings?: CardOpts
          );

          /**
           * @EXPERIMENTAL (since 1.64)
           *
           * Attaches event handler `fnFunction` to the {@link #event:action action} event of this `sap.ui.integration.widgets.Card`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ui.integration.widgets.Card` itself.
           *
           * Fired when an action is triggered on the card.
           */
          attachAction(
            /**
             * An application-specific payload object that will be passed to the event handler along with the event
             * object when firing the event
             */
            oData: object,
            /**
             * The function to be called when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object to call the event handler with. Defaults to this `sap.ui.integration.widgets.Card` itself
             */
            oListener?: object
          ): sap.ui.integration.widgets.Card;
          /**
           * @EXPERIMENTAL (since 1.64)
           *
           * Detaches event handler `fnFunction` from the {@link #event:action action} event of this `sap.ui.integration.widgets.Card`.
           *
           * The passed function and listener object must match the ones used for event registration.
           */
          detachAction(
            /**
             * The function to be called, when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object on which the given function had to be called
             */
            oListener?: object
          ): sap.ui.integration.widgets.Card;
          /**
           * Creates a new subclass of class sap.ui.integration.widgets.Card with name `sClassName` and enriches it
           * with the information contained in `oClassInfo`.
           *
           * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
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
           * @EXPERIMENTAL (since 1.64)
           *
           * Fires event {@link #event:action action} to attached listeners.
           */
          fireAction(
            /**
             * Parameters to pass along with the event
             */
            mParameters?: {
              /**
               * The action source.
               */
              actionSource?: sap.ui.core.Control;
              /**
               * The manifest parameters related to the triggered action.
               */
              manifestParameters?: object;
              /**
               * The type of the action.
               */
              type?: any;
            }
          ): sap.ui.integration.widgets.Card;
          /**
           * Implements sap.f.ICard interface.
           */
          getCardContent(): sap.ui.core.Control;
          /**
           * Implements sap.f.ICard interface.
           */
          getCardHeader(): sap.f.cards.IHeader;
          /**
           * Gets current value of property {@link #getHeight height}.
           *
           * Defines the height of the card.
           *
           * Default value is `auto`.
           */
          getHeight(): sap.ui.core.CSSSize;
          /**
           * ID of the element which is the current target of the association {@link #getHostConfigurationId hostConfigurationId},
           * or `null`.
           */
          getHostConfigurationId(): sap.ui.core.ID;
          /**
           * Gets current value of property {@link #getManifest manifest}.
           *
           * The URL of the manifest or an object.
           *
           * Default value is `empty string`.
           */
          getManifest(): any;
          /**
           * Returns a metadata object for class sap.ui.integration.widgets.Card.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.base.Metadata;
          /**
           * Gets current value of property {@link #getWidth width}.
           *
           * Defines the width of the card.
           *
           * Default value is `100%`.
           */
          getWidth(): sap.ui.core.CSSSize;
          /**
           * Sets a new value for property {@link #getHeight height}.
           *
           * Defines the height of the card.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `auto`.
           */
          setHeight(
            /**
             * New value for property `height`
             */
            sHeight: sap.ui.core.CSSSize
          ): sap.ui.integration.widgets.Card;
          /**
           * Sets the associated {@link #getHostConfigurationId hostConfigurationId}.
           */
          setHostConfigurationId(
            /**
             * ID of an element which becomes the new target of this hostConfigurationId association; alternatively,
             * an element instance may be given
             */
            oHostConfigurationId: sap.ui.core.ID | sap.ui.core.Control
          ): sap.ui.integration.widgets.Card;
          /**
           * Setter for card manifest.
           */
          setManifest(
            /**
             * The manifest object or its URL.
             */
            vValue: string | Object
          ): sap.ui.integration.widgets.Card;
          /**
           * Sets a new value for property {@link #getWidth width}.
           *
           * Defines the width of the card.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `100%`.
           */
          setWidth(
            /**
             * New value for property `width`
             */
            sWidth: sap.ui.core.CSSSize
          ): sap.ui.integration.widgets.Card;
          /**
           * @EXPERIMENTAL (since 1.64)
           *
           * Attaches event handler `fnFunction` to the {@link #event:action action} event of this `sap.ui.integration.widgets.Card`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ui.integration.widgets.Card` itself.
           *
           * Fired when an action is triggered on the card.
           */
          attachAction(
            /**
             * The function to be called when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object to call the event handler with. Defaults to this `sap.ui.integration.widgets.Card` itself
             */
            oListener?: object
          ): sap.ui.integration.widgets.Card;
        }
      }
    }
  }

  interface IUI5DefineDependencyNames {
    "sap/ui/integration/widgets/Card": undefined;
  }
}
