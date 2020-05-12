/**
 * This is a Beta version of the OpenUI5 TypeScript Signatures.
 * Significant changes may occur in future versions,
 * including potential breaking changes.
 */
// For Library Version: 1.60.14

declare namespace sap {
  namespace ui {
    /**
     * @deprecated (since 1.38)
     *
     * Controls that implement the SAP User Experience (UX) Guidelines 3.0
     */
    namespace ux3 {
      /**
       * @deprecated (since 1.36) - This class was never released for productive use and will never be.
       * @EXPERIMENTAL (since 1.0)
       *
       * Experimental implementation of visual Ux3 Shell personalization / branding.
       *
       * DO NOT USE PRODUCTIVELY!!!
       *
       * Being completely non-generic as of now, this is supposed to facilitate discussions with Ux about the
       * personalization capabilities. Once that concept is more final, we can go for a cleaner implementation,
       * considering the number of configurable properties etc.
       */
      export const ShellPersonalization: undefined;

      /**
       * @deprecated (since 1.38)
       *
       * Marker interface for controls which are suitable as view rendering for a DataSet.
       */
      interface DataSetView {}

      interface ActionBarOpts extends sap.ui.core.ControlOpts {
        /**
         * Keeps track of the actionBars Follow/Unfollow button’s state. Its value is one of - FollowActionState.Default
         * - FollowActionState.Follow - FollowActionState.Hold
         */
        followState?: sap.ui.ux3.FollowActionState;

        /**
         * Indicates whether “Mark for Follow Up” is active
         */
        flagState?: boolean;

        /**
         * Indicates whether “Favorite” is active
         */
        favoriteState?: boolean;

        /**
         * Indicates whether “Update” is active
         */
        updateState?: boolean;

        /**
         * The thing icon uri. Icon will be displayed in Feeder
         */
        thingIconURI?: sap.ui.core.URI;

        /**
         * If true, business actions are rendered as menu items of the 'More' menu button. Otherwise, 'More' menu
         * button is only displayed for overflow and business actions are rendered as inidividual buttons.
         */
        alwaysShowMoreMenu?: boolean;

        /**
         * Indicates whether social action “Update” is shown, default is ‘true’
         */
        showUpdate?: boolean;

        /**
         * Indicates whether social action “Follow” is shown, default is ‘true’
         */
        showFollow?: boolean;

        /**
         * Indicates whether social action “Mark for Follow Up” is shown, default is ‘true’
         */
        showFlag?: boolean;

        /**
         * Indicates whether social action “Favorite” is shown, default is ‘true’
         */
        showFavorite?: boolean;

        /**
         * Indicates whether social action “Open” is shown, default is ‘true’
         */
        showOpen?: boolean;

        /**
         * The minimum width of ActionBar's the social actions part: business action controls have to be rendered
         * outside this area
         */
        dividerWidth?: sap.ui.core.CSSSize;

        /**
         * Fired when any of the social action’s toolbar buttons except ‘Update’ or any of the business action’s
         * menu items resp. buttons is pressed. The selected action can be identified by its id and newState (the
         * latter if applicable only) ‘Follow’ button + menu: id: follow, newState: Follow/Hold/Default ‘Mark for
         * follow up’ button: id: flag, newState: true/false ‘Favorite’ button: id: favorite, newState: true/false
         * ‘Open Thing Inspector’ button id: open Business Actions: id: the ThingAction id
         *
         * For ‘Update’, please refer to event ‘feedSubmit’
         */
        actionSelected?: Function;

        /**
         * Fired when a new feed entry is submitted.
         */
        feedSubmit?: Function;

        /**
         * Displayed on the actionBar's right hand-side, either as menu item under 'More' or as individual buttons
         */
        businessActions?: sap.ui.ux3.ThingAction[] | sap.ui.ux3.ThingAction;
      }

      interface CollectionOpts extends sap.ui.core.ElementOpts {
        /**
         * Name for the collection
         */
        title?: string;

        /**
         * If a collection is editable an edit button will be displayed below the list of items
         */
        editable?: boolean;

        /**
         * Allow multi selection of items in collection
         */
        multiSelection?: boolean;

        /**
         * Fired when ever the selected items changer
         */
        selectionChanged?: Function;

        /**
         * Fires if a property has changed, and the collection inspector needs to do something after that
         */
        propertyChanged?: Function;

        /**
         * Items in the collection
         */
        items?: sap.ui.core.Item[] | sap.ui.core.Item;

        /**
         * Contains all items that are currently selected
         */
        selectedItems?: sap.ui.core.Item[] | string[];
      }

      interface CollectionInspectorOpts extends sap.ui.core.ControlOpts {
        /**
         * Defines if the list of collection items is visible on the left
         */
        sidebarVisible?: boolean;

        /**
         * If set to true, control will fit parents content area
         */
        fitParent?: boolean;

        /**
         * Event is fired if user selects a collection
         */
        collectionSelected?: Function;

        /**
         * Fires when an item in a collection is selected
         */
        itemSelectionChanged?: Function;

        /**
         * Fires when the edit button is clicked
         */
        editCollection?: Function;

        /**
         * Collections which are displayed in the COllectionInspector
         */
        collections?: sap.ui.ux3.Collection[] | sap.ui.ux3.Collection;

        /**
         * All controls that are currently displayed
         */
        content?: sap.ui.core.Control[] | sap.ui.core.Control;

        /**
         * Collection which is currently selected
         */
        selectedCollection?: sap.ui.ux3.Collection | string;
      }

      interface DataSetOpts extends sap.ui.core.ControlOpts {
        /**
         * show Toolbar
         */
        showToolbar?: boolean;

        /**
         * show filter
         */
        showFilter?: boolean;

        /**
         * Show/hide SearchField in Toolbar
         */
        showSearchField?: boolean;

        /**
         * Selection mode of the DataSet
         */
        multiSelect?: boolean;

        /**
         * selection Changed
         */
        selectionChanged?: Function;

        /**
         * Event which is fired when the user triggers a search
         */
        search?: Function;

        /**
         * Aggregation of DataSetItems
         */
        items?: sap.ui.ux3.DataSetItem[] | sap.ui.ux3.DataSetItem;

        /**
         * views
         */
        views?: sap.ui.ux3.DataSetView[] | sap.ui.ux3.DataSetView;

        /**
         * Filter control (e.g. a FacetFilter) for the DataSet
         */
        filter?: sap.ui.core.Control[] | sap.ui.core.Control;

        /**
         * Selected view of the Dataset
         */
        selectedView?: sap.ui.ux3.DataSetView | string;
      }

      interface DataSetItemOpts extends sap.ui.core.ElementOpts {
        /**
         * image
         */
        iconSrc?: sap.ui.core.URI;

        /**
         * title
         */
        title?: string;

        /**
         * checkable
         */
        checkable?: boolean;

        /**
         * subtitle
         */
        subtitle?: string;

        /**
         * Event Fired when Datset item is selected.
         */
        selected?: Function;
      }

      interface DataSetSimpleViewOpts extends sap.ui.core.ControlOpts {
        /**
         * When true the DatSet items are floating containers. When set to false The Items are rendered in a 1 column
         * Layout.
         */
        floating?: boolean;

        /**
         * Name of the View
         */
        name?: string;

        /**
         * Icon source for this view
         */
        icon?: sap.ui.core.URI;

        /**
         * icon: hovered state
         */
        iconHovered?: sap.ui.core.URI;

        /**
         * icon: selected state
         */
        iconSelected?: sap.ui.core.URI;

        /**
         * @SINCE 1.9.2
         *
         * When true and the property floating is true the DatSet items are floating containers filling the whole
         * space of a row.
         */
        responsive?: boolean;

        /**
         * @SINCE 1.9.2
         *
         * When itemMinWidth>0 and the property floating is true the given minimum width in pixels is set to DatSet
         * items. A minimum width must be given when the property responsive is set.
         */
        itemMinWidth?: number;

        /**
         * @SINCE 1.13.0
         *
         * If this value is greater zero only this amount of items is loaded in the first place. New items are loaded
         * automatically when the user scrolls down. The number of items which are reloaded can be defined with
         * the property "reloadItemCount"
         */
        initialItemCount?: number;

        /**
         * @SINCE 1.13.0
         *
         * This number defines the item count which is reloaded on scroll if initialItemCount is enabled.
         */
        reloadItemCount?: number;

        /**
         * @SINCE 1.13.0
         *
         * ID of the DOM Element or jQuery reference to the dom which holds the scrollbar for the dataset
         */
        scrollArea?: any;

        /**
         * @SINCE 1.13.0
         *
         * If the pagination feature is used without specifying a scroll area, a height for the dataset must be
         * defined.
         */
        height?: sap.ui.core.CSSSize;

        /**
         * template
         */
        template?: sap.ui.core.Control;
      }

      interface ExactOpts extends sap.ui.core.ControlOpts {
        /**
         * A title text which is displayed above the result section
         */
        resultText?: string;

        /**
         * Event is fired when the search button is clicked
         */
        search?: Function;

        /**
         * Event which is fired when an attribute is selected or unselected.
         */
        refineSearch?: Function;

        /**
         * Defines the 'Settings' button in the browse section tool bar
         */
        settingsMenu?: sap.ui.commons.Menu;

        /**
         * The attributes which shall be available to refine the search
         */
        attributes?: sap.ui.ux3.ExactAttribute[] | sap.ui.ux3.ExactAttribute;
      }

      interface ExactAreaOpts extends sap.ui.core.ControlOpts {
        /**
         * Specifies whether the tool bar shall be visible
         */
        toolbarVisible?: boolean;

        /**
         * Arbitrary child controls of the content area
         */
        content?: sap.ui.core.Control[] | sap.ui.core.Control;

        /**
         * Tool bar items which shall be shown in the tool bar.
         */
        toolbarItems?:
          | sap.ui.commons.ToolbarItem[]
          | sap.ui.commons.ToolbarItem;
      }

      interface ExactAttributeOpts extends sap.ui.core.ElementOpts {
        /**
         * The attribute name
         */
        text?: string;

        /**
         * Specifies whether the attribute shall be selected
         */
        selected?: boolean;

        /**
         * @SINCE 1.7.0
         *
         * Specifies the width of the corresponding list in pixels. The value must be between 70 and 500.
         */
        width?: number;

        /**
         * @SINCE 1.7.1
         *
         * The order how the sublists of this attribute should be displayed.
         */
        listOrder?: sap.ui.ux3.ExactOrder;

        /**
         * Specifies whether the attribute shall have sub values for visual purposes. The indicator which is a little
         * arrow beside an attribute in the list is computed automatically (getShowSubAttributesIndicator_Computed()
         * of sap.ui.ux3.ExactAttribute). In the case that a supply function is attached, and the supplyActive attribute
         * has value 'true', then the Exact pattern needs a hint if sub attributes are available. The showSubAttributesIndicator
         * attribute is considered then and has to be maintained. If the back-end does not support count-calls,
         * for example, showSubAttributesIndicator should be set to true.
         */
        showSubAttributesIndicator?: boolean;

        /**
         * An example for additional data are database keys
         */
        additionalData?: object;

        /**
         * The supplyAttributes event is only fired if supplyActive has value true which is the default. After firing
         * the event, the attribute is automatically set to false. The idea is that a supply function is called
         * only once when the data is requested. To enable the event again it is possible to manually set the attribute
         * back to true.
         */
        supplyActive?: boolean;

        /**
         * If you want the supply function to be called on every select, you can set the autoActivateSupply attribute
         * to true. In this case, supplyActive is automatically set to true on every unselect.
         */
        autoActivateSupply?: boolean;

        /**
         * A supply function is a handler which is attached to the supplyAttributes event. The event is fired when
         * the corresponding ExactAttribute is selected, it was already selected when a handler is attached or function
         * getAttributes() is called.
         */
        supplyAttributes?: Function;

        /**
         * Values (sub attributes) of this attribute
         */
        attributes?: sap.ui.ux3.ExactAttribute[] | sap.ui.ux3.ExactAttribute;
      }

      interface ExactBrowserOpts extends sap.ui.core.ControlOpts {
        /**
         * Title text in the list area of the Exact Browser. The title is not shown when the property showTopList
         * is set to false.
         */
        title?: string;

        /**
         * Title text in the header of the Exact Browser.
         */
        headerTitle?: string;

        /**
         * @SINCE 1.7.1
         *
         * The order how the sublists of the top level list should be displayed.
         */
        topListOrder?: sap.ui.ux3.ExactOrder;

        /**
         * Enables the close icons of the displayed lists.
         */
        enableListClose?: boolean;

        /**
         * The height of the list area in px.
         */
        listHeight?: number;

        /**
         * Whether the header area of the ExactBrowser should be shown.
         */
        showHeader?: boolean;

        /**
         * @SINCE 1.7.0
         *
         * Whether the top list of the ExactBrowser should be shown. When the property is set to false the application
         * must ensure to select top level attributes appropriately.
         */
        showTopList?: boolean;

        /**
         * Whether the reset functionality should be available in the header area.
         */
        enableReset?: boolean;

        /**
         * @SINCE 1.9.2
         *
         * Whether the save button should be available in the header area.
         */
        enableSave?: boolean;

        /**
         * @SINCE 1.7.0
         *
         * Specifies the width of the top list in pixels. The value must be between 70 and 500.
         */
        topListWidth?: number;

        /**
         * Event is fired when an attribute is selected or unselected.
         */
        attributeSelected?: Function;

        /**
         * Event is fired when an attribute is selected or unselected.
         */
        save?: Function;

        /**
         * The attributes which shall be available.
         */
        attributes?: sap.ui.ux3.ExactAttribute[] | sap.ui.ux3.ExactAttribute;

        /**
         * Menu with options. The menu can not used when the property showTopList is set to false.
         */
        optionsMenu?: sap.ui.commons.Menu;

        /**
         * The successor control of the Exact Browser. The id of this control is used in the ARIA description of
         * the control.
         */
        followUpControl?: sap.ui.core.Control | string;
      }

      interface FacetFilterOpts extends sap.ui.core.ControlOpts {
        /**
         * If the value is "Auto" - the Facet Filter takes the whole available height. If "Fixed" , then the default
         * number of Facet Filter Items (5) is visible.
         */
        visibleItemCountMode?: sap.ui.ux3.VisibleItemCountMode;

        /**
         * Facet Filter list represents the list of the filter values and the title of this list.
         */
        lists?: sap.ui.ux3.FacetFilterList[] | sap.ui.ux3.FacetFilterList;
      }

      interface FacetFilterListOpts extends sap.ui.core.ControlOpts {
        /**
         * The title of this list.
         */
        title?: string;

        /**
         * Specifies whether multiple or single selection is used.
         */
        multiSelect?: boolean;

        /**
         * @SINCE 1.9.0
         *
         * Specifies whether the text values from the additionalText property (see sap.ui.core.ListItems) shall
         * be displayed.
         */
        displaySecondaryValues?: boolean;

        /**
         * Array of type string containing the selected keys.
         */
        selectedKeys?: string[];

        /**
         * Specifies whether the counter for all entries is shown.
         */
        showCounter?: boolean;

        /**
         * On Select event.
         */
        select?: Function;

        /**
         * The filter values that are presented as a list.
         */
        items?: sap.ui.core.ListItem[] | sap.ui.core.ListItem;
      }

      interface FeedOpts extends sap.ui.core.ControlOpts {
        /**
         * The path to the thumbnail image used for the feeder
         */
        feederThumbnailSrc?: sap.ui.core.URI;

        /**
         * The sender of the feeder
         */
        feederSender?: string;

        /**
         * Specifies whether the feed shall be in live mode
         */
        live?: boolean;

        /**
         * Title text of the Feed. If no text is entered "FEED" is displayed.
         */
        title?: string;

        /**
         * Event is fired when the filter is changed
         */
        filterChange?: Function;

        /**
         * Event is fired when the search function on SearchField is triggered
         */
        search?: Function;

        /**
         * Event is fired when a new chunk is added
         */
        chunkAdded?: Function;

        /**
         * Event is fired when an item from the tools MenuButton was selected
         */
        toolsItemSelected?: Function;

        /**
         * Event is fired when the live mode has changed
         */
        toggleLive?: Function;

        /**
         * Items of the filter
         */
        filterItems?: sap.ui.core.ListItem[] | sap.ui.core.ListItem;

        /**
         * The chunks
         */
        chunks?: sap.ui.ux3.FeedChunk[] | sap.ui.ux3.FeedChunk;

        /**
         * MenuItems to open when the tool button is clicked by the user
         */
        toolsMenuItems?: sap.ui.commons.MenuItem[] | sap.ui.commons.MenuItem;
      }

      interface FeedChunkOpts extends sap.ui.core.ControlOpts {
        /**
         * URL to the thumbnail image.
         */
        thumbnailSrc?: sap.ui.core.URI;

        /**
         * The FeedChunk text. @References are supported.
         */
        text?: string;

        /**
         * Sender of the chunk
         */
        sender?: string;

        /**
         * Format is ISO 8601 YYYY-MM-DDThh:mm:ss.sZ, Z meaning the time is in UTC time zone
         */
        timestamp?: string;

        /**
         * Flag if the deletion of the chunk shall be allowed
         */
        deletionAllowed?: boolean;

        /**
         * @deprecated (since 1.4.0) - Not longer used. If a chunk is a comment is determined from hierarchy. If
         * the parent is a chunk it's automatically a comment.
         *
         * This flag changes a FeedChunk into a CommentChunk. In this case, it can not have own comments, furthermore
         * it must be assigned to a FeedChunk.
         */
        commentChunk?: boolean;

        /**
         * URL to the thumbnail image for the comment feeder. This property is optional if the chunk is a sub-control
         * of a feed control. In this case the value of the feed control is used if it's not set. So it must be
         * only set once on the feed control.
         */
        feederThumbnailSrc?: sap.ui.core.URI;

        /**
         * Sender for the comment feeder This property is optional if the chunk is a sub-control of a feed control.
         * In this case the value of the feed control is used if it's not set. So it must be only set once on the
         * feed control.
         */
        feederSender?: string;

        /**
         * Defines whether the entry is flagged. This property is not supported for comment chunks.
         */
        flagged?: boolean;

        /**
         * Defines whether the entry shall be displayed as favorite. This property is not supported for comment
         * chunks.
         */
        favorite?: boolean;

        /**
         * Defines whether the entry shall be shared. This property is not supported for comment chunks.
         */
        shared?: boolean;

        /**
         * If true the flag action is enabled.
         */
        enableFlag?: boolean;

        /**
         * If true the share action is enabled.
         */
        enableShare?: boolean;

        /**
         * If true the comment action is enabled.
         */
        enableComment?: boolean;

        /**
         * If true the inspect action is enabled.
         */
        enableInspect?: boolean;

        /**
         * If true the favorite action is enabled.
         */
        enableFavorite?: boolean;

        /**
         * Event is fired when the deletion button is pressed.
         */
        deleted?: Function;

        /**
         * Event is raised when a comment is added to the entry. This event is not supported for comment chunks.
         */
        commentAdded?: Function;

        /**
         * Event is raised when the user clicks to flag the entry. This event is not supported for comment chunks.
         */
        toggleFlagged?: Function;

        /**
         * Event is fired when the thumbnail or the name of the sender is clicked.
         */
        senderClicked?: Function;

        /**
         * Click on a @-reference
         */
        referenceClicked?: Function;

        /**
         * Event is raised when the user clicks to set the entry as favorite. This event is not supported for comment
         * chunks.
         */
        toggleFavorite?: Function;

        /**
         * Event is fired when the inspect button was pressed
         */
        inspect?: Function;

        /**
         * Event is raised when the user clicks to share the entry. This event is not supported for comment chunks.
         */
        toggleShared?: Function;

        /**
         * Event is fired when an item from the action menu button was selected.
         */
        actionItemSelected?: Function;

        /**
         * Comments on this chunk
         */
        comments?: sap.ui.ux3.FeedChunk[] | sap.ui.ux3.FeedChunk;

        /**
         * MenuItems to open when there is a click on the action menu button
         */
        actionMenuItems?: sap.ui.commons.MenuItem[] | sap.ui.commons.MenuItem;
      }

      interface FeederOpts extends sap.ui.core.ControlOpts {
        /**
         * URL to the thumb nail image This property is optional if the feeder is a sub-control of a feed or a feedChunk
         * control. In this case the value of the feed or feddChunk control is used if it's not set. So it must
         * be only set once on the feed or feedChunk control.
         */
        thumbnailSrc?: sap.ui.core.URI;

        /**
         * The text for the Feeder. @References are supported.
         */
        text?: string;

        /**
         * Type and size of the Feeder
         */
        type?: sap.ui.ux3.FeederType;

        /**
         * This property could be used for costum placeholder. If it is not set, the default text is used.
         */
        placeholderText?: string;

        /**
         * Event is fired when the entered text is submitted
         */
        submit?: Function;
      }

      interface NavigationBarOpts extends sap.ui.core.ControlOpts {
        /**
         * Defines whether the navigation bar shall have top-level appearance
         */
        toplevelVariant?: boolean;

        /**
         * @SINCE 1.36
         *
         * Sets the appearance of the menu items in the overflow menu to uppercase
         */
        overflowItemsToUpperCase?: boolean;

        /**
         * Event is fired when an item is selected by the user
         */
        select?: Function;

        /**
         * If the navigation items need to have a different parent than the NavigationBar, alternatively the associatedItems
         * association can be used. The NavigationBar follows the approach to use the items aggregation. If this
         * aggregation is empty, associatedItems is used.
         */
        items?: sap.ui.ux3.NavigationItem[] | sap.ui.ux3.NavigationItem;

        /**
         * The selected NavigationItem.
         */
        selectedItem?: sap.ui.ux3.NavigationItem | string;

        /**
         * This association is ignored as long as the items aggregation is used; and supposed to be used alternatively
         * when the items should be aggregated by other entities.
         */
        associatedItems?: sap.ui.ux3.NavigationItem[] | string[];
      }

      interface NavigationItemOpts extends sap.ui.core.ItemOpts {
        /**
         * @SINCE 1.9.0
         *
         * Whether the NavigationItem is currently visible. When making NavigationItems invisible at runtime it
         * is the application's responsibility to make sure it is not the currently selected one - or to select
         * another one in this case.
         */
        visible?: boolean;

        /**
         * Defines the link target URL. This property is optional and should only be set when required! The use
         * of the href property is to not only allow users to navigate in-place by left-clicking NavigationItems,
         * but also to allow right-click and then "open in new tab" or "open in new window". As long as href is
         * not set, an empty window will open and stay blank. But when href is set, the new window/tab will load
         * this URL and it is the application's responsibility to display what the user expects (e.g. the Shell,
         * with the respective NavigationItem being selected).
         */
        href?: sap.ui.core.URI;

        /**
         * Any NavigationItems on the next hierarchy level connected to this NavigationItem
         */
        subItems?: sap.ui.ux3.NavigationItem[] | sap.ui.ux3.NavigationItem;
      }

      interface NotificationBarOpts extends sap.ui.core.ControlOpts {
        /**
         * This property displays the bar corresponding to given status
         */
        visibleStatus?: sap.ui.ux3.NotificationBarStatus;

        /**
         * This property enables the bar to be resized by the user.
         */
        resizeEnabled?: boolean;

        /**
         * This property defines if the toggler should be displayed the whole time when the NotificationBar is shown.
         */
        alwaysShowToggler?: boolean;

        /**
         * Event is fired when the bar wants to be displayed depending on given flag. This allows the application
         * to decide what to do.
         */
        display?: Function;

        /**
         * @SINCE 1.12.2
         *
         * This event is thrown when the bar was resized (to the different valid states: Min, Max, Default, None).
         * The event itself can be used from SAPUI5-version 1.12.2 since there was a bug in the previous versions
         * firing this event.
         */
        resize?: Function;

        /**
         * Notifier that shows messages
         */
        messageNotifier?: sap.ui.core.Element;

        /**
         * Notifiers that monitor something within the application and display the corresponding notifications.
         */
        notifiers?: sap.ui.core.Element[] | sap.ui.core.Element;
      }

      interface NotifierOpts extends sap.ui.core.ElementOpts {
        /**
         * Icon of the control that should be displayed within the corresponding bar
         */
        icon?: sap.ui.core.URI;

        /**
         * Defines the title that should be displayed within the opening popup
         */
        title?: string;

        /**
         * Event is fired when a message of the notifiers was selected.
         */
        messageSelected?: Function;

        /**
         * Messages of this notifier.
         */
        messages?: sap.ui.core.Message[] | sap.ui.core.Message;
      }

      interface OverlayOpts extends sap.ui.core.ControlOpts {
        /**
         * Defines whether the 'Open' button shall be visible.
         */
        openButtonVisible?: boolean;

        /**
         * Defines whether the 'Close' button shall be visible.
         */
        closeButtonVisible?: boolean;

        /**
         * Event is fired when the Overlay starts closing.
         */
        close?: Function;

        /**
         * Event is fired when the Overlay is closed.
         */
        closed?: Function;

        /**
         * Event is fired when the 'Open' button of the Overlay is clicked.
         */
        openNew?: Function;

        /**
         * Event is fired when the Overlay is opened.
         */
        open?: Function;
      }

      interface OverlayContainerOpts extends sap.ui.ux3.OverlayOpts {
        /**
         * Aggregation for content
         */
        content?: sap.ui.core.Control[] | sap.ui.core.Control;
      }

      interface OverlayDialogOpts extends sap.ui.ux3.OverlayOpts {
        /**
         * Determines the width of the Overlay Dialog. If the width is set to "auto" it is always 50% of the overlay
         * width.
         */
        width?: sap.ui.core.CSSSize;

        /**
         * Determines the height of the Overlay Dialog. If the height is set to "auto" it is always 50% of the overlay
         * height.
         */
        height?: sap.ui.core.CSSSize;

        /**
         * Content for the OverlayDialog.
         */
        content?: sap.ui.core.Control[] | sap.ui.core.Control;
      }

      interface QuickViewOpts extends sap.ui.commons.CalloutBaseOpts {
        /**
         * Thing type (mandatory) like Account, Material, Employee etc. is displayed in a header at the top part
         * of the QuickView.
         */
        type?: string;

        /**
         * Thing name shown in the header of the QuickView
         */
        firstTitle?: string;

        /**
         * URI to Thing Inspector
         */
        firstTitleHref?: string;

        /**
         * Optional short text shown under the firstTitle
         */
        secondTitle?: string;

        /**
         * URI of the Thing icon image (mandatory). The image is scaled down to the maximal size of 32 pixel (vertical
         * or horizontal).
         */
        icon?: sap.ui.core.URI;

        /**
         * Control width as common CSS-size (px or % as unit, for example).
         */
        width?: sap.ui.core.CSSSize;

        /**
         * Show Action Bar
         */
        showActionBar?: boolean;

        /**
         * Follow State of a Thing
         */
        followState?: sap.ui.ux3.FollowActionState;

        /**
         * State of Flag Action
         */
        flagState?: boolean;

        /**
         * State Of favorite Action
         */
        favoriteState?: boolean;

        /**
         * Favorite action enabled/disabled. If disabled the action will be invisible.
         */
        favoriteActionEnabled?: boolean;

        /**
         * Update action enabled/disabled. If disabled the action will be invisible.
         */
        updateActionEnabled?: boolean;

        /**
         * Follow action enabled/disabled. If disabled the action will be invisible.
         */
        followActionEnabled?: boolean;

        /**
         * Flag action enabled/disabled. If disabled the action will be invisible.
         */
        flagActionEnabled?: boolean;

        /**
         * Open Thing action enabled/disabled. If disabled the action will be invisible.
         */
        openActionEnabled?: boolean;

        /**
         * Action is selected in Action Bar
         */
        actionSelected?: Function;

        /**
         * Fired when a new feed entry is submitted.
         */
        feedSubmit?: Function;

        /**
         * Event is fired when a user clicks on the firstTitle link. Call the preventDefault method of the event
         * object to cancel browser navigation.
         */
        navigate?: Function;

        /**
         * Body content of the QuickView
         */
        content?: sap.ui.core.Element[] | sap.ui.core.Element;

        /**
         * Actions of a Thing
         */
        actions?: sap.ui.ux3.ThingAction[] | sap.ui.ux3.ThingAction;

        /**
         * ActionBar. If no actionBar is set a default ActionBar will be created. In any case, ActionBar is displayed
         * only when the showActionBar property is set to true.
         */
        actionBar?: sap.ui.ux3.ActionBar;
      }

      interface ShellOpts extends sap.ui.core.ControlOpts {
        /**
         * The application title to appear in the left part of the header, usually a company and/or product name.
         * appIcon and appTitle are both optional and can both be set; in this case the icon appears first.
         */
        appTitle?: string;

        /**
         * The URL of the image to appear in the left part of the header, usually a branding image containing a
         * logo and/or product name. appIcon and appTitle are both optional and can both be set; in this case the
         * icon appears first. If the appIcon is set, for accessibility reasons the appIconTooltip must also be
         * set.
         */
        appIcon?: sap.ui.core.URI;

        /**
         * The tooltip of the application icon in the header
         */
        appIconTooltip?: string;

        /**
         * Whether the Logoff button in the header should be displayed or not.
         */
        showLogoutButton?: boolean;

        /**
         * @SINCE 1.9.0
         *
         * The tooltip to be displayed for the Logout Button of the Shell. If not set, a text meaning "Logout" in
         * the current language will be displayed.
         */
        logoutButtonTooltip?: string;

        /**
         * Whether the "Global Search" tool should be displayed or not.
         */
        showSearchTool?: boolean;

        /**
         * @deprecated (since 1.7.2) - According to the current Ux designs, the ThingInspector should NOT be opened
         * like this from the Tool Pane. And technically, the ThingInspector is not a ToolPopup. Instead trigger
         * it from the respective elements in the Shell content.
         *
         * Whether the "Inspector" tool should be displayed or not.
         */
        showInspectorTool?: boolean;

        /**
         * Whether the "Feeder" tool should be displayed or not.
         */
        showFeederTool?: boolean;

        /**
         * Whether the tool area should be displayed at all or not.
         */
        showTools?: boolean;

        /**
         * Whether the pane bar should be displayed at all or not.
         */
        showPane?: boolean;

        /**
         * Defines which header type to be used. Depending on the header type some other functionality might be
         * obsolete.
         */
        headerType?: sap.ui.ux3.ShellHeaderType;

        /**
         * @SINCE 1.12.0
         *
         * Defines which design type is to be used.
         */
        designType?: sap.ui.ux3.ShellDesignType;

        /**
         * The width of the right-hand side pane in pixels. The value must be a non-negative integer. The Shell
         * reserves the right to define a minimum width (currently 50px).
         */
        paneWidth?: number;

        /**
         * @SINCE 1.9.0
         *
         * Whether the Shell content area should have a theme-dependent padding or not.
         */
        applyContentPadding?: boolean;

        /**
         * @SINCE 1.9.0
         *
         * If set to true, the content area has a defined height. This means that any content put inside can use
         * "100%" height in CSS and will then consume all available space. However, if content is larger, scrollbars
         * will appear at the content area of the Shell and not on window level.
         */
        fullHeightContent?: boolean;

        /**
         * @SINCE 1.14.0
         *
         * Whether the Shell header (Title Area + Header Items) can be accessed when an Overlay, OverlayContainer
         * or ThingInspector is open.
         */
        allowOverlayHeaderAccess?: boolean;

        /**
         * Fired when a workset item was selected by the user. The application may populate the sub-items of the
         * given workset item in the event handler, but this must happen synchronously. If this is done, the application
         * is responsible for displaying the correct content for the selected one of the newly created sub-items.
         * The Shell will currently always mark the first sub-item as selected.
         */
        worksetItemSelected?: Function;

        /**
         * An item in the right-hand-side pane bar has been selected, the pane is now visible and can be filled
         * with UI elements.
         */
        paneBarItemSelected?: Function;

        /**
         * Fired when the user clicks the "Log-off" button
         */
        logout?: Function;

        /**
         * Fired when search has been triggered.
         */
        search?: Function;

        /**
         * Fired when a new feed entry is submitted.
         */
        feedSubmit?: Function;

        /**
         * @SINCE 1.12.0
         *
         * Fired after a side pane of the shell is closed. It is also fired, when an open pane is closed by calling
         * setShowPane(false), if and only if the pane was opened before.
         */
        paneClosed?: Function;

        /**
         * The workset items.
         */
        worksetItems?: sap.ui.ux3.NavigationItem[] | sap.ui.ux3.NavigationItem;

        /**
         * The items to appear in the PaneBar.
         */
        paneBarItems?: sap.ui.core.Item[] | sap.ui.core.Item;

        /**
         * The content to appear in the pane area.
         */
        paneContent?: sap.ui.core.Control[] | sap.ui.core.Control;

        /**
         * The content to appear in the main canvas. Each modification of this aggregation leads to a re-rendering
         * of the content area - but not to a re-rendering of the complete Shell.
         */
        content?: sap.ui.core.Control[] | sap.ui.core.Control;

        /**
         * The items which appear in the ToolPalette and are opened as popup when clicked.
         */
        toolPopups?: sap.ui.ux3.ToolPopup[] | sap.ui.ux3.ToolPopup;

        /**
         * Controls to appear in the header next to the logout button. It is recommended to only use controls of
         * type Button, MenuButton and TextView. The respective UI guidelines need to be enforced on a higher level.
         */
        headerItems?: sap.ui.core.Control[] | sap.ui.core.Control;

        /**
         * @SINCE 1.7.0
         *
         * The NotificationBar which should be integrated into the Shell.
         */
        notificationBar?: sap.ui.ux3.NotificationBar;

        /**
         * The ID of the Item that is currently selected. When setting, the NavigationItem itself can be given instead
         * of its ID. There will not be a worksetItemSelected event, the application is responsible to show the
         * proper content according to the newly selected WorksetItem. If the set WorksetItem does not exist in
         * this Shell, the first item (and first sub-item) will be selected after the call. When getting, always
         * the ID is returned, by which the NavigationItem instance can be retrieved.
         */
        selectedWorksetItem?: sap.ui.ux3.NavigationItem | string;
      }

      interface ThingActionOpts extends sap.ui.core.ElementOpts {
        /**
         * text of action
         */
        text?: string;

        /**
         * action enabled (true/false)
         */
        enabled?: boolean;

        /**
         * Event will be fired when the action was triggered.
         */
        select?: Function;
      }

      interface ThingGroupOpts extends sap.ui.core.ElementOpts {
        /**
         * Title of Group
         */
        title?: string;

        /**
         * If Group is used in a column layout the groups spans the all columns if set to true.
         */
        colspan?: boolean;

        /**
         * Content of Group
         */
        content?: sap.ui.core.Control[] | sap.ui.core.Control;

        /**
         * Actions of the groups content
         */
        actions?: sap.ui.ux3.ThingGroup[] | sap.ui.ux3.ThingGroup;
      }

      interface ThingInspectorOpts extends sap.ui.ux3.OverlayOpts {
        /**
         * First Line of the Thing Inspector Title
         */
        firstTitle?: string;

        /**
         * Thing type
         */
        type?: string;

        /**
         * Thing Icon Url
         */
        icon?: sap.ui.core.URI;

        /**
         * Second Line of the Thing Inspector Title
         */
        secondTitle?: string;

        /**
         * Follow State of a Thing
         */
        followState?: sap.ui.ux3.FollowActionState;

        /**
         * State of Flag Action
         */
        flagState?: boolean;

        /**
         * State Of favorite Action
         */
        favoriteState?: boolean;

        /**
         * Favorite action enabled/disabled. If disabled the action will be invisible.
         */
        favoriteActionEnabled?: boolean;

        /**
         * Update action enabled/disabled. If disabled the action will be invisible.
         */
        updateActionEnabled?: boolean;

        /**
         * Follow action enabled/disabled. If disabled the action will be invisible.
         */
        followActionEnabled?: boolean;

        /**
         * Flag action enabled/disabled. If disabled the action will be invisible.
         */
        flagActionEnabled?: boolean;

        /**
         * @SINCE 1.16.3
         *
         * Defines which header type should be used.
         */
        headerType?: sap.ui.ux3.ThingViewerHeaderType;

        /**
         * Further thing related Action selected
         */
        actionSelected?: Function;

        /**
         * Event for facet selection. The application is responsible for displaying the correct content for the
         * selected one. The ThingInspector will currently always mark the first facet as selected.
         */
        facetSelected?: Function;

        /**
         * Fired when a new feed entry is submitted.
         */
        feedSubmit?: Function;

        /**
         * Actions of a Thing
         */
        actions?: sap.ui.ux3.ThingAction[] | sap.ui.ux3.ThingAction;

        /**
         * ThingGroups for the header content
         */
        headerContent?: sap.ui.ux3.ThingGroup[] | sap.ui.ux3.ThingGroup;

        /**
         * Thing Inspector facets
         */
        facets?: sap.ui.ux3.NavigationItem[] | sap.ui.ux3.NavigationItem;

        /**
         * ThingGroups for content of the selected facet
         */
        facetContent?: sap.ui.ux3.ThingGroup[] | sap.ui.ux3.ThingGroup;

        /**
         * ActionBar. If no actionBar is set a default ActionBar will be created.
         */
        actionBar?: sap.ui.ux3.ActionBar;

        /**
         * The Facet that is currently selected.
         */
        selectedFacet?: sap.ui.ux3.NavigationItem | string;
      }

      interface ThingViewerOpts extends sap.ui.core.ControlOpts {
        /**
         * Title of the Thing Inspector
         */
        title?: string;

        /**
         * Thing type
         */
        type?: string;

        /**
         * Thing Icon Url
         */
        icon?: sap.ui.core.URI;

        /**
         * Subtitle of the Thing Inspector
         */
        subtitle?: string;

        /**
         * Width of the ThingViewer
         */
        width?: sap.ui.core.CSSSize;

        /**
         * Height of the ThingViewer
         */
        height?: sap.ui.core.CSSSize;

        /**
         * @SINCE 1.16.3
         *
         * Defines which header type should be used.
         */
        headerType?: sap.ui.ux3.ThingViewerHeaderType;

        /**
         * Event for facet selection. The application is responsible for displaying the correct content for the
         * selected one. The ThingInspector will currently always mark the first facet as selected.
         */
        facetSelected?: Function;

        /**
         * ThingGroups for the header content
         */
        headerContent?: sap.ui.ux3.ThingGroup[] | sap.ui.ux3.ThingGroup;

        /**
         * Thing Inspector facets
         */
        facets?: sap.ui.ux3.NavigationItem[] | sap.ui.ux3.NavigationItem;

        /**
         * ThingGroups for content of the selected facet
         */
        facetContent?: sap.ui.ux3.ThingGroup[] | sap.ui.ux3.ThingGroup;

        /**
         * An ActionBar can be given
         */
        actionBar?: sap.ui.ux3.ActionBar;

        /**
         * The Facet that is currently selected.
         */
        selectedFacet?: sap.ui.ux3.NavigationItem | string;
      }

      interface ToolPopupOpts extends sap.ui.core.ControlOpts {
        /**
         * Determines the title displayed in the pop up window
         */
        title?: string;

