/**
 * This is a Beta version of the OpenUI5 TypeScript Signatures.
 * Significant changes may occur in future versions,
 * including potential breaking changes.
 */
// For Library Version: 1.60.14

declare namespace sap {
  namespace ui {
    /**
     * SAPUI5 library with layout controls.
     */
    namespace layout {
      namespace cssgrid {
        /**
         * @SINCE 1.60.0
         *
         * Defines the functions that need to be implemented by a Control which wants to have display:grid behavior
         * via sap.ui.layout.cssgrid.GridLayoutDelegate
         */
        interface IGridConfigurable {
          /**
           * @SINCE 1.60.0
           *
           * The function is used by GridLayoutDelegate to determine on which HTML Elements the display:grid styles
           * should be applied
           */
          getGridDomRefs(): sap.ui.core.Control[] | HTMLElement[];
          /**
           * @SINCE 1.60.0
           *
           * The function is used by GridLayoutDelegate to get the grid layout (display:grid styles) to apply
           */
          getGridLayoutConfiguration(): sap.ui.layout.cssgrid.GridLayoutBase;
        }

        interface CSSGridOpts extends sap.ui.core.ControlOpts {
          /**
           * The width of the control
           */
          width?: sap.ui.core.CSSSize;

          /**
           * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns
           * MDN web docs: grid-template-columns}
           *
           * **Note:** Not supported in IE11, Edge 15.
           */
          gridTemplateColumns?: any;

          /**
           * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows
           * MDN web docs: grid-template-rows}
           *
           * **Note:** Not supported in IE11, Edge 15.
           */
          gridTemplateRows?: any;

          /**
           * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-gap
           * MDN web docs: grid-row-gap}
           *
           * **Note:** Not supported in IE11, Edge 15.
           */
          gridRowGap?: sap.ui.core.CSSSize;

          /**
           * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-gap
           * MDN web docs: grid-column-gap}
           *
           * **Note:** Not supported in IE11, Edge 15.
           */
          gridColumnGap?: sap.ui.core.CSSSize;

          /**
           * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap
           * MDN web docs: grid-gap}
           *
           * **Note:** Not supported in IE11, Edge 15.
           */
          gridGap?: any;

          /**
           * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows
           * MDN web docs: grid-auto-rows}
           *
           * **Note:** Not supported in IE11, Edge 15.
           */
          gridAutoRows?: any;

          /**
           * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns
           * MDN web docs: grid-auto-columns}
           *
           * **Note:** Not supported in IE11, Edge 15.
           */
          gridAutoColumns?: any;

          /**
           * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow
           * MDN web docs: grid-auto-flow}
           *
           * **Note:** Not supported in IE11, Edge 15.
           */
          gridAutoFlow?: sap.ui.layout.cssgrid.CSSGridAutoFlow;

          /**
           * Defines a custom Grid layout for the control. If provided, it will override all of the grid properties.
           */
          customLayout?: sap.ui.layout.cssgrid.GridLayoutBase;

          /**
           * The items contained by the control.
           */
          items?: sap.ui.core.Control[] | sap.ui.core.Control;
        }

        interface GridItemLayoutDataOpts extends sap.ui.core.LayoutDataOpts {
          /**
           * Sets the value for the CSS display:grid item property grid-column-start
           */
          gridColumnStart?: any;

          /**
           * Sets the value for the CSS display:grid item property grid-column-end
           */
          gridColumnEnd?: any;

          /**
           * Sets the value for the CSS display:grid item property grid-row-start
           */
          gridRowStart?: any;

          /**
           * Sets the value for the CSS display:grid item property grid-row-end
           */
          gridRowEnd?: any;

          /**
           * Sets the value for the CSS display:grid item property grid-column
           */
          gridColumn?: any;

          /**
           * Sets the value for the CSS display:grid item property grid-row
           */
          gridRow?: any;
        }
        /**
         * @SINCE 1.60
         *
         * A layout control, used to create full page layouts or user interface elements.
         *
         * Overview:
         *
         * A two-dimensional layout control based on the native-browser CSS display grid which can handle both columns
         * and rows. The control can be used along with {@link sap.m.FlexBox} which is the one-dimensional alternative
         * for layouting.
         *
         * With properties it is possible to define:
         * 	 - columns, rows and their sizes in the grid
         * 	 - vertical and horizontal gaps between the grid items
         * 	 - the flow algorithm when new items are added in the grid
         *
         * The dimensions of the grid items are defined on a `CSSGrid` level. Every item can override its size by
         * specifying how many columns and/or rows it will take in the `CSSGrid`. Every item can override its position
         * by specifying from which column and/or row it will start. The configuration of a single item is done
         * with {@link sap.ui.layout.cssgrid.GridItemLayoutData GridItemLayoutData}.
         *
         * Terminology:
         * 	 - Grid - The container which has all grid settings
         * 	 - Gutters - The gap between the rows and columns
         * 	 - Grid areas - Items that take more than one row and/or column
         * 	 - Grid cells - The items of the Grid
         * 	 - Grid lines - The lines around and between the rows and columns
         * 	 - Grid tracks - The space between any two lines in the grid
         * 	 - "fr" Unit - A special grid unit (short from "fraction") which represents a fraction of the available
         * 			space in the grid
         * 	 - Implicit and Explicit grid - Explicit grid consists of rows and columns defined with `gridTemplateColumns`
         * 			and `gridTemplateRows`. The grid also creates rows and columns on its own when needed. Their dimensions
         * 			are defined with `gridAutoColumns` and `gridAutoRows`.
         *
         * Structure: The `CSSGrid` has the following elements:
         * 	 - `items` - The items of the `CSSGrid`
         * 	 - `customLayout` - An aggregation used to pass the `CSSGrid` configuration. Used for templating.
         *
         * Usage:
         *
         * For general cases, use the `CSSGrid` properties to configure how the layout should look. For Box case
         * (equal sized items), use `customLayout` aggregation with {@link sap.ui.layout.cssgrid.GridBoxLayout GridBoxLayout}
         * For Grids which need different configurations based on available width, use `customLayout` aggregation
         * with {@link sap.ui.layout.cssgrid.GridResponsiveLayout GridResponsiveLayout} To set a specific position
         * to an item or define its dimensions in the grid, pass `layoutData` of type {@link sap.ui.layout.cssgrid.GridItemLayoutData
         * GridItemLayoutData}
         *
         * When to use
         * 	 - If a two-dimensional layout configuration is needed (both columns and rows are defined)
         *
         * When not to use
         * 	 - If the layout needs to be defined only by one dimension (either column or row, not both). Use {@link
         * 			sap.m.FlexBox FlexBox} instead.
         *
         * Responsive behavior:
         * 	 - Fully configurable by the developer. It is possible to create a "breathing" columns layout which
         * 			means columns width will grow/shrink depending on grid size.
         * 	 - It is possible to pass a {@link sap.ui.layout.cssgrid.GridResponsiveLayout GridResponsiveLayout}
         * 			to the `customLayout` aggregation of the `CSSGrid` and configure how it will look in different breakpoints
         * 			(S, M, L, XL).
         *
         * Current Limitations:
         * 	 - No support for IE11.
         * 	 - No support for Edge version 15.
         * 	 - No alignment and ordering
         * 	 - No Named grid areas and lines
         */
        // @ts-ignore - error TS2420: Class 'CSSGrid' incorrectly implements interface 'IGridConfigurable'.Type 'CSSGrid' is missing the following properties from type 'IGridConfigurable': getGridDomRefs, getGridLayoutConfiguration
        class CSSGrid extends sap.ui.core.Control
          implements sap.ui.layout.cssgrid.IGridConfigurable {
          /**
           * Constructor for a new CSSGrid.
           *
           * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
           * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
           * of the syntax of the settings object.
           * See:
           * 	{@link topic:32d4b9c2b981425dbc374d3e9d5d0c2e Grid Controls}
           * 	{@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout MDN web docs: CSS Grid Layout}
           */
          constructor(
            /**
             * ID for the new control, generated automatically if no ID is given
             */
            sId?: string,
            /**
             * Initial settings for the new control
             */
            mSettings?: CSSGridOpts
          );

          /**
           * Adds some item to the aggregation {@link #getItems items}.
           */
          addItem(
            /**
             * The item to add; if empty, nothing is inserted
             */
            oItem: sap.ui.core.Control
          ): sap.ui.layout.cssgrid.CSSGrid;
          /**
           * Destroys the customLayout in the aggregation {@link #getCustomLayout customLayout}.
           */
          destroyCustomLayout(): sap.ui.layout.cssgrid.CSSGrid;
          /**
           * Destroys all the items in the aggregation {@link #getItems items}.
           */
          destroyItems(): sap.ui.layout.cssgrid.CSSGrid;
          /**
           * Creates a new subclass of class sap.ui.layout.cssgrid.CSSGrid with name `sClassName` and enriches it
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
           * Gets content of aggregation {@link #getCustomLayout customLayout}.
           *
           * Defines a custom Grid layout for the control. If provided, it will override all of the grid properties.
           */
          getCustomLayout(): sap.ui.layout.cssgrid.GridLayoutBase;
          /**
           * Gets current value of property {@link #getGridAutoColumns gridAutoColumns}.
           *
           * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns
           * MDN web docs: grid-auto-columns}
           *
           * **Note:** Not supported in IE11, Edge 15.
           *
           * Default value is `empty string`.
           */
          getGridAutoColumns(): any;
          /**
           * Gets current value of property {@link #getGridAutoFlow gridAutoFlow}.
           *
           * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow
           * MDN web docs: grid-auto-flow}
           *
           * **Note:** Not supported in IE11, Edge 15.
           *
           * Default value is `Row`.
           */
          getGridAutoFlow(): sap.ui.layout.cssgrid.CSSGridAutoFlow;
          /**
           * Gets current value of property {@link #getGridAutoRows gridAutoRows}.
           *
           * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows
           * MDN web docs: grid-auto-rows}
           *
           * **Note:** Not supported in IE11, Edge 15.
           *
           * Default value is `empty string`.
           */
          getGridAutoRows(): any;
          /**
           * Gets current value of property {@link #getGridColumnGap gridColumnGap}.
           *
           * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-gap
           * MDN web docs: grid-column-gap}
           *
           * **Note:** Not supported in IE11, Edge 15.
           *
           * Default value is `empty string`.
           */
          getGridColumnGap(): sap.ui.core.CSSSize;
          /**
           * Implements IGridConfigurable interface
           */
          getGridDomRefs(): HTMLElement[];
          /**
           * Gets current value of property {@link #getGridGap gridGap}.
           *
           * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap
           * MDN web docs: grid-gap}
           *
           * **Note:** Not supported in IE11, Edge 15.
           *
           * Default value is `empty string`.
           */
          getGridGap(): any;
          /**
           * Implements IGridConfigurable interface
           */
          getGridLayoutConfiguration(): sap.ui.layout.cssgrid.GridLayoutBase;
          /**
           * Gets current value of property {@link #getGridRowGap gridRowGap}.
           *
           * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-gap
           * MDN web docs: grid-row-gap}
           *
           * **Note:** Not supported in IE11, Edge 15.
           *
           * Default value is `empty string`.
           */
          getGridRowGap(): sap.ui.core.CSSSize;
          /**
           * Gets current value of property {@link #getGridTemplateColumns gridTemplateColumns}.
           *
           * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns
           * MDN web docs: grid-template-columns}
           *
           * **Note:** Not supported in IE11, Edge 15.
           *
           * Default value is `empty string`.
           */
          getGridTemplateColumns(): any;
          /**
           * Gets current value of property {@link #getGridTemplateRows gridTemplateRows}.
           *
           * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows
           * MDN web docs: grid-template-rows}
           *
           * **Note:** Not supported in IE11, Edge 15.
           *
           * Default value is `empty string`.
           */
          getGridTemplateRows(): any;
          /**
           * Gets content of aggregation {@link #getItems items}.
           *
           * The items contained by the control.
           */
          getItems(): sap.ui.core.Control[];
          /**
           * Returns a metadata object for class sap.ui.layout.cssgrid.CSSGrid.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.base.Metadata;
          /**
           * Gets current value of property {@link #getWidth width}.
           *
           * The width of the control
           *
           * Default value is `100%`.
           */
          getWidth(): sap.ui.core.CSSSize;
          /**
           * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getItems items}. and returns
           * its index if found or -1 otherwise.
           */
          indexOfItem(
            /**
             * The item whose index is looked for
             */
            oItem: sap.ui.core.Control
          ): number;
          /**
           * Inserts a item into the aggregation {@link #getItems items}.
           */
          insertItem(
            /**
             * The item to insert; if empty, nothing is inserted
             */
            oItem: sap.ui.core.Control,
            /**
             * The `0`-based index the item should be inserted at; for a negative value of `iIndex`, the item is inserted
             * at position 0; for a value greater than the current size of the aggregation, the item is inserted at
             * the last position
             */
            iIndex: number
          ): sap.ui.layout.cssgrid.CSSGrid;
          /**
           * Removes all the controls from the aggregation {@link #getItems items}.
           *
           * Additionally, it unregisters them from the hosting UIArea.
           */
          removeAllItems(): sap.ui.core.Control[];
          /**
           * Removes a item from the aggregation {@link #getItems items}.
           */
          removeItem(
            /**
             * The item to remove or its index or id
             */
            vItem: number | string | sap.ui.core.Control
          ): sap.ui.core.Control;
          /**
           * Sets the aggregated {@link #getCustomLayout customLayout}.
           */
          setCustomLayout(
            /**
             * The customLayout to set
             */
            oCustomLayout: sap.ui.layout.cssgrid.GridLayoutBase
          ): sap.ui.layout.cssgrid.CSSGrid;
          /**
           * Sets a new value for property {@link #getGridAutoColumns gridAutoColumns}.
           *
           * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns
           * MDN web docs: grid-auto-columns}
           *
           * **Note:** Not supported in IE11, Edge 15.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `empty string`.
           */
          setGridAutoColumns(
            /**
             * New value for property `gridAutoColumns`
             */
            sGridAutoColumns: any
          ): sap.ui.layout.cssgrid.CSSGrid;
          /**
           * Sets a new value for property {@link #getGridAutoFlow gridAutoFlow}.
           *
           * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow
           * MDN web docs: grid-auto-flow}
           *
           * **Note:** Not supported in IE11, Edge 15.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `Row`.
           */
          setGridAutoFlow(
            /**
             * New value for property `gridAutoFlow`
             */
            sGridAutoFlow: sap.ui.layout.cssgrid.CSSGridAutoFlow
          ): sap.ui.layout.cssgrid.CSSGrid;
          /**
           * Sets a new value for property {@link #getGridAutoRows gridAutoRows}.
           *
           * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows
           * MDN web docs: grid-auto-rows}
           *
           * **Note:** Not supported in IE11, Edge 15.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `empty string`.
           */
          setGridAutoRows(
            /**
             * New value for property `gridAutoRows`
             */
            sGridAutoRows: any
          ): sap.ui.layout.cssgrid.CSSGrid;
          /**
           * Sets a new value for property {@link #getGridColumnGap gridColumnGap}.
           *
           * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-gap
           * MDN web docs: grid-column-gap}
           *
           * **Note:** Not supported in IE11, Edge 15.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `empty string`.
           */
          setGridColumnGap(
            /**
             * New value for property `gridColumnGap`
             */
            sGridColumnGap: sap.ui.core.CSSSize
          ): sap.ui.layout.cssgrid.CSSGrid;
          /**
           * Sets a new value for property {@link #getGridGap gridGap}.
           *
           * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap
           * MDN web docs: grid-gap}
           *
           * **Note:** Not supported in IE11, Edge 15.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `empty string`.
           */
          setGridGap(
            /**
             * New value for property `gridGap`
             */
            sGridGap: any
          ): sap.ui.layout.cssgrid.CSSGrid;
          /**
           * Sets a new value for property {@link #getGridRowGap gridRowGap}.
           *
           * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-gap
           * MDN web docs: grid-row-gap}
           *
           * **Note:** Not supported in IE11, Edge 15.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `empty string`.
           */
          setGridRowGap(
            /**
             * New value for property `gridRowGap`
             */
            sGridRowGap: sap.ui.core.CSSSize
          ): sap.ui.layout.cssgrid.CSSGrid;
          /**
           * Sets a new value for property {@link #getGridTemplateColumns gridTemplateColumns}.
           *
           * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns
           * MDN web docs: grid-template-columns}
           *
           * **Note:** Not supported in IE11, Edge 15.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `empty string`.
           */
          setGridTemplateColumns(
            /**
             * New value for property `gridTemplateColumns`
             */
            sGridTemplateColumns: any
          ): sap.ui.layout.cssgrid.CSSGrid;
          /**
           * Sets a new value for property {@link #getGridTemplateRows gridTemplateRows}.
           *
           * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows
           * MDN web docs: grid-template-rows}
           *
           * **Note:** Not supported in IE11, Edge 15.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `empty string`.
           */
          setGridTemplateRows(
            /**
             * New value for property `gridTemplateRows`
             */
            sGridTemplateRows: any
          ): sap.ui.layout.cssgrid.CSSGrid;
          /**
           * Sets the width of the grid.
           */
          setWidth(
            /**
             * The width of the Grid as CSS size.
             */
            sWidth: sap.ui.core.CSSSize
          ): sap.ui.layout.cssgrid.CSSGrid;
        }
        /**
         * Holds layout data for a grid item.
         */
        class GridItemLayoutData extends sap.ui.core.LayoutData {
          /**
           * Constructor for a new `sap.ui.layout.cssgrid.GridItemLayoutData`.
           *
           * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
           * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
           * of the syntax of the settings object.
           */
          constructor(
            /**
             * ID for the new element, generated automatically if no ID is given
             */
            sId?: string,
            /**
             * Initial settings for the new element.
             */
            mSettings?: GridItemLayoutDataOpts
          );

          /**
           * Creates a new subclass of class sap.ui.layout.cssgrid.GridItemLayoutData with name `sClassName` and enriches
           * it with the information contained in `oClassInfo`.
           *
           * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.LayoutData.extend}.
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
           * Gets current value of property {@link #getGridColumn gridColumn}.
           *
           * Sets the value for the CSS display:grid item property grid-column
           *
           * Default value is `empty string`.
           */
          getGridColumn(): any;
          /**
           * Gets current value of property {@link #getGridColumnEnd gridColumnEnd}.
           *
           * Sets the value for the CSS display:grid item property grid-column-end
           *
           * Default value is `empty string`.
           */
          getGridColumnEnd(): any;
          /**
           * Gets current value of property {@link #getGridColumnStart gridColumnStart}.
           *
           * Sets the value for the CSS display:grid item property grid-column-start
           *
           * Default value is `empty string`.
           */
          getGridColumnStart(): any;
          /**
           * Gets current value of property {@link #getGridRow gridRow}.
           *
           * Sets the value for the CSS display:grid item property grid-row
           *
           * Default value is `empty string`.
           */
          getGridRow(): any;
          /**
           * Gets current value of property {@link #getGridRowEnd gridRowEnd}.
           *
           * Sets the value for the CSS display:grid item property grid-row-end
           *
           * Default value is `empty string`.
           */
          getGridRowEnd(): any;
          /**
           * Gets current value of property {@link #getGridRowStart gridRowStart}.
           *
           * Sets the value for the CSS display:grid item property grid-row-start
           *
           * Default value is `empty string`.
           */
          getGridRowStart(): any;
          /**
           * Returns a metadata object for class sap.ui.layout.cssgrid.GridItemLayoutData.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.base.Metadata;
          /**
           * Sets a new value for property {@link #getGridColumn gridColumn}.
           *
           * Sets the value for the CSS display:grid item property grid-column
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `empty string`.
           */
          setGridColumn(
            /**
             * New value for property `gridColumn`
             */
            sGridColumn: any
          ): sap.ui.layout.cssgrid.GridItemLayoutData;
          /**
           * Sets a new value for property {@link #getGridColumnEnd gridColumnEnd}.
           *
           * Sets the value for the CSS display:grid item property grid-column-end
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `empty string`.
           */
          setGridColumnEnd(
            /**
             * New value for property `gridColumnEnd`
             */
            sGridColumnEnd: any
          ): sap.ui.layout.cssgrid.GridItemLayoutData;
          /**
           * Sets a new value for property {@link #getGridColumnStart gridColumnStart}.
           *
           * Sets the value for the CSS display:grid item property grid-column-start
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `empty string`.
           */
          setGridColumnStart(
            /**
             * New value for property `gridColumnStart`
             */
            sGridColumnStart: any
          ): sap.ui.layout.cssgrid.GridItemLayoutData;
          /**
           * Sets a new value for property {@link #getGridRow gridRow}.
           *
           * Sets the value for the CSS display:grid item property grid-row
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `empty string`.
           */
          setGridRow(
            /**
             * New value for property `gridRow`
             */
            sGridRow: any
          ): sap.ui.layout.cssgrid.GridItemLayoutData;
          /**
           * Sets a new value for property {@link #getGridRowEnd gridRowEnd}.
           *
           * Sets the value for the CSS display:grid item property grid-row-end
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `empty string`.
           */
          setGridRowEnd(
            /**
             * New value for property `gridRowEnd`
             */
            sGridRowEnd: any
          ): sap.ui.layout.cssgrid.GridItemLayoutData;
          /**
           * Sets a new value for property {@link #getGridRowStart gridRowStart}.
           *
           * Sets the value for the CSS display:grid item property grid-row-start
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `empty string`.
           */
          setGridRowStart(
            /**
             * New value for property `gridRowStart`
             */
            sGridRowStart: any
          ): sap.ui.layout.cssgrid.GridItemLayoutData;
        }
        /**
         * @SINCE 1.60
         *
         * Applies a sap.ui.layout.cssgrid.GridSettings to a provided DOM element or Control.
         */
        // @ts-ignore - static "getMetadata" inheritance issue
        class GridLayoutBase extends sap.ui.base.ManagedObject {
          /**
           * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
           * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
           * of the syntax of the settings object.
           *
           * This class does not have its own settings, but all settings applicable to the base type {@link sap.ui.base.ManagedObject#constructor
           * sap.ui.base.ManagedObject} can be used.
           */
          constructor(
            /**
             * ID for the new control, generated automatically if no ID is given
             */
            sId?: string,
            /**
             * Initial settings for the new control
             */
            mSettings?: object
          );

