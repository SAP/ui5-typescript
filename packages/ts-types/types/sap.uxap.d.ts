/**
 * This is a Beta version of the OpenUI5 TypeScript Signatures.
 * Significant changes may occur in future versions,
 * including potential breaking changes.
 */
// For Library Version: 1.60.14

declare namespace sap {
  /**
   * SAP UxAP
   */
  namespace uxap {
    /**
     * @SINCE 1.52
     *
     * Interface for controls that are eligible for the `headerContent` aggregation of the `{@link sap.uxap.ObjectPageLayout}`.
     *
     * Controls that implement this interface:
     * 	 - `{@link sap.uxap.ObjectPageHeaderContent}` - `ObjectPageLayout`'s classic header content
     * 	 - `{@link sap.uxap.ObjectPageDynamicHeaderContent}` - `ObjectPageLayout`'s dynamic header content
     *
     *
     * For more information on the types of header available for the `{@link sap.uxap.ObjectPageLayout ObjectPageLayout}`,
     * see {@link topic:d2ef0099542d44dc868719d908e576d0 Object Page Headers}.
     *
     * For details regarding the differences and similarities between the available headers, see {@link topic:9c9d94fd28284539a9a5a57e9caf82a8
     * Object Page Headers Comparison}.
     * See:
     * 	{@link topic:d2ef0099542d44dc868719d908e576d0 Object Page Headers}
     */
    interface IHeaderContent {}
    /**
     * @SINCE 1.52
     *
     * Interface for controls that are eligible for the `headerTitle` aggregation of the `{@link sap.uxap.ObjectPageLayout}`.
     *
     * Controls that implement this interface:
     * 	 - `{@link sap.uxap.ObjectPageHeader}` - `ObjectPageLayout`'s classic header
     * 	 - `{@link sap.uxap.ObjectPageDynamicHeaderTitle}` - `ObjectPageLayout`'s dynamic header
     *
     * For more information on the types of header available for the `{@link sap.uxap.ObjectPageLayout ObjectPageLayout}`,
     * see {@link topic:d2ef0099542d44dc868719d908e576d0 Object Page Headers}.
     *
     * For details regarding the differences and similarities between the available headers, see {@link topic:9c9d94fd28284539a9a5a57e9caf82a8
     * Object Page Headers Comparison}.
     * See:
     * 	{@link topic:d2ef0099542d44dc868719d908e576d0 Object Page Headers}
     */
    interface IHeaderTitle {}

    interface AnchorBarOpts extends sap.m.ToolbarOpts {
      /**
       * Determines whether to show a Popover with Subsection links when clicking on Section links in the Anchor
       * bar.
       */
      showPopover?: boolean;

      /**
       * Determines whether the Anchor bar items are displayed in upper case.
       */
      upperCase?: boolean;

      /**
       * @SINCE 1.58
       *
       * Determines the background color of the `AnchorBar`.
       *
       * **Note:** The default value of `backgroundDesign` property is null. If the property is not set, the color
       * of the background is `@sapUiObjectHeaderBackground`, which depends on the specific theme.
       */
      backgroundDesign?: sap.m.BackgroundDesign;

      /**
       * The button that represents the Section being scrolled by the user.
       */
      selectedButton?: sap.m.Button | string;
    }

    interface BlockBaseOpts extends sap.ui.core.ControlOpts {
      /**
       * Determines the mode of the block. When block is used inside ObjectPage this mode is inherited my the
       * SubSection. The mode of the block is changed when SubSection mode changes.
       */
      mode?: string;

      /**
       * Determines the visibility of the block.
       */
      visible?: boolean;

      /**
       * Determines on how many columns the layout will be rendered. Allowed values are integers from 1 to 4 and
       * "auto".
       */
      columnLayout?: sap.uxap.BlockBaseColumnLayout;

      /**
       * Determines if the block should automatically adjust its inner forms. Allowed values are "BlockColumns"
       * and "OneColumn" and "None". If the value is "BlockColumns", then the inner form will have as many columns
       * as the colspan of its parent block. If the value is "OneColumn", the inner form will have exactly one
       * column, regardless the colspan of its parent block. If the value is "None", no automatic adjustment of
       * inner forms will be made and the form will keep its original column count.
       */
      formAdjustment?: sap.uxap.BlockBaseFormAdjustment;

      /**
       * Determines whether the show more button should be shown.
       *
       * **Note:** The property will take effect if the `BlockBase` is inside `ObjectPageSubSection` and would
       * be ignored in case the `BlockBase` is nested inside another `BlockBase`.
       */
      showSubSectionMore?: boolean;

      /**
       * Map external UI5 model and internal Block model
       */
      mappings?: sap.uxap.ModelMapping[] | sap.uxap.ModelMapping;

      /**
       * The view that is rendered now. Can be used as getter for the rendered view.
       */
      selectedView?: sap.ui.core.Control | string;
    }

    interface BreadCrumbsOpts extends sap.ui.core.ControlOpts {
      /**
       * Sets the visibility of the current/last element in the BreadCrumbs path.
       */
      showCurrentLocation?: boolean;

      /**
       * A list of all the active link elements in the BreadCrumbs control.
       */
      links?: sap.m.Link[] | sap.m.Link;

      /**
       * The current/last element in the BreadCrumbs path.
       */
      currentLocation?: sap.m.Text;
    }

    interface HierarchicalSelectOpts extends sap.m.SelectOpts {
      /**
       * Determines whether the HierarchicalSelect items are displayed in upper case.
       */
      upperCase?: boolean;
    }

    interface ModelMappingOpts extends sap.ui.core.ElementOpts {
      /**
       * Determines the external model name.
       */
      externalModelName?: string;

      /**
       * Determines the internal model name.
       */
      internalModelName?: string;

      /**
       * Determines the external path.
       */
      externalPath?: string;
    }

    interface ObjectPageHeaderOpts extends sap.ui.core.ControlOpts {
      /**
       * The URL of the image, representing the business object
       */
      objectImageURI?: string;

      /**
       * The text to be used for the Alt and Tooltip attribute of the image, supplied via the objectImageURI property
       */
      objectImageAlt?: string;

      /**
       * The value of densityAware for the image, supplied via the objectImageURI property. See sap.m.Image for
       * more details on densityAware.
       */
      objectImageDensityAware?: boolean;

      /**
       * The title of the object
       */
      objectTitle?: string;

      /**
       * The description of the object
       */
      objectSubtitle?: string;

      /**
       * Determines whether the picture should be displayed in a square or with a circle-shaped mask.
       */
      objectImageShape?: sap.uxap.ObjectPageHeaderPictureShape;

      /**
       * Determines whether the icon should always be visible or visible only when the header is snapped.
       */
      isObjectIconAlwaysVisible?: boolean;

      /**
       * Determines whether the title should always be visible or visible only when the header is snapped.
       */
      isObjectTitleAlwaysVisible?: boolean;

      /**
       * Determines whether the subtitle should always be visible or visible only when the header is snapped.
       */
      isObjectSubtitleAlwaysVisible?: boolean;

      /**
       * Determines whether the action buttons should always be visible or visible only when the header is snapped.
       */
      isActionAreaAlwaysVisible?: boolean;

      /**
       * @deprecated (since 1.40.1)
       *
       * Determines the design of the header - Light or Dark. **Note: **This property is deprecated. It will continue
       * to work in the Blue Crystal theme, but it will not be taken into account for the Belize themes.
       */
      headerDesign?: sap.uxap.ObjectPageHeaderDesign;

      /**
       * When set to true, the selector arrow icon/image is shown and can be pressed.
       */
      showTitleSelector?: boolean;

      /**
       * Set the favorite state to true or false. The showMarkers property must be true for this property to take
       * effect.
       */
      markFavorite?: boolean;

      /**
       * Set the flagged state to true or false. The showMarkers property must be true for this property to take
       * effect.
       */
      markFlagged?: boolean;

      /**
       * Indicates if object page header title supports showing markers such as flagged and favorite.
       */
      showMarkers?: boolean;

      /**
       * Set the locked state of the objectPageHeader.
       */
      markLocked?: boolean;

      /**
       * Enables support of a placeholder image in case no image is specified or the URL of the provided image
       * is invalid.
       */
      showPlaceholder?: boolean;

      /**
       * @SINCE 1.34.0
       *
       * Marks that there are unsaved changes in the objectPageHeader. The markChanges state cannot be used together
       * with the markLocked state. If both are set to true, only the locked state will be displayed.
       */
      markChanges?: boolean;

      /**
       * The event is fired when the objectPage header title selector (down-arrow) is pressed
       */
      titleSelectorPress?: Function;

      /**
       * The event is fired when the Locked button is pressed
       */
      markLockedPress?: Function;

      /**
       * The event is fired when the unsaved changes button is pressed
       */
      markChangesPress?: Function;

      /**
       * @SINCE 1.50
       *
       * The breadcrumbs displayed in the `ObjectPageHeader`. If this aggregation is set, the `breadCrumbsLinks`
       * aggregation is omitted.
       */
      breadcrumbs?: sap.m.Breadcrumbs;

      /**
       * @deprecated (since 1.50) - use the `breadcrumbs` aggregation instead.
       *
       * A list of all the active link elements in the BreadCrumbs control.
       */
      breadCrumbsLinks?: sap.m.Link[] | sap.m.Link;

      /**
       * An instance of sap.m.Bar to be embedded in the header
       */
      navigationBar?: sap.m.Bar;

      /**
       * List of actions that will be displayed in the header. You can use ObjectPageHeaderActionButton controls
       * to achieve a different visual representation of the action buttons in the action bar and the action sheet
       * (overflow menu). You can use ObjectPageHeaderLayoutData to display a visual separator.
       */
      actions?: sap.ui.core.Control[] | sap.ui.core.Control;

      /**
       * @SINCE 1.38.0
       *
       * A button that is used for opening the side content of the page or some additional content.
       */
      sideContentButton?: sap.m.Button;

      /**
       * @SINCE 1.56
       *
       * A custom tooltip for the title selector button.
       *
       * The custom tooltip will be visible if the `showTitleSelector` property is set to `true`.
       *
       * **Note:** If the aggregation is destroyed or set to invalid value, the default tooltip will be set. The
       * default tooltip text is "Related options".
       */
      titleSelectorTooltip?: sap.ui.core.TooltipBase;
    }

    interface ObjectPageHeaderActionButtonOpts extends sap.m.ButtonOpts {
      /**
       * Hide the button text when rendered into the headerTitle part of the ObjectPageLayout. This is useful
       * if you want to display icons only in the headerTitle part but still want to display text + icon in the
       * actionSheet that appears when not enough space is available on the screen for displaying all actions.
       */
      hideText?: boolean;

      /**
       * Hide the button icon when rendered into the headerTitle part of the ObjectPageLayout. This is useful
       * if you want to display texts only in the headerTitle part but still want to display text + icon in the
       * actionSheet that appears when not enough space is available on the screen for displaying all actions.
       */
      hideIcon?: boolean;

      /**
       * @SINCE 1.34.0
       *
       * Determines the order in which the button overflows.
       */
      importance?: sap.uxap.Importance;
    }

    interface ObjectPageHeaderContentOpts extends sap.ui.core.ControlOpts {
      /**
       * @deprecated (since 1.40.1)
       *
       * Determines the design of the header - Light or Dark. **Note: **This property is deprecated. It will continue
       * to work in the Blue Crystal theme, but it will not be taken into account for the Belize themes.
       */
      contentDesign?: sap.uxap.ObjectPageHeaderDesign;

      /**
       * The list of Objects of type sap.ui.core.Control.
       */
      content?: sap.ui.core.Control[] | sap.ui.core.Control;
    }

    interface ObjectPageHeaderLayoutDataOpts
      extends sap.ui.core.LayoutDataOpts {
      /**
       * If this property is set the control will be visible (or not) in a small sized layout.
       */
      visibleS?: boolean;

      /**
       * If this property is set the control will be visible (or not) in a medium sized layout.
       */
      visibleM?: boolean;

      /**
       * If this property is set the control will be visible (or not) in a large sized layout.
       */
      visibleL?: boolean;

      /**
       * If this property is set the control will display a separator before it.
       */
      showSeparatorBefore?: boolean;

      /**
       * If this property is set the control will display a separator after it.
       */
      showSeparatorAfter?: boolean;

      /**
       * If this property is set the control will take the provided size.
       */
      width?: sap.ui.core.CSSSize;
    }

    interface ObjectPageLayoutOpts extends sap.ui.core.ControlOpts {
      /**
       * Determines whether the Navigation bar (Anchor bar) is displayed.
       */
      showAnchorBar?: boolean;

      /**
       * Determines whether to show a Popover with Subsection links when clicking on Section links in the Anchor
       * bar.
       */
      showAnchorBarPopover?: boolean;

      /**
       * Determines whether the Anchor bar items are displayed in upper case.
       */
      upperCaseAnchorBar?: boolean;

      /**
       * @SINCE 1.58
       *
       * Determines the background color of the `AnchorBar`.
       *
       * **Note:** The default value of `backgroundDesignAnchorBar` property is null. If the property is not set,
       * the color of the background is `@sapUiObjectHeaderBackground`, which depends on the specific theme.
       */
      backgroundDesignAnchorBar?: sap.m.BackgroundDesign;

      /**
       * Determines the height of the ObjectPage.
       */
      height?: sap.ui.core.CSSSize;

      /**
       * Enable lazy loading for the Object page Subsections.
       */
      enableLazyLoading?: boolean;

      /**
       * Determines whether Subsection titles are displayed on top or to the left of the Subsection content.
       */
      subSectionLayout?: sap.uxap.ObjectPageSubSectionLayout;

      /**
       * @SINCE 1.44.0
       *
       * Determines the ARIA level of the `ObjectPageSection` and `ObjectPageSubSection` titles. The ARIA level
       * is used by assisting technologies, such as screen readers, to create a hierarchical site map for faster
       * navigation.
       *
       *
       * **Note:**
       * 	 - Defining a `sectionTitleLevel` will add `aria-level` attribute from 1 to 6 instead of changing the
       * 			titles` HTML tag from H1 to H6.
       * For example: if `sectionTitleLevel` is `TitleLevel.H1`, it will result as aria-level of 1 added to the
       * `ObjectPageSection` title.
       *
       *
       * 	 -  The `ObjectPageSubSection` title would have `aria-level` one level lower than the defined. For example:
       * 			if `sectionTitleLevel` is `TitleLevel.H1`, it will result as aria-level of 2 added to the `ObjectPageSubSection`
       * 			title.
       *
       *
       * 	 -  It is possible to define a `titleLevel` on `ObjectPageSection` or `ObjectPageSubSection` level.
       * 			In this case the value of this property will be ignored.
       */
      sectionTitleLevel?: sap.ui.core.TitleLevel;

      /**
       * Use tab navigation mode instead of the default Anchor bar mode.
       * **Note: **Keep in mind that the `sap.m.IconTabBar` control is no longer used for the tab navigation mode.
       */
      useIconTabBar?: boolean;

      /**
       * Determines the visibility of the Header content (headerContent aggregation).
       */
      showHeaderContent?: boolean;

      /**
       * Determines whether the to use two column layout for the L screen size.
       */
      useTwoColumnsForLargeScreen?: boolean;

      /**
       * Determines whether the title, image, markers and selectTitleArrow are shown in the Header content area.
       *
       * **Note**: This property is only taken into account if an instance of `sap.uxap.ObjectPageHeader` is used
       * for the `headerTitle` aggregation.
       */
      showTitleInHeaderContent?: boolean;

      /**
       * @SINCE 1.32.0
       *
       * Determines whether sections and subsections with importance Low and Medium are hidden even on large screens.
       */
      showOnlyHighImportance?: boolean;

      /**
       * @SINCE 1.34.0
       *
       * Determines whether the page is a child page and renders it with a different design. Child pages have
       * an additional (darker/lighter) stripe on the left side of their header content area.
       *
       * **Note**: This property is only taken into account if an instance of `sap.uxap.ObjectPageHeader` is used
       * for the `headerTitle` aggregation.
       */
      isChildPage?: boolean;

      /**
       * @SINCE 1.34.0
       *
       * Determines whether Header Content will always be expanded on desktop.
       *
       * **Note**: This property is only taken into account if an instance of `sap.uxap.ObjectPageHeader` is used
       * for the `headerTitle` aggregation.
       */
      alwaysShowContentHeader?: boolean;

      /**
       * @SINCE 1.52
       *
       * Determines whether the Header Content area can be pinned.
       *
       * When set to `true`, a pin button is displayed within the Header Content area. The pin button allows the
       * user to make the Header Content always visible at the top of the page above any scrollable content.
       *
       * **Note:** This property is only taken into account if an instance of `sap.uxap.ObjectPageDynamicHeaderTitle`
       * is used for the `headerTitle` aggregation.
       */
      headerContentPinnable?: boolean;

      /**
       * @SINCE 1.52
       *
       * Determines whether the user can switch between the expanded/collapsed states of the `sap.uxap.ObjectPageDynamicHeaderContent`
       * by clicking on the `sap.uxap.ObjectPageDynamicHeaderTitle`. If set to `false`, the `sap.uxap.ObjectPageDynamicHeaderTitle`
       * is not clickable and the application must provide other means for expanding/collapsing the `sap.uxap.ObjectPageDynamicHeaderContent`,
       * if necessary.
       *
       * **Note:** This property is only taken into account if an instance of `sap.uxap.ObjectPageDynamicHeaderTitle`
       * is used for the `headerTitle` aggregation.
       */
      toggleHeaderOnTitleClick?: boolean;