        /**
         * This property is relevant for Shell use: The URL to the icon displayed in the tool area which is used
         * to open the ToolPopup. The recommended size is 32x32px, including some transparent border. Therefore,
         * the content will cover about 20x20px.
         */
        icon?: sap.ui.core.URI;

        /**
         * This property is relevant for Shell use: The URL to the icon in hover state, displayed in the tool area
         * which is used to open the popup.
         */
        iconHover?: sap.ui.core.URI;

        /**
         * This property is relevant for Shell use: The URL to the icon in selected state displayed in the tool
         * area which is used to open the popup. If no selected icon is given, the hover icon is used.
         */
        iconSelected?: sap.ui.core.URI;

        /**
         * Specifies whether the popup is modal and blocks any user-interaction with controls in the background.
         * Changing this property while the ToolPopup is open will not have any effect. Please don't use "modal"
         * and "autoclose" at the same time. In this case a warning will be prompted to the console and "autoclose"
         * won't be used.
         */
        modal?: boolean;

        /**
         * @SINCE 1.11.1
         *
         * Specifies whether the ToolPopup has a dark or bright background. If set to true the background and borders
         * will be dark. If false they will be bright. This property only has an effect for the GoldReflection-theme.
         */
        inverted?: boolean;

        /**
         * @SINCE 1.13.2
         *
         * Determines whether the ToolPopup will auto close when it loses focus. If the user e.g. clicks outside
         * of the ToolPopup it will be closed. Please don't use "modal" and "autoclose" at the same time. In this
         * case a warning will be prompted to the console and "autoclose" won't be used.
         */
        autoClose?: boolean;

        /**
         * @SINCE 1.13.2
         *
         * Forces a maximum height of the ToolPopup in pixels. If the ToolPopup content is higher than the ToolPopup,
         * the content will be scrollable.
         */
        maxHeight?: sap.ui.core.CSSSize;

        /**
         * @SINCE 1.15.0
         *
         * Forces a maximum width of the ToolPopup in pixels.
         */
        maxWidth?: sap.ui.core.CSSSize;

        /**
         * @SINCE 1.19.0
         *
         * Time in milliseconds for the open animation.
         */
        openDuration?: number;

        /**
         * @SINCE 1.19.0
         *
         * Time in milliseconds for the close animation.
         */
        closeDuration?: number;

        /**
         * Event is fired when the popup opens
         */
        open?: Function;

        /**
         * Event is fired when the popup closes because the user pressed Escape or the ToolPopup Button in the Shell.
         * This is called before the closing animation.
         */
        close?: Function;

        /**
         * Event is fired whenever the user clicks the Enter or the Enter key inside the pop up
         */
        enter?: Function;

        /**
         * Event is fired when one of the icon properties is modified (Note: The icon is not rendered by the ToolPopup).
         * To be used by other controls which want to update the icon in their UI.
         */
        iconChanged?: Function;

        /**
         * This event is fired after the ToolPopup has finished its closing animation. It is called for EVERY close,
         * regardless of whether the user has triggered the close or whether the ToolPopup was closed via API call.
         */
        closed?: Function;

        /**
         * @SINCE 1.19.0
         *
         * Event is being fired after the ToolPopup has been opened.
         */
        opened?: Function;

        /**
         * Defines the buttons to appear in the popup
         */
        buttons?: sap.ui.core.Control[] | sap.ui.core.Control;

        /**
         * Defines the content of the popup
         */
        content?: sap.ui.core.Control[] | sap.ui.core.Control;

        /**
         * Defines the control that will get the focus when the ToolPopup is opened.
         */
        initialFocus?: sap.ui.core.Control | string;

        /**
         * This property is relevant for stand-alone use: This association needs to be set if the ToolPopup should
         * not be opened by/with the Shell. This association contains the instance of the control that assigns the
         * ToolPopup's position.
         */
        opener?: sap.ui.core.Control | string;