          /**
           * Apply display:grid styles to the provided HTML element or control based on the currently active GridSettings
           */
          _applySingleGridLayout(
            /**
             * The element or control on which to apply the display:grid styles
             */
            oElement: sap.ui.core.Control | HTMLElement
          ): void;
          /**
           * Removes all display:grid styles from the provided HTML element or control
           */
          _removeGridLayout(
            /**
             * The element or control from which to remove the grid styles
             */
            oElement: sap.ui.core.Control | HTMLElement
          ): void;
          /**
           * Apply display:grid styles to the provided array of HTML elements or controls based on the currently active
           * GridSettings
           */
          applyGridLayout(
            /**
             * The elements or controls on which to apply the display:grid styles
             */
            aElements: sap.ui.core.Control[] | HTMLElement[]
          ): void;
          /**
           * Creates a new subclass of class sap.ui.layout.cssgrid.GridLayoutBase with name `sClassName` and enriches
           * it with the information contained in `oClassInfo`.
           *
           * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.ManagedObject.extend}.
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
           * Should return sap.ui.layout.cssgrid.GridSettings - The active GridSettings Must be implemented by child
           * classes
           */
          getActiveGridSettings(): void;
          /**
           * Returns a metadata object for class sap.ui.layout.cssgrid.GridLayoutBase.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.base.Metadata;
          /**/
          isResponsive(): boolean;
        }
        /**
         * Add handlers for a sap.ui.layout.cssgrid.IGridConfigurable control lifecycle events. Applies the grid
         * layout when necessary. Calls sap.ui.layout.cssgrid.GridLayoutBase hook functions.
         */
        class GridLayoutDelegate extends sap.ui.base.Object {
          /**/
          constructor();
        }
        /**
         * @SINCE 1.60
         *
         * Applies a sap.ui.layout.cssgrid.GridSettings to a provided DOM element or Control. Have to possibility
         * to hold multiple sap.ui.layout.cssgrid.GridSettings and apply the currently active GridSettings.
         */
        class GridResponsiveLayout extends sap.ui.layout.cssgrid
          .GridLayoutBase {
          /**
           * Constructor for a new GridResponsiveLayout.
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
            mSettings?: object
          );

          /**
           * Attaches event handler `fnFunction` to the {@link #event:layoutChange layoutChange} event of this `sap.ui.layout.cssgrid.GridResponsiveLayout`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ui.layout.cssgrid.GridResponsiveLayout` itself.
           *
           * Fired when the currently active GridSettings changes
           */
          attachLayoutChange(
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
             * Context object to call the event handler with. Defaults to this `sap.ui.layout.cssgrid.GridResponsiveLayout`
             * itself
             */
            oListener?: object
          ): sap.ui.layout.cssgrid.GridResponsiveLayout;
          /**
           * Destroys the layout in the aggregation {@link #getLayout layout}.
           */
          destroyLayout(): sap.ui.layout.cssgrid.GridResponsiveLayout;
          /**
           * Destroys the layoutL in the aggregation {@link #getLayoutL layoutL}.
           */
          destroyLayoutL(): sap.ui.layout.cssgrid.GridResponsiveLayout;
          /**
           * Destroys the layoutM in the aggregation {@link #getLayoutM layoutM}.
           */
          destroyLayoutM(): sap.ui.layout.cssgrid.GridResponsiveLayout;
          /**
           * Destroys the layoutS in the aggregation {@link #getLayoutS layoutS}.
           */
          destroyLayoutS(): sap.ui.layout.cssgrid.GridResponsiveLayout;
          /**
           * Destroys the layoutXL in the aggregation {@link #getLayoutXL layoutXL}.
           */
          destroyLayoutXL(): sap.ui.layout.cssgrid.GridResponsiveLayout;
          /**
           * Detaches event handler `fnFunction` from the {@link #event:layoutChange layoutChange} event of this `sap.ui.layout.cssgrid.GridResponsiveLayout`.
           *
           * The passed function and listener object must match the ones used for event registration.
           */
          detachLayoutChange(
            /**
             * The function to be called, when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object on which the given function had to be called
             */
            oListener?: object
          ): sap.ui.layout.cssgrid.GridResponsiveLayout;
          /**
           * Creates a new subclass of class sap.ui.layout.cssgrid.GridResponsiveLayout with name `sClassName` and
           * enriches it with the information contained in `oClassInfo`.
           *
           * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.layout.cssgrid.GridLayoutBase.extend}.
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
           * Fires event {@link #event:layoutChange layoutChange} to attached listeners.
           */
          fireLayoutChange(
            /**
             * Parameters to pass along with the event
             */
            mParameters?: {
              /**
               * The name of the newly active layout aggregation
               */
              layout?: string;
            }
          ): sap.ui.layout.cssgrid.GridResponsiveLayout;
          /**
           * Gets content of aggregation {@link #getLayout layout}.
           *
           * The sap.ui.layout.cssgrid.GridSettings applied if no settings are provided for a specific size
           */
          getLayout(): sap.ui.layout.cssgrid.GridSettings;
          /**
           * Gets content of aggregation {@link #getLayoutL layoutL}.
           *
           * The sap.ui.layout.cssgrid.GridSettings applied for size "L"
           */
          getLayoutL(): sap.ui.layout.cssgrid.GridSettings;
          /**
           * Gets content of aggregation {@link #getLayoutM layoutM}.
           *
           * The sap.ui.layout.cssgrid.GridSettings applied for size "M"
           */
          getLayoutM(): sap.ui.layout.cssgrid.GridSettings;
          /**
           * Gets content of aggregation {@link #getLayoutS layoutS}.
           *
           * The sap.ui.layout.cssgrid.GridSettings applied for size "S"
           */
          getLayoutS(): sap.ui.layout.cssgrid.GridSettings;
          /**
           * Gets content of aggregation {@link #getLayoutXL layoutXL}.
           *
           * The sap.ui.layout.cssgrid.GridSettings applied for size "XL"
           */
          getLayoutXL(): sap.ui.layout.cssgrid.GridSettings;
          /**
           * Returns a metadata object for class sap.ui.layout.cssgrid.GridResponsiveLayout.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.base.Metadata;
          /**
           * Sets the aggregated {@link #getLayout layout}.
           */
          setLayout(
            /**
             * The layout to set
             */
            oLayout: sap.ui.layout.cssgrid.GridSettings
          ): sap.ui.layout.cssgrid.GridResponsiveLayout;
          /**
           * Sets the aggregated {@link #getLayoutL layoutL}.
           */
          setLayoutL(
            /**
             * The layoutL to set
             */
            oLayoutL: sap.ui.layout.cssgrid.GridSettings
          ): sap.ui.layout.cssgrid.GridResponsiveLayout;
          /**
           * Sets the aggregated {@link #getLayoutM layoutM}.
           */
          setLayoutM(
            /**
             * The layoutM to set
             */
            oLayoutM: sap.ui.layout.cssgrid.GridSettings
          ): sap.ui.layout.cssgrid.GridResponsiveLayout;
          /**
           * Sets the aggregated {@link #getLayoutS layoutS}.
           */
          setLayoutS(
            /**
             * The layoutS to set
             */
            oLayoutS: sap.ui.layout.cssgrid.GridSettings
          ): sap.ui.layout.cssgrid.GridResponsiveLayout;
          /**
           * Sets the aggregated {@link #getLayoutXL layoutXL}.
           */
          setLayoutXL(
            /**
             * The layoutXL to set
             */
            oLayoutXL: sap.ui.layout.cssgrid.GridSettings
          ): sap.ui.layout.cssgrid.GridResponsiveLayout;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:layoutChange layoutChange} event of this `sap.ui.layout.cssgrid.GridResponsiveLayout`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ui.layout.cssgrid.GridResponsiveLayout` itself.
           *
           * Fired when the currently active GridSettings changes
           */
          attachLayoutChange(
            /**
             * The function to be called when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object to call the event handler with. Defaults to this `sap.ui.layout.cssgrid.GridResponsiveLayout`
             * itself
             */
            oListener?: object
          ): sap.ui.layout.cssgrid.GridResponsiveLayout;
        }
        /**
         * @SINCE 1.60
         *
         * Holds a set of CSS display:grid properties
         */
        // @ts-ignore - static "getMetadata" inheritance issue
        class GridSettings extends sap.ui.base.ManagedObject {
          /**
           * Constructor for a new GridSettings.
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
            mSettings?: object
          );

          /**
           * Creates a new subclass of class sap.ui.layout.cssgrid.GridSettings with name `sClassName` and enriches
           * it with the information contained in `oClassInfo`.
           *
           * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.ManagedObject.extend}.
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
           * Gets current value of property {@link #getGridAutoColumns gridAutoColumns}.
           *
           * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns
           * MDN web docs: grid-auto-columns}
           *
           * **Note:** Not supported in IE11, Edge 15.
           *
           * Default value is `empty string`.
           */
          getGridAutoColumns(): any;
          /**
           * Gets current value of property {@link #getGridAutoFlow gridAutoFlow}.
           *
           * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow
           * MDN web docs: grid-auto-flow}
           *
           * **Note:** Not supported in IE11, Edge 15.
           *
           * Default value is `Row`.
           */
          getGridAutoFlow(): sap.ui.layout.cssgrid.CSSGridAutoFlow;
          /**
           * Gets current value of property {@link #getGridAutoRows gridAutoRows}.
           *
           * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows
           * MDN web docs: grid-auto-rows}
           *
           * **Note:** Not supported in IE11, Edge 15.
           *
           * Default value is `empty string`.
           */
          getGridAutoRows(): any;
          /**
           * Gets current value of property {@link #getGridColumnGap gridColumnGap}.
           *
           * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-gap
           * MDN web docs: grid-column-gap}
           *
           * **Note:** Not supported in IE11, Edge 15.
           *
           * Default value is `empty string`.
           */
          getGridColumnGap(): sap.ui.core.CSSSize;
          /**
           * Gets current value of property {@link #getGridGap gridGap}.
           *
           * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap
           * MDN web docs: grid-gap}
           *
           * **Note:** Not supported in IE11, Edge 15.
           *
           * Default value is `empty string`.
           */
          getGridGap(): any;
          /**
           * Gets current value of property {@link #getGridRowGap gridRowGap}.
           *
           * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-gap
           * MDN web docs: grid-row-gap}
           *
           * **Note:** Not supported in IE11, Edge 15.
           *
           * Default value is `empty string`.
           */
          getGridRowGap(): sap.ui.core.CSSSize;
          /**
           * Gets current value of property {@link #getGridTemplateColumns gridTemplateColumns}.
           *
           * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns
           * MDN web docs: grid-template-columns}
           *
           * **Note:** Not supported in IE11, Edge 15.
           *
           * Default value is `empty string`.
           */
          getGridTemplateColumns(): any;
          /**
           * Gets current value of property {@link #getGridTemplateRows gridTemplateRows}.
           *
           * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows
           * MDN web docs: grid-template-rows}
           *
           * **Note:** Not supported in IE11, Edge 15.
           *
           * Default value is `empty string`.
           */
          getGridTemplateRows(): any;
          /**
           * Returns a metadata object for class sap.ui.layout.cssgrid.GridSettings.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.base.Metadata;
          /**
           * Sets a new value for property {@link #getGridAutoColumns gridAutoColumns}.
           *
           * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns
           * MDN web docs: grid-auto-columns}
           *
           * **Note:** Not supported in IE11, Edge 15.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `empty string`.
           */
          setGridAutoColumns(
            /**
             * New value for property `gridAutoColumns`
             */
            sGridAutoColumns: any
          ): sap.ui.layout.cssgrid.GridSettings;
          /**
           * Sets a new value for property {@link #getGridAutoFlow gridAutoFlow}.
           *
           * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow
           * MDN web docs: grid-auto-flow}
           *
           * **Note:** Not supported in IE11, Edge 15.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `Row`.
           */
          setGridAutoFlow(
            /**
             * New value for property `gridAutoFlow`
             */
            sGridAutoFlow: sap.ui.layout.cssgrid.CSSGridAutoFlow
          ): sap.ui.layout.cssgrid.GridSettings;
          /**
           * Sets a new value for property {@link #getGridAutoRows gridAutoRows}.
           *
           * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows
           * MDN web docs: grid-auto-rows}
           *
           * **Note:** Not supported in IE11, Edge 15.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `empty string`.
           */
          setGridAutoRows(
            /**
             * New value for property `gridAutoRows`
             */
            sGridAutoRows: any
          ): sap.ui.layout.cssgrid.GridSettings;
          /**
           * Sets a new value for property {@link #getGridColumnGap gridColumnGap}.
           *
           * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-gap
           * MDN web docs: grid-column-gap}
           *
           * **Note:** Not supported in IE11, Edge 15.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `empty string`.
           */
          setGridColumnGap(
            /**
             * New value for property `gridColumnGap`
             */
            sGridColumnGap: sap.ui.core.CSSSize
          ): sap.ui.layout.cssgrid.GridSettings;
          /**
           * Sets a new value for property {@link #getGridGap gridGap}.
           *
           * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap
           * MDN web docs: grid-gap}
           *
           * **Note:** Not supported in IE11, Edge 15.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `empty string`.
           */
          setGridGap(
            /**
             * New value for property `gridGap`
             */
            sGridGap: any
          ): sap.ui.layout.cssgrid.GridSettings;
          /**
           * Sets a new value for property {@link #getGridRowGap gridRowGap}.
           *
           * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-gap
           * MDN web docs: grid-row-gap}
           *
           * **Note:** Not supported in IE11, Edge 15.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `empty string`.
           */
          setGridRowGap(
            /**
             * New value for property `gridRowGap`
             */
            sGridRowGap: sap.ui.core.CSSSize
          ): sap.ui.layout.cssgrid.GridSettings;
          /**
           * Sets a new value for property {@link #getGridTemplateColumns gridTemplateColumns}.
           *
           * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns
           * MDN web docs: grid-template-columns}
           *
           * **Note:** Not supported in IE11, Edge 15.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `empty string`.
           */
          setGridTemplateColumns(
            /**
             * New value for property `gridTemplateColumns`
             */
            sGridTemplateColumns: any
          ): sap.ui.layout.cssgrid.GridSettings;
          /**
           * Sets a new value for property {@link #getGridTemplateRows gridTemplateRows}.
           *
           * Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows
           * MDN web docs: grid-template-rows}
           *
           * **Note:** Not supported in IE11, Edge 15.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `empty string`.
           */
          setGridTemplateRows(
            /**
             * New value for property `gridTemplateRows`
             */
            sGridTemplateRows: any
          ): sap.ui.layout.cssgrid.GridSettings;
        }
        /**
         * @SINCE 1.60.0
         *
         * A string type that is used for CSS grid to control how the auto-placement algorithm works, specifying
         * exactly how auto-placed items get flowed into the grid.
         * See:
         * 	{@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow}
         */
        enum CSSGridAutoFlow {
          /**
           * Insert auto-placed items by filling each column.
           */
          Column,
          /**
           * Insert auto-placed items by filling each column, and fill any holes in the grid.
           */
          ColumnDense,
          /**
           * Insert auto-placed items by filling each row.
           */
          Row,
          /**
           * Insert auto-placed items by filling each row, and fill any holes in the grid.
           */
          RowDense
        }
      }

      namespace form {
        interface ColumnContainerDataOpts extends sap.ui.core.LayoutDataOpts {
          /**
           * Number of columns the `FormContainer` element uses if the `Form` control has extra-large size.
           *
           * The number of columns for extra-large size must not be smaller than the number of columns for large size.
           */
          columnsXL?: sap.ui.layout.form.ColumnsXL;

          /**
           * Number of columns the `FormContainer` element uses if the `Form` control has large size.
           *
           * The number of columns for large size must not be smaller than the number of columns for medium size.
           */
          columnsL?: sap.ui.layout.form.ColumnsL;

          /**
           * Number of columns the `FormContainer` element uses if the `Form` control has medium size.
           */
          columnsM?: sap.ui.layout.form.ColumnsM;
        }

        interface ColumnElementDataOpts extends sap.ui.core.LayoutDataOpts {
          /**
           * Number of cells used by a field if the `FormElement` element is large. The label is then beside the fields
           * per default.
           *
           * If set to `12`, the full size of the `FormElement` element is used.
           */
          cellsLarge?: sap.ui.layout.form.ColumnCells;

          /**
           * Number of cells used by a field if the `FormElement` element is small. The label is then above the fields
           * per default.
           *
           * If set to `12`, the full size of the `FormElement` is used.
           */
          cellsSmall?: sap.ui.layout.form.ColumnCells;
        }

        interface ColumnLayoutOpts extends sap.ui.layout.form.FormLayoutOpts {
          /**
           * Number of columns for extra-large size.
           *
           * The number of columns for extra-large size must not be smaller than the number of columns for large size.
           */
          columnsXL?: sap.ui.layout.form.ColumnsXL;

          /**
           * Number of columns for large size.
           *
           * The number of columns for large size must not be smaller than the number of columns for medium size.
           */
          columnsL?: sap.ui.layout.form.ColumnsL;

          /**
           * Number of columns for medium size.
           */
          columnsM?: sap.ui.layout.form.ColumnsM;

          /**
           * Defines how many cells a label uses if the column is large.
           */
          labelCellsLarge?: sap.ui.layout.form.ColumnCells;

          /**
           * Defines how many cells are empty at the end of a row. This could be used to keep the fields small on
           * large screens.
           */
          emptyCellsLarge?: sap.ui.layout.form.EmptyCells;
        }

        interface FormOpts extends sap.ui.core.ControlOpts {
          /**
           * Width of the `Form`.
           */
          width?: sap.ui.core.CSSSize;

          /**
           * @SINCE 1.20.0
           *
           * Applies a device-specific and theme-specific line height and label alignment to the form rows if the
           * form has editable content. If set, all (not only the editable) rows of the form will get the line height
           * of editable fields.
           *
           * The labels inside the form will be rendered by default in the according mode.
           *
           * **Note:** The setting of this property does not change the content of the form. For example, `Input`
           * controls in a form with `editable` set to false are still editable.
           *
           * **Warning:** If this property is wrongly set, this might lead to visual issues. The labels and fields
           * might be misaligned, the labels might be rendered in the wrong mode, and the spacing between the single
           * controls might be wrong. Also, controls that do not fit the mode might be rendered incorrectly.
           */
          editable?: boolean;

          /**
           * Containers with the content of the form. A `FormContainer` represents a group inside the `Form`.
           */
          formContainers?:
            | sap.ui.layout.form.FormContainer[]
            | sap.ui.layout.form.FormContainer;

          /**
           * Title of the `Form`. Can either be a `Title` element or a string. If a `Title` element it used, the style
           * of the title can be set.
           *
           * **Note:** If a `Toolbar` is used, the `Title` is ignored.
           */
          title?: sap.ui.core.Title;

          /**
           * @SINCE 1.36.0
           *
           * Toolbar of the `Form`.
           *
           * **Note:** If a `Toolbar` is used, the `Title` is ignored. If a title is needed inside the `Toolbar` it
           * must be added at content to the `Toolbar`. In this case add the `Title` to the `ariaLabelledBy` association.
           */
          toolbar?: sap.ui.core.Toolbar;

          /**
           * Layout of the `Form`. The assigned `Layout` renders the `Form`. We recommend using the `ResponsiveGridLayout`
           * for rendering a `Form`, as its responsiveness allows the available space to be used in the best way possible.
           */
          layout?: sap.ui.layout.form.FormLayout;

          /**
           * @SINCE 1.28.0
           *
           * Association to controls / IDs that label this control (see WAI-ARIA attribute `aria-labelledby`).
           */
          ariaLabelledBy?: sap.ui.core.Control[] | string[];
        }

        interface FormContainerOpts extends sap.ui.core.ElementOpts {
          /**
           * Container is expanded.
           *
           * **Note:** This property only works if `expandable` is set to `true`.
           */
          expanded?: boolean;

          /**
           * Defines if the `FormContainer` is expandable.
           *
           * **Note:** The expander icon will only be shown if a `title` is set for the `FormContainer`.
           */
          expandable?: boolean;

          /**
           * If set to `false`, the `FormContainer` is not rendered.
           */
          visible?: boolean;

          /**
           * The `FormElements` contain the content (labels and fields) of the `FormContainers`.
           */
          formElements?:
            | sap.ui.layout.form.FormElement[]
            | sap.ui.layout.form.FormElement;

          /**
           * Title of the `FormContainer`. Can either be a `Title` element or a string. If a `Title` element is used,
           * the style of the title can be set.
           *
           * **Note:** If a `Toolbar` is used, the `Title` is ignored.
           */
          title?: sap.ui.core.Title;

          /**
           * @SINCE 1.36.0
           *
           * Toolbar of the `FormContainer`.
           *
           * **Note:** If a `Toolbar` is used, the `Title` is ignored. If a title is needed inside the `Toolbar` it
           * must be added at content to the `Toolbar`. In this case add the `Title` to the `ariaLabelledBy` association.
           */
          toolbar?: sap.ui.core.Toolbar;

          /**
           * @SINCE 1.36.0
           *
           * Association to controls / IDs that label this control (see WAI-ARIA attribute `aria-labelledby`).
           *
           * **Note:** This attribute is only rendered if the `FormContainer` has it's own DOM representation in the
           * used `FormLayout`.
           */
          ariaLabelledBy?: sap.ui.core.Control[] | string[];
        }

        interface FormElementOpts extends sap.ui.core.ElementOpts {
          /**
           * If set to `false`, the `FormElement` is not rendered.
           */
          visible?: boolean;

          /**
           * Label of the fields. Can either be a `Label` control or a string. If a `Label` control is used, the properties
           * of the `Label` can be set. If no assignment between `Label` and the fields is set via (`labelFor` property
           * of the `Label`), it will be done automatically by the `FormElement`. In this case the `Label` is assigned
           * to the fields of the `FormElement`.
           */
          label?: sap.ui.core.Label;

          /**
           * Form controls that belong together to be displayed in one row of a `Form`.
           *
           * **Warning:** Do not put any layout or other container controls in here. This could damage the visual
           * layout, keyboard support and screen-reader support. Only form controls are allowed. Views are also not
           * supported. Allowed controls implement the interface `sap.ui.core.IFormContent`.
           */
          fields?: sap.ui.core.Control[] | sap.ui.core.Control;
        }

        interface FormLayoutOpts extends sap.ui.core.ControlOpts {
          /**
           * @SINCE 1.36.0
           *
           * Specifies the background color of the `Form` content.
           *
           * **Note:** The visualization of the different options depends on the theme used.
           */
          backgroundDesign?: sap.ui.layout.BackgroundDesign;
        }

        interface GridContainerDataOpts extends sap.ui.core.LayoutDataOpts {
          /**
           * If set, the container takes half the width of the `Form` (8 cells), if not it takes the full width (16
           * cells). If the `GridLayout` is set to `singleColumn`, the full width of the grid is only 8 cells. So
           * containers are rendered only once per row.
           */
          halfGrid?: boolean;
        }

        interface GridElementDataOpts extends sap.ui.core.LayoutDataOpts {
          /**
           * Number of cells in horizontal direction.
           *
           * If set to `auto`, the size is determined by the number of fields and the available cells. For labels
           * the auto size is 3 cells.
           *
           * If set to `full`, only one field is allowed within the `FormElement`. It gets the full width of the row
           * and the label is displayed above.
           *
           * **Note:** For labels, the full size setting has no effect.
           */
          hCells?: sap.ui.layout.form.GridElementCells;

          /**
           * Number of cells in vertical direction.
           *
           * **Note:** This property has no effect on labels.
           */
          vCells?: number;
        }

        interface GridLayoutOpts extends sap.ui.layout.form.FormLayoutOpts {
          /**
           * If set, the grid renders only one `FormContainer` per column. That means one `FormContainer` is below
           * the other. The whole grid has 8 cells per row.
           *
           * If not set, `FormContainer` can use the full width of the grid or two `FormContainers` can be placed
           * beside each other. In this case the whole grid has 16 cells per row.
           */
          singleColumn?: boolean;
        }

        interface ResponsiveGridLayoutOpts
          extends sap.ui.layout.form.FormLayoutOpts {
          /**
           * @SINCE 1.34.0
           *
           * Default span for labels in extra large size.
           *
           * **Note:** If the default value -1 is not overwritten with the meaningful one then the `labelSpanL` value
           * is used.
           */
          labelSpanXL?: number;

          /**
           * @SINCE 1.16.3
           *
           * Default span for labels in large size.
           *
           * **Note:** If `adjustLabelSpan` is set, this property is only used if more than 1 `FormContainer` is in
           * one line. If only 1 `FormContainer` is in the line, then the `labelSpanM` value is used.
           */
          labelSpanL?: number;

          /**
           * @SINCE 1.16.3
           *
           * Default span for labels in medium size.
           *
           * **Note:** If `adjustLabelSpan` is set this property is used for full-size `FormContainers`. If more than
           * one `FormContainer` is in one line, `labelSpanL` is used.
           */
          labelSpanM?: number;

          /**
           * @SINCE 1.16.3
           *
           * Default span for labels in small size.
           */
          labelSpanS?: number;

          /**
           * @SINCE 1.34.0
           *
           * If set, the usage of `labelSpanL` and `labelSpanM` are dependent on the number of `FormContainers` in
           * one row. If only one `FormContainer` is displayed in one row, `labelSpanM` is used to define the size
           * of the label. This is the same for medium and large `Forms`. This is done to align the labels on forms
           * where full-size `FormContainers` and multiple-column rows are used in the same `Form` (because every
           * `FormContainer` has its own `Grid` inside).
           *
           * If not set, the usage of `labelSpanL` and `labelSpanM` are dependent on the `Form` size. The number of
           * `FormContainers` doesn't matter in this case.
           */
          adjustLabelSpan?: boolean;

          /**
           * @SINCE 1.34.0
           *
           * Number of grid cells that are empty at the end of each line on extra large size.
           *
           * **Note:** If the default value -1 is not overwritten with the meaningful one then the `emptySpanL` value
           * is used.
           */
          emptySpanXL?: number;

          /**
           * @SINCE 1.16.3
           *
           * Number of grid cells that are empty at the end of each line on large size.
           */
          emptySpanL?: number;

          /**
           * @SINCE 1.16.3
           *
           * Number of grid cells that are empty at the end of each line on medium size.
           */
          emptySpanM?: number;

          /**
           * @SINCE 1.16.3
           *
           * Number of grid cells that are empty at the end of each line on small size.
           */
          emptySpanS?: number;

          /**
           * @SINCE 1.34.0
           *
           * Number of columns for extra large size.
           *
           * The number of columns for extra large size must not be smaller than the number of columns for large size.
           * **Note:** If the default value -1 is not overwritten with the meaningful one then the `columnsL` value
           * is used (from the backward compatibility reasons).
           */
          columnsXL?: number;

          /**
           * @SINCE 1.16.3
           *
           * Number of columns for large size.
           *
           * The number of columns for large size must not be smaller than the number of columns for medium size.
           */
          columnsL?: number;

          /**
           * @SINCE 1.16.3
           *
           * Number of columns for medium size.
           */
          columnsM?: number;

          /**
           * @SINCE 1.34.0
           *
           * If the `Form` contains only one single `FormContainer` and this property is set, the `FormContainer`
           * is displayed using the full size of the `Form`. In this case the properties `columnsXL`, `columnsL` and
           * `columnsM` are ignored.
           *
           * In all other cases the `FormContainer` is displayed in the size of one column.
           */
          singleContainerFullSize?: boolean;

          /**
           * @SINCE 1.34.0
           *
           * Breakpoint (in pixel) between large size and extra large (XL) size.
           */
          breakpointXL?: number;

          /**
           * @SINCE 1.16.3
           *
           * Breakpoint (in pixel) between Medium size and Large size.
           */
          breakpointL?: number;

          /**
           * @SINCE 1.16.3
           *
           * Breakpoint (in pixel) between Small size and Medium size.
           */
          breakpointM?: number;
        }

        interface ResponsiveLayoutOpts
          extends sap.ui.layout.form.FormLayoutOpts {}

        interface SimpleFormOpts extends sap.ui.core.ControlOpts {
          /**
           * The maximum amount of groups (`FormContainers`) per row that is used before a new row is started.
           *
           * **Note:** If a `ResponsiveGridLayout` is used as a `layout`, this property is not used. Please use the
           * properties `ColumnsL` and `ColumnsM` in this case.
           */
          maxContainerCols?: number;

          /**
           * The overall minimum width in pixels that is used for the `SimpleForm`.
           *
           * If the available width is below the given `minWidth` the `SimpleForm` will create a new row for the next
           * group (`FormContainer`). The default value is -1, meaning that inner groups (`FormContainers`) will be
           * stacked until `maxContainerCols` is reached, irrespective of whether a `width` is reached or the available
           * parents width is reached.
           *
           * **Note:** This property is only used if a `ResponsiveLayout` is used as a layout.
           */
          minWidth?: number;

          /**
           * @SINCE 1.28.0
           *
           * Width of the form.
           */
          width?: sap.ui.core.CSSSize;

          /**
           * Applies a device-specific and theme-specific line height and label alignment to the form rows if the
           * form has editable content. If set, all (not only the editable) rows of the form will get the line height
           * of editable fields.
           *
           * The labels inside the form will be rendered by default in the according mode.
           *
           * **Note:** The setting of this property does not change the content of the form. For example, `Input`
           * controls in a form with `editable` set to false are still editable.
           *
           * **Warning:** If this property is wrongly set, this might lead to visual issues. The labels and fields
           * might be misaligned, the labels might be rendered in the wrong mode, and the spacing between the single
           * controls might be wrong. Also, controls that do not fit the mode might be rendered incorrectly.
           */
          editable?: boolean;

          /**
           * Specifies the min-width in pixels of the label in all form rows.
           *
           * **Note:** This property is only used if a `ResponsiveLayout` is used as a layout.
           */
          labelMinWidth?: number;

          /**
           * The `FormLayout` that is used to render the `SimpleForm`.
           *
           * We recommend using the `ResponsiveGridLayout` for rendering a `SimpleForm`, as its responsiveness uses
           * the space available in the best way possible.
           *
           * **Note** If possible, set the `layout` before adding content to prevent calculations for the default
           * layout.
           */
          layout?: sap.ui.layout.form.SimpleFormLayout;

          /**
           * @SINCE 1.34.0
           *
           * Default span for labels in extra large size.
           *
           * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout. If the default
           * value -1 is not overwritten with the meaningful one then the `labelSpanL` value is used (from the backward
           * compatibility reasons).
           */
          labelSpanXL?: number;

          /**
           * @SINCE 1.16.3
           *
           * Default span for labels in large size.
           *
           * **Note:** If `adjustLabelSpan` is set, this property is only used if more than 1 `FormContainer` is in
           * one line. If only 1 `FormContainer` is in the line, then the `labelSpanM` value is used.
           *
           * **Note:** This property is only used if `ResponsiveGridLayout` or `ColumnLayout` is used as a layout.
           * If a `ColumnLayout` is used, this property defines the label size for large columns.
           */
          labelSpanL?: number;

          /**
           * @SINCE 1.16.3
           *
           * Default span for labels in medium size.
           *
           * **Note:** If `adjustLabelSpan` is set, this property is used for full-size `FormContainers`. If more
           * than one `FormContainer` is in one line, `labelSpanL` is used.
           *
           * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
           */
          labelSpanM?: number;

          /**
           * @SINCE 1.16.3
           *
           * Default span for labels in small size.
           *
           * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
           */
          labelSpanS?: number;

          /**
           * @SINCE 1.34.0
           *
           * If set, the usage of `labelSpanL` and `labelSpanM` are dependent on the number of `FormContainers` in
           * one row. If only one `FormContainer` is displayed in one row, `labelSpanM` is used to define the size
           * of the label. This is the same for medium and large `Forms`. This is done to align the labels on forms
           * where full-size `FormContainers` and multiple-column rows are used in the same `Form` (because every
           * `FormContainer` has its own grid inside).
           *
           * If not set, the usage of `labelSpanL` and `labelSpanM` are dependent on the `Form` size. The number of
           * `FormContainers` doesn't matter in this case.
           *
           * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
           */
          adjustLabelSpan?: boolean;

          /**
           * @SINCE 1.34.0
           *
           * Number of grid cells that are empty at the end of each line on extra large size.
           *
           * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout. If the default
           * value -1 is not overwritten with the meaningful one then the `emptySpanL` value is used (from the backward
           * compatibility reasons).
           */
          emptySpanXL?: number;

          /**
           * @SINCE 1.16.3
           *
           * Number of grid cells that are empty at the end of each line on large size.
           *
           * **Note:** This property is only used if a `ResponsiveGridLayout` or a `ColumnLayout` is used as a layout.
           * If a `ColumnLayout` is used, this property defines the empty cells for large columns.
           */
          emptySpanL?: number;

          /**
           * @SINCE 1.16.3
           *
           * Number of grid cells that are empty at the end of each line on medium size.
           *
           * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
           */
          emptySpanM?: number;

          /**
           * @SINCE 1.16.3
           *
           * Number of grid cells that are empty at the end of each line on small size.
           *
           * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
           */
          emptySpanS?: number;

          /**
           * @SINCE 1.34.0
           *
           * Form columns for extra large size. The number of columns for extra large size must not be smaller than
           * the number of columns for large size.
           *
           * **Note:** This property is only used if a `ResponsiveGridLayout` or a `ColumnLayout` is used as a layout.
           * If the default value -1 is not overwritten with the meaningful one then the `columnsL` value is used
           * (from the backward compatibility reasons).
           */
          columnsXL?: number;

          /**
           * @SINCE 1.16.3
           *
           * Form columns for large size. The number of columns for large size must not be smaller than the number
           * of columns for medium size.
           *
           * **Note:** This property is only used if a `ResponsiveGridLayout` or a `ColumnLayout` is used as a layout.
           */
          columnsL?: number;

          /**
           * @SINCE 1.16.3
           *
           * Form columns for medium size.
           *
           * **Note:** This property is only used if a `ResponsiveGridLayout` or a `ColumnLayout` is used as a layout.
           */
          columnsM?: number;

          /**
           * @SINCE 1.34.0
           *
           * If the `Form` contains only one single `FormContainer` and this property is set, the `FormContainer`
           * is displayed using the full size of the `Form`. In this case the properties `columnsL` and `columnsM`
           * are ignored.
           *
           * In all other cases the `FormContainer` is displayed in the size of one column.
           *
           * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
           */
          singleContainerFullSize?: boolean;

          /**
           * @SINCE 1.34.0
           *
           * Breakpoint between Medium size and Large size.
           *
           * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
           */
          breakpointXL?: number;

          /**
           * @SINCE 1.16.3
           *
           * Breakpoint between Medium size and Large size.
           *
           * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
           */
          breakpointL?: number;

          /**
           * @SINCE 1.16.3
           *
           * Breakpoint between Small size and Medium size.
           *
           * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
           */
          breakpointM?: number;

          /**
           * @SINCE 1.36.0
           *
           * Specifies the background color of the `SimpleForm` content.
           *
           * The visualization of the different options depends on the used theme.
           */
          backgroundDesign?: sap.ui.layout.BackgroundDesign;

          /**
           * The content of the form is structured in the following way:
           * 	 - Add a `Title` or `Toolbar` control to start a new group (`FormContainer`).
           * 	 - Add a `Label` control to start a new row (`FormElement`).
           * 	 - Add controls as input fields, text fields or other as needed.
           * 	 - Use `LayoutData` to influence the layout for special cases in the single controls. For example, if
           * 			a `ResponsiveLayout` is used as a layout, the form content is weighted using weight 3 for the labels
           * 			and weight 5 for the fields part. By default the label column is 192 pixels wide. If your input controls
           * 			should influence their width, you can add `sap.ui.layout.ResponsiveFlowLayoutData` to them via `setLayoutData`
           * 			method. Ensure that the sum of the weights in the `ResponsiveFlowLayoutData` is not more than 5, as this
           * 			is the total width of the input control part of each form row.  Example for a row where the `Input`
           * 			weight 4 and the second `Input` weight 1 (using `ResponsiveLayout`):
           * ```javascript
           *
           * new sap.m.Label({text:"Label"});
           * new sap.m.Input({value:"Weight 4", layoutData: new sap.ui.layout.ResponsiveFlowLayoutData({weight:4})}),
           * new sap.m.Input({value:"Weight 1", layoutData: new sap.ui.layout.ResponsiveFlowLayoutData({weight:1})}),
           * ```
           *
           *
           * For example, if a `ResponsiveGridLayout` is used as a layout, there are 12 cells in one row. Depending
           * on the screen size the labels use the defined `labelSpan`. The remaining cells are used for the fields
           * (and `emptySpan` if defined). The available cells are distributed to all fields in the row. If one field
           * should use a fixed number of cells you can add `sap.ui.layout.GridData` to them via `setLayoutData` method.
           * If there are additional fields in the row they will get the remaining cells.  Example for a row
           * with two `Input` controls where one uses four cells on small screens, one cell on medium screens and
           * 2 cells on larger screens (using `ResponsiveGridLayout`):
           * ```javascript
           *
           * new sap.m.Label({text:"Label"});
           * new sap.m.Input({value:"auto size"}),
           * new sap.m.Input({value:"fix size", layoutData: new sap.ui.layout.GridData({span: "XL1 L1 M2 S4"})}),
           * ```
           *
           *
           * **Warning:** Do not put any layout or other container controls in here. This could damage the visual
           * layout, keyboard support and screen-reader support. Only labels, titles, toolbars and form controls are
           * allowed. Views are also not supported. Allowed form controls implement the interface `sap.ui.core.IFormContent`.
           *
           * If editable controls are used as content, the `editable` property must be set to `true`, otherwise to
           * `false`. If the `editable` property is set incorrectly, there will be visual issues like wrong label
           * alignment or wrong spacing between the controls.
           */
          content?: sap.ui.core.Element[] | sap.ui.core.Element;

          /**
           * @SINCE 1.16.3
           *
           * Title element of the `SimpleForm`. Can either be a `Title` element, or a string.
           */
          title?: sap.ui.core.Title;

          /**
           * @SINCE 1.36.0
           *
           * Toolbar of the `SimpleForm`.
           *
           * **Note:** If a `Toolbar` is used, the `Title` is ignored. If a title is needed inside the `Toolbar` it
           * must be added at content to the `Toolbar`. In this case add the `Title` to the `ariaLabelledBy` association.
           */
          toolbar?: sap.ui.core.Toolbar;

          /**
           * @SINCE 1.32.0
           *
           * Association to controls / IDs which label this control (see WAI-ARIA attribute `aria-labelledby`).
           */
          ariaLabelledBy?: sap.ui.core.Control[] | string[];
        }

        interface ColumnCells {}

        interface ColumnsL {}

        interface ColumnsM {}

        interface ColumnsXL {}

        interface EmptyCells {}

        interface GridElementCells {}
        /**
         * @SINCE 1.56.0
         *
         * The `ColumnLayout`-specific layout data for the `FormContainer` element.
         *
         * Depending on its size, the `Form` control is divided into 1, 2, 3 or 4 columns by the `ColumnLayout`
         * control. Using `ColumnContainerData`, the size of the `FormContainer` element can be influenced.
         */
        class ColumnContainerData extends sap.ui.core.LayoutData {
          /**
           * Constructor for a new sap.ui.layout.form.ColumnContainerData.
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
            mSettings?: ColumnContainerDataOpts
          );

          /**
           * Creates a new subclass of class sap.ui.layout.form.ColumnContainerData with name `sClassName` and enriches
           * it with the information contained in `oClassInfo`.
           *
           * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.LayoutData.extend}.
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
           * Gets current value of property {@link #getColumnsL columnsL}.
           *
           * Number of columns the `FormContainer` element uses if the `Form` control has large size.
           *
           * The number of columns for large size must not be smaller than the number of columns for medium size.
           *
           * Default value is `2`.
           */
          getColumnsL(): sap.ui.layout.form.ColumnsL;
          /**
           * Gets current value of property {@link #getColumnsM columnsM}.
           *
           * Number of columns the `FormContainer` element uses if the `Form` control has medium size.
           *
           * Default value is `1`.
           */
          getColumnsM(): sap.ui.layout.form.ColumnsM;
          /**
           * Gets current value of property {@link #getColumnsXL columnsXL}.
           *
           * Number of columns the `FormContainer` element uses if the `Form` control has extra-large size.
           *
           * The number of columns for extra-large size must not be smaller than the number of columns for large size.
           *
           * Default value is `2`.
           */
          getColumnsXL(): sap.ui.layout.form.ColumnsXL;
          /**
           * Returns a metadata object for class sap.ui.layout.form.ColumnContainerData.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.base.Metadata;
          /**
           * Sets a new value for property {@link #getColumnsL columnsL}.
           *
           * Number of columns the `FormContainer` element uses if the `Form` control has large size.
           *
           * The number of columns for large size must not be smaller than the number of columns for medium size.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `2`.
           */
          setColumnsL(
            /**
             * New value for property `columnsL`
             */
            sColumnsL: sap.ui.layout.form.ColumnsL
          ): sap.ui.layout.form.ColumnContainerData;
          /**
           * Sets a new value for property {@link #getColumnsM columnsM}.
           *
           * Number of columns the `FormContainer` element uses if the `Form` control has medium size.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `1`.
           */
          setColumnsM(
            /**
             * New value for property `columnsM`
             */
            sColumnsM: sap.ui.layout.form.ColumnsM
          ): sap.ui.layout.form.ColumnContainerData;
          /**
           * Sets a new value for property {@link #getColumnsXL columnsXL}.
           *
           * Number of columns the `FormContainer` element uses if the `Form` control has extra-large size.
           *
           * The number of columns for extra-large size must not be smaller than the number of columns for large size.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `2`.
           */
          setColumnsXL(
            /**
             * New value for property `columnsXL`
             */
            sColumnsXL: sap.ui.layout.form.ColumnsXL
          ): sap.ui.layout.form.ColumnContainerData;
        }
        /**
         * @SINCE 1.56.0
         *
         * The `ColumnLayout`-specific layout data for the `FormElement` content fields.
         *
         * One `FormElement` element contains 12 cells and has two sizes, small and large. Using `ColumnElementData`,
         * the default calculation of the cells used for a field or label can be overwritten.
         */
        class ColumnElementData extends sap.ui.core.LayoutData {
          /**
           * Constructor for a new sap.ui.layout.form.ColumnElementData.
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
            mSettings?: ColumnElementDataOpts
          );

          /**
           * Creates a new subclass of class sap.ui.layout.form.ColumnElementData with name `sClassName` and enriches
           * it with the information contained in `oClassInfo`.
           *
           * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.LayoutData.extend}.
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
           * Gets current value of property {@link #getCellsLarge cellsLarge}.
           *
           * Number of cells used by a field if the `FormElement` element is large. The label is then beside the fields
           * per default.
           *
           * If set to `12`, the full size of the `FormElement` element is used.
           *
           * Default value is `8`.
           */
          getCellsLarge(): sap.ui.layout.form.ColumnCells;
          /**
           * Gets current value of property {@link #getCellsSmall cellsSmall}.
           *
           * Number of cells used by a field if the `FormElement` element is small. The label is then above the fields
           * per default.
           *
           * If set to `12`, the full size of the `FormElement` is used.
           *
           * Default value is `12`.
           */
          getCellsSmall(): sap.ui.layout.form.ColumnCells;
          /**
           * Returns a metadata object for class sap.ui.layout.form.ColumnElementData.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.base.Metadata;
          /**
           * Sets a new value for property {@link #getCellsLarge cellsLarge}.
           *
           * Number of cells used by a field if the `FormElement` element is large. The label is then beside the fields
           * per default.
           *
           * If set to `12`, the full size of the `FormElement` element is used.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `8`.
           */
          setCellsLarge(
            /**
             * New value for property `cellsLarge`
             */
            sCellsLarge: sap.ui.layout.form.ColumnCells
          ): sap.ui.layout.form.ColumnElementData;
          /**
           * Sets a new value for property {@link #getCellsSmall cellsSmall}.
           *
           * Number of cells used by a field if the `FormElement` element is small. The label is then above the fields
           * per default.
           *
           * If set to `12`, the full size of the `FormElement` is used.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `12`.
           */
          setCellsSmall(
            /**
             * New value for property `cellsSmall`
             */
            sCellsSmall: sap.ui.layout.form.ColumnCells
          ): sap.ui.layout.form.ColumnElementData;
        }
        /**
         * @SINCE 1.56.0
         *
         * The `ColumnLayout` control renders a `Form` control in a column-based responsive way. Depending on its
         * size, the `Form` control is divided into one or more columns. (XL - max. 4 columns, L - max. 3 columns,
         * M - max. 2 columns and S - 1 column.)
         *
         * The `FormContainer` elements are spread out to the columns depending on the number of `FormContainer`
         * elements and their size. For example, if there are 4 columns and 2 `FormContainer` elements, each `FormContainer`
         * element will use 2 columns. If there are 3 columns and 2 `FormContainer` elements, the larger one will
         * use 2 columns, the smaller one 1 column. The size of a `FormContainer` element will be determined based
         * on the number of visible `FormElement` elements assigned to it. If there are more `FormContainer` elements
         * than columns, every `FormContainer` element uses only one column. So the last row of the `Form` control
         * will not be fully used.
         *
         * The default size of the `FormContainer` element can be overwritten by using `ColumnContainerData` as
         * `LayoutData`. If one `FormContainer` element has `ColumnContainerData` set, the size calculation of the
         * other `FormContainer` elements might not lead to the expected result. In this case, use `ColumnContainerData`
         * also for the other `FormContainer` elements.
         *
         * The `FormElement` elements are spread out to the columns of a `FormContainer` element arranged in a newspaper-like
         * order. The position of the labels and fields depends on the size of the used column. If there is enough
         * space, the labels are beside the fields, otherwise above the fields.
         *
         * The default size of a content control of a `FormElement` element can be overwritten using `ColumnElementData`
         * as `LayoutData`. If one control assigned to a `FormElement` element has `ColumnElementData` set, the
         * size calculation of the other controls assigned to the `FormElement` element might not lead to the expected
         * result. In this case, use `ColumnElementData` for the other controls, assigned to the `FormElement` element,
         * too.
         *
         * The placement of the `FormElement` elements is made by the browser `column-count` logic. So this can
         * be different in different browsers and lead in some cases to other results than might be expected.
         *
         * **Note:** This control cannot be used stand-alone, it just renders a `Form` control, so it must be assigned
         * to a `Form` control using the `layout` aggregation.
         */
        class ColumnLayout extends sap.ui.layout.form.FormLayout {
          /**
           * Constructor for a new `sap.ui.layout.form.ColumnLayout`.
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
            mSettings?: ColumnLayoutOpts
          );

          /**
           * Creates a new subclass of class sap.ui.layout.form.ColumnLayout with name `sClassName` and enriches it
           * with the information contained in `oClassInfo`.
           *
           * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.layout.form.FormLayout.extend}.
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
           * Gets current value of property {@link #getColumnsL columnsL}.
           *
           * Number of columns for large size.
           *
           * The number of columns for large size must not be smaller than the number of columns for medium size.
           *
           * Default value is `2`.
           */
          getColumnsL(): sap.ui.layout.form.ColumnsL;
          /**
           * Gets current value of property {@link #getColumnsM columnsM}.
           *
           * Number of columns for medium size.
           *
           * Default value is `1`.
           */
          getColumnsM(): sap.ui.layout.form.ColumnsM;
          /**
           * Gets current value of property {@link #getColumnsXL columnsXL}.
           *
           * Number of columns for extra-large size.
           *
           * The number of columns for extra-large size must not be smaller than the number of columns for large size.
           *
           * Default value is `2`.
           */
          getColumnsXL(): sap.ui.layout.form.ColumnsXL;
          /**
           * Gets current value of property {@link #getEmptyCellsLarge emptyCellsLarge}.
           *
           * Defines how many cells are empty at the end of a row. This could be used to keep the fields small on
           * large screens.
           *
           * Default value is `0`.
           */
          getEmptyCellsLarge(): sap.ui.layout.form.EmptyCells;
          /**
           * Gets current value of property {@link #getLabelCellsLarge labelCellsLarge}.
           *
           * Defines how many cells a label uses if the column is large.
           *
           * Default value is `4`.
           */
          getLabelCellsLarge(): sap.ui.layout.form.ColumnCells;
          /**
           * Returns a metadata object for class sap.ui.layout.form.ColumnLayout.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.base.Metadata;
          /**
           * Sets a new value for property {@link #getColumnsL columnsL}.
           *
           * Number of columns for large size.
           *
           * The number of columns for large size must not be smaller than the number of columns for medium size.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `2`.
           */
          setColumnsL(
            /**
             * New value for property `columnsL`
             */
            sColumnsL: sap.ui.layout.form.ColumnsL
          ): sap.ui.layout.form.ColumnLayout;
          /**
           * Sets a new value for property {@link #getColumnsM columnsM}.
           *
           * Number of columns for medium size.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `1`.
           */
          setColumnsM(
            /**
             * New value for property `columnsM`
             */
            sColumnsM: sap.ui.layout.form.ColumnsM
          ): sap.ui.layout.form.ColumnLayout;
          /**
           * Sets a new value for property {@link #getColumnsXL columnsXL}.
           *
           * Number of columns for extra-large size.
           *
           * The number of columns for extra-large size must not be smaller than the number of columns for large size.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `2`.
           */
          setColumnsXL(
            /**
             * New value for property `columnsXL`
             */
            sColumnsXL: sap.ui.layout.form.ColumnsXL
          ): sap.ui.layout.form.ColumnLayout;
          /**
           * Sets a new value for property {@link #getEmptyCellsLarge emptyCellsLarge}.
           *
           * Defines how many cells are empty at the end of a row. This could be used to keep the fields small on
           * large screens.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `0`.
           */
          setEmptyCellsLarge(
            /**
             * New value for property `emptyCellsLarge`
             */
            sEmptyCellsLarge: sap.ui.layout.form.EmptyCells
          ): sap.ui.layout.form.ColumnLayout;
          /**
           * Sets a new value for property {@link #getLabelCellsLarge labelCellsLarge}.
           *
           * Defines how many cells a label uses if the column is large.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `4`.
           */
          setLabelCellsLarge(
            /**
             * New value for property `labelCellsLarge`
             */
            sLabelCellsLarge: sap.ui.layout.form.ColumnCells
          ): sap.ui.layout.form.ColumnLayout;
        }
        /**
         * @SINCE 1.16.0
         *
         * A `Form` control arranges labels and fields (like input fields) into groups and rows. There are different
         * ways to visualize forms for different screen sizes.
         *
         * A `Form` is structured into `FormContainers`. Each `FormContainer` consists of `FormElements`. The `FormElements`
         * consists of a label and the form fields. A `Form` doesn't render its content by itself. The rendering
         * is done by the assigned `FormLayout`. This is so that the rendering can be adopted to new UI requirements
         * without changing the `Form` itself.
         *
         * For the content of a `Form`, `VariantLayoutData` are supported to allow simple switching of the `FormLayout`.
         * `LayoutData` on the content can be used to overwrite the default layout of the `Form`.
         *
         * The `Form` (and its sub-controls) automatically add label and field assignment to enable screen reader
         * support. It also adds keyboard support to navigate between the fields and groups inside the form.
         *
         * **Warning:** Do not put any layout or other container controls into the `FormElement`. Views are also
         * not supported. This could damage the visual layout, keyboard support and screen-reader support.
         *
         * If editable controls are used as content, the `editable` property must be set to `true`, otherwise to
         * `false`. If the `editable` property is set incorrectly, there will be visual issues like wrong label
         * alignment or wrong spacing between the controls.
         */
        class Form extends sap.ui.core.Control {
          /**
           * Constructor for a new sap.ui.layout.form.Form.
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
            mSettings?: FormOpts
          );

          /**
           * @SINCE 1.28.0
           *
           * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
           */
          addAriaLabelledBy(
            /**
             * The ariaLabelledBy to add; if empty, nothing is inserted
             */
            vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control
          ): sap.ui.layout.form.Form;
          /**
           * Adds some formContainer to the aggregation {@link #getFormContainers formContainers}.
           */
          addFormContainer(
            /**
             * The formContainer to add; if empty, nothing is inserted
             */
            oFormContainer: sap.ui.layout.form.FormContainer
          ): sap.ui.layout.form.Form;
          /**
           * Destroys all the formContainers in the aggregation {@link #getFormContainers formContainers}.
           */
          destroyFormContainers(): sap.ui.layout.form.Form;
          /**
           * Destroys the layout in the aggregation {@link #getLayout layout}.
           */
          destroyLayout(): sap.ui.layout.form.Form;
          /**
           * Destroys the title in the aggregation {@link #getTitle title}.
           */
          destroyTitle(): sap.ui.layout.form.Form;
          /**
           * @SINCE 1.36.0
           *
           * Destroys the toolbar in the aggregation {@link #getToolbar toolbar}.
           */
          destroyToolbar(): sap.ui.layout.form.Form;
          /**
           * Creates a new subclass of class sap.ui.layout.form.Form with name `sClassName` and enriches it with the
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
           * @SINCE 1.28.0
           *
           * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
           * ariaLabelledBy}.
           */
          getAriaLabelledBy(): sap.ui.core.ID[];
          /**
           * @SINCE 1.20.0
           *
           * Gets current value of property {@link #getEditable editable}.
           *
           * Applies a device-specific and theme-specific line height and label alignment to the form rows if the
           * form has editable content. If set, all (not only the editable) rows of the form will get the line height
           * of editable fields.
           *
           * The labels inside the form will be rendered by default in the according mode.
           *
           * **Note:** The setting of this property does not change the content of the form. For example, `Input`
           * controls in a form with `editable` set to false are still editable.
           *
           * **Warning:** If this property is wrongly set, this might lead to visual issues. The labels and fields
           * might be misaligned, the labels might be rendered in the wrong mode, and the spacing between the single
           * controls might be wrong. Also, controls that do not fit the mode might be rendered incorrectly.
           *
           * Default value is `false`.
           */
          getEditable(): boolean;
          /**
           * Gets content of aggregation {@link #getFormContainers formContainers}.
           *
           * Containers with the content of the form. A `FormContainer` represents a group inside the `Form`.
           */
          getFormContainers(): sap.ui.layout.form.FormContainer[];
          /**
           * Gets content of aggregation {@link #getLayout layout}.
           *
           * Layout of the `Form`. The assigned `Layout` renders the `Form`. We recommend using the `ResponsiveGridLayout`
           * for rendering a `Form`, as its responsiveness allows the available space to be used in the best way possible.
           */
          getLayout(): sap.ui.layout.form.FormLayout;
          /**
           * Returns a metadata object for class sap.ui.layout.form.Form.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.base.Metadata;
          /**
           * Gets content of aggregation {@link #getTitle title}.
           *
           * Title of the `Form`. Can either be a `Title` element or a string. If a `Title` element it used, the style
           * of the title can be set.
           *
           * **Note:** If a `Toolbar` is used, the `Title` is ignored.
           */
          getTitle(): sap.ui.core.Title | string;
          /**
           * @SINCE 1.36.0
           *
           * Gets content of aggregation {@link #getToolbar toolbar}.
           *
           * Toolbar of the `Form`.
           *
           * **Note:** If a `Toolbar` is used, the `Title` is ignored. If a title is needed inside the `Toolbar` it
           * must be added at content to the `Toolbar`. In this case add the `Title` to the `ariaLabelledBy` association.
           */
          getToolbar(): sap.ui.core.Toolbar;
          /**
           * Gets current value of property {@link #getWidth width}.
           *
           * Width of the `Form`.
           */
          getWidth(): sap.ui.core.CSSSize;
          /**
           * Checks for the provided `sap.ui.layout.form.FormContainer` in the aggregation {@link #getFormContainers
           * formContainers}. and returns its index if found or -1 otherwise.
           */
          indexOfFormContainer(
            /**
             * The formContainer whose index is looked for
             */
            oFormContainer: sap.ui.layout.form.FormContainer
          ): number;
          /**
           * Inserts a formContainer into the aggregation {@link #getFormContainers formContainers}.
           */
          insertFormContainer(
            /**
             * The formContainer to insert; if empty, nothing is inserted
             */
            oFormContainer: sap.ui.layout.form.FormContainer,
            /**
             * The `0`-based index the formContainer should be inserted at; for a negative value of `iIndex`, the formContainer
             * is inserted at position 0; for a value greater than the current size of the aggregation, the formContainer
             * is inserted at the last position
             */
            iIndex: number
          ): sap.ui.layout.form.Form;
          /**
           * @SINCE 1.28.0
           *
           * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
           */
          removeAllAriaLabelledBy(): sap.ui.core.ID[];
          /**
           * Removes all the controls from the aggregation {@link #getFormContainers formContainers}.
           *
           * Additionally, it unregisters them from the hosting UIArea.
           */
          removeAllFormContainers(): sap.ui.layout.form.FormContainer[];
          /**
           * @SINCE 1.28.0
           *
           * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
           */
          removeAriaLabelledBy(
            /**
             * The ariaLabelledBy to be removed or its index or ID
             */
            vAriaLabelledBy: number | sap.ui.core.ID | sap.ui.core.Control
          ): sap.ui.core.ID;
          /**
           * Removes a formContainer from the aggregation {@link #getFormContainers formContainers}.
           */
          removeFormContainer(
            /**
             * The formContainer to remove or its index or id
             */
            vFormContainer: number | string | sap.ui.layout.form.FormContainer
          ): sap.ui.layout.form.FormContainer;
          /**
           * @SINCE 1.20.0
           *
           * Sets a new value for property {@link #getEditable editable}.
           *
           * Applies a device-specific and theme-specific line height and label alignment to the form rows if the
           * form has editable content. If set, all (not only the editable) rows of the form will get the line height
           * of editable fields.
           *
           * The labels inside the form will be rendered by default in the according mode.
           *
           * **Note:** The setting of this property does not change the content of the form. For example, `Input`
           * controls in a form with `editable` set to false are still editable.
           *
           * **Warning:** If this property is wrongly set, this might lead to visual issues. The labels and fields
           * might be misaligned, the labels might be rendered in the wrong mode, and the spacing between the single
           * controls might be wrong. Also, controls that do not fit the mode might be rendered incorrectly.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `false`.
           */
          setEditable(
            /**
             * New value for property `editable`
             */
            bEditable: boolean
          ): sap.ui.layout.form.Form;
          /**
           * Sets the aggregated {@link #getLayout layout}.
           */
          setLayout(
            /**
             * The layout to set
             */
            oLayout: sap.ui.layout.form.FormLayout
          ): sap.ui.layout.form.Form;
          /**
           * Sets the aggregated {@link #getTitle title}.
           */
          setTitle(
            /**
             * The title to set
             */
            vTitle: sap.ui.core.Title | string
          ): sap.ui.layout.form.Form;
          /**
           * @SINCE 1.36.0
           *
           * Sets the aggregated {@link #getToolbar toolbar}.
           */
          setToolbar(
            /**
             * The toolbar to set
             */
            oToolbar: sap.ui.core.Toolbar
          ): sap.ui.layout.form.Form;
          /**
           * Sets a new value for property {@link #getWidth width}.
           *
           * Width of the `Form`.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setWidth(
            /**
             * New value for property `width`
             */
            sWidth: sap.ui.core.CSSSize
          ): sap.ui.layout.form.Form;
        }
        /**
         * @SINCE 1.16.0
         *
         * A `FormContainer` represents a group inside a `Form`. It consists of `FormElements`. The rendering of
         * the `FormContainer` is done by the `FormLayout` assigned to the `Form`.
         */
        class FormContainer extends sap.ui.core.Element {
          /**
           * Constructor for a new sap.ui.layout.form.FormContainer.
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
            mSettings?: FormContainerOpts
          );

          /**
           * @SINCE 1.36.0
           *
           * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
           */
          addAriaLabelledBy(
            /**
             * The ariaLabelledBy to add; if empty, nothing is inserted
             */
            vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control
          ): sap.ui.layout.form.FormContainer;
          /**
           * Adds some formElement to the aggregation {@link #getFormElements formElements}.
           */
          addFormElement(
            /**
             * The formElement to add; if empty, nothing is inserted
             */
            oFormElement: sap.ui.layout.form.FormElement
          ): sap.ui.layout.form.FormContainer;
          /**
           * Destroys all the formElements in the aggregation {@link #getFormElements formElements}.
           */
          destroyFormElements(): sap.ui.layout.form.FormContainer;
          /**
           * Destroys the title in the aggregation {@link #getTitle title}.
           */
          destroyTitle(): sap.ui.layout.form.FormContainer;
          /**
           * @SINCE 1.36.0
           *
           * Destroys the toolbar in the aggregation {@link #getToolbar toolbar}.
           */
          destroyToolbar(): sap.ui.layout.form.FormContainer;
          /**
           * Creates a new subclass of class sap.ui.layout.form.FormContainer with name `sClassName` and enriches
           * it with the information contained in `oClassInfo`.
           *
           * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
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
           * @SINCE 1.36.0
           *
           * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
           * ariaLabelledBy}.
           */
          getAriaLabelledBy(): sap.ui.core.ID[];
          /**
           * Gets current value of property {@link #getExpandable expandable}.
           *
           * Defines if the `FormContainer` is expandable.
           *
           * **Note:** The expander icon will only be shown if a `title` is set for the `FormContainer`.
           *
           * Default value is `false`.
           */
          getExpandable(): boolean;
          /**
           * Gets current value of property {@link #getExpanded expanded}.
           *
           * Container is expanded.
           *
           * **Note:** This property only works if `expandable` is set to `true`.
           *
           * Default value is `true`.
           */
          getExpanded(): boolean;
          /**
           * Gets content of aggregation {@link #getFormElements formElements}.
           *
           * The `FormElements` contain the content (labels and fields) of the `FormContainers`.
           */
          getFormElements(): sap.ui.layout.form.FormElement[];
          /**
           * Returns a metadata object for class sap.ui.layout.form.FormContainer.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.base.Metadata;
          /**
           * Gets content of aggregation {@link #getTitle title}.
           *
           * Title of the `FormContainer`. Can either be a `Title` element or a string. If a `Title` element is used,
           * the style of the title can be set.
           *
           * **Note:** If a `Toolbar` is used, the `Title` is ignored.
           */
          getTitle(): sap.ui.core.Title | string;
          /**
           * @SINCE 1.36.0
           *
           * Gets content of aggregation {@link #getToolbar toolbar}.
           *
           * Toolbar of the `FormContainer`.
           *
           * **Note:** If a `Toolbar` is used, the `Title` is ignored. If a title is needed inside the `Toolbar` it
           * must be added at content to the `Toolbar`. In this case add the `Title` to the `ariaLabelledBy` association.
           */
          getToolbar(): sap.ui.core.Toolbar;
          /**
           * Gets current value of property {@link #getVisible visible}.
           *
           * If set to `false`, the `FormContainer` is not rendered.
           *
           * Default value is `true`.
           */
          getVisible(): boolean;
          /**
           * Checks for the provided `sap.ui.layout.form.FormElement` in the aggregation {@link #getFormElements formElements}.
           * and returns its index if found or -1 otherwise.
           */
          indexOfFormElement(
            /**
             * The formElement whose index is looked for
             */
            oFormElement: sap.ui.layout.form.FormElement
          ): number;
          /**
           * Inserts a formElement into the aggregation {@link #getFormElements formElements}.
           */
          insertFormElement(
            /**
             * The formElement to insert; if empty, nothing is inserted
             */
            oFormElement: sap.ui.layout.form.FormElement,
            /**
             * The `0`-based index the formElement should be inserted at; for a negative value of `iIndex`, the formElement
             * is inserted at position 0; for a value greater than the current size of the aggregation, the formElement
             * is inserted at the last position
             */
            iIndex: number
          ): sap.ui.layout.form.FormContainer;
          /**
           * Determines if the `FormContainer` is visible or not. Per default it just returns the value of the `visible`
           * property. But this might be overwritten by inherited elements.
           *
           * For rendering by `FormLayouts` this function has to be used instead of `getVisible`.
           */
          isVisible(): boolean;
          /**
           * @SINCE 1.36.0
           *
           * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
           */
          removeAllAriaLabelledBy(): sap.ui.core.ID[];
          /**
           * Removes all the controls from the aggregation {@link #getFormElements formElements}.
           *
           * Additionally, it unregisters them from the hosting UIArea.
           */
          removeAllFormElements(): sap.ui.layout.form.FormElement[];
          /**
           * @SINCE 1.36.0
           *
           * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
           */
          removeAriaLabelledBy(
            /**
             * The ariaLabelledBy to be removed or its index or ID
             */
            vAriaLabelledBy: number | sap.ui.core.ID | sap.ui.core.Control
          ): sap.ui.core.ID;
          /**
           * Removes a formElement from the aggregation {@link #getFormElements formElements}.
           */
          removeFormElement(
            /**
             * The formElement to remove or its index or id
             */
            vFormElement: number | string | sap.ui.layout.form.FormElement
          ): sap.ui.layout.form.FormElement;
          /**
           * Sets a new value for property {@link #getExpandable expandable}.
           *
           * Defines if the `FormContainer` is expandable.
           *
           * **Note:** The expander icon will only be shown if a `title` is set for the `FormContainer`.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `false`.
           */
          setExpandable(
            /**
             * New value for property `expandable`
             */
            bExpandable: boolean
          ): sap.ui.layout.form.FormContainer;
          /**
           * Sets a new value for property {@link #getExpanded expanded}.
           *
           * Container is expanded.
           *
           * **Note:** This property only works if `expandable` is set to `true`.
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
          ): sap.ui.layout.form.FormContainer;
          /**
           * Sets the aggregated {@link #getTitle title}.
           */
          setTitle(
            /**
             * The title to set
             */
            vTitle: sap.ui.core.Title | string
          ): sap.ui.layout.form.FormContainer;
          /**
           * @SINCE 1.36.0
           *
           * Sets the aggregated {@link #getToolbar toolbar}.
           */
          setToolbar(
            /**
             * The toolbar to set
             */
            oToolbar: sap.ui.core.Toolbar
          ): sap.ui.layout.form.FormContainer;
          /**
           * Sets a new value for property {@link #getVisible visible}.
           *
           * If set to `false`, the `FormContainer` is not rendered.
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
          ): sap.ui.layout.form.FormContainer;
        }
        /**
         * @SINCE 1.16.0
         *
         * A `FormElement` represents a row in a `FormContainer`. A `FormElement` is a combination of one label
         * and different controls associated to this label.
         */
        class FormElement extends sap.ui.core.Element {
          /**
           * Constructor for a new sap.ui.layout.form.FormElement.
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
            mSettings?: FormElementOpts
          );

          /**
           * Adds some field to the aggregation {@link #getFields fields}.
           */
          addField(
            /**
             * The field to add; if empty, nothing is inserted
             */
            oField: sap.ui.core.Control
          ): sap.ui.layout.form.FormElement;
          /**
           * Destroys all the fields in the aggregation {@link #getFields fields}.
           */
          destroyFields(): sap.ui.layout.form.FormElement;
          /**
           * Destroys the label in the aggregation {@link #getLabel label}.
           */
          destroyLabel(): sap.ui.layout.form.FormElement;
          /**
           * Creates a new subclass of class sap.ui.layout.form.FormElement with name `sClassName` and enriches it
           * with the information contained in `oClassInfo`.
           *
           * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
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
           * Gets content of aggregation {@link #getFields fields}.
           *
           * Form controls that belong together to be displayed in one row of a `Form`.
           *
           * **Warning:** Do not put any layout or other container controls in here. This could damage the visual
           * layout, keyboard support and screen-reader support. Only form controls are allowed. Views are also not
           * supported. Allowed controls implement the interface `sap.ui.core.IFormContent`.
           */
          getFields(): sap.ui.core.Control[];
          /**
           * Gets content of aggregation {@link #getLabel label}.
           *
           * Label of the fields. Can either be a `Label` control or a string. If a `Label` control is used, the properties
           * of the `Label` can be set. If no assignment between `Label` and the fields is set via (`labelFor` property
           * of the `Label`), it will be done automatically by the `FormElement`. In this case the `Label` is assigned
           * to the fields of the `FormElement`.
           */
          getLabel(): sap.ui.core.Label | string;
          /**
           * Returns the `Label` of the `FormElement`, even if the `Label` is assigned as string. The `FormLayout`
           * needs the information of the label to render the `Form`.
           */
          getLabelControl(): sap.ui.core.Label;
          /**
           * Returns a metadata object for class sap.ui.layout.form.FormElement.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.base.Metadata;
          /**
           * Gets current value of property {@link #getVisible visible}.
           *
           * If set to `false`, the `FormElement` is not rendered.
           *
           * Default value is `true`.
           */
          getVisible(): boolean;
          /**
           * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getFields fields}. and returns
           * its index if found or -1 otherwise.
           */
          indexOfField(
            /**
             * The field whose index is looked for
             */
            oField: sap.ui.core.Control
          ): number;
          /**
           * Inserts a field into the aggregation {@link #getFields fields}.
           */
          insertField(
            /**
             * The field to insert; if empty, nothing is inserted
             */
            oField: sap.ui.core.Control,
            /**
             * The `0`-based index the field should be inserted at; for a negative value of `iIndex`, the field is inserted
             * at position 0; for a value greater than the current size of the aggregation, the field is inserted at
             * the last position
             */
            iIndex: number
          ): sap.ui.layout.form.FormElement;
          /**
           * Determines if the `FormElement` is visible or not. Per default it just returns the value of the `visible`
           * property. But this might be overwritten by inherited elements.
           *
           * For rendering by `FormLayouts` this function has to be used instead of `getVisible`.
           */
          isVisible(): boolean;
          /**
           * Removes all the controls from the aggregation {@link #getFields fields}.
           *
           * Additionally, it unregisters them from the hosting UIArea.
           */
          removeAllFields(): sap.ui.core.Control[];
          /**
           * Removes a field from the aggregation {@link #getFields fields}.
           */
          removeField(
            /**
             * The field to remove or its index or id
             */
            vField: number | string | sap.ui.core.Control
          ): sap.ui.core.Control;
          /**
           * Sets the aggregated {@link #getLabel label}.
           */
          setLabel(
            /**
             * The label to set
             */
            vLabel: sap.ui.core.Label | string
          ): sap.ui.layout.form.FormElement;
          /**
           * Sets a new value for property {@link #getVisible visible}.
           *
           * If set to `false`, the `FormElement` is not rendered.
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
          ): sap.ui.layout.form.FormElement;
        }
        /**
         * @SINCE 1.16.0
         *
         * Base layout to render a `Form`. Other layouts to render a `Form` must inherit from this one.
         *
         * **Note:** This control must not be used to render a `Form` in productive applications as it does not
         * fulfill any design guidelines and usability standards.
         */
        class FormLayout extends sap.ui.core.Control {
          /**
           * Constructor for a new sap.ui.layout.form.FormLayout.
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
            mSettings?: FormLayoutOpts
          );

          /**
           * Creates a new subclass of class sap.ui.layout.form.FormLayout with name `sClassName` and enriches it
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
           * @SINCE 1.36.0
           *
           * Gets current value of property {@link #getBackgroundDesign backgroundDesign}.
           *
           * Specifies the background color of the `Form` content.
           *
           * **Note:** The visualization of the different options depends on the theme used.
           *
           * Default value is `Translucent`.
           */
          getBackgroundDesign(): sap.ui.layout.BackgroundDesign;
          /**
           * Returns a metadata object for class sap.ui.layout.form.FormLayout.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.base.Metadata;
          /**
           * @SINCE 1.36.0
           *
           * Sets a new value for property {@link #getBackgroundDesign backgroundDesign}.
           *
           * Specifies the background color of the `Form` content.
           *
           * **Note:** The visualization of the different options depends on the theme used.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `Translucent`.
           */
          setBackgroundDesign(
            /**
             * New value for property `backgroundDesign`
             */
            sBackgroundDesign: sap.ui.layout.BackgroundDesign
          ): sap.ui.layout.form.FormLayout;
        }
        /**
         * @SINCE 1.16.0
         *
         * The `GridLayout`-specific layout data for `FormContainers`.
         */
        class GridContainerData extends sap.ui.core.LayoutData {
          /**
           * Constructor for a new sap.ui.layout.form.GridContainerData.
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
            mSettings?: GridContainerDataOpts
          );

          /**
           * Creates a new subclass of class sap.ui.layout.form.GridContainerData with name `sClassName` and enriches
           * it with the information contained in `oClassInfo`.
           *
           * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.LayoutData.extend}.
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
           * Gets current value of property {@link #getHalfGrid halfGrid}.
           *
           * If set, the container takes half the width of the `Form` (8 cells), if not it takes the full width (16
           * cells). If the `GridLayout` is set to `singleColumn`, the full width of the grid is only 8 cells. So
           * containers are rendered only once per row.
           *
           * Default value is `false`.
           */
          getHalfGrid(): boolean;
          /**
           * Returns a metadata object for class sap.ui.layout.form.GridContainerData.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.base.Metadata;
          /**
           * Sets a new value for property {@link #getHalfGrid halfGrid}.
           *
           * If set, the container takes half the width of the `Form` (8 cells), if not it takes the full width (16
           * cells). If the `GridLayout` is set to `singleColumn`, the full width of the grid is only 8 cells. So
           * containers are rendered only once per row.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `false`.
           */
          setHalfGrid(
            /**
             * New value for property `halfGrid`
             */
            bHalfGrid: boolean
          ): sap.ui.layout.form.GridContainerData;
        }
        /**
         * @SINCE 1.16.0
         *
         * The `GridLayout`-specific layout data for `FormElement` fields.
         */
        class GridElementData extends sap.ui.core.LayoutData {
          /**
           * Constructor for a new sap.ui.layout.form.GridElementData.
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
            mSettings?: GridElementDataOpts
          );

          /**
           * Creates a new subclass of class sap.ui.layout.form.GridElementData with name `sClassName` and enriches
           * it with the information contained in `oClassInfo`.
           *
           * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.LayoutData.extend}.
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
           * Gets current value of property {@link #getHCells hCells}.
           *
           * Number of cells in horizontal direction.
           *
           * If set to `auto`, the size is determined by the number of fields and the available cells. For labels
           * the auto size is 3 cells.
           *
           * If set to `full`, only one field is allowed within the `FormElement`. It gets the full width of the row
           * and the label is displayed above.
           *
           * **Note:** For labels, the full size setting has no effect.
           *
           * Default value is `auto`.
           */
          getHCells(): sap.ui.layout.form.GridElementCells;
          /**
           * Returns a metadata object for class sap.ui.layout.form.GridElementData.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.base.Metadata;
          /**
           * Gets current value of property {@link #getVCells vCells}.
           *
           * Number of cells in vertical direction.
           *
           * **Note:** This property has no effect on labels.
           *
           * Default value is `1`.
           */
          getVCells(): number;
          /**
           * Sets a new value for property {@link #getHCells hCells}.
           *
           * Number of cells in horizontal direction.
           *
           * If set to `auto`, the size is determined by the number of fields and the available cells. For labels
           * the auto size is 3 cells.
           *
           * If set to `full`, only one field is allowed within the `FormElement`. It gets the full width of the row
           * and the label is displayed above.
           *
           * **Note:** For labels, the full size setting has no effect.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `auto`.
           */
          setHCells(
            /**
             * New value for property `hCells`
             */
            sHCells: sap.ui.layout.form.GridElementCells
          ): sap.ui.layout.form.GridElementData;
          /**
           * Sets a new value for property {@link #getVCells vCells}.
           *
           * Number of cells in vertical direction.
           *
           * **Note:** This property has no effect on labels.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `1`.
           */
          setVCells(
            /**
             * New value for property `vCells`
             */
            iVCells: number
          ): sap.ui.layout.form.GridElementData;
        }
        /**
         * @SINCE 1.16.0
         *
         * This `FormLayout` renders a `Form` using an HTML-table based grid. This can be a 16 column grid or an
         * 8 column grid. The grid is stable, so the alignment of the fields is the same for all screen sizes or
         * widths of the `Form`. Only the width of the single grid columns depends on the available width.
         *
         * To adjust the appearance inside the `GridLayout`, you can use `GridContainerData` for `FormContainers`
         * and `GridElementData` for content fields.
         *
         * **Note:** If content fields have a `width` property this will be ignored, as the width of the controls
         * is set by the grid cells.
         *
         * This control cannot be used stand-alone, it just renders a `Form`, so it must be assigned to a `Form`
         * using the `layout` aggregation.
         */
        class GridLayout extends sap.ui.layout.form.FormLayout {
          /**
           * Constructor for a new sap.ui.layout.form.GridLayout.
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
            mSettings?: GridLayoutOpts
          );

          /**
           * Creates a new subclass of class sap.ui.layout.form.GridLayout with name `sClassName` and enriches it
           * with the information contained in `oClassInfo`.
           *
           * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.layout.form.FormLayout.extend}.
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
           * Returns a metadata object for class sap.ui.layout.form.GridLayout.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.base.Metadata;
          /**
           * Gets current value of property {@link #getSingleColumn singleColumn}.
           *
           * If set, the grid renders only one `FormContainer` per column. That means one `FormContainer` is below
           * the other. The whole grid has 8 cells per row.
           *
           * If not set, `FormContainer` can use the full width of the grid or two `FormContainers` can be placed
           * beside each other. In this case the whole grid has 16 cells per row.
           *
           * Default value is `false`.
           */
          getSingleColumn(): boolean;
          /**
           * Sets a new value for property {@link #getSingleColumn singleColumn}.
           *
           * If set, the grid renders only one `FormContainer` per column. That means one `FormContainer` is below
           * the other. The whole grid has 8 cells per row.
           *
           * If not set, `FormContainer` can use the full width of the grid or two `FormContainers` can be placed
           * beside each other. In this case the whole grid has 16 cells per row.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `false`.
           */
          setSingleColumn(
            /**
             * New value for property `singleColumn`
             */
            bSingleColumn: boolean
          ): sap.ui.layout.form.GridLayout;
        }
        /**
         * @SINCE 1.16.0
         *
         * The `ResponsiveGridLayout` control renders a `Form` using a responsive grid. Internally the `Grid` control
         * is used for rendering. Using this layout, the `Form` is rendered in a responsive way. Depending on the
         * available space, the `FormContainers` are rendered in one or different columns and the labels are rendered
         * in the same row as the fields or above the fields. This behavior can be influenced by the properties
         * of this layout control.
         *
         * On the `FormContainers`, labels and content fields, `GridData` can be used to change the default rendering.
         * `GridData` is not supported for `FormElements`.
         *
         * **Note:** If `GridData` is used, this may result in a much more complex layout than the default one.
         * This means that in some cases, the calculation for the other content may not bring the expected result.
         * In such cases, `GridData` should be used for all content controls to disable the default behavior.
         *
         * This control cannot be used stand-alone, it just renders a `Form`, so it must be assigned to a `Form`
         * using the `layout` aggregation.
         */
        class ResponsiveGridLayout extends sap.ui.layout.form.FormLayout {
          /**
           * Constructor for a new `sap.ui.layout.form.ResponsiveGridLayout`.
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
            mSettings?: ResponsiveGridLayoutOpts
          );

          /**
           * Creates a new subclass of class sap.ui.layout.form.ResponsiveGridLayout with name `sClassName` and enriches
           * it with the information contained in `oClassInfo`.
           *
           * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.layout.form.FormLayout.extend}.
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
           * @SINCE 1.34.0
           *
           * Gets current value of property {@link #getAdjustLabelSpan adjustLabelSpan}.
           *
           * If set, the usage of `labelSpanL` and `labelSpanM` are dependent on the number of `FormContainers` in
           * one row. If only one `FormContainer` is displayed in one row, `labelSpanM` is used to define the size
           * of the label. This is the same for medium and large `Forms`. This is done to align the labels on forms
           * where full-size `FormContainers` and multiple-column rows are used in the same `Form` (because every
           * `FormContainer` has its own `Grid` inside).
           *
           * If not set, the usage of `labelSpanL` and `labelSpanM` are dependent on the `Form` size. The number of
           * `FormContainers` doesn't matter in this case.
           *
           * Default value is `true`.
           */
          getAdjustLabelSpan(): boolean;
          /**
           * @SINCE 1.16.3
           *
           * Gets current value of property {@link #getBreakpointL breakpointL}.
           *
           * Breakpoint (in pixel) between Medium size and Large size.
           *
           * Default value is `1024`.
           */
          getBreakpointL(): number;
          /**
           * @SINCE 1.16.3
           *
           * Gets current value of property {@link #getBreakpointM breakpointM}.
           *
           * Breakpoint (in pixel) between Small size and Medium size.
           *
           * Default value is `600`.
           */
          getBreakpointM(): number;
          /**
           * @SINCE 1.34.0
           *
           * Gets current value of property {@link #getBreakpointXL breakpointXL}.
           *
           * Breakpoint (in pixel) between large size and extra large (XL) size.
           *
           * Default value is `1440`.
           */
          getBreakpointXL(): number;
          /**
           * @SINCE 1.16.3
           *
           * Gets current value of property {@link #getColumnsL columnsL}.
           *
           * Number of columns for large size.
           *
           * The number of columns for large size must not be smaller than the number of columns for medium size.
           *
           * Default value is `2`.
           */
          getColumnsL(): number;
          /**
           * @SINCE 1.16.3
           *
           * Gets current value of property {@link #getColumnsM columnsM}.
           *
           * Number of columns for medium size.
           *
           * Default value is `1`.
           */
          getColumnsM(): number;
          /**
           * @SINCE 1.34.0
           *
           * Gets current value of property {@link #getColumnsXL columnsXL}.
           *
           * Number of columns for extra large size.
           *
           * The number of columns for extra large size must not be smaller than the number of columns for large size.
           * **Note:** If the default value -1 is not overwritten with the meaningful one then the `columnsL` value
           * is used (from the backward compatibility reasons).
           *
           * Default value is `-1`.
           */
          getColumnsXL(): number;
          /**
           * @SINCE 1.16.3
           *
           * Gets current value of property {@link #getEmptySpanL emptySpanL}.
           *
           * Number of grid cells that are empty at the end of each line on large size.
           *
           * Default value is `0`.
           */
          getEmptySpanL(): number;
          /**
           * @SINCE 1.16.3
           *
           * Gets current value of property {@link #getEmptySpanM emptySpanM}.
           *
           * Number of grid cells that are empty at the end of each line on medium size.
           *
           * Default value is `0`.
           */
          getEmptySpanM(): number;
          /**
           * @SINCE 1.16.3
           *
           * Gets current value of property {@link #getEmptySpanS emptySpanS}.
           *
           * Number of grid cells that are empty at the end of each line on small size.
           *
           * Default value is `0`.
           */
          getEmptySpanS(): number;
          /**
           * @SINCE 1.34.0
           *
           * Gets current value of property {@link #getEmptySpanXL emptySpanXL}.
           *
           * Number of grid cells that are empty at the end of each line on extra large size.
           *
           * **Note:** If the default value -1 is not overwritten with the meaningful one then the `emptySpanL` value
           * is used.
           *
           * Default value is `-1`.
           */
          getEmptySpanXL(): number;
          /**
           * @SINCE 1.16.3
           *
           * Gets current value of property {@link #getLabelSpanL labelSpanL}.
           *
           * Default span for labels in large size.
           *
           * **Note:** If `adjustLabelSpan` is set, this property is only used if more than 1 `FormContainer` is in
           * one line. If only 1 `FormContainer` is in the line, then the `labelSpanM` value is used.
           *
           * Default value is `4`.
           */
          getLabelSpanL(): number;
          /**
           * @SINCE 1.16.3
           *
           * Gets current value of property {@link #getLabelSpanM labelSpanM}.
           *
           * Default span for labels in medium size.
           *
           * **Note:** If `adjustLabelSpan` is set this property is used for full-size `FormContainers`. If more than
           * one `FormContainer` is in one line, `labelSpanL` is used.
           *
           * Default value is `2`.
           */
          getLabelSpanM(): number;
          /**
           * @SINCE 1.16.3
           *
           * Gets current value of property {@link #getLabelSpanS labelSpanS}.
           *
           * Default span for labels in small size.
           *
           * Default value is `12`.
           */
          getLabelSpanS(): number;
          /**
           * @SINCE 1.34.0
           *
           * Gets current value of property {@link #getLabelSpanXL labelSpanXL}.
           *
           * Default span for labels in extra large size.
           *
           * **Note:** If the default value -1 is not overwritten with the meaningful one then the `labelSpanL` value
           * is used.
           *
           * Default value is `-1`.
           */
          getLabelSpanXL(): number;
          /**
           * Returns a metadata object for class sap.ui.layout.form.ResponsiveGridLayout.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.base.Metadata;
          /**
           * @SINCE 1.34.0
           *
           * Gets current value of property {@link #getSingleContainerFullSize singleContainerFullSize}.
           *
           * If the `Form` contains only one single `FormContainer` and this property is set, the `FormContainer`
           * is displayed using the full size of the `Form`. In this case the properties `columnsXL`, `columnsL` and
           * `columnsM` are ignored.
           *
           * In all other cases the `FormContainer` is displayed in the size of one column.
           *
           * Default value is `true`.
           */
          getSingleContainerFullSize(): boolean;
          /**
           * @SINCE 1.34.0
           *
           * Sets a new value for property {@link #getAdjustLabelSpan adjustLabelSpan}.
           *
           * If set, the usage of `labelSpanL` and `labelSpanM` are dependent on the number of `FormContainers` in
           * one row. If only one `FormContainer` is displayed in one row, `labelSpanM` is used to define the size
           * of the label. This is the same for medium and large `Forms`. This is done to align the labels on forms
           * where full-size `FormContainers` and multiple-column rows are used in the same `Form` (because every
           * `FormContainer` has its own `Grid` inside).
           *
           * If not set, the usage of `labelSpanL` and `labelSpanM` are dependent on the `Form` size. The number of
           * `FormContainers` doesn't matter in this case.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `true`.
           */
          setAdjustLabelSpan(
            /**
             * New value for property `adjustLabelSpan`
             */
            bAdjustLabelSpan: boolean
          ): sap.ui.layout.form.ResponsiveGridLayout;
          /**
           * @SINCE 1.16.3
           *
           * Sets a new value for property {@link #getBreakpointL breakpointL}.
           *
           * Breakpoint (in pixel) between Medium size and Large size.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `1024`.
           */
          setBreakpointL(
            /**
             * New value for property `breakpointL`
             */
            iBreakpointL: number
          ): sap.ui.layout.form.ResponsiveGridLayout;
          /**
           * @SINCE 1.16.3
           *
           * Sets a new value for property {@link #getBreakpointM breakpointM}.
           *
           * Breakpoint (in pixel) between Small size and Medium size.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `600`.
           */
          setBreakpointM(
            /**
             * New value for property `breakpointM`
             */
            iBreakpointM: number
          ): sap.ui.layout.form.ResponsiveGridLayout;
          /**
           * @SINCE 1.34.0
           *
           * Sets a new value for property {@link #getBreakpointXL breakpointXL}.
           *
           * Breakpoint (in pixel) between large size and extra large (XL) size.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `1440`.
           */
          setBreakpointXL(
            /**
             * New value for property `breakpointXL`
             */
            iBreakpointXL: number
          ): sap.ui.layout.form.ResponsiveGridLayout;
          /**
           * @SINCE 1.16.3
           *
           * Sets a new value for property {@link #getColumnsL columnsL}.
           *
           * Number of columns for large size.
           *
           * The number of columns for large size must not be smaller than the number of columns for medium size.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `2`.
           */
          setColumnsL(
            /**
             * New value for property `columnsL`
             */
            iColumnsL: number
          ): sap.ui.layout.form.ResponsiveGridLayout;
          /**
           * @SINCE 1.16.3
           *
           * Sets a new value for property {@link #getColumnsM columnsM}.
           *
           * Number of columns for medium size.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `1`.
           */
          setColumnsM(
            /**
             * New value for property `columnsM`
             */
            iColumnsM: number
          ): sap.ui.layout.form.ResponsiveGridLayout;
          /**
           * @SINCE 1.34.0
           *
           * Sets a new value for property {@link #getColumnsXL columnsXL}.
           *
           * Number of columns for extra large size.
           *
           * The number of columns for extra large size must not be smaller than the number of columns for large size.
           * **Note:** If the default value -1 is not overwritten with the meaningful one then the `columnsL` value
           * is used (from the backward compatibility reasons).
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `-1`.
           */
          setColumnsXL(
            /**
             * New value for property `columnsXL`
             */
            iColumnsXL: number
          ): sap.ui.layout.form.ResponsiveGridLayout;
          /**
           * @SINCE 1.16.3
           *
           * Sets a new value for property {@link #getEmptySpanL emptySpanL}.
           *
           * Number of grid cells that are empty at the end of each line on large size.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `0`.
           */
          setEmptySpanL(
            /**
             * New value for property `emptySpanL`
             */
            iEmptySpanL: number
          ): sap.ui.layout.form.ResponsiveGridLayout;
          /**
           * @SINCE 1.16.3
           *
           * Sets a new value for property {@link #getEmptySpanM emptySpanM}.
           *
           * Number of grid cells that are empty at the end of each line on medium size.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `0`.
           */
          setEmptySpanM(
            /**
             * New value for property `emptySpanM`
             */
            iEmptySpanM: number
          ): sap.ui.layout.form.ResponsiveGridLayout;
          /**
           * @SINCE 1.16.3
           *
           * Sets a new value for property {@link #getEmptySpanS emptySpanS}.
           *
           * Number of grid cells that are empty at the end of each line on small size.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `0`.
           */
          setEmptySpanS(
            /**
             * New value for property `emptySpanS`
             */
            iEmptySpanS: number
          ): sap.ui.layout.form.ResponsiveGridLayout;
          /**
           * @SINCE 1.34.0
           *
           * Sets a new value for property {@link #getEmptySpanXL emptySpanXL}.
           *
           * Number of grid cells that are empty at the end of each line on extra large size.
           *
           * **Note:** If the default value -1 is not overwritten with the meaningful one then the `emptySpanL` value
           * is used.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `-1`.
           */
          setEmptySpanXL(
            /**
             * New value for property `emptySpanXL`
             */
            iEmptySpanXL: number
          ): sap.ui.layout.form.ResponsiveGridLayout;
          /**
           * @SINCE 1.16.3
           *
           * Sets a new value for property {@link #getLabelSpanL labelSpanL}.
           *
           * Default span for labels in large size.
           *
           * **Note:** If `adjustLabelSpan` is set, this property is only used if more than 1 `FormContainer` is in
           * one line. If only 1 `FormContainer` is in the line, then the `labelSpanM` value is used.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `4`.
           */
          setLabelSpanL(
            /**
             * New value for property `labelSpanL`
             */
            iLabelSpanL: number
          ): sap.ui.layout.form.ResponsiveGridLayout;
          /**
           * @SINCE 1.16.3
           *
           * Sets a new value for property {@link #getLabelSpanM labelSpanM}.
           *
           * Default span for labels in medium size.
           *
           * **Note:** If `adjustLabelSpan` is set this property is used for full-size `FormContainers`. If more than
           * one `FormContainer` is in one line, `labelSpanL` is used.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `2`.
           */
          setLabelSpanM(
            /**
             * New value for property `labelSpanM`
             */
            iLabelSpanM: number
          ): sap.ui.layout.form.ResponsiveGridLayout;
          /**
           * @SINCE 1.16.3
           *
           * Sets a new value for property {@link #getLabelSpanS labelSpanS}.
           *
           * Default span for labels in small size.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `12`.
           */
          setLabelSpanS(
            /**
             * New value for property `labelSpanS`
             */
            iLabelSpanS: number
          ): sap.ui.layout.form.ResponsiveGridLayout;
          /**
           * @SINCE 1.34.0
           *
           * Sets a new value for property {@link #getLabelSpanXL labelSpanXL}.
           *
           * Default span for labels in extra large size.
           *
           * **Note:** If the default value -1 is not overwritten with the meaningful one then the `labelSpanL` value
           * is used.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `-1`.
           */
          setLabelSpanXL(
            /**
             * New value for property `labelSpanXL`
             */
            iLabelSpanXL: number
          ): sap.ui.layout.form.ResponsiveGridLayout;
          /**
           * @SINCE 1.34.0
           *
           * Sets a new value for property {@link #getSingleContainerFullSize singleContainerFullSize}.
           *
           * If the `Form` contains only one single `FormContainer` and this property is set, the `FormContainer`
           * is displayed using the full size of the `Form`. In this case the properties `columnsXL`, `columnsL` and
           * `columnsM` are ignored.
           *
           * In all other cases the `FormContainer` is displayed in the size of one column.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `true`.
           */
          setSingleContainerFullSize(
            /**
             * New value for property `singleContainerFullSize`
             */
            bSingleContainerFullSize: boolean
          ): sap.ui.layout.form.ResponsiveGridLayout;
        }
        /**
         * @SINCE 1.16.0
         *
         * The `ResponsiveLayout` renders a `Form` with a responsive layout. Internally the `ResponsiveFlowLayout`
         * is used. The responsiveness of this layout tries to best use the available space. This means that the
         * order of the `FormContainers`, labels and fields depends on the available space.
         *
         * On the `FormContainers`, `FormElements`, labels and content fields, `ResponsiveFlowLayoutData` can be
         * used to change the default rendering.
         *
         * We suggest using the `ResponsiveGridLayout` instead of this layout because this is easier to consume
         * and brings more stable responsive output.
         *
         * **Note:** If `ResponsiveFlowLayoutData` are used this may result in a much more complex layout than the
         * default one. This means that in some cases, the calculation for the other content may not bring the expected
         * result. In such cases, `ResponsiveFlowLayoutData` should be used for all content controls to disable
         * the default behavior.
         *
         * This control cannot be used stand-alone, it just renders a `Form`, so it must be assigned to a `Form`
         * using the `layout` aggregation.
         */
        class ResponsiveLayout extends sap.ui.layout.form.FormLayout {
          /**
           * Constructor for a new sap.ui.layout.form.ResponsiveLayout.
           */
          constructor(
            /**
             * ID for the new control, generated automatically if no ID is given
             */
            sId?: string,
            /**
             * Initial settings for the new control
             */
            mSettings?: ResponsiveLayoutOpts
          );

          /**
           * Creates a new subclass of class sap.ui.layout.form.ResponsiveLayout with name `sClassName` and enriches
           * it with the information contained in `oClassInfo`.
           *
           * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.layout.form.FormLayout.extend}.
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
           * Returns a metadata object for class sap.ui.layout.form.ResponsiveLayout.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.base.Metadata;
        }
        /**
         * @SINCE 1.16.0
         *
         * The `SimpleForm` provides an easy-to-use API to create simple forms. Inside a `SimpleForm`, a `Form`
         * control is created along with its `FormContainers` and `FormElements`, but the complexity in the API
         * is removed.
         * 	 - A new `Title` or `Toolbar` starts a new group (`FormContainer`) in the form.
         * 	 - A new `Label` starts a new row (`FormElement`) in the form.
         * 	 - All other controls will be assigned to the row (`FormElement`) that started with the last label.
         * 			 Use `LayoutData` to influence the layout for special cases in the Input/Display controls.
         *
         * **Note:** If a more complex form is needed, use `Form` instead.
         */
        class SimpleForm extends sap.ui.core.Control {
          /**
           * Constructor for a new sap.ui.layout.form.SimpleForm.
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
            mSettings?: SimpleFormOpts
          );

          /**
           * @SINCE 1.32.0
           *
           * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
           */
          addAriaLabelledBy(
            /**
             * The ariaLabelledBy to add; if empty, nothing is inserted
             */
            vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control
          ): sap.ui.layout.form.SimpleForm;
          /**
           * Adds some content to the aggregation {@link #getContent content}.
           */
          addContent(
            /**
             * The content to add; if empty, nothing is inserted
             */
            oContent: sap.ui.core.Element
          ): sap.ui.layout.form.SimpleForm;
          /**
           * Destroys all the content in the aggregation {@link #getContent content}.
           */
          destroyContent(): sap.ui.layout.form.SimpleForm;
          /**
           * @SINCE 1.16.3
           *
           * Destroys the title in the aggregation {@link #getTitle title}.
           */
          destroyTitle(): sap.ui.layout.form.SimpleForm;
          /**
           * @SINCE 1.36.0
           *
           * Destroys the toolbar in the aggregation {@link #getToolbar toolbar}.
           */
          destroyToolbar(): sap.ui.layout.form.SimpleForm;
          /**
           * Creates a new subclass of class sap.ui.layout.form.SimpleForm with name `sClassName` and enriches it
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
           * @SINCE 1.34.0
           *
           * Gets current value of property {@link #getAdjustLabelSpan adjustLabelSpan}.
           *
           * If set, the usage of `labelSpanL` and `labelSpanM` are dependent on the number of `FormContainers` in
           * one row. If only one `FormContainer` is displayed in one row, `labelSpanM` is used to define the size
           * of the label. This is the same for medium and large `Forms`. This is done to align the labels on forms
           * where full-size `FormContainers` and multiple-column rows are used in the same `Form` (because every
           * `FormContainer` has its own grid inside).
           *
           * If not set, the usage of `labelSpanL` and `labelSpanM` are dependent on the `Form` size. The number of
           * `FormContainers` doesn't matter in this case.
           *
           * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
           *
           * Default value is `true`.
           */
          getAdjustLabelSpan(): boolean;
          /**
           * @SINCE 1.32.0
           *
           * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
           * ariaLabelledBy}.
           */
          getAriaLabelledBy(): sap.ui.core.ID[];
          /**
           * @SINCE 1.36.0
           *
           * Gets current value of property {@link #getBackgroundDesign backgroundDesign}.
           *
           * Specifies the background color of the `SimpleForm` content.
           *
           * The visualization of the different options depends on the used theme.
           *
           * Default value is `Translucent`.
           */
          getBackgroundDesign(): sap.ui.layout.BackgroundDesign;
          /**
           * @SINCE 1.16.3
           *
           * Gets current value of property {@link #getBreakpointL breakpointL}.
           *
           * Breakpoint between Medium size and Large size.
           *
           * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
           *
           * Default value is `1024`.
           */
          getBreakpointL(): number;
          /**
           * @SINCE 1.16.3
           *
           * Gets current value of property {@link #getBreakpointM breakpointM}.
           *
           * Breakpoint between Small size and Medium size.
           *
           * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
           *
           * Default value is `600`.
           */
          getBreakpointM(): number;
          /**
           * @SINCE 1.34.0
           *
           * Gets current value of property {@link #getBreakpointXL breakpointXL}.
           *
           * Breakpoint between Medium size and Large size.
           *
           * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
           *
           * Default value is `1440`.
           */
          getBreakpointXL(): number;
          /**
           * @SINCE 1.16.3
           *
           * Gets current value of property {@link #getColumnsL columnsL}.
           *
           * Form columns for large size. The number of columns for large size must not be smaller than the number
           * of columns for medium size.
           *
           * **Note:** This property is only used if a `ResponsiveGridLayout` or a `ColumnLayout` is used as a layout.
           *
           * Default value is `2`.
           */
          getColumnsL(): number;
          /**
           * @SINCE 1.16.3
           *
           * Gets current value of property {@link #getColumnsM columnsM}.
           *
           * Form columns for medium size.
           *
           * **Note:** This property is only used if a `ResponsiveGridLayout` or a `ColumnLayout` is used as a layout.
           *
           * Default value is `1`.
           */
          getColumnsM(): number;
          /**
           * @SINCE 1.34.0
           *
           * Gets current value of property {@link #getColumnsXL columnsXL}.
           *
           * Form columns for extra large size. The number of columns for extra large size must not be smaller than
           * the number of columns for large size.
           *
           * **Note:** This property is only used if a `ResponsiveGridLayout` or a `ColumnLayout` is used as a layout.
           * If the default value -1 is not overwritten with the meaningful one then the `columnsL` value is used
           * (from the backward compatibility reasons).
           *
           * Default value is `-1`.
           */
          getColumnsXL(): number;
          /**
           * Gets content of aggregation {@link #getContent content}.
           *
           * The content of the form is structured in the following way:
           * 	 - Add a `Title` or `Toolbar` control to start a new group (`FormContainer`).
           * 	 - Add a `Label` control to start a new row (`FormElement`).
           * 	 - Add controls as input fields, text fields or other as needed.
           * 	 - Use `LayoutData` to influence the layout for special cases in the single controls. For example, if
           * 			a `ResponsiveLayout` is used as a layout, the form content is weighted using weight 3 for the labels
           * 			and weight 5 for the fields part. By default the label column is 192 pixels wide. If your input controls
           * 			should influence their width, you can add `sap.ui.layout.ResponsiveFlowLayoutData` to them via `setLayoutData`
           * 			method. Ensure that the sum of the weights in the `ResponsiveFlowLayoutData` is not more than 5, as this
           * 			is the total width of the input control part of each form row.  Example for a row where the `Input`
           * 			weight 4 and the second `Input` weight 1 (using `ResponsiveLayout`):
           * ```javascript
           *
           * new sap.m.Label({text:"Label"});
           * new sap.m.Input({value:"Weight 4", layoutData: new sap.ui.layout.ResponsiveFlowLayoutData({weight:4})}),
           * new sap.m.Input({value:"Weight 1", layoutData: new sap.ui.layout.ResponsiveFlowLayoutData({weight:1})}),
           * ```
           *
           *
           * For example, if a `ResponsiveGridLayout` is used as a layout, there are 12 cells in one row. Depending
           * on the screen size the labels use the defined `labelSpan`. The remaining cells are used for the fields
           * (and `emptySpan` if defined). The available cells are distributed to all fields in the row. If one field
           * should use a fixed number of cells you can add `sap.ui.layout.GridData` to them via `setLayoutData` method.
           * If there are additional fields in the row they will get the remaining cells.  Example for a row
           * with two `Input` controls where one uses four cells on small screens, one cell on medium screens and
           * 2 cells on larger screens (using `ResponsiveGridLayout`):
           * ```javascript
           *
           * new sap.m.Label({text:"Label"});
           * new sap.m.Input({value:"auto size"}),
           * new sap.m.Input({value:"fix size", layoutData: new sap.ui.layout.GridData({span: "XL1 L1 M2 S4"})}),
           * ```
           *
           *
           * **Warning:** Do not put any layout or other container controls in here. This could damage the visual
           * layout, keyboard support and screen-reader support. Only labels, titles, toolbars and form controls are
           * allowed. Views are also not supported. Allowed form controls implement the interface `sap.ui.core.IFormContent`.
           *
           * If editable controls are used as content, the `editable` property must be set to `true`, otherwise to
           * `false`. If the `editable` property is set incorrectly, there will be visual issues like wrong label
           * alignment or wrong spacing between the controls.
           */
          getContent(): sap.ui.core.Element[];
          /**
           * Gets current value of property {@link #getEditable editable}.
           *
           * Applies a device-specific and theme-specific line height and label alignment to the form rows if the
           * form has editable content. If set, all (not only the editable) rows of the form will get the line height
           * of editable fields.
           *
           * The labels inside the form will be rendered by default in the according mode.
           *
           * **Note:** The setting of this property does not change the content of the form. For example, `Input`
           * controls in a form with `editable` set to false are still editable.
           *
           * **Warning:** If this property is wrongly set, this might lead to visual issues. The labels and fields
           * might be misaligned, the labels might be rendered in the wrong mode, and the spacing between the single
           * controls might be wrong. Also, controls that do not fit the mode might be rendered incorrectly.
           */
          getEditable(): boolean;
          /**
           * @SINCE 1.16.3
           *
           * Gets current value of property {@link #getEmptySpanL emptySpanL}.
           *
           * Number of grid cells that are empty at the end of each line on large size.
           *
           * **Note:** This property is only used if a `ResponsiveGridLayout` or a `ColumnLayout` is used as a layout.
           * If a `ColumnLayout` is used, this property defines the empty cells for large columns.
           *
           * Default value is `0`.
           */
          getEmptySpanL(): number;
          /**
           * @SINCE 1.16.3
           *
           * Gets current value of property {@link #getEmptySpanM emptySpanM}.
           *
           * Number of grid cells that are empty at the end of each line on medium size.
           *
           * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
           *
           * Default value is `0`.
           */
          getEmptySpanM(): number;
          /**
           * @SINCE 1.16.3
           *
           * Gets current value of property {@link #getEmptySpanS emptySpanS}.
           *
           * Number of grid cells that are empty at the end of each line on small size.
           *
           * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
           *
           * Default value is `0`.
           */
          getEmptySpanS(): number;
          /**
           * @SINCE 1.34.0
           *
           * Gets current value of property {@link #getEmptySpanXL emptySpanXL}.
           *
           * Number of grid cells that are empty at the end of each line on extra large size.
           *
           * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout. If the default
           * value -1 is not overwritten with the meaningful one then the `emptySpanL` value is used (from the backward
           * compatibility reasons).
           *
           * Default value is `-1`.
           */
          getEmptySpanXL(): number;
          /**
           * Gets current value of property {@link #getLabelMinWidth labelMinWidth}.
           *
           * Specifies the min-width in pixels of the label in all form rows.
           *
           * **Note:** This property is only used if a `ResponsiveLayout` is used as a layout.
           *
           * Default value is `192`.
           */
          getLabelMinWidth(): number;
          /**
           * @SINCE 1.16.3
           *
           * Gets current value of property {@link #getLabelSpanL labelSpanL}.
           *
           * Default span for labels in large size.
           *
           * **Note:** If `adjustLabelSpan` is set, this property is only used if more than 1 `FormContainer` is in
           * one line. If only 1 `FormContainer` is in the line, then the `labelSpanM` value is used.
           *
           * **Note:** This property is only used if `ResponsiveGridLayout` or `ColumnLayout` is used as a layout.
           * If a `ColumnLayout` is used, this property defines the label size for large columns.
           *
           * Default value is `4`.
           */
          getLabelSpanL(): number;
          /**
           * @SINCE 1.16.3
           *
           * Gets current value of property {@link #getLabelSpanM labelSpanM}.
           *
           * Default span for labels in medium size.
           *
           * **Note:** If `adjustLabelSpan` is set, this property is used for full-size `FormContainers`. If more
           * than one `FormContainer` is in one line, `labelSpanL` is used.
           *
           * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
           *
           * Default value is `2`.
           */
          getLabelSpanM(): number;
          /**
           * @SINCE 1.16.3
           *
           * Gets current value of property {@link #getLabelSpanS labelSpanS}.
           *
           * Default span for labels in small size.
           *
           * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
           *
           * Default value is `12`.
           */
          getLabelSpanS(): number;
          /**
           * @SINCE 1.34.0
           *
           * Gets current value of property {@link #getLabelSpanXL labelSpanXL}.
           *
           * Default span for labels in extra large size.
           *
           * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout. If the default
           * value -1 is not overwritten with the meaningful one then the `labelSpanL` value is used (from the backward
           * compatibility reasons).
           *
           * Default value is `-1`.
           */
          getLabelSpanXL(): number;
          /**
           * Gets current value of property {@link #getLayout layout}.
           *
           * The `FormLayout` that is used to render the `SimpleForm`.
           *
           * We recommend using the `ResponsiveGridLayout` for rendering a `SimpleForm`, as its responsiveness uses
           * the space available in the best way possible.
           *
           * **Note** If possible, set the `layout` before adding content to prevent calculations for the default
           * layout.
           *
           * Default value is `ResponsiveLayout`.
           */
          getLayout(): sap.ui.layout.form.SimpleFormLayout;
          /**
           * Gets current value of property {@link #getMaxContainerCols maxContainerCols}.
           *
           * The maximum amount of groups (`FormContainers`) per row that is used before a new row is started.
           *
           * **Note:** If a `ResponsiveGridLayout` is used as a `layout`, this property is not used. Please use the
           * properties `ColumnsL` and `ColumnsM` in this case.
           *
           * Default value is `2`.
           */
          getMaxContainerCols(): number;
          /**
           * Returns a metadata object for class sap.ui.layout.form.SimpleForm.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.base.Metadata;
          /**
           * Gets current value of property {@link #getMinWidth minWidth}.
           *
           * The overall minimum width in pixels that is used for the `SimpleForm`.
           *
           * If the available width is below the given `minWidth` the `SimpleForm` will create a new row for the next
           * group (`FormContainer`). The default value is -1, meaning that inner groups (`FormContainers`) will be
           * stacked until `maxContainerCols` is reached, irrespective of whether a `width` is reached or the available
           * parents width is reached.
           *
           * **Note:** This property is only used if a `ResponsiveLayout` is used as a layout.
           *
           * Default value is `-1`.
           */
          getMinWidth(): number;
          /**
           * @SINCE 1.34.0
           *
           * Gets current value of property {@link #getSingleContainerFullSize singleContainerFullSize}.
           *
           * If the `Form` contains only one single `FormContainer` and this property is set, the `FormContainer`
           * is displayed using the full size of the `Form`. In this case the properties `columnsL` and `columnsM`
           * are ignored.
           *
           * In all other cases the `FormContainer` is displayed in the size of one column.
           *
           * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
           *
           * Default value is `true`.
           */
          getSingleContainerFullSize(): boolean;
          /**
           * @SINCE 1.16.3
           *
           * Gets content of aggregation {@link #getTitle title}.
           *
           * Title element of the `SimpleForm`. Can either be a `Title` element, or a string.
           */
          getTitle(): sap.ui.core.Title | string;
          /**
           * @SINCE 1.36.0
           *
           * Gets content of aggregation {@link #getToolbar toolbar}.
           *
           * Toolbar of the `SimpleForm`.
           *
           * **Note:** If a `Toolbar` is used, the `Title` is ignored. If a title is needed inside the `Toolbar` it
           * must be added at content to the `Toolbar`. In this case add the `Title` to the `ariaLabelledBy` association.
           */
          getToolbar(): sap.ui.core.Toolbar;
          /**
           * @SINCE 1.28.0
           *
           * Gets current value of property {@link #getWidth width}.
           *
           * Width of the form.
           */
          getWidth(): sap.ui.core.CSSSize;
          /**
           * Checks for the provided `sap.ui.core.Element` in the aggregation {@link #getContent content}. and returns
           * its index if found or -1 otherwise.
           */
          indexOfContent(
            /**
             * The content whose index is looked for
             */
            oContent: sap.ui.core.Element
          ): number;
          /**
           * Inserts a content into the aggregation {@link #getContent content}.
           */
          insertContent(
            /**
             * The content to insert; if empty, nothing is inserted
             */
            oContent: sap.ui.core.Element,
            /**
             * The `0`-based index the content should be inserted at; for a negative value of `iIndex`, the content
             * is inserted at position 0; for a value greater than the current size of the aggregation, the content
             * is inserted at the last position
             */
            iIndex: number
          ): sap.ui.layout.form.SimpleForm;
          /**
           * @SINCE 1.32.0
           *
           * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
           */
          removeAllAriaLabelledBy(): sap.ui.core.ID[];
          /**
           * Removes all the controls from the aggregation {@link #getContent content}.
           *
           * Additionally, it unregisters them from the hosting UIArea.
           */
          removeAllContent(): sap.ui.core.Element[];
          /**
           * @SINCE 1.32.0
           *
           * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
           */
          removeAriaLabelledBy(
            /**
             * The ariaLabelledBy to be removed or its index or ID
             */
            vAriaLabelledBy: number | sap.ui.core.ID | sap.ui.core.Control
          ): sap.ui.core.ID;
          /**
           * Removes a content from the aggregation {@link #getContent content}.
           */
          removeContent(
            /**
             * The content to remove or its index or id
             */
            vContent: number | string | sap.ui.core.Element
          ): sap.ui.core.Element;
          /**
           * @SINCE 1.34.0
           *
           * Sets a new value for property {@link #getAdjustLabelSpan adjustLabelSpan}.
           *
           * If set, the usage of `labelSpanL` and `labelSpanM` are dependent on the number of `FormContainers` in
           * one row. If only one `FormContainer` is displayed in one row, `labelSpanM` is used to define the size
           * of the label. This is the same for medium and large `Forms`. This is done to align the labels on forms
           * where full-size `FormContainers` and multiple-column rows are used in the same `Form` (because every
           * `FormContainer` has its own grid inside).
           *
           * If not set, the usage of `labelSpanL` and `labelSpanM` are dependent on the `Form` size. The number of
           * `FormContainers` doesn't matter in this case.
           *
           * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `true`.
           */
          setAdjustLabelSpan(
            /**
             * New value for property `adjustLabelSpan`
             */
            bAdjustLabelSpan: boolean
          ): sap.ui.layout.form.SimpleForm;
          /**
           * @SINCE 1.36.0
           *
           * Sets a new value for property {@link #getBackgroundDesign backgroundDesign}.
           *
           * Specifies the background color of the `SimpleForm` content.
           *
           * The visualization of the different options depends on the used theme.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `Translucent`.
           */
          setBackgroundDesign(
            /**
             * New value for property `backgroundDesign`
             */
            sBackgroundDesign: sap.ui.layout.BackgroundDesign
          ): sap.ui.layout.form.SimpleForm;
          /**
           * @SINCE 1.16.3
           *
           * Sets a new value for property {@link #getBreakpointL breakpointL}.
           *
           * Breakpoint between Medium size and Large size.
           *
           * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `1024`.
           */
          setBreakpointL(
            /**
             * New value for property `breakpointL`
             */
            iBreakpointL: number
          ): sap.ui.layout.form.SimpleForm;
          /**
           * @SINCE 1.16.3
           *
           * Sets a new value for property {@link #getBreakpointM breakpointM}.
           *
           * Breakpoint between Small size and Medium size.
           *
           * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `600`.
           */
          setBreakpointM(
            /**
             * New value for property `breakpointM`
             */
            iBreakpointM: number
          ): sap.ui.layout.form.SimpleForm;
          /**
           * @SINCE 1.34.0
           *
           * Sets a new value for property {@link #getBreakpointXL breakpointXL}.
           *
           * Breakpoint between Medium size and Large size.
           *
           * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `1440`.
           */
          setBreakpointXL(
            /**
             * New value for property `breakpointXL`
             */
            iBreakpointXL: number
          ): sap.ui.layout.form.SimpleForm;
          /**
           * @SINCE 1.16.3
           *
           * Sets a new value for property {@link #getColumnsL columnsL}.
           *
           * Form columns for large size. The number of columns for large size must not be smaller than the number
           * of columns for medium size.
           *
           * **Note:** This property is only used if a `ResponsiveGridLayout` or a `ColumnLayout` is used as a layout.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `2`.
           */
          setColumnsL(
            /**
             * New value for property `columnsL`
             */
            iColumnsL: number
          ): sap.ui.layout.form.SimpleForm;
          /**
           * @SINCE 1.16.3
           *
           * Sets a new value for property {@link #getColumnsM columnsM}.
           *
           * Form columns for medium size.
           *
           * **Note:** This property is only used if a `ResponsiveGridLayout` or a `ColumnLayout` is used as a layout.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `1`.
           */
          setColumnsM(
            /**
             * New value for property `columnsM`
             */
            iColumnsM: number
          ): sap.ui.layout.form.SimpleForm;
          /**
           * @SINCE 1.34.0
           *
           * Sets a new value for property {@link #getColumnsXL columnsXL}.
           *
           * Form columns for extra large size. The number of columns for extra large size must not be smaller than
           * the number of columns for large size.
           *
           * **Note:** This property is only used if a `ResponsiveGridLayout` or a `ColumnLayout` is used as a layout.
           * If the default value -1 is not overwritten with the meaningful one then the `columnsL` value is used
           * (from the backward compatibility reasons).
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `-1`.
           */
          setColumnsXL(
            /**
             * New value for property `columnsXL`
             */
            iColumnsXL: number
          ): sap.ui.layout.form.SimpleForm;
          /**
           * Sets a new value for property {@link #getEditable editable}.
           *
           * Applies a device-specific and theme-specific line height and label alignment to the form rows if the
           * form has editable content. If set, all (not only the editable) rows of the form will get the line height
           * of editable fields.
           *
           * The labels inside the form will be rendered by default in the according mode.
           *
           * **Note:** The setting of this property does not change the content of the form. For example, `Input`
           * controls in a form with `editable` set to false are still editable.
           *
           * **Warning:** If this property is wrongly set, this might lead to visual issues. The labels and fields
           * might be misaligned, the labels might be rendered in the wrong mode, and the spacing between the single
           * controls might be wrong. Also, controls that do not fit the mode might be rendered incorrectly.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setEditable(
            /**
             * New value for property `editable`
             */
            bEditable: boolean
          ): sap.ui.layout.form.SimpleForm;
          /**
           * @SINCE 1.16.3
           *
           * Sets a new value for property {@link #getEmptySpanL emptySpanL}.
           *
           * Number of grid cells that are empty at the end of each line on large size.
           *
           * **Note:** This property is only used if a `ResponsiveGridLayout` or a `ColumnLayout` is used as a layout.
           * If a `ColumnLayout` is used, this property defines the empty cells for large columns.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `0`.
           */
          setEmptySpanL(
            /**
             * New value for property `emptySpanL`
             */
            iEmptySpanL: number
          ): sap.ui.layout.form.SimpleForm;
          /**
           * @SINCE 1.16.3
           *
           * Sets a new value for property {@link #getEmptySpanM emptySpanM}.
           *
           * Number of grid cells that are empty at the end of each line on medium size.
           *
           * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `0`.
           */
          setEmptySpanM(
            /**
             * New value for property `emptySpanM`
             */
            iEmptySpanM: number
          ): sap.ui.layout.form.SimpleForm;
          /**
           * @SINCE 1.16.3
           *
           * Sets a new value for property {@link #getEmptySpanS emptySpanS}.
           *
           * Number of grid cells that are empty at the end of each line on small size.
           *
           * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `0`.
           */
          setEmptySpanS(
            /**
             * New value for property `emptySpanS`
             */
            iEmptySpanS: number
          ): sap.ui.layout.form.SimpleForm;
          /**
           * @SINCE 1.34.0
           *
           * Sets a new value for property {@link #getEmptySpanXL emptySpanXL}.
           *
           * Number of grid cells that are empty at the end of each line on extra large size.
           *
           * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout. If the default
           * value -1 is not overwritten with the meaningful one then the `emptySpanL` value is used (from the backward
           * compatibility reasons).
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `-1`.
           */
          setEmptySpanXL(
            /**
             * New value for property `emptySpanXL`
             */
            iEmptySpanXL: number
          ): sap.ui.layout.form.SimpleForm;
          /**
           * Sets a new value for property {@link #getLabelMinWidth labelMinWidth}.
           *
           * Specifies the min-width in pixels of the label in all form rows.
           *
           * **Note:** This property is only used if a `ResponsiveLayout` is used as a layout.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `192`.
           */
          setLabelMinWidth(
            /**
             * New value for property `labelMinWidth`
             */
            iLabelMinWidth: number
          ): sap.ui.layout.form.SimpleForm;
          /**
           * @SINCE 1.16.3
           *
           * Sets a new value for property {@link #getLabelSpanL labelSpanL}.
           *
           * Default span for labels in large size.
           *
           * **Note:** If `adjustLabelSpan` is set, this property is only used if more than 1 `FormContainer` is in
           * one line. If only 1 `FormContainer` is in the line, then the `labelSpanM` value is used.
           *
           * **Note:** This property is only used if `ResponsiveGridLayout` or `ColumnLayout` is used as a layout.
           * If a `ColumnLayout` is used, this property defines the label size for large columns.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `4`.
           */
          setLabelSpanL(
            /**
             * New value for property `labelSpanL`
             */
            iLabelSpanL: number
          ): sap.ui.layout.form.SimpleForm;
          /**
           * @SINCE 1.16.3
           *
           * Sets a new value for property {@link #getLabelSpanM labelSpanM}.
           *
           * Default span for labels in medium size.
           *
           * **Note:** If `adjustLabelSpan` is set, this property is used for full-size `FormContainers`. If more
           * than one `FormContainer` is in one line, `labelSpanL` is used.
           *
           * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `2`.
           */
          setLabelSpanM(
            /**
             * New value for property `labelSpanM`
             */
            iLabelSpanM: number
          ): sap.ui.layout.form.SimpleForm;
          /**
           * @SINCE 1.16.3
           *
           * Sets a new value for property {@link #getLabelSpanS labelSpanS}.
           *
           * Default span for labels in small size.
           *
           * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `12`.
           */
          setLabelSpanS(
            /**
             * New value for property `labelSpanS`
             */
            iLabelSpanS: number
          ): sap.ui.layout.form.SimpleForm;
          /**
           * @SINCE 1.34.0
           *
           * Sets a new value for property {@link #getLabelSpanXL labelSpanXL}.
           *
           * Default span for labels in extra large size.
           *
           * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout. If the default
           * value -1 is not overwritten with the meaningful one then the `labelSpanL` value is used (from the backward
           * compatibility reasons).
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `-1`.
           */
          setLabelSpanXL(
            /**
             * New value for property `labelSpanXL`
             */
            iLabelSpanXL: number
          ): sap.ui.layout.form.SimpleForm;
          /**
           * Sets a new value for property {@link #getLayout layout}.
           *
           * The `FormLayout` that is used to render the `SimpleForm`.
           *
           * We recommend using the `ResponsiveGridLayout` for rendering a `SimpleForm`, as its responsiveness uses
           * the space available in the best way possible.
           *
           * **Note** If possible, set the `layout` before adding content to prevent calculations for the default
           * layout.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `ResponsiveLayout`.
           */
          setLayout(
            /**
             * New value for property `layout`
             */
            sLayout: sap.ui.layout.form.SimpleFormLayout
          ): sap.ui.layout.form.SimpleForm;
          /**
           * Sets a new value for property {@link #getMaxContainerCols maxContainerCols}.
           *
           * The maximum amount of groups (`FormContainers`) per row that is used before a new row is started.
           *
           * **Note:** If a `ResponsiveGridLayout` is used as a `layout`, this property is not used. Please use the
           * properties `ColumnsL` and `ColumnsM` in this case.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `2`.
           */
          setMaxContainerCols(
            /**
             * New value for property `maxContainerCols`
             */
            iMaxContainerCols: number
          ): sap.ui.layout.form.SimpleForm;
          /**
           * Sets a new value for property {@link #getMinWidth minWidth}.
           *
           * The overall minimum width in pixels that is used for the `SimpleForm`.
           *
           * If the available width is below the given `minWidth` the `SimpleForm` will create a new row for the next
           * group (`FormContainer`). The default value is -1, meaning that inner groups (`FormContainers`) will be
           * stacked until `maxContainerCols` is reached, irrespective of whether a `width` is reached or the available
           * parents width is reached.
           *
           * **Note:** This property is only used if a `ResponsiveLayout` is used as a layout.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `-1`.
           */
          setMinWidth(
            /**
             * New value for property `minWidth`
             */
            iMinWidth: number
          ): sap.ui.layout.form.SimpleForm;
          /**
           * @SINCE 1.34.0
           *
           * Sets a new value for property {@link #getSingleContainerFullSize singleContainerFullSize}.
           *
           * If the `Form` contains only one single `FormContainer` and this property is set, the `FormContainer`
           * is displayed using the full size of the `Form`. In this case the properties `columnsL` and `columnsM`
           * are ignored.
           *
           * In all other cases the `FormContainer` is displayed in the size of one column.
           *
           * **Note:** This property is only used if a `ResponsiveGridLayout` is used as a layout.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `true`.
           */
          setSingleContainerFullSize(
            /**
             * New value for property `singleContainerFullSize`
             */
            bSingleContainerFullSize: boolean
          ): sap.ui.layout.form.SimpleForm;
          /**
           * @SINCE 1.16.3
           *
           * Sets the aggregated {@link #getTitle title}.
           */
          setTitle(
            /**
             * The title to set
             */
            vTitle: sap.ui.core.Title | string
          ): sap.ui.layout.form.SimpleForm;
          /**
           * @SINCE 1.36.0
           *
           * Sets the aggregated {@link #getToolbar toolbar}.
           */
          setToolbar(
            /**
             * The toolbar to set
             */
            oToolbar: sap.ui.core.Toolbar
          ): sap.ui.layout.form.SimpleForm;
          /**
           * @SINCE 1.28.0
           *
           * Sets a new value for property {@link #getWidth width}.
           *
           * Width of the form.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setWidth(
            /**
             * New value for property `width`
             */
            sWidth: sap.ui.core.CSSSize
          ): sap.ui.layout.form.SimpleForm;
        }
        /**
         * @SINCE 1.16.0
         *
         * Available `FormLayouts` used to render a `SimpleForm`.
         */
        enum SimpleFormLayout {
          /**
           * @SINCE 1.56.0
           *
           * Uses the `ColumnLayout` layout to render the `SimpleForm` control
           */
          ColumnLayout,
          /**
           * Uses the `GridLayout` layout to render the `SimpleForm` control
           */
          GridLayout,
          /**
           * @SINCE 1.16.0
           *
           * Uses the `ResponsiveGridLayout` layout to render the `SimpleForm` control
           */
          ResponsiveGridLayout,
          /**
           * Uses the `ResponsiveLayout` layout to render the `SimpleForm` control
           */
          ResponsiveLayout
        }
      }

      interface BlockLayoutOpts extends sap.ui.core.ControlOpts {
        /**
         * @SINCE 1.42
         *
         * Determines the background used for the Layout
         */
        background?: sap.ui.layout.BlockBackgroundType;

        /**
         * @SINCE 1.52
         *
         * Keeps the font-size of the contents as is, independent from the screen size.
         */
        keepFontSize?: boolean;

        /**
         * The Rows to be included in the content of the control
         */
        content?: sap.ui.layout.BlockLayoutRow[] | sap.ui.layout.BlockLayoutRow;
      }

      interface BlockLayoutCellOpts extends sap.ui.core.ControlOpts {
        /**
         * Defines the title of the cell. **Note:** When the `titleLink` aggregation is provided, the title of the
         * cell will be replaced with the text from the `titleLink`.
         */
        title?: string;

        /**
         * Defines the alignment of the cell title
         */
        titleAlignment?: sap.ui.core.HorizontalAlign;

        /**
         * Defines the aria level of the title This information is e.g. used by assistive technologies like screenreaders
         * to create a hierarchical site map for faster navigation.
         */
        titleLevel?: sap.ui.core.TitleLevel;

        /**
         * Defines the width of the cell. Depending on the context of the cell - whether it's in scrollable, or
         * non scrollable row, this property is interpreted in two different ways. If the cell is placed inside
         * a scrollable row - this property defines the width of the cell in percentages. If no value is provided
         * - the default is 40%. If the cell is placed inside a non scrollable row - this property defines the grow
         * factor of the cell compared to the whole row. **For example:** If you have 2 cells, each with width of
         * 1, this means that they should be of equal size, and they need to fill the whole row. This results in
         * 50% width for each cell. If you have 2 cells, one with width of 1, the other with width of 3, this means
         * that the whole row width is 4, so the first cell will have a width of 25%, the second - 75%. According
         * to the visual guidelines, it is suggested that you only use 25%, 50%, 75% or 100% cells in you applications.
         * For example, 12,5% width is not desirable (1 cell with width 1, and another with width 7)
         */
        width?: number;

        /**
         * @SINCE 1.48
         *
         * The Background color set from which the background color will be selected. By using background colors
         * from the predefined sets your colors could later be customized from the Theme Designer. **Note:** backgroundColorSet
         * should be used only in combination with backgroundColorShade.
         */
        backgroundColorSet?: sap.ui.layout.BlockLayoutCellColorSet;

        /**
         * @SINCE 1.48
         *
         * The index of the background color in the color set from which the color will be selected. By using background
         * colors from the predefined sets your colors could later be customized from the Theme Designer. **Note:**
         * backgroundColorShade should be used only in combination with backgroundColorSet.
         */
        backgroundColorShade?: sap.ui.layout.BlockLayoutCellColorShade;

        /**
         * The content to be included inside the cell
         */
        content?: sap.ui.core.Control[] | sap.ui.core.Control;

        /**
         * @SINCE 1.56
         *
         * The link that will replace the title of the cell. **Note:** The only possible value is the `sap.m.Link`
         * control.
         */
        titleLink?: sap.ui.core.Control;
      }

      interface BlockLayoutCellDataOpts extends sap.ui.core.LayoutDataOpts {
        /**
         * Sets the width of the cell for S size of the BlockLayout.
         */
        sSize?: number;

        /**
         * Sets the width of the cell for M size of the BlockLayout.
         */
        mSize?: number;

        /**
         * Sets the width of the cell for L size of the BlockLayout.
         */
        lSize?: number;

        /**
         * Sets the width of the cell for XL size of the BlockLayout.
         */
        xlSize?: number;
      }

      interface BlockLayoutRowOpts extends sap.ui.core.ControlOpts {
        /**
         * Sets the rendering mode of the BlockLayoutRow to scrollable. In scrollable mode, the cells get aligned
         * side by side, with horizontal scroll bar for the row.
         */
        scrollable?: boolean;

        /**
         * @SINCE 1.42
         *
         * Defines background type for that row. There might be several rows with the same type
         */
        rowColorSet?: sap.ui.layout.BlockRowColorSets;

        /**
         * The content cells to be included in the row.
         */
        content?:
          | sap.ui.layout.BlockLayoutCell[]
          | sap.ui.layout.BlockLayoutCell;

        /**
         * @SINCE 1.42
         *
         * Cells that would be accented. *Note:* This association has visual impact only for BlockLayouts with background
         * types "Mixed" and "Accent".
         *
         * Mixed: In this type, areas of 25% (on desktop) can have a dark background color. Per section one area
         * can be dark. Accent: Every section can contain multiple gray blocks, which are used alternately, beginning
         * with the bright one
         */
        accentCells?: sap.ui.layout.BlockLayoutCell[] | string[];
      }

      interface DynamicSideContentOpts extends sap.ui.core.ControlOpts {
        /**
         * Determines whether the side content is visible or hidden.
         */
        showSideContent?: boolean;

        /**
         * Determines whether the main content is visible or hidden.
         */
        showMainContent?: boolean;

        /**
         * Determines on which breakpoints the side content is visible.
         */
        sideContentVisibility?: sap.ui.layout.SideContentVisibility;

        /**
         * Determines on which breakpoints the side content falls down below the main content.
         */
        sideContentFallDown?: sap.ui.layout.SideContentFallDown;

        /**
         * Defines whether the control is in equal split mode. In this mode, the side and the main content take
         * 50:50 percent of the container on all screen sizes except for phone, where the main and side contents
         * are switching visibility using the toggle method.
         */
        equalSplit?: boolean;

        /**
         * If set to TRUE, then not the media Query (device screen size) but the size of the container, surrounding
         * the control, defines the current range.
         */
        containerQuery?: boolean;

        /**
         * @SINCE 1.36
         *
         * Determines whether the side content is on the left or on the right side of the main content.
         */
        sideContentPosition?: sap.ui.layout.SideContentPosition;

        /**
         * @SINCE 1.32
         *
         * Fires when the current breakpoint has been changed.
         */
        breakpointChanged?: Function;

        /**
         * Main content controls.
         */
        mainContent?: sap.ui.core.Control[] | sap.ui.core.Control;

        /**
         * Side content controls.
         */
        sideContent?: sap.ui.core.Control[] | sap.ui.core.Control;
      }

      interface FixFlexOpts extends sap.ui.core.ControlOpts {
        /**
         * Determines the direction of the layout of child elements. True for vertical and false for horizontal
         * layout.
         */
        vertical?: boolean;

        /**
         * Determines whether the fixed-size area should be on the beginning/top ( if the value is "true") or end/bottom
         * ( if the value is "false").
         */
        fixFirst?: boolean;

        /**
         * Determines the height (if the vertical property is "true") or the width (if the vertical property is
         * "false") of the fixed area. If left at the default value "auto", the fixed-size area will be as large
         * as its content. In this case the content cannot use percentage sizes.
         */
        fixContentSize?: sap.ui.core.CSSSize;

        /**
         * @SINCE 1.29
         *
         * Enables scrolling inside the flexible part. The given size is calculated in "px". If the child control
         * in the flexible part is larger than the available flexible size on the screen and if the available size
         * for the flexible part is smaller or equal to the minFlexSize value, the scroll will be for the entire
         * FixFlex control.
         */
        minFlexSize?: number;

        /**
         * Controls in the fixed part of the layout.
         */
        fixContent?: sap.ui.core.Control[] | sap.ui.core.Control;

        /**
         * Control in the stretching part of the layout.
         */
        flexContent?: sap.ui.core.Control;
      }

      interface GridOpts extends sap.ui.core.ControlOpts {
        /**
         * Optional. Defines the width of the `Grid`. If not specified, then 100%.
         */
        width?: sap.ui.core.CSSSize;

        /**
         * Optional. Defines the vertical spacing between the rows in the `Grid`. In rem, allowed values are 0,
         * 0.5, 1 and 2.
         */
        vSpacing?: number;

        /**
         * Optional. Defines the horizontal spacing between the content in the `Grid`. In rem, allowed values are
         * 0, 0.5 , 1 or 2.
         */
        hSpacing?: number;

        /**
         * Optional. Defines the position of the `Grid` in the window or surrounding container.
         */
        position?: sap.ui.layout.GridPosition;

        /**
         * Optional. A string type that represents the span values of the `Grid` for large, medium and small screens.
         * Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 12 that
         * the container has to take, for example, `L2 M4 S6`, `M12`, `s10` or `l4 m4`.
         *
         * **Note:** The parameters must be provided in the order .
         */
        defaultSpan?: sap.ui.layout.GridSpan;

        /**
         * Optional. Defines default for the whole Grid numbers of empty columns before the current span begins.
         * It can be defined for large, medium and small screens. Allowed values are separated by space Letters
         * L, M or S followed by number of columns from 0 to 11 that the container has to take, for example, `L2
         * M4 S6`, `M11`, `s10` or `l4 m4`.
         *
         * **Note:** The parameters must be provided in the order .
         */
        defaultIndent?: sap.ui.layout.GridIndent;

        /**
         * If set to `true`, the current range (large, medium or small) is defined by the size of the container
         * surrounding the `Grid` instead of the device screen size (media Query).
         */
        containerQuery?: boolean;

        /**
         * Controls that are placed into Grid layout.
         */
        content?: sap.ui.core.Control[] | sap.ui.core.Control;

        /**
         * @SINCE 1.48.7
         *
         * Association to controls / IDs that label this control (see WAI-ARIA attribute `aria-labelledby`).
         */
        ariaLabelledBy?: sap.ui.core.Control[] | string[];
      }

      interface GridDataOpts extends sap.ui.core.LayoutDataOpts {
        /**
         * A string type that represents the span values of the `Grid` for large, medium and small screens.
         *
         * Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 12 that
         * the container has to take, for example: `L2 M4 S6`, `M12`, `s10` or `l4 m4`.
         *
         * **Note:** The parameters must be provided in the order .
         */
        span?: sap.ui.layout.GridSpan;

        /**
         * Optional. Defines a span value for extra large screens. This value overwrites the value for extra large
         * screens defined in the `span` property.
         */
        spanXL?: number;

        /**
         * Optional. Defines a span value for large screens. This value overwrites the value for large screens defined
         * in the `span` property.
         */
        spanL?: number;

        /**
         * Optional. Defines a span value for medium size screens. This value overwrites the value for medium screens
         * defined in the `span` property.
         */
        spanM?: number;

        /**
         * Optional. Defines a span value for small screens. This value overwrites the value for small screens defined
         * in the `span` property.
         */
        spanS?: number;

        /**
         * A string type that represents the indent values of the `Grid` for large, medium and small screens.
         *
         * Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 11 that
         * the container has to take, for example, `L2 M4 S6`, `M11`, `s10` or `l4 m4`.
         *
         * **Note:** The parameters must be provided in the order .
         */
        indent?: sap.ui.layout.GridIndent;

        /**
         * Optional. Defines an indent value for extra large screens. This value overwrites the value for extra
         * large screens defined in the `indent` property.
         */
        indentXL?: number;

        /**
         * Optional. Defines an indent value for large screens. This value overwrites the value for large screens
         * defined in the `indent` property.
         */
        indentL?: number;

        /**
         * Optional. Defines an indent value for medium size screens. This value overwrites the value for medium
         * screens defined in the `indent` property.
         */
        indentM?: number;

        /**
         * Optional. Defines an indent value for small screens. This value overwrites the value for small screens
         * defined in the `indent` property.
         */
        indentS?: number;

        /**
         * Defines if this control is visible on extra Large screens.
         */
        visibleXL?: boolean;

        /**
         * Defines if this control is visible on large screens.
         */
        visibleL?: boolean;

        /**
         * Defines if this control is visible on medium screens.
         */
        visibleM?: boolean;

        /**
         * Defines if this control is visible on small screens.
         */
        visibleS?: boolean;

        /**
         * Optional. Moves a cell backwards with as many columns as specified.
         */
        moveBackwards?: sap.ui.layout.GridIndent;

        /**
         * Optional. Moves a cell forwards with as many columns as specified.
         */
        moveForward?: sap.ui.layout.GridIndent;

        /**
         * Optional. If set to `true`, the control causes a line break on all-size screens within the `Grid` and
         * becomes the first within the next line.
         */
        linebreak?: boolean;

        /**
         * Optional. If set to `true`, the control causes a line break on extra large screens within the `Grid`
         * and becomes the first within the next line.
         */
        linebreakXL?: boolean;

        /**
         * Optional. If set to `true`, the control causes a line break on large screens within the `Grid` and becomes
         * the first within the next line.
         */
        linebreakL?: boolean;

        /**
         * Optional. If set to `true`, the control causes a line break on medium screens within the `Grid` and becomes
         * the first within the next line.
         */
        linebreakM?: boolean;

        /**
         * Optional. If set to `true`, the control causes a line break on small screens within the `Grid` and becomes
         * the first within the next line.
         */
        linebreakS?: boolean;

        /**
         * @deprecated (since 1.17.1) - Use the `spanL` property instead.
         *
         * Deprecated. Defines a span value for large screens. This value overwrites the value for large screens
         * defined in the `span` property.
         */
        spanLarge?: number;

        /**
         * @deprecated (since 1.17.1) - Use the `spanM` property instead.
         *
         * Deprecated. Defines a span value for medium screens. This value overwrites the value for medium screens
         * defined in the `span` property.
         */
        spanMedium?: number;

        /**
         * @deprecated (since 1.17.1) - Use the `spanS` property instead.
         *
         * Deprecated. Defines a span value for small screens. This value overwrites the value for small screens
         * defined in the `span` property.
         */
        spanSmall?: number;

        /**
         * @deprecated (since 1.17.1) - Use the `indentL` property instead.
         *
         * Deprecated. Defines an indent value for large screens. This value overwrites the value for large screens
         * defined in the `indent` property.
         */
        indentLarge?: number;

        /**
         * @deprecated (since 1.17.1) - Use the `indentM` property instead.
         *
         * Deprecated. Defines an indent value for medium screens. This value overwrites the value for medium screens
         * defined in the `indent` property.
         */
        indentMedium?: number;

        /**
         * @deprecated (since 1.17.1) - Use `indentS` property instead.
         *
         * Deprecated. Defines an indent value for small screens. This value overwrites the value for small screens
         * defined in the `indent` property.
         */
        indentSmall?: number;

        /**
         * @deprecated (since 1.17.1) - Use the `visibleL` property instead.
         *
         * Deprecated. Defines if this control is visible on large screens.
         */
        visibleOnLarge?: boolean;

        /**
         * @deprecated (since 1.17.1) - Use the `visibleM` property instead.
         *
         * Deprecated. Defines if this control is visible on medium screens.
         */
        visibleOnMedium?: boolean;

        /**
         * @deprecated (since 1.17.1) - Use the `visibleS` property instead.
         *
         * Deprecated. Defines if this control is visible on small screens.
         */
        visibleOnSmall?: boolean;
      }

      interface HorizontalLayoutOpts extends sap.ui.core.ControlOpts {
        /**
         * Specifies whether the content inside the Layout shall be line-wrapped in the case that there is less
         * horizontal space available than required.
         */
        allowWrapping?: boolean;

        /**
         * The controls inside this layout
         */
        content?: sap.ui.core.Control[] | sap.ui.core.Control;
      }

      interface PaneContainerOpts extends sap.ui.core.ElementOpts {
        /**
         * The orientation of the Splitter
         */
        orientation?: sap.ui.core.Orientation;

        /**
         * The Pane that will be shown when there is no suitable pane for ResponsiveSplitter's current width.
         */
        panes?: sap.ui.core.Element[] | sap.ui.core.Element;
      }

      interface ResponsiveFlowLayoutOpts extends sap.ui.core.ControlOpts {
        /**
         * If set to false, all added controls will keep their width, or otherwise, the controls will be stretched
         * to the possible width of a row.
         */
        responsive?: boolean;

        /**
         * Added content that should be positioned. Every content item should have a ResponsiveFlowLayoutData attached,
         * or otherwise, the default values are used.
         */
        content?: sap.ui.core.Control[] | sap.ui.core.Control;

        /**
         * @SINCE 1.48.7
         *
         * Association to controls / IDs that label this control (see WAI-ARIA attribute `aria-labelledby`).
         */
        ariaLabelledBy?: sap.ui.core.Control[] | string[];
      }

      interface ResponsiveFlowLayoutDataOpts
        extends sap.ui.core.LayoutDataOpts {
        /**
         * Defines the minimal size in px of a ResponsiveFlowLayout element. The element will be shrunk down to
         * this value.
         */
        minWidth?: number;

        /**
         * Defines the weight of the element, that influences the resulting width. If there are several elements
         * within a row of the ResponsiveFlowLayout, each element could have another weight. The bigger the weight
         * of a single element, the wider it will be stretched, i.e. a bigger weight results in a larger width.
         */
        weight?: number;

        /**
         * If this property is set, the control in which the LayoutData is added, will always cause a line break
         * within the ResponsiveFlowLayout.
         */
        linebreak?: boolean;

        /**
         * Prevents any margin of the element if set to false.
         */
        margin?: boolean;

        /**
         * Shows if an element can be wrapped into a new row. If this value is set to false, the min-width will
         * be set to 0 and the wrapping is up to the previous element.
         */
        linebreakable?: boolean;
      }

      interface ResponsiveSplitterOpts extends sap.ui.core.ControlOpts {
        /**
         * The width of the control
         */
        width?: sap.ui.core.CSSSize;

        /**
         * The height of the control
         */
        height?: sap.ui.core.CSSSize;

        /**
         * The root PaneContainer of the ResponsiveSplitter
         */
        rootPaneContainer?: sap.ui.layout.PaneContainer;

        /**
         * The default pane that will remain always visible If no defaultPane is specified, the ResponsiveSplitter
         * sets the first SplitPane that is added to a PaneContainer in it as a default.
         */
        defaultPane?: sap.ui.layout.SplitPane | string;
      }

      interface SplitPaneOpts extends sap.ui.core.ElementOpts {
        /**
         * Determines whether the pane will be moved to the pagination
         */
        demandPane?: boolean;

        /**
         * Determines the minimum width of the ResponsiveSplitter(in pixels). When it is reached the pane will be
         * hidden from the screen.
         */
        requiredParentWidth?: number;

        /**
         * Content of the SplitPane
         */
        content?: sap.ui.core.Control;
      }

      interface SplitterOpts extends sap.ui.core.ControlOpts {
        /**
         * Whether to split the contents horizontally (default) or vertically.
         */
        orientation?: sap.ui.core.Orientation;

        /**
         * The width of the control
         */
        width?: sap.ui.core.CSSSize;

        /**
         * The height of the control
         */
        height?: sap.ui.core.CSSSize;

        /**
         * Event is fired when contents are resized.
         */
        resize?: Function;

        /**
         * The content areas to be split. The control will show n-1 splitter bars between n controls in this aggregation.
         */
        contentAreas?: sap.ui.core.Control[] | sap.ui.core.Control;
      }

      interface SplitterLayoutDataOpts extends sap.ui.core.LayoutDataOpts {
        /**
         * Determines whether the control in the splitter can be resized or not.
         */
        resizable?: boolean;

        /**
         * Sets the size of the splitter content.
         */
        size?: sap.ui.core.CSSSize;

        /**
         * Sets the minimum size of the splitter content in px.
         */
        minSize?: number;
      }

      interface VerticalLayoutOpts extends sap.ui.core.ControlOpts {
        /**
         * Width of the `VerticalLayout`. If no width is set, the width of the content is used. If the content of
         * the layout has a larger width than the layout, it is cut off. There is no scrolling inside the layout.
         */
        width?: sap.ui.core.CSSSize;

        /**
         * If not enabled, all controls inside are not enabled automatically.
         */
        enabled?: boolean;

        /**
         * Content controls within the layout.
         */
        content?: sap.ui.core.Control[] | sap.ui.core.Control;
      }

      interface GridIndent {}

      interface GridSpan {}
      /**
       * @SINCE 1.34
       *
       * The BlockLayout is used to display several objects in a section-based manner. Overview: The BlockLayout
       * uses horizontal and vertical subdivisions, and full-width banners to display a set of elements. By placing
       * pictorial and textual elements side-by-side in different blocks, you can establish a visual connection
       * between blocks and between similar elements. Structure: The BlockLayout contains BlockLayout cells. Every
       * cell consists of a title and content. The title can be text or a link.
       *
       * The BlockLayout comes in five predefined types for background colors:
       * 	 - Layout only (default) - a layout scheme and no background colors
       * 	 - Bright - a layout scheme with bright colors
       * 	 - Accent - a layout scheme with four pre-defined color sets
       * 	 - Dashboard - a layout scheme with additional borders and no background colors
       * 	 - Mixed - a layout scheme with a mix of light and dark colors  Background colors are attached
       * 			directly to the blocks of the layout.
       *
       * Special full-width sections of the BlockLayout allow horizontal scrolling through a set of blocks.
       *
       * **Note:** With version 1.48 colors can be set for each individual {@link sap.ui.layout.BlockLayoutCell
       * cell}. There are 10 pre-defined color sets, each with 4 different shades. The main colors of the sets
       * can be changed in Theme Designer. To change the background of a particular cell, set `backgroundColorSet`
       * (main color) and `backgroundColorShade` (shade).
       *
       * **Note:** Usage of disabled, emphasized or subtle links as titles is not recommended. Dark background
       * designs, for example Accent, are not fully supported with regards to Аccessibility when used with links
       * as titles.
       *
       * Usage: When to use:
       * 	 - You want to create a catalogue-like page with sections of blocks.
       * 	 - The BlockLayout is intended for developing administrative tools and applications.  When not
       * 			to use:
       * 	 - You want to display properties or features of one content item. Use a {@link sap.uxap.ObjectPageLayout
       * 			object page} or {@link sap.f.DynamicPage dynamic page} instead.  Responsive Behavior:
       * 	 - The breakpoints of the block layout react to the width of the control itself and not to the actual
       * 			screen size.
       * 	 -  On small screens all blocks will wrap to a single scrollable column
       */
      class BlockLayout extends sap.ui.core.Control {
        /**
         * Constructor for a new BlockLayout.
         *
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
         * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
         * of the syntax of the settings object.
         * See:
         * 	{@link fiori:https://experience.sap.com/fiori-design-web/block-layout/ Block Layout}
         */
        constructor(
          /**
           * ID for the new control, generated automatically if no ID is given
           */
          sId?: string,
          /**
           * Initial settings for the new control
           */
          mSettings?: BlockLayoutOpts
        );

        /**
         * Adds some content to the aggregation {@link #getContent content}.
         */
        addContent(
          /**
           * The content to add; if empty, nothing is inserted
           */
          oContent: sap.ui.layout.BlockLayoutRow
        ): sap.ui.layout.BlockLayout;
        /**
         * Destroys all the content in the aggregation {@link #getContent content}.
         */
        destroyContent(): sap.ui.layout.BlockLayout;
        /**
         * Creates a new subclass of class sap.ui.layout.BlockLayout with name `sClassName` and enriches it with
         * the information contained in `oClassInfo`.
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
         * @SINCE 1.42
         *
         * Gets current value of property {@link #getBackground background}.
         *
         * Determines the background used for the Layout
         *
         * Default value is `Default`.
         */
        getBackground(): sap.ui.layout.BlockBackgroundType;
        /**
         * Gets content of aggregation {@link #getContent content}.
         *
         * The Rows to be included in the content of the control
         */
        getContent(): sap.ui.layout.BlockLayoutRow[];
        /**
         * @SINCE 1.52
         *
         * Gets current value of property {@link #getKeepFontSize keepFontSize}.
         *
         * Keeps the font-size of the contents as is, independent from the screen size.
         *
         * Default value is `false`.
         */
        getKeepFontSize(): boolean;
        /**
         * Returns a metadata object for class sap.ui.layout.BlockLayout.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Checks for the provided `sap.ui.layout.BlockLayoutRow` in the aggregation {@link #getContent content}.
         * and returns its index if found or -1 otherwise.
         */
        indexOfContent(
          /**
           * The content whose index is looked for
           */
          oContent: sap.ui.layout.BlockLayoutRow
        ): number;
        /**
         * Inserts a content into the aggregation {@link #getContent content}.
         */
        insertContent(
          /**
           * The content to insert; if empty, nothing is inserted
           */
          oContent: sap.ui.layout.BlockLayoutRow,
          /**
           * The `0`-based index the content should be inserted at; for a negative value of `iIndex`, the content
           * is inserted at position 0; for a value greater than the current size of the aggregation, the content
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.layout.BlockLayout;
        /**
         * Removes all the controls from the aggregation {@link #getContent content}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllContent(): sap.ui.layout.BlockLayoutRow[];
        /**
         * Removes a content from the aggregation {@link #getContent content}.
         */
        removeContent(
          /**
           * The content to remove or its index or id
           */
          vContent: number | string | sap.ui.layout.BlockLayoutRow
        ): sap.ui.layout.BlockLayoutRow;
        /**
         * Changes background type
         */
        setBackground(
          /**
           * Background's style of type sap.ui.layout.BlockBackgroundType
           */
          sNewBackground: string
        ): sap.ui.layout.BlockLayout;
        /**
         * @SINCE 1.52
         *
         * Sets a new value for property {@link #getKeepFontSize keepFontSize}.
         *
         * Keeps the font-size of the contents as is, independent from the screen size.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setKeepFontSize(
          /**
           * New value for property `keepFontSize`
           */
          bKeepFontSize: boolean
        ): sap.ui.layout.BlockLayout;
      }
      /**
       * @SINCE 1.34
       *
       * The BlockLayoutCell is used as an aggregation of the BlockLayoutRow. It contains Controls. The BlockLayoutCell
       * should be used only as aggregation of the BlockLayoutRow.
       */
      class BlockLayoutCell extends sap.ui.core.Control {
        /**
         * Constructor for a new BlockLayoutCell.
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
          mSettings?: BlockLayoutCellOpts
        );

        /**
         * Adds some content to the aggregation {@link #getContent content}.
         */
        addContent(
          /**
           * The content to add; if empty, nothing is inserted
           */
          oContent: sap.ui.core.Control
        ): sap.ui.layout.BlockLayoutCell;
        /**
         * Destroys all the content in the aggregation {@link #getContent content}.
         */
        destroyContent(): sap.ui.layout.BlockLayoutCell;
        /**
         * @SINCE 1.56
         *
         * Destroys the titleLink in the aggregation {@link #getTitleLink titleLink}.
         */
        destroyTitleLink(): sap.ui.layout.BlockLayoutCell;
        /**
         * Creates a new subclass of class sap.ui.layout.BlockLayoutCell with name `sClassName` and enriches it
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
         * @SINCE 1.48
         *
         * Gets current value of property {@link #getBackgroundColorSet backgroundColorSet}.
         *
         * The Background color set from which the background color will be selected. By using background colors
         * from the predefined sets your colors could later be customized from the Theme Designer. **Note:** backgroundColorSet
         * should be used only in combination with backgroundColorShade.
         */
        getBackgroundColorSet(): sap.ui.layout.BlockLayoutCellColorSet;
        /**
         * @SINCE 1.48
         *
         * Gets current value of property {@link #getBackgroundColorShade backgroundColorShade}.
         *
         * The index of the background color in the color set from which the color will be selected. By using background
         * colors from the predefined sets your colors could later be customized from the Theme Designer. **Note:**
         * backgroundColorShade should be used only in combination with backgroundColorSet.
         */
        getBackgroundColorShade(): sap.ui.layout.BlockLayoutCellColorShade;
        /**
         * Gets content of aggregation {@link #getContent content}.
         *
         * The content to be included inside the cell
         */
        getContent(): sap.ui.core.Control[];
        /**
         * Returns a metadata object for class sap.ui.layout.BlockLayoutCell.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getTitle title}.
         *
         * Defines the title of the cell. **Note:** When the `titleLink` aggregation is provided, the title of the
         * cell will be replaced with the text from the `titleLink`.
         */
        getTitle(): string;
        /**
         * Gets current value of property {@link #getTitleAlignment titleAlignment}.
         *
         * Defines the alignment of the cell title
         *
         * Default value is `Begin`.
         */
        getTitleAlignment(): sap.ui.core.HorizontalAlign;
        /**
         * Gets current value of property {@link #getTitleLevel titleLevel}.
         *
         * Defines the aria level of the title This information is e.g. used by assistive technologies like screenreaders
         * to create a hierarchical site map for faster navigation.
         *
         * Default value is `Auto`.
         */
        getTitleLevel(): sap.ui.core.TitleLevel;
        /**
         * @SINCE 1.56
         *
         * Gets content of aggregation {@link #getTitleLink titleLink}.
         *
         * The link that will replace the title of the cell. **Note:** The only possible value is the `sap.m.Link`
         * control.
         */
        getTitleLink(): sap.ui.core.Control;
        /**
         * Gets current value of property {@link #getWidth width}.
         *
         * Defines the width of the cell. Depending on the context of the cell - whether it's in scrollable, or
         * non scrollable row, this property is interpreted in two different ways. If the cell is placed inside
         * a scrollable row - this property defines the width of the cell in percentages. If no value is provided
         * - the default is 40%. If the cell is placed inside a non scrollable row - this property defines the grow
         * factor of the cell compared to the whole row. **For example:** If you have 2 cells, each with width of
         * 1, this means that they should be of equal size, and they need to fill the whole row. This results in
         * 50% width for each cell. If you have 2 cells, one with width of 1, the other with width of 3, this means
         * that the whole row width is 4, so the first cell will have a width of 25%, the second - 75%. According
         * to the visual guidelines, it is suggested that you only use 25%, 50%, 75% or 100% cells in you applications.
         * For example, 12,5% width is not desirable (1 cell with width 1, and another with width 7)
         *
         * Default value is `0`.
         */
        getWidth(): number;
        /**
         * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContent content}. and returns
         * its index if found or -1 otherwise.
         */
        indexOfContent(
          /**
           * The content whose index is looked for
           */
          oContent: sap.ui.core.Control
        ): number;
        /**
         * Inserts a content into the aggregation {@link #getContent content}.
         */
        insertContent(
          /**
           * The content to insert; if empty, nothing is inserted
           */
          oContent: sap.ui.core.Control,
          /**
           * The `0`-based index the content should be inserted at; for a negative value of `iIndex`, the content
           * is inserted at position 0; for a value greater than the current size of the aggregation, the content
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.layout.BlockLayoutCell;
        /**
         * Removes all the controls from the aggregation {@link #getContent content}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllContent(): sap.ui.core.Control[];
        /**
         * Removes a content from the aggregation {@link #getContent content}.
         */
        removeContent(
          /**
           * The content to remove or its index or id
           */
          vContent: number | string | sap.ui.core.Control
        ): sap.ui.core.Control;
        /**
         * @SINCE 1.48
         *
         * Sets a new value for property {@link #getBackgroundColorSet backgroundColorSet}.
         *
         * The Background color set from which the background color will be selected. By using background colors
         * from the predefined sets your colors could later be customized from the Theme Designer. **Note:** backgroundColorSet
         * should be used only in combination with backgroundColorShade.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setBackgroundColorSet(
          /**
           * New value for property `backgroundColorSet`
           */
          sBackgroundColorSet: sap.ui.layout.BlockLayoutCellColorSet
        ): sap.ui.layout.BlockLayoutCell;
        /**
         * @SINCE 1.48
         *
         * Sets a new value for property {@link #getBackgroundColorShade backgroundColorShade}.
         *
         * The index of the background color in the color set from which the color will be selected. By using background
         * colors from the predefined sets your colors could later be customized from the Theme Designer. **Note:**
         * backgroundColorShade should be used only in combination with backgroundColorSet.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setBackgroundColorShade(
          /**
           * New value for property `backgroundColorShade`
           */
          sBackgroundColorShade: sap.ui.layout.BlockLayoutCellColorShade
        ): sap.ui.layout.BlockLayoutCell;
        /**
         * Sets a new value for property {@link #getTitle title}.
         *
         * Defines the title of the cell. **Note:** When the `titleLink` aggregation is provided, the title of the
         * cell will be replaced with the text from the `titleLink`.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setTitle(
          /**
           * New value for property `title`
           */
          sTitle: string
        ): sap.ui.layout.BlockLayoutCell;
        /**
         * Sets a new value for property {@link #getTitleAlignment titleAlignment}.
         *
         * Defines the alignment of the cell title
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Begin`.
         */
        setTitleAlignment(
          /**
           * New value for property `titleAlignment`
           */
          sTitleAlignment: sap.ui.core.HorizontalAlign
        ): sap.ui.layout.BlockLayoutCell;
        /**
         * Sets a new value for property {@link #getTitleLevel titleLevel}.
         *
         * Defines the aria level of the title This information is e.g. used by assistive technologies like screenreaders
         * to create a hierarchical site map for faster navigation.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Auto`.
         */
        setTitleLevel(
          /**
           * New value for property `titleLevel`
           */
          sTitleLevel: sap.ui.core.TitleLevel
        ): sap.ui.layout.BlockLayoutCell;
        /**
         * @SINCE 1.56
         *
         * Sets the aggregated {@link #getTitleLink titleLink}.
         */
        setTitleLink(
          /**
           * The titleLink to set
           */
          oTitleLink: sap.ui.core.Control
        ): sap.ui.layout.BlockLayoutCell;
        /**
         * Sets a new value for property {@link #getWidth width}.
         *
         * Defines the width of the cell. Depending on the context of the cell - whether it's in scrollable, or
         * non scrollable row, this property is interpreted in two different ways. If the cell is placed inside
         * a scrollable row - this property defines the width of the cell in percentages. If no value is provided
         * - the default is 40%. If the cell is placed inside a non scrollable row - this property defines the grow
         * factor of the cell compared to the whole row. **For example:** If you have 2 cells, each with width of
         * 1, this means that they should be of equal size, and they need to fill the whole row. This results in
         * 50% width for each cell. If you have 2 cells, one with width of 1, the other with width of 3, this means
         * that the whole row width is 4, so the first cell will have a width of 25%, the second - 75%. According
         * to the visual guidelines, it is suggested that you only use 25%, 50%, 75% or 100% cells in you applications.
         * For example, 12,5% width is not desirable (1 cell with width 1, and another with width 7)
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `0`.
         */
        setWidth(
          /**
           * New value for property `width`
           */
          iWidth: number
        ): sap.ui.layout.BlockLayoutCell;
      }
      /**
       * @SINCE 1.50.0
       *
       * Holds layout data for the BlockLayoutCells contents.
       */
      class BlockLayoutCellData extends sap.ui.core.LayoutData {
        /**
         * Constructor for a new BlockLayoutCellData.
         *
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
         * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
         * of the syntax of the settings object.
         */
        constructor(
          /**
           * id for the new control, generated automatically if no id is given
           */
          sId?: string,
          /**
           * initial settings for the new control
           */
          mSettings?: BlockLayoutCellDataOpts
        );

