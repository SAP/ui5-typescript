/**
 * This is a Beta version of the OpenUI5 TypeScript Signatures.
 * Significant changes may occur in future versions,
 * including potential breaking changes.
 */
// For Library Version: 1.60.14

declare namespace sap {
  namespace ui {
    /**
     * Table-like controls, mainly for desktop scenarios.
     */
    namespace table {
      interface AnalyticalColumnOpts extends sap.ui.table.ColumnOpts {
        /**
         * Defines the primary model property which is used inside the Column. In case of the analytical extension
         * this means the property which is grouped by for dimensions or the property which is summed for measures.
         */
        leadingProperty?: string;

        /**
         * If defined a sum for this column is calculated
         */
        summed?: boolean;

        /**
         * Specifies that the dimension referred to by the column shall be included in the granularity of the data
         * result. It allows a finer distinction between a visible/grouped/(included)inResult column.
         */
        inResult?: boolean;

        /**
         * Specifies whether the column is displayed within the table even if it is grouped or not. A grouped column
         * has the same value for every rows within the group.
         */
        showIfGrouped?: boolean;

        /**
         * If the column is grouped, this formatter is used to format the value in the group header
         */
        groupHeaderFormatter?: any;
      }

      interface AnalyticalColumnMenuOpts extends sap.ui.table.ColumnMenuOpts {}

      interface AnalyticalTableOpts extends sap.ui.table.TableOpts {
        /**
         * @deprecated (since 1.44.0) - please use the corresponding binding parameter `sumOnTop` instead.
         *
         * Specifies if the total values should be displayed in the group headers or on bottom of the row. Does
         * not affect the total sum.
         *
         * The value of the property is only taken into account if no parameter is given in the binding information.
         * Changes to this property after the table is bound do not have any effect unless an explicit (re-)bind
         * of the `rows` aggregation is done.
         *
         * Example:
         * ```javascript
         *
         *   oTable.bindRows({
         *     path: "...",
         *     parameters: {
         *       sumOnTop: true
         *     }
         *   });
         * ```
         */
        sumOnTop?: boolean;

        /**
         * @deprecated (since 1.44.0) - please use the corresponding binding parameter `numberOfExpandedLevels`
         * instead.
         *
         * Number of levels, which should be opened initially (on first load of data).
         *
         * The value of the property is only taken into account if no parameter is given in the binding information.
         * Changes to this property after the table is bound do not have any effect unless an explicit (re-)bind
         * of the `rows` aggregation is done.
         *
         * Example:
         * ```javascript
         *
         *   oTable.bindRows({
         *     path: "...",
         *     parameters: {
         *       numberOfExpandedLevels: 1
         *     }
         *   });
         * ```
         */
        numberOfExpandedLevels?: number;

        /**
         * @deprecated (since 1.44.0) - please use the corresponding binding parameter `autoExpandMode` instead.
         *
         * The kind of auto expansion algorithm, e.g. optimized filter conditions, per level requests, ... Must
         * be a value of `sap.ui.table.TreeAutoExpandMode`.
         *
         * The value of the property is only taken into account if no parameter is given in the binding information.
         * Changes to this property after the table is bound do not have any effect unless an explicit (re-)bind
         * of the `rows` aggregation is done.
         *
         * Example:
         * ```javascript
         *
         *   oTable.bindRows({
         *     path: "...",
         *     parameters: {
         *       autoExpandMode: "Bundled"
         *     }
         *   });
         * ```
         */
        autoExpandMode?: string;

        /**
         * Functions which is used to sort the column visibility menu entries e.g.: function(ColumnA, ColumnB) {
         * return 0 = equals, 0 greater }; Other values than functions will be ignored.
         */
        columnVisibilityMenuSorter?: any;

        /**
         * Setting collapseRecursive to true means, that when collapsing a node all subsequent child nodes will
         * also be collapsed.
         *
         * Calling the setter of this property only has an effect when the tables `rows` aggregation is already
         * bound and the binding supports this feature.
         */
        collapseRecursive?: boolean;

        /**
         * @deprecated (since 1.21.2) - replaced by {@link sap.ui.table.Table#setShowOverlay}
         *
         * If dirty the content of the Table will be overlayed.
         */
        dirty?: boolean;
      }

      interface ColumnOpts extends sap.ui.core.ElementOpts {
        /**
         * Width of the column in CSS units. Default value is `auto`, see
         * Minimal column width is device-dependent, for example on desktop devices the column will not be smaller
         * than 48px. This property can be changed by the user or by the application configuration/personalization.
         * If a user adjusts the column width manually, the resulting value is always set in pixels. In addition,
         * other columns with width `auto` get a fixed minimum width and do not shrink after the resizing.
         */
        width?: sap.ui.core.CSSSize;

        /**
         * @SINCE 1.44.1
         *
         * Defines the minimum width of a column in pixels. This property only has an effect if the given column
         * width is flexible, for example with width `auto`. This property only influences the automatic behavior.
         * If a user adjusts the column width manually, the column width can become smaller. Minimal column width
         * is device-dependent, for example on desktop devices the column will not be smaller than 48px.
         */
        minWidth?: number;

        /**
         * @deprecated (since 1.44) - this property has no effect. Use the property `minWidth` in combination with
         * the property `width="auto"` instead.
         *
         * If the table is wider than the sum of widths of the visible columns, the columns will be resized proportionally
         * to their widths that were set originally. If set to false, the column will be displayed in the original
         * width. If all columns are set to not be flexible, an extra "dummy" column will be created at the end
         * of the table.
         */
        flexible?: boolean;

        /**
         * If set to true, the column can be resized either using the resize bar (by mouse) or using the keyboard
         * (SHIFT + Left/Right Arrow keys)
         */
        resizable?: boolean;

        /**
         * Horizontal alignment of the column content. Controls with a text align do not inherit the horizontal
         * alignment. You have to set the text align directly on the template.
         */
        hAlign?: sap.ui.core.HorizontalAlign;

        /**
         * Indicates if the column is sorted. This property only controls if a sort indicator is displayed in the
         * column header - it does not trigger the sort function. The column has to be sorted by calling `Column.sort()`
         */
        sorted?: boolean;

        /**
         * This property indicates the sort direction (Ascending or Descending). The corresponding icon will be
         * rendered if the property `sorted` is `true`
         */
        sortOrder?: sap.ui.table.SortOrder;

        /**
         * Specifies the binding property on which the column will sort. Since the column template may have composite
         * bindings, it's not possible to figure out on which binding property the sort shall be applied. Therefore
         * the binding property for sorting must be specified. For example, if the first name and last name are
         * displayed in the same column, only one of the two can be defined as `sortProperty`.
         *
         * A column menu entry for sorting can only be generated if the `sortProperty` is set.
         */
        sortProperty?: string;

        /**
         * Indicates if the column is filtered. This property only controls if a filter indicator is displayed in
         * the column header - it does not trigger the filter function. The column has to be filtered by calling
         * `Column.sort()`
         */
        filtered?: boolean;

        /**
         * Specifies the binding property on which the column shall be filtered. Since the column template may have
         * composite bindings, it's not possible to figure out on which binding property the filter shall be applied.
         * Therefore the binding property for filtering must be specified. For example, if the first name and last
         * name are displayed in the same column, only one of the two can be defined as `filterProperty`.
         *
         * A column menu entry for filtering can only be generated if the `filterProperty` is set. The default menu
         * entry is a text input field.
         */
        filterProperty?: string;

        /**
         * Specifies the value of the filter as string (will be converted into the proper data type). It is possible
         * to provide a filterOperator as string, as shown here:
         * ```javascript
         *
         * > 50
         * < 100
         * >= 150
         * <= 200
         * = 250
         * != 300
         * *something    ends with
         * something*    starts with
         * *something*   contains
         * some..thing   between
         * 50..100       between
         * ```
         */
        filterValue?: string;

        /**
         * Filter operator to use when filtering this column.
         */
        filterOperator?: string;

        /**
         * If this property is set, the default filter operator of the column is overridden. By default `Contains`
         * is used for string and `EQ` for other types. A valid `sap.ui.model.FilterOperator` needs to be passed.
         */
        defaultFilterOperator?: string;

        /**
         * @SINCE 1.9.2
         *
         * Type of Filter. This is used to transform the search term to the specified type, to make sure that the
         * right columns are displayed. This should be the same as defined in binding for this column. As an alternative
         * you can pass a function which does the conversion. The function receives the entered filter value as
         * parameter and returns the proper value for the filter expression. Another option is to pass the class
         * name of the type, e.g.: `sap.ui.model.type.Date` or an expression similar to the binding syntax, e.g.:
         * `"\{type: 'sap.ui.model.type.Date', formatOptions: \{UTC: true\}, constraints: \{\} \}"`. Here the escaping
         * is mandatory to avoid handling by the binding parser. By default the filter type is `sap.ui.model.type.String`.
         */
        filterType?: any;

        /**
         * Indicates if the column is grouped.
         */
        grouped?: boolean;

        /**
         * Invisible controls are not rendered.
         */
        visible?: boolean;

        /**
         * @SINCE 1.11.1
         *
         * The name of the column which is used in the column visibility menu item as text. If not set as a fallback
         * the column menu tries to get the text from the nested Label.
         */
        name?: string;

        /**
         * @SINCE 1.13.0
         *
         * Defines if the filter menu entry is displayed
         */
        showFilterMenuEntry?: boolean;

        /**
         * @SINCE 1.13.0
         *
         * Defines if the sort menu entries are displayed
         */
        showSortMenuEntry?: boolean;

        /**
         * If this property is set, a span is applied for the header. When moving columns, all columns which are
         * part of the header will be moved. The `headerSpan` can be either an integer or an array of integers (if
         * you use the multi header feature of the table). If you only specify an integer, this span is applied
         * for all header rows, with multiple integers you can specify a separate span for each header row.
         */
        headerSpan?: any;

        /**
         * @SINCE 1.21.1
         *
         * Enables auto-resizing of the column on double clicking the resize bar. The width is determined on the
         * widest currently displayed content. It does not consider rows which are currently not scrolled into view.
         * Currently only implemented to work with the following controls: `sap.m.Text, sap.m.Label, sap.m.Link,
         * sap.m.Input, sap.ui.commons.TextView, sap.ui.commons.Label, sap.ui.commons.Link and sap.ui.commons.TextField,
         * sap.ui.commons.Checkbox, sap.m.Checkbox`
         */
        autoResizable?: boolean;

        /**
         * @SINCE 1.33.0
         *
         * Fires before the column menu is opened.
         */
        columnMenuOpen?: Function;

        /**
         * Label of the column which is displayed in the column header. This aggregation is for the standard behavior,
         * where you only want to display one single row header. If a string is supplied, a default label control
         * will be created. Which control this is depends on the loaded libraries.
         */
        label?: sap.ui.core.Control;

        /**
         * @SINCE 1.13.1
         *
         * Labels of the column which are displayed in the column header. Define a control for each header row in
         * the table. Use this aggregation if you want to use multiple headers per column.
         */
        multiLabels?: sap.ui.core.Control[] | sap.ui.core.Control;

        /**
         * Template (cell renderer) of this column. A template is decoupled from the column. Each time the template's
         * properties or aggregations have been changed, the template has to be applied again via `setTemplate`
         * for the changes to take effect. If a string is defined, a default text control will be created with its
         * text property bound to the value of the string. The default template depends on the libraries loaded.
         * If there is no template, the column will not be rendered in the table. The set of supported controls
         * is limited. See section "{@link topic:148892ff9aea4a18b912829791e38f3e Tables: Which One Should I Choose?}"
         * in the documentation for more details. While it is technically possible to also use other controls, doing
         * so might lead to issues with regards to scrolling, alignment, condensed mode, screen reader support,
         * and keyboard support.
         */
        template?: sap.ui.core.Control;

        /**
         * The menu used by the column. By default the {@link sap.ui.table.ColumnMenu} is used.
         *
         * **Note:** Applications must not use or change the default `sap.ui.table.ColumnMenu` of a column in any
         * way or create own instances of `sap.ui.table.ColumnMenu`. To add a custom menu to a column, use the aggregation
         * `menu` with a new instance of `sap.ui.unified.Menu`.
         */
        menu?: sap.ui.unified.Menu;
      }

      interface ColumnMenuOpts extends sap.ui.unified.MenuOpts {}

      interface RowOpts extends sap.ui.core.ElementOpts {
        /**
         * The controls for the cells.
         */
        cells?: sap.ui.core.Control[] | sap.ui.core.Control;
      }

      interface RowActionOpts extends sap.ui.core.ControlOpts {
        /**
         * Whether the control should be visible on the screen. If set to `false`, the control is hidden.
         */
        visible?: boolean;

        /**
         * The action items which should be displayed.
         */
        items?: sap.ui.table.RowActionItem[] | sap.ui.table.RowActionItem;
      }

      interface RowActionItemOpts extends sap.ui.core.ElementOpts {
        /**
         * The icon of the item.
         */
        icon?: sap.ui.core.URI;

        /**
         * Whether the item should be visible on the screen.
         */
        visible?: boolean;

        /**
         * The text of the item. It is used as tooltip and for accessibility purposes.
         */
        text?: string;

        /**
         * The type of the item. Setting the type ensures default values for the properties `icon` and `text`. If
         * an icon or text is set explicitly this setting is used.
         */
        type?: sap.ui.table.RowActionType;

        /**
         * The `press` is fired when the user triggers the corresponding action.
         */
        press?: Function;
      }

      interface RowSettingsOpts extends sap.ui.core.ElementOpts {
        /**
         * @SINCE 1.48.0
         *
         * The highlight state of the rows. If the highlight is set to {@link sap.ui.core.MessageType.None} (default),
         * no highlights are visible.
         */
        highlight?: sap.ui.core.MessageType;
      }

      interface TableOpts extends sap.ui.core.ControlOpts {
        /**
         * Width of the Table.
         */
        width?: sap.ui.core.CSSSize;

        /**
         * Row height in pixel.
         *
         * In the table's header, it defines the minimum height of the row, but it cannot be less than the default
         * height based on the content density configuration. The actual height can increase based on the content.
         *
         * In the table's body, it defines the height of the row content. The actual row height is also influenced
         * by other factors, such as the border width. If the `visibleRowCountMode` property is set to {@link sap.ui.table.VisibleRowCountMode.Fixed
         * Fixed} or {@link sap.ui.table.VisibleRowCountMode.Interactive Interactive}, the value defines the minimum
         * height, and the actual height can increase based on the content. If the mode is {@link sap.ui.table.VisibleRowCountMode.Auto
         * Auto}, the value defines the actual height, and any content that doesn't fit is cut off.
         *
         * If no value is set (includes 0), a default height is applied based on the content density configuration.
         * In any `visibleRowCountMode`, the actual height can increase based on the content.
         */
        rowHeight?: number;

        /**
         * Header row height in pixel. If a value greater than 0 is set, it overrides the height defined in the
         * `rowHeight` property for the rows in the table's header. The value defines the minimum height, but it
         * cannot be less than the default height based on the content density configuration. The actual height
         * can increase based on the content.
         *
         * **Note**: In a {@link sap.ui.table.Column#getMultiLabels MultiLabel} scenario, the height is applied
         * to each individual row of the table's header.
         */
        columnHeaderHeight?: number;

        /**
         * Flag whether the column header is visible or not.
         */
        columnHeaderVisible?: boolean;

        /**
         * Number of visible rows of the table.
         */
        visibleRowCount?: number;

        /**
         * First visible row.
         */
        firstVisibleRow?: number;

        /**
         * Selection mode of the Table. This property controls whether single or multiple rows can be selected and
         * how the selection can be extended. It may also influence the visual appearance. When the selection mode
         * is changed, the current selection is removed. **Note:** Since the group header visualization relies on
         * the row selectors, the row selectors are always shown if the grouping functionality (depends on table
         * type) is enabled, even if `sap.ui.table.SelectionMode.None` is set.
         */
        selectionMode?: sap.ui.table.SelectionMode;

        /**
         * Selection behavior of the Table. This property defines whether the row selector is displayed and whether
         * the row, the row selector or both can be clicked to select a row. **Note:** Since the group header visualization
         * relies on the row selectors, the row selectors are always shown if the grouping functionality (depends
         * on table type) is enabled, even if `sap.ui.table.SelectionBehavior.RowOnly` is set.
         */
        selectionBehavior?: sap.ui.table.SelectionBehavior;

        /**
         * Zero-based index of selected item. Index value for no selection is -1. When multi-selection is enabled
         * and multiple items are selected, the method returns the lead selected item. Sets the zero-based index
         * of the currently selected item. This method removes any previous selections. When the given index is
         * invalid, the call is ignored.
         */
        selectedIndex?: number;

        /**
         * Flag whether the controls of the Table are editable or not (currently this only controls the background
         * color in certain themes!)
         */
        editable?: boolean;

        /**
         * @deprecated (since 1.38)
         *
         * This property has been deprecated and must not be used anymore, since `Scrollbar` is the only supported
         * option.
         */
        navigationMode?: sap.ui.table.NavigationMode;

        /**
         * The `threshold` defines how many additional (not yet visible records) shall be pre-fetched to enable
         * smooth scrolling. The threshold is always added to the `visibleRowCount`. If the `visibleRowCount` is
         * 10 and the `threshold` is 100, there will be 110 records fetched with the initial load. If the `threshold`
         * is lower than the `visibleRowCount`, the `visibleRowCount` will be used as the `threshold`. If the value
         * is 0 then the thresholding is disabled.
         */
        threshold?: number;

        /**
         * Flag to enable or disable column reordering
         */
        enableColumnReordering?: boolean;

        /**
         * @EXPERIMENTAL (since 1.28)
         *
         * Enables or disables grouping. If grouping is enabled, the table is grouped by the column which is defined
         * in the `groupBy` association.
         *
         * The following restrictions apply:
         * 	 - Only client models are supported (e.g. {@link sap.ui.model.json.JSONModel}). Grouping does not work
         * 			with OData models.
         * 	 - The table can only be grouped by **one** column at a time. Grouping by another column will remove
         * 			the current grouping.
         * 	 - If grouping has been done, sorting and filtering is not possible. Any existing sorting and filtering
         * 			rules do no longer apply. The UI is not updated accordingly (e.g. menu items, sort and filter icons).
         *
         * 	 - The column, by which the table is grouped, is not visible. It will become visible again only if the
         * 			table is grouped by another column or grouping is disabled.
         */
        enableGrouping?: boolean;

        /**
         * Flag to show or hide the column visibility menu. This menu will get displayed in each generated column
         * header menu. It allows to show or hide columns
         */
        showColumnVisibilityMenu?: boolean;

        /**
         * Flag whether to show the no data overlay or not once the table is empty. If set to false the table will
         * just show a grid of empty cells
         */
        showNoData?: boolean;

        /**
         * @SINCE 1.9.2
         *
         * Defines how the table handles the visible rows in the table.
         *
         * In the `"Fixed"` mode, the table always has as many rows as defined in the `visibleRowCount` property.
         *
         * In the `"Auto"` mode, the `visibleRowCount` property is changed by the table automatically. It will then
         * adjust its row count to the space it is allowed to cover (limited by the surrounding container), but
         * it cannot have less than defined in the `minAutoRowCount` property. The `visibleRowCount` property cannot
         * be set manually. Limitations:
         * 	 - All rows need to have the same height.
         * 	 - The table must be rendered without siblings in its parent DOM element. The only exception is if the
         * 			parent element is a CSS flex container, and the table is a CSS flex item allowed to grow and shrink.
         *
         *
         * In the `"Interactive"` mode, the table has as many rows as defined in the `visibleRowCount` property
         * after rendering. The user can change the `visibleRowCount` by dragging a resizer.
         */
        visibleRowCountMode?: sap.ui.table.VisibleRowCountMode;

        /**
         * This property is used to set the minimum count of visible rows when the property visibleRowCountMode
         * is set to Auto or Interactive. For any other visibleRowCountMode, it is ignored.
         */
        minAutoRowCount?: number;

        /**
         * Number of columns that are fixed on the left. Only columns which are not fixed can be scrolled horizontally.
         *
         * **Note**
         * 	 - Fixed columns need a defined width for the feature to work.
         * 	 - The aggregated width of all fixed columns must not exceed the table width. Otherwise the table ignores
         * 			the value of the property and adapts the behavior in an appropriate way to ensure that the user is still
         * 			able to scroll horizontally.
         */
        fixedColumnCount?: number;

        /**
         * Number of rows that are fix on the top. When you use a vertical scrollbar, only the rows which are not
         * fixed, will scroll.
         */
        fixedRowCount?: number;

        /**
         * @SINCE 1.18.7
         *
         * Number of rows that are fix on the bottom. When you use a vertical scrollbar, only the rows which are
         * not fixed, will scroll.
         */
        fixedBottomRowCount?: number;

        /**
         * @SINCE 1.21.0
         *
         * Flag whether to show or hide the column menu item to freeze or unfreeze a column.
         */
        enableColumnFreeze?: boolean;

        /**
         * @SINCE 1.21.0
         *
         * Flag whether to enable or disable the context menu on cells to trigger a filtering with the cell value.
         */
        enableCellFilter?: boolean;

        /**
         * @SINCE 1.21.2
         *
         * Setting this property to true will show an overlay on top of the Table content and users cannot click
         * anymore on the Table content.
         */
        showOverlay?: boolean;

        /**
         * @SINCE 1.23.0
         *
         * Specifies if a select all button should be displayed in the top left corner. This button is only displayed
         * if the row selector is visible and the selection mode is set to any kind of multi selection.
         */
        enableSelectAll?: boolean;

