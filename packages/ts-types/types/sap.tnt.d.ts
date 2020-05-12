/**
 * This is a Beta version of the OpenUI5 TypeScript Signatures.
 * Significant changes may occur in future versions,
 * including potential breaking changes.
 */
// For Library Version: 1.60.14

declare namespace sap {
  /**
   * SAPUI5 library with controls specialized for administrative applications.
   */
  namespace tnt {
    interface InfoLabelOpts extends sap.ui.core.ControlOpts {
      /**
       * Specifies the text inside the `InfoLabel` control.
       */
      text?: string;

      /**
       * Specifies the type of the `InfoLabel` paddings - loose or narrow. **Note:** By default the padding is
       * loose. It is recommended to use narrow (smaller) paddings for numeric texts.
       */
      renderMode?: sap.tnt.RenderMode;

      /**
       * Specifies the fill and text color of the control. Accepts a digit as a value. You can choose from 9 predefined
       * background and text color combinations. The color schemes are non-semantic, you can select them according
       * to your own preferences. The default `colorScheme` is 7.
       */
      colorScheme?: number;

      /**
       * Specifies the width of the `InfoLabel` control. By default, the `InfoLabel` control has the width of
       * the content. Set this property to restrict the width to a custom value.
       */
      width?: sap.ui.core.CSSSize;

      /**
       * Determines if the `InfoLabel` is in `displayOnly` mode. When set to `true` the control size adjusts to
       * fit other controls, for example non-editable `Forms`.
       */
      displayOnly?: boolean;

      /**
       * Available options for the text direction are LTR and RTL. By default the control inherits the text direction
       * from its parent control.
       */
      textDirection?: sap.ui.core.TextDirection;
    }

    interface NavigationListOpts extends sap.ui.core.ControlOpts {
      /**
       * Specifies the width of the control.
       */
      width?: sap.ui.core.CSSSize;

      /**
       * Specifies if the control is in expanded or collapsed mode.
       */
      expanded?: boolean;

      /**
       * Fired when an item is selected.
       */
      itemSelect?: Function;

      /**
       * The items displayed in the list.
       */
      items?: sap.tnt.NavigationListItem[] | sap.tnt.NavigationListItem;

      /**
       * Association to controls / IDs, which describe this control (see WAI-ARIA attribute aria-describedby).
       */
      ariaDescribedBy?: sap.ui.core.Control[] | string[];

      /**
       * Association to controls / IDs, which label this control (see WAI-ARIA attribute aria-labelledby).
       */
      ariaLabelledBy?: sap.ui.core.Control[] | string[];

      /**
       * @SINCE 1.52.0
       *
       * The currently selected `NavigationListItem`.
       */
      selectedItem?: sap.tnt.NavigationListItem | string;
    }

    interface NavigationListItemOpts extends sap.ui.core.ItemOpts {
      /**
       * Specifies the icon for the item.
       */
      icon?: sap.ui.core.URI;

      /**
       * Specifies if the item is expanded.
       */
      expanded?: boolean;

      /**
       * Specifies if the item has an expander.
       */
      hasExpander?: boolean;

      /**
       * @SINCE 1.52
       *
       * Specifies if the item should be shown.
       */
      visible?: boolean;

      /**
       * Fired when this item is selected.
       */
      select?: Function;

      /**
       * The sub items.
       */
      items?: sap.tnt.NavigationListItem[] | sap.tnt.NavigationListItem;
    }

    interface SideNavigationOpts extends sap.ui.core.ControlOpts {
      /**
       * Specifies if the control is expanded.
       */
      expanded?: boolean;

      /**
       * Fired when an item is selected.
       */
      itemSelect?: Function;

      /**
       * Defines the content inside the flexible part.
       */
      item?: sap.tnt.NavigationList;

      /**
       * Defines the content inside the fixed part.
       */
      fixedItem?: sap.tnt.NavigationList;

      /**
       * Defines the content inside the footer.
       */
      footer?: sap.tnt.NavigationList;

      /**
       * @SINCE 1.52.0
       *
       * The selected `NavigationListItem`.
       */
      selectedItem?: sap.tnt.NavigationListItem | string;
    }

    interface ToolHeaderOpts extends sap.m.OverflowToolbarOpts {}

    interface ToolHeaderUtilitySeparatorOpts extends sap.ui.core.ControlOpts {}

    interface ToolPageOpts extends sap.ui.core.ControlOpts {
      /**
       * Indicates if the side area is expanded. Overrides the expanded property of the sideContent aggregation.
       */
      sideExpanded?: boolean;

      /**
       * The control to appear in the header area.
       */
      header?: sap.tnt.ToolHeader;

      /**
       * The side menu of the layout.
       */
      sideContent?: sap.tnt.SideNavigation;