      /**
       * @SINCE 1.52
       *
       * Preserves the current header state when scrolling. For example, if the user expands the header by clicking
       * on the title and then scrolls down the page, the header will remain expanded.
       *
       * **Notes:**
       * 	 - This property is only taken into account if an instance of `sap.uxap.ObjectPageDynamicHeaderTitle`
       * 			is used for the `headerTitle` aggregation.
       * 	 - Based on internal rules, the value of the property is not always taken into account - for example,
       * 			when the control is rendered on tablet or mobile and the control`s title and header are with height larger
       * 			than the given threshold.
       */
      preserveHeaderStateOnScroll?: boolean;

      /**
       * @SINCE 1.34.0
       *
       * Determines whether an Edit button will be displayed in Header Content.
       *
       * **Note**: This property is only taken into account if an instance of `sap.uxap.ObjectPageHeader` is used
       * for the `headerTitle` aggregation.
       */
      showEditHeaderButton?: boolean;

      /**
       * @SINCE 1.34.0
       *
       * Specifies whether the object page enables flexibility features, such as hiding and adding sections.
       *  For more information about SAPUI5 flexibility, refer to the Developer Guide.
       */
      flexEnabled?: boolean;

      /**
       * @SINCE 1.40
       *
       * Determines whether the footer is visible.
       */
      showFooter?: boolean;

      /**
       * The event is fired when the Anchor bar is switched from moving to fixed or the other way round.
       */
      toggleAnchorBar?: Function;

      /**
       * The event is fired when the Edit Header button is pressed
       */
      editHeaderButtonPress?: Function;

      /**
       * @SINCE 1.40
       *
       * The event is fired when the selected section is changed using the navigation.
       */
      navigate?: Function;

      /**
       * The sections that make up the Object page content area.
       */
      sections?: sap.uxap.ObjectPageSection[] | sap.uxap.ObjectPageSection;

      /**
       * Object page header title - the upper, always static, part of the Object page header.
       */
      headerTitle?: sap.uxap.IHeaderTitle;

      /**
       * Object page header content - the dynamic part of the Object page header.
       */
      headerContent?: sap.ui.core.Control[] | sap.ui.core.Control;

      /**
       * @SINCE 1.40
       *
       * Object page floating footer.
       */
      footer?: sap.m.IBar;

      /**
       * @SINCE 1.44.0
       *
       * The section that is selected by default on load.
       */
      selectedSection?: sap.uxap.ObjectPageSection | string;
    }

    interface ObjectPageLazyLoaderOpts extends sap.ui.core.ElementOpts {
      /**
       * Controls to be displayed after this element is unstashed
       */
      content?: sap.ui.core.Control[] | sap.ui.core.Control;
    }

    interface ObjectPageSectionOpts extends sap.uxap.ObjectPageSectionBaseOpts {
      /**
       * Determines whether to display the Section title or not.
       */
      showTitle?: boolean;

      /**
       * Determines whether the Section title is displayed in upper case.
       */
      titleUppercase?: boolean;

      /**
       * The list of Subsections.
       */
      subSections?:
        | sap.uxap.ObjectPageSubSection[]
        | sap.uxap.ObjectPageSubSection;

      /**
       * The most recently selected Subsection by the user.
       */
      selectedSubSection?: sap.uxap.ObjectPageSubSection | string;
    }

    interface ObjectPageSectionBaseOpts extends sap.ui.core.ControlOpts {
      /**
       * Section Title
       */
      title?: string;

      /**
       * @SINCE 1.44.0
       *
       * Determines the ARIA level of the `ObjectPageSectionBase` title. The ARIA level is used by assisting technologies,
       * such as screen readers, to create a hierarchical site map for faster navigation.
       *
       * **Note:** Defining a `titleLevel` will add `aria-level` attribute from 1 to 6, instead of changing the
       * `ObjectPageSectionBase` title HTML tag from H1 to H6.
       * For example: if `titleLevel` is `TitleLevel.H1`, it will result as aria-level of 1 added to the `ObjectPageSectionBase`
       * title.
       */
      titleLevel?: sap.ui.core.TitleLevel;

      /**
       * Invisible ObjectPageSectionBase are not rendered
       */
      visible?: boolean;

      /**
       * @SINCE 1.32.0
       *
       * Determines whether the section will be hidden on low resolutions.
       */
      importance?: sap.uxap.Importance;

      /**
       * The custom button that will provide a link to the section in the ObjectPageLayout anchor bar. This button
       * will be used as a custom template to be into the ObjectPageLayout anchorBar area, therefore property
       * changes happening on this button template after the first rendering won't affect the actual button copy
       * used in the anchorBar.
       *
       * If you want to change some of the button properties, you would need to bind them to a model.
       */
      customAnchorBarButton?: sap.m.Button;
    }

    interface ObjectPageSubSectionOpts
      extends sap.uxap.ObjectPageSectionBaseOpts {
      /**
       * A mode property that will be passed to the controls in the blocks and moreBlocks aggregations. Only relevant
       * if these aggregations use Object page blocks.
       */
      mode?: sap.uxap.ObjectPageSubSectionMode;

      /**
       * Determines whether the Subsection title is displayed in upper case.
       */
      titleUppercase?: boolean;

      /**
       * Controls to be displayed in the subsection
       *
       * **Note:** The SAP Fiori Design guidelines require that the `ObjectPageHeader`'s content and the `ObjectPage`'s
       * subsection content are aligned vertically. When using {@link sap.ui.layout.form.Form}, {@link sap.m.Panel},
       * {@link sap.m.Table} and {@link sap.m.List} in the subsection content area of `ObjectPage`, if the content
       * is not already aligned, you need to adjust their left text offset to achieve the vertical alignment.
       * To do this, apply the `sapUxAPObjectPageSubSectionAlignContent` CSS class to them and set their `width`
       * property to `auto` (if not set by default).
       *
       * Example:
       *
       *
       * ```javascript
       *
       * ` <Panel class="sapUxAPObjectPageSubSectionAlignContent" width="auto"></Panel> `
       * ```
       */
      blocks?: sap.ui.core.Control[] | sap.ui.core.Control;

      /**
       * Additional controls to display when the Show more / See all / (...) button is pressed
       */
      moreBlocks?: sap.ui.core.Control[] | sap.ui.core.Control;

      /**
       * Actions available for this Subsection
       */
      actions?: sap.ui.core.Control[] | sap.ui.core.Control;
    }

    interface BlockBaseColumnLayout {}
    /**
     * @SINCE 1.26
     *
     * Displays the titles of the sections and subsections in the {@link sap.uxap.ObjectPageLayout ObjectPageLayout}
     * and allows the user to scroll to the respective content.
     *
     * Overview:
     *
     * The `AnchorBar` is internally generated as a menu in the `ObjectPageLayout`. It displays the sections
     * and subsections and allows the user to directly scroll to the respective content by selecting them, while
     * it remains visible at the top of the page (below the page header).
     */
    class AnchorBar extends sap.m.Toolbar {
      /**
       * Constructor for a new `AnchorBar`.
       *
       * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
       * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
       * of the syntax of the settings object.
       * See:
       * 	{@link topic:370b67986497463187336fa130aebbf1 Anchor Bar}
       */
      constructor(
        /**
         * ID for the new control, generated automatically if no ID is given
         */
        sId?: string,
        /**
         * Initial settings for the new control
         */
        mSettings?: AnchorBarOpts
      );

      /**
       * This method is a hook for the RenderManager that gets called during the rendering of child Controls.
       * It allows to add, remove and update existing accessibility attributes (ARIA) of those controls.
       */
      // @ts-ignore
      enhanceAccessibilityState(
        /**
         * The Control that gets rendered by the RenderManager
         */
        oElement: sap.ui.core.Control,
        /**
         * The mapping of "aria-" prefixed attributes
         */
        mAriaProps: Object
      ): void;
      /**
       * Creates a new subclass of class sap.uxap.AnchorBar with name `sClassName` and enriches it with the information
       * contained in `oClassInfo`.
       *
       * `oClassInfo` might contain the same kind of information as described in {@link sap.m.Toolbar.extend}.
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
       * @SINCE 1.58
       *
       * Gets current value of property {@link #getBackgroundDesign backgroundDesign}.
       *
       * Determines the background color of the `AnchorBar`.
       *
       * **Note:** The default value of `backgroundDesign` property is null. If the property is not set, the color
       * of the background is `@sapUiObjectHeaderBackground`, which depends on the specific theme.
       */
      getBackgroundDesign(): sap.m.BackgroundDesign;
      /**
       * Returns a metadata object for class sap.uxap.AnchorBar.
       */
      // @ts-ignore
      static getMetadata(): sap.ui.base.Metadata;
      /**
       * Returns an sap.ui.core.delegate.ScrollEnablement object used to handle scrolling.
       */
      getScrollDelegate(): object;
      /**
       * ID of the element which is the current target of the association {@link #getSelectedButton selectedButton},
       * or `null`.
       */
      getSelectedButton(): sap.ui.core.ID;
      /**
       * Gets current value of property {@link #getShowPopover showPopover}.
       *
       * Determines whether to show a Popover with Subsection links when clicking on Section links in the Anchor
       * bar.
       *
       * Default value is `true`.
       */
      getShowPopover(): boolean;
      /**
       * Gets current value of property {@link #getUpperCase upperCase}.
       *
       * Determines whether the Anchor bar items are displayed in upper case.
       *
       * Default value is `false`.
       */
      getUpperCase(): boolean;
      /**
       * Scroll to a specific Section.
       */
      scrollToSection(
        /**
         * The Section ID to scroll to
         */
        sId: string,
        /**
         * Scroll duration (in ms). Default value is 0.
         */
        iDuration: number
      ): void;
      /**
       * @SINCE 1.58
       *
       * Sets the value of the `backgroundDesign` property.
       */
      setBackgroundDesign(
        /**
         * new value of the `backgroundDesign`
         */
        sBackgroundDesign: sap.m.BackgroundDesign
      ): sap.uxap.AnchorBar;
      /**
       * Sets the associated {@link #getSelectedButton selectedButton}.
       */
      setSelectedButton(
        /**
         * ID of an element which becomes the new target of this selectedButton association; alternatively, an element
         * instance may be given
         */
        oSelectedButton: sap.ui.core.ID | sap.m.Button
      ): sap.uxap.AnchorBar;
      /**
       * Sets a new value for property {@link #getShowPopover showPopover}.
       *
       * Determines whether to show a Popover with Subsection links when clicking on Section links in the Anchor
       * bar.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `true`.
       */
      setShowPopover(
        /**
         * New value for property `showPopover`
         */
        bShowPopover: boolean
      ): sap.uxap.AnchorBar;
      /**
       * Sets a new value for property {@link #getUpperCase upperCase}.
       *
       * Determines whether the Anchor bar items are displayed in upper case.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `false`.
       */
      setUpperCase(
        /**
         * New value for property `upperCase`
         */
        bUpperCase: boolean
      ): sap.uxap.AnchorBar;
    }
    /**
     * @SINCE 1.26
     *
     * The main element that holds the content that is displayed in an {@link sap.uxap.ObjectPageLayout ObjectPageLayout},
     * but not necessarily only there.
     *
     * Overview:
     *
     * The blocks give the flexibility to combine different content types.
     *
     * A block is a control that:
     * 	 - Has modes and a view associated to each mode. At rendering time, the view associated to the mode
     * 			is rendered.
     * 	 - Can use all view types for storing its internal control tree (XML, JS, JSON, HTML)
     *
     * As any UI5 view, the XML view can have a controller which automatically comes with a `this.oParentBlock`
     * attribute (so that the controller can interact with the block). If the controller implements the `onParentBlockModeChange`
     * method, this method will be called with the `sMode` parameter when the view is used or reused by the
     * block.
     */
    class BlockBase extends sap.ui.core.Control {
      /**
       * Constructor for a new `BlockBase`.
       *
       * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
       * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
       * of the syntax of the settings object.
       * See:
       * 	{@link topic:4527729576cb4a4888275b6935aad03a Block Base}
       * 	{@link topic:2978f6064742456ebed31c5ccf4d051d Creating Blocks}
       */
      constructor(
        /**
         * ID for the new control, generated automatically if no ID is given
         */
        sId?: string,
        /**
         * Initial settings for the new control
         */
        mSettings?: BlockBaseOpts
      );