        /**
         * @SINCE 1.23.0
         *
         * Set this parameter to true to implement your own filter behaviour. Instead of the filter input box a
         * button will be rendered for which' press event (customFilter) you can register an event handler.
         */
        enableCustomFilter?: boolean;

        /**
         * @SINCE 1.27.0
         *
         * If set to `true`, the table changes its busy state, resulting in showing or hiding the busy indicator.
         * The table will switch to busy as soon as data is retrieved to be displayed in the currently visible rows.
         * This happens, for example, during scrolling, filtering, or sorting. As soon as the data has been retrieved,
         * the table switches back to not busy. The busy state of the table can still be set manually by calling
         * {@link sap.ui.core.Control#setBusy}.
         */
        enableBusyIndicator?: boolean;

        /**
         * @SINCE 1.45.0
         *
         * Number of row actions made visible which determines the width of the row action column. The values `0`,
         * `1` and `2` are possible.
         */
        rowActionCount?: number;

        /**
         * @SINCE 1.52
         *
         * Enables alternating table row colors. Alternate row coloring is not available for the tree mode.
         */
        alternateRowColors?: boolean;

        /**
         * fired when the row selection of the table has been changed (the event parameters can be used to determine
         * selection changes - to find out the selected rows you should better use the table selection API)
         */
        rowSelectionChange?: Function;

        /**
         * fired when a column of the table has been selected
         */
        columnSelect?: Function;

        /**
         * fired when a table column is resized.
         */
        columnResize?: Function;

        /**
         * fired when a table column is moved.
         */
        columnMove?: Function;

        /**
         * fired when the table is sorted.
         */
        sort?: Function;

        /**
         * fired when the table is filtered.
         */
        filter?: Function;

        /**
         * fired when the table is grouped (experimental!).
         */
        group?: Function;

        /**
         * fired when the visibility of a table column is changed.
         */
        columnVisibility?: Function;

        /**
         * @SINCE 1.21.0
         *
         * fired when the user clicks a cell of the table (experimental!).
         */
        cellClick?: Function;

        /**
         * @SINCE 1.21.0
         * @deprecated (since 1.54) - replaced by `beforeOpenContextMenu`.
         *
         * fired when the user clicks a cell of the table.
         */
        cellContextmenu?: Function;

        /**
         * @SINCE 1.54
         *
         * Fired when the user requests the context menu for a table cell.
         */
        beforeOpenContextMenu?: Function;

        /**
         * @SINCE 1.21.0
         *
         * fired when a column of the table should be freezed
         */
        columnFreeze?: Function;

        /**
         * @SINCE 1.23.0
         *
         * This event is triggered when the custom filter item of the column menu is pressed. The column on which
         * the event was triggered is passed as parameter.
         */
        customFilter?: Function;

        /**
         * @SINCE 1.37.0
         *
         * This event gets fired when the first visible row is changed. It should only be used by composite controls.
         * The event even is fired when setFirstVisibleRow is called programmatically.
         */
        firstVisibleRowChanged?: Function;

        /**
         * @SINCE 1.37.0
         *
         * This event gets fired when the busy state of the table changes. It should only be used by composite controls.
         */
        busyStateChanged?: Function;

        /**
         * @SINCE 1.60
         *
         * This event gets fired when the user performs paste from clipboard on the table. Paste action can be performed
         * from the context menu or with CTRL-V keyboard key combination.
         */
        paste?: Function;

        /**
         * Control or text of title section of the Table (if not set it will be hidden)
         */
        title?: sap.ui.core.Control;

        /**
         * Control or text of footer section of the Table (if not set it will be hidden)
         */
        footer?: sap.ui.core.Control;

        /**
         * @deprecated (since 1.38) - This aggregation is deprecated, use the `extension` aggregation instead.
         *
         * Toolbar of the Table If not set, no toolbar area will be rendered. Note: The CSS class sapMTBHeader-CTX
         * is applied on the given toolbar.
         */
        toolbar?: sap.ui.core.Toolbar;

        /**
         * Extension section of the Table. If not set, no extension area will be rendered. Note: In case a `sap.m.Toolbar`
         * is used as header the CSS class sapMTBHeader-CTX should be applied on this toolbar.
         */
        extension?: sap.ui.core.Control[] | sap.ui.core.Control;

        /**
         * Columns of the Table
         */
        columns?: sap.ui.table.Column[] | sap.ui.table.Column;

        /**
         * Rows of the Table
         */
        rows?: sap.ui.table.Row[] | sap.ui.table.Row;

        /**
         * The value for the noData aggregation can be either a string value or a control instance. The control
         * is shown, in case there is no data for the Table available. In case of a string value this will simply
         * replace the no data text.
         */
        noData?: sap.ui.core.Control;

        /**
         * Template for row actions. A template is decoupled from the row or table. Each time the template's properties
         * or aggregations are changed, the template has to be applied again via `setRowActionTemplate` for the
         * changes to take effect.
         */
        rowActionTemplate?: sap.ui.table.RowAction;

        /**
         * Template for row settings. A template is decoupled from the row or table. Each time the template's properties
         * or aggregations are changed, the template has to be applied again via `setRowSettingsTemplate` for the
         * changes to take effect.
         */
        rowSettingsTemplate?: sap.ui.table.RowSettings;

        /**
         * @SINCE 1.54
         *
         * Defines the context menu for the table.
         *
         * **Note:** The context menu will also be available for the row selectors as well as in the row actions
         * cell of the table control.
         *
         * The custom context menu will not be shown in the group header rows and the sum row of the `AnalyticalTable`
         * control.
         *
         * If this aggregation is set, then the `enableCellFilter` property will have no effect.
         */
        contextMenu?: sap.ui.core.IContextMenu;

        /**
         * @EXPERIMENTAL (since 1.28)
         *
         * The column by which the table is grouped. Grouping will only be performed if `enableGrouping` is set
         * to `true`.
         */
        groupBy?: sap.ui.table.Column | string;

        /**
         * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
         */
        ariaLabelledBy?: sap.ui.core.Control[] | string[];
      }

      interface TreeTableOpts extends sap.ui.table.TableOpts {
        /**
         * @deprecated (since 1.46.3) - replaced by the corresponding binding parameter `numberOfExpandedLevels`.
         *
         * Specifies whether the first level is expanded.
         *
         * The value of the property is only taken into account if no parameter `numberOfExpandedLevels` is given
         * in the binding information. Changes to this property after the table is bound do not have any effect
         * unless an explicit (re-)bind of the `rows` aggregation is done.
         *
         * Example:
         * ```javascript
         *
         *   oTable.bindRows({
         *     path: "...",
         *     parameters: {
         *       numberOfExpandedLevels: 1
         *     }
         *   });
         * ```
         */
        expandFirstLevel?: boolean;

        /**
         * If group mode is enabled nodes with subitems are rendered as if they were group headers. This can be
         * used to do the grouping for an OData service on the backend and visualize this in a table.
         */
        useGroupMode?: boolean;

        /**
         * The property name of the rows data which will be displayed as a group header if the group mode is enabled
         */
        groupHeaderProperty?: string;

        /**
         * Setting collapseRecursive to true means, that when collapsing a node all subsequent child nodes will
         * also be collapsed. This property is only supported with sap.ui.model.odata.v2.ODataModel. **Note:** collapseRecursive
         * is currently **not** supported if your OData service exposes the hierarchy annotation `hierarchy-descendant-count-for`.
         * In this case the value of the collapseRecursive property is ignored. For more information about the OData
         * hierarchy annotations, please see the **SAP Annotations for OData Version 2.0** specification.
         */
        collapseRecursive?: boolean;

        /**
         * The root level is the level of the topmost tree nodes, which will be used as an entry point for OData
         * services. This property is only supported when the TreeTable uses an underlying odata services with hierarchy
         * annotations. This property is only supported with sap.ui.model.odata.v2.ODataModel The hierarchy annotations
         * may also be provided locally as a parameter for the ODataTreeBinding.
         */
        rootLevel?: number;