      /**
       * The content section.
       */
      mainContents?: sap.ui.core.Control[] | sap.ui.core.Control;
    }
    /**
     * @SINCE 1.54
     *
     * The `InfoLabel` is a small non-interactive control which contains text information and non-semantic color
     * chosen from a list of predefined color schemes. It serves the purpose to attract the user attention to
     * some piece of information (state, quantity, condition, etc.).
     *
     * Overview:
     *
     * The control visualizes text information without user interaction. The text inside the control is always
     * in upper case. It can have smaller or larger side paddings which can be specified by the `renderMode`
     * property. The text-background color pair can be changed by setting a digit between 1 and 9 that corresponds
     * to the 9 predefined color combinations of the `colorScheme` property. The control is designed to be vertically
     * aligned with UI5 Input and Button control families. When using `InfoLabel` in non-editable `Forms`, `Tables`,
     * etc., set `displayOnly=true` for best visual results.
     *
     * Usage Guidelines:
     * 	 - If the text is longer than the width of the control, it doesn’t wrap. Instead, it’s represented as
     * 			ellipsis.
     * 	 - When truncated, the full text in the control is not visible. Therefore, it’s recommended to make
     * 			more space for longer items to be fully displayed.
     * 	 - Colors are not semantic and have no visual representation in sap_belize_hcb and sap_belize_hcw themes.
     *
     * 	 - The control shows plain text only, formatting is not visualized.
     */
    class InfoLabel extends sap.ui.core.Control {
      /**
       * Constructor for a new `InfoLabel`.
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
        mSettings?: InfoLabelOpts
      );

      /**
       * Binds property {@link #getText text} to model data.
       *
       * See {@link sap.ui.base.ManagedObject#bindProperty ManagedObject.bindProperty} for a detailed description
       * of the possible properties of `oBindingInfo`
       */
      bindText(
        /**
         * The binding information
         */
        oBindingInfo: object
      ): sap.tnt.InfoLabel;
      /**
       * Creates a new subclass of class sap.tnt.InfoLabel with name `sClassName` and enriches it with the information
       * contained in `oClassInfo`.
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
       * Gets current value of property {@link #getColorScheme colorScheme}.
       *
       * Specifies the fill and text color of the control. Accepts a digit as a value. You can choose from 9 predefined
       * background and text color combinations. The color schemes are non-semantic, you can select them according
       * to your own preferences. The default `colorScheme` is 7.
       *
       * Default value is `7`.
       */
      getColorScheme(): number;
      /**
       * Gets current value of property {@link #getDisplayOnly displayOnly}.
       *
       * Determines if the `InfoLabel` is in `displayOnly` mode. When set to `true` the control size adjusts to
       * fit other controls, for example non-editable `Forms`.
       *
       * Default value is `false`.
       */
      getDisplayOnly(): boolean;
      /**
       * Returns a metadata object for class sap.tnt.InfoLabel.
       */
      // @ts-ignore
      static getMetadata(): sap.ui.base.Metadata;
      /**
       * Gets current value of property {@link #getRenderMode renderMode}.
       *
       * Specifies the type of the `InfoLabel` paddings - loose or narrow. **Note:** By default the padding is
       * loose. It is recommended to use narrow (smaller) paddings for numeric texts.
       *
       * Default value is `Loose`.
       */
      getRenderMode(): sap.tnt.RenderMode;
      /**
       * Gets current value of property {@link #getText text}.
       *
       * Specifies the text inside the `InfoLabel` control.
       *
       * Default value is `empty string`.
       */
      getText(): string;
      /**
       * Gets current value of property {@link #getTextDirection textDirection}.
       *
       * Available options for the text direction are LTR and RTL. By default the control inherits the text direction
       * from its parent control.
       *
       * Default value is `Inherit`.
       */
      getTextDirection(): sap.ui.core.TextDirection;
      /**
       * Gets current value of property {@link #getWidth width}.
       *
       * Specifies the width of the `InfoLabel` control. By default, the `InfoLabel` control has the width of
       * the content. Set this property to restrict the width to a custom value.
       */
      getWidth(): sap.ui.core.CSSSize;
      /**
       * Sets a new value for property {@link #getColorScheme colorScheme}.
       *
       * Specifies the fill and text color of the control. Accepts a digit as a value. You can choose from 9 predefined
       * background and text color combinations. The color schemes are non-semantic, you can select them according
       * to your own preferences. The default `colorScheme` is 7.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `7`.
       */
      setColorScheme(
        /**
         * New value for property `colorScheme`
         */
        iColorScheme: number
      ): sap.tnt.InfoLabel;
      /**
       * Sets a new value for property {@link #getDisplayOnly displayOnly}.
       *
       * Determines if the `InfoLabel` is in `displayOnly` mode. When set to `true` the control size adjusts to
       * fit other controls, for example non-editable `Forms`.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `false`.
       */
      setDisplayOnly(
        /**
         * New value for property `displayOnly`
         */
        bDisplayOnly: boolean
      ): sap.tnt.InfoLabel;
      /**
       * Sets a new value for property {@link #getRenderMode renderMode}.
       *
       * Specifies the type of the `InfoLabel` paddings - loose or narrow. **Note:** By default the padding is
       * loose. It is recommended to use narrow (smaller) paddings for numeric texts.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `Loose`.
       */
      setRenderMode(
        /**
         * New value for property `renderMode`
         */
        sRenderMode: sap.tnt.RenderMode
      ): sap.tnt.InfoLabel;
      /**
       * Sets a new value for property {@link #getText text}.
       *
       * Specifies the text inside the `InfoLabel` control.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `empty string`.
       */
      setText(
        /**
         * New value for property `text`
         */
        sText: string
      ): sap.tnt.InfoLabel;
      /**
       * Sets a new value for property {@link #getTextDirection textDirection}.
       *
       * Available options for the text direction are LTR and RTL. By default the control inherits the text direction
       * from its parent control.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `Inherit`.
       */
      setTextDirection(
        /**
         * New value for property `textDirection`
         */
        sTextDirection: sap.ui.core.TextDirection
      ): sap.tnt.InfoLabel;
      /**
       * Sets a new value for property {@link #getWidth width}.
       *
       * Specifies the width of the `InfoLabel` control. By default, the `InfoLabel` control has the width of
       * the content. Set this property to restrict the width to a custom value.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setWidth(
        /**
         * New value for property `width`
         */
        sWidth: sap.ui.core.CSSSize
      ): sap.tnt.InfoLabel;
      /**
       * Unbinds property {@link #getText text} from model data.
       */
      unbindText(): sap.tnt.InfoLabel;
    }
    /**
     * @SINCE 1.34
     *
     * The NavigationList control is an interactive control, which provides a choice of different items, ordered
     * as a list.
     */
    class NavigationList extends sap.ui.core.Control {
      /**
       * Constructor for a new NavigationList.
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
        mSettings?: NavigationListOpts
      );

      /**
       * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
       */
      addAriaDescribedBy(
        /**
         * The ariaDescribedBy to add; if empty, nothing is inserted
         */
        vAriaDescribedBy: sap.ui.core.ID | sap.ui.core.Control
      ): sap.tnt.NavigationList;
      /**
       * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
       */
      addAriaLabelledBy(
        /**
         * The ariaLabelledBy to add; if empty, nothing is inserted
         */
        vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control
      ): sap.tnt.NavigationList;
      /**
       * Adds some item to the aggregation {@link #getItems items}.
       */
      addItem(
        /**
         * The item to add; if empty, nothing is inserted
         */
        oItem: sap.tnt.NavigationListItem
      ): sap.tnt.NavigationList;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:itemSelect itemSelect} event of this `sap.tnt.NavigationList`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.tnt.NavigationList` itself.
       *
       * Fired when an item is selected.
       */
      attachItemSelect(
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
         * Context object to call the event handler with. Defaults to this `sap.tnt.NavigationList` itself
         */
        oListener?: object
      ): sap.tnt.NavigationList;
      /**
       * Destroys all the items in the aggregation {@link #getItems items}.
       */
      destroyItems(): sap.tnt.NavigationList;
      /**
       * Detaches event handler `fnFunction` from the {@link #event:itemSelect itemSelect} event of this `sap.tnt.NavigationList`.
       *
       * The passed function and listener object must match the ones used for event registration.
       */
      detachItemSelect(
        /**
         * The function to be called, when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object on which the given function had to be called
         */
        oListener?: object
      ): sap.tnt.NavigationList;
      /**
       * Creates a new subclass of class sap.tnt.NavigationList with name `sClassName` and enriches it with the
       * information contained in `oClassInfo`.
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
       * Fires event {@link #event:itemSelect itemSelect} to attached listeners.
       */
      fireItemSelect(
        /**
         * Parameters to pass along with the event
         */
        mParameters?: {
          /**
           * The selected item.
           */
          item?: sap.ui.core.Item;
        }
      ): sap.tnt.NavigationList;
      /**
       * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaDescribedBy
       * ariaDescribedBy}.
       */
      getAriaDescribedBy(): sap.ui.core.ID[];
      /**
       * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
       * ariaLabelledBy}.
       */
      getAriaLabelledBy(): sap.ui.core.ID[];
      /**
       * Gets current value of property {@link #getExpanded expanded}.
       *
       * Specifies if the control is in expanded or collapsed mode.
       *
       * Default value is `true`.
       */
      getExpanded(): boolean;
      /**
       * Gets content of aggregation {@link #getItems items}.
       *
       * The items displayed in the list.
       */
      getItems(): sap.tnt.NavigationListItem[];
      /**
       * Returns a metadata object for class sap.tnt.NavigationList.
       */
      // @ts-ignore
      static getMetadata(): sap.ui.base.Metadata;
      /**
       * Gets the currently selected `NavigationListItem`.
       */
      getSelectedItem(): sap.tnt.NavigationListItem | null;
      /**
       * Gets current value of property {@link #getWidth width}.
       *
       * Specifies the width of the control.
       */
      getWidth(): sap.ui.core.CSSSize;
      /**
       * Checks for the provided `sap.tnt.NavigationListItem` in the aggregation {@link #getItems items}. and
       * returns its index if found or -1 otherwise.
       */
      indexOfItem(
        /**
         * The item whose index is looked for
         */
        oItem: sap.tnt.NavigationListItem
      ): number;
      /**
       * Inserts a item into the aggregation {@link #getItems items}.
       */
      insertItem(
        /**
         * The item to insert; if empty, nothing is inserted
         */
        oItem: sap.tnt.NavigationListItem,
        /**
         * The `0`-based index the item should be inserted at; for a negative value of `iIndex`, the item is inserted
         * at position 0; for a value greater than the current size of the aggregation, the item is inserted at
         * the last position
         */
        iIndex: number
      ): sap.tnt.NavigationList;
      /**
       * Removes all the controls in the association named {@link #getAriaDescribedBy ariaDescribedBy}.
       */
      removeAllAriaDescribedBy(): sap.ui.core.ID[];
      /**
       * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
       */
      removeAllAriaLabelledBy(): sap.ui.core.ID[];
      /**
       * Removes all the controls from the aggregation {@link #getItems items}.
       *
       * Additionally, it unregisters them from the hosting UIArea.
       */
      removeAllItems(): sap.tnt.NavigationListItem[];
      /**
       * Removes an ariaDescribedBy from the association named {@link #getAriaDescribedBy ariaDescribedBy}.
       */
      removeAriaDescribedBy(
        /**
         * The ariaDescribedBy to be removed or its index or ID
         */
        vAriaDescribedBy: number | sap.ui.core.ID | sap.ui.core.Control
      ): sap.ui.core.ID;
      /**
       * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
       */
      removeAriaLabelledBy(
        /**
         * The ariaLabelledBy to be removed or its index or ID
         */
        vAriaLabelledBy: number | sap.ui.core.ID | sap.ui.core.Control
      ): sap.ui.core.ID;
      /**
       * Removes a item from the aggregation {@link #getItems items}.
       */
      removeItem(
        /**
         * The item to remove or its index or id
         */
        vItem: number | string | sap.tnt.NavigationListItem
      ): sap.tnt.NavigationListItem;
      /**
       * Sets a new value for property {@link #getExpanded expanded}.
       *
       * Specifies if the control is in expanded or collapsed mode.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `true`.
       */
      setExpanded(
        /**
         * New value for property `expanded`
         */
        bExpanded: boolean
      ): sap.tnt.NavigationList;
      /**
       * Sets the association for selectedItem. Set `null` to deselect.
       */
      setSelectedItem(
        /**
         * The control to be set as selected
         */
        selectedItem: string | sap.tnt.NavigationListItem,
        /**
         * If true, the managed object's invalidate method is not called
         */
        suppressInvalidate: boolean
      ): sap.tnt.NavigationList | null;
      /**
       * Sets a new value for property {@link #getWidth width}.
       *
       * Specifies the width of the control.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setWidth(
        /**
         * New value for property `width`
         */
        sWidth: sap.ui.core.CSSSize
      ): sap.tnt.NavigationList;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:itemSelect itemSelect} event of this `sap.tnt.NavigationList`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.tnt.NavigationList` itself.
       *
       * Fired when an item is selected.
       */
      attachItemSelect(
        /**
         * The function to be called when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object to call the event handler with. Defaults to this `sap.tnt.NavigationList` itself
         */
        oListener?: object
      ): sap.tnt.NavigationList;
    }
    /**
     * @SINCE 1.34
     *
     * The NavigationListItem control represents an action, which can be selected by the user. It can provide
     * sub items.
     */
    class NavigationListItem extends sap.ui.core.Item {
      /**
       * Constructor for a new NavigationListItem.
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
        mSettings?: NavigationListItemOpts
      );

      /**
       * Adds some item to the aggregation {@link #getItems items}.
       */
      addItem(
        /**
         * The item to add; if empty, nothing is inserted
         */
        oItem: sap.tnt.NavigationListItem
      ): sap.tnt.NavigationListItem;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.tnt.NavigationListItem`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.tnt.NavigationListItem` itself.
       *
       * Fired when this item is selected.
       */
      attachSelect(
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
         * Context object to call the event handler with. Defaults to this `sap.tnt.NavigationListItem` itself
         */
        oListener?: object
      ): sap.tnt.NavigationListItem;
      /**
       * Destroys all the items in the aggregation {@link #getItems items}.
       */
      destroyItems(): sap.tnt.NavigationListItem;
      /**
       * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.tnt.NavigationListItem`.
       *
       * The passed function and listener object must match the ones used for event registration.
       */
      detachSelect(
        /**
         * The function to be called, when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object on which the given function had to be called
         */
        oListener?: object
      ): sap.tnt.NavigationListItem;
      /**
       * Creates a new subclass of class sap.tnt.NavigationListItem with name `sClassName` and enriches it with
       * the information contained in `oClassInfo`.
       *
       * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Item.extend}.
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
       * Fires event {@link #event:select select} to attached listeners.
       */
      fireSelect(
        /**
         * Parameters to pass along with the event
         */
        mParameters?: {
          /**
           * The selected item.
           */
          item?: sap.ui.core.Item;
        }
      ): sap.tnt.NavigationListItem;
      /**
       * Gets current value of property {@link #getExpanded expanded}.
       *
       * Specifies if the item is expanded.
       *
       * Default value is `true`.
       */
      getExpanded(): boolean;
      /**
       * Gets current value of property {@link #getHasExpander hasExpander}.
       *
       * Specifies if the item has an expander.
       *
       * Default value is `true`.
       */
      getHasExpander(): boolean;
      /**
       * Gets current value of property {@link #getIcon icon}.
       *
       * Specifies the icon for the item.
       *
       * Default value is `empty string`.
       */
      getIcon(): sap.ui.core.URI;
      /**
       * Gets content of aggregation {@link #getItems items}.
       *
       * The sub items.
       */
      getItems(): sap.tnt.NavigationListItem[];
      /**
       * Returns a metadata object for class sap.tnt.NavigationListItem.
       */
      // @ts-ignore
      static getMetadata(): sap.ui.base.Metadata;
      /**
       * @SINCE 1.52
       *
       * Gets current value of property {@link #getVisible visible}.
       *
       * Specifies if the item should be shown.
       *
       * Default value is `true`.
       */
      getVisible(): boolean;
      /**
       * Checks for the provided `sap.tnt.NavigationListItem` in the aggregation {@link #getItems items}. and
       * returns its index if found or -1 otherwise.
       */
      indexOfItem(
        /**
         * The item whose index is looked for
         */
        oItem: sap.tnt.NavigationListItem
      ): number;
      /**
       * Inserts a item into the aggregation {@link #getItems items}.
       */
      insertItem(
        /**
         * The item to insert; if empty, nothing is inserted
         */
        oItem: sap.tnt.NavigationListItem,
        /**
         * The `0`-based index the item should be inserted at; for a negative value of `iIndex`, the item is inserted
         * at position 0; for a value greater than the current size of the aggregation, the item is inserted at
         * the last position
         */
        iIndex: number
      ): sap.tnt.NavigationListItem;
      /**
       * Removes all the controls from the aggregation {@link #getItems items}.
       *
       * Additionally, it unregisters them from the hosting UIArea.
       */
      removeAllItems(): sap.tnt.NavigationListItem[];
      /**
       * Removes a item from the aggregation {@link #getItems items}.
       */
      removeItem(
        /**
         * The item to remove or its index or id
         */
        vItem: number | string | sap.tnt.NavigationListItem
      ): sap.tnt.NavigationListItem;
      /**
       * Sets a new value for property {@link #getExpanded expanded}.
       *
       * Specifies if the item is expanded.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `true`.
       */
      setExpanded(
        /**
         * New value for property `expanded`
         */
        bExpanded: boolean
      ): sap.tnt.NavigationListItem;
      /**
       * Sets a new value for property {@link #getHasExpander hasExpander}.
       *
       * Specifies if the item has an expander.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `true`.
       */
      setHasExpander(
        /**
         * New value for property `hasExpander`
         */
        bHasExpander: boolean
      ): sap.tnt.NavigationListItem;
      /**
       * Sets a new value for property {@link #getIcon icon}.
       *
       * Specifies the icon for the item.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `empty string`.
       */
      setIcon(
        /**
         * New value for property `icon`
         */
        sIcon: sap.ui.core.URI
      ): sap.tnt.NavigationListItem;
      /**
       * @SINCE 1.52
       *
       * Sets a new value for property {@link #getVisible visible}.
       *
       * Specifies if the item should be shown.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `true`.
       */
      setVisible(
        /**
         * New value for property `visible`
         */
        bVisible: boolean
      ): sap.tnt.NavigationListItem;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.tnt.NavigationListItem`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.tnt.NavigationListItem` itself.
       *
       * Fired when this item is selected.
       */
      attachSelect(
        /**
         * The function to be called when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object to call the event handler with. Defaults to this `sap.tnt.NavigationListItem` itself
         */
        oListener?: object
      ): sap.tnt.NavigationListItem;
    }
    /**
     * @SINCE 1.34
     *
     * The SideNavigation control is a container, which consists of flexible and fixed parts on top of each
     * other. Responsive Behavior:
     * 	 - The flexible part adapts its size to the fixed one.
     * 	 - The flexible part has a scrollbar when the content is larger than the available space.  **Note:**
     * 			In order for the SideNavigation to stretch properly, its parent layout control should only be the sap.tnt.ToolPage.
     */
    class SideNavigation extends sap.ui.core.Control {
      /**
       * Constructor for a new SideNavigation.
       *
       * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
       * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
       * of the syntax of the settings object.
       * See:
       * 	{@link fiori:https://experience.sap.com/fiori-design-web/side-navigation/ Side Navigation}
       */
      constructor(
        /**
         * ID for the new control, generated automatically if no ID is given
         */
        sId?: string,
        /**
         * Initial settings for the new control
         */
        mSettings?: SideNavigationOpts
      );

      /**
       * Attaches event handler `fnFunction` to the {@link #event:itemSelect itemSelect} event of this `sap.tnt.SideNavigation`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.tnt.SideNavigation` itself.
       *
       * Fired when an item is selected.
       */
      attachItemSelect(
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
         * Context object to call the event handler with. Defaults to this `sap.tnt.SideNavigation` itself
         */
        oListener?: object
      ): sap.tnt.SideNavigation;
      /**
       * Binds aggregation {@link #getItem item} to model data.
       *
       * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description
       * of the possible properties of `oBindingInfo`.
       */
      bindItem(
        /**
         * The binding information
         */
        oBindingInfo: object
      ): sap.tnt.SideNavigation;
      /**
       * Destroys the fixedItem in the aggregation {@link #getFixedItem fixedItem}.
       */
      destroyFixedItem(): sap.tnt.SideNavigation;
      /**
       * Destroys the footer in the aggregation {@link #getFooter footer}.
       */
      destroyFooter(): sap.tnt.SideNavigation;
      /**
       * Destroys the item in the aggregation {@link #getItem item}.
       */
      destroyItem(): sap.tnt.SideNavigation;
      /**
       * Detaches event handler `fnFunction` from the {@link #event:itemSelect itemSelect} event of this `sap.tnt.SideNavigation`.
       *
       * The passed function and listener object must match the ones used for event registration.
       */
      detachItemSelect(
        /**
         * The function to be called, when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object on which the given function had to be called
         */
        oListener?: object
      ): sap.tnt.SideNavigation;
      /**
       * Creates a new subclass of class sap.tnt.SideNavigation with name `sClassName` and enriches it with the
       * information contained in `oClassInfo`.
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
       * Fires event {@link #event:itemSelect itemSelect} to attached listeners.
       */
      fireItemSelect(
        /**
         * Parameters to pass along with the event
         */
        mParameters?: {
          /**
           * The selected item.
           */
          item?: sap.ui.core.Item;
        }
      ): sap.tnt.SideNavigation;
      /**
       * Gets current value of property {@link #getExpanded expanded}.
       *
       * Specifies if the control is expanded.
       *
       * Default value is `true`.
       */
      getExpanded(): boolean;
      /**
       * Gets content of aggregation {@link #getFixedItem fixedItem}.
       *
       * Defines the content inside the fixed part.
       */
      getFixedItem(): sap.tnt.NavigationList;
      /**
       * Gets content of aggregation {@link #getFooter footer}.
       *
       * Defines the content inside the footer.
       */
      getFooter(): sap.tnt.NavigationList;
      /**
       * Gets content of aggregation {@link #getItem item}.
       *
       * Defines the content inside the flexible part.
       */
      getItem(): sap.tnt.NavigationList;
      /**
       * Returns a metadata object for class sap.tnt.SideNavigation.
       */
      // @ts-ignore
      static getMetadata(): sap.ui.base.Metadata;
      /**
       * @SINCE 1.52.0
       *
       * ID of the element which is the current target of the association {@link #getSelectedItem selectedItem},
       * or `null`.
       */
      getSelectedItem(): sap.ui.core.ID;
      /**
       * Sets if the control is in expanded or collapsed mode.
       */
      setExpanded(
        /**
         * Indication if the SideNavigation is expanded.
         */
        isExpanded: boolean
      ): sap.tnt.SideNavigation;
      /**
       * Sets the aggregated {@link #getFixedItem fixedItem}.
       */
      setFixedItem(
        /**
         * The fixedItem to set
         */
        oFixedItem: sap.tnt.NavigationList
      ): sap.tnt.SideNavigation;
      /**
       * Sets the aggregated {@link #getFooter footer}.
       */
      setFooter(
        /**
         * The footer to set
         */
        oFooter: sap.tnt.NavigationList
      ): sap.tnt.SideNavigation;
      /**
       * Sets the aggregated {@link #getItem item}.
       */
      setItem(
        /**
         * The item to set
         */
        oItem: sap.tnt.NavigationList
      ): sap.tnt.SideNavigation;
      /**
       * Sets the association for selectedItem
       */
      setSelectedItem(
        /**
         * The control to be set as selected
         */
        selectedItem: string | sap.tnt.NavigationListItem,
        /**
         * If true, the managed object's invalidate method is not called
         */
        suppressInvalidate: boolean
      ): sap.tnt.SideNavigation | null;
      /**
       * Unbinds aggregation {@link #getItem item} from model data.
       */
      unbindItem(): sap.tnt.SideNavigation;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:itemSelect itemSelect} event of this `sap.tnt.SideNavigation`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.tnt.SideNavigation` itself.
       *
       * Fired when an item is selected.
       */
      attachItemSelect(
        /**
         * The function to be called when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object to call the event handler with. Defaults to this `sap.tnt.SideNavigation` itself
         */
        oListener?: object
      ): sap.tnt.SideNavigation;
    }
    /**
     * @SINCE 1.34
     *
     * The ToolHeader control is a horizontal container that is most commonly used to display buttons, labels,
     * and other various input controls. Overview: The ToolHeader control is based on {@link sap.m.OverflowToolbar}.
     * It contains clearly structured menus of commands that are available across the various apps within the
     * same tool layout. Usage:
     * 	 - If an app implements side navigation in addition to the tool header menu, the menu icon must be the
     * 			first item on the left-hand side of the tool header.
     * 	 - The app menu and the side navigation must not have any dependencies and must work independently.
     */
    class ToolHeader extends sap.m.OverflowToolbar {
      /**
       * Constructor for a new ToolHeader.
       * See:
       * 	{@link fiori:https://experience.sap.com/fiori-design-web/tool-header/ Tool Header}
       */
      constructor(
        /**
         * ID for the new control, generated automatically if no ID is given
         */
        sId?: string,
        /**
         * Initial settings for the new control
         */
        mSettings?: ToolHeaderOpts
      );

      /**
       * Creates a new subclass of class sap.tnt.ToolHeader with name `sClassName` and enriches it with the information
       * contained in `oClassInfo`.
       *
       * `oClassInfo` might contain the same kind of information as described in {@link sap.m.OverflowToolbar.extend}.
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
       * Returns a metadata object for class sap.tnt.ToolHeader.
       */
      // @ts-ignore
      static getMetadata(): sap.ui.base.Metadata;
    }
    /**
     * @SINCE 1.16
     *
     * The ToolHeaderUtilitySeparator control is used in the sap.tnt.ToolHeader control to specify where the
     * overflow button is placed.
     */
    class ToolHeaderUtilitySeparator extends sap.ui.core.Control {
      /**
       * Constructor for a new ToolHeaderUtilitySeparator.
       *
       * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
       * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
       * of the syntax of the settings object.
       *
       * This class does not have its own settings, but all settings applicable to the base type {@link sap.ui.core.Control#constructor
       * sap.ui.core.Control} can be used.
       */
      constructor(
        /**
         * ID for the new control, generated automatically if no ID is given
         */
        sId?: string,
        /**
         * Initial settings for the new control
         */
        mSettings?: ToolHeaderUtilitySeparatorOpts
      );

      /**
       * Creates a new subclass of class sap.tnt.ToolHeaderUtilitySeparator with name `sClassName` and enriches
       * it with the information contained in `oClassInfo`.
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
       * Returns a metadata object for class sap.tnt.ToolHeaderUtilitySeparator.
       */
      // @ts-ignore
      static getMetadata(): sap.ui.base.Metadata;
    }
    /**
     * @SINCE 1.34
     *
     * The ToolPage is a layout control, used to create a basic tools app that has a header, side navigation
     * and contents area. Overview: The control has three main areas - a header on top, navigation to the side
     * and a content area that can hold any control. The header and side navigation use custom controls - {@link
     * sap.tnt.ToolHeader} and {@link sap.tnt.SideNavigation}. Usage: The main usage of the sap.tnt controls
     * is for scenarios in the tooling or administration space.
     */
    class ToolPage extends sap.ui.core.Control {
      /**
       * Constructor for a new ToolPage.
       *
       * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
       * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
       * of the syntax of the settings object.
       */
      constructor(
        /**
         * ID for the new control, generated automatically if no id is given
         */
        sId?: string,
        /**
         * Initial settings for the new control
         */
        mSettings?: ToolPageOpts
      );

      /**
       * Adds some mainContent to the aggregation {@link #getMainContents mainContents}.
       */
      addMainContent(
        /**
         * The mainContent to add; if empty, nothing is inserted
         */
        oMainContent: sap.ui.core.Control
      ): sap.tnt.ToolPage;
      /**
       * Destroys the header in the aggregation {@link #getHeader header}.
       */
      destroyHeader(): sap.tnt.ToolPage;
      /**
       * Destroys all the mainContents in the aggregation {@link #getMainContents mainContents}.
       */
      destroyMainContents(): sap.tnt.ToolPage;
      /**
       * Destroys the sideContent in the aggregation {@link #getSideContent sideContent}.
       */
      destroySideContent(): sap.tnt.ToolPage;
      /**
       * Creates a new subclass of class sap.tnt.ToolPage with name `sClassName` and enriches it with the information
       * contained in `oClassInfo`.
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
       * Gets content of aggregation {@link #getHeader header}.
       *
       * The control to appear in the header area.
       */
      getHeader(): sap.tnt.ToolHeader;
      /**
       * Gets content of aggregation {@link #getMainContents mainContents}.
       *
       * The content section.
       */
      getMainContents(): sap.ui.core.Control[];
      /**
       * Returns a metadata object for class sap.tnt.ToolPage.
       */
      // @ts-ignore
      static getMetadata(): sap.ui.base.Metadata;
      /**
       * Gets content of aggregation {@link #getSideContent sideContent}.
       *
       * The side menu of the layout.
       */
      getSideContent(): sap.tnt.SideNavigation;
      /**
       * Gets current value of property {@link #getSideExpanded sideExpanded}.
       *
       * Indicates if the side area is expanded. Overrides the expanded property of the sideContent aggregation.
       *
       * Default value is `true`.
       */
      getSideExpanded(): boolean;
      /**
       * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getMainContents mainContents}.
       * and returns its index if found or -1 otherwise.
       */
      indexOfMainContent(
        /**
         * The mainContent whose index is looked for
         */
        oMainContent: sap.ui.core.Control
      ): number;
      /**
       * Inserts a mainContent into the aggregation {@link #getMainContents mainContents}.
       */
      insertMainContent(
        /**
         * The mainContent to insert; if empty, nothing is inserted
         */
        oMainContent: sap.ui.core.Control,
        /**
         * The `0`-based index the mainContent should be inserted at; for a negative value of `iIndex`, the mainContent
         * is inserted at position 0; for a value greater than the current size of the aggregation, the mainContent
         * is inserted at the last position
         */
        iIndex: number
      ): sap.tnt.ToolPage;
      /**
       * Removes all the controls from the aggregation {@link #getMainContents mainContents}.
       *
       * Additionally, it unregisters them from the hosting UIArea.
       */
      removeAllMainContents(): sap.ui.core.Control[];
      /**
       * Removes a mainContent from the aggregation {@link #getMainContents mainContents}.
       */
      removeMainContent(
        /**
         * The mainContent to remove or its index or id
         */
        vMainContent: number | string | sap.ui.core.Control
      ): sap.ui.core.Control;
      /**
       * Sets the aggregated {@link #getHeader header}.
       */
      setHeader(
        /**
         * The header to set
         */
        oHeader: sap.tnt.ToolHeader
      ): sap.tnt.ToolPage;
      /**
       * Sets the aggregated {@link #getSideContent sideContent}.
       */
      setSideContent(
        /**
         * The sideContent to set
         */
        oSideContent: sap.tnt.SideNavigation
      ): sap.tnt.ToolPage;
      /**
       * Sets the expand/collapse state of the SideContent.
       */
      setSideExpanded(
        /**
         * defines whether the SideNavigation is expanded.
         */
        isSideExpanded: boolean
      ): sap.tnt.ToolPage;
      /**
       * Toggles the expand/collapse state of the SideContent.
       */
      toggleSideContentMode(): sap.tnt.ToolPage;
    }
    /**
     * Predefined types of `InfoLabel`
     */
    enum RenderMode {
      /**
       * When type of the content of `InfoLabel` is text padding are loose
       */
      Loose,
      /**
       * When type of the content of `InfoLabel` is numeric paddings are narrow
       */
      Narrow
    }
  }

  interface IUI5DefineDependencyNames {
    "sap/tnt/InfoLabel": undefined;

    "sap/tnt/NavigationList": undefined;

    "sap/tnt/NavigationListItem": undefined;

    "sap/tnt/SideNavigation": undefined;

    "sap/tnt/ToolHeader": undefined;

    "sap/tnt/ToolHeaderUtilitySeparator": undefined;

    "sap/tnt/ToolPage": undefined;
  }
}