        /**
         * Creates a new subclass of class sap.ui.layout.BlockLayoutCellData with name `sClassName` and enriches
         * it with the information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.LayoutData.extend}.
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
         * Gets current value of property {@link #getLSize lSize}.
         *
         * Sets the width of the cell for L size of the BlockLayout.
         *
         * Default value is `1`.
         */
        getLSize(): number;
        /**
         * Returns a metadata object for class sap.ui.layout.BlockLayoutCellData.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getMSize mSize}.
         *
         * Sets the width of the cell for M size of the BlockLayout.
         *
         * Default value is `1`.
         */
        getMSize(): number;
        /**
         * Gets current value of property {@link #getSSize sSize}.
         *
         * Sets the width of the cell for S size of the BlockLayout.
         *
         * Default value is `1`.
         */
        getSSize(): number;
        /**
         * Gets current value of property {@link #getXlSize xlSize}.
         *
         * Sets the width of the cell for XL size of the BlockLayout.
         *
         * Default value is `1`.
         */
        getXlSize(): number;
        /**
         * Sets a new value for property {@link #getLSize lSize}.
         *
         * Sets the width of the cell for L size of the BlockLayout.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `1`.
         */
        setLSize(
          /**
           * New value for property `lSize`
           */
          iLSize: number
        ): sap.ui.layout.BlockLayoutCellData;
        /**
         * Sets a new value for property {@link #getMSize mSize}.
         *
         * Sets the width of the cell for M size of the BlockLayout.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `1`.
         */
        setMSize(
          /**
           * New value for property `mSize`
           */
          iMSize: number
        ): sap.ui.layout.BlockLayoutCellData;
        /**
         * Sets width of the cell to all sizes if the width is specified.
         */
        setSize(iValue: undefined): sap.ui.layout.BlockLayoutCellData;
        /**
         * Sets a new value for property {@link #getSSize sSize}.
         *
         * Sets the width of the cell for S size of the BlockLayout.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `1`.
         */
        setSSize(
          /**
           * New value for property `sSize`
           */
          iSSize: number
        ): sap.ui.layout.BlockLayoutCellData;
        /**
         * Sets a new value for property {@link #getXlSize xlSize}.
         *
         * Sets the width of the cell for XL size of the BlockLayout.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `1`.
         */
        setXlSize(
          /**
           * New value for property `xlSize`
           */
          iXlSize: number
        ): sap.ui.layout.BlockLayoutCellData;
      }
      /**
       * @SINCE 1.34
       *
       * The BlockLayoutRow is used as an aggregation to the BlockLayout. It aggregates Block Layout cells. The
       * BlockLayoutRow has 2 rendering modes - scrollable and non scrollable.
       */
      class BlockLayoutRow extends sap.ui.core.Control {
        /**
         * Constructor for a new BlockLayoutRow.
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
          mSettings?: BlockLayoutRowOpts
        );

        /**
         * @SINCE 1.42
         *
         * Adds some accentCell into the association {@link #getAccentCells accentCells}.
         */
        addAccentCell(
          /**
           * The accentCells to add; if empty, nothing is inserted
           */
          vAccentCell: sap.ui.core.ID | sap.ui.layout.BlockLayoutCell
        ): sap.ui.layout.BlockLayoutRow;
        /**
         * Adds some content to the aggregation {@link #getContent content}.
         */
        addContent(
          /**
           * The content to add; if empty, nothing is inserted
           */
          oContent: sap.ui.layout.BlockLayoutCell
        ): sap.ui.layout.BlockLayoutRow;
        /**
         * Destroys all the content in the aggregation {@link #getContent content}.
         */
        destroyContent(): sap.ui.layout.BlockLayoutRow;
        /**
         * Creates a new subclass of class sap.ui.layout.BlockLayoutRow with name `sClassName` and enriches it with
         * the information contained in `oClassInfo`.
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
         * @SINCE 1.42
         *
         * Returns array of IDs of the elements which are the current targets of the association {@link #getAccentCells
         * accentCells}.
         */
        getAccentCells(): sap.ui.core.ID[];
        /**
         * Gets content of aggregation {@link #getContent content}.
         *
         * The content cells to be included in the row.
         */
        getContent(): sap.ui.layout.BlockLayoutCell[];
        /**
         * Returns a metadata object for class sap.ui.layout.BlockLayoutRow.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * @SINCE 1.42
         *
         * Gets current value of property {@link #getRowColorSet rowColorSet}.
         *
         * Defines background type for that row. There might be several rows with the same type
         */
        getRowColorSet(): sap.ui.layout.BlockRowColorSets;
        /**
         * Gets current value of property {@link #getScrollable scrollable}.
         *
         * Sets the rendering mode of the BlockLayoutRow to scrollable. In scrollable mode, the cells get aligned
         * side by side, with horizontal scroll bar for the row.
         *
         * Default value is `false`.
         */
        getScrollable(): boolean;
        /**
         * Checks for the provided `sap.ui.layout.BlockLayoutCell` in the aggregation {@link #getContent content}.
         * and returns its index if found or -1 otherwise.
         */
        indexOfContent(
          /**
           * The content whose index is looked for
           */
          oContent: sap.ui.layout.BlockLayoutCell
        ): number;
        /**
         * Inserts a content into the aggregation {@link #getContent content}.
         */
        insertContent(
          /**
           * The content to insert; if empty, nothing is inserted
           */
          oContent: sap.ui.layout.BlockLayoutCell,
          /**
           * The `0`-based index the content should be inserted at; for a negative value of `iIndex`, the content
           * is inserted at position 0; for a value greater than the current size of the aggregation, the content
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.layout.BlockLayoutRow;
        /**
         * @SINCE 1.42
         *
         * Removes an accentCell from the association named {@link #getAccentCells accentCells}.
         */
        removeAccentCell(
          /**
           * The accentCell to be removed or its index or ID
           */
          vAccentCell: number | sap.ui.core.ID | sap.ui.layout.BlockLayoutCell
        ): sap.ui.core.ID;
        /**
         * @SINCE 1.42
         *
         * Removes all the controls in the association named {@link #getAccentCells accentCells}.
         */
        removeAllAccentCells(): sap.ui.core.ID[];
        /**
         * Removes all the controls from the aggregation {@link #getContent content}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllContent(): sap.ui.layout.BlockLayoutCell[];
        /**
         * Removes a content from the aggregation {@link #getContent content}.
         */
        removeContent(
          /**
           * The content to remove or its index or id
           */
          vContent: number | string | sap.ui.layout.BlockLayoutCell
        ): sap.ui.layout.BlockLayoutCell;
        /**
         * @SINCE 1.42
         *
         * Changes dynamically row color set Note: this might invalidate cells inside and also change color sets
         * of the other BlockLayoutRow-s below it.
         */
        setRowColorSet(
          sType: sap.ui.layout.BlockRowColorSets
        ): sap.ui.layout.BlockLayoutRow;
        /**
         * Sets a new value for property {@link #getScrollable scrollable}.
         *
         * Sets the rendering mode of the BlockLayoutRow to scrollable. In scrollable mode, the cells get aligned
         * side by side, with horizontal scroll bar for the row.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setScrollable(
          /**
           * New value for property `scrollable`
           */
          bScrollable: boolean
        ): sap.ui.layout.BlockLayoutRow;
      }
      /**
       * @SINCE 1.30
       *
       * Layout control that allows additional (side) content to be displayed dynamically.
       *
       * Overview:
       *
       * `DynamicSideContent` is a layout control that allows additional content to be displayed in a way that
       * flexibly adapts to different screen sizes. The side content appears in a container next to or directly
       * below the main content (it doesn't overlay). When the side content is triggered, the main content becomes
       * narrower (if appearing side-by-side). The side content contains a separate scrollbar when appearing next
       * to the main content.
       *
       * Usage:
       *
       * When to use?
       *
       * Use this control if you want to display relevant information that is not critical for users to complete
       * a task. Users should have access to all the key functions and critical information in the app even if
       * they do not see the side content. This is important because on smaller screen sizes it may be difficult
       * to display the side content in a way that is easily accessible for the user.
       *
       * When not to use?
       *
       * Don't use it if you want to display navigation or critical information that prevents users from completing
       * a task when they have no access to the side content.
       *
       * Responsive Behavior:
       *
       * Screen width > 1440 px
       *
       *
       * 	 - Main vs. side content ratio is 75 vs. 25 percent (with a minimum of 320px each).
       * 	 - If the application defines a trigger, the side content can be hidden.
       *
       * Screen width  720px
       *
       *
       * 	 - Main vs. side content ratio is 66.666 vs. 33.333 percent (with a minimum of 320px each). If the side
       * 			content width falls below 320 px, it automatically slides under the main content, unless the app development
       * 			team specifies that it should disappear.
       *
       * Screen width
       * 	 - In this case, the side content automatically disappears from the screen (unless specified to stay
       * 			under the content) and can be triggered from a pre-set trigger (specified within the app). When the side
       * 			content is triggered, it replaces the main content. We recommend that you always place the trigger for
       * 			the side content in the same location, such as in the app footer.
       *
       * A special case, allows for comparison mode between the main and side content. In this case, the screen
       * is split into 50:50 percent for main vs. side content. The responsive behavior of the equal split is
       * the same as in the standard view - the side content disappears on screen widths of less than 720 px and
       * can only be viewed by triggering it.
       */
      class DynamicSideContent extends sap.ui.core.Control {
        /**
         * Constructor for a new `DynamicSideContent`.
         *
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
         * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
         * of the syntax of the settings object.
         * See:
         * 	{@link fiori:https://experience.sap.com/fiori-design-web/dynamic-side-content/ Dynamic Side Content}
         */
        constructor(
          /**
           * ID for the new control, generated automatically if no ID is given
           */
          sId?: string,
          /**
           * Initial settings for the new control
           */
          mSettings?: DynamicSideContentOpts
        );