        /**
         * Fired when a row has been expanded or collapsed by user interaction. Only available in hierarchical mode.
         */
        toggleOpenState?: Function;
      }
      /**
       * @EXPERIMENTAL (since 1.21)
       *
       * This column adds additional properties to the table column which are needed for the analytical binding
       * and table
       */
      class AnalyticalColumn extends sap.ui.table.Column {
        /**
         * Constructor for a new AnalyticalColumn.
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
          mSettings?: AnalyticalColumnOpts
        );

        /**
         * Creates a new subclass of class sap.ui.table.AnalyticalColumn with name `sClassName` and enriches it
         * with the information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.table.Column.extend}.
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
         * Gets current value of property {@link #getGroupHeaderFormatter groupHeaderFormatter}.
         *
         * If the column is grouped, this formatter is used to format the value in the group header
         */
        getGroupHeaderFormatter(): any;
        /**
         * Gets current value of property {@link #getInResult inResult}.
         *
         * Specifies that the dimension referred to by the column shall be included in the granularity of the data
         * result. It allows a finer distinction between a visible/grouped/(included)inResult column.
         *
         * Default value is `false`.
         */
        getInResult(): boolean;
        /**
         * Gets current value of property {@link #getLeadingProperty leadingProperty}.
         *
         * Defines the primary model property which is used inside the Column. In case of the analytical extension
         * this means the property which is grouped by for dimensions or the property which is summed for measures.
         */
        getLeadingProperty(): string;
        /**
         * Returns a metadata object for class sap.ui.table.AnalyticalColumn.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getShowIfGrouped showIfGrouped}.
         *
         * Specifies whether the column is displayed within the table even if it is grouped or not. A grouped column
         * has the same value for every rows within the group.
         *
         * Default value is `false`.
         */
        getShowIfGrouped(): boolean;
        /**
         * Gets current value of property {@link #getSummed summed}.
         *
         * If defined a sum for this column is calculated
         *
         * Default value is `false`.
         */
        getSummed(): boolean;
        /**
         * Returns the information whether the column is groupable.
         *
         * The column is groupable only if the following conditions are fulfilled:
         * 	 - The column must be child of an `AnalyticalTable`.
         * 	 - The `rows` aggregation of the table must be bound.
         * 	 - The metadata of the model must be loaded.
         * 	 - The column's `leadingProperty` must be a sortable and filterable dimension.
         */
        isGroupable(): boolean;
        /**
         * Sets a new value for property {@link #getGroupHeaderFormatter groupHeaderFormatter}.
         *
         * If the column is grouped, this formatter is used to format the value in the group header
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setGroupHeaderFormatter(
          /**
           * New value for property `groupHeaderFormatter`
           */
          oGroupHeaderFormatter: any
        ): sap.ui.table.AnalyticalColumn;
        /**
         * Sets a new value for property {@link #getInResult inResult}.
         *
         * Specifies that the dimension referred to by the column shall be included in the granularity of the data
         * result. It allows a finer distinction between a visible/grouped/(included)inResult column.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setInResult(
          /**
           * New value for property `inResult`
           */
          bInResult: boolean
        ): sap.ui.table.AnalyticalColumn;
        /**
         * Sets a new value for property {@link #getLeadingProperty leadingProperty}.
         *
         * Defines the primary model property which is used inside the Column. In case of the analytical extension
         * this means the property which is grouped by for dimensions or the property which is summed for measures.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setLeadingProperty(
          /**
           * New value for property `leadingProperty`
           */
          sLeadingProperty: string
        ): sap.ui.table.AnalyticalColumn;
        /**
         * Sets a new value for property {@link #getShowIfGrouped showIfGrouped}.
         *
         * Specifies whether the column is displayed within the table even if it is grouped or not. A grouped column
         * has the same value for every rows within the group.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setShowIfGrouped(
          /**
           * New value for property `showIfGrouped`
           */
          bShowIfGrouped: boolean
        ): sap.ui.table.AnalyticalColumn;
        /**
         * Sets a new value for property {@link #getSummed summed}.
         *
         * If defined a sum for this column is calculated
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setSummed(
          /**
           * New value for property `summed`
           */
          bSummed: boolean
        ): sap.ui.table.AnalyticalColumn;
      }
      /**
       * @EXPERIMENTAL (since 1.21)
       *
       * A column menu which is used by the analytical column
       */
      class AnalyticalColumnMenu extends sap.ui.table.ColumnMenu {
        /**
         * Constructor for a new AnalyticalColumnMenu.
         */
        constructor(
          /**
           * id for the new control, generated automatically if no id is given
           */
          sId?: string,
          /**
           * initial settings for the new control
           */
          mSettings?: AnalyticalColumnMenuOpts
        );

        /**
         * Creates a new subclass of class sap.ui.table.AnalyticalColumnMenu with name `sClassName` and enriches
         * it with the information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.table.ColumnMenu.extend}.
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
         * Returns a metadata object for class sap.ui.table.AnalyticalColumnMenu.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
      }
      /**
       * Table which handles analytical OData backends. The AnalyticalTable only works with an AnalyticalBinding
       * and correctly annotated OData services. Please check on the SAP Annotations for OData Version 2.0 documentation
       * for further details.
       */
      class AnalyticalTable extends sap.ui.table.Table {
        /**
         * Constructor for a new AnalyticalTable.
         *
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
         * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
         * of the syntax of the settings object.
         * See:
         * 	http://scn.sap.com/docs/DOC-44986
         * 	{@link topic:08197fa68e4f479cbe30f639cc1cd22c sap.ui.table}
         * 	{@link fiori:/analytical-table-alv/ Analytical Table}
         */
        constructor(
          /**
           * id for the new control, generated automatically if no id is given
           */
          sId?: string,
          /**
           * initial settings for the new control
           */
          mSettings?: AnalyticalTableOpts
        );

        /**
         * Marks a range of tree nodes as selected, starting with iFromIndex going to iToIndex. The nodes are referenced
         * via their absolute row index. Please be aware that the absolute row index only applies to the tree which
         * is visualized by the `AnalyticalTable` control. Invisible nodes (collapsed child nodes) will not be taken
         * into account.
         *
         * Please also take notice of the fact, that "addSelectionInterval" does not change any other selection.
         * To override the current selection, please use "setSelctionInterval" or for a single entry use "setSelectedIndex".
         */
        // @ts-ignore
        addSelectionInterval(
          /**
           * The starting index of the range which will be selected.
           */
          iFromIndex: number,
          /**
           * The starting index of the range which will be selected.
           */
          iToIndex: number
        ): sap.ui.table.AnalyticalTable;
        /**
         * Clears the complete selection (all analytical table rows/nodes will be deselected).
         */
        // @ts-ignore
        clearSelection(): sap.ui.table.AnalyticalTable;
        /**
         * Collapses one or more rows.
         */
        collapse(
          /**
           * A single index, or an array of indices of the rows to be collapsed
           */
          vRowIndex: number | number[]
        ): sap.ui.table.AnalyticalTable;
        /**
         * Collapses all nodes (and their child nodes if collapseRecursive is activated).
         */
        collapseAll(): sap.ui.table.AnalyticalTable;
        /**
         * Expands one or more rows.
         */
        expand(
          /**
           * A single index or an array of indices of the rows to be expanded
           */
          vRowIndex: number | number[]
        ): sap.ui.table.AnalyticalTable;
        /**
         * Creates a new subclass of class sap.ui.table.AnalyticalTable with name `sClassName` and enriches it with
         * the information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.table.Table.extend}.
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
         * @deprecated (since 1.44.0) - please use the corresponding binding parameter `autoExpandMode` instead.
         *
         * Gets current value of property {@link #getAutoExpandMode autoExpandMode}.
         *
         * The kind of auto expansion algorithm, e.g. optimized filter conditions, per level requests, ... Must
         * be a value of `sap.ui.table.TreeAutoExpandMode`.
         *
         * The value of the property is only taken into account if no parameter is given in the binding information.
         * Changes to this property after the table is bound do not have any effect unless an explicit (re-)bind
         * of the `rows` aggregation is done.
         *
         * Example:
         * ```javascript
         *
         *   oTable.bindRows({
         *     path: "...",
         *     parameters: {
         *       autoExpandMode: "Bundled"
         *     }
         *   });
         * ```
         *
         *
         * Default value is `Bundled`.
         */
        getAutoExpandMode(): string;
        /**
         * Gets current value of property {@link #getCollapseRecursive collapseRecursive}.
         *
         * Setting collapseRecursive to true means, that when collapsing a node all subsequent child nodes will
         * also be collapsed.
         *
         * Calling the setter of this property only has an effect when the tables `rows` aggregation is already
         * bound and the binding supports this feature.
         *
         * Default value is `true`.
         */
        getCollapseRecursive(): boolean;
        /**
         * Gets current value of property {@link #getColumnVisibilityMenuSorter columnVisibilityMenuSorter}.
         *
         * Functions which is used to sort the column visibility menu entries e.g.: function(ColumnA, ColumnB) {
         * return 0 = equals, 0 greater }; Other values than functions will be ignored.
         */
        getColumnVisibilityMenuSorter(): any;
        /**
         * Returns the context of a row by its index.
         */
        // @ts-ignore
        getContextByIndex(
          /**
           * Index of the row to return the context from.
           */
          iIndex: number
        ): object;
        /**
         * @deprecated (since 1.21.2) - replaced by {@link sap.ui.table.Table#setShowOverlay}
         *
         * Gets current value of property {@link #getDirty dirty}.
         *
         * If dirty the content of the Table will be overlayed.
         */
        getDirty(): boolean;
        /**
         * @deprecated (since 1.28)
         *
         * The property `enableGrouping` is not supported by the `AnalyticalTable` control.
         */
        // @ts-ignore
        getEnableGrouping(): void;
        /**
         * @deprecated (since 1.28)
         *
         * The `groupBy` association is not supported by the `AnalyticalTable` control.
         */
        // @ts-ignore
        getGroupBy(): void;
        /**
         * Returns a metadata object for class sap.ui.table.AnalyticalTable.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * @deprecated (since 1.44.0) - please use the corresponding binding parameter `numberOfExpandedLevels`
         * instead.
         *
         * Gets current value of property {@link #getNumberOfExpandedLevels numberOfExpandedLevels}.
         *
         * Number of levels, which should be opened initially (on first load of data).
         *
         * The value of the property is only taken into account if no parameter is given in the binding information.
         * Changes to this property after the table is bound do not have any effect unless an explicit (re-)bind
         * of the `rows` aggregation is done.
         *
         * Example:
         * ```javascript
         *
         *   oTable.bindRows({
         *     path: "...",
         *     parameters: {
         *       numberOfExpandedLevels: 1
         *     }
         *   });
         * ```
         *
         *
         * Default value is `0`.
         */
        getNumberOfExpandedLevels(): number;
        /**
         * Retrieves the lead selection index. The lead selection index is, among other things, used to determine
         * the start/end of a selection range, when using Shift-Click to select multiple entries at once.
         */
        // @ts-ignore
        getSelectedIndex(): number[];
        /**
         * Returns an array containing the row indices of all selected tree nodes (in ascending order).
         *
         * Please be aware of the following: Due to performance/network traffic reasons, the getSelectedIndices
         * function returns only all indices of actually selected rows/tree nodes. Unknown rows/nodes (as in "not
         * yet loaded" to the client), will not be returned.
         */
        // @ts-ignore
        getSelectedIndices(): number[];
        /**
         * @deprecated (since 1.44.0) - please use the corresponding binding parameter `sumOnTop` instead.
         *
         * Gets current value of property {@link #getSumOnTop sumOnTop}.
         *
         * Specifies if the total values should be displayed in the group headers or on bottom of the row. Does
         * not affect the total sum.
         *
         * The value of the property is only taken into account if no parameter is given in the binding information.
         * Changes to this property after the table is bound do not have any effect unless an explicit (re-)bind
         * of the `rows` aggregation is done.
         *
         * Example:
         * ```javascript
         *
         *   oTable.bindRows({
         *     path: "...",
         *     parameters: {
         *       sumOnTop: true
         *     }
         *   });
         * ```
         *
         *
         * Default value is `false`.
         */
        getSumOnTop(): boolean;
        /**
         * Returns the total size of the data entries.
         */
        getTotalSize(): number;
        /**
         * Checks whether the row is expanded or collapsed.
         */
        isExpanded(
          /**
           * The index of the row to be checked
           */
          iRowIndex: number
        ): boolean;
        /**
         * Checks if the row at the given index is selected.
         */
        // @ts-ignore
        isIndexSelected(
          /**
           * The row index for which the selection state should be retrieved
           */
          iRowIndex: number
        ): boolean;
        /**
         * All rows/tree nodes inside the range (including boundaries) will be deselected. The nodes are referenced
         * with their absolute row index. Please be aware that the absolute row index only applies to the tree which
         * is visualized by the `AnalyticalTable` control. Invisible nodes (collapsed child nodes) will not be taken
         * into account.
         */
        // @ts-ignore
        removeSelectionInterval(
          /**
           * The starting index of the range which will be deselected.
           */
          iFromIndex: number,
          /**
           * The starting index of the range which will be deselected.
           */
          iToIndex: number
        ): sap.ui.table.AnalyticalTable;
        /**
         * This function is used by some composite controls to force updating the AnalyticalInfo
         */
        resumeUpdateAnalyticalInfo(
          /**
           * binding shall not refresh data
           */
          bSuppressRefresh: boolean,
          /**
           * forces the binding to fire a change event
           */
          bForceChange: boolean
        ): void;
        /**
         * Selects all available nodes/rows.
         *
         * Explanation of the SelectAll function and what to expect from its behavior: All rows/nodes stored locally
         * on the client are selected. In addition all subsequent rows/tree nodes, which will be paged into view
         * are also immediately selected. However, due to obvious performance/network traffic reasons, the SelectAll
         * function will NOT retrieve any data from the backend.
         */
        // @ts-ignore
        selectAll(): sap.ui.table.AnalyticalTable;
        /**
         * @deprecated (since 1.44.0) - please use the corresponding binding parameter `autoExpandMode` instead.
         *
         * Sets a new value for property {@link #getAutoExpandMode autoExpandMode}.
         *
         * The kind of auto expansion algorithm, e.g. optimized filter conditions, per level requests, ... Must
         * be a value of `sap.ui.table.TreeAutoExpandMode`.
         *
         * The value of the property is only taken into account if no parameter is given in the binding information.
         * Changes to this property after the table is bound do not have any effect unless an explicit (re-)bind
         * of the `rows` aggregation is done.
         *
         * Example:
         * ```javascript
         *
         *   oTable.bindRows({
         *     path: "...",
         *     parameters: {
         *       autoExpandMode: "Bundled"
         *     }
         *   });
         * ```
         *
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Bundled`.
         */
        setAutoExpandMode(
          /**
           * New value for property `autoExpandMode`
           */
          sAutoExpandMode: string
        ): sap.ui.table.AnalyticalTable;
        /**
         * Sets a new value for property {@link #getCollapseRecursive collapseRecursive}.
         *
         * Setting collapseRecursive to true means, that when collapsing a node all subsequent child nodes will
         * also be collapsed.
         *
         * Calling the setter of this property only has an effect when the tables `rows` aggregation is already
         * bound and the binding supports this feature.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setCollapseRecursive(
          /**
           * New value for property `collapseRecursive`
           */
          bCollapseRecursive: boolean
        ): sap.ui.table.AnalyticalTable;
        /**
         * Sets a new value for property {@link #getColumnVisibilityMenuSorter columnVisibilityMenuSorter}.
         *
         * Functions which is used to sort the column visibility menu entries e.g.: function(ColumnA, ColumnB) {
         * return 0 = equals, 0 greater }; Other values than functions will be ignored.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setColumnVisibilityMenuSorter(
          /**
           * New value for property `columnVisibilityMenuSorter`
           */
          oColumnVisibilityMenuSorter: any
        ): sap.ui.table.AnalyticalTable;
        /**
         * @deprecated (since 1.21.2) - replaced by {@link sap.ui.table.Table#setShowOverlay}
         *
         * Sets a new value for property {@link #getDirty dirty}.
         *
         * If dirty the content of the Table will be overlayed.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setDirty(
          /**
           * New value for property `dirty`
           */
          bDirty: boolean
        ): sap.ui.table.AnalyticalTable;
        /**
         * @deprecated (since 1.28)
         *
         * The property `enableGrouping` is not supported by the `AnalyticalTable` control.
         */
        // @ts-ignore
        setEnableGrouping(): sap.ui.table.AnalyticalTable;
        /**
         * @deprecated (since 1.28)
         *
         * The `groupBy` association is not supported by the `AnalyticalTable` control.
         */
        // @ts-ignore
        setGroupBy(): sap.ui.table.AnalyticalTable;
        /**
         * @deprecated (since 1.44.0) - please use the corresponding binding parameter `numberOfExpandedLevels`
         * instead.
         *
         * Sets a new value for property {@link #getNumberOfExpandedLevels numberOfExpandedLevels}.
         *
         * Number of levels, which should be opened initially (on first load of data).
         *
         * The value of the property is only taken into account if no parameter is given in the binding information.
         * Changes to this property after the table is bound do not have any effect unless an explicit (re-)bind
         * of the `rows` aggregation is done.
         *
         * Example:
         * ```javascript
         *
         *   oTable.bindRows({
         *     path: "...",
         *     parameters: {
         *       numberOfExpandedLevels: 1
         *     }
         *   });
         * ```
         *
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `0`.
         */
        setNumberOfExpandedLevels(
          /**
           * New value for property `numberOfExpandedLevels`
           */
          iNumberOfExpandedLevels: number
        ): sap.ui.table.AnalyticalTable;
        /**
         * In an `AnalyticalTable` control you can only select indices, which correspond to the currently visualized
         * tree. Invisible nodes (e.g. collapsed child nodes) cannot be selected via Index, because they do not
         * correspond to an `AnalyticalTable` row.
         */
        // @ts-ignore
        setSelectedIndex(
          /**
           * The row index which will be selected (in case it exists)
           */
          iRowIndex: number
        ): sap.ui.table.AnalyticalTable;
        /**
         * Sets the selection of the `AnalyticalTable` control to the given range (including boundaries).
         *
         * **Note:** The previous selection will be lost/overridden. If this is not the required behavior, please
         * use `addSelectionInterval` and `removeSelectionInterval`.
         */
        // @ts-ignore
        setSelectionInterval(
          /**
           * the start index of the selection range
           */
          iFromIndex: number,
          /**
           * the end index of the selection range
           */
          iToIndex: number
        ): sap.ui.table.AnalyticalTable;
        /**
         * @deprecated (since 1.44.0) - please use the corresponding binding parameter `sumOnTop` instead.
         *
         * Sets a new value for property {@link #getSumOnTop sumOnTop}.
         *
         * Specifies if the total values should be displayed in the group headers or on bottom of the row. Does
         * not affect the total sum.
         *
         * The value of the property is only taken into account if no parameter is given in the binding information.
         * Changes to this property after the table is bound do not have any effect unless an explicit (re-)bind
         * of the `rows` aggregation is done.
         *
         * Example:
         * ```javascript
         *
         *   oTable.bindRows({
         *     path: "...",
         *     parameters: {
         *       sumOnTop: true
         *     }
         *   });
         * ```
         *
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setSumOnTop(
          /**
           * New value for property `sumOnTop`
           */
          bSumOnTop: boolean
        ): sap.ui.table.AnalyticalTable;
        /**
         * This function is used by some composite controls to avoid updating the AnalyticalInfo when several column
         * are added to the table. In order to finally update the AnalyticalInfo and request data, resumeUpdateAnalyticalInfo
         * must be called.
         */
        suspendUpdateAnalyticalInfo(): void;
      }
      /**
       * The column allows you to define column specific properties that will be applied when rendering the table.
       */
      class Column extends sap.ui.core.Element {
        /**
         * Constructor for a new Column.
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
          mSettings?: ColumnOpts
        );

        /**
         * @SINCE 1.13.1
         *
         * Adds some multiLabel to the aggregation {@link #getMultiLabels multiLabels}.
         */
        addMultiLabel(
          /**
           * The multiLabel to add; if empty, nothing is inserted
           */
          oMultiLabel: sap.ui.core.Control
        ): sap.ui.table.Column;
        /**
         * @SINCE 1.33.0
         *
         * Attaches event handler `fnFunction` to the {@link #event:columnMenuOpen columnMenuOpen} event of this
         * `sap.ui.table.Column`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.table.Column` itself.
         *
         * Fires before the column menu is opened.
         */
        attachColumnMenuOpen(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.table.Column` itself
           */
          oListener?: object
        ): sap.ui.table.Column;
        /**
         * Destroys the label in the aggregation {@link #getLabel label}.
         */
        destroyLabel(): sap.ui.table.Column;
        /**
         * Destroys the menu in the aggregation {@link #getMenu menu}.
         */
        destroyMenu(): sap.ui.table.Column;
        /**
         * @SINCE 1.13.1
         *
         * Destroys all the multiLabels in the aggregation {@link #getMultiLabels multiLabels}.
         */
        destroyMultiLabels(): sap.ui.table.Column;
        /**
         * Destroys the template in the aggregation {@link #getTemplate template}.
         */
        destroyTemplate(): sap.ui.table.Column;
        /**
         * @SINCE 1.33.0
         *
         * Detaches event handler `fnFunction` from the {@link #event:columnMenuOpen columnMenuOpen} event of this
         * `sap.ui.table.Column`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachColumnMenuOpen(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.table.Column;
        /**
         * Creates a new subclass of class sap.ui.table.Column with name `sClassName` and enriches it with the information
         * contained in `oClassInfo`.
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
         * @SINCE 1.33.0
         *
         * Fires event {@link #event:columnMenuOpen columnMenuOpen} to attached listeners.
         *
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event
         * object.
         */
        fireColumnMenuOpen(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * Refence to the selected `menu` instance to be opened.
             */
            menu?: sap.ui.unified.Menu;
          }
        ): boolean;
        /**
         * @SINCE 1.21.1
         *
         * Gets current value of property {@link #getAutoResizable autoResizable}.
         *
         * Enables auto-resizing of the column on double clicking the resize bar. The width is determined on the
         * widest currently displayed content. It does not consider rows which are currently not scrolled into view.
         * Currently only implemented to work with the following controls: `sap.m.Text, sap.m.Label, sap.m.Link,
         * sap.m.Input, sap.ui.commons.TextView, sap.ui.commons.Label, sap.ui.commons.Link and sap.ui.commons.TextField,
         * sap.ui.commons.Checkbox, sap.m.Checkbox`
         *
         * Default value is `false`.
         */
        getAutoResizable(): boolean;
        /**
         * Gets current value of property {@link #getDefaultFilterOperator defaultFilterOperator}.
         *
         * If this property is set, the default filter operator of the column is overridden. By default `Contains`
         * is used for string and `EQ` for other types. A valid `sap.ui.model.FilterOperator` needs to be passed.
         */
        getDefaultFilterOperator(): string;
        /**
         * Gets current value of property {@link #getFiltered filtered}.
         *
         * Indicates if the column is filtered. This property only controls if a filter indicator is displayed in
         * the column header - it does not trigger the filter function. The column has to be filtered by calling
         * `Column.sort()`
         *
         * Default value is `false`.
         */
        getFiltered(): boolean;
        /**
         * Gets current value of property {@link #getFilterOperator filterOperator}.
         *
         * Filter operator to use when filtering this column.
         */
        getFilterOperator(): string;
        /**
         * Gets current value of property {@link #getFilterProperty filterProperty}.
         *
         * Specifies the binding property on which the column shall be filtered. Since the column template may have
         * composite bindings, it's not possible to figure out on which binding property the filter shall be applied.
         * Therefore the binding property for filtering must be specified. For example, if the first name and last
         * name are displayed in the same column, only one of the two can be defined as `filterProperty`.
         *
         * A column menu entry for filtering can only be generated if the `filterProperty` is set. The default menu
         * entry is a text input field.
         */
        getFilterProperty(): string;
        /**
         * @SINCE 1.9.2
         *
         * Gets current value of property {@link #getFilterType filterType}.
         *
         * Type of Filter. This is used to transform the search term to the specified type, to make sure that the
         * right columns are displayed. This should be the same as defined in binding for this column. As an alternative
         * you can pass a function which does the conversion. The function receives the entered filter value as
         * parameter and returns the proper value for the filter expression. Another option is to pass the class
         * name of the type, e.g.: `sap.ui.model.type.Date` or an expression similar to the binding syntax, e.g.:
         * `"\{type: 'sap.ui.model.type.Date', formatOptions: \{UTC: true\}, constraints: \{\} \}"`. Here the escaping
         * is mandatory to avoid handling by the binding parser. By default the filter type is `sap.ui.model.type.String`.
         */
        getFilterType(): any;
        /**
         * Gets current value of property {@link #getFilterValue filterValue}.
         *
         * Specifies the value of the filter as string (will be converted into the proper data type). It is possible
         * to provide a filterOperator as string, as shown here:
         * ```javascript
         *
         * > 50
         * < 100
         * >= 150
         * <= 200
         * = 250
         * != 300
         * something    ends with
         * something*    starts with
         * something*   contains
         * some..thing   between
         * 50..100       between
         * ```
         */
        getFilterValue(): string;
        /**
         * @deprecated (since 1.44) - this property has no effect. Use the property `minWidth` in combination with
         * the property `width="auto"` instead.
         *
         * Gets current value of property {@link #getFlexible flexible}.
         *
         * If the table is wider than the sum of widths of the visible columns, the columns will be resized proportionally
         * to their widths that were set originally. If set to false, the column will be displayed in the original
         * width. If all columns are set to not be flexible, an extra "dummy" column will be created at the end
         * of the table.
         *
         * Default value is `true`.
         */
        getFlexible(): boolean;
        /**
         * Gets current value of property {@link #getGrouped grouped}.
         *
         * Indicates if the column is grouped.
         *
         * Default value is `false`.
         */
        getGrouped(): boolean;
        /**
         * Gets current value of property {@link #getHAlign hAlign}.
         *
         * Horizontal alignment of the column content. Controls with a text align do not inherit the horizontal
         * alignment. You have to set the text align directly on the template.
         *
         * Default value is `Begin`.
         */
        getHAlign(): sap.ui.core.HorizontalAlign;
        /**
         * Gets current value of property {@link #getHeaderSpan headerSpan}.
         *
         * If this property is set, a span is applied for the header. When moving columns, all columns which are
         * part of the header will be moved. The `headerSpan` can be either an integer or an array of integers (if
         * you use the multi header feature of the table). If you only specify an integer, this span is applied
         * for all header rows, with multiple integers you can specify a separate span for each header row.
         *
         * Default value is `1`.
         */
        getHeaderSpan(): any;
        /**
         * Gets content of aggregation {@link #getLabel label}.
         *
         * Label of the column which is displayed in the column header. This aggregation is for the standard behavior,
         * where you only want to display one single row header. If a string is supplied, a default label control
         * will be created. Which control this is depends on the loaded libraries.
         */
        getLabel(): sap.ui.core.Control | string;
        /**
         * Gets content of aggregation {@link #getMenu menu}.
         *
         * The menu used by the column. By default the {@link sap.ui.table.ColumnMenu} is used.
         *
         * **Note:** Applications must not use or change the default `sap.ui.table.ColumnMenu` of a column in any
         * way or create own instances of `sap.ui.table.ColumnMenu`. To add a custom menu to a column, use the aggregation
         * `menu` with a new instance of `sap.ui.unified.Menu`.
         */
        getMenu(): sap.ui.unified.Menu;
        /**
         * Returns a metadata object for class sap.ui.table.Column.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * @SINCE 1.44.1
         *
         * Gets current value of property {@link #getMinWidth minWidth}.
         *
         * Defines the minimum width of a column in pixels. This property only has an effect if the given column
         * width is flexible, for example with width `auto`. This property only influences the automatic behavior.
         * If a user adjusts the column width manually, the column width can become smaller. Minimal column width
         * is device-dependent, for example on desktop devices the column will not be smaller than 48px.
         *
         * Default value is `0`.
         */
        getMinWidth(): number;
        /**
         * @SINCE 1.13.1
         *
         * Gets content of aggregation {@link #getMultiLabels multiLabels}.
         *
         * Labels of the column which are displayed in the column header. Define a control for each header row in
         * the table. Use this aggregation if you want to use multiple headers per column.
         */
        getMultiLabels(): sap.ui.core.Control[];
        /**
         * @SINCE 1.11.1
         *
         * Gets current value of property {@link #getName name}.
         *
         * The name of the column which is used in the column visibility menu item as text. If not set as a fallback
         * the column menu tries to get the text from the nested Label.
         */
        getName(): string;
        /**
         * Gets current value of property {@link #getResizable resizable}.
         *
         * If set to true, the column can be resized either using the resize bar (by mouse) or using the keyboard
         * (SHIFT + Left/Right Arrow keys)
         *
         * Default value is `true`.
         */
        getResizable(): boolean;
        /**
         * @SINCE 1.13.0
         *
         * Gets current value of property {@link #getShowFilterMenuEntry showFilterMenuEntry}.
         *
         * Defines if the filter menu entry is displayed
         *
         * Default value is `true`.
         */
        getShowFilterMenuEntry(): boolean;
        /**
         * @SINCE 1.13.0
         *
         * Gets current value of property {@link #getShowSortMenuEntry showSortMenuEntry}.
         *
         * Defines if the sort menu entries are displayed
         *
         * Default value is `true`.
         */
        getShowSortMenuEntry(): boolean;
        /**
         * Gets current value of property {@link #getSorted sorted}.
         *
         * Indicates if the column is sorted. This property only controls if a sort indicator is displayed in the
         * column header - it does not trigger the sort function. The column has to be sorted by calling `Column.sort()`
         *
         * Default value is `false`.
         */
        getSorted(): boolean;
        /**
         * Gets current value of property {@link #getSortOrder sortOrder}.
         *
         * This property indicates the sort direction (Ascending or Descending). The corresponding icon will be
         * rendered if the property `sorted` is `true`
         *
         * Default value is `Ascending`.
         */
        getSortOrder(): sap.ui.table.SortOrder;
        /**
         * Gets current value of property {@link #getSortProperty sortProperty}.
         *
         * Specifies the binding property on which the column will sort. Since the column template may have composite
         * bindings, it's not possible to figure out on which binding property the sort shall be applied. Therefore
         * the binding property for sorting must be specified. For example, if the first name and last name are
         * displayed in the same column, only one of the two can be defined as `sortProperty`.
         *
         * A column menu entry for sorting can only be generated if the `sortProperty` is set.
         */
        getSortProperty(): string;
        /**
         * Gets content of aggregation {@link #getTemplate template}.
         *
         * Template (cell renderer) of this column. A template is decoupled from the column. Each time the template's
         * properties or aggregations have been changed, the template has to be applied again via `setTemplate`
         * for the changes to take effect. If a string is defined, a default text control will be created with its
         * text property bound to the value of the string. The default template depends on the libraries loaded.
         * If there is no template, the column will not be rendered in the table. The set of supported controls
         * is limited. See section "{@link topic:148892ff9aea4a18b912829791e38f3e Tables: Which One Should I Choose?}"
         * in the documentation for more details. While it is technically possible to also use other controls, doing
         * so might lead to issues with regards to scrolling, alignment, condensed mode, screen reader support,
         * and keyboard support.
         */
        getTemplate(): sap.ui.core.Control | string;
        /**
         * Returns a column template clone. It either finds an unused clone or clones a new one from the column
         * template.
         */
        getTemplateClone(
          /**
           * Index of the column in the column aggregation of the table
           */
          iIndex: number
        ): sap.ui.core.Control | null;
        /**
         * Gets current value of property {@link #getVisible visible}.
         *
         * Invisible controls are not rendered.
         *
         * Default value is `true`.
         */
        getVisible(): boolean;
        /**
         * Gets current value of property {@link #getWidth width}.
         *
         * Width of the column in CSS units. Default value is `auto`, see
         * Minimal column width is device-dependent, for example on desktop devices the column will not be smaller
         * than 48px. This property can be changed by the user or by the application configuration/personalization.
         * If a user adjusts the column width manually, the resulting value is always set in pixels. In addition,
         * other columns with width `auto` get a fixed minimum width and do not shrink after the resizing.
         */
        getWidth(): sap.ui.core.CSSSize;
        /**
         * @SINCE 1.13.1
         *
         * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getMultiLabels multiLabels}.
         * and returns its index if found or -1 otherwise.
         */
        indexOfMultiLabel(
          /**
           * The multiLabel whose index is looked for
           */
          oMultiLabel: sap.ui.core.Control
        ): number;
        /**
         * @SINCE 1.13.1
         *
         * Inserts a multiLabel into the aggregation {@link #getMultiLabels multiLabels}.
         */
        insertMultiLabel(
          /**
           * The multiLabel to insert; if empty, nothing is inserted
           */
          oMultiLabel: sap.ui.core.Control,
          /**
           * The `0`-based index the multiLabel should be inserted at; for a negative value of `iIndex`, the multiLabel
           * is inserted at position 0; for a value greater than the current size of the aggregation, the multiLabel
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.table.Column;
        /**
         * @SINCE 1.13.1
         *
         * Removes all the controls from the aggregation {@link #getMultiLabels multiLabels}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllMultiLabels(): sap.ui.core.Control[];
        /**
         * @SINCE 1.13.1
         *
         * Removes a multiLabel from the aggregation {@link #getMultiLabels multiLabels}.
         */
        removeMultiLabel(
          /**
           * The multiLabel to remove or its index or id
           */
          vMultiLabel: number | string | sap.ui.core.Control
        ): sap.ui.core.Control;
        /**
         * @SINCE 1.21.1
         *
         * Sets a new value for property {@link #getAutoResizable autoResizable}.
         *
         * Enables auto-resizing of the column on double clicking the resize bar. The width is determined on the
         * widest currently displayed content. It does not consider rows which are currently not scrolled into view.
         * Currently only implemented to work with the following controls: `sap.m.Text, sap.m.Label, sap.m.Link,
         * sap.m.Input, sap.ui.commons.TextView, sap.ui.commons.Label, sap.ui.commons.Link and sap.ui.commons.TextField,
         * sap.ui.commons.Checkbox, sap.m.Checkbox`
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setAutoResizable(
          /**
           * New value for property `autoResizable`
           */
          bAutoResizable: boolean
        ): sap.ui.table.Column;
        /**
         * Sets a new value for property {@link #getDefaultFilterOperator defaultFilterOperator}.
         *
         * If this property is set, the default filter operator of the column is overridden. By default `Contains`
         * is used for string and `EQ` for other types. A valid `sap.ui.model.FilterOperator` needs to be passed.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setDefaultFilterOperator(
          /**
           * New value for property `defaultFilterOperator`
           */
          sDefaultFilterOperator: string
        ): sap.ui.table.Column;
        /**
         * Sets a new value for property {@link #getFiltered filtered}.
         *
         * Indicates if the column is filtered. This property only controls if a filter indicator is displayed in
         * the column header - it does not trigger the filter function. The column has to be filtered by calling
         * `Column.sort()`
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setFiltered(
          /**
           * New value for property `filtered`
           */
          bFiltered: boolean
        ): sap.ui.table.Column;
        /**
         * Sets a new value for property {@link #getFilterOperator filterOperator}.
         *
         * Filter operator to use when filtering this column.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setFilterOperator(
          /**
           * New value for property `filterOperator`
           */
          sFilterOperator: string
        ): sap.ui.table.Column;
        /**
         * Sets a new value for property {@link #getFilterProperty filterProperty}.
         *
         * Specifies the binding property on which the column shall be filtered. Since the column template may have
         * composite bindings, it's not possible to figure out on which binding property the filter shall be applied.
         * Therefore the binding property for filtering must be specified. For example, if the first name and last
         * name are displayed in the same column, only one of the two can be defined as `filterProperty`.
         *
         * A column menu entry for filtering can only be generated if the `filterProperty` is set. The default menu
         * entry is a text input field.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setFilterProperty(
          /**
           * New value for property `filterProperty`
           */
          sFilterProperty: string
        ): sap.ui.table.Column;
        /**
         * @SINCE 1.9.2
         *
         * Sets a new value for property {@link #getFilterType filterType}.
         *
         * Type of Filter. This is used to transform the search term to the specified type, to make sure that the
         * right columns are displayed. This should be the same as defined in binding for this column. As an alternative
         * you can pass a function which does the conversion. The function receives the entered filter value as
         * parameter and returns the proper value for the filter expression. Another option is to pass the class
         * name of the type, e.g.: `sap.ui.model.type.Date` or an expression similar to the binding syntax, e.g.:
         * `"\{type: 'sap.ui.model.type.Date', formatOptions: \{UTC: true\}, constraints: \{\} \}"`. Here the escaping
         * is mandatory to avoid handling by the binding parser. By default the filter type is `sap.ui.model.type.String`.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setFilterType(
          /**
           * New value for property `filterType`
           */
          oFilterType: any
        ): sap.ui.table.Column;
        /**
         * Sets a new value for property {@link #getFilterValue filterValue}.
         *
         * Specifies the value of the filter as string (will be converted into the proper data type). It is possible
         * to provide a filterOperator as string, as shown here:
         * ```javascript
         *
         * > 50
         * < 100
         * >= 150
         * <= 200
         * = 250
         * != 300
         * something    ends with
         * something*    starts with
         * something*   contains
         * some..thing   between
         * 50..100       between
         * ```
         *
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setFilterValue(
          /**
           * New value for property `filterValue`
           */
          sFilterValue: string
        ): sap.ui.table.Column;
        /**
         * @deprecated (since 1.44) - this property has no effect. Use the property `minWidth` in combination with
         * the property `width="auto"` instead.
         *
         * Sets a new value for property {@link #getFlexible flexible}.
         *
         * If the table is wider than the sum of widths of the visible columns, the columns will be resized proportionally
         * to their widths that were set originally. If set to false, the column will be displayed in the original
         * width. If all columns are set to not be flexible, an extra "dummy" column will be created at the end
         * of the table.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setFlexible(
          /**
           * New value for property `flexible`
           */
          bFlexible: boolean
        ): sap.ui.table.Column;
        /**
         * Sets a new value for property {@link #getGrouped grouped}.
         *
         * Indicates if the column is grouped.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setGrouped(
          /**
           * New value for property `grouped`
           */
          bGrouped: boolean
        ): sap.ui.table.Column;
        /**
         * Sets a new value for property {@link #getHAlign hAlign}.
         *
         * Horizontal alignment of the column content. Controls with a text align do not inherit the horizontal
         * alignment. You have to set the text align directly on the template.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Begin`.
         */
        setHAlign(
          /**
           * New value for property `hAlign`
           */
          sHAlign: sap.ui.core.HorizontalAlign
        ): sap.ui.table.Column;
        /**
         * Sets a new value for property {@link #getHeaderSpan headerSpan}.
         *
         * If this property is set, a span is applied for the header. When moving columns, all columns which are
         * part of the header will be moved. The `headerSpan` can be either an integer or an array of integers (if
         * you use the multi header feature of the table). If you only specify an integer, this span is applied
         * for all header rows, with multiple integers you can specify a separate span for each header row.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `1`.
         */
        setHeaderSpan(
          /**
           * New value for property `headerSpan`
           */
          oHeaderSpan: any
        ): sap.ui.table.Column;
        /**
         * Sets the aggregated {@link #getLabel label}.
         */
        setLabel(
          /**
           * The label to set
           */
          vLabel: sap.ui.core.Control | string
        ): sap.ui.table.Column;
        /**
         * Sets the aggregated {@link #getMenu menu}.
         */
        setMenu(
          /**
           * The menu to set
           */
          oMenu: sap.ui.unified.Menu
        ): sap.ui.table.Column;
        /**
         * @SINCE 1.44.1
         *
         * Sets a new value for property {@link #getMinWidth minWidth}.
         *
         * Defines the minimum width of a column in pixels. This property only has an effect if the given column
         * width is flexible, for example with width `auto`. This property only influences the automatic behavior.
         * If a user adjusts the column width manually, the column width can become smaller. Minimal column width
         * is device-dependent, for example on desktop devices the column will not be smaller than 48px.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `0`.
         */
        setMinWidth(
          /**
           * New value for property `minWidth`
           */
          iMinWidth: number
        ): sap.ui.table.Column;
        /**
         * @SINCE 1.11.1
         *
         * Sets a new value for property {@link #getName name}.
         *
         * The name of the column which is used in the column visibility menu item as text. If not set as a fallback
         * the column menu tries to get the text from the nested Label.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setName(
          /**
           * New value for property `name`
           */
          sName: string
        ): sap.ui.table.Column;
        /**
         * Sets a new value for property {@link #getResizable resizable}.
         *
         * If set to true, the column can be resized either using the resize bar (by mouse) or using the keyboard
         * (SHIFT + Left/Right Arrow keys)
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
        ): sap.ui.table.Column;
        /**
         * @SINCE 1.13.0
         *
         * Sets a new value for property {@link #getShowFilterMenuEntry showFilterMenuEntry}.
         *
         * Defines if the filter menu entry is displayed
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setShowFilterMenuEntry(
          /**
           * New value for property `showFilterMenuEntry`
           */
          bShowFilterMenuEntry: boolean
        ): sap.ui.table.Column;
        /**
         * @SINCE 1.13.0
         *
         * Sets a new value for property {@link #getShowSortMenuEntry showSortMenuEntry}.
         *
         * Defines if the sort menu entries are displayed
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setShowSortMenuEntry(
          /**
           * New value for property `showSortMenuEntry`
           */
          bShowSortMenuEntry: boolean
        ): sap.ui.table.Column;
        /**
         * Sets a new value for property {@link #getSorted sorted}.
         *
         * Indicates if the column is sorted. This property only controls if a sort indicator is displayed in the
         * column header - it does not trigger the sort function. The column has to be sorted by calling `Column.sort()`
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setSorted(
          /**
           * New value for property `sorted`
           */
          bSorted: boolean
        ): sap.ui.table.Column;
        /**
         * Sets a new value for property {@link #getSortOrder sortOrder}.
         *
         * This property indicates the sort direction (Ascending or Descending). The corresponding icon will be
         * rendered if the property `sorted` is `true`
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Ascending`.
         */
        setSortOrder(
          /**
           * New value for property `sortOrder`
           */
          sSortOrder: sap.ui.table.SortOrder
        ): sap.ui.table.Column;
        /**
         * Sets a new value for property {@link #getSortProperty sortProperty}.
         *
         * Specifies the binding property on which the column will sort. Since the column template may have composite
         * bindings, it's not possible to figure out on which binding property the sort shall be applied. Therefore
         * the binding property for sorting must be specified. For example, if the first name and last name are
         * displayed in the same column, only one of the two can be defined as `sortProperty`.
         *
         * A column menu entry for sorting can only be generated if the `sortProperty` is set.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setSortProperty(
          /**
           * New value for property `sortProperty`
           */
          sSortProperty: string
        ): sap.ui.table.Column;
        /**
         * Sets the aggregated {@link #getTemplate template}.
         */
        setTemplate(
          /**
           * The template to set
           */
          vTemplate: sap.ui.core.Control | string
        ): sap.ui.table.Column;
        /**
         * Sets a new value for property {@link #getVisible visible}.
         *
         * Invisible controls are not rendered.
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
        ): sap.ui.table.Column;
        /**
         * Sets a new value for property {@link #getWidth width}.
         *
         * Width of the column in CSS units. Default value is `auto`, see
         * Minimal column width is device-dependent, for example on desktop devices the column will not be smaller
         * than 48px. This property can be changed by the user or by the application configuration/personalization.
         * If a user adjusts the column width manually, the resulting value is always set in pixels. In addition,
         * other columns with width `auto` get a fixed minimum width and do not shrink after the resizing.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setWidth(
          /**
           * New value for property `width`
           */
          sWidth: sap.ui.core.CSSSize
        ): sap.ui.table.Column;
        /**
         * Returns whether the column should be rendered.
         */
        shouldRender(): boolean;
        /**
         * @deprecated (since 1.5.1) - Please use the function "sap.ui.Table.prototype.sort".
         *
         * Sorts the current column ascending or descending.
         */
        sort(
          /**
           * Sort order of the column (if undefined the default will be ascending)
           */
          bDescending: boolean
        ): sap.ui.table.Column;
        /**
         * @deprecated (since 1.5.1) - Please use the function "sap.ui.Table.prototype.sort".
         *
         * Toggles the sort order of the column.
         */
        toggleSort(): void;
        /**
         * @SINCE 1.33.0
         *
         * Attaches event handler `fnFunction` to the {@link #event:columnMenuOpen columnMenuOpen} event of this
         * `sap.ui.table.Column`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.table.Column` itself.
         *
         * Fires before the column menu is opened.
         */
        attachColumnMenuOpen(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.table.Column` itself
           */
          oListener?: object
        ): sap.ui.table.Column;
      }
      /**
       * The column menu provides all common actions that can be performed on a column.
       */
      class ColumnMenu extends sap.ui.unified.Menu {
        /**
         * Constructor for a new ColumnMenu.
         *
         * **Note:** Applications must not use or change the default `sap.ui.table.ColumnMenu` of a column in any
         * way or create own instances of `sap.ui.table.ColumnMenu`. To add a custom menu to a column, use the aggregation
         * `menu` with a new instance of `sap.ui.unified.Menu`.
         */
        constructor(
          /**
           * id for the new control, generated automatically if no id is given
           */
          sId?: string,
          /**
           * initial settings for the new control
           */
          mSettings?: ColumnMenuOpts
        );

        /**
         * Creates a new subclass of class sap.ui.table.ColumnMenu with name `sClassName` and enriches it with the
         * information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.unified.Menu.extend}.
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
         * Returns a metadata object for class sap.ui.table.ColumnMenu.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
      }
      /**
       * The row.
       */
      class Row extends sap.ui.core.Element {
        /**
         * Constructor for a new Row.
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
          mSettings?: RowOpts
        );

        /**
         * Adds some cell to the aggregation {@link #getCells cells}.
         */
        addCell(
          /**
           * The cell to add; if empty, nothing is inserted
           */
          oCell: sap.ui.core.Control
        ): sap.ui.table.Row;
        /**
         * Destroys all the cells in the aggregation {@link #getCells cells}.
         */
        destroyCells(): sap.ui.table.Row;
        /**
         * Creates a new subclass of class sap.ui.table.Row with name `sClassName` and enriches it with the information
         * contained in `oClassInfo`.
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
         * Gets content of aggregation {@link #getCells cells}.
         *
         * The controls for the cells.
         */
        getCells(): sap.ui.core.Control[];
        /**
         * Returns the index of the row in the table or -1 if not added to a table. This function considers the
         * scroll position of the table and also takes fixed rows and fixed bottom rows into account.
         */
        getIndex(): number;
        /**
         * Returns a metadata object for class sap.ui.table.Row.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getCells cells}. and returns
         * its index if found or -1 otherwise.
         */
        indexOfCell(
          /**
           * The cell whose index is looked for
           */
          oCell: sap.ui.core.Control
        ): number;
        /**
         * Inserts a cell into the aggregation {@link #getCells cells}.
         */
        insertCell(
          /**
           * The cell to insert; if empty, nothing is inserted
           */
          oCell: sap.ui.core.Control,
          /**
           * The `0`-based index the cell should be inserted at; for a negative value of `iIndex`, the cell is inserted
           * at position 0; for a value greater than the current size of the aggregation, the cell is inserted at
           * the last position
           */
          iIndex: number
        ): sap.ui.table.Row;
        /**
         * Removes all the controls from the aggregation {@link #getCells cells}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllCells(): sap.ui.core.Control[];
        /**
         * Removes a cell from the aggregation {@link #getCells cells}.
         */
        removeCell(
          /**
           * The cell to remove or its index or id
           */
          vCell: number | string | sap.ui.core.Control
        ): sap.ui.core.Control;
      }
      /**
       * @SINCE 1.45.0
       *
       * The `RowAction` control allows to display multiple action items which can be selected by the user. If
       * more action items are available as the available space allows to display an overflow mechanism is provided.
       * This control must only be used in the context of the `sap.ui.table.Table` control to define row actions.
       */
      class RowAction extends sap.ui.core.Control {
        /**
         * Constructor for a new RowAction.
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
          mSettings?: RowActionOpts
        );

        /**
         * Adds some item to the aggregation {@link #getItems items}.
         */
        addItem(
          /**
           * The item to add; if empty, nothing is inserted
           */
          oItem: sap.ui.table.RowActionItem
        ): sap.ui.table.RowAction;
        /**
         * Destroys all the items in the aggregation {@link #getItems items}.
         */
        destroyItems(): sap.ui.table.RowAction;
        /**
         * Creates a new subclass of class sap.ui.table.RowAction with name `sClassName` and enriches it with the
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
         * Gets content of aggregation {@link #getItems items}.
         *
         * The action items which should be displayed.
         */
        getItems(): sap.ui.table.RowActionItem[];
        /**
         * Returns a metadata object for class sap.ui.table.RowAction.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getVisible visible}.
         *
         * Whether the control should be visible on the screen. If set to `false`, the control is hidden.
         *
         * Default value is `true`.
         */
        // @ts-ignore
        getVisible(): boolean;
        /**
         * Checks for the provided `sap.ui.table.RowActionItem` in the aggregation {@link #getItems items}. and
         * returns its index if found or -1 otherwise.
         */
        indexOfItem(
          /**
           * The item whose index is looked for
           */
          oItem: sap.ui.table.RowActionItem
        ): number;
        /**
         * Inserts a item into the aggregation {@link #getItems items}.
         */
        insertItem(
          /**
           * The item to insert; if empty, nothing is inserted
           */
          oItem: sap.ui.table.RowActionItem,
          /**
           * The `0`-based index the item should be inserted at; for a negative value of `iIndex`, the item is inserted
           * at position 0; for a value greater than the current size of the aggregation, the item is inserted at
           * the last position
           */
          iIndex: number
        ): sap.ui.table.RowAction;
        /**
         * Removes all the controls from the aggregation {@link #getItems items}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllItems(): sap.ui.table.RowActionItem[];
        /**
         * Removes a item from the aggregation {@link #getItems items}.
         */
        removeItem(
          /**
           * The item to remove or its index or id
           */
          vItem: number | string | sap.ui.table.RowActionItem
        ): sap.ui.table.RowActionItem;
        /**
         * Sets a new value for property {@link #getVisible visible}.
         *
         * Whether the control should be visible on the screen. If set to `false`, the control is hidden.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        // @ts-ignore
        setVisible(
          /**
           * New value for property `visible`
           */
          bVisible: boolean
        ): sap.ui.table.RowAction;
      }
      /**
       * @SINCE 1.45.0
       *
       * An action items to be displayed in a `RowAction` control. This element must only be used in the context
       * of the `sap.ui.table.Table` control to define row actions.
       */
      class RowActionItem extends sap.ui.core.Element {
        /**
         * Constructor for a new RowActionItem.
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
          mSettings?: RowActionItemOpts
        );

        /**
         * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.table.RowActionItem`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.table.RowActionItem` itself.
         *
         * The `press` is fired when the user triggers the corresponding action.
         */
        attachPress(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.table.RowActionItem` itself
           */
          oListener?: object
        ): sap.ui.table.RowActionItem;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.ui.table.RowActionItem`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachPress(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.table.RowActionItem;
        /**
         * Creates a new subclass of class sap.ui.table.RowActionItem with name `sClassName` and enriches it with
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
         * Fires event {@link #event:press press} to attached listeners.
         */
        firePress(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ui.table.RowActionItem;
        /**
         * Gets current value of property {@link #getIcon icon}.
         *
         * The icon of the item.
         */
        getIcon(): sap.ui.core.URI;
        /**
         * Returns a metadata object for class sap.ui.table.RowActionItem.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getText text}.
         *
         * The text of the item. It is used as tooltip and for accessibility purposes.
         *
         * Default value is `empty string`.
         */
        getText(): string;
        /**
         * Gets current value of property {@link #getType type}.
         *
         * The type of the item. Setting the type ensures default values for the properties `icon` and `text`. If
         * an icon or text is set explicitly this setting is used.
         *
         * Default value is `Custom`.
         */
        getType(): sap.ui.table.RowActionType;
        /**
         * Gets current value of property {@link #getVisible visible}.
         *
         * Whether the item should be visible on the screen.
         *
         * Default value is `true`.
         */
        getVisible(): boolean;
        /**
         * Sets a new value for property {@link #getIcon icon}.
         *
         * The icon of the item.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setIcon(
          /**
           * New value for property `icon`
           */
          sIcon: sap.ui.core.URI
        ): sap.ui.table.RowActionItem;
        /**
         * Sets a new value for property {@link #getText text}.
         *
         * The text of the item. It is used as tooltip and for accessibility purposes.
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
        ): sap.ui.table.RowActionItem;
        /**
         * Sets a new value for property {@link #getType type}.
         *
         * The type of the item. Setting the type ensures default values for the properties `icon` and `text`. If
         * an icon or text is set explicitly this setting is used.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Custom`.
         */
        setType(
          /**
           * New value for property `type`
           */
          sType: sap.ui.table.RowActionType
        ): sap.ui.table.RowActionItem;
        /**
         * Sets a new value for property {@link #getVisible visible}.
         *
         * Whether the item should be visible on the screen.
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
        ): sap.ui.table.RowActionItem;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.table.RowActionItem`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.table.RowActionItem` itself.
         *
         * The `press` is fired when the user triggers the corresponding action.
         */
        attachPress(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.table.RowActionItem` itself
           */
          oListener?: object
        ): sap.ui.table.RowActionItem;
      }
      /**
       * @SINCE 1.48.0
       *
       * The `RowSettings` control allows you to configure a row. You can only use this control in the context
       * of the `sap.ui.table.Table` control to define row settings.
       */
      class RowSettings extends sap.ui.core.Element {
        /**
         * Constructor for new RowSettings.
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
           * Initial settings for the new control
           */
          mSettings?: RowSettingsOpts
        );

        /**
         * Creates a new subclass of class sap.ui.table.RowSettings with name `sClassName` and enriches it with
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
         * @SINCE 1.48.0
         *
         * Gets current value of property {@link #getHighlight highlight}.
         *
         * The highlight state of the rows. If the highlight is set to {@link sap.ui.core.MessageType.None} (default),
         * no highlights are visible.
         *
         * Default value is `None`.
         */
        getHighlight(): sap.ui.core.MessageType;
        /**
         * Returns a metadata object for class sap.ui.table.RowSettings.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * @SINCE 1.48.0
         *
         * Sets a new value for property {@link #getHighlight highlight}.
         *
         * The highlight state of the rows. If the highlight is set to {@link sap.ui.core.MessageType.None} (default),
         * no highlights are visible.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `None`.
         */
        setHighlight(
          /**
           * New value for property `highlight`
           */
          sHighlight: sap.ui.core.MessageType
        ): sap.ui.table.RowSettings;
      }
      /**
       *  Provides a comprehensive set of features for displaying and dealing with vast amounts of data. The
       * Table control supports desktop PCs and tablet devices. On tablets, special consideration should be given
       * to the number of visible columns and rows due to the limited performance of some devices.   In
       * order to keep the document DOM as lean as possible, the Table control reuses its DOM elements of the
       * rows. When the user scrolls, only the row contexts are changed but the rendered controls remain the same.
       * This allows the Table control to handle huge amounts of data. Nevertheless, restrictions apply regarding
       * the number of displayed columns. Keep the number as low as possible to improve performance. Due to the
       * nature of tables, the used control for column templates also has a big influence on the performance.
       *   The Table control relies completely on data binding, and its supported feature set is tightly
       * coupled to the data model and binding being used.
       */
      class Table extends sap.ui.core.Control {
        /**
         * Constructor for a new Table.
         *
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
         * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
         * of the syntax of the settings object.
         * See:
         * 	{@link topic:08197fa68e4f479cbe30f639cc1cd22c sap.ui.table}
         * 	{@link topic:148892ff9aea4a18b912829791e38f3e Tables: Which One Should I Choose?}
         * 	{@link fiori:/grid-table/ Grid Table}
         */
        constructor(
          /**
           * id for the new control, generated automatically if no id is given
           */
          sId?: string,
          /**
           * initial settings for the new control
           */
          mSettings?: TableOpts
        );

        /**
         * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
         */
        addAriaLabelledBy(
          /**
           * The ariaLabelledBy to add; if empty, nothing is inserted
           */
          vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control
        ): sap.ui.table.Table;
        /**
         * Adds some column to the aggregation {@link #getColumns columns}.
         */
        addColumn(
          /**
           * The column to add; if empty, nothing is inserted
           */
          oColumn: sap.ui.table.Column
        ): sap.ui.table.Table;
        /**
         * Adds some extension to the aggregation {@link #getExtension extension}.
         */
        addExtension(
          /**
           * The extension to add; if empty, nothing is inserted
           */
          oExtension: sap.ui.core.Control
        ): sap.ui.table.Table;
        /**
         * Adds some row to the aggregation {@link #getRows rows}.
         */
        addRow(
          /**
           * The row to add; if empty, nothing is inserted
           */
          oRow: sap.ui.table.Row
        ): sap.ui.table.Table;
        /**
         * Adds the given selection interval to the selection. In case of single selection, only `iIndexTo` is added
         * to the selection.
         */
        addSelectionInterval(
          /**
           * Index from which the selection should start
           */
          iIndexFrom: number,
          /**
           * Index up to which to select
           */
          iIndexTo: number
        ): sap.ui.table.Table;
        /**
         * @SINCE 1.54
         *
         * Attaches event handler `fnFunction` to the {@link #event:beforeOpenContextMenu beforeOpenContextMenu}
         * event of this `sap.ui.table.Table`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.table.Table` itself.
         *
         * Fired when the user requests the context menu for a table cell.
         */
        attachBeforeOpenContextMenu(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
           */
          oListener?: object
        ): sap.ui.table.Table;
        /**
         * @SINCE 1.37.0
         *
         * Attaches event handler `fnFunction` to the {@link #event:busyStateChanged busyStateChanged} event of
         * this `sap.ui.table.Table`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.table.Table` itself.
         *
         * This event gets fired when the busy state of the table changes. It should only be used by composite controls.
         */
        attachBusyStateChanged(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
           */
          oListener?: object
        ): sap.ui.table.Table;
        /**
         * @SINCE 1.21.0
         *
         * Attaches event handler `fnFunction` to the {@link #event:cellClick cellClick} event of this `sap.ui.table.Table`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.table.Table` itself.
         *
         * fired when the user clicks a cell of the table (experimental!).
         */
        attachCellClick(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
           */
          oListener?: object
        ): sap.ui.table.Table;
        /**
         * @SINCE 1.21.0
         * @deprecated (since 1.54) - replaced by `beforeOpenContextMenu`.
         *
         * Attaches event handler `fnFunction` to the {@link #event:cellContextmenu cellContextmenu} event of this
         * `sap.ui.table.Table`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.table.Table` itself.
         *
         * fired when the user clicks a cell of the table.
         */
        attachCellContextmenu(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
           */
          oListener?: object
        ): sap.ui.table.Table;
        /**
         * @SINCE 1.21.0
         *
         * Attaches event handler `fnFunction` to the {@link #event:columnFreeze columnFreeze} event of this `sap.ui.table.Table`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.table.Table` itself.
         *
         * fired when a column of the table should be freezed
         */
        attachColumnFreeze(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
           */
          oListener?: object
        ): sap.ui.table.Table;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:columnMove columnMove} event of this `sap.ui.table.Table`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.table.Table` itself.
         *
         * fired when a table column is moved.
         */
        attachColumnMove(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
           */
          oListener?: object
        ): sap.ui.table.Table;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:columnResize columnResize} event of this `sap.ui.table.Table`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.table.Table` itself.
         *
         * fired when a table column is resized.
         */
        attachColumnResize(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
           */
          oListener?: object
        ): sap.ui.table.Table;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:columnSelect columnSelect} event of this `sap.ui.table.Table`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.table.Table` itself.
         *
         * fired when a column of the table has been selected
         */
        attachColumnSelect(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
           */
          oListener?: object
        ): sap.ui.table.Table;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:columnVisibility columnVisibility} event of
         * this `sap.ui.table.Table`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.table.Table` itself.
         *
         * fired when the visibility of a table column is changed.
         */
        attachColumnVisibility(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
           */
          oListener?: object
        ): sap.ui.table.Table;
        /**
         * @SINCE 1.23.0
         *
         * Attaches event handler `fnFunction` to the {@link #event:customFilter customFilter} event of this `sap.ui.table.Table`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.table.Table` itself.
         *
         * This event is triggered when the custom filter item of the column menu is pressed. The column on which
         * the event was triggered is passed as parameter.
         */
        attachCustomFilter(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
           */
          oListener?: object
        ): sap.ui.table.Table;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:filter filter} event of this `sap.ui.table.Table`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.table.Table` itself.
         *
         * fired when the table is filtered.
         */
        attachFilter(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
           */
          oListener?: object
        ): sap.ui.table.Table;
        /**
         * @SINCE 1.37.0
         *
         * Attaches event handler `fnFunction` to the {@link #event:firstVisibleRowChanged firstVisibleRowChanged}
         * event of this `sap.ui.table.Table`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.table.Table` itself.
         *
         * This event gets fired when the first visible row is changed. It should only be used by composite controls.
         * The event even is fired when setFirstVisibleRow is called programmatically.
         */
        attachFirstVisibleRowChanged(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
           */
          oListener?: object
        ): sap.ui.table.Table;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:group group} event of this `sap.ui.table.Table`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.table.Table` itself.
         *
         * fired when the table is grouped (experimental!).
         */
        attachGroup(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
           */
          oListener?: object
        ): sap.ui.table.Table;
        /**
         * @SINCE 1.60
         *
         * Attaches event handler `fnFunction` to the {@link #event:paste paste} event of this `sap.ui.table.Table`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.table.Table` itself.
         *
         * This event gets fired when the user performs paste from clipboard on the table. Paste action can be performed
         * from the context menu or with CTRL-V keyboard key combination.
         */
        attachPaste(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
           */
          oListener?: object
        ): sap.ui.table.Table;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:rowSelectionChange rowSelectionChange} event
         * of this `sap.ui.table.Table`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.table.Table` itself.
         *
         * fired when the row selection of the table has been changed (the event parameters can be used to determine
         * selection changes - to find out the selected rows you should better use the table selection API)
         */
        attachRowSelectionChange(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
           */
          oListener?: object
        ): sap.ui.table.Table;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:sort sort} event of this `sap.ui.table.Table`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.table.Table` itself.
         *
         * fired when the table is sorted.
         */
        attachSort(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
           */
          oListener?: object
        ): sap.ui.table.Table;
        /**
         * @EXPERIMENTAL
         *
         * Triggers automatic resizing of a column to the widest content.
         */
        autoResizeColumn(
          /**
           * The index of the column in the list of visible columns.
           */
          iColIndex: number
        ): void;
        /**
         * Binds aggregation {@link #getColumns columns} to model data.
         *
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description
         * of the possible properties of `oBindingInfo`.
         */
        bindColumns(
          /**
           * The binding information
           */
          oBindingInfo: object
        ): sap.ui.table.Table;
        /**
         * Binds aggregation {@link #getRows rows} to model data.
         *
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description
         * of the possible properties of `oBindingInfo`.
         */
        bindRows(
          /**
           * The binding information
           */
          oBindingInfo: object
        ): sap.ui.table.Table;
        /**
         * Removes complete selection.
         */
        clearSelection(): sap.ui.table.Table;
        /**
         * Destroys all the columns in the aggregation {@link #getColumns columns}.
         */
        destroyColumns(): sap.ui.table.Table;
        /**
         * @SINCE 1.54
         *
         * Destroys the contextMenu in the aggregation {@link #getContextMenu contextMenu}.
         */
        destroyContextMenu(): sap.ui.table.Table;
        /**
         * Destroys all the extension in the aggregation {@link #getExtension extension}.
         */
        destroyExtension(): sap.ui.table.Table;
        /**
         * Destroys the footer in the aggregation {@link #getFooter footer}.
         */
        destroyFooter(): sap.ui.table.Table;
        /**
         * Destroys the noData in the aggregation {@link #getNoData noData}.
         */
        destroyNoData(): sap.ui.table.Table;
        /**
         * Destroys the rowActionTemplate in the aggregation {@link #getRowActionTemplate rowActionTemplate}.
         */
        destroyRowActionTemplate(): sap.ui.table.Table;
        /**
         * Destroys all the rows in the aggregation {@link #getRows rows}.
         */
        destroyRows(): sap.ui.table.Table;
        /**
         * Destroys the rowSettingsTemplate in the aggregation {@link #getRowSettingsTemplate rowSettingsTemplate}.
         */
        destroyRowSettingsTemplate(): sap.ui.table.Table;
        /**
         * Destroys the title in the aggregation {@link #getTitle title}.
         */
        destroyTitle(): sap.ui.table.Table;
        /**
         * @deprecated (since 1.38) - This aggregation is deprecated, use the `extension` aggregation instead.
         *
         * Destroys the toolbar in the aggregation {@link #getToolbar toolbar}.
         */
        destroyToolbar(): sap.ui.table.Table;
        /**
         * @SINCE 1.54
         *
         * Detaches event handler `fnFunction` from the {@link #event:beforeOpenContextMenu beforeOpenContextMenu}
         * event of this `sap.ui.table.Table`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachBeforeOpenContextMenu(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.table.Table;
        /**
         * @SINCE 1.37.0
         *
         * Detaches event handler `fnFunction` from the {@link #event:busyStateChanged busyStateChanged} event of
         * this `sap.ui.table.Table`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachBusyStateChanged(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.table.Table;
        /**
         * @SINCE 1.21.0
         *
         * Detaches event handler `fnFunction` from the {@link #event:cellClick cellClick} event of this `sap.ui.table.Table`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachCellClick(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.table.Table;
        /**
         * @SINCE 1.21.0
         * @deprecated (since 1.54) - replaced by `beforeOpenContextMenu`.
         *
         * Detaches event handler `fnFunction` from the {@link #event:cellContextmenu cellContextmenu} event of
         * this `sap.ui.table.Table`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachCellContextmenu(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.table.Table;
        /**
         * @SINCE 1.21.0
         *
         * Detaches event handler `fnFunction` from the {@link #event:columnFreeze columnFreeze} event of this `sap.ui.table.Table`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachColumnFreeze(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.table.Table;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:columnMove columnMove} event of this `sap.ui.table.Table`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachColumnMove(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.table.Table;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:columnResize columnResize} event of this `sap.ui.table.Table`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachColumnResize(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.table.Table;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:columnSelect columnSelect} event of this `sap.ui.table.Table`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachColumnSelect(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.table.Table;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:columnVisibility columnVisibility} event of
         * this `sap.ui.table.Table`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachColumnVisibility(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.table.Table;
        /**
         * @SINCE 1.23.0
         *
         * Detaches event handler `fnFunction` from the {@link #event:customFilter customFilter} event of this `sap.ui.table.Table`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachCustomFilter(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.table.Table;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:filter filter} event of this `sap.ui.table.Table`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachFilter(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.table.Table;
        /**
         * @SINCE 1.37.0
         *
         * Detaches event handler `fnFunction` from the {@link #event:firstVisibleRowChanged firstVisibleRowChanged}
         * event of this `sap.ui.table.Table`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachFirstVisibleRowChanged(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.table.Table;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:group group} event of this `sap.ui.table.Table`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachGroup(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.table.Table;
        /**
         * @SINCE 1.60
         *
         * Detaches event handler `fnFunction` from the {@link #event:paste paste} event of this `sap.ui.table.Table`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachPaste(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.table.Table;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:rowSelectionChange rowSelectionChange} event
         * of this `sap.ui.table.Table`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachRowSelectionChange(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.table.Table;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:sort sort} event of this `sap.ui.table.Table`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachSort(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.table.Table;
        /**
         * @deprecated (since 1.56) - replaced by the `sap.ui.export` library.
         * @EXPERIMENTAL
         *
         * Creates a new {@link sap.ui.core.util.Export} object and fills row/column information from the table
         * if not provided. For the cell content, the column's "sortProperty" will be used (experimental!)
         *
         * **Please note: This method uses synchronous requests. Support and functioning ends with the support
         * for synchronous requests in browsers.**/
        exportData(
          /**
           * settings for the new Export, see {@link sap.ui.core.util.Export} `constructor`
           */
          mSettings?: object
        ): sap.ui.core.util.Export;
        /**
         * Creates a new subclass of class sap.ui.table.Table with name `sClassName` and enriches it with the information
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
         * Filter the given column by the given value.
         */
        filter(
          /**
           * Column to be filtered
           */
          oColumn: sap.ui.table.Column,
          /**
           * Filter value as string (will be converted)
           */
          sValue: string
        ): void;
        /**
         * @SINCE 1.54
         *
         * Fires event {@link #event:beforeOpenContextMenu beforeOpenContextMenu} to attached listeners.
         *
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event
         * object.
         */
        fireBeforeOpenContextMenu(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * Row index where the context menu opens.
             */
            rowIndex?: number;
            /**
             * Column index where the context menu opens. This is the index of the column in the `columns` aggregation.
             */
            columnIndex?: number;
            /**
             * Context menu
             */
            contextMenu?: sap.ui.core.IContextMenu;
          }
        ): boolean;
        /**
         * @SINCE 1.37.0
         *
         * Fires event {@link #event:busyStateChanged busyStateChanged} to attached listeners.
         */
        fireBusyStateChanged(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ui.table.Table;
        /**
         * @SINCE 1.21.0
         *
         * Fires event {@link #event:cellClick cellClick} to attached listeners.
         *
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event
         * object.
         */
        fireCellClick(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The control of the cell.
             */
            cellControl?: sap.ui.core.Control;
            /**
             * DOM reference of the clicked cell. Can be used to position the context menu.
             */
            cellDomRef?: Object;
            /**
             * Row index of the selected cell.
             */
            rowIndex?: number;
            /**
             * Column index of the selected cell. This is the index of visible columns and might differ from the index
             * maintained in the column aggregation.
             */
            columnIndex?: number;
            /**
             * Column ID of the selected cell.
             */
            columnId?: string;
            /**
             * Row binding context of the selected cell.
             */
            rowBindingContext?: sap.ui.model.Context;
          }
        ): boolean;
        /**
         * @SINCE 1.21.0
         * @deprecated (since 1.54) - replaced by `beforeOpenContextMenu`.
         *
         * Fires event {@link #event:cellContextmenu cellContextmenu} to attached listeners.
         *
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event
         * object.
         */
        fireCellContextmenu(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The control of the cell.
             */
            cellControl?: sap.ui.core.Control;
            /**
             * DOM reference of the clicked cell. Can be used to position the context menu.
             */
            cellDomRef?: Object;
            /**
             * Row index of the selected cell.
             */
            rowIndex?: number;
            /**
             * Column index of the selected cell. This is the index of visible columns and might differ from the index
             * maintained in the column aggregation.
             */
            columnIndex?: number;
            /**
             * Column ID of the selected cell.
             */
            columnId?: string;
            /**
             * Row binding context of the selected cell.
             */
            rowBindingContext?: sap.ui.model.Context;
          }
        ): boolean;
        /**
         * @SINCE 1.21.0
         *
         * Fires event {@link #event:columnFreeze columnFreeze} to attached listeners.
         *
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event
         * object.
         */
        fireColumnFreeze(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * reference to the column to freeze
             */
            column?: sap.ui.table.Column;
          }
        ): boolean;
        /**
         * Fires event {@link #event:columnMove columnMove} to attached listeners.
         *
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event
         * object.
         */
        fireColumnMove(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * moved column.
             */
            column?: sap.ui.table.Column;
            /**
             * new position of the column.
             */
            newPos?: number;
          }
        ): boolean;
        /**
         * Fires event {@link #event:columnResize columnResize} to attached listeners.
         *
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event
         * object.
         */
        fireColumnResize(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * resized column.
             */
            column?: sap.ui.table.Column;
            /**
             * new width of the table column as CSS Size definition.
             */
            width?: sap.ui.core.CSSSize;
          }
        ): boolean;
        /**
         * Fires event {@link #event:columnSelect columnSelect} to attached listeners.
         *
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event
         * object.
         */
        fireColumnSelect(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * reference to the selected column
             */
            column?: sap.ui.table.Column;
          }
        ): boolean;
        /**
         * Fires event {@link #event:columnVisibility columnVisibility} to attached listeners.
         *
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event
         * object.
         */
        fireColumnVisibility(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * affected column.
             */
            column?: sap.ui.table.Column;
            /**
             * new value of the visible property.
             */
            visible?: boolean;
          }
        ): boolean;
        /**
         * @SINCE 1.23.0
         *
         * Fires event {@link #event:customFilter customFilter} to attached listeners.
         */
        fireCustomFilter(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ui.table.Table;
        /**
         * Fires event {@link #event:filter filter} to attached listeners.
         *
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event
         * object.
         */
        fireFilter(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * filtered column.
             */
            column?: sap.ui.table.Column;
            /**
             * filter value.
             */
            value?: string;
          }
        ): boolean;
        /**
         * @SINCE 1.37.0
         *
         * Fires event {@link #event:firstVisibleRowChanged firstVisibleRowChanged} to attached listeners.
         */
        fireFirstVisibleRowChanged(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ui.table.Table;
        /**
         * Fires event {@link #event:group group} to attached listeners.
         *
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event
         * object.
         */
        fireGroup(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * grouped column.
             */
            column?: sap.ui.table.Column;
          }
        ): boolean;
        /**
         * @SINCE 1.60
         *
         * Fires event {@link #event:paste paste} to attached listeners.
         *
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event
         * object.
         */
        firePaste(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * 2D-Array of strings with data from the clipboard. The first dimension represents the rows and the second
             * dimension represents the cells of the tabular data.
             */
            data?: string[][];
          }
        ): boolean;
        /**
         * Fires event {@link #event:rowSelectionChange rowSelectionChange} to attached listeners.
         */
        fireRowSelectionChange(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * row index which has been clicked so that the selection has been changed (either selected or deselected)
             */
            rowIndex?: number;
            /**
             * binding context of the row which has been clicked so that selection has been changed
             */
            rowContext?: object;
            /**
             * array of row indices which selection has been changed (either selected or deselected)
             */
            rowIndices?: number[];
            /**
             * indicator if "select all" function is used to select rows
             */
            selectAll?: boolean;
            /**
             * indicates that the event was fired due to an explicit user interaction like clicking the row header or
             * using the keyboard (SPACE or ENTER) to select a row or a range of rows.
             */
            userInteraction?: boolean;
          }
        ): sap.ui.table.Table;
        /**
         * Fires event {@link #event:sort sort} to attached listeners.
         *
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event
         * object.
         */
        fireSort(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * sorted column.
             */
            column?: sap.ui.table.Column;
            /**
             * Sort Order
             */
            sortOrder?: sap.ui.table.SortOrder;
            /**
             * If column was added to sorter this is true. If new sort is started this is set to false
             */
            columnAdded?: boolean;
          }
        ): boolean;
        /**
         * @SINCE 1.52
         *
         * Gets current value of property {@link #getAlternateRowColors alternateRowColors}.
         *
         * Enables alternating table row colors. Alternate row coloring is not available for the tree mode.
         *
         * Default value is `false`.
         */
        getAlternateRowColors(): boolean;
        /**
         * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
         * ariaLabelledBy}.
         */
        getAriaLabelledBy(): sap.ui.core.ID[];
        /**
         * Returns the control inside the cell with the given row index (in the `rows` aggregation) and column index
         * (in the `columns` aggregation or in the list of visible columns only, depending on parameter `bVisibleColumnIndex`).
         */
        getCellControl(
          /**
           * Index of row in the table's `rows` aggregation
           */
          iRowIndex: number,
          /**
           * Index of column in the list of visible columns or in the `columns` aggregation, as indicated with `bVisibleColumnIndex`
           */
          iColumnIndex: number,
          /**
           * If set to `true`, the given column index is interpreted as index in the list of visible columns, otherwise
           * as index in the `columns` aggregation
           */
          bVisibleColumnIndex: boolean
        ): sap.ui.core.Control;
        /**
         * Gets current value of property {@link #getColumnHeaderHeight columnHeaderHeight}.
         *
         * Header row height in pixel. If a value greater than 0 is set, it overrides the height defined in the
         * `rowHeight` property for the rows in the table's header. The value defines the minimum height, but it
         * cannot be less than the default height based on the content density configuration. The actual height
         * can increase based on the content.
         *
         * **Note**: In a {@link sap.ui.table.Column#getMultiLabels MultiLabel} scenario, the height is applied
         * to each individual row of the table's header.
         */
        getColumnHeaderHeight(): number;
        /**
         * Gets current value of property {@link #getColumnHeaderVisible columnHeaderVisible}.
         *
         * Flag whether the column header is visible or not.
         *
         * Default value is `true`.
         */
        getColumnHeaderVisible(): boolean;
        /**
         * Gets content of aggregation {@link #getColumns columns}.
         *
         * Columns of the Table
         */
        getColumns(): sap.ui.table.Column[];
        /**
         * In contrast to the function `getFixedColumnCount` which returns the value of the property `fixedColumnCount`,
         * this function returns the actual fixed column count computed based on the table width.
         *
         * **Note:** The computed column count is only available after the table is fully rendered.
         */
        getComputedFixedColumnCount(): number;
        /**
         * Returns the context of a row by its index. Please note that for server-based models like OData, the supplied
         * index might not have been loaded yet. If the context is not available at the client, the binding will
         * trigger a backend request and request this single context. Although this API looks synchronous it may
         * not return a context but load it and fire a change event on the binding.
         *
         * For server-based models you should consider to only make this API call when the index is within the currently
         * visible scroll area.
         */
        getContextByIndex(
          /**
           * Index of the row to return the context from.
           */
          iIndex: number
        ): sap.ui.model.Context | null;
        /**
         * @SINCE 1.54
         *
         * Gets content of aggregation {@link #getContextMenu contextMenu}.
         *
         * Defines the context menu for the table.
         *
         * **Note:** The context menu will also be available for the row selectors as well as in the row actions
         * cell of the table control.
         *
         * The custom context menu will not be shown in the group header rows and the sum row of the `AnalyticalTable`
         * control.
         *
         * If this aggregation is set, then the `enableCellFilter` property will have no effect.
         */
        getContextMenu(): sap.ui.core.IContextMenu;
        /**
         * @SINCE 1.52
         *
         * Gets content of aggregation `dragDropConfig` which defines the drag-and-drop configuration.
         *
         * The following restrictions apply:
         * 	 - Columns cannot be configured to be draggable.
         * 	 - The following rows are not draggable:
         * 	Empty rows
         * 	 - Group header rows
         * 	 - Sum rows
         * 	 - Columns cannot be configured to be droppable.
         * 	 - The following rows are not droppable:
         * 	The dragged row itself
         * 	 - Empty rows
         * 	 - Group header rows
         * 	 - Sum rows
         */
        // @ts-ignore
        getDragDropConfig(): void;
        /**
         * Gets current value of property {@link #getEditable editable}.
         *
         * Flag whether the controls of the Table are editable or not (currently this only controls the background
         * color in certain themes!)
         *
         * Default value is `true`.
         */
        getEditable(): boolean;
        /**
         * @SINCE 1.27.0
         *
         * Gets current value of property {@link #getEnableBusyIndicator enableBusyIndicator}.
         *
         * If set to `true`, the table changes its busy state, resulting in showing or hiding the busy indicator.
         * The table will switch to busy as soon as data is retrieved to be displayed in the currently visible rows.
         * This happens, for example, during scrolling, filtering, or sorting. As soon as the data has been retrieved,
         * the table switches back to not busy. The busy state of the table can still be set manually by calling
         * {@link sap.ui.core.Control#setBusy}.
         *
         * Default value is `false`.
         */
        getEnableBusyIndicator(): boolean;
        /**
         * @SINCE 1.21.0
         *
         * Gets current value of property {@link #getEnableCellFilter enableCellFilter}.
         *
         * Flag whether to enable or disable the context menu on cells to trigger a filtering with the cell value.
         *
         * Default value is `false`.
         */
        getEnableCellFilter(): boolean;
        /**
         * @SINCE 1.21.0
         *
         * Gets current value of property {@link #getEnableColumnFreeze enableColumnFreeze}.
         *
         * Flag whether to show or hide the column menu item to freeze or unfreeze a column.
         *
         * Default value is `false`.
         */
        getEnableColumnFreeze(): boolean;
        /**
         * Gets current value of property {@link #getEnableColumnReordering enableColumnReordering}.
         *
         * Flag to enable or disable column reordering
         *
         * Default value is `true`.
         */
        getEnableColumnReordering(): boolean;
        /**
         * @SINCE 1.23.0
         *
         * Gets current value of property {@link #getEnableCustomFilter enableCustomFilter}.
         *
         * Set this parameter to true to implement your own filter behaviour. Instead of the filter input box a
         * button will be rendered for which' press event (customFilter) you can register an event handler.
         *
         * Default value is `false`.
         */
        getEnableCustomFilter(): boolean;
        /**
         * @EXPERIMENTAL (since 1.28)
         *
         * Gets current value of property {@link #getEnableGrouping enableGrouping}.
         *
         * Enables or disables grouping. If grouping is enabled, the table is grouped by the column which is defined
         * in the `groupBy` association.
         *
         * The following restrictions apply:
         * 	 - Only client models are supported (e.g. {@link sap.ui.model.json.JSONModel}). Grouping does not work
         * 			with OData models.
         * 	 - The table can only be grouped by **one** column at a time. Grouping by another column will remove
         * 			the current grouping.
         * 	 - If grouping has been done, sorting and filtering is not possible. Any existing sorting and filtering
         * 			rules do no longer apply. The UI is not updated accordingly (e.g. menu items, sort and filter icons).
         *
         * 	 - The column, by which the table is grouped, is not visible. It will become visible again only if the
         * 			table is grouped by another column or grouping is disabled.
         *
         * Default value is `false`.
         */
        getEnableGrouping(): boolean;
        /**
         * @SINCE 1.23.0
         *
         * Gets current value of property {@link #getEnableSelectAll enableSelectAll}.
         *
         * Specifies if a select all button should be displayed in the top left corner. This button is only displayed
         * if the row selector is visible and the selection mode is set to any kind of multi selection.
         *
         * Default value is `true`.
         */
        getEnableSelectAll(): boolean;
        /**
         * Gets content of aggregation {@link #getExtension extension}.
         *
         * Extension section of the Table. If not set, no extension area will be rendered. Note: In case a `sap.m.Toolbar`
         * is used as header the CSS class sapMTBHeader-CTX should be applied on this toolbar.
         */
        getExtension(): sap.ui.core.Control[];
        /**
         * Gets current value of property {@link #getFirstVisibleRow firstVisibleRow}.
         *
         * First visible row.
         *
         * Default value is `0`.
         */
        getFirstVisibleRow(): number;
        /**
         * @SINCE 1.18.7
         *
         * Gets current value of property {@link #getFixedBottomRowCount fixedBottomRowCount}.
         *
         * Number of rows that are fix on the bottom. When you use a vertical scrollbar, only the rows which are
         * not fixed, will scroll.
         *
         * Default value is `0`.
         */
        getFixedBottomRowCount(): number;
        /**
         * Gets current value of property {@link #getFixedColumnCount fixedColumnCount}.
         *
         * Number of columns that are fixed on the left. Only columns which are not fixed can be scrolled horizontally.
         *
         * **Note**
         * 	 - Fixed columns need a defined width for the feature to work.
         * 	 - The aggregated width of all fixed columns must not exceed the table width. Otherwise the table ignores
         * 			the value of the property and adapts the behavior in an appropriate way to ensure that the user is still
         * 			able to scroll horizontally.
         *
         * Default value is `0`.
         */
        getFixedColumnCount(): number;
        /**
         * Gets current value of property {@link #getFixedRowCount fixedRowCount}.
         *
         * Number of rows that are fix on the top. When you use a vertical scrollbar, only the rows which are not
         * fixed, will scroll.
         *
         * Default value is `0`.
         */
        getFixedRowCount(): number;
        /**
         * Gets content of aggregation {@link #getFooter footer}.
         *
         * Control or text of footer section of the Table (if not set it will be hidden)
         */
        getFooter(): sap.ui.core.Control | string;
        /**
         * @EXPERIMENTAL (since 1.28)
         *
         * ID of the element which is the current target of the association {@link #getGroupBy groupBy}, or `null`.
         */
        getGroupBy(): sap.ui.core.ID;
        /**
         * Returns a metadata object for class sap.ui.table.Table.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getMinAutoRowCount minAutoRowCount}.
         *
         * This property is used to set the minimum count of visible rows when the property visibleRowCountMode
         * is set to Auto or Interactive. For any other visibleRowCountMode, it is ignored.
         *
         * Default value is `5`.
         */
        getMinAutoRowCount(): number;
        /**
         * @deprecated (since 1.38)
         *
         * Gets current value of property {@link #getNavigationMode navigationMode}.
         *
         * This property has been deprecated and must not be used anymore, since `Scrollbar` is the only supported
         * option.
         *
         * Default value is `Scrollbar`.
         */
        getNavigationMode(): sap.ui.table.NavigationMode;
        /**
         * Gets content of aggregation {@link #getNoData noData}.
         *
         * The value for the noData aggregation can be either a string value or a control instance. The control
         * is shown, in case there is no data for the Table available. In case of a string value this will simply
         * replace the no data text.
         */
        getNoData(): sap.ui.core.Control | string;
        /**
         * @SINCE 1.45.0
         *
         * Gets current value of property {@link #getRowActionCount rowActionCount}.
         *
         * Number of row actions made visible which determines the width of the row action column. The values `0`,
         * `1` and `2` are possible.
         *
         * Default value is `0`.
         */
        getRowActionCount(): number;
        /**
         * Gets content of aggregation {@link #getRowActionTemplate rowActionTemplate}.
         *
         * Template for row actions. A template is decoupled from the row or table. Each time the template's properties
         * or aggregations are changed, the template has to be applied again via `setRowActionTemplate` for the
         * changes to take effect.
         */
        getRowActionTemplate(): sap.ui.table.RowAction;
        /**
         * Gets current value of property {@link #getRowHeight rowHeight}.
         *
         * Row height in pixel.
         *
         * In the table's header, it defines the minimum height of the row, but it cannot be less than the default
         * height based on the content density configuration. The actual height can increase based on the content.
         *
         * In the table's body, it defines the height of the row content. The actual row height is also influenced
         * by other factors, such as the border width. If the `visibleRowCountMode` property is set to {@link sap.ui.table.VisibleRowCountMode.Fixed
         * Fixed} or {@link sap.ui.table.VisibleRowCountMode.Interactive Interactive}, the value defines the minimum
         * height, and the actual height can increase based on the content. If the mode is {@link sap.ui.table.VisibleRowCountMode.Auto
         * Auto}, the value defines the actual height, and any content that doesn't fit is cut off.
         *
         * If no value is set (includes 0), a default height is applied based on the content density configuration.
         * In any `visibleRowCountMode`, the actual height can increase based on the content.
         */
        getRowHeight(): number;
        /**
         * Gets content of aggregation {@link #getRows rows}.
         *
         * Rows of the Table
         */
        getRows(): sap.ui.table.Row[];
        /**
         * Gets content of aggregation {@link #getRowSettingsTemplate rowSettingsTemplate}.
         *
         * Template for row settings. A template is decoupled from the row or table. Each time the template's properties
         * or aggregations are changed, the template has to be applied again via `setRowSettingsTemplate` for the
         * changes to take effect.
         */
        getRowSettingsTemplate(): sap.ui.table.RowSettings;
        /**
         * Gets current value of property {@link #getSelectedIndex selectedIndex}.
         *
         * Zero-based index of selected item. Index value for no selection is -1. When multi-selection is enabled
         * and multiple items are selected, the method returns the lead selected item. Sets the zero-based index
         * of the currently selected item. This method removes any previous selections. When the given index is
         * invalid, the call is ignored.
         *
         * Default value is `-1`.
         */
        getSelectedIndex(): number;
        /**
         * Zero-based indices of selected items, wrapped in an array. An empty array means "no selection".
         */
        getSelectedIndices(): number[];
        /**
         * Gets current value of property {@link #getSelectionBehavior selectionBehavior}.
         *
         * Selection behavior of the Table. This property defines whether the row selector is displayed and whether
         * the row, the row selector or both can be clicked to select a row. **Note:** Since the group header visualization
         * relies on the row selectors, the row selectors are always shown if the grouping functionality (depends
         * on table type) is enabled, even if `sap.ui.table.SelectionBehavior.RowOnly` is set.
         *
         * Default value is `RowSelector`.
         */
        getSelectionBehavior(): sap.ui.table.SelectionBehavior;
        /**
         * Gets current value of property {@link #getSelectionMode selectionMode}.
         *
         * Selection mode of the Table. This property controls whether single or multiple rows can be selected and
         * how the selection can be extended. It may also influence the visual appearance. When the selection mode
         * is changed, the current selection is removed. **Note:** Since the group header visualization relies on
         * the row selectors, the row selectors are always shown if the grouping functionality (depends on table
         * type) is enabled, even if `sap.ui.table.SelectionMode.None` is set.
         *
         * Default value is `MultiToggle`.
         */
        getSelectionMode(): sap.ui.table.SelectionMode;
        /**
         * Gets current value of property {@link #getShowColumnVisibilityMenu showColumnVisibilityMenu}.
         *
         * Flag to show or hide the column visibility menu. This menu will get displayed in each generated column
         * header menu. It allows to show or hide columns
         *
         * Default value is `false`.
         */
        getShowColumnVisibilityMenu(): boolean;
        /**
         * Gets current value of property {@link #getShowNoData showNoData}.
         *
         * Flag whether to show the no data overlay or not once the table is empty. If set to false the table will
         * just show a grid of empty cells
         *
         * Default value is `true`.
         */
        getShowNoData(): boolean;
        /**
         * @SINCE 1.21.2
         *
         * Gets current value of property {@link #getShowOverlay showOverlay}.
         *
         * Setting this property to true will show an overlay on top of the Table content and users cannot click
         * anymore on the Table content.
         *
         * Default value is `false`.
         */
        getShowOverlay(): boolean;
        /**
         * Gets sorted columns in the order of which the sort API at the table or column was called. Sorting on
         * binding level is not reflected here.
         * See:
         * 	sap.ui.table.Table#sort
         * 	sap.ui.table.Column#sort
         */
        getSortedColumns(): sap.ui.table.Column[];
        /**
         * Gets current value of property {@link #getThreshold threshold}.
         *
         * The `threshold` defines how many additional (not yet visible records) shall be pre-fetched to enable
         * smooth scrolling. The threshold is always added to the `visibleRowCount`. If the `visibleRowCount` is
         * 10 and the `threshold` is 100, there will be 110 records fetched with the initial load. If the `threshold`
         * is lower than the `visibleRowCount`, the `visibleRowCount` will be used as the `threshold`. If the value
         * is 0 then the thresholding is disabled.
         *
         * Default value is `100`.
         */
        getThreshold(): number;
        /**
         * Gets content of aggregation {@link #getTitle title}.
         *
         * Control or text of title section of the Table (if not set it will be hidden)
         */
        getTitle(): sap.ui.core.Control | string;
        /**
         * @deprecated (since 1.38) - This aggregation is deprecated, use the `extension` aggregation instead.
         *
         * Gets content of aggregation {@link #getToolbar toolbar}.
         *
         * Toolbar of the Table If not set, no toolbar area will be rendered. Note: The CSS class sapMTBHeader-CTX
         * is applied on the given toolbar.
         */
        getToolbar(): sap.ui.core.Toolbar;
        /**
         * Gets current value of property {@link #getVisibleRowCount visibleRowCount}.
         *
         * Number of visible rows of the table.
         *
         * Default value is `10`.
         */
        getVisibleRowCount(): number;
        /**
         * @SINCE 1.9.2
         *
         * Gets current value of property {@link #getVisibleRowCountMode visibleRowCountMode}.
         *
         * Defines how the table handles the visible rows in the table.
         *
         * In the `"Fixed"` mode, the table always has as many rows as defined in the `visibleRowCount` property.
         *
         * In the `"Auto"` mode, the `visibleRowCount` property is changed by the table automatically. It will then
         * adjust its row count to the space it is allowed to cover (limited by the surrounding container), but
         * it cannot have less than defined in the `minAutoRowCount` property. The `visibleRowCount` property cannot
         * be set manually. Limitations:
         * 	 - All rows need to have the same height.
         * 	 - The table must be rendered without siblings in its parent DOM element. The only exception is if the
         * 			parent element is a CSS flex container, and the table is a CSS flex item allowed to grow and shrink.
         *
         *
         * In the `"Interactive"` mode, the table has as many rows as defined in the `visibleRowCount` property
         * after rendering. The user can change the `visibleRowCount` by dragging a resizer.
         *
         * Default value is `Fixed`.
         */
        getVisibleRowCountMode(): sap.ui.table.VisibleRowCountMode;
        /**
         * Gets current value of property {@link #getWidth width}.
         *
         * Width of the Table.
         *
         * Default value is `auto`.
         */
        getWidth(): sap.ui.core.CSSSize;
        /**
         * Checks for the provided `sap.ui.table.Column` in the aggregation {@link #getColumns columns}. and returns
         * its index if found or -1 otherwise.
         */
        indexOfColumn(
          /**
           * The column whose index is looked for
           */
          oColumn: sap.ui.table.Column
        ): number;
        /**
         * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getExtension extension}. and
         * returns its index if found or -1 otherwise.
         */
        indexOfExtension(
          /**
           * The extension whose index is looked for
           */
          oExtension: sap.ui.core.Control
        ): number;
        /**
         * Checks for the provided `sap.ui.table.Row` in the aggregation {@link #getRows rows}. and returns its
         * index if found or -1 otherwise.
         */
        indexOfRow(
          /**
           * The row whose index is looked for
           */
          oRow: sap.ui.table.Row
        ): number;
        /**
         * Inserts a column into the aggregation {@link #getColumns columns}.
         */
        insertColumn(
          /**
           * The column to insert; if empty, nothing is inserted
           */
          oColumn: sap.ui.table.Column,
          /**
           * The `0`-based index the column should be inserted at; for a negative value of `iIndex`, the column is
           * inserted at position 0; for a value greater than the current size of the aggregation, the column is inserted
           * at the last position
           */
          iIndex: number
        ): sap.ui.table.Table;
        /**
         * Inserts a extension into the aggregation {@link #getExtension extension}.
         */
        insertExtension(
          /**
           * The extension to insert; if empty, nothing is inserted
           */
          oExtension: sap.ui.core.Control,
          /**
           * The `0`-based index the extension should be inserted at; for a negative value of `iIndex`, the extension
           * is inserted at position 0; for a value greater than the current size of the aggregation, the extension
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.table.Table;
        /**
         * Inserts a row into the aggregation {@link #getRows rows}.
         */
        insertRow(
          /**
           * The row to insert; if empty, nothing is inserted
           */
          oRow: sap.ui.table.Row,
          /**
           * The `0`-based index the row should be inserted at; for a negative value of `iIndex`, the row is inserted
           * at position 0; for a value greater than the current size of the aggregation, the row is inserted at the
           * last position
           */
          iIndex: number
        ): sap.ui.table.Table;
        /**
         * Checks whether an index is selected.
         */
        isIndexSelected(
          /**
           * Index to check for selection
           */
          iIndex: number
        ): boolean;
        /**
         * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
         */
        removeAllAriaLabelledBy(): sap.ui.core.ID[];
        /**
         * Removes all the controls from the aggregation {@link #getColumns columns}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllColumns(): sap.ui.table.Column[];
        /**
         * Removes all the controls from the aggregation {@link #getExtension extension}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllExtension(): sap.ui.core.Control[];
        /**
         * Removes all the controls from the aggregation {@link #getRows rows}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllRows(): sap.ui.table.Row[];
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
         * Removes a column from the aggregation {@link #getColumns columns}.
         */
        removeColumn(
          /**
           * The column to remove or its index or id
           */
          vColumn: number | string | sap.ui.table.Column
        ): sap.ui.table.Column;
        /**
         * Removes a extension from the aggregation {@link #getExtension extension}.
         */
        removeExtension(
          /**
           * The extension to remove or its index or id
           */
          vExtension: number | string | sap.ui.core.Control
        ): sap.ui.core.Control;
        /**
         * Removes a row from the aggregation {@link #getRows rows}.
         */
        removeRow(
          /**
           * The row to remove or its index or id
           */
          vRow: number | string | sap.ui.table.Row
        ): sap.ui.table.Row;
        /**
         * Removes the given selection interval from the selection. In case of single selection, only `iIndexTo`
         * is removed from the selection.
         */
        removeSelectionInterval(
          /**
           * Index from which the deselection should start
           */
          iIndexFrom: number,
          /**
           * Index up to which to deselect
           */
          iIndexTo: number
        ): sap.ui.table.Table;
        /**
         * Add all rows to the selection. Please note that for server based models like OData the indices which
         * are considered to be selected might not be available at the client yet. Calling getContextByIndex might
         * not return a result but trigger a roundtrip to request this single entity.
         */
        selectAll(): sap.ui.table.Table;
        /**
         * @SINCE 1.52
         *
         * Sets a new value for property {@link #getAlternateRowColors alternateRowColors}.
         *
         * Enables alternating table row colors. Alternate row coloring is not available for the tree mode.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setAlternateRowColors(
          /**
           * New value for property `alternateRowColors`
           */
          bAlternateRowColors: boolean
        ): sap.ui.table.Table;
        /**
         * Sets a new value for property {@link #getColumnHeaderHeight columnHeaderHeight}.
         *
         * Header row height in pixel. If a value greater than 0 is set, it overrides the height defined in the
         * `rowHeight` property for the rows in the table's header. The value defines the minimum height, but it
         * cannot be less than the default height based on the content density configuration. The actual height
         * can increase based on the content.
         *
         * **Note**: In a {@link sap.ui.table.Column#getMultiLabels MultiLabel} scenario, the height is applied
         * to each individual row of the table's header.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setColumnHeaderHeight(
          /**
           * New value for property `columnHeaderHeight`
           */
          iColumnHeaderHeight: number
        ): sap.ui.table.Table;
        /**
         * Sets a new value for property {@link #getColumnHeaderVisible columnHeaderVisible}.
         *
         * Flag whether the column header is visible or not.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setColumnHeaderVisible(
          /**
           * New value for property `columnHeaderVisible`
           */
          bColumnHeaderVisible: boolean
        ): sap.ui.table.Table;
        /**
         * @SINCE 1.54
         *
         * Sets the aggregated {@link #getContextMenu contextMenu}.
         */
        setContextMenu(
          /**
           * The contextMenu to set
           */
          oContextMenu: sap.ui.core.IContextMenu
        ): sap.ui.table.Table;
        /**
         * Sets a new value for property {@link #getEditable editable}.
         *
         * Flag whether the controls of the Table are editable or not (currently this only controls the background
         * color in certain themes!)
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setEditable(
          /**
           * New value for property `editable`
           */
          bEditable: boolean
        ): sap.ui.table.Table;
        /**
         * @SINCE 1.27.0
         *
         * Sets a new value for property {@link #getEnableBusyIndicator enableBusyIndicator}.
         *
         * If set to `true`, the table changes its busy state, resulting in showing or hiding the busy indicator.
         * The table will switch to busy as soon as data is retrieved to be displayed in the currently visible rows.
         * This happens, for example, during scrolling, filtering, or sorting. As soon as the data has been retrieved,
         * the table switches back to not busy. The busy state of the table can still be set manually by calling
         * {@link sap.ui.core.Control#setBusy}.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setEnableBusyIndicator(
          /**
           * New value for property `enableBusyIndicator`
           */
          bEnableBusyIndicator: boolean
        ): sap.ui.table.Table;
        /**
         * @SINCE 1.21.0
         *
         * Sets a new value for property {@link #getEnableCellFilter enableCellFilter}.
         *
         * Flag whether to enable or disable the context menu on cells to trigger a filtering with the cell value.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setEnableCellFilter(
          /**
           * New value for property `enableCellFilter`
           */
          bEnableCellFilter: boolean
        ): sap.ui.table.Table;
        /**
         * @SINCE 1.21.0
         *
         * Sets a new value for property {@link #getEnableColumnFreeze enableColumnFreeze}.
         *
         * Flag whether to show or hide the column menu item to freeze or unfreeze a column.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setEnableColumnFreeze(
          /**
           * New value for property `enableColumnFreeze`
           */
          bEnableColumnFreeze: boolean
        ): sap.ui.table.Table;
        /**
         * Sets a new value for property {@link #getEnableColumnReordering enableColumnReordering}.
         *
         * Flag to enable or disable column reordering
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setEnableColumnReordering(
          /**
           * New value for property `enableColumnReordering`
           */
          bEnableColumnReordering: boolean
        ): sap.ui.table.Table;
        /**
         * @SINCE 1.23.0
         *
         * Sets a new value for property {@link #getEnableCustomFilter enableCustomFilter}.
         *
         * Set this parameter to true to implement your own filter behaviour. Instead of the filter input box a
         * button will be rendered for which' press event (customFilter) you can register an event handler.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setEnableCustomFilter(
          /**
           * New value for property `enableCustomFilter`
           */
          bEnableCustomFilter: boolean
        ): sap.ui.table.Table;
        /**
         * @EXPERIMENTAL (since 1.28)
         *
         * Sets a new value for property {@link #getEnableGrouping enableGrouping}.
         *
         * Enables or disables grouping. If grouping is enabled, the table is grouped by the column which is defined
         * in the `groupBy` association.
         *
         * The following restrictions apply:
         * 	 - Only client models are supported (e.g. {@link sap.ui.model.json.JSONModel}). Grouping does not work
         * 			with OData models.
         * 	 - The table can only be grouped by **one** column at a time. Grouping by another column will remove
         * 			the current grouping.
         * 	 - If grouping has been done, sorting and filtering is not possible. Any existing sorting and filtering
         * 			rules do no longer apply. The UI is not updated accordingly (e.g. menu items, sort and filter icons).
         *
         * 	 - The column, by which the table is grouped, is not visible. It will become visible again only if the
         * 			table is grouped by another column or grouping is disabled.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setEnableGrouping(
          /**
           * New value for property `enableGrouping`
           */
          bEnableGrouping: boolean
        ): sap.ui.table.Table;
        /**
         * @SINCE 1.23.0
         *
         * Sets a new value for property {@link #getEnableSelectAll enableSelectAll}.
         *
         * Specifies if a select all button should be displayed in the top left corner. This button is only displayed
         * if the row selector is visible and the selection mode is set to any kind of multi selection.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setEnableSelectAll(
          /**
           * New value for property `enableSelectAll`
           */
          bEnableSelectAll: boolean
        ): sap.ui.table.Table;
        /**
         * Sets a new value for property {@link #getFirstVisibleRow firstVisibleRow}.
         *
         * First visible row.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `0`.
         */
        setFirstVisibleRow(
          /**
           * New value for property `firstVisibleRow`
           */
          iFirstVisibleRow: number
        ): sap.ui.table.Table;
        /**
         * @SINCE 1.18.7
         *
         * Sets a new value for property {@link #getFixedBottomRowCount fixedBottomRowCount}.
         *
         * Number of rows that are fix on the bottom. When you use a vertical scrollbar, only the rows which are
         * not fixed, will scroll.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `0`.
         */
        setFixedBottomRowCount(
          /**
           * New value for property `fixedBottomRowCount`
           */
          iFixedBottomRowCount: number
        ): sap.ui.table.Table;
        /**
         * Sets a new value for property {@link #getFixedColumnCount fixedColumnCount}.
         *
         * Number of columns that are fixed on the left. Only columns which are not fixed can be scrolled horizontally.
         *
         * **Note**
         * 	 - Fixed columns need a defined width for the feature to work.
         * 	 - The aggregated width of all fixed columns must not exceed the table width. Otherwise the table ignores
         * 			the value of the property and adapts the behavior in an appropriate way to ensure that the user is still
         * 			able to scroll horizontally.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `0`.
         */
        setFixedColumnCount(
          /**
           * New value for property `fixedColumnCount`
           */
          iFixedColumnCount: number
        ): sap.ui.table.Table;
        /**
         * Sets a new value for property {@link #getFixedRowCount fixedRowCount}.
         *
         * Number of rows that are fix on the top. When you use a vertical scrollbar, only the rows which are not
         * fixed, will scroll.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `0`.
         */
        setFixedRowCount(
          /**
           * New value for property `fixedRowCount`
           */
          iFixedRowCount: number
        ): sap.ui.table.Table;
        /**
         * Sets the aggregated {@link #getFooter footer}.
         */
        setFooter(
          /**
           * The footer to set
           */
          vFooter: sap.ui.core.Control | string
        ): sap.ui.table.Table;
        /**
         * @EXPERIMENTAL (since 1.28)
         *
         * Sets the associated {@link #getGroupBy groupBy}.
         */
        setGroupBy(
          /**
           * ID of an element which becomes the new target of this groupBy association; alternatively, an element
           * instance may be given
           */
          oGroupBy: sap.ui.core.ID | sap.ui.table.Column
        ): sap.ui.table.Table;
        /**
         * Sets a new value for property {@link #getMinAutoRowCount minAutoRowCount}.
         *
         * This property is used to set the minimum count of visible rows when the property visibleRowCountMode
         * is set to Auto or Interactive. For any other visibleRowCountMode, it is ignored.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `5`.
         */
        setMinAutoRowCount(
          /**
           * New value for property `minAutoRowCount`
           */
          iMinAutoRowCount: number
        ): sap.ui.table.Table;
        /**
         * @deprecated (since 1.38)
         *
         * Sets a new value for property {@link #getNavigationMode navigationMode}.
         *
         * This property has been deprecated and must not be used anymore, since `Scrollbar` is the only supported
         * option.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Scrollbar`.
         */
        setNavigationMode(
          /**
           * New value for property `navigationMode`
           */
          sNavigationMode: sap.ui.table.NavigationMode
        ): sap.ui.table.Table;
        /**
         * Sets the aggregated {@link #getNoData noData}.
         */
        setNoData(
          /**
           * The noData to set
           */
          vNoData: sap.ui.core.Control | string
        ): sap.ui.table.Table;
        /**
         * @SINCE 1.45.0
         *
         * Sets a new value for property {@link #getRowActionCount rowActionCount}.
         *
         * Number of row actions made visible which determines the width of the row action column. The values `0`,
         * `1` and `2` are possible.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `0`.
         */
        setRowActionCount(
          /**
           * New value for property `rowActionCount`
           */
          iRowActionCount: number
        ): sap.ui.table.Table;
        /**
         * Sets the aggregated {@link #getRowActionTemplate rowActionTemplate}.
         */
        setRowActionTemplate(
          /**
           * The rowActionTemplate to set
           */
          oRowActionTemplate: sap.ui.table.RowAction
        ): sap.ui.table.Table;
        /**
         * Sets a new value for property {@link #getRowHeight rowHeight}.
         *
         * Row height in pixel.
         *
         * In the table's header, it defines the minimum height of the row, but it cannot be less than the default
         * height based on the content density configuration. The actual height can increase based on the content.
         *
         * In the table's body, it defines the height of the row content. The actual row height is also influenced
         * by other factors, such as the border width. If the `visibleRowCountMode` property is set to {@link sap.ui.table.VisibleRowCountMode.Fixed
         * Fixed} or {@link sap.ui.table.VisibleRowCountMode.Interactive Interactive}, the value defines the minimum
         * height, and the actual height can increase based on the content. If the mode is {@link sap.ui.table.VisibleRowCountMode.Auto
         * Auto}, the value defines the actual height, and any content that doesn't fit is cut off.
         *
         * If no value is set (includes 0), a default height is applied based on the content density configuration.
         * In any `visibleRowCountMode`, the actual height can increase based on the content.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setRowHeight(
          /**
           * New value for property `rowHeight`
           */
          iRowHeight: number
        ): sap.ui.table.Table;
        /**
         * Sets the aggregated {@link #getRowSettingsTemplate rowSettingsTemplate}.
         */
        setRowSettingsTemplate(
          /**
           * The rowSettingsTemplate to set
           */
          oRowSettingsTemplate: sap.ui.table.RowSettings
        ): sap.ui.table.Table;
        /**
         * Sets a new value for property {@link #getSelectedIndex selectedIndex}.
         *
         * Zero-based index of selected item. Index value for no selection is -1. When multi-selection is enabled
         * and multiple items are selected, the method returns the lead selected item. Sets the zero-based index
         * of the currently selected item. This method removes any previous selections. When the given index is
         * invalid, the call is ignored.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `-1`.
         */
        setSelectedIndex(
          /**
           * New value for property `selectedIndex`
           */
          iSelectedIndex: number
        ): sap.ui.table.Table;
        /**
         * Sets a new value for property {@link #getSelectionBehavior selectionBehavior}.
         *
         * Selection behavior of the Table. This property defines whether the row selector is displayed and whether
         * the row, the row selector or both can be clicked to select a row. **Note:** Since the group header visualization
         * relies on the row selectors, the row selectors are always shown if the grouping functionality (depends
         * on table type) is enabled, even if `sap.ui.table.SelectionBehavior.RowOnly` is set.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `RowSelector`.
         */
        setSelectionBehavior(
          /**
           * New value for property `selectionBehavior`
           */
          sSelectionBehavior: sap.ui.table.SelectionBehavior
        ): sap.ui.table.Table;
        /**
         * Sets the given selection interval as selection. In case of single selection, only `iIndexTo` is selected.
         */
        setSelectionInterval(
          /**
           * Index from which the selection should start
           */
          iIndexFrom: number,
          /**
           * Index up to which to select
           */
          iIndexTo: number
        ): sap.ui.table.Table;
        /**
         * Sets the selection mode. The current selection is lost.
         */
        setSelectionMode(
          /**
           * the selection mode, see sap.ui.table.SelectionMode
           */
          sSelectionMode: sap.ui.table.SelectionMode
        ): sap.ui.table.Table;
        /**
         * Sets a new value for property {@link #getShowColumnVisibilityMenu showColumnVisibilityMenu}.
         *
         * Flag to show or hide the column visibility menu. This menu will get displayed in each generated column
         * header menu. It allows to show or hide columns
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setShowColumnVisibilityMenu(
          /**
           * New value for property `showColumnVisibilityMenu`
           */
          bShowColumnVisibilityMenu: boolean
        ): sap.ui.table.Table;
        /**
         * Sets a new value for property {@link #getShowNoData showNoData}.
         *
         * Flag whether to show the no data overlay or not once the table is empty. If set to false the table will
         * just show a grid of empty cells
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setShowNoData(
          /**
           * New value for property `showNoData`
           */
          bShowNoData: boolean
        ): sap.ui.table.Table;
        /**
         * @SINCE 1.21.2
         *
         * Sets a new value for property {@link #getShowOverlay showOverlay}.
         *
         * Setting this property to true will show an overlay on top of the Table content and users cannot click
         * anymore on the Table content.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setShowOverlay(
          /**
           * New value for property `showOverlay`
           */
          bShowOverlay: boolean
        ): sap.ui.table.Table;
        /**
         * Sets the threshold value, which will be added to all data requests in case the Table is bound against
         * an OData service.
         */
        setThreshold(
          /**
           * The threshold
           */
          iThreshold: number
        ): sap.ui.table.Table;
        /**
         * Sets the aggregated {@link #getTitle title}.
         */
        setTitle(
          /**
           * The title to set
           */
          vTitle: sap.ui.core.Control | string
        ): sap.ui.table.Table;
        /**
         * @deprecated (since 1.38) - This aggregation is deprecated, use the `extension` aggregation instead.
         *
         * Sets the aggregated {@link #getToolbar toolbar}.
         */
        setToolbar(
          /**
           * The toolbar to set
           */
          oToolbar: sap.ui.core.Toolbar
        ): sap.ui.table.Table;
        /**
         * Sets a new tooltip for this object. The tooltip can either be a simple string (which in most cases will
         * be rendered as the `title` attribute of this Element) or an instance of {@link sap.ui.core.TooltipBase}.
         *
         * If a new tooltip is set, any previously set tooltip is deactivated.
         *
         * Please note that tooltips are not rendered for the table. The tooltip property will be set but it won't
         * effect the DOM.
         */
        // @ts-ignore
        setTooltip(
          /**
           * The tooltip
           */
          vTooltip: string | sap.ui.core.TooltipBase
        ): sap.ui.table.Table;
        /**
         * Sets a new value for property {@link #getVisibleRowCount visibleRowCount}.
         *
         * Number of visible rows of the table.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `10`.
         */
        setVisibleRowCount(
          /**
           * New value for property `visibleRowCount`
           */
          iVisibleRowCount: number
        ): sap.ui.table.Table;
        /**
         * @SINCE 1.9.2
         *
         * Sets a new value for property {@link #getVisibleRowCountMode visibleRowCountMode}.
         *
         * Defines how the table handles the visible rows in the table.
         *
         * In the `"Fixed"` mode, the table always has as many rows as defined in the `visibleRowCount` property.
         *
         * In the `"Auto"` mode, the `visibleRowCount` property is changed by the table automatically. It will then
         * adjust its row count to the space it is allowed to cover (limited by the surrounding container), but
         * it cannot have less than defined in the `minAutoRowCount` property. The `visibleRowCount` property cannot
         * be set manually. Limitations:
         * 	 - All rows need to have the same height.
         * 	 - The table must be rendered without siblings in its parent DOM element. The only exception is if the
         * 			parent element is a CSS flex container, and the table is a CSS flex item allowed to grow and shrink.
         *
         *
         * In the `"Interactive"` mode, the table has as many rows as defined in the `visibleRowCount` property
         * after rendering. The user can change the `visibleRowCount` by dragging a resizer.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Fixed`.
         */
        setVisibleRowCountMode(
          /**
           * New value for property `visibleRowCountMode`
           */
          sVisibleRowCountMode: sap.ui.table.VisibleRowCountMode
        ): sap.ui.table.Table;
        /**
         * Sets a new value for property {@link #getWidth width}.
         *
         * Width of the Table.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `auto`.
         */
        setWidth(
          /**
           * New value for property `width`
           */
          sWidth: sap.ui.core.CSSSize
        ): sap.ui.table.Table;
        /**
         * Sorts the given column ascending or descending.
         */
        sort(
          /**
           * Column to be sorted or undefined to clear sorting
           */
          oColumn: sap.ui.table.Column | undefined,
          /**
           * Sort order of the column (if undefined the default will be ascending)
           */
          oSortOrder: sap.ui.table.SortOrder,
          /**
           * Set to true to add the new sort criterion to the existing sort criteria
           */
          bAdd: Boolean
        ): void;
        /**
         * Unbinds aggregation {@link #getColumns columns} from model data.
         */
        unbindColumns(): sap.ui.table.Table;
        /**
         * Unbinds aggregation {@link #getRows rows} from model data.
         */
        unbindRows(): sap.ui.table.Table;
        /**
         * @SINCE 1.54
         *
         * Attaches event handler `fnFunction` to the {@link #event:beforeOpenContextMenu beforeOpenContextMenu}
         * event of this `sap.ui.table.Table`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.table.Table` itself.
         *
         * Fired when the user requests the context menu for a table cell.
         */
        attachBeforeOpenContextMenu(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
           */
          oListener?: object
        ): sap.ui.table.Table;
        /**
         * @SINCE 1.37.0
         *
         * Attaches event handler `fnFunction` to the {@link #event:busyStateChanged busyStateChanged} event of
         * this `sap.ui.table.Table`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.table.Table` itself.
         *
         * This event gets fired when the busy state of the table changes. It should only be used by composite controls.
         */
        attachBusyStateChanged(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
           */
          oListener?: object
        ): sap.ui.table.Table;
        /**
         * @SINCE 1.21.0
         *
         * Attaches event handler `fnFunction` to the {@link #event:cellClick cellClick} event of this `sap.ui.table.Table`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.table.Table` itself.
         *
         * fired when the user clicks a cell of the table (experimental!).
         */
        attachCellClick(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
           */
          oListener?: object
        ): sap.ui.table.Table;
        /**
         * @SINCE 1.21.0
         * @deprecated (since 1.54) - replaced by `beforeOpenContextMenu`.
         *
         * Attaches event handler `fnFunction` to the {@link #event:cellContextmenu cellContextmenu} event of this
         * `sap.ui.table.Table`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.table.Table` itself.
         *
         * fired when the user clicks a cell of the table.
         */
        attachCellContextmenu(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
           */
          oListener?: object
        ): sap.ui.table.Table;
        /**
         * @SINCE 1.21.0
         *
         * Attaches event handler `fnFunction` to the {@link #event:columnFreeze columnFreeze} event of this `sap.ui.table.Table`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.table.Table` itself.
         *
         * fired when a column of the table should be freezed
         */
        attachColumnFreeze(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
           */
          oListener?: object
        ): sap.ui.table.Table;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:columnMove columnMove} event of this `sap.ui.table.Table`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.table.Table` itself.
         *
         * fired when a table column is moved.
         */
        attachColumnMove(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
           */
          oListener?: object
        ): sap.ui.table.Table;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:columnResize columnResize} event of this `sap.ui.table.Table`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.table.Table` itself.
         *
         * fired when a table column is resized.
         */
        attachColumnResize(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
           */
          oListener?: object
        ): sap.ui.table.Table;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:columnSelect columnSelect} event of this `sap.ui.table.Table`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.table.Table` itself.
         *
         * fired when a column of the table has been selected
         */
        attachColumnSelect(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
           */
          oListener?: object
        ): sap.ui.table.Table;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:columnVisibility columnVisibility} event of
         * this `sap.ui.table.Table`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.table.Table` itself.
         *
         * fired when the visibility of a table column is changed.
         */
        attachColumnVisibility(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
           */
          oListener?: object
        ): sap.ui.table.Table;
        /**
         * @SINCE 1.23.0
         *
         * Attaches event handler `fnFunction` to the {@link #event:customFilter customFilter} event of this `sap.ui.table.Table`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.table.Table` itself.
         *
         * This event is triggered when the custom filter item of the column menu is pressed. The column on which
         * the event was triggered is passed as parameter.
         */
        attachCustomFilter(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
           */
          oListener?: object
        ): sap.ui.table.Table;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:filter filter} event of this `sap.ui.table.Table`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.table.Table` itself.
         *
         * fired when the table is filtered.
         */
        attachFilter(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
           */
          oListener?: object
        ): sap.ui.table.Table;
        /**
         * @SINCE 1.37.0
         *
         * Attaches event handler `fnFunction` to the {@link #event:firstVisibleRowChanged firstVisibleRowChanged}
         * event of this `sap.ui.table.Table`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.table.Table` itself.
         *
         * This event gets fired when the first visible row is changed. It should only be used by composite controls.
         * The event even is fired when setFirstVisibleRow is called programmatically.
         */
        attachFirstVisibleRowChanged(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
           */
          oListener?: object
        ): sap.ui.table.Table;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:group group} event of this `sap.ui.table.Table`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.table.Table` itself.
         *
         * fired when the table is grouped (experimental!).
         */
        attachGroup(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
           */
          oListener?: object
        ): sap.ui.table.Table;
        /**
         * @SINCE 1.60
         *
         * Attaches event handler `fnFunction` to the {@link #event:paste paste} event of this `sap.ui.table.Table`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.table.Table` itself.
         *
         * This event gets fired when the user performs paste from clipboard on the table. Paste action can be performed
         * from the context menu or with CTRL-V keyboard key combination.
         */
        attachPaste(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
           */
          oListener?: object
        ): sap.ui.table.Table;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:rowSelectionChange rowSelectionChange} event
         * of this `sap.ui.table.Table`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.table.Table` itself.
         *
         * fired when the row selection of the table has been changed (the event parameters can be used to determine
         * selection changes - to find out the selected rows you should better use the table selection API)
         */
        attachRowSelectionChange(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
           */
          oListener?: object
        ): sap.ui.table.Table;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:sort sort} event of this `sap.ui.table.Table`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.table.Table` itself.
         *
         * fired when the table is sorted.
         */
        attachSort(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.table.Table` itself
           */
          oListener?: object
        ): sap.ui.table.Table;
      }
      /**
       * @SINCE 1.21.1
       *
       * The TablePersoController can be used to connect a table with a persistence service.
       */
      // @ts-ignore - static "getMetadata" inheritance issue
      class TablePersoController extends sap.ui.base.ManagedObject {
        /**
         * Constructor for a new TablePersoController.
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
          mSettings?: object
        );

        /**
         * Creates a new subclass of class sap.ui.table.TablePersoController with name `sClassName` and enriches
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
         * Gets current value of property {@link #getAutoSave autoSave}.
         *
         * Auto save state
         *
         * Default value is `true`.
         */
        getAutoSave(): boolean;
        /**
         * Gets current value of property {@link #getCustomDataKey customDataKey}.
         *
         * By defining a custom data key the `TablePersoController` will try to get the key for saving the perso
         * data from the custom data of the Table and Column instead of creating it by concatenating the ID of the
         * Table and the Column. Basically this will be more stable than using the auto IDs.
         *
         * Default value is `persoKey`.
         */
        getCustomDataKey(): string;
        /**
         * Returns a metadata object for class sap.ui.table.TablePersoController.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getPersoService persoService}.
         *
         * Personalization Service object. Needs to have the following methods:
         * 	 - getPersData() : `jQuery Promise` (http://api.jquery.com/promise/)
         * 	 - setPersData(oBundle) : `jQuery Promise` (http://api.jquery.com/promise/)
         * 	 - delPersData() : `jQuery Promise` (http://api.jquery.com/promise/)
         */
        getPersoService(): any;
        /**
         * ID of the element which is the current target of the association {@link #getTable table}, or `null`.
         */
        getTable(): sap.ui.core.ID;
        /**
         * @EXPERIMENTAL (since 1.21.2)
         *
         * Opens the personalization dialog for the Table to modify the visibility and the order of the columns.
         *
         * Using this functionality will require to load the sap.m library because the personalization dialog
         * is only available in this library for now.
         */
        openDialog(mSettings: object): void;
        /**
         * Refresh the personalizations (reloads data from service).
         */
        refresh(): any;
        /**
         * Saves the current personalization state.
         */
        savePersonalizations(): any;
        /**
         * Sets a new value for property {@link #getAutoSave autoSave}.
         *
         * Auto save state
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setAutoSave(
          /**
           * New value for property `autoSave`
           */
          bAutoSave: boolean
        ): sap.ui.table.TablePersoController;
        /**
         * Sets a new value for property {@link #getCustomDataKey customDataKey}.
         *
         * By defining a custom data key the `TablePersoController` will try to get the key for saving the perso
         * data from the custom data of the Table and Column instead of creating it by concatenating the ID of the
         * Table and the Column. Basically this will be more stable than using the auto IDs.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `persoKey`.
         */
        setCustomDataKey(
          /**
           * New value for property `customDataKey`
           */
          sCustomDataKey: string
        ): sap.ui.table.TablePersoController;
        /**
         * Sets a new value for property {@link #getPersoService persoService}.
         *
         * Personalization Service object. Needs to have the following methods:
         * 	 - getPersData() : `jQuery Promise` (http://api.jquery.com/promise/)
         * 	 - setPersData(oBundle) : `jQuery Promise` (http://api.jquery.com/promise/)
         * 	 - delPersData() : `jQuery Promise` (http://api.jquery.com/promise/)
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setPersoService(
          /**
           * New value for property `persoService`
           */
          oPersoService: any
        ): sap.ui.table.TablePersoController;
        /**
         * Sets the associated {@link #getTable table}.
         */
        setTable(
          /**
           * ID of an element which becomes the new target of this table association; alternatively, an element instance
           * may be given
           */
          oTable: sap.ui.core.ID | sap.ui.table.Table
        ): sap.ui.table.TablePersoController;
      }
      /**
       * The TreeTable control provides a comprehensive set of features to display hierarchical data.
       */
      class TreeTable extends sap.ui.table.Table {
        /**
         * Constructor for a new TreeTable.
         *
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
         * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
         * of the syntax of the settings object.
         * See:
         * 	{@link topic:08197fa68e4f479cbe30f639cc1cd22c sap.ui.table}
         * 	{@link topic:148892ff9aea4a18b912829791e38f3e Tables: Which One Should I Choose?}
         * 	{@link fiori:/tree-table/ Tree Table}
         */
        constructor(
          /**
           * id for the new control, generated automatically if no id is given
           */
          sId?: string,
          /**
           * initial settings for the new control
           */
          mSettings?: TreeTableOpts
        );

        /**
         * Marks a range of tree nodes as selected, starting with iFromIndex going to iToIndex. The TreeNodes are
         * referenced via their absolute row index. Please be aware, that the absolute row index only applies to
         * the tree which is visualized by the TreeTable. Invisible nodes (collapsed child nodes) will not be regarded.
         *
         * Please also take notice of the fact, that "addSelectionInterval" does not change any other selection.
         * To override the current selection, please use "setSelctionInterval" or for a single entry use "setSelectedIndex".
         */
        // @ts-ignore
        addSelectionInterval(
          /**
           * The starting index of the range which will be selected.
           */
          iFromIndex: number,
          /**
           * The starting index of the range which will be selected.
           */
          iToIndex: number
        ): sap.ui.table.TreeTable;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:toggleOpenState toggleOpenState} event of this
         * `sap.ui.table.TreeTable`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.table.TreeTable` itself.
         *
         * Fired when a row has been expanded or collapsed by user interaction. Only available in hierarchical mode.
         */
        attachToggleOpenState(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.table.TreeTable` itself
           */
          oListener?: object
        ): sap.ui.table.TreeTable;
        /**
         * Clears the complete selection (all tree table rows/nodes will lose their selection)
         */
        // @ts-ignore
        clearSelection(): sap.ui.table.TreeTable;
        /**
         * Collapses one or more rows.
         */
        collapse(
          /**
           * A single index or an array of indices of the rows to be collapsed
           */
          vRowIndex: number | number[]
        ): sap.ui.table.TreeTable;
        /**
         * Collapses all nodes (and lower if collapseRecursive is activated)
         */
        collapseAll(): sap.ui.table.TreeTable;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:toggleOpenState toggleOpenState} event of
         * this `sap.ui.table.TreeTable`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachToggleOpenState(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.table.TreeTable;
        /**
         * Expands one or more rows.
         */
        expand(
          /**
           * A single index or an array of indices of the rows to be expanded
           */
          vRowIndex: number | number[]
        ): sap.ui.table.TreeTable;
        /**
         * Expands all nodes starting from the root level to the given level 'iLevel'.
         *
         * Only supported with ODataModel v2, when running in OperationMode.Client or OperationMode.Auto. Fully
         * supported for `sap.ui.model.ClientTreeBinding`, e.g. if you are using a `sap.ui.model.json.JSONModel`.
         *
         * Please also see `sap.ui.model.odata.OperationMode`.
         */
        expandToLevel(
          /**
           * the level to which the trees shall be expanded
           */
          iLevel: number
        ): sap.ui.table.TreeTable;
        /**
         * Creates a new subclass of class sap.ui.table.TreeTable with name `sClassName` and enriches it with the
         * information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.table.Table.extend}.
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
         * Fires event {@link #event:toggleOpenState toggleOpenState} to attached listeners.
         */
        fireToggleOpenState(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * Index of the expanded/collapsed row
             */
            rowIndex?: number;
            /**
             * Binding context of the expanded/collapsed row
             */
            rowContext?: object;
            /**
             * Flag that indicates whether the row has been expanded or collapsed
             */
            expanded?: boolean;
          }
        ): sap.ui.table.TreeTable;
        /**
         * Gets current value of property {@link #getCollapseRecursive collapseRecursive}.
         *
         * Setting collapseRecursive to true means, that when collapsing a node all subsequent child nodes will
         * also be collapsed. This property is only supported with sap.ui.model.odata.v2.ODataModel. **Note:** collapseRecursive
         * is currently **not** supported if your OData service exposes the hierarchy annotation `hierarchy-descendant-count-for`.
         * In this case the value of the collapseRecursive property is ignored. For more information about the OData
         * hierarchy annotations, please see the **SAP Annotations for OData Version 2.0** specification.
         *
         * Default value is `true`.
         */
        getCollapseRecursive(): boolean;
        /**
         * @deprecated (since 1.28)
         *
         * The property `enableGrouping` is not supported by the `TreeTable` control.
         */
        // @ts-ignore
        getEnableGrouping(): void;
        /**
         * @deprecated (since 1.46.3) - replaced by the corresponding binding parameter `numberOfExpandedLevels`.
         *
         * Gets current value of property {@link #getExpandFirstLevel expandFirstLevel}.
         *
         * Specifies whether the first level is expanded.
         *
         * The value of the property is only taken into account if no parameter `numberOfExpandedLevels` is given
         * in the binding information. Changes to this property after the table is bound do not have any effect
         * unless an explicit (re-)bind of the `rows` aggregation is done.
         *
         * Example:
         * ```javascript
         *
         *   oTable.bindRows({
         *     path: "...",
         *     parameters: {
         *       numberOfExpandedLevels: 1
         *     }
         *   });
         * ```
         *
         *
         * Default value is `false`.
         */
        getExpandFirstLevel(): boolean;
        /**
         * @deprecated (since 1.28)
         *
         * The `groupBy` association is not supported by the `TreeTable` control.
         */
        // @ts-ignore
        getGroupBy(): void;
        /**
         * Gets current value of property {@link #getGroupHeaderProperty groupHeaderProperty}.
         *
         * The property name of the rows data which will be displayed as a group header if the group mode is enabled
         */
        getGroupHeaderProperty(): string;
        /**
         * Returns a metadata object for class sap.ui.table.TreeTable.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getRootLevel rootLevel}.
         *
         * The root level is the level of the topmost tree nodes, which will be used as an entry point for OData
         * services. This property is only supported when the TreeTable uses an underlying odata services with hierarchy
         * annotations. This property is only supported with sap.ui.model.odata.v2.ODataModel The hierarchy annotations
         * may also be provided locally as a parameter for the ODataTreeBinding.
         *
         * Default value is `0`.
         */
        getRootLevel(): number;
        /**
         * Retrieves the lead selection index. The lead selection index is, among other things, used to determine
         * the start/end of a selection range, when using Shift-Click to select multiple entries at once.
         */
        // @ts-ignore
        getSelectedIndex(): number;
        /**
         * Returns an array containing the row indices of all selected tree nodes (ordered ascending).
         *
         * Please be aware of the following: Due to performance/network traffic reasons, the getSelectedIndices
         * function returns only all indices of actually selected rows/tree nodes. Unknown rows/nodes (as in "not
         * yet loaded" to the client), will not be returned.
         */
        // @ts-ignore
        getSelectedIndices(): number[];
        /**
         * Gets current value of property {@link #getUseGroupMode useGroupMode}.
         *
         * If group mode is enabled nodes with subitems are rendered as if they were group headers. This can be
         * used to do the grouping for an OData service on the backend and visualize this in a table.
         *
         * Default value is `false`.
         */
        getUseGroupMode(): boolean;
        /**
         * Checks whether the row is expanded or collapsed.
         */
        isExpanded(
          /**
           * The index of the row to be checked
           */
          iRowIndex: number
        ): boolean;
        /**
         * Checks if the row at the given index is selected.
         */
        // @ts-ignore
        isIndexSelected(
          /**
           * The row index for which the selection state should be retrieved
           */
          iRowIndex: number
        ): boolean;
        /**
         * All rows/tree nodes inside the range (including boundaries) will be deselected. Tree nodes are referenced
         * with theit absolute row index inside the tree- Please be aware, that the absolute row index only applies
         * to the tree which is visualized by the TreeTable. Invisible nodes (collapsed child nodes) will not be
         * regarded.
         */
        // @ts-ignore
        removeSelectionInterval(
          /**
           * The starting index of the range which will be deselected.
           */
          iFromIndex: number,
          /**
           * The starting index of the range which will be deselected.
           */
          iToIndex: number
        ): sap.ui.table.TreeTable;
        /**
         * Selects all available nodes/rows.
         *
         * All rows/tree nodes that are locally stored on the client and that are part of the currently visible
         * tree are selected. Additional rows or tree nodes that come into view through scrolling or paging are
         * also selected immediately as soon as they get visible. However, `SelectAll` does not retrieve any data
         * from the back end in order to improve performance and reduce the network traffic.
         */
        // @ts-ignore
        selectAll(): sap.ui.table.TreeTable;
        /**
         * Sets a new value for property {@link #getCollapseRecursive collapseRecursive}.
         *
         * Setting collapseRecursive to true means, that when collapsing a node all subsequent child nodes will
         * also be collapsed. This property is only supported with sap.ui.model.odata.v2.ODataModel. **Note:** collapseRecursive
         * is currently **not** supported if your OData service exposes the hierarchy annotation `hierarchy-descendant-count-for`.
         * In this case the value of the collapseRecursive property is ignored. For more information about the OData
         * hierarchy annotations, please see the **SAP Annotations for OData Version 2.0** specification.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setCollapseRecursive(
          /**
           * New value for property `collapseRecursive`
           */
          bCollapseRecursive: boolean
        ): sap.ui.table.TreeTable;
        /**
         * @deprecated (since 1.28) - To get a group-like visualization the `useGroupMode` property can be used.
         *
         * The property `enableGrouping` is not supported by the `TreeTable` control.
         * See:
         * 	sap.ui.table.TreeTable#setUseGroupMode
         */
        // @ts-ignore
        setEnableGrouping(): sap.ui.table.TreeTable;
        /**
         * @deprecated (since 1.46.3) - replaced by the corresponding binding parameter `numberOfExpandedLevels`.
         *
         * Sets a new value for property {@link #getExpandFirstLevel expandFirstLevel}.
         *
         * Specifies whether the first level is expanded.
         *
         * The value of the property is only taken into account if no parameter `numberOfExpandedLevels` is given
         * in the binding information. Changes to this property after the table is bound do not have any effect
         * unless an explicit (re-)bind of the `rows` aggregation is done.
         *
         * Example:
         * ```javascript
         *
         *   oTable.bindRows({
         *     path: "...",
         *     parameters: {
         *       numberOfExpandedLevels: 1
         *     }
         *   });
         * ```
         *
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setExpandFirstLevel(
          /**
           * New value for property `expandFirstLevel`
           */
          bExpandFirstLevel: boolean
        ): sap.ui.table.TreeTable;
        /**
         * Setter for property `fixedRowCount`.
         *
         * **This property is not supportd for the TreeTable and will be ignored!**
         *
         * Default value is `0`
         */
        // @ts-ignore
        setFixedRowCount(
          /**
           * New value for property `fixedRowCount`
           */
          iRowCount: number
        ): sap.ui.table.TreeTable;
        /**
         * @deprecated (since 1.28)
         *
         * The `groupBy` association is not supported by the `TreeTable` control.
         */
        // @ts-ignore
        setGroupBy(): sap.ui.table.TreeTable;
        /**
         * Sets a new value for property {@link #getGroupHeaderProperty groupHeaderProperty}.
         *
         * The property name of the rows data which will be displayed as a group header if the group mode is enabled
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setGroupHeaderProperty(
          /**
           * New value for property `groupHeaderProperty`
           */
          sGroupHeaderProperty: string
        ): sap.ui.table.TreeTable;
        /**
         * Sets a new value for property {@link #getRootLevel rootLevel}.
         *
         * The root level is the level of the topmost tree nodes, which will be used as an entry point for OData
         * services. This property is only supported when the TreeTable uses an underlying odata services with hierarchy
         * annotations. This property is only supported with sap.ui.model.odata.v2.ODataModel The hierarchy annotations
         * may also be provided locally as a parameter for the ODataTreeBinding.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `0`.
         */
        setRootLevel(
          /**
           * New value for property `rootLevel`
           */
          iRootLevel: number
        ): sap.ui.table.TreeTable;
        /**
         * Overridden from Table.js base class. In a TreeTable you can only select indices, which correspond to
         * the currently visualized tree. Invisible tree nodes (e.g. collapsed child nodes) can not be selected
         * via Index, because they do not correspond to a TreeTable row.
         */
        // @ts-ignore
        setSelectedIndex(
          /**
           * The row index which will be selected (if existing)
           */
          iRowIndex: number
        ): sap.ui.table.TreeTable;
        /**
         * Sets the selection of the TreeTable to the given range (including boundaries). Beware: The previous selection
         * will be lost/overridden. If this is not wanted, please use "addSelectionInterval" and "removeSelectionInterval".
         */
        // @ts-ignore
        setSelectionInterval(
          /**
           * the start index of the selection range
           */
          iFromIndex: number,
          /**
           * the end index of the selection range
           */
          iToIndex: number
        ): sap.ui.table.TreeTable;
        /**
         * Allows to hide the tree structure (tree icons, indentation) in tree mode (property `useGroupMode` is
         * set to `false`).
         *
         * This option might be useful in some scenarios when actually a tree table must be used but under certain
         * conditions the data is not hierarchical, because it contains leafs only.
         *
         * **Note:** In flat mode the user of the table cannot expand or collapse certain nodes and the hierarchy
         * is not visible to the user. The caller of this function has to ensure to use this option only with non-hierarchical
         * data.
         */
        setUseFlatMode(
          /**
           * If set to `true`, the flat mode is enabled
           */
          bFlat: boolean
        ): sap.ui.table.TreeTable;
        /**
         * Sets a new value for property {@link #getUseGroupMode useGroupMode}.
         *
         * If group mode is enabled nodes with subitems are rendered as if they were group headers. This can be
         * used to do the grouping for an OData service on the backend and visualize this in a table.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setUseGroupMode(
          /**
           * New value for property `useGroupMode`
           */
          bUseGroupMode: boolean
        ): sap.ui.table.TreeTable;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:toggleOpenState toggleOpenState} event of this
         * `sap.ui.table.TreeTable`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.table.TreeTable` itself.
         *
         * Fired when a row has been expanded or collapsed by user interaction. Only available in hierarchical mode.
         */
        attachToggleOpenState(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.table.TreeTable` itself
           */
          oListener?: object
        ): sap.ui.table.TreeTable;
      }
      /**
       * Details about the group event to distinguish between different actions associated with grouping
       */
      enum GroupEventType {
        /**
         * Group Column
         */
        group,
        /**
         * Show grouped column only as group header
         */
        hideGroupedColumn,
        /**
         * Change the group order of the columns. Move column one position down in the group sequence
         */
        moveDown,
        /**
         * Change the group order of the columns. Move column one position up in the group sequence
         */
        moveUp,
        /**
         * Show grouped column also as a column, not just as group header
         */
        showGroupedColumn,
        /**
         * Ungroup Column
         */
        ungroup,
        /**
         * Ungroup All Columns
         */
        ungroupAll
      }
      /**
       * Navigation mode of the table
       */
      enum NavigationMode {
        /**
         * @deprecated (since 1.38) - replaced by {@link sap.ui.table.NavigationMode.Scrollbar}
         *
         * Uses the paginator control. This option must no longer be used. Using a scrollbar is the only navigation
         * mode which is supported by the `sap.ui.table` library. The `navigationMode` property has always been
         * a visual representation. No matter which navigation mode is used, data fetched from an OData service
         * is loaded page-wise.
         */
        Paginator,
        /**
         * Uses the scrollbar control.
         */
        Scrollbar
      }
      /**
       * Row Action types.
       */
      enum RowActionType {
        /**
         * Custom defined Row Action.
         */
        Custom,
        /**
         * Delete Row Action.
         */
        Delete,
        /**
         * Navigation Row Action.
         */
        Navigation
      }
      /**
       * Selection behavior of the table
       */
      enum SelectionBehavior {
        /**
         * Rows can be selected on the complete row.
         */
        Row,
        /**
         * Rows can only be selected on the row (and the selector is hidden).
         */
        RowOnly,
        /**
         * Rows can only be selected on the row selector.
         */
        RowSelector
      }
      /**
       * Selection mode of the table
       */
      enum SelectionMode {
        /**
         * @deprecated (since 1.38) - replaced by {@link sap.ui.table.SelectionMode.MultiToggle}
         *
         * Select multiple rows at a time.
         */
        Multi,
        /**
         * Select multiple rows at a time (toggle behavior).
         */
        MultiToggle,
        /**
         * No rows can be selected.
         */
        None,
        /**
         * Select one row at a time.
         */
        Single
      }
      /**
       * Shared DOM Reference IDs of the table.
       *
       * Contains IDs of shared DOM references, which should be accessible to inheriting controls via getDomRef()
       * function.
       */
      enum SharedDomRef {
        /**
         * The element id of the Horizontal Scroll Bar of the sap.ui.table.Table.
         */
        HorizontalScrollBar,
        /**
         * The element id of the Vertical Scroll Bar of the sap.ui.table.Table.
         */
        VerticalScrollBar
      }
      /**
       * Sort order of a column
       */
      enum SortOrder {
        /**
         * Sort Order: ascending.
         */
        Ascending,
        /**
         * Sort Order: descending.
         */
        Descending
      }
      /**
       * Different modes for setting the auto expand mode on tree or analytical bindings.
       */
      enum TreeAutoExpandMode {}
      /**
       * VisibleRowCountMode of the table
       */
      enum VisibleRowCountMode {
        /**
         * The table automatically fills the height of the surrounding container.
         */
        Auto,
        /**
         * The table always has as many rows as defined in the `visibleRowCount` property.
         */
        Fixed,
        /**
         * The user can change the `visibleRowCount` by dragging a resizer.
         */
        Interactive
      }
    }
  }

  interface IUI5DefineDependencyNames {
    "sap/ui/table/AnalyticalColumn": undefined;

    "sap/ui/table/AnalyticalColumnMenu": undefined;

    "sap/ui/table/AnalyticalTable": undefined;

    "sap/ui/table/Column": undefined;

    "sap/ui/table/ColumnMenu": undefined;

    "sap/ui/table/Row": undefined;

    "sap/ui/table/RowAction": undefined;

    "sap/ui/table/RowActionItem": undefined;

    "sap/ui/table/RowSettings": undefined;

    "sap/ui/table/Table": undefined;

    "sap/ui/table/TablePersoController": undefined;

    "sap/ui/table/TreeTable": undefined;
  }
}
