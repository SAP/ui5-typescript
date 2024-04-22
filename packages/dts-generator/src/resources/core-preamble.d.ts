/**
 * An integer number
 */
declare type int = number;

/**
 * A number, potentially with decimals
 */
declare type float = number;

/**
 * An alternative name for the global type Element.
 *
 * UI5 defines its own type sap.ui.core.Element, which, in the scope of the sap.ui.core
 * namespace, hides the global type. As there are other entities in the same namespace
 * that refer to the global Element in their signatures, this naming conflict can cause
 * type mismatches between sap.ui.core code and other code subclassing from it.
 *
 * To avoid these issues, the alternative name can be used in sap.ui.core signatures.
 *
 * @todo check if HTMLElement could be used instead in UI5 method signatures
 */
declare type global_Element = Element;

declare type jQuery<T = HTMLElement> = JQuery<T>;
declare namespace jQuery {
  export type Event = JQuery.Event;
  export type Deferred<T = any> = JQuery.Deferred<T>;
  export type Promise<T = any> = JQuery.Promise<T>;
}

declare namespace QUnit {
  export type Assert = globalThis.Assert;
}

interface JQuery<TElement = HTMLElement> extends Iterable<TElement> {
  /**
   * Adds the given ID reference to the aria-describedby attribute.
   */
  addAriaDescribedBy(
    /**
     * The ID reference of an element
     */
    sId: string,
    /**
     * whether prepend or not
     */
    bPrepend?: boolean
  ): jQuery;

  /**
   * Adds the given ID reference to the aria-labelledby attribute.
   */
  addAriaLabelledBy(
    /**
     * The ID reference of an element
     */
    sId: string,
    /**
     * Whether prepend or not
     */
    bPrepend?: boolean
  ): jQuery;

  /**
   * Extension function to the jQuery.fn which identifies SAPUI5 controls in the given jQuery context.
   * @deprecated since 1.106, use sap.ui.core.Element.closestTo instead.
   */
  control(
    /**
     * Whether or not to respect the associated DOM elements to a control via <code>data-sap-ui-related</code> attribute.
     */
    includeRelated?: boolean
  ): Array<import("sap/ui/core/Control").default>;

  /**
   * Extension function to the jQuery.fn which identifies SAPUI5 controls in the given jQuery context.
   * @deprecated since 1.106, use sap.ui.core.Element.closestTo instead.
   */
  control(
    /**
     * Parameter to return the control instance at the given index in the array.
     */
    index: int,
    /**
     * Whether or not to respect the associated DOM elements to a control via <code>data-sap-ui-related</code> attribute.
     */
    includeRelated?: boolean
  ): import("sap/ui/core/Control").default | null;

  /**
   * Gets the position of the cursor in an element that supports cursor positioning.
   */
  cursorPos(): int;

  /**
   * Sets the position of the cursor in an element that supports cursor positioning.
   */
  cursorPos(
    /**
     * The cursor position to set
     */
    iPos: int
  ): jQuery;

  /**
   * Disable HTML elements selection.
   */
  disableSelection(): jQuery;

  /**
   * Enable HTML elements to get selected.
   */
  enableSelection(): jQuery;

  /**
   * Returns the first focusable domRef in a given container (the first element of the collection)
   */
  firstFocusableDomRef(): Element;

  /**
   * Retrieve the selected text in the first element of the collection.
   *
   * <b>Note</b>: This feature is only supported for input element’s type of text, search, url, tel and password.
   */
  getSelectedText(): string;

  /**
   * Returns <code>true</code> if the first element has a set tabindex.
   */
  hasTabIndex(): boolean;

  /**
   * Returns the last focusable domRef in a given container
   */
  lastFocusableDomRef(): Element;

  /**
   * Gets the next parent DOM element with a given attribute and attribute value starting above the first given element
   */
  parentByAttribute(
    /**
     * Name of the attribute
     */
    sAttribute: string,
    /**
     * Value of the attribute (optional)
     */
    sValue: string
  ): Element;

  /**
   * Returns a rectangle describing the current visual positioning of the first DOM object in the collection
   * (or <code>null</code> if no element was given).
   */
  rect(): object;

  /**
   * Returns whether a point described by X and Y is inside this Rectangle's boundaries.
   */
  rectContains(
    /**
     * The X coordinate
     */
    posX: int,
    /**
     * The Y coordinate
     */
    posY: int
  ): boolean;

  /**
   * Removes the given ID reference from the aria-describedby attribute.
   */
  removeAriaDescribedBy(
    /**
     * The ID reference of an element
     */
    sId: string
  ): jQuery;

  /**
   * Removes the given ID reference from the aria-labelledby attribute.
   */
  removeAriaLabelledBy(
    /**
     * The ID reference of an element
     */
    sId: string
  ): jQuery;

  /**
   * Returns the scrollLeft value of the first element in the given jQuery collection in right-to-left mode.
   *
   * Precondition: The element is rendered in RTL mode.
   *
   * Reason for this method is that the major browsers use three different values for the same scroll position
   * when in RTL mode. This method hides those differences and returns/applies the same value that would be
   * returned in LTR mode: The distance in px how far the given container is scrolled away from the leftmost
   * scroll position.
   *
   * Returns "undefined" if no element is given.
   */
  scrollLeftRTL(): int | undefined;

  /**
   * Sets the scrollLeft value of the first element in the given jQuery collection in right-to-left mode.
   *
   * Precondition: The element is rendered in RTL mode.
   *
   * Reason for this method is that the major browsers use three different values for the same scroll position
   * when in RTL mode. This method hides those differences and returns/applies the same value that would be
   * returned in LTR mode: The distance in px how far the given container is scrolled away from the leftmost
   * scroll position.
   */
  scrollLeftRTL(
    /**
     * The desired scroll position
     */
    iPos: int
  ): jQuery;

  /**
   * Returns the MIRRORED scrollLeft value of the first element in the given jQuery collection in right-to-left mode.
   *
   * Precondition: The element is rendered in RTL mode.
   *
   * Reason for this method is that the major browsers return three different values for the same scroll position
   * when in RTL mode. This method hides those differences and returns the value that would be returned in LTR mode
   * if the UI would be mirrored horizontally: The distance in px how far the given container is scrolled away
   * from the rightmost scroll position.
   *
   * Returns "undefined" if no element is in the given jQuery collection.
   */
  scrollRightRTL(): int | undefined;

  /**
   * Sets the text selection in the first element of the collection.
   *
   * <b>Note</b>: This feature is only supported for input element's type of text, search, url, tel and password.
   */
  selectText(
    /**
     * Start position of the selection (inclusive)
     */
    iStart: int,
    /**
     * End position of the selection (exclusive)
     */
    iEnd: int
  ): jQuery;

  /**
   * Get the z-index for an element.
   */
  zIndex(): number;

  /**
   * Set the z-index for an element.
   */
  zIndex(
    /**
     * The z-index to set
     */
    zIndex: int
  ): jQuery;
}

declare module "sap/ui/thirdparty/jquery" {
  export default jQuery;
}
declare module "sap/ui/thirdparty/qunit-2" {
  export default QUnit;
}

declare namespace sap {
  interface IUI5DefineDependencyNames {
    "sap/ui/thirdparty/jquery": undefined;
    "sap/ui/thirdparty/qunit-2": undefined;
  }
}