        /**
         * Adds a control to the main content area. Only the main content part in the aggregation is re-rendered.
         */
        addMainContent(
          /**
           * Object to be added in the aggregation
           */
          oControl: object
        ): sap.ui.layout.DynamicSideContent;
        /**
         * Adds a control to the side content area. Only the side content part in the aggregation is re-rendered.
         */
        addSideContent(
          /**
           * Object to be added in the aggregation
           */
          oControl: object
        ): sap.ui.layout.DynamicSideContent;
        /**
         * @SINCE 1.32
         *
         * Attaches event handler `fnFunction` to the {@link #event:breakpointChanged breakpointChanged} event of
         * this `sap.ui.layout.DynamicSideContent`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.layout.DynamicSideContent` itself.
         *
         * Fires when the current breakpoint has been changed.
         */
        attachBreakpointChanged(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.layout.DynamicSideContent` itself
           */
          oListener?: object
        ): sap.ui.layout.DynamicSideContent;
        /**
         * Destroys all the mainContent in the aggregation {@link #getMainContent mainContent}.
         */
        destroyMainContent(): sap.ui.layout.DynamicSideContent;
        /**
         * Destroys all the sideContent in the aggregation {@link #getSideContent sideContent}.
         */
        destroySideContent(): sap.ui.layout.DynamicSideContent;
        /**
         * @SINCE 1.32
         *
         * Detaches event handler `fnFunction` from the {@link #event:breakpointChanged breakpointChanged} event
         * of this `sap.ui.layout.DynamicSideContent`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachBreakpointChanged(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.layout.DynamicSideContent;
        /**
         * Creates a new subclass of class sap.ui.layout.DynamicSideContent with name `sClassName` and enriches
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
         * @SINCE 1.32
         *
         * Fires event {@link #event:breakpointChanged breakpointChanged} to attached listeners.
         */
        fireBreakpointChanged(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            currentBreakpoint?: string;
          }
        ): sap.ui.layout.DynamicSideContent;
        /**
         * Gets current value of property {@link #getContainerQuery containerQuery}.
         *
         * If set to TRUE, then not the media Query (device screen size) but the size of the container, surrounding
         * the control, defines the current range.
         *
         * Default value is `false`.
         */
        getContainerQuery(): boolean;
        /**
         * Returns the breakpoint for the current state of the control.
         */
        getCurrentBreakpoint(): String;
        /**
         * Gets current value of property {@link #getEqualSplit equalSplit}.
         *
         * Defines whether the control is in equal split mode. In this mode, the side and the main content take
         * 50:50 percent of the container on all screen sizes except for phone, where the main and side contents
         * are switching visibility using the toggle method.
         *
         * Default value is `false`.
         */
        getEqualSplit(): boolean;
        /**
         * Gets content of aggregation {@link #getMainContent mainContent}.
         *
         * Main content controls.
         */
        getMainContent(): sap.ui.core.Control[];
        /**
         * Returns a metadata object for class sap.ui.layout.DynamicSideContent.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets the value of showMainContent property.
         */
        getShowMainContent(): boolean;
        /**
         * Gets the value of showSideContent property.
         */
        getShowSideContent(): boolean;
        /**
         * Gets content of aggregation {@link #getSideContent sideContent}.
         *
         * Side content controls.
         */
        getSideContent(): sap.ui.core.Control[];
        /**
         * Gets current value of property {@link #getSideContentFallDown sideContentFallDown}.
         *
         * Determines on which breakpoints the side content falls down below the main content.
         *
         * Default value is `OnMinimumWidth`.
         */
        getSideContentFallDown(): sap.ui.layout.SideContentFallDown;
        /**
         * @SINCE 1.36
         *
         * Gets current value of property {@link #getSideContentPosition sideContentPosition}.
         *
         * Determines whether the side content is on the left or on the right side of the main content.
         *
         * Default value is `End`.
         */
        getSideContentPosition(): sap.ui.layout.SideContentPosition;
        /**
         * Gets current value of property {@link #getSideContentVisibility sideContentVisibility}.
         *
         * Determines on which breakpoints the side content is visible.
         *
         * Default value is `ShowAboveS`.
         */
        getSideContentVisibility(): sap.ui.layout.SideContentVisibility;
        /**
         * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getMainContent mainContent}.
         * and returns its index if found or -1 otherwise.
         */
        indexOfMainContent(
          /**
           * The mainContent whose index is looked for
           */
          oMainContent: sap.ui.core.Control
        ): number;
        /**
         * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getSideContent sideContent}.
         * and returns its index if found or -1 otherwise.
         */
        indexOfSideContent(
          /**
           * The sideContent whose index is looked for
           */
          oSideContent: sap.ui.core.Control
        ): number;
        /**
         * Inserts a mainContent into the aggregation {@link #getMainContent mainContent}.
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
        ): sap.ui.layout.DynamicSideContent;
        /**
         * Inserts a sideContent into the aggregation {@link #getSideContent sideContent}.
         */
        insertSideContent(
          /**
           * The sideContent to insert; if empty, nothing is inserted
           */
          oSideContent: sap.ui.core.Control,
          /**
           * The `0`-based index the sideContent should be inserted at; for a negative value of `iIndex`, the sideContent
           * is inserted at position 0; for a value greater than the current size of the aggregation, the sideContent
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.layout.DynamicSideContent;
        /**
         * Removes all the controls from the aggregation {@link #getMainContent mainContent}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllMainContent(): sap.ui.core.Control[];
        /**
         * Removes all the controls from the aggregation {@link #getSideContent sideContent}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllSideContent(): sap.ui.core.Control[];
        /**
         * Removes a mainContent from the aggregation {@link #getMainContent mainContent}.
         */
        removeMainContent(
          /**
           * The mainContent to remove or its index or id
           */
          vMainContent: number | string | sap.ui.core.Control
        ): sap.ui.core.Control;
        /**
         * Removes a sideContent from the aggregation {@link #getSideContent sideContent}.
         */
        removeSideContent(
          /**
           * The sideContent to remove or its index or id
           */
          vSideContent: number | string | sap.ui.core.Control
        ): sap.ui.core.Control;
        /**
         * Sets a new value for property {@link #getContainerQuery containerQuery}.
         *
         * If set to TRUE, then not the media Query (device screen size) but the size of the container, surrounding
         * the control, defines the current range.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setContainerQuery(
          /**
           * New value for property `containerQuery`
           */
          bContainerQuery: boolean
        ): sap.ui.layout.DynamicSideContent;
        /**
         * Sets or unsets the page in equalSplit mode.
         */
        setEqualSplit(
          /**
           * Determines if the page is set to equalSplit mode
           */
          bState?: boolean
        ): sap.ui.layout.DynamicSideContent;
        /**
         * Sets the showMainContent property.
         */
        setShowMainContent(
          /**
           * Determines if the main content part is visible
           */
          bVisible: boolean,
          /**
           * Determines if the visual state is updated
           */
          bSuppressVisualUpdate: boolean
        ): sap.ui.layout.DynamicSideContent;
        /**
         * Sets the showSideContent property.
         */
        setShowSideContent(
          /**
           * Determines if the side content part is visible
           */
          bVisible: boolean,
          /**
           * Determines if the visual state is updated
           */
          bSuppressVisualUpdate: boolean
        ): sap.ui.layout.DynamicSideContent;
        /**
         * Sets a new value for property {@link #getSideContentFallDown sideContentFallDown}.
         *
         * Determines on which breakpoints the side content falls down below the main content.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `OnMinimumWidth`.
         */
        setSideContentFallDown(
          /**
           * New value for property `sideContentFallDown`
           */
          sSideContentFallDown: sap.ui.layout.SideContentFallDown
        ): sap.ui.layout.DynamicSideContent;
        /**
         * @SINCE 1.36
         *
         * Sets a new value for property {@link #getSideContentPosition sideContentPosition}.
         *
         * Determines whether the side content is on the left or on the right side of the main content.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `End`.
         */
        setSideContentPosition(
          /**
           * New value for property `sideContentPosition`
           */
          sSideContentPosition: sap.ui.layout.SideContentPosition
        ): sap.ui.layout.DynamicSideContent;
        /**
         * Sets the sideContentVisibility property.
         */
        setSideContentVisibility(
          /**
           * Determines on which breakpoints the side content is visible.
           */
          sVisibility: sap.ui.layout.SideContentVisibility,
          /**
           * Determines if the visual state is updated
           */
          bSuppressVisualUpdate: boolean
        ): sap.ui.layout.DynamicSideContent;
        /**
         * Used for the toggle button functionality. When the control is on a phone screen size only, one control
         * area is visible. This helper method is used to implement a button/switch for changing between the main
         * and side content areas. Only works if the current breakpoint is "S".
         */
        toggle(): sap.ui.layout.DynamicSideContent;
        /**
         * @SINCE 1.32
         *
         * Attaches event handler `fnFunction` to the {@link #event:breakpointChanged breakpointChanged} event of
         * this `sap.ui.layout.DynamicSideContent`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.layout.DynamicSideContent` itself.
         *
         * Fires when the current breakpoint has been changed.
         */
        attachBreakpointChanged(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.layout.DynamicSideContent` itself
           */
          oListener?: object
        ): sap.ui.layout.DynamicSideContent;
      }
      /**
       * @SINCE 1.25.0
       *
       * A layout container with a fixed and a flexible part. Overview: The FixFlex control builds the container
       * for a layout with a fixed and a flexible part. The flexible container adapts its size to the fix container.
       * Guidelines::
       * 	 - The fix container can hold any number of controls, while the flexible container can hold only one
       *
       * 	 - In order for the FixFlex to stretch properly, the parent element, in which the control is placed,
       * 			needs to have a specified height or needs to have an absolute position.
       * 	 - Avoid nesting FixFlex in other flexbox-based layout controls ({@link sap.ui.layout.FixFlex FixFlex},
       * 			{@link sap.m.FlexBox FlexBox}, Hbox, Vbox). Otherwise, contents may be not accessible or multiple scrollbars
       * 			can appear.  Structure: The behavior of the FixFlex is controlled by the following properties:
       *
       * 	 - `fixContentSize` - The width/height of the fix part of the control
       * 	 - `fixFirst` - The ordering of the fix and flex part
       * 	 - `minFlexSize` - Scrolling inside the flex part, if its contents are large
       * 	 - `vertical` - Alignment of the FixFlex control  Responsive Behavior:
       * 	 - If the child control of the flex or the fix container has width/height bigger than the container
       * 			itself, the child control will be cropped in the view.
       * 	 - If minFlexSize is set, then a scrollbar is shown in the flexible part, depending on the `vertical`
       * 			property.
       */
      class FixFlex extends sap.ui.core.Control {
        /**
         * Constructor for a new FixFlex.
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
          mSettings?: FixFlexOpts
        );

        /**
         * Adds some fixContent to the aggregation {@link #getFixContent fixContent}.
         */
        addFixContent(
          /**
           * The fixContent to add; if empty, nothing is inserted
           */
          oFixContent: sap.ui.core.Control
        ): sap.ui.layout.FixFlex;
        /**
         * Destroys all the fixContent in the aggregation {@link #getFixContent fixContent}.
         */
        destroyFixContent(): sap.ui.layout.FixFlex;
        /**
         * Destroys the flexContent in the aggregation {@link #getFlexContent flexContent}.
         */
        destroyFlexContent(): sap.ui.layout.FixFlex;
        /**
         * Creates a new subclass of class sap.ui.layout.FixFlex with name `sClassName` and enriches it with the
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
         * Gets content of aggregation {@link #getFixContent fixContent}.
         *
         * Controls in the fixed part of the layout.
         */
        getFixContent(): sap.ui.core.Control[];
        /**
         * Gets current value of property {@link #getFixContentSize fixContentSize}.
         *
         * Determines the height (if the vertical property is "true") or the width (if the vertical property is
         * "false") of the fixed area. If left at the default value "auto", the fixed-size area will be as large
         * as its content. In this case the content cannot use percentage sizes.
         *
         * Default value is `auto`.
         */
        getFixContentSize(): sap.ui.core.CSSSize;
        /**
         * Gets current value of property {@link #getFixFirst fixFirst}.
         *
         * Determines whether the fixed-size area should be on the beginning/top ( if the value is "true") or end/bottom
         * ( if the value is "false").
         *
         * Default value is `true`.
         */
        getFixFirst(): boolean;
        /**
         * Gets content of aggregation {@link #getFlexContent flexContent}.
         *
         * Control in the stretching part of the layout.
         */
        getFlexContent(): sap.ui.core.Control;
        /**
         * Returns a metadata object for class sap.ui.layout.FixFlex.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * @SINCE 1.29
         *
         * Gets current value of property {@link #getMinFlexSize minFlexSize}.
         *
         * Enables scrolling inside the flexible part. The given size is calculated in "px". If the child control
         * in the flexible part is larger than the available flexible size on the screen and if the available size
         * for the flexible part is smaller or equal to the minFlexSize value, the scroll will be for the entire
         * FixFlex control.
         *
         * Default value is `0`.
         */
        getMinFlexSize(): number;
        /**
         * Gets current value of property {@link #getVertical vertical}.
         *
         * Determines the direction of the layout of child elements. True for vertical and false for horizontal
         * layout.
         *
         * Default value is `true`.
         */
        getVertical(): boolean;
        /**
         * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getFixContent fixContent}. and
         * returns its index if found or -1 otherwise.
         */
        indexOfFixContent(
          /**
           * The fixContent whose index is looked for
           */
          oFixContent: sap.ui.core.Control
        ): number;
        /**
         * Inserts a fixContent into the aggregation {@link #getFixContent fixContent}.
         */
        insertFixContent(
          /**
           * The fixContent to insert; if empty, nothing is inserted
           */
          oFixContent: sap.ui.core.Control,
          /**
           * The `0`-based index the fixContent should be inserted at; for a negative value of `iIndex`, the fixContent
           * is inserted at position 0; for a value greater than the current size of the aggregation, the fixContent
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.layout.FixFlex;
        /**
         * Removes all the controls from the aggregation {@link #getFixContent fixContent}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllFixContent(): sap.ui.core.Control[];
        /**
         * Removes a fixContent from the aggregation {@link #getFixContent fixContent}.
         */
        removeFixContent(
          /**
           * The fixContent to remove or its index or id
           */
          vFixContent: number | string | sap.ui.core.Control
        ): sap.ui.core.Control;
        /**
         * Sets a new value for property {@link #getFixContentSize fixContentSize}.
         *
         * Determines the height (if the vertical property is "true") or the width (if the vertical property is
         * "false") of the fixed area. If left at the default value "auto", the fixed-size area will be as large
         * as its content. In this case the content cannot use percentage sizes.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `auto`.
         */
        setFixContentSize(
          /**
           * New value for property `fixContentSize`
           */
          sFixContentSize: sap.ui.core.CSSSize
        ): sap.ui.layout.FixFlex;
        /**
         * Sets a new value for property {@link #getFixFirst fixFirst}.
         *
         * Determines whether the fixed-size area should be on the beginning/top ( if the value is "true") or end/bottom
         * ( if the value is "false").
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setFixFirst(
          /**
           * New value for property `fixFirst`
           */
          bFixFirst: boolean
        ): sap.ui.layout.FixFlex;
        /**
         * Sets the aggregated {@link #getFlexContent flexContent}.
         */
        setFlexContent(
          /**
           * The flexContent to set
           */
          oFlexContent: sap.ui.core.Control
        ): sap.ui.layout.FixFlex;
        /**
         * @SINCE 1.29
         *
         * Sets a new value for property {@link #getMinFlexSize minFlexSize}.
         *
         * Enables scrolling inside the flexible part. The given size is calculated in "px". If the child control
         * in the flexible part is larger than the available flexible size on the screen and if the available size
         * for the flexible part is smaller or equal to the minFlexSize value, the scroll will be for the entire
         * FixFlex control.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `0`.
         */
        setMinFlexSize(
          /**
           * New value for property `minFlexSize`
           */
          iMinFlexSize: number
        ): sap.ui.layout.FixFlex;
        /**
         * Sets a new value for property {@link #getVertical vertical}.
         *
         * Determines the direction of the layout of child elements. True for vertical and false for horizontal
         * layout.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setVertical(
          /**
           * New value for property `vertical`
           */
          bVertical: boolean
        ): sap.ui.layout.FixFlex;
      }
      /**
       * @SINCE 1.15.0
       *
       * A layout control which positions its child controls in a 12 column flow layout.
       *
       * The `Grid` control's children can be specified to take on a variable amount of columns depending on available
       * screen size. With this control it is possible to achieve flexible layouts and line-breaks for extra large-,
       * large-, medium- and small-sized screens, such as large desktop, desktop, tablet, and mobile.
       *
       * The `Grid` control's width can be percentage- or pixel-based and the spacing between its columns can
       * be set to various predefined values.
       *
       * **Note:** The visibility of the child control does not affect the horizontal space it occupies. This
       * means that even if the control is not visible, its horizontal space will still exist, even if it is empty.
       */
      class Grid extends sap.ui.core.Control {
        /**
         * Constructor for a new `Grid`.
         *
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
         * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
         * of the syntax of the settings object.
         * See:
         * 	{@link fiori:https://experience.sap.com/fiori-design-web/grid-layout/#responsive-grid Grid}
         * 	{@link topic:43ae317cf39640a88bc8be979d2671df Grid}
         * 	{@link topic:32d4b9c2b981425dbc374d3e9d5d0c2e Grid Controls}
         */
        constructor(
          /**
           * ID for the new control, generated automatically if no ID is given
           */
          sId?: string,
          /**
           * Initial settings for the new control
           */
          mSettings?: GridOpts
        );

        /**
         * @SINCE 1.48.7
         *
         * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
         */
        addAriaLabelledBy(
          /**
           * The ariaLabelledBy to add; if empty, nothing is inserted
           */
          vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control
        ): sap.ui.layout.Grid;
        /**
         * Adds some content to the aggregation {@link #getContent content}.
         */
        addContent(
          /**
           * The content to add; if empty, nothing is inserted
           */
          oContent: sap.ui.core.Control
        ): sap.ui.layout.Grid;
        /**
         * Destroys all the content in the aggregation {@link #getContent content}.
         */
        destroyContent(): sap.ui.layout.Grid;
        /**
         * Creates a new subclass of class sap.ui.layout.Grid with name `sClassName` and enriches it with the information
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
         * Returns the `Grid` accessibility information.
         * See:
         * 	sap.ui.core.Control#getAccessibilityInfo
         */
        // @ts-ignore
        getAccessibilityInfo(): object;
        /**
         * @SINCE 1.48.7
         *
         * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
         * ariaLabelledBy}.
         */
        getAriaLabelledBy(): sap.ui.core.ID[];
        /**
         * Gets current value of property {@link #getContainerQuery containerQuery}.
         *
         * If set to `true`, the current range (large, medium or small) is defined by the size of the container
         * surrounding the `Grid` instead of the device screen size (media Query).
         *
         * Default value is `false`.
         */
        getContainerQuery(): boolean;
        /**
         * Gets content of aggregation {@link #getContent content}.
         *
         * Controls that are placed into Grid layout.
         */
        getContent(): sap.ui.core.Control[];
        /**
         * Gets current value of property {@link #getDefaultIndent defaultIndent}.
         *
         * Optional. Defines default for the whole Grid numbers of empty columns before the current span begins.
         * It can be defined for large, medium and small screens. Allowed values are separated by space Letters
         * L, M or S followed by number of columns from 0 to 11 that the container has to take, for example, `L2
         * M4 S6`, `M11`, `s10` or `l4 m4`.
         *
         * **Note:** The parameters must be provided in the order .
         *
         * Default value is `XL0 L0 M0 S0`.
         */
        getDefaultIndent(): sap.ui.layout.GridIndent;
        /**
         * Gets current value of property {@link #getDefaultSpan defaultSpan}.
         *
         * Optional. A string type that represents the span values of the `Grid` for large, medium and small screens.
         * Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 12 that
         * the container has to take, for example, `L2 M4 S6`, `M12`, `s10` or `l4 m4`.
         *
         * **Note:** The parameters must be provided in the order .
         *
         * Default value is `XL3 L3 M6 S12`.
         */
        getDefaultSpan(): sap.ui.layout.GridSpan;
        /**
         * Gets current value of property {@link #getHSpacing hSpacing}.
         *
         * Optional. Defines the horizontal spacing between the content in the `Grid`. In rem, allowed values are
         * 0, 0.5 , 1 or 2.
         *
         * Default value is `1`.
         */
        getHSpacing(): number;
        /**
         * Returns a metadata object for class sap.ui.layout.Grid.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getPosition position}.
         *
         * Optional. Defines the position of the `Grid` in the window or surrounding container.
         *
         * Default value is `Left`.
         */
        getPosition(): sap.ui.layout.GridPosition;
        /**
         * Gets current value of property {@link #getVSpacing vSpacing}.
         *
         * Optional. Defines the vertical spacing between the rows in the `Grid`. In rem, allowed values are 0,
         * 0.5, 1 and 2.
         *
         * Default value is `1`.
         */
        getVSpacing(): number;
        /**
         * Gets current value of property {@link #getWidth width}.
         *
         * Optional. Defines the width of the `Grid`. If not specified, then 100%.
         *
         * Default value is `100%`.
         */
        getWidth(): sap.ui.core.CSSSize;
        /**
         * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContent content}. and returns
         * its index if found or -1 otherwise.
         */
        indexOfContent(
          /**
           * The content whose index is looked for
           */
          oContent: sap.ui.core.Control
        ): number;
        /**
         * Inserts a content into the aggregation {@link #getContent content}.
         */
        insertContent(
          /**
           * The content to insert; if empty, nothing is inserted
           */
          oContent: sap.ui.core.Control,
          /**
           * The `0`-based index the content should be inserted at; for a negative value of `iIndex`, the content
           * is inserted at position 0; for a value greater than the current size of the aggregation, the content
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.layout.Grid;
        /**
         * @SINCE 1.48.7
         *
         * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
         */
        removeAllAriaLabelledBy(): sap.ui.core.ID[];
        /**
         * Removes all the controls from the aggregation {@link #getContent content}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllContent(): sap.ui.core.Control[];
        /**
         * @SINCE 1.48.7
         *
         * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
         */
        removeAriaLabelledBy(
          /**
           * The ariaLabelledBy to be removed or its index or ID
           */
          vAriaLabelledBy: number | sap.ui.core.ID | sap.ui.core.Control
        ): sap.ui.core.ID;
        /**
         * Removes a content from the aggregation {@link #getContent content}.
         */
        removeContent(
          /**
           * The content to remove or its index or id
           */
          vContent: number | string | sap.ui.core.Control
        ): sap.ui.core.Control;
        /**
         * Sets a new value for property {@link #getContainerQuery containerQuery}.
         *
         * If set to `true`, the current range (large, medium or small) is defined by the size of the container
         * surrounding the `Grid` instead of the device screen size (media Query).
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setContainerQuery(
          /**
           * New value for property `containerQuery`
           */
          bContainerQuery: boolean
        ): sap.ui.layout.Grid;
        /**
         * Sets a new value for property {@link #getDefaultIndent defaultIndent}.
         *
         * Optional. Defines default for the whole Grid numbers of empty columns before the current span begins.
         * It can be defined for large, medium and small screens. Allowed values are separated by space Letters
         * L, M or S followed by number of columns from 0 to 11 that the container has to take, for example, `L2
         * M4 S6`, `M11`, `s10` or `l4 m4`.
         *
         * **Note:** The parameters must be provided in the order .
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `XL0 L0 M0 S0`.
         */
        setDefaultIndent(
          /**
           * New value for property `defaultIndent`
           */
          sDefaultIndent: sap.ui.layout.GridIndent
        ): sap.ui.layout.Grid;
        /**
         * Sets a new value for property {@link #getDefaultSpan defaultSpan}.
         *
         * Optional. A string type that represents the span values of the `Grid` for large, medium and small screens.
         * Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 12 that
         * the container has to take, for example, `L2 M4 S6`, `M12`, `s10` or `l4 m4`.
         *
         * **Note:** The parameters must be provided in the order .
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `XL3 L3 M6 S12`.
         */
        setDefaultSpan(
          /**
           * New value for property `defaultSpan`
           */
          sDefaultSpan: sap.ui.layout.GridSpan
        ): sap.ui.layout.Grid;
        /**
         * Sets a new value for property {@link #getHSpacing hSpacing}.
         *
         * Optional. Defines the horizontal spacing between the content in the `Grid`. In rem, allowed values are
         * 0, 0.5 , 1 or 2.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `1`.
         */
        setHSpacing(
          /**
           * New value for property `hSpacing`
           */
          fHSpacing: number
        ): sap.ui.layout.Grid;
        /**
         * Sets a new value for property {@link #getPosition position}.
         *
         * Optional. Defines the position of the `Grid` in the window or surrounding container.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Left`.
         */
        setPosition(
          /**
           * New value for property `position`
           */
          sPosition: sap.ui.layout.GridPosition
        ): sap.ui.layout.Grid;
        /**
         * Sets a new value for property {@link #getVSpacing vSpacing}.
         *
         * Optional. Defines the vertical spacing between the rows in the `Grid`. In rem, allowed values are 0,
         * 0.5, 1 and 2.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `1`.
         */
        setVSpacing(
          /**
           * New value for property `vSpacing`
           */
          fVSpacing: number
        ): sap.ui.layout.Grid;
        /**
         * Sets a new value for property {@link #getWidth width}.
         *
         * Optional. Defines the width of the `Grid`. If not specified, then 100%.
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
        ): sap.ui.layout.Grid;
      }
      /**
       * @SINCE 1.15.0
       *
       * Defines layout data for the {@link sap.ui.layout.Grid}.
       *
       * **Note:** When `GridData` is used for controls inside a form, the `linebreak` property has to be set
       * to `true` if the next form element has to be displayed on a new line. Otherwise the `GridData` overrides
       * the layout provided by the `Form`.
       */
      class GridData extends sap.ui.core.LayoutData {
        /**
         * Constructor for a new `GridData`.
         *
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
         * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
         * of the syntax of the settings object.
         * See:
         * 	{@link topic:43ae317cf39640a88bc8be979d2671df Grid}
         * 	{@link topic:32d4b9c2b981425dbc374d3e9d5d0c2e Grid Controls}
         */
        constructor(
          /**
           * ID for the new control, generated automatically if no ID is given
           */
          sId?: string,
          /**
           * Initial settings for the new control
           */
          mSettings?: GridDataOpts
        );

        /**
         * Creates a new subclass of class sap.ui.layout.GridData with name `sClassName` and enriches it with the
         * information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.LayoutData.extend}.
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
         * Gets current value of property {@link #getIndent indent}.
         *
         * A string type that represents the indent values of the `Grid` for large, medium and small screens.
         *
         * Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 11 that
         * the container has to take, for example, `L2 M4 S6`, `M11`, `s10` or `l4 m4`.
         *
         * **Note:** The parameters must be provided in the order .
         */
        getIndent(): sap.ui.layout.GridIndent;
        /**
         * Gets current value of property {@link #getIndentL indentL}.
         *
         * Optional. Defines an indent value for large screens. This value overwrites the value for large screens
         * defined in the `indent` property.
         */
        getIndentL(): number;
        /**
         * @deprecated (since 1.17.1) - Use the `indentL` property instead.
         *
         * Gets current value of property {@link #getIndentLarge indentLarge}.
         *
         * Deprecated. Defines an indent value for large screens. This value overwrites the value for large screens
         * defined in the `indent` property.
         */
        getIndentLarge(): number;
        /**
         * Gets current value of property {@link #getIndentM indentM}.
         *
         * Optional. Defines an indent value for medium size screens. This value overwrites the value for medium
         * screens defined in the `indent` property.
         */
        getIndentM(): number;
        /**
         * @deprecated (since 1.17.1) - Use the `indentM` property instead.
         *
         * Gets current value of property {@link #getIndentMedium indentMedium}.
         *
         * Deprecated. Defines an indent value for medium screens. This value overwrites the value for medium screens
         * defined in the `indent` property.
         */
        getIndentMedium(): number;
        /**
         * Gets current value of property {@link #getIndentS indentS}.
         *
         * Optional. Defines an indent value for small screens. This value overwrites the value for small screens
         * defined in the `indent` property.
         */
        getIndentS(): number;
        /**
         * @deprecated (since 1.17.1) - Use `indentS` property instead.
         *
         * Gets current value of property {@link #getIndentSmall indentSmall}.
         *
         * Deprecated. Defines an indent value for small screens. This value overwrites the value for small screens
         * defined in the `indent` property.
         */
        getIndentSmall(): number;
        /**
         * Gets current value of property {@link #getIndentXL indentXL}.
         *
         * Optional. Defines an indent value for extra large screens. This value overwrites the value for extra
         * large screens defined in the `indent` property.
         */
        getIndentXL(): number;
        /**
         * Gets current value of property {@link #getLinebreak linebreak}.
         *
         * Optional. If set to `true`, the control causes a line break on all-size screens within the `Grid` and
         * becomes the first within the next line.
         *
         * Default value is `false`.
         */
        getLinebreak(): boolean;
        /**
         * Gets current value of property {@link #getLinebreakL linebreakL}.
         *
         * Optional. If set to `true`, the control causes a line break on large screens within the `Grid` and becomes
         * the first within the next line.
         *
         * Default value is `false`.
         */
        getLinebreakL(): boolean;
        /**
         * Gets current value of property {@link #getLinebreakM linebreakM}.
         *
         * Optional. If set to `true`, the control causes a line break on medium screens within the `Grid` and becomes
         * the first within the next line.
         *
         * Default value is `false`.
         */
        getLinebreakM(): boolean;
        /**
         * Gets current value of property {@link #getLinebreakS linebreakS}.
         *
         * Optional. If set to `true`, the control causes a line break on small screens within the `Grid` and becomes
         * the first within the next line.
         *
         * Default value is `false`.
         */
        getLinebreakS(): boolean;
        /**
         * Gets current value of property {@link #getLinebreakXL linebreakXL}.
         *
         * Optional. If set to `true`, the control causes a line break on extra large screens within the `Grid`
         * and becomes the first within the next line.
         *
         * Default value is `false`.
         */
        getLinebreakXL(): boolean;
        /**
         * Returns a metadata object for class sap.ui.layout.GridData.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getMoveBackwards moveBackwards}.
         *
         * Optional. Moves a cell backwards with as many columns as specified.
         */
        getMoveBackwards(): sap.ui.layout.GridIndent;
        /**
         * Gets current value of property {@link #getMoveForward moveForward}.
         *
         * Optional. Moves a cell forwards with as many columns as specified.
         */
        getMoveForward(): sap.ui.layout.GridIndent;
        /**
         * Gets current value of property {@link #getSpan span}.
         *
         * A string type that represents the span values of the `Grid` for large, medium and small screens.
         *
         * Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 12 that
         * the container has to take, for example: `L2 M4 S6`, `M12`, `s10` or `l4 m4`.
         *
         * **Note:** The parameters must be provided in the order .
         */
        getSpan(): sap.ui.layout.GridSpan;
        /**
         * Gets current value of property {@link #getSpanL spanL}.
         *
         * Optional. Defines a span value for large screens. This value overwrites the value for large screens defined
         * in the `span` property.
         */
        getSpanL(): number;
        /**
         * @deprecated (since 1.17.1) - Use the `spanL` property instead.
         *
         * Gets current value of property {@link #getSpanLarge spanLarge}.
         *
         * Deprecated. Defines a span value for large screens. This value overwrites the value for large screens
         * defined in the `span` property.
         */
        getSpanLarge(): number;
        /**
         * Gets current value of property {@link #getSpanM spanM}.
         *
         * Optional. Defines a span value for medium size screens. This value overwrites the value for medium screens
         * defined in the `span` property.
         */
        getSpanM(): number;
        /**
         * @deprecated (since 1.17.1) - Use the `spanM` property instead.
         *
         * Gets current value of property {@link #getSpanMedium spanMedium}.
         *
         * Deprecated. Defines a span value for medium screens. This value overwrites the value for medium screens
         * defined in the `span` property.
         */
        getSpanMedium(): number;
        /**
         * Gets current value of property {@link #getSpanS spanS}.
         *
         * Optional. Defines a span value for small screens. This value overwrites the value for small screens defined
         * in the `span` property.
         */
        getSpanS(): number;
        /**
         * @deprecated (since 1.17.1) - Use the `spanS` property instead.
         *
         * Gets current value of property {@link #getSpanSmall spanSmall}.
         *
         * Deprecated. Defines a span value for small screens. This value overwrites the value for small screens
         * defined in the `span` property.
         */
        getSpanSmall(): number;
        /**
         * Gets current value of property {@link #getSpanXL spanXL}.
         *
         * Optional. Defines a span value for extra large screens. This value overwrites the value for extra large
         * screens defined in the `span` property.
         */
        getSpanXL(): number;
        /**
         * Gets current value of property {@link #getVisibleL visibleL}.
         *
         * Defines if this control is visible on large screens.
         *
         * Default value is `true`.
         */
        getVisibleL(): boolean;
        /**
         * Gets current value of property {@link #getVisibleM visibleM}.
         *
         * Defines if this control is visible on medium screens.
         *
         * Default value is `true`.
         */
        getVisibleM(): boolean;
        /**
         * @deprecated (since 1.17.1) - Use the `visibleL` property instead.
         *
         * Gets current value of property {@link #getVisibleOnLarge visibleOnLarge}.
         *
         * Deprecated. Defines if this control is visible on large screens.
         *
         * Default value is `true`.
         */
        getVisibleOnLarge(): boolean;
        /**
         * @deprecated (since 1.17.1) - Use the `visibleM` property instead.
         *
         * Gets current value of property {@link #getVisibleOnMedium visibleOnMedium}.
         *
         * Deprecated. Defines if this control is visible on medium screens.
         *
         * Default value is `true`.
         */
        getVisibleOnMedium(): boolean;
        /**
         * @deprecated (since 1.17.1) - Use the `visibleS` property instead.
         *
         * Gets current value of property {@link #getVisibleOnSmall visibleOnSmall}.
         *
         * Deprecated. Defines if this control is visible on small screens.
         *
         * Default value is `true`.
         */
        getVisibleOnSmall(): boolean;
        /**
         * Gets current value of property {@link #getVisibleS visibleS}.
         *
         * Defines if this control is visible on small screens.
         *
         * Default value is `true`.
         */
        getVisibleS(): boolean;
        /**
         * Gets current value of property {@link #getVisibleXL visibleXL}.
         *
         * Defines if this control is visible on extra Large screens.
         *
         * Default value is `true`.
         */
        getVisibleXL(): boolean;
        /**
         * Sets a new value for property {@link #getIndent indent}.
         *
         * A string type that represents the indent values of the `Grid` for large, medium and small screens.
         *
         * Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 11 that
         * the container has to take, for example, `L2 M4 S6`, `M11`, `s10` or `l4 m4`.
         *
         * **Note:** The parameters must be provided in the order .
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setIndent(
          /**
           * New value for property `indent`
           */
          sIndent: sap.ui.layout.GridIndent
        ): sap.ui.layout.GridData;
        /**
         * Sets a new value for property {@link #getIndentL indentL}.
         *
         * Optional. Defines an indent value for large screens. This value overwrites the value for large screens
         * defined in the `indent` property.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setIndentL(
          /**
           * New value for property `indentL`
           */
          iIndentL: number
        ): sap.ui.layout.GridData;
        /**
         * @deprecated (since 1.17.1) - Use the `indentL` property instead.
         *
         * Sets a new value for property {@link #getIndentLarge indentLarge}.
         *
         * Deprecated. Defines an indent value for large screens. This value overwrites the value for large screens
         * defined in the `indent` property.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setIndentLarge(
          /**
           * New value for property `indentLarge`
           */
          iIndentLarge: number
        ): sap.ui.layout.GridData;
        /**
         * Sets a new value for property {@link #getIndentM indentM}.
         *
         * Optional. Defines an indent value for medium size screens. This value overwrites the value for medium
         * screens defined in the `indent` property.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setIndentM(
          /**
           * New value for property `indentM`
           */
          iIndentM: number
        ): sap.ui.layout.GridData;
        /**
         * @deprecated (since 1.17.1) - Use the `indentM` property instead.
         *
         * Sets a new value for property {@link #getIndentMedium indentMedium}.
         *
         * Deprecated. Defines an indent value for medium screens. This value overwrites the value for medium screens
         * defined in the `indent` property.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setIndentMedium(
          /**
           * New value for property `indentMedium`
           */
          iIndentMedium: number
        ): sap.ui.layout.GridData;
        /**
         * Sets a new value for property {@link #getIndentS indentS}.
         *
         * Optional. Defines an indent value for small screens. This value overwrites the value for small screens
         * defined in the `indent` property.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setIndentS(
          /**
           * New value for property `indentS`
           */
          iIndentS: number
        ): sap.ui.layout.GridData;
        /**
         * @deprecated (since 1.17.1) - Use `indentS` property instead.
         *
         * Sets a new value for property {@link #getIndentSmall indentSmall}.
         *
         * Deprecated. Defines an indent value for small screens. This value overwrites the value for small screens
         * defined in the `indent` property.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setIndentSmall(
          /**
           * New value for property `indentSmall`
           */
          iIndentSmall: number
        ): sap.ui.layout.GridData;
        /**
         * Sets a new value for property {@link #getIndentXL indentXL}.
         *
         * Optional. Defines an indent value for extra large screens. This value overwrites the value for extra
         * large screens defined in the `indent` property.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setIndentXL(
          /**
           * New value for property `indentXL`
           */
          iIndentXL: number
        ): sap.ui.layout.GridData;
        /**
         * Sets a new value for property {@link #getLinebreak linebreak}.
         *
         * Optional. If set to `true`, the control causes a line break on all-size screens within the `Grid` and
         * becomes the first within the next line.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setLinebreak(
          /**
           * New value for property `linebreak`
           */
          bLinebreak: boolean
        ): sap.ui.layout.GridData;
        /**
         * Sets a new value for property {@link #getLinebreakL linebreakL}.
         *
         * Optional. If set to `true`, the control causes a line break on large screens within the `Grid` and becomes
         * the first within the next line.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setLinebreakL(
          /**
           * New value for property `linebreakL`
           */
          bLinebreakL: boolean
        ): sap.ui.layout.GridData;
        /**
         * Sets a new value for property {@link #getLinebreakM linebreakM}.
         *
         * Optional. If set to `true`, the control causes a line break on medium screens within the `Grid` and becomes
         * the first within the next line.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setLinebreakM(
          /**
           * New value for property `linebreakM`
           */
          bLinebreakM: boolean
        ): sap.ui.layout.GridData;
        /**
         * Sets a new value for property {@link #getLinebreakS linebreakS}.
         *
         * Optional. If set to `true`, the control causes a line break on small screens within the `Grid` and becomes
         * the first within the next line.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setLinebreakS(
          /**
           * New value for property `linebreakS`
           */
          bLinebreakS: boolean
        ): sap.ui.layout.GridData;
        /**
         * Sets a new value for property {@link #getLinebreakXL linebreakXL}.
         *
         * Optional. If set to `true`, the control causes a line break on extra large screens within the `Grid`
         * and becomes the first within the next line.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setLinebreakXL(
          /**
           * New value for property `linebreakXL`
           */
          bLinebreakXL: boolean
        ): sap.ui.layout.GridData;
        /**
         * Sets a new value for property {@link #getMoveBackwards moveBackwards}.
         *
         * Optional. Moves a cell backwards with as many columns as specified.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setMoveBackwards(
          /**
           * New value for property `moveBackwards`
           */
          sMoveBackwards: sap.ui.layout.GridIndent
        ): sap.ui.layout.GridData;
        /**
         * Sets a new value for property {@link #getMoveForward moveForward}.
         *
         * Optional. Moves a cell forwards with as many columns as specified.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setMoveForward(
          /**
           * New value for property `moveForward`
           */
          sMoveForward: sap.ui.layout.GridIndent
        ): sap.ui.layout.GridData;
        /**
         * Sets a new value for property {@link #getSpan span}.
         *
         * A string type that represents the span values of the `Grid` for large, medium and small screens.
         *
         * Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 12 that
         * the container has to take, for example: `L2 M4 S6`, `M12`, `s10` or `l4 m4`.
         *
         * **Note:** The parameters must be provided in the order .
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setSpan(
          /**
           * New value for property `span`
           */
          sSpan: sap.ui.layout.GridSpan
        ): sap.ui.layout.GridData;
        /**
         * Sets a new value for property {@link #getSpanL spanL}.
         *
         * Optional. Defines a span value for large screens. This value overwrites the value for large screens defined
         * in the `span` property.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setSpanL(
          /**
           * New value for property `spanL`
           */
          iSpanL: number
        ): sap.ui.layout.GridData;
        /**
         * @deprecated (since 1.17.1) - Use the `spanL` property instead.
         *
         * Sets a new value for property {@link #getSpanLarge spanLarge}.
         *
         * Deprecated. Defines a span value for large screens. This value overwrites the value for large screens
         * defined in the `span` property.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setSpanLarge(
          /**
           * New value for property `spanLarge`
           */
          iSpanLarge: number
        ): sap.ui.layout.GridData;
        /**
         * Sets a new value for property {@link #getSpanM spanM}.
         *
         * Optional. Defines a span value for medium size screens. This value overwrites the value for medium screens
         * defined in the `span` property.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setSpanM(
          /**
           * New value for property `spanM`
           */
          iSpanM: number
        ): sap.ui.layout.GridData;
        /**
         * @deprecated (since 1.17.1) - Use the `spanM` property instead.
         *
         * Sets a new value for property {@link #getSpanMedium spanMedium}.
         *
         * Deprecated. Defines a span value for medium screens. This value overwrites the value for medium screens
         * defined in the `span` property.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setSpanMedium(
          /**
           * New value for property `spanMedium`
           */
          iSpanMedium: number
        ): sap.ui.layout.GridData;
        /**
         * Sets a new value for property {@link #getSpanS spanS}.
         *
         * Optional. Defines a span value for small screens. This value overwrites the value for small screens defined
         * in the `span` property.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setSpanS(
          /**
           * New value for property `spanS`
           */
          iSpanS: number
        ): sap.ui.layout.GridData;
        /**
         * @deprecated (since 1.17.1) - Use the `spanS` property instead.
         *
         * Sets a new value for property {@link #getSpanSmall spanSmall}.
         *
         * Deprecated. Defines a span value for small screens. This value overwrites the value for small screens
         * defined in the `span` property.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setSpanSmall(
          /**
           * New value for property `spanSmall`
           */
          iSpanSmall: number
        ): sap.ui.layout.GridData;
        /**
         * Sets a new value for property {@link #getSpanXL spanXL}.
         *
         * Optional. Defines a span value for extra large screens. This value overwrites the value for extra large
         * screens defined in the `span` property.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setSpanXL(
          /**
           * New value for property `spanXL`
           */
          iSpanXL: number
        ): sap.ui.layout.GridData;
        /**
         * Sets a new value for property {@link #getVisibleL visibleL}.
         *
         * Defines if this control is visible on large screens.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setVisibleL(
          /**
           * New value for property `visibleL`
           */
          bVisibleL: boolean
        ): sap.ui.layout.GridData;
        /**
         * Sets a new value for property {@link #getVisibleM visibleM}.
         *
         * Defines if this control is visible on medium screens.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setVisibleM(
          /**
           * New value for property `visibleM`
           */
          bVisibleM: boolean
        ): sap.ui.layout.GridData;
        /**
         * @deprecated (since 1.17.1) - Use the `visibleL` property instead.
         *
         * Sets a new value for property {@link #getVisibleOnLarge visibleOnLarge}.
         *
         * Deprecated. Defines if this control is visible on large screens.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setVisibleOnLarge(
          /**
           * New value for property `visibleOnLarge`
           */
          bVisibleOnLarge: boolean
        ): sap.ui.layout.GridData;
        /**
         * @deprecated (since 1.17.1) - Use the `visibleM` property instead.
         *
         * Sets a new value for property {@link #getVisibleOnMedium visibleOnMedium}.
         *
         * Deprecated. Defines if this control is visible on medium screens.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setVisibleOnMedium(
          /**
           * New value for property `visibleOnMedium`
           */
          bVisibleOnMedium: boolean
        ): sap.ui.layout.GridData;
        /**
         * @deprecated (since 1.17.1) - Use the `visibleS` property instead.
         *
         * Sets a new value for property {@link #getVisibleOnSmall visibleOnSmall}.
         *
         * Deprecated. Defines if this control is visible on small screens.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setVisibleOnSmall(
          /**
           * New value for property `visibleOnSmall`
           */
          bVisibleOnSmall: boolean
        ): sap.ui.layout.GridData;
        /**
         * Sets a new value for property {@link #getVisibleS visibleS}.
         *
         * Defines if this control is visible on small screens.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setVisibleS(
          /**
           * New value for property `visibleS`
           */
          bVisibleS: boolean
        ): sap.ui.layout.GridData;
        /**
         * Sets a new value for property {@link #getVisibleXL visibleXL}.
         *
         * Defines if this control is visible on extra Large screens.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setVisibleXL(
          /**
           * New value for property `visibleXL`
           */
          bVisibleXL: boolean
        ): sap.ui.layout.GridData;
      }
      /**
       * @SINCE 1.16.0
       *
       * A layout that provides support for horizontal alignment of controls
       */
      class HorizontalLayout extends sap.ui.core.Control {
        /**
         * Constructor for a new HorizontalLayout.
         *
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
         * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
         * of the syntax of the settings object.
         */
        constructor(
          /**
           * id for the new control, generated automatically if no id is given
           */
          sId?: string,
          /**
           * initial settings for the new control
           */
          mSettings?: HorizontalLayoutOpts
        );

        /**
         * Adds some content to the aggregation {@link #getContent content}.
         */
        addContent(
          /**
           * The content to add; if empty, nothing is inserted
           */
          oContent: sap.ui.core.Control
        ): sap.ui.layout.HorizontalLayout;
        /**
         * Destroys all the content in the aggregation {@link #getContent content}.
         */
        destroyContent(): sap.ui.layout.HorizontalLayout;
        /**
         * Creates a new subclass of class sap.ui.layout.HorizontalLayout with name `sClassName` and enriches it
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
         * See:
         * 	sap.ui.core.Control#getAccessibilityInfo
         */
        // @ts-ignore
        getAccessibilityInfo(): object;
        /**
         * Gets current value of property {@link #getAllowWrapping allowWrapping}.
         *
         * Specifies whether the content inside the Layout shall be line-wrapped in the case that there is less
         * horizontal space available than required.
         *
         * Default value is `false`.
         */
        getAllowWrapping(): boolean;
        /**
         * Gets content of aggregation {@link #getContent content}.
         *
         * The controls inside this layout
         */
        getContent(): sap.ui.core.Control[];
        /**
         * Returns a metadata object for class sap.ui.layout.HorizontalLayout.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContent content}. and returns
         * its index if found or -1 otherwise.
         */
        indexOfContent(
          /**
           * The content whose index is looked for
           */
          oContent: sap.ui.core.Control
        ): number;
        /**
         * Inserts a content into the aggregation {@link #getContent content}.
         */
        insertContent(
          /**
           * The content to insert; if empty, nothing is inserted
           */
          oContent: sap.ui.core.Control,
          /**
           * The `0`-based index the content should be inserted at; for a negative value of `iIndex`, the content
           * is inserted at position 0; for a value greater than the current size of the aggregation, the content
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.layout.HorizontalLayout;
        /**
         * Removes all the controls from the aggregation {@link #getContent content}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllContent(): sap.ui.core.Control[];
        /**
         * Removes a content from the aggregation {@link #getContent content}.
         */
        removeContent(
          /**
           * The content to remove or its index or id
           */
          vContent: number | string | sap.ui.core.Control
        ): sap.ui.core.Control;
        /**
         * Sets a new value for property {@link #getAllowWrapping allowWrapping}.
         *
         * Specifies whether the content inside the Layout shall be line-wrapped in the case that there is less
         * horizontal space available than required.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setAllowWrapping(
          /**
           * New value for property `allowWrapping`
           */
          bAllowWrapping: boolean
        ): sap.ui.layout.HorizontalLayout;
      }
      /**
       * @SINCE 1.38
       *
       * PaneContainer is an abstraction of Splitter.
       *
       * Could be used as an aggregation of ResponsiveSplitter or other PaneContainers.
       */
      class PaneContainer extends sap.ui.core.Element {
        /**
         * Constructor for a new PaneContainer.
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
          mSettings?: PaneContainerOpts
        );

        /**
         * Adds some pane to the aggregation {@link #getPanes panes}.
         */
        addPane(
          /**
           * The pane to add; if empty, nothing is inserted
           */
          oPane: sap.ui.core.Element
        ): sap.ui.layout.PaneContainer;
        /**
         * Destroys all the panes in the aggregation {@link #getPanes panes}.
         */
        destroyPanes(): sap.ui.layout.PaneContainer;
        /**
         * Creates a new subclass of class sap.ui.layout.PaneContainer with name `sClassName` and enriches it with
         * the information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
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
         * Returns a metadata object for class sap.ui.layout.PaneContainer.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getOrientation orientation}.
         *
         * The orientation of the Splitter
         *
         * Default value is `Horizontal`.
         */
        getOrientation(): sap.ui.core.Orientation;
        /**
         * Gets content of aggregation {@link #getPanes panes}.
         *
         * The Pane that will be shown when there is no suitable pane for ResponsiveSplitter's current width.
         */
        getPanes(): sap.ui.core.Element[];
        /**
         * Checks for the provided `sap.ui.core.Element` in the aggregation {@link #getPanes panes}. and returns
         * its index if found or -1 otherwise.
         */
        indexOfPane(
          /**
           * The pane whose index is looked for
           */
          oPane: sap.ui.core.Element
        ): number;
        /**
         * Pane insertion
         */
        insertPane(
          oObject: undefined,

          iIndex: undefined
        ): sap.ui.base.ManagedObject;
        /**
         * Removes all the controls from the aggregation {@link #getPanes panes}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllPanes(): sap.ui.core.Element[];
        /**
         * Pane removal
         */
        removePane(oObject: undefined): sap.ui.base.ManagedObject;
        /**
         * Setter for property layoutData.
         */
        // @ts-ignore
        setLayoutData(
          /**
           * The LayoutData object.
           */
          oLayoutData: sap.ui.core.LayoutData
        ): sap.ui.layout.PaneContainer;
        /**
         * Setter for property orientation. Default value is sap.ui.core.Orientation.Horizontal
         */
        setOrientation(
          /**
           * The Orientation type.
           */
          sOrientation: sap.ui.core.Orientation
        ): sap.ui.layout.PaneContainer;
      }
      /**
       * @SINCE 1.16.0
       *
       * This is a layout where several controls can be added. These controls are blown up to fit in an entire
       * row. If the window resizes, the controls are moved between the rows and resized again.
       */
      class ResponsiveFlowLayout extends sap.ui.core.Control {
        /**
         * Constructor for a new ResponsiveFlowLayout.
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
          mSettings?: ResponsiveFlowLayoutOpts
        );

        /**
         * @SINCE 1.48.7
         *
         * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
         */
        addAriaLabelledBy(
          /**
           * The ariaLabelledBy to add; if empty, nothing is inserted
           */
          vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control
        ): sap.ui.layout.ResponsiveFlowLayout;
        /**
         * Adds content. This function needs to be overridden to prevent any rendering while some content is still
         * being added.
         */
        addContent(
          /**
           * The content that should be added to the layout
           */
          oContent: sap.ui.core.Control
        ): void;
        /**
         * Destroys all the content in the aggregation {@link #getContent content}.
         */
        destroyContent(): sap.ui.layout.ResponsiveFlowLayout;
        /**
         * Creates a new subclass of class sap.ui.layout.ResponsiveFlowLayout with name `sClassName` and enriches
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
         * @SINCE 1.48.7
         *
         * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
         * ariaLabelledBy}.
         */
        getAriaLabelledBy(): sap.ui.core.ID[];
        /**
         * Gets content of aggregation {@link #getContent content}.
         *
         * Added content that should be positioned. Every content item should have a ResponsiveFlowLayoutData attached,
         * or otherwise, the default values are used.
         */
        getContent(): sap.ui.core.Control[];
        /**
         * Returns a metadata object for class sap.ui.layout.ResponsiveFlowLayout.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getResponsive responsive}.
         *
         * If set to false, all added controls will keep their width, or otherwise, the controls will be stretched
         * to the possible width of a row.
         *
         * Default value is `true`.
         */
        getResponsive(): boolean;
        /**
         * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContent content}. and returns
         * its index if found or -1 otherwise.
         */
        indexOfContent(
          /**
           * The content whose index is looked for
           */
          oContent: sap.ui.core.Control
        ): number;
        /**
         * Inserts content. This function needs to be overridden to prevent any rendering while some content is
         * still being added.
         */
        insertContent(
          /**
           * The content that should be inserted to the layout
           */
          oContent: sap.ui.core.Control,
          /**
           * The index where the content should be inserted into
           */
          iIndex: number
        ): void;
        /**
         * @SINCE 1.48.7
         *
         * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
         */
        removeAllAriaLabelledBy(): sap.ui.core.ID[];
        /**
         * Removes all the controls from the aggregation {@link #getContent content}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllContent(): sap.ui.core.Control[];
        /**
         * @SINCE 1.48.7
         *
         * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
         */
        removeAriaLabelledBy(
          /**
           * The ariaLabelledBy to be removed or its index or ID
           */
          vAriaLabelledBy: number | sap.ui.core.ID | sap.ui.core.Control
        ): sap.ui.core.ID;
        /**
         * Removes content. This function needs to be overridden to prevent any rendering while some content is
         * still being added.
         */
        removeContent(
          /**
           * The content that should be removed from the layout
           */
          oContent: number | string | sap.ui.core.Control
        ): void;
        /**
         * Sets a new value for property {@link #getResponsive responsive}.
         *
         * If set to false, all added controls will keep their width, or otherwise, the controls will be stretched
         * to the possible width of a row.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setResponsive(
          /**
           * New value for property `responsive`
           */
          bResponsive: boolean
        ): sap.ui.layout.ResponsiveFlowLayout;
      }
      /**
       * @SINCE 1.16.0
       *
       * This is a LayoutData element that can be added to a control if this control is used within a ResponsiveFlowLayout.
       */
      class ResponsiveFlowLayoutData extends sap.ui.core.LayoutData {
        /**
         * Constructor for a new ResponsiveFlowLayoutData.
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
          mSettings?: ResponsiveFlowLayoutDataOpts
        );

        /**
         * Creates a new subclass of class sap.ui.layout.ResponsiveFlowLayoutData with name `sClassName` and enriches
         * it with the information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.LayoutData.extend}.
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
         * Gets current value of property {@link #getLinebreak linebreak}.
         *
         * If this property is set, the control in which the LayoutData is added, will always cause a line break
         * within the ResponsiveFlowLayout.
         *
         * Default value is `false`.
         */
        getLinebreak(): boolean;
        /**
         * Gets current value of property {@link #getLinebreakable linebreakable}.
         *
         * Shows if an element can be wrapped into a new row. If this value is set to false, the min-width will
         * be set to 0 and the wrapping is up to the previous element.
         *
         * Default value is `true`.
         */
        getLinebreakable(): boolean;
        /**
         * Gets current value of property {@link #getMargin margin}.
         *
         * Prevents any margin of the element if set to false.
         *
         * Default value is `true`.
         */
        getMargin(): boolean;
        /**
         * Returns a metadata object for class sap.ui.layout.ResponsiveFlowLayoutData.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getMinWidth minWidth}.
         *
         * Defines the minimal size in px of a ResponsiveFlowLayout element. The element will be shrunk down to
         * this value.
         *
         * Default value is `100`.
         */
        getMinWidth(): number;
        /**
         * Gets current value of property {@link #getWeight weight}.
         *
         * Defines the weight of the element, that influences the resulting width. If there are several elements
         * within a row of the ResponsiveFlowLayout, each element could have another weight. The bigger the weight
         * of a single element, the wider it will be stretched, i.e. a bigger weight results in a larger width.
         *
         * Default value is `1`.
         */
        getWeight(): number;
        /**
         * Sets a new value for property {@link #getLinebreak linebreak}.
         *
         * If this property is set, the control in which the LayoutData is added, will always cause a line break
         * within the ResponsiveFlowLayout.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setLinebreak(
          /**
           * New value for property `linebreak`
           */
          bLinebreak: boolean
        ): sap.ui.layout.ResponsiveFlowLayoutData;
        /**
         * Sets a new value for property {@link #getLinebreakable linebreakable}.
         *
         * Shows if an element can be wrapped into a new row. If this value is set to false, the min-width will
         * be set to 0 and the wrapping is up to the previous element.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setLinebreakable(
          /**
           * New value for property `linebreakable`
           */
          bLinebreakable: boolean
        ): sap.ui.layout.ResponsiveFlowLayoutData;
        /**
         * Sets a new value for property {@link #getMargin margin}.
         *
         * Prevents any margin of the element if set to false.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setMargin(
          /**
           * New value for property `margin`
           */
          bMargin: boolean
        ): sap.ui.layout.ResponsiveFlowLayoutData;
        /**
         * Sets a new value for property {@link #getMinWidth minWidth}.
         *
         * Defines the minimal size in px of a ResponsiveFlowLayout element. The element will be shrunk down to
         * this value.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `100`.
         */
        setMinWidth(
          /**
           * New value for property `minWidth`
           */
          iMinWidth: number
        ): sap.ui.layout.ResponsiveFlowLayoutData;
        /**
         * Sets a new value for property {@link #getWeight weight}.
         *
         * Defines the weight of the element, that influences the resulting width. If there are several elements
         * within a row of the ResponsiveFlowLayout, each element could have another weight. The bigger the weight
         * of a single element, the wider it will be stretched, i.e. a bigger weight results in a larger width.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `1`.
         */
        setWeight(
          /**
           * New value for property `weight`
           */
          iWeight: number
        ): sap.ui.layout.ResponsiveFlowLayoutData;
      }
      /**
       * @SINCE 1.38
       *
       * A responsive splitter which divides the application into several areas. Overview: The responsive splitter
       * layout structures complex applications into defined areas. These areas may be resizable and are either
       * distributed across one or multiple screen areas, some of which may also be off-canvas.
       *
       * The control is intended for developing administrative tools and applications. Structure: The responsive
       * splitter holds the following hierarchy of containers and controls:
       * 	 - {@link sap.ui.layout.PaneContainer Pane Container} - holds one or more Split Panes and determines
       * 			the pane orientation. The pane which is stored in `rootPaneContainer` holds all other pane containers
       * 			and split panes.
       * 	 - {@link sap.ui.layout.SplitPane Split Pane} - independent containers that may interact with one another.
       * 			Each pane can hold only one control.  Usage: When to use:
       * 	 - The application has to display several areas side by side that must be resizable.
       * 	 - The application must work on a range of different devices in a responsive manner.  Responsive
       * 			Behavior:
       * 	 - As soon as views are in the off-canvas mode, the pagination bar at the bottom of the application
       * 			allows the user to switch between them.
       * 	 - On touch-enabled devices, the splitters show explicit handles with larger touch areas.
       * 	 - Double-clicking on a splitter will collapse or expand it back to its original position.
       *
       * **Note:** We don't recommend dynamically inserting/removing panes into/from the PaneContainer since this
       * might lead to inconsistent layout. If it is necessary, you need to ensure the sum of all sizes of the
       * SplitPanes doesn't exceed the width of the PaneContainer.
       */
      class ResponsiveSplitter extends sap.ui.core.Control {
        /**
         * Constructor for a new ResponsiveSplitter.
         *
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
         * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
         * of the syntax of the settings object.
         * See:
         * 	{@link fiori:https://experience.sap.com/fiori-design-web/responsive-splitter/ Responsive Splitter}
         */
        constructor(
          /**
           * ID for the new control, generated automatically if no ID is given
           */
          sId?: string,
          /**
           * Initial settings for the new control
           */
          mSettings?: ResponsiveSplitterOpts
        );

        /**
         * Destroys the rootPaneContainer in the aggregation {@link #getRootPaneContainer rootPaneContainer}.
         */
        destroyRootPaneContainer(): sap.ui.layout.ResponsiveSplitter;
        /**
         * Creates a new subclass of class sap.ui.layout.ResponsiveSplitter with name `sClassName` and enriches
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
         * ID of the element which is the current target of the association {@link #getDefaultPane defaultPane},
         * or `null`.
         */
        getDefaultPane(): sap.ui.core.ID;
        /**
         * Gets current value of property {@link #getHeight height}.
         *
         * The height of the control
         *
         * Default value is `100%`.
         */
        getHeight(): sap.ui.core.CSSSize;
        /**
         * Returns a metadata object for class sap.ui.layout.ResponsiveSplitter.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets content of aggregation {@link #getRootPaneContainer rootPaneContainer}.
         *
         * The root PaneContainer of the ResponsiveSplitter
         */
        getRootPaneContainer(): sap.ui.layout.PaneContainer;
        /**
         * Gets current value of property {@link #getWidth width}.
         *
         * The width of the control
         *
         * Default value is `100%`.
         */
        getWidth(): sap.ui.core.CSSSize;
        /**
         * Sets the associated {@link #getDefaultPane defaultPane}.
         */
        setDefaultPane(
          /**
           * ID of an element which becomes the new target of this defaultPane association; alternatively, an element
           * instance may be given
           */
          oDefaultPane: sap.ui.core.ID | sap.ui.layout.SplitPane
        ): sap.ui.layout.ResponsiveSplitter;
        /**
         * Sets a new value for property {@link #getHeight height}.
         *
         * The height of the control
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `100%`.
         */
        setHeight(
          /**
           * New value for property `height`
           */
          sHeight: sap.ui.core.CSSSize
        ): sap.ui.layout.ResponsiveSplitter;
        /**
         * Sets the aggregated {@link #getRootPaneContainer rootPaneContainer}.
         */
        setRootPaneContainer(
          /**
           * The rootPaneContainer to set
           */
          oRootPaneContainer: sap.ui.layout.PaneContainer
        ): sap.ui.layout.ResponsiveSplitter;
        /**
         * Sets a new value for property {@link #getWidth width}.
         *
         * The width of the control
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
        ): sap.ui.layout.ResponsiveSplitter;
      }
      /**
       * @SINCE 1.38
       *
       * SplitPane is a container of a single control in a responsive splitter. Could be used as an aggregation
       * of a {@link sap.ui.layout.PaneContainer PaneContainer}.
       *
       * The behavior of the Split Panes is handled by the following properties:
       * 	 - `requiredParentWidth` - determines the minimum width of the parent container (in pixels). When it
       * 			is reached, the pane will be hidden from the screen.
       * 	 - `demandPane` - determines if the pane is reachable via the pagination bar after it has been hidden
       * 			from the screen.
       */
      class SplitPane extends sap.ui.core.Element {
        /**
         * Constructor for a new SplitPane.
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
          mSettings?: SplitPaneOpts
        );

        /**
         * Destroys the content in the aggregation {@link #getContent content}.
         */
        destroyContent(): sap.ui.layout.SplitPane;
        /**
         * Creates a new subclass of class sap.ui.layout.SplitPane with name `sClassName` and enriches it with the
         * information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
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
         * Gets content of aggregation {@link #getContent content}.
         *
         * Content of the SplitPane
         */
        getContent(): sap.ui.core.Control;
        /**
         * Gets current value of property {@link #getDemandPane demandPane}.
         *
         * Determines whether the pane will be moved to the pagination
         *
         * Default value is `true`.
         */
        getDemandPane(): boolean;
        /**
         * Returns a metadata object for class sap.ui.layout.SplitPane.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getRequiredParentWidth requiredParentWidth}.
         *
         * Determines the minimum width of the ResponsiveSplitter(in pixels). When it is reached the pane will be
         * hidden from the screen.
         *
         * Default value is `800`.
         */
        getRequiredParentWidth(): number;
        /**
         * Sets the aggregated {@link #getContent content}.
         */
        setContent(
          /**
           * The content to set
           */
          oContent: sap.ui.core.Control
        ): sap.ui.layout.SplitPane;
        /**
         * Sets a new value for property {@link #getDemandPane demandPane}.
         *
         * Determines whether the pane will be moved to the pagination
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setDemandPane(
          /**
           * New value for property `demandPane`
           */
          bDemandPane: boolean
        ): sap.ui.layout.SplitPane;
        /**
         * Sets a new value for property {@link #getRequiredParentWidth requiredParentWidth}.
         *
         * Determines the minimum width of the ResponsiveSplitter(in pixels). When it is reached the pane will be
         * hidden from the screen.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `800`.
         */
        setRequiredParentWidth(
          /**
           * New value for property `requiredParentWidth`
           */
          iRequiredParentWidth: number
        ): sap.ui.layout.SplitPane;
      }
      /**
       * @SINCE 1.22.0
       *
       * A layout that contains several content areas. The content that is added to the splitter should contain
       * LayoutData of the type SplitterLayoutData that defines its size and size contraints.
       *
       * By adding or changing SplitterLayoutData to the controls that make up the content areas, the size can
       * be changed programatically. Additionally the contents can be made non-resizable individually and a minimal
       * size (in px) can be set.
       *
       * The orientation of the splitter can be set to horizontal (default) or vertical. All content areas of
       * the splitter will be arranged in that way. In order to split vertically and horizontally at the same
       * time, Splitters need to be nested.
       *
       * The splitter bars can be focused to enable resizing of the content areas via keyboard. The contents size
       * can be manipulated when the splitter bar is focused and Shift-Left/Down/Right/Up are pressed. When Shift-Home/End
       * are pressed, the contents are set their minimum or maximum size (keep in mind though, that resizing an
       * auto-size content-area next to another auto-size one might lead to the effect that the former does not
       * take its maximum size but only the maximum size before recalculating auto sizes).
       *
       * The splitter bars used for resizing the contents by the user can be set to different widths (or heights
       * in vertical mode) and the splitter will automatically resize the other contents accordingly. In case
       * the splitter bar is resized after the splitter has rendered, a manual resize has to be triggered by invoking
       * triggerResize() on the Splitter.
       */
      class Splitter extends sap.ui.core.Control {
        /**
         * Constructor for a new Splitter.
         *
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
         * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
         * of the syntax of the settings object.
         */
        constructor(
          /**
           * id for the new control, generated automatically if no id is given
           */
          sId?: string,
          /**
           * initial settings for the new control
           */
          mSettings?: SplitterOpts
        );

        /**
         * Adds some contentArea to the aggregation {@link #getContentAreas contentAreas}.
         */
        addContentArea(
          /**
           * The contentArea to add; if empty, nothing is inserted
           */
          oContentArea: sap.ui.core.Control
        ): sap.ui.layout.Splitter;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:resize resize} event of this `sap.ui.layout.Splitter`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.layout.Splitter` itself.
         *
         * Event is fired when contents are resized.
         */
        attachResize(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.layout.Splitter` itself
           */
          oListener?: object
        ): sap.ui.layout.Splitter;
        /**
         * Destroys all the contentAreas in the aggregation {@link #getContentAreas contentAreas}.
         */
        destroyContentAreas(): sap.ui.layout.Splitter;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:resize resize} event of this `sap.ui.layout.Splitter`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachResize(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.layout.Splitter;
        /**
         * @deprecated (since 1.21) - This method is declared as protected in order to assess the need for this
         * feature. It is declared as deprecated because the API might change in case the need for this is high
         * enough to make it part of the official Splitter interface
         *
         * Disables the resize handler for this control, this leads to an automatic resize of the contents whenever
         * the control changes its size. The resize handler is enabled in every control instance by default. For
         * performance reasons this behavior can be disabled by calling disableAutoResize()
         */
        disableAutoResize(
          /**
           * Only disable autoResize temporarily (used for live resize), so that the previous status can be restored
           * afterwards
           */
          bTemporarily?: boolean
        ): void;
        /**
         * Disables the resizing of the Splitter contents via keyboard. This changes the Splitter bars to non-focussable
         * elements.
         */
        disableKeyboardSupport(): void;
        /**
         * @deprecated (since 1.21) - This method is declared as protected in order to assess the need for this
         * feature. It is declared as deprecated because the API might change in case the need for this is high
         * enough to make it part of the official Splitter interface
         *
         * Disables recalculation and resize of the splitter contents while dragging the splitter bar. This means
         * that the contents are resized only once after moving the splitter bar.
         */
        disableLiveResize(): void;
        /**
         * @deprecated (since 1.21) - This method is declared as protected in order to assess the need for this
         * feature. It is declared as deprecated because the API might change in case the need for this is high
         * enough to make it part of the official Splitter interface
         *
         * Enables the resize handler for this control, this leads to an automatic resize of the contents whenever
         * the control changes its size. The resize handler is enabled in every control instance by default. For
         * performance reasons this behavior can be disabled by calling disableAutoResize()
         */
        enableAutoResize(
          /**
           * Only enables autoResize if it was previously disabled temporarily (used for live resize)
           */
          bTemporarily?: boolean
        ): void;
        /**
         * Enables the resizing of the Splitter contents via keyboard. This makes the Splitter bars focussable elements.
         */
        enableKeyboardSupport(): void;
        /**
         * @deprecated (since 1.21) - This method is declared as protected in order to assess the need for this
         * feature. It is declared as deprecated because the API might change in case the need for this is high
         * enough to make it part of the official Splitter interface
         *
         * Enables recalculation and resize of the splitter contents while dragging the splitter bar. This means
         * that the contents are resized several times per second when moving the splitter bar.
         */
        enableLiveResize(): void;
        /**
         * Creates a new subclass of class sap.ui.layout.Splitter with name `sClassName` and enriches it with the
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
         * Fires event {@link #event:resize resize} to attached listeners.
         */
        fireResize(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The ID of the splitter control. The splitter control can also be accessed by calling getSource() on the
             * event.
             */
            id?: string;
            /**
             * An array of values representing the old (pixel-)sizes of the splitter contents
             */
            oldSizes?: number[];
            /**
             * An array of values representing the new (pixel-)sizes of the splitter contents
             */
            newSizes?: number[];
          }
        ): sap.ui.layout.Splitter;
        /**
         * @deprecated (since 1.21) - This method is declared as protected in order to assess the need for this
         * feature. It is declared as deprecated because the API might change in case the need for this is high
         * enough to make it part of the official Splitter interface
         *
         * Returns the current actual content sizes as pixel value - these values can change with every resize.
         */
        getCalculatedSizes(): Number[];
        /**
         * Gets content of aggregation {@link #getContentAreas contentAreas}.
         *
         * The content areas to be split. The control will show n-1 splitter bars between n controls in this aggregation.
         */
        getContentAreas(): sap.ui.core.Control[];
        /**
         * Gets current value of property {@link #getHeight height}.
         *
         * The height of the control
         *
         * Default value is `100%`.
         */
        getHeight(): sap.ui.core.CSSSize;
        /**
         * Returns a metadata object for class sap.ui.layout.Splitter.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getOrientation orientation}.
         *
         * Whether to split the contents horizontally (default) or vertically.
         *
         * Default value is `Horizontal`.
         */
        getOrientation(): sap.ui.core.Orientation;
        /**
         * Gets current value of property {@link #getWidth width}.
         *
         * The width of the control
         *
         * Default value is `100%`.
         */
        getWidth(): sap.ui.core.CSSSize;
        /**
         * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContentAreas contentAreas}.
         * and returns its index if found or -1 otherwise.
         */
        indexOfContentArea(
          /**
           * The contentArea whose index is looked for
           */
          oContentArea: sap.ui.core.Control
        ): number;
        /**
         * Inserts a contentArea into the aggregation {@link #getContentAreas contentAreas}.
         */
        insertContentArea(
          /**
           * The contentArea to insert; if empty, nothing is inserted
           */
          oContentArea: sap.ui.core.Control,
          /**
           * The `0`-based index the contentArea should be inserted at; for a negative value of `iIndex`, the contentArea
           * is inserted at position 0; for a value greater than the current size of the aggregation, the contentArea
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.layout.Splitter;
        /**
         * Removes all the controls from the aggregation {@link #getContentAreas contentAreas}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllContentAreas(): sap.ui.core.Control[];
        /**
         * Removes a contentArea from the aggregation {@link #getContentAreas contentAreas}.
         */
        removeContentArea(
          /**
           * The contentArea to remove or its index or id
           */
          vContentArea: number | string | sap.ui.core.Control
        ): sap.ui.core.Control;
        /**
         * Sets a new value for property {@link #getHeight height}.
         *
         * The height of the control
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `100%`.
         */
        setHeight(
          /**
           * New value for property `height`
           */
          sHeight: sap.ui.core.CSSSize
        ): sap.ui.layout.Splitter;
        /**
         * Sets a new value for property {@link #getOrientation orientation}.
         *
         * Whether to split the contents horizontally (default) or vertically.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Horizontal`.
         */
        setOrientation(
          /**
           * New value for property `orientation`
           */
          sOrientation: sap.ui.core.Orientation
        ): sap.ui.layout.Splitter;
        /**
         * Sets a new value for property {@link #getWidth width}.
         *
         * The width of the control
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
        ): sap.ui.layout.Splitter;
        /**
         * This method triggers a resize on the Splitter - meaning it forces the Splitter to recalculate all sizes.
         * This method should only be used in rare cases, for example when the CSS that defines the sizes of the
         * splitter bars changes without triggering a rerendering of the splitter.
         */
        triggerResize(
          /**
           * Do not delay the resize, trigger it right now.
           */
          forceDirectly?: boolean
        ): void;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:resize resize} event of this `sap.ui.layout.Splitter`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.layout.Splitter` itself.
         *
         * Event is fired when contents are resized.
         */
        attachResize(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.layout.Splitter` itself
           */
          oListener?: object
        ): sap.ui.layout.Splitter;
      }
      /**
       * @SINCE 1.22.0
       * @EXPERIMENTAL (since 1.22.0)
       *
       * Holds layout data for the splitter contents. Allowed size values are numeric values ending in "px" and
       * "%" and the special case "auto". (The CSS value "auto" is used internally to recalculate the size of
       * the content dynamically and is not directly set as style property.)
       */
      class SplitterLayoutData extends sap.ui.core.LayoutData {
        /**
         * Constructor for a new SplitterLayoutData.
         *
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
         * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
         * of the syntax of the settings object.
         */
        constructor(
          /**
           * id for the new control, generated automatically if no id is given
           */
          sId?: string,
          /**
           * initial settings for the new control
           */
          mSettings?: SplitterLayoutDataOpts
        );

        /**
         * Creates a new subclass of class sap.ui.layout.SplitterLayoutData with name `sClassName` and enriches
         * it with the information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.LayoutData.extend}.
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
         * Returns a metadata object for class sap.ui.layout.SplitterLayoutData.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getMinSize minSize}.
         *
         * Sets the minimum size of the splitter content in px.
         *
         * Default value is `0`.
         */
        getMinSize(): number;
        /**
         * Gets current value of property {@link #getResizable resizable}.
         *
         * Determines whether the control in the splitter can be resized or not.
         *
         * Default value is `true`.
         */
        getResizable(): boolean;
        /**
         * Gets current value of property {@link #getSize size}.
         *
         * Sets the size of the splitter content.
         *
         * Default value is `auto`.
         */
        getSize(): sap.ui.core.CSSSize;
        /**
         * Sets a new value for property {@link #getMinSize minSize}.
         *
         * Sets the minimum size of the splitter content in px.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `0`.
         */
        setMinSize(
          /**
           * New value for property `minSize`
           */
          iMinSize: number
        ): sap.ui.layout.SplitterLayoutData;
        /**
         * Sets a new value for property {@link #getResizable resizable}.
         *
         * Determines whether the control in the splitter can be resized or not.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setResizable(
          /**
           * New value for property `resizable`
           */
          bResizable: boolean
        ): sap.ui.layout.SplitterLayoutData;
        /**
         * Sets a new value for property {@link #getSize size}.
         *
         * Sets the size of the splitter content.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `auto`.
         */
        setSize(
          /**
           * New value for property `size`
           */
          sSize: sap.ui.core.CSSSize
        ): sap.ui.layout.SplitterLayoutData;
      }
      /**
       * @SINCE 1.16.0
       *
       * In this layout the content controls are rendered one below the other.
       */
      class VerticalLayout extends sap.ui.core.Control {
        /**
         * Constructor for a new VerticalLayout.
         *
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
         * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
         * of the syntax of the settings object.
         */
        constructor(
          /**
           * Id for the new control, generated automatically if no id is given
           */
          sId?: string,
          /**
           * initial settings for the new control
           */
          mSettings?: VerticalLayoutOpts
        );

        /**
         * Adds some content to the aggregation {@link #getContent content}.
         */
        addContent(
          /**
           * The content to add; if empty, nothing is inserted
           */
          oContent: sap.ui.core.Control
        ): sap.ui.layout.VerticalLayout;
        /**
         * Destroys all the content in the aggregation {@link #getContent content}.
         */
        destroyContent(): sap.ui.layout.VerticalLayout;
        /**
         * Creates a new subclass of class sap.ui.layout.VerticalLayout with name `sClassName` and enriches it with
         * the information contained in `oClassInfo`.
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
         * See:
         * 	sap.ui.core.Control#getAccessibilityInfo
         */
        // @ts-ignore
        getAccessibilityInfo(): object;
        /**
         * Gets content of aggregation {@link #getContent content}.
         *
         * Content controls within the layout.
         */
        getContent(): sap.ui.core.Control[];
        /**
         * Gets current value of property {@link #getEnabled enabled}.
         *
         * If not enabled, all controls inside are not enabled automatically.
         *
         * Default value is `true`.
         */
        getEnabled(): boolean;
        /**
         * Returns a metadata object for class sap.ui.layout.VerticalLayout.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getWidth width}.
         *
         * Width of the `VerticalLayout`. If no width is set, the width of the content is used. If the content of
         * the layout has a larger width than the layout, it is cut off. There is no scrolling inside the layout.
         */
        getWidth(): sap.ui.core.CSSSize;
        /**
         * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContent content}. and returns
         * its index if found or -1 otherwise.
         */
        indexOfContent(
          /**
           * The content whose index is looked for
           */
          oContent: sap.ui.core.Control
        ): number;
        /**
         * Inserts a content into the aggregation {@link #getContent content}.
         */
        insertContent(
          /**
           * The content to insert; if empty, nothing is inserted
           */
          oContent: sap.ui.core.Control,
          /**
           * The `0`-based index the content should be inserted at; for a negative value of `iIndex`, the content
           * is inserted at position 0; for a value greater than the current size of the aggregation, the content
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.layout.VerticalLayout;
        /**
         * Removes all the controls from the aggregation {@link #getContent content}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllContent(): sap.ui.core.Control[];
        /**
         * Removes a content from the aggregation {@link #getContent content}.
         */
        removeContent(
          /**
           * The content to remove or its index or id
           */
          vContent: number | string | sap.ui.core.Control
        ): sap.ui.core.Control;
        /**
         * Sets a new value for property {@link #getEnabled enabled}.
         *
         * If not enabled, all controls inside are not enabled automatically.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setEnabled(
          /**
           * New value for property `enabled`
           */
          bEnabled: boolean
        ): sap.ui.layout.VerticalLayout;
        /**
         * Sets the width of the Vertical Layout without rerendering of the whole control, and everything inside
         * it.
         */
        setWidth(
          /**
           * The new width
           */
          width: sap.ui.core.CSSSize
        ): sap.ui.layout.VerticalLayout;
      }
      /**
       * @SINCE 1.36.0
       *
       * Available Background Design.
       */
      enum BackgroundDesign {
        /**
         * A solid background color dependent on the theme.
         */
        Solid,
        /**
         * A translucent background depending on the opacity value of the theme.
         */
        Translucent,
        /**
         * Transparent background.
         */
        Transparent
      }
      /**
       * A string type that is used inside the BlockLayout to set predefined background color to the cells inside
       * the control.
       */
      enum BlockBackgroundType {
        /**
         * Background with pre-defined accent colors
         */
        Accent,
        /**
         * For applications that want to make use of e.g. charts in the Blocks, this layout type has spacings around
         * the Blocks
         */
        Dashboard,
        /**
         * Background is transparent
         */
        Default,
        /**
         * Background is with predefined light colors
         */
        Light,
        /**
         * @deprecated (since 1.50)
         *
         * Background with bright and dark background colors
         */
        Mixed
      }
      /**
       * @SINCE 1.48
       *
       * A string type that is used inside the BlockLayoutCell to set a predefined set of colors for the cells.
       */
      enum BlockLayoutCellColorSet {
        /**
         * Color Set 1
         */
        ColorSet1,
        /**
         * Color Set 10
         */
        ColorSet10,
        /**
         * Color Set 11
         */
        ColorSet11,
        /**
         * Color Set 2
         */
        ColorSet2,
        /**
         * Color Set 3
         */
        ColorSet3,
        /**
         * Color Set 4
         */
        ColorSet4,
        /**
         * Color Set 5
         */
        ColorSet5,
        /**
         * Color Set 6
         */
        ColorSet6,
        /**
         * Color Set 7
         */
        ColorSet7,
        /**
         * Color Set 8
         */
        ColorSet8,
        /**
         * Color Set 9
         */
        ColorSet9
      }
      /**
       * @SINCE 1.48
       *
       * A string type that is used inside the BlockLayoutCell to set a predefined set of color shades for the
       * cells. The colors are defined with sap.ui.layout.BlockLayoutCellColorSet. And this is for the shades
       * only.
       */
      enum BlockLayoutCellColorShade {
        /**
         * Shade A
         */
        ShadeA,
        /**
         * Shade B
         */
        ShadeB,
        /**
         * Shade C
         */
        ShadeC,
        /**
         * Shade D
         */
        ShadeD
      }
      /**
       * A string type that is used inside the BlockLayoutRow to set predefined set of colors the cells inside
       * the control. Color sets depend on sap.ui.layout.BlockBackgroundType
       */
      enum BlockRowColorSets {
        /**
         * sap.ui.layout.BlockBackgroundType.Default: N/A sap.ui.layout.BlockBackgroundType.Light: Color Set 1 sap.ui.layout.BlockBackgroundType.Mixed:
         * Color Set 1 sap.ui.layout.BlockBackgroundType.Accent: Color Set 1 sap.ui.layout.BlockBackgroundType.Dashboard:
         * N/A
         */
        ColorSet1,
        /**
         * sap.ui.layout.BlockBackgroundType.Default: N/A sap.ui.layout.BlockBackgroundType.Light: Color Set 2 sap.ui.layout.BlockBackgroundType.Mixed:
         * Color Set 2 sap.ui.layout.BlockBackgroundType.Accent: Color Set 2 sap.ui.layout.BlockBackgroundType.Dashboard:
         * N/A
         */
        ColorSet2,
        /**
         * sap.ui.layout.BlockBackgroundType.Default: N/A sap.ui.layout.BlockBackgroundType.Light: Color Set 1 sap.ui.layout.BlockBackgroundType.Mixed:
         * Color Set 1 sap.ui.layout.BlockBackgroundType.Accent: Color Set 3 sap.ui.layout.BlockBackgroundType.Dashboard:
         * N/A
         */
        ColorSet3,
        /**
         * sap.ui.layout.BlockBackgroundType.Default: N/A sap.ui.layout.BlockBackgroundType.Light: Color Set 2 sap.ui.layout.BlockBackgroundType.Mixed:
         * Color Set 2 sap.ui.layout.BlockBackgroundType.Accent: Color Set 4 sap.ui.layout.BlockBackgroundType.Dashboard:
         * N/A
         */
        ColorSet4
      }
      /**
       * The position of the {@link sap.ui.layout.Grid}. Can be `Left` (default), `Center` or `Right`.
       */
      enum GridPosition {
        /**
         * `Grid` is centered on the screen.
         */
        Center,
        /**
         * `Grid` is aligned left.
         */
        Left,
        /**
         * `Grid` is aligned to the right.
         */
        Right
      }
      /**
       * @SINCE 1.30
       *
       * Types of the DynamicSideContent FallDown options
       */
      enum SideContentFallDown {
        /**
         * Side content falls down on breakpoints below L
         */
        BelowL,
        /**
         * Side content falls down on breakpoints below M
         */
        BelowM,
        /**
         * Side content falls down on breakpoints below XL
         */
        BelowXL,
        /**
         * Side content falls down on breakpoint M and the minimum width for the side content
         */
        OnMinimumWidth
      }
      /**
       * The position of the side content - End (default) and Begin.
       */
      enum SideContentPosition {
        /**
         * The side content is on the left side of the main container in left-to-right mode and on the right side
         * in right-to-left mode.
         */
        Begin,
        /**
         * The side content is on the right side of the main container in left-to-right mode and on the left side
         * in right-to-left mode.
         */
        End
      }
      /**
       * @SINCE 1.30
       *
       * Types of the DynamicSideContent Visibility options
       */
      enum SideContentVisibility {
        /**
         * Show the side content on any breakpoint
         */
        AlwaysShow,
        /**
         * Don't show the side content on any breakpoints
         */
        NeverShow,
        /**
         * Show the side content on XL breakpoint
         */
        ShowAboveL,
        /**
         * Show the side content on L and XL breakpoints
         */
        ShowAboveM,
        /**
         * Show the side content on M, L and XL breakpoints
         */
        ShowAboveS
      }
    }
  }

  interface IUI5DefineDependencyNames {
    "sap/ui/layout/cssgrid/CSSGrid": undefined;

    "sap/ui/layout/cssgrid/GridItemLayoutData": undefined;

    "sap/ui/layout/cssgrid/GridLayoutBase": undefined;

    "sap/ui/layout/cssgrid/GridLayoutDelegate": undefined;

    "sap/ui/layout/cssgrid/GridResponsiveLayout": undefined;

    "sap/ui/layout/cssgrid/GridSettings": undefined;

    "sap/ui/layout/cssgrid/IGridConfigurable": undefined;

    "sap/ui/layout/form/ColumnContainerData": undefined;

    "sap/ui/layout/form/ColumnElementData": undefined;

    "sap/ui/layout/form/ColumnLayout": undefined;

    "sap/ui/layout/form/Form": undefined;

    "sap/ui/layout/form/FormContainer": undefined;

    "sap/ui/layout/form/FormElement": undefined;

    "sap/ui/layout/form/FormLayout": undefined;

    "sap/ui/layout/form/GridContainerData": undefined;

    "sap/ui/layout/form/GridElementData": undefined;

    "sap/ui/layout/form/GridLayout": undefined;

    "sap/ui/layout/form/ResponsiveGridLayout": undefined;

    "sap/ui/layout/form/ResponsiveLayout": undefined;

    "sap/ui/layout/form/SimpleForm": undefined;

    "sap/ui/layout/BlockLayout": undefined;

    "sap/ui/layout/BlockLayoutCell": undefined;

    "sap/ui/layout/BlockLayoutCellData": undefined;

    "sap/ui/layout/BlockLayoutRow": undefined;

    "sap/ui/layout/DynamicSideContent": undefined;

    "sap/ui/layout/FixFlex": undefined;

    "sap/ui/layout/Grid": undefined;

    "sap/ui/layout/GridData": undefined;

    "sap/ui/layout/HorizontalLayout": undefined;

    "sap/ui/layout/PaneContainer": undefined;

    "sap/ui/layout/ResponsiveFlowLayout": undefined;

    "sap/ui/layout/ResponsiveFlowLayoutData": undefined;

    "sap/ui/layout/ResponsiveSplitter": undefined;

    "sap/ui/layout/SplitPane": undefined;

    "sap/ui/layout/Splitter": undefined;

    "sap/ui/layout/SplitterLayoutData": undefined;

    "sap/ui/layout/VerticalLayout": undefined;
  }
}