        /**
         * @SINCE 1.20.1
         *
         * Defines one of the buttons that have been provided via button aggregation to be the default button. This
         * default button is initially selected, if no control is set via the initialFocus association explicitly.
         * The default button is activated when Enter is pressed in the context of the dialog and when the currently
         * selected element does not handle the Enter event itself.
         */
        defaultButton?: sap.ui.core.Control | string;
      }
      /**
       * @deprecated (since 1.38) - Instead, use the `sap.m.Toolbar` or `sap.m.OverflowToolbar` control.
       *
       * A special toolbar with predefined social actions which can be shown as needed. These are: Create an update
       * (Feed), Follow, Mark for Follow Up, Mark as Favorite and Open Thing.
       *
       * In addition business actions (ThingAction instances) can be added which are either displayed as MenuItems
       * of the 'More' menu button or as individual tool bar buttons.
       *
       * When using this control, please be aware that it fulfills rather specific requirements: it has been designed
       * for and is used within composite controls QuickView and ThingInspector.
       */
      class ActionBar extends sap.ui.core.Control {
        /**
         * Constructor for a new ActionBar.
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
          mSettings?: ActionBarOpts
        );

        /**
         * Attaches event handler `fnFunction` to the {@link #event:actionSelected actionSelected} event of this
         * `sap.ui.ux3.ActionBar`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.ActionBar` itself.
         *
         * Fired when any of the social action’s toolbar buttons except ‘Update’ or any of the business action’s
         * menu items resp. buttons is pressed. The selected action can be identified by its id and newState (the
         * latter if applicable only) ‘Follow’ button + menu: id: follow, newState: Follow/Hold/Default ‘Mark for
         * follow up’ button: id: flag, newState: true/false ‘Favorite’ button: id: favorite, newState: true/false
         * ‘Open Thing Inspector’ button id: open Business Actions: id: the ThingAction id
         *
         * For ‘Update’, please refer to event ‘feedSubmit’
         */
        attachActionSelected(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ActionBar` itself
           */
          oListener?: object
        ): sap.ui.ux3.ActionBar;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:feedSubmit feedSubmit} event of this `sap.ui.ux3.ActionBar`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.ActionBar` itself.
         *
         * Fired when a new feed entry is submitted.
         */
        attachFeedSubmit(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ActionBar` itself
           */
          oListener?: object
        ): sap.ui.ux3.ActionBar;
        /**
         * Closes all popups which might be opened as ActionBar children These are the more- and follow menu and
         * the feeder popup
         */
        closePopups(): void;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:actionSelected actionSelected} event of this
         * `sap.ui.ux3.ActionBar`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachActionSelected(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.ActionBar;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:feedSubmit feedSubmit} event of this `sap.ui.ux3.ActionBar`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachFeedSubmit(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.ActionBar;
        /**
         * Creates a new subclass of class sap.ui.ux3.ActionBar with name `sClassName` and enriches it with the
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
         * Fires event {@link #event:actionSelected actionSelected} to attached listeners.
         */
        fireActionSelected(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * Id of selected ThingAction
             */
            id?: string;
            /**
             * Selected ThingAction
             */
            action?: sap.ui.ux3.ThingAction;
            /**
             * New State of the selected action.Only filled if the respective action maintains a state property, for
             * example 'FollowUp' or 'Favorite'
             */
            newState?: string;
          }
        ): sap.ui.ux3.ActionBar;
        /**
         * Fires event {@link #event:feedSubmit feedSubmit} to attached listeners.
         */
        fireFeedSubmit(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * Feed text
             */
            text?: string;
          }
        ): sap.ui.ux3.ActionBar;
        /**
         * Gets current value of property {@link #getAlwaysShowMoreMenu alwaysShowMoreMenu}.
         *
         * If true, business actions are rendered as menu items of the 'More' menu button. Otherwise, 'More' menu
         * button is only displayed for overflow and business actions are rendered as inidividual buttons.
         *
         * Default value is `true`.
         */
        getAlwaysShowMoreMenu(): boolean;
        /**
         * Gets content of aggregation {@link #getBusinessActions businessActions}.
         *
         * Displayed on the actionBar's right hand-side, either as menu item under 'More' or as individual buttons
         */
        getBusinessActions(): sap.ui.ux3.ThingAction[];
        /**
         * Gets current value of property {@link #getDividerWidth dividerWidth}.
         *
         * The minimum width of ActionBar's the social actions part: business action controls have to be rendered
         * outside this area
         */
        getDividerWidth(): sap.ui.core.CSSSize;
        /**
         * Gets current value of property {@link #getFavoriteState favoriteState}.
         *
         * Indicates whether “Favorite” is active
         */
        getFavoriteState(): boolean;
        /**
         * Gets current value of property {@link #getFlagState flagState}.
         *
         * Indicates whether “Mark for Follow Up” is active
         */
        getFlagState(): boolean;
        /**
         * Gets current value of property {@link #getFollowState followState}.
         *
         * Keeps track of the actionBars Follow/Unfollow button’s state. Its value is one of - FollowActionState.Default
         * - FollowActionState.Follow - FollowActionState.Hold
         *
         * Default value is `Default`.
         */
        getFollowState(): sap.ui.ux3.FollowActionState;
        /**
         * Returns a metadata object for class sap.ui.ux3.ActionBar.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getShowFavorite showFavorite}.
         *
         * Indicates whether social action “Favorite” is shown, default is ‘true’
         *
         * Default value is `true`.
         */
        getShowFavorite(): boolean;
        /**
         * Gets current value of property {@link #getShowFlag showFlag}.
         *
         * Indicates whether social action “Mark for Follow Up” is shown, default is ‘true’
         *
         * Default value is `true`.
         */
        getShowFlag(): boolean;
        /**
         * Gets current value of property {@link #getShowFollow showFollow}.
         *
         * Indicates whether social action “Follow” is shown, default is ‘true’
         *
         * Default value is `true`.
         */
        getShowFollow(): boolean;
        /**
         * Gets current value of property {@link #getShowOpen showOpen}.
         *
         * Indicates whether social action “Open” is shown, default is ‘true’
         *
         * Default value is `true`.
         */
        getShowOpen(): boolean;
        /**
         * Gets current value of property {@link #getShowUpdate showUpdate}.
         *
         * Indicates whether social action “Update” is shown, default is ‘true’
         *
         * Default value is `true`.
         */
        getShowUpdate(): boolean;
        /**
         * Gets current value of property {@link #getThingIconURI thingIconURI}.
         *
         * The thing icon uri. Icon will be displayed in Feeder
         */
        getThingIconURI(): sap.ui.core.URI;
        /**
         * Gets current value of property {@link #getUpdateState updateState}.
         *
         * Indicates whether “Update” is active
         */
        getUpdateState(): boolean;
        /**
         * Checks for the provided `sap.ui.ux3.ThingAction` in the aggregation {@link #getBusinessActions businessActions}.
         * and returns its index if found or -1 otherwise.
         */
        indexOfBusinessAction(
          /**
           * The businessAction whose index is looked for
           */
          oBusinessAction: sap.ui.ux3.ThingAction
        ): number;
        /**
         * Checks whether the control is still valid (is in the DOM). ActionBar instance is rendered if and only
         * if 'isActive' returns 'true'. This check is called implicitely by the rendere, MUST not be removed.
         */
        isActive(): boolean;
        /**
         * Sets a new value for property {@link #getAlwaysShowMoreMenu alwaysShowMoreMenu}.
         *
         * If true, business actions are rendered as menu items of the 'More' menu button. Otherwise, 'More' menu
         * button is only displayed for overflow and business actions are rendered as inidividual buttons.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setAlwaysShowMoreMenu(
          /**
           * New value for property `alwaysShowMoreMenu`
           */
          bAlwaysShowMoreMenu: boolean
        ): sap.ui.ux3.ActionBar;
        /**
         * Sets a new value for property {@link #getDividerWidth dividerWidth}.
         *
         * The minimum width of ActionBar's the social actions part: business action controls have to be rendered
         * outside this area
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setDividerWidth(
          /**
           * New value for property `dividerWidth`
           */
          sDividerWidth: sap.ui.core.CSSSize
        ): sap.ui.ux3.ActionBar;
        /**
         * Sets a new value for property {@link #getFavoriteState favoriteState}.
         *
         * Indicates whether “Favorite” is active
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setFavoriteState(
          /**
           * New value for property `favoriteState`
           */
          bFavoriteState: boolean
        ): sap.ui.ux3.ActionBar;
        /**
         * Sets a new value for property {@link #getFlagState flagState}.
         *
         * Indicates whether “Mark for Follow Up” is active
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setFlagState(
          /**
           * New value for property `flagState`
           */
          bFlagState: boolean
        ): sap.ui.ux3.ActionBar;
        /**
         * Sets a new value for property {@link #getFollowState followState}.
         *
         * Keeps track of the actionBars Follow/Unfollow button’s state. Its value is one of - FollowActionState.Default
         * - FollowActionState.Follow - FollowActionState.Hold
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Default`.
         */
        setFollowState(
          /**
           * New value for property `followState`
           */
          sFollowState: sap.ui.ux3.FollowActionState
        ): sap.ui.ux3.ActionBar;
        /**
         * Sets a new value for property {@link #getShowFavorite showFavorite}.
         *
         * Indicates whether social action “Favorite” is shown, default is ‘true’
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setShowFavorite(
          /**
           * New value for property `showFavorite`
           */
          bShowFavorite: boolean
        ): sap.ui.ux3.ActionBar;
        /**
         * Sets a new value for property {@link #getShowFlag showFlag}.
         *
         * Indicates whether social action “Mark for Follow Up” is shown, default is ‘true’
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setShowFlag(
          /**
           * New value for property `showFlag`
           */
          bShowFlag: boolean
        ): sap.ui.ux3.ActionBar;
        /**
         * Sets a new value for property {@link #getShowFollow showFollow}.
         *
         * Indicates whether social action “Follow” is shown, default is ‘true’
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setShowFollow(
          /**
           * New value for property `showFollow`
           */
          bShowFollow: boolean
        ): sap.ui.ux3.ActionBar;
        /**
         * Sets a new value for property {@link #getShowOpen showOpen}.
         *
         * Indicates whether social action “Open” is shown, default is ‘true’
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setShowOpen(
          /**
           * New value for property `showOpen`
           */
          bShowOpen: boolean
        ): sap.ui.ux3.ActionBar;
        /**
         * Sets a new value for property {@link #getShowUpdate showUpdate}.
         *
         * Indicates whether social action “Update” is shown, default is ‘true’
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setShowUpdate(
          /**
           * New value for property `showUpdate`
           */
          bShowUpdate: boolean
        ): sap.ui.ux3.ActionBar;
        /**
         * Sets a new value for property {@link #getThingIconURI thingIconURI}.
         *
         * The thing icon uri. Icon will be displayed in Feeder
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setThingIconURI(
          /**
           * New value for property `thingIconURI`
           */
          sThingIconURI: sap.ui.core.URI
        ): sap.ui.ux3.ActionBar;
        /**
         * Sets a new value for property {@link #getUpdateState updateState}.
         *
         * Indicates whether “Update” is active
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setUpdateState(
          /**
           * New value for property `updateState`
           */
          bUpdateState: boolean
        ): sap.ui.ux3.ActionBar;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:actionSelected actionSelected} event of this
         * `sap.ui.ux3.ActionBar`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.ActionBar` itself.
         *
         * Fired when any of the social action’s toolbar buttons except ‘Update’ or any of the business action’s
         * menu items resp. buttons is pressed. The selected action can be identified by its id and newState (the
         * latter if applicable only) ‘Follow’ button + menu: id: follow, newState: Follow/Hold/Default ‘Mark for
         * follow up’ button: id: flag, newState: true/false ‘Favorite’ button: id: favorite, newState: true/false
         * ‘Open Thing Inspector’ button id: open Business Actions: id: the ThingAction id
         *
         * For ‘Update’, please refer to event ‘feedSubmit’
         */
        attachActionSelected(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ActionBar` itself
           */
          oListener?: object
        ): sap.ui.ux3.ActionBar;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:feedSubmit feedSubmit} event of this `sap.ui.ux3.ActionBar`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.ActionBar` itself.
         *
         * Fired when a new feed entry is submitted.
         */
        attachFeedSubmit(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ActionBar` itself
           */
          oListener?: object
        ): sap.ui.ux3.ActionBar;
      }
      /**
       * @SINCE 1.9.0
       * @deprecated (since 1.38)
       *
       * Collection
       */
      class Collection extends sap.ui.core.Element {
        /**
         * Constructor for a new Collection.
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
          mSettings?: CollectionOpts
        );

        /**
         * Adds some item to the aggregation {@link #getItems items}.
         */
        addItem(
          /**
           * The item to add; if empty, nothing is inserted
           */
          oItem: sap.ui.core.Item
        ): sap.ui.ux3.Collection;
        /**/
        addSelectedItem(
          /**
           * Id of a selectedItem which becomes an additional target of this `selectedItems` association. Alternatively,
           * a selectedItem instance may be given.
           */
          vSelectedItem: string | sap.ui.core.Item
        ): sap.ui.ux3.Collection;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:propertyChanged propertyChanged} event of this
         * `sap.ui.ux3.Collection`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.Collection` itself.
         *
         * Fires if a property has changed, and the collection inspector needs to do something after that
         */
        attachPropertyChanged(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Collection` itself
           */
          oListener?: object
        ): sap.ui.ux3.Collection;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:selectionChanged selectionChanged} event of
         * this `sap.ui.ux3.Collection`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.Collection` itself.
         *
         * Fired when ever the selected items changer
         */
        attachSelectionChanged(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Collection` itself
           */
          oListener?: object
        ): sap.ui.ux3.Collection;
        /**
         * Destroys all the items in the aggregation {@link #getItems items}.
         */
        destroyItems(): sap.ui.ux3.Collection;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:propertyChanged propertyChanged} event of
         * this `sap.ui.ux3.Collection`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachPropertyChanged(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.Collection;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:selectionChanged selectionChanged} event of
         * this `sap.ui.ux3.Collection`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachSelectionChanged(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.Collection;
        /**
         * Creates a new subclass of class sap.ui.ux3.Collection with name `sClassName` and enriches it with the
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
         * Fires event {@link #event:propertyChanged propertyChanged} to attached listeners.
         */
        firePropertyChanged(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ui.ux3.Collection;
        /**
         * Fires event {@link #event:selectionChanged selectionChanged} to attached listeners.
         */
        fireSelectionChanged(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ui.ux3.Collection;
        /**
         * Gets current value of property {@link #getEditable editable}.
         *
         * If a collection is editable an edit button will be displayed below the list of items
         *
         * Default value is `false`.
         */
        getEditable(): boolean;
        /**
         * Gets content of aggregation {@link #getItems items}.
         *
         * Items in the collection
         */
        getItems(): sap.ui.core.Item[];
        /**
         * Returns a metadata object for class sap.ui.ux3.Collection.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getMultiSelection multiSelection}.
         *
         * Allow multi selection of items in collection
         *
         * Default value is `false`.
         */
        getMultiSelection(): boolean;
        /**
         * Returns array of IDs of the elements which are the current targets of the association {@link #getSelectedItems
         * selectedItems}.
         */
        getSelectedItems(): sap.ui.core.ID[];
        /**
         * Gets current value of property {@link #getTitle title}.
         *
         * Name for the collection
         */
        getTitle(): string;
        /**
         * Checks for the provided `sap.ui.core.Item` in the aggregation {@link #getItems items}. and returns its
         * index if found or -1 otherwise.
         */
        indexOfItem(
          /**
           * The item whose index is looked for
           */
          oItem: sap.ui.core.Item
        ): number;
        /**
         * Inserts a item into the aggregation {@link #getItems items}.
         */
        insertItem(
          /**
           * The item to insert; if empty, nothing is inserted
           */
          oItem: sap.ui.core.Item,
          /**
           * The `0`-based index the item should be inserted at; for a negative value of `iIndex`, the item is inserted
           * at position 0; for a value greater than the current size of the aggregation, the item is inserted at
           * the last position
           */
          iIndex: number
        ): sap.ui.ux3.Collection;
        /**
         * Removes all the controls from the aggregation {@link #getItems items}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllItems(): sap.ui.core.Item[];
        /**/
        removeAllSelectedItems(): string[];
        /**
         * Removes a item from the aggregation {@link #getItems items}.
         */
        removeItem(
          /**
           * The item to remove or its index or id
           */
          vItem: number | string | sap.ui.core.Item
        ): sap.ui.core.Item;
        /**/
        removeSelectedItem(
          /**
           * the selectedItem to remove or its index or id
           */
          vSelectedItem: number | string | sap.ui.core.Item
        ): string;
        /**
         * Sets a new value for property {@link #getEditable editable}.
         *
         * If a collection is editable an edit button will be displayed below the list of items
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
        ): sap.ui.ux3.Collection;
        /**
         * Sets a new value for property {@link #getMultiSelection multiSelection}.
         *
         * Allow multi selection of items in collection
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setMultiSelection(
          /**
           * New value for property `multiSelection`
           */
          bMultiSelection: boolean
        ): sap.ui.ux3.Collection;
        /**
         * Sets a new value for property {@link #getTitle title}.
         *
         * Name for the collection
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setTitle(
          /**
           * New value for property `title`
           */
          sTitle: string
        ): sap.ui.ux3.Collection;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:propertyChanged propertyChanged} event of this
         * `sap.ui.ux3.Collection`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.Collection` itself.
         *
         * Fires if a property has changed, and the collection inspector needs to do something after that
         */
        attachPropertyChanged(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Collection` itself
           */
          oListener?: object
        ): sap.ui.ux3.Collection;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:selectionChanged selectionChanged} event of
         * this `sap.ui.ux3.Collection`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.Collection` itself.
         *
         * Fired when ever the selected items changer
         */
        attachSelectionChanged(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Collection` itself
           */
          oListener?: object
        ): sap.ui.ux3.Collection;
      }
      /**
       * @SINCE 1.9.0
       * @deprecated (since 1.38)
       *
       * CollectionInspector
       */
      class CollectionInspector extends sap.ui.core.Control {
        /**
         * Constructor for a new CollectionInspector.
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
          mSettings?: CollectionInspectorOpts
        );

        /**
         * Adds some collection `oCollection` to the aggregation named `collections`.
         */
        addCollection(
          /**
           * the collection to add; if empty, nothing is inserted
           */
          oCollection: sap.ui.ux3.Collection
        ): sap.ui.ux3.CollectionInspector;
        /**
         * Adds some content `oContent` to the aggregation named `content`.
         */
        addContent(
          /**
           * the content to add; if empty, nothing is inserted
           */
          oContent: sap.ui.core.Control
        ): sap.ui.ux3.CollectionInspector;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:collectionSelected collectionSelected} event
         * of this `sap.ui.ux3.CollectionInspector`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.CollectionInspector` itself.
         *
         * Event is fired if user selects a collection
         */
        attachCollectionSelected(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.CollectionInspector` itself
           */
          oListener?: object
        ): sap.ui.ux3.CollectionInspector;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:editCollection editCollection} event of this
         * `sap.ui.ux3.CollectionInspector`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.CollectionInspector` itself.
         *
         * Fires when the edit button is clicked
         */
        attachEditCollection(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.CollectionInspector` itself
           */
          oListener?: object
        ): sap.ui.ux3.CollectionInspector;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:itemSelectionChanged itemSelectionChanged} event
         * of this `sap.ui.ux3.CollectionInspector`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.CollectionInspector` itself.
         *
         * Fires when an item in a collection is selected
         */
        attachItemSelectionChanged(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.CollectionInspector` itself
           */
          oListener?: object
        ): sap.ui.ux3.CollectionInspector;
        /**
         * Closes the siedebar
         */
        closeSidebar(): void;
        /**
         * Destroys the collection aggregation
         */
        destroyCollections(): sap.ui.ux3.CollectionInspector;
        /**
         * Destroys all the content in the aggregation named `content`.
         */
        destroyContent(): sap.ui.ux3.CollectionInspector;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:collectionSelected collectionSelected} event
         * of this `sap.ui.ux3.CollectionInspector`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachCollectionSelected(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.CollectionInspector;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:editCollection editCollection} event of this
         * `sap.ui.ux3.CollectionInspector`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachEditCollection(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.CollectionInspector;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:itemSelectionChanged itemSelectionChanged}
         * event of this `sap.ui.ux3.CollectionInspector`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachItemSelectionChanged(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.CollectionInspector;
        /**
         * Creates a new subclass of class sap.ui.ux3.CollectionInspector with name `sClassName` and enriches it
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
         * Fires event {@link #event:collectionSelected collectionSelected} to attached listeners.
         */
        fireCollectionSelected(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ui.ux3.CollectionInspector;
        /**
         * Fires event {@link #event:editCollection editCollection} to attached listeners.
         */
        fireEditCollection(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ui.ux3.CollectionInspector;
        /**
         * Fires event {@link #event:itemSelectionChanged itemSelectionChanged} to attached listeners.
         */
        fireItemSelectionChanged(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ui.ux3.CollectionInspector;
        /**
         * Gets content of aggregation {@link #getCollections collections}.
         *
         * Collections which are displayed in the COllectionInspector
         */
        getCollections(): sap.ui.ux3.Collection[];
        /**
         * Gets content of aggregation {@link #getContent content}.
         *
         * All controls that are currently displayed
         */
        getContent(): sap.ui.core.Control[];
        /**
         * Return the edit button
         */
        getEditButton(): void;
        /**
         * Gets current value of property {@link #getFitParent fitParent}.
         *
         * If set to true, control will fit parents content area
         *
         * Default value is `true`.
         */
        getFitParent(): boolean;
        /**
         * Returns a metadata object for class sap.ui.ux3.CollectionInspector.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * ID of the element which is the current target of the association {@link #getSelectedCollection selectedCollection},
         * or `null`.
         */
        getSelectedCollection(): sap.ui.core.ID;
        /**
         * Gets current value of property {@link #getSidebarVisible sidebarVisible}.
         *
         * Defines if the list of collection items is visible on the left
         *
         * Default value is `true`.
         */
        getSidebarVisible(): boolean;
        /**
         * Checks for the provided `sap.ui.ux3.Collection` in the aggregation {@link #getCollections collections}.
         * and returns its index if found or -1 otherwise.
         */
        indexOfCollection(
          /**
           * The collection whose index is looked for
           */
          oCollection: sap.ui.ux3.Collection
        ): number;
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
         * Inserts a collection into the aggregation named `collections`.
         */
        insertCollection(
          /**
           * the collection to insert; if empty, nothing is inserted
           */
          oCollection: sap.ui.ux3.Collection,
          /**
           * the `0`-based index the collection should be inserted at; for a negative value of `iIndex`, the collection
           * is inserted at position 0; for a value greater than the current size of the aggregation, the collection
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.ux3.CollectionInspector;
        /**
         * Inserts a content into the aggregation named `content`.
         */
        insertContent(
          /**
           * the content to insert; if empty, nothing is inserted
           */
          oContent: sap.ui.core.Control,
          /**
           * the `0`-based index the content should be inserted at; for a negative value of `iIndex`, the content
           * is inserted at position 0; for a value greater than the current size of the aggregation, the content
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.ux3.CollectionInspector;
        /**
         * Opens the sidebar
         */
        openSidebar(): void;
        /**
         * Removes all the controls in the aggregation named `collections`.
         *  Additionally unregisters them from the hosting UIArea.
         */
        removeAllCollections(): sap.ui.ux3.Collection[];
        /**
         * Removes all the controls in the aggregation named `content`.
         *  Additionally unregisters them from the hosting UIArea.
         */
        removeAllContent(): sap.ui.core.Control[];
        /**
         * Removes a collection from the aggregation named `collections`.
         */
        removeCollection(
          /**
           * the collection to remove or its index or id
           */
          vCollection: number | string | sap.ui.ux3.Collection
        ): sap.ui.ux3.Collection;
        /**
         * Removes a content from the aggregation named `content`.
         */
        removeContent(
          /**
           * the content to remove or its index or id
           */
          vContent: number | string | sap.ui.core.Control
        ): sap.ui.core.Control;
        /**
         * Sets a new value for property {@link #getFitParent fitParent}.
         *
         * If set to true, control will fit parents content area
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setFitParent(
          /**
           * New value for property `fitParent`
           */
          bFitParent: boolean
        ): sap.ui.ux3.CollectionInspector;
        /**
         * Sets the associated {@link #getSelectedCollection selectedCollection}.
         */
        setSelectedCollection(
          /**
           * ID of an element which becomes the new target of this selectedCollection association; alternatively,
           * an element instance may be given
           */
          oSelectedCollection: sap.ui.core.ID | sap.ui.ux3.Collection
        ): sap.ui.ux3.CollectionInspector;
        /**
         * Sets a new value for property {@link #getSidebarVisible sidebarVisible}.
         *
         * Defines if the list of collection items is visible on the left
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setSidebarVisible(
          /**
           * New value for property `sidebarVisible`
           */
          bSidebarVisible: boolean
        ): sap.ui.ux3.CollectionInspector;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:collectionSelected collectionSelected} event
         * of this `sap.ui.ux3.CollectionInspector`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.CollectionInspector` itself.
         *
         * Event is fired if user selects a collection
         */
        attachCollectionSelected(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.CollectionInspector` itself
           */
          oListener?: object
        ): sap.ui.ux3.CollectionInspector;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:editCollection editCollection} event of this
         * `sap.ui.ux3.CollectionInspector`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.CollectionInspector` itself.
         *
         * Fires when the edit button is clicked
         */
        attachEditCollection(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.CollectionInspector` itself
           */
          oListener?: object
        ): sap.ui.ux3.CollectionInspector;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:itemSelectionChanged itemSelectionChanged} event
         * of this `sap.ui.ux3.CollectionInspector`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.CollectionInspector` itself.
         *
         * Fires when an item in a collection is selected
         */
        attachItemSelectionChanged(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.CollectionInspector` itself
           */
          oListener?: object
        ): sap.ui.ux3.CollectionInspector;
      }
      /**
       * @deprecated (since 1.38) - Use a container by choice from the {@link sap.m} library, instead.
       *
       * DataSet
       */
      class DataSet extends sap.ui.core.Control {
        /**
         * Constructor for a new DataSet.
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
          mSettings?: DataSetOpts
        );

        /**
         * Rerendering of the FilterArea
         */
        _rerenderFilter(): void;
        /**
         * Rerendering of the Toolbar
         */
        _rerenderToolbar(): void;
        /**
         * Adds some filter to the aggregation {@link #getFilter filter}.
         */
        addFilter(
          /**
           * The filter to add; if empty, nothing is inserted
           */
          oFilter: sap.ui.core.Control
        ): sap.ui.ux3.DataSet;
        /**
         * Adds some item to the aggregation {@link #getItems items}.
         */
        addItem(
          /**
           * The item to add; if empty, nothing is inserted
           */
          oItem: sap.ui.ux3.DataSetItem
        ): sap.ui.ux3.DataSet;
        /**
         * add a toolbarItem to the toolbar
         */
        addToolbarItem(
          /**
           * ToolbarItem
           */
          oOToolbarItem: sap.ui.commons.ToolbarItem
        ): void;
        /**
         * Adds some view to the aggregation {@link #getViews views}.
         */
        addView(
          /**
           * The view to add; if empty, nothing is inserted
           */
          oView: sap.ui.ux3.DataSetView
        ): sap.ui.ux3.DataSet;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:search search} event of this `sap.ui.ux3.DataSet`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.DataSet` itself.
         *
         * Event which is fired when the user triggers a search
         */
        attachSearch(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.DataSet` itself
           */
          oListener?: object
        ): sap.ui.ux3.DataSet;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:selectionChanged selectionChanged} event of
         * this `sap.ui.ux3.DataSet`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.DataSet` itself.
         *
         * selection Changed
         */
        attachSelectionChanged(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.DataSet` itself
           */
          oListener?: object
        ): sap.ui.ux3.DataSet;
        /**
         * Binds aggregation {@link #getItems items} to model data.
         *
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description
         * of the possible properties of `oBindingInfo`.
         */
        bindItems(
          /**
           * The binding information
           */
          oBindingInfo: object
        ): sap.ui.ux3.DataSet;
        /**
         * clears dataset from all previous selections
         */
        clearSelection(): void;
        /**
         * Creates a view switch button
         */
        createViewSwitch(
          /**
           * View
           */
          oView: object,
          /**
           * Index of view
           */
          iIndex: number
        ): object;
        /**
         * Destroys all the filter in the aggregation {@link #getFilter filter}.
         */
        destroyFilter(): sap.ui.ux3.DataSet;
        /**
         * Destroys all the items in the aggregation {@link #getItems items}.
         */
        destroyItems(): sap.ui.ux3.DataSet;
        /**
         * Destroys all the views in the aggregation {@link #getViews views}.
         */
        destroyViews(): sap.ui.ux3.DataSet;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:search search} event of this `sap.ui.ux3.DataSet`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachSearch(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.DataSet;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:selectionChanged selectionChanged} event of
         * this `sap.ui.ux3.DataSet`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachSelectionChanged(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.DataSet;
        /**
         * Creates a new subclass of class sap.ui.ux3.DataSet with name `sClassName` and enriches it with the information
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
         * Fires event {@link #event:search search} to attached listeners.
         */
        fireSearch(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The search query
             */
            query?: string;
          }
        ): sap.ui.ux3.DataSet;
        /**
         * Fires event {@link #event:selectionChanged selectionChanged} to attached listeners.
         */
        fireSelectionChanged(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * Old lead selected index
             */
            oldLeadSelectedIndex?: number;
            /**
             * New lead selected index
             */
            newLeadSelectedIndex?: number;
          }
        ): sap.ui.ux3.DataSet;
        /**
         * Gets content of aggregation {@link #getFilter filter}.
         *
         * Filter control (e.g. a FacetFilter) for the DataSet
         */
        getFilter(): sap.ui.core.Control[];
        /**
         * Gets content of aggregation {@link #getItems items}.
         *
         * Aggregation of DataSetItems
         */
        getItems(): sap.ui.ux3.DataSetItem[];
        /**
         * Returns the LeadSelection index
         */
        getLeadSelection(): number;
        /**
         * Returns a metadata object for class sap.ui.ux3.DataSet.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getMultiSelect multiSelect}.
         *
         * Selection mode of the DataSet
         *
         * Default value is `false`.
         */
        getMultiSelect(): boolean;
        /**
         * use this function to retrieve the lead selected index
         */
        getSelectedIndex(): void;
        /**
         * use this function to retrieve all selected indices if multiple select is enabled
         */
        getSelectedIndices(): void;
        /**
         * Returns id of selected Item from given index
         */
        getSelectedItemId(
          /**
           * index of selection
           */
          iIndex: number
        ): string;
        /**
         * ID of the element which is the current target of the association {@link #getSelectedView selectedView},
         * or `null`.
         */
        getSelectedView(): sap.ui.core.ID;
        /**
         * Gets current value of property {@link #getShowFilter showFilter}.
         *
         * show filter
         *
         * Default value is `true`.
         */
        getShowFilter(): boolean;
        /**
         * Gets current value of property {@link #getShowSearchField showSearchField}.
         *
         * Show/hide SearchField in Toolbar
         *
         * Default value is `true`.
         */
        getShowSearchField(): boolean;
        /**
         * Gets current value of property {@link #getShowToolbar showToolbar}.
         *
         * show Toolbar
         *
         * Default value is `true`.
         */
        getShowToolbar(): boolean;
        /**
         * Gets content of aggregation {@link #getViews views}.
         *
         * views
         */
        getViews(): sap.ui.ux3.DataSetView[];
        /**
         * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getFilter filter}. and returns
         * its index if found or -1 otherwise.
         */
        indexOfFilter(
          /**
           * The filter whose index is looked for
           */
          oFilter: sap.ui.core.Control
        ): number;
        /**
         * Checks for the provided `sap.ui.ux3.DataSetItem` in the aggregation {@link #getItems items}. and returns
         * its index if found or -1 otherwise.
         */
        indexOfItem(
          /**
           * The item whose index is looked for
           */
          oItem: sap.ui.ux3.DataSetItem
        ): number;
        /**
         * Checks for the provided `sap.ui.ux3.DataSetView` in the aggregation {@link #getViews views}. and returns
         * its index if found or -1 otherwise.
         */
        indexOfView(
          /**
           * The view whose index is looked for
           */
          oView: sap.ui.ux3.DataSetView
        ): number;
        /**
         * Inserts a filter into the aggregation {@link #getFilter filter}.
         */
        insertFilter(
          /**
           * The filter to insert; if empty, nothing is inserted
           */
          oFilter: sap.ui.core.Control,
          /**
           * The `0`-based index the filter should be inserted at; for a negative value of `iIndex`, the filter is
           * inserted at position 0; for a value greater than the current size of the aggregation, the filter is inserted
           * at the last position
           */
          iIndex: number
        ): sap.ui.ux3.DataSet;
        /**
         * Inserts a item into the aggregation {@link #getItems items}.
         */
        insertItem(
          /**
           * The item to insert; if empty, nothing is inserted
           */
          oItem: sap.ui.ux3.DataSetItem,
          /**
           * The `0`-based index the item should be inserted at; for a negative value of `iIndex`, the item is inserted
           * at position 0; for a value greater than the current size of the aggregation, the item is inserted at
           * the last position
           */
          iIndex: number
        ): sap.ui.ux3.DataSet;
        /**
         * Inserts a view into the aggregation {@link #getViews views}.
         */
        insertView(
          /**
           * The view to insert; if empty, nothing is inserted
           */
          oView: sap.ui.ux3.DataSetView,
          /**
           * The `0`-based index the view should be inserted at; for a negative value of `iIndex`, the view is inserted
           * at position 0; for a value greater than the current size of the aggregation, the view is inserted at
           * the last position
           */
          iIndex: number
        ): sap.ui.ux3.DataSet;
        /**
         * Returns true if iIndex is selected
         */
        isSelectedIndex(
          /**
           * index of selection
           */
          iIndex: number
        ): boolean;
        /**
         * Removes all the controls from the aggregation {@link #getFilter filter}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllFilter(): sap.ui.core.Control[];
        /**
         * Removes all the controls from the aggregation {@link #getItems items}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllItems(): sap.ui.ux3.DataSetItem[];
        /**
         * Removes all the controls from the aggregation {@link #getViews views}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllViews(): sap.ui.ux3.DataSetView[];
        /**
         * Removes a filter from the aggregation {@link #getFilter filter}.
         */
        removeFilter(
          /**
           * The filter to remove or its index or id
           */
          vFilter: number | string | sap.ui.core.Control
        ): sap.ui.core.Control;
        /**
         * Removes a item from the aggregation {@link #getItems items}.
         */
        removeItem(
          /**
           * The item to remove or its index or id
           */
          vItem: number | string | sap.ui.ux3.DataSetItem
        ): sap.ui.ux3.DataSetItem;
        /**
         * remove a toolbarItem to the toolbar
         */
        removeToolbarItem(oOToolbarItem: sap.ui.commons.ToolbarItem): void;
        /**
         * Removes a view from the aggregation {@link #getViews views}.
         */
        removeView(
          /**
           * The view to remove or its index or id
           */
          vView: number | string | sap.ui.ux3.DataSetView
        ): sap.ui.ux3.DataSetView;
        /**
         * Set the LeadSelection index
         */
        setLeadSelection(
          /**
           * set LeadSelection index
           */
          iIIndex: number
        ): void;
        /**
         * setter for multi selection mode
         */
        setMultiSelect(
          /**
           * true for multi mode, false for single mode
           */
          bMode: boolean
        ): void;
        /**
         * Sets the associated {@link #getSelectedView selectedView}.
         */
        setSelectedView(
          /**
           * ID of an element which becomes the new target of this selectedView association; alternatively, an element
           * instance may be given
           */
          oSelectedView: sap.ui.core.ID | sap.ui.ux3.DataSetView
        ): sap.ui.ux3.DataSet;
        /**
         * Sets a new value for property {@link #getShowFilter showFilter}.
         *
         * show filter
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setShowFilter(
          /**
           * New value for property `showFilter`
           */
          bShowFilter: boolean
        ): sap.ui.ux3.DataSet;
        /**
         * Sets a new value for property {@link #getShowSearchField showSearchField}.
         *
         * Show/hide SearchField in Toolbar
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setShowSearchField(
          /**
           * New value for property `showSearchField`
           */
          bShowSearchField: boolean
        ): sap.ui.ux3.DataSet;
        /**
         * Sets a new value for property {@link #getShowToolbar showToolbar}.
         *
         * show Toolbar
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setShowToolbar(
          /**
           * New value for property `showToolbar`
           */
          bShowToolbar: boolean
        ): sap.ui.ux3.DataSet;
        /**
         * Unbinds aggregation {@link #getItems items} from model data.
         */
        unbindItems(): sap.ui.ux3.DataSet;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:search search} event of this `sap.ui.ux3.DataSet`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.DataSet` itself.
         *
         * Event which is fired when the user triggers a search
         */
        attachSearch(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.DataSet` itself
           */
          oListener?: object
        ): sap.ui.ux3.DataSet;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:selectionChanged selectionChanged} event of
         * this `sap.ui.ux3.DataSet`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.DataSet` itself.
         *
         * selection Changed
         */
        attachSelectionChanged(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.DataSet` itself
           */
          oListener?: object
        ): sap.ui.ux3.DataSet;
      }
      /**
       * @deprecated (since 1.38)
       *
       * DataSet Item
       */
      class DataSetItem extends sap.ui.core.Element {
        /**
         * Constructor for a new DataSetItem.
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
          mSettings?: DataSetItemOpts
        );

        /**
         * Attaches event handler `fnFunction` to the {@link #event:selected selected} event of this `sap.ui.ux3.DataSetItem`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.DataSetItem` itself.
         *
         * Event Fired when Datset item is selected.
         */
        attachSelected(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.DataSetItem` itself
           */
          oListener?: object
        ): sap.ui.ux3.DataSetItem;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:selected selected} event of this `sap.ui.ux3.DataSetItem`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachSelected(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.DataSetItem;
        /**
         * Creates a new subclass of class sap.ui.ux3.DataSetItem with name `sClassName` and enriches it with the
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
         * Fires event {@link #event:selected selected} to attached listeners.
         */
        fireSelected(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * Id of the selected Datset item
             */
            itemId?: string;
          }
        ): sap.ui.ux3.DataSetItem;
        /**
         * Gets current value of property {@link #getCheckable checkable}.
         *
         * checkable
         *
         * Default value is `true`.
         */
        getCheckable(): boolean;
        /**
         * Gets current value of property {@link #getIconSrc iconSrc}.
         *
         * image
         */
        getIconSrc(): sap.ui.core.URI;
        /**
         * Returns a metadata object for class sap.ui.ux3.DataSetItem.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getSubtitle subtitle}.
         *
         * subtitle
         *
         * Default value is `Subtitle`.
         */
        getSubtitle(): string;
        /**
         * Gets current value of property {@link #getTitle title}.
         *
         * title
         *
         * Default value is `Title`.
         */
        getTitle(): string;
        /**
         * Sets a new value for property {@link #getCheckable checkable}.
         *
         * checkable
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setCheckable(
          /**
           * New value for property `checkable`
           */
          bCheckable: boolean
        ): sap.ui.ux3.DataSetItem;
        /**
         * Sets a new value for property {@link #getIconSrc iconSrc}.
         *
         * image
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setIconSrc(
          /**
           * New value for property `iconSrc`
           */
          sIconSrc: sap.ui.core.URI
        ): sap.ui.ux3.DataSetItem;
        /**
         * Sets a new value for property {@link #getSubtitle subtitle}.
         *
         * subtitle
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Subtitle`.
         */
        setSubtitle(
          /**
           * New value for property `subtitle`
           */
          sSubtitle: string
        ): sap.ui.ux3.DataSetItem;
        /**
         * Sets a new value for property {@link #getTitle title}.
         *
         * title
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Title`.
         */
        setTitle(
          /**
           * New value for property `title`
           */
          sTitle: string
        ): sap.ui.ux3.DataSetItem;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:selected selected} event of this `sap.ui.ux3.DataSetItem`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.DataSetItem` itself.
         *
         * Event Fired when Datset item is selected.
         */
        attachSelected(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.DataSetItem` itself
           */
          oListener?: object
        ): sap.ui.ux3.DataSetItem;
      }
      /**
       * @deprecated (since 1.38) - Use a layout by choice from the {@link sap.m} library, instead.
       *
       * DataSetSimpleView provides a simple view example for DataSet usage.
       */
      class DataSetSimpleView extends sap.ui.core.Control
        implements sap.ui.ux3.DataSetView {
        /**
         * Constructor for a new DataSetSimpleView.
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
          mSettings?: DataSetSimpleViewOpts
        );

        /**
         * Destroys the template in the aggregation {@link #getTemplate template}.
         */
        destroyTemplate(): sap.ui.ux3.DataSetSimpleView;
        /**
         * View finalization: Called when leaving the view
         */
        exitView(aItems: sap.ui.ux3.DataSetItem[]): void;
        /**
         * Creates a new subclass of class sap.ui.ux3.DataSetSimpleView with name `sClassName` and enriches it with
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
         * Gets current value of property {@link #getFloating floating}.
         *
         * When true the DatSet items are floating containers. When set to false The Items are rendered in a 1 column
         * Layout.
         *
         * Default value is `true`.
         */
        getFloating(): boolean;
        /**
         * @SINCE 1.13.0
         *
         * Gets current value of property {@link #getHeight height}.
         *
         * If the pagination feature is used without specifying a scroll area, a height for the dataset must be
         * defined.
         */
        getHeight(): sap.ui.core.CSSSize;
        /**
         * Gets current value of property {@link #getIcon icon}.
         *
         * Icon source for this view
         */
        getIcon(): sap.ui.core.URI;
        /**
         * Gets current value of property {@link #getIconHovered iconHovered}.
         *
         * icon: hovered state
         */
        getIconHovered(): sap.ui.core.URI;
        /**
         * Gets current value of property {@link #getIconSelected iconSelected}.
         *
         * icon: selected state
         */
        getIconSelected(): sap.ui.core.URI;
        /**
         * @SINCE 1.13.0
         *
         * Gets current value of property {@link #getInitialItemCount initialItemCount}.
         *
         * If this value is greater zero only this amount of items is loaded in the first place. New items are loaded
         * automatically when the user scrolls down. The number of items which are reloaded can be defined with
         * the property "reloadItemCount"
         *
         * Default value is `0`.
         */
        getInitialItemCount(): number;
        /**
         * @SINCE 1.9.2
         *
         * Gets current value of property {@link #getItemMinWidth itemMinWidth}.
         *
         * When itemMinWidth>0 and the property floating is true the given minimum width in pixels is set to DatSet
         * items. A minimum width must be given when the property responsive is set.
         *
         * Default value is `0`.
         */
        getItemMinWidth(): number;
        /**
         * Returns a metadata object for class sap.ui.ux3.DataSetSimpleView.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getName name}.
         *
         * Name of the View
         *
         * Default value is `Name of this View`.
         */
        getName(): string;
        /**
         * @SINCE 1.13.0
         *
         * Gets current value of property {@link #getReloadItemCount reloadItemCount}.
         *
         * This number defines the item count which is reloaded on scroll if initialItemCount is enabled.
         *
         * Default value is `0`.
         */
        getReloadItemCount(): number;
        /**
         * @SINCE 1.9.2
         *
         * Gets current value of property {@link #getResponsive responsive}.
         *
         * When true and the property floating is true the DatSet items are floating containers filling the whole
         * space of a row.
         *
         * Default value is `false`.
         */
        getResponsive(): boolean;
        /**
         * @SINCE 1.13.0
         *
         * Gets current value of property {@link #getScrollArea scrollArea}.
         *
         * ID of the DOM Element or jQuery reference to the dom which holds the scrollbar for the dataset
         */
        getScrollArea(): any;
        /**
         * Gets content of aggregation {@link #getTemplate template}.
         *
         * template
         */
        getTemplate(): sap.ui.core.Control;
        /**
         * Eventhandler for the selection of an Item
         */
        handleSelection(
          /**
           * SelectionChanged event
           */
          oEvent: sap.ui.base.Event
        ): void;
        /**
         * View Initialization: Called when selecting the view
         */
        initView(
          /**
           * Array of DataSetItems added to the parent DataSet
           */
          aItems: any[]
        ): void;
        /**
         * Check if Item `oItem` is selected
         */
        isItemSelected(
          /**
           * DataSetItem instance
           */
          oItem: sap.ui.ux3.DataSetItem
        ): void;
        /**
         * Sets a new value for property {@link #getFloating floating}.
         *
         * When true the DatSet items are floating containers. When set to false The Items are rendered in a 1 column
         * Layout.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setFloating(
          /**
           * New value for property `floating`
           */
          bFloating: boolean
        ): sap.ui.ux3.DataSetSimpleView;
        /**
         * @SINCE 1.13.0
         *
         * Sets a new value for property {@link #getHeight height}.
         *
         * If the pagination feature is used without specifying a scroll area, a height for the dataset must be
         * defined.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setHeight(
          /**
           * New value for property `height`
           */
          sHeight: sap.ui.core.CSSSize
        ): sap.ui.ux3.DataSetSimpleView;
        /**
         * Sets a new value for property {@link #getIcon icon}.
         *
         * Icon source for this view
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setIcon(
          /**
           * New value for property `icon`
           */
          sIcon: sap.ui.core.URI
        ): sap.ui.ux3.DataSetSimpleView;
        /**
         * Sets a new value for property {@link #getIconHovered iconHovered}.
         *
         * icon: hovered state
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setIconHovered(
          /**
           * New value for property `iconHovered`
           */
          sIconHovered: sap.ui.core.URI
        ): sap.ui.ux3.DataSetSimpleView;
        /**
         * Sets a new value for property {@link #getIconSelected iconSelected}.
         *
         * icon: selected state
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setIconSelected(
          /**
           * New value for property `iconSelected`
           */
          sIconSelected: sap.ui.core.URI
        ): sap.ui.ux3.DataSetSimpleView;
        /**
         * @SINCE 1.13.0
         *
         * Sets a new value for property {@link #getInitialItemCount initialItemCount}.
         *
         * If this value is greater zero only this amount of items is loaded in the first place. New items are loaded
         * automatically when the user scrolls down. The number of items which are reloaded can be defined with
         * the property "reloadItemCount"
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `0`.
         */
        setInitialItemCount(
          /**
           * New value for property `initialItemCount`
           */
          iInitialItemCount: number
        ): sap.ui.ux3.DataSetSimpleView;
        /**
         * @SINCE 1.9.2
         *
         * Sets a new value for property {@link #getItemMinWidth itemMinWidth}.
         *
         * When itemMinWidth>0 and the property floating is true the given minimum width in pixels is set to DatSet
         * items. A minimum width must be given when the property responsive is set.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `0`.
         */
        setItemMinWidth(
          /**
           * New value for property `itemMinWidth`
           */
          iItemMinWidth: number
        ): sap.ui.ux3.DataSetSimpleView;
        /**
         * Sets a new value for property {@link #getName name}.
         *
         * Name of the View
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Name of this View`.
         */
        setName(
          /**
           * New value for property `name`
           */
          sName: string
        ): sap.ui.ux3.DataSetSimpleView;
        /**
         * @SINCE 1.13.0
         *
         * Sets a new value for property {@link #getReloadItemCount reloadItemCount}.
         *
         * This number defines the item count which is reloaded on scroll if initialItemCount is enabled.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `0`.
         */
        setReloadItemCount(
          /**
           * New value for property `reloadItemCount`
           */
          iReloadItemCount: number
        ): sap.ui.ux3.DataSetSimpleView;
        /**
         * @SINCE 1.9.2
         *
         * Sets a new value for property {@link #getResponsive responsive}.
         *
         * When true and the property floating is true the DatSet items are floating containers filling the whole
         * space of a row.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setResponsive(
          /**
           * New value for property `responsive`
           */
          bResponsive: boolean
        ): sap.ui.ux3.DataSetSimpleView;
        /**/
        setScrollArea(
          aScrollArea: any[],

          bSupress: boolean
        ): void;
        /**
         * Sets the aggregated {@link #getTemplate template}.
         */
        setTemplate(
          /**
           * The template to set
           */
          oTemplate: sap.ui.core.Control
        ): sap.ui.ux3.DataSetSimpleView;
        /**
         * View update: Called when pagination adds items
         */
        updateView(
          /**
           * Array of DataSetItems added to the parent DataSet
           */
          aDiff: sap.ui.ux3.DataSetItem[]
        ): void;
      }
      /**
       * @deprecated (since 1.38)
       * @EXPERIMENTAL (since 1.2)
       *
       * A comprehensive UI design approach with graphical and functional elements for searching data, exploring
       * data, and acting on the data ("Explore and Act (Exact) Pattern").
       */
      class Exact extends sap.ui.core.Control {
        /**
         * Constructor for a new Exact.
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
          mSettings?: ExactOpts
        );

        /**
         * Adds some attribute to the aggregation {@link #getAttributes attributes}.
         */
        addAttribute(
          /**
           * The attribute to add; if empty, nothing is inserted
           */
          oAttribute: sap.ui.ux3.ExactAttribute
        ): sap.ui.ux3.Exact;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:refineSearch refineSearch} event of this `sap.ui.ux3.Exact`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.Exact` itself.
         *
         * Event which is fired when an attribute is selected or unselected.
         */
        attachRefineSearch(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Exact` itself
           */
          oListener?: object
        ): sap.ui.ux3.Exact;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:search search} event of this `sap.ui.ux3.Exact`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.Exact` itself.
         *
         * Event is fired when the search button is clicked
         */
        attachSearch(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Exact` itself
           */
          oListener?: object
        ): sap.ui.ux3.Exact;
        /**
         * Destroys all the attributes in the aggregation {@link #getAttributes attributes}.
         */
        destroyAttributes(): sap.ui.ux3.Exact;
        /**
         * Destroys the settingsMenu in the aggregation {@link #getSettingsMenu settingsMenu}.
         */
        destroySettingsMenu(): sap.ui.ux3.Exact;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:refineSearch refineSearch} event of this `sap.ui.ux3.Exact`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachRefineSearch(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.Exact;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:search search} event of this `sap.ui.ux3.Exact`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachSearch(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.Exact;
        /**
         * Creates a new subclass of class sap.ui.ux3.Exact with name `sClassName` and enriches it with the information
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
         * Fires event {@link #event:refineSearch refineSearch} to attached listeners.
         */
        fireRefineSearch(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The query string which was entered in the search field
             */
            query?: string;
            /**
             * The attribute which was selected or unselected recently
             */
            changedAttribute?: sap.ui.ux3.ExactAttribute;
            /**
             * Array of all selected ExcatAttribute.
             */
            allSelectedAttributes?: object;
          }
        ): sap.ui.ux3.Exact;
        /**
         * Fires event {@link #event:search search} to attached listeners.
         */
        fireSearch(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The query string which was entered in the search field.
             */
            query?: string;
          }
        ): sap.ui.ux3.Exact;
        /**
         * Gets content of aggregation {@link #getAttributes attributes}.
         *
         * The attributes which shall be available to refine the search
         */
        getAttributes(): sap.ui.ux3.ExactAttribute[];
        /**
         * Returns a metadata object for class sap.ui.ux3.Exact.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Returns the ExactArea representing the result section. Arbitrary content can be added here.
         */
        getResultArea(): sap.ui.ux3.ExactArea;
        /**
         * Gets current value of property {@link #getResultText resultText}.
         *
         * A title text which is displayed above the result section
         */
        getResultText(): string;
        /**
         * Returns the SearchField control which is used by the Exact control.
         */
        getSearchField(): sap.ui.commons.SearchField;
        /**
         * Gets content of aggregation {@link #getSettingsMenu settingsMenu}.
         *
         * Defines the 'Settings' button in the browse section tool bar
         */
        getSettingsMenu(): sap.ui.commons.Menu;
        /**
         * Checks for the provided `sap.ui.ux3.ExactAttribute` in the aggregation {@link #getAttributes attributes}.
         * and returns its index if found or -1 otherwise.
         */
        indexOfAttribute(
          /**
           * The attribute whose index is looked for
           */
          oAttribute: sap.ui.ux3.ExactAttribute
        ): number;
        /**
         * Inserts a attribute into the aggregation {@link #getAttributes attributes}.
         */
        insertAttribute(
          /**
           * The attribute to insert; if empty, nothing is inserted
           */
          oAttribute: sap.ui.ux3.ExactAttribute,
          /**
           * The `0`-based index the attribute should be inserted at; for a negative value of `iIndex`, the attribute
           * is inserted at position 0; for a value greater than the current size of the aggregation, the attribute
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.ux3.Exact;
        /**
         * Removes all the controls from the aggregation {@link #getAttributes attributes}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllAttributes(): sap.ui.ux3.ExactAttribute[];
        /**
         * Removes a attribute from the aggregation {@link #getAttributes attributes}.
         */
        removeAttribute(
          /**
           * The attribute to remove or its index or id
           */
          vAttribute: number | string | sap.ui.ux3.ExactAttribute
        ): sap.ui.ux3.ExactAttribute;
        /**
         * Sets a new value for property {@link #getResultText resultText}.
         *
         * A title text which is displayed above the result section
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setResultText(
          /**
           * New value for property `resultText`
           */
          sResultText: string
        ): sap.ui.ux3.Exact;
        /**
         * Sets the aggregated {@link #getSettingsMenu settingsMenu}.
         */
        setSettingsMenu(
          /**
           * The settingsMenu to set
           */
          oSettingsMenu: sap.ui.commons.Menu
        ): sap.ui.ux3.Exact;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:refineSearch refineSearch} event of this `sap.ui.ux3.Exact`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.Exact` itself.
         *
         * Event which is fired when an attribute is selected or unselected.
         */
        attachRefineSearch(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Exact` itself
           */
          oListener?: object
        ): sap.ui.ux3.Exact;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:search search} event of this `sap.ui.ux3.Exact`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.Exact` itself.
         *
         * Event is fired when the search button is clicked
         */
        attachSearch(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Exact` itself
           */
          oListener?: object
        ): sap.ui.ux3.Exact;
      }
      /**
       * @deprecated (since 1.38)
       * @EXPERIMENTAL (since 1.6)
       *
       * Consists of two sections: A tool bar and a content area where arbitrary controls can be added. The ExactArea
       * is intended to be used for the Exact design approach but alternatively also in a stand alone version.
       */
      class ExactArea extends sap.ui.core.Control {
        /**
         * Constructor for a new ExactArea.
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
          mSettings?: ExactAreaOpts
        );

        /**
         * Adds some content to the aggregation {@link #getContent content}.
         */
        addContent(
          /**
           * The content to add; if empty, nothing is inserted
           */
          oContent: sap.ui.core.Control
        ): sap.ui.ux3.ExactArea;
        /**
         * Adds some toolbarItem to the aggregation {@link #getToolbarItems toolbarItems}.
         */
        addToolbarItem(
          /**
           * The toolbarItem to add; if empty, nothing is inserted
           */
          oToolbarItem: sap.ui.commons.ToolbarItem
        ): sap.ui.ux3.ExactArea;
        /**
         * Destroys all the content in the aggregation {@link #getContent content}.
         */
        destroyContent(): sap.ui.ux3.ExactArea;
        /**
         * Destroys all the toolbarItems in the aggregation {@link #getToolbarItems toolbarItems}.
         */
        destroyToolbarItems(): sap.ui.ux3.ExactArea;
        /**
         * Creates a new subclass of class sap.ui.ux3.ExactArea with name `sClassName` and enriches it with the
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
         * Gets content of aggregation {@link #getContent content}.
         *
         * Arbitrary child controls of the content area
         */
        getContent(): sap.ui.core.Control[];
        /**
         * Returns a metadata object for class sap.ui.ux3.ExactArea.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets content of aggregation {@link #getToolbarItems toolbarItems}.
         *
         * Tool bar items which shall be shown in the tool bar.
         */
        getToolbarItems(): sap.ui.commons.ToolbarItem[];
        /**
         * Gets current value of property {@link #getToolbarVisible toolbarVisible}.
         *
         * Specifies whether the tool bar shall be visible
         *
         * Default value is `true`.
         */
        getToolbarVisible(): boolean;
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
         * Checks for the provided `sap.ui.commons.ToolbarItem` in the aggregation {@link #getToolbarItems toolbarItems}.
         * and returns its index if found or -1 otherwise.
         */
        indexOfToolbarItem(
          /**
           * The toolbarItem whose index is looked for
           */
          oToolbarItem: sap.ui.commons.ToolbarItem
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
        ): sap.ui.ux3.ExactArea;
        /**
         * Inserts a toolbarItem into the aggregation {@link #getToolbarItems toolbarItems}.
         */
        insertToolbarItem(
          /**
           * The toolbarItem to insert; if empty, nothing is inserted
           */
          oToolbarItem: sap.ui.commons.ToolbarItem,
          /**
           * The `0`-based index the toolbarItem should be inserted at; for a negative value of `iIndex`, the toolbarItem
           * is inserted at position 0; for a value greater than the current size of the aggregation, the toolbarItem
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.ux3.ExactArea;
        /**
         * Removes all the controls from the aggregation {@link #getContent content}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllContent(): sap.ui.core.Control[];
        /**
         * Removes all the controls from the aggregation {@link #getToolbarItems toolbarItems}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllToolbarItems(): sap.ui.commons.ToolbarItem[];
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
         * Removes a toolbarItem from the aggregation {@link #getToolbarItems toolbarItems}.
         */
        removeToolbarItem(
          /**
           * The toolbarItem to remove or its index or id
           */
          vToolbarItem: number | string | sap.ui.commons.ToolbarItem
        ): sap.ui.commons.ToolbarItem;
        /**
         * Sets a new value for property {@link #getToolbarVisible toolbarVisible}.
         *
         * Specifies whether the tool bar shall be visible
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setToolbarVisible(
          /**
           * New value for property `toolbarVisible`
           */
          bToolbarVisible: boolean
        ): sap.ui.ux3.ExactArea;
      }
      /**
       * @deprecated (since 1.38)
       *
       * An element for defining attributes and sub-attributes used within the Exact pattern.
       */
      class ExactAttribute extends sap.ui.core.Element {
        /**
         * Constructor for a new ExactAttribute.
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
          mSettings?: ExactAttributeOpts
        );

        /**
         * Adds some attribute to the aggregation {@link #getAttributes attributes}.
         */
        addAttribute(
          /**
           * The attribute to add; if empty, nothing is inserted
           */
          oAttribute: sap.ui.ux3.ExactAttribute
        ): sap.ui.ux3.ExactAttribute;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:supplyAttributes supplyAttributes} event of
         * this `sap.ui.ux3.ExactAttribute`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.ExactAttribute` itself.
         *
         * A supply function is a handler which is attached to the supplyAttributes event. The event is fired when
         * the corresponding ExactAttribute is selected, it was already selected when a handler is attached or function
         * getAttributes() is called.
         */
        attachSupplyAttributes(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ExactAttribute` itself
           */
          oListener?: object
        ): sap.ui.ux3.ExactAttribute;
        /**
         * Destroys all the attributes in the aggregation {@link #getAttributes attributes}.
         */
        destroyAttributes(): sap.ui.ux3.ExactAttribute;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:supplyAttributes supplyAttributes} event of
         * this `sap.ui.ux3.ExactAttribute`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachSupplyAttributes(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.ExactAttribute;
        /**
         * Creates a new subclass of class sap.ui.ux3.ExactAttribute with name `sClassName` and enriches it with
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
         * Fires event {@link #event:supplyAttributes supplyAttributes} to attached listeners.
         */
        fireSupplyAttributes(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The ExactAttribute
             */
            attribute?: sap.ui.ux3.ExactAttribute;
          }
        ): sap.ui.ux3.ExactAttribute;
        /**
         * Gets current value of property {@link #getAdditionalData additionalData}.
         *
         * An example for additional data are database keys
         */
        getAdditionalData(): object;
        /**
         * Gets content of aggregation {@link #getAttributes attributes}.
         *
         * Values (sub attributes) of this attribute
         */
        getAttributes(): sap.ui.ux3.ExactAttribute[];
        /**
         * Gets current value of property {@link #getAutoActivateSupply autoActivateSupply}.
         *
         * If you want the supply function to be called on every select, you can set the autoActivateSupply attribute
         * to true. In this case, supplyActive is automatically set to true on every unselect.
         *
         * Default value is `false`.
         */
        getAutoActivateSupply(): boolean;
        /**
         * @SINCE 1.7.1
         *
         * Gets current value of property {@link #getListOrder listOrder}.
         *
         * The order how the sublists of this attribute should be displayed.
         *
         * Default value is `Select`.
         */
        getListOrder(): sap.ui.ux3.ExactOrder;
        /**
         * Returns a metadata object for class sap.ui.ux3.ExactAttribute.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getSelected selected}.
         *
         * Specifies whether the attribute shall be selected
         */
        getSelected(): boolean;
        /**
         * Gets current value of property {@link #getShowSubAttributesIndicator showSubAttributesIndicator}.
         *
         * Specifies whether the attribute shall have sub values for visual purposes. The indicator which is a little
         * arrow beside an attribute in the list is computed automatically (getShowSubAttributesIndicator_Computed()
         * of sap.ui.ux3.ExactAttribute). In the case that a supply function is attached, and the supplyActive attribute
         * has value 'true', then the Exact pattern needs a hint if sub attributes are available. The showSubAttributesIndicator
         * attribute is considered then and has to be maintained. If the back-end does not support count-calls,
         * for example, showSubAttributesIndicator should be set to true.
         *
         * Default value is `true`.
         */
        getShowSubAttributesIndicator(): boolean;
        /**
         * See attribute showSubAttributesIndicator
         */
        getShowSubAttributesIndicator_Computed(): void;
        /**
         * Gets current value of property {@link #getSupplyActive supplyActive}.
         *
         * The supplyAttributes event is only fired if supplyActive has value true which is the default. After firing
         * the event, the attribute is automatically set to false. The idea is that a supply function is called
         * only once when the data is requested. To enable the event again it is possible to manually set the attribute
         * back to true.
         *
         * Default value is `true`.
         */
        getSupplyActive(): boolean;
        /**
         * Gets current value of property {@link #getText text}.
         *
         * The attribute name
         */
        getText(): string;
        /**
         * @SINCE 1.7.0
         *
         * Gets current value of property {@link #getWidth width}.
         *
         * Specifies the width of the corresponding list in pixels. The value must be between 70 and 500.
         *
         * Default value is `168`.
         */
        getWidth(): number;
        /**
         * Checks for the provided `sap.ui.ux3.ExactAttribute` in the aggregation {@link #getAttributes attributes}.
         * and returns its index if found or -1 otherwise.
         */
        indexOfAttribute(
          /**
           * The attribute whose index is looked for
           */
          oAttribute: sap.ui.ux3.ExactAttribute
        ): number;
        /**
         * Inserts a attribute into the aggregation {@link #getAttributes attributes}.
         */
        insertAttribute(
          /**
           * The attribute to insert; if empty, nothing is inserted
           */
          oAttribute: sap.ui.ux3.ExactAttribute,
          /**
           * The `0`-based index the attribute should be inserted at; for a negative value of `iIndex`, the attribute
           * is inserted at position 0; for a value greater than the current size of the aggregation, the attribute
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.ux3.ExactAttribute;
        /**
         * Removes all the controls from the aggregation {@link #getAttributes attributes}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllAttributes(): sap.ui.ux3.ExactAttribute[];
        /**
         * Removes a attribute from the aggregation {@link #getAttributes attributes}.
         */
        removeAttribute(
          /**
           * The attribute to remove or its index or id
           */
          vAttribute: number | string | sap.ui.ux3.ExactAttribute
        ): sap.ui.ux3.ExactAttribute;
        /**
         * Scrolls the corresponding list of this attribute until the given direct child attribute is visible. If
         * the corresponding list is not yet visible the call is buffered until the list is available.
         */
        scrollTo(
          /**
           * The direct child attribute
           */
          oOAttribute: sap.ui.ux3.ExactAttribute
        ): void;
        /**
         * Sets a new value for property {@link #getAdditionalData additionalData}.
         *
         * An example for additional data are database keys
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setAdditionalData(
          /**
           * New value for property `additionalData`
           */
          oAdditionalData: object
        ): sap.ui.ux3.ExactAttribute;
        /**
         * Sets a new value for property {@link #getAutoActivateSupply autoActivateSupply}.
         *
         * If you want the supply function to be called on every select, you can set the autoActivateSupply attribute
         * to true. In this case, supplyActive is automatically set to true on every unselect.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setAutoActivateSupply(
          /**
           * New value for property `autoActivateSupply`
           */
          bAutoActivateSupply: boolean
        ): sap.ui.ux3.ExactAttribute;
        /**
         * @SINCE 1.7.1
         *
         * Sets a new value for property {@link #getListOrder listOrder}.
         *
         * The order how the sublists of this attribute should be displayed.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Select`.
         */
        setListOrder(
          /**
           * New value for property `listOrder`
           */
          sListOrder: sap.ui.ux3.ExactOrder
        ): sap.ui.ux3.ExactAttribute;
        /**
         * See:
         * 	sap.ui.base.ManagedObject.prototype.setProperty
         */
        // @ts-ignore
        setProperty(
          sPropertyName: string,

          oValue: object,

          bSuppressRerendering: boolean
        ): void;
        /**
         * Sets a new value for property {@link #getSelected selected}.
         *
         * Specifies whether the attribute shall be selected
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setSelected(
          /**
           * New value for property `selected`
           */
          bSelected: boolean
        ): sap.ui.ux3.ExactAttribute;
        /**
         * Sets a new value for property {@link #getShowSubAttributesIndicator showSubAttributesIndicator}.
         *
         * Specifies whether the attribute shall have sub values for visual purposes. The indicator which is a little
         * arrow beside an attribute in the list is computed automatically (getShowSubAttributesIndicator_Computed()
         * of sap.ui.ux3.ExactAttribute). In the case that a supply function is attached, and the supplyActive attribute
         * has value 'true', then the Exact pattern needs a hint if sub attributes are available. The showSubAttributesIndicator
         * attribute is considered then and has to be maintained. If the back-end does not support count-calls,
         * for example, showSubAttributesIndicator should be set to true.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setShowSubAttributesIndicator(
          /**
           * New value for property `showSubAttributesIndicator`
           */
          bShowSubAttributesIndicator: boolean
        ): sap.ui.ux3.ExactAttribute;
        /**
         * Sets a new value for property {@link #getSupplyActive supplyActive}.
         *
         * The supplyAttributes event is only fired if supplyActive has value true which is the default. After firing
         * the event, the attribute is automatically set to false. The idea is that a supply function is called
         * only once when the data is requested. To enable the event again it is possible to manually set the attribute
         * back to true.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setSupplyActive(
          /**
           * New value for property `supplyActive`
           */
          bSupplyActive: boolean
        ): sap.ui.ux3.ExactAttribute;
        /**
         * Sets a new value for property {@link #getText text}.
         *
         * The attribute name
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setText(
          /**
           * New value for property `text`
           */
          sText: string
        ): sap.ui.ux3.ExactAttribute;
        /**
         * See:
         * 	sap.ui.core.Element.prototype.setTooltip
         */
        // @ts-ignore
        setTooltip(oTooltip: string | sap.ui.core.TooltipBase): void;
        /**
         * @SINCE 1.7.0
         *
         * Sets a new value for property {@link #getWidth width}.
         *
         * Specifies the width of the corresponding list in pixels. The value must be between 70 and 500.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `168`.
         */
        setWidth(
          /**
           * New value for property `width`
           */
          iWidth: number
        ): sap.ui.ux3.ExactAttribute;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:supplyAttributes supplyAttributes} event of
         * this `sap.ui.ux3.ExactAttribute`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.ExactAttribute` itself.
         *
         * A supply function is a handler which is attached to the supplyAttributes event. The event is fired when
         * the corresponding ExactAttribute is selected, it was already selected when a handler is attached or function
         * getAttributes() is called.
         */
        attachSupplyAttributes(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ExactAttribute` itself
           */
          oListener?: object
        ): sap.ui.ux3.ExactAttribute;
      }
      /**
       * @deprecated (since 1.38)
       *
       * Attribute browse area used within the Exact pattern. The main benefit of this control is the high flexibility
       * when large data amounts shall be displayed in the form of structured data sets with a high or low interdependency
       * level. From lists - which can be nested according to the defined attributes - the user can choose entries
       * and thereby trigger the display of further information, depending on the chosen entry/entries (multiple
       * selection supported).
       */
      class ExactBrowser extends sap.ui.core.Control {
        /**
         * Constructor for a new ExactBrowser.
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
          mSettings?: ExactBrowserOpts
        );

        /**
         * Adds some attribute to the aggregation {@link #getAttributes attributes}.
         */
        addAttribute(
          /**
           * The attribute to add; if empty, nothing is inserted
           */
          oAttribute: sap.ui.ux3.ExactAttribute
        ): sap.ui.ux3.ExactBrowser;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:attributeSelected attributeSelected} event of
         * this `sap.ui.ux3.ExactBrowser`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.ExactBrowser` itself.
         *
         * Event is fired when an attribute is selected or unselected.
         */
        attachAttributeSelected(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ExactBrowser` itself
           */
          oListener?: object
        ): sap.ui.ux3.ExactBrowser;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:save save} event of this `sap.ui.ux3.ExactBrowser`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.ExactBrowser` itself.
         *
         * Event is fired when an attribute is selected or unselected.
         */
        attachSave(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ExactBrowser` itself
           */
          oListener?: object
        ): sap.ui.ux3.ExactBrowser;
        /**
         * Destroys all the attributes in the aggregation {@link #getAttributes attributes}.
         */
        destroyAttributes(): sap.ui.ux3.ExactBrowser;
        /**
         * Destroys the optionsMenu in the aggregation {@link #getOptionsMenu optionsMenu}.
         */
        destroyOptionsMenu(): sap.ui.ux3.ExactBrowser;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:attributeSelected attributeSelected} event
         * of this `sap.ui.ux3.ExactBrowser`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachAttributeSelected(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.ExactBrowser;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:save save} event of this `sap.ui.ux3.ExactBrowser`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachSave(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.ExactBrowser;
        /**
         * Creates a new subclass of class sap.ui.ux3.ExactBrowser with name `sClassName` and enriches it with the
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
         * Fires event {@link #event:attributeSelected attributeSelected} to attached listeners.
         */
        fireAttributeSelected(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The attribute which was selected or unselected recently
             */
            attribute?: sap.ui.ux3.ExactAttribute;
            /**
             * Array of all selected ExactAttributes
             */
            allAttributes?: object;
          }
        ): sap.ui.ux3.ExactBrowser;
        /**
         * Fires event {@link #event:save save} to attached listeners.
         */
        fireSave(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ui.ux3.ExactBrowser;
        /**
         * Gets content of aggregation {@link #getAttributes attributes}.
         *
         * The attributes which shall be available.
         */
        getAttributes(): sap.ui.ux3.ExactAttribute[];
        /**
         * Gets current value of property {@link #getEnableListClose enableListClose}.
         *
         * Enables the close icons of the displayed lists.
         *
         * Default value is `false`.
         */
        getEnableListClose(): boolean;
        /**
         * Gets current value of property {@link #getEnableReset enableReset}.
         *
         * Whether the reset functionality should be available in the header area.
         *
         * Default value is `true`.
         */
        getEnableReset(): boolean;
        /**
         * @SINCE 1.9.2
         *
         * Gets current value of property {@link #getEnableSave enableSave}.
         *
         * Whether the save button should be available in the header area.
         *
         * Default value is `false`.
         */
        getEnableSave(): boolean;
        /**
         * ID of the element which is the current target of the association {@link #getFollowUpControl followUpControl},
         * or `null`.
         */
        getFollowUpControl(): sap.ui.core.ID;
        /**
         * Gets current value of property {@link #getHeaderTitle headerTitle}.
         *
         * Title text in the header of the Exact Browser.
         */
        getHeaderTitle(): string;
        /**
         * Gets current value of property {@link #getListHeight listHeight}.
         *
         * The height of the list area in px.
         *
         * Default value is `290`.
         */
        getListHeight(): number;
        /**
         * Returns a metadata object for class sap.ui.ux3.ExactBrowser.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets content of aggregation {@link #getOptionsMenu optionsMenu}.
         *
         * Menu with options. The menu can not used when the property showTopList is set to false.
         */
        getOptionsMenu(): sap.ui.commons.Menu;
        /**
         * Gets current value of property {@link #getShowHeader showHeader}.
         *
         * Whether the header area of the ExactBrowser should be shown.
         *
         * Default value is `false`.
         */
        getShowHeader(): boolean;
        /**
         * @SINCE 1.7.0
         *
         * Gets current value of property {@link #getShowTopList showTopList}.
         *
         * Whether the top list of the ExactBrowser should be shown. When the property is set to false the application
         * must ensure to select top level attributes appropriately.
         *
         * Default value is `true`.
         */
        getShowTopList(): boolean;
        /**
         * Gets current value of property {@link #getTitle title}.
         *
         * Title text in the list area of the Exact Browser. The title is not shown when the property showTopList
         * is set to false.
         */
        getTitle(): string;
        /**
         * @SINCE 1.7.1
         *
         * Gets current value of property {@link #getTopListOrder topListOrder}.
         *
         * The order how the sublists of the top level list should be displayed.
         *
         * Default value is `Select`.
         */
        getTopListOrder(): sap.ui.ux3.ExactOrder;
        /**
         * @SINCE 1.7.0
         *
         * Gets current value of property {@link #getTopListWidth topListWidth}.
         *
         * Specifies the width of the top list in pixels. The value must be between 70 and 500.
         *
         * Default value is `168`.
         */
        getTopListWidth(): number;
        /**
         * Checks for the provided `sap.ui.ux3.ExactAttribute` in the aggregation {@link #getAttributes attributes}.
         * and returns its index if found or -1 otherwise.
         */
        indexOfAttribute(
          /**
           * The attribute whose index is looked for
           */
          oAttribute: sap.ui.ux3.ExactAttribute
        ): number;
        /**
         * Inserts a attribute into the aggregation {@link #getAttributes attributes}.
         */
        insertAttribute(
          /**
           * The attribute to insert; if empty, nothing is inserted
           */
          oAttribute: sap.ui.ux3.ExactAttribute,
          /**
           * The `0`-based index the attribute should be inserted at; for a negative value of `iIndex`, the attribute
           * is inserted at position 0; for a value greater than the current size of the aggregation, the attribute
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.ux3.ExactBrowser;
        /**
         * Removes all the controls from the aggregation {@link #getAttributes attributes}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllAttributes(): sap.ui.ux3.ExactAttribute[];
        /**
         * Removes a attribute from the aggregation {@link #getAttributes attributes}.
         */
        removeAttribute(
          /**
           * The attribute to remove or its index or id
           */
          vAttribute: number | string | sap.ui.ux3.ExactAttribute
        ): sap.ui.ux3.ExactAttribute;
        /**
         * Deselects all currently selected attributes and closes all attribute lists.
         */
        reset(): void;
        /**
         * Sets a new value for property {@link #getEnableListClose enableListClose}.
         *
         * Enables the close icons of the displayed lists.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setEnableListClose(
          /**
           * New value for property `enableListClose`
           */
          bEnableListClose: boolean
        ): sap.ui.ux3.ExactBrowser;
        /**
         * Sets a new value for property {@link #getEnableReset enableReset}.
         *
         * Whether the reset functionality should be available in the header area.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setEnableReset(
          /**
           * New value for property `enableReset`
           */
          bEnableReset: boolean
        ): sap.ui.ux3.ExactBrowser;
        /**
         * @SINCE 1.9.2
         *
         * Sets a new value for property {@link #getEnableSave enableSave}.
         *
         * Whether the save button should be available in the header area.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setEnableSave(
          /**
           * New value for property `enableSave`
           */
          bEnableSave: boolean
        ): sap.ui.ux3.ExactBrowser;
        /**
         * Sets the associated {@link #getFollowUpControl followUpControl}.
         */
        setFollowUpControl(
          /**
           * ID of an element which becomes the new target of this followUpControl association; alternatively, an
           * element instance may be given
           */
          oFollowUpControl: sap.ui.core.ID | sap.ui.core.Control
        ): sap.ui.ux3.ExactBrowser;
        /**
         * Sets a new value for property {@link #getHeaderTitle headerTitle}.
         *
         * Title text in the header of the Exact Browser.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setHeaderTitle(
          /**
           * New value for property `headerTitle`
           */
          sHeaderTitle: string
        ): sap.ui.ux3.ExactBrowser;
        /**
         * Sets a new value for property {@link #getListHeight listHeight}.
         *
         * The height of the list area in px.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `290`.
         */
        setListHeight(
          /**
           * New value for property `listHeight`
           */
          iListHeight: number
        ): sap.ui.ux3.ExactBrowser;
        /**
         * Sets the aggregated {@link #getOptionsMenu optionsMenu}.
         */
        setOptionsMenu(
          /**
           * The optionsMenu to set
           */
          oOptionsMenu: sap.ui.commons.Menu
        ): sap.ui.ux3.ExactBrowser;
        /**
         * Sets a new value for property {@link #getShowHeader showHeader}.
         *
         * Whether the header area of the ExactBrowser should be shown.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setShowHeader(
          /**
           * New value for property `showHeader`
           */
          bShowHeader: boolean
        ): sap.ui.ux3.ExactBrowser;
        /**
         * @SINCE 1.7.0
         *
         * Sets a new value for property {@link #getShowTopList showTopList}.
         *
         * Whether the top list of the ExactBrowser should be shown. When the property is set to false the application
         * must ensure to select top level attributes appropriately.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setShowTopList(
          /**
           * New value for property `showTopList`
           */
          bShowTopList: boolean
        ): sap.ui.ux3.ExactBrowser;
        /**
         * Sets a new value for property {@link #getTitle title}.
         *
         * Title text in the list area of the Exact Browser. The title is not shown when the property showTopList
         * is set to false.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setTitle(
          /**
           * New value for property `title`
           */
          sTitle: string
        ): sap.ui.ux3.ExactBrowser;
        /**
         * @SINCE 1.7.1
         *
         * Sets a new value for property {@link #getTopListOrder topListOrder}.
         *
         * The order how the sublists of the top level list should be displayed.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Select`.
         */
        setTopListOrder(
          /**
           * New value for property `topListOrder`
           */
          sTopListOrder: sap.ui.ux3.ExactOrder
        ): sap.ui.ux3.ExactBrowser;
        /**
         * @SINCE 1.7.0
         *
         * Sets a new value for property {@link #getTopListWidth topListWidth}.
         *
         * Specifies the width of the top list in pixels. The value must be between 70 and 500.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `168`.
         */
        setTopListWidth(
          /**
           * New value for property `topListWidth`
           */
          iTopListWidth: number
        ): sap.ui.ux3.ExactBrowser;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:attributeSelected attributeSelected} event of
         * this `sap.ui.ux3.ExactBrowser`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.ExactBrowser` itself.
         *
         * Event is fired when an attribute is selected or unselected.
         */
        attachAttributeSelected(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ExactBrowser` itself
           */
          oListener?: object
        ): sap.ui.ux3.ExactBrowser;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:save save} event of this `sap.ui.ux3.ExactBrowser`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.ExactBrowser` itself.
         *
         * Event is fired when an attribute is selected or unselected.
         */
        attachSave(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ExactBrowser` itself
           */
          oListener?: object
        ): sap.ui.ux3.ExactBrowser;
      }
      /**
       * @deprecated (since 1.38) - replaced by {@link sap.m.FacetFilter}
       *
       * FacetFilter Control.
       */
      class FacetFilter extends sap.ui.core.Control {
        /**
         * Constructor for a new FacetFilter.
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
          mSettings?: FacetFilterOpts
        );

        /**
         * Adds some list to the aggregation {@link #getLists lists}.
         */
        addList(
          /**
           * The list to add; if empty, nothing is inserted
           */
          oList: sap.ui.ux3.FacetFilterList
        ): sap.ui.ux3.FacetFilter;
        /**
         * Destroys all the lists in the aggregation {@link #getLists lists}.
         */
        destroyLists(): sap.ui.ux3.FacetFilter;
        /**
         * Creates a new subclass of class sap.ui.ux3.FacetFilter with name `sClassName` and enriches it with the
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
         * Gets content of aggregation {@link #getLists lists}.
         *
         * Facet Filter list represents the list of the filter values and the title of this list.
         */
        getLists(): sap.ui.ux3.FacetFilterList[];
        /**
         * Returns a metadata object for class sap.ui.ux3.FacetFilter.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getVisibleItemCountMode visibleItemCountMode}.
         *
         * If the value is "Auto" - the Facet Filter takes the whole available height. If "Fixed" , then the default
         * number of Facet Filter Items (5) is visible.
         *
         * Default value is `Fixed`.
         */
        getVisibleItemCountMode(): sap.ui.ux3.VisibleItemCountMode;
        /**
         * Checks for the provided `sap.ui.ux3.FacetFilterList` in the aggregation {@link #getLists lists}. and
         * returns its index if found or -1 otherwise.
         */
        indexOfList(
          /**
           * The list whose index is looked for
           */
          oList: sap.ui.ux3.FacetFilterList
        ): number;
        /**
         * Inserts a list into the aggregation {@link #getLists lists}.
         */
        insertList(
          /**
           * The list to insert; if empty, nothing is inserted
           */
          oList: sap.ui.ux3.FacetFilterList,
          /**
           * The `0`-based index the list should be inserted at; for a negative value of `iIndex`, the list is inserted
           * at position 0; for a value greater than the current size of the aggregation, the list is inserted at
           * the last position
           */
          iIndex: number
        ): sap.ui.ux3.FacetFilter;
        /**
         * Removes all the controls from the aggregation {@link #getLists lists}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllLists(): sap.ui.ux3.FacetFilterList[];
        /**
         * Removes a list from the aggregation {@link #getLists lists}.
         */
        removeList(
          /**
           * The list to remove or its index or id
           */
          vList: number | string | sap.ui.ux3.FacetFilterList
        ): sap.ui.ux3.FacetFilterList;
        /**
         * Sets a new value for property {@link #getVisibleItemCountMode visibleItemCountMode}.
         *
         * If the value is "Auto" - the Facet Filter takes the whole available height. If "Fixed" , then the default
         * number of Facet Filter Items (5) is visible.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Fixed`.
         */
        setVisibleItemCountMode(
          /**
           * New value for property `visibleItemCountMode`
           */
          sVisibleItemCountMode: sap.ui.ux3.VisibleItemCountMode
        ): sap.ui.ux3.FacetFilter;
      }
      /**
       * @deprecated (since 1.38) - replaced by {@link sap.m.FacetFilter}
       *
       * List to be used with the FacetFilter control. The control is not intended to be used stand alone.
       */
      class FacetFilterList extends sap.ui.core.Control {
        /**
         * Constructor for a new FacetFilterList.
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
          mSettings?: FacetFilterListOpts
        );

        /**
         * Adds some item to the aggregation {@link #getItems items}.
         */
        addItem(
          /**
           * The item to add; if empty, nothing is inserted
           */
          oItem: sap.ui.core.ListItem
        ): sap.ui.ux3.FacetFilterList;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.ux3.FacetFilterList`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.FacetFilterList` itself.
         *
         * On Select event.
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.FacetFilterList` itself
           */
          oListener?: object
        ): sap.ui.ux3.FacetFilterList;
        /**
         * Destroys all the items in the aggregation {@link #getItems items}.
         */
        destroyItems(): sap.ui.ux3.FacetFilterList;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.ui.ux3.FacetFilterList`.
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
        ): sap.ui.ux3.FacetFilterList;
        /**
         * Creates a new subclass of class sap.ui.ux3.FacetFilterList with name `sClassName` and enriches it with
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
         * Fires event {@link #event:select select} to attached listeners.
         */
        fireSelect(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * Id of the FacetFilterList taht fires the event.
             */
            id?: string;
            /**
             * Array of selected Indices.
             */
            selectedIndices?: number[];
            /**
             * Array of selected Items.
             */
            selectedItems?: sap.ui.core.ListItem[];
            /**
             * If it is true, then Item All is selected. That means all items in the list are selected - no filter is
             * set.
             */
            all?: boolean;
          }
        ): sap.ui.ux3.FacetFilterList;
        /**
         * @SINCE 1.9.0
         *
         * Gets current value of property {@link #getDisplaySecondaryValues displaySecondaryValues}.
         *
         * Specifies whether the text values from the additionalText property (see sap.ui.core.ListItems) shall
         * be displayed.
         *
         * Default value is `false`.
         */
        getDisplaySecondaryValues(): boolean;
        /**
         * Gets content of aggregation {@link #getItems items}.
         *
         * The filter values that are presented as a list.
         */
        getItems(): sap.ui.core.ListItem[];
        /**
         * Returns a metadata object for class sap.ui.ux3.FacetFilterList.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getMultiSelect multiSelect}.
         *
         * Specifies whether multiple or single selection is used.
         *
         * Default value is `true`.
         */
        getMultiSelect(): boolean;
        /**
         * Gets current value of property {@link #getSelectedKeys selectedKeys}.
         *
         * Array of type string containing the selected keys.
         */
        getSelectedKeys(): string[];
        /**
         * Gets current value of property {@link #getShowCounter showCounter}.
         *
         * Specifies whether the counter for all entries is shown.
         *
         * Default value is `true`.
         */
        getShowCounter(): boolean;
        /**
         * Gets current value of property {@link #getTitle title}.
         *
         * The title of this list.
         */
        getTitle(): string;
        /**
         * Checks for the provided `sap.ui.core.ListItem` in the aggregation {@link #getItems items}. and returns
         * its index if found or -1 otherwise.
         */
        indexOfItem(
          /**
           * The item whose index is looked for
           */
          oItem: sap.ui.core.ListItem
        ): number;
        /**
         * Inserts a item into the aggregation {@link #getItems items}.
         */
        insertItem(
          /**
           * The item to insert; if empty, nothing is inserted
           */
          oItem: sap.ui.core.ListItem,
          /**
           * The `0`-based index the item should be inserted at; for a negative value of `iIndex`, the item is inserted
           * at position 0; for a value greater than the current size of the aggregation, the item is inserted at
           * the last position
           */
          iIndex: number
        ): sap.ui.ux3.FacetFilterList;
        /**
         * Removes all the controls from the aggregation {@link #getItems items}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllItems(): sap.ui.core.ListItem[];
        /**
         * Removes a item from the aggregation {@link #getItems items}.
         */
        removeItem(
          /**
           * The item to remove or its index or id
           */
          vItem: number | string | sap.ui.core.ListItem
        ): sap.ui.core.ListItem;
        /**
         * @SINCE 1.9.0
         *
         * Sets a new value for property {@link #getDisplaySecondaryValues displaySecondaryValues}.
         *
         * Specifies whether the text values from the additionalText property (see sap.ui.core.ListItems) shall
         * be displayed.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setDisplaySecondaryValues(
          /**
           * New value for property `displaySecondaryValues`
           */
          bDisplaySecondaryValues: boolean
        ): sap.ui.ux3.FacetFilterList;
        /**
         * Sets a new value for property {@link #getMultiSelect multiSelect}.
         *
         * Specifies whether multiple or single selection is used.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setMultiSelect(
          /**
           * New value for property `multiSelect`
           */
          bMultiSelect: boolean
        ): sap.ui.ux3.FacetFilterList;
        /**
         * Sets a new value for property {@link #getSelectedKeys selectedKeys}.
         *
         * Array of type string containing the selected keys.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setSelectedKeys(
          /**
           * New value for property `selectedKeys`
           */
          sSelectedKeys: string[]
        ): sap.ui.ux3.FacetFilterList;
        /**
         * Sets a new value for property {@link #getShowCounter showCounter}.
         *
         * Specifies whether the counter for all entries is shown.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setShowCounter(
          /**
           * New value for property `showCounter`
           */
          bShowCounter: boolean
        ): sap.ui.ux3.FacetFilterList;
        /**
         * Sets a new value for property {@link #getTitle title}.
         *
         * The title of this list.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setTitle(
          /**
           * New value for property `title`
           */
          sTitle: string
        ): sap.ui.ux3.FacetFilterList;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.ux3.FacetFilterList`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.FacetFilterList` itself.
         *
         * On Select event.
         */
        attachSelect(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.FacetFilterList` itself
           */
          oListener?: object
        ): sap.ui.ux3.FacetFilterList;
      }
      /**
       * @deprecated (since 1.38) - Instead, use **any** `sap.ui.layout` container control.
       * @EXPERIMENTAL (since 1.2)
       *
       * A container control representing a full feed page, including feeder and updates.
       */
      class Feed extends sap.ui.core.Control {
        /**
         * Constructor for a new Feed.
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
          mSettings?: FeedOpts
        );

        /**
         * Adds some chunk to the aggregation {@link #getChunks chunks}.
         */
        addChunk(
          /**
           * The chunk to add; if empty, nothing is inserted
           */
          oChunk: sap.ui.ux3.FeedChunk
        ): sap.ui.ux3.Feed;
        /**
         * Adds some filterItem to the aggregation {@link #getFilterItems filterItems}.
         */
        addFilterItem(
          /**
           * The filterItem to add; if empty, nothing is inserted
           */
          oFilterItem: sap.ui.core.ListItem
        ): sap.ui.ux3.Feed;
        /**
         * Adds some toolsMenuItem to the aggregation {@link #getToolsMenuItems toolsMenuItems}.
         */
        addToolsMenuItem(
          /**
           * The toolsMenuItem to add; if empty, nothing is inserted
           */
          oToolsMenuItem: sap.ui.commons.MenuItem
        ): sap.ui.ux3.Feed;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:chunkAdded chunkAdded} event of this `sap.ui.ux3.Feed`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.Feed` itself.
         *
         * Event is fired when a new chunk is added
         */
        attachChunkAdded(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Feed` itself
           */
          oListener?: object
        ): sap.ui.ux3.Feed;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:filterChange filterChange} event of this `sap.ui.ux3.Feed`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.Feed` itself.
         *
         * Event is fired when the filter is changed
         */
        attachFilterChange(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Feed` itself
           */
          oListener?: object
        ): sap.ui.ux3.Feed;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:search search} event of this `sap.ui.ux3.Feed`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.Feed` itself.
         *
         * Event is fired when the search function on SearchField is triggered
         */
        attachSearch(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Feed` itself
           */
          oListener?: object
        ): sap.ui.ux3.Feed;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:toggleLive toggleLive} event of this `sap.ui.ux3.Feed`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.Feed` itself.
         *
         * Event is fired when the live mode has changed
         */
        attachToggleLive(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Feed` itself
           */
          oListener?: object
        ): sap.ui.ux3.Feed;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:toolsItemSelected toolsItemSelected} event of
         * this `sap.ui.ux3.Feed`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.Feed` itself.
         *
         * Event is fired when an item from the tools MenuButton was selected
         */
        attachToolsItemSelected(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Feed` itself
           */
          oListener?: object
        ): sap.ui.ux3.Feed;
        /**
         * Binds aggregation {@link #getChunks chunks} to model data.
         *
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description
         * of the possible properties of `oBindingInfo`.
         */
        bindChunks(
          /**
           * The binding information
           */
          oBindingInfo: object
        ): sap.ui.ux3.Feed;
        /**
         * Binds aggregation {@link #getFilterItems filterItems} to model data.
         *
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description
         * of the possible properties of `oBindingInfo`.
         */
        bindFilterItems(
          /**
           * The binding information
           */
          oBindingInfo: object
        ): sap.ui.ux3.Feed;
        /**
         * Binds aggregation {@link #getToolsMenuItems toolsMenuItems} to model data.
         *
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description
         * of the possible properties of `oBindingInfo`.
         */
        bindToolsMenuItems(
          /**
           * The binding information
           */
          oBindingInfo: object
        ): sap.ui.ux3.Feed;
        /**
         * Destroys all the chunks in the aggregation {@link #getChunks chunks}.
         */
        destroyChunks(): sap.ui.ux3.Feed;
        /**
         * Destroys all the filterItems in the aggregation {@link #getFilterItems filterItems}.
         */
        destroyFilterItems(): sap.ui.ux3.Feed;
        /**
         * Destroys all the toolsMenuItems in the aggregation {@link #getToolsMenuItems toolsMenuItems}.
         */
        destroyToolsMenuItems(): sap.ui.ux3.Feed;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:chunkAdded chunkAdded} event of this `sap.ui.ux3.Feed`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachChunkAdded(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.Feed;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:filterChange filterChange} event of this `sap.ui.ux3.Feed`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachFilterChange(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.Feed;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:search search} event of this `sap.ui.ux3.Feed`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachSearch(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.Feed;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:toggleLive toggleLive} event of this `sap.ui.ux3.Feed`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachToggleLive(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.Feed;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:toolsItemSelected toolsItemSelected} event
         * of this `sap.ui.ux3.Feed`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachToolsItemSelected(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.Feed;
        /**
         * Creates a new subclass of class sap.ui.ux3.Feed with name `sClassName` and enriches it with the information
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
         * Fires event {@link #event:chunkAdded chunkAdded} to attached listeners.
         */
        fireChunkAdded(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * New chunk
             */
            chunk?: sap.ui.ux3.FeedChunk;
          }
        ): sap.ui.ux3.Feed;
        /**
         * Fires event {@link #event:filterChange filterChange} to attached listeners.
         */
        fireFilterChange(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The new/changed value of the filter
             */
            newValue?: string;
          }
        ): sap.ui.ux3.Feed;
        /**
         * Fires event {@link #event:search search} to attached listeners.
         */
        fireSearch(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The search query
             */
            query?: string;
          }
        ): sap.ui.ux3.Feed;
        /**
         * Fires event {@link #event:toggleLive toggleLive} to attached listeners.
         */
        fireToggleLive(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * Current live indicator
             */
            live?: boolean;
          }
        ): sap.ui.ux3.Feed;
        /**
         * Fires event {@link #event:toolsItemSelected toolsItemSelected} to attached listeners.
         */
        fireToolsItemSelected(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The Id of the selected item
             */
            itemId?: string;
            /**
             * The selected item
             */
            item?: sap.ui.unified.MenuItemBase;
          }
        ): sap.ui.ux3.Feed;
        /**
         * Gets content of aggregation {@link #getChunks chunks}.
         *
         * The chunks
         */
        getChunks(): sap.ui.ux3.FeedChunk[];
        /**
         * Gets current value of property {@link #getFeederSender feederSender}.
         *
         * The sender of the feeder
         */
        getFeederSender(): string;
        /**
         * Gets current value of property {@link #getFeederThumbnailSrc feederThumbnailSrc}.
         *
         * The path to the thumbnail image used for the feeder
         */
        getFeederThumbnailSrc(): sap.ui.core.URI;
        /**
         * Gets content of aggregation {@link #getFilterItems filterItems}.
         *
         * Items of the filter
         */
        getFilterItems(): sap.ui.core.ListItem[];
        /**
         * Gets current value of property {@link #getLive live}.
         *
         * Specifies whether the feed shall be in live mode
         *
         * Default value is `true`.
         */
        getLive(): boolean;
        /**
         * Returns a metadata object for class sap.ui.ux3.Feed.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getTitle title}.
         *
         * Title text of the Feed. If no text is entered "FEED" is displayed.
         */
        getTitle(): string;
        /**
         * Gets content of aggregation {@link #getToolsMenuItems toolsMenuItems}.
         *
         * MenuItems to open when the tool button is clicked by the user
         */
        getToolsMenuItems(): sap.ui.commons.MenuItem[];
        /**
         * Checks for the provided `sap.ui.ux3.FeedChunk` in the aggregation {@link #getChunks chunks}. and returns
         * its index if found or -1 otherwise.
         */
        indexOfChunk(
          /**
           * The chunk whose index is looked for
           */
          oChunk: sap.ui.ux3.FeedChunk
        ): number;
        /**
         * Checks for the provided `sap.ui.core.ListItem` in the aggregation {@link #getFilterItems filterItems}.
         * and returns its index if found or -1 otherwise.
         */
        indexOfFilterItem(
          /**
           * The filterItem whose index is looked for
           */
          oFilterItem: sap.ui.core.ListItem
        ): number;
        /**
         * Checks for the provided `sap.ui.commons.MenuItem` in the aggregation {@link #getToolsMenuItems toolsMenuItems}.
         * and returns its index if found or -1 otherwise.
         */
        indexOfToolsMenuItem(
          /**
           * The toolsMenuItem whose index is looked for
           */
          oToolsMenuItem: sap.ui.commons.MenuItem
        ): number;
        /**
         * Inserts a chunk into the aggregation {@link #getChunks chunks}.
         */
        insertChunk(
          /**
           * The chunk to insert; if empty, nothing is inserted
           */
          oChunk: sap.ui.ux3.FeedChunk,
          /**
           * The `0`-based index the chunk should be inserted at; for a negative value of `iIndex`, the chunk is inserted
           * at position 0; for a value greater than the current size of the aggregation, the chunk is inserted at
           * the last position
           */
          iIndex: number
        ): sap.ui.ux3.Feed;
        /**
         * Inserts a filterItem into the aggregation {@link #getFilterItems filterItems}.
         */
        insertFilterItem(
          /**
           * The filterItem to insert; if empty, nothing is inserted
           */
          oFilterItem: sap.ui.core.ListItem,
          /**
           * The `0`-based index the filterItem should be inserted at; for a negative value of `iIndex`, the filterItem
           * is inserted at position 0; for a value greater than the current size of the aggregation, the filterItem
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.ux3.Feed;
        /**
         * Inserts a toolsMenuItem into the aggregation {@link #getToolsMenuItems toolsMenuItems}.
         */
        insertToolsMenuItem(
          /**
           * The toolsMenuItem to insert; if empty, nothing is inserted
           */
          oToolsMenuItem: sap.ui.commons.MenuItem,
          /**
           * The `0`-based index the toolsMenuItem should be inserted at; for a negative value of `iIndex`, the toolsMenuItem
           * is inserted at position 0; for a value greater than the current size of the aggregation, the toolsMenuItem
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.ux3.Feed;
        /**
         * Removes all the controls from the aggregation {@link #getChunks chunks}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllChunks(): sap.ui.ux3.FeedChunk[];
        /**
         * Removes all the controls from the aggregation {@link #getFilterItems filterItems}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllFilterItems(): sap.ui.core.ListItem[];
        /**
         * Removes all the controls from the aggregation {@link #getToolsMenuItems toolsMenuItems}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllToolsMenuItems(): sap.ui.commons.MenuItem[];
        /**
         * Removes a chunk from the aggregation {@link #getChunks chunks}.
         */
        removeChunk(
          /**
           * The chunk to remove or its index or id
           */
          vChunk: number | string | sap.ui.ux3.FeedChunk
        ): sap.ui.ux3.FeedChunk;
        /**
         * Removes a filterItem from the aggregation {@link #getFilterItems filterItems}.
         */
        removeFilterItem(
          /**
           * The filterItem to remove or its index or id
           */
          vFilterItem: number | string | sap.ui.core.ListItem
        ): sap.ui.core.ListItem;
        /**
         * Removes a toolsMenuItem from the aggregation {@link #getToolsMenuItems toolsMenuItems}.
         */
        removeToolsMenuItem(
          /**
           * The toolsMenuItem to remove or its index or id
           */
          vToolsMenuItem: number | string | sap.ui.commons.MenuItem
        ): sap.ui.commons.MenuItem;
        /**
         * Sets a new value for property {@link #getFeederSender feederSender}.
         *
         * The sender of the feeder
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setFeederSender(
          /**
           * New value for property `feederSender`
           */
          sFeederSender: string
        ): sap.ui.ux3.Feed;
        /**
         * Sets a new value for property {@link #getFeederThumbnailSrc feederThumbnailSrc}.
         *
         * The path to the thumbnail image used for the feeder
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setFeederThumbnailSrc(
          /**
           * New value for property `feederThumbnailSrc`
           */
          sFeederThumbnailSrc: sap.ui.core.URI
        ): sap.ui.ux3.Feed;
        /**
         * Sets a new value for property {@link #getLive live}.
         *
         * Specifies whether the feed shall be in live mode
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setLive(
          /**
           * New value for property `live`
           */
          bLive: boolean
        ): sap.ui.ux3.Feed;
        /**
         * Sets a new value for property {@link #getTitle title}.
         *
         * Title text of the Feed. If no text is entered "FEED" is displayed.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setTitle(
          /**
           * New value for property `title`
           */
          sTitle: string
        ): sap.ui.ux3.Feed;
        /**
         * Unbinds aggregation {@link #getChunks chunks} from model data.
         */
        unbindChunks(): sap.ui.ux3.Feed;
        /**
         * Unbinds aggregation {@link #getFilterItems filterItems} from model data.
         */
        unbindFilterItems(): sap.ui.ux3.Feed;
        /**
         * Unbinds aggregation {@link #getToolsMenuItems toolsMenuItems} from model data.
         */
        unbindToolsMenuItems(): sap.ui.ux3.Feed;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:chunkAdded chunkAdded} event of this `sap.ui.ux3.Feed`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.Feed` itself.
         *
         * Event is fired when a new chunk is added
         */
        attachChunkAdded(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Feed` itself
           */
          oListener?: object
        ): sap.ui.ux3.Feed;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:filterChange filterChange} event of this `sap.ui.ux3.Feed`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.Feed` itself.
         *
         * Event is fired when the filter is changed
         */
        attachFilterChange(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Feed` itself
           */
          oListener?: object
        ): sap.ui.ux3.Feed;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:search search} event of this `sap.ui.ux3.Feed`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.Feed` itself.
         *
         * Event is fired when the search function on SearchField is triggered
         */
        attachSearch(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Feed` itself
           */
          oListener?: object
        ): sap.ui.ux3.Feed;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:toggleLive toggleLive} event of this `sap.ui.ux3.Feed`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.Feed` itself.
         *
         * Event is fired when the live mode has changed
         */
        attachToggleLive(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Feed` itself
           */
          oListener?: object
        ): sap.ui.ux3.Feed;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:toolsItemSelected toolsItemSelected} event of
         * this `sap.ui.ux3.Feed`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.Feed` itself.
         *
         * Event is fired when an item from the tools MenuButton was selected
         */
        attachToolsItemSelected(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Feed` itself
           */
          oListener?: object
        ): sap.ui.ux3.Feed;
      }
      /**
       * @deprecated (since 1.38) - Instead, use the `sap.m.FeedListItem` control.
       * @EXPERIMENTAL (since 1.2)
       *
       * The unit that is embedded - single-wise or in a multiple way - into a Feed control. The control provides
       * a set of properties for text, sender information, time stamp, comments, and functions such as flagging
       * the entry to be favorite, shared, or flagged.
       */
      class FeedChunk extends sap.ui.core.Control {
        /**
         * Constructor for a new FeedChunk.
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
          mSettings?: FeedChunkOpts
        );

        /**
         * Adds some actionMenuItem to the aggregation {@link #getActionMenuItems actionMenuItems}.
         */
        addActionMenuItem(
          /**
           * The actionMenuItem to add; if empty, nothing is inserted
           */
          oActionMenuItem: sap.ui.commons.MenuItem
        ): sap.ui.ux3.FeedChunk;
        /**
         * Adds some comment to the aggregation {@link #getComments comments}.
         */
        addComment(
          /**
           * The comment to add; if empty, nothing is inserted
           */
          oComment: sap.ui.ux3.FeedChunk
        ): sap.ui.ux3.FeedChunk;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:actionItemSelected actionItemSelected} event
         * of this `sap.ui.ux3.FeedChunk`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
         *
         * Event is fired when an item from the action menu button was selected.
         */
        attachActionItemSelected(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.FeedChunk` itself
           */
          oListener?: object
        ): sap.ui.ux3.FeedChunk;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:commentAdded commentAdded} event of this `sap.ui.ux3.FeedChunk`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
         *
         * Event is raised when a comment is added to the entry. This event is not supported for comment chunks.
         */
        attachCommentAdded(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.FeedChunk` itself
           */
          oListener?: object
        ): sap.ui.ux3.FeedChunk;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:deleted deleted} event of this `sap.ui.ux3.FeedChunk`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
         *
         * Event is fired when the deletion button is pressed.
         */
        attachDeleted(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.FeedChunk` itself
           */
          oListener?: object
        ): sap.ui.ux3.FeedChunk;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:inspect inspect} event of this `sap.ui.ux3.FeedChunk`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
         *
         * Event is fired when the inspect button was pressed
         */
        attachInspect(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.FeedChunk` itself
           */
          oListener?: object
        ): sap.ui.ux3.FeedChunk;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:referenceClicked referenceClicked} event of
         * this `sap.ui.ux3.FeedChunk`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
         *
         * Click on a @-reference
         */
        attachReferenceClicked(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.FeedChunk` itself
           */
          oListener?: object
        ): sap.ui.ux3.FeedChunk;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:senderClicked senderClicked} event of this `sap.ui.ux3.FeedChunk`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
         *
         * Event is fired when the thumbnail or the name of the sender is clicked.
         */
        attachSenderClicked(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.FeedChunk` itself
           */
          oListener?: object
        ): sap.ui.ux3.FeedChunk;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:toggleFavorite toggleFavorite} event of this
         * `sap.ui.ux3.FeedChunk`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
         *
         * Event is raised when the user clicks to set the entry as favorite. This event is not supported for comment
         * chunks.
         */
        attachToggleFavorite(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.FeedChunk` itself
           */
          oListener?: object
        ): sap.ui.ux3.FeedChunk;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:toggleFlagged toggleFlagged} event of this `sap.ui.ux3.FeedChunk`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
         *
         * Event is raised when the user clicks to flag the entry. This event is not supported for comment chunks.
         */
        attachToggleFlagged(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.FeedChunk` itself
           */
          oListener?: object
        ): sap.ui.ux3.FeedChunk;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:toggleShared toggleShared} event of this `sap.ui.ux3.FeedChunk`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
         *
         * Event is raised when the user clicks to share the entry. This event is not supported for comment chunks.
         */
        attachToggleShared(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.FeedChunk` itself
           */
          oListener?: object
        ): sap.ui.ux3.FeedChunk;
        /**
         * Binds aggregation {@link #getActionMenuItems actionMenuItems} to model data.
         *
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description
         * of the possible properties of `oBindingInfo`.
         */
        bindActionMenuItems(
          /**
           * The binding information
           */
          oBindingInfo: object
        ): sap.ui.ux3.FeedChunk;
        /**
         * Binds aggregation {@link #getComments comments} to model data.
         *
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description
         * of the possible properties of `oBindingInfo`.
         */
        bindComments(
          /**
           * The binding information
           */
          oBindingInfo: object
        ): sap.ui.ux3.FeedChunk;
        /**
         * Destroys all the actionMenuItems in the aggregation {@link #getActionMenuItems actionMenuItems}.
         */
        destroyActionMenuItems(): sap.ui.ux3.FeedChunk;
        /**
         * Destroys all the comments in the aggregation {@link #getComments comments}.
         */
        destroyComments(): sap.ui.ux3.FeedChunk;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:actionItemSelected actionItemSelected} event
         * of this `sap.ui.ux3.FeedChunk`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachActionItemSelected(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.FeedChunk;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:commentAdded commentAdded} event of this `sap.ui.ux3.FeedChunk`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachCommentAdded(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.FeedChunk;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:deleted deleted} event of this `sap.ui.ux3.FeedChunk`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachDeleted(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.FeedChunk;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:inspect inspect} event of this `sap.ui.ux3.FeedChunk`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachInspect(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.FeedChunk;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:referenceClicked referenceClicked} event of
         * this `sap.ui.ux3.FeedChunk`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachReferenceClicked(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.FeedChunk;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:senderClicked senderClicked} event of this
         * `sap.ui.ux3.FeedChunk`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachSenderClicked(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.FeedChunk;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:toggleFavorite toggleFavorite} event of this
         * `sap.ui.ux3.FeedChunk`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachToggleFavorite(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.FeedChunk;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:toggleFlagged toggleFlagged} event of this
         * `sap.ui.ux3.FeedChunk`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachToggleFlagged(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.FeedChunk;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:toggleShared toggleShared} event of this `sap.ui.ux3.FeedChunk`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachToggleShared(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.FeedChunk;
        /**
         * Creates a new subclass of class sap.ui.ux3.FeedChunk with name `sClassName` and enriches it with the
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
         * Fires event {@link #event:actionItemSelected actionItemSelected} to attached listeners.
         */
        fireActionItemSelected(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The Id of the selected item
             */
            itemId?: string;
            /**
             * The selected item
             */
            item?: sap.ui.unified.MenuItemBase;
          }
        ): sap.ui.ux3.FeedChunk;
        /**
         * Fires event {@link #event:commentAdded commentAdded} to attached listeners.
         */
        fireCommentAdded(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * New comment chunk
             */
            comment?: sap.ui.ux3.FeedChunk;
          }
        ): sap.ui.ux3.FeedChunk;
        /**
         * Fires event {@link #event:deleted deleted} to attached listeners.
         */
        fireDeleted(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ui.ux3.FeedChunk;
        /**
         * Fires event {@link #event:inspect inspect} to attached listeners.
         */
        fireInspect(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ui.ux3.FeedChunk;
        /**
         * Fires event {@link #event:referenceClicked referenceClicked} to attached listeners.
         */
        fireReferenceClicked(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * Text of the @-reference
             */
            text?: string;
          }
        ): sap.ui.ux3.FeedChunk;
        /**
         * Fires event {@link #event:senderClicked senderClicked} to attached listeners.
         */
        fireSenderClicked(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ui.ux3.FeedChunk;
        /**
         * Fires event {@link #event:toggleFavorite toggleFavorite} to attached listeners.
         */
        fireToggleFavorite(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * Current favorite state
             */
            favorite?: boolean;
          }
        ): sap.ui.ux3.FeedChunk;
        /**
         * Fires event {@link #event:toggleFlagged toggleFlagged} to attached listeners.
         */
        fireToggleFlagged(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * Current flagged state
             */
            flagged?: boolean;
          }
        ): sap.ui.ux3.FeedChunk;
        /**
         * Fires event {@link #event:toggleShared toggleShared} to attached listeners.
         */
        fireToggleShared(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * Current shared state
             */
            shareed?: boolean;
          }
        ): sap.ui.ux3.FeedChunk;
        /**
         * Gets content of aggregation {@link #getActionMenuItems actionMenuItems}.
         *
         * MenuItems to open when there is a click on the action menu button
         */
        getActionMenuItems(): sap.ui.commons.MenuItem[];
        /**
         * @deprecated (since 1.4.0) - Not longer used. If a chunk is a comment is determined from hierarchy. If
         * the parent is a chunk it's automatically a comment.
         *
         * Gets current value of property {@link #getCommentChunk commentChunk}.
         *
         * This flag changes a FeedChunk into a CommentChunk. In this case, it can not have own comments, furthermore
         * it must be assigned to a FeedChunk.
         *
         * Default value is `false`.
         */
        getCommentChunk(): boolean;
        /**
         * Gets content of aggregation {@link #getComments comments}.
         *
         * Comments on this chunk
         */
        getComments(): sap.ui.ux3.FeedChunk[];
        /**
         * Gets current value of property {@link #getDeletionAllowed deletionAllowed}.
         *
         * Flag if the deletion of the chunk shall be allowed
         *
         * Default value is `false`.
         */
        getDeletionAllowed(): boolean;
        /**
         * Gets current value of property {@link #getEnableComment enableComment}.
         *
         * If true the comment action is enabled.
         *
         * Default value is `true`.
         */
        getEnableComment(): boolean;
        /**
         * Gets current value of property {@link #getEnableFavorite enableFavorite}.
         *
         * If true the favorite action is enabled.
         *
         * Default value is `true`.
         */
        getEnableFavorite(): boolean;
        /**
         * Gets current value of property {@link #getEnableFlag enableFlag}.
         *
         * If true the flag action is enabled.
         *
         * Default value is `true`.
         */
        getEnableFlag(): boolean;
        /**
         * Gets current value of property {@link #getEnableInspect enableInspect}.
         *
         * If true the inspect action is enabled.
         *
         * Default value is `true`.
         */
        getEnableInspect(): boolean;
        /**
         * Gets current value of property {@link #getEnableShare enableShare}.
         *
         * If true the share action is enabled.
         *
         * Default value is `true`.
         */
        getEnableShare(): boolean;
        /**
         * Gets current value of property {@link #getFavorite favorite}.
         *
         * Defines whether the entry shall be displayed as favorite. This property is not supported for comment
         * chunks.
         */
        getFavorite(): boolean;
        /**
         * Gets current value of property {@link #getFeederSender feederSender}.
         *
         * Sender for the comment feeder This property is optional if the chunk is a sub-control of a feed control.
         * In this case the value of the feed control is used if it's not set. So it must be only set once on the
         * feed control.
         */
        getFeederSender(): string;
        /**
         * Gets current value of property {@link #getFeederThumbnailSrc feederThumbnailSrc}.
         *
         * URL to the thumbnail image for the comment feeder. This property is optional if the chunk is a sub-control
         * of a feed control. In this case the value of the feed control is used if it's not set. So it must be
         * only set once on the feed control.
         */
        getFeederThumbnailSrc(): sap.ui.core.URI;
        /**
         * Gets current value of property {@link #getFlagged flagged}.
         *
         * Defines whether the entry is flagged. This property is not supported for comment chunks.
         *
         * Default value is `false`.
         */
        getFlagged(): boolean;
        /**
         * Returns a metadata object for class sap.ui.ux3.FeedChunk.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getSender sender}.
         *
         * Sender of the chunk
         */
        getSender(): string;
        /**
         * Gets current value of property {@link #getShared shared}.
         *
         * Defines whether the entry shall be shared. This property is not supported for comment chunks.
         *
         * Default value is `false`.
         */
        getShared(): boolean;
        /**
         * Gets current value of property {@link #getText text}.
         *
         * The FeedChunk text. @References are supported.
         */
        getText(): string;
        /**
         * Gets current value of property {@link #getThumbnailSrc thumbnailSrc}.
         *
         * URL to the thumbnail image.
         */
        getThumbnailSrc(): sap.ui.core.URI;
        /**
         * Gets current value of property {@link #getTimestamp timestamp}.
         *
         * Format is ISO 8601 YYYY-MM-DDThh:mm:ss.sZ, Z meaning the time is in UTC time zone
         */
        getTimestamp(): string;
        /**
         * Checks for the provided `sap.ui.commons.MenuItem` in the aggregation {@link #getActionMenuItems actionMenuItems}.
         * and returns its index if found or -1 otherwise.
         */
        indexOfActionMenuItem(
          /**
           * The actionMenuItem whose index is looked for
           */
          oActionMenuItem: sap.ui.commons.MenuItem
        ): number;
        /**
         * Checks for the provided `sap.ui.ux3.FeedChunk` in the aggregation {@link #getComments comments}. and
         * returns its index if found or -1 otherwise.
         */
        indexOfComment(
          /**
           * The comment whose index is looked for
           */
          oComment: sap.ui.ux3.FeedChunk
        ): number;
        /**
         * Inserts a actionMenuItem into the aggregation {@link #getActionMenuItems actionMenuItems}.
         */
        insertActionMenuItem(
          /**
           * The actionMenuItem to insert; if empty, nothing is inserted
           */
          oActionMenuItem: sap.ui.commons.MenuItem,
          /**
           * The `0`-based index the actionMenuItem should be inserted at; for a negative value of `iIndex`, the actionMenuItem
           * is inserted at position 0; for a value greater than the current size of the aggregation, the actionMenuItem
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.ux3.FeedChunk;
        /**
         * Inserts a comment into the aggregation {@link #getComments comments}.
         */
        insertComment(
          /**
           * The comment to insert; if empty, nothing is inserted
           */
          oComment: sap.ui.ux3.FeedChunk,
          /**
           * The `0`-based index the comment should be inserted at; for a negative value of `iIndex`, the comment
           * is inserted at position 0; for a value greater than the current size of the aggregation, the comment
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.ux3.FeedChunk;
        /**
         * Removes a actionMenuItem from the aggregation {@link #getActionMenuItems actionMenuItems}.
         */
        removeActionMenuItem(
          /**
           * The actionMenuItem to remove or its index or id
           */
          vActionMenuItem: number | string | sap.ui.commons.MenuItem
        ): sap.ui.commons.MenuItem;
        /**
         * Removes all the controls from the aggregation {@link #getActionMenuItems actionMenuItems}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllActionMenuItems(): sap.ui.commons.MenuItem[];
        /**
         * Removes all the controls from the aggregation {@link #getComments comments}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllComments(): sap.ui.ux3.FeedChunk[];
        /**
         * Removes a comment from the aggregation {@link #getComments comments}.
         */
        removeComment(
          /**
           * The comment to remove or its index or id
           */
          vComment: number | string | sap.ui.ux3.FeedChunk
        ): sap.ui.ux3.FeedChunk;
        /**
         * @deprecated (since 1.4.0) - Not longer used. If a chunk is a comment is determined from hierarchy. If
         * the parent is a chunk it's automatically a comment.
         *
         * Sets a new value for property {@link #getCommentChunk commentChunk}.
         *
         * This flag changes a FeedChunk into a CommentChunk. In this case, it can not have own comments, furthermore
         * it must be assigned to a FeedChunk.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setCommentChunk(
          /**
           * New value for property `commentChunk`
           */
          bCommentChunk: boolean
        ): sap.ui.ux3.FeedChunk;
        /**
         * Sets a new value for property {@link #getDeletionAllowed deletionAllowed}.
         *
         * Flag if the deletion of the chunk shall be allowed
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setDeletionAllowed(
          /**
           * New value for property `deletionAllowed`
           */
          bDeletionAllowed: boolean
        ): sap.ui.ux3.FeedChunk;
        /**
         * Sets a new value for property {@link #getEnableComment enableComment}.
         *
         * If true the comment action is enabled.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setEnableComment(
          /**
           * New value for property `enableComment`
           */
          bEnableComment: boolean
        ): sap.ui.ux3.FeedChunk;
        /**
         * Sets a new value for property {@link #getEnableFavorite enableFavorite}.
         *
         * If true the favorite action is enabled.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setEnableFavorite(
          /**
           * New value for property `enableFavorite`
           */
          bEnableFavorite: boolean
        ): sap.ui.ux3.FeedChunk;
        /**
         * Sets a new value for property {@link #getEnableFlag enableFlag}.
         *
         * If true the flag action is enabled.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setEnableFlag(
          /**
           * New value for property `enableFlag`
           */
          bEnableFlag: boolean
        ): sap.ui.ux3.FeedChunk;
        /**
         * Sets a new value for property {@link #getEnableInspect enableInspect}.
         *
         * If true the inspect action is enabled.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setEnableInspect(
          /**
           * New value for property `enableInspect`
           */
          bEnableInspect: boolean
        ): sap.ui.ux3.FeedChunk;
        /**
         * Sets a new value for property {@link #getEnableShare enableShare}.
         *
         * If true the share action is enabled.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setEnableShare(
          /**
           * New value for property `enableShare`
           */
          bEnableShare: boolean
        ): sap.ui.ux3.FeedChunk;
        /**
         * Sets a new value for property {@link #getFavorite favorite}.
         *
         * Defines whether the entry shall be displayed as favorite. This property is not supported for comment
         * chunks.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setFavorite(
          /**
           * New value for property `favorite`
           */
          bFavorite: boolean
        ): sap.ui.ux3.FeedChunk;
        /**
         * Sets a new value for property {@link #getFeederSender feederSender}.
         *
         * Sender for the comment feeder This property is optional if the chunk is a sub-control of a feed control.
         * In this case the value of the feed control is used if it's not set. So it must be only set once on the
         * feed control.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setFeederSender(
          /**
           * New value for property `feederSender`
           */
          sFeederSender: string
        ): sap.ui.ux3.FeedChunk;
        /**
         * Sets a new value for property {@link #getFeederThumbnailSrc feederThumbnailSrc}.
         *
         * URL to the thumbnail image for the comment feeder. This property is optional if the chunk is a sub-control
         * of a feed control. In this case the value of the feed control is used if it's not set. So it must be
         * only set once on the feed control.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setFeederThumbnailSrc(
          /**
           * New value for property `feederThumbnailSrc`
           */
          sFeederThumbnailSrc: sap.ui.core.URI
        ): sap.ui.ux3.FeedChunk;
        /**
         * Sets a new value for property {@link #getFlagged flagged}.
         *
         * Defines whether the entry is flagged. This property is not supported for comment chunks.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setFlagged(
          /**
           * New value for property `flagged`
           */
          bFlagged: boolean
        ): sap.ui.ux3.FeedChunk;
        /**
         * Sets a new value for property {@link #getSender sender}.
         *
         * Sender of the chunk
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setSender(
          /**
           * New value for property `sender`
           */
          sSender: string
        ): sap.ui.ux3.FeedChunk;
        /**
         * Sets a new value for property {@link #getShared shared}.
         *
         * Defines whether the entry shall be shared. This property is not supported for comment chunks.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setShared(
          /**
           * New value for property `shared`
           */
          bShared: boolean
        ): sap.ui.ux3.FeedChunk;
        /**
         * Sets a new value for property {@link #getText text}.
         *
         * The FeedChunk text. @References are supported.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setText(
          /**
           * New value for property `text`
           */
          sText: string
        ): sap.ui.ux3.FeedChunk;
        /**
         * Sets a new value for property {@link #getThumbnailSrc thumbnailSrc}.
         *
         * URL to the thumbnail image.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setThumbnailSrc(
          /**
           * New value for property `thumbnailSrc`
           */
          sThumbnailSrc: sap.ui.core.URI
        ): sap.ui.ux3.FeedChunk;
        /**
         * Sets a new value for property {@link #getTimestamp timestamp}.
         *
         * Format is ISO 8601 YYYY-MM-DDThh:mm:ss.sZ, Z meaning the time is in UTC time zone
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setTimestamp(
          /**
           * New value for property `timestamp`
           */
          sTimestamp: string
        ): sap.ui.ux3.FeedChunk;
        /**
         * Unbinds aggregation {@link #getActionMenuItems actionMenuItems} from model data.
         */
        unbindActionMenuItems(): sap.ui.ux3.FeedChunk;
        /**
         * Unbinds aggregation {@link #getComments comments} from model data.
         */
        unbindComments(): sap.ui.ux3.FeedChunk;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:actionItemSelected actionItemSelected} event
         * of this `sap.ui.ux3.FeedChunk`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
         *
         * Event is fired when an item from the action menu button was selected.
         */
        attachActionItemSelected(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.FeedChunk` itself
           */
          oListener?: object
        ): sap.ui.ux3.FeedChunk;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:commentAdded commentAdded} event of this `sap.ui.ux3.FeedChunk`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
         *
         * Event is raised when a comment is added to the entry. This event is not supported for comment chunks.
         */
        attachCommentAdded(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.FeedChunk` itself
           */
          oListener?: object
        ): sap.ui.ux3.FeedChunk;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:deleted deleted} event of this `sap.ui.ux3.FeedChunk`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
         *
         * Event is fired when the deletion button is pressed.
         */
        attachDeleted(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.FeedChunk` itself
           */
          oListener?: object
        ): sap.ui.ux3.FeedChunk;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:inspect inspect} event of this `sap.ui.ux3.FeedChunk`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
         *
         * Event is fired when the inspect button was pressed
         */
        attachInspect(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.FeedChunk` itself
           */
          oListener?: object
        ): sap.ui.ux3.FeedChunk;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:referenceClicked referenceClicked} event of
         * this `sap.ui.ux3.FeedChunk`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
         *
         * Click on a @-reference
         */
        attachReferenceClicked(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.FeedChunk` itself
           */
          oListener?: object
        ): sap.ui.ux3.FeedChunk;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:senderClicked senderClicked} event of this `sap.ui.ux3.FeedChunk`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
         *
         * Event is fired when the thumbnail or the name of the sender is clicked.
         */
        attachSenderClicked(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.FeedChunk` itself
           */
          oListener?: object
        ): sap.ui.ux3.FeedChunk;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:toggleFavorite toggleFavorite} event of this
         * `sap.ui.ux3.FeedChunk`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
         *
         * Event is raised when the user clicks to set the entry as favorite. This event is not supported for comment
         * chunks.
         */
        attachToggleFavorite(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.FeedChunk` itself
           */
          oListener?: object
        ): sap.ui.ux3.FeedChunk;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:toggleFlagged toggleFlagged} event of this `sap.ui.ux3.FeedChunk`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
         *
         * Event is raised when the user clicks to flag the entry. This event is not supported for comment chunks.
         */
        attachToggleFlagged(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.FeedChunk` itself
           */
          oListener?: object
        ): sap.ui.ux3.FeedChunk;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:toggleShared toggleShared} event of this `sap.ui.ux3.FeedChunk`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
         *
         * Event is raised when the user clicks to share the entry. This event is not supported for comment chunks.
         */
        attachToggleShared(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.FeedChunk` itself
           */
          oListener?: object
        ): sap.ui.ux3.FeedChunk;
      }
      /**
       * @deprecated (since 1.38) - Instead, use the `sap.m.FeedInput` control.
       * @EXPERIMENTAL (since 1.2)
       *
       * This feed control flavor represents a lean common feed, or a comment feed, with a text commit function.
       * The control can be used stand alone or in a multiple way, and generally would be integrated directly
       * into a UIArea.
       */
      class Feeder extends sap.ui.core.Control {
        /**
         * Constructor for a new Feeder.
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
          mSettings?: FeederOpts
        );

        /**
         * Attaches event handler `fnFunction` to the {@link #event:submit submit} event of this `sap.ui.ux3.Feeder`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.Feeder` itself.
         *
         * Event is fired when the entered text is submitted
         */
        attachSubmit(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Feeder` itself
           */
          oListener?: object
        ): sap.ui.ux3.Feeder;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:submit submit} event of this `sap.ui.ux3.Feeder`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachSubmit(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.Feeder;
        /**
         * Creates a new subclass of class sap.ui.ux3.Feeder with name `sClassName` and enriches it with the information
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
         * Fires event {@link #event:submit submit} to attached listeners.
         */
        fireSubmit(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The text that is submitted
             */
            text?: string;
          }
        ): sap.ui.ux3.Feeder;
        /**
         * Returns a metadata object for class sap.ui.ux3.Feeder.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getPlaceholderText placeholderText}.
         *
         * This property could be used for costum placeholder. If it is not set, the default text is used.
         */
        getPlaceholderText(): string;
        /**
         * Gets current value of property {@link #getText text}.
         *
         * The text for the Feeder. @References are supported.
         */
        getText(): string;
        /**
         * Gets current value of property {@link #getThumbnailSrc thumbnailSrc}.
         *
         * URL to the thumb nail image This property is optional if the feeder is a sub-control of a feed or a feedChunk
         * control. In this case the value of the feed or feddChunk control is used if it's not set. So it must
         * be only set once on the feed or feedChunk control.
         */
        getThumbnailSrc(): sap.ui.core.URI;
        /**
         * Gets current value of property {@link #getType type}.
         *
         * Type and size of the Feeder
         *
         * Default value is `Large`.
         */
        getType(): sap.ui.ux3.FeederType;
        /**
         * Sets a new value for property {@link #getPlaceholderText placeholderText}.
         *
         * This property could be used for costum placeholder. If it is not set, the default text is used.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setPlaceholderText(
          /**
           * New value for property `placeholderText`
           */
          sPlaceholderText: string
        ): sap.ui.ux3.Feeder;
        /**
         * Sets a new value for property {@link #getText text}.
         *
         * The text for the Feeder. @References are supported.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setText(
          /**
           * New value for property `text`
           */
          sText: string
        ): sap.ui.ux3.Feeder;
        /**
         * Sets a new value for property {@link #getThumbnailSrc thumbnailSrc}.
         *
         * URL to the thumb nail image This property is optional if the feeder is a sub-control of a feed or a feedChunk
         * control. In this case the value of the feed or feddChunk control is used if it's not set. So it must
         * be only set once on the feed or feedChunk control.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setThumbnailSrc(
          /**
           * New value for property `thumbnailSrc`
           */
          sThumbnailSrc: sap.ui.core.URI
        ): sap.ui.ux3.Feeder;
        /**
         * Sets a new value for property {@link #getType type}.
         *
         * Type and size of the Feeder
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Large`.
         */
        setType(
          /**
           * New value for property `type`
           */
          sType: sap.ui.ux3.FeederType
        ): sap.ui.ux3.Feeder;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:submit submit} event of this `sap.ui.ux3.Feeder`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.Feeder` itself.
         *
         * Event is fired when the entered text is submitted
         */
        attachSubmit(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Feeder` itself
           */
          oListener?: object
        ): sap.ui.ux3.Feeder;
      }
      /**
       * @deprecated (since 1.38) - Instead, use the `sap.m.IconTabBar`, `sap.m.TabContainer` or `sap.uxap.ObjectPageLayout`
       * control.
       *
       * Provides enhanced navigation capabilities and is the parent control of NavigationItem. It is displayed
       * in the form of a horizontal line with switching markers depending on the currently selected item. The
       * size of an item which is currently chosen by the user is enlarged. In the case that a large number of
       * items are defined for the bar, this is made transparent to the user by showing symbols for scrolling
       * options (forwards and backwards) to see the next or previous items.
       */
      class NavigationBar extends sap.ui.core.Control {
        /**
         * Constructor for a new NavigationBar.
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
          mSettings?: NavigationBarOpts
        );

        /**
         * Adds some associatedItem into the association {@link #getAssociatedItems associatedItems}.
         */
        addAssociatedItem(
          /**
           * The associatedItems to add; if empty, nothing is inserted
           */
          vAssociatedItem: sap.ui.core.ID | sap.ui.ux3.NavigationItem
        ): sap.ui.ux3.NavigationBar;
        /**
         * Adds some item to the aggregation {@link #getItems items}.
         */
        addItem(
          /**
           * The item to add; if empty, nothing is inserted
           */
          oItem: sap.ui.ux3.NavigationItem
        ): sap.ui.ux3.NavigationBar;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.ux3.NavigationBar`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.NavigationBar` itself.
         *
         * Event is fired when an item is selected by the user
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.NavigationBar` itself
           */
          oListener?: object
        ): sap.ui.ux3.NavigationBar;
        /**
         * Destroys all the items in the aggregation {@link #getItems items}.
         */
        destroyItems(): sap.ui.ux3.NavigationBar;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.ui.ux3.NavigationBar`.
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
        ): sap.ui.ux3.NavigationBar;
        /**
         * Creates a new subclass of class sap.ui.ux3.NavigationBar with name `sClassName` and enriches it with
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
         * Fires event {@link #event:select select} to attached listeners.
         *
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event
         * object.
         */
        fireSelect(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The ID of the newly selected NavigationItem.
             */
            itemId?: string;
            /**
             * The newly selected NavigationItem.
             */
            item?: sap.ui.ux3.NavigationItem;
          }
        ): boolean;
        /**
         * Returns array of IDs of the elements which are the current targets of the association {@link #getAssociatedItems
         * associatedItems}.
         */
        getAssociatedItems(): sap.ui.core.ID[];
        /**
         * Gets content of aggregation {@link #getItems items}.
         *
         * If the navigation items need to have a different parent than the NavigationBar, alternatively the associatedItems
         * association can be used. The NavigationBar follows the approach to use the items aggregation. If this
         * aggregation is empty, associatedItems is used.
         */
        getItems(): sap.ui.ux3.NavigationItem[];
        /**
         * Returns a metadata object for class sap.ui.ux3.NavigationBar.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * @SINCE 1.36
         *
         * Gets current value of property {@link #getOverflowItemsToUpperCase overflowItemsToUpperCase}.
         *
         * Sets the appearance of the menu items in the overflow menu to uppercase
         *
         * Default value is `false`.
         */
        getOverflowItemsToUpperCase(): boolean;
        /**
         * ID of the element which is the current target of the association {@link #getSelectedItem selectedItem},
         * or `null`.
         */
        getSelectedItem(): sap.ui.core.ID;
        /**
         * Gets current value of property {@link #getToplevelVariant toplevelVariant}.
         *
         * Defines whether the navigation bar shall have top-level appearance
         *
         * Default value is `false`.
         */
        getToplevelVariant(): boolean;
        /**
         * Checks for the provided `sap.ui.ux3.NavigationItem` in the aggregation {@link #getItems items}. and returns
         * its index if found or -1 otherwise.
         */
        indexOfItem(
          /**
           * The item whose index is looked for
           */
          oItem: sap.ui.ux3.NavigationItem
        ): number;
        /**
         * Inserts a item into the aggregation {@link #getItems items}.
         */
        insertItem(
          /**
           * The item to insert; if empty, nothing is inserted
           */
          oItem: sap.ui.ux3.NavigationItem,
          /**
           * The `0`-based index the item should be inserted at; for a negative value of `iIndex`, the item is inserted
           * at position 0; for a value greater than the current size of the aggregation, the item is inserted at
           * the last position
           */
          iIndex: number
        ): sap.ui.ux3.NavigationBar;
        /**
         * Returns whether there is a selectedItem set which is actually present in the items aggregation; or, if
         * the aggregation is empty, in the associatedItems association.
         */
        isSelectedItemValid(): boolean;
        /**
         * Removes all the controls in the association named {@link #getAssociatedItems associatedItems}.
         */
        removeAllAssociatedItems(): sap.ui.core.ID[];
        /**
         * Removes all the controls from the aggregation {@link #getItems items}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllItems(): sap.ui.ux3.NavigationItem[];
        /**
         * Removes an associatedItem from the association named {@link #getAssociatedItems associatedItems}.
         */
        removeAssociatedItem(
          /**
           * The associatedItem to be removed or its index or ID
           */
          vAssociatedItem: number | sap.ui.core.ID | sap.ui.ux3.NavigationItem
        ): sap.ui.core.ID;
        /**
         * Removes a item from the aggregation {@link #getItems items}.
         */
        removeItem(
          /**
           * The item to remove or its index or id
           */
          vItem: number | string | sap.ui.ux3.NavigationItem
        ): sap.ui.ux3.NavigationItem;
        /**
         * Replaces the currently associated items with the ones in the given array
         */
        setAssociatedItems(
          /**
           * The items to associate
           */
          aItems: sap.ui.ux3.NavigationItem[]
        ): sap.ui.ux3.NavigationBar;
        /**
         * @SINCE 1.36
         *
         * Sets a new value for property {@link #getOverflowItemsToUpperCase overflowItemsToUpperCase}.
         *
         * Sets the appearance of the menu items in the overflow menu to uppercase
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setOverflowItemsToUpperCase(
          /**
           * New value for property `overflowItemsToUpperCase`
           */
          bOverflowItemsToUpperCase: boolean
        ): sap.ui.ux3.NavigationBar;
        /**
         * Sets the associated {@link #getSelectedItem selectedItem}.
         */
        setSelectedItem(
          /**
           * ID of an element which becomes the new target of this selectedItem association; alternatively, an element
           * instance may be given
           */
          oSelectedItem: sap.ui.core.ID | sap.ui.ux3.NavigationItem
        ): sap.ui.ux3.NavigationBar;
        /**
         * Sets a new value for property {@link #getToplevelVariant toplevelVariant}.
         *
         * Defines whether the navigation bar shall have top-level appearance
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setToplevelVariant(
          /**
           * New value for property `toplevelVariant`
           */
          bToplevelVariant: boolean
        ): sap.ui.ux3.NavigationBar;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.ux3.NavigationBar`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.NavigationBar` itself.
         *
         * Event is fired when an item is selected by the user
         */
        attachSelect(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.NavigationBar` itself
           */
          oListener?: object
        ): sap.ui.ux3.NavigationBar;
      }
      /**
       * @deprecated (since 1.38) - Instead, use the `sap.m.IconTabBar`, `sap.m.TabContainer` or `sap.uxap.ObjectPageLayout`
       * control.
       *
       * Is the item to be used within the NavigationBar
       */
      class NavigationItem extends sap.ui.core.Item {
        /**
         * Constructor for a new NavigationItem.
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
          mSettings?: NavigationItemOpts
        );

        /**
         * Adds some subItem to the aggregation {@link #getSubItems subItems}.
         */
        addSubItem(
          /**
           * The subItem to add; if empty, nothing is inserted
           */
          oSubItem: sap.ui.ux3.NavigationItem
        ): sap.ui.ux3.NavigationItem;
        /**
         * Destroys all the subItems in the aggregation {@link #getSubItems subItems}.
         */
        destroySubItems(): sap.ui.ux3.NavigationItem;
        /**
         * Creates a new subclass of class sap.ui.ux3.NavigationItem with name `sClassName` and enriches it with
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
         * Gets current value of property {@link #getHref href}.
         *
         * Defines the link target URL. This property is optional and should only be set when required! The use
         * of the href property is to not only allow users to navigate in-place by left-clicking NavigationItems,
         * but also to allow right-click and then "open in new tab" or "open in new window". As long as href is
         * not set, an empty window will open and stay blank. But when href is set, the new window/tab will load
         * this URL and it is the application's responsibility to display what the user expects (e.g. the Shell,
         * with the respective NavigationItem being selected).
         */
        getHref(): sap.ui.core.URI;
        /**
         * Returns a metadata object for class sap.ui.ux3.NavigationItem.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets content of aggregation {@link #getSubItems subItems}.
         *
         * Any NavigationItems on the next hierarchy level connected to this NavigationItem
         */
        getSubItems(): sap.ui.ux3.NavigationItem[];
        /**
         * @SINCE 1.9.0
         *
         * Gets current value of property {@link #getVisible visible}.
         *
         * Whether the NavigationItem is currently visible. When making NavigationItems invisible at runtime it
         * is the application's responsibility to make sure it is not the currently selected one - or to select
         * another one in this case.
         *
         * Default value is `true`.
         */
        getVisible(): boolean;
        /**
         * Checks for the provided `sap.ui.ux3.NavigationItem` in the aggregation {@link #getSubItems subItems}.
         * and returns its index if found or -1 otherwise.
         */
        indexOfSubItem(
          /**
           * The subItem whose index is looked for
           */
          oSubItem: sap.ui.ux3.NavigationItem
        ): number;
        /**
         * Inserts a subItem into the aggregation {@link #getSubItems subItems}.
         */
        insertSubItem(
          /**
           * The subItem to insert; if empty, nothing is inserted
           */
          oSubItem: sap.ui.ux3.NavigationItem,
          /**
           * The `0`-based index the subItem should be inserted at; for a negative value of `iIndex`, the subItem
           * is inserted at position 0; for a value greater than the current size of the aggregation, the subItem
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.ux3.NavigationItem;
        /**
         * Removes all the controls from the aggregation {@link #getSubItems subItems}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllSubItems(): sap.ui.ux3.NavigationItem[];
        /**
         * Removes a subItem from the aggregation {@link #getSubItems subItems}.
         */
        removeSubItem(
          /**
           * The subItem to remove or its index or id
           */
          vSubItem: number | string | sap.ui.ux3.NavigationItem
        ): sap.ui.ux3.NavigationItem;
        /**
         * Sets a new value for property {@link #getHref href}.
         *
         * Defines the link target URL. This property is optional and should only be set when required! The use
         * of the href property is to not only allow users to navigate in-place by left-clicking NavigationItems,
         * but also to allow right-click and then "open in new tab" or "open in new window". As long as href is
         * not set, an empty window will open and stay blank. But when href is set, the new window/tab will load
         * this URL and it is the application's responsibility to display what the user expects (e.g. the Shell,
         * with the respective NavigationItem being selected).
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setHref(
          /**
           * New value for property `href`
           */
          sHref: sap.ui.core.URI
        ): sap.ui.ux3.NavigationItem;
        /**
         * @SINCE 1.9.0
         *
         * Sets a new value for property {@link #getVisible visible}.
         *
         * Whether the NavigationItem is currently visible. When making NavigationItems invisible at runtime it
         * is the application's responsibility to make sure it is not the currently selected one - or to select
         * another one in this case.
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
        ): sap.ui.ux3.NavigationItem;
      }
      /**
       * @SINCE 1.7.0
       * @deprecated (since 1.38) - Instead, use the `sap.m.MessagePopover` control.
       *
       * A NotificationBar is a "toolbar" that can be added to a page to show messages and notifications from
       * the application. Its position, height and width is inherited from the element that the notification bar
       * is added to. The NotificationBar uses position: fixed; to always stay at the bottom of the screen. This
       * CSS may sometimes cause issues when nested deeply inside other controls. To have a proper behavior of
       * the NotificationBar use it as high in the control hierarchy as possible.
       */
      class NotificationBar extends sap.ui.core.Control {
        /**
         * Constructor for a new NotificationBar.
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
          mSettings?: NotificationBarOpts
        );

        /**
         * Adds some notifier to the aggregation {@link #getNotifiers notifiers}.
         */
        addNotifier(
          /**
           * The notifier to add; if empty, nothing is inserted
           */
          oNotifier: sap.ui.core.Element
        ): sap.ui.ux3.NotificationBar;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:display display} event of this `sap.ui.ux3.NotificationBar`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.NotificationBar` itself.
         *
         * Event is fired when the bar wants to be displayed depending on given flag. This allows the application
         * to decide what to do.
         */
        attachDisplay(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.NotificationBar` itself
           */
          oListener?: object
        ): sap.ui.ux3.NotificationBar;
        /**
         * @SINCE 1.12.2
         *
         * Attaches event handler `fnFunction` to the {@link #event:resize resize} event of this `sap.ui.ux3.NotificationBar`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.NotificationBar` itself.
         *
         * This event is thrown when the bar was resized (to the different valid states: Min, Max, Default, None).
         * The event itself can be used from SAPUI5-version 1.12.2 since there was a bug in the previous versions
         * firing this event.
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.NotificationBar` itself
           */
          oListener?: object
        ): sap.ui.ux3.NotificationBar;
        /**
         * Destroys the messageNotifier in the aggregation {@link #getMessageNotifier messageNotifier}.
         */
        destroyMessageNotifier(): sap.ui.ux3.NotificationBar;
        /**
         * Destroys all the notifiers in the aggregation {@link #getNotifiers notifiers}.
         */
        destroyNotifiers(): sap.ui.ux3.NotificationBar;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:display display} event of this `sap.ui.ux3.NotificationBar`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachDisplay(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.NotificationBar;
        /**
         * @SINCE 1.12.2
         *
         * Detaches event handler `fnFunction` from the {@link #event:resize resize} event of this `sap.ui.ux3.NotificationBar`.
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
        ): sap.ui.ux3.NotificationBar;
        /**
         * Creates a new subclass of class sap.ui.ux3.NotificationBar with name `sClassName` and enriches it with
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
         * Fires event {@link #event:display display} to attached listeners.
         */
        fireDisplay(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * Indicates if the bar wants to be shown or hidden
             */
            show?: boolean;
          }
        ): sap.ui.ux3.NotificationBar;
        /**
         * @SINCE 1.12.2
         *
         * Fires event {@link #event:resize resize} to attached listeners.
         */
        fireResize(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The corresponding status to which the bar was resized. The corresponding heights can be taken for the
             * bar's CSS file.
             */
            status?: sap.ui.ux3.NotificationBarStatus;
          }
        ): sap.ui.ux3.NotificationBar;
        /**
         * Gets current value of property {@link #getAlwaysShowToggler alwaysShowToggler}.
         *
         * This property defines if the toggler should be displayed the whole time when the NotificationBar is shown.
         *
         * Default value is `false`.
         */
        getAlwaysShowToggler(): boolean;
        /**
         * Gets content of aggregation {@link #getMessageNotifier messageNotifier}.
         *
         * Notifier that shows messages
         */
        getMessageNotifier(): sap.ui.core.Element;
        /**
         * Returns a metadata object for class sap.ui.ux3.NotificationBar.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets content of aggregation {@link #getNotifiers notifiers}.
         *
         * Notifiers that monitor something within the application and display the corresponding notifications.
         */
        getNotifiers(): sap.ui.core.Element[];
        /**
         * Gets current value of property {@link #getResizeEnabled resizeEnabled}.
         *
         * This property enables the bar to be resized by the user.
         *
         * Default value is `true`.
         */
        getResizeEnabled(): boolean;
        /**
         * Gets current value of property {@link #getVisibleStatus visibleStatus}.
         *
         * This property displays the bar corresponding to given status
         *
         * Default value is `Default`.
         */
        getVisibleStatus(): sap.ui.ux3.NotificationBarStatus;
        /**
         * This method checks if the NotificationBar has any items (notifications or messages) to show and returns
         * true if there are any items to show. So the application should decide if the bar should be displayed.
         */
        hasItems(): boolean;
        /**
         * Checks for the provided `sap.ui.core.Element` in the aggregation {@link #getNotifiers notifiers}. and
         * returns its index if found or -1 otherwise.
         */
        indexOfNotifier(
          /**
           * The notifier whose index is looked for
           */
          oNotifier: sap.ui.core.Element
        ): number;
        /**
         * Inserts a notifier into the aggregation {@link #getNotifiers notifiers}.
         */
        insertNotifier(
          /**
           * The notifier to insert; if empty, nothing is inserted
           */
          oNotifier: sap.ui.core.Element,
          /**
           * The `0`-based index the notifier should be inserted at; for a negative value of `iIndex`, the notifier
           * is inserted at position 0; for a value greater than the current size of the aggregation, the notifier
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.ux3.NotificationBar;
        /**
         * Removes all the controls from the aggregation {@link #getNotifiers notifiers}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllNotifiers(): sap.ui.core.Element[];
        /**
         * Removes a notifier from the aggregation {@link #getNotifiers notifiers}.
         */
        removeNotifier(
          /**
           * The notifier to remove or its index or id
           */
          vNotifier: number | string | sap.ui.core.Element
        ): sap.ui.core.Element;
        /**
         * @SINCE 1.22.11
         */
        setAlwaysShowToggler(
          /**
           * if the toggler should be visible all the time set this parameter to **true**/
          bAlwaysShow: boolean
        ): void;
        /**
         * Sets the aggregated {@link #getMessageNotifier messageNotifier}.
         */
        setMessageNotifier(
          /**
           * The messageNotifier to set
           */
          oMessageNotifier: sap.ui.core.Element
        ): sap.ui.ux3.NotificationBar;
        /**
         * Sets a new value for property {@link #getResizeEnabled resizeEnabled}.
         *
         * This property enables the bar to be resized by the user.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setResizeEnabled(
          /**
           * New value for property `resizeEnabled`
           */
          bResizeEnabled: boolean
        ): sap.ui.ux3.NotificationBar;
        /**
         * Sets a new value for property {@link #getVisibleStatus visibleStatus}.
         *
         * This property displays the bar corresponding to given status
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Default`.
         */
        setVisibleStatus(
          /**
           * New value for property `visibleStatus`
           */
          sVisibleStatus: sap.ui.ux3.NotificationBarStatus
        ): sap.ui.ux3.NotificationBar;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:display display} event of this `sap.ui.ux3.NotificationBar`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.NotificationBar` itself.
         *
         * Event is fired when the bar wants to be displayed depending on given flag. This allows the application
         * to decide what to do.
         */
        attachDisplay(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.NotificationBar` itself
           */
          oListener?: object
        ): sap.ui.ux3.NotificationBar;
        /**
         * @SINCE 1.12.2
         *
         * Attaches event handler `fnFunction` to the {@link #event:resize resize} event of this `sap.ui.ux3.NotificationBar`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.NotificationBar` itself.
         *
         * This event is thrown when the bar was resized (to the different valid states: Min, Max, Default, None).
         * The event itself can be used from SAPUI5-version 1.12.2 since there was a bug in the previous versions
         * firing this event.
         */
        attachResize(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.NotificationBar` itself
           */
          oListener?: object
        ): sap.ui.ux3.NotificationBar;
      }
      /**
       * @deprecated (since 1.38)
       *
       * This element can be docked to a notification bar to show notification items
       */
      class Notifier extends sap.ui.core.Element {
        /**
         * Constructor for a new Notifier.
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
          mSettings?: NotifierOpts
        );

        /**
         * Adds some message to the aggregation {@link #getMessages messages}.
         */
        addMessage(
          /**
           * The message to add; if empty, nothing is inserted
           */
          oMessage: sap.ui.core.Message
        ): sap.ui.ux3.Notifier;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:messageSelected messageSelected} event of this
         * `sap.ui.ux3.Notifier`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.Notifier` itself.
         *
         * Event is fired when a message of the notifiers was selected.
         */
        attachMessageSelected(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Notifier` itself
           */
          oListener?: object
        ): sap.ui.ux3.Notifier;
        /**
         * Destroys all the messages in the aggregation {@link #getMessages messages}.
         */
        destroyMessages(): sap.ui.ux3.Notifier;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:messageSelected messageSelected} event of
         * this `sap.ui.ux3.Notifier`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachMessageSelected(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.Notifier;
        /**
         * Creates a new subclass of class sap.ui.ux3.Notifier with name `sClassName` and enriches it with the information
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
         * Fires event {@link #event:messageSelected messageSelected} to attached listeners.
         */
        fireMessageSelected(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The message that was selected
             */
            message?: sap.ui.core.Message;
            /**
             * The notifier that contains the selected message
             */
            notifier?: sap.ui.ux3.Notifier;
          }
        ): sap.ui.ux3.Notifier;
        /**
         * Gets current value of property {@link #getIcon icon}.
         *
         * Icon of the control that should be displayed within the corresponding bar
         */
        getIcon(): sap.ui.core.URI;
        /**
         * Gets content of aggregation {@link #getMessages messages}.
         *
         * Messages of this notifier.
         */
        getMessages(): sap.ui.core.Message[];
        /**
         * Returns a metadata object for class sap.ui.ux3.Notifier.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getTitle title}.
         *
         * Defines the title that should be displayed within the opening popup
         */
        getTitle(): string;
        /**
         * This method checks if the notifier has any items.
         */
        hasItems(): boolean;
        /**
         * Checks for the provided `sap.ui.core.Message` in the aggregation {@link #getMessages messages}. and returns
         * its index if found or -1 otherwise.
         */
        indexOfMessage(
          /**
           * The message whose index is looked for
           */
          oMessage: sap.ui.core.Message
        ): number;
        /**
         * Inserts a message into the aggregation {@link #getMessages messages}.
         */
        insertMessage(
          /**
           * The message to insert; if empty, nothing is inserted
           */
          oMessage: sap.ui.core.Message,
          /**
           * The `0`-based index the message should be inserted at; for a negative value of `iIndex`, the message
           * is inserted at position 0; for a value greater than the current size of the aggregation, the message
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.ux3.Notifier;
        /**
         * Removes all the controls from the aggregation {@link #getMessages messages}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllMessages(): sap.ui.core.Message[];
        /**
         * Removes a message from the aggregation {@link #getMessages messages}.
         */
        removeMessage(
          /**
           * The message to remove or its index or id
           */
          vMessage: number | string | sap.ui.core.Message
        ): sap.ui.core.Message;
        /**
         * Sets a new value for property {@link #getIcon icon}.
         *
         * Icon of the control that should be displayed within the corresponding bar
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setIcon(
          /**
           * New value for property `icon`
           */
          sIcon: sap.ui.core.URI
        ): sap.ui.ux3.Notifier;
        /**
         * Sets a new value for property {@link #getTitle title}.
         *
         * Defines the title that should be displayed within the opening popup
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setTitle(
          /**
           * New value for property `title`
           */
          sTitle: string
        ): sap.ui.ux3.Notifier;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:messageSelected messageSelected} event of this
         * `sap.ui.ux3.Notifier`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.Notifier` itself.
         *
         * Event is fired when a message of the notifiers was selected.
         */
        attachMessageSelected(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Notifier` itself
           */
          oListener?: object
        ): sap.ui.ux3.Notifier;
      }
      /**
       * @deprecated (since 1.38)
       *
       * Overlay Control
       */
      class Overlay extends sap.ui.core.Control
        implements sap.ui.core.PopupInterface {
        /**
         * Constructor for a new Overlay.
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
          mSettings?: OverlayOpts
        );

        /**
         * Attaches event handler `fnFunction` to the {@link #event:close close} event of this `sap.ui.ux3.Overlay`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.Overlay` itself.
         *
         * Event is fired when the Overlay starts closing.
         */
        attachClose(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Overlay` itself
           */
          oListener?: object
        ): sap.ui.ux3.Overlay;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:closed closed} event of this `sap.ui.ux3.Overlay`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.Overlay` itself.
         *
         * Event is fired when the Overlay is closed.
         */
        attachClosed(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Overlay` itself
           */
          oListener?: object
        ): sap.ui.ux3.Overlay;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:open open} event of this `sap.ui.ux3.Overlay`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.Overlay` itself.
         *
         * Event is fired when the Overlay is opened.
         */
        attachOpen(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Overlay` itself
           */
          oListener?: object
        ): sap.ui.ux3.Overlay;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:openNew openNew} event of this `sap.ui.ux3.Overlay`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.Overlay` itself.
         *
         * Event is fired when the 'Open' button of the Overlay is clicked.
         */
        attachOpenNew(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Overlay` itself
           */
          oListener?: object
        ): sap.ui.ux3.Overlay;
        /**
         * Closes the Overlay.
         */
        close(): void;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:close close} event of this `sap.ui.ux3.Overlay`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachClose(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.Overlay;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:closed closed} event of this `sap.ui.ux3.Overlay`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachClosed(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.Overlay;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:open open} event of this `sap.ui.ux3.Overlay`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachOpen(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.Overlay;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:openNew openNew} event of this `sap.ui.ux3.Overlay`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachOpenNew(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.Overlay;
        /**
         * Creates a new subclass of class sap.ui.ux3.Overlay with name `sClassName` and enriches it with the information
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
         * Fires event {@link #event:close close} to attached listeners.
         *
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event
         * object.
         */
        fireClose(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The ID of the Overlay instance.
             */
            id?: string;
          }
        ): boolean;
        /**
         * Fires event {@link #event:closed closed} to attached listeners.
         *
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event
         * object.
         */
        fireClosed(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The ID of the Overlay instance.
             */
            id?: string;
          }
        ): boolean;
        /**
         * Fires event {@link #event:open open} to attached listeners.
         */
        fireOpen(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The ID of the Overlay instance
             */
            id?: string;
          }
        ): sap.ui.ux3.Overlay;
        /**
         * Fires event {@link #event:openNew openNew} to attached listeners.
         */
        fireOpenNew(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The ID of the Overlay instance.
             */
            id?: string;
          }
        ): sap.ui.ux3.Overlay;
        /**
         * Gets current value of property {@link #getCloseButtonVisible closeButtonVisible}.
         *
         * Defines whether the 'Close' button shall be visible.
         *
         * Default value is `true`.
         */
        getCloseButtonVisible(): boolean;
        /**
         * Returns a metadata object for class sap.ui.ux3.Overlay.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getOpenButtonVisible openButtonVisible}.
         *
         * Defines whether the 'Open' button shall be visible.
         *
         * Default value is `true`.
         */
        getOpenButtonVisible(): boolean;
        /**
         * Checks whether Overlay is open.
         */
        isOpen(): boolean;
        /**
         * Opens the Overlay.
         */
        open(
          /**
           * ID of the control that gets focused when the overlay is openend
           */
          initialFocusId: string
        ): void;
        /**
         * Sets a new value for property {@link #getCloseButtonVisible closeButtonVisible}.
         *
         * Defines whether the 'Close' button shall be visible.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setCloseButtonVisible(
          /**
           * New value for property `closeButtonVisible`
           */
          bCloseButtonVisible: boolean
        ): sap.ui.ux3.Overlay;
        /**
         * Sets a new value for property {@link #getOpenButtonVisible openButtonVisible}.
         *
         * Defines whether the 'Open' button shall be visible.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setOpenButtonVisible(
          /**
           * New value for property `openButtonVisible`
           */
          bOpenButtonVisible: boolean
        ): sap.ui.ux3.Overlay;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:close close} event of this `sap.ui.ux3.Overlay`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.Overlay` itself.
         *
         * Event is fired when the Overlay starts closing.
         */
        attachClose(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Overlay` itself
           */
          oListener?: object
        ): sap.ui.ux3.Overlay;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:closed closed} event of this `sap.ui.ux3.Overlay`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.Overlay` itself.
         *
         * Event is fired when the Overlay is closed.
         */
        attachClosed(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Overlay` itself
           */
          oListener?: object
        ): sap.ui.ux3.Overlay;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:open open} event of this `sap.ui.ux3.Overlay`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.Overlay` itself.
         *
         * Event is fired when the Overlay is opened.
         */
        attachOpen(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Overlay` itself
           */
          oListener?: object
        ): sap.ui.ux3.Overlay;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:openNew openNew} event of this `sap.ui.ux3.Overlay`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.Overlay` itself.
         *
         * Event is fired when the 'Open' button of the Overlay is clicked.
         */
        attachOpenNew(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Overlay` itself
           */
          oListener?: object
        ): sap.ui.ux3.Overlay;
      }
      /**
       * @deprecated (since 1.38)
       *
       * Is to be embedded into the Overlay control as content container
       */
      class OverlayContainer extends sap.ui.ux3.Overlay {
        /**
         * Constructor for a new OverlayContainer.
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
          mSettings?: OverlayContainerOpts
        );

        /**
         * Adds some content to the aggregation {@link #getContent content}.
         */
        addContent(
          /**
           * The content to add; if empty, nothing is inserted
           */
          oContent: sap.ui.core.Control
        ): sap.ui.ux3.OverlayContainer;
        /**
         * Destroys all the content in the aggregation {@link #getContent content}.
         */
        destroyContent(): sap.ui.ux3.OverlayContainer;
        /**
         * Creates a new subclass of class sap.ui.ux3.OverlayContainer with name `sClassName` and enriches it with
         * the information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.ux3.Overlay.extend}.
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
         * Aggregation for content
         */
        getContent(): sap.ui.core.Control[];
        /**
         * Returns a metadata object for class sap.ui.ux3.OverlayContainer.
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
        ): sap.ui.ux3.OverlayContainer;
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
      }
      /**
       * @deprecated (since 1.38)
       *
       * Dialog implementation based on the Overlay. If used in a Shell it leaves the Tool-Palette, Pane-Bar and
       * Header-Items accessible.
       */
      class OverlayDialog extends sap.ui.ux3.Overlay {
        /**
         * Constructor for a new OverlayDialog.
         *
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
         * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
         * of the syntax of the settings object.
         */
        constructor(
          /**
           * ID for the new control, generated automatically if no ID is given.
           */
          sId?: string,
          /**
           * Initial settings for the new control.
           */
          mSettings?: OverlayDialogOpts
        );

        /**
         * Adds some content to the aggregation {@link #getContent content}.
         */
        addContent(
          /**
           * The content to add; if empty, nothing is inserted
           */
          oContent: sap.ui.core.Control
        ): sap.ui.ux3.OverlayDialog;
        /**
         * Destroys all the content in the aggregation {@link #getContent content}.
         */
        destroyContent(): sap.ui.ux3.OverlayDialog;
        /**
         * Creates a new subclass of class sap.ui.ux3.OverlayDialog with name `sClassName` and enriches it with
         * the information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.ux3.Overlay.extend}.
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
         * Content for the OverlayDialog.
         */
        getContent(): sap.ui.core.Control[];
        /**
         * Gets current value of property {@link #getHeight height}.
         *
         * Determines the height of the Overlay Dialog. If the height is set to "auto" it is always 50% of the overlay
         * height.
         *
         * Default value is `auto`.
         */
        getHeight(): sap.ui.core.CSSSize;
        /**
         * Returns a metadata object for class sap.ui.ux3.OverlayDialog.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getWidth width}.
         *
         * Determines the width of the Overlay Dialog. If the width is set to "auto" it is always 50% of the overlay
         * width.
         *
         * Default value is `auto`.
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
        ): sap.ui.ux3.OverlayDialog;
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
         * The height for the OverlayDialog.
         */
        setHeight(sHeight: sap.ui.core.CSSSize): void;
        /**
         * This Method is not supported for the OverlayDialog.
         */
        // @ts-ignore
        setOpenButtonVisible(bVisible: boolean): void;
        /**
         * The width for the OverlayDialog.
         */
        setWidth(sWidth: sap.ui.core.CSSSize): void;
      }
      /**
       * @deprecated (since 1.38) - Instead, use the `sap.m.QuickView` control.
       *
       * QuickView is a small popup with a short overview of a Thing. QuickView is shown when a user holds the
       * mouse pointer over a related screen element.
       */
      class QuickView extends sap.ui.commons.CalloutBase {
        /**
         * Constructor for a new QuickView.
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
          mSettings?: QuickViewOpts
        );

        /**
         * Adds some action to the aggregation {@link #getActions actions}.
         */
        addAction(
          /**
           * The action to add; if empty, nothing is inserted
           */
          oAction: sap.ui.ux3.ThingAction
        ): sap.ui.ux3.QuickView;
        /**
         * Adds some content to the aggregation {@link #getContent content}.
         */
        addContent(
          /**
           * The content to add; if empty, nothing is inserted
           */
          oContent: sap.ui.core.Element
        ): sap.ui.ux3.QuickView;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:actionSelected actionSelected} event of this
         * `sap.ui.ux3.QuickView`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.QuickView` itself.
         *
         * Action is selected in Action Bar
         */
        attachActionSelected(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.QuickView` itself
           */
          oListener?: object
        ): sap.ui.ux3.QuickView;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:feedSubmit feedSubmit} event of this `sap.ui.ux3.QuickView`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.QuickView` itself.
         *
         * Fired when a new feed entry is submitted.
         */
        attachFeedSubmit(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.QuickView` itself
           */
          oListener?: object
        ): sap.ui.ux3.QuickView;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:navigate navigate} event of this `sap.ui.ux3.QuickView`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.QuickView` itself.
         *
         * Event is fired when a user clicks on the firstTitle link. Call the preventDefault method of the event
         * object to cancel browser navigation.
         */
        attachNavigate(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.QuickView` itself
           */
          oListener?: object
        ): sap.ui.ux3.QuickView;
        /**
         * Destroys the actionBar in the aggregation {@link #getActionBar actionBar}.
         */
        destroyActionBar(): sap.ui.ux3.QuickView;
        /**
         * Destroys all the actions in the aggregation {@link #getActions actions}.
         */
        destroyActions(): sap.ui.ux3.QuickView;
        /**
         * Destroys all the content in the aggregation {@link #getContent content}.
         */
        destroyContent(): sap.ui.ux3.QuickView;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:actionSelected actionSelected} event of this
         * `sap.ui.ux3.QuickView`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachActionSelected(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.QuickView;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:feedSubmit feedSubmit} event of this `sap.ui.ux3.QuickView`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachFeedSubmit(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.QuickView;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:navigate navigate} event of this `sap.ui.ux3.QuickView`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachNavigate(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.QuickView;
        /**
         * Creates a new subclass of class sap.ui.ux3.QuickView with name `sClassName` and enriches it with the
         * information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.commons.CalloutBase.extend}.
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
         * Fires event {@link #event:actionSelected actionSelected} to attached listeners.
         */
        fireActionSelected(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * Id of selected ThingAction
             */
            id?: string;
            /**
             * Selected ThingAction
             */
            action?: sap.ui.ux3.ThingAction;
            /**
             * New State of the selected action. Only filled if the respective action maintains a state property, for
             * example 'FollowUp' or 'Favorite'
             */
            newState?: string;
          }
        ): sap.ui.ux3.QuickView;
        /**
         * Fires event {@link #event:feedSubmit feedSubmit} to attached listeners.
         */
        fireFeedSubmit(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * Feed text
             */
            text?: string;
          }
        ): sap.ui.ux3.QuickView;
        /**
         * Fires event {@link #event:navigate navigate} to attached listeners.
         *
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event
         * object.
         */
        fireNavigate(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * URI of the Thing Inspector application.
             */
            href?: string;
          }
        ): boolean;
        /**
         * Gets content of aggregation {@link #getActionBar actionBar}.
         *
         * ActionBar. If no actionBar is set a default ActionBar will be created. In any case, ActionBar is displayed
         * only when the showActionBar property is set to true.
         */
        getActionBar(): sap.ui.ux3.ActionBar;
        /**
         * Gets content of aggregation {@link #getActions actions}.
         *
         * Actions of a Thing
         */
        getActions(): sap.ui.ux3.ThingAction[];
        /**
         * Gets content of aggregation {@link #getContent content}.
         *
         * Body content of the QuickView
         */
        getContent(): sap.ui.core.Element[];
        /**
         * Gets current value of property {@link #getFavoriteActionEnabled favoriteActionEnabled}.
         *
         * Favorite action enabled/disabled. If disabled the action will be invisible.
         *
         * Default value is `true`.
         */
        getFavoriteActionEnabled(): boolean;
        /**
         * Gets current value of property {@link #getFavoriteState favoriteState}.
         *
         * State Of favorite Action
         *
         * Default value is `false`.
         */
        getFavoriteState(): boolean;
        /**
         * Gets current value of property {@link #getFirstTitle firstTitle}.
         *
         * Thing name shown in the header of the QuickView
         */
        getFirstTitle(): string;
        /**
         * Gets current value of property {@link #getFirstTitleHref firstTitleHref}.
         *
         * URI to Thing Inspector
         */
        getFirstTitleHref(): string;
        /**
         * Gets current value of property {@link #getFlagActionEnabled flagActionEnabled}.
         *
         * Flag action enabled/disabled. If disabled the action will be invisible.
         *
         * Default value is `true`.
         */
        getFlagActionEnabled(): boolean;
        /**
         * Gets current value of property {@link #getFlagState flagState}.
         *
         * State of Flag Action
         *
         * Default value is `false`.
         */
        getFlagState(): boolean;
        /**
         * Gets current value of property {@link #getFollowActionEnabled followActionEnabled}.
         *
         * Follow action enabled/disabled. If disabled the action will be invisible.
         *
         * Default value is `true`.
         */
        getFollowActionEnabled(): boolean;
        /**
         * Gets current value of property {@link #getFollowState followState}.
         *
         * Follow State of a Thing
         *
         * Default value is `Default`.
         */
        getFollowState(): sap.ui.ux3.FollowActionState;
        /**
         * Gets current value of property {@link #getIcon icon}.
         *
         * URI of the Thing icon image (mandatory). The image is scaled down to the maximal size of 32 pixel (vertical
         * or horizontal).
         */
        getIcon(): sap.ui.core.URI;
        /**
         * Returns a metadata object for class sap.ui.ux3.QuickView.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getOpenActionEnabled openActionEnabled}.
         *
         * Open Thing action enabled/disabled. If disabled the action will be invisible.
         *
         * Default value is `true`.
         */
        getOpenActionEnabled(): boolean;
        /**
         * Gets current value of property {@link #getSecondTitle secondTitle}.
         *
         * Optional short text shown under the firstTitle
         */
        getSecondTitle(): string;
        /**
         * Gets current value of property {@link #getShowActionBar showActionBar}.
         *
         * Show Action Bar
         *
         * Default value is `true`.
         */
        getShowActionBar(): boolean;
        /**
         * Gets current value of property {@link #getType type}.
         *
         * Thing type (mandatory) like Account, Material, Employee etc. is displayed in a header at the top part
         * of the QuickView.
         */
        getType(): string;
        /**
         * Gets current value of property {@link #getUpdateActionEnabled updateActionEnabled}.
         *
         * Update action enabled/disabled. If disabled the action will be invisible.
         *
         * Default value is `true`.
         */
        getUpdateActionEnabled(): boolean;
        /**
         * Gets current value of property {@link #getWidth width}.
         *
         * Control width as common CSS-size (px or % as unit, for example).
         */
        getWidth(): sap.ui.core.CSSSize;
        /**
         * Checks for the provided `sap.ui.ux3.ThingAction` in the aggregation {@link #getActions actions}. and
         * returns its index if found or -1 otherwise.
         */
        indexOfAction(
          /**
           * The action whose index is looked for
           */
          oAction: sap.ui.ux3.ThingAction
        ): number;
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
         * Inserts a action into the aggregation {@link #getActions actions}.
         */
        insertAction(
          /**
           * The action to insert; if empty, nothing is inserted
           */
          oAction: sap.ui.ux3.ThingAction,
          /**
           * The `0`-based index the action should be inserted at; for a negative value of `iIndex`, the action is
           * inserted at position 0; for a value greater than the current size of the aggregation, the action is inserted
           * at the last position
           */
          iIndex: number
        ): sap.ui.ux3.QuickView;
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
        ): sap.ui.ux3.QuickView;
        /**
         * Removes a action from the aggregation {@link #getActions actions}.
         */
        removeAction(
          /**
           * The action to remove or its index or id
           */
          vAction: number | string | sap.ui.ux3.ThingAction
        ): sap.ui.ux3.ThingAction;
        /**
         * Removes all the controls from the aggregation {@link #getActions actions}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllActions(): sap.ui.ux3.ThingAction[];
        /**
         * Removes all the controls from the aggregation {@link #getContent content}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllContent(): sap.ui.core.Element[];
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
         * Sets the aggregated {@link #getActionBar actionBar}.
         */
        setActionBar(
          /**
           * The actionBar to set
           */
          oActionBar: sap.ui.ux3.ActionBar
        ): sap.ui.ux3.QuickView;
        /**
         * Sets a new value for property {@link #getFavoriteActionEnabled favoriteActionEnabled}.
         *
         * Favorite action enabled/disabled. If disabled the action will be invisible.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setFavoriteActionEnabled(
          /**
           * New value for property `favoriteActionEnabled`
           */
          bFavoriteActionEnabled: boolean
        ): sap.ui.ux3.QuickView;
        /**
         * Sets a new value for property {@link #getFavoriteState favoriteState}.
         *
         * State Of favorite Action
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setFavoriteState(
          /**
           * New value for property `favoriteState`
           */
          bFavoriteState: boolean
        ): sap.ui.ux3.QuickView;
        /**
         * Sets a new value for property {@link #getFirstTitle firstTitle}.
         *
         * Thing name shown in the header of the QuickView
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setFirstTitle(
          /**
           * New value for property `firstTitle`
           */
          sFirstTitle: string
        ): sap.ui.ux3.QuickView;
        /**
         * Sets a new value for property {@link #getFirstTitleHref firstTitleHref}.
         *
         * URI to Thing Inspector
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setFirstTitleHref(
          /**
           * New value for property `firstTitleHref`
           */
          sFirstTitleHref: string
        ): sap.ui.ux3.QuickView;
        /**
         * Sets a new value for property {@link #getFlagActionEnabled flagActionEnabled}.
         *
         * Flag action enabled/disabled. If disabled the action will be invisible.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setFlagActionEnabled(
          /**
           * New value for property `flagActionEnabled`
           */
          bFlagActionEnabled: boolean
        ): sap.ui.ux3.QuickView;
        /**
         * Sets a new value for property {@link #getFlagState flagState}.
         *
         * State of Flag Action
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setFlagState(
          /**
           * New value for property `flagState`
           */
          bFlagState: boolean
        ): sap.ui.ux3.QuickView;
        /**
         * Sets a new value for property {@link #getFollowActionEnabled followActionEnabled}.
         *
         * Follow action enabled/disabled. If disabled the action will be invisible.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setFollowActionEnabled(
          /**
           * New value for property `followActionEnabled`
           */
          bFollowActionEnabled: boolean
        ): sap.ui.ux3.QuickView;
        /**
         * Sets a new value for property {@link #getFollowState followState}.
         *
         * Follow State of a Thing
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Default`.
         */
        setFollowState(
          /**
           * New value for property `followState`
           */
          sFollowState: sap.ui.ux3.FollowActionState
        ): sap.ui.ux3.QuickView;
        /**
         * Sets a new value for property {@link #getIcon icon}.
         *
         * URI of the Thing icon image (mandatory). The image is scaled down to the maximal size of 32 pixel (vertical
         * or horizontal).
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setIcon(
          /**
           * New value for property `icon`
           */
          sIcon: sap.ui.core.URI
        ): sap.ui.ux3.QuickView;
        /**
         * Sets a new value for property {@link #getOpenActionEnabled openActionEnabled}.
         *
         * Open Thing action enabled/disabled. If disabled the action will be invisible.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setOpenActionEnabled(
          /**
           * New value for property `openActionEnabled`
           */
          bOpenActionEnabled: boolean
        ): sap.ui.ux3.QuickView;
        /**
         * Sets a new value for property {@link #getSecondTitle secondTitle}.
         *
         * Optional short text shown under the firstTitle
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setSecondTitle(
          /**
           * New value for property `secondTitle`
           */
          sSecondTitle: string
        ): sap.ui.ux3.QuickView;
        /**
         * Sets a new value for property {@link #getShowActionBar showActionBar}.
         *
         * Show Action Bar
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setShowActionBar(
          /**
           * New value for property `showActionBar`
           */
          bShowActionBar: boolean
        ): sap.ui.ux3.QuickView;
        /**
         * Sets a new value for property {@link #getType type}.
         *
         * Thing type (mandatory) like Account, Material, Employee etc. is displayed in a header at the top part
         * of the QuickView.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setType(
          /**
           * New value for property `type`
           */
          sType: string
        ): sap.ui.ux3.QuickView;
        /**
         * Sets a new value for property {@link #getUpdateActionEnabled updateActionEnabled}.
         *
         * Update action enabled/disabled. If disabled the action will be invisible.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setUpdateActionEnabled(
          /**
           * New value for property `updateActionEnabled`
           */
          bUpdateActionEnabled: boolean
        ): sap.ui.ux3.QuickView;
        /**
         * Sets a new value for property {@link #getWidth width}.
         *
         * Control width as common CSS-size (px or % as unit, for example).
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setWidth(
          /**
           * New value for property `width`
           */
          sWidth: sap.ui.core.CSSSize
        ): sap.ui.ux3.QuickView;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:actionSelected actionSelected} event of this
         * `sap.ui.ux3.QuickView`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.QuickView` itself.
         *
         * Action is selected in Action Bar
         */
        attachActionSelected(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.QuickView` itself
           */
          oListener?: object
        ): sap.ui.ux3.QuickView;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:feedSubmit feedSubmit} event of this `sap.ui.ux3.QuickView`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.QuickView` itself.
         *
         * Fired when a new feed entry is submitted.
         */
        attachFeedSubmit(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.QuickView` itself
           */
          oListener?: object
        ): sap.ui.ux3.QuickView;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:navigate navigate} event of this `sap.ui.ux3.QuickView`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.QuickView` itself.
         *
         * Event is fired when a user clicks on the firstTitle link. Call the preventDefault method of the event
         * object to cancel browser navigation.
         */
        attachNavigate(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.QuickView` itself
           */
          oListener?: object
        ): sap.ui.ux3.QuickView;
      }
      /**
       * @deprecated (since 1.38) - replaced by {@link sap.m.Shell}
       *
       * The Ux3 GoldReflection Shell, which is an application frame with navigation capabilities. It is supposed
       * to be added to a direct child of the BODY tag of a page and there should be no other parts of the page
       * consuming space outside the Shell.
       */
      class Shell extends sap.ui.core.Control {
        /**
         * Constructor for a new Shell.
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
          mSettings?: ShellOpts
        );

        /**
         * Adds some content to the aggregation {@link #getContent content}.
         */
        addContent(
          /**
           * The content to add; if empty, nothing is inserted
           */
          oContent: sap.ui.core.Control
        ): sap.ui.ux3.Shell;
        /**
         * Adds some headerItem to the aggregation {@link #getHeaderItems headerItems}.
         */
        addHeaderItem(
          /**
           * The headerItem to add; if empty, nothing is inserted
           */
          oHeaderItem: sap.ui.core.Control
        ): sap.ui.ux3.Shell;
        /**
         * Adds some paneBarItem to the aggregation {@link #getPaneBarItems paneBarItems}.
         */
        addPaneBarItem(
          /**
           * The paneBarItem to add; if empty, nothing is inserted
           */
          oPaneBarItem: sap.ui.core.Item
        ): sap.ui.ux3.Shell;
        /**
         * Adds some paneContent to the aggregation {@link #getPaneContent paneContent}.
         */
        addPaneContent(
          /**
           * The paneContent to add; if empty, nothing is inserted
           */
          oPaneContent: sap.ui.core.Control
        ): sap.ui.ux3.Shell;
        /**
         * Adds some toolPopup to the aggregation {@link #getToolPopups toolPopups}.
         */
        addToolPopup(
          /**
           * The toolPopup to add; if empty, nothing is inserted
           */
          oToolPopup: sap.ui.ux3.ToolPopup
        ): sap.ui.ux3.Shell;
        /**
         * Adds some worksetItem to the aggregation {@link #getWorksetItems worksetItems}.
         */
        addWorksetItem(
          /**
           * The worksetItem to add; if empty, nothing is inserted
           */
          oWorksetItem: sap.ui.ux3.NavigationItem
        ): sap.ui.ux3.Shell;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:feedSubmit feedSubmit} event of this `sap.ui.ux3.Shell`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.Shell` itself.
         *
         * Fired when a new feed entry is submitted.
         */
        attachFeedSubmit(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Shell` itself
           */
          oListener?: object
        ): sap.ui.ux3.Shell;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:logout logout} event of this `sap.ui.ux3.Shell`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.Shell` itself.
         *
         * Fired when the user clicks the "Log-off" button
         */
        attachLogout(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Shell` itself
           */
          oListener?: object
        ): sap.ui.ux3.Shell;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:paneBarItemSelected paneBarItemSelected} event
         * of this `sap.ui.ux3.Shell`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.Shell` itself.
         *
         * An item in the right-hand-side pane bar has been selected, the pane is now visible and can be filled
         * with UI elements.
         */
        attachPaneBarItemSelected(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Shell` itself
           */
          oListener?: object
        ): sap.ui.ux3.Shell;
        /**
         * @SINCE 1.12.0
         *
         * Attaches event handler `fnFunction` to the {@link #event:paneClosed paneClosed} event of this `sap.ui.ux3.Shell`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.Shell` itself.
         *
         * Fired after a side pane of the shell is closed. It is also fired, when an open pane is closed by calling
         * setShowPane(false), if and only if the pane was opened before.
         */
        attachPaneClosed(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Shell` itself
           */
          oListener?: object
        ): sap.ui.ux3.Shell;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:search search} event of this `sap.ui.ux3.Shell`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.Shell` itself.
         *
         * Fired when search has been triggered.
         */
        attachSearch(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Shell` itself
           */
          oListener?: object
        ): sap.ui.ux3.Shell;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:worksetItemSelected worksetItemSelected} event
         * of this `sap.ui.ux3.Shell`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.Shell` itself.
         *
         * Fired when a workset item was selected by the user. The application may populate the sub-items of the
         * given workset item in the event handler, but this must happen synchronously. If this is done, the application
         * is responsible for displaying the correct content for the selected one of the newly created sub-items.
         * The Shell will currently always mark the first sub-item as selected.
         */
        attachWorksetItemSelected(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Shell` itself
           */
          oListener?: object
        ): sap.ui.ux3.Shell;
        /**
         * Closes the side Pane (if open).
         *
         * Returns 'this' to allow method chaining.
         */
        closePane(): sap.ui.ux3.Shell;
        /**
         * Destroys all the content in the aggregation {@link #getContent content}.
         */
        destroyContent(): sap.ui.ux3.Shell;
        /**
         * Destroys all the headerItems in the aggregation {@link #getHeaderItems headerItems}.
         */
        destroyHeaderItems(): sap.ui.ux3.Shell;
        /**
         * @SINCE 1.7.0
         *
         * Destroys the notificationBar in the aggregation {@link #getNotificationBar notificationBar}.
         */
        destroyNotificationBar(): sap.ui.ux3.Shell;
        /**
         * Destroys all the paneBarItems in the aggregation {@link #getPaneBarItems paneBarItems}.
         */
        destroyPaneBarItems(): sap.ui.ux3.Shell;
        /**
         * Destroys all the paneContent in the aggregation {@link #getPaneContent paneContent}.
         */
        destroyPaneContent(): sap.ui.ux3.Shell;
        /**
         * Destroys all the toolPopups in the aggregation {@link #getToolPopups toolPopups}.
         */
        destroyToolPopups(): sap.ui.ux3.Shell;
        /**
         * Destroys all the worksetItems in the aggregation {@link #getWorksetItems worksetItems}.
         */
        destroyWorksetItems(): sap.ui.ux3.Shell;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:feedSubmit feedSubmit} event of this `sap.ui.ux3.Shell`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachFeedSubmit(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.Shell;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:logout logout} event of this `sap.ui.ux3.Shell`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachLogout(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.Shell;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:paneBarItemSelected paneBarItemSelected} event
         * of this `sap.ui.ux3.Shell`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachPaneBarItemSelected(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.Shell;
        /**
         * @SINCE 1.12.0
         *
         * Detaches event handler `fnFunction` from the {@link #event:paneClosed paneClosed} event of this `sap.ui.ux3.Shell`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachPaneClosed(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.Shell;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:search search} event of this `sap.ui.ux3.Shell`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachSearch(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.Shell;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:worksetItemSelected worksetItemSelected} event
         * of this `sap.ui.ux3.Shell`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachWorksetItemSelected(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.Shell;
        /**
         * Creates a new subclass of class sap.ui.ux3.Shell with name `sClassName` and enriches it with the information
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
         * Fires event {@link #event:feedSubmit feedSubmit} to attached listeners.
         */
        fireFeedSubmit(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ui.ux3.Shell;
        /**
         * Fires event {@link #event:logout logout} to attached listeners.
         */
        fireLogout(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ui.ux3.Shell;
        /**
         * Fires event {@link #event:paneBarItemSelected paneBarItemSelected} to attached listeners.
         */
        firePaneBarItemSelected(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The ID of the selected PaneBarItem.
             */
            id?: string;
            /**
             * The selected Item
             */
            item?: sap.ui.core.Item;
            /**
             * The key of the selected Item (or null if there is no key)
             */
            key?: string;
          }
        ): sap.ui.ux3.Shell;
        /**
         * @SINCE 1.12.0
         *
         * Fires event {@link #event:paneClosed paneClosed} to attached listeners.
         */
        firePaneClosed(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The id of the PaneBarItem to which the closed pane belonged.
             */
            id?: string;
          }
        ): sap.ui.ux3.Shell;
        /**
         * Fires event {@link #event:search search} to attached listeners.
         */
        fireSearch(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ui.ux3.Shell;
        /**
         * Fires event {@link #event:worksetItemSelected worksetItemSelected} to attached listeners.
         *
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event
         * object.
         */
        fireWorksetItemSelected(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The id of the workset item that has been newly selected by the user. If a top-level item has been clicked
             * which has sub-items, the ID of the currently active sub-item (/leaf) is given.
             */
            id?: string;
            /**
             * The selected NavigationItem
             */
            item?: sap.ui.ux3.NavigationItem;
            /**
             * The key of the selected NavigationItem (or null if there is no key)
             */
            key?: string;
          }
        ): boolean;
        /**
         * @SINCE 1.14.0
         *
         * Gets current value of property {@link #getAllowOverlayHeaderAccess allowOverlayHeaderAccess}.
         *
         * Whether the Shell header (Title Area + Header Items) can be accessed when an Overlay, OverlayContainer
         * or ThingInspector is open.
         *
         * Default value is `false`.
         */
        getAllowOverlayHeaderAccess(): boolean;
        /**
         * Gets current value of property {@link #getAppIcon appIcon}.
         *
         * The URL of the image to appear in the left part of the header, usually a branding image containing a
         * logo and/or product name. appIcon and appTitle are both optional and can both be set; in this case the
         * icon appears first. If the appIcon is set, for accessibility reasons the appIconTooltip must also be
         * set.
         */
        getAppIcon(): sap.ui.core.URI;
        /**
         * Gets current value of property {@link #getAppIconTooltip appIconTooltip}.
         *
         * The tooltip of the application icon in the header
         */
        getAppIconTooltip(): string;
        /**
         * @SINCE 1.9.0
         *
         * Gets current value of property {@link #getApplyContentPadding applyContentPadding}.
         *
         * Whether the Shell content area should have a theme-dependent padding or not.
         *
         * Default value is `true`.
         */
        getApplyContentPadding(): boolean;
        /**
         * Gets current value of property {@link #getAppTitle appTitle}.
         *
         * The application title to appear in the left part of the header, usually a company and/or product name.
         * appIcon and appTitle are both optional and can both be set; in this case the icon appears first.
         */
        getAppTitle(): string;
        /**
         * Gets content of aggregation {@link #getContent content}.
         *
         * The content to appear in the main canvas. Each modification of this aggregation leads to a re-rendering
         * of the content area - but not to a re-rendering of the complete Shell.
         */
        getContent(): sap.ui.core.Control[];
        /**
         * @SINCE 1.12.0
         *
         * Gets current value of property {@link #getDesignType designType}.
         *
         * Defines which design type is to be used.
         *
         * Default value is `Standard`.
         */
        getDesignType(): sap.ui.ux3.ShellDesignType;
        /**
         * @SINCE 1.9.0
         *
         * Gets current value of property {@link #getFullHeightContent fullHeightContent}.
         *
         * If set to true, the content area has a defined height. This means that any content put inside can use
         * "100%" height in CSS and will then consume all available space. However, if content is larger, scrollbars
         * will appear at the content area of the Shell and not on window level.
         *
         * Default value is `false`.
         */
        getFullHeightContent(): boolean;
        /**
         * Gets content of aggregation {@link #getHeaderItems headerItems}.
         *
         * Controls to appear in the header next to the logout button. It is recommended to only use controls of
         * type Button, MenuButton and TextView. The respective UI guidelines need to be enforced on a higher level.
         */
        getHeaderItems(): sap.ui.core.Control[];
        /**
         * Gets current value of property {@link #getHeaderType headerType}.
         *
         * Defines which header type to be used. Depending on the header type some other functionality might be
         * obsolete.
         *
         * Default value is `Standard`.
         */
        getHeaderType(): sap.ui.ux3.ShellHeaderType;
        /**
         * @SINCE 1.9.0
         *
         * Gets current value of property {@link #getLogoutButtonTooltip logoutButtonTooltip}.
         *
         * The tooltip to be displayed for the Logout Button of the Shell. If not set, a text meaning "Logout" in
         * the current language will be displayed.
         */
        getLogoutButtonTooltip(): string;
        /**
         * Returns a metadata object for class sap.ui.ux3.Shell.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * @SINCE 1.7.0
         *
         * Gets content of aggregation {@link #getNotificationBar notificationBar}.
         *
         * The NotificationBar which should be integrated into the Shell.
         */
        getNotificationBar(): sap.ui.ux3.NotificationBar;
        /**
         * Gets content of aggregation {@link #getPaneBarItems paneBarItems}.
         *
         * The items to appear in the PaneBar.
         */
        getPaneBarItems(): sap.ui.core.Item[];
        /**
         * Gets content of aggregation {@link #getPaneContent paneContent}.
         *
         * The content to appear in the pane area.
         */
        getPaneContent(): sap.ui.core.Control[];
        /**
         * Gets current value of property {@link #getPaneWidth paneWidth}.
         *
         * The width of the right-hand side pane in pixels. The value must be a non-negative integer. The Shell
         * reserves the right to define a minimum width (currently 50px).
         *
         * Default value is `250`.
         */
        getPaneWidth(): number;
        /**
         * Returns the SearchField control which is used in the Search Tool.
         */
        getSearchField(): sap.ui.commons.SearchField;
        /**
         * ID of the element which is the current target of the association {@link #getSelectedWorksetItem selectedWorksetItem},
         * or `null`.
         */
        getSelectedWorksetItem(): sap.ui.core.ID;
        /**
         * Gets current value of property {@link #getShowFeederTool showFeederTool}.
         *
         * Whether the "Feeder" tool should be displayed or not.
         *
         * Default value is `true`.
         */
        getShowFeederTool(): boolean;
        /**
         * @deprecated (since 1.7.2) - According to the current Ux designs, the ThingInspector should NOT be opened
         * like this from the Tool Pane. And technically, the ThingInspector is not a ToolPopup. Instead trigger
         * it from the respective elements in the Shell content.
         *
         * Gets current value of property {@link #getShowInspectorTool showInspectorTool}.
         *
         * Whether the "Inspector" tool should be displayed or not.
         *
         * Default value is `false`.
         */
        getShowInspectorTool(): boolean;
        /**
         * Gets current value of property {@link #getShowLogoutButton showLogoutButton}.
         *
         * Whether the Logoff button in the header should be displayed or not.
         *
         * Default value is `true`.
         */
        getShowLogoutButton(): boolean;
        /**
         * Gets current value of property {@link #getShowPane showPane}.
         *
         * Whether the pane bar should be displayed at all or not.
         *
         * Default value is `true`.
         */
        getShowPane(): boolean;
        /**
         * Gets current value of property {@link #getShowSearchTool showSearchTool}.
         *
         * Whether the "Global Search" tool should be displayed or not.
         *
         * Default value is `true`.
         */
        getShowSearchTool(): boolean;
        /**
         * Gets current value of property {@link #getShowTools showTools}.
         *
         * Whether the tool area should be displayed at all or not.
         *
         * Default value is `true`.
         */
        getShowTools(): boolean;
        /**
         * Gets content of aggregation {@link #getToolPopups toolPopups}.
         *
         * The items which appear in the ToolPalette and are opened as popup when clicked.
         */
        getToolPopups(): sap.ui.ux3.ToolPopup[];
        /**
         * Gets content of aggregation {@link #getWorksetItems worksetItems}.
         *
         * The workset items.
         */
        getWorksetItems(): sap.ui.ux3.NavigationItem[];
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
         * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getHeaderItems headerItems}.
         * and returns its index if found or -1 otherwise.
         */
        indexOfHeaderItem(
          /**
           * The headerItem whose index is looked for
           */
          oHeaderItem: sap.ui.core.Control
        ): number;
        /**
         * Checks for the provided `sap.ui.core.Item` in the aggregation {@link #getPaneBarItems paneBarItems}.
         * and returns its index if found or -1 otherwise.
         */
        indexOfPaneBarItem(
          /**
           * The paneBarItem whose index is looked for
           */
          oPaneBarItem: sap.ui.core.Item
        ): number;
        /**
         * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getPaneContent paneContent}.
         * and returns its index if found or -1 otherwise.
         */
        indexOfPaneContent(
          /**
           * The paneContent whose index is looked for
           */
          oPaneContent: sap.ui.core.Control
        ): number;
        /**
         * Checks for the provided `sap.ui.ux3.ToolPopup` in the aggregation {@link #getToolPopups toolPopups}.
         * and returns its index if found or -1 otherwise.
         */
        indexOfToolPopup(
          /**
           * The toolPopup whose index is looked for
           */
          oToolPopup: sap.ui.ux3.ToolPopup
        ): number;
        /**
         * Checks for the provided `sap.ui.ux3.NavigationItem` in the aggregation {@link #getWorksetItems worksetItems}.
         * and returns its index if found or -1 otherwise.
         */
        indexOfWorksetItem(
          /**
           * The worksetItem whose index is looked for
           */
          oWorksetItem: sap.ui.ux3.NavigationItem
        ): number;
        /**
         * Experimental method! Do not use!
         *
         * Makes Shell personalization available and injects the given personalization settings. This should be
         * called before the user can do any adaptations per drag&drop or using the personalization dialog. Otherwise
         * it may override the user's new settings.
         */
        initializePersonalization(
          /**
           * Personalization settings object
           */
          oSettings: object
        ): void;
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
        ): sap.ui.ux3.Shell;
        /**
         * Inserts a headerItem into the aggregation {@link #getHeaderItems headerItems}.
         */
        insertHeaderItem(
          /**
           * The headerItem to insert; if empty, nothing is inserted
           */
          oHeaderItem: sap.ui.core.Control,
          /**
           * The `0`-based index the headerItem should be inserted at; for a negative value of `iIndex`, the headerItem
           * is inserted at position 0; for a value greater than the current size of the aggregation, the headerItem
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.ux3.Shell;
        /**
         * Inserts a paneBarItem into the aggregation {@link #getPaneBarItems paneBarItems}.
         */
        insertPaneBarItem(
          /**
           * The paneBarItem to insert; if empty, nothing is inserted
           */
          oPaneBarItem: sap.ui.core.Item,
          /**
           * The `0`-based index the paneBarItem should be inserted at; for a negative value of `iIndex`, the paneBarItem
           * is inserted at position 0; for a value greater than the current size of the aggregation, the paneBarItem
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.ux3.Shell;
        /**
         * Inserts a paneContent into the aggregation {@link #getPaneContent paneContent}.
         */
        insertPaneContent(
          /**
           * The paneContent to insert; if empty, nothing is inserted
           */
          oPaneContent: sap.ui.core.Control,
          /**
           * The `0`-based index the paneContent should be inserted at; for a negative value of `iIndex`, the paneContent
           * is inserted at position 0; for a value greater than the current size of the aggregation, the paneContent
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.ux3.Shell;
        /**
         * Inserts a toolPopup into the aggregation {@link #getToolPopups toolPopups}.
         */
        insertToolPopup(
          /**
           * The toolPopup to insert; if empty, nothing is inserted
           */
          oToolPopup: sap.ui.ux3.ToolPopup,
          /**
           * The `0`-based index the toolPopup should be inserted at; for a negative value of `iIndex`, the toolPopup
           * is inserted at position 0; for a value greater than the current size of the aggregation, the toolPopup
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.ux3.Shell;
        /**
         * Inserts a worksetItem into the aggregation {@link #getWorksetItems worksetItems}.
         */
        insertWorksetItem(
          /**
           * The worksetItem to insert; if empty, nothing is inserted
           */
          oWorksetItem: sap.ui.ux3.NavigationItem,
          /**
           * The `0`-based index the worksetItem should be inserted at; for a negative value of `iIndex`, the worksetItem
           * is inserted at position 0; for a value greater than the current size of the aggregation, the worksetItem
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.ux3.Shell;
        /**
         * Returns 'true' if the side Pane is currently open.
         */
        isPaneOpen(): boolean;
        /**
         * Opens the side Pane.
         *
         * A valid ID of a paneBarItem must be given, so this item can be marked as selected. A "paneBarItemSelected"
         * event is then fired as if the opening was triggered by the user by a click on the respective PaneBarItem.
         * This method can be called (with different IDs) even when the Pane is already open. It has then the same
         * effect as if the user switches between PaneBarItems.
         *
         * Returns 'this' to allow method chaining.
         */
        openPane(
          /**
           * The ID of the PaneBarItem which should be marked as selected.
           */
          sPaneBarItemId: string
        ): sap.ui.ux3.Shell;
        /**
         * Experimental method! Do not use!
         */
        openPersonalizationDialog(): void;
        /**
         * Removes all the controls from the aggregation {@link #getContent content}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllContent(): sap.ui.core.Control[];
        /**
         * Removes all the controls from the aggregation {@link #getHeaderItems headerItems}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllHeaderItems(): sap.ui.core.Control[];
        /**
         * Removes all the controls from the aggregation {@link #getPaneBarItems paneBarItems}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllPaneBarItems(): sap.ui.core.Item[];
        /**
         * Removes all the controls from the aggregation {@link #getPaneContent paneContent}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllPaneContent(): sap.ui.core.Control[];
        /**
         * Removes all the controls from the aggregation {@link #getToolPopups toolPopups}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllToolPopups(): sap.ui.ux3.ToolPopup[];
        /**
         * Removes all the controls from the aggregation {@link #getWorksetItems worksetItems}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllWorksetItems(): sap.ui.ux3.NavigationItem[];
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
         * Removes a headerItem from the aggregation {@link #getHeaderItems headerItems}.
         */
        removeHeaderItem(
          /**
           * The headerItem to remove or its index or id
           */
          vHeaderItem: number | string | sap.ui.core.Control
        ): sap.ui.core.Control;
        /**
         * Removes a paneBarItem from the aggregation {@link #getPaneBarItems paneBarItems}.
         */
        removePaneBarItem(
          /**
           * The paneBarItem to remove or its index or id
           */
          vPaneBarItem: number | string | sap.ui.core.Item
        ): sap.ui.core.Item;
        /**
         * Removes a paneContent from the aggregation {@link #getPaneContent paneContent}.
         */
        removePaneContent(
          /**
           * The paneContent to remove or its index or id
           */
          vPaneContent: number | string | sap.ui.core.Control
        ): sap.ui.core.Control;
        /**
         * Removes a toolPopup from the aggregation {@link #getToolPopups toolPopups}.
         */
        removeToolPopup(
          /**
           * The toolPopup to remove or its index or id
           */
          vToolPopup: number | string | sap.ui.ux3.ToolPopup
        ): sap.ui.ux3.ToolPopup;
        /**
         * Removes a worksetItem from the aggregation {@link #getWorksetItems worksetItems}.
         */
        removeWorksetItem(
          /**
           * The worksetItem to remove or its index or id
           */
          vWorksetItem: number | string | sap.ui.ux3.NavigationItem
        ): sap.ui.ux3.NavigationItem;
        /**
         * @SINCE 1.14.0
         *
         * Sets a new value for property {@link #getAllowOverlayHeaderAccess allowOverlayHeaderAccess}.
         *
         * Whether the Shell header (Title Area + Header Items) can be accessed when an Overlay, OverlayContainer
         * or ThingInspector is open.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setAllowOverlayHeaderAccess(
          /**
           * New value for property `allowOverlayHeaderAccess`
           */
          bAllowOverlayHeaderAccess: boolean
        ): sap.ui.ux3.Shell;
        /**
         * Sets a new value for property {@link #getAppIcon appIcon}.
         *
         * The URL of the image to appear in the left part of the header, usually a branding image containing a
         * logo and/or product name. appIcon and appTitle are both optional and can both be set; in this case the
         * icon appears first. If the appIcon is set, for accessibility reasons the appIconTooltip must also be
         * set.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setAppIcon(
          /**
           * New value for property `appIcon`
           */
          sAppIcon: sap.ui.core.URI
        ): sap.ui.ux3.Shell;
        /**
         * Sets a new value for property {@link #getAppIconTooltip appIconTooltip}.
         *
         * The tooltip of the application icon in the header
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setAppIconTooltip(
          /**
           * New value for property `appIconTooltip`
           */
          sAppIconTooltip: string
        ): sap.ui.ux3.Shell;
        /**
         * @SINCE 1.9.0
         *
         * Sets a new value for property {@link #getApplyContentPadding applyContentPadding}.
         *
         * Whether the Shell content area should have a theme-dependent padding or not.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setApplyContentPadding(
          /**
           * New value for property `applyContentPadding`
           */
          bApplyContentPadding: boolean
        ): sap.ui.ux3.Shell;
        /**
         * Sets a new value for property {@link #getAppTitle appTitle}.
         *
         * The application title to appear in the left part of the header, usually a company and/or product name.
         * appIcon and appTitle are both optional and can both be set; in this case the icon appears first.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setAppTitle(
          /**
           * New value for property `appTitle`
           */
          sAppTitle: string
        ): sap.ui.ux3.Shell;
        /**
         * Replaces the existing Shell content with the given Control(-Tree). Only leads to a re-rendering of the
         * content area (not the complete Shell). This method may be more convenient than a series of calls to "removeContent"
         * and "addContent", which each lead to a re-rendering of the content area (but again not of the complete
         * Shell).
         *
         * By default the old content is not destroyed and is returned by this method in an array for further usage.
         * To avoid memory leaks, the old content should be destroyed (if not needed later), by setting the "destroyOldContent"
         * flag or by destroying it manually later on. If "destroyOldContent" is set, an empty array is returned.
         */
        setContent(
          /**
           * The new Content. In this method it must be exactly one control (-tree). Use addContent() to add more
           * control (-trees) to the main content area of the Shell.
           */
          oContent: sap.ui.core.Control,
          /**
           * If set, the controls previously contained in the Shell will be destroyed, to avoid memory leaks.
           */
          bDestroyOldContent: boolean
        ): sap.ui.core.Control[];
        /**
         * @SINCE 1.12.0
         *
         * Sets a new value for property {@link #getDesignType designType}.
         *
         * Defines which design type is to be used.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Standard`.
         */
        setDesignType(
          /**
           * New value for property `designType`
           */
          sDesignType: sap.ui.ux3.ShellDesignType
        ): sap.ui.ux3.Shell;
        /**
         * @SINCE 1.9.0
         *
         * Sets a new value for property {@link #getFullHeightContent fullHeightContent}.
         *
         * If set to true, the content area has a defined height. This means that any content put inside can use
         * "100%" height in CSS and will then consume all available space. However, if content is larger, scrollbars
         * will appear at the content area of the Shell and not on window level.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setFullHeightContent(
          /**
           * New value for property `fullHeightContent`
           */
          bFullHeightContent: boolean
        ): sap.ui.ux3.Shell;
        /**
         * Sets a new value for property {@link #getHeaderType headerType}.
         *
         * Defines which header type to be used. Depending on the header type some other functionality might be
         * obsolete.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Standard`.
         */
        setHeaderType(
          /**
           * New value for property `headerType`
           */
          sHeaderType: sap.ui.ux3.ShellHeaderType
        ): sap.ui.ux3.Shell;
        /**
         * @SINCE 1.9.0
         *
         * Sets a new value for property {@link #getLogoutButtonTooltip logoutButtonTooltip}.
         *
         * The tooltip to be displayed for the Logout Button of the Shell. If not set, a text meaning "Logout" in
         * the current language will be displayed.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setLogoutButtonTooltip(
          /**
           * New value for property `logoutButtonTooltip`
           */
          sLogoutButtonTooltip: string
        ): sap.ui.ux3.Shell;
        /**
         * @SINCE 1.7.0
         *
         * Moves the complete Shell away from the right window border by the given number of pixels (left border
         * in RTL case).
         *
         * So there is space for a sidebar or so outside the Shell. The CSS class 'sapUiUx3ShellOuterSideBar' provides
         * the basic position capabilities for the sidebar DOM element.
         *
         * This feature is not public. The usage is only granted to special groups on request.
         */
        setOffsetRight(
          /**
           * how many pixels of free space should be next to the Shell (between 0 and 600)
           */
          px: number,
          /**
           * optional callback function to call after the animation
           */
          complete?: Function,
          /**
           * optional id of the content representing the outside sidebar. If specified the width of the content is
           * animated.
           */
          outerId?: string
        ): void;
        /**
         * Replaces the existing side pane content with the given Control(-Tree). This method is optimized to only
         * re-render the pane content (and not the shell) which is faster and smoother than any other way of changing
         * the "paneContent" aggregation.
         *
         * By default, the old pane content is not destroyed and is returned by this method in an array for further
         * usage. To avoid memory leaks, the old content should be destroyed (if not needed later), by setting the
         * "destroyOldContent" flag or by destroying it manually later on. If "destroyOldContent" is set, an empty
         * array is returned.
         */
        setPaneContent(
          /**
           * The new Pane content. In this method it must be exactly one control (-tree). This could likely be a layout
           * or a specific ux3 Pane control. Use addPaneContent() to add more control (-trees) to the Pane.
           */
          oContent: sap.ui.core.Control,
          /**
           * If set, the controls previously contained in the pane will be destroyed, to avoid memory leaks.
           */
          bDestroyOldContent: boolean
        ): sap.ui.core.Control[];
        /**
         * Sets a new value for property {@link #getPaneWidth paneWidth}.
         *
         * The width of the right-hand side pane in pixels. The value must be a non-negative integer. The Shell
         * reserves the right to define a minimum width (currently 50px).
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `250`.
         */
        setPaneWidth(
          /**
           * New value for property `paneWidth`
           */
          iPaneWidth: number
        ): sap.ui.ux3.Shell;
        /**
         * Sets the associated {@link #getSelectedWorksetItem selectedWorksetItem}.
         */
        setSelectedWorksetItem(
          /**
           * ID of an element which becomes the new target of this selectedWorksetItem association; alternatively,
           * an element instance may be given
           */
          oSelectedWorksetItem: sap.ui.core.ID | sap.ui.ux3.NavigationItem
        ): sap.ui.ux3.Shell;
        /**
         * Sets a new value for property {@link #getShowFeederTool showFeederTool}.
         *
         * Whether the "Feeder" tool should be displayed or not.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setShowFeederTool(
          /**
           * New value for property `showFeederTool`
           */
          bShowFeederTool: boolean
        ): sap.ui.ux3.Shell;
        /**
         * @deprecated (since 1.7.2) - According to the current Ux designs, the ThingInspector should NOT be opened
         * like this from the Tool Pane. And technically, the ThingInspector is not a ToolPopup. Instead trigger
         * it from the respective elements in the Shell content.
         *
         * Sets a new value for property {@link #getShowInspectorTool showInspectorTool}.
         *
         * Whether the "Inspector" tool should be displayed or not.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setShowInspectorTool(
          /**
           * New value for property `showInspectorTool`
           */
          bShowInspectorTool: boolean
        ): sap.ui.ux3.Shell;
        /**
         * Sets a new value for property {@link #getShowLogoutButton showLogoutButton}.
         *
         * Whether the Logoff button in the header should be displayed or not.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setShowLogoutButton(
          /**
           * New value for property `showLogoutButton`
           */
          bShowLogoutButton: boolean
        ): sap.ui.ux3.Shell;
        /**
         * Sets a new value for property {@link #getShowPane showPane}.
         *
         * Whether the pane bar should be displayed at all or not.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setShowPane(
          /**
           * New value for property `showPane`
           */
          bShowPane: boolean
        ): sap.ui.ux3.Shell;
        /**
         * Sets a new value for property {@link #getShowSearchTool showSearchTool}.
         *
         * Whether the "Global Search" tool should be displayed or not.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setShowSearchTool(
          /**
           * New value for property `showSearchTool`
           */
          bShowSearchTool: boolean
        ): sap.ui.ux3.Shell;
        /**
         * Sets a new value for property {@link #getShowTools showTools}.
         *
         * Whether the tool area should be displayed at all or not.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setShowTools(
          /**
           * New value for property `showTools`
           */
          bShowTools: boolean
        ): sap.ui.ux3.Shell;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:feedSubmit feedSubmit} event of this `sap.ui.ux3.Shell`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.Shell` itself.
         *
         * Fired when a new feed entry is submitted.
         */
        attachFeedSubmit(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Shell` itself
           */
          oListener?: object
        ): sap.ui.ux3.Shell;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:logout logout} event of this `sap.ui.ux3.Shell`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.Shell` itself.
         *
         * Fired when the user clicks the "Log-off" button
         */
        attachLogout(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Shell` itself
           */
          oListener?: object
        ): sap.ui.ux3.Shell;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:paneBarItemSelected paneBarItemSelected} event
         * of this `sap.ui.ux3.Shell`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.Shell` itself.
         *
         * An item in the right-hand-side pane bar has been selected, the pane is now visible and can be filled
         * with UI elements.
         */
        attachPaneBarItemSelected(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Shell` itself
           */
          oListener?: object
        ): sap.ui.ux3.Shell;
        /**
         * @SINCE 1.12.0
         *
         * Attaches event handler `fnFunction` to the {@link #event:paneClosed paneClosed} event of this `sap.ui.ux3.Shell`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.Shell` itself.
         *
         * Fired after a side pane of the shell is closed. It is also fired, when an open pane is closed by calling
         * setShowPane(false), if and only if the pane was opened before.
         */
        attachPaneClosed(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Shell` itself
           */
          oListener?: object
        ): sap.ui.ux3.Shell;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:search search} event of this `sap.ui.ux3.Shell`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.Shell` itself.
         *
         * Fired when search has been triggered.
         */
        attachSearch(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Shell` itself
           */
          oListener?: object
        ): sap.ui.ux3.Shell;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:worksetItemSelected worksetItemSelected} event
         * of this `sap.ui.ux3.Shell`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.Shell` itself.
         *
         * Fired when a workset item was selected by the user. The application may populate the sub-items of the
         * given workset item in the event handler, but this must happen synchronously. If this is done, the application
         * is responsible for displaying the correct content for the selected one of the newly created sub-items.
         * The Shell will currently always mark the first sub-item as selected.
         */
        attachWorksetItemSelected(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.Shell` itself
           */
          oListener?: object
        ): sap.ui.ux3.Shell;
      }
      /**
       * @deprecated (since 1.38)
       *
       * Thing Action for Swatch, QuickView, Thinginspector
       */
      class ThingAction extends sap.ui.core.Element {
        /**
         * Constructor for a new ThingAction.
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
          mSettings?: ThingActionOpts
        );

        /**
         * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.ux3.ThingAction`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.ThingAction` itself.
         *
         * Event will be fired when the action was triggered.
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ThingAction` itself
           */
          oListener?: object
        ): sap.ui.ux3.ThingAction;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.ui.ux3.ThingAction`.
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
        ): sap.ui.ux3.ThingAction;
        /**
         * Creates a new subclass of class sap.ui.ux3.ThingAction with name `sClassName` and enriches it with the
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
         * Fires event {@link #event:select select} to attached listeners.
         */
        fireSelect(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * Id of selected action
             */
            id?: string;
            /**
             * Selected Thing Action
             */
            action?: sap.ui.ux3.ThingAction;
          }
        ): sap.ui.ux3.ThingAction;
        /**
         * Gets current value of property {@link #getEnabled enabled}.
         *
         * action enabled (true/false)
         *
         * Default value is `true`.
         */
        getEnabled(): boolean;
        /**
         * Returns a metadata object for class sap.ui.ux3.ThingAction.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getText text}.
         *
         * text of action
         */
        getText(): string;
        /**
         * Sets a new value for property {@link #getEnabled enabled}.
         *
         * action enabled (true/false)
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
        ): sap.ui.ux3.ThingAction;
        /**
         * Sets a new value for property {@link #getText text}.
         *
         * text of action
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setText(
          /**
           * New value for property `text`
           */
          sText: string
        ): sap.ui.ux3.ThingAction;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.ux3.ThingAction`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.ThingAction` itself.
         *
         * Event will be fired when the action was triggered.
         */
        attachSelect(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ThingAction` itself
           */
          oListener?: object
        ): sap.ui.ux3.ThingAction;
      }
      /**
       * @deprecated (since 1.38)
       *
       * Thing Group Area
       */
      class ThingGroup extends sap.ui.core.Element {
        /**
         * Constructor for a new ThingGroup.
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
          mSettings?: ThingGroupOpts
        );

        /**
         * Adds some action to the aggregation {@link #getActions actions}.
         */
        addAction(
          /**
           * The action to add; if empty, nothing is inserted
           */
          oAction: sap.ui.ux3.ThingGroup
        ): sap.ui.ux3.ThingGroup;
        /**
         * Adds some content to the aggregation {@link #getContent content}.
         */
        addContent(
          /**
           * The content to add; if empty, nothing is inserted
           */
          oContent: sap.ui.core.Control
        ): sap.ui.ux3.ThingGroup;
        /**
         * Destroys all the actions in the aggregation {@link #getActions actions}.
         */
        destroyActions(): sap.ui.ux3.ThingGroup;
        /**
         * Destroys all the content in the aggregation {@link #getContent content}.
         */
        destroyContent(): sap.ui.ux3.ThingGroup;
        /**
         * Creates a new subclass of class sap.ui.ux3.ThingGroup with name `sClassName` and enriches it with the
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
         * Gets content of aggregation {@link #getActions actions}.
         *
         * Actions of the groups content
         */
        getActions(): sap.ui.ux3.ThingGroup[];
        /**
         * Gets current value of property {@link #getColspan colspan}.
         *
         * If Group is used in a column layout the groups spans the all columns if set to true.
         *
         * Default value is `false`.
         */
        getColspan(): boolean;
        /**
         * Gets content of aggregation {@link #getContent content}.
         *
         * Content of Group
         */
        getContent(): sap.ui.core.Control[];
        /**
         * Returns a metadata object for class sap.ui.ux3.ThingGroup.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getTitle title}.
         *
         * Title of Group
         */
        getTitle(): string;
        /**
         * Checks for the provided `sap.ui.ux3.ThingGroup` in the aggregation {@link #getActions actions}. and returns
         * its index if found or -1 otherwise.
         */
        indexOfAction(
          /**
           * The action whose index is looked for
           */
          oAction: sap.ui.ux3.ThingGroup
        ): number;
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
         * Inserts a action into the aggregation {@link #getActions actions}.
         */
        insertAction(
          /**
           * The action to insert; if empty, nothing is inserted
           */
          oAction: sap.ui.ux3.ThingGroup,
          /**
           * The `0`-based index the action should be inserted at; for a negative value of `iIndex`, the action is
           * inserted at position 0; for a value greater than the current size of the aggregation, the action is inserted
           * at the last position
           */
          iIndex: number
        ): sap.ui.ux3.ThingGroup;
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
        ): sap.ui.ux3.ThingGroup;
        /**
         * Removes a action from the aggregation {@link #getActions actions}.
         */
        removeAction(
          /**
           * The action to remove or its index or id
           */
          vAction: number | string | sap.ui.ux3.ThingGroup
        ): sap.ui.ux3.ThingGroup;
        /**
         * Removes all the controls from the aggregation {@link #getActions actions}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllActions(): sap.ui.ux3.ThingGroup[];
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
         * Sets a new value for property {@link #getColspan colspan}.
         *
         * If Group is used in a column layout the groups spans the all columns if set to true.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setColspan(
          /**
           * New value for property `colspan`
           */
          bColspan: boolean
        ): sap.ui.ux3.ThingGroup;
        /**
         * Sets a new value for property {@link #getTitle title}.
         *
         * Title of Group
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setTitle(
          /**
           * New value for property `title`
           */
          sTitle: string
        ): sap.ui.ux3.ThingGroup;
      }
      /**
       * @deprecated (since 1.38) - There is not an exact replacement.
       *
       * Thing Inspector
       */
      class ThingInspector extends sap.ui.ux3.Overlay {
        /**
         * Constructor for a new ThingInspector.
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
          mSettings?: ThingInspectorOpts
        );

        /**
         * Adds some action to the aggregation {@link #getActions actions}.
         */
        addAction(
          /**
           * The action to add; if empty, nothing is inserted
           */
          oAction: sap.ui.ux3.ThingAction
        ): sap.ui.ux3.ThingInspector;
        /**
         * Adds some facet to the aggregation {@link #getFacets facets}.
         */
        addFacet(
          /**
           * The facet to add; if empty, nothing is inserted
           */
          oFacet: sap.ui.ux3.NavigationItem
        ): sap.ui.ux3.ThingInspector;
        /**
         * Adds some facetContent to the aggregation {@link #getFacetContent facetContent}.
         */
        addFacetContent(
          /**
           * The facetContent to add; if empty, nothing is inserted
           */
          oFacetContent: sap.ui.ux3.ThingGroup
        ): sap.ui.ux3.ThingInspector;
        /**
         * Adds some headerContent to the aggregation {@link #getHeaderContent headerContent}.
         */
        addHeaderContent(
          /**
           * The headerContent to add; if empty, nothing is inserted
           */
          oHeaderContent: sap.ui.ux3.ThingGroup
        ): sap.ui.ux3.ThingInspector;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:actionSelected actionSelected} event of this
         * `sap.ui.ux3.ThingInspector`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.ThingInspector` itself.
         *
         * Further thing related Action selected
         */
        attachActionSelected(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ThingInspector` itself
           */
          oListener?: object
        ): sap.ui.ux3.ThingInspector;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:facetSelected facetSelected} event of this `sap.ui.ux3.ThingInspector`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.ThingInspector` itself.
         *
         * Event for facet selection. The application is responsible for displaying the correct content for the
         * selected one. The ThingInspector will currently always mark the first facet as selected.
         */
        attachFacetSelected(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ThingInspector` itself
           */
          oListener?: object
        ): sap.ui.ux3.ThingInspector;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:feedSubmit feedSubmit} event of this `sap.ui.ux3.ThingInspector`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.ThingInspector` itself.
         *
         * Fired when a new feed entry is submitted.
         */
        attachFeedSubmit(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ThingInspector` itself
           */
          oListener?: object
        ): sap.ui.ux3.ThingInspector;
        /**
         * Destroys the actionBar in the aggregation {@link #getActionBar actionBar}.
         */
        destroyActionBar(): sap.ui.ux3.ThingInspector;
        /**
         * Destroys all the actions in the aggregation {@link #getActions actions}.
         */
        destroyActions(): sap.ui.ux3.ThingInspector;
        /**
         * Destroys all the facetContent in the aggregation {@link #getFacetContent facetContent}.
         */
        destroyFacetContent(): sap.ui.ux3.ThingInspector;
        /**
         * Destroys all the facets in the aggregation {@link #getFacets facets}.
         */
        destroyFacets(): sap.ui.ux3.ThingInspector;
        /**
         * Destroys all the headerContent in the aggregation {@link #getHeaderContent headerContent}.
         */
        destroyHeaderContent(): sap.ui.ux3.ThingInspector;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:actionSelected actionSelected} event of this
         * `sap.ui.ux3.ThingInspector`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachActionSelected(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.ThingInspector;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:facetSelected facetSelected} event of this
         * `sap.ui.ux3.ThingInspector`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachFacetSelected(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.ThingInspector;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:feedSubmit feedSubmit} event of this `sap.ui.ux3.ThingInspector`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachFeedSubmit(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.ThingInspector;
        /**
         * Creates a new subclass of class sap.ui.ux3.ThingInspector with name `sClassName` and enriches it with
         * the information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.ux3.Overlay.extend}.
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
         * Fires event {@link #event:actionSelected actionSelected} to attached listeners.
         */
        fireActionSelected(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * Id of selected ThingAction
             */
            id?: string;
            /**
             * Selected ThingAction
             */
            action?: sap.ui.ux3.ThingAction;
          }
        ): sap.ui.ux3.ThingInspector;
        /**
         * Fires event {@link #event:facetSelected facetSelected} to attached listeners.
         *
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event
         * object.
         */
        fireFacetSelected(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * Id of selected NavigationItem
             */
            id?: string;
            /**
             * The selected NavigationItem
             */
            item?: sap.ui.ux3.NavigationItem;
            /**
             * Key of selected NavigationItem
             */
            key?: string;
          }
        ): boolean;
        /**
         * Fires event {@link #event:feedSubmit feedSubmit} to attached listeners.
         */
        fireFeedSubmit(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * Feed text
             */
            text?: string;
          }
        ): sap.ui.ux3.ThingInspector;
        /**
         * Gets content of aggregation {@link #getActionBar actionBar}.
         *
         * ActionBar. If no actionBar is set a default ActionBar will be created.
         */
        getActionBar(): sap.ui.ux3.ActionBar;
        /**
         * Gets content of aggregation {@link #getActions actions}.
         *
         * Actions of a Thing
         */
        getActions(): sap.ui.ux3.ThingAction[];
        /**
         * Gets content of aggregation {@link #getFacetContent facetContent}.
         *
         * ThingGroups for content of the selected facet
         */
        getFacetContent(): sap.ui.ux3.ThingGroup[];
        /**
         * Gets content of aggregation {@link #getFacets facets}.
         *
         * Thing Inspector facets
         */
        getFacets(): sap.ui.ux3.NavigationItem[];
        /**
         * Gets current value of property {@link #getFavoriteActionEnabled favoriteActionEnabled}.
         *
         * Favorite action enabled/disabled. If disabled the action will be invisible.
         *
         * Default value is `true`.
         */
        getFavoriteActionEnabled(): boolean;
        /**
         * Gets current value of property {@link #getFavoriteState favoriteState}.
         *
         * State Of favorite Action
         *
         * Default value is `false`.
         */
        getFavoriteState(): boolean;
        /**
         * Gets current value of property {@link #getFirstTitle firstTitle}.
         *
         * First Line of the Thing Inspector Title
         */
        getFirstTitle(): string;
        /**
         * Gets current value of property {@link #getFlagActionEnabled flagActionEnabled}.
         *
         * Flag action enabled/disabled. If disabled the action will be invisible.
         *
         * Default value is `true`.
         */
        getFlagActionEnabled(): boolean;
        /**
         * Gets current value of property {@link #getFlagState flagState}.
         *
         * State of Flag Action
         *
         * Default value is `false`.
         */
        getFlagState(): boolean;
        /**
         * Gets current value of property {@link #getFollowActionEnabled followActionEnabled}.
         *
         * Follow action enabled/disabled. If disabled the action will be invisible.
         *
         * Default value is `true`.
         */
        getFollowActionEnabled(): boolean;
        /**
         * Gets current value of property {@link #getFollowState followState}.
         *
         * Follow State of a Thing
         *
         * Default value is `Default`.
         */
        getFollowState(): sap.ui.ux3.FollowActionState;
        /**
         * Gets content of aggregation {@link #getHeaderContent headerContent}.
         *
         * ThingGroups for the header content
         */
        getHeaderContent(): sap.ui.ux3.ThingGroup[];
        /**
         * @SINCE 1.16.3
         *
         * Gets current value of property {@link #getHeaderType headerType}.
         *
         * Defines which header type should be used.
         *
         * Default value is `Standard`.
         */
        getHeaderType(): sap.ui.ux3.ThingViewerHeaderType;
        /**
         * Gets current value of property {@link #getIcon icon}.
         *
         * Thing Icon Url
         */
        getIcon(): sap.ui.core.URI;
        /**
         * Returns a metadata object for class sap.ui.ux3.ThingInspector.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getSecondTitle secondTitle}.
         *
         * Second Line of the Thing Inspector Title
         */
        getSecondTitle(): string;
        /**
         * ID of the element which is the current target of the association {@link #getSelectedFacet selectedFacet},
         * or `null`.
         */
        getSelectedFacet(): sap.ui.core.ID;
        /**
         * Gets current value of property {@link #getType type}.
         *
         * Thing type
         */
        getType(): string;
        /**
         * Gets current value of property {@link #getUpdateActionEnabled updateActionEnabled}.
         *
         * Update action enabled/disabled. If disabled the action will be invisible.
         *
         * Default value is `true`.
         */
        getUpdateActionEnabled(): boolean;
        /**
         * Checks for the provided `sap.ui.ux3.ThingAction` in the aggregation {@link #getActions actions}. and
         * returns its index if found or -1 otherwise.
         */
        indexOfAction(
          /**
           * The action whose index is looked for
           */
          oAction: sap.ui.ux3.ThingAction
        ): number;
        /**
         * Checks for the provided `sap.ui.ux3.NavigationItem` in the aggregation {@link #getFacets facets}. and
         * returns its index if found or -1 otherwise.
         */
        indexOfFacet(
          /**
           * The facet whose index is looked for
           */
          oFacet: sap.ui.ux3.NavigationItem
        ): number;
        /**
         * Checks for the provided `sap.ui.ux3.ThingGroup` in the aggregation {@link #getFacetContent facetContent}.
         * and returns its index if found or -1 otherwise.
         */
        indexOfFacetContent(
          /**
           * The facetContent whose index is looked for
           */
          oFacetContent: sap.ui.ux3.ThingGroup
        ): number;
        /**
         * Checks for the provided `sap.ui.ux3.ThingGroup` in the aggregation {@link #getHeaderContent headerContent}.
         * and returns its index if found or -1 otherwise.
         */
        indexOfHeaderContent(
          /**
           * The headerContent whose index is looked for
           */
          oHeaderContent: sap.ui.ux3.ThingGroup
        ): number;
        /**
         * Inserts a action into the aggregation {@link #getActions actions}.
         */
        insertAction(
          /**
           * The action to insert; if empty, nothing is inserted
           */
          oAction: sap.ui.ux3.ThingAction,
          /**
           * The `0`-based index the action should be inserted at; for a negative value of `iIndex`, the action is
           * inserted at position 0; for a value greater than the current size of the aggregation, the action is inserted
           * at the last position
           */
          iIndex: number
        ): sap.ui.ux3.ThingInspector;
        /**
         * Inserts a facet into the aggregation {@link #getFacets facets}.
         */
        insertFacet(
          /**
           * The facet to insert; if empty, nothing is inserted
           */
          oFacet: sap.ui.ux3.NavigationItem,
          /**
           * The `0`-based index the facet should be inserted at; for a negative value of `iIndex`, the facet is inserted
           * at position 0; for a value greater than the current size of the aggregation, the facet is inserted at
           * the last position
           */
          iIndex: number
        ): sap.ui.ux3.ThingInspector;
        /**
         * Inserts a facetContent into the aggregation {@link #getFacetContent facetContent}.
         */
        insertFacetContent(
          /**
           * The facetContent to insert; if empty, nothing is inserted
           */
          oFacetContent: sap.ui.ux3.ThingGroup,
          /**
           * The `0`-based index the facetContent should be inserted at; for a negative value of `iIndex`, the facetContent
           * is inserted at position 0; for a value greater than the current size of the aggregation, the facetContent
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.ux3.ThingInspector;
        /**
         * Inserts a headerContent into the aggregation {@link #getHeaderContent headerContent}.
         */
        insertHeaderContent(
          /**
           * The headerContent to insert; if empty, nothing is inserted
           */
          oHeaderContent: sap.ui.ux3.ThingGroup,
          /**
           * The `0`-based index the headerContent should be inserted at; for a negative value of `iIndex`, the headerContent
           * is inserted at position 0; for a value greater than the current size of the aggregation, the headerContent
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.ux3.ThingInspector;
        /**
         * Opens this instance of ThingIspector
         */
        // @ts-ignore
        open(initialFocusId?: string): void;
        /**
         * Removes a action from the aggregation {@link #getActions actions}.
         */
        removeAction(
          /**
           * The action to remove or its index or id
           */
          vAction: number | string | sap.ui.ux3.ThingAction
        ): sap.ui.ux3.ThingAction;
        /**
         * Removes all the controls from the aggregation {@link #getActions actions}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllActions(): sap.ui.ux3.ThingAction[];
        /**
         * Removes all the controls from the aggregation {@link #getFacetContent facetContent}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllFacetContent(): sap.ui.ux3.ThingGroup[];
        /**
         * Removes all the controls from the aggregation {@link #getFacets facets}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllFacets(): sap.ui.ux3.NavigationItem[];
        /**
         * Removes all the controls from the aggregation {@link #getHeaderContent headerContent}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllHeaderContent(): sap.ui.ux3.ThingGroup[];
        /**
         * Removes a facet from the aggregation {@link #getFacets facets}.
         */
        removeFacet(
          /**
           * The facet to remove or its index or id
           */
          vFacet: number | string | sap.ui.ux3.NavigationItem
        ): sap.ui.ux3.NavigationItem;
        /**
         * Removes a facetContent from the aggregation {@link #getFacetContent facetContent}.
         */
        removeFacetContent(
          /**
           * The facetContent to remove or its index or id
           */
          vFacetContent: number | string | sap.ui.ux3.ThingGroup
        ): sap.ui.ux3.ThingGroup;
        /**
         * Removes a headerContent from the aggregation {@link #getHeaderContent headerContent}.
         */
        removeHeaderContent(
          /**
           * The headerContent to remove or its index or id
           */
          vHeaderContent: number | string | sap.ui.ux3.ThingGroup
        ): sap.ui.ux3.ThingGroup;
        /**
         * Sets the aggregated {@link #getActionBar actionBar}.
         */
        setActionBar(
          /**
           * The actionBar to set
           */
          oActionBar: sap.ui.ux3.ActionBar
        ): sap.ui.ux3.ThingInspector;
        /**
         * Sets a new value for property {@link #getFavoriteActionEnabled favoriteActionEnabled}.
         *
         * Favorite action enabled/disabled. If disabled the action will be invisible.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setFavoriteActionEnabled(
          /**
           * New value for property `favoriteActionEnabled`
           */
          bFavoriteActionEnabled: boolean
        ): sap.ui.ux3.ThingInspector;
        /**
         * Sets a new value for property {@link #getFavoriteState favoriteState}.
         *
         * State Of favorite Action
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setFavoriteState(
          /**
           * New value for property `favoriteState`
           */
          bFavoriteState: boolean
        ): sap.ui.ux3.ThingInspector;
        /**
         * Sets a new value for property {@link #getFirstTitle firstTitle}.
         *
         * First Line of the Thing Inspector Title
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setFirstTitle(
          /**
           * New value for property `firstTitle`
           */
          sFirstTitle: string
        ): sap.ui.ux3.ThingInspector;
        /**
         * Sets a new value for property {@link #getFlagActionEnabled flagActionEnabled}.
         *
         * Flag action enabled/disabled. If disabled the action will be invisible.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setFlagActionEnabled(
          /**
           * New value for property `flagActionEnabled`
           */
          bFlagActionEnabled: boolean
        ): sap.ui.ux3.ThingInspector;
        /**
         * Sets a new value for property {@link #getFlagState flagState}.
         *
         * State of Flag Action
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setFlagState(
          /**
           * New value for property `flagState`
           */
          bFlagState: boolean
        ): sap.ui.ux3.ThingInspector;
        /**
         * Sets a new value for property {@link #getFollowActionEnabled followActionEnabled}.
         *
         * Follow action enabled/disabled. If disabled the action will be invisible.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setFollowActionEnabled(
          /**
           * New value for property `followActionEnabled`
           */
          bFollowActionEnabled: boolean
        ): sap.ui.ux3.ThingInspector;
        /**
         * Sets a new value for property {@link #getFollowState followState}.
         *
         * Follow State of a Thing
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Default`.
         */
        setFollowState(
          /**
           * New value for property `followState`
           */
          sFollowState: sap.ui.ux3.FollowActionState
        ): sap.ui.ux3.ThingInspector;
        /**
         * @SINCE 1.16.3
         *
         * Sets a new value for property {@link #getHeaderType headerType}.
         *
         * Defines which header type should be used.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Standard`.
         */
        setHeaderType(
          /**
           * New value for property `headerType`
           */
          sHeaderType: sap.ui.ux3.ThingViewerHeaderType
        ): sap.ui.ux3.ThingInspector;
        /**
         * Sets a new value for property {@link #getIcon icon}.
         *
         * Thing Icon Url
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setIcon(
          /**
           * New value for property `icon`
           */
          sIcon: sap.ui.core.URI
        ): sap.ui.ux3.ThingInspector;
        /**
         * Sets a new value for property {@link #getSecondTitle secondTitle}.
         *
         * Second Line of the Thing Inspector Title
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setSecondTitle(
          /**
           * New value for property `secondTitle`
           */
          sSecondTitle: string
        ): sap.ui.ux3.ThingInspector;
        /**
         * Sets the associated {@link #getSelectedFacet selectedFacet}.
         */
        setSelectedFacet(
          /**
           * ID of an element which becomes the new target of this selectedFacet association; alternatively, an element
           * instance may be given
           */
          oSelectedFacet: sap.ui.core.ID | sap.ui.ux3.NavigationItem
        ): sap.ui.ux3.ThingInspector;
        /**
         * Sets a new value for property {@link #getType type}.
         *
         * Thing type
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setType(
          /**
           * New value for property `type`
           */
          sType: string
        ): sap.ui.ux3.ThingInspector;
        /**
         * Sets a new value for property {@link #getUpdateActionEnabled updateActionEnabled}.
         *
         * Update action enabled/disabled. If disabled the action will be invisible.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setUpdateActionEnabled(
          /**
           * New value for property `updateActionEnabled`
           */
          bUpdateActionEnabled: boolean
        ): sap.ui.ux3.ThingInspector;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:actionSelected actionSelected} event of this
         * `sap.ui.ux3.ThingInspector`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.ThingInspector` itself.
         *
         * Further thing related Action selected
         */
        attachActionSelected(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ThingInspector` itself
           */
          oListener?: object
        ): sap.ui.ux3.ThingInspector;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:facetSelected facetSelected} event of this `sap.ui.ux3.ThingInspector`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.ThingInspector` itself.
         *
         * Event for facet selection. The application is responsible for displaying the correct content for the
         * selected one. The ThingInspector will currently always mark the first facet as selected.
         */
        attachFacetSelected(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ThingInspector` itself
           */
          oListener?: object
        ): sap.ui.ux3.ThingInspector;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:feedSubmit feedSubmit} event of this `sap.ui.ux3.ThingInspector`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.ThingInspector` itself.
         *
         * Fired when a new feed entry is submitted.
         */
        attachFeedSubmit(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ThingInspector` itself
           */
          oListener?: object
        ): sap.ui.ux3.ThingInspector;
      }
      /**
       * @SINCE 1.9.1
       * @deprecated (since 1.38) - There is not an exact replacement.
       *
       * ThingViewer: Same as ThingInspector but decoupled from the Overlay and the ActionBar. The control can
       * be added to a Parent container that has a defined width. The ThingViewer fill the whole container. If
       * the parent container has no width defined the control will not work properly.
       */
      class ThingViewer extends sap.ui.core.Control {
        /**
         * Constructor for a new ThingViewer.
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
          mSettings?: ThingViewerOpts
        );

        /**
         * Adds some facet to the aggregation {@link #getFacets facets}.
         */
        addFacet(
          /**
           * The facet to add; if empty, nothing is inserted
           */
          oFacet: sap.ui.ux3.NavigationItem
        ): sap.ui.ux3.ThingViewer;
        /**
         * Adds some facetContent to the aggregation {@link #getFacetContent facetContent}.
         */
        addFacetContent(
          /**
           * The facetContent to add; if empty, nothing is inserted
           */
          oFacetContent: sap.ui.ux3.ThingGroup
        ): sap.ui.ux3.ThingViewer;
        /**
         * Adds some headerContent to the aggregation {@link #getHeaderContent headerContent}.
         */
        addHeaderContent(
          /**
           * The headerContent to add; if empty, nothing is inserted
           */
          oHeaderContent: sap.ui.ux3.ThingGroup
        ): sap.ui.ux3.ThingViewer;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:facetSelected facetSelected} event of this `sap.ui.ux3.ThingViewer`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.ThingViewer` itself.
         *
         * Event for facet selection. The application is responsible for displaying the correct content for the
         * selected one. The ThingInspector will currently always mark the first facet as selected.
         */
        attachFacetSelected(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ThingViewer` itself
           */
          oListener?: object
        ): sap.ui.ux3.ThingViewer;
        /**
         * Destroys the actionBar in the aggregation {@link #getActionBar actionBar}.
         */
        destroyActionBar(): sap.ui.ux3.ThingViewer;
        /**
         * Destroys all the facetContent in the aggregation {@link #getFacetContent facetContent}.
         */
        destroyFacetContent(): sap.ui.ux3.ThingViewer;
        /**
         * Destroys all the facets in the aggregation {@link #getFacets facets}.
         */
        destroyFacets(): sap.ui.ux3.ThingViewer;
        /**
         * Destroys all the headerContent in the aggregation {@link #getHeaderContent headerContent}.
         */
        destroyHeaderContent(): sap.ui.ux3.ThingViewer;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:facetSelected facetSelected} event of this
         * `sap.ui.ux3.ThingViewer`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachFacetSelected(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.ThingViewer;
        /**
         * Creates a new subclass of class sap.ui.ux3.ThingViewer with name `sClassName` and enriches it with the
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
         * Fires event {@link #event:facetSelected facetSelected} to attached listeners.
         *
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event
         * object.
         */
        fireFacetSelected(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * Id of selected NavigationItem
             */
            id?: string;
            /**
             * The selected NavigationItem
             */
            item?: sap.ui.ux3.NavigationItem;
            /**
             * Key of selected NavigationItem
             */
            key?: string;
          }
        ): boolean;
        /**
         * Gets content of aggregation {@link #getActionBar actionBar}.
         *
         * An ActionBar can be given
         */
        getActionBar(): sap.ui.ux3.ActionBar;
        /**
         * Gets content of aggregation {@link #getFacetContent facetContent}.
         *
         * ThingGroups for content of the selected facet
         */
        getFacetContent(): sap.ui.ux3.ThingGroup[];
        /**
         * Gets content of aggregation {@link #getFacets facets}.
         *
         * Thing Inspector facets
         */
        getFacets(): sap.ui.ux3.NavigationItem[];
        /**
         * Gets content of aggregation {@link #getHeaderContent headerContent}.
         *
         * ThingGroups for the header content
         */
        getHeaderContent(): sap.ui.ux3.ThingGroup[];
        /**
         * @SINCE 1.16.3
         *
         * Gets current value of property {@link #getHeaderType headerType}.
         *
         * Defines which header type should be used.
         *
         * Default value is `Standard`.
         */
        getHeaderType(): sap.ui.ux3.ThingViewerHeaderType;
        /**
         * Gets current value of property {@link #getHeight height}.
         *
         * Height of the ThingViewer
         *
         * Default value is `100%`.
         */
        getHeight(): sap.ui.core.CSSSize;
        /**
         * Gets current value of property {@link #getIcon icon}.
         *
         * Thing Icon Url
         */
        getIcon(): sap.ui.core.URI;
        /**
         * Returns a metadata object for class sap.ui.ux3.ThingViewer.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * ID of the element which is the current target of the association {@link #getSelectedFacet selectedFacet},
         * or `null`.
         */
        getSelectedFacet(): sap.ui.core.ID;
        /**
         * Gets current value of property {@link #getSubtitle subtitle}.
         *
         * Subtitle of the Thing Inspector
         */
        getSubtitle(): string;
        /**
         * Gets current value of property {@link #getTitle title}.
         *
         * Title of the Thing Inspector
         */
        getTitle(): string;
        /**
         * Gets current value of property {@link #getType type}.
         *
         * Thing type
         */
        getType(): string;
        /**
         * Gets current value of property {@link #getWidth width}.
         *
         * Width of the ThingViewer
         *
         * Default value is `100%`.
         */
        getWidth(): sap.ui.core.CSSSize;
        /**
         * Checks for the provided `sap.ui.ux3.NavigationItem` in the aggregation {@link #getFacets facets}. and
         * returns its index if found or -1 otherwise.
         */
        indexOfFacet(
          /**
           * The facet whose index is looked for
           */
          oFacet: sap.ui.ux3.NavigationItem
        ): number;
        /**
         * Checks for the provided `sap.ui.ux3.ThingGroup` in the aggregation {@link #getFacetContent facetContent}.
         * and returns its index if found or -1 otherwise.
         */
        indexOfFacetContent(
          /**
           * The facetContent whose index is looked for
           */
          oFacetContent: sap.ui.ux3.ThingGroup
        ): number;
        /**
         * Checks for the provided `sap.ui.ux3.ThingGroup` in the aggregation {@link #getHeaderContent headerContent}.
         * and returns its index if found or -1 otherwise.
         */
        indexOfHeaderContent(
          /**
           * The headerContent whose index is looked for
           */
          oHeaderContent: sap.ui.ux3.ThingGroup
        ): number;
        /**
         * Inserts a facet into the aggregation {@link #getFacets facets}.
         */
        insertFacet(
          /**
           * The facet to insert; if empty, nothing is inserted
           */
          oFacet: sap.ui.ux3.NavigationItem,
          /**
           * The `0`-based index the facet should be inserted at; for a negative value of `iIndex`, the facet is inserted
           * at position 0; for a value greater than the current size of the aggregation, the facet is inserted at
           * the last position
           */
          iIndex: number
        ): sap.ui.ux3.ThingViewer;
        /**
         * Inserts a facetContent into the aggregation {@link #getFacetContent facetContent}.
         */
        insertFacetContent(
          /**
           * The facetContent to insert; if empty, nothing is inserted
           */
          oFacetContent: sap.ui.ux3.ThingGroup,
          /**
           * The `0`-based index the facetContent should be inserted at; for a negative value of `iIndex`, the facetContent
           * is inserted at position 0; for a value greater than the current size of the aggregation, the facetContent
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.ux3.ThingViewer;
        /**
         * Inserts a headerContent into the aggregation {@link #getHeaderContent headerContent}.
         */
        insertHeaderContent(
          /**
           * The headerContent to insert; if empty, nothing is inserted
           */
          oHeaderContent: sap.ui.ux3.ThingGroup,
          /**
           * The `0`-based index the headerContent should be inserted at; for a negative value of `iIndex`, the headerContent
           * is inserted at position 0; for a value greater than the current size of the aggregation, the headerContent
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.ux3.ThingViewer;
        /**
         * Removes all the controls from the aggregation {@link #getFacetContent facetContent}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllFacetContent(): sap.ui.ux3.ThingGroup[];
        /**
         * Removes all the controls from the aggregation {@link #getFacets facets}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllFacets(): sap.ui.ux3.NavigationItem[];
        /**
         * Removes all the controls from the aggregation {@link #getHeaderContent headerContent}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllHeaderContent(): sap.ui.ux3.ThingGroup[];
        /**
         * Removes a facet from the aggregation {@link #getFacets facets}.
         */
        removeFacet(
          /**
           * The facet to remove or its index or id
           */
          vFacet: number | string | sap.ui.ux3.NavigationItem
        ): sap.ui.ux3.NavigationItem;
        /**
         * Removes a facetContent from the aggregation {@link #getFacetContent facetContent}.
         */
        removeFacetContent(
          /**
           * The facetContent to remove or its index or id
           */
          vFacetContent: number | string | sap.ui.ux3.ThingGroup
        ): sap.ui.ux3.ThingGroup;
        /**
         * Removes a headerContent from the aggregation {@link #getHeaderContent headerContent}.
         */
        removeHeaderContent(
          /**
           * The headerContent to remove or its index or id
           */
          vHeaderContent: number | string | sap.ui.ux3.ThingGroup
        ): sap.ui.ux3.ThingGroup;
        /**
         * Sets the aggregated {@link #getActionBar actionBar}.
         */
        setActionBar(
          /**
           * The actionBar to set
           */
          oActionBar: sap.ui.ux3.ActionBar
        ): sap.ui.ux3.ThingViewer;
        /**
         * @SINCE 1.16.3
         *
         * Sets a new value for property {@link #getHeaderType headerType}.
         *
         * Defines which header type should be used.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Standard`.
         */
        setHeaderType(
          /**
           * New value for property `headerType`
           */
          sHeaderType: sap.ui.ux3.ThingViewerHeaderType
        ): sap.ui.ux3.ThingViewer;
        /**
         * Sets a new value for property {@link #getHeight height}.
         *
         * Height of the ThingViewer
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
        ): sap.ui.ux3.ThingViewer;
        /**
         * Sets a new value for property {@link #getIcon icon}.
         *
         * Thing Icon Url
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setIcon(
          /**
           * New value for property `icon`
           */
          sIcon: sap.ui.core.URI
        ): sap.ui.ux3.ThingViewer;
        /**
         * Sets the associated {@link #getSelectedFacet selectedFacet}.
         */
        setSelectedFacet(
          /**
           * ID of an element which becomes the new target of this selectedFacet association; alternatively, an element
           * instance may be given
           */
          oSelectedFacet: sap.ui.core.ID | sap.ui.ux3.NavigationItem
        ): sap.ui.ux3.ThingViewer;
        /**
         * Sets a new value for property {@link #getSubtitle subtitle}.
         *
         * Subtitle of the Thing Inspector
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setSubtitle(
          /**
           * New value for property `subtitle`
           */
          sSubtitle: string
        ): sap.ui.ux3.ThingViewer;
        /**
         * Sets a new value for property {@link #getTitle title}.
         *
         * Title of the Thing Inspector
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setTitle(
          /**
           * New value for property `title`
           */
          sTitle: string
        ): sap.ui.ux3.ThingViewer;
        /**
         * Sets a new value for property {@link #getType type}.
         *
         * Thing type
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setType(
          /**
           * New value for property `type`
           */
          sType: string
        ): sap.ui.ux3.ThingViewer;
        /**
         * Sets a new value for property {@link #getWidth width}.
         *
         * Width of the ThingViewer
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
        ): sap.ui.ux3.ThingViewer;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:facetSelected facetSelected} event of this `sap.ui.ux3.ThingViewer`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.ThingViewer` itself.
         *
         * Event for facet selection. The application is responsible for displaying the correct content for the
         * selected one. The ThingInspector will currently always mark the first facet as selected.
         */
        attachFacetSelected(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ThingViewer` itself
           */
          oListener?: object
        ): sap.ui.ux3.ThingViewer;
      }
      /**
       * @deprecated (since 1.38) - Instead, use the `sap.m.Popup` control.
       *
       * A popup which the user can open from the Shell's tool pane. Generally, the starting point would be an
       * icon. For this pop up, buttons can be defined with any text; therefore, it has the same purpose and similar
       * look like any common dialog box. A ToolPopup can have any content. Depending on the application type
       * and design, the structure of the texts and input fields can be for example form-like.
       */
      class ToolPopup extends sap.ui.core.Control
        implements sap.ui.core.PopupInterface {
        /**
         * Constructor for a new ToolPopup.
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
          mSettings?: ToolPopupOpts
        );

        /**
         * Adds some button to the aggregation {@link #getButtons buttons}.
         */
        addButton(
          /**
           * The button to add; if empty, nothing is inserted
           */
          oButton: sap.ui.core.Control
        ): sap.ui.ux3.ToolPopup;
        /**
         * Adds some content to the aggregation {@link #getContent content}.
         */
        addContent(
          /**
           * The content to add; if empty, nothing is inserted
           */
          oContent: sap.ui.core.Control
        ): sap.ui.ux3.ToolPopup;
        /**
         * @SINCE 1.19.0
         *
         * Adds an ID to the Popup that should be focusable as well when using `autoclose`. Chaining is only possible
         * if a valid type (string) is given.
         */
        addFocusableArea(
          /**
           * ID of the corresponding element that should be focusable as well
           */
          sID?: string
        ): void;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:close close} event of this `sap.ui.ux3.ToolPopup`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.ToolPopup` itself.
         *
         * Event is fired when the popup closes because the user pressed Escape or the ToolPopup Button in the Shell.
         * This is called before the closing animation.
         */
        attachClose(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ToolPopup` itself
           */
          oListener?: object
        ): sap.ui.ux3.ToolPopup;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:closed closed} event of this `sap.ui.ux3.ToolPopup`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.ToolPopup` itself.
         *
         * This event is fired after the ToolPopup has finished its closing animation. It is called for EVERY close,
         * regardless of whether the user has triggered the close or whether the ToolPopup was closed via API call.
         */
        attachClosed(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ToolPopup` itself
           */
          oListener?: object
        ): sap.ui.ux3.ToolPopup;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:enter enter} event of this `sap.ui.ux3.ToolPopup`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.ToolPopup` itself.
         *
         * Event is fired whenever the user clicks the Enter or the Enter key inside the pop up
         */
        attachEnter(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ToolPopup` itself
           */
          oListener?: object
        ): sap.ui.ux3.ToolPopup;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:iconChanged iconChanged} event of this `sap.ui.ux3.ToolPopup`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.ToolPopup` itself.
         *
         * Event is fired when one of the icon properties is modified (Note: The icon is not rendered by the ToolPopup).
         * To be used by other controls which want to update the icon in their UI.
         */
        attachIconChanged(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ToolPopup` itself
           */
          oListener?: object
        ): sap.ui.ux3.ToolPopup;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:open open} event of this `sap.ui.ux3.ToolPopup`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.ToolPopup` itself.
         *
         * Event is fired when the popup opens
         */
        attachOpen(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ToolPopup` itself
           */
          oListener?: object
        ): sap.ui.ux3.ToolPopup;
        /**
         * @SINCE 1.19.0
         *
         * Attaches event handler `fnFunction` to the {@link #event:opened opened} event of this `sap.ui.ux3.ToolPopup`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.ToolPopup` itself.
         *
         * Event is being fired after the ToolPopup has been opened.
         */
        attachOpened(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ToolPopup` itself
           */
          oListener?: object
        ): sap.ui.ux3.ToolPopup;
        /**
         * Closes the pop up. Can be called by the Shell when the pop up's button is clicked again; or by the application
         * when the interaction in the pop up has been completed or canceled.
         */
        close(
          /**
           * If set, the focus is NOT restored to the element that had the focus before the ToolPopup was opened.
           * This makes sense when the ToolPopup is closed programmatically from a different area of the application
           * (outside the ToolPopup) and the focus should not move aways from that place.
           */
          bPreventRestoreFocus: boolean
        ): sap.ui.ux3.ToolPopup;
        /**
         * Destroys all the buttons in the aggregation {@link #getButtons buttons}.
         */
        destroyButtons(): sap.ui.ux3.ToolPopup;
        /**
         * Destroys all the content in the aggregation {@link #getContent content}.
         */
        destroyContent(): sap.ui.ux3.ToolPopup;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:close close} event of this `sap.ui.ux3.ToolPopup`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachClose(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.ToolPopup;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:closed closed} event of this `sap.ui.ux3.ToolPopup`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachClosed(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.ToolPopup;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:enter enter} event of this `sap.ui.ux3.ToolPopup`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachEnter(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.ToolPopup;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:iconChanged iconChanged} event of this `sap.ui.ux3.ToolPopup`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachIconChanged(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.ToolPopup;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:open open} event of this `sap.ui.ux3.ToolPopup`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachOpen(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.ToolPopup;
        /**
         * @SINCE 1.19.0
         *
         * Detaches event handler `fnFunction` from the {@link #event:opened opened} event of this `sap.ui.ux3.ToolPopup`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachOpened(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.ux3.ToolPopup;
        /**
         * Creates a new subclass of class sap.ui.ux3.ToolPopup with name `sClassName` and enriches it with the
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
         * Fires event {@link #event:close close} to attached listeners.
         *
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event
         * object.
         */
        fireClose(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): boolean;
        /**
         * Fires event {@link #event:closed closed} to attached listeners.
         */
        fireClosed(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ui.ux3.ToolPopup;
        /**
         * Fires event {@link #event:enter enter} to attached listeners.
         */
        fireEnter(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The onsapenter event, received by the pop up
             */
            originalEvent?: object;
            /**
             * The control that was focused when the user pressed the Enter key (may be null)
             */
            originalSrcControl?: sap.ui.core.Control;
          }
        ): sap.ui.ux3.ToolPopup;
        /**
         * Fires event {@link #event:iconChanged iconChanged} to attached listeners.
         */
        fireIconChanged(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ui.ux3.ToolPopup;
        /**
         * Fires event {@link #event:open open} to attached listeners.
         */
        fireOpen(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ui.ux3.ToolPopup;
        /**
         * @SINCE 1.19.0
         *
         * Fires event {@link #event:opened opened} to attached listeners.
         */
        fireOpened(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ui.ux3.ToolPopup;
        /**
         * @SINCE 1.13.2
         *
         * Gets current value of property {@link #getAutoClose autoClose}.
         *
         * Determines whether the ToolPopup will auto close when it loses focus. If the user e.g. clicks outside
         * of the ToolPopup it will be closed. Please don't use "modal" and "autoclose" at the same time. In this
         * case a warning will be prompted to the console and "autoclose" won't be used.
         *
         * Default value is `false`.
         */
        getAutoClose(): boolean;
        /**
         * Gets content of aggregation {@link #getButtons buttons}.
         *
         * Defines the buttons to appear in the popup
         */
        getButtons(): sap.ui.core.Control[];
        /**
         * @SINCE 1.19.0
         *
         * Gets current value of property {@link #getCloseDuration closeDuration}.
         *
         * Time in milliseconds for the close animation.
         *
         * Default value is `400`.
         */
        getCloseDuration(): number;
        /**
         * Gets content of aggregation {@link #getContent content}.
         *
         * Defines the content of the popup
         */
        getContent(): sap.ui.core.Control[];
        /**
         * @SINCE 1.20.1
         *
         * ID of the element which is the current target of the association {@link #getDefaultButton defaultButton},
         * or `null`.
         */
        getDefaultButton(): sap.ui.core.ID;
        /**
         * @SINCE 1.13.1
         *
         * Indicates whether the ToolPopup is currently enabled or not.
         *
         * Applications can't control the enabled state via a property. A ToolPopup is implicitly enabled depending
         * on its `openState`. Descendant controls that honor the enabled state of their ancestors will appear disabled
         * after the ToolPopup is closed.
         *
         * Since 1.13.1. Whether a dialog is regarded as "enabled" during the state transitions (OPENING, CLOSING)
         * is not fully decided. Currently, it is enabled during the OPENING phase and disabled during the CLOSING
         * phase. The only potential change would be to treat the OPENING phase as disabled as well. Applications
         * should be prepared to receive events from "enabled" controls after they called open() on the dialog until
         * close() is called on it. If the mentioned potential change should happen, the dialog will become enabled
         * only after the transition to OPEN. Events from "enabled" children then can still only arrive between
         * open() and close(), so applications that obey the previous rule should continue to work. Only end users
         * or code that explicitly triggers pseudo user events would notice a difference.
         *  A second aspect that might change is the visual behavior of the content: during the CLOSING phase it
         * 'looks' enabled but in fact it is already disabled. This avoids unnecessary redraws for content that
         * becomes hidden soon. Should this show to be confusing for end users, it might be changed.
         */
        getEnabled(): boolean;
        /**
         * Gets current value of property {@link #getIcon icon}.
         *
         * This property is relevant for Shell use: The URL to the icon displayed in the tool area which is used
         * to open the ToolPopup. The recommended size is 32x32px, including some transparent border. Therefore,
         * the content will cover about 20x20px.
         */
        getIcon(): sap.ui.core.URI;
        /**
         * Gets current value of property {@link #getIconHover iconHover}.
         *
         * This property is relevant for Shell use: The URL to the icon in hover state, displayed in the tool area
         * which is used to open the popup.
         */
        getIconHover(): sap.ui.core.URI;
        /**
         * ID of the element which is the current target of the association {@link #getInitialFocus initialFocus},
         * or `null`.
         */
        getInitialFocus(): sap.ui.core.ID;
        /**
         * @SINCE 1.11.1
         *
         * Gets current value of property {@link #getInverted inverted}.
         *
         * Specifies whether the ToolPopup has a dark or bright background. If set to true the background and borders
         * will be dark. If false they will be bright. This property only has an effect for the GoldReflection-theme.
         *
         * Default value is `true`.
         */
        getInverted(): boolean;
        /**
         * @SINCE 1.13.2
         *
         * Gets current value of property {@link #getMaxHeight maxHeight}.
         *
         * Forces a maximum height of the ToolPopup in pixels. If the ToolPopup content is higher than the ToolPopup,
         * the content will be scrollable.
         */
        getMaxHeight(): sap.ui.core.CSSSize;
        /**
         * @SINCE 1.15.0
         *
         * Gets current value of property {@link #getMaxWidth maxWidth}.
         *
         * Forces a maximum width of the ToolPopup in pixels.
         */
        getMaxWidth(): sap.ui.core.CSSSize;
        /**
         * Returns a metadata object for class sap.ui.ux3.ToolPopup.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getModal modal}.
         *
         * Specifies whether the popup is modal and blocks any user-interaction with controls in the background.
         * Changing this property while the ToolPopup is open will not have any effect. Please don't use "modal"
         * and "autoclose" at the same time. In this case a warning will be prompted to the console and "autoclose"
         * won't be used.
         *
         * Default value is `false`.
         */
        getModal(): boolean;
        /**
         * @SINCE 1.19.0
         *
         * Gets current value of property {@link #getOpenDuration openDuration}.
         *
         * Time in milliseconds for the open animation.
         *
         * Default value is `400`.
         */
        getOpenDuration(): number;
        /**
         * ID of the element which is the current target of the association {@link #getOpener opener}, or `null`.
         */
        getOpener(): sap.ui.core.ID;
        /**
         * Gets current value of property {@link #getTitle title}.
         *
         * Determines the title displayed in the pop up window
         */
        getTitle(): string;
        /**
         * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getButtons buttons}. and returns
         * its index if found or -1 otherwise.
         */
        indexOfButton(
          /**
           * The button whose index is looked for
           */
          oButton: sap.ui.core.Control
        ): number;
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
         * Inserts a button into the aggregation {@link #getButtons buttons}.
         */
        insertButton(
          /**
           * The button to insert; if empty, nothing is inserted
           */
          oButton: sap.ui.core.Control,
          /**
           * The `0`-based index the button should be inserted at; for a negative value of `iIndex`, the button is
           * inserted at position 0; for a value greater than the current size of the aggregation, the button is inserted
           * at the last position
           */
          iIndex: number
        ): sap.ui.ux3.ToolPopup;
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
        ): sap.ui.ux3.ToolPopup;
        /**
         * Indicates whether the pop up is currently open
         */
        isOpen(): boolean;
        /**
         * Opens the ToolPopup. It is checked which control wants to open the ToolPopup. The Shell was previously
         * set as parent so the corresponding parent element is used to set the correct position of the ToolPopup.
         * If another control (i.e. a button) opens the ToolPopup, the control must be previously set as `opener`
         * via `setOpener` to the ToolPopup. Corresponding to this opener the position of the ToolPopup will be
         * set. It's also possible to set the position above, below or left from the opener. This can be done via
         * the possible parameters `my` and `at`. These parameters refers to work the same way as they do of sap.ui.core.Popup.open.
         */
        open(
          /**
           * The ToolPopup's content reference position for docking
           */
          my?: any,
          /**
           * The "of" element's reference point for docking to
           */
          at?: any
        ): sap.ui.ux3.ToolPopup;
        /**
         * Removes all the controls from the aggregation {@link #getButtons buttons}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllButtons(): sap.ui.core.Control[];
        /**
         * Removes all the controls from the aggregation {@link #getContent content}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllContent(): sap.ui.core.Control[];
        /**
         * Removes a button from the aggregation {@link #getButtons buttons}.
         */
        removeButton(
          /**
           * The button to remove or its index or id
           */
          vButton: number | string | sap.ui.core.Control
        ): sap.ui.core.Control;
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
         * @SINCE 1.19.0
         *
         * Removes an ID to the Popup that should be focusable as well when using `autoclose`. Chaining is only
         * possible if a valid type (string) is given.
         */
        removeFocusableArea(
          /**
           * ID of the corresponding element
           */
          sID?: string
        ): void;
        /**
         * @SINCE 1.13.2
         *
         * Sets a new value for property {@link #getAutoClose autoClose}.
         *
         * Determines whether the ToolPopup will auto close when it loses focus. If the user e.g. clicks outside
         * of the ToolPopup it will be closed. Please don't use "modal" and "autoclose" at the same time. In this
         * case a warning will be prompted to the console and "autoclose" won't be used.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setAutoClose(
          /**
           * New value for property `autoClose`
           */
          bAutoClose: boolean
        ): sap.ui.ux3.ToolPopup;
        /**
         * @SINCE 1.19.0
         *
         * This is just a forward to the Popup's function (sap.ui.core.Popup.setAutoCloseAreas) with the same functionality.
         */
        setAutoCloseAreas(aAutoCloseAreas: Element[]): void;
        /**
         * @SINCE 1.19.0
         *
         * Sets a new value for property {@link #getCloseDuration closeDuration}.
         *
         * Time in milliseconds for the close animation.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `400`.
         */
        setCloseDuration(
          /**
           * New value for property `closeDuration`
           */
          iCloseDuration: number
        ): sap.ui.ux3.ToolPopup;
        /**
         * @SINCE 1.20.1
         *
         * Sets the associated {@link #getDefaultButton defaultButton}.
         */
        setDefaultButton(
          /**
           * ID of an element which becomes the new target of this defaultButton association; alternatively, an element
           * instance may be given
           */
          oDefaultButton: sap.ui.core.ID | sap.ui.core.Control
        ): sap.ui.ux3.ToolPopup;
        /**
         * Sets the associated {@link #getInitialFocus initialFocus}.
         */
        setInitialFocus(
          /**
           * ID of an element which becomes the new target of this initialFocus association; alternatively, an element
           * instance may be given
           */
          oInitialFocus: sap.ui.core.ID | sap.ui.core.Control
        ): sap.ui.ux3.ToolPopup;
        /**
         * @SINCE 1.11.1
         *
         * Sets a new value for property {@link #getInverted inverted}.
         *
         * Specifies whether the ToolPopup has a dark or bright background. If set to true the background and borders
         * will be dark. If false they will be bright. This property only has an effect for the GoldReflection-theme.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setInverted(
          /**
           * New value for property `inverted`
           */
          bInverted: boolean
        ): sap.ui.ux3.ToolPopup;
        /**
         * @SINCE 1.13.2
         *
         * Sets a new value for property {@link #getMaxHeight maxHeight}.
         *
         * Forces a maximum height of the ToolPopup in pixels. If the ToolPopup content is higher than the ToolPopup,
         * the content will be scrollable.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setMaxHeight(
          /**
           * New value for property `maxHeight`
           */
          sMaxHeight: sap.ui.core.CSSSize
        ): sap.ui.ux3.ToolPopup;
        /**
         * Sets a new value for property {@link #getModal modal}.
         *
         * Specifies whether the popup is modal and blocks any user-interaction with controls in the background.
         * Changing this property while the ToolPopup is open will not have any effect. Please don't use "modal"
         * and "autoclose" at the same time. In this case a warning will be prompted to the console and "autoclose"
         * won't be used.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setModal(
          /**
           * New value for property `modal`
           */
          bModal: boolean
        ): sap.ui.ux3.ToolPopup;
        /**
         * @SINCE 1.19.0
         *
         * Sets a new value for property {@link #getOpenDuration openDuration}.
         *
         * Time in milliseconds for the open animation.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `400`.
         */
        setOpenDuration(
          /**
           * New value for property `openDuration`
           */
          iOpenDuration: number
        ): sap.ui.ux3.ToolPopup;
        /**
         * Sets the associated {@link #getOpener opener}.
         */
        setOpener(
          /**
           * ID of an element which becomes the new target of this opener association; alternatively, an element instance
           * may be given
           */
          oOpener: sap.ui.core.ID | sap.ui.core.Control
        ): sap.ui.ux3.ToolPopup;
        /**
         * Sets the position of the pop up, the same parameters as for sap.ui.core.Popup can be used.
         */
        setPosition(): void;
        /**
         * Sets a new value for property {@link #getTitle title}.
         *
         * Determines the title displayed in the pop up window
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setTitle(
          /**
           * New value for property `title`
           */
          sTitle: string
        ): sap.ui.ux3.ToolPopup;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:close close} event of this `sap.ui.ux3.ToolPopup`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.ToolPopup` itself.
         *
         * Event is fired when the popup closes because the user pressed Escape or the ToolPopup Button in the Shell.
         * This is called before the closing animation.
         */
        attachClose(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ToolPopup` itself
           */
          oListener?: object
        ): sap.ui.ux3.ToolPopup;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:closed closed} event of this `sap.ui.ux3.ToolPopup`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.ToolPopup` itself.
         *
         * This event is fired after the ToolPopup has finished its closing animation. It is called for EVERY close,
         * regardless of whether the user has triggered the close or whether the ToolPopup was closed via API call.
         */
        attachClosed(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ToolPopup` itself
           */
          oListener?: object
        ): sap.ui.ux3.ToolPopup;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:enter enter} event of this `sap.ui.ux3.ToolPopup`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.ToolPopup` itself.
         *
         * Event is fired whenever the user clicks the Enter or the Enter key inside the pop up
         */
        attachEnter(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ToolPopup` itself
           */
          oListener?: object
        ): sap.ui.ux3.ToolPopup;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:iconChanged iconChanged} event of this `sap.ui.ux3.ToolPopup`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.ToolPopup` itself.
         *
         * Event is fired when one of the icon properties is modified (Note: The icon is not rendered by the ToolPopup).
         * To be used by other controls which want to update the icon in their UI.
         */
        attachIconChanged(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ToolPopup` itself
           */
          oListener?: object
        ): sap.ui.ux3.ToolPopup;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:open open} event of this `sap.ui.ux3.ToolPopup`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.ToolPopup` itself.
         *
         * Event is fired when the popup opens
         */
        attachOpen(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ToolPopup` itself
           */
          oListener?: object
        ): sap.ui.ux3.ToolPopup;
        /**
         * @SINCE 1.19.0
         *
         * Attaches event handler `fnFunction` to the {@link #event:opened opened} event of this `sap.ui.ux3.ToolPopup`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.ux3.ToolPopup` itself.
         *
         * Event is being fired after the ToolPopup has been opened.
         */
        attachOpened(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.ux3.ToolPopup` itself
           */
          oListener?: object
        ): sap.ui.ux3.ToolPopup;
      }
      /**
       * @deprecated (since 1.38)
       * @EXPERIMENTAL (since 1.2)
       *
       * Enumeration of available standard actions for 'sap.ui.ux3.ActionBar'. To be used as parameters for function
       * 'sap.ui.ux3.ActionBar.getSocialAction'.
       */
      enum ActionBarSocialActions {
        /**
         * Standards action 'Mark as Favorite'
         */
        Favorite,
        /**
         * Standard action 'Mark for Follow up'
         */
        Flag,
        /**
         * Standard action 'Follow/Unfollow'
         */
        Follow,
        /**
         * Standard action 'Open Thing Inspector'
         */
        Open,
        /**
         * Standard action 'Create an update' (Feed)
         */
        Update
      }
      /**
       * @SINCE 1.7.1
       * @deprecated (since 1.38)
       *
       * Defines the order of the sub lists of a list in the ExactBrowser.
       */
      enum ExactOrder {
        /**
         * The order of the sub lists is defined by order of the defined sub attributes.
         */
        Fixed,
        /**
         * The order of the sub lists is defined by the selection order of the user.
         */
        Select
      }
      /**
       * @deprecated (since 1.38)
       * @EXPERIMENTAL (since 1.2)
       *
       * Type of a Feeder.
       */
      enum FeederType {
        /**
         * comment feeder (small)
         */
        Comment,
        /**
         * large Feeder
         */
        Large,
        /**
         * medium feeder
         */
        Medium
      }
      /**
       * @deprecated (since 1.38)
       *
       * Defines the states of the follow action
       */
      enum FollowActionState {
        /**
         * default state
         */
        Default,
        /**
         * follow state
         */
        Follow,
        /**
         * hold state
         */
        Hold
      }
      /**
       * @deprecated (since 1.38)
       *
       * This entries are used to set the visibility status of a NotificationBar
       */
      enum NotificationBarStatus {
        /**
         * Default height for the bar
         */
        Default,
        /**
         * Bar should be maximized
         */
        Max,
        /**
         * Bar should be minimized
         */
        Min,
        /**
         * Bar should not be visible
         */
        None
      }
      /**
       * @SINCE 1.12.0
       * @deprecated (since 1.38)
       *
       * Available shell design types.
       */
      enum ShellDesignType {
        /**
         * An even lighter design. It borrows most of its properties from the Light design and just changes a few
         * details like the header colors in order to have a blue design within gold reflection.
         */
        Crystal,
        /**
         * A lighter design. Should be used in combination with the Standard header type.
         */
        Light,
        /**
         * The standard Shell design (dark).
         */
        Standard
      }
      /**
       * @deprecated (since 1.38)
       *
       * Available shell header display types.
       */
      enum ShellHeaderType {
        /**
         * Only the branding area is visible. Top-level navigation bar, header items, title and icon are not shown.
         */
        BrandOnly,
        /**
         * Like the Standard Area but without top-level navigation bar.
         */
        NoNavigation,
        /**
         * Like the Standard Area but with a leaner top-level navigation bar.
         */
        SlimNavigation,
        /**
         * The standard Shell header.
         */
        Standard
      }
      /**
       * @SINCE 1.16.3
       * @deprecated (since 1.38)
       *
       * Available ThingViewer header display types.
       */
      enum ThingViewerHeaderType {
        /**
         * The header content is displayed horizontally above the facet content
         */
        Horizontal,
        /**
         * The standard ThingViewer header.
         */
        Standard
      }
      /**
       * @deprecated (since 1.38)
       *
       * VisibleItemCountMode of the FacetFilter defines if the FacetFilter takes the whole available height (Auto)
       * in the surrounding container, or is so high as needed to show 5 Items ("Fixed " - default).
       */
      enum VisibleItemCountMode {
        /**
         * The FacetFilter automatically fills the height of the surrounding container. The visibleItemCount property
         * is automatically changed accordingly.
         */
        Auto,
        /**
         * The FacetFilter always has as many items in the FacetFilterList as defined in the visibleItemCount property.
         */
        Fixed
      }
    }
  }

  interface IUI5DefineDependencyNames {
    "sap/ui/ux3/ActionBar": undefined;

    "sap/ui/ux3/Collection": undefined;

    "sap/ui/ux3/CollectionInspector": undefined;

    "sap/ui/ux3/DataSet": undefined;

    "sap/ui/ux3/DataSetItem": undefined;

    "sap/ui/ux3/DataSetSimpleView": undefined;

    "sap/ui/ux3/Exact": undefined;

    "sap/ui/ux3/ExactArea": undefined;

    "sap/ui/ux3/ExactAttribute": undefined;

    "sap/ui/ux3/ExactBrowser": undefined;

    "sap/ui/ux3/FacetFilter": undefined;

    "sap/ui/ux3/FacetFilterList": undefined;

    "sap/ui/ux3/Feed": undefined;

    "sap/ui/ux3/FeedChunk": undefined;

    "sap/ui/ux3/Feeder": undefined;

    "sap/ui/ux3/NavigationBar": undefined;

    "sap/ui/ux3/NavigationItem": undefined;

    "sap/ui/ux3/NotificationBar": undefined;

    "sap/ui/ux3/Notifier": undefined;

    "sap/ui/ux3/Overlay": undefined;

    "sap/ui/ux3/OverlayContainer": undefined;

    "sap/ui/ux3/OverlayDialog": undefined;

    "sap/ui/ux3/QuickView": undefined;

    "sap/ui/ux3/Shell": undefined;

    "sap/ui/ux3/ThingAction": undefined;

    "sap/ui/ux3/ThingGroup": undefined;

    "sap/ui/ux3/ThingInspector": undefined;

    "sap/ui/ux3/ThingViewer": undefined;

    "sap/ui/ux3/ToolPopup": undefined;

    "sap/ui/ux3/DataSetView": undefined;
  }
}