      /**
       * Adds some mapping to the aggregation {@link #getMappings mappings}.
       */
      addMapping(
        /**
         * The mapping to add; if empty, nothing is inserted
         */
        oMapping: sap.uxap.ModelMapping
      ): sap.uxap.BlockBase;
      /**
       * Destroys all the mappings in the aggregation {@link #getMappings mappings}.
       */
      destroyMappings(): sap.uxap.BlockBase;
      /**
       * Creates a new subclass of class sap.uxap.BlockBase with name `sClassName` and enriches it with the information
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
       * Gets current value of property {@link #getColumnLayout columnLayout}.
       *
       * Determines on how many columns the layout will be rendered. Allowed values are integers from 1 to 4 and
       * "auto".
       *
       * Default value is `auto`.
       */
      getColumnLayout(): sap.uxap.BlockBaseColumnLayout;
      /**
       * Gets current value of property {@link #getFormAdjustment formAdjustment}.
       *
       * Determines if the block should automatically adjust its inner forms. Allowed values are "BlockColumns"
       * and "OneColumn" and "None". If the value is "BlockColumns", then the inner form will have as many columns
       * as the colspan of its parent block. If the value is "OneColumn", the inner form will have exactly one
       * column, regardless the colspan of its parent block. If the value is "None", no automatic adjustment of
       * inner forms will be made and the form will keep its original column count.
       *
       * Default value is `BlockColumns`.
       */
      getFormAdjustment(): sap.uxap.BlockBaseFormAdjustment;
      /**
       * Gets content of aggregation {@link #getMappings mappings}.
       *
       * Map external UI5 model and internal Block model
       */
      getMappings(): sap.uxap.ModelMapping[];
      /**
       * Returns a metadata object for class sap.uxap.BlockBase.
       */
      // @ts-ignore
      static getMetadata(): sap.ui.base.Metadata;
      /**
       * Gets current value of property {@link #getMode mode}.
       *
       * Determines the mode of the block. When block is used inside ObjectPage this mode is inherited my the
       * SubSection. The mode of the block is changed when SubSection mode changes.
       */
      getMode(): string;
      /**
       * ID of the element which is the current target of the association {@link #getSelectedView selectedView},
       * or `null`.
       */
      getSelectedView(): sap.ui.core.ID;
      /**
       * Gets current value of property {@link #getShowSubSectionMore showSubSectionMore}.
       *
       * Determines whether the show more button should be shown.
       *
       * **Note:** The property will take effect if the `BlockBase` is inside `ObjectPageSubSection` and would
       * be ignored in case the `BlockBase` is nested inside another `BlockBase`.
       *
       * Default value is `false`.
       */
      getShowSubSectionMore(): boolean;
      /**
       * Gets current value of property {@link #getVisible visible}.
       *
       * Determines the visibility of the block.
       *
       * Default value is `true`.
       */
      // @ts-ignore
      getVisible(): boolean;
      /**
       * Checks for the provided `sap.uxap.ModelMapping` in the aggregation {@link #getMappings mappings}. and
       * returns its index if found or -1 otherwise.
       */
      indexOfMapping(
        /**
         * The mapping whose index is looked for
         */
        oMapping: sap.uxap.ModelMapping
      ): number;
      /**
       * Inserts a mapping into the aggregation {@link #getMappings mappings}.
       */
      insertMapping(
        /**
         * The mapping to insert; if empty, nothing is inserted
         */
        oMapping: sap.uxap.ModelMapping,
        /**
         * The `0`-based index the mapping should be inserted at; for a negative value of `iIndex`, the mapping
         * is inserted at position 0; for a value greater than the current size of the aggregation, the mapping
         * is inserted at the last position
         */
        iIndex: number
      ): sap.uxap.BlockBase;
      /**
       * Removes all the controls from the aggregation {@link #getMappings mappings}.
       *
       * Additionally, it unregisters them from the hosting UIArea.
       */
      removeAllMappings(): sap.uxap.ModelMapping[];
      /**
       * Removes a mapping from the aggregation {@link #getMappings mappings}.
       */
      removeMapping(
        /**
         * The mapping to remove or its index or id
         */
        vMapping: number | string | sap.uxap.ModelMapping
      ): sap.uxap.ModelMapping;
      /**
       * Set the column layout for this particular block.
       */
      setColumnLayout(
        /**
         * The column layout to apply to the control
         */
        sLayout: string
      ): void;
      /**
       * Sets a new value for property {@link #getFormAdjustment formAdjustment}.
       *
       * Determines if the block should automatically adjust its inner forms. Allowed values are "BlockColumns"
       * and "OneColumn" and "None". If the value is "BlockColumns", then the inner form will have as many columns
       * as the colspan of its parent block. If the value is "OneColumn", the inner form will have exactly one
       * column, regardless the colspan of its parent block. If the value is "None", no automatic adjustment of
       * inner forms will be made and the form will keep its original column count.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `BlockColumns`.
       */
      setFormAdjustment(
        /**
         * New value for property `formAdjustment`
         */
        sFormAdjustment: sap.uxap.BlockBaseFormAdjustment
      ): sap.uxap.BlockBase;
      /**
       * Set the view mode for this particular block.
       */
      setMode(
        /**
         * the mode to apply to the control (that should be synchronized with view declared)
         */
        sMode: string
      ): any;
      /**
       * Sets the associated {@link #getSelectedView selectedView}.
       */
      setSelectedView(
        /**
         * ID of an element which becomes the new target of this selectedView association; alternatively, an element
         * instance may be given
         */
        oSelectedView: sap.ui.core.ID | sap.ui.core.Control
      ): sap.uxap.BlockBase;
      /**
       * Sets a new value for property {@link #getShowSubSectionMore showSubSectionMore}.
       *
       * Determines whether the show more button should be shown.
       *
       * **Note:** The property will take effect if the `BlockBase` is inside `ObjectPageSubSection` and would
       * be ignored in case the `BlockBase` is nested inside another `BlockBase`.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `false`.
       */
      setShowSubSectionMore(
        /**
         * New value for property `showSubSectionMore`
         */
        bShowSubSectionMore: boolean
      ): sap.uxap.BlockBase;
      /**
       * Setter for the visibility of the block.
       */
      // @ts-ignore
      setVisible(): void;
    }
    /**
     * @SINCE 1.30
     *
     * Represents the navigation steps up to the current location in the app.
     *
     * Overview:
     *
     * The `BreadCrumbs` control allows the users to quickly navigate to a previous location on the path that
     * got them to the current location by choosing the displayed navigation steps.
     *
     * It has two main modes of operation:
     * 	 - A trail of links followed by separators, when there's enough space for the control to fit on one
     * 			line.
     * 	 - A dropdown list with the links, when the trail of links wouldn't fit on one line.
     */
    class BreadCrumbs extends sap.ui.core.Control {
      /**
       * Constructor for a new `BreadCrumbs`.
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
        mSettings?: BreadCrumbsOpts
      );

      /**
       * Adds some link to the aggregation {@link #getLinks links}.
       */
      addLink(
        /**
         * The link to add; if empty, nothing is inserted
         */
        oLink: sap.m.Link
      ): sap.uxap.BreadCrumbs;
      /**
       * Destroys the currentLocation in the aggregation {@link #getCurrentLocation currentLocation}.
       */
      destroyCurrentLocation(): sap.uxap.BreadCrumbs;
      /**
       * Destroys all the links in the aggregation {@link #getLinks links}.
       */
      destroyLinks(): sap.uxap.BreadCrumbs;
      /**
       * Creates a new subclass of class sap.uxap.BreadCrumbs with name `sClassName` and enriches it with the
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
       * Gets content of aggregation {@link #getCurrentLocation currentLocation}.
       *
       * The current/last element in the BreadCrumbs path.
       */
      getCurrentLocation(): sap.m.Text;
      /**
       * Gets content of aggregation {@link #getLinks links}.
       *
       * A list of all the active link elements in the BreadCrumbs control.
       */
      getLinks(): sap.m.Link[];
      /**
       * Returns a metadata object for class sap.uxap.BreadCrumbs.
       */
      // @ts-ignore
      static getMetadata(): sap.ui.base.Metadata;
      /**
       * Gets current value of property {@link #getShowCurrentLocation showCurrentLocation}.
       *
       * Sets the visibility of the current/last element in the BreadCrumbs path.
       *
       * Default value is `true`.
       */
      getShowCurrentLocation(): boolean;
      /**
       * Checks for the provided `sap.m.Link` in the aggregation {@link #getLinks links}. and returns its index
       * if found or -1 otherwise.
       */
      indexOfLink(
        /**
         * The link whose index is looked for
         */
        oLink: sap.m.Link
      ): number;
      /**
       * Inserts a link into the aggregation {@link #getLinks links}.
       */
      insertLink(
        /**
         * The link to insert; if empty, nothing is inserted
         */
        oLink: sap.m.Link,
        /**
         * The `0`-based index the link should be inserted at; for a negative value of `iIndex`, the link is inserted
         * at position 0; for a value greater than the current size of the aggregation, the link is inserted at
         * the last position
         */
        iIndex: number
      ): sap.uxap.BreadCrumbs;
      /**
       * Removes all the controls from the aggregation {@link #getLinks links}.
       *
       * Additionally, it unregisters them from the hosting UIArea.
       */
      removeAllLinks(): sap.m.Link[];
      /**
       * Removes a link from the aggregation {@link #getLinks links}.
       */
      removeLink(
        /**
         * The link to remove or its index or id
         */
        vLink: number | string | sap.m.Link
      ): sap.m.Link;
      /**
       * Sets the aggregated {@link #getCurrentLocation currentLocation}.
       */
      setCurrentLocation(
        /**
         * The currentLocation to set
         */
        oCurrentLocation: sap.m.Text
      ): sap.uxap.BreadCrumbs;
      /**
       * Sets a new value for property {@link #getShowCurrentLocation showCurrentLocation}.
       *
       * Sets the visibility of the current/last element in the BreadCrumbs path.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `true`.
       */
      setShowCurrentLocation(
        /**
         * New value for property `showCurrentLocation`
         */
        bShowCurrentLocation: boolean
      ): sap.uxap.BreadCrumbs;
    }
    /**
     * @SINCE 1.26
     *
     * A select that displays items on a hierarchy of 2 levels.
     *
     * If a provided item has a custom data named `secondLevel`, then it will be displayed as a second level,
     * otherwise it would be displayed as a first level.
     */
    class HierarchicalSelect extends sap.m.Select {
      /**
       * Constructor for a new `HierarchicalSelect`.
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
        mSettings?: HierarchicalSelectOpts
      );

      /**
       * Creates a new subclass of class sap.uxap.HierarchicalSelect with name `sClassName` and enriches it with
       * the information contained in `oClassInfo`.
       *
       * `oClassInfo` might contain the same kind of information as described in {@link sap.m.Select.extend}.
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
       * Returns a metadata object for class sap.uxap.HierarchicalSelect.
       */
      // @ts-ignore
      static getMetadata(): sap.ui.base.Metadata;
      /**
       * Gets current value of property {@link #getUpperCase upperCase}.
       *
       * Determines whether the HierarchicalSelect items are displayed in upper case.
       *
       * Default value is `false`.
       */
      getUpperCase(): boolean;
      /**
       * Sets a new value for property {@link #getUpperCase upperCase}.
       *
       * Determines whether the HierarchicalSelect items are displayed in upper case.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `false`.
       */
      setUpperCase(
        /**
         * New value for property `upperCase`
         */
        bUpperCase: boolean
      ): sap.uxap.HierarchicalSelect;
    }
    /**
     * @SINCE 1.26
     *
     * Defines the entity that will be passed to the {@link sap.uxap.ObjectPageLayout}.
     */
    class ModelMapping extends sap.ui.core.Element {
      /**
       * Constructor for a new `ModelMapping`.
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
        mSettings?: ModelMappingOpts
      );

      /**
       * Creates a new subclass of class sap.uxap.ModelMapping with name `sClassName` and enriches it with the
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
       * Gets current value of property {@link #getExternalModelName externalModelName}.
       *
       * Determines the external model name.
       */
      getExternalModelName(): string;
      /**
       * Gets current value of property {@link #getExternalPath externalPath}.
       *
       * Determines the external path.
       */
      getExternalPath(): string;
      /**
       * Gets current value of property {@link #getInternalModelName internalModelName}.
       *
       * Determines the internal model name.
       *
       * Default value is `Model`.
       */
      getInternalModelName(): string;
      /**
       * Returns a metadata object for class sap.uxap.ModelMapping.
       */
      // @ts-ignore
      static getMetadata(): sap.ui.base.Metadata;
      /**
       * Sets a new value for property {@link #getExternalModelName externalModelName}.
       *
       * Determines the external model name.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setExternalModelName(
        /**
         * New value for property `externalModelName`
         */
        sExternalModelName: string
      ): sap.uxap.ModelMapping;
      /**
       * Sets a new value for property {@link #getExternalPath externalPath}.
       *
       * Determines the external path.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setExternalPath(
        /**
         * New value for property `externalPath`
         */
        sExternalPath: string
      ): sap.uxap.ModelMapping;
      /**
       * Sets a new value for property {@link #getInternalModelName internalModelName}.
       *
       * Determines the internal model name.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `Model`.
       */
      setInternalModelName(
        /**
         * New value for property `internalModelName`
         */
        sInternalModelName: string
      ): sap.uxap.ModelMapping;
    }
    /**
     * @SINCE 1.52
     *
     * Header content for the dynamic header of the {@link sap.uxap.ObjectPageLayout}.
     *
     * Overview:
     *
     * The `ObjectPageDynamicHeaderContent` represents the movable part of the `ObjectPageLayout`'s dynamic
     * header. It can contain any control and scrolls along with the content of the page until it disappears
     * (collapsed header). When scrolled back to the top it becomes visible again (expanded header). It contains
     * all the additional information of the object.
     *
     * Documentation links:
     * 	 - {@link topic:d2ef0099542d44dc868719d908e576d0 Object Page Headers}
     * 	 - {@link topic:6e340c119ddd4c778b315f65a0432420 Object Page Dynamic Header}
     */
    class ObjectPageDynamicHeaderContent extends sap.f.DynamicPageHeader
      implements sap.uxap.IHeaderContent {
      /**
       * Constructor for a new `ObjectPageDynamicHeaderContent`.
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
       * Creates a new subclass of class sap.uxap.ObjectPageDynamicHeaderContent with name `sClassName` and enriches
       * it with the information contained in `oClassInfo`.
       *
       * `oClassInfo` might contain the same kind of information as described in {@link sap.f.DynamicPageHeader.extend}.
       */
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
       * Returns a metadata object for class sap.uxap.ObjectPageDynamicHeaderContent.
       */
      static getMetadata(): sap.ui.base.Metadata;
    }
    /**
     * @SINCE 1.52
     *
     * Represents the static part (header title) of the dynamic header of the {@link sap.uxap.ObjectPageLayout}.
     *
     * Overview:
     *
     * The `ObjectPageDynamicHeaderTitle` is used to represent the most important details of the displayed business
     * object, such as the object title and actions that the user can perform.
     *
     * **Note:** The `ObjectPageDynamicHeaderTitle` is meant to be used inside the `ObjectPageLayout` control.
     * Any other usage is not supported and can lead to unexpected behavior.
     */
    class ObjectPageDynamicHeaderTitle extends sap.f.DynamicPageTitle
      implements sap.uxap.IHeaderTitle {
      /**
       * Constructor for a new `ObjectPageDynamicHeaderTitle`.
       * See:
       * 	{@link topic:6e340c119ddd4c778b315f65a0432420 Object Page Dynamic Header}
       * 	{@link topic:d2ef0099542d44dc868719d908e576d0 Object Page Headers}
       * 	{@link topic:9c9d94fd28284539a9a5a57e9caf82a8 Object Page Headers Comparison}
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
       * Creates a new subclass of class sap.uxap.ObjectPageDynamicHeaderTitle with name `sClassName` and enriches
       * it with the information contained in `oClassInfo`.
       *
       * `oClassInfo` might contain the same kind of information as described in {@link sap.f.DynamicPageTitle.extend}.
       */
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
       * Returns a metadata object for class sap.uxap.ObjectPageDynamicHeaderTitle.
       */
      static getMetadata(): sap.ui.base.Metadata;
    }
    /**
     * @SINCE 1.26
     *
     * Represents the static part (header title) of the classic header of the {@link sap.uxap.ObjectPageLayout}.
     *
     * Overview:
     *
     * The `ObjectPageHeader` is used to display the basic information about a business object, such as title/description/picture,
     * as well as a list of common actions.
     *
     * **Note:** The `ObjectPageHeader` is meant to be used inside the `ObjectPageLayout` control. Any other
     * usage is not supported and can lead to unexpected behavior.
     */
    class ObjectPageHeader extends sap.ui.core.Control
      implements sap.uxap.IHeaderTitle {
      /**
       * Constructor for a new `ObjectPageHeader`.
       *
       * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
       * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
       * of the syntax of the settings object.
       * See:
       * 	{@link topic:0fecbce45e39406aa939bd25e89823f4 Object Page Classic Header}
       * 	{@link topic:d2ef0099542d44dc868719d908e576d0 Object Page Headers}
       * 	{@link topic:9c9d94fd28284539a9a5a57e9caf82a8 Object Page Headers Comparison}
       * 	{@link fiori:https://experience.sap.com/fiori-design-web/snapping-header/ Object Page Header}
       * 	{@link fiori:https://experience.sap.com/fiori-design-web/object-page/ UX Guidelines: Object Page}
       */
      constructor(
        /**
         * ID for the new control, generated automatically if no ID is given
         */
        sId?: string,
        /**
         * Initial settings for the new control
         */
        mSettings?: ObjectPageHeaderOpts
      );

      /**
       * Adds some action to the aggregation {@link #getActions actions}.
       */
      addAction(
        /**
         * The action to add; if empty, nothing is inserted
         */
        oAction: sap.ui.core.Control
      ): sap.uxap.ObjectPageHeader;
      /**
       * @deprecated (since 1.50) - use the `breadcrumbs` aggregation instead.
       *
       * Adds some breadCrumbLink to the aggregation {@link #getBreadCrumbsLinks breadCrumbsLinks}.
       */
      addBreadCrumbLink(
        /**
         * The breadCrumbLink to add; if empty, nothing is inserted
         */
        oBreadCrumbLink: sap.m.Link
      ): sap.uxap.ObjectPageHeader;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:markChangesPress markChangesPress} event of
       * this `sap.uxap.ObjectPageHeader`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.uxap.ObjectPageHeader` itself.
       *
       * The event is fired when the unsaved changes button is pressed
       */
      attachMarkChangesPress(
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
         * Context object to call the event handler with. Defaults to this `sap.uxap.ObjectPageHeader` itself
         */
        oListener?: object
      ): sap.uxap.ObjectPageHeader;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:markLockedPress markLockedPress} event of this
       * `sap.uxap.ObjectPageHeader`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.uxap.ObjectPageHeader` itself.
       *
       * The event is fired when the Locked button is pressed
       */
      attachMarkLockedPress(
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
         * Context object to call the event handler with. Defaults to this `sap.uxap.ObjectPageHeader` itself
         */
        oListener?: object
      ): sap.uxap.ObjectPageHeader;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:titleSelectorPress titleSelectorPress} event
       * of this `sap.uxap.ObjectPageHeader`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.uxap.ObjectPageHeader` itself.
       *
       * The event is fired when the objectPage header title selector (down-arrow) is pressed
       */
      attachTitleSelectorPress(
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
         * Context object to call the event handler with. Defaults to this `sap.uxap.ObjectPageHeader` itself
         */
        oListener?: object
      ): sap.uxap.ObjectPageHeader;
      /**
       * Destroys all the actions in the aggregation {@link #getActions actions}.
       */
      destroyActions(): sap.uxap.ObjectPageHeader;
      /**
       * @SINCE 1.50
       *
       * Destroys the breadcrumbs in the aggregation {@link #getBreadcrumbs breadcrumbs}.
       */
      destroyBreadcrumbs(): sap.uxap.ObjectPageHeader;
      /**
       * @deprecated (since 1.50) - use the `breadcrumbs` aggregation instead.
       *
       * Destroys all the breadCrumbsLinks in the aggregation {@link #getBreadCrumbsLinks breadCrumbsLinks}.
       */
      destroyBreadCrumbsLinks(): sap.uxap.ObjectPageHeader;
      /**
       * Destroys the navigationBar in the aggregation {@link #getNavigationBar navigationBar}.
       */
      destroyNavigationBar(): sap.uxap.ObjectPageHeader;
      /**
       * @SINCE 1.38.0
       *
       * Destroys the sideContentButton in the aggregation {@link #getSideContentButton sideContentButton}.
       */
      destroySideContentButton(): sap.uxap.ObjectPageHeader;
      /**
       * @SINCE 1.56
       *
       * Destroys the titleSelectorTooltip in the aggregation {@link #getTitleSelectorTooltip titleSelectorTooltip}.
       */
      destroyTitleSelectorTooltip(): sap.uxap.ObjectPageHeader;
      /**
       * Detaches event handler `fnFunction` from the {@link #event:markChangesPress markChangesPress} event of
       * this `sap.uxap.ObjectPageHeader`.
       *
       * The passed function and listener object must match the ones used for event registration.
       */
      detachMarkChangesPress(
        /**
         * The function to be called, when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object on which the given function had to be called
         */
        oListener?: object
      ): sap.uxap.ObjectPageHeader;
      /**
       * Detaches event handler `fnFunction` from the {@link #event:markLockedPress markLockedPress} event of
       * this `sap.uxap.ObjectPageHeader`.
       *
       * The passed function and listener object must match the ones used for event registration.
       */
      detachMarkLockedPress(
        /**
         * The function to be called, when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object on which the given function had to be called
         */
        oListener?: object
      ): sap.uxap.ObjectPageHeader;
      /**
       * Detaches event handler `fnFunction` from the {@link #event:titleSelectorPress titleSelectorPress} event
       * of this `sap.uxap.ObjectPageHeader`.
       *
       * The passed function and listener object must match the ones used for event registration.
       */
      detachTitleSelectorPress(
        /**
         * The function to be called, when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object on which the given function had to be called
         */
        oListener?: object
      ): sap.uxap.ObjectPageHeader;
      /**
       * Creates a new subclass of class sap.uxap.ObjectPageHeader with name `sClassName` and enriches it with
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
       * Fires event {@link #event:markChangesPress markChangesPress} to attached listeners.
       */
      fireMarkChangesPress(
        /**
         * Parameters to pass along with the event
         */
        mParameters?: {
          /**
           * DOM reference of the changed item's icon to be used for positioning.
           */
          domRef?: string;
        }
      ): sap.uxap.ObjectPageHeader;
      /**
       * Fires event {@link #event:markLockedPress markLockedPress} to attached listeners.
       */
      fireMarkLockedPress(
        /**
         * Parameters to pass along with the event
         */
        mParameters?: {
          /**
           * DOM reference of the lock item's icon to be used for positioning.
           */
          domRef?: string;
        }
      ): sap.uxap.ObjectPageHeader;
      /**
       * Fires event {@link #event:titleSelectorPress titleSelectorPress} to attached listeners.
       */
      fireTitleSelectorPress(
        /**
         * Parameters to pass along with the event
         */
        mParameters?: {
          /**
           * DOM reference of the title item's icon to be used for positioning.
           */
          domRef?: string;
        }
      ): sap.uxap.ObjectPageHeader;
      /**
       * Gets content of aggregation {@link #getActions actions}.
       *
       * List of actions that will be displayed in the header. You can use ObjectPageHeaderActionButton controls
       * to achieve a different visual representation of the action buttons in the action bar and the action sheet
       * (overflow menu). You can use ObjectPageHeaderLayoutData to display a visual separator.
       */
      getActions(): sap.ui.core.Control[];
      /**
       * @SINCE 1.50
       *
       * Gets content of aggregation {@link #getBreadcrumbs breadcrumbs}.
       *
       * The breadcrumbs displayed in the `ObjectPageHeader`. If this aggregation is set, the `breadCrumbsLinks`
       * aggregation is omitted.
       */
      getBreadcrumbs(): sap.m.Breadcrumbs;
      /**
       * @deprecated (since 1.50) - use the `breadcrumbs` aggregation instead.
       *
       * Gets content of aggregation {@link #getBreadCrumbsLinks breadCrumbsLinks}.
       *
       * A list of all the active link elements in the BreadCrumbs control.
       */
      getBreadCrumbsLinks(): sap.m.Link[];
      /**
       * @deprecated (since 1.40.1)
       *
       * Gets current value of property {@link #getHeaderDesign headerDesign}.
       *
       * Determines the design of the header - Light or Dark. **Note: **This property is deprecated. It will continue
       * to work in the Blue Crystal theme, but it will not be taken into account for the Belize themes.
       *
       * Default value is `Light`.
       */
      getHeaderDesign(): sap.uxap.ObjectPageHeaderDesign;
      /**
       * Gets current value of property {@link #getIsActionAreaAlwaysVisible isActionAreaAlwaysVisible}.
       *
       * Determines whether the action buttons should always be visible or visible only when the header is snapped.
       *
       * Default value is `true`.
       */
      getIsActionAreaAlwaysVisible(): boolean;
      /**
       * Gets current value of property {@link #getIsObjectIconAlwaysVisible isObjectIconAlwaysVisible}.
       *
       * Determines whether the icon should always be visible or visible only when the header is snapped.
       *
       * Default value is `false`.
       */
      getIsObjectIconAlwaysVisible(): boolean;
      /**
       * Gets current value of property {@link #getIsObjectSubtitleAlwaysVisible isObjectSubtitleAlwaysVisible}.
       *
       * Determines whether the subtitle should always be visible or visible only when the header is snapped.
       *
       * Default value is `true`.
       */
      getIsObjectSubtitleAlwaysVisible(): boolean;
      /**
       * Gets current value of property {@link #getIsObjectTitleAlwaysVisible isObjectTitleAlwaysVisible}.
       *
       * Determines whether the title should always be visible or visible only when the header is snapped.
       *
       * Default value is `true`.
       */
      getIsObjectTitleAlwaysVisible(): boolean;
      /**
       * @SINCE 1.34.0
       *
       * Gets current value of property {@link #getMarkChanges markChanges}.
       *
       * Marks that there are unsaved changes in the objectPageHeader. The markChanges state cannot be used together
       * with the markLocked state. If both are set to true, only the locked state will be displayed.
       *
       * Default value is `false`.
       */
      getMarkChanges(): boolean;
      /**
       * Gets current value of property {@link #getMarkFavorite markFavorite}.
       *
       * Set the favorite state to true or false. The showMarkers property must be true for this property to take
       * effect.
       *
       * Default value is `false`.
       */
      getMarkFavorite(): boolean;
      /**
       * Gets current value of property {@link #getMarkFlagged markFlagged}.
       *
       * Set the flagged state to true or false. The showMarkers property must be true for this property to take
       * effect.
       *
       * Default value is `false`.
       */
      getMarkFlagged(): boolean;
      /**
       * Gets current value of property {@link #getMarkLocked markLocked}.
       *
       * Set the locked state of the objectPageHeader.
       *
       * Default value is `false`.
       */
      getMarkLocked(): boolean;
      /**
       * Returns a metadata object for class sap.uxap.ObjectPageHeader.
       */
      // @ts-ignore
      static getMetadata(): sap.ui.base.Metadata;
      /**
       * Gets content of aggregation {@link #getNavigationBar navigationBar}.
       *
       * An instance of sap.m.Bar to be embedded in the header
       */
      getNavigationBar(): sap.m.Bar;
      /**
       * Gets current value of property {@link #getObjectImageAlt objectImageAlt}.
       *
       * The text to be used for the Alt and Tooltip attribute of the image, supplied via the objectImageURI property
       *
       * Default value is `empty string`.
       */
      getObjectImageAlt(): string;
      /**
       * Gets current value of property {@link #getObjectImageDensityAware objectImageDensityAware}.
       *
       * The value of densityAware for the image, supplied via the objectImageURI property. See sap.m.Image for
       * more details on densityAware.
       *
       * Default value is `false`.
       */
      getObjectImageDensityAware(): boolean;
      /**
       * Gets current value of property {@link #getObjectImageShape objectImageShape}.
       *
       * Determines whether the picture should be displayed in a square or with a circle-shaped mask.
       *
       * Default value is `Square`.
       */
      getObjectImageShape(): sap.uxap.ObjectPageHeaderPictureShape;
      /**
       * Gets current value of property {@link #getObjectImageURI objectImageURI}.
       *
       * The URL of the image, representing the business object
       */
      getObjectImageURI(): string;
      /**
       * Gets current value of property {@link #getObjectSubtitle objectSubtitle}.
       *
       * The description of the object
       */
      getObjectSubtitle(): string;
      /**
       * Gets current value of property {@link #getObjectTitle objectTitle}.
       *
       * The title of the object
       */
      getObjectTitle(): string;
      /**
       * Gets current value of property {@link #getShowMarkers showMarkers}.
       *
       * Indicates if object page header title supports showing markers such as flagged and favorite.
       *
       * Default value is `false`.
       */
      getShowMarkers(): boolean;
      /**
       * Gets current value of property {@link #getShowPlaceholder showPlaceholder}.
       *
       * Enables support of a placeholder image in case no image is specified or the URL of the provided image
       * is invalid.
       *
       * Default value is `false`.
       */
      getShowPlaceholder(): boolean;
      /**
       * Gets current value of property {@link #getShowTitleSelector showTitleSelector}.
       *
       * When set to true, the selector arrow icon/image is shown and can be pressed.
       *
       * Default value is `false`.
       */
      getShowTitleSelector(): boolean;
      /**
       * @SINCE 1.38.0
       *
       * Gets content of aggregation {@link #getSideContentButton sideContentButton}.
       *
       * A button that is used for opening the side content of the page or some additional content.
       */
      getSideContentButton(): sap.m.Button;
      /**
       * @SINCE 1.56
       *
       * Gets content of aggregation {@link #getTitleSelectorTooltip titleSelectorTooltip}.
       *
       * A custom tooltip for the title selector button.
       *
       * The custom tooltip will be visible if the `showTitleSelector` property is set to `true`.
       *
       * **Note:** If the aggregation is destroyed or set to invalid value, the default tooltip will be set. The
       * default tooltip text is "Related options".
       */
      getTitleSelectorTooltip(): sap.ui.core.TooltipBase | string;
      /**
       * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getActions actions}. and returns
       * its index if found or -1 otherwise.
       */
      indexOfAction(
        /**
         * The action whose index is looked for
         */
        oAction: sap.ui.core.Control
      ): number;
      /**
       * @deprecated (since 1.50) - use the `breadcrumbs` aggregation instead.
       *
       * Checks for the provided `sap.m.Link` in the aggregation {@link #getBreadCrumbsLinks breadCrumbsLinks}.
       * and returns its index if found or -1 otherwise.
       */
      indexOfBreadCrumbLink(
        /**
         * The breadCrumbLink whose index is looked for
         */
        oBreadCrumbLink: sap.m.Link
      ): number;
      /**
       * Inserts a action into the aggregation {@link #getActions actions}.
       */
      insertAction(
        /**
         * The action to insert; if empty, nothing is inserted
         */
        oAction: sap.ui.core.Control,
        /**
         * The `0`-based index the action should be inserted at; for a negative value of `iIndex`, the action is
         * inserted at position 0; for a value greater than the current size of the aggregation, the action is inserted
         * at the last position
         */
        iIndex: number
      ): sap.uxap.ObjectPageHeader;
      /**
       * @deprecated (since 1.50) - use the `breadcrumbs` aggregation instead.
       *
       * Inserts a breadCrumbLink into the aggregation {@link #getBreadCrumbsLinks breadCrumbsLinks}.
       */
      insertBreadCrumbLink(
        /**
         * The breadCrumbLink to insert; if empty, nothing is inserted
         */
        oBreadCrumbLink: sap.m.Link,
        /**
         * The `0`-based index the breadCrumbLink should be inserted at; for a negative value of `iIndex`, the breadCrumbLink
         * is inserted at position 0; for a value greater than the current size of the aggregation, the breadCrumbLink
         * is inserted at the last position
         */
        iIndex: number
      ): sap.uxap.ObjectPageHeader;
      /**
       * Removes a action from the aggregation {@link #getActions actions}.
       */
      removeAction(
        /**
         * The action to remove or its index or id
         */
        vAction: number | string | sap.ui.core.Control
      ): sap.ui.core.Control;
      /**
       * Removes all the controls from the aggregation {@link #getActions actions}.
       *
       * Additionally, it unregisters them from the hosting UIArea.
       */
      removeAllActions(): sap.ui.core.Control[];
      /**
       * @deprecated (since 1.50) - use the `breadcrumbs` aggregation instead.
       *
       * Removes all the controls from the aggregation {@link #getBreadCrumbsLinks breadCrumbsLinks}.
       *
       * Additionally, it unregisters them from the hosting UIArea.
       */
      removeAllBreadCrumbsLinks(): sap.m.Link[];
      /**
       * @deprecated (since 1.50) - use the `breadcrumbs` aggregation instead.
       *
       * Removes a breadCrumbLink from the aggregation {@link #getBreadCrumbsLinks breadCrumbsLinks}.
       */
      removeBreadCrumbLink(
        /**
         * The breadCrumbLink to remove or its index or id
         */
        vBreadCrumbLink: number | string | sap.m.Link
      ): sap.m.Link;
      /**
       * @SINCE 1.50
       *
       * Sets the aggregated {@link #getBreadcrumbs breadcrumbs}.
       */
      setBreadcrumbs(
        /**
         * The breadcrumbs to set
         */
        oBreadcrumbs: sap.m.Breadcrumbs
      ): sap.uxap.ObjectPageHeader;
      /**
       * @deprecated (since 1.40.1)
       *
       * Sets a new value for property {@link #getHeaderDesign headerDesign}.
       *
       * Determines the design of the header - Light or Dark. **Note: **This property is deprecated. It will continue
       * to work in the Blue Crystal theme, but it will not be taken into account for the Belize themes.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `Light`.
       */
      setHeaderDesign(
        /**
         * New value for property `headerDesign`
         */
        sHeaderDesign: sap.uxap.ObjectPageHeaderDesign
      ): sap.uxap.ObjectPageHeader;
      /**
       * Sets a new value for property {@link #getIsActionAreaAlwaysVisible isActionAreaAlwaysVisible}.
       *
       * Determines whether the action buttons should always be visible or visible only when the header is snapped.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `true`.
       */
      setIsActionAreaAlwaysVisible(
        /**
         * New value for property `isActionAreaAlwaysVisible`
         */
        bIsActionAreaAlwaysVisible: boolean
      ): sap.uxap.ObjectPageHeader;
      /**
       * Sets a new value for property {@link #getIsObjectIconAlwaysVisible isObjectIconAlwaysVisible}.
       *
       * Determines whether the icon should always be visible or visible only when the header is snapped.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `false`.
       */
      setIsObjectIconAlwaysVisible(
        /**
         * New value for property `isObjectIconAlwaysVisible`
         */
        bIsObjectIconAlwaysVisible: boolean
      ): sap.uxap.ObjectPageHeader;
      /**
       * Sets a new value for property {@link #getIsObjectSubtitleAlwaysVisible isObjectSubtitleAlwaysVisible}.
       *
       * Determines whether the subtitle should always be visible or visible only when the header is snapped.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `true`.
       */
      setIsObjectSubtitleAlwaysVisible(
        /**
         * New value for property `isObjectSubtitleAlwaysVisible`
         */
        bIsObjectSubtitleAlwaysVisible: boolean
      ): sap.uxap.ObjectPageHeader;
      /**
       * Sets a new value for property {@link #getIsObjectTitleAlwaysVisible isObjectTitleAlwaysVisible}.
       *
       * Determines whether the title should always be visible or visible only when the header is snapped.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `true`.
       */
      setIsObjectTitleAlwaysVisible(
        /**
         * New value for property `isObjectTitleAlwaysVisible`
         */
        bIsObjectTitleAlwaysVisible: boolean
      ): sap.uxap.ObjectPageHeader;
      /**
       * @SINCE 1.34.0
       *
       * Sets a new value for property {@link #getMarkChanges markChanges}.
       *
       * Marks that there are unsaved changes in the objectPageHeader. The markChanges state cannot be used together
       * with the markLocked state. If both are set to true, only the locked state will be displayed.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `false`.
       */
      setMarkChanges(
        /**
         * New value for property `markChanges`
         */
        bMarkChanges: boolean
      ): sap.uxap.ObjectPageHeader;
      /**
       * Sets a new value for property {@link #getMarkFavorite markFavorite}.
       *
       * Set the favorite state to true or false. The showMarkers property must be true for this property to take
       * effect.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `false`.
       */
      setMarkFavorite(
        /**
         * New value for property `markFavorite`
         */
        bMarkFavorite: boolean
      ): sap.uxap.ObjectPageHeader;
      /**
       * Sets a new value for property {@link #getMarkFlagged markFlagged}.
       *
       * Set the flagged state to true or false. The showMarkers property must be true for this property to take
       * effect.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `false`.
       */
      setMarkFlagged(
        /**
         * New value for property `markFlagged`
         */
        bMarkFlagged: boolean
      ): sap.uxap.ObjectPageHeader;
      /**
       * Sets a new value for property {@link #getMarkLocked markLocked}.
       *
       * Set the locked state of the objectPageHeader.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `false`.
       */
      setMarkLocked(
        /**
         * New value for property `markLocked`
         */
        bMarkLocked: boolean
      ): sap.uxap.ObjectPageHeader;
      /**
       * Sets the aggregated {@link #getNavigationBar navigationBar}.
       */
      setNavigationBar(
        /**
         * The navigationBar to set
         */
        oNavigationBar: sap.m.Bar
      ): sap.uxap.ObjectPageHeader;
      /**
       * Sets a new value for property {@link #getObjectImageAlt objectImageAlt}.
       *
       * The text to be used for the Alt and Tooltip attribute of the image, supplied via the objectImageURI property
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `empty string`.
       */
      setObjectImageAlt(
        /**
         * New value for property `objectImageAlt`
         */
        sObjectImageAlt: string
      ): sap.uxap.ObjectPageHeader;
      /**
       * Sets a new value for property {@link #getObjectImageDensityAware objectImageDensityAware}.
       *
       * The value of densityAware for the image, supplied via the objectImageURI property. See sap.m.Image for
       * more details on densityAware.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `false`.
       */
      setObjectImageDensityAware(
        /**
         * New value for property `objectImageDensityAware`
         */
        bObjectImageDensityAware: boolean
      ): sap.uxap.ObjectPageHeader;
      /**
       * Sets a new value for property {@link #getObjectImageShape objectImageShape}.
       *
       * Determines whether the picture should be displayed in a square or with a circle-shaped mask.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `Square`.
       */
      setObjectImageShape(
        /**
         * New value for property `objectImageShape`
         */
        sObjectImageShape: sap.uxap.ObjectPageHeaderPictureShape
      ): sap.uxap.ObjectPageHeader;
      /**
       * Sets a new value for property {@link #getObjectImageURI objectImageURI}.
       *
       * The URL of the image, representing the business object
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setObjectImageURI(
        /**
         * New value for property `objectImageURI`
         */
        sObjectImageURI: string
      ): sap.uxap.ObjectPageHeader;
      /**
       * Sets a new value for property {@link #getObjectSubtitle objectSubtitle}.
       *
       * The description of the object
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setObjectSubtitle(
        /**
         * New value for property `objectSubtitle`
         */
        sObjectSubtitle: string
      ): sap.uxap.ObjectPageHeader;
      /**
       * Sets a new value for property {@link #getObjectTitle objectTitle}.
       *
       * The title of the object
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setObjectTitle(
        /**
         * New value for property `objectTitle`
         */
        sObjectTitle: string
      ): sap.uxap.ObjectPageHeader;
      /**
       * Sets a new value for property {@link #getShowMarkers showMarkers}.
       *
       * Indicates if object page header title supports showing markers such as flagged and favorite.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `false`.
       */
      setShowMarkers(
        /**
         * New value for property `showMarkers`
         */
        bShowMarkers: boolean
      ): sap.uxap.ObjectPageHeader;
      /**
       * Sets a new value for property {@link #getShowPlaceholder showPlaceholder}.
       *
       * Enables support of a placeholder image in case no image is specified or the URL of the provided image
       * is invalid.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `false`.
       */
      setShowPlaceholder(
        /**
         * New value for property `showPlaceholder`
         */
        bShowPlaceholder: boolean
      ): sap.uxap.ObjectPageHeader;
      /**
       * Sets a new value for property {@link #getShowTitleSelector showTitleSelector}.
       *
       * When set to true, the selector arrow icon/image is shown and can be pressed.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `false`.
       */
      setShowTitleSelector(
        /**
         * New value for property `showTitleSelector`
         */
        bShowTitleSelector: boolean
      ): sap.uxap.ObjectPageHeader;
      /**
       * @SINCE 1.38.0
       *
       * Sets the aggregated {@link #getSideContentButton sideContentButton}.
       */
      setSideContentButton(
        /**
         * The sideContentButton to set
         */
        oSideContentButton: sap.m.Button
      ): sap.uxap.ObjectPageHeader;
      /**
       * @SINCE 1.56
       *
       * Sets the aggregated {@link #getTitleSelectorTooltip titleSelectorTooltip}.
       */
      setTitleSelectorTooltip(
        /**
         * The titleSelectorTooltip to set
         */
        vTitleSelectorTooltip: sap.ui.core.TooltipBase | string
      ): sap.uxap.ObjectPageHeader;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:markChangesPress markChangesPress} event of
       * this `sap.uxap.ObjectPageHeader`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.uxap.ObjectPageHeader` itself.
       *
       * The event is fired when the unsaved changes button is pressed
       */
      attachMarkChangesPress(
        /**
         * The function to be called when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object to call the event handler with. Defaults to this `sap.uxap.ObjectPageHeader` itself
         */
        oListener?: object
      ): sap.uxap.ObjectPageHeader;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:markLockedPress markLockedPress} event of this
       * `sap.uxap.ObjectPageHeader`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.uxap.ObjectPageHeader` itself.
       *
       * The event is fired when the Locked button is pressed
       */
      attachMarkLockedPress(
        /**
         * The function to be called when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object to call the event handler with. Defaults to this `sap.uxap.ObjectPageHeader` itself
         */
        oListener?: object
      ): sap.uxap.ObjectPageHeader;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:titleSelectorPress titleSelectorPress} event
       * of this `sap.uxap.ObjectPageHeader`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.uxap.ObjectPageHeader` itself.
       *
       * The event is fired when the objectPage header title selector (down-arrow) is pressed
       */
      attachTitleSelectorPress(
        /**
         * The function to be called when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object to call the event handler with. Defaults to this `sap.uxap.ObjectPageHeader` itself
         */
        oListener?: object
      ): sap.uxap.ObjectPageHeader;
    }
    /**
     * @SINCE 1.26
     *
     * A Button that is used in the `actions` aggregation of the {@link sap.uxap.ObjectPageHeader}.
     */
    class ObjectPageHeaderActionButton extends sap.m.Button
      implements sap.m.IOverflowToolbarContent {
      /**
       * Constructor for a new `ObjectPageHeaderActionButton`.
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
        mSettings?: ObjectPageHeaderActionButtonOpts
      );

      /**
       * Creates a new subclass of class sap.uxap.ObjectPageHeaderActionButton with name `sClassName` and enriches
       * it with the information contained in `oClassInfo`.
       *
       * `oClassInfo` might contain the same kind of information as described in {@link sap.m.Button.extend}.
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
       * Gets current value of property {@link #getHideIcon hideIcon}.
       *
       * Hide the button icon when rendered into the headerTitle part of the ObjectPageLayout. This is useful
       * if you want to display texts only in the headerTitle part but still want to display text + icon in the
       * actionSheet that appears when not enough space is available on the screen for displaying all actions.
       *
       * Default value is `false`.
       */
      getHideIcon(): boolean;
      /**
       * Gets current value of property {@link #getHideText hideText}.
       *
       * Hide the button text when rendered into the headerTitle part of the ObjectPageLayout. This is useful
       * if you want to display icons only in the headerTitle part but still want to display text + icon in the
       * actionSheet that appears when not enough space is available on the screen for displaying all actions.
       *
       * Default value is `true`.
       */
      getHideText(): boolean;
      /**
       * @SINCE 1.34.0
       *
       * Gets current value of property {@link #getImportance importance}.
       *
       * Determines the order in which the button overflows.
       *
       * Default value is `High`.
       */
      getImportance(): sap.uxap.Importance;
      /**
       * Returns a metadata object for class sap.uxap.ObjectPageHeaderActionButton.
       */
      // @ts-ignore
      static getMetadata(): sap.ui.base.Metadata;
      /**
       * Sets a new value for property {@link #getHideIcon hideIcon}.
       *
       * Hide the button icon when rendered into the headerTitle part of the ObjectPageLayout. This is useful
       * if you want to display texts only in the headerTitle part but still want to display text + icon in the
       * actionSheet that appears when not enough space is available on the screen for displaying all actions.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `false`.
       */
      setHideIcon(
        /**
         * New value for property `hideIcon`
         */
        bHideIcon: boolean
      ): sap.uxap.ObjectPageHeaderActionButton;
      /**
       * Sets a new value for property {@link #getHideText hideText}.
       *
       * Hide the button text when rendered into the headerTitle part of the ObjectPageLayout. This is useful
       * if you want to display icons only in the headerTitle part but still want to display text + icon in the
       * actionSheet that appears when not enough space is available on the screen for displaying all actions.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `true`.
       */
      setHideText(
        /**
         * New value for property `hideText`
         */
        bHideText: boolean
      ): sap.uxap.ObjectPageHeaderActionButton;
      /**
       * @SINCE 1.34.0
       *
       * Sets a new value for property {@link #getImportance importance}.
       *
       * Determines the order in which the button overflows.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `High`.
       */
      setImportance(
        /**
         * New value for property `importance`
         */
        sImportance: sap.uxap.Importance
      ): sap.uxap.ObjectPageHeaderActionButton;
    }
    /**
     * @SINCE 1.30
     *
     * Header content for the classic header of the {@link sap.uxap.ObjectPageLayout}.
     *
     * Overview:
     *
     * The `ObjectPageHeaderContent` represents the movable part of the `ObjectPageLayout`'s classic header.
     * It can contain any control and scrolls along with the content of the page until it disappears (collapsed
     * header). When scrolled back to the top it becomes visible again (expanded header). It contains all the
     * additional information of the object.
     *
     * Documentation links:
     * 	 - {@link topic:d2ef0099542d44dc868719d908e576d0 Object Page Headers}
     * 	 - {@link topic:0fecbce45e39406aa939bd25e89823f4 Object Page Classic Header}
     * 	 - {@link https://experience.sap.com/fiori-design-web/object-page/ UX Guidelines: Object Page}
     */
    class ObjectPageHeaderContent extends sap.ui.core.Control
      implements sap.uxap.IHeaderContent {
      /**
       * Constructor for a new `ObjectPageHeaderContent`.
       *
       * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
       * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
       * of the syntax of the settings object.
       * See:
       * 	{@link fiori:https://experience.sap.com/fiori-design-web/snapping-header/#header-content Object Page
       * Header Content}
       */
      constructor(
        /**
         * ID for the new control, generated automatically if no ID is given
         */
        sId?: string,
        /**
         * Initial settings for the new control
         */
        mSettings?: ObjectPageHeaderContentOpts
      );

      /**
       * Adds some content to the aggregation {@link #getContent content}.
       */
      addContent(
        /**
         * The content to add; if empty, nothing is inserted
         */
        oContent: sap.ui.core.Control
      ): sap.uxap.ObjectPageHeaderContent;
      /**
       * Destroys all the content in the aggregation {@link #getContent content}.
       */
      destroyContent(): sap.uxap.ObjectPageHeaderContent;
      /**
       * Creates a new subclass of class sap.uxap.ObjectPageHeaderContent with name `sClassName` and enriches
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
       * Gets content of aggregation {@link #getContent content}.
       *
       * The list of Objects of type sap.ui.core.Control.
       */
      getContent(): sap.ui.core.Control[];
      /**
       * @deprecated (since 1.40.1)
       *
       * Gets current value of property {@link #getContentDesign contentDesign}.
       *
       * Determines the design of the header - Light or Dark. **Note: **This property is deprecated. It will continue
       * to work in the Blue Crystal theme, but it will not be taken into account for the Belize themes.
       *
       * Default value is `Light`.
       */
      getContentDesign(): sap.uxap.ObjectPageHeaderDesign;
      /**
       * Returns a metadata object for class sap.uxap.ObjectPageHeaderContent.
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
      ): sap.uxap.ObjectPageHeaderContent;
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
       * @deprecated (since 1.40.1)
       *
       * Sets a new value for property {@link #getContentDesign contentDesign}.
       *
       * Determines the design of the header - Light or Dark. **Note: **This property is deprecated. It will continue
       * to work in the Blue Crystal theme, but it will not be taken into account for the Belize themes.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `Light`.
       */
      setContentDesign(
        /**
         * New value for property `contentDesign`
         */
        sContentDesign: sap.uxap.ObjectPageHeaderDesign
      ): sap.uxap.ObjectPageHeaderContent;
    }
    /**
     * @SINCE 1.26
     *
     * A {@link sap.ui.core.LayoutData} element that can be added to controls used in the `headerContent` aggregation
     * of the `ObjectPageLayout`.
     *
     * **Note:** This element is only taken into account when the `sap.uxap.ObjectPageLayout` control is used
     * together with `sap.uxap.ObjectPageHeader` as value of `headerTitle`.
     */
    class ObjectPageHeaderLayoutData extends sap.ui.core.LayoutData {
      /**
       * Constructor for a new `ObjectPageHeaderLayoutData`.
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
        mSettings?: ObjectPageHeaderLayoutDataOpts
      );

      /**
       * Creates a new subclass of class sap.uxap.ObjectPageHeaderLayoutData with name `sClassName` and enriches
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
       * Returns a metadata object for class sap.uxap.ObjectPageHeaderLayoutData.
       */
      // @ts-ignore
      static getMetadata(): sap.ui.base.Metadata;
      /**
       * Gets current value of property {@link #getShowSeparatorAfter showSeparatorAfter}.
       *
       * If this property is set the control will display a separator after it.
       *
       * Default value is `false`.
       */
      getShowSeparatorAfter(): boolean;
      /**
       * Gets current value of property {@link #getShowSeparatorBefore showSeparatorBefore}.
       *
       * If this property is set the control will display a separator before it.
       *
       * Default value is `false`.
       */
      getShowSeparatorBefore(): boolean;
      /**
       * Gets current value of property {@link #getVisibleL visibleL}.
       *
       * If this property is set the control will be visible (or not) in a large sized layout.
       *
       * Default value is `true`.
       */
      getVisibleL(): boolean;
      /**
       * Gets current value of property {@link #getVisibleM visibleM}.
       *
       * If this property is set the control will be visible (or not) in a medium sized layout.
       *
       * Default value is `true`.
       */
      getVisibleM(): boolean;
      /**
       * Gets current value of property {@link #getVisibleS visibleS}.
       *
       * If this property is set the control will be visible (or not) in a small sized layout.
       *
       * Default value is `true`.
       */
      getVisibleS(): boolean;
      /**
       * Gets current value of property {@link #getWidth width}.
       *
       * If this property is set the control will take the provided size.
       *
       * Default value is `auto`.
       */
      getWidth(): sap.ui.core.CSSSize;
      /**
       * Sets a new value for property {@link #getShowSeparatorAfter showSeparatorAfter}.
       *
       * If this property is set the control will display a separator after it.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `false`.
       */
      setShowSeparatorAfter(
        /**
         * New value for property `showSeparatorAfter`
         */
        bShowSeparatorAfter: boolean
      ): sap.uxap.ObjectPageHeaderLayoutData;
      /**
       * Sets a new value for property {@link #getShowSeparatorBefore showSeparatorBefore}.
       *
       * If this property is set the control will display a separator before it.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `false`.
       */
      setShowSeparatorBefore(
        /**
         * New value for property `showSeparatorBefore`
         */
        bShowSeparatorBefore: boolean
      ): sap.uxap.ObjectPageHeaderLayoutData;
      /**
       * Sets a new value for property {@link #getVisibleL visibleL}.
       *
       * If this property is set the control will be visible (or not) in a large sized layout.
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
      ): sap.uxap.ObjectPageHeaderLayoutData;
      /**
       * Sets a new value for property {@link #getVisibleM visibleM}.
       *
       * If this property is set the control will be visible (or not) in a medium sized layout.
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
      ): sap.uxap.ObjectPageHeaderLayoutData;
      /**
       * Sets a new value for property {@link #getVisibleS visibleS}.
       *
       * If this property is set the control will be visible (or not) in a small sized layout.
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
      ): sap.uxap.ObjectPageHeaderLayoutData;
      /**
       * Sets a new value for property {@link #getWidth width}.
       *
       * If this property is set the control will take the provided size.
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
      ): sap.uxap.ObjectPageHeaderLayoutData;
    }
    /**
     * @SINCE 1.26
     *
     * A layout that allows apps to easily display information related to a business object.
     *
     * Overview:
     *
     * The `ObjectPageLayout` layout is composed of a header (title and content), an optional anchor bar and
     * block content wrapped in sections and subsections that structure the information.
     *
     * Structure:
     *
     * An `ObjectPageLayout` control is used to put together all parts of an Object page - Header, optional
     * Anchor Bar and Sections/Subsections.
     *
     * Header: The `ObjectPageLayout` implements the snapping header concept. This means that the upper part
     * of the header (Header Title) always stays visible, while the lower part (Header Content) can scroll out
     * of view.
     *
     * Header Title is displayed at the top of the header and always remains visible above the scrollable content
     * of the page. It contains the title and most prominent details of the object.
     *
     * The Header Content scrolls along with the content of the page until it disappears (collapsed header).
     * When scrolled back to the top it becomes visible again (expanded header). It contains all the additional
     * information of the object.
     *
     * Anchor Bar: The Anchor Bar is an automatically generated internal menu that shows the titles of the sections
     * and subsections and allows the user to scroll to the respective section and subsection content.
     *
     * Sections, Subsections, Blocks: The content of the page that appears bellow the header is composed of
     * blocks structured into sections and subsections.
     *
     * Usage: Use the `ObjectPageLayout` if:
     * 	 - The users need to see, edit, or create an item with all its details.
     * 	 - Users need to get an overview of an object and interact with different parts of the object.
     *
     * Responsive behavior:
     *
     * The `ObjectPageLayout` is responsive and adapts to all screen sizes.
     */
    class ObjectPageLayout extends sap.ui.core.Control {
      /**
       * Constructor for a new `ObjectPageLayout`.
       *
       * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
       * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
       * of the syntax of the settings object.
       * See:
       * 	{@link topic:2e61ab6c68a2480eb666c1927a707658 Object Page Layout}
       * 	{@link topic:d2ef0099542d44dc868719d908e576d0 Object Page Headers}
       * 	{@link topic:370b67986497463187336fa130aebbf1 Anchor Bar}
       * 	{@link topic:4527729576cb4a4888275b6935aad03a Object Page Blocks}
       * 	{@link topic:2978f6064742456ebed31c5ccf4d051d Creating Blocks}
       * 	{@link topic:bc410e94e46540efa02857e15aae583f Object Page Scrolling}
       * 	{@link fiori:https://experience.sap.com/fiori-design-web/object-page/ Object Page Layout}
       * 	{@link fiori:https://experience.sap.com/fiori-design-web/snapping-header/ UX Guidelines: Object Page
       * - Snapping Header}
       */
      constructor(
        /**
         * ID for the new control, generated automatically if no ID is given
         */
        sId?: string,
        /**
         * Initial settings for the new control
         */
        mSettings?: ObjectPageLayoutOpts
      );

      /**
       * Adds some headerContent to the aggregation {@link #getHeaderContent headerContent}.
       */
      addHeaderContent(
        /**
         * The headerContent to add; if empty, nothing is inserted
         */
        oHeaderContent: sap.ui.core.Control
      ): sap.uxap.ObjectPageLayout;
      /**
       * Adds some section to the aggregation {@link #getSections sections}.
       */
      addSection(
        /**
         * The section to add; if empty, nothing is inserted
         */
        oSection: sap.uxap.ObjectPageSection
      ): sap.uxap.ObjectPageLayout;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:editHeaderButtonPress editHeaderButtonPress}
       * event of this `sap.uxap.ObjectPageLayout`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.uxap.ObjectPageLayout` itself.
       *
       * The event is fired when the Edit Header button is pressed
       */
      attachEditHeaderButtonPress(
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
         * Context object to call the event handler with. Defaults to this `sap.uxap.ObjectPageLayout` itself
         */
        oListener?: object
      ): sap.uxap.ObjectPageLayout;
      /**
       * @SINCE 1.40
       *
       * Attaches event handler `fnFunction` to the {@link #event:navigate navigate} event of this `sap.uxap.ObjectPageLayout`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.uxap.ObjectPageLayout` itself.
       *
       * The event is fired when the selected section is changed using the navigation.
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
         * Context object to call the event handler with. Defaults to this `sap.uxap.ObjectPageLayout` itself
         */
        oListener?: object
      ): sap.uxap.ObjectPageLayout;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:toggleAnchorBar toggleAnchorBar} event of this
       * `sap.uxap.ObjectPageLayout`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.uxap.ObjectPageLayout` itself.
       *
       * The event is fired when the Anchor bar is switched from moving to fixed or the other way round.
       */
      attachToggleAnchorBar(
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
         * Context object to call the event handler with. Defaults to this `sap.uxap.ObjectPageLayout` itself
         */
        oListener?: object
      ): sap.uxap.ObjectPageLayout;
      /**
       * @SINCE 1.40
       *
       * Destroys the footer in the aggregation {@link #getFooter footer}.
       */
      destroyFooter(): sap.uxap.ObjectPageLayout;
      /**
       * Destroys all the headerContent in the aggregation {@link #getHeaderContent headerContent}.
       */
      destroyHeaderContent(): sap.uxap.ObjectPageLayout;
      /**
       * Destroys the headerTitle in the aggregation {@link #getHeaderTitle headerTitle}.
       */
      destroyHeaderTitle(): sap.uxap.ObjectPageLayout;
      /**
       * Destroys all the sections in the aggregation {@link #getSections sections}.
       */
      destroySections(): sap.uxap.ObjectPageLayout;
      /**
       * Detaches event handler `fnFunction` from the {@link #event:editHeaderButtonPress editHeaderButtonPress}
       * event of this `sap.uxap.ObjectPageLayout`.
       *
       * The passed function and listener object must match the ones used for event registration.
       */
      detachEditHeaderButtonPress(
        /**
         * The function to be called, when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object on which the given function had to be called
         */
        oListener?: object
      ): sap.uxap.ObjectPageLayout;
      /**
       * @SINCE 1.40
       *
       * Detaches event handler `fnFunction` from the {@link #event:navigate navigate} event of this `sap.uxap.ObjectPageLayout`.
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
      ): sap.uxap.ObjectPageLayout;
      /**
       * Detaches event handler `fnFunction` from the {@link #event:toggleAnchorBar toggleAnchorBar} event of
       * this `sap.uxap.ObjectPageLayout`.
       *
       * The passed function and listener object must match the ones used for event registration.
       */
      detachToggleAnchorBar(
        /**
         * The function to be called, when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object on which the given function had to be called
         */
        oListener?: object
      ): sap.uxap.ObjectPageLayout;
      /**
       * Creates a new subclass of class sap.uxap.ObjectPageLayout with name `sClassName` and enriches it with
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
       * Fires event {@link #event:editHeaderButtonPress editHeaderButtonPress} to attached listeners.
       */
      fireEditHeaderButtonPress(
        /**
         * Parameters to pass along with the event
         */
        mParameters?: object
      ): sap.uxap.ObjectPageLayout;
      /**
       * @SINCE 1.40
       *
       * Fires event {@link #event:navigate navigate} to attached listeners.
       */
      fireNavigate(
        /**
         * Parameters to pass along with the event
         */
        mParameters?: {
          /**
           * The selected section object.
           */
          section?: sap.uxap.ObjectPageSection;
          /**
           * The selected subsection object.
           */
          subSection?: sap.uxap.ObjectPageSubSection;
        }
      ): sap.uxap.ObjectPageLayout;
      /**
       * Fires event {@link #event:toggleAnchorBar toggleAnchorBar} to attached listeners.
       */
      fireToggleAnchorBar(
        /**
         * Parameters to pass along with the event
         */
        mParameters?: {
          /**
           * False indicates that the Anchor bar has just detached from the Header and became part of the scrolling
           * area. True means that the Anchor bar has just snapped to the Header.
           */
          fixed?: boolean;
        }
      ): sap.uxap.ObjectPageLayout;
      /**
       * @SINCE 1.34.0
       *
       * Gets current value of property {@link #getAlwaysShowContentHeader alwaysShowContentHeader}.
       *
       * Determines whether Header Content will always be expanded on desktop.
       *
       * **Note**: This property is only taken into account if an instance of `sap.uxap.ObjectPageHeader` is used
       * for the `headerTitle` aggregation.
       *
       * Default value is `false`.
       */
      getAlwaysShowContentHeader(): boolean;
      /**
       * @SINCE 1.58
       *
       * Gets current value of property {@link #getBackgroundDesignAnchorBar backgroundDesignAnchorBar}.
       *
       * Determines the background color of the `AnchorBar`.
       *
       * **Note:** The default value of `backgroundDesignAnchorBar` property is null. If the property is not set,
       * the color of the background is `@sapUiObjectHeaderBackground`, which depends on the specific theme.
       */
      getBackgroundDesignAnchorBar(): sap.m.BackgroundDesign;
      /**
       * Gets current value of property {@link #getEnableLazyLoading enableLazyLoading}.
       *
       * Enable lazy loading for the Object page Subsections.
       *
       * Default value is `false`.
       */
      getEnableLazyLoading(): boolean;
      /**
       * @SINCE 1.34.0
       *
       * Gets current value of property {@link #getFlexEnabled flexEnabled}.
       *
       * Specifies whether the object page enables flexibility features, such as hiding and adding sections.
       *  For more information about SAPUI5 flexibility, refer to the Developer Guide.
       *
       * Default value is `false`.
       */
      getFlexEnabled(): boolean;
      /**
       * @SINCE 1.40
       *
       * Gets content of aggregation {@link #getFooter footer}.
       *
       * Object page floating footer.
       */
      getFooter(): sap.m.IBar;
      /**
       * Gets content of aggregation {@link #getHeaderContent headerContent}.
       *
       * Object page header content - the dynamic part of the Object page header.
       */
      getHeaderContent(): sap.ui.core.Control[];
      /**
       * @SINCE 1.52
       *
       * Gets current value of property {@link #getHeaderContentPinnable headerContentPinnable}.
       *
       * Determines whether the Header Content area can be pinned.
       *
       * When set to `true`, a pin button is displayed within the Header Content area. The pin button allows the
       * user to make the Header Content always visible at the top of the page above any scrollable content.
       *
       * **Note:** This property is only taken into account if an instance of `sap.uxap.ObjectPageDynamicHeaderTitle`
       * is used for the `headerTitle` aggregation.
       *
       * Default value is `true`.
       */
      getHeaderContentPinnable(): boolean;
      /**
       * Gets content of aggregation {@link #getHeaderTitle headerTitle}.
       *
       * Object page header title - the upper, always static, part of the Object page header.
       */
      getHeaderTitle(): sap.uxap.IHeaderTitle;
      /**
       * Gets current value of property {@link #getHeight height}.
       *
       * Determines the height of the ObjectPage.
       *
       * Default value is `100%`.
       */
      getHeight(): sap.ui.core.CSSSize;
      /**
       * @SINCE 1.34.0
       *
       * Gets current value of property {@link #getIsChildPage isChildPage}.
       *
       * Determines whether the page is a child page and renders it with a different design. Child pages have
       * an additional (darker/lighter) stripe on the left side of their header content area.
       *
       * **Note**: This property is only taken into account if an instance of `sap.uxap.ObjectPageHeader` is used
       * for the `headerTitle` aggregation.
       *
       * Default value is `false`.
       */
      getIsChildPage(): boolean;
      /**
       * Returns a metadata object for class sap.uxap.ObjectPageLayout.
       */
      // @ts-ignore
      static getMetadata(): sap.ui.base.Metadata;
      /**
       * @SINCE 1.52
       *
       * Gets current value of property {@link #getPreserveHeaderStateOnScroll preserveHeaderStateOnScroll}.
       *
       * Preserves the current header state when scrolling. For example, if the user expands the header by clicking
       * on the title and then scrolls down the page, the header will remain expanded.
       *
       * **Notes:**
       * 	 - This property is only taken into account if an instance of `sap.uxap.ObjectPageDynamicHeaderTitle`
       * 			is used for the `headerTitle` aggregation.
       * 	 - Based on internal rules, the value of the property is not always taken into account - for example,
       * 			when the control is rendered on tablet or mobile and the control`s title and header are with height larger
       * 			than the given threshold.
       *
       * Default value is `false`.
       */
      getPreserveHeaderStateOnScroll(): boolean;
      /**
       * Returns an sap.ui.core.delegate.ScrollEnablement object used to handle scrolling
       */
      getScrollDelegate(): object;
      /**
       * Returns the UI5 ID of the Section that is currently being scrolled.
       */
      getScrollingSectionId(): string;
      /**
       * Gets content of aggregation {@link #getSections sections}.
       *
       * The sections that make up the Object page content area.
       */
      getSections(): sap.uxap.ObjectPageSection[];
      /**
       * @SINCE 1.44.0
       *
       * Gets current value of property {@link #getSectionTitleLevel sectionTitleLevel}.
       *
       * Determines the ARIA level of the `ObjectPageSection` and `ObjectPageSubSection` titles. The ARIA level
       * is used by assisting technologies, such as screen readers, to create a hierarchical site map for faster
       * navigation.
       *
       *
       * **Note:**
       * 	 - Defining a `sectionTitleLevel` will add `aria-level` attribute from 1 to 6 instead of changing the
       * 			titles` HTML tag from H1 to H6.
       * For example: if `sectionTitleLevel` is `TitleLevel.H1`, it will result as aria-level of 1 added to the
       * `ObjectPageSection` title.
       *
       *
       * 	 -  The `ObjectPageSubSection` title would have `aria-level` one level lower than the defined. For example:
       * 			if `sectionTitleLevel` is `TitleLevel.H1`, it will result as aria-level of 2 added to the `ObjectPageSubSection`
       * 			title.
       *
       *
       * 	 -  It is possible to define a `titleLevel` on `ObjectPageSection` or `ObjectPageSubSection` level.
       * 			In this case the value of this property will be ignored.
       *
       * Default value is `Auto`.
       */
      getSectionTitleLevel(): sap.ui.core.TitleLevel;
      /**
       * @SINCE 1.44.0
       *
       * ID of the element which is the current target of the association {@link #getSelectedSection selectedSection},
       * or `null`.
       */
      getSelectedSection(): sap.ui.core.ID;
      /**
       * Gets current value of property {@link #getShowAnchorBar showAnchorBar}.
       *
       * Determines whether the Navigation bar (Anchor bar) is displayed.
       *
       * Default value is `true`.
       */
      getShowAnchorBar(): boolean;
      /**
       * Gets current value of property {@link #getShowAnchorBarPopover showAnchorBarPopover}.
       *
       * Determines whether to show a Popover with Subsection links when clicking on Section links in the Anchor
       * bar.
       *
       * Default value is `true`.
       */
      getShowAnchorBarPopover(): boolean;
      /**
       * @SINCE 1.34.0
       *
       * Gets current value of property {@link #getShowEditHeaderButton showEditHeaderButton}.
       *
       * Determines whether an Edit button will be displayed in Header Content.
       *
       * **Note**: This property is only taken into account if an instance of `sap.uxap.ObjectPageHeader` is used
       * for the `headerTitle` aggregation.
       *
       * Default value is `false`.
       */
      getShowEditHeaderButton(): boolean;
      /**
       * @SINCE 1.40
       *
       * Gets current value of property {@link #getShowFooter showFooter}.
       *
       * Determines whether the footer is visible.
       *
       * Default value is `false`.
       */
      getShowFooter(): boolean;
      /**
       * Gets current value of property {@link #getShowHeaderContent showHeaderContent}.
       *
       * Determines the visibility of the Header content (headerContent aggregation).
       *
       * Default value is `true`.
       */
      getShowHeaderContent(): boolean;
      /**
       * @SINCE 1.32.0
       *
       * Gets current value of property {@link #getShowOnlyHighImportance showOnlyHighImportance}.
       *
       * Determines whether sections and subsections with importance Low and Medium are hidden even on large screens.
       *
       * Default value is `false`.
       */
      getShowOnlyHighImportance(): boolean;
      /**
       * Gets current value of property {@link #getShowTitleInHeaderContent showTitleInHeaderContent}.
       *
       * Determines whether the title, image, markers and selectTitleArrow are shown in the Header content area.
       *
       * **Note**: This property is only taken into account if an instance of `sap.uxap.ObjectPageHeader` is used
       * for the `headerTitle` aggregation.
       *
       * Default value is `false`.
       */
      getShowTitleInHeaderContent(): boolean;
      /**
       * Gets current value of property {@link #getSubSectionLayout subSectionLayout}.
       *
       * Determines whether Subsection titles are displayed on top or to the left of the Subsection content.
       *
       * Default value is `TitleOnTop`.
       */
      getSubSectionLayout(): sap.uxap.ObjectPageSubSectionLayout;
      /**
       * @SINCE 1.52
       *
       * Gets current value of property {@link #getToggleHeaderOnTitleClick toggleHeaderOnTitleClick}.
       *
       * Determines whether the user can switch between the expanded/collapsed states of the `sap.uxap.ObjectPageDynamicHeaderContent`
       * by clicking on the `sap.uxap.ObjectPageDynamicHeaderTitle`. If set to `false`, the `sap.uxap.ObjectPageDynamicHeaderTitle`
       * is not clickable and the application must provide other means for expanding/collapsing the `sap.uxap.ObjectPageDynamicHeaderContent`,
       * if necessary.
       *
       * **Note:** This property is only taken into account if an instance of `sap.uxap.ObjectPageDynamicHeaderTitle`
       * is used for the `headerTitle` aggregation.
       *
       * Default value is `true`.
       */
      getToggleHeaderOnTitleClick(): boolean;
      /**
       * Gets current value of property {@link #getUpperCaseAnchorBar upperCaseAnchorBar}.
       *
       * Determines whether the Anchor bar items are displayed in upper case.
       *
       * Default value is `true`.
       */
      getUpperCaseAnchorBar(): boolean;
      /**
       * Gets current value of property {@link #getUseIconTabBar useIconTabBar}.
       *
       * Use tab navigation mode instead of the default Anchor bar mode.
       * **Note: **Keep in mind that the `sap.m.IconTabBar` control is no longer used for the tab navigation mode.
       *
       * Default value is `false`.
       */
      getUseIconTabBar(): boolean;
      /**
       * Gets current value of property {@link #getUseTwoColumnsForLargeScreen useTwoColumnsForLargeScreen}.
       *
       * Determines whether the to use two column layout for the L screen size.
       *
       * Default value is `false`.
       */
      getUseTwoColumnsForLargeScreen(): boolean;
      /**
       * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getHeaderContent headerContent}.
       * and returns its index if found or -1 otherwise.
       */
      indexOfHeaderContent(
        /**
         * The headerContent whose index is looked for
         */
        oHeaderContent: sap.ui.core.Control
      ): number;
      /**
       * Checks for the provided `sap.uxap.ObjectPageSection` in the aggregation {@link #getSections sections}.
       * and returns its index if found or -1 otherwise.
       */
      indexOfSection(
        /**
         * The section whose index is looked for
         */
        oSection: sap.uxap.ObjectPageSection
      ): number;
      /**
       * Inserts a headerContent into the aggregation {@link #getHeaderContent headerContent}.
       */
      insertHeaderContent(
        /**
         * The headerContent to insert; if empty, nothing is inserted
         */
        oHeaderContent: sap.ui.core.Control,
        /**
         * The `0`-based index the headerContent should be inserted at; for a negative value of `iIndex`, the headerContent
         * is inserted at position 0; for a value greater than the current size of the aggregation, the headerContent
         * is inserted at the last position
         */
        iIndex: number
      ): sap.uxap.ObjectPageLayout;
      /**
       * Inserts a section into the aggregation {@link #getSections sections}.
       */
      insertSection(
        /**
         * The section to insert; if empty, nothing is inserted
         */
        oSection: sap.uxap.ObjectPageSection,
        /**
         * The `0`-based index the section should be inserted at; for a negative value of `iIndex`, the section
         * is inserted at position 0; for a value greater than the current size of the aggregation, the section
         * is inserted at the last position
         */
        iIndex: number
      ): sap.uxap.ObjectPageLayout;
      /**
       * This triggers rerendering of itself and its children.
       */
      // @ts-ignore
      invalidate(
        /**
         * Child control for which the method was called
         *  If the child is an instance of `sap.uxap.ObjectPageSection` that corresponds to an inactive tab, the
         * invalidation will be suppressed (in iconTabBar mode)
         */
        oOrigin?: sap.ui.base.ManagedObject
      ): void;
      /**
       * Removes all the controls from the aggregation {@link #getHeaderContent headerContent}.
       *
       * Additionally, it unregisters them from the hosting UIArea.
       */
      removeAllHeaderContent(): sap.ui.core.Control[];
      /**
       * Removes all the controls from the aggregation {@link #getSections sections}.
       *
       * Additionally, it unregisters them from the hosting UIArea.
       */
      removeAllSections(): sap.uxap.ObjectPageSection[];
      /**
       * Removes a headerContent from the aggregation {@link #getHeaderContent headerContent}.
       */
      removeHeaderContent(
        /**
         * The headerContent to remove or its index or id
         */
        vHeaderContent: number | string | sap.ui.core.Control
      ): sap.ui.core.Control;
      /**
       * Removes a section from the aggregation {@link #getSections sections}.
       */
      removeSection(
        /**
         * The section to remove or its index or id
         */
        vSection: number | string | sap.uxap.ObjectPageSection
      ): sap.uxap.ObjectPageSection;
      /**
       * Scrolls the Object page to the given Section.
       */
      scrollToSection(
        /**
         * The Section ID to scroll to
         */
        sId: string,
        /**
         * Scroll duration (in ms). Default value is 0
         */
        iDuration: number,
        /**
         * Additional pixels to scroll
         */
        iOffset: number
      ): void;
      /**
       * @SINCE 1.34.0
       *
       * Sets a new value for property {@link #getAlwaysShowContentHeader alwaysShowContentHeader}.
       *
       * Determines whether Header Content will always be expanded on desktop.
       *
       * **Note**: This property is only taken into account if an instance of `sap.uxap.ObjectPageHeader` is used
       * for the `headerTitle` aggregation.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `false`.
       */
      setAlwaysShowContentHeader(
        /**
         * New value for property `alwaysShowContentHeader`
         */
        bAlwaysShowContentHeader: boolean
      ): sap.uxap.ObjectPageLayout;
      /**
       * @SINCE 1.58
       *
       * Sets the value of the `backgroundDesignAnchorBar` property.
       */
      setBackgroundDesignAnchorBar(
        /**
         * new value of the `backgroundDesignAnchorBar`
         */
        sBackgroundDesignAnchorBar: sap.m.BackgroundDesign
      ): sap.uxap.ObjectPageLayout;
      /**
       * Sets a new value for property {@link #getEnableLazyLoading enableLazyLoading}.
       *
       * Enable lazy loading for the Object page Subsections.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `false`.
       */
      setEnableLazyLoading(
        /**
         * New value for property `enableLazyLoading`
         */
        bEnableLazyLoading: boolean
      ): sap.uxap.ObjectPageLayout;
      /**
       * @SINCE 1.34.0
       *
       * Sets a new value for property {@link #getFlexEnabled flexEnabled}.
       *
       * Specifies whether the object page enables flexibility features, such as hiding and adding sections.
       *  For more information about SAPUI5 flexibility, refer to the Developer Guide.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `false`.
       */
      setFlexEnabled(
        /**
         * New value for property `flexEnabled`
         */
        bFlexEnabled: boolean
      ): sap.uxap.ObjectPageLayout;
      /**
       * @SINCE 1.40
       *
       * Sets the aggregated {@link #getFooter footer}.
       */
      setFooter(
        /**
         * The footer to set
         */
        oFooter: sap.m.IBar
      ): sap.uxap.ObjectPageLayout;
      /**
       * @SINCE 1.52
       *
       * Sets a new value for property {@link #getHeaderContentPinnable headerContentPinnable}.
       *
       * Determines whether the Header Content area can be pinned.
       *
       * When set to `true`, a pin button is displayed within the Header Content area. The pin button allows the
       * user to make the Header Content always visible at the top of the page above any scrollable content.
       *
       * **Note:** This property is only taken into account if an instance of `sap.uxap.ObjectPageDynamicHeaderTitle`
       * is used for the `headerTitle` aggregation.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `true`.
       */
      setHeaderContentPinnable(
        /**
         * New value for property `headerContentPinnable`
         */
        bHeaderContentPinnable: boolean
      ): sap.uxap.ObjectPageLayout;
      /**
       * Sets the aggregated {@link #getHeaderTitle headerTitle}.
       */
      setHeaderTitle(
        /**
         * The headerTitle to set
         */
        oHeaderTitle: sap.uxap.IHeaderTitle
      ): sap.uxap.ObjectPageLayout;
      /**
       * Sets a new value for property {@link #getHeight height}.
       *
       * Determines the height of the ObjectPage.
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
      ): sap.uxap.ObjectPageLayout;
      /**
       * @SINCE 1.34.0
       *
       * Sets a new value for property {@link #getIsChildPage isChildPage}.
       *
       * Determines whether the page is a child page and renders it with a different design. Child pages have
       * an additional (darker/lighter) stripe on the left side of their header content area.
       *
       * **Note**: This property is only taken into account if an instance of `sap.uxap.ObjectPageHeader` is used
       * for the `headerTitle` aggregation.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `false`.
       */
      setIsChildPage(
        /**
         * New value for property `isChildPage`
         */
        bIsChildPage: boolean
      ): sap.uxap.ObjectPageLayout;
      /**
       * @SINCE 1.52
       *
       * Sets a new value for property {@link #getPreserveHeaderStateOnScroll preserveHeaderStateOnScroll}.
       *
       * Preserves the current header state when scrolling. For example, if the user expands the header by clicking
       * on the title and then scrolls down the page, the header will remain expanded.
       *
       * **Notes:**
       * 	 - This property is only taken into account if an instance of `sap.uxap.ObjectPageDynamicHeaderTitle`
       * 			is used for the `headerTitle` aggregation.
       * 	 - Based on internal rules, the value of the property is not always taken into account - for example,
       * 			when the control is rendered on tablet or mobile and the control`s title and header are with height larger
       * 			than the given threshold.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `false`.
       */
      setPreserveHeaderStateOnScroll(
        /**
         * New value for property `preserveHeaderStateOnScroll`
         */
        bPreserveHeaderStateOnScroll: boolean
      ): sap.uxap.ObjectPageLayout;
      /**
       * @SINCE 1.44.0
       *
       * Sets a new value for property {@link #getSectionTitleLevel sectionTitleLevel}.
       *
       * Determines the ARIA level of the `ObjectPageSection` and `ObjectPageSubSection` titles. The ARIA level
       * is used by assisting technologies, such as screen readers, to create a hierarchical site map for faster
       * navigation.
       *
       *
       * **Note:**
       * 	 - Defining a `sectionTitleLevel` will add `aria-level` attribute from 1 to 6 instead of changing the
       * 			titles` HTML tag from H1 to H6.
       * For example: if `sectionTitleLevel` is `TitleLevel.H1`, it will result as aria-level of 1 added to the
       * `ObjectPageSection` title.
       *
       *
       * 	 -  The `ObjectPageSubSection` title would have `aria-level` one level lower than the defined. For example:
       * 			if `sectionTitleLevel` is `TitleLevel.H1`, it will result as aria-level of 2 added to the `ObjectPageSubSection`
       * 			title.
       *
       *
       * 	 -  It is possible to define a `titleLevel` on `ObjectPageSection` or `ObjectPageSubSection` level.
       * 			In this case the value of this property will be ignored.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `Auto`.
       */
      setSectionTitleLevel(
        /**
         * New value for property `sectionTitleLevel`
         */
        sSectionTitleLevel: sap.ui.core.TitleLevel
      ): sap.uxap.ObjectPageLayout;
      /**
       * Sets the section that should be selected.
       *
       * The section can either be given by itself or by its id.
       *
       * Note that an argument of `null` will cause the first visible section be set as `selectedSection`. This
       * is because the `sap.uxap.ObjectPageLayout` should always have one of its sections selected (unless it
       * has 0 visible sections).
       */
      setSelectedSection(
        /**
         * The ID or the section instance that should be selected Note that `null` or `undefined` are not valid
         * arguments
         */
        sId: string | sap.uxap.ObjectPageSection
      ): sap.uxap.ObjectPageLayout;
      /**
       * Sets a new value for property {@link #getShowAnchorBar showAnchorBar}.
       *
       * Determines whether the Navigation bar (Anchor bar) is displayed.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `true`.
       */
      setShowAnchorBar(
        /**
         * New value for property `showAnchorBar`
         */
        bShowAnchorBar: boolean
      ): sap.uxap.ObjectPageLayout;
      /**
       * Sets a new value for property {@link #getShowAnchorBarPopover showAnchorBarPopover}.
       *
       * Determines whether to show a Popover with Subsection links when clicking on Section links in the Anchor
       * bar.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `true`.
       */
      setShowAnchorBarPopover(
        /**
         * New value for property `showAnchorBarPopover`
         */
        bShowAnchorBarPopover: boolean
      ): sap.uxap.ObjectPageLayout;
      /**
       * @SINCE 1.34.0
       *
       * Sets a new value for property {@link #getShowEditHeaderButton showEditHeaderButton}.
       *
       * Determines whether an Edit button will be displayed in Header Content.
       *
       * **Note**: This property is only taken into account if an instance of `sap.uxap.ObjectPageHeader` is used
       * for the `headerTitle` aggregation.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `false`.
       */
      setShowEditHeaderButton(
        /**
         * New value for property `showEditHeaderButton`
         */
        bShowEditHeaderButton: boolean
      ): sap.uxap.ObjectPageLayout;
      /**
       * @SINCE 1.40
       *
       * Sets a new value for property {@link #getShowFooter showFooter}.
       *
       * Determines whether the footer is visible.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `false`.
       */
      setShowFooter(
        /**
         * New value for property `showFooter`
         */
        bShowFooter: boolean
      ): sap.uxap.ObjectPageLayout;
      /**
       * Sets a new value for property {@link #getShowHeaderContent showHeaderContent}.
       *
       * Determines the visibility of the Header content (headerContent aggregation).
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `true`.
       */
      setShowHeaderContent(
        /**
         * New value for property `showHeaderContent`
         */
        bShowHeaderContent: boolean
      ): sap.uxap.ObjectPageLayout;
      /**
       * @SINCE 1.32.0
       *
       * Sets a new value for property {@link #getShowOnlyHighImportance showOnlyHighImportance}.
       *
       * Determines whether sections and subsections with importance Low and Medium are hidden even on large screens.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `false`.
       */
      setShowOnlyHighImportance(
        /**
         * New value for property `showOnlyHighImportance`
         */
        bShowOnlyHighImportance: boolean
      ): sap.uxap.ObjectPageLayout;
      /**
       * Sets a new value for property {@link #getShowTitleInHeaderContent showTitleInHeaderContent}.
       *
       * Determines whether the title, image, markers and selectTitleArrow are shown in the Header content area.
       *
       * **Note**: This property is only taken into account if an instance of `sap.uxap.ObjectPageHeader` is used
       * for the `headerTitle` aggregation.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `false`.
       */
      setShowTitleInHeaderContent(
        /**
         * New value for property `showTitleInHeaderContent`
         */
        bShowTitleInHeaderContent: boolean
      ): sap.uxap.ObjectPageLayout;
      /**
       * Sets a new value for property {@link #getSubSectionLayout subSectionLayout}.
       *
       * Determines whether Subsection titles are displayed on top or to the left of the Subsection content.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `TitleOnTop`.
       */
      setSubSectionLayout(
        /**
         * New value for property `subSectionLayout`
         */
        sSubSectionLayout: sap.uxap.ObjectPageSubSectionLayout
      ): sap.uxap.ObjectPageLayout;
      /**
       * @SINCE 1.52
       *
       * Sets a new value for property {@link #getToggleHeaderOnTitleClick toggleHeaderOnTitleClick}.
       *
       * Determines whether the user can switch between the expanded/collapsed states of the `sap.uxap.ObjectPageDynamicHeaderContent`
       * by clicking on the `sap.uxap.ObjectPageDynamicHeaderTitle`. If set to `false`, the `sap.uxap.ObjectPageDynamicHeaderTitle`
       * is not clickable and the application must provide other means for expanding/collapsing the `sap.uxap.ObjectPageDynamicHeaderContent`,
       * if necessary.
       *
       * **Note:** This property is only taken into account if an instance of `sap.uxap.ObjectPageDynamicHeaderTitle`
       * is used for the `headerTitle` aggregation.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `true`.
       */
      setToggleHeaderOnTitleClick(
        /**
         * New value for property `toggleHeaderOnTitleClick`
         */
        bToggleHeaderOnTitleClick: boolean
      ): sap.uxap.ObjectPageLayout;
      /**
       * Sets a new value for property {@link #getUpperCaseAnchorBar upperCaseAnchorBar}.
       *
       * Determines whether the Anchor bar items are displayed in upper case.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `true`.
       */
      setUpperCaseAnchorBar(
        /**
         * New value for property `upperCaseAnchorBar`
         */
        bUpperCaseAnchorBar: boolean
      ): sap.uxap.ObjectPageLayout;
      /**
       * Sets a new value for property {@link #getUseIconTabBar useIconTabBar}.
       *
       * Use tab navigation mode instead of the default Anchor bar mode.
       * **Note: **Keep in mind that the `sap.m.IconTabBar` control is no longer used for the tab navigation mode.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `false`.
       */
      setUseIconTabBar(
        /**
         * New value for property `useIconTabBar`
         */
        bUseIconTabBar: boolean
      ): sap.uxap.ObjectPageLayout;
      /**
       * Sets a new value for property {@link #getUseTwoColumnsForLargeScreen useTwoColumnsForLargeScreen}.
       *
       * Determines whether the to use two column layout for the L screen size.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `false`.
       */
      setUseTwoColumnsForLargeScreen(
        /**
         * New value for property `useTwoColumnsForLargeScreen`
         */
        bUseTwoColumnsForLargeScreen: boolean
      ): sap.uxap.ObjectPageLayout;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:editHeaderButtonPress editHeaderButtonPress}
       * event of this `sap.uxap.ObjectPageLayout`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.uxap.ObjectPageLayout` itself.
       *
       * The event is fired when the Edit Header button is pressed
       */
      attachEditHeaderButtonPress(
        /**
         * The function to be called when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object to call the event handler with. Defaults to this `sap.uxap.ObjectPageLayout` itself
         */
        oListener?: object
      ): sap.uxap.ObjectPageLayout;
      /**
       * @SINCE 1.40
       *
       * Attaches event handler `fnFunction` to the {@link #event:navigate navigate} event of this `sap.uxap.ObjectPageLayout`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.uxap.ObjectPageLayout` itself.
       *
       * The event is fired when the selected section is changed using the navigation.
       */
      attachNavigate(
        /**
         * The function to be called when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object to call the event handler with. Defaults to this `sap.uxap.ObjectPageLayout` itself
         */
        oListener?: object
      ): sap.uxap.ObjectPageLayout;
      /**
       * Attaches event handler `fnFunction` to the {@link #event:toggleAnchorBar toggleAnchorBar} event of this
       * `sap.uxap.ObjectPageLayout`.
       *
       * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
       * otherwise it will be bound to this `sap.uxap.ObjectPageLayout` itself.
       *
       * The event is fired when the Anchor bar is switched from moving to fixed or the other way round.
       */
      attachToggleAnchorBar(
        /**
         * The function to be called when the event occurs
         */
        fnFunction: Function,
        /**
         * Context object to call the event handler with. Defaults to this `sap.uxap.ObjectPageLayout` itself
         */
        oListener?: object
      ): sap.uxap.ObjectPageLayout;
    }
    /**
     * @SINCE 1.38
     *
     * A helper element that enables a "stashed-based" lazy loading approach for the content of the {@link sap.uxap.ObjectPageSubSection}
     * control.
     *
     * `ObjectPageLazyLoader` is intended to be used in a declarative way only (for example, in a view) with
     * the `stashed` property set to `true`, and is recommended to be used only once per subsection as its sole
     * content.
     *
     * `ObjectPageLazyLoader` utilizes UI5's stashing mechanism and is a lightweight alternative to the native
     * block-based Lazy Loading of the `ObjectPageLayout`. Wrapping the content of a subsection in an `ObjectPageLazyLoader`
     * with `stashed=true` will make the content unstash automatically as the user scrolls.
     *
     * **Note:** Subsections are required to have an ID when used with `ObjectPageLazyLoader`.
     */
    class ObjectPageLazyLoader extends sap.ui.core.Element {
      /**
       * Constructor for a new `ObjectPageLazyLoader`.
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
        mSettings?: ObjectPageLazyLoaderOpts
      );

      /**
       * Adds some content to the aggregation {@link #getContent content}.
       */
      addContent(
        /**
         * The content to add; if empty, nothing is inserted
         */
        oContent: sap.ui.core.Control
      ): sap.uxap.ObjectPageLazyLoader;
      /**
       * Destroys all the content in the aggregation {@link #getContent content}.
       */
      destroyContent(): sap.uxap.ObjectPageLazyLoader;
      /**
       * Creates a new subclass of class sap.uxap.ObjectPageLazyLoader with name `sClassName` and enriches it
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
       * Gets content of aggregation {@link #getContent content}.
       *
       * Controls to be displayed after this element is unstashed
       */
      getContent(): sap.ui.core.Control[];
      /**
       * Returns a metadata object for class sap.uxap.ObjectPageLazyLoader.
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
      ): sap.uxap.ObjectPageLazyLoader;
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
     * @SINCE 1.26
     *
     * Top-level information container of an {@link sap.uxap.ObjectPageLayout}.
     *
     * The `ObjectPageSection`'s purpose is to aggregate subsections.
     *
     * **Note:** This control is intended to be used only as part of the `ObjectPageLayout`.
     */
    class ObjectPageSection extends sap.uxap.ObjectPageSectionBase {
      /**
       * Constructor for a new `ObjectPageSection`.
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
        mSettings?: ObjectPageSectionOpts
      );

      /**
       * Adds some subSection to the aggregation {@link #getSubSections subSections}.
       */
      addSubSection(
        /**
         * The subSection to add; if empty, nothing is inserted
         */
        oSubSection: sap.uxap.ObjectPageSubSection
      ): sap.uxap.ObjectPageSection;
      /**
       * Destroys all the subSections in the aggregation {@link #getSubSections subSections}.
       */
      destroySubSections(): sap.uxap.ObjectPageSection;
      /**
       * Creates a new subclass of class sap.uxap.ObjectPageSection with name `sClassName` and enriches it with
       * the information contained in `oClassInfo`.
       *
       * `oClassInfo` might contain the same kind of information as described in {@link sap.uxap.ObjectPageSectionBase.extend}.
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
       * Returns a metadata object for class sap.uxap.ObjectPageSection.
       */
      // @ts-ignore
      static getMetadata(): sap.ui.base.Metadata;
      /**
       * ID of the element which is the current target of the association {@link #getSelectedSubSection selectedSubSection},
       * or `null`.
       */
      getSelectedSubSection(): sap.ui.core.ID;
      /**
       * Gets current value of property {@link #getShowTitle showTitle}.
       *
       * Determines whether to display the Section title or not.
       *
       * Default value is `true`.
       */
      getShowTitle(): boolean;
      /**
       * Gets content of aggregation {@link #getSubSections subSections}.
       *
       * The list of Subsections.
       */
      getSubSections(): sap.uxap.ObjectPageSubSection[];
      /**
       * Gets current value of property {@link #getTitleUppercase titleUppercase}.
       *
       * Determines whether the Section title is displayed in upper case.
       *
       * Default value is `true`.
       */
      getTitleUppercase(): boolean;
      /**
       * Checks for the provided `sap.uxap.ObjectPageSubSection` in the aggregation {@link #getSubSections subSections}.
       * and returns its index if found or -1 otherwise.
       */
      indexOfSubSection(
        /**
         * The subSection whose index is looked for
         */
        oSubSection: sap.uxap.ObjectPageSubSection
      ): number;
      /**
       * Inserts a subSection into the aggregation {@link #getSubSections subSections}.
       */
      insertSubSection(
        /**
         * The subSection to insert; if empty, nothing is inserted
         */
        oSubSection: sap.uxap.ObjectPageSubSection,
        /**
         * The `0`-based index the subSection should be inserted at; for a negative value of `iIndex`, the subSection
         * is inserted at position 0; for a value greater than the current size of the aggregation, the subSection
         * is inserted at the last position
         */
        iIndex: number
      ): sap.uxap.ObjectPageSection;
      /**
       * Removes all the controls from the aggregation {@link #getSubSections subSections}.
       *
       * Additionally, it unregisters them from the hosting UIArea.
       */
      removeAllSubSections(): sap.uxap.ObjectPageSubSection[];
      /**
       * Removes a subSection from the aggregation {@link #getSubSections subSections}.
       */
      removeSubSection(
        /**
         * The subSection to remove or its index or id
         */
        vSubSection: number | string | sap.uxap.ObjectPageSubSection
      ): sap.uxap.ObjectPageSubSection;
      /**
       * Sets the associated {@link #getSelectedSubSection selectedSubSection}.
       */
      setSelectedSubSection(
        /**
         * ID of an element which becomes the new target of this selectedSubSection association; alternatively,
         * an element instance may be given
         */
        oSelectedSubSection: sap.ui.core.ID | sap.uxap.ObjectPageSubSection
      ): sap.uxap.ObjectPageSection;
      /**
       * Sets a new value for property {@link #getShowTitle showTitle}.
       *
       * Determines whether to display the Section title or not.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `true`.
       */
      setShowTitle(
        /**
         * New value for property `showTitle`
         */
        bShowTitle: boolean
      ): sap.uxap.ObjectPageSection;
      /**
       * Sets a new value for property {@link #getTitleUppercase titleUppercase}.
       *
       * Determines whether the Section title is displayed in upper case.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `true`.
       */
      setTitleUppercase(
        /**
         * New value for property `titleUppercase`
         */
        bTitleUppercase: boolean
      ): sap.uxap.ObjectPageSection;
    }
    /**
     * @SINCE 1.26
     *
     * An abstract container for sections and subsections in the {@link sap.uxap.ObjectPageLayout}.
     */
    class ObjectPageSectionBase extends sap.ui.core.Control {
      /**
       * Constructor for a new `ObjectPageSectionBase`.
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
        mSettings?: ObjectPageSectionBaseOpts
      );

      /**
       * Explicitly ask to connect to the UI5 model tree
       */
      connectToModels(): void;
      /**
       * Destroys the customAnchorBarButton in the aggregation {@link #getCustomAnchorBarButton customAnchorBarButton}.
       */
      destroyCustomAnchorBarButton(): sap.uxap.ObjectPageSectionBase;
      /**
       * Creates a new subclass of class sap.uxap.ObjectPageSectionBase with name `sClassName` and enriches it
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
       * Gets content of aggregation {@link #getCustomAnchorBarButton customAnchorBarButton}.
       *
       * The custom button that will provide a link to the section in the ObjectPageLayout anchor bar. This button
       * will be used as a custom template to be into the ObjectPageLayout anchorBar area, therefore property
       * changes happening on this button template after the first rendering won't affect the actual button copy
       * used in the anchorBar.
       *
       * If you want to change some of the button properties, you would need to bind them to a model.
       */
      getCustomAnchorBarButton(): sap.m.Button;
      /**
       * @SINCE 1.32.0
       *
       * Gets current value of property {@link #getImportance importance}.
       *
       * Determines whether the section will be hidden on low resolutions.
       *
       * Default value is `High`.
       */
      getImportance(): sap.uxap.Importance;
      /**
       * Returns a metadata object for class sap.uxap.ObjectPageSectionBase.
       */
      // @ts-ignore
      static getMetadata(): sap.ui.base.Metadata;
      /**
       * Gets current value of property {@link #getTitle title}.
       *
       * Section Title
       */
      getTitle(): string;
      /**
       * @SINCE 1.44.0
       *
       * Gets current value of property {@link #getTitleLevel titleLevel}.
       *
       * Determines the ARIA level of the `ObjectPageSectionBase` title. The ARIA level is used by assisting technologies,
       * such as screen readers, to create a hierarchical site map for faster navigation.
       *
       * **Note:** Defining a `titleLevel` will add `aria-level` attribute from 1 to 6, instead of changing the
       * `ObjectPageSectionBase` title HTML tag from H1 to H6.
       * For example: if `titleLevel` is `TitleLevel.H1`, it will result as aria-level of 1 added to the `ObjectPageSectionBase`
       * title.
       *
       * Default value is `Auto`.
       */
      getTitleLevel(): sap.ui.core.TitleLevel;
      /**
       * Gets current value of property {@link #getVisible visible}.
       *
       * Invisible ObjectPageSectionBase are not rendered
       *
       * Default value is `true`.
       */
      // @ts-ignore
      getVisible(): boolean;
      /**
       * Sets the aggregated {@link #getCustomAnchorBarButton customAnchorBarButton}.
       */
      setCustomAnchorBarButton(
        /**
         * The customAnchorBarButton to set
         */
        oCustomAnchorBarButton: sap.m.Button
      ): sap.uxap.ObjectPageSectionBase;
      /**
       * @SINCE 1.32.0
       *
       * Sets a new value for property {@link #getImportance importance}.
       *
       * Determines whether the section will be hidden on low resolutions.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `High`.
       */
      setImportance(
        /**
         * New value for property `importance`
         */
        sImportance: sap.uxap.Importance
      ): sap.uxap.ObjectPageSectionBase;
      /**
       * Sets a new value for property {@link #getTitle title}.
       *
       * Section Title
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       */
      setTitle(
        /**
         * New value for property `title`
         */
        sTitle: string
      ): sap.uxap.ObjectPageSectionBase;
      /**
       * @SINCE 1.44.0
       *
       * Sets a new value for property {@link #getTitleLevel titleLevel}.
       *
       * Determines the ARIA level of the `ObjectPageSectionBase` title. The ARIA level is used by assisting technologies,
       * such as screen readers, to create a hierarchical site map for faster navigation.
       *
       * **Note:** Defining a `titleLevel` will add `aria-level` attribute from 1 to 6, instead of changing the
       * `ObjectPageSectionBase` title HTML tag from H1 to H6.
       * For example: if `titleLevel` is `TitleLevel.H1`, it will result as aria-level of 1 added to the `ObjectPageSectionBase`
       * title.
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
      ): sap.uxap.ObjectPageSectionBase;
      /**
       * Sets a new value for property {@link #getVisible visible}.
       *
       * Invisible ObjectPageSectionBase are not rendered
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
      ): sap.uxap.ObjectPageSectionBase;
    }
    /**
     * @SINCE 1.26
     *
     * Second-level information container of an {@link sap.uxap.ObjectPageLayout}.
     *
     * An `ObjectPageSubSection` may only be used within sections in the `ObjectPageLayout`. Subsections are
     * used to display primary information in the `blocks` aggregation (always visible) and not-so-important
     * information in the `moreBlocks` aggregation. The content in the `moreBlocks` aggregation is initially
     * hidden, but may be accessed with a "See more" (...) button.
     *
     * **Note:** This control is intended to be used only as part of the `ObjectPageLayout`.
     */
    class ObjectPageSubSection extends sap.uxap.ObjectPageSectionBase {
      /**
       * Constructor for a new `ObjectPageSubSection`.
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
        mSettings?: ObjectPageSubSectionOpts
      );

      /**
       * Adds some action to the aggregation {@link #getActions actions}.
       */
      addAction(
        /**
         * The action to add; if empty, nothing is inserted
         */
        oAction: sap.ui.core.Control
      ): sap.uxap.ObjectPageSubSection;
      /**
       * Adds some block to the aggregation {@link #getBlocks blocks}.
       */
      addBlock(
        /**
         * The block to add; if empty, nothing is inserted
         */
        oBlock: sap.ui.core.Control
      ): sap.uxap.ObjectPageSubSection;
      /**
       * Adds some moreBlock to the aggregation {@link #getMoreBlocks moreBlocks}.
       */
      addMoreBlock(
        /**
         * The moreBlock to add; if empty, nothing is inserted
         */
        oMoreBlock: sap.ui.core.Control
      ): sap.uxap.ObjectPageSubSection;
      /**
       * Destroys all the actions in the aggregation {@link #getActions actions}.
       */
      destroyActions(): sap.uxap.ObjectPageSubSection;
      /**
       * Destroys all the blocks in the aggregation {@link #getBlocks blocks}.
       */
      destroyBlocks(): sap.uxap.ObjectPageSubSection;
      /**
       * Destroys all the moreBlocks in the aggregation {@link #getMoreBlocks moreBlocks}.
       */
      destroyMoreBlocks(): sap.uxap.ObjectPageSubSection;
      /**
       * Creates a new subclass of class sap.uxap.ObjectPageSubSection with name `sClassName` and enriches it
       * with the information contained in `oClassInfo`.
       *
       * `oClassInfo` might contain the same kind of information as described in {@link sap.uxap.ObjectPageSectionBase.extend}.
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
       * Actions available for this Subsection
       */
      getActions(): sap.ui.core.Control[];
      /**
       * Gets content of aggregation {@link #getBlocks blocks}.
       *
       * Controls to be displayed in the subsection
       *
       * **Note:** The SAP Fiori Design guidelines require that the `ObjectPageHeader`'s content and the `ObjectPage`'s
       * subsection content are aligned vertically. When using {@link sap.ui.layout.form.Form}, {@link sap.m.Panel},
       * {@link sap.m.Table} and {@link sap.m.List} in the subsection content area of `ObjectPage`, if the content
       * is not already aligned, you need to adjust their left text offset to achieve the vertical alignment.
       * To do this, apply the `sapUxAPObjectPageSubSectionAlignContent` CSS class to them and set their `width`
       * property to `auto` (if not set by default).
       *
       * Example:
       *
       *
       * ```javascript
       *
       * ` <Panel class="sapUxAPObjectPageSubSectionAlignContent" width="auto"></Panel> `
       * ```
       */
      getBlocks(): sap.ui.core.Control[];
      /**
       * Returns a metadata object for class sap.uxap.ObjectPageSubSection.
       */
      // @ts-ignore
      static getMetadata(): sap.ui.base.Metadata;
      /**
       * Gets current value of property {@link #getMode mode}.
       *
       * A mode property that will be passed to the controls in the blocks and moreBlocks aggregations. Only relevant
       * if these aggregations use Object page blocks.
       *
       * Default value is `Collapsed`.
       */
      getMode(): sap.uxap.ObjectPageSubSectionMode;
      /**
       * Gets content of aggregation {@link #getMoreBlocks moreBlocks}.
       *
       * Additional controls to display when the Show more / See all / (...) button is pressed
       */
      getMoreBlocks(): sap.ui.core.Control[];
      /**
       * Gets current value of property {@link #getTitleUppercase titleUppercase}.
       *
       * Determines whether the Subsection title is displayed in upper case.
       *
       * Default value is `false`.
       */
      getTitleUppercase(): boolean;
      /**
       * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getActions actions}. and returns
       * its index if found or -1 otherwise.
       */
      indexOfAction(
        /**
         * The action whose index is looked for
         */
        oAction: sap.ui.core.Control
      ): number;
      /**
       * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getBlocks blocks}. and returns
       * its index if found or -1 otherwise.
       */
      indexOfBlock(
        /**
         * The block whose index is looked for
         */
        oBlock: sap.ui.core.Control
      ): number;
      /**
       * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getMoreBlocks moreBlocks}. and
       * returns its index if found or -1 otherwise.
       */
      indexOfMoreBlock(
        /**
         * The moreBlock whose index is looked for
         */
        oMoreBlock: sap.ui.core.Control
      ): number;
      /**
       * Inserts a action into the aggregation {@link #getActions actions}.
       */
      insertAction(
        /**
         * The action to insert; if empty, nothing is inserted
         */
        oAction: sap.ui.core.Control,
        /**
         * The `0`-based index the action should be inserted at; for a negative value of `iIndex`, the action is
         * inserted at position 0; for a value greater than the current size of the aggregation, the action is inserted
         * at the last position
         */
        iIndex: number
      ): sap.uxap.ObjectPageSubSection;
      /**
       * Adds an `sap.uxap.BlockBase` instance to the `blocks` aggregation.
       *
       * **Note:** The `insertBlock` method is not supported by design. If used, it works as an `addBlock`, adding
       * a single block to the end of the `blocks` aggregation.
       */
      insertBlock(
        /**
         * The `sap.uxap.BlockBase` instance
         */
        oObject: sap.uxap.BlockBase,
        /**
         * The insertion index
         */
        iIndex: number
      ): sap.uxap.ObjectPageSubSection;
      /**
       * Adds an `sap.uxap.BlockBase` instance to the `moreBlocks` aggregation.
       *
       * **Note:** The `insertMoreBlock` method is not supported by design. If used, it works as an `addMoreBlock`,
       * adding a single block to the end of the `moreBlocks` aggregation.
       */
      insertMoreBlock(
        /**
         * The `sap.uxap.BlockBase` instance
         */
        oObject: sap.uxap.BlockBase,
        /**
         * The insertion index
         */
        iIndex: number
      ): sap.uxap.ObjectPageSubSection;
      /**
       * Removes a action from the aggregation {@link #getActions actions}.
       */
      removeAction(
        /**
         * The action to remove or its index or id
         */
        vAction: number | string | sap.ui.core.Control
      ): sap.ui.core.Control;
      /**
       * Removes all the controls from the aggregation {@link #getActions actions}.
       *
       * Additionally, it unregisters them from the hosting UIArea.
       */
      removeAllActions(): sap.ui.core.Control[];
      /**
       * Removes all the controls from the aggregation {@link #getBlocks blocks}.
       *
       * Additionally, it unregisters them from the hosting UIArea.
       */
      removeAllBlocks(): sap.ui.core.Control[];
      /**
       * Removes all the controls from the aggregation {@link #getMoreBlocks moreBlocks}.
       *
       * Additionally, it unregisters them from the hosting UIArea.
       */
      removeAllMoreBlocks(): sap.ui.core.Control[];
      /**
       * Removes a block from the aggregation {@link #getBlocks blocks}.
       */
      removeBlock(
        /**
         * The block to remove or its index or id
         */
        vBlock: number | string | sap.ui.core.Control
      ): sap.ui.core.Control;
      /**
       * Removes a moreBlock from the aggregation {@link #getMoreBlocks moreBlocks}.
       */
      removeMoreBlock(
        /**
         * The moreBlock to remove or its index or id
         */
        vMoreBlock: number | string | sap.ui.core.Control
      ): sap.ui.core.Control;
      /**
       * Sets a new value for property {@link #getMode mode}.
       *
       * A mode property that will be passed to the controls in the blocks and moreBlocks aggregations. Only relevant
       * if these aggregations use Object page blocks.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `Collapsed`.
       */
      setMode(
        /**
         * New value for property `mode`
         */
        sMode: sap.uxap.ObjectPageSubSectionMode
      ): sap.uxap.ObjectPageSubSection;
      /**
       * Sets a new value for property {@link #getTitleUppercase titleUppercase}.
       *
       * Determines whether the Subsection title is displayed in upper case.
       *
       * When called with a value of `null` or `undefined`, the default value of the property will be restored.
       *
       * Default value is `false`.
       */
      setTitleUppercase(
        /**
         * New value for property `titleUppercase`
         */
        bTitleUppercase: boolean
      ): sap.uxap.ObjectPageSubSection;
    }
    /**
     * Used by the `BlockBase` control to define if it should do automatic adjustment of its nested forms.
     */
    enum BlockBaseFormAdjustment {
      /**
       * Any form within the block will be automatically adjusted to have as many columns as the colspan of its
       * parent block.
       */
      BlockColumns,
      /**
       * No automatic adjustment of forms.
       */
      None,
      /**
       * Any form within the block will be automatically adjusted to have only one column.
       */
      OneColumn
    }
    /**
     * @SINCE 1.32.0
     *
     * Used by the `ObjectSectionBase` control to define the importance of the content contained in it.
     */
    enum Importance {
      /**
       * High importance of the content.
       */
      High,
      /**
       * Low importance of the content.
       */
      Low,
      /**
       * Medium importance of the content.
       */
      Medium
    }
    /**
     * Used by the `sap.uxap.component.Component` how to initialize the `ObjectPageLayout` sections and subsections.
     */
    enum ObjectPageConfigurationMode {
      /**
       * Determines the JSON model.
       */
      JsonModel,
      /**
       * Determines the JSON URL.
       */
      JsonURL
    }
    /**
     * Used by the `ObjectPageHeader` control to define which design to use.
     */
    enum ObjectPageHeaderDesign {
      /**
       * Dark theme for the `ObjectPageHeader`.
       */
      Dark,
      /**
       * Light theme for the `ObjectPageHeader`.
       */
      Light
    }
    /**
     * Used by the `ObjectPageHeader` control to define which shape to use for the image.
     */
    enum ObjectPageHeaderPictureShape {
      /**
       * Circle shape for the images in the `ObjectPageHeader`.
       */
      Circle,
      /**
       * Square shape for the images in the `ObjectPageHeader`.
       */
      Square
    }
    /**
     * Used by the `ObjectPagSubSection` control to define which layout to apply.
     */
    enum ObjectPageSubSectionLayout {
      /**
       * Title and actions on the left, inside the block area.
       */
      TitleOnLeft,
      /**
       * Title and actions on top of the block area.
       */
      TitleOnTop
    }
    /**
     * Used by the `ObjectPageLayout` control to define which layout to use (either Collapsed or Expanded).
     */
    enum ObjectPageSubSectionMode {
      /**
       * Collapsed mode of display of the `ObjectPageLayout`.
       */
      Collapsed,
      /**
       * Expanded mode of displaying the `ObjectPageLayout`.
       */
      Expanded
    }
  }

  interface IUI5DefineDependencyNames {
    "sap/uxap/AnchorBar": undefined;

    "sap/uxap/BlockBase": undefined;

    "sap/uxap/BreadCrumbs": undefined;

    "sap/uxap/HierarchicalSelect": undefined;

    "sap/uxap/ModelMapping": undefined;

    "sap/uxap/ObjectPageDynamicHeaderContent": undefined;

    "sap/uxap/ObjectPageDynamicHeaderTitle": undefined;

    "sap/uxap/ObjectPageHeader": undefined;

    "sap/uxap/ObjectPageHeaderActionButton": undefined;

    "sap/uxap/ObjectPageHeaderContent": undefined;

    "sap/uxap/ObjectPageHeaderLayoutData": undefined;

    "sap/uxap/ObjectPageLayout": undefined;

    "sap/uxap/ObjectPageLazyLoader": undefined;

    "sap/uxap/ObjectPageSection": undefined;

    "sap/uxap/ObjectPageSectionBase": undefined;

    "sap/uxap/ObjectPageSubSection": undefined;

    "sap/uxap/IHeaderContent": undefined;

    "sap/uxap/IHeaderTitle": undefined;
  }
}
