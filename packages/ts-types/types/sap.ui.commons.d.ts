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
     * Common basic controls, mainly intended for desktop scenarios
     */
    namespace commons {
      /**
       * @SINCE 1.9.1
       * @deprecated (since 1.16.0) - Moved to sap.ui.core library. Please use this one.
       *
       * Level of a title.
       */
      export const TitleLevel: undefined;

      /**
       * @deprecated (since 1.38)
       */
      namespace enums {
        /**
         * @deprecated (since 1.38)
         *
         * Value set for the background design of areas
         */
        enum AreaDesign {
          /**
           * Shows the label in a filled look
           */
          Fill,
          /**
           * Shows the area in a plain look
           */
          Plain,
          /**
           * Shows the background as transparent
           */
          Transparent
        }
        /**
         * @deprecated (since 1.38)
         *
         * Value set for the border design of areas
         */
        enum BorderDesign {
          /**
           * Draws the border as a box around the area
           */
          Box,
          /**
           * Suppresses the border
           */
          None
        }
        /**
         * @deprecated (since 1.38)
         *
         * Orientation of a UI element
         */
        enum Orientation {
          /**
           * Horizontal orientation
           */
          horizontal,
          /**
           * Vertical orientation
           */
          vertical
        }
      }
      /**
       * @deprecated (since 1.38)
       */
      namespace form {
        /**
         * @deprecated (since 1.16.0) - Moved to sap.ui.layout library. Please use this one.
         *
         * Available FormLayouts used for the SimpleForm.
         */
        export const SimpleFormLayout: undefined;

        interface FormOpts extends sap.ui.layout.form.FormOpts {}

        interface FormContainerOpts
          extends sap.ui.layout.form.FormContainerOpts {}

        interface FormElementOpts extends sap.ui.layout.form.FormElementOpts {}

        interface FormLayoutOpts extends sap.ui.layout.form.FormLayoutOpts {}

        interface GridContainerDataOpts
          extends sap.ui.layout.form.GridContainerDataOpts {}

        interface GridElementDataOpts
          extends sap.ui.layout.form.GridElementDataOpts {}

        interface GridLayoutOpts extends sap.ui.layout.form.GridLayoutOpts {}

        interface ResponsiveLayoutOpts
          extends sap.ui.layout.form.ResponsiveLayoutOpts {}

        interface SimpleFormOpts extends sap.ui.layout.form.SimpleFormOpts {}
        /**
         * @SINCE 1.9.1
         * @deprecated (since 1.16.0) - moved to sap.ui.layout library. Please use this one.
         *
         * Form control. Holder for form control to be rendered in a specific form layout. A Form supports VariantLayoutData
         * for it's conent to allow a simple switching of Layouts.
         */
        class Form extends sap.ui.layout.form.Form {
          /**
           * Constructor for a new form/Form.
           */
          constructor(
            /**
             * id for the new control, generated automatically if no id is given
             */
            sId?: string,
            /**
             * initial settings for the new control
             */
            mSettings?: FormOpts
          );

          /**
           * Creates a new subclass of class sap.ui.commons.form.Form with name `sClassName` and enriches it with
           * the information contained in `oClassInfo`.
           *
           * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.layout.form.Form.extend}.
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
           * Returns a metadata object for class sap.ui.commons.form.Form.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.base.Metadata;
          /**
           * @SINCE 1.12.0
           *
           * Getter for property `visible`. Invisible Forms are not rendered.
           *
           * Default value is `true`
           */
          // @ts-ignore
          getVisible(): boolean;
          /**
           * @SINCE 1.12.0
           *
           * Setter for property `visible`.
           *
           * Default value is `true`
           */
          // @ts-ignore
          setVisible(
            /**
             * new value for property `visible`
             */
            bVisible: boolean
          ): sap.ui.commons.form.Form;
        }
        /**
         * @SINCE 1.9.1
         * @deprecated (since 1.16.0) - moved to sap.ui.layout library. Please use this one.
         *
         * Used to group form elements.
         */
        class FormContainer extends sap.ui.layout.form.FormContainer {
          /**
           * Constructor for a new form/FormContainer.
           */
          constructor(
            /**
             * id for the new control, generated automatically if no id is given
             */
            sId?: string,
            /**
             * initial settings for the new control
             */
            mSettings?: FormContainerOpts
          );

          /**
           * Creates a new subclass of class sap.ui.commons.form.FormContainer with name `sClassName` and enriches
           * it with the information contained in `oClassInfo`.
           *
           * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.layout.form.FormContainer.extend}.
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
           * Returns a metadata object for class sap.ui.commons.form.FormContainer.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.base.Metadata;
          /**
           * @SINCE 1.12.0
           *
           * Getter for property `visible`. Invisible FormContainers are not rendered.
           *
           * Default value is `true`
           */
          // @ts-ignore
          getVisible(): boolean;
          /**
           * @SINCE 1.12.0
           *
           * Setter for property `visible`.
           *
           * Default value is `true`
           */
          // @ts-ignore
          setVisible(
            /**
             * new value for property `visible`
             */
            bVisible: boolean
          ): sap.ui.commons.form.FormContainer;
        }
        /**
         * @SINCE 1.9.1
         * @deprecated (since 1.16.0) - moved to sap.ui.layout library. Please use this one.
         *
         * A form element is a combination of one label and different controls associated to this label.
         */
        class FormElement extends sap.ui.layout.form.FormElement {
          /**
           * Constructor for a new form/FormElement.
           */
          constructor(
            /**
             * id for the new control, generated automatically if no id is given
             */
            sId?: string,
            /**
             * initial settings for the new control
             */
            mSettings?: FormElementOpts
          );

          /**
           * Creates a new subclass of class sap.ui.commons.form.FormElement with name `sClassName` and enriches it
           * with the information contained in `oClassInfo`.
           *
           * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.layout.form.FormElement.extend}.
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
           * Returns a metadata object for class sap.ui.commons.form.FormElement.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.base.Metadata;
          /**
           * @SINCE 1.12.0
           *
           * Getter for property `visible`. Invisible FormElements are not rendered.
           *
           * Default value is `true`
           */
          // @ts-ignore
          getVisible(): boolean;
          /**
           * @SINCE 1.12.0
           *
           * Setter for property `visible`.
           *
           * Default value is `true`
           */
          // @ts-ignore
          setVisible(
            /**
             * new value for property `visible`
             */
            bVisible: boolean
          ): sap.ui.commons.form.FormElement;
        }
        /**
         * @SINCE 1.9.1
         * @deprecated (since 1.16.0) - moved to sap.ui.layout library. Please use this one.
         *
         * Base layout for Forms. Other Layouts must inherit from this one.
         */
        class FormLayout extends sap.ui.layout.form.FormLayout {
          /**
           * Constructor for a new form/FormLayout.
           */
          constructor(
            /**
             * id for the new control, generated automatically if no id is given
             */
            sId?: string,
            /**
             * initial settings for the new control
             */
            mSettings?: FormLayoutOpts
          );

          /**
           * Creates a new subclass of class sap.ui.commons.form.FormLayout with name `sClassName` and enriches it
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
           * Returns a metadata object for class sap.ui.commons.form.FormLayout.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.base.Metadata;
        }
        /**
         * @SINCE 1.9.1
         * @deprecated (since 1.16.0) - moved to sap.ui.layout library. Please use this one.
         *
         * Grid layout specific properties for FormContainers. The width and height properties of the elements are
         * ignored since the witdh and heights are defined by the grid cells.
         */
        class GridContainerData extends sap.ui.layout.form.GridContainerData {
          /**
           * Constructor for a new form/GridContainerData.
           */
          constructor(
            /**
             * id for the new control, generated automatically if no id is given
             */
            sId?: string,
            /**
             * initial settings for the new control
             */
            mSettings?: GridContainerDataOpts
          );

          /**
           * Creates a new subclass of class sap.ui.commons.form.GridContainerData with name `sClassName` and enriches
           * it with the information contained in `oClassInfo`.
           *
           * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.layout.form.GridContainerData.extend}.
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
           * Returns a metadata object for class sap.ui.commons.form.GridContainerData.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.base.Metadata;
        }
        /**
         * @SINCE 1.9.1
         * @deprecated (since 1.16.0) - moved to sap.ui.layout library. Please use this one.
         *
         * The grid specific layout data for FormElement fields. The width property of the elements is ignored since
         * the width is defined by grid cells.
         */
        class GridElementData extends sap.ui.layout.form.GridElementData {
          /**
           * Constructor for a new form/GridElementData.
           */
          constructor(
            /**
             * id for the new control, generated automatically if no id is given
             */
            sId?: string,
            /**
             * initial settings for the new control
             */
            mSettings?: GridElementDataOpts
          );

          /**
           * Creates a new subclass of class sap.ui.commons.form.GridElementData with name `sClassName` and enriches
           * it with the information contained in `oClassInfo`.
           *
           * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.layout.form.GridElementData.extend}.
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
           * Returns a metadata object for class sap.ui.commons.form.GridElementData.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.base.Metadata;
        }
        /**
         * @SINCE 1.9.1
         * @deprecated (since 1.16.0) - moved to sap.ui.layout library. Please use this one.
         *
         * This Layout implements a guideline 2.0 grid. This can be a 16 column grid or an 8 column grid.
         *
         * To adjust the content inside the GridLayout GridContainerData and GridElementData could be used.
         */
        class GridLayout extends sap.ui.layout.form.GridLayout {
          /**
           * Constructor for a new form/GridLayout.
           */
          constructor(
            /**
             * id for the new control, generated automatically if no id is given
             */
            sId?: string,
            /**
             * initial settings for the new control
             */
            mSettings?: GridLayoutOpts
          );

          /**
           * Creates a new subclass of class sap.ui.commons.form.GridLayout with name `sClassName` and enriches it
           * with the information contained in `oClassInfo`.
           *
           * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.layout.form.GridLayout.extend}.
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
           * Returns a metadata object for class sap.ui.commons.form.GridLayout.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.base.Metadata;
        }
        /**
         * @SINCE 1.10.0
         * @deprecated (since 1.16.0) - moved to sap.ui.layout library. Please use this one.
         *
         * Renders a form with responsive layout. Internally the ResponsiveFlowLayout is used.
         */
        class ResponsiveLayout extends sap.ui.layout.form.ResponsiveLayout {
          /**
           * Constructor for a new form/ResponsiveLayout.
           */
          constructor(
            /**
             * id for the new control, generated automatically if no id is given
             */
            sId?: string,
            /**
             * initial settings for the new control
             */
            mSettings?: ResponsiveLayoutOpts
          );

          /**
           * Creates a new subclass of class sap.ui.commons.form.ResponsiveLayout with name `sClassName` and enriches
           * it with the information contained in `oClassInfo`.
           *
           * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.layout.form.ResponsiveLayout.extend}.
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
           * Returns a metadata object for class sap.ui.commons.form.ResponsiveLayout.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.base.Metadata;
        }
        /**
         * @SINCE 1.12
         * @deprecated (since 1.16.0) - moved to sap.ui.layout library. Please use this one.
         *
         * Use the SimpleForm to create a form based on title, label and fields that are stacked in the content
         * aggregation. Add Title to start a new FormContainer(Group). Add Label to start a new row in the container.
         * Add Input/Display controls as needed. Use LayoutData to influence the layout for special cases in the
         * Input/Display controls.
         */
        class SimpleForm extends sap.ui.layout.form.SimpleForm {
          /**
           * Constructor for a new form/SimpleForm.
           */
          constructor(
            /**
             * id for the new control, generated automatically if no id is given
             */
            sId?: string,
            /**
             * initial settings for the new control
             */
            mSettings?: SimpleFormOpts
          );

          /**
           * Creates a new subclass of class sap.ui.commons.form.SimpleForm with name `sClassName` and enriches it
           * with the information contained in `oClassInfo`.
           *
           * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.layout.form.SimpleForm.extend}.
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
           * @SINCE 1.14
           *
           * Getter for property `layout`. The FormLayout that is used to render the SimpleForm
           *
           * Default value is `ResponsiveLayout`
           */
          // @ts-ignore
          getLayout(): any;
          /**
           * Returns a metadata object for class sap.ui.commons.form.SimpleForm.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.base.Metadata;
          /**
           * @SINCE 1.14
           *
           * Setter for property `layout`.
           *
           * Default value is `ResponsiveLayout`
           */
          // @ts-ignore
          setLayout(
            /**
             * new value for property `layout`
             */
            oLayout: any
          ): sap.ui.commons.form.SimpleForm;
        }
      }
      /**
       * @deprecated (since 1.38)
       */
      namespace layout {
        interface AbsoluteLayoutOpts extends sap.ui.core.ControlOpts {
          /**
           * The overall width of the control. When not set, 100% is automatically set.
           */
          width?: sap.ui.core.CSSSize;

          /**
           * The overall height of the control. When not set, 100% is automatically set.
           */
          height?: sap.ui.core.CSSSize;

          /**
           * 'Auto', 'Scroll', 'Hidden', and 'None' are the available values for setting the vertical scrolling mode.
           */
          verticalScrolling?: sap.ui.core.Scrolling;

          /**
           * 'Auto', 'Scroll', 'Hidden', and 'None' are the available values for setting the vertical scrolling mode.
           */
          horizontalScrolling?: sap.ui.core.Scrolling;

          /**
           * Positioned child controls within the layout
           */
          positions?:
            | sap.ui.commons.layout.PositionContainer[]
            | sap.ui.commons.layout.PositionContainer;
        }

        interface BorderLayoutOpts extends sap.ui.core.ControlOpts {
          /**
           * @deprecated (since 1.5.2) - replaced by the global configuration for the page
           *
           * The RTL setting swaps the areas Begin and End.
           */
          rtl?: boolean;

          /**
           * Defines the overall width of the layout
           */
          width?: sap.ui.core.CSSSize;

          /**
           * Defines the overall height of the layout
           */
          height?: sap.ui.core.CSSSize;

          /**
           * Represents the Top area
           */
          top?: sap.ui.commons.layout.BorderLayoutArea;

          /**
           * Represents the Begin area
           */
          begin?: sap.ui.commons.layout.BorderLayoutArea;

          /**
           * Represents the Center area
           */
          center?: sap.ui.commons.layout.BorderLayoutArea;

          /**
           * Represents the End area
           */
          end?: sap.ui.commons.layout.BorderLayoutArea;

          /**
           * Represents the Bottom area
           */
          bottom?: sap.ui.commons.layout.BorderLayoutArea;
        }

        interface BorderLayoutAreaOpts extends sap.ui.core.ElementOpts {
          /**
           * @deprecated (since 1.3.3) - Redundant to the aggregation by the parent border layout.
           *
           * Defines which area the element represents: top, begin, center, end, bottom
           */
          areaId?: sap.ui.commons.layout.BorderLayoutAreaTypes;

          /**
           * The overflow mode of the area in horizontal direction as CSS value
           */
          overflowX?: string;

          /**
           * The overflow mode of the area in vertical direction as CSS value
           */
          overflowY?: string;

          /**
           * The content alignment as CSS value
           */
          contentAlign?: string;

          /**
           * Defines the height or the width. Is not used when the area element is in Center.
           */
          size?: sap.ui.core.CSSSize;

          /**
           * Invisible controls are not rendered
           */
          visible?: boolean;

          /**
           * Controls within the area
           */
          content?: sap.ui.core.Control[] | sap.ui.core.Control;
        }

        interface HorizontalLayoutOpts
          extends sap.ui.layout.HorizontalLayoutOpts {}

        interface MatrixLayoutOpts extends sap.ui.core.ControlOpts {
          /**
           * CSS width of the matrix layout. If the LayoutFixed = true an adequate width should be provided.
           */
          width?: sap.ui.core.CSSSize;

          /**
           * CSS height of the matrix layout.
           */
          height?: sap.ui.core.CSSSize;

          /**
           * Sets the table layout. If fixed the width parameter of a column has priority, if not the width of the
           * content of the colums has priority. The default is "fixed". If the fixed layout is used an adequate width
           * of the MatrixLayout should be provided. Otherwise the column width displayed could be different than
           * the given ones because of browser dependend optimazations.
           */
          layoutFixed?: boolean;

          /**
           * Number of columns. If not specified, the number of columns will be determined from the given cells.
           */
          columns?: number;

          /**
           * Widths of the columns. Use an array to define the widths of the columns. If a column shall have an automatical
           * sizing enter "auto" for this column width.
           */
          widths?: sap.ui.core.CSSSize[];

          /**
           * The matrix layout's individual rows.
           */
          rows?:
            | sap.ui.commons.layout.MatrixLayoutRow[]
            | sap.ui.commons.layout.MatrixLayoutRow;
        }

        interface MatrixLayoutCellOpts extends sap.ui.core.ElementOpts {
          /**
           * Determines the matrix layout cell's background design.
           */
          backgroundDesign?: sap.ui.commons.layout.BackgroundDesign;

          /**
           * Determines how many columns of the underlying grid structure are occupied by this matrix layout cell.
           */
          colSpan?: number;

          /**
           * Determines the horizontal alignment of the matrix layout cell's content with the cell's borders.
           */
          hAlign?: sap.ui.commons.layout.HAlign;

          /**
           * Determines the padding of the matrix layout cell's content within the cell's borders. The default value
           * is appropriate for all cells in a form-like layout. Consider to remove the padding on the outer layout
           * in case of nesting.
           */
          padding?: sap.ui.commons.layout.Padding;

          /**
           * Determines how many rows of the underlying grid structure are occupied by this matrix layout cell. In
           * case a row-height is used, all rows affected by the RowSpan must have the same unit.
           */
          rowSpan?: number;

          /**
           * Determines how a matrix layout cell is separated from its predecessor, via a vertical gutter of variable
           * width, with or without a vertical line.
           */
          separation?: sap.ui.commons.layout.Separation;

          /**
           * Determines the vertical alignment of the matrix layout cell's content with the cell's borders.
           */
          vAlign?: sap.ui.commons.layout.VAlign;

          /**
           * The matrix layout cell's content (arbitrary controls).
           *
           * If the matrix row has a defined height and the matrix has layoutFixed = true, the controls inside of
           * a cell should all use the same unit for its height property.
           */
          content?: sap.ui.core.Control[] | sap.ui.core.Control;
        }

        interface MatrixLayoutRowOpts extends sap.ui.core.ElementOpts {
          /**
           * Height of the row.
           */
          height?: sap.ui.core.CSSSize;

          /**
           * The matrix layout row's individual cells.
           */
          cells?:
            | sap.ui.commons.layout.MatrixLayoutCell[]
            | sap.ui.commons.layout.MatrixLayoutCell;
        }

        interface PositionContainerOpts extends sap.ui.core.ElementOpts {
          /**
           * Defines the distance to the top of the layout (as specified in HTML)
           */
          top?: sap.ui.core.CSSSize;

          /**
           * Defines the distance to the bottom of the layout (as specified in HTML)
           */
          bottom?: sap.ui.core.CSSSize;

          /**
           * Defines the distance to the left of the layout (as specified in HTML)
           */
          left?: sap.ui.core.CSSSize;

          /**
           * Defines the distance to the right of the layout (as specified in HTML)
           */
          right?: sap.ui.core.CSSSize;

          /**
           * Indicates whether this container shall be centered horizontally within the AbsoluteLayout area. The values
           * of the attributes left and right are ignored when this feature is activated.
           */
          centerHorizontally?: boolean;

          /**
           * Indicates whether this container should be centered vertically within the AbsoluteLayout area. The values
           * of the attributes top and bottom are ignored when this feature is activated.
           */
          centerVertically?: boolean;

          /**
           * Child control of the position container
           */
          control?: sap.ui.core.Control;
        }

        interface ResponsiveFlowLayoutOpts
          extends sap.ui.layout.ResponsiveFlowLayoutOpts {}

        interface ResponsiveFlowLayoutDataOpts
          extends sap.ui.layout.ResponsiveFlowLayoutDataOpts {}

        interface VerticalLayoutOpts extends sap.ui.layout.VerticalLayoutOpts {}
        /**
         * @deprecated (since 1.38)
         *
         * The Absolute Layout positions its child controls absolutely
         */
        class AbsoluteLayout extends sap.ui.core.Control {
          /**
           * Constructor for a new layout/AbsoluteLayout.
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
            mSettings?: AbsoluteLayoutOpts
          );

          /**
           * Adds the given control and a corresponding position container into the aggregation named 'positions'.
           * Returns 'this' to allow method chaining.
           */
          addContent(
            /**
             * The content to add; if empty, nothing is inserted.
             */
            oContent: sap.ui.core.Control,
            /**
             * JSON-like object which defines the position of the child control in the layout. The object is expected
             * to have one or more from the attribute set top, bottom, left, right; each with a value of type sap.ui.core.CSSSize.
             * If no object is given, the default is left=0px,right=0px
             */
            oPos: object
          ): sap.ui.commons.layout.AbsoluteLayout;
          /**
           * Adds element to the layout.
           */
          addPosition(
            /**
             * Element which must be positioned in the layout.
             */
            oPosition: object
          ): sap.ui.commons.layout.AbsoluteLayout;
          /**
           * Destroys all aggregated position containers and their child controls. Returns 'this' to allow method
           * chaining.
           */
          destroyContent(): sap.ui.commons.layout.AbsoluteLayout;
          /**
           * Destroys all elements from the layout.
           */
          destroyPositions(): sap.ui.commons.layout.AbsoluteLayout;
          /**
           * Creates a new subclass of class sap.ui.commons.layout.AbsoluteLayout with name `sClassName` and enriches
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
           * Returns an array of the controls contained in the aggregated position containers (might be empty).
           */
          getContent(): sap.ui.core.Control[];
          /**
           * Gets current value of property {@link #getHeight height}.
           *
           * The overall height of the control. When not set, 100% is automatically set.
           *
           * Default value is `100%`.
           */
          getHeight(): sap.ui.core.CSSSize;
          /**
           * Gets current value of property {@link #getHorizontalScrolling horizontalScrolling}.
           *
           * 'Auto', 'Scroll', 'Hidden', and 'None' are the available values for setting the vertical scrolling mode.
           *
           * Default value is `Hidden`.
           */
          getHorizontalScrolling(): sap.ui.core.Scrolling;
          /**
           * Returns a metadata object for class sap.ui.commons.layout.AbsoluteLayout.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.base.Metadata;
          /**
           * Gets content of aggregation {@link #getPositions positions}.
           *
           * Positioned child controls within the layout
           */
          getPositions(): sap.ui.commons.layout.PositionContainer[];
          /**
           * Gets current value of property {@link #getVerticalScrolling verticalScrolling}.
           *
           * 'Auto', 'Scroll', 'Hidden', and 'None' are the available values for setting the vertical scrolling mode.
           *
           * Default value is `Hidden`.
           */
          getVerticalScrolling(): sap.ui.core.Scrolling;
          /**
           * Gets current value of property {@link #getWidth width}.
           *
           * The overall width of the control. When not set, 100% is automatically set.
           *
           * Default value is `100%`.
           */
          getWidth(): sap.ui.core.CSSSize;
          /**
           * Checks for the provided sap.ui.core.Control in the aggregated position containers, and returns the index
           * of the container in the positions aggregation if found, or '-1' otherwise.
           */
          indexOfContent(
            /**
             * The content of which the index is looked for
             */
            oContent: sap.ui.core.Control
          ): number;
          /**
           * Checks for the provided `sap.ui.commons.layout.PositionContainer` in the aggregation {@link #getPositions
           * positions}. and returns its index if found or -1 otherwise.
           */
          indexOfPosition(
            /**
             * The position whose index is looked for
             */
            oPosition: sap.ui.commons.layout.PositionContainer
          ): number;
          /**
           * Inserts the given control and a corresponding position container into the aggregation named 'positions'.
           * Returns 'this' to allow method chaining.
           */
          insertContent(
            /**
             * The content to insert; if empty, nothing is inserted
             */
            oContent: sap.ui.core.Control,
            /**
             * The '0'-based index where the content shall be inserted at. For a negative value of iIndex, the content
             * is inserted at position '0'; for a value greater than the current size of the aggregation, the content
             * is inserted at the last position.
             */
            iIndex: number,
            /**
             * JSON-like object which defines the position of the child control within the layout. The object is expected
             * to have one or more from the attribute set top, bottom, left, right; each with a value of type sap.ui.core.CSSSize.
             * If no object is given, the default is left=0px,right=0px.
             */
            oPos: object
          ): sap.ui.commons.layout.AbsoluteLayout;
          /**
           * Inserts element to the layout on a specific index.
           */
          insertPosition(
            /**
             * Element which must be positioned in the layout.
             */
            oPosition: object,
            /**
             * Index of the element which is to be positioned.
             */
            iIndex: number
          ): sap.ui.commons.layout.AbsoluteLayout;
          /**
           * Removes all aggregated position containers. Returns an array of the controls contained in the removed
           * position containers (might be empty).
           */
          removeAllContent(): sap.ui.core.Control[];
          /**
           * Removes all elements from the layout.
           */
          removeAllPositions(): object;
          /**
           * Removes the given control and its corresponding position container from the aggregation named 'positions'.
           */
          removeContent(
            /**
             * The content control to remove, its ID, or the index of the corresponding position container in the 'positions'
             * aggregation.
             */
            oContent: object
          ): sap.ui.core.Control;
          /**
           * Removes element from the layout.
           */
          removePosition(
            /**
             * Element which must be removed from the positions element within the layout.
             */
            vPosition: any
          ): object;
          /**
           * Sets the `height` property.
           */
          setHeight(
            /**
             * The passed height of the control.
             */
            sHeight: string
          ): sap.ui.commons.layout.AbsoluteLayout;
          /**
           * Sets the `horizontalScrolling` property.
           */
          setHorizontalScrolling(
            /**
             * Object that contains settings for Horizontal scrolling.
             */
            oHorizontalScrolling: object
          ): sap.ui.commons.layout.AbsoluteLayout;
          /**
           * Allows to set or change the position information of the given child control
           */
          setPositionOfChild(
            /**
             * The child control for which to change the position information; if empty or not aggregated, nothing is
             * changed
             */
            oControl: sap.ui.core.Control,
            /**
             * JSON-like object which defines the position of the child control. The object is expected to have one
             * or more from the attribute set top, bottom, left, right; each with a value of type sap.ui.core.CSSSize.
             * If no object is given, the default is used which is left=0px,right=0px.
             */
            oPos: object
          ): boolean;
          /**
           * Sets the `verticalScrolling` property.
           */
          setVerticalScrolling(
            /**
             * Object that contains settings for Vertical scrolling.
             */
            oVerticalScrolling: object
          ): sap.ui.commons.layout.AbsoluteLayout;
          /**
           * Sets the `width` property.
           */
          setWidth(
            /**
             * The passed width of the control.
             */
            sWidth: string
          ): sap.ui.commons.layout.AbsoluteLayout;
        }
        /**
         * @deprecated (since 1.38) - replaced by {@link sap.m.Page}
         *
         * Based upon the border layout as it comes with the Java standard. Using this layout, you are able to divide
         * your available UI space into five areas whose sizes can be defined. These areas are: Top: Header; Bottom:
         * Footer; Begin: Left/right-hand side panel; Center: Content area in the middle; End: Right/left-hand side
         * panel.
         */
        class BorderLayout extends sap.ui.core.Control {
          /**
           * Constructor for a new layout/BorderLayout.
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
            mSettings?: BorderLayoutOpts
          );

          /**
           * Adds controls to the specified area.
           */
          addContent(
            /**
             * Specifies the area where controls will be added
             */
            sAreaId: sap.ui.commons.layout.BorderLayoutAreaTypes
          ): sap.ui.commons.layout.BorderLayout;
          /**
           * Creates the specified area and adds the given controls to it. Returns the created area.
           */
          createArea(
            /**
             * Specifies which area will be created. If the area is already available, the method call is ignored.
             */
            sAreaId: sap.ui.commons.layout.BorderLayoutAreaTypes,
            /**
             * Any number of controls can be submitted to be added to the newly created area; where each control is
             * submitted as one argument.
             */
            oContent: sap.ui.core.Control
          ): sap.ui.commons.layout.BorderLayoutArea;
          /**
           * Destroys the begin in the aggregation {@link #getBegin begin}.
           */
          destroyBegin(): sap.ui.commons.layout.BorderLayout;
          /**
           * Destroys the bottom in the aggregation {@link #getBottom bottom}.
           */
          destroyBottom(): sap.ui.commons.layout.BorderLayout;
          /**
           * Destroys the center in the aggregation {@link #getCenter center}.
           */
          destroyCenter(): sap.ui.commons.layout.BorderLayout;
          /**
           * Destroys the content of the specified area.
           */
          destroyContent(
            /**
             * Specifies the area whose content will be destroyed
             */
            sAreaId: sap.ui.commons.layout.BorderLayoutAreaTypes
          ): sap.ui.commons.layout.BorderLayout;
          /**
           * Destroys the end in the aggregation {@link #getEnd end}.
           */
          destroyEnd(): sap.ui.commons.layout.BorderLayout;
          /**
           * Destroys the top in the aggregation {@link #getTop top}.
           */
          destroyTop(): sap.ui.commons.layout.BorderLayout;
          /**
           * Creates a new subclass of class sap.ui.commons.layout.BorderLayout with name `sClassName` and enriches
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
           * Returns the area of the given type. If the area does not exist, it will be created when create is set
           * to true.
           */
          getArea(
            /**
             * The aria ID
             */
            sAreaId: sap.ui.commons.layout.BorderLayoutAreaTypes,
            /**
             * Whether the aria must be created
             */
            bCreate: boolean
          ): sap.ui.commons.layout.BorderLayoutArea;
          /**
           * Returns the object of the specified area. If the area does not exist, the area will be created and returned.
           */
          getAreaById(
            /**
             * Specifies the area whose object will be returned.
             */
            sAreaId: sap.ui.commons.layout.BorderLayoutAreaTypes
          ): sap.ui.commons.layout.BorderLayoutArea;
          /**
           * Returns a JSON-like object that contains all property values of the requested area.
           */
          getAreaData(
            /**
             * Specifies the area whose data will be returned
             */
            sAreaId: sap.ui.commons.layout.BorderLayoutAreaTypes
          ): object;
          /**
           * Gets content of aggregation {@link #getBegin begin}.
           *
           * Represents the Begin area
           */
          getBegin(): sap.ui.commons.layout.BorderLayoutArea;
          /**
           * Gets content of aggregation {@link #getBottom bottom}.
           *
           * Represents the Bottom area
           */
          getBottom(): sap.ui.commons.layout.BorderLayoutArea;
          /**
           * Gets content of aggregation {@link #getCenter center}.
           *
           * Represents the Center area
           */
          getCenter(): sap.ui.commons.layout.BorderLayoutArea;
          /**
           * Returns all controls inside the specified area inside an array.
           */
          getContent(
            /**
             * Specifies the area whose content controls shall be returned.
             */
            sAreaId: sap.ui.commons.layout.BorderLayoutAreaTypes
          ): sap.ui.core.Control[];
          /**
           * Gets content of aggregation {@link #getEnd end}.
           *
           * Represents the End area
           */
          getEnd(): sap.ui.commons.layout.BorderLayoutArea;
          /**
           * Gets current value of property {@link #getHeight height}.
           *
           * Defines the overall height of the layout
           *
           * Default value is `100%`.
           */
          getHeight(): sap.ui.core.CSSSize;
          /**
           * Returns a metadata object for class sap.ui.commons.layout.BorderLayout.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.base.Metadata;
          /**
           * @deprecated (since 1.5.2) - replaced by the global configuration for the page
           *
           * Gets current value of property {@link #getRtl rtl}.
           *
           * The RTL setting swaps the areas Begin and End.
           *
           * Default value is `false`.
           */
          getRtl(): boolean;
          /**
           * Gets content of aggregation {@link #getTop top}.
           *
           * Represents the Top area
           */
          getTop(): sap.ui.commons.layout.BorderLayoutArea;
          /**
           * Gets current value of property {@link #getWidth width}.
           *
           * Defines the overall width of the layout
           *
           * Default value is `100%`.
           */
          getWidth(): sap.ui.core.CSSSize;
          /**
           * Determines the index of a given content control.
           */
          indexOfContent(
            /**
             * Specifies the area that will be searched
             */
            sAreaId: sap.ui.commons.layout.BorderLayoutAreaTypes,
            /**
             * Specifies the control whose index will be searched
             */
            oContent: sap.ui.core.Control
          ): number;
          /**
           * Inserts controls to an area at a given index.
           */
          insertContent(
            /**
             * Specifies the area where the controls shall be inserted.
             */
            sAreaId: sap.ui.commons.layout.BorderLayoutAreaTypes,
            /**
             * Specifies the index where the controls shall be added. For a negative value of iIndex, the content is
             * inserted at position '0'; for a value greater than the current size of the aggregation, the content is
             * inserted at the last position.
             */
            iIndex: number
          ): sap.ui.commons.layout.BorderLayout;
          /**
           * Removes all content from an area.
           */
          removeAllContent(
            /**
             * Specifies the area whose content shall be removed
             */
            sAreaId: sap.ui.commons.layout.BorderLayoutAreaTypes
          ): sap.ui.commons.layout.BorderLayout;
          /**
           * Removes the content with the given index from an area.
           */
          removeContent(
            /**
             * Specifies the area whose content shall be removed
             */
            oAreaId: sap.ui.commons.layout.BorderLayoutAreaTypes,
            /**
             * The content to be removed Specifies the control that shall be removed
             */
            vElement: any
          ): sap.ui.commons.layout.BorderLayout;
          /**
           * Sets the properties of the specified area with the given values.
           */
          setAreaData(
            /**
             * Specifies the area whose properties will be set
             */
            sAreaId: sap.ui.commons.layout.BorderLayoutAreaTypes,
            /**
             * JSON-like object that contains the values to be set
             */
            oData: object
          ): sap.ui.commons.layout.BorderLayout;
          /**
           * Sets the aggregated {@link #getBegin begin}.
           */
          setBegin(
            /**
             * The begin to set
             */
            oBegin: sap.ui.commons.layout.BorderLayoutArea
          ): sap.ui.commons.layout.BorderLayout;
          /**
           * Sets the aggregated {@link #getBottom bottom}.
           */
          setBottom(
            /**
             * The bottom to set
             */
            oBottom: sap.ui.commons.layout.BorderLayoutArea
          ): sap.ui.commons.layout.BorderLayout;
          /**
           * Sets the aggregated {@link #getCenter center}.
           */
          setCenter(
            /**
             * The center to set
             */
            oCenter: sap.ui.commons.layout.BorderLayoutArea
          ): sap.ui.commons.layout.BorderLayout;
          /**
           * Sets the aggregated {@link #getEnd end}.
           */
          setEnd(
            /**
             * The end to set
             */
            oEnd: sap.ui.commons.layout.BorderLayoutArea
          ): sap.ui.commons.layout.BorderLayout;
          /**
           * Sets a new value for property {@link #getHeight height}.
           *
           * Defines the overall height of the layout
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
          ): sap.ui.commons.layout.BorderLayout;
          /**
           * @deprecated (since 1.5.2) - replaced by the global configuration for the page
           *
           * Sets a new value for property {@link #getRtl rtl}.
           *
           * The RTL setting swaps the areas Begin and End.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `false`.
           */
          setRtl(
            /**
             * New value for property `rtl`
             */
            bRtl: boolean
          ): sap.ui.commons.layout.BorderLayout;
          /**
           * Sets the aggregated {@link #getTop top}.
           */
          setTop(
            /**
             * The top to set
             */
            oTop: sap.ui.commons.layout.BorderLayoutArea
          ): sap.ui.commons.layout.BorderLayout;
          /**
           * Sets a new value for property {@link #getWidth width}.
           *
           * Defines the overall width of the layout
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
          ): sap.ui.commons.layout.BorderLayout;
        }
        /**
         * @deprecated (since 1.38) - Instead, use the `sap.m.Page` control.
         *
         * The BorderLayoutArea represents one area of a BorderLayout
         */
        class BorderLayoutArea extends sap.ui.core.Element {
          /**
           * Constructor for a new layout/BorderLayoutArea.
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
            mSettings?: BorderLayoutAreaOpts
          );

          /**
           * Adds some content to the aggregation {@link #getContent content}.
           */
          addContent(
            /**
             * The content to add; if empty, nothing is inserted
             */
            oContent: sap.ui.core.Control
          ): sap.ui.commons.layout.BorderLayoutArea;
          /**
           * Destroys all the content in the aggregation {@link #getContent content}.
           */
          destroyContent(): sap.ui.commons.layout.BorderLayoutArea;
          /**
           * Creates a new subclass of class sap.ui.commons.layout.BorderLayoutArea with name `sClassName` and enriches
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
           * @deprecated (since 1.3.3) - Redundant to the aggregation by the parent border layout.
           *
           * Gets current value of property {@link #getAreaId areaId}.
           *
           * Defines which area the element represents: top, begin, center, end, bottom
           *
           * Default value is `top`.
           */
          getAreaId(): sap.ui.commons.layout.BorderLayoutAreaTypes;
          /**
           * Gets content of aggregation {@link #getContent content}.
           *
           * Controls within the area
           */
          getContent(): sap.ui.core.Control[];
          /**
           * Gets current value of property {@link #getContentAlign contentAlign}.
           *
           * The content alignment as CSS value
           *
           * Default value is `left`.
           */
          getContentAlign(): string;
          /**
           * Returns a metadata object for class sap.ui.commons.layout.BorderLayoutArea.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.base.Metadata;
          /**
           * Gets current value of property {@link #getOverflowX overflowX}.
           *
           * The overflow mode of the area in horizontal direction as CSS value
           *
           * Default value is `auto`.
           */
          getOverflowX(): string;
          /**
           * Gets current value of property {@link #getOverflowY overflowY}.
           *
           * The overflow mode of the area in vertical direction as CSS value
           *
           * Default value is `auto`.
           */
          getOverflowY(): string;
          /**
           * Gets current value of property {@link #getSize size}.
           *
           * Defines the height or the width. Is not used when the area element is in Center.
           *
           * Default value is `100px`.
           */
          getSize(): sap.ui.core.CSSSize;
          /**
           * Gets current value of property {@link #getVisible visible}.
           *
           * Invisible controls are not rendered
           *
           * Default value is `true`.
           */
          getVisible(): boolean;
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
          ): sap.ui.commons.layout.BorderLayoutArea;
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
           * @deprecated (since 1.3.3) - Redundant to the aggregation by the parent border layout.
           *
           * Sets a new value for property {@link #getAreaId areaId}.
           *
           * Defines which area the element represents: top, begin, center, end, bottom
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `top`.
           */
          setAreaId(
            /**
             * New value for property `areaId`
             */
            sAreaId: sap.ui.commons.layout.BorderLayoutAreaTypes
          ): sap.ui.commons.layout.BorderLayoutArea;
          /**
           * Sets a new value for property {@link #getContentAlign contentAlign}.
           *
           * The content alignment as CSS value
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `left`.
           */
          setContentAlign(
            /**
             * New value for property `contentAlign`
             */
            sContentAlign: string
          ): sap.ui.commons.layout.BorderLayoutArea;
          /**
           * Sets a new value for property {@link #getOverflowX overflowX}.
           *
           * The overflow mode of the area in horizontal direction as CSS value
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `auto`.
           */
          setOverflowX(
            /**
             * New value for property `overflowX`
             */
            sOverflowX: string
          ): sap.ui.commons.layout.BorderLayoutArea;
          /**
           * Sets a new value for property {@link #getOverflowY overflowY}.
           *
           * The overflow mode of the area in vertical direction as CSS value
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `auto`.
           */
          setOverflowY(
            /**
             * New value for property `overflowY`
             */
            sOverflowY: string
          ): sap.ui.commons.layout.BorderLayoutArea;
          /**
           * Sets a new value for property {@link #getSize size}.
           *
           * Defines the height or the width. Is not used when the area element is in Center.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `100px`.
           */
          setSize(
            /**
             * New value for property `size`
             */
            sSize: sap.ui.core.CSSSize
          ): sap.ui.commons.layout.BorderLayoutArea;
          /**
           * Sets a new value for property {@link #getVisible visible}.
           *
           * Invisible controls are not rendered
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
          ): sap.ui.commons.layout.BorderLayoutArea;
        }
        /**
         * @deprecated (since 1.38) - Instead, use the `sap.ui.layout.HorizontalLayout` control.
         *
         * A layout that provides support for horizontal alignment of controls
         */
        class HorizontalLayout extends sap.ui.layout.HorizontalLayout {
          /**
           * Constructor for a new layout/HorizontalLayout.
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
           * Creates a new subclass of class sap.ui.commons.layout.HorizontalLayout with name `sClassName` and enriches
           * it with the information contained in `oClassInfo`.
           *
           * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.layout.HorizontalLayout.extend}.
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
           * Returns a metadata object for class sap.ui.commons.layout.HorizontalLayout.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.base.Metadata;
        }
        /**
         * @deprecated (since 1.38) - Instead, use the `sap.ui.layout.Grid` control.
         *
         *  A matrix layout arranges controls in a grid structure, using rows which need not have the same number
         * of cells.
         *
         *  It uses predefined cell classes that guarantee appropriate distances between cells in the grid. The
         * cell's `vGutter` property lets you specify additional horizontal distances easily. You can set these
         * additional distances (known as gutters) with or without separators. The distance for each cell is specified
         * by assigning a specific enumeration value of the class `LayoutCellSeparator` of the matrix data object.
         *
         *
         *  You should **avoid nesting** matrix layouts. You should only use a matrix layout if you need to align
         * controls horizontally across rows.
         */
        class MatrixLayout extends sap.ui.core.Control {
          /**
           * Constructor for a new layout/MatrixLayout.
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
            mSettings?: MatrixLayoutOpts
          );

          /**
           * Adds some row to the aggregation {@link #getRows rows}.
           */
          addRow(
            /**
             * The row to add; if empty, nothing is inserted
             */
            oRow: sap.ui.commons.layout.MatrixLayoutRow
          ): sap.ui.commons.layout.MatrixLayout;
          /**
           * Creates a new matrix layout row and appends it to this matrix layout.
           *
           * Each argument must be either a matrix layout cell, which is added to the row "as is", or an arbitrary
           * content control, which is wrapped with a new (default) matrix layout cell first and then added to the
           * row.
           */
          createRow(): sap.ui.commons.layout.MatrixLayout;
          /**
           * Destroys all the rows in the aggregation {@link #getRows rows}.
           */
          destroyRows(): sap.ui.commons.layout.MatrixLayout;
          /**
           * Creates a new subclass of class sap.ui.commons.layout.MatrixLayout with name `sClassName` and enriches
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
           * Gets current value of property {@link #getColumns columns}.
           *
           * Number of columns. If not specified, the number of columns will be determined from the given cells.
           */
          getColumns(): number;
          /**
           * Gets current value of property {@link #getHeight height}.
           *
           * CSS height of the matrix layout.
           */
          getHeight(): sap.ui.core.CSSSize;
          /**
           * Gets current value of property {@link #getLayoutFixed layoutFixed}.
           *
           * Sets the table layout. If fixed the width parameter of a column has priority, if not the width of the
           * content of the colums has priority. The default is "fixed". If the fixed layout is used an adequate width
           * of the MatrixLayout should be provided. Otherwise the column width displayed could be different than
           * the given ones because of browser dependend optimazations.
           *
           * Default value is `true`.
           */
          getLayoutFixed(): boolean;
          /**
           * Returns a metadata object for class sap.ui.commons.layout.MatrixLayout.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.base.Metadata;
          /**
           * Gets content of aggregation {@link #getRows rows}.
           *
           * The matrix layout's individual rows.
           */
          getRows(): sap.ui.commons.layout.MatrixLayoutRow[];
          /**
           * Gets current value of property {@link #getWidth width}.
           *
           * CSS width of the matrix layout. If the LayoutFixed = true an adequate width should be provided.
           */
          getWidth(): sap.ui.core.CSSSize;
          /**
           * Gets current value of property {@link #getWidths widths}.
           *
           * Widths of the columns. Use an array to define the widths of the columns. If a column shall have an automatical
           * sizing enter "auto" for this column width.
           */
          getWidths(): sap.ui.core.CSSSize[];
          /**
           * Checks for the provided `sap.ui.commons.layout.MatrixLayoutRow` in the aggregation {@link #getRows rows}.
           * and returns its index if found or -1 otherwise.
           */
          indexOfRow(
            /**
             * The row whose index is looked for
             */
            oRow: sap.ui.commons.layout.MatrixLayoutRow
          ): number;
          /**
           * Inserts a row into the aggregation {@link #getRows rows}.
           */
          insertRow(
            /**
             * The row to insert; if empty, nothing is inserted
             */
            oRow: sap.ui.commons.layout.MatrixLayoutRow,
            /**
             * The `0`-based index the row should be inserted at; for a negative value of `iIndex`, the row is inserted
             * at position 0; for a value greater than the current size of the aggregation, the row is inserted at the
             * last position
             */
            iIndex: number
          ): sap.ui.commons.layout.MatrixLayout;
          /**
           * Removes all the controls from the aggregation {@link #getRows rows}.
           *
           * Additionally, it unregisters them from the hosting UIArea.
           */
          removeAllRows(): sap.ui.commons.layout.MatrixLayoutRow[];
          /**
           * Removes a row from the aggregation {@link #getRows rows}.
           */
          removeRow(
            /**
             * The row to remove or its index or id
             */
            vRow: number | string | sap.ui.commons.layout.MatrixLayoutRow
          ): sap.ui.commons.layout.MatrixLayoutRow;
          /**
           * Sets a new value for property {@link #getColumns columns}.
           *
           * Number of columns. If not specified, the number of columns will be determined from the given cells.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setColumns(
            /**
             * New value for property `columns`
             */
            iColumns: number
          ): sap.ui.commons.layout.MatrixLayout;
          /**
           * Sets a new value for property {@link #getHeight height}.
           *
           * CSS height of the matrix layout.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setHeight(
            /**
             * New value for property `height`
             */
            sHeight: sap.ui.core.CSSSize
          ): sap.ui.commons.layout.MatrixLayout;
          /**
           * Sets a new value for property {@link #getLayoutFixed layoutFixed}.
           *
           * Sets the table layout. If fixed the width parameter of a column has priority, if not the width of the
           * content of the colums has priority. The default is "fixed". If the fixed layout is used an adequate width
           * of the MatrixLayout should be provided. Otherwise the column width displayed could be different than
           * the given ones because of browser dependend optimazations.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `true`.
           */
          setLayoutFixed(
            /**
             * New value for property `layoutFixed`
             */
            bLayoutFixed: boolean
          ): sap.ui.commons.layout.MatrixLayout;
          /**
           * Sets a new value for property {@link #getWidth width}.
           *
           * CSS width of the matrix layout. If the LayoutFixed = true an adequate width should be provided.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setWidth(
            /**
             * New value for property `width`
             */
            sWidth: sap.ui.core.CSSSize
          ): sap.ui.commons.layout.MatrixLayout;
          /**
           * Sets a new value for property {@link #getWidths widths}.
           *
           * Widths of the columns. Use an array to define the widths of the columns. If a column shall have an automatical
           * sizing enter "auto" for this column width.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setWidths(
            /**
             * New value for property `widths`
             */
            sWidths: sap.ui.core.CSSSize[]
          ): sap.ui.commons.layout.MatrixLayout;
        }
        /**
         * @deprecated (since 1.38) - Instead, use the `sap.ui.layout.Grid` control.
         *
         * Non-control element used as part of a matrix layout's inner structure.
         */
        class MatrixLayoutCell extends sap.ui.core.Element {
          /**
           * Constructor for a new layout/MatrixLayoutCell.
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
            mSettings?: MatrixLayoutCellOpts
          );

          /**
           * Adds some content to the aggregation {@link #getContent content}.
           */
          addContent(
            /**
             * The content to add; if empty, nothing is inserted
             */
            oContent: sap.ui.core.Control
          ): sap.ui.commons.layout.MatrixLayoutCell;
          /**
           * The string given as "sStyleClass" will be added to the "class" attribute of this element's root HTML
           * element.
           *
           * This method is intended to be used to mark controls as being of a special type for which special styling
           * can be provided using CSS selectors that reference this style class name.
           *
           *
           * ```javascript
           *
           * Example:
           * myButton.addStyleClass("myRedTextButton"); // add a CSS class to one button instance
           *
           * ...and in CSS:
           * .myRedTextButton {
           * color: red;
           * }
           * ```
           *
           *
           * This will add the CSS class "myRedTextButton" to the Button HTML and the CSS code above will then make
           * the text in this particular button red.
           *
           * Only characters allowed inside HTML attributes are allowed. Quotes are not allowed and this method will
           * ignore any strings containing quotes. Strings containing spaces are interpreted as ONE custom style class
           * (even though CSS selectors interpret them as different classes) and can only removed later by calling
           * removeStyleClass() with exactly the same (space-containing) string as parameter. Multiple calls with
           * the same sStyleClass will have no different effect than calling once. If sStyleClass is null, the call
           * is ignored.
           *
           * Returns `this` to allow method chaining
           */
          addStyleClass(
            /**
             * the CSS class name to be added
             */
            sStyleClass: string
          ): sap.ui.commons.layout.MatrixLayoutCell;
          /**
           * Destroys all the content in the aggregation {@link #getContent content}.
           */
          destroyContent(): sap.ui.commons.layout.MatrixLayoutCell;
          /**
           * Creates a new subclass of class sap.ui.commons.layout.MatrixLayoutCell with name `sClassName` and enriches
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
           * Gets current value of property {@link #getBackgroundDesign backgroundDesign}.
           *
           * Determines the matrix layout cell's background design.
           *
           * Default value is `Transparent`.
           */
          getBackgroundDesign(): sap.ui.commons.layout.BackgroundDesign;
          /**
           * Gets current value of property {@link #getColSpan colSpan}.
           *
           * Determines how many columns of the underlying grid structure are occupied by this matrix layout cell.
           *
           * Default value is `1`.
           */
          getColSpan(): number;
          /**
           * Gets content of aggregation {@link #getContent content}.
           *
           * The matrix layout cell's content (arbitrary controls).
           *
           * If the matrix row has a defined height and the matrix has layoutFixed = true, the controls inside of
           * a cell should all use the same unit for its height property.
           */
          getContent(): sap.ui.core.Control[];
          /**
           * Gets current value of property {@link #getHAlign hAlign}.
           *
           * Determines the horizontal alignment of the matrix layout cell's content with the cell's borders.
           *
           * Default value is `Begin`.
           */
          getHAlign(): sap.ui.commons.layout.HAlign;
          /**
           * Returns a metadata object for class sap.ui.commons.layout.MatrixLayoutCell.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.base.Metadata;
          /**
           * Gets current value of property {@link #getPadding padding}.
           *
           * Determines the padding of the matrix layout cell's content within the cell's borders. The default value
           * is appropriate for all cells in a form-like layout. Consider to remove the padding on the outer layout
           * in case of nesting.
           *
           * Default value is `End`.
           */
          getPadding(): sap.ui.commons.layout.Padding;
          /**
           * Gets current value of property {@link #getRowSpan rowSpan}.
           *
           * Determines how many rows of the underlying grid structure are occupied by this matrix layout cell. In
           * case a row-height is used, all rows affected by the RowSpan must have the same unit.
           *
           * Default value is `1`.
           */
          getRowSpan(): number;
          /**
           * Gets current value of property {@link #getSeparation separation}.
           *
           * Determines how a matrix layout cell is separated from its predecessor, via a vertical gutter of variable
           * width, with or without a vertical line.
           *
           * Default value is `None`.
           */
          getSeparation(): sap.ui.commons.layout.Separation;
          /**
           * Gets current value of property {@link #getVAlign vAlign}.
           *
           * Determines the vertical alignment of the matrix layout cell's content with the cell's borders.
           *
           * Default value is `Middle`.
           */
          getVAlign(): sap.ui.commons.layout.VAlign;
          /**
           * Returns true if the given style class string is valid and if this Element has this style class set via
           * a previous call to addStyleClass().
           */
          hasStyleClass(
            /**
             * the style to check for
             */
            sStyleClass: string
          ): boolean;
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
          ): sap.ui.commons.layout.MatrixLayoutCell;
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
           * Removes the given string from the list of custom style classes that have been set previously. Regular
           * style classes like "sapUiBtn" cannot be removed.
           *
           * Returns `this` to allow method chaining
           */
          removeStyleClass(
            /**
             * the style to be removed
             */
            sStyleClass: string
          ): sap.ui.commons.layout.MatrixLayoutCell;
          /**
           * Sets a new value for property {@link #getBackgroundDesign backgroundDesign}.
           *
           * Determines the matrix layout cell's background design.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `Transparent`.
           */
          setBackgroundDesign(
            /**
             * New value for property `backgroundDesign`
             */
            sBackgroundDesign: sap.ui.commons.layout.BackgroundDesign
          ): sap.ui.commons.layout.MatrixLayoutCell;
          /**
           * Sets a new value for property {@link #getColSpan colSpan}.
           *
           * Determines how many columns of the underlying grid structure are occupied by this matrix layout cell.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `1`.
           */
          setColSpan(
            /**
             * New value for property `colSpan`
             */
            iColSpan: number
          ): sap.ui.commons.layout.MatrixLayoutCell;
          /**
           * Sets a new value for property {@link #getHAlign hAlign}.
           *
           * Determines the horizontal alignment of the matrix layout cell's content with the cell's borders.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `Begin`.
           */
          setHAlign(
            /**
             * New value for property `hAlign`
             */
            sHAlign: sap.ui.commons.layout.HAlign
          ): sap.ui.commons.layout.MatrixLayoutCell;
          /**
           * Sets a new value for property {@link #getPadding padding}.
           *
           * Determines the padding of the matrix layout cell's content within the cell's borders. The default value
           * is appropriate for all cells in a form-like layout. Consider to remove the padding on the outer layout
           * in case of nesting.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `End`.
           */
          setPadding(
            /**
             * New value for property `padding`
             */
            sPadding: sap.ui.commons.layout.Padding
          ): sap.ui.commons.layout.MatrixLayoutCell;
          /**
           * Sets a new value for property {@link #getRowSpan rowSpan}.
           *
           * Determines how many rows of the underlying grid structure are occupied by this matrix layout cell. In
           * case a row-height is used, all rows affected by the RowSpan must have the same unit.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `1`.
           */
          setRowSpan(
            /**
             * New value for property `rowSpan`
             */
            iRowSpan: number
          ): sap.ui.commons.layout.MatrixLayoutCell;
          /**
           * Sets a new value for property {@link #getSeparation separation}.
           *
           * Determines how a matrix layout cell is separated from its predecessor, via a vertical gutter of variable
           * width, with or without a vertical line.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `None`.
           */
          setSeparation(
            /**
             * New value for property `separation`
             */
            sSeparation: sap.ui.commons.layout.Separation
          ): sap.ui.commons.layout.MatrixLayoutCell;
          /**
           * Sets a new value for property {@link #getVAlign vAlign}.
           *
           * Determines the vertical alignment of the matrix layout cell's content with the cell's borders.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `Middle`.
           */
          setVAlign(
            /**
             * New value for property `vAlign`
             */
            sVAlign: sap.ui.commons.layout.VAlign
          ): sap.ui.commons.layout.MatrixLayoutCell;
        }
        /**
         * @deprecated (since 1.38) - Instead, use the `sap.ui.layout.Grid` control.
         *
         * Non-control element used as part of a matrix layout's inner structure.
         */
        class MatrixLayoutRow extends sap.ui.core.Element {
          /**
           * Constructor for a new layout/MatrixLayoutRow.
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
            mSettings?: MatrixLayoutRowOpts
          );

          /**
           * Adds some cell to the aggregation {@link #getCells cells}.
           */
          addCell(
            /**
             * The cell to add; if empty, nothing is inserted
             */
            oCell: sap.ui.commons.layout.MatrixLayoutCell
          ): sap.ui.commons.layout.MatrixLayoutRow;
          /**
           * The string given as "sStyleClass" will be added to the "class" attribute of this element's root HTML
           * element.
           *
           * This method is intended to be used to mark controls as being of a special type for which special styling
           * can be provided using CSS selectors that reference this style class name.
           *
           *
           * ```javascript
           *
           * Example:
           * myButton.addStyleClass("myRedTextButton"); // add a CSS class to one button instance
           *
           * ...and in CSS:
           * .myRedTextButton {
           * color: red;
           * }
           * ```
           *
           *
           * This will add the CSS class "myRedTextButton" to the Button HTML and the CSS code above will then make
           * the text in this particular button red.
           *
           * Only characters allowed inside HTML attributes are allowed. Quotes are not allowed and this method will
           * ignore any strings containing quotes. Strings containing spaces are interpreted as ONE custom style class
           * (even though CSS selectors interpret them as different classes) and can only removed later by calling
           * removeStyleClass() with exactly the same (space-containing) string as parameter. Multiple calls with
           * the same sStyleClass will have no different effect than calling once. If sStyleClass is null, the call
           * is ignored.
           *
           * Returns `this` to allow method chaining
           */
          addStyleClass(
            /**
             * the CSS class name to be added
             */
            sStyleClass: string
          ): sap.ui.commons.layout.MatrixLayoutRow;
          /**
           * Destroys all the cells in the aggregation {@link #getCells cells}.
           */
          destroyCells(): sap.ui.commons.layout.MatrixLayoutRow;
          /**
           * Creates a new subclass of class sap.ui.commons.layout.MatrixLayoutRow with name `sClassName` and enriches
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
           * Gets content of aggregation {@link #getCells cells}.
           *
           * The matrix layout row's individual cells.
           */
          getCells(): sap.ui.commons.layout.MatrixLayoutCell[];
          /**
           * Gets current value of property {@link #getHeight height}.
           *
           * Height of the row.
           */
          getHeight(): sap.ui.core.CSSSize;
          /**
           * Returns a metadata object for class sap.ui.commons.layout.MatrixLayoutRow.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.base.Metadata;
          /**
           * Returns true if the given style class string is valid and if this Element has this style class set via
           * a previous call to addStyleClass().
           */
          hasStyleClass(
            /**
             * the style to check for
             */
            sStyleClass: string
          ): boolean;
          /**
           * Checks for the provided `sap.ui.commons.layout.MatrixLayoutCell` in the aggregation {@link #getCells
           * cells}. and returns its index if found or -1 otherwise.
           */
          indexOfCell(
            /**
             * The cell whose index is looked for
             */
            oCell: sap.ui.commons.layout.MatrixLayoutCell
          ): number;
          /**
           * Inserts a cell into the aggregation {@link #getCells cells}.
           */
          insertCell(
            /**
             * The cell to insert; if empty, nothing is inserted
             */
            oCell: sap.ui.commons.layout.MatrixLayoutCell,
            /**
             * The `0`-based index the cell should be inserted at; for a negative value of `iIndex`, the cell is inserted
             * at position 0; for a value greater than the current size of the aggregation, the cell is inserted at
             * the last position
             */
            iIndex: number
          ): sap.ui.commons.layout.MatrixLayoutRow;
          /**
           * Removes all the controls from the aggregation {@link #getCells cells}.
           *
           * Additionally, it unregisters them from the hosting UIArea.
           */
          removeAllCells(): sap.ui.commons.layout.MatrixLayoutCell[];
          /**
           * Removes a cell from the aggregation {@link #getCells cells}.
           */
          removeCell(
            /**
             * The cell to remove or its index or id
             */
            vCell: number | string | sap.ui.commons.layout.MatrixLayoutCell
          ): sap.ui.commons.layout.MatrixLayoutCell;
          /**
           * Removes the given string from the list of custom style classes that have been set previously. Regular
           * style classes like "sapUiBtn" cannot be removed.
           *
           * Returns `this` to allow method chaining
           */
          removeStyleClass(
            /**
             * the style to be removed
             */
            sStyleClass: string
          ): sap.ui.commons.layout.MatrixLayoutRow;
          /**
           * Sets a new value for property {@link #getHeight height}.
           *
           * Height of the row.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setHeight(
            /**
             * New value for property `height`
             */
            sHeight: sap.ui.core.CSSSize
          ): sap.ui.commons.layout.MatrixLayoutRow;
        }
        /**
         * @deprecated (since 1.38)
         *
         * Is used to specify the position of a control in the AbsoluteLayout
         */
        class PositionContainer extends sap.ui.core.Element {
          /**
           * Constructor for a new layout/PositionContainer.
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
            mSettings?: PositionContainerOpts
          );

          /**
           * Destroys the control in the aggregation {@link #getControl control}.
           */
          destroyControl(): sap.ui.commons.layout.PositionContainer;
          /**
           * Creates a new subclass of class sap.ui.commons.layout.PositionContainer with name `sClassName` and enriches
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
           * Gets current value of property {@link #getBottom bottom}.
           *
           * Defines the distance to the bottom of the layout (as specified in HTML)
           */
          getBottom(): sap.ui.core.CSSSize;
          /**
           * Gets current value of property {@link #getCenterHorizontally centerHorizontally}.
           *
           * Indicates whether this container shall be centered horizontally within the AbsoluteLayout area. The values
           * of the attributes left and right are ignored when this feature is activated.
           *
           * Default value is `false`.
           */
          getCenterHorizontally(): boolean;
          /**
           * Gets current value of property {@link #getCenterVertically centerVertically}.
           *
           * Indicates whether this container should be centered vertically within the AbsoluteLayout area. The values
           * of the attributes top and bottom are ignored when this feature is activated.
           *
           * Default value is `false`.
           */
          getCenterVertically(): boolean;
          /**
           * Gets content of aggregation {@link #getControl control}.
           *
           * Child control of the position container
           */
          getControl(): sap.ui.core.Control;
          /**
           * Gets current value of property {@link #getLeft left}.
           *
           * Defines the distance to the left of the layout (as specified in HTML)
           */
          getLeft(): sap.ui.core.CSSSize;
          /**
           * Returns a metadata object for class sap.ui.commons.layout.PositionContainer.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.base.Metadata;
          /**
           * Gets current value of property {@link #getRight right}.
           *
           * Defines the distance to the right of the layout (as specified in HTML)
           */
          getRight(): sap.ui.core.CSSSize;
          /**
           * Gets current value of property {@link #getTop top}.
           *
           * Defines the distance to the top of the layout (as specified in HTML)
           */
          getTop(): sap.ui.core.CSSSize;
          /**
           * Sets a new value for property {@link #getBottom bottom}.
           *
           * Defines the distance to the bottom of the layout (as specified in HTML)
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setBottom(
            /**
             * New value for property `bottom`
             */
            sBottom: sap.ui.core.CSSSize
          ): sap.ui.commons.layout.PositionContainer;
          /**
           * Sets a new value for property {@link #getCenterHorizontally centerHorizontally}.
           *
           * Indicates whether this container shall be centered horizontally within the AbsoluteLayout area. The values
           * of the attributes left and right are ignored when this feature is activated.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `false`.
           */
          setCenterHorizontally(
            /**
             * New value for property `centerHorizontally`
             */
            bCenterHorizontally: boolean
          ): sap.ui.commons.layout.PositionContainer;
          /**
           * Sets a new value for property {@link #getCenterVertically centerVertically}.
           *
           * Indicates whether this container should be centered vertically within the AbsoluteLayout area. The values
           * of the attributes top and bottom are ignored when this feature is activated.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `false`.
           */
          setCenterVertically(
            /**
             * New value for property `centerVertically`
             */
            bCenterVertically: boolean
          ): sap.ui.commons.layout.PositionContainer;
          /**
           * Sets the aggregated {@link #getControl control}.
           */
          setControl(
            /**
             * The control to set
             */
            oControl: sap.ui.core.Control
          ): sap.ui.commons.layout.PositionContainer;
          /**
           * Sets a new value for property {@link #getLeft left}.
           *
           * Defines the distance to the left of the layout (as specified in HTML)
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setLeft(
            /**
             * New value for property `left`
             */
            sLeft: sap.ui.core.CSSSize
          ): sap.ui.commons.layout.PositionContainer;
          /**
           * Sets a new value for property {@link #getRight right}.
           *
           * Defines the distance to the right of the layout (as specified in HTML)
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setRight(
            /**
             * New value for property `right`
             */
            sRight: sap.ui.core.CSSSize
          ): sap.ui.commons.layout.PositionContainer;
          /**
           * Sets a new value for property {@link #getTop top}.
           *
           * Defines the distance to the top of the layout (as specified in HTML)
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setTop(
            /**
             * New value for property `top`
             */
            sTop: sap.ui.core.CSSSize
          ): sap.ui.commons.layout.PositionContainer;
          /**
           * Updates the position properties of the container according to the given position in JSON style.
           */
          updatePosition(
            /**
             * JSON-like object which defines the position of the child control in the absolute layout. The object is
             * expected to have one or more out of the attributes top, bottom, left, right (each with a value of type
             * sap.ui.core.CSSSize). If no object is given, nothing is updated.
             */
            oPos: object
          ): void;
        }
        /**
         * @SINCE 1.9.1
         * @deprecated (since 1.16.0) - moved to sap.ui.layout library. Please use this one.
         *
         * This is a layout where several controls can be added. These controls are blown up to fit a whole line.
         * If the window resizes the controls are moved between the lines and resized again.
         */
        class ResponsiveFlowLayout extends sap.ui.layout.ResponsiveFlowLayout {
          /**
           * Constructor for a new layout/ResponsiveFlowLayout.
           */
          constructor(
            /**
             * id for the new control, generated automatically if no id is given
             */
            sId?: string,
            /**
             * initial settings for the new control
             */
            mSettings?: ResponsiveFlowLayoutOpts
          );

          /**
           * Creates a new subclass of class sap.ui.commons.layout.ResponsiveFlowLayout with name `sClassName` and
           * enriches it with the information contained in `oClassInfo`.
           *
           * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.layout.ResponsiveFlowLayout.extend}.
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
           * Returns a metadata object for class sap.ui.commons.layout.ResponsiveFlowLayout.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.base.Metadata;
        }
        /**
         * @SINCE 1.9.1
         * @deprecated (since 1.16.0) - moved to sap.ui.layout library. Please use this one.
         *
         * This is a LayoutData Element that can be added to a control if this control is used within a ResponsiveFlowLayout
         */
        class ResponsiveFlowLayoutData extends sap.ui.layout
          .ResponsiveFlowLayoutData {
          /**
           * Constructor for a new layout/ResponsiveFlowLayoutData.
           */
          constructor(
            /**
             * id for the new control, generated automatically if no id is given
             */
            sId?: string,
            /**
             * initial settings for the new control
             */
            mSettings?: ResponsiveFlowLayoutDataOpts
          );

          /**
           * Creates a new subclass of class sap.ui.commons.layout.ResponsiveFlowLayoutData with name `sClassName`
           * and enriches it with the information contained in `oClassInfo`.
           *
           * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.layout.ResponsiveFlowLayoutData.extend}.
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
           * @SINCE 1.11.0
           *
           * Getter for property `margin`. This property prevents any margin of the element if set to false
           *
           * Default value is `true`
           */
          // @ts-ignore
          getMargin(): boolean;
          /**
           * Returns a metadata object for class sap.ui.commons.layout.ResponsiveFlowLayoutData.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.base.Metadata;
          /**
           * @SINCE 1.11.0
           *
           * Setter for property `margin`.
           *
           * Default value is `true`
           */
          // @ts-ignore
          setMargin(
            /**
             * new value for property `margin`
             */
            bMargin: boolean
          ): sap.ui.layout.ResponsiveFlowLayoutData;
        }
        /**
         * @deprecated (since 1.16.0) - Moved to sap.ui.layout library. Please use this one.
         *
         * In this layout the elemnts are orderd one below the other
         */
        class VerticalLayout extends sap.ui.layout.VerticalLayout {
          /**
           * Constructor for a new layout/VerticalLayout.
           */
          constructor(
            /**
             * id for the new control, generated automatically if no id is given
             */
            sId?: string,
            /**
             * initial settings for the new control
             */
            mSettings?: VerticalLayoutOpts
          );

          /**
           * Creates a new subclass of class sap.ui.commons.layout.VerticalLayout with name `sClassName` and enriches
           * it with the information contained in `oClassInfo`.
           *
           * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.layout.VerticalLayout.extend}.
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
           * Returns a metadata object for class sap.ui.commons.layout.VerticalLayout.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.base.Metadata;
        }
        /**
         * @deprecated (since 1.38)
         *
         * Background design (i.e. color), e.g. of a layout cell.
         */
        enum BackgroundDesign {
          /**
           * A background design suitable for borders.
           */
          Border,
          /**
           * An opaque background design that looks dark filled.
           */
          Fill1,
          /**
           * An opaque background design that looks medium filled.
           */
          Fill2,
          /**
           * An opaque background design that looks light filled.
           */
          Fill3,
          /**
           * A background design suitable for headers.
           */
          Header,
          /**
           * A plain but opaque background design.
           */
          Plain,
          /**
           * A transparent background.
           */
          Transparent
        }
        /**
         * @deprecated (since 1.38)
         *
         * The type (=position) of a BorderLayoutArea
         */
        enum BorderLayoutAreaTypes {
          /**
           * Value to identify the begin area.
           */
          begin,
          /**
           * Value to identify the bottom area.
           */
          bottom,
          /**
           * Value to identify the center area.
           */
          center,
          /**
           * Value to identify the end area.
           */
          end,
          /**
           * Value to identify the top area.
           */
          top
        }
        /**
         * @deprecated (since 1.38)
         *
         * Horizontal alignment, e.g. of a layout cell's content within the cell's borders. Note that some values
         * depend on the current locale's writing direction while others do not.
         */
        enum HAlign {
          /**
           * Aligned towards the beginning of a line, in the current locale's writing direction.
           */
          Begin,
          /**
           * Horizontally centered.
           */
          Center,
          /**
           * Aligned towards the end of a line, in the current locale's writing direction.
           */
          End,
          /**
           * Left aligned, regardless of the current locale's writing direction.
           */
          Left,
          /**
           * Right aligned, regardless of the current locale's writing direction.
           */
          Right
        }
        /**
         * @deprecated (since 1.38)
         *
         * Padding, e.g. of a layout cell's content within the cell's borders. Note that all options except "None"
         * include a padding of 2px at the top and bottom, and differ only in the presence of a 4px padding towards
         * the beginning or end of a line, in the current locale's writing direction.
         */
        enum Padding {
          /**
           * Top and bottom padding of 2px. Padding of 4px towards the beginning of a line, in the current locale's
           * writing direction, but none towards its end.
           */
          Begin,
          /**
           * Top and bottom padding of 2px. Padding of 4px towards both the beginning and end of a line.
           */
          Both,
          /**
           * Top and bottom padding of 2px. Padding of 4px towards the end of a line, in the current locale's writing
           * direction, but none towards its beginning.
           */
          End,
          /**
           * Top and bottom padding of 2px. No padding towards neither the beginning nor end of a line.
           */
          Neither,
          /**
           * No padding at all.
           */
          None
        }
        /**
         * @deprecated (since 1.38)
         *
         * Separation, e.g. of a layout cell from its neighbor, via a vertical gutter of defined width, with or
         * without a vertical line in its middle.
         */
        enum Separation {
          /**
           * A large (63px) vertical gutter without a vertical line.
           */
          Large,
          /**
           * A large (63px) vertical gutter with a vertical line in its middle.
           */
          LargeWithLine,
          /**
           * A medium (31px) vertical gutter without a vertical line.
           */
          Medium,
          /**
           * A medium (31px) vertical gutter with a vertical line in its middle.
           */
          MediumWithLine,
          /**
           * No gutter at all (0px), and without a vertical line, of course.
           */
          None,
          /**
           * A small (17px) vertical gutter without a vertical line.
           */
          Small,
          /**
           * A small (17px) vertical gutter with a vertical line in its middle.
           */
          SmallWithLine
        }
        /**
         * @deprecated (since 1.38)
         *
         * Vertical alignment, e.g. of a layout cell's content within the cell's borders.
         */
        enum VAlign {
          /**
           * Aligned at the bottom.
           */
          Bottom,
          /**
           * Vertically centered.
           */
          Middle,
          /**
           * Aligned at the top.
           */
          Top
        }
      }
      /**
       * @SINCE 0.8.8
       * @deprecated (since 1.38) - Instead, use the `sap.m.MessageBox` control.
       *
       * Provides methods to create standard alerts, confirmation dialogs, or arbitrary message boxes.
       *
       * As `MessageBox` is a static class, a `jQuery.sap.require("sap.ui.commons.MessageBox");` statement must
       * be explicitly executed before the class can be used. Example:
       * ```javascript
       *
       *   jQuery.sap.require("sap.ui.commons.MessageBox");
       *   sap.ui.commons.MessageBox.show(
       *       "This message should appear in the message box.",
       *       sap.ui.commons.MessageBox.Icon.INFORMATION,
       *       "My message box title",
       *       [sap.ui.commons.MessageBox.Action.YES, sap.ui.commons.MessageBox.Action.NO],
       *       function() { / * do something * / }
       *   );
       * ```
       */
      namespace MessageBox {
        /**
         * Displays an alert box with the given message and an OK button (no icons). If a callback is given, it
         * is called after the alert box has been closed by the user via the OK button or via the Close icon. The
         * callback is called with the following signature:
         *
         *
         * ```javascript
         *
         *   function ()
         * ```
         *
         *
         * The alert box opened by this method is modal and it is processed asynchronously. Applications have to
         * use the `fnCallback` to continue work after the user closed the alert box.
         */
        function alert(
          /**
           * Message to be displayed in the alert box
           */
          vMessage: string | sap.ui.core.Control,
          /**
           * callback function to be called when the user closed the dialog
           */
          fnCallback?: Function,
          /**
           * Title to be displayed in the alert box
           */
          sTitle?: string,
          /**
           * ID to be used for the alert box. Intended for test scenarios, not recommended for productive apps
           */
          sDialogId?: string
        ): void;
        /**
         * Displays a confirmation dialog box with the given message, a question icon, an OK button, and a Cancel
         * button. If a callback is given, it is called after the alert box has been closed by the user via one
         * of the buttons or via the close icon. The callback is called with the following signature
         *
         *
         * ```javascript
         *
         *   function(bConfirmed)
         * ```
         *
         *
         * where bConfirmed is set to true when the user has activated the OK button.
         *
         * The confirmation dialog box opened by this method is modal and it is processed asynchronously. Applications
         * have to use the `fnCallback` to continue work after the user closed the alert box.
         */
        function confirm(
          /**
           * Message to display
           */
          vMessage: string | sap.ui.core.Control,
          /**
           * Callback to be called
           */
          fnCallback?: Function,
          /**
           * Title to display
           */
          sTitle?: string,
          /**
           * ID to be used for the confirmation dialog. Intended for test scenarios, not recommended for productive
           * apps
           */
          sDialogId?: string
        ): void;
        /**
         * Creates and displays a simple message box with the given text and buttons, and optionally other parts.
         * After the user has selected a button or closed the message box using the close icon, the `callback` function
         * is invoked when given.
         *
         * The only mandatory parameter is `vMessage`. Either a string with the corresponding text or even a layout
         * control could be provided.
         *
         * The created dialog box is executed asynchronously. When it has been created and registered for rendering,
         * this function returns without waiting for a user reaction.
         *
         * When applications have to react on the users choice, they have to provide a callback function and postpone
         * any reaction on the user choice until that callback is triggered.
         *
         * The signature of the callback is
         *
         * function (oAction);
         *
         * where `oAction` is the button that the user has pressed. When the user has pressed the close button,
         * a MessageBox.Action.Close is returned.
         */
        function show(
          /**
           * The message to be displayed.
           */
          vMessage: string | sap.ui.core.Control,
          /**
           * The icon to be displayed.
           */
          oIcon?: sap.ui.commons.MessageBox.Icon,
          /**
           * The title of the message box.
           */
          sTitle?: string,
          /**
           * Either a single action, or an array of actions. If no action(s) are given, the single action MessageBox.Action.OK
           * is taken as a default for the parameter.
           */
          vActions?:
            | sap.ui.commons.MessageBox.Action
            | sap.ui.commons.MessageBox.Action[],
          /**
           * Function to be called when the user has pressed a button or has closed the message box.
           */
          fnCallback?: Function,
          /**
           * Must be one of the actions provided in vActions.
           */
          oDefaultAction?: sap.ui.commons.MessageBox.Action,
          /**
           * ID to be used for the dialog. Intended for test scenarios, not recommended for productive apps
           */
          sDialogId?: string
        ): void;

        /**
         * @deprecated (since 1.38)
         *
         * Enumeration of supported actions in a MessageBox.
         *
         * Each action is represented as a button in the message box. The values of this enumeration are used for
         * both, specifying the set of allowed actions as well as reporting back the user choice.
         */
        enum Action {
          /**
           * Adds an "Abort" button to the message box.
           */
          ABORT,
          /**
           * Adds a "Cancel" button to the message box.
           */
          CANCEL,
          /**
           * Adds a "Close" button to the message box.
           */
          CLOSE,
          /**
           * Adds an "Ignore" button to the message box.
           */
          IGNORE,
          /**
           * Adds a "No" button to the message box.
           */
          NO,
          /**
           * Adds an "Ok" button to the message box.
           */
          OK,
          /**
           * Adds a "Retry" button to the message box.
           */
          RETRY,
          /**
           * Adds a "Yes" button to the message box.
           */
          YES
        }
        /**
         * @deprecated (since 1.38)
         *
         * Enumeration of the pre-defined icons that can be used in a MessageBox.
         */
        enum Icon {
          /**
           * @deprecated (since 1.9.1) - The error icon is used instead
           *
           * Shows the critical error icon in the message box.
           */
          CRITICAL,
          /**
           * Shows the error icon in the message box.
           */
          ERROR,
          /**
           * Shows the information icon in the message box.
           */
          INFORMATION,
          /**
           * Shows no icon in the message box.
           */
          NONE,
          /**
           * Shows the question icon in the message box.
           */
          QUESTION,
          /**
           * Shows the success icon in the message box.
           */
          SUCCESS,
          /**
           * Shows the warning icon in the message box.
           */
          WARNING
        }
      }
      /**
       * @deprecated (since 1.38)
       *
       * Marker interface for common controls which are suitable for use within a FormattedTextView.
       */
      interface FormattedTextViewControl {}
      /**
       * @deprecated (since 1.38)
       *
       * Marker interface for common controls which are suitable for use within a toolbar. The most prominent
       * example of a toolbar item is a button which is mostly used with an icon instead of a text caption.
       *
       * Toolbar items must have a fixed height compatible with the toolbar being a single horizontal row. They
       * can refer to the toolbar's marker class "sapUiTb" to adjust their own theming when used inside a toolbar.
       */
      interface ToolbarItem {}

      interface AccordionOpts extends sap.ui.core.ControlOpts {
        /**
         * When the specified width is less than the width of a section content, a horizontal scroll bar is provided.
         */
        width?: sap.ui.core.CSSSize;

        /**
         * Section IDs that are opened by default at application start
         */
        openedSectionsId?: string;

        /**
         * Event is triggered when the user opens a section.
         */
        sectionOpen?: Function;

        /**
         * Event is triggered when the user closes a section.
         */
        sectionClose?: Function;

        /**
         * Event is triggered when the user changes the position of a section.
         */
        sectionsReorder?: Function;

        /**
         * Empty container used to display any library control
         */
        sections?:
          | sap.ui.commons.AccordionSection[]
          | sap.ui.commons.AccordionSection;
      }

      interface AccordionSectionOpts extends sap.ui.core.ElementOpts {
        /**
         * When the section content exceeds maxHeight, a vertical scroll bar appears.
         */
        maxHeight?: sap.ui.core.CSSSize;

        /**
         * It is required that the used theme supports the control.
         */
        enabled?: boolean;

        /**
         * @deprecated (since 1.34) - Use Accordion's "openedSectionsId" property
         *
         * It is recommended to adjust the settings for the width when the section is set to 'collapsed'.
         */
        collapsed?: boolean;

        /**
         * Text for the section header
         */
        title?: string;

        /**
         * Event is fired when the user scrolls the panel
         */
        scroll?: Function;

        /**
         * Aggregates the controls that are contained in the panel. The control layout is browser-dependent. For
         * a stable content layout, use a layout control as direct single child. When the panel dimensions are set,
         * the child control may have width and height of 100%; when the panel dimensions are not set, the child
         * defines the panel size.
         */
        content?: sap.ui.core.Control[] | sap.ui.core.Control;
      }

      interface ApplicationHeaderOpts extends sap.ui.core.ControlOpts {
        /**
         * Path (src) to the logo icon to be displayed in the application header.
         */
        logoSrc?: sap.ui.core.URI;

        /**
         * The text that will be displayed beside the logo in the application header. This property is optional.
         */
        logoText?: string;

        /**
         * Determines if the logoff area will be displayed at the right hand side of the application header.
         */
        displayLogoff?: boolean;

        /**
         * User name that will be displayed beside the welcome text
         */
        userName?: string;

        /**
         * Determines if the welcome text is displayed
         */
        displayWelcome?: boolean;

        /**
         * Fires an event to log off the user from the application. No parameters.
         */
        logoff?: Function;
      }

      interface AreaOpts extends sap.ui.core.ElementOpts {
        /**
         * The value is a string and can be 'rect' for rectangle, 'poly' for poligon, 'circle', or default.
         */
        shape?: string;

        /**
         * Coordinates of the area
         */
        coords?: string;

        /**
         * Hyper link that is executed when the area is clicked
         */
        href?: sap.ui.core.URI;

        /**
         * Alternative text that is displayed in the case the image is not available
         */
        alt?: string;
      }

      interface AutoCompleteOpts extends sap.ui.commons.ComboBoxOpts {
        /**
         * Determines whether scrolling should be enabled when the number of items is higher than maxPopupItems.
         * If set to false only the first n items (n=maxPopupItems) are shown.
         */
        enableScrolling?: boolean;

        /**
         * Fired when the user has changed the value and a suggestion list update should occur.
         */
        suggest?: Function;
      }

      interface ButtonOpts extends sap.ui.core.ControlOpts {
        /**
         * Button text displayed at runtime.
         */
        text?: string;

        /**
         * Boolean property to enable the control (default is true). Buttons that are disabled have other colors
         * than enabled ones, depending on custom settings.
         */
        enabled?: boolean;

        /**
         * Control width as common CSS-size (px or % as unit, for example)
         */
        width?: sap.ui.core.CSSSize;

        /**
         * Unique identifier used for help service
         */
        helpId?: string;

        /**
         * Icon to be displayed as graphical element within the button. This can be a URI to an image or an icon
         * font URI.
         */
        icon?: sap.ui.core.URI;

        /**
         * Icon to be displayed as graphical element within the button when it is hovered (only if also a base icon
         * was specified). If not specified the base icon is used. If an icon font icon is used, this property is
         * ignored.
         */
        iconHovered?: sap.ui.core.URI;

        /**
         * Icon to be displayed as graphical element within the button when it is selected (only if also a base
         * icon was specified). If not specified the base or hovered icon is used. If an icon font icon is used,
         * this property is ignored.
         */
        iconSelected?: sap.ui.core.URI;

        /**
         * If set to true (default), the display sequence is 1. icon 2. control text .
         */
        iconFirst?: boolean;

        /**
         * Specifies the button height. If this property is set, the height which is specified by the underlying
         * theme is not used any longer.
         */
        height?: sap.ui.core.CSSSize;

        /**
         * Indicates if the button is styled. If not it is rendered as native HTML-button. In this case a custom
         * styling can be added usig addStyleClass.
         */
        styled?: boolean;

        /**
         * The button is rendered as lite button.
         */
        lite?: boolean;

        /**
         * Style of the button. (e.g. emphasized)
         */
        style?: sap.ui.commons.ButtonStyle;

        /**
         * Event is fired when the user presses the control.
         */
        press?: Function;

        /**
         * Association to controls / ids which describe this control (see WAI-ARIA attribute aria-describedby).
         */
        ariaDescribedBy?: sap.ui.core.Control[] | string[];

        /**
         * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
         */
        ariaLabelledBy?: sap.ui.core.Control[] | string[];
      }

      interface CalloutOpts extends sap.ui.commons.CalloutBaseOpts {
        /**
         * Determines the content of the Callout
         */
        content?: sap.ui.core.Control[] | sap.ui.core.Control;
      }

      interface CalloutBaseOpts extends sap.ui.core.TooltipBaseOpts {
        /**
         * The event is fired when the popup is opened.
         */
        open?: Function;

        /**
         * Event is fired when the Callout window is closed.
         */
        close?: Function;

        /**
         * Event is fired before a Callout is displayed. Call the preventDefault method of the event object to postpone
         * opening. Application may use this event to start asynchronous Ajax call to load the Callout content
         */
        beforeOpen?: Function;

        /**
         * @SINCE 1.11.0
         *
         * Is fired when the Callout has been opened
         */
        opened?: Function;
      }

      interface CarouselOpts extends sap.ui.core.ControlOpts {
        /**
         * Determines the orientation of the Carousel. Can be either "horizontal" or "vertical"
         */
        orientation?: sap.ui.commons.enums.Orientation;

        /**
         * Determines the width of the Carousel
         */
        width?: sap.ui.core.CSSSize;

        /**
         * Determines the height of the Carousel
         */
        height?: sap.ui.core.CSSSize;

        /**
         * Default height of the item in a carousel if no height can be determined
         */
        defaultItemHeight?: number;

        /**
         * Default width of the item in a carousel if no height can be determined
         */
        defaultItemWidth?: number;

        /**
         * Duration for animation when navigating through the contents of the Carousel
         */
        animationDuration?: number;

        /**
         * If defined, the carousel displays the number of items defined. Items will be resized to fit the area.
         */
        visibleItems?: number;

        /**
         * Determines the size of the handle in pixels. (Height for vertical carousel, width for horizontal carousel)
         */
        handleSize?: number;

        /**
         * @SINCE 1.11.0
         *
         * The index of the element in the content aggreation which is displayed first on rendering
         */
        firstVisibleIndex?: number;

        /**
         * Controls which are displayed inside the Carousel
         */
        content?: sap.ui.core.Control[] | sap.ui.core.Control;
      }

      interface CheckBoxOpts extends sap.ui.core.ControlOpts {
        /**
         * Contains the state of the control whether it is flagged with a check mark, or not
         */
        checked?: boolean;

        /**
         * Defines the text displayed next to the check box
         */
        text?: string;

        /**
         * Using this property, the control could be disabled, if required.
         */
        enabled?: boolean;

        /**
         * Specifies whether the user shall be allowed to select the check box.
         */
        editable?: boolean;

        /**
         * Accepts the core enumeration ValueState.type that supports 'None', 'Error', 'Warning' and 'Success'.
         */
        valueState?: sap.ui.core.ValueState;

        /**
         * The width can be set to an absolute value. If no value is set, the control width results from the text
         * length.
         */
        width?: sap.ui.core.CSSSize;

        /**
         * The value can be set to LTR or RTL. Otherwise, the control inherits the text direction from its parent
         * control.
         */
        textDirection?: sap.ui.core.TextDirection;

        /**
         * The 'name' property to be used in the HTML code, for example for HTML forms that send data to the server
         * via submit.
         */
        name?: string;

        /**
         * Event is triggered when the control status is changed by the user by flagging or unflagging the checkbox.
         */
        change?: Function;

        /**
         * Association to controls / ids which describe this control (see WAI-ARIA attribute aria-describedby).
         */
        ariaDescribedBy?: sap.ui.core.Control[] | string[];

        /**
         * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
         */
        ariaLabelledBy?: sap.ui.core.Control[] | string[];
      }

      interface ColorPickerOpts extends sap.ui.unified.ColorPickerOpts {}

      interface ComboBoxOpts extends sap.ui.commons.TextFieldOpts {
        /**
         * Defines the number of items that shall be displayed at once. If the overall number of items is higher
         * than this setting, a scrollbar is provided.
         */
        maxPopupItems?: number;

        /**
         * Indicates whether the `additionalText` property that is available for `sap.ui.core.ListItem` shall be
         * displayed in the list.
         */
        displaySecondaryValues?: boolean;

        /**
         * Key of the selected item.
         *
         * If the value has no corresponding item the key is empty.
         *
         * If duplicate keys exists the first item matching the key is used.
         *
         * If the key is set to a not existing value it will not be changed.
         */
        selectedKey?: string;

        /**
         * Id of the selected item. If the value has no corresponding item, the `selectedItemId` is empty.
         *
         * If the `selectedItemId` is set to a not existing item, it will not be changed.
         */
        selectedItemId?: string;

        /**
         * `ListItems` (see `sap.ui.core.ListBox`) that shall be displayed in the list.
         */
        items?: sap.ui.core.ListItem[] | sap.ui.core.ListItem;

        /**
         * Using this method, you provide a `ListBox` control. This allows reuse of item lists in different controls.
         * Either a control id can be used as new target, or a control instance.
         *
         * **Note:** The ListBox must not be rendered somewhere in the UI. But if you want to bind the `ListBox`
         * items to a model it must be in the control tree. So we suggest to add it as dependent somewhere (e.g.
         * to the view or the first used `ComboBox`). If it is not set as child or dependant to an other control
         * it will be automatically set as dependent to the first ComboBox where it is assigned.
         */
        listBox?: sap.ui.commons.ListBox | string;
      }

      interface DatePickerOpts extends sap.ui.commons.TextFieldOpts {
        /**
         * Defines the locale (language and country), e.g. "en-US", whose translations and Date formatters should
         * be used to render the DatePicker.If the value property is bound to a model using a Date type the locale
         * will be ignored, because the locale information of the model are used.
         */
        locale?: string;

        /**
         * Defines the date as a "yyyymmdd" string, independent from the format used. The inherited textField "value"
         * attribute uses the date format as configured via the locale. The date is interpreted as gregorian date
         */
        yyyymmdd?: string;
      }

      interface DialogOpts extends sap.ui.core.ControlOpts {
        /**
         * Outer width of dialog window. When not set and not constrained by one of the width parameters (minWidth/maxWidth),
         * the window size is automatically adapted to the content.
         */
        width?: sap.ui.core.CSSSize;

        /**
         * Outer height of dialog window. When not set and not constrained by one of the height parameters (minHeight/maxHeight),
         * the window size is automatically adapted to the content.
         */
        height?: sap.ui.core.CSSSize;

        /**
         * Scroll position from left to right. "0" means leftmost position.
         */
        scrollLeft?: number;

        /**
         * Scroll position from top to bottom. "0" means topmost position.
         */
        scrollTop?: number;

        /**
         * Dialog title displayed in the header.
         */
        title?: string;

        /**
         * Padding is theme-dependent. When set to "false", the content extends to the dialog borders.
         */
        applyContentPadding?: boolean;

        /**
         * Displays a close button in the title bar.
         */
        showCloseButton?: boolean;

        /**
         * Specifies whether the dialog window can be resized by the user. The dialog frame contains the visual
         * symbol.
         */
        resizable?: boolean;

        /**
         * Minimum outer width of the dialog window. When set, neither the user nor some layout settings can make
         * the window smaller.
         */
        minWidth?: sap.ui.core.CSSSize;

        /**
         * Minimum outer height of the dialog window. When set, neither the user nor some layout settings can make
         * the window smaller.
         */
        minHeight?: sap.ui.core.CSSSize;

        /**
         * Maximum outer width of the dialog window. If set, neither the user nor some layout settings can make
         * the window larger.
         */
        maxWidth?: sap.ui.core.CSSSize;

        /**
         * Maximum outer height of the dialog window. If set, neither the user nor some layout settings can make
         * the window larger.
         */
        maxHeight?: sap.ui.core.CSSSize;

        /**
         * Specifies the border design. Border design is theme dependent.
         */
        contentBorderDesign?: sap.ui.commons.enums.BorderDesign;

        /**
         * Specifies whether the dialog should be modal, or not. In case of `true` the focus is kept inside the
         * dialog.
         */
        modal?: boolean;

        /**
         * The ARIA role for the control. E.g. for alert-style Dialogs this can be set to "AlertDialog".
         */
        accessibleRole?: sap.ui.core.AccessibleRole;

        /**
         * @SINCE 1.9.0
         *
         * Specifies whether Dialog movement should be restricted to the visible area of the window. This only affects
         * drag&drop movements by the user. This doesn't affect modal dialogs -> modal dialogs always stay in the
         * window.
         */
        keepInWindow?: boolean;

        /**
         * @SINCE 1.10
         *
         * If this property is set to true the Dialog will close if the Dialog loses its focus
         */
        autoClose?: boolean;

        /**
         * Event is fired when the dialog has been closed (after closing-animation etc.). Event parameters provide
         * information about last position and last size.
         */
        closed?: Function;

        /**
         * Aggregation of the buttons to display at the bottom of the dialog, for example OK and Cancel. Association
         * defaultButton can be used for one of the defined buttons.
         */
        buttons?: sap.ui.core.Control[] | sap.ui.core.Control;

        /**
         * Aggregation of the content of the dialog (one or more controls).
         *
         * Warning: when content is added with width given as a percentage, the Dialog itself should have a width
         * set.
         */
        content?: sap.ui.core.Control[] | sap.ui.core.Control;

        /**
         * Defines one of the buttons that have been provided via button aggregation to be the default button. This
         * default button is initially selected, if no control is set via the initialFocus association explicitly.
         * The default button is activated when Enter is pressed in the context of the dialog and when the currently
         * selected element does not handle the Enter event itself.
         */
        defaultButton?: sap.ui.commons.Button | string;

        /**
         * Defines the control that shall get the focus when the dialog is opened.
         */
        initialFocus?: sap.ui.core.Control | string;
      }

      interface DropdownBoxOpts extends sap.ui.commons.ComboBoxOpts {
        /**
         * Whether the DropdownBox's search help should be enabled.
         */
        searchHelpEnabled?: boolean;

        /**
         * (optional) The text to use for the search help entry.
         */
        searchHelpText?: string;

        /**
         * (optional) The additional Text to use for the search help entry.
         */
        searchHelpAdditionalText?: string;

        /**
         * (optional) The URI of the icon to use for the search help entry.
         */
        searchHelpIcon?: sap.ui.core.URI;

        /**
         * Maximum number of history items in the list.
         *
         * If 0 no history is displayed or stored. The history is locally stored on the client. Therefore do not
         * activate this feature when this control handles confidential data.
         */
        maxHistoryItems?: number;

        /**
         * Event fired whenever the configured searchHelpItem is clicked or the searchHelpItem is configured and
         * F4 key is pressed.
         */
        searchHelp?: Function;
      }

      interface FileUploaderOpts extends sap.ui.unified.FileUploaderOpts {}

      interface FileUploaderParameterOpts
        extends sap.ui.unified.FileUploaderParameterOpts {}

      interface FormattedTextViewOpts extends sap.ui.core.ControlOpts {
        /**
         * The ARIA role for the control.
         */
        accessibleRole?: sap.ui.core.AccessibleRole;

        /**
         * Determines text with placeholders.
         */
        htmlText?: string;

        /**
         * Array of controls that should be replaced within htmlText.
         */
        controls?: sap.ui.core.Control[] | sap.ui.core.Control;
      }

      interface HorizontalDividerOpts extends sap.ui.core.ControlOpts {
        /**
         * Defines the width of the divider.
         */
        width?: sap.ui.core.CSSSize;

        /**
         * Defines the type of the divider.
         */
        type?: sap.ui.commons.HorizontalDividerType;

        /**
         * Defines the height of the divider.
         */
        height?: sap.ui.commons.HorizontalDividerHeight;
      }

      interface ImageOpts extends sap.ui.core.ControlOpts {
        /**
         * Relative or absolute path to URL where the image file is stored.
         */
        src?: sap.ui.core.URI;

        /**
         * When the empty value is kept, the original size is not changed. It is also possible to make settings
         * for width or height only, the overall size is maintained then, considering the aspect ratio.
         */
        width?: sap.ui.core.CSSSize;

        /**
         * When the empty value is kept, the original size is not changed. It is also possible to make settings
         * for width or height only, the overall size is maintained then, considering the aspect ratio.
         */
        height?: sap.ui.core.CSSSize;

        /**
         * A decorative image is included for design reasons. Accessibility tools will ignore decorative images.
         * Note: If the Image has an image map (useMap is set), this property will be overridden (the image will
         * not be rendered as decorative). A decorative image has no ALT attribute, so the Alt property is ignored
         * if the image is decorative.
         */
        decorative?: boolean;

        /**
         * The alternative text that is displayed in case the Image is not available, or cannot be displayed. If
         * the image is set to decorative this property is ignored.
         */
        alt?: string;

        /**
         * The name of the image map that defines the clickable areas
         */
        useMap?: string;

        /**
         * Event is fired when the user clicks on the control.
         */
        press?: Function;
      }

      interface ImageMapOpts extends sap.ui.core.ControlOpts {
        /**
         * Name for the image that serves as reference
         */
        name?: string;

        /**
         * Event for the areas that can be clicked in an ImageMap
         */
        press?: Function;

        /**
         * Area representing the reference to the target location
         */
        areas?: sap.ui.commons.Area[] | sap.ui.commons.Area;
      }

      interface InPlaceEditOpts extends sap.ui.core.ControlOpts {
        /**
         * Visualizes warnings or errors related to the InPlaceEdit. Possible values: Warning, Error, Success. If
         * the content control has an own valueState property this will be used.
         */
        valueState?: sap.ui.core.ValueState;

        /**
         * If undo is enabled after changing the text an undo button appears.
         */
        undoEnabled?: boolean;

        /**
         * @SINCE 1.9.0
         *
         * Defines the visual appearance of the control. Currently this is not supported for Labels.
         */
        design?: sap.ui.commons.TextViewDesign;

        /**
         * Event is fired when the text in the field has changed AND the focus leaves the InPlaceEdit or the Enter
         * key is pressed.
         */
        change?: Function;

        /**
         * @SINCE 1.16.5
         *
         * This event if fired during typing into the InPlaceEdit and returns the currently entered value. This
         * is not the content of the value property. The value property is only updated by ENTER and by leaving
         * the control.
         */
        liveChange?: Function;

        /**
         * Content control of the InPlaceEdit. The following controls are allowed: TextField, ComboBox, DropdownBox
         * and Link
         */
        content?: sap.ui.core.Control;
      }

      interface LabelOpts extends sap.ui.core.ControlOpts {
        /**
         * Defines whether the labels are in bold format.
         */
        design?: sap.ui.commons.LabelDesign;

        /**
         * Determines the text direction - right-to-left (RTL) and left-to-right (LTR).
         */
        textDirection?: sap.ui.core.TextDirection;

        /**
         * Specifies whether a line wrapping width shall be displayed when the text value is longer than the width
         * is.
         */
        wrapping?: boolean;

        /**
         * Determines the control width as common CSS-size (for example, px or % as unit).
         */
        width?: sap.ui.core.CSSSize;

        /**
         * Determines the text to be displayed.
         */
        text?: string;

        /**
         * Determines the icon to be displayed in the control. This can be a URI to an image or an icon font URI.
         */
        icon?: sap.ui.core.URI;

        /**
         * Determines the alignment of the text. Available options are `Begin`, `Center`, `End`, `Left`, and `Right`.
         */
        textAlign?: sap.ui.core.TextAlign;

        /**
         * @SINCE 1.11.0
         *
         * Allows to enforce the required indicator even when the associated control doesn't have a getRequired
         * method (a required property) or when the flag is not set. If the associated control has a required property,
         * the values of both required flags are combined with the OR operator, so a Label can't override a required=true
         * value.
         */
        required?: boolean;

        /**
         * @SINCE 1.14.0
         *
         * Determines whether the required indicator is at the beginning of the label (if set) or at the end (if
         * not set).
         */
        requiredAtBegin?: boolean;

        /**
         * Defines the association to the labeled control. By default, the label is set the for the attribute to
         * the ID of the labeled control. This can be changed with the implementation of function getIdForLabel
         * on the labelled control.
         */
        labelFor?: sap.ui.core.Control | string;
      }

      interface LinkOpts extends sap.ui.core.ControlOpts {
        /**
         * Link text to be displayed.
         */
        text?: string;

        /**
         * Whether the link can be triggered by the user.
         */
        enabled?: boolean;

        /**
         * Unique identifier used for help service.
         */
        helpId?: string;

        /**
         * The link target URI. Supports standard hyperlink behavior. If an action should be triggered, this should
         * not be set, but instead an event handler for the "press" event should be registered.
         */
        href?: sap.ui.core.URI;

        /**
         * Options are _self, _top, _blank, _parent, _search. Alternatively, a frame name can be entered.
         */
        target?: string;

        /**
         * @SINCE 1.8.0
         *
         * Width of text link. When it is set (CSS-size such as % or px), this is the exact size. When left blank,
         * the text defines the size.
         */
        width?: sap.ui.core.CSSSize;

        /**
         * Event is fired when the user clicks the control.
         */
        press?: Function;

        /**
         * Association to controls / ids which describe this control (see WAI-ARIA attribute aria-describedby).
         */
        ariaDescribedBy?: sap.ui.core.Control[] | string[];

        /**
         * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
         */
        ariaLabelledBy?: sap.ui.core.Control[] | string[];
      }

      interface ListBoxOpts extends sap.ui.core.ControlOpts {
        /**
         * Determines whether the ListBox is interactive or not. Can be used to disable interaction with mouse or
         * keyboard.
         */
        editable?: boolean;

        /**
         * Determines whether the ListBox is enabled or not. Can be used to disable interaction with mouse or keyboard.
         * Disabled controls have another color display depending on custom settings.
         */
        enabled?: boolean;

        /**
         * Determines whether multiple selection is allowed.
         */
        allowMultiSelect?: boolean;

        /**
         * Control width as common CSS-size (px or % as unit, for example).
         */
        width?: sap.ui.core.CSSSize;

        /**
         * Control height as common CSS-size (px or % as unit, for example). The setting overrides any definitions
         * made for the setVisibleItems() method.
         */
        height?: sap.ui.core.CSSSize;

        /**
         * Scroll bar position from the top. Setting the scrollTop property and calling scrollToIndex are two operations
         * influencing the same "physical" property, so the last call "wins".
         */
        scrollTop?: number;

        /**
         * Determines whether the icons of the list items shall also be displayed. Enabling icons requires some
         * space to be reserved for them. Displaying icons can also influence the width and height of a single item,
         * which affects the overall height of the ListBox when defined in number of items. Note that the number
         * of icons that can be displayed in the ListBox depends on the size of the icons themselves and of the
         * total ListBox height.
         */
        displayIcons?: boolean;

        /**
         * Determines whether the text values from the additionalText property (see sap.ui.core.ListItems) shall
         * be displayed.
         */
        displaySecondaryValues?: boolean;

        /**
         * Determines the text alignment in the primary ListBox column.
         */
        valueTextAlign?: sap.ui.core.TextAlign;

        /**
         * Determines the text alignment in the secondary ListBox text column (if available).
         */
        secondaryValueTextAlign?: sap.ui.core.TextAlign;

        /**
         * Determines the minimum width of the ListBox. If not set, there is no minimum width.
         */
        minWidth?: sap.ui.core.CSSSize;

        /**
         * Determines the maximum width of the ListBox. If not set, there is no maximum width.
         */
        maxWidth?: sap.ui.core.CSSSize;

        /**
         * The ListBox height in number of items that are initially displayed without scrolling. This setting overwrites
         * height settings in terms of CSS size that have been made. When the items have different heights, the
         * height of the first item is used for all other item height calculations. Note that if there are one or
         * more separators between the visible ListBox items, the displayed items might not relate 1:1 to the initially
         * specified number of items. When the value is retrieved, it equals the previously set value if it was
         * set; otherwise, it will be the number of items completely fitting into the ListBox without scrolling
         * in the case the control was already rendered. Note that if the control was not rendered, the behavior
         * will be undefined, it may return -1 or any other number.
         */
        visibleItems?: number;

        /**
         * Event is fired when selection is changed by user interaction.
         */
        select?: Function;

        /**
         * Aggregation of items to be displayed. Must be either of type sap.ui.core.ListItem or sap.ui.core.SeparatorItem.
         */
        items?: sap.ui.core.Item[] | sap.ui.core.Item;

        /**
         * Association to controls / ids which describe this control (see WAI-ARIA attribute aria-describedby).
         */
        ariaDescribedBy?: sap.ui.core.Control[] | string[];

        /**
         * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
         */
        ariaLabelledBy?: sap.ui.core.Control[] | string[];
      }

      interface MenuOpts extends sap.ui.unified.MenuOpts {}

      interface MenuBarOpts extends sap.ui.core.ControlOpts {
        /**
         * When the MenuBar is not enabled, automatically all single menu items are also displayed as 'disabled'.
         */
        enabled?: boolean;

        /**
         * Specifies the width of the MenuBar
         */
        width?: sap.ui.core.CSSSize;

        /**
         * Available design options are Header and Standard. Note that design settings are theme-dependent.
         */
        design?: sap.ui.commons.MenuBarDesign;

        /**
         * Aggregation of menu items.
         */
        items?: sap.ui.unified.MenuItem[] | sap.ui.unified.MenuItem;
      }

      interface MenuButtonOpts extends sap.ui.commons.ButtonOpts {
        /**
         * The position / edge (see sap.ui.core.Popup.Dock) of the button where the menu is docked. Default is 'begin
         * bottom'.
         */
        dockButton?: string;

        /**
         * The position / edge (see sap.ui.core.Popup.Dock) of the menu which is docked to the button. Default is
         * 'begin top'.
         */
        dockMenu?: string;

        /**
         * Event that is fired when a menu item is selected by the user
         */
        itemSelected?: Function;

        /**
         * Menu that shall be opened when the button is clicked
         */
        menu?: sap.ui.unified.Menu;
      }

      interface MenuItemOpts extends sap.ui.unified.MenuItemOpts {}

      interface MenuItemBaseOpts extends sap.ui.unified.MenuItemBaseOpts {}

      interface MenuTextFieldItemOpts
        extends sap.ui.unified.MenuTextFieldItemOpts {}

      interface MessageOpts extends sap.ui.core.ControlOpts {
        /**
         * "Success", or "Warning", or "Error" messages. (Mandatory)
         */
        type?: sap.ui.commons.MessageType;

        /**
         * Message short text. (Mandatory)
         */
        text?: string;

        /**
         * Associated UI element ID. (Optional) For navigation to error field.
         */
        associatedElementId?: string;

        /**
         * Internal attribute, used to force the display of the "short" or the "long" text only.
         */
        design?: string;
      }

      interface MessageBarOpts extends sap.ui.core.ControlOpts {
        /**
         * Element ID upon which the MessageBar will be initially positioned.
         */
        anchorID?: string;

        /**
         * Specifies whether or not the MessageBar is visible. Invisible controls are not rendered.
         */
        visible?: boolean;

        /**
         * Maximum number of simultaneous messages being toasted in a row. Value '0' means this dynamic part is
         * switched off.
         */
        maxToasted?: number;

        /**
         * Maximum number of messages being displayed in the List before a scrollbar appears. Value '0' means no
         * limit.
         */
        maxListed?: number;

        /**
         * Type: sap.ui.core.Popup.Dock SnapPoint of MessageBar over anchorId. Note: Use "begin" or "end" for RTL
         * support. Note: "center" is not indicated, as positioning is only set once, either via the css "left"
         * or the "right" attribute. Therefore a MessageBar will only be extended in one direction, as Messages
         * come in.
         */
        anchorSnapPoint?: string;
      }

      interface MessageListOpts extends sap.ui.core.ControlOpts {
        /**
         * Specifies whether or not the MessageList is visible. Invisible controls are not rendered.
         */
        visible?: boolean;

        /**
         * ID of the anchor under which the MessageList will render.
         */
        anchorId?: string;

        /**
         * Maximum number of messages being display in the List before a scrollbar appears. Value '0' means no limit.
         */
        maxListed?: string;
      }

      interface MessageToastOpts extends sap.ui.core.ControlOpts {
        /**
         * ID of the anchor on top of which the MessageToast is to render.
         */
        anchorId?: string;

        /**
         * Fired once the `toast()` method is over, so that the MessageBar can "toast" another message if needed.
         */
        next?: Function;
      }

      interface PaginatorOpts extends sap.ui.core.ControlOpts {
        /**
         * Represents the current page (first page has index 1, not 0, to match the visual number)
         */
        currentPage?: number;

        /**
         * Represents the overall number of pages that are embedded into the parent control
         */
        numberOfPages?: number;

        /**
         * Event is fired when the user navigates to another page by selecting it directly, or by jumping forward/backward.
         */
        page?: Function;
      }

      interface PanelOpts extends sap.ui.core.ControlOpts {
        /**
         * Determines the width of the Panel in CSS size.
         */
        width?: sap.ui.core.CSSSize;

        /**
         * Determines the height of the Panel in CSS size. Per default, the height for the Panel is automatically
         * adjusted to the content. Dimension allows to explicitly specify the height.
         */
        height?: sap.ui.core.CSSSize;

        /**
         * Represents the state of the of the Panel (enabled or disabled)
         */
        enabled?: boolean;

        /**
         * Determines the scroll position from left to right. Value "0" means leftmost position.
         */
        scrollLeft?: number;

        /**
         * Determines the scroll position from top to bottom. Value "0" means topmost position.
         */
        scrollTop?: number;

        /**
         * Determines whether the Panel will have padding. Padding is theme-dependent.
         */
        applyContentPadding?: boolean;

        /**
         * Determines whether the Panel will be initially collapsed. When it is initially collapsed, the contents
         * are not rendered. A collapsed Panel consumes less space than an expanded one.
         */
        collapsed?: boolean;

        /**
         * Determines the background color. Note that color settings are theme-dependent.
         */
        areaDesign?: sap.ui.commons.enums.AreaDesign;

        /**
         * Determines if the Panel can have a box as border. Note that displaying borders is theme-dependent.
         */
        borderDesign?: sap.ui.commons.enums.BorderDesign;

        /**
         * Determines whether the Panel will have an icon for collapsing/expanding, or not.
         */
        showCollapseIcon?: boolean;

        /**
         * Specifies the text that is rendered in the Panel header. Can be used to create a simple titles that do
         * not require an icon in the header.
         */
        text?: string;

        /**
         * Aggregates the controls that are contained in the Panel. It is recommended to use a layout control as
         * single direct child. When the Panel dimensions are set, the child control may have width and height of
         * 100%. When the dimensions are not set, the child defines the size of the Panel.
         */
        content?: sap.ui.core.Control[] | sap.ui.core.Control;

        /**
         * Aggregates the title element of the Panel. For text titles only, you alternatively could use setText()
         * which also creates a title in the background.
         */
        title?: sap.ui.core.Title;

        /**
         * The buttons that shall be displayed in the Panel header
         */
        buttons?: sap.ui.commons.Button[] | sap.ui.commons.Button;
      }

      interface PasswordFieldOpts extends sap.ui.commons.TextFieldOpts {}

      interface ProgressIndicatorOpts extends sap.ui.core.ControlOpts {
        /**
         * Determines whether the control is enabled or not. Disabled controls have different colors, and can not
         * be focused.
         */
        enabled?: boolean;

        /**
         * Determines the color of the bar which visualizes the progress. Possible values defined in the sap.ui.core.BarColor
         * enumeration are the following: CRITICAL (yellow), NEGATIVE (red), POSITIVE (green), NEUTRAL (blue) (default
         * value).
         */
        barColor?: sap.ui.core.BarColor;

        /**
         * Determines the text value that will be displayed in the bar.
         */
        displayValue?: string;

        /**
         * Determines the numerical value for the displayed length of the progress bar.
         */
        percentValue?: number;

        /**
         * Determines whether the percent value shall be rendered inside the bar.
         */
        showValue?: boolean;

        /**
         * Determines the width of the control.
         */
        width?: sap.ui.core.CSSSize;
      }

      interface RadioButtonOpts extends sap.ui.core.ControlOpts {
        /**
         * Defines the text displayed next to the RadioButton.
         */
        text?: string;

        /**
         * Displays the disabled controls in another color, depending on the customer settings.
         */
        enabled?: boolean;

        /**
         * Specifies whether the user can select the RadioButton.
         */
        editable?: boolean;

        /**
         * Specifies the select state of the RadioButton.
         */
        selected?: boolean;

        /**
         * Enumeration sap.ui.core.ValueState provides state values Error, Success, Warning and None.
         */
        valueState?: sap.ui.core.ValueState;

        /**
         * Determines the control width. By default, it depends on the text length. Alternatively, CSS sizes in
         * % or px can be set.
         */
        width?: sap.ui.core.CSSSize;

        /**
         * Defines the text direction - options are left-to-right (LTR) and right-to-left (RTL). Alternatively,
         * the control can inherit the text direction from its parent container.
         */
        textDirection?: sap.ui.core.TextDirection;

        /**
         * Defines the name of the RadioButtonGroup, in which the current RadioButton belongs to. You can define
         * a new name for the group. If no new name is specified, the default is sapUiRbDefaultGroup. By default,
         * when one of the RadioButtons in a group is selected, all others are unselected.
         */
        groupName?: string;

        /**
         * Can be used for subsequent actions.
         */
        key?: string;

        /**
         * Triggers when the user makes a change on the RadioButton.
         */
        select?: Function;

        /**
         * Association to controls / IDs, which describe this control (see WAI-ARIA attribute aria-describedby).
         */
        ariaDescribedBy?: sap.ui.core.Control[] | string[];

        /**
         * Association to controls / IDs, which label this control (see WAI-ARIA attribute aria-labelledby).
         */
        ariaLabelledBy?: sap.ui.core.Control[] | string[];
      }

      interface RadioButtonGroupOpts extends sap.ui.core.ControlOpts {
        /**
         * Defines the width of the RadioButtonGroup.
         */
        width?: sap.ui.core.CSSSize;

        /**
         * Determines the maximum number of RadioButtons displayed in one line.
         */
        columns?: number;

        /**
         * Specifies whether the user can change the selected value of the RadioButtonGroup. When the property is
         * set to false, the control obtains visual styles different from its visual styles for the normal and the
         * disabled state. Additionally the control is no longer interactive, but can receive focus.
         */
        editable?: boolean;

        /**
         * Тhe value state to be displayed for the RadioButton. Possible values are: sap.ui.core.ValueState.Error,
         * sap.ui.core.ValueState.Warning, sap.ui.core.ValueState.Success and sap.ui.core.ValueState.None. Note:
         * Setting this attribute to sap.ui.core.ValueState.Error when the accessibility feature is enabled, sets
         * the value of the invalid property for the whole RadioButtonGroup to true.
         */
        valueState?: sap.ui.core.ValueState;

        /**
         * The index of the selected/checked RadioButton.
         */
        selectedIndex?: number;

        /**
         * @SINCE 1.10.3
         *
         * Enables/disables the RadioButtonGroup. If it is disabled all RadioButtons will be displayed as disabled.
         * The enabled property of the Item will not be used in this case. If the RadioButtonGroup is enabled, the
         * enabled property of the Item will define if a RadioButton is enabled or not.
         */
        enabled?: boolean;

        /**
         * Fires when selection is changed by user interaction.
         */
        select?: Function;

        /**
         * The RadioButtons of this RadioButtonGroup.
         */
        items?: sap.ui.core.Item[] | sap.ui.core.Item;

        /**
         * Association to controls / IDs, which describe this control (see WAI-ARIA attribute aria-describedby).
         */
        ariaDescribedBy?: sap.ui.core.Control[] | string[];

        /**
         * Association to controls / IDs, which label this control (see WAI-ARIA attribute aria-labelledby).
         */
        ariaLabelledBy?: sap.ui.core.Control[] | string[];
      }

      interface RangeSliderOpts extends sap.ui.commons.SliderOpts {
        /**
         * Current second value of the slider. (Position of the second grip.)
         *
         * **Note:** If the value is not in the valid range (between `min` and `max`) it will be changed to be in
         * the valid range. If it is smaller than `value` it will be set to the same value.
         */
        value2?: number;
      }

      interface RatingIndicatorOpts extends sap.ui.core.ControlOpts {
        /**
         * Determines if the rating symbols can be edited.
         */
        editable?: boolean;

        /**
         * Determines the number of displayed rating symbols
         */
        maxValue?: number;

        /**
         * Determines the currently selected value. If value is set to sap.ui.commons.RatingIndicator.NoValue, the
         * averageValue is shown.
         */
        value?: number;

        /**
         * Determines the average value. This value is shown if no value is set. This can be used to display an
         * average Value before the user votes.
         */
        averageValue?: number;

        /**
         * The URI to the image which shall be displayed for all selected rating symbols. Note that when this attribute
         * is used, also the other icon attributes need to be set.
         */
        iconSelected?: sap.ui.core.URI;

        /**
         * The URI to the image which shall be displayed for all unselected rating symbols. If this attribute is
         * used, a requirement is that all custom icons need to have the same size. Note that when this attribute
         * is used also the other icon attributes need to be set.
         */
        iconUnselected?: sap.ui.core.URI;

        /**
         * The URI to the image which is displayed when the mouse hovers onto a rating symbol. If used, a requirement
         * is that all custom icons need to have the same size. Note that when this attribute is used also the other
         * icon attributes need to be set.
         */
        iconHovered?: sap.ui.core.URI;

        /**
         * Defines how float values are visualized: Full, Half, Continuous (see enumeration RatingIndicatorVisualMode)
         */
        visualMode?: sap.ui.commons.RatingIndicatorVisualMode;

        /**
         * The event is fired when the user has done a rating.
         */
        change?: Function;

        /**
         * Association to controls / ids which describe this control (see WAI-ARIA attribute aria-describedby).
         */
        ariaDescribedBy?: sap.ui.core.Control[] | string[];

        /**
         * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
         */
        ariaLabelledBy?: sap.ui.core.Control[] | string[];
      }

      interface ResponsiveContainerOpts extends sap.ui.core.ControlOpts {
        /**
         * The width of the responsive container.
         */
        width?: sap.ui.core.CSSSize;

        /**
         * The width of the responsive container.
         */
        height?: sap.ui.core.CSSSize;

        /**
         * The event is fired the width of the container reaches a new range.
         */
        rangeSwitch?: Function;

        /**
         * The ranges defined for this container
         */
        ranges?:
          | sap.ui.commons.ResponsiveContainerRange[]
          | sap.ui.commons.ResponsiveContainerRange;

        /**
         * The default content to show, in case the range does not provide content
         */
        defaultContent?: sap.ui.core.Control | string;
      }

      interface ResponsiveContainerRangeOpts extends sap.ui.core.ElementOpts {
        /**
         * The minimal width for this range to be displayed.
         */
        width?: sap.ui.core.CSSSize;

        /**
         * The minimal height for this range to be displayed.
         */
        height?: sap.ui.core.CSSSize;

        /**
         * A key which can be used to identify the range (optional).
         */
        key?: string;

        /**
         * The content to show for this range (optional).
         */
        content?: sap.ui.core.Control | string;
      }

      interface RichTooltipOpts extends sap.ui.core.TooltipBaseOpts {
        /**
         * Tool tip title to be displayed in the header.
         */
        title?: string;

        /**
         * If RichTooltip contains an image, this property is used to define the source path.
         */
        imageSrc?: sap.ui.core.URI;

        /**
         * @SINCE 1.11.1
         *
         * This property is an individual text that will be used instead of the default ValueState text
         */
        valueStateText?: string;

        /**
         * @SINCE 1.11.1
         *
         * This is the alt text for the image
         */
        imageAltText?: string;
      }

      interface RoadMapOpts extends sap.ui.core.ControlOpts {
        /**
         * Total number of steps to be displayed at once
         */
        numberOfVisibleSteps?: number;

        /**
         * ID of the first step to be displayed
         */
        firstVisibleStep?: string;

        /**
         * ID of the step which is currently selected
         */
        selectedStep?: string;

        /**
         * Determines the control width in CSS size
         */
        width?: sap.ui.core.CSSSize;

        /**
         * Event is fired when the user selects a step.
         */
        stepSelected?: Function;

        /**
         * Event is fired when a given step is expanded or collapsed by user.
         */
        stepExpanded?: Function;

        /**
         * Steps that are composing the RoadMap
         */
        steps?: sap.ui.commons.RoadMapStep[] | sap.ui.commons.RoadMapStep;
      }

      interface RoadMapStepOpts extends sap.ui.core.ElementOpts {
        /**
         * Label of the step
         */
        label?: string;

        /**
         * Specifies whether the user shall be allowed to click a step, or not
         */
        enabled?: boolean;

        /**
         * @deprecated (since 1.10.5) - Note that sub steps will not be supported in future. This feature might
         * be removed in one of the next releases.
         *
         * This property is only relevant when using sub steps.
         */
        expanded?: boolean;

        /**
         * Step is visible
         */
        visible?: boolean;

        /**
         * @deprecated (since 1.10.5) - Sub steps will not be supported in future. This feature might be removed
         * in one of the next releases.
         *
         * Sub steps for the current step. Will be displayed only in the case that the step is expanded. Otherwise,
         * special arrows show the availability of sub steps. One level of sub steps supported.
         */
        subSteps?: sap.ui.commons.RoadMapStep[] | sap.ui.commons.RoadMapStep;
      }

      interface RowRepeaterOpts extends sap.ui.core.ControlOpts {
        /**
         * Number of rows displayed.
         */
        numberOfRows?: number;

        /**
         * The index of the page currently displayed. The index starts at 1.
         */
        currentPage?: number;

        /**
         * Step size used to increase the numberOfRows value. This feature is only active if value is greater than
         * 0. This will deactivate the paging feature.
         */
        showMoreSteps?: number;

        /**
         * Row height adapts to rendered content. If a fixed height is specified the cells have a maximum height
         * and the overflow will be hidden.
         */
        fixedRowHeight?: sap.ui.core.CSSSize;

        /**
         * The visual design of the control.
         */
        design?: sap.ui.commons.RowRepeaterDesign;

        /**
         * Threshold to fetch the next chunk of data. The minimal threshold can be the numberOfRows of the RR.
         */
        threshold?: number;

        /**
         * This event is triggered when a filter is set.
         */
        filter?: Function;

        /**
         * This event is triggered when a sorting is applied.
         */
        sort?: Function;

        /**
         * This event is triggered when paging was executed.
         */
        page?: Function;

        /**
         * This event is triggered when the number of rows was changed.
         */
        resize?: Function;

        /**
         * Rows to be repeated.
         */
        rows?: sap.ui.core.Control[] | sap.ui.core.Control;

        /**
         * Title to be displayed in top left corner. Either text or icon.
         */
        title?: sap.ui.core.Title;

        /**
         * Filters to be provided in toolbar.
         */
        filters?:
          | sap.ui.commons.RowRepeaterFilter[]
          | sap.ui.commons.RowRepeaterFilter;

        /**
         * Sorters to be provided in secondary toolbar.
         */
        sorters?:
          | sap.ui.commons.RowRepeaterSorter[]
          | sap.ui.commons.RowRepeaterSorter;

        /**
         * This control is shown, in case there is no data available to be displayed in the RowRepeater.
         */
        noData?: sap.ui.core.Control;
      }

      interface RowRepeaterFilterOpts extends sap.ui.core.ElementOpts {
        /**
         * The filter title if needed for display.
         */
        text?: string;

        /**
         * The filter icon if needed for display.
         */
        icon?: string;

        /**
         * The set of filter objects.
         */
        filters?: object;
      }

      interface RowRepeaterSorterOpts extends sap.ui.core.ElementOpts {
        /**
         * The sorter title if needed for display.
         */
        text?: string;

        /**
         * The sorter icon if needed for display.
         */
        icon?: string;

        /**
         * The sorter object.
         */
        sorter?: object;
      }

      interface SearchFieldOpts extends sap.ui.core.ControlOpts {
        /**
         * Defines whether a pop up list shall be provided for suggestions
         */
        enableListSuggest?: boolean;

        /**
         * Defines whether the list expander shall be displayed in the case of an enabled list for suggestions.
         * This feature is deactivated on mobile devices.
         */
        showListExpander?: boolean;

        /**
         * Defines whether the clear functionality shall be active
         */
        enableClear?: boolean;

        /**
         * Defines whether an additional search button shall be displayed
         */
        showExternalButton?: boolean;

        /**
         * @SINCE 1.10.3
         *
         * When list suggestion is enabled all suggestions are cached and no suggest event is fired.
         */
        enableCache?: boolean;

        /**
         * Defines whether the search event should also be fired when the SearchField is empty (like a Filter field)
         * and when the clear button (if activated) is pressed.
         */
        enableFilterMode?: boolean;

        /**
         * Text that shall be displayed within the search field
         */
        value?: string;

        /**
         * Disabled fields have different colors, and they can not be focused.
         */
        enabled?: boolean;

        /**
         * Non-editable controls have different colors, depending on custom settings
         */
        editable?: boolean;

        /**
         * Control width in CSS-size
         */
        width?: sap.ui.core.CSSSize;

        /**
         * Maximum number of characters. Value '0' means the feature is switched off.
         */
        maxLength?: number;

        /**
         * @SINCE 1.32
         *
         * Visualizes warnings or errors related to the input field. Possible values: Warning, Error, Success, None.
         */
        valueState?: sap.ui.core.ValueState;

        /**
         * @SINCE 1.32
         *
         * Placeholder for the input field.
         */
        placeholder?: string;

        /**
         * Sets the horizontal alignment of the text
         */
        textAlign?: sap.ui.core.TextAlign;

        /**
         * Defines the number of items in the suggestion list that shall be displayed at once. If the overall number
         * of list items is higher than the setting, a scroll bar is provided.
         */
        visibleItemCount?: number;

        /**
         * Minimum length of the entered string triggering the suggestion list.
         */
        startSuggestion?: number;

        /**
         * Maximum number of suggestion items in the suggestion list.
         */
        maxSuggestionItems?: number;

        /**
         * Maximum number of history items in the suggestion list. 0 displays and stores no history. The history
         * is locally stored on the client. Therefore do not activate this feature when this control handles confidential
         * data.
         */
        maxHistoryItems?: number;

        /**
         * Event which is fired when the user triggers a search
         */
        search?: Function;

        /**
         * Event which is fired when new suggest values are required.
         */
        suggest?: Function;

        /**
         * Search provider instance which handles the suggestions for this SearchField (e.g. Open Search Protocol).
         */
        searchProvider?: sap.ui.core.search.SearchProvider;

        /**
         * Association to controls / IDs which describe this control (see WAI-ARIA attribute aria-describedby).
         */
        ariaDescribedBy?: sap.ui.core.Control[] | string[];

        /**
         * Association to controls / IDs which label this control (see WAI-ARIA attribute aria-labelledby).
         */
        ariaLabelledBy?: sap.ui.core.Control[] | string[];
      }

      interface SearchProviderOpts
        extends sap.ui.core.search.OpenSearchProviderOpts {}

      interface SegmentedButtonOpts extends sap.ui.core.ControlOpts {
        /**
         * enabled
         */
        enabled?: boolean;

        /**
         * Event fired when button selected
         */
        select?: Function;

        /**
         * Buttons
         */
        buttons?: sap.ui.commons.Button[] | sap.ui.commons.Button;

        /**
         * Selected Button
         */
        selectedButton?: sap.ui.commons.Button | string;
      }

      interface SliderOpts extends sap.ui.core.ControlOpts {
        /**
         * Width of the horizontal slider.
         */
        width?: sap.ui.core.CSSSize;

        /**
         * Minimal value of the slider.
         *
         * **Note:** If `min` is larger than `max` both values will be switched
         */
        min?: number;

        /**
         * Maximal value of the slider
         *
         * **Note:** If `min` is larger than `max` both values will be switched
         */
        max?: number;

        /**
         * Current value of the slider. (Position of the grip.)
         *
         * **Note:** If the value is not in the valid range (between `min` and `max`) it will be changed to be in
         * the valid range.
         */
        value?: number;

        /**
         * The grip can only be moved in steps of this width.
         */
        smallStepWidth?: number;

        /**
         * Number of units that are displayed by ticks. The PageUp and PageDown keys navigate according to these
         * units.
         */
        totalUnits?: number;

        /**
         * Display step numbers for the ticks on the slider.
         */
        stepLabels?: boolean;

        /**
         * Using the slider interactively requires value "true".
         */
        editable?: boolean;

        /**
         * Switches enabled state of the control. Disabled fields have different colors, and can not be focused.
         */
        enabled?: boolean;

        /**
         * Labels to be displayed instead of numbers. Attribute totalUnits and label count should be the same
         *
         * **Note:** To show the labels `stepLabels` must be activated.
         */
        labels?: string[];

        /**
         * @SINCE 1.7.1
         *
         * Orientation of slider
         */
        vertical?: boolean;

        /**
         * @SINCE 1.7.1
         *
         * Height of the vertical slider.
         */
        height?: sap.ui.core.CSSSize;

        /**
         * Value was changed. This event is fired if the value has changed by a user action.
         */
        change?: Function;

        /**
         * Value was changed. This event is fired during the mouse move. The normal change event is only fired by
         * mouseup.
         */
        liveChange?: Function;

        /**
         * Association to controls / IDs which describe this control (see WAI-ARIA attribute aria-describedby).
         */
        ariaDescribedBy?: sap.ui.core.Control[] | string[];

        /**
         * Association to controls / IDs which label this control (see WAI-ARIA attribute aria-labelledby).
         */
        ariaLabelledBy?: sap.ui.core.Control[] | string[];
      }

      interface SplitterOpts extends sap.ui.core.ControlOpts {
        /**
         * The splitter can have horizontal or vertical orientation.
         */
        splitterOrientation?: sap.ui.core.Orientation;

        /**
         * Position of splitter bar in percentage. The default value means that the splitter is positioned in the
         * middle of the area that is available for the splitter.
         */
        splitterPosition?: sap.ui.core.Percentage;

        /**
         * The minimum size (width for vertical splitter or height for horizontal splitter) of the first Pane
         */
        minSizeFirstPane?: sap.ui.core.Percentage;

        /**
         * The minimum size (width for vertical splitter or height for horizontal splitter) of the second Pane
         */
        minSizeSecondPane?: sap.ui.core.Percentage;

        /**
         * The width of the split area in px or in %
         */
        width?: sap.ui.commons.SplitterSize;

        /**
         * The height of the split area in px or in %
         */
        height?: sap.ui.commons.SplitterSize;

        /**
         * Specifies if the browser should display scroll bars or simply cut the content of a splitter pane when
         * the content does not fit into its pane.
         */
        showScrollBars?: boolean;

        /**
         * set the splitter bar to be visible or not.
         */
        splitterBarVisible?: boolean;

        /**
         * Controls inside the first pane. These are the left ones in case of defining a vertical splitter, and
         * the top ones in case of using the horizontal splitter.
         */
        firstPaneContent?: sap.ui.core.Control[] | sap.ui.core.Control;

        /**
         * Controls inside the second pane. These are the right ones in case of defining a vertical splitter, and
         * the bottom ones in case of using the horizontal splitter.
         */
        secondPaneContent?: sap.ui.core.Control[] | sap.ui.core.Control;
      }

      interface TabOpts extends sap.ui.commons.PanelOpts {
        /**
         * Specifies the vertical scrolling.
         */
        verticalScrolling?: sap.ui.core.Scrolling;

        /**
         * Specifies the horizontal scrolling.
         */
        horizontalScrolling?: sap.ui.core.Scrolling;

        /**
         * Specifies whether the tab contains a close button.
         */
        closable?: boolean;

        /**
         * @deprecated (since 0.17.0) - This property is not used. To identify the selected tab in a TabStrip selectedIndex
         * is used.
         *
         * Defines whether the tab is the active one.
         */
        selected?: boolean;
      }

      interface TabStripOpts extends sap.ui.core.ControlOpts {
        /**
         * Specifies the height of the tab bar and content area.
         */
        height?: sap.ui.core.CSSSize;

        /**
         * Specifies the width of the bar and content area.
         */
        width?: sap.ui.core.CSSSize;

        /**
         * Specifies the index of the currently selected tab.
         */
        selectedIndex?: number;

        /**
         * Specifies whether tab reordering is enabled.
         */
        enableTabReordering?: boolean;

        /**
         * Fires when the user selects a tab.
         */
        select?: Function;

        /**
         * Fires when the user closes a tab.
         */
        close?: Function;

        /**
         * The tabs contained in the TabStrip.
         */
        tabs?: sap.ui.commons.Tab[] | sap.ui.commons.Tab;
      }

      interface TextAreaOpts extends sap.ui.commons.TextFieldOpts {
        /**
         * Height of text field. When it is set (CSS-size such as % or px), this is the exact size.
         */
        height?: sap.ui.core.CSSSize;

        /**
         * Number of Columns. Cols means number of characters per row. This proprty is only used if Width is not
         * used.
         */
        cols?: number;

        /**
         * Number of Rows. This proprty is only used if Height is not used.
         */
        rows?: number;

        /**
         * Text wrapping. Possible values are: Soft, Hard, Off.
         */
        wrapping?: sap.ui.core.Wrapping;

        /**
         * Position of cursor, e.g., to let the user re-start typing at the same position as before the server roundtrip
         */
        cursorPos?: number;

        /**
         * text which appears, in case quick-help is switched on
         */
        explanation?: string;

        /**
         * @deprecated (since 1.5.2) - Please use association AriaLabelledBy instead.
         *
         * ID of label control
         */
        labeledBy?: string;
      }

      interface TextFieldOpts extends sap.ui.core.ControlOpts {
        /**
         * Text inside the `TextField`
         */
        value?: string;

        /**
         * Direction of the text. Possible values: "rtl", "ltr".
         */
        textDirection?: sap.ui.core.TextDirection;

        /**
         * Switches enabled state of the control. Disabled fields have different colors, and can not be focused.
         */
        enabled?: boolean;

        /**
         * Switches edit state of the control. Read-only fields have different colors, depending on theme setting.
         */
        editable?: boolean;

        /**
         * Depending on theme the `TextField` is shown as required. If a `Label` is assigned to the `TextField`
         * it will visualize the requires state too.
         */
        required?: boolean;

        /**
         * Width of text field. When it is set (CSS-size such as % or px), this is the exact size. When left blank,
         * the text field length defines the width.
         */
        width?: sap.ui.core.CSSSize;

        /**
         * Maximum number of characters. Value '0' means the feature is switched off.
         */
        maxLength?: number;

        /**
         * Visualizes warnings or errors related to the text field. Possible values: Warning, Error, Success.
         */
        valueState?: sap.ui.core.ValueState;

        /**
         * Sets the horizontal alignment of the text.
         */
        textAlign?: sap.ui.core.TextAlign;

        /**
         * State of the Input Method Editor (IME).
         */
        imeMode?: sap.ui.core.ImeMode;

        /**
         * Font type. valid values are Standard and Monospace.
         */
        design?: sap.ui.core.Design;

        /**
         * Unique identifier used for help service.
         */
        helpId?: string;

        /**
         * Accessibility role for the text field.
         */
        accessibleRole?: sap.ui.core.AccessibleRole;

        /**
         * The `name` property to be used in the HTML code (e.g. for HTML forms that send data to the server via
         * 'submit').
         */
        name?: string;

        /**
         * @SINCE 1.14.0
         *
         * Placeholder for the text field.
         */
        placeholder?: string;

        /**
         * Event is fired when the text in the field has changed AND the focus leaves the TextField or the Enter
         * key is pressed.
         */
        change?: Function;

        /**
         * This event if fired during typing into the `TextField` and returns the currently entered value. **Note:**
         * This is not the content of the value property. The value property is only updated by ENTER and by leaving
         * the control.
         */
        liveChange?: Function;

        /**
         * Association to controls / IDs which describe this control (see WAI-ARIA attribute aria-describedby).
         */
        ariaDescribedBy?: sap.ui.core.Control[] | string[];

        /**
         * Association to controls / IDs which label this control (see WAI-ARIA attribute aria-labelledby).
         */
        ariaLabelledBy?: sap.ui.core.Control[] | string[];
      }

      interface TextViewOpts extends sap.ui.core.ControlOpts {
        /**
         * Text to be displayed.
         */
        text?: string;

        /**
         * Determines the text directionality. Available options are LTR and RTL. Alternatively, the control can
         * inherit the text direction from its parent control.
         */
        textDirection?: sap.ui.core.TextDirection;

        /**
         * Switches the enabled state of the control. When the control is disabled, it is greyed out and no longer
         * focusable.
         */
        enabled?: boolean;

        /**
         * Unique identifier used for help services.
         */
        helpId?: string;

        /**
         * The ARIA role for the control.
         */
        accessibleRole?: sap.ui.core.AccessibleRole;

        /**
         * Defines the visual appearance of the control.
         */
        design?: sap.ui.commons.TextViewDesign;

        /**
         * Disabled automatic wrapping of the text.
         */
        wrapping?: boolean;

        /**
         * Semantic color of the text View
         */
        semanticColor?: sap.ui.commons.TextViewColor;

        /**
         * Sets the horizontal alignment of the text.
         */
        textAlign?: sap.ui.core.TextAlign;

        /**
         * Width of the TextView
         */
        width?: sap.ui.core.CSSSize;

        /**
         * Association to controls / IDs which describe this control (see WAI-ARIA attribute aria-describedby).
         */
        ariaDescribedBy?: sap.ui.core.Control[] | string[];

        /**
         * Association to controls / IDs which label this control (see WAI-ARIA attribute aria-labelledby).
         */
        ariaLabelledBy?: sap.ui.core.Control[] | string[];
      }

      interface TitleOpts extends sap.ui.core.TitleOpts {}

      interface ToggleButtonOpts extends sap.ui.commons.ButtonOpts {
        /**
         * The property is “true” when the control is toggled. The default state of this property is "false".
         */
        pressed?: boolean;
      }

      interface ToolbarOpts extends sap.ui.core.ControlOpts {
        /**
         * When there is not enough space for the toolbar to display all items, the rightmost items are overflowing
         * into a drop-down menu.
         */
        width?: sap.ui.core.CSSSize;

        /**
         * Design settings are theme-dependent.
         */
        design?: sap.ui.commons.ToolbarDesign;

        /**
         * Per default, tool bars have the stand alone status. Alternatively, they can be nested in other controls
         * and then inherit the design from their parent control.
         */
        standalone?: boolean;

        /**
         * Aggregating the tool bar items.
         */
        items?: sap.ui.commons.ToolbarItem[] | sap.ui.commons.ToolbarItem;

        /**
         * Aggregating the right side tool bar items.
         */
        rightItems?: sap.ui.commons.ToolbarItem[] | sap.ui.commons.ToolbarItem;
      }

      interface ToolbarSeparatorOpts extends sap.ui.core.ElementOpts {
        /**
         * When set to false, there is no visual indication of separation by a vertical line but by a wider space.
         */
        displayVisualSeparator?: boolean;

        /**
         * Design of the Separator.
         */
        design?: sap.ui.commons.ToolbarSeparatorDesign;
      }

      interface TreeOpts extends sap.ui.core.ControlOpts {
        /**
         * Tree title
         */
        title?: string;

        /**
         * Tree width
         */
        width?: sap.ui.core.CSSSize;

        /**
         * Tree height
         */
        height?: sap.ui.core.CSSSize;

        /**
         * Tree Header is display. If false, the tree will be in a transparent mode
         */
        showHeader?: boolean;

        /**
         * Show Header icons (e.g. Expand/Collapse all). Only consider if showHeader is true
         */
        showHeaderIcons?: boolean;

        /**
         * Display horizontal scrollbar. If false, the overflow content will be hidden
         */
        showHorizontalScrollbar?: boolean;

        /**
         * Minimal width for the Tree. Can be useful when, for example, the width is specified in percentage, to
         * avoid the tree to become too narrow when container is resize
         */
        minWidth?: sap.ui.core.CSSSize;

        /**
         * Selection mode of the Tree.
         */
        selectionMode?: sap.ui.commons.TreeSelectionMode;

        /**
         * Event is fired when a tree node is selected.
         */
        select?: Function;

        /**
         * fired when the selection of the tree has been changed
         */
        selectionChange?: Function;

        /**
         * First level nodes
         */
        nodes?: sap.ui.commons.TreeNode[] | sap.ui.commons.TreeNode;
      }

      interface TreeNodeOpts extends sap.ui.core.ElementOpts {
        /**
         * Node text
         */
        text?: string;

        /**
         * Node is expanded
         */
        expanded?: boolean;

        /**
         * Should the node has an expander.
         */
        hasExpander?: boolean;

        /**
         * Icon to display in front of the node
         */
        icon?: sap.ui.core.URI;

        /**
         * Node is selected
         */
        isSelected?: boolean;

        /**
         * The node is selectable. If true, clicking on the node text triggers "selected" event
         */
        selectable?: boolean;

        /**
         * Node state has changed.
         */
        toggleOpenState?: Function;

        /**
         * Node is selected
         */
        selected?: Function;

        /**
         * Subnodes for the current node
         */
        nodes?: sap.ui.commons.TreeNode[] | sap.ui.commons.TreeNode;

        /**
         * Association to controls / ids which describe this control (see WAI-ARIA attribute aria-describedby).
         */
        ariaDescribedBy?: sap.ui.core.Control[] | string[];

        /**
         * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
         */
        ariaLabelledBy?: sap.ui.core.Control[] | string[];
      }

      interface TriStateCheckBoxOpts extends sap.ui.core.ControlOpts {
        /**
         * Defines the states of the checkbox
         */
        selectionState?: sap.ui.commons.TriStateCheckBoxState;

        /**
         * Defines the text displayed next to the check box
         */
        text?: string;

        /**
         * Using this property, the control could be disabled, if required.
         */
        enabled?: boolean;

        /**
         * Specifies whether the user shall be allowed to flag the check box
         */
        editable?: boolean;

        /**
         * Accepts the core enumeration ValueState.type that supports 'None', 'Error', 'Warning' and 'Success'.
         */
        valueState?: sap.ui.core.ValueState;

        /**
         * The width can be set to an absolute value. If no value is set, the control width results from the text
         * length.
         */
        width?: sap.ui.core.CSSSize;

        /**
         * The value can be set to LTR or RTL. Otherwise, the control inherits the text direction from its parent
         * control.
         */
        textDirection?: sap.ui.core.TextDirection;

        /**
         * Event is triggered when the control status is changed by the user by flagging or unflagging the checkbox.
         */
        change?: Function;
      }

      interface ValueHelpFieldOpts extends sap.ui.commons.TextFieldOpts {
        /**
         * URL of the standard icon for the value help. If no parameter is supplied the default icon image will
         * be shown. This can be a URI to an image or an icon font URI.
         */
        iconURL?: sap.ui.core.URI;

        /**
         * URL of the icon for the value help when hovered. If no parameter is supplied the standard icon image
         * will be shown. If an icon font icon is used, this property is ignored.
         */
        iconHoverURL?: sap.ui.core.URI;

        /**
         * URL of the icon for the value help when disabled. If no parameter is supplied the default icon image
         * will be shown. If an icon font icon is used, this property is ignored.
         */
        iconDisabledURL?: sap.ui.core.URI;

        /**
         * Event which is fired when the ValueHelp is requested.
         */
        valueHelpRequest?: Function;
      }

      interface SplitterSize {}
      /**
       * @deprecated (since 1.38)
       *
       * Contains N sections, acting as containers for any library control
       */
      class Accordion extends sap.ui.core.Control {
        /**
         * Constructor for a new Accordion.
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
          mSettings?: AccordionOpts
        );

        /**
         * Adds some section to the aggregation {@link #getSections sections}.
         */
        addSection(
          /**
           * The section to add; if empty, nothing is inserted
           */
          oSection: sap.ui.commons.AccordionSection
        ): sap.ui.commons.Accordion;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:sectionClose sectionClose} event of this `sap.ui.commons.Accordion`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.Accordion` itself.
         *
         * Event is triggered when the user closes a section.
         */
        attachSectionClose(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.Accordion` itself
           */
          oListener?: object
        ): sap.ui.commons.Accordion;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:sectionOpen sectionOpen} event of this `sap.ui.commons.Accordion`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.Accordion` itself.
         *
         * Event is triggered when the user opens a section.
         */
        attachSectionOpen(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.Accordion` itself
           */
          oListener?: object
        ): sap.ui.commons.Accordion;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:sectionsReorder sectionsReorder} event of this
         * `sap.ui.commons.Accordion`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.Accordion` itself.
         *
         * Event is triggered when the user changes the position of a section.
         */
        attachSectionsReorder(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.Accordion` itself
           */
          oListener?: object
        ): sap.ui.commons.Accordion;
        /**
         * Closes a section and opens the default one
         */
        closeSection(
          /**
           * Id of the section that is being closed
           */
          sSectionId: string
        ): void;
        /**
         * Destroys all the sections in the aggregation {@link #getSections sections}.
         */
        destroySections(): sap.ui.commons.Accordion;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:sectionClose sectionClose} event of this `sap.ui.commons.Accordion`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachSectionClose(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.commons.Accordion;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:sectionOpen sectionOpen} event of this `sap.ui.commons.Accordion`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachSectionOpen(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.commons.Accordion;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:sectionsReorder sectionsReorder} event of
         * this `sap.ui.commons.Accordion`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachSectionsReorder(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.commons.Accordion;
        /**
         * Creates a new subclass of class sap.ui.commons.Accordion with name `sClassName` and enriches it with
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
         * Fires event {@link #event:sectionClose sectionClose} to attached listeners.
         */
        fireSectionClose(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * ID of the closed section
             */
            closeSectionId?: string;
          }
        ): sap.ui.commons.Accordion;
        /**
         * Fires event {@link #event:sectionOpen sectionOpen} to attached listeners.
         */
        fireSectionOpen(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * ID of the opened section
             */
            openSectionId?: string;
            /**
             * IDs of the sections to be closed. Can be initial in the case of no previously opened section.
             */
            closeSectionIds?: string[];
          }
        ): sap.ui.commons.Accordion;
        /**
         * Fires event {@link #event:sectionsReorder sectionsReorder} to attached listeners.
         */
        fireSectionsReorder(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * ID of the moved section
             */
            movedSectionId?: string;
            /**
             * New index of the moved section
             */
            newIndex?: number;
          }
        ): sap.ui.commons.Accordion;
        /**
         * Returns a metadata object for class sap.ui.commons.Accordion.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getOpenedSectionsId openedSectionsId}.
         *
         * Section IDs that are opened by default at application start
         */
        getOpenedSectionsId(): string;
        /**
         * Gets content of aggregation {@link #getSections sections}.
         *
         * Empty container used to display any library control
         */
        getSections(): sap.ui.commons.AccordionSection[];
        /**
         * Gets current value of property {@link #getWidth width}.
         *
         * When the specified width is less than the width of a section content, a horizontal scroll bar is provided.
         *
         * Default value is `200px`.
         */
        getWidth(): sap.ui.core.CSSSize;
        /**
         * Checks for the provided `sap.ui.commons.AccordionSection` in the aggregation {@link #getSections sections}.
         * and returns its index if found or -1 otherwise.
         */
        indexOfSection(
          /**
           * The section whose index is looked for
           */
          oSection: sap.ui.commons.AccordionSection
        ): number;
        /**
         * Inserts a section into the aggregation {@link #getSections sections}.
         */
        insertSection(
          /**
           * The section to insert; if empty, nothing is inserted
           */
          oSection: sap.ui.commons.AccordionSection,
          /**
           * The `0`-based index the section should be inserted at; for a negative value of `iIndex`, the section
           * is inserted at position 0; for a value greater than the current size of the aggregation, the section
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.commons.Accordion;
        /**
         * Opens a section
         */
        openSection(
          /**
           * Id of the section that is being opened
           */
          sSectionId: string
        ): void;
        /**
         * Removes all the controls from the aggregation {@link #getSections sections}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllSections(): sap.ui.commons.AccordionSection[];
        /**
         * Removes a section from the aggregation {@link #getSections sections}.
         */
        removeSection(
          /**
           * The section to remove or its index or id
           */
          vSection: number | string | sap.ui.commons.AccordionSection
        ): sap.ui.commons.AccordionSection;
        /**
         * Redefinition of the method to add additional handling
         */
        setOpenedSectionsId(
          /**
           * New value for property openedSectionsId
           */
          sOpenedSectionsId: string
        ): sap.ui.commons.Accordion;
        /**
         * Sets a new value for property {@link #getWidth width}.
         *
         * When the specified width is less than the width of a section content, a horizontal scroll bar is provided.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `200px`.
         */
        setWidth(
          /**
           * New value for property `width`
           */
          sWidth: sap.ui.core.CSSSize
        ): sap.ui.commons.Accordion;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:sectionClose sectionClose} event of this `sap.ui.commons.Accordion`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.Accordion` itself.
         *
         * Event is triggered when the user closes a section.
         */
        attachSectionClose(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.Accordion` itself
           */
          oListener?: object
        ): sap.ui.commons.Accordion;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:sectionOpen sectionOpen} event of this `sap.ui.commons.Accordion`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.Accordion` itself.
         *
         * Event is triggered when the user opens a section.
         */
        attachSectionOpen(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.Accordion` itself
           */
          oListener?: object
        ): sap.ui.commons.Accordion;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:sectionsReorder sectionsReorder} event of this
         * `sap.ui.commons.Accordion`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.Accordion` itself.
         *
         * Event is triggered when the user changes the position of a section.
         */
        attachSectionsReorder(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.Accordion` itself
           */
          oListener?: object
        ): sap.ui.commons.Accordion;
      }
      /**
       * @deprecated (since 1.38)
       *
       * Represents a panel which is a container for other controls. The container does not have any layout function.
       */
      class AccordionSection extends sap.ui.core.Element {
        /**
         * Constructor for a new AccordionSection.
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
          mSettings?: AccordionSectionOpts
        );

        /**
         * Adds some content to the aggregation {@link #getContent content}.
         */
        addContent(
          /**
           * The content to add; if empty, nothing is inserted
           */
          oContent: sap.ui.core.Control
        ): sap.ui.commons.AccordionSection;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:scroll scroll} event of this `sap.ui.commons.AccordionSection`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.AccordionSection` itself.
         *
         * Event is fired when the user scrolls the panel
         */
        attachScroll(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.AccordionSection` itself
           */
          oListener?: object
        ): sap.ui.commons.AccordionSection;
        /**
         * Destroys all the content in the aggregation {@link #getContent content}.
         */
        destroyContent(): sap.ui.commons.AccordionSection;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:scroll scroll} event of this `sap.ui.commons.AccordionSection`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachScroll(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.commons.AccordionSection;
        /**
         * Creates a new subclass of class sap.ui.commons.AccordionSection with name `sClassName` and enriches it
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
         * Fires event {@link #event:scroll scroll} to attached listeners.
         */
        fireScroll(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * Horizontal scroll position
             */
            left?: number;
            /**
             * Vertical scroll position
             */
            top?: number;
          }
        ): sap.ui.commons.AccordionSection;
        /**
         * @deprecated (since 1.34) - Use Accordion's "openedSectionsId" property
         *
         * Gets current value of property {@link #getCollapsed collapsed}.
         *
         * It is recommended to adjust the settings for the width when the section is set to 'collapsed'.
         *
         * Default value is `false`.
         */
        getCollapsed(): boolean;
        /**
         * Gets content of aggregation {@link #getContent content}.
         *
         * Aggregates the controls that are contained in the panel. The control layout is browser-dependent. For
         * a stable content layout, use a layout control as direct single child. When the panel dimensions are set,
         * the child control may have width and height of 100%; when the panel dimensions are not set, the child
         * defines the panel size.
         */
        getContent(): sap.ui.core.Control[];
        /**
         * Gets current value of property {@link #getEnabled enabled}.
         *
         * It is required that the used theme supports the control.
         *
         * Default value is `true`.
         */
        getEnabled(): boolean;
        /**
         * Gets current value of property {@link #getMaxHeight maxHeight}.
         *
         * When the section content exceeds maxHeight, a vertical scroll bar appears.
         */
        getMaxHeight(): sap.ui.core.CSSSize;
        /**
         * Returns a metadata object for class sap.ui.commons.AccordionSection.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getTitle title}.
         *
         * Text for the section header
         */
        getTitle(): string;
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
        ): sap.ui.commons.AccordionSection;
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
         * Property setter for the "collapsed" state
         */
        setCollapsed(
          /**
           * Whether the AccordionSection is collapsed or not
           */
          bCollapsed: boolean
        ): sap.ui.commons.AccordionSection;
        /**
         * Property setter for the "enabled" state
         */
        setEnabled(
          /**
           * Whether the AccordionSection is enabled or not
           */
          bEnabled: boolean
        ): sap.ui.commons.AccordionSection;
        /**
         * Sets a new value for property {@link #getMaxHeight maxHeight}.
         *
         * When the section content exceeds maxHeight, a vertical scroll bar appears.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setMaxHeight(
          /**
           * New value for property `maxHeight`
           */
          sMaxHeight: sap.ui.core.CSSSize
        ): sap.ui.commons.AccordionSection;
        /**
         * Sets a new value for property {@link #getTitle title}.
         *
         * Text for the section header
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setTitle(
          /**
           * New value for property `title`
           */
          sTitle: string
        ): sap.ui.commons.AccordionSection;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:scroll scroll} event of this `sap.ui.commons.AccordionSection`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.AccordionSection` itself.
         *
         * Event is fired when the user scrolls the panel
         */
        attachScroll(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.AccordionSection` itself
           */
          oListener?: object
        ): sap.ui.commons.AccordionSection;
      }
      /**
       * @deprecated (since 1.38) - Instead, use the `sap.tnt.ToolHeader` control.
       *
       * The application header control stands on the top of any application page. It consists of 4 areas: Logo
       * area, Function area provided by application, Search area, Logout area.
       */
      class ApplicationHeader extends sap.ui.core.Control {
        /**
         * Constructor for a new ApplicationHeader.
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
          mSettings?: ApplicationHeaderOpts
        );

        /**
         * Attaches event handler `fnFunction` to the {@link #event:logoff logoff} event of this `sap.ui.commons.ApplicationHeader`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.ApplicationHeader` itself.
         *
         * Fires an event to log off the user from the application. No parameters.
         */
        attachLogoff(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.ApplicationHeader` itself
           */
          oListener?: object
        ): sap.ui.commons.ApplicationHeader;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:logoff logoff} event of this `sap.ui.commons.ApplicationHeader`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachLogoff(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.commons.ApplicationHeader;
        /**
         * Creates a new subclass of class sap.ui.commons.ApplicationHeader with name `sClassName` and enriches
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
         * Fires event {@link #event:logoff logoff} to attached listeners.
         */
        fireLogoff(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ui.commons.ApplicationHeader;
        /**
         * Gets current value of property {@link #getDisplayLogoff displayLogoff}.
         *
         * Determines if the logoff area will be displayed at the right hand side of the application header.
         *
         * Default value is `true`.
         */
        getDisplayLogoff(): boolean;
        /**
         * Gets current value of property {@link #getDisplayWelcome displayWelcome}.
         *
         * Determines if the welcome text is displayed
         *
         * Default value is `true`.
         */
        getDisplayWelcome(): boolean;
        /**
         * Gets current value of property {@link #getLogoSrc logoSrc}.
         *
         * Path (src) to the logo icon to be displayed in the application header.
         */
        getLogoSrc(): sap.ui.core.URI;
        /**
         * Gets current value of property {@link #getLogoText logoText}.
         *
         * The text that will be displayed beside the logo in the application header. This property is optional.
         */
        getLogoText(): string;
        /**
         * Returns a metadata object for class sap.ui.commons.ApplicationHeader.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getUserName userName}.
         *
         * User name that will be displayed beside the welcome text
         */
        getUserName(): string;
        /**
         * Sets a new value for property {@link #getDisplayLogoff displayLogoff}.
         *
         * Determines if the logoff area will be displayed at the right hand side of the application header.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setDisplayLogoff(
          /**
           * New value for property `displayLogoff`
           */
          bDisplayLogoff: boolean
        ): sap.ui.commons.ApplicationHeader;
        /**
         * Sets a new value for property {@link #getDisplayWelcome displayWelcome}.
         *
         * Determines if the welcome text is displayed
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setDisplayWelcome(
          /**
           * New value for property `displayWelcome`
           */
          bDisplayWelcome: boolean
        ): sap.ui.commons.ApplicationHeader;
        /**
         * Sets a new value for property {@link #getLogoSrc logoSrc}.
         *
         * Path (src) to the logo icon to be displayed in the application header.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setLogoSrc(
          /**
           * New value for property `logoSrc`
           */
          sLogoSrc: sap.ui.core.URI
        ): sap.ui.commons.ApplicationHeader;
        /**
         * Sets a new value for property {@link #getLogoText logoText}.
         *
         * The text that will be displayed beside the logo in the application header. This property is optional.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setLogoText(
          /**
           * New value for property `logoText`
           */
          sLogoText: string
        ): sap.ui.commons.ApplicationHeader;
        /**
         * Sets a new value for property {@link #getUserName userName}.
         *
         * User name that will be displayed beside the welcome text
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setUserName(
          /**
           * New value for property `userName`
           */
          sUserName: string
        ): sap.ui.commons.ApplicationHeader;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:logoff logoff} event of this `sap.ui.commons.ApplicationHeader`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.ApplicationHeader` itself.
         *
         * Fires an event to log off the user from the application. No parameters.
         */
        attachLogoff(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.ApplicationHeader` itself
           */
          oListener?: object
        ): sap.ui.commons.ApplicationHeader;
      }
      /**
       * @deprecated (since 1.38)
       *
       * Used for defining areas in an image map. At runtime, the user can trigger an action, or start a URL,
       * from the single image areas.
       */
      class Area extends sap.ui.core.Element {
        /**
         * Constructor for a new Area.
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
          mSettings?: AreaOpts
        );

        /**
         * Creates a new subclass of class sap.ui.commons.Area with name `sClassName` and enriches it with the information
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
         * Gets current value of property {@link #getAlt alt}.
         *
         * Alternative text that is displayed in the case the image is not available
         */
        getAlt(): string;
        /**
         * Gets current value of property {@link #getCoords coords}.
         *
         * Coordinates of the area
         */
        getCoords(): string;
        /**
         * Gets current value of property {@link #getHref href}.
         *
         * Hyper link that is executed when the area is clicked
         */
        getHref(): sap.ui.core.URI;
        /**
         * Returns a metadata object for class sap.ui.commons.Area.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getShape shape}.
         *
         * The value is a string and can be 'rect' for rectangle, 'poly' for poligon, 'circle', or default.
         */
        getShape(): string;
        /**
         * Sets a new value for property {@link #getAlt alt}.
         *
         * Alternative text that is displayed in the case the image is not available
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setAlt(
          /**
           * New value for property `alt`
           */
          sAlt: string
        ): sap.ui.commons.Area;
        /**
         * Sets a new value for property {@link #getCoords coords}.
         *
         * Coordinates of the area
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setCoords(
          /**
           * New value for property `coords`
           */
          sCoords: string
        ): sap.ui.commons.Area;
        /**
         * Sets a new value for property {@link #getHref href}.
         *
         * Hyper link that is executed when the area is clicked
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setHref(
          /**
           * New value for property `href`
           */
          sHref: sap.ui.core.URI
        ): sap.ui.commons.Area;
        /**
         * Sets a new value for property {@link #getShape shape}.
         *
         * The value is a string and can be 'rect' for rectangle, 'poly' for poligon, 'circle', or default.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setShape(
          /**
           * New value for property `shape`
           */
          sShape: string
        ): sap.ui.commons.Area;
      }
      /**
       * @SINCE 1.10.0
       * @deprecated (since 1.38)
       *
       * Textfield with list based text completion.
       */
      class AutoComplete extends sap.ui.commons.ComboBox
        implements sap.ui.commons.ToolbarItem {
        /**
         * Constructor for a new AutoComplete.
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
          mSettings?: AutoCompleteOpts
        );

        /**
         * Attaches event handler `fnFunction` to the {@link #event:suggest suggest} event of this `sap.ui.commons.AutoComplete`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.AutoComplete` itself.
         *
         * Fired when the user has changed the value and a suggestion list update should occur.
         */
        attachSuggest(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.AutoComplete` itself
           */
          oListener?: object
        ): sap.ui.commons.AutoComplete;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:suggest suggest} event of this `sap.ui.commons.AutoComplete`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachSuggest(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.commons.AutoComplete;
        /**
         * Creates a new subclass of class sap.ui.commons.AutoComplete with name `sClassName` and enriches it with
         * the information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.commons.ComboBox.extend}.
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
         * Fires event {@link #event:suggest suggest} to attached listeners.
         */
        fireSuggest(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The current value which was typed in.
             */
            suggestValue?: string;
          }
        ): sap.ui.commons.AutoComplete;
        /**
         * Gets current value of property {@link #getEnableScrolling enableScrolling}.
         *
         * Determines whether scrolling should be enabled when the number of items is higher than maxPopupItems.
         * If set to false only the first n items (n=maxPopupItems) are shown.
         *
         * Default value is `true`.
         */
        getEnableScrolling(): boolean;
        /**
         * @deprecated (since 1.10.0) - NOT SUPPORTED
         */
        // @ts-ignore
        getListBox(): void;
        /**
         * Returns a metadata object for class sap.ui.commons.AutoComplete.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * @deprecated (since 1.10.0) - NOT SUPPORTED
         */
        // @ts-ignore
        getSelectedItemId(): void;
        /**
         * @deprecated (since 1.10.0) - NOT SUPPORTED
         */
        // @ts-ignore
        getSelectedKey(): void;
        /**
         * Sets a new value for property {@link #getEnableScrolling enableScrolling}.
         *
         * Determines whether scrolling should be enabled when the number of items is higher than maxPopupItems.
         * If set to false only the first n items (n=maxPopupItems) are shown.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setEnableScrolling(
          /**
           * New value for property `enableScrolling`
           */
          bEnableScrolling: boolean
        ): sap.ui.commons.AutoComplete;
        /**
         * Sets a custom filter function for items. Default is to check whether the item text begins with the typed
         * value.
         *
         * Example: ` function(sValue, oItem){ return jQuery.sap.startsWithIgnoreCase(oItem.getText(), sValue);
         * } `
         */
        setFilterFunction(
          /**
           * The filter function. If not set the default filter function will be used.
           */
          fFilter?: Function
        ): void;
        /**
         * @deprecated (since 1.10.0) - NOT SUPPORTED
         */
        // @ts-ignore
        setListBox(): void;
        /**
         * @deprecated (since 1.10.0) - NOT SUPPORTED
         */
        // @ts-ignore
        setSelectedItemId(): void;
        /**
         * @deprecated (since 1.10.0) - NOT SUPPORTED
         */
        // @ts-ignore
        setSelectedKey(): void;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:suggest suggest} event of this `sap.ui.commons.AutoComplete`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.AutoComplete` itself.
         *
         * Fired when the user has changed the value and a suggestion list update should occur.
         */
        attachSuggest(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.AutoComplete` itself
           */
          oListener?: object
        ): sap.ui.commons.AutoComplete;
      }
      /**
       * @deprecated (since 1.38) - replaced by {@link sap.m.Button}
       *
       * Enables users to trigger actions such as save or print. For the button UI, you can define some text or
       * an icon, or both.
       */
      class Button extends sap.ui.core.Control
        implements sap.ui.commons.ToolbarItem {
        /**
         * Constructor for a new Button.
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
          mSettings?: ButtonOpts
        );

        /**
         * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
         */
        addAriaDescribedBy(
          /**
           * The ariaDescribedBy to add; if empty, nothing is inserted
           */
          vAriaDescribedBy: sap.ui.core.ID | sap.ui.core.Control
        ): sap.ui.commons.Button;
        /**
         * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
         */
        addAriaLabelledBy(
          /**
           * The ariaLabelledBy to add; if empty, nothing is inserted
           */
          vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control
        ): sap.ui.commons.Button;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.commons.Button`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.Button` itself.
         *
         * Event is fired when the user presses the control.
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
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.Button` itself
           */
          oListener?: object
        ): sap.ui.commons.Button;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.ui.commons.Button`.
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
        ): sap.ui.commons.Button;
        /**
         * Creates a new subclass of class sap.ui.commons.Button with name `sClassName` and enriches it with the
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
         * Fires event {@link #event:press press} to attached listeners.
         */
        firePress(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ui.commons.Button;
        /**
         * Puts the focus to the button.
         */
        // @ts-ignore
        focus(): void;
        /**
         * See:
         * 	sap.ui.core.Control#getAccessibilityInfo
         */
        // @ts-ignore
        getAccessibilityInfo(): Object;
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
         * Gets current value of property {@link #getEnabled enabled}.
         *
         * Boolean property to enable the control (default is true). Buttons that are disabled have other colors
         * than enabled ones, depending on custom settings.
         *
         * Default value is `true`.
         */
        getEnabled(): boolean;
        /**
         * Gets current value of property {@link #getHeight height}.
         *
         * Specifies the button height. If this property is set, the height which is specified by the underlying
         * theme is not used any longer.
         */
        getHeight(): sap.ui.core.CSSSize;
        /**
         * Gets current value of property {@link #getHelpId helpId}.
         *
         * Unique identifier used for help service
         *
         * Default value is `empty string`.
         */
        getHelpId(): string;
        /**
         * Gets current value of property {@link #getIcon icon}.
         *
         * Icon to be displayed as graphical element within the button. This can be a URI to an image or an icon
         * font URI.
         *
         * Default value is `empty string`.
         */
        getIcon(): sap.ui.core.URI;
        /**
         * Gets current value of property {@link #getIconFirst iconFirst}.
         *
         * If set to true (default), the display sequence is 1. icon 2. control text .
         *
         * Default value is `true`.
         */
        getIconFirst(): boolean;
        /**
         * Gets current value of property {@link #getIconHovered iconHovered}.
         *
         * Icon to be displayed as graphical element within the button when it is hovered (only if also a base icon
         * was specified). If not specified the base icon is used. If an icon font icon is used, this property is
         * ignored.
         *
         * Default value is `empty string`.
         */
        getIconHovered(): sap.ui.core.URI;
        /**
         * Gets current value of property {@link #getIconSelected iconSelected}.
         *
         * Icon to be displayed as graphical element within the button when it is selected (only if also a base
         * icon was specified). If not specified the base or hovered icon is used. If an icon font icon is used,
         * this property is ignored.
         *
         * Default value is `empty string`.
         */
        getIconSelected(): sap.ui.core.URI;
        /**
         * Gets current value of property {@link #getLite lite}.
         *
         * The button is rendered as lite button.
         *
         * Default value is `false`.
         */
        getLite(): boolean;
        /**
         * Returns a metadata object for class sap.ui.commons.Button.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getStyle style}.
         *
         * Style of the button. (e.g. emphasized)
         *
         * Default value is `Default`.
         */
        getStyle(): sap.ui.commons.ButtonStyle;
        /**
         * Gets current value of property {@link #getStyled styled}.
         *
         * Indicates if the button is styled. If not it is rendered as native HTML-button. In this case a custom
         * styling can be added usig addStyleClass.
         *
         * Default value is `true`.
         */
        getStyled(): boolean;
        /**
         * Gets current value of property {@link #getText text}.
         *
         * Button text displayed at runtime.
         *
         * Default value is `empty string`.
         */
        getText(): string;
        /**
         * Gets current value of property {@link #getWidth width}.
         *
         * Control width as common CSS-size (px or % as unit, for example)
         */
        getWidth(): sap.ui.core.CSSSize;
        /**
         * Removes all the controls in the association named {@link #getAriaDescribedBy ariaDescribedBy}.
         */
        removeAllAriaDescribedBy(): sap.ui.core.ID[];
        /**
         * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
         */
        removeAllAriaLabelledBy(): sap.ui.core.ID[];
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
         * Sets a new value for property {@link #getEnabled enabled}.
         *
         * Boolean property to enable the control (default is true). Buttons that are disabled have other colors
         * than enabled ones, depending on custom settings.
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
        ): sap.ui.commons.Button;
        /**
         * Sets a new value for property {@link #getHeight height}.
         *
         * Specifies the button height. If this property is set, the height which is specified by the underlying
         * theme is not used any longer.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setHeight(
          /**
           * New value for property `height`
           */
          sHeight: sap.ui.core.CSSSize
        ): sap.ui.commons.Button;
        /**
         * Sets a new value for property {@link #getHelpId helpId}.
         *
         * Unique identifier used for help service
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `empty string`.
         */
        setHelpId(
          /**
           * New value for property `helpId`
           */
          sHelpId: string
        ): sap.ui.commons.Button;
        /**
         * Sets a new value for property {@link #getIcon icon}.
         *
         * Icon to be displayed as graphical element within the button. This can be a URI to an image or an icon
         * font URI.
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
        ): sap.ui.commons.Button;
        /**
         * Sets a new value for property {@link #getIconFirst iconFirst}.
         *
         * If set to true (default), the display sequence is 1. icon 2. control text .
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setIconFirst(
          /**
           * New value for property `iconFirst`
           */
          bIconFirst: boolean
        ): sap.ui.commons.Button;
        /**
         * Sets a new value for property {@link #getIconHovered iconHovered}.
         *
         * Icon to be displayed as graphical element within the button when it is hovered (only if also a base icon
         * was specified). If not specified the base icon is used. If an icon font icon is used, this property is
         * ignored.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `empty string`.
         */
        setIconHovered(
          /**
           * New value for property `iconHovered`
           */
          sIconHovered: sap.ui.core.URI
        ): sap.ui.commons.Button;
        /**
         * Sets a new value for property {@link #getIconSelected iconSelected}.
         *
         * Icon to be displayed as graphical element within the button when it is selected (only if also a base
         * icon was specified). If not specified the base or hovered icon is used. If an icon font icon is used,
         * this property is ignored.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `empty string`.
         */
        setIconSelected(
          /**
           * New value for property `iconSelected`
           */
          sIconSelected: sap.ui.core.URI
        ): sap.ui.commons.Button;
        /**
         * Sets a new value for property {@link #getLite lite}.
         *
         * The button is rendered as lite button.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setLite(
          /**
           * New value for property `lite`
           */
          bLite: boolean
        ): sap.ui.commons.Button;
        /**
         * Sets a new value for property {@link #getStyle style}.
         *
         * Style of the button. (e.g. emphasized)
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Default`.
         */
        setStyle(
          /**
           * New value for property `style`
           */
          sStyle: sap.ui.commons.ButtonStyle
        ): sap.ui.commons.Button;
        /**
         * Sets a new value for property {@link #getStyled styled}.
         *
         * Indicates if the button is styled. If not it is rendered as native HTML-button. In this case a custom
         * styling can be added usig addStyleClass.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setStyled(
          /**
           * New value for property `styled`
           */
          bStyled: boolean
        ): sap.ui.commons.Button;
        /**
         * Sets a new value for property {@link #getText text}.
         *
         * Button text displayed at runtime.
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
        ): sap.ui.commons.Button;
        /**
         * Sets a new value for property {@link #getWidth width}.
         *
         * Control width as common CSS-size (px or % as unit, for example)
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setWidth(
          /**
           * New value for property `width`
           */
          sWidth: sap.ui.core.CSSSize
        ): sap.ui.commons.Button;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.commons.Button`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.Button` itself.
         *
         * Event is fired when the user presses the control.
         */
        attachPress(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.Button` itself
           */
          oListener?: object
        ): sap.ui.commons.Button;
      }
      /**
       * @deprecated (since 1.38) - Tf you want to achieve a similar behavior, use a `sap.m.Popover` control and
       * open it next to your control.
       *
       * Callout is a small popup with some useful information and links that is shown when a mouse is hovered
       * over a specific view element.
       */
      class Callout extends sap.ui.commons.CalloutBase {
        /**
         * Constructor for a new Callout.
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
          mSettings?: CalloutOpts
        );

        /**
         * Adds some content to the aggregation {@link #getContent content}.
         */
        addContent(
          /**
           * The content to add; if empty, nothing is inserted
           */
          oContent: sap.ui.core.Control
        ): sap.ui.commons.Callout;
        /**
         * Destroys all the content in the aggregation {@link #getContent content}.
         */
        destroyContent(): sap.ui.commons.Callout;
        /**
         * Creates a new subclass of class sap.ui.commons.Callout with name `sClassName` and enriches it with the
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
         * Gets content of aggregation {@link #getContent content}.
         *
         * Determines the content of the Callout
         */
        getContent(): sap.ui.core.Control[];
        /**
         * Returns a metadata object for class sap.ui.commons.Callout.
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
        ): sap.ui.commons.Callout;
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
       * CalloutBase is a building block for Callout. Do not use it directly. Use the Callout control instead
       */
      class CalloutBase extends sap.ui.core.TooltipBase {
        /**
         * Constructor for a new CalloutBase.
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
          mSettings?: CalloutBaseOpts
        );

        /**
         * Adjust position of the already opened Callout window. Call this method each time when the size of the
         * opened Callout window may be changed due to new or changed contents.
         */
        adjustPosition(): void;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:beforeOpen beforeOpen} event of this `sap.ui.commons.CalloutBase`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.CalloutBase` itself.
         *
         * Event is fired before a Callout is displayed. Call the preventDefault method of the event object to postpone
         * opening. Application may use this event to start asynchronous Ajax call to load the Callout content
         */
        attachBeforeOpen(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.CalloutBase` itself
           */
          oListener?: object
        ): sap.ui.commons.CalloutBase;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:close close} event of this `sap.ui.commons.CalloutBase`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.CalloutBase` itself.
         *
         * Event is fired when the Callout window is closed.
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
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.CalloutBase` itself
           */
          oListener?: object
        ): sap.ui.commons.CalloutBase;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:open open} event of this `sap.ui.commons.CalloutBase`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.CalloutBase` itself.
         *
         * The event is fired when the popup is opened.
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
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.CalloutBase` itself
           */
          oListener?: object
        ): sap.ui.commons.CalloutBase;
        /**
         * @SINCE 1.11.0
         *
         * Attaches event handler `fnFunction` to the {@link #event:opened opened} event of this `sap.ui.commons.CalloutBase`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.CalloutBase` itself.
         *
         * Is fired when the Callout has been opened
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
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.CalloutBase` itself
           */
          oListener?: object
        ): sap.ui.commons.CalloutBase;
        /**
         * Closes Callout
         */
        close(): void;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:beforeOpen beforeOpen} event of this `sap.ui.commons.CalloutBase`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachBeforeOpen(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.commons.CalloutBase;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:close close} event of this `sap.ui.commons.CalloutBase`.
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
        ): sap.ui.commons.CalloutBase;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:open open} event of this `sap.ui.commons.CalloutBase`.
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
        ): sap.ui.commons.CalloutBase;
        /**
         * @SINCE 1.11.0
         *
         * Detaches event handler `fnFunction` from the {@link #event:opened opened} event of this `sap.ui.commons.CalloutBase`.
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
        ): sap.ui.commons.CalloutBase;
        /**
         * Creates a new subclass of class sap.ui.commons.CalloutBase with name `sClassName` and enriches it with
         * the information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.TooltipBase.extend}.
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
         * Fires event {@link #event:beforeOpen beforeOpen} to attached listeners.
         *
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event
         * object.
         */
        fireBeforeOpen(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * Parent control that has this Callout as a tooltip
             */
            parent?: sap.ui.core.Control;
          }
        ): boolean;
        /**
         * Fires event {@link #event:close close} to attached listeners.
         */
        fireClose(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ui.commons.CalloutBase;
        /**
         * Fires event {@link #event:open open} to attached listeners.
         */
        fireOpen(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * Parent control that has this Callout as a tooltip
             */
            parent?: sap.ui.core.Control;
          }
        ): sap.ui.commons.CalloutBase;
        /**
         * @SINCE 1.11.0
         *
         * Fires event {@link #event:opened opened} to attached listeners.
         */
        fireOpened(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ui.commons.CalloutBase;
        /**
         * Returns a metadata object for class sap.ui.commons.CalloutBase.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Set position of the Callout window relative to the parent control. This function automatically calculates
         * and sets the correct offset, use it instead of `setMyPosition/setAtPosition`.
         */
        setPosition(
          /**
           * docking position of the Callout
           */
          myPosition: sap.ui.core.Dock,
          /**
           * docking position of the parent control
           */
          atPosition: sap.ui.core.Dock
        ): sap.ui.commons.CalloutBase;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:beforeOpen beforeOpen} event of this `sap.ui.commons.CalloutBase`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.CalloutBase` itself.
         *
         * Event is fired before a Callout is displayed. Call the preventDefault method of the event object to postpone
         * opening. Application may use this event to start asynchronous Ajax call to load the Callout content
         */
        attachBeforeOpen(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.CalloutBase` itself
           */
          oListener?: object
        ): sap.ui.commons.CalloutBase;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:close close} event of this `sap.ui.commons.CalloutBase`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.CalloutBase` itself.
         *
         * Event is fired when the Callout window is closed.
         */
        attachClose(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.CalloutBase` itself
           */
          oListener?: object
        ): sap.ui.commons.CalloutBase;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:open open} event of this `sap.ui.commons.CalloutBase`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.CalloutBase` itself.
         *
         * The event is fired when the popup is opened.
         */
        attachOpen(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.CalloutBase` itself
           */
          oListener?: object
        ): sap.ui.commons.CalloutBase;
        /**
         * @SINCE 1.11.0
         *
         * Attaches event handler `fnFunction` to the {@link #event:opened opened} event of this `sap.ui.commons.CalloutBase`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.CalloutBase` itself.
         *
         * Is fired when the Callout has been opened
         */
        attachOpened(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.CalloutBase` itself
           */
          oListener?: object
        ): sap.ui.commons.CalloutBase;
      }
      /**
       * @SINCE 1.8.0
       * @deprecated (since 1.38) - Instead, use the `sap.m.Carousel` control.
       *
       * Carousel holds multiple controls and displays them vertically or horizontally next to each other. You
       * can define how many content items should be displayed at once or let the Carousel determine that for
       * you. Navigation is done through buttons or keys.
       */
      class Carousel extends sap.ui.core.Control {
        /**
         * Constructor for a new Carousel.
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
          mSettings?: CarouselOpts
        );

        /**
         * Adds some content to the aggregation {@link #getContent content}.
         */
        addContent(
          /**
           * The content to add; if empty, nothing is inserted
           */
          oContent: sap.ui.core.Control
        ): sap.ui.commons.Carousel;
        /**
         * Binds aggregation {@link #getContent content} to model data.
         *
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description
         * of the possible properties of `oBindingInfo`.
         */
        bindContent(
          /**
           * The binding information
           */
          oBindingInfo: object
        ): sap.ui.commons.Carousel;
        /**
         * Calculates and sets the size of the carousel, its items and its buttons
         */
        calculateAndSetSize(): void;
        /**
         * Destroys all the content in the aggregation {@link #getContent content}.
         */
        destroyContent(): sap.ui.commons.Carousel;
        /**
         * Creates a new subclass of class sap.ui.commons.Carousel with name `sClassName` and enriches it with the
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
         * Gets current value of property {@link #getAnimationDuration animationDuration}.
         *
         * Duration for animation when navigating through the contents of the Carousel
         *
         * Default value is `500`.
         */
        getAnimationDuration(): number;
        /**
         * Gets content of aggregation {@link #getContent content}.
         *
         * Controls which are displayed inside the Carousel
         */
        getContent(): sap.ui.core.Control[];
        /**
         * Gets current value of property {@link #getDefaultItemHeight defaultItemHeight}.
         *
         * Default height of the item in a carousel if no height can be determined
         *
         * Default value is `150`.
         */
        getDefaultItemHeight(): number;
        /**
         * Gets current value of property {@link #getDefaultItemWidth defaultItemWidth}.
         *
         * Default width of the item in a carousel if no height can be determined
         *
         * Default value is `150`.
         */
        getDefaultItemWidth(): number;
        /**
         * @SINCE 1.11.0
         *
         * Gets current value of property {@link #getFirstVisibleIndex firstVisibleIndex}.
         *
         * The index of the element in the content aggreation which is displayed first on rendering
         *
         * Default value is `0`.
         */
        getFirstVisibleIndex(): number;
        /**
         * Returns the focused DOM element
         */
        // @ts-ignore
        getFocusDomRef(): any;
        /**
         * Gets current value of property {@link #getHandleSize handleSize}.
         *
         * Determines the size of the handle in pixels. (Height for vertical carousel, width for horizontal carousel)
         *
         * Default value is `22`.
         */
        getHandleSize(): number;
        /**
         * Gets current value of property {@link #getHeight height}.
         *
         * Determines the height of the Carousel
         */
        getHeight(): sap.ui.core.CSSSize;
        /**
         * Returns a metadata object for class sap.ui.commons.Carousel.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getOrientation orientation}.
         *
         * Determines the orientation of the Carousel. Can be either "horizontal" or "vertical"
         *
         * Default value is `horizontal`.
         */
        getOrientation(): sap.ui.commons.enums.Orientation;
        /**
         * Gets current value of property {@link #getVisibleItems visibleItems}.
         *
         * If defined, the carousel displays the number of items defined. Items will be resized to fit the area.
         */
        getVisibleItems(): number;
        /**
         * Gets current value of property {@link #getWidth width}.
         *
         * Determines the width of the Carousel
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
        ): sap.ui.commons.Carousel;
        /**
         * If the device supports touch gestures and left swipe is triggered shows the next carousel item
         */
        onswipeleft(oEvent: any): void;
        /**
         * If the device supports touch gestures and right swipe is triggered shows the previous carousel item
         */
        onswiperight(oEvent: any): void;
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
         * Sets a new value for property {@link #getAnimationDuration animationDuration}.
         *
         * Duration for animation when navigating through the contents of the Carousel
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `500`.
         */
        setAnimationDuration(
          /**
           * New value for property `animationDuration`
           */
          iAnimationDuration: number
        ): sap.ui.commons.Carousel;
        /**
         * Sets a new value for property {@link #getDefaultItemHeight defaultItemHeight}.
         *
         * Default height of the item in a carousel if no height can be determined
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `150`.
         */
        setDefaultItemHeight(
          /**
           * New value for property `defaultItemHeight`
           */
          iDefaultItemHeight: number
        ): sap.ui.commons.Carousel;
        /**
         * Sets a new value for property {@link #getDefaultItemWidth defaultItemWidth}.
         *
         * Default width of the item in a carousel if no height can be determined
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `150`.
         */
        setDefaultItemWidth(
          /**
           * New value for property `defaultItemWidth`
           */
          iDefaultItemWidth: number
        ): sap.ui.commons.Carousel;
        /**
         * @SINCE 1.11.0
         *
         * Setter for property `firstVisibleIndex`.
         *
         * Default value is `0`
         */
        setFirstVisibleIndex(
          /**
           * new value for property `firstVisibleIndex`
           */
          iFirstVisibleIndex: number
        ): sap.ui.commons.Carousel;
        /**
         * Sets a new value for property {@link #getHandleSize handleSize}.
         *
         * Determines the size of the handle in pixels. (Height for vertical carousel, width for horizontal carousel)
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `22`.
         */
        setHandleSize(
          /**
           * New value for property `handleSize`
           */
          iHandleSize: number
        ): sap.ui.commons.Carousel;
        /**
         * Sets a new value for property {@link #getHeight height}.
         *
         * Determines the height of the Carousel
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setHeight(
          /**
           * New value for property `height`
           */
          sHeight: sap.ui.core.CSSSize
        ): sap.ui.commons.Carousel;
        /**
         * Sets a new value for property {@link #getOrientation orientation}.
         *
         * Determines the orientation of the Carousel. Can be either "horizontal" or "vertical"
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `horizontal`.
         */
        setOrientation(
          /**
           * New value for property `orientation`
           */
          sOrientation: sap.ui.commons.enums.Orientation
        ): sap.ui.commons.Carousel;
        /**
         * Sets a new value for property {@link #getVisibleItems visibleItems}.
         *
         * If defined, the carousel displays the number of items defined. Items will be resized to fit the area.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setVisibleItems(
          /**
           * New value for property `visibleItems`
           */
          iVisibleItems: number
        ): sap.ui.commons.Carousel;
        /**
         * Sets a new value for property {@link #getWidth width}.
         *
         * Determines the width of the Carousel
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setWidth(
          /**
           * New value for property `width`
           */
          sWidth: sap.ui.core.CSSSize
        ): sap.ui.commons.Carousel;
        /**
         * Shows the element with the specified Id. This can be only used after the component is rendered.
         */
        showElementWithId(
          /**
           * Id of the element to slide to.
           */
          sElementId: string
        ): void;
        /**
         * Shows the next item in carousel. This can be only used after the component is rendered.
         */
        showNext(): void;
        /**
         * Shows the previous item in carousel. This can be only used after the component is rendered.
         */
        showPrevious(): void;
        /**
         * Unbinds aggregation {@link #getContent content} from model data.
         */
        unbindContent(): sap.ui.commons.Carousel;
      }
      /**
       * @deprecated (since 1.38) - Instead, use the `sap.m.CheckBox` control.
       *
       * Provides a box which can be flagged, the box has a label. A check box can either stand alone, or in a
       * group with other check boxes. As an option, the boxes can initially be set to status 'Not Editable'.
       */
      class CheckBox extends sap.ui.core.Control {
        /**
         * Constructor for a new CheckBox.
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
          mSettings?: CheckBoxOpts
        );

        /**
         * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
         */
        addAriaDescribedBy(
          /**
           * The ariaDescribedBy to add; if empty, nothing is inserted
           */
          vAriaDescribedBy: sap.ui.core.ID | sap.ui.core.Control
        ): sap.ui.commons.CheckBox;
        /**
         * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
         */
        addAriaLabelledBy(
          /**
           * The ariaLabelledBy to add; if empty, nothing is inserted
           */
          vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control
        ): sap.ui.commons.CheckBox;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.ui.commons.CheckBox`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.CheckBox` itself.
         *
         * Event is triggered when the control status is changed by the user by flagging or unflagging the checkbox.
         */
        attachChange(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.CheckBox` itself
           */
          oListener?: object
        ): sap.ui.commons.CheckBox;
        /**
         * Binds property {@link #getChecked checked} to model data.
         *
         * See {@link sap.ui.base.ManagedObject#bindProperty ManagedObject.bindProperty} for a detailed description
         * of the possible properties of `oBindingInfo`
         */
        bindChecked(
          /**
           * The binding information
           */
          oBindingInfo: object
        ): sap.ui.commons.CheckBox;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:change change} event of this `sap.ui.commons.CheckBox`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachChange(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.commons.CheckBox;
        /**
         * Creates a new subclass of class sap.ui.commons.CheckBox with name `sClassName` and enriches it with the
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
         * Fires event {@link #event:change change} to attached listeners.
         */
        fireChange(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * Checks whether the box is flagged or not flagged.
             */
            checked?: boolean;
          }
        ): sap.ui.commons.CheckBox;
        /**
         * See:
         * 	sap.ui.core.Control#getAccessibilityInfo
         */
        // @ts-ignore
        getAccessibilityInfo(): void;
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
         * Gets current value of property {@link #getChecked checked}.
         *
         * Contains the state of the control whether it is flagged with a check mark, or not
         *
         * Default value is `false`.
         */
        getChecked(): boolean;
        /**
         * Gets current value of property {@link #getEditable editable}.
         *
         * Specifies whether the user shall be allowed to select the check box.
         *
         * Default value is `true`.
         */
        getEditable(): boolean;
        /**
         * Gets current value of property {@link #getEnabled enabled}.
         *
         * Using this property, the control could be disabled, if required.
         *
         * Default value is `true`.
         */
        getEnabled(): boolean;
        /**
         * Returns a metadata object for class sap.ui.commons.CheckBox.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getName name}.
         *
         * The 'name' property to be used in the HTML code, for example for HTML forms that send data to the server
         * via submit.
         */
        getName(): string;
        /**
         * Gets current value of property {@link #getText text}.
         *
         * Defines the text displayed next to the check box
         */
        getText(): string;
        /**
         * Gets current value of property {@link #getTextDirection textDirection}.
         *
         * The value can be set to LTR or RTL. Otherwise, the control inherits the text direction from its parent
         * control.
         *
         * Default value is `Inherit`.
         */
        getTextDirection(): sap.ui.core.TextDirection;
        /**
         * Gets current value of property {@link #getValueState valueState}.
         *
         * Accepts the core enumeration ValueState.type that supports 'None', 'Error', 'Warning' and 'Success'.
         *
         * Default value is `None`.
         */
        getValueState(): sap.ui.core.ValueState;
        /**
         * Gets current value of property {@link #getWidth width}.
         *
         * The width can be set to an absolute value. If no value is set, the control width results from the text
         * length.
         */
        getWidth(): sap.ui.core.CSSSize;
        /**
         * Removes all the controls in the association named {@link #getAriaDescribedBy ariaDescribedBy}.
         */
        removeAllAriaDescribedBy(): sap.ui.core.ID[];
        /**
         * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
         */
        removeAllAriaLabelledBy(): sap.ui.core.ID[];
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
         * Sets a new value for property {@link #getChecked checked}.
         *
         * Contains the state of the control whether it is flagged with a check mark, or not
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setChecked(
          /**
           * New value for property `checked`
           */
          bChecked: boolean
        ): sap.ui.commons.CheckBox;
        /**
         * Sets a new value for property {@link #getEditable editable}.
         *
         * Specifies whether the user shall be allowed to select the check box.
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
        ): sap.ui.commons.CheckBox;
        /**
         * Sets a new value for property {@link #getEnabled enabled}.
         *
         * Using this property, the control could be disabled, if required.
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
        ): sap.ui.commons.CheckBox;
        /**
         * Sets a new value for property {@link #getName name}.
         *
         * The 'name' property to be used in the HTML code, for example for HTML forms that send data to the server
         * via submit.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setName(
          /**
           * New value for property `name`
           */
          sName: string
        ): sap.ui.commons.CheckBox;
        /**
         * Sets a new value for property {@link #getText text}.
         *
         * Defines the text displayed next to the check box
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setText(
          /**
           * New value for property `text`
           */
          sText: string
        ): sap.ui.commons.CheckBox;
        /**
         * Sets a new value for property {@link #getTextDirection textDirection}.
         *
         * The value can be set to LTR or RTL. Otherwise, the control inherits the text direction from its parent
         * control.
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
        ): sap.ui.commons.CheckBox;
        /**
         * Sets a new value for property {@link #getValueState valueState}.
         *
         * Accepts the core enumeration ValueState.type that supports 'None', 'Error', 'Warning' and 'Success'.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `None`.
         */
        setValueState(
          /**
           * New value for property `valueState`
           */
          sValueState: sap.ui.core.ValueState
        ): sap.ui.commons.CheckBox;
        /**
         * Sets a new value for property {@link #getWidth width}.
         *
         * The width can be set to an absolute value. If no value is set, the control width results from the text
         * length.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setWidth(
          /**
           * New value for property `width`
           */
          sWidth: sap.ui.core.CSSSize
        ): sap.ui.commons.CheckBox;
        /**
         * Inverts the current value of the control.
         */
        toggle(): sap.ui.commons.CheckBox;
        /**
         * Unbinds property {@link #getChecked checked} from model data.
         */
        unbindChecked(): sap.ui.commons.CheckBox;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.ui.commons.CheckBox`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.CheckBox` itself.
         *
         * Event is triggered when the control status is changed by the user by flagging or unflagging the checkbox.
         */
        attachChange(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.CheckBox` itself
           */
          oListener?: object
        ): sap.ui.commons.CheckBox;
      }
      /**
       * @deprecated (since 1.38) - replaced by {@link sap.ui.unified.ColorPicker}
       *
       * This control gives the user the opportunity to choose a color. The color can be defined using HEX-, RGB-
       * or HSV-values or a CSS colorname.
       */
      class ColorPicker extends sap.ui.unified.ColorPicker {
        /**
         * Constructor for a new ColorPicker.
         */
        constructor(
          /**
           * id for the new control, generated automatically if no id is given
           */
          sId?: string,
          /**
           * initial settings for the new control
           */
          mSettings?: ColorPickerOpts
        );

        /**
         * Creates a new subclass of class sap.ui.commons.ColorPicker with name `sClassName` and enriches it with
         * the information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.unified.ColorPicker.extend}.
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
         * Returns a metadata object for class sap.ui.commons.ColorPicker.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
      }
      /**
       * @deprecated (since 1.38) - replaced by {@link sap.m.ComboBox}
       *
       * The control provides a field that allows end users to either enter some text, or to choose an entry out
       * of a list of pre-defined items. The choosable items can be provided in the form of a complete `ListBox`,
       * single `ListItems`.
       */
      class ComboBox extends sap.ui.commons.TextField
        implements sap.ui.commons.ToolbarItem {
        /**
         * Constructor for a new ComboBox.
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
           * Initial settings for the new control
           */
          mSettings?: ComboBoxOpts
        );

        /**
         * Compares the previous value with the current value and fires the "Change" event if the ComboBox is editable
         * and the value has changed or whether the value has been changed e.g. via up/down or auto-complete feature
         */
        // @ts-ignore
        _checkChange(
          /**
           * The event object.
           */
          oEvent: any,
          /**
           * indicate whether the check should happen immediately or delayed (e.g. to avoid focusout / click double
           * event processing)
           */
          bImmediate?: boolean
        ): void;
        /**
         * Adds some item to the aggregation {@link #getItems items}.
         */
        addItem(
          /**
           * The item to add; if empty, nothing is inserted
           */
          oItem: sap.ui.core.ListItem
        ): sap.ui.commons.ComboBox;
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
        ): sap.ui.commons.ComboBox;
        /**
         * Destroys all the items in the aggregation {@link #getItems items}.
         */
        destroyItems(): sap.ui.commons.ComboBox;
        /**
         * Creates a new subclass of class sap.ui.commons.ComboBox with name `sClassName` and enriches it with the
         * information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.commons.TextField.extend}.
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
         * Fire event change to attached listeners.
         *
         * Expects following event parameters:
         * 	 - 'newValue' of type `string` The new / changed value of the textfield.
         * 	 - 'selectedItem' of type `sap.ui.core.ListItem` selected item
         */
        // @ts-ignore
        fireChange(
          /**
           * the arguments to pass along with the event.
           */
          mArguments?: object
        ): sap.ui.commons.ComboBox;
        /**
         * See:
         * 	sap.ui.core.Control#getAccessibilityInfo
         */
        // @ts-ignore
        getAccessibilityInfo(): void;
        /**
         * Gets current value of property {@link #getDisplaySecondaryValues displaySecondaryValues}.
         *
         * Indicates whether the `additionalText` property that is available for `sap.ui.core.ListItem` shall be
         * displayed in the list.
         *
         * Default value is `false`.
         */
        getDisplaySecondaryValues(): boolean;
        /**
         * Returns the DomRef which represents the icon for value help. Could be overwritten in child-classes
         */
        getF4ButtonDomRef(): Element;
        /**
         * Gets content of aggregation {@link #getItems items}.
         *
         * `ListItems` (see `sap.ui.core.ListBox`) that shall be displayed in the list.
         */
        getItems(): sap.ui.core.ListItem[];
        /**
         * ID of the element which is the current target of the association {@link #getListBox listBox}, or `null`.
         */
        getListBox(): sap.ui.core.ID;
        /**
         * Gets current value of property {@link #getMaxPopupItems maxPopupItems}.
         *
         * Defines the number of items that shall be displayed at once. If the overall number of items is higher
         * than this setting, a scrollbar is provided.
         *
         * Default value is `10`.
         */
        getMaxPopupItems(): number;
        /**
         * Returns a metadata object for class sap.ui.commons.ComboBox.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getSelectedItemId selectedItemId}.
         *
         * Id of the selected item. If the value has no corresponding item, the `selectedItemId` is empty.
         *
         * If the `selectedItemId` is set to a not existing item, it will not be changed.
         */
        getSelectedItemId(): string;
        /**
         * Gets current value of property {@link #getSelectedKey selectedKey}.
         *
         * Key of the selected item.
         *
         * If the value has no corresponding item the key is empty.
         *
         * If duplicate keys exists the first item matching the key is used.
         *
         * If the key is set to a not existing value it will not be changed.
         */
        getSelectedKey(): string;
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
        ): sap.ui.commons.ComboBox;
        /**
         * Handle sapenter pseudo events on the control
         */
        // @ts-ignore
        onsapenter(
          /**
           * The event object.
           */
          oEvent: any
        ): void;
        /**
         * Handle sapescape pseudo events on the control
         */
        onsapescape(
          /**
           * The event object.
           */
          oEvent: any
        ): void;
        /**
         * Handle saphide pseudo events on the control
         */
        onsaphide(
          /**
           * The event object.
           */
          oEvent: any
        ): void;
        /**
         * Handle sapnextmodifiers pseudo events on the control if in toolbar prevent item navigation if popup is
         * opened.
         */
        onsapnextmodifiers(
          /**
           * The event object.
           */
          oEvent: any
        ): void;
        /**
         * Handle sapshow pseudo events on the control
         */
        onsapshow(
          /**
           * The event object.
           */
          oEvent: any
        ): void;
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
         * Sets a new value for property {@link #getDisplaySecondaryValues displaySecondaryValues}.
         *
         * Indicates whether the `additionalText` property that is available for `sap.ui.core.ListItem` shall be
         * displayed in the list.
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
        ): sap.ui.commons.ComboBox;
        /**
         * Sets the associated {@link #getListBox listBox}.
         */
        setListBox(
          /**
           * ID of an element which becomes the new target of this listBox association; alternatively, an element
           * instance may be given
           */
          oListBox: sap.ui.core.ID | sap.ui.commons.ListBox
        ): sap.ui.commons.ComboBox;
        /**
         * Sets a new value for property {@link #getMaxPopupItems maxPopupItems}.
         *
         * Defines the number of items that shall be displayed at once. If the overall number of items is higher
         * than this setting, a scrollbar is provided.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `10`.
         */
        setMaxPopupItems(
          /**
           * New value for property `maxPopupItems`
           */
          iMaxPopupItems: number
        ): sap.ui.commons.ComboBox;
        /**
         * Sets a new value for property {@link #getSelectedItemId selectedItemId}.
         *
         * Id of the selected item. If the value has no corresponding item, the `selectedItemId` is empty.
         *
         * If the `selectedItemId` is set to a not existing item, it will not be changed.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setSelectedItemId(
          /**
           * New value for property `selectedItemId`
           */
          sSelectedItemId: string
        ): sap.ui.commons.ComboBox;
        /**
         * Sets a new value for property {@link #getSelectedKey selectedKey}.
         *
         * Key of the selected item.
         *
         * If the value has no corresponding item the key is empty.
         *
         * If duplicate keys exists the first item matching the key is used.
         *
         * If the key is set to a not existing value it will not be changed.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setSelectedKey(
          /**
           * New value for property `selectedKey`
           */
          sSelectedKey: string
        ): sap.ui.commons.ComboBox;
        /**
         * Unbinds aggregation {@link #getItems items} from model data.
         */
        unbindItems(): sap.ui.commons.ComboBox;
      }
      /**
       * @deprecated (since 1.38) - replaced by {@link sap.m.DatePicker}
       *
       * Allows end users to interact with dates. Entries can directly be written in, or selected from a calendar
       * pad. Note: Dates can always be manually entered in the fix YYYYMMDD format, on top of the flexible "locale"
       * format. If the value is provided via data binding, using a Date.type the formatter of the Date.type is
       * used. Since version 1.22 the unified.Calendar is used inside the datePicker. So applications using the
       * DatePicker should load the unified library. Otherwise it will be loaded the first time a DatePicker is
       * opened.
       */
      class DatePicker extends sap.ui.commons.TextField {
        /**
         * Constructor for a new DatePicker.
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
          mSettings?: DatePickerOpts
        );

        /**
         * Creates a new subclass of class sap.ui.commons.DatePicker with name `sClassName` and enriches it with
         * the information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.commons.TextField.extend}.
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
         * Fire event change to attached listeners.
         *
         * Provides the following event parameters:
         * 	 - 'newValue' of type `string` The new / changed value of the DatePicker.
         * 	 - 'newYyyymmdd' of type `string` The new / changed Yyyymmdd of the DatePicker.
         * 	 - 'invalidValue' of type `boolean` The new / changed value of the DatePicker is not a valid date.
         */
        // @ts-ignore
        fireChange(
          /**
           * true is value is invalid
           */
          bInvalidValue: boolean
        ): sap.ui.commons.DatePicker;
        /**
         * See:
         * 	sap.ui.core.Control#getAccessibilityInfo
         */
        // @ts-ignore
        getAccessibilityInfo(): Object;
        /**
         * Gets current value of property {@link #getLocale locale}.
         *
         * Defines the locale (language and country), e.g. "en-US", whose translations and Date formatters should
         * be used to render the DatePicker.If the value property is bound to a model using a Date type the locale
         * will be ignored, because the locale information of the model are used.
         */
        getLocale(): string;
        /**
         * Returns a metadata object for class sap.ui.commons.DatePicker.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getYyyymmdd yyyymmdd}.
         *
         * Defines the date as a "yyyymmdd" string, independent from the format used. The inherited textField "value"
         * attribute uses the date format as configured via the locale. The date is interpreted as gregorian date
         */
        getYyyymmdd(): string;
        /**
         * Sets a new value for property {@link #getLocale locale}.
         *
         * Defines the locale (language and country), e.g. "en-US", whose translations and Date formatters should
         * be used to render the DatePicker.If the value property is bound to a model using a Date type the locale
         * will be ignored, because the locale information of the model are used.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setLocale(
          /**
           * New value for property `locale`
           */
          sLocale: string
        ): sap.ui.commons.DatePicker;
        /**
         * Sets a new value for property {@link #getYyyymmdd yyyymmdd}.
         *
         * Defines the date as a "yyyymmdd" string, independent from the format used. The inherited textField "value"
         * attribute uses the date format as configured via the locale. The date is interpreted as gregorian date
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setYyyymmdd(
          /**
           * New value for property `yyyymmdd`
           */
          sYyyymmdd: string
        ): sap.ui.commons.DatePicker;
      }
      /**
       * @deprecated (since 1.38) - Instead, use the `sap.m.Dialog` control.
       *
       * An interactive window appearing on request displaying information to the user. The API supports features
       * such as popups with fixed sizes, popups with unlimited width, scrolling bars for large windows, and control
       * nesting (for example, a drop-down list can be included in the window).
       */
      class Dialog extends sap.ui.core.Control
        implements sap.ui.core.PopupInterface {
        /**
         * Constructor for a new Dialog.
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
          mSettings?: DialogOpts
        );

        /**
         * Adds some button to the aggregation {@link #getButtons buttons}.
         */
        addButton(
          /**
           * The button to add; if empty, nothing is inserted
           */
          oButton: sap.ui.core.Control
        ): sap.ui.commons.Dialog;
        /**
         * Adds some content to the aggregation {@link #getContent content}.
         */
        addContent(
          /**
           * The content to add; if empty, nothing is inserted
           */
          oContent: sap.ui.core.Control
        ): sap.ui.commons.Dialog;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:closed closed} event of this `sap.ui.commons.Dialog`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.Dialog` itself.
         *
         * Event is fired when the dialog has been closed (after closing-animation etc.). Event parameters provide
         * information about last position and last size.
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
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.Dialog` itself
           */
          oListener?: object
        ): sap.ui.commons.Dialog;
        /**
         * Closes the dialog control instance.
         */
        close(): void;
        /**
         * Destroys all the buttons in the aggregation {@link #getButtons buttons}.
         */
        destroyButtons(): sap.ui.commons.Dialog;
        /**
         * Destroys all the content in the aggregation {@link #getContent content}.
         */
        destroyContent(): sap.ui.commons.Dialog;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:closed closed} event of this `sap.ui.commons.Dialog`.
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
        ): sap.ui.commons.Dialog;
        /**
         * Creates a new subclass of class sap.ui.commons.Dialog with name `sClassName` and enriches it with the
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
         * Fires event {@link #event:closed closed} to attached listeners.
         */
        fireClosed(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The width of the dialog when closed
             */
            width?: number;
            /**
             * The height of the dialog when closed
             */
            height?: number;
            /**
             * The top position of the dialog when closed
             */
            top?: number;
            /**
             * The left position of the dialog when closed
             */
            left?: number;
          }
        ): sap.ui.commons.Dialog;
        /**
         * Gets current value of property {@link #getAccessibleRole accessibleRole}.
         *
         * The ARIA role for the control. E.g. for alert-style Dialogs this can be set to "AlertDialog".
         *
         * Default value is `Dialog`.
         */
        getAccessibleRole(): sap.ui.core.AccessibleRole;
        /**
         * Gets current value of property {@link #getApplyContentPadding applyContentPadding}.
         *
         * Padding is theme-dependent. When set to "false", the content extends to the dialog borders.
         *
         * Default value is `true`.
         */
        getApplyContentPadding(): boolean;
        /**
         * @SINCE 1.10
         *
         * Gets current value of property {@link #getAutoClose autoClose}.
         *
         * If this property is set to true the Dialog will close if the Dialog loses its focus
         *
         * Default value is `false`.
         */
        getAutoClose(): boolean;
        /**
         * Gets content of aggregation {@link #getButtons buttons}.
         *
         * Aggregation of the buttons to display at the bottom of the dialog, for example OK and Cancel. Association
         * defaultButton can be used for one of the defined buttons.
         */
        getButtons(): sap.ui.core.Control[];
        /**
         * Gets content of aggregation {@link #getContent content}.
         *
         * Aggregation of the content of the dialog (one or more controls).
         *
         * Warning: when content is added with width given as a percentage, the Dialog itself should have a width
         * set.
         */
        getContent(): sap.ui.core.Control[];
        /**
         * Gets current value of property {@link #getContentBorderDesign contentBorderDesign}.
         *
         * Specifies the border design. Border design is theme dependent.
         *
         * Default value is `None`.
         */
        getContentBorderDesign(): sap.ui.commons.enums.BorderDesign;
        /**
         * ID of the element which is the current target of the association {@link #getDefaultButton defaultButton},
         * or `null`.
         */
        getDefaultButton(): sap.ui.core.ID;
        /**
         * @EXPERIMENTAL
         *
         * Determines whether the dialog is currently enabled or not.
         *
         * Applications can't control the enabled state via a property. A dialog is implicitly enabled depending
         * on its `openState`. Descendant controls that honor the enabled state of their ancestors will appear disabled
         * after the dialog is closed.
         */
        getEnabled(): boolean;
        /**
         * Gets current value of property {@link #getHeight height}.
         *
         * Outer height of dialog window. When not set and not constrained by one of the height parameters (minHeight/maxHeight),
         * the window size is automatically adapted to the content.
         */
        getHeight(): sap.ui.core.CSSSize;
        /**
         * ID of the element which is the current target of the association {@link #getInitialFocus initialFocus},
         * or `null`.
         */
        getInitialFocus(): sap.ui.core.ID;
        /**
         * @SINCE 1.9.0
         *
         * Gets current value of property {@link #getKeepInWindow keepInWindow}.
         *
         * Specifies whether Dialog movement should be restricted to the visible area of the window. This only affects
         * drag&drop movements by the user. This doesn't affect modal dialogs -> modal dialogs always stay in the
         * window.
         *
         * Default value is `false`.
         */
        getKeepInWindow(): boolean;
        /**
         * Gets current value of property {@link #getMaxHeight maxHeight}.
         *
         * Maximum outer height of the dialog window. If set, neither the user nor some layout settings can make
         * the window larger.
         */
        getMaxHeight(): sap.ui.core.CSSSize;
        /**
         * Gets current value of property {@link #getMaxWidth maxWidth}.
         *
         * Maximum outer width of the dialog window. If set, neither the user nor some layout settings can make
         * the window larger.
         */
        getMaxWidth(): sap.ui.core.CSSSize;
        /**
         * Returns a metadata object for class sap.ui.commons.Dialog.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getMinHeight minHeight}.
         *
         * Minimum outer height of the dialog window. When set, neither the user nor some layout settings can make
         * the window smaller.
         */
        getMinHeight(): sap.ui.core.CSSSize;
        /**
         * Gets current value of property {@link #getMinWidth minWidth}.
         *
         * Minimum outer width of the dialog window. When set, neither the user nor some layout settings can make
         * the window smaller.
         */
        getMinWidth(): sap.ui.core.CSSSize;
        /**
         * Gets current value of property {@link #getModal modal}.
         *
         * Specifies whether the dialog should be modal, or not. In case of `true` the focus is kept inside the
         * dialog.
         *
         * Default value is `false`.
         */
        getModal(): boolean;
        /**
         * Indicates whether the Dialog is currently open, closed, or transitioning between these states.
         */
        getOpenState(): sap.ui.core.OpenState;
        /**
         * Gets current value of property {@link #getResizable resizable}.
         *
         * Specifies whether the dialog window can be resized by the user. The dialog frame contains the visual
         * symbol.
         *
         * Default value is `true`.
         */
        getResizable(): boolean;
        /**
         * Gets current value of property {@link #getScrollLeft scrollLeft}.
         *
         * Scroll position from left to right. "0" means leftmost position.
         *
         * Default value is `0`.
         */
        getScrollLeft(): number;
        /**
         * Gets current value of property {@link #getScrollTop scrollTop}.
         *
         * Scroll position from top to bottom. "0" means topmost position.
         *
         * Default value is `0`.
         */
        getScrollTop(): number;
        /**
         * Gets current value of property {@link #getShowCloseButton showCloseButton}.
         *
         * Displays a close button in the title bar.
         *
         * Default value is `true`.
         */
        getShowCloseButton(): boolean;
        /**
         * Gets current value of property {@link #getTitle title}.
         *
         * Dialog title displayed in the header.
         *
         * Default value is `empty string`.
         */
        getTitle(): string;
        /**
         * Gets current value of property {@link #getWidth width}.
         *
         * Outer width of dialog window. When not set and not constrained by one of the width parameters (minWidth/maxWidth),
         * the window size is automatically adapted to the content.
         */
        getWidth(): sap.ui.core.CSSSize;
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
        ): sap.ui.commons.Dialog;
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
        ): sap.ui.commons.Dialog;
        /**
         * Indicates whether the Dialog is open (this includes opening and closing animations). For more detailed
         * information about the current state check Dialog.getOpenState().
         */
        isOpen(): boolean;
        /**
         * Opens the dialog control instance.
         */
        open(): void;
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
         * Sets a new value for property {@link #getAccessibleRole accessibleRole}.
         *
         * The ARIA role for the control. E.g. for alert-style Dialogs this can be set to "AlertDialog".
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Dialog`.
         */
        setAccessibleRole(
          /**
           * New value for property `accessibleRole`
           */
          sAccessibleRole: sap.ui.core.AccessibleRole
        ): sap.ui.commons.Dialog;
        /**
         * Sets a new value for property {@link #getApplyContentPadding applyContentPadding}.
         *
         * Padding is theme-dependent. When set to "false", the content extends to the dialog borders.
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
        ): sap.ui.commons.Dialog;
        /**
         * @SINCE 1.10
         *
         * Sets a new value for property {@link #getAutoClose autoClose}.
         *
         * If this property is set to true the Dialog will close if the Dialog loses its focus
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
        ): sap.ui.commons.Dialog;
        /**
         * Sets a new value for property {@link #getContentBorderDesign contentBorderDesign}.
         *
         * Specifies the border design. Border design is theme dependent.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `None`.
         */
        setContentBorderDesign(
          /**
           * New value for property `contentBorderDesign`
           */
          sContentBorderDesign: sap.ui.commons.enums.BorderDesign
        ): sap.ui.commons.Dialog;
        /**
         * Sets the associated {@link #getDefaultButton defaultButton}.
         */
        setDefaultButton(
          /**
           * ID of an element which becomes the new target of this defaultButton association; alternatively, an element
           * instance may be given
           */
          oDefaultButton: sap.ui.core.ID | sap.ui.commons.Button
        ): sap.ui.commons.Dialog;
        /**
         * Sets a new value for property {@link #getHeight height}.
         *
         * Outer height of dialog window. When not set and not constrained by one of the height parameters (minHeight/maxHeight),
         * the window size is automatically adapted to the content.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setHeight(
          /**
           * New value for property `height`
           */
          sHeight: sap.ui.core.CSSSize
        ): sap.ui.commons.Dialog;
        /**
         * Sets the associated {@link #getInitialFocus initialFocus}.
         */
        setInitialFocus(
          /**
           * ID of an element which becomes the new target of this initialFocus association; alternatively, an element
           * instance may be given
           */
          oInitialFocus: sap.ui.core.ID | sap.ui.core.Control
        ): sap.ui.commons.Dialog;
        /**
         * @SINCE 1.9.0
         *
         * Sets a new value for property {@link #getKeepInWindow keepInWindow}.
         *
         * Specifies whether Dialog movement should be restricted to the visible area of the window. This only affects
         * drag&drop movements by the user. This doesn't affect modal dialogs -> modal dialogs always stay in the
         * window.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setKeepInWindow(
          /**
           * New value for property `keepInWindow`
           */
          bKeepInWindow: boolean
        ): sap.ui.commons.Dialog;
        /**
         * Sets a new value for property {@link #getMaxHeight maxHeight}.
         *
         * Maximum outer height of the dialog window. If set, neither the user nor some layout settings can make
         * the window larger.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setMaxHeight(
          /**
           * New value for property `maxHeight`
           */
          sMaxHeight: sap.ui.core.CSSSize
        ): sap.ui.commons.Dialog;
        /**
         * Sets a new value for property {@link #getMaxWidth maxWidth}.
         *
         * Maximum outer width of the dialog window. If set, neither the user nor some layout settings can make
         * the window larger.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setMaxWidth(
          /**
           * New value for property `maxWidth`
           */
          sMaxWidth: sap.ui.core.CSSSize
        ): sap.ui.commons.Dialog;
        /**
         * Sets a new value for property {@link #getMinHeight minHeight}.
         *
         * Minimum outer height of the dialog window. When set, neither the user nor some layout settings can make
         * the window smaller.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setMinHeight(
          /**
           * New value for property `minHeight`
           */
          sMinHeight: sap.ui.core.CSSSize
        ): sap.ui.commons.Dialog;
        /**
         * Sets a new value for property {@link #getMinWidth minWidth}.
         *
         * Minimum outer width of the dialog window. When set, neither the user nor some layout settings can make
         * the window smaller.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setMinWidth(
          /**
           * New value for property `minWidth`
           */
          sMinWidth: sap.ui.core.CSSSize
        ): sap.ui.commons.Dialog;
        /**
         * Sets a new value for property {@link #getModal modal}.
         *
         * Specifies whether the dialog should be modal, or not. In case of `true` the focus is kept inside the
         * dialog.
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
        ): sap.ui.commons.Dialog;
        /**
         * Sets a new value for property {@link #getResizable resizable}.
         *
         * Specifies whether the dialog window can be resized by the user. The dialog frame contains the visual
         * symbol.
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
        ): sap.ui.commons.Dialog;
        /**
         * Sets a new value for property {@link #getScrollLeft scrollLeft}.
         *
         * Scroll position from left to right. "0" means leftmost position.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `0`.
         */
        setScrollLeft(
          /**
           * New value for property `scrollLeft`
           */
          iScrollLeft: number
        ): sap.ui.commons.Dialog;
        /**
         * Sets a new value for property {@link #getScrollTop scrollTop}.
         *
         * Scroll position from top to bottom. "0" means topmost position.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `0`.
         */
        setScrollTop(
          /**
           * New value for property `scrollTop`
           */
          iScrollTop: number
        ): sap.ui.commons.Dialog;
        /**
         * Sets a new value for property {@link #getShowCloseButton showCloseButton}.
         *
         * Displays a close button in the title bar.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setShowCloseButton(
          /**
           * New value for property `showCloseButton`
           */
          bShowCloseButton: boolean
        ): sap.ui.commons.Dialog;
        /**
         * Sets a new value for property {@link #getTitle title}.
         *
         * Dialog title displayed in the header.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `empty string`.
         */
        setTitle(
          /**
           * New value for property `title`
           */
          sTitle: string
        ): sap.ui.commons.Dialog;
        /**
         * Sets a new value for property {@link #getWidth width}.
         *
         * Outer width of dialog window. When not set and not constrained by one of the width parameters (minWidth/maxWidth),
         * the window size is automatically adapted to the content.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setWidth(
          /**
           * New value for property `width`
           */
          sWidth: sap.ui.core.CSSSize
        ): sap.ui.commons.Dialog;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:closed closed} event of this `sap.ui.commons.Dialog`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.Dialog` itself.
         *
         * Event is fired when the dialog has been closed (after closing-animation etc.). Event parameters provide
         * information about last position and last size.
         */
        attachClosed(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.Dialog` itself
           */
          oListener?: object
        ): sap.ui.commons.Dialog;
      }
      /**
       * @deprecated (since 1.38) - replaced by {@link sap.m.ComboBox}
       *
       * The control provides a field that allows end users to an entry out of a list of pre-defined items. The
       * choosable items can be provided in the form of a complete `ListBox`, single `ListItems`.
       */
      class DropdownBox extends sap.ui.commons.ComboBox {
        /**
         * Constructor for a new DropdownBox.
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
           * Initial settings for the new control
           */
          mSettings?: DropdownBoxOpts
        );

        /**
         * Attaches event handler `fnFunction` to the {@link #event:searchHelp searchHelp} event of this `sap.ui.commons.DropdownBox`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.DropdownBox` itself.
         *
         * Event fired whenever the configured searchHelpItem is clicked or the searchHelpItem is configured and
         * F4 key is pressed.
         */
        attachSearchHelp(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.DropdownBox` itself
           */
          oListener?: object
        ): sap.ui.commons.DropdownBox;
        /**
         * Using this method the history of the DropdownBox can be cleared. This might be necessary if the items
         * of the DropdownBox have changed. Otherwise invalid items may appear in the history.
         */
        clearHistory(): void;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:searchHelp searchHelp} event of this `sap.ui.commons.DropdownBox`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachSearchHelp(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.commons.DropdownBox;
        /**
         * Creates a new subclass of class sap.ui.commons.DropdownBox with name `sClassName` and enriches it with
         * the information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.commons.ComboBox.extend}.
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
         * Fires event {@link #event:searchHelp searchHelp} to attached listeners.
         */
        fireSearchHelp(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The current value of the DropdownBox.
             */
            value?: string;
          }
        ): sap.ui.commons.DropdownBox;
        /**
         * Gets current value of property {@link #getMaxHistoryItems maxHistoryItems}.
         *
         * Maximum number of history items in the list.
         *
         * If 0 no history is displayed or stored. The history is locally stored on the client. Therefore do not
         * activate this feature when this control handles confidential data.
         *
         * Default value is `0`.
         */
        getMaxHistoryItems(): number;
        /**
         * Returns a metadata object for class sap.ui.commons.DropdownBox.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getSearchHelpAdditionalText searchHelpAdditionalText}.
         *
         * (optional) The additional Text to use for the search help entry.
         */
        getSearchHelpAdditionalText(): string;
        /**
         * Gets current value of property {@link #getSearchHelpEnabled searchHelpEnabled}.
         *
         * Whether the DropdownBox's search help should be enabled.
         *
         * Default value is `false`.
         */
        getSearchHelpEnabled(): boolean;
        /**
         * Gets current value of property {@link #getSearchHelpIcon searchHelpIcon}.
         *
         * (optional) The URI of the icon to use for the search help entry.
         */
        getSearchHelpIcon(): sap.ui.core.URI;
        /**
         * Gets current value of property {@link #getSearchHelpText searchHelpText}.
         *
         * (optional) The text to use for the search help entry.
         */
        getSearchHelpText(): string;
        /**
         * Extends the method inherited from sap.ui.core.Element by providing information on Search Help access
         * (if needed)
         */
        // @ts-ignore
        getTooltip_AsString(): string;
        /**
         * Ensure that handed in ListBoxes are taken from the visible UI immediately.
         */
        // @ts-ignore
        onAfterRendering(
          /**
           * The event object.
           */
          oEvent: any
        ): void;
        /**
         * Handle the click event happening in the DropdownBox
         */
        onclick(
          /**
           * The event object.
           */
          oEvent: any
        ): void;
        /**
         * Handle focusin event Ensures the text gets selected when focus gets into the field
         */
        // @ts-ignore
        onfocusin(
          /**
           * the occuring event
           */
          oEvent: any
        ): void;
        /**
         * Handle keydown event
         */
        onkeydown(
          /**
           * the occuring event
           */
          oEvent: any
        ): void;
        /**
         * Handle keypress event
         */
        onkeypress(
          /**
           * the occuring event
           */
          oEvent: any
        ): void;
        /**
         * Handle keyup event This must only be considered if it is from Backspace-key in IE or after paste. In
         * case there is a keyup with a tab this results from being entered via tabbing and can be ignored, too.
         */
        // @ts-ignore
        onkeyup(
          /**
           * the occuring event
           */
          oEvent: any
        ): void;
        /**
         * Handle paste event
         */
        onpaste(
          /**
           * the occuring event
           */
          oEvent: any
        ): void;
        /**
         * Handle pseudo event onsapdelete. If triggered with open dropdown and current item provided by history
         * feature, removes the selected item from this instance's history.
         */
        onsapdelete(
          /**
           * the occuring event
           */
          oEvent: any
        ): void;
        /**
         * Handle pseudo event onsaphome
         */
        onsaphome(
          /**
           * the occuring event
           */
          oEvent: any
        ): void;
        /**
         * Move the cursor one step to the left (and adapt selection)
         */
        onsapleft(
          /**
           * The event object.
           */
          oEvent: any
        ): void;
        /**
         * Move the cursor one step to the right (and adapt selection)
         */
        onsapright(
          /**
           * The event object.
           */
          oEvent: any
        ): void;
        /**
         * Handle sapshow pseudo events on the control
         */
        // @ts-ignore
        onsapshow(
          /**
           * The event object.
           */
          oEvent: any
        ): void;
        /**
         * Handle the select event happening in the DropdownBox
         */
        onselect(
          /**
           * The event object.
           */
          oEvent: any
        ): void;
        /**
         * Sets a new value for property {@link #getMaxHistoryItems maxHistoryItems}.
         *
         * Maximum number of history items in the list.
         *
         * If 0 no history is displayed or stored. The history is locally stored on the client. Therefore do not
         * activate this feature when this control handles confidential data.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `0`.
         */
        setMaxHistoryItems(
          /**
           * New value for property `maxHistoryItems`
           */
          iMaxHistoryItems: number
        ): sap.ui.commons.DropdownBox;
        /**
         * Overwrite of Setter for property `searchHelpAdditionalText`.
         *
         * Default value is empty/`undefined`
         */
        setSearchHelpAdditionalText(
          /**
           * new value for property `searchHelpAdditionalText`
           */
          sSearchHelpAdditionalText: string
        ): sap.ui.commons.DropdownBox;
        /**
         * Overwrite of Setter for property `searchHelpEnabled`. This method accepts additional parameter to be
         * compatiple with the previous functionality
         *
         * Default value is `false`
         */
        setSearchHelpEnabled(
          /**
           * new value for property `searchHelpEnabled`
           */
          bEnabled: boolean,
          /**
           * new value for property `searchHelpText`
           */
          sText: string,
          /**
           * new value for property `searchHelpAdditionalText`
           */
          sAdditionalText: string,
          /**
           * new value for property `searchHelpIcon`
           */
          sIcon: string
        ): sap.ui.commons.DropdownBox;
        /**
         * Overwrite of Setter for property `searchHelpIcon`.
         *
         * Default value is empty/`undefined`
         */
        setSearchHelpIcon(
          /**
           * new value for property `searchHelpIcon`
           */
          sSearchHelpIcon: sap.ui.core.URI
        ): sap.ui.commons.DropdownBox;
        /**
         * Overwrite of Setter for property `searchHelpText`.
         *
         * Default value is empty/`undefined`
         */
        setSearchHelpText(
          /**
           * new value for property `searchHelpText`
           */
          sSearchHelpText: string
        ): sap.ui.commons.DropdownBox;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:searchHelp searchHelp} event of this `sap.ui.commons.DropdownBox`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.DropdownBox` itself.
         *
         * Event fired whenever the configured searchHelpItem is clicked or the searchHelpItem is configured and
         * F4 key is pressed.
         */
        attachSearchHelp(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.DropdownBox` itself
           */
          oListener?: object
        ): sap.ui.commons.DropdownBox;
      }
      /**
       * @deprecated (since 1.21.0) - Please use the control sap.ui.unified.FileUploader of the library sap.ui.unified
       * instead.
       *
       * The framework generates an input field and a button with text "Browse ...". The API supports features
       * such as on change uploads (the upload starts immediately after a file has been selected), file uploads
       * with explicit calls, adjustable control sizes, text display after uploads, or tooltips containing complete
       * file paths.
       */
      class FileUploader extends sap.ui.unified.FileUploader {
        /**
         * Constructor for a new FileUploader.
         */
        constructor(
          /**
           * id for the new control, generated automatically if no id is given
           */
          sId?: string,
          /**
           * initial settings for the new control
           */
          mSettings?: FileUploaderOpts
        );

        /**
         * Creates a new subclass of class sap.ui.commons.FileUploader with name `sClassName` and enriches it with
         * the information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.unified.FileUploader.extend}.
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
         * Returns a metadata object for class sap.ui.commons.FileUploader.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
      }
      /**
       * @deprecated (since 1.21.0) - Please use the element sap.ui.unified.FileUploaderParameter of the library
       * sap.ui.unified instead.
       *
       * Represents a parameter for the FileUploader which is rendered as a hidden inputfield.
       */
      class FileUploaderParameter extends sap.ui.unified.FileUploaderParameter {
        /**
         * Constructor for a new FileUploaderParameter.
         */
        constructor(
          /**
           * id for the new control, generated automatically if no id is given
           */
          sId?: string,
          /**
           * initial settings for the new control
           */
          mSettings?: FileUploaderParameterOpts
        );

        /**
         * Creates a new subclass of class sap.ui.commons.FileUploaderParameter with name `sClassName` and enriches
         * it with the information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.unified.FileUploaderParameter.extend}.
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
         * Returns a metadata object for class sap.ui.commons.FileUploaderParameter.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
      }
      /**
       * @SINCE 1.9.0
       * @deprecated (since 1.38) - Instead, use the `sap.ui.core.HTML` control.
       *
       * The FormattedTextView control allows the usage of a limited set of HTML tags for display.
       */
      class FormattedTextView extends sap.ui.core.Control {
        /**
         * Constructor for a new FormattedTextView.
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
          mSettings?: FormattedTextViewOpts
        );

        /**
         * Adds some control to the aggregation {@link #getControls controls}.
         */
        addControl(
          /**
           * The control to add; if empty, nothing is inserted
           */
          oControl: sap.ui.core.Control
        ): sap.ui.commons.FormattedTextView;
        /**
         * Destroys all the controls in the aggregation {@link #getControls controls}.
         */
        destroyControls(): sap.ui.commons.FormattedTextView;
        /**
         * Creates a new subclass of class sap.ui.commons.FormattedTextView with name `sClassName` and enriches
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
         * Gets current value of property {@link #getAccessibleRole accessibleRole}.
         *
         * The ARIA role for the control.
         *
         * Default value is `Document`.
         */
        getAccessibleRole(): sap.ui.core.AccessibleRole;
        /**
         * Gets content of aggregation {@link #getControls controls}.
         *
         * Array of controls that should be replaced within htmlText.
         */
        getControls(): sap.ui.core.Control[];
        /**
         * Gets current value of property {@link #getHtmlText htmlText}.
         *
         * Determines text with placeholders.
         *
         * Default value is `empty string`.
         */
        getHtmlText(): string;
        /**
         * Returns a metadata object for class sap.ui.commons.FormattedTextView.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Indicates whether the FormattedTextView contains other controls.
         */
        hasControls(): boolean;
        /**
         * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getControls controls}. and returns
         * its index if found or -1 otherwise.
         */
        indexOfControl(
          /**
           * The control whose index is looked for
           */
          oControl: sap.ui.core.Control
        ): number;
        /**
         * Inserts a control into the aggregation {@link #getControls controls}.
         */
        insertControl(
          /**
           * The control to insert; if empty, nothing is inserted
           */
          oControl: sap.ui.core.Control,
          /**
           * The `0`-based index the control should be inserted at; for a negative value of `iIndex`, the control
           * is inserted at position 0; for a value greater than the current size of the aggregation, the control
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.commons.FormattedTextView;
        /**
         * Removes all the controls from the aggregation {@link #getControls controls}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllControls(): sap.ui.core.Control[];
        /**
         * Removes a control from the aggregation {@link #getControls controls}.
         */
        removeControl(
          /**
           * The control to remove or its index or id
           */
          vControl: number | string | sap.ui.core.Control
        ): sap.ui.core.Control;
        /**
         * Sets a new value for property {@link #getAccessibleRole accessibleRole}.
         *
         * The ARIA role for the control.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Document`.
         */
        setAccessibleRole(
          /**
           * New value for property `accessibleRole`
           */
          sAccessibleRole: sap.ui.core.AccessibleRole
        ): sap.ui.commons.FormattedTextView;
        /**
         * Sets text with placeholders and given array of controls.
         */
        setContent(
          /**
           * Contains the corresponding HTML text
           */
          sHtmlText: string,
          /**
           * Array of controls that should be used within given HTML text
           */
          aControls: sap.ui.commons.FormattedTextViewControl
        ): void;
        /**
         * Sets the HTML text to be displayed.
         */
        setHtmlText(
          /**
           * HTML text as a string
           */
          sText: string
        ): void;
      }
      /**
       * @deprecated (since 1.38)
       *
       * Divides the screen in visual areas.
       */
      class HorizontalDivider extends sap.ui.core.Control {
        /**
         * Constructor for a new HorizontalDivider.
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
          mSettings?: HorizontalDividerOpts
        );

        /**
         * Creates a new subclass of class sap.ui.commons.HorizontalDivider with name `sClassName` and enriches
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
         * Gets current value of property {@link #getHeight height}.
         *
         * Defines the height of the divider.
         *
         * Default value is `Medium`.
         */
        getHeight(): sap.ui.commons.HorizontalDividerHeight;
        /**
         * Returns a metadata object for class sap.ui.commons.HorizontalDivider.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getType type}.
         *
         * Defines the type of the divider.
         *
         * Default value is `Area`.
         */
        getType(): sap.ui.commons.HorizontalDividerType;
        /**
         * Gets current value of property {@link #getWidth width}.
         *
         * Defines the width of the divider.
         *
         * Default value is `100%`.
         */
        getWidth(): sap.ui.core.CSSSize;
        /**
         * Sets a new value for property {@link #getHeight height}.
         *
         * Defines the height of the divider.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Medium`.
         */
        setHeight(
          /**
           * New value for property `height`
           */
          sHeight: sap.ui.commons.HorizontalDividerHeight
        ): sap.ui.commons.HorizontalDivider;
        /**
         * Sets a new value for property {@link #getType type}.
         *
         * Defines the type of the divider.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Area`.
         */
        setType(
          /**
           * New value for property `type`
           */
          sType: sap.ui.commons.HorizontalDividerType
        ): sap.ui.commons.HorizontalDivider;
        /**
         * Sets a new value for property {@link #getWidth width}.
         *
         * Defines the width of the divider.
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
        ): sap.ui.commons.HorizontalDivider;
      }
      /**
       * @deprecated (since 1.38) - replaced by {@link sap.m.Image}
       *
       * A wrapper around the IMG tag. The image can be loaded from a remote or local server. There are various
       * size setting options available, and the images can be combined with actions.
       */
      class Image extends sap.ui.core.Control
        implements
          sap.ui.commons.ToolbarItem,
          sap.ui.commons.FormattedTextViewControl {
        /**
         * Constructor for a new Image.
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
          mSettings?: ImageOpts
        );

        /**
         * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.commons.Image`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.Image` itself.
         *
         * Event is fired when the user clicks on the control.
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
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.Image` itself
           */
          oListener?: object
        ): sap.ui.commons.Image;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.ui.commons.Image`.
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
        ): sap.ui.commons.Image;
        /**
         * Creates a new subclass of class sap.ui.commons.Image with name `sClassName` and enriches it with the
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
         * Fires event {@link #event:press press} to attached listeners.
         */
        firePress(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ui.commons.Image;
        /**
         * Gets current value of property {@link #getAlt alt}.
         *
         * The alternative text that is displayed in case the Image is not available, or cannot be displayed. If
         * the image is set to decorative this property is ignored.
         */
        getAlt(): string;
        /**
         * Gets current value of property {@link #getDecorative decorative}.
         *
         * A decorative image is included for design reasons. Accessibility tools will ignore decorative images.
         * Note: If the Image has an image map (useMap is set), this property will be overridden (the image will
         * not be rendered as decorative). A decorative image has no ALT attribute, so the Alt property is ignored
         * if the image is decorative.
         *
         * Default value is `true`.
         */
        getDecorative(): boolean;
        /**
         * Gets current value of property {@link #getHeight height}.
         *
         * When the empty value is kept, the original size is not changed. It is also possible to make settings
         * for width or height only, the overall size is maintained then, considering the aspect ratio.
         */
        getHeight(): sap.ui.core.CSSSize;
        /**
         * Returns a metadata object for class sap.ui.commons.Image.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getSrc src}.
         *
         * Relative or absolute path to URL where the image file is stored.
         */
        getSrc(): sap.ui.core.URI;
        /**
         * Gets current value of property {@link #getUseMap useMap}.
         *
         * The name of the image map that defines the clickable areas
         */
        getUseMap(): string;
        /**
         * Gets current value of property {@link #getWidth width}.
         *
         * When the empty value is kept, the original size is not changed. It is also possible to make settings
         * for width or height only, the overall size is maintained then, considering the aspect ratio.
         */
        getWidth(): sap.ui.core.CSSSize;
        /**
         * Sets a new value for property {@link #getAlt alt}.
         *
         * The alternative text that is displayed in case the Image is not available, or cannot be displayed. If
         * the image is set to decorative this property is ignored.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setAlt(
          /**
           * New value for property `alt`
           */
          sAlt: string
        ): sap.ui.commons.Image;
        /**
         * Sets a new value for property {@link #getDecorative decorative}.
         *
         * A decorative image is included for design reasons. Accessibility tools will ignore decorative images.
         * Note: If the Image has an image map (useMap is set), this property will be overridden (the image will
         * not be rendered as decorative). A decorative image has no ALT attribute, so the Alt property is ignored
         * if the image is decorative.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setDecorative(
          /**
           * New value for property `decorative`
           */
          bDecorative: boolean
        ): sap.ui.commons.Image;
        /**
         * Sets a new value for property {@link #getHeight height}.
         *
         * When the empty value is kept, the original size is not changed. It is also possible to make settings
         * for width or height only, the overall size is maintained then, considering the aspect ratio.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setHeight(
          /**
           * New value for property `height`
           */
          sHeight: sap.ui.core.CSSSize
        ): sap.ui.commons.Image;
        /**
         * Sets a new value for property {@link #getSrc src}.
         *
         * Relative or absolute path to URL where the image file is stored.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setSrc(
          /**
           * New value for property `src`
           */
          sSrc: sap.ui.core.URI
        ): sap.ui.commons.Image;
        /**
         * Sets a new value for property {@link #getUseMap useMap}.
         *
         * The name of the image map that defines the clickable areas
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setUseMap(
          /**
           * New value for property `useMap`
           */
          sUseMap: string
        ): sap.ui.commons.Image;
        /**
         * Sets a new value for property {@link #getWidth width}.
         *
         * When the empty value is kept, the original size is not changed. It is also possible to make settings
         * for width or height only, the overall size is maintained then, considering the aspect ratio.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setWidth(
          /**
           * New value for property `width`
           */
          sWidth: sap.ui.core.CSSSize
        ): sap.ui.commons.Image;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.commons.Image`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.Image` itself.
         *
         * Event is fired when the user clicks on the control.
         */
        attachPress(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.Image` itself
           */
          oListener?: object
        ): sap.ui.commons.Image;
      }
      /**
       * @deprecated (since 1.38) - There's not replacement because of the archaic design pattern.
       *
       * Combination of image areas where at runtime these areas are starting points for hyperlinks or actions
       */
      class ImageMap extends sap.ui.core.Control {
        /**
         * Constructor for a new ImageMap.
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
          mSettings?: ImageMapOpts
        );

        /**
         * Adds some area to the aggregation {@link #getAreas areas}.
         */
        addArea(
          /**
           * The area to add; if empty, nothing is inserted
           */
          oArea: sap.ui.commons.Area
        ): sap.ui.commons.ImageMap;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.commons.ImageMap`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.ImageMap` itself.
         *
         * Event for the areas that can be clicked in an ImageMap
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
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.ImageMap` itself
           */
          oListener?: object
        ): sap.ui.commons.ImageMap;
        /**
         * Adds areas to the Image Map.
         *
         * Each argument must be either a JSon object or a list of objects or the area element or elements.
         */
        createArea(
          /**
           * Area content to add
           */
          content: any
        ): sap.ui.commons.ImageMap;
        /**
         * Destroys all the areas in the aggregation {@link #getAreas areas}.
         */
        destroyAreas(): sap.ui.commons.ImageMap;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.ui.commons.ImageMap`.
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
        ): sap.ui.commons.ImageMap;
        /**
         * Creates a new subclass of class sap.ui.commons.ImageMap with name `sClassName` and enriches it with the
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
         * Fires event {@link #event:press press} to attached listeners.
         */
        firePress(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * Id of clicked Area.
             */
            areaId?: string;
          }
        ): sap.ui.commons.ImageMap;
        /**
         * Gets content of aggregation {@link #getAreas areas}.
         *
         * Area representing the reference to the target location
         */
        getAreas(): sap.ui.commons.Area[];
        /**
         * Returns a metadata object for class sap.ui.commons.ImageMap.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getName name}.
         *
         * Name for the image that serves as reference
         */
        getName(): string;
        /**
         * Checks for the provided `sap.ui.commons.Area` in the aggregation {@link #getAreas areas}. and returns
         * its index if found or -1 otherwise.
         */
        indexOfArea(
          /**
           * The area whose index is looked for
           */
          oArea: sap.ui.commons.Area
        ): number;
        /**
         * Inserts a area into the aggregation {@link #getAreas areas}.
         */
        insertArea(
          /**
           * The area to insert; if empty, nothing is inserted
           */
          oArea: sap.ui.commons.Area,
          /**
           * The `0`-based index the area should be inserted at; for a negative value of `iIndex`, the area is inserted
           * at position 0; for a value greater than the current size of the aggregation, the area is inserted at
           * the last position
           */
          iIndex: number
        ): sap.ui.commons.ImageMap;
        /**
         * Removes all the controls from the aggregation {@link #getAreas areas}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllAreas(): sap.ui.commons.Area[];
        /**
         * Removes a area from the aggregation {@link #getAreas areas}.
         */
        removeArea(
          /**
           * The area to remove or its index or id
           */
          vArea: number | string | sap.ui.commons.Area
        ): sap.ui.commons.Area;
        /**
         * Sets a new value for property {@link #getName name}.
         *
         * Name for the image that serves as reference
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setName(
          /**
           * New value for property `name`
           */
          sName: string
        ): sap.ui.commons.ImageMap;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.commons.ImageMap`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.ImageMap` itself.
         *
         * Event for the areas that can be clicked in an ImageMap
         */
        attachPress(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.ImageMap` itself
           */
          oListener?: object
        ): sap.ui.commons.ImageMap;
      }
      /**
       * @SINCE 1.8.0
       * @deprecated (since 1.38) - replaced by {@link sap.m.Input}
       *
       * The InPlaceEdit is a functionality to have text in display mode that can be changed in place.
       */
      class InPlaceEdit extends sap.ui.core.Control {
        /**
         * Constructor for a new InPlaceEdit.
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
          mSettings?: InPlaceEditOpts
        );

        /**
         * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.ui.commons.InPlaceEdit`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.InPlaceEdit` itself.
         *
         * Event is fired when the text in the field has changed AND the focus leaves the InPlaceEdit or the Enter
         * key is pressed.
         */
        attachChange(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.InPlaceEdit` itself
           */
          oListener?: object
        ): sap.ui.commons.InPlaceEdit;
        /**
         * @SINCE 1.16.5
         *
         * Attaches event handler `fnFunction` to the {@link #event:liveChange liveChange} event of this `sap.ui.commons.InPlaceEdit`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.InPlaceEdit` itself.
         *
         * This event if fired during typing into the InPlaceEdit and returns the currently entered value. This
         * is not the content of the value property. The value property is only updated by ENTER and by leaving
         * the control.
         */
        attachLiveChange(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.InPlaceEdit` itself
           */
          oListener?: object
        ): sap.ui.commons.InPlaceEdit;
        /**
         * Clear the old text after a change to disable the undo functionality. If undoEnabled is false this has
         * no effect.
         */
        clearOldText(): void;
        /**
         * Destroys the content in the aggregation {@link #getContent content}.
         */
        destroyContent(): sap.ui.commons.InPlaceEdit;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:change change} event of this `sap.ui.commons.InPlaceEdit`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachChange(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.commons.InPlaceEdit;
        /**
         * @SINCE 1.16.5
         *
         * Detaches event handler `fnFunction` from the {@link #event:liveChange liveChange} event of this `sap.ui.commons.InPlaceEdit`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachLiveChange(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.commons.InPlaceEdit;
        /**
         * Creates a new subclass of class sap.ui.commons.InPlaceEdit with name `sClassName` and enriches it with
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
         * Fires event {@link #event:change change} to attached listeners.
         */
        fireChange(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The new / changed value of the InPlaceEdit.
             */
            newValue?: string;
          }
        ): sap.ui.commons.InPlaceEdit;
        /**
         * @SINCE 1.16.5
         *
         * Fires event {@link #event:liveChange liveChange} to attached listeners.
         */
        fireLiveChange(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * Current value of the Textfield.
             */
            liveValue?: string;
          }
        ): sap.ui.commons.InPlaceEdit;
        /**
         * See:
         * 	sap.ui.core.Control#getAccessibilityInfo
         */
        // @ts-ignore
        getAccessibilityInfo(): Object;
        /**
         * Gets content of aggregation {@link #getContent content}.
         *
         * Content control of the InPlaceEdit. The following controls are allowed: TextField, ComboBox, DropdownBox
         * and Link
         */
        getContent(): sap.ui.core.Control;
        /**
         * @SINCE 1.9.0
         *
         * Gets current value of property {@link #getDesign design}.
         *
         * Defines the visual appearance of the control. Currently this is not supported for Labels.
         *
         * Default value is `Standard`.
         */
        getDesign(): sap.ui.commons.TextViewDesign;
        /**
         * Returns a metadata object for class sap.ui.commons.InPlaceEdit.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Returns the tooltip for this InPlaceEdit if any or an undefined value. The tooltip can either be a simple
         * string or a subclass of {@link sap.ui.core.TooltipBase}.
         *
         * Callers that are only interested in tooltips of type string (e.g. to render them as a `title` attribute),
         * should call the convenience method {@link #getTooltip_AsString} instead. If they want to get a tooltip
         * text no matter where it comes from (be it a string tooltip or the text from a TooltipBase instance) then
         * they could call {@link #getTooltip_Text} instead.
         *
         * If a content control is assigned to the InPlaceEdit the tooltip of this control is used. A directly set
         * tooltip to the InPlaceEdit is ignored in this case.
         */
        // @ts-ignore
        getTooltip(): string | sap.ui.core.TooltipBase;
        /**
         * Gets current value of property {@link #getUndoEnabled undoEnabled}.
         *
         * If undo is enabled after changing the text an undo button appears.
         *
         * Default value is `true`.
         */
        getUndoEnabled(): boolean;
        /**
         * Gets current value of property {@link #getValueState valueState}.
         *
         * Visualizes warnings or errors related to the InPlaceEdit. Possible values: Warning, Error, Success. If
         * the content control has an own valueState property this will be used.
         *
         * Default value is `None`.
         */
        getValueState(): sap.ui.core.ValueState;
        /**
         * Sets the aggregated {@link #getContent content}.
         */
        setContent(
          /**
           * The content to set
           */
          oContent: sap.ui.core.Control
        ): sap.ui.commons.InPlaceEdit;
        /**
         * @SINCE 1.9.0
         *
         * Sets a new value for property {@link #getDesign design}.
         *
         * Defines the visual appearance of the control. Currently this is not supported for Labels.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Standard`.
         */
        setDesign(
          /**
           * New value for property `design`
           */
          sDesign: sap.ui.commons.TextViewDesign
        ): sap.ui.commons.InPlaceEdit;
        /**
         * Sets a new tooltip for this InPlaceEdit. The tooltip can either be a simple string (which in most cases
         * will be rendered as the `title` attribute of this Element) or an instance of {@link sap.ui.core.TooltipBase}.
         *
         * If a new tooltip is set, any previously set tooltip is deactivated.
         *
         * If a content control is assigned to the InPlaceEdit the tooltip of this control is used. A directly set
         * tooltip to the InPlaceEdit is ignored in this case.
         */
        // @ts-ignore
        setTooltip(
          /**
           * Tooltip as string or RichTooltip.
           */
          oTooltip: string | sap.ui.core.TooltipBase
        ): sap.ui.commons.InPlaceEdit;
        /**
         * Sets a new value for property {@link #getUndoEnabled undoEnabled}.
         *
         * If undo is enabled after changing the text an undo button appears.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setUndoEnabled(
          /**
           * New value for property `undoEnabled`
           */
          bUndoEnabled: boolean
        ): sap.ui.commons.InPlaceEdit;
        /**
         * Sets a new value for property {@link #getValueState valueState}.
         *
         * Visualizes warnings or errors related to the InPlaceEdit. Possible values: Warning, Error, Success. If
         * the content control has an own valueState property this will be used.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `None`.
         */
        setValueState(
          /**
           * New value for property `valueState`
           */
          sValueState: sap.ui.core.ValueState
        ): sap.ui.commons.InPlaceEdit;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.ui.commons.InPlaceEdit`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.InPlaceEdit` itself.
         *
         * Event is fired when the text in the field has changed AND the focus leaves the InPlaceEdit or the Enter
         * key is pressed.
         */
        attachChange(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.InPlaceEdit` itself
           */
          oListener?: object
        ): sap.ui.commons.InPlaceEdit;
        /**
         * @SINCE 1.16.5
         *
         * Attaches event handler `fnFunction` to the {@link #event:liveChange liveChange} event of this `sap.ui.commons.InPlaceEdit`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.InPlaceEdit` itself.
         *
         * This event if fired during typing into the InPlaceEdit and returns the currently entered value. This
         * is not the content of the value property. The value property is only updated by ENTER and by leaving
         * the control.
         */
        attachLiveChange(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.InPlaceEdit` itself
           */
          oListener?: object
        ): sap.ui.commons.InPlaceEdit;
      }
      /**
       * @deprecated (since 1.38) - Instead, use the `sap.m.Label` control.
       *
       * The control is used for labeling other controls. The API provides formatting options, for example, for
       * bold display or alignment. A label can have an icon.
       */
      class Label extends sap.ui.core.Control
        implements sap.ui.commons.ToolbarItem, sap.ui.core.Label {
        /**
         * Constructor for a new Label.
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
          mSettings?: LabelOpts
        );

        /**
         * Creates a new subclass of class sap.ui.commons.Label with name `sClassName` and enriches it with the
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
         * See:
         * 	sap.ui.core.Control#getAccessibilityInfo
         */
        // @ts-ignore
        getAccessibilityInfo(): void;
        /**
         * Gets current value of property {@link #getDesign design}.
         *
         * Defines whether the labels are in bold format.
         *
         * Default value is `Standard`.
         */
        getDesign(): sap.ui.commons.LabelDesign;
        /**
         * Gets current value of property {@link #getIcon icon}.
         *
         * Determines the icon to be displayed in the control. This can be a URI to an image or an icon font URI.
         */
        getIcon(): sap.ui.core.URI;
        /**
         * ID of the element which is the current target of the association {@link #getLabelFor labelFor}, or `null`.
         */
        getLabelFor(): sap.ui.core.ID;
        /**
         * Returns a metadata object for class sap.ui.commons.Label.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * @SINCE 1.11.0
         *
         * Gets current value of property {@link #getRequired required}.
         *
         * Allows to enforce the required indicator even when the associated control doesn't have a getRequired
         * method (a required property) or when the flag is not set. If the associated control has a required property,
         * the values of both required flags are combined with the OR operator, so a Label can't override a required=true
         * value.
         *
         * Default value is `false`.
         */
        getRequired(): boolean;
        /**
         * @SINCE 1.14.0
         *
         * Gets current value of property {@link #getRequiredAtBegin requiredAtBegin}.
         *
         * Determines whether the required indicator is at the beginning of the label (if set) or at the end (if
         * not set).
         */
        getRequiredAtBegin(): boolean;
        /**
         * Gets current value of property {@link #getText text}.
         *
         * Determines the text to be displayed.
         *
         * Default value is `empty string`.
         */
        getText(): string;
        /**
         * Gets current value of property {@link #getTextAlign textAlign}.
         *
         * Determines the alignment of the text. Available options are `Begin`, `Center`, `End`, `Left`, and `Right`.
         *
         * Default value is `Begin`.
         */
        getTextAlign(): sap.ui.core.TextAlign;
        /**
         * Gets current value of property {@link #getTextDirection textDirection}.
         *
         * Determines the text direction - right-to-left (RTL) and left-to-right (LTR).
         *
         * Default value is `Inherit`.
         */
        getTextDirection(): sap.ui.core.TextDirection;
        /**
         * Gets current value of property {@link #getWidth width}.
         *
         * Determines the control width as common CSS-size (for example, px or % as unit).
         *
         * Default value is `empty string`.
         */
        getWidth(): sap.ui.core.CSSSize;
        /**
         * Gets current value of property {@link #getWrapping wrapping}.
         *
         * Specifies whether a line wrapping width shall be displayed when the text value is longer than the width
         * is.
         *
         * Default value is `false`.
         */
        getWrapping(): boolean;
        /**
         * Sets a new value for property {@link #getDesign design}.
         *
         * Defines whether the labels are in bold format.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Standard`.
         */
        setDesign(
          /**
           * New value for property `design`
           */
          sDesign: sap.ui.commons.LabelDesign
        ): sap.ui.commons.Label;
        /**
         * Sets a new value for property {@link #getIcon icon}.
         *
         * Determines the icon to be displayed in the control. This can be a URI to an image or an icon font URI.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setIcon(
          /**
           * New value for property `icon`
           */
          sIcon: sap.ui.core.URI
        ): sap.ui.commons.Label;
        /**
         * Sets the associated {@link #getLabelFor labelFor}.
         */
        setLabelFor(
          /**
           * ID of an element which becomes the new target of this labelFor association; alternatively, an element
           * instance may be given
           */
          oLabelFor: sap.ui.core.ID | sap.ui.core.Control
        ): sap.ui.commons.Label;
        /**
         * @SINCE 1.11.0
         *
         * Sets a new value for property {@link #getRequired required}.
         *
         * Allows to enforce the required indicator even when the associated control doesn't have a getRequired
         * method (a required property) or when the flag is not set. If the associated control has a required property,
         * the values of both required flags are combined with the OR operator, so a Label can't override a required=true
         * value.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setRequired(
          /**
           * New value for property `required`
           */
          bRequired: boolean
        ): sap.ui.commons.Label;
        /**
         * @SINCE 1.14.0
         *
         * Sets a new value for property {@link #getRequiredAtBegin requiredAtBegin}.
         *
         * Determines whether the required indicator is at the beginning of the label (if set) or at the end (if
         * not set).
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setRequiredAtBegin(
          /**
           * New value for property `requiredAtBegin`
           */
          bRequiredAtBegin: boolean
        ): sap.ui.commons.Label;
        /**
         * Sets a new value for property {@link #getText text}.
         *
         * Determines the text to be displayed.
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
        ): sap.ui.commons.Label;
        /**
         * Sets a new value for property {@link #getTextAlign textAlign}.
         *
         * Determines the alignment of the text. Available options are `Begin`, `Center`, `End`, `Left`, and `Right`.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Begin`.
         */
        setTextAlign(
          /**
           * New value for property `textAlign`
           */
          sTextAlign: sap.ui.core.TextAlign
        ): sap.ui.commons.Label;
        /**
         * Sets a new value for property {@link #getTextDirection textDirection}.
         *
         * Determines the text direction - right-to-left (RTL) and left-to-right (LTR).
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
        ): sap.ui.commons.Label;
        /**
         * Sets a new value for property {@link #getWidth width}.
         *
         * Determines the control width as common CSS-size (for example, px or % as unit).
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `empty string`.
         */
        setWidth(
          /**
           * New value for property `width`
           */
          sWidth: sap.ui.core.CSSSize
        ): sap.ui.commons.Label;
        /**
         * Sets a new value for property {@link #getWrapping wrapping}.
         *
         * Specifies whether a line wrapping width shall be displayed when the text value is longer than the width
         * is.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setWrapping(
          /**
           * New value for property `wrapping`
           */
          bWrapping: boolean
        ): sap.ui.commons.Label;
      }
      /**
       * @deprecated (since 1.38) - Instead, use the `sap.m.Link` control.
       *
       * Provides an absolute or relative reference to an internal or external URL. The classical target parameters
       * are supported. Another usage scenario is triggering an action, for example to open a popup window. In
       * both cases, the link is a hypertext link.
       */
      class Link extends sap.ui.core.Control
        implements
          sap.ui.commons.ToolbarItem,
          sap.ui.commons.FormattedTextViewControl {
        /**
         * Constructor for a new Link.
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
          mSettings?: LinkOpts
        );

        /**
         * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
         */
        addAriaDescribedBy(
          /**
           * The ariaDescribedBy to add; if empty, nothing is inserted
           */
          vAriaDescribedBy: sap.ui.core.ID | sap.ui.core.Control
        ): sap.ui.commons.Link;
        /**
         * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
         */
        addAriaLabelledBy(
          /**
           * The ariaLabelledBy to add; if empty, nothing is inserted
           */
          vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control
        ): sap.ui.commons.Link;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.commons.Link`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.Link` itself.
         *
         * Event is fired when the user clicks the control.
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
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.Link` itself
           */
          oListener?: object
        ): sap.ui.commons.Link;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.ui.commons.Link`.
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
        ): sap.ui.commons.Link;
        /**
         * Creates a new subclass of class sap.ui.commons.Link with name `sClassName` and enriches it with the information
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
         * Fires event {@link #event:press press} to attached listeners.
         *
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event
         * object.
         */
        firePress(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): boolean;
        /**
         * Puts the focus to the link.
         */
        // @ts-ignore
        focus(): void;
        /**
         * See:
         * 	sap.ui.core.Control#getAccessibilityInfo
         */
        // @ts-ignore
        getAccessibilityInfo(): void;
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
         * Gets current value of property {@link #getEnabled enabled}.
         *
         * Whether the link can be triggered by the user.
         *
         * Default value is `true`.
         */
        getEnabled(): boolean;
        /**
         * Gets current value of property {@link #getHelpId helpId}.
         *
         * Unique identifier used for help service.
         *
         * Default value is `empty string`.
         */
        getHelpId(): string;
        /**
         * Gets current value of property {@link #getHref href}.
         *
         * The link target URI. Supports standard hyperlink behavior. If an action should be triggered, this should
         * not be set, but instead an event handler for the "press" event should be registered.
         */
        getHref(): sap.ui.core.URI;
        /**
         * Returns a metadata object for class sap.ui.commons.Link.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getTarget target}.
         *
         * Options are _self, _top, _blank, _parent, _search. Alternatively, a frame name can be entered.
         */
        getTarget(): string;
        /**
         * Gets current value of property {@link #getText text}.
         *
         * Link text to be displayed.
         *
         * Default value is `empty string`.
         */
        getText(): string;
        /**
         * @SINCE 1.8.0
         *
         * Gets current value of property {@link #getWidth width}.
         *
         * Width of text link. When it is set (CSS-size such as % or px), this is the exact size. When left blank,
         * the text defines the size.
         */
        getWidth(): sap.ui.core.CSSSize;
        /**
         * Removes all the controls in the association named {@link #getAriaDescribedBy ariaDescribedBy}.
         */
        removeAllAriaDescribedBy(): sap.ui.core.ID[];
        /**
         * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
         */
        removeAllAriaLabelledBy(): sap.ui.core.ID[];
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
         * Sets a new value for property {@link #getEnabled enabled}.
         *
         * Whether the link can be triggered by the user.
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
        ): sap.ui.commons.Link;
        /**
         * Sets a new value for property {@link #getHelpId helpId}.
         *
         * Unique identifier used for help service.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `empty string`.
         */
        setHelpId(
          /**
           * New value for property `helpId`
           */
          sHelpId: string
        ): sap.ui.commons.Link;
        /**
         * Sets a new value for property {@link #getHref href}.
         *
         * The link target URI. Supports standard hyperlink behavior. If an action should be triggered, this should
         * not be set, but instead an event handler for the "press" event should be registered.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setHref(
          /**
           * New value for property `href`
           */
          sHref: sap.ui.core.URI
        ): sap.ui.commons.Link;
        /**
         * Sets a new value for property {@link #getTarget target}.
         *
         * Options are _self, _top, _blank, _parent, _search. Alternatively, a frame name can be entered.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setTarget(
          /**
           * New value for property `target`
           */
          sTarget: string
        ): sap.ui.commons.Link;
        /**
         * Sets a new value for property {@link #getText text}.
         *
         * Link text to be displayed.
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
        ): sap.ui.commons.Link;
        /**
         * @SINCE 1.8.0
         *
         * Sets a new value for property {@link #getWidth width}.
         *
         * Width of text link. When it is set (CSS-size such as % or px), this is the exact size. When left blank,
         * the text defines the size.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setWidth(
          /**
           * New value for property `width`
           */
          sWidth: sap.ui.core.CSSSize
        ): sap.ui.commons.Link;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.commons.Link`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.Link` itself.
         *
         * Event is fired when the user clicks the control.
         */
        attachPress(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.Link` itself
           */
          oListener?: object
        ): sap.ui.commons.Link;
      }
      /**
       * @deprecated (since 1.38) - Instead, use the `sap.m.List` control.
       *
       * Provides a list of items from which users can choose an item. For the design of the list box, features
       * such as defining the list box height, fixing the number of visible items, choosing one item to be the
       * item that is marked by default when the list box is shown, or a scroll bar for large list boxes are available.
       */
      class ListBox extends sap.ui.core.Control {
        /**
         * Constructor for a new ListBox.
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
          mSettings?: ListBoxOpts
        );

        /**
         * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
         */
        addAriaDescribedBy(
          /**
           * The ariaDescribedBy to add; if empty, nothing is inserted
           */
          vAriaDescribedBy: sap.ui.core.ID | sap.ui.core.Control
        ): sap.ui.commons.ListBox;
        /**
         * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
         */
        addAriaLabelledBy(
          /**
           * The ariaLabelledBy to add; if empty, nothing is inserted
           */
          vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control
        ): sap.ui.commons.ListBox;
        /**
         * Adds some item to the aggregation {@link #getItems items}.
         */
        addItem(
          /**
           * The item to add; if empty, nothing is inserted
           */
          oItem: sap.ui.core.Item
        ): sap.ui.commons.ListBox;
        /**
         * Adds the given index to current selection. When multiple selection is disabled, this replaces the current
         * selection. When the given index is invalid, the call is ignored.
         */
        addSelectedIndex(
          /**
           * Index to add to selection..
           */
          iSelectedIndex: number
        ): sap.ui.commons.ListBox;
        /**
         * Adds the given indices to selection. Any invalid indices are ignored.
         */
        addSelectedIndices(
          /**
           * Indices of the items that shall additionally be selected.
           */
          aSelectedIndices: number[]
        ): sap.ui.commons.ListBox;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.commons.ListBox`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.ListBox` itself.
         *
         * Event is fired when selection is changed by user interaction.
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
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.ListBox` itself
           */
          oListener?: object
        ): sap.ui.commons.ListBox;
        /**
         * Removes complete selection.
         */
        clearSelection(): sap.ui.commons.ListBox;
        /**
         * Destroys all the items in the aggregation {@link #getItems items}.
         */
        destroyItems(): sap.ui.commons.ListBox;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.ui.commons.ListBox`.
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
        ): sap.ui.commons.ListBox;
        /**
         * Creates a new subclass of class sap.ui.commons.ListBox with name `sClassName` and enriches it with the
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
         * Fires event {@link #event:select select} to attached listeners.
         */
        fireSelect(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * ID of the ListBox which triggered the event.
             */
            id?: string;
            /**
             * The currently selected index of the ListBox. In the case of multiple selection, this is exactly one of
             * the selected indices - the one whose selection has triggered the selection change. To get all currently
             * selected indices, use selectedIndices.
             */
            selectedIndex?: number;
            /**
             * The currently selected item of the ListBox. In the case of multiple selection, this is exactly one of
             * the selected items - the one whose selection has triggered the selection change.
             */
            selectedItem?: sap.ui.core.Item;
            /**
             * Array containing the indices which are selected.
             */
            selectedIndices?: number[];
          }
        ): sap.ui.commons.ListBox;
        /**
         * Gets current value of property {@link #getAllowMultiSelect allowMultiSelect}.
         *
         * Determines whether multiple selection is allowed.
         *
         * Default value is `false`.
         */
        getAllowMultiSelect(): boolean;
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
         * Gets current value of property {@link #getDisplayIcons displayIcons}.
         *
         * Determines whether the icons of the list items shall also be displayed. Enabling icons requires some
         * space to be reserved for them. Displaying icons can also influence the width and height of a single item,
         * which affects the overall height of the ListBox when defined in number of items. Note that the number
         * of icons that can be displayed in the ListBox depends on the size of the icons themselves and of the
         * total ListBox height.
         *
         * Default value is `false`.
         */
        getDisplayIcons(): boolean;
        /**
         * Gets current value of property {@link #getDisplaySecondaryValues displaySecondaryValues}.
         *
         * Determines whether the text values from the additionalText property (see sap.ui.core.ListItems) shall
         * be displayed.
         *
         * Default value is `false`.
         */
        getDisplaySecondaryValues(): boolean;
        /**
         * Gets current value of property {@link #getEditable editable}.
         *
         * Determines whether the ListBox is interactive or not. Can be used to disable interaction with mouse or
         * keyboard.
         *
         * Default value is `true`.
         */
        getEditable(): boolean;
        /**
         * Gets current value of property {@link #getEnabled enabled}.
         *
         * Determines whether the ListBox is enabled or not. Can be used to disable interaction with mouse or keyboard.
         * Disabled controls have another color display depending on custom settings.
         *
         * Default value is `true`.
         */
        getEnabled(): boolean;
        /**
         * Gets current value of property {@link #getHeight height}.
         *
         * Control height as common CSS-size (px or % as unit, for example). The setting overrides any definitions
         * made for the setVisibleItems() method.
         */
        getHeight(): sap.ui.core.CSSSize;
        /**
         * Gets content of aggregation {@link #getItems items}.
         *
         * Aggregation of items to be displayed. Must be either of type sap.ui.core.ListItem or sap.ui.core.SeparatorItem.
         */
        getItems(): sap.ui.core.Item[];
        /**
         * Gets current value of property {@link #getMaxWidth maxWidth}.
         *
         * Determines the maximum width of the ListBox. If not set, there is no maximum width.
         */
        getMaxWidth(): sap.ui.core.CSSSize;
        /**
         * Returns a metadata object for class sap.ui.commons.ListBox.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getMinWidth minWidth}.
         *
         * Determines the minimum width of the ListBox. If not set, there is no minimum width.
         */
        getMinWidth(): sap.ui.core.CSSSize;
        /**
         * Returns how many pixels the ListBox contents are currently scrolled down.
         */
        getScrollTop(): number;
        /**
         * Gets current value of property {@link #getSecondaryValueTextAlign secondaryValueTextAlign}.
         *
         * Determines the text alignment in the secondary ListBox text column (if available).
         *
         * Default value is `Begin`.
         */
        getSecondaryValueTextAlign(): sap.ui.core.TextAlign;
        /**
         * Zero-based index of selected item. Index value for no selection is -1. When multiple selection is enabled
         * and multiple items are selected, the method returns the first selected item.
         */
        getSelectedIndex(): number;
        /**
         * Zero-based indices of selected items, wrapped in an array. An empty array means "no selection".
         */
        getSelectedIndices(): number[];
        /**
         * Returns selected item. When no item is selected, "null" is returned. When multi-selection is enabled
         * and multiple items are selected, only the first selected item is returned.
         */
        getSelectedItem(): sap.ui.core.Item;
        /**
         * Returns an array containing the selected items. In the case of no selection, an empty array is returned.
         */
        getSelectedItems(): sap.ui.core.Item[];
        /**
         * Returns the keys of the selected items in an array. If a selected item does not have a key, the respective
         * array entry will be undefined.
         */
        getSelectedKeys(): string[];
        /**
         * Gets current value of property {@link #getValueTextAlign valueTextAlign}.
         *
         * Determines the text alignment in the primary ListBox column.
         *
         * Default value is `Begin`.
         */
        getValueTextAlign(): sap.ui.core.TextAlign;
        /**
         * Returns the number of visible items.
         */
        getVisibleItems(): number;
        /**
         * Gets current value of property {@link #getWidth width}.
         *
         * Control width as common CSS-size (px or % as unit, for example).
         */
        getWidth(): sap.ui.core.CSSSize;
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
        ): sap.ui.commons.ListBox;
        /**
         * Returns whether the given index is selected.
         */
        isIndexSelected(
          /**
           * Index which is checked for selection state.
           */
          iIndex: number
        ): boolean;
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
        removeAllItems(): sap.ui.core.Item[];
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
          vItem: number | string | sap.ui.core.Item
        ): sap.ui.core.Item;
        /**
         * Removes the given index from this selection. When the index is invalid or not selected, the call is ignored.
         */
        removeSelectedIndex(
          /**
           * Index that shall be removed from selection.
           */
          iIndex: number
        ): sap.ui.commons.ListBox;
        /**
         * If the ListBox has a scroll bar because the number of items is larger than the number of visible items,
         * this method scrolls to the item with the given index. If there are enough items, this item will then
         * appear at the topmost visible position in the ListBox. If bLazy is true, it only scrolls as far as required
         * to make the item visible. Setting the scrollTop property and calling scrollToIndex are two operations
         * influencing the same "physical" property, so the last call "wins".
         */
        scrollToIndex(
          /**
           * The index to which the ListBox should scroll.
           */
          iIndex: number,
          /**
           * If set to true, the ListBox only scrolls if the item is not completely visible, and it scrolls for exactly
           * the space to make it fully visible. If set to false, the item is scrolled to the top position (if possible).
           */
          bLazy: boolean
        ): sap.ui.commons.ListBox;
        /**
         * Sets a new value for property {@link #getAllowMultiSelect allowMultiSelect}.
         *
         * Determines whether multiple selection is allowed.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setAllowMultiSelect(
          /**
           * New value for property `allowMultiSelect`
           */
          bAllowMultiSelect: boolean
        ): sap.ui.commons.ListBox;
        /**
         * Sets a new value for property {@link #getDisplayIcons displayIcons}.
         *
         * Determines whether the icons of the list items shall also be displayed. Enabling icons requires some
         * space to be reserved for them. Displaying icons can also influence the width and height of a single item,
         * which affects the overall height of the ListBox when defined in number of items. Note that the number
         * of icons that can be displayed in the ListBox depends on the size of the icons themselves and of the
         * total ListBox height.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setDisplayIcons(
          /**
           * New value for property `displayIcons`
           */
          bDisplayIcons: boolean
        ): sap.ui.commons.ListBox;
        /**
         * Sets a new value for property {@link #getDisplaySecondaryValues displaySecondaryValues}.
         *
         * Determines whether the text values from the additionalText property (see sap.ui.core.ListItems) shall
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
        ): sap.ui.commons.ListBox;
        /**
         * Sets a new value for property {@link #getEditable editable}.
         *
         * Determines whether the ListBox is interactive or not. Can be used to disable interaction with mouse or
         * keyboard.
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
        ): sap.ui.commons.ListBox;
        /**
         * Sets a new value for property {@link #getEnabled enabled}.
         *
         * Determines whether the ListBox is enabled or not. Can be used to disable interaction with mouse or keyboard.
         * Disabled controls have another color display depending on custom settings.
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
        ): sap.ui.commons.ListBox;
        /**
         * Sets the height of this ListBox in CSS units.
         */
        setHeight(
          /**
           * New height for the ListBox.
           */
          sHeight: sap.ui.core.CSSSize
        ): sap.ui.commons.ListBox;
        /**
         * Allows setting the list items as array for this instance of ListBox.
         */
        setItems(
          /**
           * The items to set for this ListBox.
           */
          aItems: sap.ui.core.ListItem[],
          /**
           * Optional boolean parameter to indicate that the formerly set items should be destroyed, instead of just
           * removed.
           */
          bDestroyItems: boolean
        ): sap.ui.commons.ListBox;
        /**
         * Sets a new value for property {@link #getMaxWidth maxWidth}.
         *
         * Determines the maximum width of the ListBox. If not set, there is no maximum width.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setMaxWidth(
          /**
           * New value for property `maxWidth`
           */
          sMaxWidth: sap.ui.core.CSSSize
        ): sap.ui.commons.ListBox;
        /**
         * Sets a new value for property {@link #getMinWidth minWidth}.
         *
         * Determines the minimum width of the ListBox. If not set, there is no minimum width.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setMinWidth(
          /**
           * New value for property `minWidth`
           */
          sMinWidth: sap.ui.core.CSSSize
        ): sap.ui.commons.ListBox;
        /**
         * Positions the ListBox contents so that they are scrolled-down by the given number of pixels.
         */
        setScrollTop(
          /**
           * Vertical scroll position in pixels.
           */
          iScrollTop: number
        ): sap.ui.commons.ListBox;
        /**
         * Sets a new value for property {@link #getSecondaryValueTextAlign secondaryValueTextAlign}.
         *
         * Determines the text alignment in the secondary ListBox text column (if available).
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Begin`.
         */
        setSecondaryValueTextAlign(
          /**
           * New value for property `secondaryValueTextAlign`
           */
          sSecondaryValueTextAlign: sap.ui.core.TextAlign
        ): sap.ui.commons.ListBox;
        /**
         * Sets the zero-based index of the currently selected item. This method removes any previous selections.
         * When the given index is invalid, the call is ignored.
         */
        setSelectedIndex(
          /**
           * Index to be selected.
           */
          iSelectedIndex: number
        ): sap.ui.commons.ListBox;
        /**
         * Zero-based indices of selected items, wrapped in an array. An empty array means "no selection". When
         * multiple selection is disabled and multiple items are given, the selection is set to the index of the
         * first valid index in the given array. Any invalid indices are ignored. The previous selection is in any
         * case replaced.
         */
        setSelectedIndices(
          /**
           * Indices of the items to be selected.
           */
          aSelectedIndices: number[]
        ): sap.ui.commons.ListBox;
        /**
         * Keys of the items to be selected, wrapped in an array. An empty array means no selection. When multiple
         * selection is disabled, and multiple keys are given, the selection is set to the item with the first valid
         * key in the given array. Any invalid keys are ignored. The previous selection is replaced in any case.
         */
        setSelectedKeys(
          /**
           * The keys of the items to be selected.
           */
          aSelectedKeys: string[]
        ): sap.ui.commons.ListBox;
        /**
         * Sets a new value for property {@link #getValueTextAlign valueTextAlign}.
         *
         * Determines the text alignment in the primary ListBox column.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Begin`.
         */
        setValueTextAlign(
          /**
           * New value for property `valueTextAlign`
           */
          sValueTextAlign: sap.ui.core.TextAlign
        ): sap.ui.commons.ListBox;
        /**
         * Makes the ListBox render with a height that allows it to display exactly the given number of items.
         */
        setVisibleItems(
          /**
           * The number of items that should fit into the ListBox without scrolling.
           */
          iItemCount: number
        ): sap.ui.commons.ListBox;
        /**
         * Sets the width of this ListBox in CSS units.
         */
        setWidth(
          /**
           * New width for the ListBox.
           */
          sWidth: sap.ui.core.CSSSize
        ): sap.ui.commons.ListBox;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.commons.ListBox`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.ListBox` itself.
         *
         * Event is fired when selection is changed by user interaction.
         */
        attachSelect(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.ListBox` itself
           */
          oListener?: object
        ): sap.ui.commons.ListBox;
      }
      /**
       * @SINCE 1.0.0
       * @deprecated (since 1.21.0) - replaced by {@link sap.ui.unified.Menu}
       *
       * A menu is an interactive element which provides a choice of different actions to the user. These actions
       * (items) can also be organized in submenus. Like other dialog-like controls, the menu is not rendered
       * within the control hierarchy. Instead it can be opened at a specified position via a function call.
       */
      class Menu extends sap.ui.unified.Menu {
        /**
         * Constructor for a new Menu control.
         */
        constructor(
          /**
           * Id for the new control, generated automatically if no id is given
           */
          sId?: string,
          /**
           * Initial settings for the new control
           */
          mSettings?: MenuOpts
        );

        /**
         * Creates a new subclass of class sap.ui.commons.Menu with name `sClassName` and enriches it with the information
         * contained in `oClassInfo`.
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
         * Returns a metadata object for class sap.ui.commons.Menu.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
      }
      /**
       * @deprecated (since 1.38) - Instead, use the `sap.m.OverflowToolbar` control.
       *
       * Represents a user interface area which is the entry point for menus with their menu items. MenuBar is
       * useful for applications which shall offer a set of actions that shall be provided in a structured way.
       * The MenuBar contains the menu titles from where users navigate to the single items. The control supports
       * for example long menu item texts, automated scrolling for menu items when the browser space is not large
       * enough to display all items, defining images for single or all items in a menu, automated layouting of
       * items with or w/o image, and active/non-active items.
       */
      class MenuBar extends sap.ui.core.Control {
        /**
         * Constructor for a new MenuBar.
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
          mSettings?: MenuBarOpts
        );

        /**
         * Adds some item to the aggregation {@link #getItems items}.
         */
        addItem(
          /**
           * The item to add; if empty, nothing is inserted
           */
          oItem: sap.ui.unified.MenuItem
        ): sap.ui.commons.MenuBar;
        /**
         * Destroys all the items in the aggregation {@link #getItems items}.
         */
        destroyItems(): sap.ui.commons.MenuBar;
        /**
         * Creates a new subclass of class sap.ui.commons.MenuBar with name `sClassName` and enriches it with the
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
         * Gets current value of property {@link #getDesign design}.
         *
         * Available design options are Header and Standard. Note that design settings are theme-dependent.
         *
         * Default value is `Standard`.
         */
        getDesign(): sap.ui.commons.MenuBarDesign;
        /**
         * Gets current value of property {@link #getEnabled enabled}.
         *
         * When the MenuBar is not enabled, automatically all single menu items are also displayed as 'disabled'.
         *
         * Default value is `true`.
         */
        getEnabled(): boolean;
        /**
         * Gets content of aggregation {@link #getItems items}.
         *
         * Aggregation of menu items.
         */
        getItems(): sap.ui.unified.MenuItem[];
        /**
         * Returns a metadata object for class sap.ui.commons.MenuBar.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getWidth width}.
         *
         * Specifies the width of the MenuBar
         *
         * Default value is `100%`.
         */
        getWidth(): sap.ui.core.CSSSize;
        /**
         * Checks for the provided `sap.ui.unified.MenuItem` in the aggregation {@link #getItems items}. and returns
         * its index if found or -1 otherwise.
         */
        indexOfItem(
          /**
           * The item whose index is looked for
           */
          oItem: sap.ui.unified.MenuItem
        ): number;
        /**
         * Inserts a item into the aggregation {@link #getItems items}.
         */
        insertItem(
          /**
           * The item to insert; if empty, nothing is inserted
           */
          oItem: sap.ui.unified.MenuItem,
          /**
           * The `0`-based index the item should be inserted at; for a negative value of `iIndex`, the item is inserted
           * at position 0; for a value greater than the current size of the aggregation, the item is inserted at
           * the last position
           */
          iIndex: number
        ): sap.ui.commons.MenuBar;
        /**
         * Removes all the controls from the aggregation {@link #getItems items}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllItems(): sap.ui.unified.MenuItem[];
        /**
         * Removes a item from the aggregation {@link #getItems items}.
         */
        removeItem(
          /**
           * The item to remove or its index or id
           */
          vItem: number | string | sap.ui.unified.MenuItem
        ): sap.ui.unified.MenuItem;
        /**
         * Sets a new value for property {@link #getDesign design}.
         *
         * Available design options are Header and Standard. Note that design settings are theme-dependent.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Standard`.
         */
        setDesign(
          /**
           * New value for property `design`
           */
          sDesign: sap.ui.commons.MenuBarDesign
        ): sap.ui.commons.MenuBar;
        /**
         * Sets a new value for property {@link #getEnabled enabled}.
         *
         * When the MenuBar is not enabled, automatically all single menu items are also displayed as 'disabled'.
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
        ): sap.ui.commons.MenuBar;
        /**
         * Sets a new value for property {@link #getWidth width}.
         *
         * Specifies the width of the MenuBar
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
        ): sap.ui.commons.MenuBar;
      }
      /**
       * @deprecated (since 1.38) - Instead, use the `sap.m.MenuButton` control.
       *
       * Common button control that opens a menu when clicked by the user. The control provides an API for configuring
       * the docking position of the menu.
       */
      class MenuButton extends sap.ui.commons.Button {
        /**
         * Constructor for a new MenuButton.
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
          mSettings?: MenuButtonOpts
        );

        /**
         * Attaches event handler `fnFunction` to the {@link #event:itemSelected itemSelected} event of this `sap.ui.commons.MenuButton`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.MenuButton` itself.
         *
         * Event that is fired when a menu item is selected by the user
         */
        attachItemSelected(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.MenuButton` itself
           */
          oListener?: object
        ): sap.ui.commons.MenuButton;
        /**
         * Attach event-handler `fnFunction` to the 'press' event of this `sap.ui.commons.MenuButton`.
         *
         *
         * Event is fired when an item from the menu was selected.
         * See:
         * 	sap.ui.commons.MenuButton#attachItemSelected
         */
        // @ts-ignore
        attachPress(
          /**
           * The object, that should be passed along with the event-object when firing the event.
           */
          oData: object,
          /**
           * The function to call, when the event occurs. This function will be called on the oListener-instance (if
           * present) or in a 'static way'.
           */
          fnFunction: Function,
          /**
           * Object on which to call the given function. If empty, the global context (window) is used.
           */
          oListener?: object
        ): sap.ui.commons.MenuButton;
        /**
         * Destroys the menu in the aggregation named `menu`.
         */
        destroyMenu(): sap.ui.commons.MenuButton;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:itemSelected itemSelected} event of this `sap.ui.commons.MenuButton`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachItemSelected(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.commons.MenuButton;
        /**
         * Detach event-handler `fnFunction` from the 'press' event of this `sap.ui.commons.MenuButton`.
         *
         *
         * The passed function and listener object must match the ones previously used for event registration.
         * See:
         * 	sap.ui.commons.MenuButton#detachItemSelected
         */
        // @ts-ignore
        detachPress(
          /**
           * The function to call, when the event occurs.
           */
          fnFunction: Function,
          /**
           * Object on which the given function had to be called.
           */
          oListener: object
        ): sap.ui.commons.MenuButton;
        /**
         * Creates a new subclass of class sap.ui.commons.MenuButton with name `sClassName` and enriches it with
         * the information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.commons.Button.extend}.
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
         * Fires event {@link #event:itemSelected itemSelected} to attached listeners.
         */
        fireItemSelected(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The ID of the selected item
             */
            itemId?: string;
            /**
             * The selected item
             */
            item?: sap.ui.unified.MenuItemBase;
          }
        ): sap.ui.commons.MenuButton;
        /**
         * Fire event press to attached listeners.
         * See:
         * 	sap.ui.commons.MenuButton#fireItemSelected
         */
        // @ts-ignore
        firePress(
          /**
           * the arguments to pass along with the event.
           */
          mArguments?: object
        ): sap.ui.commons.MenuButton;
        /**
         * Gets current value of property {@link #getDockButton dockButton}.
         *
         * The position / edge (see sap.ui.core.Popup.Dock) of the button where the menu is docked. Default is 'begin
         * bottom'.
         */
        getDockButton(): string;
        /**
         * Gets current value of property {@link #getDockMenu dockMenu}.
         *
         * The position / edge (see sap.ui.core.Popup.Dock) of the menu which is docked to the button. Default is
         * 'begin top'.
         */
        getDockMenu(): string;
        /**
         * Gets content of aggregation {@link #getMenu menu}.
         *
         * Menu that shall be opened when the button is clicked
         */
        getMenu(): sap.ui.unified.Menu;
        /**
         * Returns a metadata object for class sap.ui.commons.MenuButton.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Sets a new value for property {@link #getDockButton dockButton}.
         *
         * The position / edge (see sap.ui.core.Popup.Dock) of the button where the menu is docked. Default is 'begin
         * bottom'.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setDockButton(
          /**
           * New value for property `dockButton`
           */
          sDockButton: string
        ): sap.ui.commons.MenuButton;
        /**
         * Sets a new value for property {@link #getDockMenu dockMenu}.
         *
         * The position / edge (see sap.ui.core.Popup.Dock) of the menu which is docked to the button. Default is
         * 'begin top'.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setDockMenu(
          /**
           * New value for property `dockMenu`
           */
          sDockMenu: string
        ): sap.ui.commons.MenuButton;
        /**
         * Setter for the aggregated `menu`.
         */
        setMenu(
          /**
           * The menu to be set to the menu aggregation
           */
          oMenu: sap.ui.unified.Menu
        ): sap.ui.commons.MenuButton;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:itemSelected itemSelected} event of this `sap.ui.commons.MenuButton`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.MenuButton` itself.
         *
         * Event that is fired when a menu item is selected by the user
         */
        attachItemSelected(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.MenuButton` itself
           */
          oListener?: object
        ): sap.ui.commons.MenuButton;
        /**
         * Attach event-handler `fnFunction` to the 'press' event of this `sap.ui.commons.MenuButton`.
         *
         *
         * Event is fired when an item from the menu was selected.
         * See:
         * 	sap.ui.commons.MenuButton#attachItemSelected
         */
        // @ts-ignore
        attachPress(
          /**
           * The function to call, when the event occurs. This function will be called on the oListener-instance (if
           * present) or in a 'static way'.
           */
          fnFunction: Function,
          /**
           * Object on which to call the given function. If empty, the global context (window) is used.
           */
          oListener?: object
        ): sap.ui.commons.MenuButton;
      }
      /**
       * @SINCE 1.0.0
       * @deprecated (since 1.21.0) - replaced by {@link sap.ui.unified.MenuItem}
       *
       * Standard item to be used inside a menu. A menu item represents an action which can be selected by the
       * user in the menu or it can provide a submenu to organize the actions hierarchically.
       */
      class MenuItem extends sap.ui.unified.MenuItem {
        /**
         * Constructor for a new MenuItem element.
         */
        constructor(
          /**
           * Id for the new control, generated automatically if no id is given
           */
          sId?: string,
          /**
           * Initial settings for the new control
           */
          mSettings?: MenuItemOpts
        );

        /**
         * Creates a new subclass of class sap.ui.commons.MenuItem with name `sClassName` and enriches it with the
         * information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.unified.MenuItem.extend}.
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
         * Returns a metadata object for class sap.ui.commons.MenuItem.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
      }
      /**
       * @SINCE 1.0.0
       * @deprecated (since 1.21.0) - replaced by {@link sap.ui.unified.MenuItemBase}
       *
       * Abstract base class for menu item which provides common properties and events for all concrete item implementations.
       */
      class MenuItemBase extends sap.ui.unified.MenuItemBase {
        /**
         * Abstract base class `MenuItemBase` for menu item elements. Please use concrete subclasses.
         */
        constructor(
          /**
           * Id for the new control, generated automatically if no id is given
           */
          sId?: string,
          /**
           * Initial settings for the new control
           */
          mSettings?: MenuItemBaseOpts
        );
      }
      /**
       * @deprecated (since 1.21.0) - Please use the control `sap.ui.unified.MenuTextFieldItem` of the library
       * `sap.ui.unified` instead.
       *
       * Special menu item which contains a label and a text field. This menu item is e.g. helpful for filter
       * implementations. The aggregation `submenu` (inherited from parent class) is not supported for this type
       * of menu item.
       */
      class MenuTextFieldItem extends sap.ui.unified.MenuTextFieldItem {
        /**
         * Constructor for a new MenuTextFieldItem element.
         */
        constructor(
          /**
           * Id for the new control, generated automatically if no id is given
           */
          sId?: string,
          /**
           * Initial settings for the new control
           */
          mSettings?: MenuTextFieldItemOpts
        );

        /**
         * Creates a new subclass of class sap.ui.commons.MenuTextFieldItem with name `sClassName` and enriches
         * it with the information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.unified.MenuTextFieldItem.extend}.
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
         * Returns a metadata object for class sap.ui.commons.MenuTextFieldItem.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
      }
      /**
       * @deprecated (since 1.4.0) - A new messaging concept will be created in future. Therefore this control
       * might be removed in one of the next versions.
       *
       * Creates the "Message"s to be supplied to the "MessageBar" Control.
       */
      class Message extends sap.ui.core.Control {
        /**
         * Constructor for a new Message.
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
          mSettings?: MessageOpts
        );

        /**
         * Registers a callback function to be invoked if long text Details are to be made available.
         *
         * This callback function will be supplied the corresponding Message "id", and should return the (simple)
         * HTML string to be displayed within the Message Details Dialog.
         *
         * E.g.: myMessage.bindDetails(getDetails); function getDetails(sId) {... return htmlString;}
         */
        bindDetails(
          /**
           * the callback function
           */
          fnCallBack: Function
        ): void;
        /**
         * Creates a new subclass of class sap.ui.commons.Message with name `sClassName` and enriches it with the
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
         * Gets current value of property {@link #getAssociatedElementId associatedElementId}.
         *
         * Associated UI element ID. (Optional) For navigation to error field.
         */
        getAssociatedElementId(): string;
        /**
         * Gets current value of property {@link #getDesign design}.
         *
         * Internal attribute, used to force the display of the "short" or the "long" text only.
         */
        getDesign(): string;
        /**
         * Returns a metadata object for class sap.ui.commons.Message.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getText text}.
         *
         * Message short text. (Mandatory)
         */
        getText(): string;
        /**
         * Gets current value of property {@link #getType type}.
         *
         * "Success", or "Warning", or "Error" messages. (Mandatory)
         */
        getType(): sap.ui.commons.MessageType;
        /**
         * Sets a new value for property {@link #getAssociatedElementId associatedElementId}.
         *
         * Associated UI element ID. (Optional) For navigation to error field.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setAssociatedElementId(
          /**
           * New value for property `associatedElementId`
           */
          sAssociatedElementId: string
        ): sap.ui.commons.Message;
        /**
         * Sets a new value for property {@link #getDesign design}.
         *
         * Internal attribute, used to force the display of the "short" or the "long" text only.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setDesign(
          /**
           * New value for property `design`
           */
          sDesign: string
        ): sap.ui.commons.Message;
        /**
         * Sets a new value for property {@link #getText text}.
         *
         * Message short text. (Mandatory)
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setText(
          /**
           * New value for property `text`
           */
          sText: string
        ): sap.ui.commons.Message;
        /**
         * Sets a new value for property {@link #getType type}.
         *
         * "Success", or "Warning", or "Error" messages. (Mandatory)
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setType(
          /**
           * New value for property `type`
           */
          sType: sap.ui.commons.MessageType
        ): sap.ui.commons.Message;
      }
      /**
       * @deprecated (since 1.4.0) - Instead, use the `sap.m.MessagePopover` control.
       *
       * Creates an instance of a MessageBar Control, for displaying messages.
       */
      class MessageBar extends sap.ui.core.Control {
        /**
         * Constructor for a new MessageBar.
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
          mSettings?: MessageBarOpts
        );

        /**
         * Adds/updates a supplied list of messages. The MessageBar will appear if at least one message exists.
         */
        addMessages(
          /**
           * Array of messages.
           */
          aAMessages: sap.ui.commons.Message[]
        ): void;
        /**
         * Deletes all messages.
         */
        deleteAllMessages(): sap.ui.commons.MessageBar;
        /**
         * Deletes a supplied list of messages. The MessageBar will disappear when no message remains.
         */
        deleteMessages(
          /**
           * Messages IDs to be deleted.
           */
          aIds: string[]
        ): void;
        /**
         * Creates a new subclass of class sap.ui.commons.MessageBar with name `sClassName` and enriches it with
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
         * Gets current value of property {@link #getAnchorID anchorID}.
         *
         * Element ID upon which the MessageBar will be initially positioned.
         *
         * Default value is `empty string`.
         */
        getAnchorID(): string;
        /**
         * Gets current value of property {@link #getAnchorSnapPoint anchorSnapPoint}.
         *
         * Type: sap.ui.core.Popup.Dock SnapPoint of MessageBar over anchorId. Note: Use "begin" or "end" for RTL
         * support. Note: "center" is not indicated, as positioning is only set once, either via the css "left"
         * or the "right" attribute. Therefore a MessageBar will only be extended in one direction, as Messages
         * come in.
         *
         * Default value is `begin top`.
         */
        getAnchorSnapPoint(): string;
        /**
         * Gets current value of property {@link #getMaxListed maxListed}.
         *
         * Maximum number of messages being displayed in the List before a scrollbar appears. Value '0' means no
         * limit.
         *
         * Default value is `7`.
         */
        getMaxListed(): number;
        /**
         * Gets current value of property {@link #getMaxToasted maxToasted}.
         *
         * Maximum number of simultaneous messages being toasted in a row. Value '0' means this dynamic part is
         * switched off.
         *
         * Default value is `3`.
         */
        getMaxToasted(): number;
        /**
         * Returns a metadata object for class sap.ui.commons.MessageBar.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getVisible visible}.
         *
         * Specifies whether or not the MessageBar is visible. Invisible controls are not rendered.
         *
         * Default value is `true`.
         */
        // @ts-ignore
        getVisible(): boolean;
        /**
         * Sets a new value for property {@link #getAnchorID anchorID}.
         *
         * Element ID upon which the MessageBar will be initially positioned.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `empty string`.
         */
        setAnchorID(
          /**
           * New value for property `anchorID`
           */
          sAnchorID: string
        ): sap.ui.commons.MessageBar;
        /**
         * Sets a new value for property {@link #getAnchorSnapPoint anchorSnapPoint}.
         *
         * Type: sap.ui.core.Popup.Dock SnapPoint of MessageBar over anchorId. Note: Use "begin" or "end" for RTL
         * support. Note: "center" is not indicated, as positioning is only set once, either via the css "left"
         * or the "right" attribute. Therefore a MessageBar will only be extended in one direction, as Messages
         * come in.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `begin top`.
         */
        setAnchorSnapPoint(
          /**
           * New value for property `anchorSnapPoint`
           */
          sAnchorSnapPoint: string
        ): sap.ui.commons.MessageBar;
        /**
         * Sets a new value for property {@link #getMaxListed maxListed}.
         *
         * Maximum number of messages being displayed in the List before a scrollbar appears. Value '0' means no
         * limit.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `7`.
         */
        setMaxListed(
          /**
           * New value for property `maxListed`
           */
          iMaxListed: number
        ): sap.ui.commons.MessageBar;
        /**
         * Sets a new value for property {@link #getMaxToasted maxToasted}.
         *
         * Maximum number of simultaneous messages being toasted in a row. Value '0' means this dynamic part is
         * switched off.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `3`.
         */
        setMaxToasted(
          /**
           * New value for property `maxToasted`
           */
          iMaxToasted: number
        ): sap.ui.commons.MessageBar;
        /**
         * Setter for property `visible`.
         *
         * Default value is `true`
         *
         * The default implementation of function `setVisible()` is enhanced in order to toggle the `visibility:hidden;`
         * attribute over the control.
         */
        // @ts-ignore
        setVisible(
          /**
           * New value for property `visible`
           */
          bVisible: boolean
        ): sap.ui.commons.MessageBar;
      }
      /**
       * @deprecated (since 1.4.0) - A new messaging concept will be created in future. Therefore this control
       * might be removed in one of the next versions.
       *
       * Instantiated by the "MessageBar" Control if the user requests to generate the corresponding "MessageList".
       */
      class MessageList extends sap.ui.core.Control {
        /**
         * Constructor for a new MessageList.
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
          mSettings?: MessageListOpts
        );

        /**
         * Creates a new subclass of class sap.ui.commons.MessageList with name `sClassName` and enriches it with
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
         * Gets current value of property {@link #getAnchorId anchorId}.
         *
         * ID of the anchor under which the MessageList will render.
         */
        getAnchorId(): string;
        /**
         * Gets current value of property {@link #getMaxListed maxListed}.
         *
         * Maximum number of messages being display in the List before a scrollbar appears. Value '0' means no limit.
         *
         * Default value is `7`.
         */
        getMaxListed(): string;
        /**
         * Returns a metadata object for class sap.ui.commons.MessageList.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getVisible visible}.
         *
         * Specifies whether or not the MessageList is visible. Invisible controls are not rendered.
         *
         * Default value is `false`.
         */
        // @ts-ignore
        getVisible(): boolean;
        /**
         * Sets a new value for property {@link #getAnchorId anchorId}.
         *
         * ID of the anchor under which the MessageList will render.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setAnchorId(
          /**
           * New value for property `anchorId`
           */
          sAnchorId: string
        ): sap.ui.commons.MessageList;
        /**
         * Sets a new value for property {@link #getMaxListed maxListed}.
         *
         * Maximum number of messages being display in the List before a scrollbar appears. Value '0' means no limit.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `7`.
         */
        setMaxListed(
          /**
           * New value for property `maxListed`
           */
          sMaxListed: string
        ): sap.ui.commons.MessageList;
        /**
         * Sets the list of Messages to be displayed and re-renders this Control if it is visible.
         */
        setMessages(
          /**
           * Message list.
           */
          aMessages: sap.ui.commons.Message[]
        ): void;
        /**
         * Setter for property `visible`.
         *
         * Default value is `true`
         *
         * The default implementation of function "setVisible()" is overwritten in order to invoke the open() and
         * close() of the MessageList Popup.
         */
        // @ts-ignore
        setVisible(
          /**
           * New value for property `visible`
           */
          bVisible: boolean
        ): sap.ui.commons.MessageList;
      }
      /**
       * @deprecated (since 1.4.0) - Instead, use the `sap.m.MessageToast` control.
       *
       * Responsible for displaying the new incoming messages, one at the time, on top of the MessageBar.
       */
      class MessageToast extends sap.ui.core.Control {
        /**
         * Constructor for a new MessageToast.
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
          mSettings?: MessageToastOpts
        );

        /**
         * Attaches event handler `fnFunction` to the {@link #event:next next} event of this `sap.ui.commons.MessageToast`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.MessageToast` itself.
         *
         * Fired once the `toast()` method is over, so that the MessageBar can "toast" another message if needed.
         */
        attachNext(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.MessageToast` itself
           */
          oListener?: object
        ): sap.ui.commons.MessageToast;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:next next} event of this `sap.ui.commons.MessageToast`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachNext(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.commons.MessageToast;
        /**
         * Creates a new subclass of class sap.ui.commons.MessageToast with name `sClassName` and enriches it with
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
         * Fires event {@link #event:next next} to attached listeners.
         */
        fireNext(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ui.commons.MessageToast;
        /**
         * Gets current value of property {@link #getAnchorId anchorId}.
         *
         * ID of the anchor on top of which the MessageToast is to render.
         */
        getAnchorId(): string;
        /**
         * Returns a metadata object for class sap.ui.commons.MessageToast.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Returns the idle state of the control. Returns true if no message is being toasted.
         */
        isIdle(): boolean;
        /**
         * Sets a new value for property {@link #getAnchorId anchorId}.
         *
         * ID of the anchor on top of which the MessageToast is to render.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setAnchorId(
          /**
           * New value for property `anchorId`
           */
          sAnchorId: string
        ): sap.ui.commons.MessageToast;
        /**
         * Triggers the toasting of a message, on top of the MessageBar. If no message is supplied, displays the
         * "Multiple new messages..." message.
         *
         * Receives the list of Messages to be displayed, and re-renders this Control if it is visible.
         */
        toast(
          /**
           * The Message to be toasted.
           */
          oMessage: sap.ui.commons.Message,
          /**
           * DOM ID of the anchor against which the Toast Arrow should align for a given Toast.
           */
          sAnchorId: string
        ): void;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:next next} event of this `sap.ui.commons.MessageToast`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.MessageToast` itself.
         *
         * Fired once the `toast()` method is over, so that the MessageBar can "toast" another message if needed.
         */
        attachNext(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.MessageToast` itself
           */
          oListener?: object
        ): sap.ui.commons.MessageToast;
      }
      /**
       * @deprecated (since 1.38)
       *
       * Provides navigation between pages within a list of numbered pages.
       */
      class Paginator extends sap.ui.core.Control {
        /**
         * Constructor for a new Paginator.
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
          mSettings?: PaginatorOpts
        );

        /**
         * Attaches event handler `fnFunction` to the {@link #event:page page} event of this `sap.ui.commons.Paginator`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.Paginator` itself.
         *
         * Event is fired when the user navigates to another page by selecting it directly, or by jumping forward/backward.
         */
        attachPage(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.Paginator` itself
           */
          oListener?: object
        ): sap.ui.commons.Paginator;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:page page} event of this `sap.ui.commons.Paginator`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachPage(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.commons.Paginator;
        /**
         * Creates a new subclass of class sap.ui.commons.Paginator with name `sClassName` and enriches it with
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
         * Fires event {@link #event:page page} to attached listeners.
         */
        firePage(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The page which is the current one before the page event is fired (and another page is displayed)
             */
            srcPage?: number;
            /**
             * The page that shall be displayed next after the page event is fired.
             *
             * The page number is 1-based: the first page has index 1, not 0, to match the number visible in the UI.
             */
            targetPage?: number;
            /**
             * Provides the values 'First', 'Last', 'Next', 'Previous', 'Goto'. The event parameter informs the application
             * how the user navigated to the new page: Whether the 'Next' button was used, or another button, or whether
             * the page was directly selected
             */
            type?: sap.ui.commons.PaginatorEvent;
          }
        ): sap.ui.commons.Paginator;
        /**
         * Gets current value of property {@link #getCurrentPage currentPage}.
         *
         * Represents the current page (first page has index 1, not 0, to match the visual number)
         *
         * Default value is `1`.
         */
        getCurrentPage(): number;
        /**
         * Returns a metadata object for class sap.ui.commons.Paginator.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getNumberOfPages numberOfPages}.
         *
         * Represents the overall number of pages that are embedded into the parent control
         */
        getNumberOfPages(): number;
        /**
         * Sets a new value for property {@link #getCurrentPage currentPage}.
         *
         * Represents the current page (first page has index 1, not 0, to match the visual number)
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `1`.
         */
        setCurrentPage(
          /**
           * New value for property `currentPage`
           */
          iCurrentPage: number
        ): sap.ui.commons.Paginator;
        /**
         * Sets a new value for property {@link #getNumberOfPages numberOfPages}.
         *
         * Represents the overall number of pages that are embedded into the parent control
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setNumberOfPages(
          /**
           * New value for property `numberOfPages`
           */
          iNumberOfPages: number
        ): sap.ui.commons.Paginator;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:page page} event of this `sap.ui.commons.Paginator`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.Paginator` itself.
         *
         * Event is fired when the user navigates to another page by selecting it directly, or by jumping forward/backward.
         */
        attachPage(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.Paginator` itself
           */
          oListener?: object
        ): sap.ui.commons.Paginator;
      }
      /**
       * @deprecated (since 1.38) - Instead, use the `sap.m.Panel` control.
       *
       * Represents a container with scroll functionality, that can be used for text and controls. The Panel does
       * not layout the embedded controls.
       */
      class Panel extends sap.ui.core.Control {
        /**
         * Constructor for a new Panel.
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
          mSettings?: PanelOpts
        );

        /**
         * Adds some button to the aggregation {@link #getButtons buttons}.
         */
        addButton(
          /**
           * The button to add; if empty, nothing is inserted
           */
          oButton: sap.ui.commons.Button
        ): sap.ui.commons.Panel;
        /**
         * Adds some content to the aggregation {@link #getContent content}.
         */
        addContent(
          /**
           * The content to add; if empty, nothing is inserted
           */
          oContent: sap.ui.core.Control
        ): sap.ui.commons.Panel;
        /**
         * Destroys all the buttons in the aggregation {@link #getButtons buttons}.
         */
        destroyButtons(): sap.ui.commons.Panel;
        /**
         * Destroys all the content in the aggregation {@link #getContent content}.
         */
        destroyContent(): sap.ui.commons.Panel;
        /**
         * Destroys the title in the aggregation {@link #getTitle title}.
         */
        destroyTitle(): sap.ui.commons.Panel;
        /**
         * Creates a new subclass of class sap.ui.commons.Panel with name `sClassName` and enriches it with the
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
         * Gets current value of property {@link #getApplyContentPadding applyContentPadding}.
         *
         * Determines whether the Panel will have padding. Padding is theme-dependent.
         *
         * Default value is `true`.
         */
        getApplyContentPadding(): boolean;
        /**
         * Gets current value of property {@link #getAreaDesign areaDesign}.
         *
         * Determines the background color. Note that color settings are theme-dependent.
         *
         * Default value is `Fill`.
         */
        getAreaDesign(): sap.ui.commons.enums.AreaDesign;
        /**
         * Gets current value of property {@link #getBorderDesign borderDesign}.
         *
         * Determines if the Panel can have a box as border. Note that displaying borders is theme-dependent.
         *
         * Default value is `Box`.
         */
        getBorderDesign(): sap.ui.commons.enums.BorderDesign;
        /**
         * Gets content of aggregation {@link #getButtons buttons}.
         *
         * The buttons that shall be displayed in the Panel header
         */
        getButtons(): sap.ui.commons.Button[];
        /**
         * Gets current value of property {@link #getCollapsed collapsed}.
         *
         * Determines whether the Panel will be initially collapsed. When it is initially collapsed, the contents
         * are not rendered. A collapsed Panel consumes less space than an expanded one.
         *
         * Default value is `false`.
         */
        getCollapsed(): boolean;
        /**
         * Gets content of aggregation {@link #getContent content}.
         *
         * Aggregates the controls that are contained in the Panel. It is recommended to use a layout control as
         * single direct child. When the Panel dimensions are set, the child control may have width and height of
         * 100%. When the dimensions are not set, the child defines the size of the Panel.
         */
        getContent(): sap.ui.core.Control[];
        /**
         * Gets current value of property {@link #getEnabled enabled}.
         *
         * Represents the state of the of the Panel (enabled or disabled)
         *
         * Default value is `true`.
         */
        getEnabled(): boolean;
        /**/
        // @ts-ignore
        getFocusInfo(): void;
        /**
         * Gets current value of property {@link #getHeight height}.
         *
         * Determines the height of the Panel in CSS size. Per default, the height for the Panel is automatically
         * adjusted to the content. Dimension allows to explicitly specify the height.
         */
        getHeight(): sap.ui.core.CSSSize;
        /**
         * Returns a metadata object for class sap.ui.commons.Panel.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Returns the scroll position of the panel in pixels from the left. Returns 0 if not rendered yet. Also
         * internally updates the control property.
         */
        getScrollLeft(): number;
        /**
         * Returns the scroll position of the panel in pixels from the top. Returns 0 if not rendered yet. Also
         * internally updates the control property.
         */
        getScrollTop(): number;
        /**
         * Gets current value of property {@link #getShowCollapseIcon showCollapseIcon}.
         *
         * Determines whether the Panel will have an icon for collapsing/expanding, or not.
         *
         * Default value is `true`.
         */
        getShowCollapseIcon(): boolean;
        /**
         * Returns the text that is rendered in the Panel header. If a Title control was used it returns the text
         * of the Title control.
         */
        getText(): string;
        /**
         * Gets content of aggregation {@link #getTitle title}.
         *
         * Aggregates the title element of the Panel. For text titles only, you alternatively could use setText()
         * which also creates a title in the background.
         */
        getTitle(): sap.ui.core.Title;
        /**
         * Gets current value of property {@link #getWidth width}.
         *
         * Determines the width of the Panel in CSS size.
         *
         * Default value is `100%`.
         */
        getWidth(): sap.ui.core.CSSSize;
        /**
         * Checks for the provided `sap.ui.commons.Button` in the aggregation {@link #getButtons buttons}. and returns
         * its index if found or -1 otherwise.
         */
        indexOfButton(
          /**
           * The button whose index is looked for
           */
          oButton: sap.ui.commons.Button
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
          oButton: sap.ui.commons.Button,
          /**
           * The `0`-based index the button should be inserted at; for a negative value of `iIndex`, the button is
           * inserted at position 0; for a value greater than the current size of the aggregation, the button is inserted
           * at the last position
           */
          iIndex: number
        ): sap.ui.commons.Panel;
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
        ): sap.ui.commons.Panel;
        /**
         * Removes all the controls from the aggregation {@link #getButtons buttons}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllButtons(): sap.ui.commons.Button[];
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
          vButton: number | string | sap.ui.commons.Button
        ): sap.ui.commons.Button;
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
         * Property setter for the padding
         */
        setApplyContentPadding(
          /**
           * Whether the Panel should have padding.
           */
          bPadding: boolean
        ): sap.ui.commons.Panel;
        /**
         * Sets a new value for property {@link #getAreaDesign areaDesign}.
         *
         * Determines the background color. Note that color settings are theme-dependent.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Fill`.
         */
        setAreaDesign(
          /**
           * New value for property `areaDesign`
           */
          sAreaDesign: sap.ui.commons.enums.AreaDesign
        ): sap.ui.commons.Panel;
        /**
         * Sets a new value for property {@link #getBorderDesign borderDesign}.
         *
         * Determines if the Panel can have a box as border. Note that displaying borders is theme-dependent.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Box`.
         */
        setBorderDesign(
          /**
           * New value for property `borderDesign`
           */
          sBorderDesign: sap.ui.commons.enums.BorderDesign
        ): sap.ui.commons.Panel;
        /**
         * Property setter for the "collapsed" state
         */
        setCollapsed(
          /**
           * Whether the Panel should be collapsed or not.
           */
          bCollapsed: boolean
        ): sap.ui.commons.Panel;
        /**
         * Sets the dimensions of the panel.
         */
        setDimensions(
          /**
           * The width of the panel as CSS size.
           */
          sWidth: sap.ui.core.CSSSize,
          /**
           * The height of the panel as CSS size.
           */
          sHeight: sap.ui.core.CSSSize
        ): sap.ui.commons.Panel;
        /**
         * Property setter for the "enabled" state
         */
        setEnabled(
          /**
           * Whether the Panel should be enabled or not.
           */
          bEnabled: boolean
        ): sap.ui.commons.Panel;
        /**
         * Sets the height of the panel.
         */
        setHeight(
          /**
           * The height of the panel as CSS size.
           */
          sHeight: sap.ui.core.CSSSize
        ): sap.ui.commons.Panel;
        /**
         * Sets the scroll position of the panel in pixels from the left.
         */
        setScrollLeft(
          /**
           * The position to scroll to.
           */
          iPosition: number
        ): sap.ui.commons.Panel;
        /**
         * Sets the scrolls position of the panel in pixels from the top.
         */
        setScrollTop(
          /**
           * The position to scroll to.
           */
          iPosition: number
        ): sap.ui.commons.Panel;
        /**
         * Sets a new value for property {@link #getShowCollapseIcon showCollapseIcon}.
         *
         * Determines whether the Panel will have an icon for collapsing/expanding, or not.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setShowCollapseIcon(
          /**
           * New value for property `showCollapseIcon`
           */
          bShowCollapseIcon: boolean
        ): sap.ui.commons.Panel;
        /**
         * Sets the text that will be rendered in the Panel header.
         */
        setText(
          /**
           * The text to render in the header.
           */
          sText: string
        ): sap.ui.commons.Panel;
        /**
         * Sets a Tille control that will be rendered in the Panel header.
         */
        setTitle(
          /**
           * The Title to render in the header.
           */
          oTitle: sap.ui.core.Title
        ): sap.ui.commons.Panel;
        /**
         * Sets the width of the panel.
         */
        setWidth(
          /**
           * The width of the panel as CSS size.
           */
          sWidth: sap.ui.core.CSSSize
        ): sap.ui.commons.Panel;
      }
      /**
       * @deprecated (since 1.38) - Instead, use the `sap.m.Input` control.
       *
       * A text field with masked characters which borrows its properties and methods from TextField.
       */
      class PasswordField extends sap.ui.commons.TextField {
        /**
         * Constructor for a new PasswordField.
         */
        constructor(
          /**
           * id for the new control, generated automatically if no id is given
           */
          sId?: string,
          /**
           * initial settings for the new control
           */
          mSettings?: PasswordFieldOpts
        );

        /**
         * Creates a new subclass of class sap.ui.commons.PasswordField with name `sClassName` and enriches it with
         * the information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.commons.TextField.extend}.
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
         * Returns a metadata object for class sap.ui.commons.PasswordField.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
      }
      /**
       * @deprecated (since 1.38) - Instead, use the `sap.m.ProgressIndicator` control.
       *
       * Shows the progress of a process in a graphical way. The indicator can be displayed with or without numerical
       * values. The filling can be displayed in color only, or additionally with the percentage rate. The indicator
       * status can be interactive.
       */
      class ProgressIndicator extends sap.ui.core.Control {
        /**
         * Constructor for a new ProgressIndicator.
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
          mSettings?: ProgressIndicatorOpts
        );

        /**
         * Creates a new subclass of class sap.ui.commons.ProgressIndicator with name `sClassName` and enriches
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
         * See:
         * 	sap.ui.core.Control#getAccessibilityInfo
         */
        // @ts-ignore
        getAccessibilityInfo(): void;
        /**
         * Gets current value of property {@link #getBarColor barColor}.
         *
         * Determines the color of the bar which visualizes the progress. Possible values defined in the sap.ui.core.BarColor
         * enumeration are the following: CRITICAL (yellow), NEGATIVE (red), POSITIVE (green), NEUTRAL (blue) (default
         * value).
         *
         * Default value is `NEUTRAL`.
         */
        getBarColor(): sap.ui.core.BarColor;
        /**
         * Gets current value of property {@link #getDisplayValue displayValue}.
         *
         * Determines the text value that will be displayed in the bar.
         *
         * Default value is `0%`.
         */
        getDisplayValue(): string;
        /**
         * Gets current value of property {@link #getEnabled enabled}.
         *
         * Determines whether the control is enabled or not. Disabled controls have different colors, and can not
         * be focused.
         *
         * Default value is `true`.
         */
        getEnabled(): boolean;
        /**
         * Returns a metadata object for class sap.ui.commons.ProgressIndicator.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getPercentValue percentValue}.
         *
         * Determines the numerical value for the displayed length of the progress bar.
         *
         * Default value is `0`.
         */
        getPercentValue(): number;
        /**
         * Gets current value of property {@link #getShowValue showValue}.
         *
         * Determines whether the percent value shall be rendered inside the bar.
         *
         * Default value is `true`.
         */
        getShowValue(): boolean;
        /**
         * Gets current value of property {@link #getWidth width}.
         *
         * Determines the width of the control.
         *
         * Default value is `100%`.
         */
        getWidth(): sap.ui.core.CSSSize;
        /**
         * Sets a new value for property {@link #getBarColor barColor}.
         *
         * Determines the color of the bar which visualizes the progress. Possible values defined in the sap.ui.core.BarColor
         * enumeration are the following: CRITICAL (yellow), NEGATIVE (red), POSITIVE (green), NEUTRAL (blue) (default
         * value).
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `NEUTRAL`.
         */
        setBarColor(
          /**
           * New value for property `barColor`
           */
          sBarColor: sap.ui.core.BarColor
        ): sap.ui.commons.ProgressIndicator;
        /**
         * Sets a new value for property {@link #getDisplayValue displayValue}.
         *
         * Determines the text value that will be displayed in the bar.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `0%`.
         */
        setDisplayValue(
          /**
           * New value for property `displayValue`
           */
          sDisplayValue: string
        ): sap.ui.commons.ProgressIndicator;
        /**
         * Sets a new value for property {@link #getEnabled enabled}.
         *
         * Determines whether the control is enabled or not. Disabled controls have different colors, and can not
         * be focused.
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
        ): sap.ui.commons.ProgressIndicator;
        /**
         * Sets the new percent value which the ProgressIndicator should display. A new rendering is not necessary,
         * only the bar has to be moved.
         */
        setPercentValue(
          /**
           * The new percent value of the ProgressIndicator.
           */
          iPercentValue: number
        ): sap.ui.commons.ProgressIndicator;
        /**
         * Sets a new value for property {@link #getShowValue showValue}.
         *
         * Determines whether the percent value shall be rendered inside the bar.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setShowValue(
          /**
           * New value for property `showValue`
           */
          bShowValue: boolean
        ): sap.ui.commons.ProgressIndicator;
        /**
         * Sets a new value for property {@link #getWidth width}.
         *
         * Determines the width of the control.
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
        ): sap.ui.commons.ProgressIndicator;
      }
      /**
       * @deprecated (since 1.38) - Instead, use the `sap.m.RadioButton` control.
       *
       * RadioButton is a control similar to CheckBox, but it allows the user to choose only one of the predefined
       * set of options.
       *
       * Usually, RadioButton is used in a group with other RadioButtons (with the groupName property or by using
       * sap.ui.commons.RadioButtonGroup), thus providing a limited choice for the user. An event is triggered
       * when the user makes a change of the selection.
       */
      class RadioButton extends sap.ui.core.Control {
        /**
         * Constructor for a new RadioButton.
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
          mSettings?: RadioButtonOpts
        );

        /**
         * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
         */
        addAriaDescribedBy(
          /**
           * The ariaDescribedBy to add; if empty, nothing is inserted
           */
          vAriaDescribedBy: sap.ui.core.ID | sap.ui.core.Control
        ): sap.ui.commons.RadioButton;
        /**
         * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
         */
        addAriaLabelledBy(
          /**
           * The ariaLabelledBy to add; if empty, nothing is inserted
           */
          vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control
        ): sap.ui.commons.RadioButton;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.commons.RadioButton`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.RadioButton` itself.
         *
         * Triggers when the user makes a change on the RadioButton.
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
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.RadioButton` itself
           */
          oListener?: object
        ): sap.ui.commons.RadioButton;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.ui.commons.RadioButton`.
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
        ): sap.ui.commons.RadioButton;
        /**
         * Creates a new subclass of class sap.ui.commons.RadioButton with name `sClassName` and enriches it with
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
          mParameters?: object
        ): sap.ui.commons.RadioButton;
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
         * Gets current value of property {@link #getEditable editable}.
         *
         * Specifies whether the user can select the RadioButton.
         *
         * Default value is `true`.
         */
        getEditable(): boolean;
        /**
         * Gets current value of property {@link #getEnabled enabled}.
         *
         * Displays the disabled controls in another color, depending on the customer settings.
         *
         * Default value is `true`.
         */
        getEnabled(): boolean;
        /**
         * Gets current value of property {@link #getGroupName groupName}.
         *
         * Defines the name of the RadioButtonGroup, in which the current RadioButton belongs to. You can define
         * a new name for the group. If no new name is specified, the default is sapUiRbDefaultGroup. By default,
         * when one of the RadioButtons in a group is selected, all others are unselected.
         *
         * Default value is `sapUiRbDefaultGroup`.
         */
        getGroupName(): string;
        /**
         * Gets current value of property {@link #getKey key}.
         *
         * Can be used for subsequent actions.
         */
        getKey(): string;
        /**
         * Returns a metadata object for class sap.ui.commons.RadioButton.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getSelected selected}.
         *
         * Specifies the select state of the RadioButton.
         *
         * Default value is `false`.
         */
        getSelected(): boolean;
        /**
         * Gets current value of property {@link #getText text}.
         *
         * Defines the text displayed next to the RadioButton.
         */
        getText(): string;
        /**
         * Gets current value of property {@link #getTextDirection textDirection}.
         *
         * Defines the text direction - options are left-to-right (LTR) and right-to-left (RTL). Alternatively,
         * the control can inherit the text direction from its parent container.
         *
         * Default value is `Inherit`.
         */
        getTextDirection(): sap.ui.core.TextDirection;
        /**
         * Gets current value of property {@link #getValueState valueState}.
         *
         * Enumeration sap.ui.core.ValueState provides state values Error, Success, Warning and None.
         *
         * Default value is `None`.
         */
        getValueState(): sap.ui.core.ValueState;
        /**
         * Gets current value of property {@link #getWidth width}.
         *
         * Determines the control width. By default, it depends on the text length. Alternatively, CSS sizes in
         * % or px can be set.
         */
        getWidth(): sap.ui.core.CSSSize;
        /**
         * Removes all the controls in the association named {@link #getAriaDescribedBy ariaDescribedBy}.
         */
        removeAllAriaDescribedBy(): sap.ui.core.ID[];
        /**
         * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
         */
        removeAllAriaLabelledBy(): sap.ui.core.ID[];
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
         * Sets a new value for property {@link #getEditable editable}.
         *
         * Specifies whether the user can select the RadioButton.
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
        ): sap.ui.commons.RadioButton;
        /**
         * Sets a new value for property {@link #getEnabled enabled}.
         *
         * Displays the disabled controls in another color, depending on the customer settings.
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
        ): sap.ui.commons.RadioButton;
        /**
         * Sets a new value for property {@link #getGroupName groupName}.
         *
         * Defines the name of the RadioButtonGroup, in which the current RadioButton belongs to. You can define
         * a new name for the group. If no new name is specified, the default is sapUiRbDefaultGroup. By default,
         * when one of the RadioButtons in a group is selected, all others are unselected.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `sapUiRbDefaultGroup`.
         */
        setGroupName(
          /**
           * New value for property `groupName`
           */
          sGroupName: string
        ): sap.ui.commons.RadioButton;
        /**
         * Sets a new value for property {@link #getKey key}.
         *
         * Can be used for subsequent actions.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setKey(
          /**
           * New value for property `key`
           */
          sKey: string
        ): sap.ui.commons.RadioButton;
        /**
         * Sets a new value for property {@link #getSelected selected}.
         *
         * Specifies the select state of the RadioButton.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setSelected(
          /**
           * New value for property `selected`
           */
          bSelected: boolean
        ): sap.ui.commons.RadioButton;
        /**
         * Sets a new value for property {@link #getText text}.
         *
         * Defines the text displayed next to the RadioButton.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setText(
          /**
           * New value for property `text`
           */
          sText: string
        ): sap.ui.commons.RadioButton;
        /**
         * Sets a new value for property {@link #getTextDirection textDirection}.
         *
         * Defines the text direction - options are left-to-right (LTR) and right-to-left (RTL). Alternatively,
         * the control can inherit the text direction from its parent container.
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
        ): sap.ui.commons.RadioButton;
        /**
         * Sets a new value for property {@link #getValueState valueState}.
         *
         * Enumeration sap.ui.core.ValueState provides state values Error, Success, Warning and None.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `None`.
         */
        setValueState(
          /**
           * New value for property `valueState`
           */
          sValueState: sap.ui.core.ValueState
        ): sap.ui.commons.RadioButton;
        /**
         * Sets a new value for property {@link #getWidth width}.
         *
         * Determines the control width. By default, it depends on the text length. Alternatively, CSS sizes in
         * % or px can be set.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setWidth(
          /**
           * New value for property `width`
           */
          sWidth: sap.ui.core.CSSSize
        ): sap.ui.commons.RadioButton;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.commons.RadioButton`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.RadioButton` itself.
         *
         * Triggers when the user makes a change on the RadioButton.
         */
        attachSelect(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.RadioButton` itself
           */
          oListener?: object
        ): sap.ui.commons.RadioButton;
      }
      /**
       * @deprecated (since 1.38) - Instead, use the `sap.m.RadioButtonGroup` control.
       *
       * The RadioButtonGroup is a basic control that is used to provide area for making interactive choice out
       * of a set of options. It represents a list with items where exactly one item can be selected in a session.
       * For the representation of the single group entries, the RadioButton items are created automatically.
       * For the RadioButton choice, mouse and keyboard navigation usage is supported.
       */
      class RadioButtonGroup extends sap.ui.core.Control {
        /**
         * Constructor for a new RadioButtonGroup.
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
          mSettings?: RadioButtonGroupOpts
        );

        /**
         * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
         */
        addAriaDescribedBy(
          /**
           * The ariaDescribedBy to add; if empty, nothing is inserted
           */
          vAriaDescribedBy: sap.ui.core.ID | sap.ui.core.Control
        ): sap.ui.commons.RadioButtonGroup;
        /**
         * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
         */
        addAriaLabelledBy(
          /**
           * The ariaLabelledBy to add; if empty, nothing is inserted
           */
          vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control
        ): sap.ui.commons.RadioButtonGroup;
        /**
         * Adds some item to the aggregation {@link #getItems items}.
         */
        addItem(
          /**
           * The item to add; if empty, nothing is inserted
           */
          oItem: sap.ui.core.Item
        ): sap.ui.commons.RadioButtonGroup;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.commons.RadioButtonGroup`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.RadioButtonGroup` itself.
         *
         * Fires when selection is changed by user interaction.
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
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.RadioButtonGroup` itself
           */
          oListener?: object
        ): sap.ui.commons.RadioButtonGroup;
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
        ): sap.ui.commons.RadioButtonGroup;
        /**
         * Creates a new instance of RadioButtonGroup, with the same settings as the RadioButtonGroup on which the
         * method is called. Event handlers are not cloned.
         */
        // @ts-ignore
        clone(): sap.ui.commons.RadioButtonGroup;
        /**
         * Destroys all the items in the aggregation {@link #getItems items}.
         */
        destroyItems(): sap.ui.commons.RadioButtonGroup;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.ui.commons.RadioButtonGroup`.
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
        ): sap.ui.commons.RadioButtonGroup;
        /**
         * Creates a new subclass of class sap.ui.commons.RadioButtonGroup with name `sClassName` and enriches it
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
         * Fires event {@link #event:select select} to attached listeners.
         */
        fireSelect(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * Index of the selected RadioButton.
             */
            selectedIndex?: number;
          }
        ): sap.ui.commons.RadioButtonGroup;
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
         * Gets current value of property {@link #getColumns columns}.
         *
         * Determines the maximum number of RadioButtons displayed in one line.
         *
         * Default value is `1`.
         */
        getColumns(): number;
        /**
         * Gets current value of property {@link #getEditable editable}.
         *
         * Specifies whether the user can change the selected value of the RadioButtonGroup. When the property is
         * set to false, the control obtains visual styles different from its visual styles for the normal and the
         * disabled state. Additionally the control is no longer interactive, but can receive focus.
         *
         * Default value is `true`.
         */
        getEditable(): boolean;
        /**
         * @SINCE 1.10.3
         *
         * Gets current value of property {@link #getEnabled enabled}.
         *
         * Enables/disables the RadioButtonGroup. If it is disabled all RadioButtons will be displayed as disabled.
         * The enabled property of the Item will not be used in this case. If the RadioButtonGroup is enabled, the
         * enabled property of the Item will define if a RadioButton is enabled or not.
         *
         * Default value is `true`.
         */
        getEnabled(): boolean;
        /**
         * Gets content of aggregation {@link #getItems items}.
         *
         * The RadioButtons of this RadioButtonGroup.
         */
        getItems(): sap.ui.core.Item[];
        /**
         * Returns a metadata object for class sap.ui.commons.RadioButtonGroup.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getSelectedIndex selectedIndex}.
         *
         * The index of the selected/checked RadioButton.
         *
         * Default value is `0`.
         */
        getSelectedIndex(): number;
        /**
         * When no item is selected, "null" is returned.
         */
        getSelectedItem(): sap.ui.core.Item;
        /**
         * Gets current value of property {@link #getValueState valueState}.
         *
         * Тhe value state to be displayed for the RadioButton. Possible values are: sap.ui.core.ValueState.Error,
         * sap.ui.core.ValueState.Warning, sap.ui.core.ValueState.Success and sap.ui.core.ValueState.None. Note:
         * Setting this attribute to sap.ui.core.ValueState.Error when the accessibility feature is enabled, sets
         * the value of the invalid property for the whole RadioButtonGroup to true.
         *
         * Default value is `None`.
         */
        getValueState(): sap.ui.core.ValueState;
        /**
         * Gets current value of property {@link #getWidth width}.
         *
         * Defines the width of the RadioButtonGroup.
         */
        getWidth(): sap.ui.core.CSSSize;
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
        ): sap.ui.commons.RadioButtonGroup;
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
        removeAllItems(): sap.ui.core.Item[];
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
          vItem: number | string | sap.ui.core.Item
        ): sap.ui.core.Item;
        /**
         * Sets a new value for property {@link #getColumns columns}.
         *
         * Determines the maximum number of RadioButtons displayed in one line.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `1`.
         */
        setColumns(
          /**
           * New value for property `columns`
           */
          iColumns: number
        ): sap.ui.commons.RadioButtonGroup;
        /**
         * Sets a new value for property {@link #getEditable editable}.
         *
         * Specifies whether the user can change the selected value of the RadioButtonGroup. When the property is
         * set to false, the control obtains visual styles different from its visual styles for the normal and the
         * disabled state. Additionally the control is no longer interactive, but can receive focus.
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
        ): sap.ui.commons.RadioButtonGroup;
        /**
         * @SINCE 1.10.3
         *
         * Sets a new value for property {@link #getEnabled enabled}.
         *
         * Enables/disables the RadioButtonGroup. If it is disabled all RadioButtons will be displayed as disabled.
         * The enabled property of the Item will not be used in this case. If the RadioButtonGroup is enabled, the
         * enabled property of the Item will define if a RadioButton is enabled or not.
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
        ): sap.ui.commons.RadioButtonGroup;
        /**
         * Sets a new value for property {@link #getSelectedIndex selectedIndex}.
         *
         * The index of the selected/checked RadioButton.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `0`.
         */
        setSelectedIndex(
          /**
           * New value for property `selectedIndex`
           */
          iSelectedIndex: number
        ): sap.ui.commons.RadioButtonGroup;
        /**
         * Sets the Item as selected and removes the selection from the previous one.
         */
        setSelectedItem(
          /**
           * Selected item
           */
          oSelectedItem: sap.ui.core.Item
        ): void;
        /**
         * Sets a new value for property {@link #getValueState valueState}.
         *
         * Тhe value state to be displayed for the RadioButton. Possible values are: sap.ui.core.ValueState.Error,
         * sap.ui.core.ValueState.Warning, sap.ui.core.ValueState.Success and sap.ui.core.ValueState.None. Note:
         * Setting this attribute to sap.ui.core.ValueState.Error when the accessibility feature is enabled, sets
         * the value of the invalid property for the whole RadioButtonGroup to true.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `None`.
         */
        setValueState(
          /**
           * New value for property `valueState`
           */
          sValueState: sap.ui.core.ValueState
        ): sap.ui.commons.RadioButtonGroup;
        /**
         * Sets a new value for property {@link #getWidth width}.
         *
         * Defines the width of the RadioButtonGroup.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setWidth(
          /**
           * New value for property `width`
           */
          sWidth: sap.ui.core.CSSSize
        ): sap.ui.commons.RadioButtonGroup;
        /**
         * Unbinds aggregation {@link #getItems items} from model data.
         */
        unbindItems(): sap.ui.commons.RadioButtonGroup;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.commons.RadioButtonGroup`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.RadioButtonGroup` itself.
         *
         * Fires when selection is changed by user interaction.
         */
        attachSelect(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.RadioButtonGroup` itself
           */
          oListener?: object
        ): sap.ui.commons.RadioButtonGroup;
      }
      /**
       * @SINCE 1.8.0
       * @deprecated (since 1.38) - replaced by {@link sap.m.RangeSlider}
       *
       * The interactive control is displayed either as a horizontal or a vertical line with two pointers and
       * units of measurement. Users can move the pointers along the line to change a range with graphical support.
       */
      class RangeSlider extends sap.ui.commons.Slider {
        /**
         * Constructor for a new `RangeSlider`.
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
          mSettings?: RangeSliderOpts
        );

        /**
         * Creates a new subclass of class sap.ui.commons.RangeSlider with name `sClassName` and enriches it with
         * the information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.commons.Slider.extend}.
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
         * Returns a metadata object for class sap.ui.commons.RangeSlider.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getValue2 value2}.
         *
         * Current second value of the slider. (Position of the second grip.)
         *
         * **Note:** If the value is not in the valid range (between `min` and `max`) it will be changed to be in
         * the valid range. If it is smaller than `value` it will be set to the same value.
         *
         * Default value is `80`.
         */
        getValue2(): number;
        /**
         * Sets a new value for property {@link #getValue2 value2}.
         *
         * Current second value of the slider. (Position of the second grip.)
         *
         * **Note:** If the value is not in the valid range (between `min` and `max`) it will be changed to be in
         * the valid range. If it is smaller than `value` it will be set to the same value.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `80`.
         */
        setValue2(
          /**
           * New value for property `value2`
           */
          fValue2: number
        ): sap.ui.commons.RangeSlider;
      }
      /**
       * @deprecated (since 1.38) - Instead, use the `sap.m.RatingIndicator` control.
       *
       * RatingIndicator is used to let the user do some rating on a given topic. The amount of rating symbols
       * can be specified, as well as the URIs to the image icons which shall be used as rating symbols. When
       * the user performs a rating, an event is fired.
       */
      class RatingIndicator extends sap.ui.core.Control {
        /**
         * Constructor for a new RatingIndicator.
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
          mSettings?: RatingIndicatorOpts
        );

        /**
         * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
         */
        addAriaDescribedBy(
          /**
           * The ariaDescribedBy to add; if empty, nothing is inserted
           */
          vAriaDescribedBy: sap.ui.core.ID | sap.ui.core.Control
        ): sap.ui.commons.RatingIndicator;
        /**
         * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
         */
        addAriaLabelledBy(
          /**
           * The ariaLabelledBy to add; if empty, nothing is inserted
           */
          vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control
        ): sap.ui.commons.RatingIndicator;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.ui.commons.RatingIndicator`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.RatingIndicator` itself.
         *
         * The event is fired when the user has done a rating.
         */
        attachChange(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.RatingIndicator` itself
           */
          oListener?: object
        ): sap.ui.commons.RatingIndicator;
        /**
         * Binds property {@link #getValue value} to model data.
         *
         * See {@link sap.ui.base.ManagedObject#bindProperty ManagedObject.bindProperty} for a detailed description
         * of the possible properties of `oBindingInfo`
         */
        bindValue(
          /**
           * The binding information
           */
          oBindingInfo: object
        ): sap.ui.commons.RatingIndicator;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:change change} event of this `sap.ui.commons.RatingIndicator`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachChange(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.commons.RatingIndicator;
        /**
         * Creates a new subclass of class sap.ui.commons.RatingIndicator with name `sClassName` and enriches it
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
         * Fires event {@link #event:change change} to attached listeners.
         */
        fireChange(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The value of the user rating
             */
            value?: number;
          }
        ): sap.ui.commons.RatingIndicator;
        /**
         * See:
         * 	sap.ui.core.Control#getAccessibilityInfo
         */
        // @ts-ignore
        getAccessibilityInfo(): void;
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
         * Gets current value of property {@link #getAverageValue averageValue}.
         *
         * Determines the average value. This value is shown if no value is set. This can be used to display an
         * average Value before the user votes.
         *
         * Default value is `0`.
         */
        getAverageValue(): number;
        /**
         * Gets current value of property {@link #getEditable editable}.
         *
         * Determines if the rating symbols can be edited.
         *
         * Default value is `true`.
         */
        getEditable(): boolean;
        /**
         * Gets current value of property {@link #getIconHovered iconHovered}.
         *
         * The URI to the image which is displayed when the mouse hovers onto a rating symbol. If used, a requirement
         * is that all custom icons need to have the same size. Note that when this attribute is used also the other
         * icon attributes need to be set.
         */
        getIconHovered(): sap.ui.core.URI;
        /**
         * Gets current value of property {@link #getIconSelected iconSelected}.
         *
         * The URI to the image which shall be displayed for all selected rating symbols. Note that when this attribute
         * is used, also the other icon attributes need to be set.
         */
        getIconSelected(): sap.ui.core.URI;
        /**
         * Gets current value of property {@link #getIconUnselected iconUnselected}.
         *
         * The URI to the image which shall be displayed for all unselected rating symbols. If this attribute is
         * used, a requirement is that all custom icons need to have the same size. Note that when this attribute
         * is used also the other icon attributes need to be set.
         */
        getIconUnselected(): sap.ui.core.URI;
        /**
         * Gets current value of property {@link #getMaxValue maxValue}.
         *
         * Determines the number of displayed rating symbols
         *
         * Default value is `5`.
         */
        getMaxValue(): number;
        /**
         * Returns a metadata object for class sap.ui.commons.RatingIndicator.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getValue value}.
         *
         * Determines the currently selected value. If value is set to sap.ui.commons.RatingIndicator.NoValue, the
         * averageValue is shown.
         *
         * Default value is `0`.
         */
        getValue(): number;
        /**
         * Gets current value of property {@link #getVisualMode visualMode}.
         *
         * Defines how float values are visualized: Full, Half, Continuous (see enumeration RatingIndicatorVisualMode)
         *
         * Default value is `Half`.
         */
        getVisualMode(): sap.ui.commons.RatingIndicatorVisualMode;
        /**
         * Removes all the controls in the association named {@link #getAriaDescribedBy ariaDescribedBy}.
         */
        removeAllAriaDescribedBy(): sap.ui.core.ID[];
        /**
         * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
         */
        removeAllAriaLabelledBy(): sap.ui.core.ID[];
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
         * Sets a new value for property {@link #getAverageValue averageValue}.
         *
         * Determines the average value. This value is shown if no value is set. This can be used to display an
         * average Value before the user votes.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `0`.
         */
        setAverageValue(
          /**
           * New value for property `averageValue`
           */
          fAverageValue: number
        ): sap.ui.commons.RatingIndicator;
        /**
         * Sets a new value for property {@link #getEditable editable}.
         *
         * Determines if the rating symbols can be edited.
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
        ): sap.ui.commons.RatingIndicator;
        /**
         * Sets a new value for property {@link #getIconHovered iconHovered}.
         *
         * The URI to the image which is displayed when the mouse hovers onto a rating symbol. If used, a requirement
         * is that all custom icons need to have the same size. Note that when this attribute is used also the other
         * icon attributes need to be set.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setIconHovered(
          /**
           * New value for property `iconHovered`
           */
          sIconHovered: sap.ui.core.URI
        ): sap.ui.commons.RatingIndicator;
        /**
         * Sets a new value for property {@link #getIconSelected iconSelected}.
         *
         * The URI to the image which shall be displayed for all selected rating symbols. Note that when this attribute
         * is used, also the other icon attributes need to be set.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setIconSelected(
          /**
           * New value for property `iconSelected`
           */
          sIconSelected: sap.ui.core.URI
        ): sap.ui.commons.RatingIndicator;
        /**
         * Sets a new value for property {@link #getIconUnselected iconUnselected}.
         *
         * The URI to the image which shall be displayed for all unselected rating symbols. If this attribute is
         * used, a requirement is that all custom icons need to have the same size. Note that when this attribute
         * is used also the other icon attributes need to be set.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setIconUnselected(
          /**
           * New value for property `iconUnselected`
           */
          sIconUnselected: sap.ui.core.URI
        ): sap.ui.commons.RatingIndicator;
        /**
         * Setter for property `maxValue`.
         *
         * Default value is `5` Minimum value is `1`
         */
        setMaxValue(
          /**
           * new value for property `maxValue`
           */
          iMaxValue: number
        ): sap.ui.commons.RatingIndicator;
        /**
         * Sets a new value for property {@link #getValue value}.
         *
         * Determines the currently selected value. If value is set to sap.ui.commons.RatingIndicator.NoValue, the
         * averageValue is shown.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `0`.
         */
        setValue(
          /**
           * New value for property `value`
           */
          fValue: number
        ): sap.ui.commons.RatingIndicator;
        /**
         * Sets a new value for property {@link #getVisualMode visualMode}.
         *
         * Defines how float values are visualized: Full, Half, Continuous (see enumeration RatingIndicatorVisualMode)
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Half`.
         */
        setVisualMode(
          /**
           * New value for property `visualMode`
           */
          sVisualMode: sap.ui.commons.RatingIndicatorVisualMode
        ): sap.ui.commons.RatingIndicator;
        /**
         * Unbinds property {@link #getValue value} from model data.
         */
        unbindValue(): sap.ui.commons.RatingIndicator;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.ui.commons.RatingIndicator`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.RatingIndicator` itself.
         *
         * The event is fired when the user has done a rating.
         */
        attachChange(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.RatingIndicator` itself
           */
          oListener?: object
        ): sap.ui.commons.RatingIndicator;
      }
      /**
       * @deprecated (since 1.38) - Use a container by choice from the {@link sap.m} library, instead.
       *
       * Is used to provide a container, which can show different content depending on its current width. It fires
       * an event, whenever a new range is reached. In addition the content of the new range is automatically
       * shown, if it is set.
       */
      class ResponsiveContainer extends sap.ui.core.Control {
        /**
         * Constructor for a new ResponsiveContainer.
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
          mSettings?: ResponsiveContainerOpts
        );

        /**
         * Adds some range to the aggregation {@link #getRanges ranges}.
         */
        addRange(
          /**
           * The range to add; if empty, nothing is inserted
           */
          oRange: sap.ui.commons.ResponsiveContainerRange
        ): sap.ui.commons.ResponsiveContainer;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:rangeSwitch rangeSwitch} event of this `sap.ui.commons.ResponsiveContainer`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.ResponsiveContainer` itself.
         *
         * The event is fired the width of the container reaches a new range.
         */
        attachRangeSwitch(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.ResponsiveContainer`
           * itself
           */
          oListener?: object
        ): sap.ui.commons.ResponsiveContainer;
        /**
         * Destroys all the ranges in the aggregation {@link #getRanges ranges}.
         */
        destroyRanges(): sap.ui.commons.ResponsiveContainer;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:rangeSwitch rangeSwitch} event of this `sap.ui.commons.ResponsiveContainer`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachRangeSwitch(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.commons.ResponsiveContainer;
        /**
         * Creates a new subclass of class sap.ui.commons.ResponsiveContainer with name `sClassName` and enriches
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
         * Fires event {@link #event:rangeSwitch rangeSwitch} to attached listeners.
         */
        fireRangeSwitch(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The current range
             */
            currentRange?: sap.ui.commons.ResponsiveContainerRange;
          }
        ): sap.ui.commons.ResponsiveContainer;
        /**
         * ID of the element which is the current target of the association {@link #getDefaultContent defaultContent},
         * or `null`.
         */
        getDefaultContent(): sap.ui.core.ID;
        /**
         * Gets current value of property {@link #getHeight height}.
         *
         * The width of the responsive container.
         *
         * Default value is `100%`.
         */
        getHeight(): sap.ui.core.CSSSize;
        /**
         * Returns a metadata object for class sap.ui.commons.ResponsiveContainer.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets content of aggregation {@link #getRanges ranges}.
         *
         * The ranges defined for this container
         */
        getRanges(): sap.ui.commons.ResponsiveContainerRange[];
        /**
         * Gets current value of property {@link #getWidth width}.
         *
         * The width of the responsive container.
         *
         * Default value is `100%`.
         */
        getWidth(): sap.ui.core.CSSSize;
        /**
         * Checks for the provided `sap.ui.commons.ResponsiveContainerRange` in the aggregation {@link #getRanges
         * ranges}. and returns its index if found or -1 otherwise.
         */
        indexOfRange(
          /**
           * The range whose index is looked for
           */
          oRange: sap.ui.commons.ResponsiveContainerRange
        ): number;
        /**
         * Inserts a range into the aggregation {@link #getRanges ranges}.
         */
        insertRange(
          /**
           * The range to insert; if empty, nothing is inserted
           */
          oRange: sap.ui.commons.ResponsiveContainerRange,
          /**
           * The `0`-based index the range should be inserted at; for a negative value of `iIndex`, the range is inserted
           * at position 0; for a value greater than the current size of the aggregation, the range is inserted at
           * the last position
           */
          iIndex: number
        ): sap.ui.commons.ResponsiveContainer;
        /**
         * Removes all the controls from the aggregation {@link #getRanges ranges}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllRanges(): sap.ui.commons.ResponsiveContainerRange[];
        /**
         * Removes a range from the aggregation {@link #getRanges ranges}.
         */
        removeRange(
          /**
           * The range to remove or its index or id
           */
          vRange: number | string | sap.ui.commons.ResponsiveContainerRange
        ): sap.ui.commons.ResponsiveContainerRange;
        /**
         * Sets the associated {@link #getDefaultContent defaultContent}.
         */
        setDefaultContent(
          /**
           * ID of an element which becomes the new target of this defaultContent association; alternatively, an element
           * instance may be given
           */
          oDefaultContent: sap.ui.core.ID | sap.ui.core.Control
        ): sap.ui.commons.ResponsiveContainer;
        /**
         * Sets a new value for property {@link #getHeight height}.
         *
         * The width of the responsive container.
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
        ): sap.ui.commons.ResponsiveContainer;
        /**
         * Sets a new value for property {@link #getWidth width}.
         *
         * The width of the responsive container.
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
        ): sap.ui.commons.ResponsiveContainer;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:rangeSwitch rangeSwitch} event of this `sap.ui.commons.ResponsiveContainer`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.ResponsiveContainer` itself.
         *
         * The event is fired the width of the container reaches a new range.
         */
        attachRangeSwitch(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.ResponsiveContainer`
           * itself
           */
          oListener?: object
        ): sap.ui.commons.ResponsiveContainer;
      }
      /**
       * @deprecated (since 1.38)
       *
       * Defines a range for the ResponsiveContainer
       */
      class ResponsiveContainerRange extends sap.ui.core.Element {
        /**
         * Constructor for a new ResponsiveContainerRange.
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
          mSettings?: ResponsiveContainerRangeOpts
        );

        /**
         * Creates a new subclass of class sap.ui.commons.ResponsiveContainerRange with name `sClassName` and enriches
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
         * ID of the element which is the current target of the association {@link #getContent content}, or `null`.
         */
        getContent(): sap.ui.core.ID;
        /**
         * Gets current value of property {@link #getHeight height}.
         *
         * The minimal height for this range to be displayed.
         *
         * Default value is `empty string`.
         */
        getHeight(): sap.ui.core.CSSSize;
        /**
         * Gets current value of property {@link #getKey key}.
         *
         * A key which can be used to identify the range (optional).
         *
         * Default value is `empty string`.
         */
        getKey(): string;
        /**
         * Returns a metadata object for class sap.ui.commons.ResponsiveContainerRange.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getWidth width}.
         *
         * The minimal width for this range to be displayed.
         *
         * Default value is `empty string`.
         */
        getWidth(): sap.ui.core.CSSSize;
        /**
         * Sets the associated {@link #getContent content}.
         */
        setContent(
          /**
           * ID of an element which becomes the new target of this content association; alternatively, an element
           * instance may be given
           */
          oContent: sap.ui.core.ID | sap.ui.core.Control
        ): sap.ui.commons.ResponsiveContainerRange;
        /**
         * Sets a new value for property {@link #getHeight height}.
         *
         * The minimal height for this range to be displayed.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `empty string`.
         */
        setHeight(
          /**
           * New value for property `height`
           */
          sHeight: sap.ui.core.CSSSize
        ): sap.ui.commons.ResponsiveContainerRange;
        /**
         * Sets a new value for property {@link #getKey key}.
         *
         * A key which can be used to identify the range (optional).
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `empty string`.
         */
        setKey(
          /**
           * New value for property `key`
           */
          sKey: string
        ): sap.ui.commons.ResponsiveContainerRange;
        /**
         * Sets a new value for property {@link #getWidth width}.
         *
         * The minimal width for this range to be displayed.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `empty string`.
         */
        setWidth(
          /**
           * New value for property `width`
           */
          sWidth: sap.ui.core.CSSSize
        ): sap.ui.commons.ResponsiveContainerRange;
      }
      /**
       * @deprecated (since 1.38) - Tf you want to achieve a similar behavior, use a `sap.m.Popover` control and
       * open it next to your control.
       *
       * Is used to provide tool tips that can have long text, image and title. This tool tip extends the TooltipBase.
       */
      class RichTooltip extends sap.ui.core.TooltipBase {
        /**
         * Constructor for a new RichTooltip.
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
          mSettings?: RichTooltipOpts
        );

        /**
         * Creates a new subclass of class sap.ui.commons.RichTooltip with name `sClassName` and enriches it with
         * the information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.TooltipBase.extend}.
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
         * @SINCE 1.11.1
         *
         * Gets current value of property {@link #getImageAltText imageAltText}.
         *
         * This is the alt text for the image
         */
        getImageAltText(): string;
        /**
         * Gets current value of property {@link #getImageSrc imageSrc}.
         *
         * If RichTooltip contains an image, this property is used to define the source path.
         */
        getImageSrc(): sap.ui.core.URI;
        /**
         * Returns a metadata object for class sap.ui.commons.RichTooltip.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getTitle title}.
         *
         * Tool tip title to be displayed in the header.
         */
        getTitle(): string;
        /**
         * This returns the previously set text. Since a FormattedTextView is used for rendering and stuff the corresponding
         * property of the FormattedTextView is being read and returned. If no text was set an empty string is being
         * returned.
         */
        getValueStateText(): string;
        /**
         * Calculates the height of the RichTooltip to set a proper min-height. Additionally the ARIA attributes
         * are set to the corresponding elements.
         */
        // @ts-ignore
        onAfterRendering(): void;
        /**
         * @SINCE 1.11.1
         *
         * Sets a new value for property {@link #getImageAltText imageAltText}.
         *
         * This is the alt text for the image
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setImageAltText(
          /**
           * New value for property `imageAltText`
           */
          sImageAltText: string
        ): sap.ui.commons.RichTooltip;
        /**
         * Sets a new value for property {@link #getImageSrc imageSrc}.
         *
         * If RichTooltip contains an image, this property is used to define the source path.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setImageSrc(
          /**
           * New value for property `imageSrc`
           */
          sImageSrc: sap.ui.core.URI
        ): sap.ui.commons.RichTooltip;
        /**
         * Sets a new value for property {@link #getTitle title}.
         *
         * Tool tip title to be displayed in the header.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setTitle(
          /**
           * New value for property `title`
           */
          sTitle: string
        ): sap.ui.commons.RichTooltip;
        /**
         * This sets an individual text for the ValueState of the parent element of the RichTooltip.
         */
        setValueStateText(
          /**
           * the text that should be shown as individual ValueState text
           */
          sText: string
        ): sap.ui.commons.RichTooltip;
      }
      /**
       * @deprecated (since 1.38) - Instead, use the `sap.m.Wizard` control.
       *
       * RoadMap is used to display step-by-step work flows of a clearly defined work process.
       */
      class RoadMap extends sap.ui.core.Control {
        /**
         * Constructor for a new RoadMap.
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
          mSettings?: RoadMapOpts
        );

        /**
         * Adds some step to the aggregation {@link #getSteps steps}.
         */
        addStep(
          /**
           * The step to add; if empty, nothing is inserted
           */
          oStep: sap.ui.commons.RoadMapStep
        ): sap.ui.commons.RoadMap;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:stepExpanded stepExpanded} event of this `sap.ui.commons.RoadMap`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.RoadMap` itself.
         *
         * Event is fired when a given step is expanded or collapsed by user.
         */
        attachStepExpanded(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.RoadMap` itself
           */
          oListener?: object
        ): sap.ui.commons.RoadMap;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:stepSelected stepSelected} event of this `sap.ui.commons.RoadMap`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.RoadMap` itself.
         *
         * Event is fired when the user selects a step.
         */
        attachStepSelected(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.RoadMap` itself
           */
          oListener?: object
        ): sap.ui.commons.RoadMap;
        /**
         * Destroys all the steps in the aggregation {@link #getSteps steps}.
         */
        destroySteps(): sap.ui.commons.RoadMap;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:stepExpanded stepExpanded} event of this `sap.ui.commons.RoadMap`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachStepExpanded(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.commons.RoadMap;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:stepSelected stepSelected} event of this `sap.ui.commons.RoadMap`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachStepSelected(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.commons.RoadMap;
        /**
         * Creates a new subclass of class sap.ui.commons.RoadMap with name `sClassName` and enriches it with the
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
         * Fires event {@link #event:stepExpanded stepExpanded} to attached listeners.
         */
        fireStepExpanded(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * ID of the expanded/collapsed step
             */
            stepId?: string;
          }
        ): sap.ui.commons.RoadMap;
        /**
         * Fires event {@link #event:stepSelected stepSelected} to attached listeners.
         */
        fireStepSelected(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * ID of the selected step
             */
            stepId?: string;
          }
        ): sap.ui.commons.RoadMap;
        /**
         * Gets current value of property {@link #getFirstVisibleStep firstVisibleStep}.
         *
         * ID of the first step to be displayed
         */
        getFirstVisibleStep(): string;
        /**
         * Returns a metadata object for class sap.ui.commons.RoadMap.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getNumberOfVisibleSteps numberOfVisibleSteps}.
         *
         * Total number of steps to be displayed at once
         */
        getNumberOfVisibleSteps(): number;
        /**
         * Gets current value of property {@link #getSelectedStep selectedStep}.
         *
         * ID of the step which is currently selected
         */
        getSelectedStep(): string;
        /**
         * Gets content of aggregation {@link #getSteps steps}.
         *
         * Steps that are composing the RoadMap
         */
        getSteps(): sap.ui.commons.RoadMapStep[];
        /**
         * Gets current value of property {@link #getWidth width}.
         *
         * Determines the control width in CSS size
         *
         * Default value is `100%`.
         */
        getWidth(): sap.ui.core.CSSSize;
        /**
         * Checks for the provided `sap.ui.commons.RoadMapStep` in the aggregation {@link #getSteps steps}. and
         * returns its index if found or -1 otherwise.
         */
        indexOfStep(
          /**
           * The step whose index is looked for
           */
          oStep: sap.ui.commons.RoadMapStep
        ): number;
        /**
         * Inserts a step into the aggregation {@link #getSteps steps}.
         */
        insertStep(
          /**
           * The step to insert; if empty, nothing is inserted
           */
          oStep: sap.ui.commons.RoadMapStep,
          /**
           * The `0`-based index the step should be inserted at; for a negative value of `iIndex`, the step is inserted
           * at position 0; for a value greater than the current size of the aggregation, the step is inserted at
           * the last position
           */
          iIndex: number
        ): sap.ui.commons.RoadMap;
        /**
         * Removes all the controls from the aggregation {@link #getSteps steps}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllSteps(): sap.ui.commons.RoadMapStep[];
        /**
         * Removes a step from the aggregation {@link #getSteps steps}.
         */
        removeStep(
          /**
           * The step to remove or its index or id
           */
          vStep: number | string | sap.ui.commons.RoadMapStep
        ): sap.ui.commons.RoadMapStep;
        /**
         * Sets a new value for property {@link #getFirstVisibleStep firstVisibleStep}.
         *
         * ID of the first step to be displayed
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setFirstVisibleStep(
          /**
           * New value for property `firstVisibleStep`
           */
          sFirstVisibleStep: string
        ): sap.ui.commons.RoadMap;
        /**
         * Sets a new value for property {@link #getNumberOfVisibleSteps numberOfVisibleSteps}.
         *
         * Total number of steps to be displayed at once
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setNumberOfVisibleSteps(
          /**
           * New value for property `numberOfVisibleSteps`
           */
          iNumberOfVisibleSteps: number
        ): sap.ui.commons.RoadMap;
        /**
         * Sets a new value for property {@link #getSelectedStep selectedStep}.
         *
         * ID of the step which is currently selected
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setSelectedStep(
          /**
           * New value for property `selectedStep`
           */
          sSelectedStep: string
        ): sap.ui.commons.RoadMap;
        /**
         * Sets a new value for property {@link #getWidth width}.
         *
         * Determines the control width in CSS size
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
        ): sap.ui.commons.RoadMap;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:stepExpanded stepExpanded} event of this `sap.ui.commons.RoadMap`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.RoadMap` itself.
         *
         * Event is fired when a given step is expanded or collapsed by user.
         */
        attachStepExpanded(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.RoadMap` itself
           */
          oListener?: object
        ): sap.ui.commons.RoadMap;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:stepSelected stepSelected} event of this `sap.ui.commons.RoadMap`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.RoadMap` itself.
         *
         * Event is fired when the user selects a step.
         */
        attachStepSelected(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.RoadMap` itself
           */
          oListener?: object
        ): sap.ui.commons.RoadMap;
      }
      /**
       * @deprecated (since 1.38) - Instead, use the `sap.m.Wizard` control.
       *
       * Step used within a RoadMap Control.
       */
      class RoadMapStep extends sap.ui.core.Element {
        /**
         * Constructor for a new RoadMapStep.
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
          mSettings?: RoadMapStepOpts
        );

        /**
         * @deprecated (since 1.10.5) - Sub steps will not be supported in future. This feature might be removed
         * in one of the next releases.
         *
         * Adds some subStep to the aggregation {@link #getSubSteps subSteps}.
         */
        addSubStep(
          /**
           * The subStep to add; if empty, nothing is inserted
           */
          oSubStep: sap.ui.commons.RoadMapStep
        ): sap.ui.commons.RoadMapStep;
        /**
         * @deprecated (since 1.10.5) - Sub steps will not be supported in future. This feature might be removed
         * in one of the next releases.
         *
         * Destroys all the subSteps in the aggregation {@link #getSubSteps subSteps}.
         */
        destroySubSteps(): sap.ui.commons.RoadMapStep;
        /**
         * Creates a new subclass of class sap.ui.commons.RoadMapStep with name `sClassName` and enriches it with
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
         * Gets current value of property {@link #getEnabled enabled}.
         *
         * Specifies whether the user shall be allowed to click a step, or not
         *
         * Default value is `true`.
         */
        getEnabled(): boolean;
        /**
         * @deprecated (since 1.10.5) - Note that sub steps will not be supported in future. This feature might
         * be removed in one of the next releases.
         *
         * Gets current value of property {@link #getExpanded expanded}.
         *
         * This property is only relevant when using sub steps.
         *
         * Default value is `false`.
         */
        getExpanded(): boolean;
        /**
         * Gets current value of property {@link #getLabel label}.
         *
         * Label of the step
         */
        getLabel(): string;
        /**
         * Returns a metadata object for class sap.ui.commons.RoadMapStep.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * @deprecated (since 1.10.5) - Sub steps will not be supported in future. This feature might be removed
         * in one of the next releases.
         *
         * Gets content of aggregation {@link #getSubSteps subSteps}.
         *
         * Sub steps for the current step. Will be displayed only in the case that the step is expanded. Otherwise,
         * special arrows show the availability of sub steps. One level of sub steps supported.
         */
        getSubSteps(): sap.ui.commons.RoadMapStep[];
        /**
         * Gets current value of property {@link #getVisible visible}.
         *
         * Step is visible
         *
         * Default value is `true`.
         */
        getVisible(): boolean;
        /**
         * @deprecated (since 1.10.5) - Sub steps will not be supported in future. This feature might be removed
         * in one of the next releases.
         *
         * Checks for the provided `sap.ui.commons.RoadMapStep` in the aggregation {@link #getSubSteps subSteps}.
         * and returns its index if found or -1 otherwise.
         */
        indexOfSubStep(
          /**
           * The subStep whose index is looked for
           */
          oSubStep: sap.ui.commons.RoadMapStep
        ): number;
        /**
         * @deprecated (since 1.10.5) - Sub steps will not be supported in future. This feature might be removed
         * in one of the next releases.
         *
         * Inserts a subStep into the aggregation {@link #getSubSteps subSteps}.
         */
        insertSubStep(
          /**
           * The subStep to insert; if empty, nothing is inserted
           */
          oSubStep: sap.ui.commons.RoadMapStep,
          /**
           * The `0`-based index the subStep should be inserted at; for a negative value of `iIndex`, the subStep
           * is inserted at position 0; for a value greater than the current size of the aggregation, the subStep
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.commons.RoadMapStep;
        /**
         * @deprecated (since 1.10.5) - Sub steps will not be supported in future. This feature might be removed
         * in one of the next releases.
         *
         * Removes all the controls from the aggregation {@link #getSubSteps subSteps}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllSubSteps(): sap.ui.commons.RoadMapStep[];
        /**
         * @deprecated (since 1.10.5) - Sub steps will not be supported in future. This feature might be removed
         * in one of the next releases.
         *
         * Removes a subStep from the aggregation {@link #getSubSteps subSteps}.
         */
        removeSubStep(
          /**
           * The subStep to remove or its index or id
           */
          vSubStep: number | string | sap.ui.commons.RoadMapStep
        ): sap.ui.commons.RoadMapStep;
        /**
         * Sets a new value for property {@link #getEnabled enabled}.
         *
         * Specifies whether the user shall be allowed to click a step, or not
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
        ): sap.ui.commons.RoadMapStep;
        /**
         * @deprecated (since 1.10.5) - Note that sub steps will not be supported in future. This feature might
         * be removed in one of the next releases.
         *
         * Sets a new value for property {@link #getExpanded expanded}.
         *
         * This property is only relevant when using sub steps.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setExpanded(
          /**
           * New value for property `expanded`
           */
          bExpanded: boolean
        ): sap.ui.commons.RoadMapStep;
        /**
         * Sets a new value for property {@link #getLabel label}.
         *
         * Label of the step
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setLabel(
          /**
           * New value for property `label`
           */
          sLabel: string
        ): sap.ui.commons.RoadMapStep;
        /**
         * Sets a new value for property {@link #getVisible visible}.
         *
         * Step is visible
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
        ): sap.ui.commons.RoadMapStep;
      }
      /**
       * @deprecated (since 1.38) - Instead, use the `sap.ui.table.Table` control.
       *
       * This control displays items in a stacked list format, allowing the user to page in order to see more
       * items or to use the offered filtering and sorting capabilities in order to manipulate the displayed data.
       */
      class RowRepeater extends sap.ui.core.Control {
        /**
         * Constructor for a new RowRepeater.
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
          mSettings?: RowRepeaterOpts
        );

        /**
         * Adds some filter to the aggregation {@link #getFilters filters}.
         */
        addFilter(
          /**
           * The filter to add; if empty, nothing is inserted
           */
          oFilter: sap.ui.commons.RowRepeaterFilter
        ): sap.ui.commons.RowRepeater;
        /**
         * Adds some row to the aggregation {@link #getRows rows}.
         */
        addRow(
          /**
           * The row to add; if empty, nothing is inserted
           */
          oRow: sap.ui.core.Control
        ): sap.ui.commons.RowRepeater;
        /**
         * Adds some sorter to the aggregation {@link #getSorters sorters}.
         */
        addSorter(
          /**
           * The sorter to add; if empty, nothing is inserted
           */
          oSorter: sap.ui.commons.RowRepeaterSorter
        ): sap.ui.commons.RowRepeater;
        /**
         * Applies a filter.
         */
        applyFilter(
          /**
           * The ID if the filter.
           */
          sId: string
        ): void;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:filter filter} event of this `sap.ui.commons.RowRepeater`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.RowRepeater` itself.
         *
         * This event is triggered when a filter is set.
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
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.RowRepeater` itself
           */
          oListener?: object
        ): sap.ui.commons.RowRepeater;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:page page} event of this `sap.ui.commons.RowRepeater`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.RowRepeater` itself.
         *
         * This event is triggered when paging was executed.
         */
        attachPage(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.RowRepeater` itself
           */
          oListener?: object
        ): sap.ui.commons.RowRepeater;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:resize resize} event of this `sap.ui.commons.RowRepeater`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.RowRepeater` itself.
         *
         * This event is triggered when the number of rows was changed.
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
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.RowRepeater` itself
           */
          oListener?: object
        ): sap.ui.commons.RowRepeater;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:sort sort} event of this `sap.ui.commons.RowRepeater`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.RowRepeater` itself.
         *
         * This event is triggered when a sorting is applied.
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
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.RowRepeater` itself
           */
          oListener?: object
        ): sap.ui.commons.RowRepeater;
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
        ): sap.ui.commons.RowRepeater;
        /**
         * Destroys all the filters in the aggregation {@link #getFilters filters}.
         */
        destroyFilters(): sap.ui.commons.RowRepeater;
        /**
         * Destroys the noData in the aggregation {@link #getNoData noData}.
         */
        destroyNoData(): sap.ui.commons.RowRepeater;
        /**
         * Destroys all the rows in the aggregation {@link #getRows rows}.
         */
        destroyRows(): sap.ui.commons.RowRepeater;
        /**
         * Destroys all the sorters in the aggregation {@link #getSorters sorters}.
         */
        destroySorters(): sap.ui.commons.RowRepeater;
        /**
         * Destroys the title in the aggregation {@link #getTitle title}.
         */
        destroyTitle(): sap.ui.commons.RowRepeater;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:filter filter} event of this `sap.ui.commons.RowRepeater`.
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
        ): sap.ui.commons.RowRepeater;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:page page} event of this `sap.ui.commons.RowRepeater`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachPage(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.commons.RowRepeater;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:resize resize} event of this `sap.ui.commons.RowRepeater`.
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
        ): sap.ui.commons.RowRepeater;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:sort sort} event of this `sap.ui.commons.RowRepeater`.
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
        ): sap.ui.commons.RowRepeater;
        /**
         * Creates a new subclass of class sap.ui.commons.RowRepeater with name `sClassName` and enriches it with
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
         * Fires event {@link #event:filter filter} to attached listeners.
         */
        fireFilter(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The ID of the filter that has just been applied.
             */
            filterId?: string;
          }
        ): sap.ui.commons.RowRepeater;
        /**
         * Fires event {@link #event:page page} to attached listeners.
         */
        firePage(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The value of the currentPage property after the change.
             */
            currentPage?: number;
            /**
             * The value of the currentPage property before the change.
             */
            previousPage?: number;
          }
        ): sap.ui.commons.RowRepeater;
        /**
         * Fires event {@link #event:resize resize} to attached listeners.
         */
        fireResize(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The value of the numberOfRows property after the change.
             */
            numberOfRows?: number;
            /**
             * The value of the numberOfRows property before the change.
             */
            previousNumberOfRows?: number;
          }
        ): sap.ui.commons.RowRepeater;
        /**
         * Fires event {@link #event:sort sort} to attached listeners.
         */
        fireSort(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The ID of the sorter that has just been applied.
             */
            sorterId?: string;
          }
        ): sap.ui.commons.RowRepeater;
        /**
         * Switch to first page.
         */
        firstPage(): void;
        /**
         * Gets current value of property {@link #getCurrentPage currentPage}.
         *
         * The index of the page currently displayed. The index starts at 1.
         *
         * Default value is `1`.
         */
        getCurrentPage(): number;
        /**
         * Gets current value of property {@link #getDesign design}.
         *
         * The visual design of the control.
         *
         * Default value is `Standard`.
         */
        getDesign(): sap.ui.commons.RowRepeaterDesign;
        /**
         * Gets content of aggregation {@link #getFilters filters}.
         *
         * Filters to be provided in toolbar.
         */
        getFilters(): sap.ui.commons.RowRepeaterFilter[];
        /**
         * Gets current value of property {@link #getFixedRowHeight fixedRowHeight}.
         *
         * Row height adapts to rendered content. If a fixed height is specified the cells have a maximum height
         * and the overflow will be hidden.
         *
         * Default value is `empty string`.
         */
        getFixedRowHeight(): sap.ui.core.CSSSize;
        /**
         * Returns a metadata object for class sap.ui.commons.RowRepeater.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets content of aggregation {@link #getNoData noData}.
         *
         * This control is shown, in case there is no data available to be displayed in the RowRepeater.
         */
        getNoData(): sap.ui.core.Control;
        /**
         * Gets current value of property {@link #getNumberOfRows numberOfRows}.
         *
         * Number of rows displayed.
         *
         * Default value is `5`.
         */
        getNumberOfRows(): number;
        /**
         * Gets content of aggregation {@link #getRows rows}.
         *
         * Rows to be repeated.
         */
        getRows(): sap.ui.core.Control[];
        /**
         * Gets current value of property {@link #getShowMoreSteps showMoreSteps}.
         *
         * Step size used to increase the numberOfRows value. This feature is only active if value is greater than
         * 0. This will deactivate the paging feature.
         *
         * Default value is `0`.
         */
        getShowMoreSteps(): number;
        /**
         * Gets content of aggregation {@link #getSorters sorters}.
         *
         * Sorters to be provided in secondary toolbar.
         */
        getSorters(): sap.ui.commons.RowRepeaterSorter[];
        /**
         * Gets current value of property {@link #getThreshold threshold}.
         *
         * Threshold to fetch the next chunk of data. The minimal threshold can be the numberOfRows of the RR.
         */
        getThreshold(): number;
        /**
         * Gets content of aggregation {@link #getTitle title}.
         *
         * Title to be displayed in top left corner. Either text or icon.
         */
        getTitle(): sap.ui.core.Title;
        /**
         * Switch to specified page.
         */
        gotoPage(
          /**
           * The index of the page to go to.
           */
          iPageNumber: number
        ): void;
        /**
         * Checks for the provided `sap.ui.commons.RowRepeaterFilter` in the aggregation {@link #getFilters filters}.
         * and returns its index if found or -1 otherwise.
         */
        indexOfFilter(
          /**
           * The filter whose index is looked for
           */
          oFilter: sap.ui.commons.RowRepeaterFilter
        ): number;
        /**
         * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getRows rows}. and returns its
         * index if found or -1 otherwise.
         */
        indexOfRow(
          /**
           * The row whose index is looked for
           */
          oRow: sap.ui.core.Control
        ): number;
        /**
         * Checks for the provided `sap.ui.commons.RowRepeaterSorter` in the aggregation {@link #getSorters sorters}.
         * and returns its index if found or -1 otherwise.
         */
        indexOfSorter(
          /**
           * The sorter whose index is looked for
           */
          oSorter: sap.ui.commons.RowRepeaterSorter
        ): number;
        /**
         * Inserts a filter into the aggregation {@link #getFilters filters}.
         */
        insertFilter(
          /**
           * The filter to insert; if empty, nothing is inserted
           */
          oFilter: sap.ui.commons.RowRepeaterFilter,
          /**
           * The `0`-based index the filter should be inserted at; for a negative value of `iIndex`, the filter is
           * inserted at position 0; for a value greater than the current size of the aggregation, the filter is inserted
           * at the last position
           */
          iIndex: number
        ): sap.ui.commons.RowRepeater;
        /**
         * Inserts a row into the aggregation {@link #getRows rows}.
         */
        insertRow(
          /**
           * The row to insert; if empty, nothing is inserted
           */
          oRow: sap.ui.core.Control,
          /**
           * The `0`-based index the row should be inserted at; for a negative value of `iIndex`, the row is inserted
           * at position 0; for a value greater than the current size of the aggregation, the row is inserted at the
           * last position
           */
          iIndex: number
        ): sap.ui.commons.RowRepeater;
        /**
         * Inserts a sorter into the aggregation {@link #getSorters sorters}.
         */
        insertSorter(
          /**
           * The sorter to insert; if empty, nothing is inserted
           */
          oSorter: sap.ui.commons.RowRepeaterSorter,
          /**
           * The `0`-based index the sorter should be inserted at; for a negative value of `iIndex`, the sorter is
           * inserted at position 0; for a value greater than the current size of the aggregation, the sorter is inserted
           * at the last position
           */
          iIndex: number
        ): sap.ui.commons.RowRepeater;
        /**
         * Switch to last page.
         */
        lastPage(): void;
        /**
         * Switch to next page.
         */
        nextPage(): void;
        /**
         * Switch to previous page.
         */
        previousPage(): void;
        /**
         * Removes all the controls from the aggregation {@link #getFilters filters}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllFilters(): sap.ui.commons.RowRepeaterFilter[];
        /**
         * Removes all the controls from the aggregation {@link #getRows rows}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllRows(): sap.ui.core.Control[];
        /**
         * Removes all the controls from the aggregation {@link #getSorters sorters}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllSorters(): sap.ui.commons.RowRepeaterSorter[];
        /**
         * Removes a filter from the aggregation {@link #getFilters filters}.
         */
        removeFilter(
          /**
           * The filter to remove or its index or id
           */
          vFilter: number | string | sap.ui.commons.RowRepeaterFilter
        ): sap.ui.commons.RowRepeaterFilter;
        /**
         * Removes a row from the aggregation {@link #getRows rows}.
         */
        removeRow(
          /**
           * The row to remove or its index or id
           */
          vRow: number | string | sap.ui.core.Control
        ): sap.ui.core.Control;
        /**
         * Removes a sorter from the aggregation {@link #getSorters sorters}.
         */
        removeSorter(
          /**
           * The sorter to remove or its index or id
           */
          vSorter: number | string | sap.ui.commons.RowRepeaterSorter
        ): sap.ui.commons.RowRepeaterSorter;
        /**
         * Resizes the row repeater by changing the number of displayed rows. This method will only resize the RowRepeater
         * if the property showMoreSteps is set.
         */
        resize(
          /**
           * The new value of number of rows displayed.
           */
          iNumberOfRows: number
        ): void;
        /**
         * Setter for property `currentPage`.
         */
        setCurrentPage(
          /**
           * new value for property `currentPage`
           */
          iCurrentPage: number
        ): sap.ui.commons.RowRepeater;
        /**
         * Sets a new value for property {@link #getDesign design}.
         *
         * The visual design of the control.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Standard`.
         */
        setDesign(
          /**
           * New value for property `design`
           */
          sDesign: sap.ui.commons.RowRepeaterDesign
        ): sap.ui.commons.RowRepeater;
        /**
         * Sets a new value for property {@link #getFixedRowHeight fixedRowHeight}.
         *
         * Row height adapts to rendered content. If a fixed height is specified the cells have a maximum height
         * and the overflow will be hidden.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `empty string`.
         */
        setFixedRowHeight(
          /**
           * New value for property `fixedRowHeight`
           */
          sFixedRowHeight: sap.ui.core.CSSSize
        ): sap.ui.commons.RowRepeater;
        /**
         * Sets the aggregated {@link #getNoData noData}.
         */
        setNoData(
          /**
           * The noData to set
           */
          oNoData: sap.ui.core.Control
        ): sap.ui.commons.RowRepeater;
        /**
         * Setter for property `numberOfRows`.
         *
         * Default value is `5`
         */
        setNumberOfRows(
          /**
           * new value for property `numberOfRows`
           */
          iNumberOfRows: number
        ): sap.ui.commons.RowRepeater;
        /**
         * Override the default behavior of `setShowMoreSteps` to update the paging mode flag. Any change to the
         * paging mode flag will result in the current page being set to the first page.
         */
        setShowMoreSteps(
          /**
           * new value for property `showMoreSteps`
           */
          iShowMoreSteps: number
        ): sap.ui.commons.RowRepeater;
        /**
         * Sets a new value for property {@link #getThreshold threshold}.
         *
         * Threshold to fetch the next chunk of data. The minimal threshold can be the numberOfRows of the RR.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setThreshold(
          /**
           * New value for property `threshold`
           */
          iThreshold: number
        ): sap.ui.commons.RowRepeater;
        /**
         * Sets the aggregated {@link #getTitle title}.
         */
        setTitle(
          /**
           * The title to set
           */
          oTitle: sap.ui.core.Title
        ): sap.ui.commons.RowRepeater;
        /**
         * The `triggerShowMore` function increments the number of rows by the value of `showMoreSteps`.
         *
         * This method will only trigger a showMore if the property showMoreSteps is set.
         */
        triggerShowMore(): sap.ui.commons.RowRepeater;
        /**
         * Sort the data.
         */
        triggerSort(
          /**
           * The ID of the sorter.
           */
          sId: string
        ): void;
        /**
         * Unbinds aggregation {@link #getRows rows} from model data.
         */
        unbindRows(): sap.ui.commons.RowRepeater;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:filter filter} event of this `sap.ui.commons.RowRepeater`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.RowRepeater` itself.
         *
         * This event is triggered when a filter is set.
         */
        attachFilter(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.RowRepeater` itself
           */
          oListener?: object
        ): sap.ui.commons.RowRepeater;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:page page} event of this `sap.ui.commons.RowRepeater`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.RowRepeater` itself.
         *
         * This event is triggered when paging was executed.
         */
        attachPage(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.RowRepeater` itself
           */
          oListener?: object
        ): sap.ui.commons.RowRepeater;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:resize resize} event of this `sap.ui.commons.RowRepeater`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.RowRepeater` itself.
         *
         * This event is triggered when the number of rows was changed.
         */
        attachResize(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.RowRepeater` itself
           */
          oListener?: object
        ): sap.ui.commons.RowRepeater;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:sort sort} event of this `sap.ui.commons.RowRepeater`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.RowRepeater` itself.
         *
         * This event is triggered when a sorting is applied.
         */
        attachSort(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.RowRepeater` itself
           */
          oListener?: object
        ): sap.ui.commons.RowRepeater;
      }
      /**
       * @deprecated (since 1.38) - Instead, use the `sap.ui.table.Table` control.
       *
       * This element is used by the RowRepeater and allows to define a filter in this context along with the
       * related data such as a text and an icon.
       */
      class RowRepeaterFilter extends sap.ui.core.Element {
        /**
         * Constructor for a new RowRepeaterFilter.
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
          mSettings?: RowRepeaterFilterOpts
        );

        /**
         * Creates a new subclass of class sap.ui.commons.RowRepeaterFilter with name `sClassName` and enriches
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
         * Gets current value of property {@link #getFilters filters}.
         *
         * The set of filter objects.
         */
        getFilters(): object;
        /**
         * Gets current value of property {@link #getIcon icon}.
         *
         * The filter icon if needed for display.
         */
        getIcon(): string;
        /**
         * Returns a metadata object for class sap.ui.commons.RowRepeaterFilter.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getText text}.
         *
         * The filter title if needed for display.
         */
        getText(): string;
        /**
         * Sets a new value for property {@link #getFilters filters}.
         *
         * The set of filter objects.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setFilters(
          /**
           * New value for property `filters`
           */
          oFilters: object
        ): sap.ui.commons.RowRepeaterFilter;
        /**
         * Sets a new value for property {@link #getIcon icon}.
         *
         * The filter icon if needed for display.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setIcon(
          /**
           * New value for property `icon`
           */
          sIcon: string
        ): sap.ui.commons.RowRepeaterFilter;
        /**
         * Sets a new value for property {@link #getText text}.
         *
         * The filter title if needed for display.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setText(
          /**
           * New value for property `text`
           */
          sText: string
        ): sap.ui.commons.RowRepeaterFilter;
      }
      /**
       * @deprecated (since 1.38) - Instead, use the `sap.ui.table.Table` control.
       *
       * This element is used by the RowRepeater and allows to define a sorter in this context along with the
       * related data such as a text and an icon.
       */
      class RowRepeaterSorter extends sap.ui.core.Element {
        /**
         * Constructor for a new RowRepeaterSorter.
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
          mSettings?: RowRepeaterSorterOpts
        );

        /**
         * Creates a new subclass of class sap.ui.commons.RowRepeaterSorter with name `sClassName` and enriches
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
         * Gets current value of property {@link #getIcon icon}.
         *
         * The sorter icon if needed for display.
         */
        getIcon(): string;
        /**
         * Returns a metadata object for class sap.ui.commons.RowRepeaterSorter.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getSorter sorter}.
         *
         * The sorter object.
         */
        getSorter(): object;
        /**
         * Gets current value of property {@link #getText text}.
         *
         * The sorter title if needed for display.
         */
        getText(): string;
        /**
         * Sets a new value for property {@link #getIcon icon}.
         *
         * The sorter icon if needed for display.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setIcon(
          /**
           * New value for property `icon`
           */
          sIcon: string
        ): sap.ui.commons.RowRepeaterSorter;
        /**
         * Sets a new value for property {@link #getSorter sorter}.
         *
         * The sorter object.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setSorter(
          /**
           * New value for property `sorter`
           */
          oSorter: object
        ): sap.ui.commons.RowRepeaterSorter;
        /**
         * Sets a new value for property {@link #getText text}.
         *
         * The sorter title if needed for display.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setText(
          /**
           * New value for property `text`
           */
          sText: string
        ): sap.ui.commons.RowRepeaterSorter;
      }
      /**
       * @deprecated (since 1.38) - Instead, use the `sap.m.SearchField` control.
       *
       * Allows the user to type search queries and to trigger the search. Optionally, suggestions can be added.
       */
      class SearchField extends sap.ui.core.Control
        implements sap.ui.commons.ToolbarItem {
        /**
         * Constructor for a new SearchField.
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
          mSettings?: SearchFieldOpts
        );

        /**
         * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
         */
        addAriaDescribedBy(
          /**
           * The ariaDescribedBy to add; if empty, nothing is inserted
           */
          vAriaDescribedBy: sap.ui.core.ID | sap.ui.core.Control
        ): sap.ui.commons.SearchField;
        /**
         * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
         */
        addAriaLabelledBy(
          /**
           * The ariaLabelledBy to add; if empty, nothing is inserted
           */
          vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control
        ): sap.ui.commons.SearchField;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:search search} event of this `sap.ui.commons.SearchField`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.SearchField` itself.
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
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.SearchField` itself
           */
          oListener?: object
        ): sap.ui.commons.SearchField;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:suggest suggest} event of this `sap.ui.commons.SearchField`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.SearchField` itself.
         *
         * Event which is fired when new suggest values are required.
         */
        attachSuggest(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.SearchField` itself
           */
          oListener?: object
        ): sap.ui.commons.SearchField;
        /**
         * Clears the history of the control
         */
        clearHistory(): void;
        /**
         * Destroys the searchProvider in the aggregation {@link #getSearchProvider searchProvider}.
         */
        destroySearchProvider(): sap.ui.commons.SearchField;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:search search} event of this `sap.ui.commons.SearchField`.
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
        ): sap.ui.commons.SearchField;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:suggest suggest} event of this `sap.ui.commons.SearchField`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachSuggest(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.commons.SearchField;
        /**
         * Creates a new subclass of class sap.ui.commons.SearchField with name `sClassName` and enriches it with
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
        ): sap.ui.commons.SearchField;
        /**
         * Fires event {@link #event:suggest suggest} to attached listeners.
         */
        fireSuggest(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The value for which suggestions are required.
             */
            value?: string;
          }
        ): sap.ui.commons.SearchField;
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
         * Gets current value of property {@link #getEditable editable}.
         *
         * Non-editable controls have different colors, depending on custom settings
         *
         * Default value is `true`.
         */
        getEditable(): boolean;
        /**
         * @SINCE 1.10.3
         *
         * Gets current value of property {@link #getEnableCache enableCache}.
         *
         * When list suggestion is enabled all suggestions are cached and no suggest event is fired.
         *
         * Default value is `true`.
         */
        getEnableCache(): boolean;
        /**
         * Gets current value of property {@link #getEnableClear enableClear}.
         *
         * Defines whether the clear functionality shall be active
         *
         * Default value is `false`.
         */
        getEnableClear(): boolean;
        /**
         * Gets current value of property {@link #getEnabled enabled}.
         *
         * Disabled fields have different colors, and they can not be focused.
         *
         * Default value is `true`.
         */
        getEnabled(): boolean;
        /**
         * Gets current value of property {@link #getEnableFilterMode enableFilterMode}.
         *
         * Defines whether the search event should also be fired when the SearchField is empty (like a Filter field)
         * and when the clear button (if activated) is pressed.
         *
         * Default value is `false`.
         */
        getEnableFilterMode(): boolean;
        /**
         * Gets current value of property {@link #getEnableListSuggest enableListSuggest}.
         *
         * Defines whether a pop up list shall be provided for suggestions
         *
         * Default value is `true`.
         */
        getEnableListSuggest(): boolean;
        /**
         * Gets current value of property {@link #getMaxHistoryItems maxHistoryItems}.
         *
         * Maximum number of history items in the suggestion list. 0 displays and stores no history. The history
         * is locally stored on the client. Therefore do not activate this feature when this control handles confidential
         * data.
         *
         * Default value is `0`.
         */
        getMaxHistoryItems(): number;
        /**
         * Gets current value of property {@link #getMaxLength maxLength}.
         *
         * Maximum number of characters. Value '0' means the feature is switched off.
         *
         * Default value is `0`.
         */
        getMaxLength(): number;
        /**
         * Gets current value of property {@link #getMaxSuggestionItems maxSuggestionItems}.
         *
         * Maximum number of suggestion items in the suggestion list.
         *
         * Default value is `10`.
         */
        getMaxSuggestionItems(): number;
        /**
         * Returns a metadata object for class sap.ui.commons.SearchField.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * @SINCE 1.32
         *
         * Gets current value of property {@link #getPlaceholder placeholder}.
         *
         * Placeholder for the input field.
         *
         * Default value is `empty string`.
         */
        getPlaceholder(): string;
        /**
         * Gets content of aggregation {@link #getSearchProvider searchProvider}.
         *
         * Search provider instance which handles the suggestions for this SearchField (e.g. Open Search Protocol).
         */
        getSearchProvider(): sap.ui.core.search.SearchProvider;
        /**
         * Gets current value of property {@link #getShowExternalButton showExternalButton}.
         *
         * Defines whether an additional search button shall be displayed
         *
         * Default value is `false`.
         */
        getShowExternalButton(): boolean;
        /**
         * Gets current value of property {@link #getShowListExpander showListExpander}.
         *
         * Defines whether the list expander shall be displayed in the case of an enabled list for suggestions.
         * This feature is deactivated on mobile devices.
         *
         * Default value is `true`.
         */
        getShowListExpander(): boolean;
        /**
         * Gets current value of property {@link #getStartSuggestion startSuggestion}.
         *
         * Minimum length of the entered string triggering the suggestion list.
         *
         * Default value is `3`.
         */
        getStartSuggestion(): number;
        /**
         * Gets current value of property {@link #getTextAlign textAlign}.
         *
         * Sets the horizontal alignment of the text
         *
         * Default value is `Begin`.
         */
        getTextAlign(): sap.ui.core.TextAlign;
        /**
         * Gets current value of property {@link #getValue value}.
         *
         * Text that shall be displayed within the search field
         *
         * Default value is `empty string`.
         */
        getValue(): string;
        /**
         * @SINCE 1.32
         *
         * Gets current value of property {@link #getValueState valueState}.
         *
         * Visualizes warnings or errors related to the input field. Possible values: Warning, Error, Success, None.
         *
         * Default value is `None`.
         */
        getValueState(): sap.ui.core.ValueState;
        /**
         * Gets current value of property {@link #getVisibleItemCount visibleItemCount}.
         *
         * Defines the number of items in the suggestion list that shall be displayed at once. If the overall number
         * of list items is higher than the setting, a scroll bar is provided.
         *
         * Default value is `20`.
         */
        getVisibleItemCount(): number;
        /**
         * Gets current value of property {@link #getWidth width}.
         *
         * Control width in CSS-size
         */
        getWidth(): sap.ui.core.CSSSize;
        /**
         * Removes all the controls in the association named {@link #getAriaDescribedBy ariaDescribedBy}.
         */
        removeAllAriaDescribedBy(): sap.ui.core.ID[];
        /**
         * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
         */
        removeAllAriaLabelledBy(): sap.ui.core.ID[];
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
         * Sets a new value for property {@link #getEditable editable}.
         *
         * Non-editable controls have different colors, depending on custom settings
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
        ): sap.ui.commons.SearchField;
        /**
         * @SINCE 1.10.3
         *
         * Sets a new value for property {@link #getEnableCache enableCache}.
         *
         * When list suggestion is enabled all suggestions are cached and no suggest event is fired.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setEnableCache(
          /**
           * New value for property `enableCache`
           */
          bEnableCache: boolean
        ): sap.ui.commons.SearchField;
        /**
         * Sets a new value for property {@link #getEnableClear enableClear}.
         *
         * Defines whether the clear functionality shall be active
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setEnableClear(
          /**
           * New value for property `enableClear`
           */
          bEnableClear: boolean
        ): sap.ui.commons.SearchField;
        /**
         * Sets a new value for property {@link #getEnabled enabled}.
         *
         * Disabled fields have different colors, and they can not be focused.
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
        ): sap.ui.commons.SearchField;
        /**
         * Sets a new value for property {@link #getEnableFilterMode enableFilterMode}.
         *
         * Defines whether the search event should also be fired when the SearchField is empty (like a Filter field)
         * and when the clear button (if activated) is pressed.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setEnableFilterMode(
          /**
           * New value for property `enableFilterMode`
           */
          bEnableFilterMode: boolean
        ): sap.ui.commons.SearchField;
        /**
         * Sets a new value for property {@link #getEnableListSuggest enableListSuggest}.
         *
         * Defines whether a pop up list shall be provided for suggestions
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setEnableListSuggest(
          /**
           * New value for property `enableListSuggest`
           */
          bEnableListSuggest: boolean
        ): sap.ui.commons.SearchField;
        /**
         * Sets a new value for property {@link #getMaxHistoryItems maxHistoryItems}.
         *
         * Maximum number of history items in the suggestion list. 0 displays and stores no history. The history
         * is locally stored on the client. Therefore do not activate this feature when this control handles confidential
         * data.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `0`.
         */
        setMaxHistoryItems(
          /**
           * New value for property `maxHistoryItems`
           */
          iMaxHistoryItems: number
        ): sap.ui.commons.SearchField;
        /**
         * Sets a new value for property {@link #getMaxLength maxLength}.
         *
         * Maximum number of characters. Value '0' means the feature is switched off.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `0`.
         */
        setMaxLength(
          /**
           * New value for property `maxLength`
           */
          iMaxLength: number
        ): sap.ui.commons.SearchField;
        /**
         * Sets a new value for property {@link #getMaxSuggestionItems maxSuggestionItems}.
         *
         * Maximum number of suggestion items in the suggestion list.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `10`.
         */
        setMaxSuggestionItems(
          /**
           * New value for property `maxSuggestionItems`
           */
          iMaxSuggestionItems: number
        ): sap.ui.commons.SearchField;
        /**
         * @SINCE 1.32
         *
         * Sets a new value for property {@link #getPlaceholder placeholder}.
         *
         * Placeholder for the input field.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `empty string`.
         */
        setPlaceholder(
          /**
           * New value for property `placeholder`
           */
          sPlaceholder: string
        ): sap.ui.commons.SearchField;
        /**
         * Sets the aggregated {@link #getSearchProvider searchProvider}.
         */
        setSearchProvider(
          /**
           * The searchProvider to set
           */
          oSearchProvider: sap.ui.core.search.SearchProvider
        ): sap.ui.commons.SearchField;
        /**
         * Sets a new value for property {@link #getShowExternalButton showExternalButton}.
         *
         * Defines whether an additional search button shall be displayed
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setShowExternalButton(
          /**
           * New value for property `showExternalButton`
           */
          bShowExternalButton: boolean
        ): sap.ui.commons.SearchField;
        /**
         * Sets a new value for property {@link #getShowListExpander showListExpander}.
         *
         * Defines whether the list expander shall be displayed in the case of an enabled list for suggestions.
         * This feature is deactivated on mobile devices.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setShowListExpander(
          /**
           * New value for property `showListExpander`
           */
          bShowListExpander: boolean
        ): sap.ui.commons.SearchField;
        /**
         * Sets a new value for property {@link #getStartSuggestion startSuggestion}.
         *
         * Minimum length of the entered string triggering the suggestion list.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `3`.
         */
        setStartSuggestion(
          /**
           * New value for property `startSuggestion`
           */
          iStartSuggestion: number
        ): sap.ui.commons.SearchField;
        /**
         * Sets a new value for property {@link #getTextAlign textAlign}.
         *
         * Sets the horizontal alignment of the text
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Begin`.
         */
        setTextAlign(
          /**
           * New value for property `textAlign`
           */
          sTextAlign: sap.ui.core.TextAlign
        ): sap.ui.commons.SearchField;
        /**
         * Sets a new value for property {@link #getValue value}.
         *
         * Text that shall be displayed within the search field
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `empty string`.
         */
        setValue(
          /**
           * New value for property `value`
           */
          sValue: string
        ): sap.ui.commons.SearchField;
        /**
         * @SINCE 1.32
         *
         * Sets a new value for property {@link #getValueState valueState}.
         *
         * Visualizes warnings or errors related to the input field. Possible values: Warning, Error, Success, None.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `None`.
         */
        setValueState(
          /**
           * New value for property `valueState`
           */
          sValueState: sap.ui.core.ValueState
        ): sap.ui.commons.SearchField;
        /**
         * Sets a new value for property {@link #getVisibleItemCount visibleItemCount}.
         *
         * Defines the number of items in the suggestion list that shall be displayed at once. If the overall number
         * of list items is higher than the setting, a scroll bar is provided.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `20`.
         */
        setVisibleItemCount(
          /**
           * New value for property `visibleItemCount`
           */
          iVisibleItemCount: number
        ): sap.ui.commons.SearchField;
        /**
         * Sets a new value for property {@link #getWidth width}.
         *
         * Control width in CSS-size
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setWidth(
          /**
           * New value for property `width`
           */
          sWidth: sap.ui.core.CSSSize
        ): sap.ui.commons.SearchField;
        /**
         * Callback function used to provide the suggest values in the handler of the suggest event (only in list
         * suggestion mode)
         */
        suggest(
          /**
           * The value which was provided in the corresponding suggest event (parameter 'value')
           */
          sSSuggestValue: string,
          /**
           * The list of suggestions belonging to the suggest value
           */
          aASuggestions: string[]
        ): void;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:search search} event of this `sap.ui.commons.SearchField`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.SearchField` itself.
         *
         * Event which is fired when the user triggers a search
         */
        attachSearch(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.SearchField` itself
           */
          oListener?: object
        ): sap.ui.commons.SearchField;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:suggest suggest} event of this `sap.ui.commons.SearchField`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.SearchField` itself.
         *
         * Event which is fired when new suggest values are required.
         */
        attachSuggest(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.SearchField` itself
           */
          oListener?: object
        ): sap.ui.commons.SearchField;
      }
      /**
       * @deprecated (since 1.6.0) - Replaced by sap.ui.core.search.OpenSearchProvider
       *
       * A SearchProvider which can be attached to a Search Field.
       */
      class SearchProvider extends sap.ui.core.search.OpenSearchProvider {
        /**
         * Constructor for a new SearchProvider.
         */
        constructor(
          /**
           * id for the new control, generated automatically if no id is given
           */
          sId?: string,
          /**
           * initial settings for the new control
           */
          mSettings?: SearchProviderOpts
        );

        /**
         * Creates a new subclass of class sap.ui.commons.SearchProvider with name `sClassName` and enriches it
         * with the information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.search.OpenSearchProvider.extend}.
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
         * Returns a metadata object for class sap.ui.commons.SearchProvider.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
      }
      /**
       * @deprecated (since 1.38) - replaced by {@link sap.m.SegmentedButton}
       *
       * The SegmentedButton provides a group of multiple buttons. Only one button can be active. The behaviour
       * is more ore less like a radio button group.
       */
      class SegmentedButton extends sap.ui.core.Control
        implements sap.ui.commons.ToolbarItem {
        /**
         * Constructor for a new SegmentedButton.
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
          mSettings?: SegmentedButtonOpts
        );

        /**
         * Rerendering of the Buttons
         */
        _rerenderButtons(): void;
        /**
         * Adds some button to the aggregation {@link #getButtons buttons}.
         */
        addButton(
          /**
           * The button to add; if empty, nothing is inserted
           */
          oButton: sap.ui.commons.Button
        ): sap.ui.commons.SegmentedButton;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.commons.SegmentedButton`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.SegmentedButton` itself.
         *
         * Event fired when button selected
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
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.SegmentedButton` itself
           */
          oListener?: object
        ): sap.ui.commons.SegmentedButton;
        /**
         * Destroys all the buttons in the aggregation {@link #getButtons buttons}.
         */
        destroyButtons(): sap.ui.commons.SegmentedButton;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.ui.commons.SegmentedButton`.
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
        ): sap.ui.commons.SegmentedButton;
        /**
         * Creates a new subclass of class sap.ui.commons.SegmentedButton with name `sClassName` and enriches it
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
         * Fires event {@link #event:select select} to attached listeners.
         */
        fireSelect(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * Id of selected ToggleButton
             */
            selectedButtonId?: string;
          }
        ): sap.ui.commons.SegmentedButton;
        /**
         * Gets content of aggregation {@link #getButtons buttons}.
         *
         * Buttons
         */
        getButtons(): sap.ui.commons.Button[];
        /**
         * Gets current value of property {@link #getEnabled enabled}.
         *
         * enabled
         *
         * Default value is `true`.
         */
        getEnabled(): boolean;
        /**
         * Returns a metadata object for class sap.ui.commons.SegmentedButton.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * ID of the element which is the current target of the association {@link #getSelectedButton selectedButton},
         * or `null`.
         */
        getSelectedButton(): sap.ui.core.ID;
        /**
         * Checks for the provided `sap.ui.commons.Button` in the aggregation {@link #getButtons buttons}. and returns
         * its index if found or -1 otherwise.
         */
        indexOfButton(
          /**
           * The button whose index is looked for
           */
          oButton: sap.ui.commons.Button
        ): number;
        /**
         * Inserts a button into the aggregation {@link #getButtons buttons}.
         */
        insertButton(
          /**
           * The button to insert; if empty, nothing is inserted
           */
          oButton: sap.ui.commons.Button,
          /**
           * The `0`-based index the button should be inserted at; for a negative value of `iIndex`, the button is
           * inserted at position 0; for a value greater than the current size of the aggregation, the button is inserted
           * at the last position
           */
          iIndex: number
        ): sap.ui.commons.SegmentedButton;
        /**
         * Removes all the controls from the aggregation {@link #getButtons buttons}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllButtons(): sap.ui.commons.Button[];
        /**
         * Removes a button from the aggregation {@link #getButtons buttons}.
         */
        removeButton(
          /**
           * The button to remove or its index or id
           */
          vButton: number | string | sap.ui.commons.Button
        ): sap.ui.commons.Button;
        /**
         * Sets a new value for property {@link #getEnabled enabled}.
         *
         * enabled
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
        ): sap.ui.commons.SegmentedButton;
        /**
         * Sets the associated {@link #getSelectedButton selectedButton}.
         */
        setSelectedButton(
          /**
           * ID of an element which becomes the new target of this selectedButton association; alternatively, an element
           * instance may be given
           */
          oSelectedButton: sap.ui.core.ID | sap.ui.commons.Button
        ): sap.ui.commons.SegmentedButton;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.commons.SegmentedButton`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.SegmentedButton` itself.
         *
         * Event fired when button selected
         */
        attachSelect(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.SegmentedButton` itself
           */
          oListener?: object
        ): sap.ui.commons.SegmentedButton;
      }
      /**
       * @deprecated (since 1.38) - replaced by {@link sap.m.Slider}
       *
       * The interactive control is displayed either as a horizontal or a vertical line with a pointer and units
       * of measurement. Users can move the pointer along the line to change values with graphical support.
       */
      class Slider extends sap.ui.core.Control {
        /**
         * Constructor for a new `Slider`.
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
          mSettings?: SliderOpts
        );

        /**
         * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
         */
        addAriaDescribedBy(
          /**
           * The ariaDescribedBy to add; if empty, nothing is inserted
           */
          vAriaDescribedBy: sap.ui.core.ID | sap.ui.core.Control
        ): sap.ui.commons.Slider;
        /**
         * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
         */
        addAriaLabelledBy(
          /**
           * The ariaLabelledBy to add; if empty, nothing is inserted
           */
          vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control
        ): sap.ui.commons.Slider;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.ui.commons.Slider`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.Slider` itself.
         *
         * Value was changed. This event is fired if the value has changed by a user action.
         */
        attachChange(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.Slider` itself
           */
          oListener?: object
        ): sap.ui.commons.Slider;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:liveChange liveChange} event of this `sap.ui.commons.Slider`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.Slider` itself.
         *
         * Value was changed. This event is fired during the mouse move. The normal change event is only fired by
         * mouseup.
         */
        attachLiveChange(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.Slider` itself
           */
          oListener?: object
        ): sap.ui.commons.Slider;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:change change} event of this `sap.ui.commons.Slider`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachChange(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.commons.Slider;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:liveChange liveChange} event of this `sap.ui.commons.Slider`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachLiveChange(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.commons.Slider;
        /**
         * Creates a new subclass of class sap.ui.commons.Slider with name `sClassName` and enriches it with the
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
         * Fires event {@link #event:change change} to attached listeners.
         */
        fireChange(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * Current value of the slider after a change.
             */
            value?: number;
          }
        ): sap.ui.commons.Slider;
        /**
         * Fires event {@link #event:liveChange liveChange} to attached listeners.
         */
        fireLiveChange(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * Current value of the slider after a change.
             */
            value?: number;
          }
        ): sap.ui.commons.Slider;
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
         * Gets current value of property {@link #getEditable editable}.
         *
         * Using the slider interactively requires value "true".
         *
         * Default value is `true`.
         */
        getEditable(): boolean;
        /**
         * Gets current value of property {@link #getEnabled enabled}.
         *
         * Switches enabled state of the control. Disabled fields have different colors, and can not be focused.
         *
         * Default value is `true`.
         */
        getEnabled(): boolean;
        /**
         * @SINCE 1.7.1
         *
         * Gets current value of property {@link #getHeight height}.
         *
         * Height of the vertical slider.
         *
         * Default value is `100%`.
         */
        getHeight(): sap.ui.core.CSSSize;
        /**
         * Gets current value of property {@link #getLabels labels}.
         *
         * Labels to be displayed instead of numbers. Attribute totalUnits and label count should be the same
         *
         * **Note:** To show the labels `stepLabels` must be activated.
         */
        getLabels(): string[];
        /**
         * Gets current value of property {@link #getMax max}.
         *
         * Maximal value of the slider
         *
         * **Note:** If `min` is larger than `max` both values will be switched
         *
         * Default value is `100`.
         */
        getMax(): number;
        /**
         * Returns a metadata object for class sap.ui.commons.Slider.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getMin min}.
         *
         * Minimal value of the slider.
         *
         * **Note:** If `min` is larger than `max` both values will be switched
         *
         * Default value is `0`.
         */
        getMin(): number;
        /**
         * Gets current value of property {@link #getSmallStepWidth smallStepWidth}.
         *
         * The grip can only be moved in steps of this width.
         */
        getSmallStepWidth(): number;
        /**
         * Gets current value of property {@link #getStepLabels stepLabels}.
         *
         * Display step numbers for the ticks on the slider.
         *
         * Default value is `false`.
         */
        getStepLabels(): boolean;
        /**
         * Gets current value of property {@link #getTotalUnits totalUnits}.
         *
         * Number of units that are displayed by ticks. The PageUp and PageDown keys navigate according to these
         * units.
         */
        getTotalUnits(): number;
        /**
         * Gets current value of property {@link #getValue value}.
         *
         * Current value of the slider. (Position of the grip.)
         *
         * **Note:** If the value is not in the valid range (between `min` and `max`) it will be changed to be in
         * the valid range.
         *
         * Default value is `50`.
         */
        getValue(): number;
        /**
         * @SINCE 1.7.1
         *
         * Gets current value of property {@link #getVertical vertical}.
         *
         * Orientation of slider
         *
         * Default value is `false`.
         */
        getVertical(): boolean;
        /**
         * Gets current value of property {@link #getWidth width}.
         *
         * Width of the horizontal slider.
         *
         * Default value is `100%`.
         */
        getWidth(): sap.ui.core.CSSSize;
        /**
         * Removes all the controls in the association named {@link #getAriaDescribedBy ariaDescribedBy}.
         */
        removeAllAriaDescribedBy(): sap.ui.core.ID[];
        /**
         * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
         */
        removeAllAriaLabelledBy(): sap.ui.core.ID[];
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
         * Sets a new value for property {@link #getEditable editable}.
         *
         * Using the slider interactively requires value "true".
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
        ): sap.ui.commons.Slider;
        /**
         * Sets a new value for property {@link #getEnabled enabled}.
         *
         * Switches enabled state of the control. Disabled fields have different colors, and can not be focused.
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
        ): sap.ui.commons.Slider;
        /**
         * @SINCE 1.7.1
         *
         * Sets a new value for property {@link #getHeight height}.
         *
         * Height of the vertical slider.
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
        ): sap.ui.commons.Slider;
        /**
         * Sets a new value for property {@link #getLabels labels}.
         *
         * Labels to be displayed instead of numbers. Attribute totalUnits and label count should be the same
         *
         * **Note:** To show the labels `stepLabels` must be activated.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setLabels(
          /**
           * New value for property `labels`
           */
          sLabels: string[]
        ): sap.ui.commons.Slider;
        /**
         * Sets a new value for property {@link #getMax max}.
         *
         * Maximal value of the slider
         *
         * **Note:** If `min` is larger than `max` both values will be switched
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `100`.
         */
        setMax(
          /**
           * New value for property `max`
           */
          fMax: number
        ): sap.ui.commons.Slider;
        /**
         * Sets a new value for property {@link #getMin min}.
         *
         * Minimal value of the slider.
         *
         * **Note:** If `min` is larger than `max` both values will be switched
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `0`.
         */
        setMin(
          /**
           * New value for property `min`
           */
          fMin: number
        ): sap.ui.commons.Slider;
        /**
         * Sets a new value for property {@link #getSmallStepWidth smallStepWidth}.
         *
         * The grip can only be moved in steps of this width.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setSmallStepWidth(
          /**
           * New value for property `smallStepWidth`
           */
          fSmallStepWidth: number
        ): sap.ui.commons.Slider;
        /**
         * Sets a new value for property {@link #getStepLabels stepLabels}.
         *
         * Display step numbers for the ticks on the slider.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setStepLabels(
          /**
           * New value for property `stepLabels`
           */
          bStepLabels: boolean
        ): sap.ui.commons.Slider;
        /**
         * Sets a new value for property {@link #getTotalUnits totalUnits}.
         *
         * Number of units that are displayed by ticks. The PageUp and PageDown keys navigate according to these
         * units.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setTotalUnits(
          /**
           * New value for property `totalUnits`
           */
          iTotalUnits: number
        ): sap.ui.commons.Slider;
        /**
         * Sets a new value for property {@link #getValue value}.
         *
         * Current value of the slider. (Position of the grip.)
         *
         * **Note:** If the value is not in the valid range (between `min` and `max`) it will be changed to be in
         * the valid range.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `50`.
         */
        setValue(
          /**
           * New value for property `value`
           */
          fValue: number
        ): sap.ui.commons.Slider;
        /**
         * @SINCE 1.7.1
         *
         * Sets a new value for property {@link #getVertical vertical}.
         *
         * Orientation of slider
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setVertical(
          /**
           * New value for property `vertical`
           */
          bVertical: boolean
        ): sap.ui.commons.Slider;
        /**
         * Sets a new value for property {@link #getWidth width}.
         *
         * Width of the horizontal slider.
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
        ): sap.ui.commons.Slider;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.ui.commons.Slider`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.Slider` itself.
         *
         * Value was changed. This event is fired if the value has changed by a user action.
         */
        attachChange(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.Slider` itself
           */
          oListener?: object
        ): sap.ui.commons.Slider;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:liveChange liveChange} event of this `sap.ui.commons.Slider`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.Slider` itself.
         *
         * Value was changed. This event is fired during the mouse move. The normal change event is only fired by
         * mouseup.
         */
        attachLiveChange(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.Slider` itself
           */
          oListener?: object
        ): sap.ui.commons.Slider;
      }
      /**
       * @deprecated (since 1.38) - Instead, use the `sap.ui.layout.Splitter` control.
       *
       * Allows to split the screen into two areas. Make sure that the container for the splitter has an absolute
       * height or set an absolute height for the splitter using the height property. Otherwise the height of
       * the splitter is calculated by the height of its contents.
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
         * Adds some firstPaneContent to the aggregation {@link #getFirstPaneContent firstPaneContent}.
         */
        addFirstPaneContent(
          /**
           * The firstPaneContent to add; if empty, nothing is inserted
           */
          oFirstPaneContent: sap.ui.core.Control
        ): sap.ui.commons.Splitter;
        /**
         * Adds some secondPaneContent to the aggregation {@link #getSecondPaneContent secondPaneContent}.
         */
        addSecondPaneContent(
          /**
           * The secondPaneContent to add; if empty, nothing is inserted
           */
          oSecondPaneContent: sap.ui.core.Control
        ): sap.ui.commons.Splitter;
        /**
         * Destroys all the firstPaneContent in the aggregation {@link #getFirstPaneContent firstPaneContent}.
         */
        destroyFirstPaneContent(): sap.ui.commons.Splitter;
        /**
         * Destroys all the secondPaneContent in the aggregation {@link #getSecondPaneContent secondPaneContent}.
         */
        destroySecondPaneContent(): sap.ui.commons.Splitter;
        /**
         * Creates a new subclass of class sap.ui.commons.Splitter with name `sClassName` and enriches it with the
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
         * Gets content of aggregation {@link #getFirstPaneContent firstPaneContent}.
         *
         * Controls inside the first pane. These are the left ones in case of defining a vertical splitter, and
         * the top ones in case of using the horizontal splitter.
         */
        getFirstPaneContent(): sap.ui.core.Control[];
        /**
         * Gets current value of property {@link #getHeight height}.
         *
         * The height of the split area in px or in %
         *
         * Default value is `100%`.
         */
        getHeight(): sap.ui.commons.SplitterSize;
        /**
         * Returns a metadata object for class sap.ui.commons.Splitter.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getMinSizeFirstPane minSizeFirstPane}.
         *
         * The minimum size (width for vertical splitter or height for horizontal splitter) of the first Pane
         *
         * Default value is `0%`.
         */
        getMinSizeFirstPane(): sap.ui.core.Percentage;
        /**
         * Gets current value of property {@link #getMinSizeSecondPane minSizeSecondPane}.
         *
         * The minimum size (width for vertical splitter or height for horizontal splitter) of the second Pane
         *
         * Default value is `0%`.
         */
        getMinSizeSecondPane(): sap.ui.core.Percentage;
        /**
         * Gets content of aggregation {@link #getSecondPaneContent secondPaneContent}.
         *
         * Controls inside the second pane. These are the right ones in case of defining a vertical splitter, and
         * the bottom ones in case of using the horizontal splitter.
         */
        getSecondPaneContent(): sap.ui.core.Control[];
        /**
         * Gets current value of property {@link #getShowScrollBars showScrollBars}.
         *
         * Specifies if the browser should display scroll bars or simply cut the content of a splitter pane when
         * the content does not fit into its pane.
         *
         * Default value is `true`.
         */
        getShowScrollBars(): boolean;
        /**
         * Gets current value of property {@link #getSplitterBarVisible splitterBarVisible}.
         *
         * set the splitter bar to be visible or not.
         *
         * Default value is `true`.
         */
        getSplitterBarVisible(): boolean;
        /**
         * Gets current value of property {@link #getSplitterOrientation splitterOrientation}.
         *
         * The splitter can have horizontal or vertical orientation.
         *
         * Default value is `Vertical`.
         */
        getSplitterOrientation(): sap.ui.core.Orientation;
        /**
         * Gets current value of property {@link #getSplitterPosition splitterPosition}.
         *
         * Position of splitter bar in percentage. The default value means that the splitter is positioned in the
         * middle of the area that is available for the splitter.
         *
         * Default value is `50%`.
         */
        getSplitterPosition(): sap.ui.core.Percentage;
        /**
         * Gets current value of property {@link #getWidth width}.
         *
         * The width of the split area in px or in %
         *
         * Default value is `100%`.
         */
        getWidth(): sap.ui.commons.SplitterSize;
        /**
         * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getFirstPaneContent firstPaneContent}.
         * and returns its index if found or -1 otherwise.
         */
        indexOfFirstPaneContent(
          /**
           * The firstPaneContent whose index is looked for
           */
          oFirstPaneContent: sap.ui.core.Control
        ): number;
        /**
         * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getSecondPaneContent secondPaneContent}.
         * and returns its index if found or -1 otherwise.
         */
        indexOfSecondPaneContent(
          /**
           * The secondPaneContent whose index is looked for
           */
          oSecondPaneContent: sap.ui.core.Control
        ): number;
        /**
         * Inserts a firstPaneContent into the aggregation {@link #getFirstPaneContent firstPaneContent}.
         */
        insertFirstPaneContent(
          /**
           * The firstPaneContent to insert; if empty, nothing is inserted
           */
          oFirstPaneContent: sap.ui.core.Control,
          /**
           * The `0`-based index the firstPaneContent should be inserted at; for a negative value of `iIndex`, the
           * firstPaneContent is inserted at position 0; for a value greater than the current size of the aggregation,
           * the firstPaneContent is inserted at the last position
           */
          iIndex: number
        ): sap.ui.commons.Splitter;
        /**
         * Inserts a secondPaneContent into the aggregation {@link #getSecondPaneContent secondPaneContent}.
         */
        insertSecondPaneContent(
          /**
           * The secondPaneContent to insert; if empty, nothing is inserted
           */
          oSecondPaneContent: sap.ui.core.Control,
          /**
           * The `0`-based index the secondPaneContent should be inserted at; for a negative value of `iIndex`, the
           * secondPaneContent is inserted at position 0; for a value greater than the current size of the aggregation,
           * the secondPaneContent is inserted at the last position
           */
          iIndex: number
        ): sap.ui.commons.Splitter;
        /**
         * Removes all the controls from the aggregation {@link #getFirstPaneContent firstPaneContent}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllFirstPaneContent(): sap.ui.core.Control[];
        /**
         * Removes all the controls from the aggregation {@link #getSecondPaneContent secondPaneContent}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllSecondPaneContent(): sap.ui.core.Control[];
        /**
         * Removes a firstPaneContent from the aggregation {@link #getFirstPaneContent firstPaneContent}.
         */
        removeFirstPaneContent(
          /**
           * The firstPaneContent to remove or its index or id
           */
          vFirstPaneContent: number | string | sap.ui.core.Control
        ): sap.ui.core.Control;
        /**
         * Removes a secondPaneContent from the aggregation {@link #getSecondPaneContent secondPaneContent}.
         */
        removeSecondPaneContent(
          /**
           * The secondPaneContent to remove or its index or id
           */
          vSecondPaneContent: number | string | sap.ui.core.Control
        ): sap.ui.core.Control;
        /**
         * Sets a new value for property {@link #getHeight height}.
         *
         * The height of the split area in px or in %
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `100%`.
         */
        setHeight(
          /**
           * New value for property `height`
           */
          sHeight: sap.ui.commons.SplitterSize
        ): sap.ui.commons.Splitter;
        /**
         * Sets a new value for property {@link #getMinSizeFirstPane minSizeFirstPane}.
         *
         * The minimum size (width for vertical splitter or height for horizontal splitter) of the first Pane
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `0%`.
         */
        setMinSizeFirstPane(
          /**
           * New value for property `minSizeFirstPane`
           */
          sMinSizeFirstPane: sap.ui.core.Percentage
        ): sap.ui.commons.Splitter;
        /**
         * Sets a new value for property {@link #getMinSizeSecondPane minSizeSecondPane}.
         *
         * The minimum size (width for vertical splitter or height for horizontal splitter) of the second Pane
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `0%`.
         */
        setMinSizeSecondPane(
          /**
           * New value for property `minSizeSecondPane`
           */
          sMinSizeSecondPane: sap.ui.core.Percentage
        ): sap.ui.commons.Splitter;
        /**
         * Sets a new value for property {@link #getShowScrollBars showScrollBars}.
         *
         * Specifies if the browser should display scroll bars or simply cut the content of a splitter pane when
         * the content does not fit into its pane.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setShowScrollBars(
          /**
           * New value for property `showScrollBars`
           */
          bShowScrollBars: boolean
        ): sap.ui.commons.Splitter;
        /**
         * Sets a new value for property {@link #getSplitterBarVisible splitterBarVisible}.
         *
         * set the splitter bar to be visible or not.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setSplitterBarVisible(
          /**
           * New value for property `splitterBarVisible`
           */
          bSplitterBarVisible: boolean
        ): sap.ui.commons.Splitter;
        /**
         * Sets a new value for property {@link #getSplitterOrientation splitterOrientation}.
         *
         * The splitter can have horizontal or vertical orientation.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Vertical`.
         */
        setSplitterOrientation(
          /**
           * New value for property `splitterOrientation`
           */
          sSplitterOrientation: sap.ui.core.Orientation
        ): sap.ui.commons.Splitter;
        /**
         * Sets a new value for property {@link #getSplitterPosition splitterPosition}.
         *
         * Position of splitter bar in percentage. The default value means that the splitter is positioned in the
         * middle of the area that is available for the splitter.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `50%`.
         */
        setSplitterPosition(
          /**
           * New value for property `splitterPosition`
           */
          sSplitterPosition: sap.ui.core.Percentage
        ): sap.ui.commons.Splitter;
        /**
         * Sets a new value for property {@link #getWidth width}.
         *
         * The width of the split area in px or in %
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `100%`.
         */
        setWidth(
          /**
           * New value for property `width`
           */
          sWidth: sap.ui.commons.SplitterSize
        ): sap.ui.commons.Splitter;
      }
      /**
       * @deprecated (since 1.38) - Instead, use the `sap.m.TabContainer` control.
       *
       * Represents a single tab in a TabStrip control.
       */
      class Tab extends sap.ui.commons.Panel {
        /**
         * Constructor for a new Tab.
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
          mSettings?: TabOpts
        );

        /**
         * Creates a new subclass of class sap.ui.commons.Tab with name `sClassName` and enriches it with the information
         * contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.commons.Panel.extend}.
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
         * Gets current value of property {@link #getClosable closable}.
         *
         * Specifies whether the tab contains a close button.
         *
         * Default value is `false`.
         */
        getClosable(): boolean;
        /**
         * Gets current value of property {@link #getHorizontalScrolling horizontalScrolling}.
         *
         * Specifies the horizontal scrolling.
         *
         * Default value is `None`.
         */
        getHorizontalScrolling(): sap.ui.core.Scrolling;
        /**
         * Returns a metadata object for class sap.ui.commons.Tab.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * @deprecated (since 0.17.0) - This property is not used. To identify the selected tab in a TabStrip selectedIndex
         * is used.
         *
         * Gets current value of property {@link #getSelected selected}.
         *
         * Defines whether the tab is the active one.
         *
         * Default value is `false`.
         */
        getSelected(): boolean;
        /**
         * Gets current value of property {@link #getVerticalScrolling verticalScrolling}.
         *
         * Specifies the vertical scrolling.
         *
         * Default value is `None`.
         */
        getVerticalScrolling(): sap.ui.core.Scrolling;
        /**
         * Sets a new value for property {@link #getClosable closable}.
         *
         * Specifies whether the tab contains a close button.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setClosable(
          /**
           * New value for property `closable`
           */
          bClosable: boolean
        ): sap.ui.commons.Tab;
        /**
         * Sets a new value for property {@link #getHorizontalScrolling horizontalScrolling}.
         *
         * Specifies the horizontal scrolling.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `None`.
         */
        setHorizontalScrolling(
          /**
           * New value for property `horizontalScrolling`
           */
          sHorizontalScrolling: sap.ui.core.Scrolling
        ): sap.ui.commons.Tab;
        /**
         * @deprecated (since 0.17.0) - This property is not used. To identify the selected tab in a TabStrip selectedIndex
         * is used.
         *
         * Sets a new value for property {@link #getSelected selected}.
         *
         * Defines whether the tab is the active one.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setSelected(
          /**
           * New value for property `selected`
           */
          bSelected: boolean
        ): sap.ui.commons.Tab;
        /**
         * Sets a new value for property {@link #getVerticalScrolling verticalScrolling}.
         *
         * Specifies the vertical scrolling.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `None`.
         */
        setVerticalScrolling(
          /**
           * New value for property `verticalScrolling`
           */
          sVerticalScrolling: sap.ui.core.Scrolling
        ): sap.ui.commons.Tab;
      }
      /**
       * @deprecated (since 1.38) - Instead, use the `sap.m.TabContainer` control.
       *
       * TabStrip represents a container for tab controls, which contain the content and generally other controls.
       * The user switches between the tabs to display the content.
       */
      class TabStrip extends sap.ui.core.Control {
        /**
         * Constructor for a new TabStrip.
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
          mSettings?: TabStripOpts
        );

        /**
         * Adds some tab to the aggregation {@link #getTabs tabs}.
         */
        addTab(
          /**
           * The tab to add; if empty, nothing is inserted
           */
          oTab: sap.ui.commons.Tab
        ): sap.ui.commons.TabStrip;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:close close} event of this `sap.ui.commons.TabStrip`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.TabStrip` itself.
         *
         * Fires when the user closes a tab.
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
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.TabStrip` itself
           */
          oListener?: object
        ): sap.ui.commons.TabStrip;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.commons.TabStrip`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.TabStrip` itself.
         *
         * Fires when the user selects a tab.
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
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.TabStrip` itself
           */
          oListener?: object
        ): sap.ui.commons.TabStrip;
        /**
         * Closes a tab (if the tab is selected, the next one will be selected; if it's the last tab, the previous
         * one will be selected).
         *
         * This method should be called if the close event is fired. It can not be called automatically because
         * the consumer might need to run some logic before the tab is closed.
         */
        closeTab(
          /**
           * The index of the tab that should be closed
           */
          iIndex: number
        ): void;
        /**
         * Creates a Tab and adds it to the TabStrip.
         */
        createTab(
          /**
           * Defines the title text of the newly created tab
           */
          sText: string,
          /**
           * Defines the root control of the content area
           */
          oContent: sap.ui.core.Control
        ): sap.ui.commons.Tab;
        /**
         * Destroys all the tabs in the aggregation {@link #getTabs tabs}.
         */
        destroyTabs(): sap.ui.commons.TabStrip;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:close close} event of this `sap.ui.commons.TabStrip`.
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
        ): sap.ui.commons.TabStrip;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.ui.commons.TabStrip`.
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
        ): sap.ui.commons.TabStrip;
        /**
         * Creates a new subclass of class sap.ui.commons.TabStrip with name `sClassName` and enriches it with the
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
         */
        fireClose(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The index of the closed tab.
             */
            index?: number;
          }
        ): sap.ui.commons.TabStrip;
        /**
         * Fires event {@link #event:select select} to attached listeners.
         */
        fireSelect(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The index of the selected tab.
             */
            index?: number;
          }
        ): sap.ui.commons.TabStrip;
        /**
         * Gets current value of property {@link #getEnableTabReordering enableTabReordering}.
         *
         * Specifies whether tab reordering is enabled.
         *
         * Default value is `false`.
         */
        getEnableTabReordering(): boolean;
        /**
         * Gets current value of property {@link #getHeight height}.
         *
         * Specifies the height of the tab bar and content area.
         */
        getHeight(): sap.ui.core.CSSSize;
        /**
         * Returns a metadata object for class sap.ui.commons.TabStrip.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getSelectedIndex selectedIndex}.
         *
         * Specifies the index of the currently selected tab.
         *
         * Default value is `0`.
         */
        getSelectedIndex(): number;
        /**
         * Gets content of aggregation {@link #getTabs tabs}.
         *
         * The tabs contained in the TabStrip.
         */
        getTabs(): sap.ui.commons.Tab[];
        /**
         * Gets current value of property {@link #getWidth width}.
         *
         * Specifies the width of the bar and content area.
         */
        getWidth(): sap.ui.core.CSSSize;
        /**
         * Checks for the provided `sap.ui.commons.Tab` in the aggregation {@link #getTabs tabs}. and returns its
         * index if found or -1 otherwise.
         */
        indexOfTab(
          /**
           * The tab whose index is looked for
           */
          oTab: sap.ui.commons.Tab
        ): number;
        /**
         * Inserts a tab into the aggregation {@link #getTabs tabs}.
         */
        insertTab(
          /**
           * The tab to insert; if empty, nothing is inserted
           */
          oTab: sap.ui.commons.Tab,
          /**
           * The `0`-based index the tab should be inserted at; for a negative value of `iIndex`, the tab is inserted
           * at position 0; for a value greater than the current size of the aggregation, the tab is inserted at the
           * last position
           */
          iIndex: number
        ): sap.ui.commons.TabStrip;
        /**
         * Called before the rendering of the control is started.
         */
        // @ts-ignore
        onBeforeRendering(): void;
        /**
         * Removes all the controls from the aggregation {@link #getTabs tabs}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllTabs(): sap.ui.commons.Tab[];
        /**
         * Removes a tab from the aggregation {@link #getTabs tabs}.
         */
        removeTab(
          /**
           * The tab to remove or its index or id
           */
          vTab: number | string | sap.ui.commons.Tab
        ): sap.ui.commons.Tab;
        /**
         * Sets whether tab reordering is enabled.
         */
        setEnableTabReordering(
          /**
           * The value.
           */
          bValue: boolean
        ): sap.ui.commons.TabStrip;
        /**
         * Sets a new value for property {@link #getHeight height}.
         *
         * Specifies the height of the tab bar and content area.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setHeight(
          /**
           * New value for property `height`
           */
          sHeight: sap.ui.core.CSSSize
        ): sap.ui.commons.TabStrip;
        /**
         * Sets a new value for property {@link #getSelectedIndex selectedIndex}.
         *
         * Specifies the index of the currently selected tab.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `0`.
         */
        setSelectedIndex(
          /**
           * New value for property `selectedIndex`
           */
          iSelectedIndex: number
        ): sap.ui.commons.TabStrip;
        /**
         * Sets a new value for property {@link #getWidth width}.
         *
         * Specifies the width of the bar and content area.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setWidth(
          /**
           * New value for property `width`
           */
          sWidth: sap.ui.core.CSSSize
        ): sap.ui.commons.TabStrip;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:close close} event of this `sap.ui.commons.TabStrip`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.TabStrip` itself.
         *
         * Fires when the user closes a tab.
         */
        attachClose(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.TabStrip` itself
           */
          oListener?: object
        ): sap.ui.commons.TabStrip;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.commons.TabStrip`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.TabStrip` itself.
         *
         * Fires when the user selects a tab.
         */
        attachSelect(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.TabStrip` itself
           */
          oListener?: object
        ): sap.ui.commons.TabStrip;
      }
      /**
       * @deprecated (since 1.38) - Instead, use the `sap.m.TextArea` control.
       *
       * Control to enter or display multible row text.
       */
      class TextArea extends sap.ui.commons.TextField {
        /**
         * Constructor for a new TextArea.
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
          mSettings?: TextAreaOpts
        );

        /**
         * Creates a new subclass of class sap.ui.commons.TextArea with name `sClassName` and enriches it with the
         * information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.commons.TextField.extend}.
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
         * Gets current value of property {@link #getCols cols}.
         *
         * Number of Columns. Cols means number of characters per row. This proprty is only used if Width is not
         * used.
         */
        getCols(): number;
        /**
         * Gets current value of property {@link #getCursorPos cursorPos}.
         *
         * Position of cursor, e.g., to let the user re-start typing at the same position as before the server roundtrip
         */
        getCursorPos(): number;
        /**
         * Gets current value of property {@link #getExplanation explanation}.
         *
         * text which appears, in case quick-help is switched on
         */
        getExplanation(): string;
        /**
         * Gets current value of property {@link #getHeight height}.
         *
         * Height of text field. When it is set (CSS-size such as % or px), this is the exact size.
         */
        getHeight(): sap.ui.core.CSSSize;
        /**
         * @deprecated (since 1.5.2) - Please use association AriaLabelledBy instead.
         *
         * Gets current value of property {@link #getLabeledBy labeledBy}.
         *
         * ID of label control
         */
        getLabeledBy(): string;
        /**
         * Returns a metadata object for class sap.ui.commons.TextArea.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getRows rows}.
         *
         * Number of Rows. This proprty is only used if Height is not used.
         */
        getRows(): number;
        /**
         * Gets current value of property {@link #getWrapping wrapping}.
         *
         * Text wrapping. Possible values are: Soft, Hard, Off.
         */
        getWrapping(): sap.ui.core.Wrapping;
        /**
         * Sets a new value for property {@link #getCols cols}.
         *
         * Number of Columns. Cols means number of characters per row. This proprty is only used if Width is not
         * used.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setCols(
          /**
           * New value for property `cols`
           */
          iCols: number
        ): sap.ui.commons.TextArea;
        /**
         * Property setter for the cursor position
         */
        setCursorPos(
          /**
           * cursor position
           */
          iCursorPos: number
        ): sap.ui.commons.TextArea;
        /**
         * Sets a new value for property {@link #getExplanation explanation}.
         *
         * text which appears, in case quick-help is switched on
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setExplanation(
          /**
           * New value for property `explanation`
           */
          sExplanation: string
        ): sap.ui.commons.TextArea;
        /**
         * Sets a new value for property {@link #getHeight height}.
         *
         * Height of text field. When it is set (CSS-size such as % or px), this is the exact size.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setHeight(
          /**
           * New value for property `height`
           */
          sHeight: sap.ui.core.CSSSize
        ): sap.ui.commons.TextArea;
        /**
         * @deprecated (since 1.5.2) - Please use association AriaLabelledBy instead.
         *
         * Sets a new value for property {@link #getLabeledBy labeledBy}.
         *
         * ID of label control
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setLabeledBy(
          /**
           * New value for property `labeledBy`
           */
          sLabeledBy: string
        ): sap.ui.commons.TextArea;
        /**
         * Property setter for MaxLength
         */
        // @ts-ignore
        setMaxLength(
          /**
           * maximal length of text
           */
          iMaxLength: number
        ): sap.ui.commons.TextArea;
        /**
         * Sets a new value for property {@link #getRows rows}.
         *
         * Number of Rows. This proprty is only used if Height is not used.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setRows(
          /**
           * New value for property `rows`
           */
          iRows: number
        ): sap.ui.commons.TextArea;
        /**
         * Sets a new value for property {@link #getWrapping wrapping}.
         *
         * Text wrapping. Possible values are: Soft, Hard, Off.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setWrapping(
          /**
           * New value for property `wrapping`
           */
          sWrapping: sap.ui.core.Wrapping
        ): sap.ui.commons.TextArea;
      }
      /**
       * @deprecated (since 1.38) - replaced by {@link sap.m.Input}
       *
       * Renders an input field for text input.
       */
      class TextField extends sap.ui.core.Control
        implements sap.ui.commons.ToolbarItem {
        /**
         * Constructor for a new TextField.
         *
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
         * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
         * of the syntax of the settings object.
         */
        constructor(
          /**
           * id for the new control, generated automatically if no ID is given
           */
          sID?: string,
          /**
           * Initial settings for the new control
           */
          mSettings?: TextFieldOpts
        );

        /**
         * Compares the previous value with the current value and fires the change event if the TextField is editable
         * and the value has changed.
         */
        _checkChange(
          /**
           * The event object.
           */
          oEvent: any
        ): void;
        /**
         * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
         */
        addAriaDescribedBy(
          /**
           * The ariaDescribedBy to add; if empty, nothing is inserted
           */
          vAriaDescribedBy: sap.ui.core.ID | sap.ui.core.Control
        ): sap.ui.commons.TextField;
        /**
         * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
         */
        addAriaLabelledBy(
          /**
           * The ariaLabelledBy to add; if empty, nothing is inserted
           */
          vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control
        ): sap.ui.commons.TextField;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.ui.commons.TextField`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.TextField` itself.
         *
         * Event is fired when the text in the field has changed AND the focus leaves the TextField or the Enter
         * key is pressed.
         */
        attachChange(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.TextField` itself
           */
          oListener?: object
        ): sap.ui.commons.TextField;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:liveChange liveChange} event of this `sap.ui.commons.TextField`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.TextField` itself.
         *
         * This event if fired during typing into the `TextField` and returns the currently entered value. **Note:**
         * This is not the content of the value property. The value property is only updated by ENTER and by leaving
         * the control.
         */
        attachLiveChange(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.TextField` itself
           */
          oListener?: object
        ): sap.ui.commons.TextField;
        /**
         * Binds property {@link #getValue value} to model data.
         *
         * See {@link sap.ui.base.ManagedObject#bindProperty ManagedObject.bindProperty} for a detailed description
         * of the possible properties of `oBindingInfo`
         */
        bindValue(
          /**
           * The binding information
           */
          oBindingInfo: object
        ): sap.ui.commons.TextField;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:change change} event of this `sap.ui.commons.TextField`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachChange(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.commons.TextField;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:liveChange liveChange} event of this `sap.ui.commons.TextField`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachLiveChange(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.commons.TextField;
        /**
         * Creates a new subclass of class sap.ui.commons.TextField with name `sClassName` and enriches it with
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
         * Fires event {@link #event:change change} to attached listeners.
         */
        fireChange(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The new / changed value of the `TextField`.
             */
            newValue?: string;
          }
        ): sap.ui.commons.TextField;
        /**
         * Fires event {@link #event:liveChange liveChange} to attached listeners.
         */
        fireLiveChange(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * Current visible value of the `TextField`.
             */
            liveValue?: string;
          }
        ): sap.ui.commons.TextField;
        /**
         * See:
         * 	sap.ui.core.Control#getAccessibilityInfo
         */
        // @ts-ignore
        getAccessibilityInfo(): Object;
        /**
         * Gets current value of property {@link #getAccessibleRole accessibleRole}.
         *
         * Accessibility role for the text field.
         *
         * Default value is `Textbox`.
         */
        getAccessibleRole(): sap.ui.core.AccessibleRole;
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
         * Gets current value of property {@link #getDesign design}.
         *
         * Font type. valid values are Standard and Monospace.
         *
         * Default value is `Standard`.
         */
        getDesign(): sap.ui.core.Design;
        /**
         * Gets current value of property {@link #getEditable editable}.
         *
         * Switches edit state of the control. Read-only fields have different colors, depending on theme setting.
         *
         * Default value is `true`.
         */
        getEditable(): boolean;
        /**
         * Gets current value of property {@link #getEnabled enabled}.
         *
         * Switches enabled state of the control. Disabled fields have different colors, and can not be focused.
         *
         * Default value is `true`.
         */
        getEnabled(): boolean;
        /**
         * Returns an object representing the serialized focus information
         */
        // @ts-ignore
        getFocusInfo(): object;
        /**
         * Gets current value of property {@link #getHelpId helpId}.
         *
         * Unique identifier used for help service.
         *
         * Default value is `empty string`.
         */
        getHelpId(): string;
        /**
         * Gets current value of property {@link #getImeMode imeMode}.
         *
         * State of the Input Method Editor (IME).
         *
         * Default value is `Auto`.
         */
        getImeMode(): sap.ui.core.ImeMode;
        /**
         * Method for accessing the DOM Ref of the input element.
         */
        getInputDomRef(): object;
        /**
         * Returns the current value of the `TextField`. In case of editing the `TextField` you can access the current
         * value via this method. The validated value is accessible via the property value.
         */
        getLiveValue(): string;
        /**
         * Gets current value of property {@link #getMaxLength maxLength}.
         *
         * Maximum number of characters. Value '0' means the feature is switched off.
         *
         * Default value is `0`.
         */
        getMaxLength(): number;
        /**
         * Returns a metadata object for class sap.ui.commons.TextField.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getName name}.
         *
         * The `name` property to be used in the HTML code (e.g. for HTML forms that send data to the server via
         * 'submit').
         */
        getName(): string;
        /**
         * @SINCE 1.14.0
         *
         * Gets current value of property {@link #getPlaceholder placeholder}.
         *
         * Placeholder for the text field.
         */
        getPlaceholder(): string;
        /**
         * Gets current value of property {@link #getRequired required}.
         *
         * Depending on theme the `TextField` is shown as required. If a `Label` is assigned to the `TextField`
         * it will visualize the requires state too.
         *
         * Default value is `false`.
         */
        getRequired(): boolean;
        /**
         * Gets current value of property {@link #getTextAlign textAlign}.
         *
         * Sets the horizontal alignment of the text.
         *
         * Default value is `Begin`.
         */
        getTextAlign(): sap.ui.core.TextAlign;
        /**
         * Gets current value of property {@link #getTextDirection textDirection}.
         *
         * Direction of the text. Possible values: "rtl", "ltr".
         *
         * Default value is `Inherit`.
         */
        getTextDirection(): sap.ui.core.TextDirection;
        /**
         * Gets current value of property {@link #getValue value}.
         *
         * Text inside the `TextField`
         *
         * Default value is `empty string`.
         */
        getValue(): string;
        /**
         * Gets current value of property {@link #getValueState valueState}.
         *
         * Visualizes warnings or errors related to the text field. Possible values: Warning, Error, Success.
         *
         * Default value is `None`.
         */
        getValueState(): sap.ui.core.ValueState;
        /**
         * Gets current value of property {@link #getWidth width}.
         *
         * Width of text field. When it is set (CSS-size such as % or px), this is the exact size. When left blank,
         * the text field length defines the width.
         */
        getWidth(): sap.ui.core.CSSSize;
        /**
         * Event handler called when control is receiving the focus
         */
        onfocusin(
          /**
           * The event object.
           */
          oEvent: any
        ): void;
        /**
         * Event handler for keyup. fire the liveChange event
         */
        onkeyup(
          /**
           * The event object.
           */
          oEvent: any
        ): void;
        /**
         * Event handler called when enter key is pressed.
         * See:
         * 	sap.ui.commons.TextField#onfocusout
         */
        onsapenter(
          /**
           * The event object.
           */
          oEvent: any
        ): void;
        /**
         * Event handler called when control is losing the focus
         */
        onsapfocusleave(
          /**
           * The event object.
           */
          oEvent: any
        ): void;
        /**
         * Event handler called when text selection starts. When the text field is disabled, the text should not
         * be selectable, so cancel the event.
         */
        onselectstart(
          /**
           * The event object.
           */
          oEvent: any
        ): void;
        /**
         * Removes all the controls in the association named {@link #getAriaDescribedBy ariaDescribedBy}.
         */
        removeAllAriaDescribedBy(): sap.ui.core.ID[];
        /**
         * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
         */
        removeAllAriaLabelledBy(): sap.ui.core.ID[];
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
         * Sets a new value for property {@link #getAccessibleRole accessibleRole}.
         *
         * Accessibility role for the text field.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Textbox`.
         */
        setAccessibleRole(
          /**
           * New value for property `accessibleRole`
           */
          sAccessibleRole: sap.ui.core.AccessibleRole
        ): sap.ui.commons.TextField;
        /**
         * Sets a new value for property {@link #getDesign design}.
         *
         * Font type. valid values are Standard and Monospace.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Standard`.
         */
        setDesign(
          /**
           * New value for property `design`
           */
          sDesign: sap.ui.core.Design
        ): sap.ui.commons.TextField;
        /**
         * Sets a new value for property {@link #getEditable editable}.
         *
         * Switches edit state of the control. Read-only fields have different colors, depending on theme setting.
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
        ): sap.ui.commons.TextField;
        /**
         * Sets a new value for property {@link #getEnabled enabled}.
         *
         * Switches enabled state of the control. Disabled fields have different colors, and can not be focused.
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
        ): sap.ui.commons.TextField;
        /**
         * Sets a new value for property {@link #getHelpId helpId}.
         *
         * Unique identifier used for help service.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `empty string`.
         */
        setHelpId(
          /**
           * New value for property `helpId`
           */
          sHelpId: string
        ): sap.ui.commons.TextField;
        /**
         * Sets a new value for property {@link #getImeMode imeMode}.
         *
         * State of the Input Method Editor (IME).
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Auto`.
         */
        setImeMode(
          /**
           * New value for property `imeMode`
           */
          sImeMode: sap.ui.core.ImeMode
        ): sap.ui.commons.TextField;
        /**
         * Sets a new value for property {@link #getMaxLength maxLength}.
         *
         * Maximum number of characters. Value '0' means the feature is switched off.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `0`.
         */
        setMaxLength(
          /**
           * New value for property `maxLength`
           */
          iMaxLength: number
        ): sap.ui.commons.TextField;
        /**
         * Sets a new value for property {@link #getName name}.
         *
         * The `name` property to be used in the HTML code (e.g. for HTML forms that send data to the server via
         * 'submit').
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setName(
          /**
           * New value for property `name`
           */
          sName: string
        ): sap.ui.commons.TextField;
        /**
         * @SINCE 1.14.0
         *
         * Sets a new value for property {@link #getPlaceholder placeholder}.
         *
         * Placeholder for the text field.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setPlaceholder(
          /**
           * New value for property `placeholder`
           */
          sPlaceholder: string
        ): sap.ui.commons.TextField;
        /**
         * Sets a new value for property {@link #getRequired required}.
         *
         * Depending on theme the `TextField` is shown as required. If a `Label` is assigned to the `TextField`
         * it will visualize the requires state too.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setRequired(
          /**
           * New value for property `required`
           */
          bRequired: boolean
        ): sap.ui.commons.TextField;
        /**
         * Sets a new value for property {@link #getTextAlign textAlign}.
         *
         * Sets the horizontal alignment of the text.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Begin`.
         */
        setTextAlign(
          /**
           * New value for property `textAlign`
           */
          sTextAlign: sap.ui.core.TextAlign
        ): sap.ui.commons.TextField;
        /**
         * Sets a new value for property {@link #getTextDirection textDirection}.
         *
         * Direction of the text. Possible values: "rtl", "ltr".
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
        ): sap.ui.commons.TextField;
        /**
         * Sets a new value for property {@link #getValue value}.
         *
         * Text inside the `TextField`
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `empty string`.
         */
        setValue(
          /**
           * New value for property `value`
           */
          sValue: string
        ): sap.ui.commons.TextField;
        /**
         * Sets a new value for property {@link #getValueState valueState}.
         *
         * Visualizes warnings or errors related to the text field. Possible values: Warning, Error, Success.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `None`.
         */
        setValueState(
          /**
           * New value for property `valueState`
           */
          sValueState: sap.ui.core.ValueState
        ): sap.ui.commons.TextField;
        /**
         * Sets a new value for property {@link #getWidth width}.
         *
         * Width of text field. When it is set (CSS-size such as % or px), this is the exact size. When left blank,
         * the text field length defines the width.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setWidth(
          /**
           * New value for property `width`
           */
          sWidth: sap.ui.core.CSSSize
        ): sap.ui.commons.TextField;
        /**
         * Unbinds property {@link #getValue value} from model data.
         */
        unbindValue(): sap.ui.commons.TextField;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.ui.commons.TextField`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.TextField` itself.
         *
         * Event is fired when the text in the field has changed AND the focus leaves the TextField or the Enter
         * key is pressed.
         */
        attachChange(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.TextField` itself
           */
          oListener?: object
        ): sap.ui.commons.TextField;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:liveChange liveChange} event of this `sap.ui.commons.TextField`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.TextField` itself.
         *
         * This event if fired during typing into the `TextField` and returns the currently entered value. **Note:**
         * This is not the content of the value property. The value property is only updated by ENTER and by leaving
         * the control.
         */
        attachLiveChange(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.TextField` itself
           */
          oListener?: object
        ): sap.ui.commons.TextField;
      }
      /**
       * @deprecated (since 1.38)
       *
       * Is used to display some continous text. The control can inherit the text direction from its parent control.
       */
      class TextView extends sap.ui.core.Control
        implements sap.ui.commons.ToolbarItem {
        /**
         * Constructor for a new TextView.
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
          mSettings?: TextViewOpts
        );

        /**
         * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
         */
        addAriaDescribedBy(
          /**
           * The ariaDescribedBy to add; if empty, nothing is inserted
           */
          vAriaDescribedBy: sap.ui.core.ID | sap.ui.core.Control
        ): sap.ui.commons.TextView;
        /**
         * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
         */
        addAriaLabelledBy(
          /**
           * The ariaLabelledBy to add; if empty, nothing is inserted
           */
          vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control
        ): sap.ui.commons.TextView;
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
        ): sap.ui.commons.TextView;
        /**
         * Creates a new subclass of class sap.ui.commons.TextView with name `sClassName` and enriches it with the
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
         * See:
         * 	sap.ui.core.Control#getAccessibilityInfo
         */
        // @ts-ignore
        getAccessibilityInfo(): void;
        /**
         * Gets current value of property {@link #getAccessibleRole accessibleRole}.
         *
         * The ARIA role for the control.
         */
        getAccessibleRole(): sap.ui.core.AccessibleRole;
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
         * Gets current value of property {@link #getDesign design}.
         *
         * Defines the visual appearance of the control.
         *
         * Default value is `Standard`.
         */
        getDesign(): sap.ui.commons.TextViewDesign;
        /**
         * Gets current value of property {@link #getEnabled enabled}.
         *
         * Switches the enabled state of the control. When the control is disabled, it is greyed out and no longer
         * focusable.
         *
         * Default value is `true`.
         */
        getEnabled(): boolean;
        /**
         * Gets current value of property {@link #getHelpId helpId}.
         *
         * Unique identifier used for help services.
         *
         * Default value is `empty string`.
         */
        getHelpId(): string;
        /**
         * Returns a metadata object for class sap.ui.commons.TextView.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getSemanticColor semanticColor}.
         *
         * Semantic color of the text View
         *
         * Default value is `Default`.
         */
        getSemanticColor(): sap.ui.commons.TextViewColor;
        /**
         * Gets current value of property {@link #getText text}.
         *
         * Text to be displayed.
         *
         * Default value is `empty string`.
         */
        getText(): string;
        /**
         * Gets current value of property {@link #getTextAlign textAlign}.
         *
         * Sets the horizontal alignment of the text.
         *
         * Default value is `Begin`.
         */
        getTextAlign(): sap.ui.core.TextAlign;
        /**
         * Gets current value of property {@link #getTextDirection textDirection}.
         *
         * Determines the text directionality. Available options are LTR and RTL. Alternatively, the control can
         * inherit the text direction from its parent control.
         *
         * Default value is `Inherit`.
         */
        getTextDirection(): sap.ui.core.TextDirection;
        /**
         * Gets current value of property {@link #getWidth width}.
         *
         * Width of the TextView
         */
        getWidth(): sap.ui.core.CSSSize;
        /**
         * Gets current value of property {@link #getWrapping wrapping}.
         *
         * Disabled automatic wrapping of the text.
         *
         * Default value is `true`.
         */
        getWrapping(): boolean;
        /**
         * Removes all the controls in the association named {@link #getAriaDescribedBy ariaDescribedBy}.
         */
        removeAllAriaDescribedBy(): sap.ui.core.ID[];
        /**
         * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
         */
        removeAllAriaLabelledBy(): sap.ui.core.ID[];
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
         * Sets a new value for property {@link #getAccessibleRole accessibleRole}.
         *
         * The ARIA role for the control.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setAccessibleRole(
          /**
           * New value for property `accessibleRole`
           */
          sAccessibleRole: sap.ui.core.AccessibleRole
        ): sap.ui.commons.TextView;
        /**
         * Sets a new value for property {@link #getDesign design}.
         *
         * Defines the visual appearance of the control.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Standard`.
         */
        setDesign(
          /**
           * New value for property `design`
           */
          sDesign: sap.ui.commons.TextViewDesign
        ): sap.ui.commons.TextView;
        /**
         * Sets a new value for property {@link #getEnabled enabled}.
         *
         * Switches the enabled state of the control. When the control is disabled, it is greyed out and no longer
         * focusable.
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
        ): sap.ui.commons.TextView;
        /**
         * Sets a new value for property {@link #getHelpId helpId}.
         *
         * Unique identifier used for help services.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `empty string`.
         */
        setHelpId(
          /**
           * New value for property `helpId`
           */
          sHelpId: string
        ): sap.ui.commons.TextView;
        /**
         * Sets a new value for property {@link #getSemanticColor semanticColor}.
         *
         * Semantic color of the text View
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Default`.
         */
        setSemanticColor(
          /**
           * New value for property `semanticColor`
           */
          sSemanticColor: sap.ui.commons.TextViewColor
        ): sap.ui.commons.TextView;
        /**
         * Sets a new value for property {@link #getText text}.
         *
         * Text to be displayed.
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
        ): sap.ui.commons.TextView;
        /**
         * Sets a new value for property {@link #getTextAlign textAlign}.
         *
         * Sets the horizontal alignment of the text.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Begin`.
         */
        setTextAlign(
          /**
           * New value for property `textAlign`
           */
          sTextAlign: sap.ui.core.TextAlign
        ): sap.ui.commons.TextView;
        /**
         * Sets a new value for property {@link #getTextDirection textDirection}.
         *
         * Determines the text directionality. Available options are LTR and RTL. Alternatively, the control can
         * inherit the text direction from its parent control.
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
        ): sap.ui.commons.TextView;
        /**
         * Sets a new value for property {@link #getWidth width}.
         *
         * Width of the TextView
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setWidth(
          /**
           * New value for property `width`
           */
          sWidth: sap.ui.core.CSSSize
        ): sap.ui.commons.TextView;
        /**
         * Sets a new value for property {@link #getWrapping wrapping}.
         *
         * Disabled automatic wrapping of the text.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setWrapping(
          /**
           * New value for property `wrapping`
           */
          bWrapping: boolean
        ): sap.ui.commons.TextView;
        /**
         * Unbinds property {@link #getText text} from model data.
         */
        unbindText(): sap.ui.commons.TextView;
      }
      /**
       * @deprecated (since 1.16.0) - moved to sap.ui.core library. Please use this one.
       *
       * Represents a title element that can be used for aggregation with other controls
       */
      class Title extends sap.ui.core.Title {
        /**
         * Constructor for a new Title.
         */
        constructor(
          /**
           * id for the new control, generated automatically if no id is given
           */
          sId?: string,
          /**
           * initial settings for the new control
           */
          mSettings?: TitleOpts
        );

        /**
         * Creates a new subclass of class sap.ui.commons.Title with name `sClassName` and enriches it with the
         * information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Title.extend}.
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
         * @SINCE 1.9.1
         *
         * Getter for property `level`. Defines the level of the title. If set to auto the level of the title is
         * chosen by the control rendering the title.
         *
         * Currently not all controls using the Title.control supporting this property.
         *
         * Default value is `Auto`
         */
        // @ts-ignore
        getLevel(): any;
        /**
         * Returns a metadata object for class sap.ui.commons.Title.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * @SINCE 1.9.1
         *
         * Setter for property `level`.
         *
         * Default value is `Auto`
         */
        // @ts-ignore
        setLevel(
          /**
           * new value for property `level`
           */
          oLevel: any
        ): sap.ui.commons.Title;
      }
      /**
       * @deprecated (since 1.38) - replaced by {@link sap.m.ToggleButton}
       *
       * The ToggleButton Control is a Button that can be toggled between pressed and normal state
       */
      class ToggleButton extends sap.ui.commons.Button {
        /**
         * Constructor for a new ToggleButton.
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
          mSettings?: ToggleButtonOpts
        );

        /**
         * Creates a new subclass of class sap.ui.commons.ToggleButton with name `sClassName` and enriches it with
         * the information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.commons.Button.extend}.
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
        getAccessibilityInfo(): Object;
        /**
         * Returns a metadata object for class sap.ui.commons.ToggleButton.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getPressed pressed}.
         *
         * The property is “true” when the control is toggled. The default state of this property is "false".
         *
         * Default value is `false`.
         */
        getPressed(): boolean;
        /**
         * Sets a new value for property {@link #getPressed pressed}.
         *
         * The property is “true” when the control is toggled. The default state of this property is "false".
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setPressed(
          /**
           * New value for property `pressed`
           */
          bPressed: boolean
        ): sap.ui.commons.ToggleButton;
      }
      /**
       * @deprecated (since 1.38) - replaced by {@link sap.m.Toolbar}
       *
       * A horizontal row of items where in many cases the single toolbar items are buttons containing icons.
       * Note that all controls with the sap.ui.commons.ToolbarItem interface can be used as item: Button, ComboBox,
       * TextField.
       */
      class Toolbar extends sap.ui.core.Control implements sap.ui.core.Toolbar {
        /**
         * Constructor for a new Toolbar.
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
          mSettings?: ToolbarOpts
        );

        /**
         * Adds some item to the aggregation {@link #getItems items}.
         */
        addItem(
          /**
           * The item to add; if empty, nothing is inserted
           */
          oItem: sap.ui.commons.ToolbarItem
        ): sap.ui.commons.Toolbar;
        /**
         * Adds some rightItem to the aggregation {@link #getRightItems rightItems}.
         */
        addRightItem(
          /**
           * The rightItem to add; if empty, nothing is inserted
           */
          oRightItem: sap.ui.commons.ToolbarItem
        ): sap.ui.commons.Toolbar;
        /**
         * Destroys all the items in the aggregation {@link #getItems items}.
         */
        destroyItems(): sap.ui.commons.Toolbar;
        /**
         * Destroys all the rightItems in the aggregation {@link #getRightItems rightItems}.
         */
        destroyRightItems(): sap.ui.commons.Toolbar;
        /**
         * Creates a new subclass of class sap.ui.commons.Toolbar with name `sClassName` and enriches it with the
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
         * Gets current value of property {@link #getDesign design}.
         *
         * Design settings are theme-dependent.
         *
         * Default value is `Flat`.
         */
        getDesign(): sap.ui.commons.ToolbarDesign;
        /**
         * Gets content of aggregation {@link #getItems items}.
         *
         * Aggregating the tool bar items.
         */
        getItems(): sap.ui.commons.ToolbarItem[];
        /**
         * Returns a metadata object for class sap.ui.commons.Toolbar.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets content of aggregation {@link #getRightItems rightItems}.
         *
         * Aggregating the right side tool bar items.
         */
        getRightItems(): sap.ui.commons.ToolbarItem[];
        /**
         * Gets current value of property {@link #getStandalone standalone}.
         *
         * Per default, tool bars have the stand alone status. Alternatively, they can be nested in other controls
         * and then inherit the design from their parent control.
         *
         * Default value is `true`.
         */
        getStandalone(): boolean;
        /**
         * Gets current value of property {@link #getWidth width}.
         *
         * When there is not enough space for the toolbar to display all items, the rightmost items are overflowing
         * into a drop-down menu.
         *
         * Default value is `auto`.
         */
        getWidth(): sap.ui.core.CSSSize;
        /**
         * Checks for the provided `sap.ui.commons.ToolbarItem` in the aggregation {@link #getItems items}. and
         * returns its index if found or -1 otherwise.
         */
        indexOfItem(
          /**
           * The item whose index is looked for
           */
          oItem: sap.ui.commons.ToolbarItem
        ): number;
        /**
         * Checks for the provided `sap.ui.commons.ToolbarItem` in the aggregation {@link #getRightItems rightItems}.
         * and returns its index if found or -1 otherwise.
         */
        indexOfRightItem(
          /**
           * The rightItem whose index is looked for
           */
          oRightItem: sap.ui.commons.ToolbarItem
        ): number;
        /**
         * Inserts a item into the aggregation {@link #getItems items}.
         */
        insertItem(
          /**
           * The item to insert; if empty, nothing is inserted
           */
          oItem: sap.ui.commons.ToolbarItem,
          /**
           * The `0`-based index the item should be inserted at; for a negative value of `iIndex`, the item is inserted
           * at position 0; for a value greater than the current size of the aggregation, the item is inserted at
           * the last position
           */
          iIndex: number
        ): sap.ui.commons.Toolbar;
        /**
         * Inserts a rightItem into the aggregation {@link #getRightItems rightItems}.
         */
        insertRightItem(
          /**
           * The rightItem to insert; if empty, nothing is inserted
           */
          oRightItem: sap.ui.commons.ToolbarItem,
          /**
           * The `0`-based index the rightItem should be inserted at; for a negative value of `iIndex`, the rightItem
           * is inserted at position 0; for a value greater than the current size of the aggregation, the rightItem
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.commons.Toolbar;
        /**
         * Removes all the controls from the aggregation {@link #getItems items}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllItems(): sap.ui.commons.ToolbarItem[];
        /**
         * Removes all the controls from the aggregation {@link #getRightItems rightItems}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllRightItems(): sap.ui.commons.ToolbarItem[];
        /**
         * Removes a item from the aggregation {@link #getItems items}.
         */
        removeItem(
          /**
           * The item to remove or its index or id
           */
          vItem: number | string | sap.ui.commons.ToolbarItem
        ): sap.ui.commons.ToolbarItem;
        /**
         * Removes a rightItem from the aggregation {@link #getRightItems rightItems}.
         */
        removeRightItem(
          /**
           * The rightItem to remove or its index or id
           */
          vRightItem: number | string | sap.ui.commons.ToolbarItem
        ): sap.ui.commons.ToolbarItem;
        /**
         * Sets a new value for property {@link #getDesign design}.
         *
         * Design settings are theme-dependent.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Flat`.
         */
        setDesign(
          /**
           * New value for property `design`
           */
          sDesign: sap.ui.commons.ToolbarDesign
        ): sap.ui.commons.Toolbar;
        /**
         * Sets a new value for property {@link #getStandalone standalone}.
         *
         * Per default, tool bars have the stand alone status. Alternatively, they can be nested in other controls
         * and then inherit the design from their parent control.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setStandalone(
          /**
           * New value for property `standalone`
           */
          bStandalone: boolean
        ): sap.ui.commons.Toolbar;
        /**
         * Sets a new value for property {@link #getWidth width}.
         *
         * When there is not enough space for the toolbar to display all items, the rightmost items are overflowing
         * into a drop-down menu.
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
        ): sap.ui.commons.Toolbar;
      }
      /**
       * @deprecated (since 1.38) - Instead, use the `sap.m.Toolbar` control.
       *
       * A small vertical line that is generally added to the tool bar between the items to visually separate
       * them.
       */
      class ToolbarSeparator extends sap.ui.core.Element
        implements sap.ui.commons.ToolbarItem {
        /**
         * Constructor for a new ToolbarSeparator.
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
          mSettings?: ToolbarSeparatorOpts
        );

        /**
         * Creates a new subclass of class sap.ui.commons.ToolbarSeparator with name `sClassName` and enriches it
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
         * Gets current value of property {@link #getDesign design}.
         *
         * Design of the Separator.
         */
        getDesign(): sap.ui.commons.ToolbarSeparatorDesign;
        /**
         * Gets current value of property {@link #getDisplayVisualSeparator displayVisualSeparator}.
         *
         * When set to false, there is no visual indication of separation by a vertical line but by a wider space.
         *
         * Default value is `true`.
         */
        getDisplayVisualSeparator(): boolean;
        /**
         * Returns a metadata object for class sap.ui.commons.ToolbarSeparator.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Sets a new value for property {@link #getDesign design}.
         *
         * Design of the Separator.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setDesign(
          /**
           * New value for property `design`
           */
          sDesign: sap.ui.commons.ToolbarSeparatorDesign
        ): sap.ui.commons.ToolbarSeparator;
        /**
         * Sets a new value for property {@link #getDisplayVisualSeparator displayVisualSeparator}.
         *
         * When set to false, there is no visual indication of separation by a vertical line but by a wider space.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setDisplayVisualSeparator(
          /**
           * New value for property `displayVisualSeparator`
           */
          bDisplayVisualSeparator: boolean
        ): sap.ui.commons.ToolbarSeparator;
      }
      /**
       * @deprecated (since 1.38) - replaced by {@link sap.m.Tree}
       *
       * Simple tree to display item in a hierarchical way
       */
      class Tree extends sap.ui.core.Control {
        /**
         * Constructor for a new Tree.
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
          mSettings?: TreeOpts
        );

        /**
         * Adds some node to the aggregation {@link #getNodes nodes}.
         */
        addNode(
          /**
           * The node to add; if empty, nothing is inserted
           */
          oNode: sap.ui.commons.TreeNode
        ): sap.ui.commons.Tree;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.commons.Tree`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.Tree` itself.
         *
         * Event is fired when a tree node is selected.
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
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.Tree` itself
           */
          oListener?: object
        ): sap.ui.commons.Tree;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:selectionChange selectionChange} event of this
         * `sap.ui.commons.Tree`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.Tree` itself.
         *
         * fired when the selection of the tree has been changed
         */
        attachSelectionChange(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.Tree` itself
           */
          oListener?: object
        ): sap.ui.commons.Tree;
        /**
         * Binds aggregation {@link #getNodes nodes} to model data.
         *
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description
         * of the possible properties of `oBindingInfo`.
         */
        bindNodes(
          /**
           * The binding information
           */
          oBindingInfo: object
        ): sap.ui.commons.Tree;
        /**
         * Collapses all nodes in the tree.
         */
        collapseAll(): void;
        /**
         * Destroys all the nodes in the aggregation {@link #getNodes nodes}.
         */
        destroyNodes(): sap.ui.commons.Tree;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.ui.commons.Tree`.
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
        ): sap.ui.commons.Tree;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:selectionChange selectionChange} event of
         * this `sap.ui.commons.Tree`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachSelectionChange(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.commons.Tree;
        /**
         * Expands all nodes in the tree.
         */
        expandAll(): void;
        /**
         * Creates a new subclass of class sap.ui.commons.Tree with name `sClassName` and enriches it with the information
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
             * The node which has been selected.
             */
            node?: sap.ui.commons.TreeNode;
            /**
             * The binding context of the selected node.
             */
            nodeContext?: object;
          }
        ): boolean;
        /**
         * Fires event {@link #event:selectionChange selectionChange} to attached listeners.
         */
        fireSelectionChange(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The nodes which has been selected.
             */
            nodes?: sap.ui.commons.TreeNode[];
            /**
             * The binding context of the selected nodes.
             */
            nodeContexts?: object[];
          }
        ): sap.ui.commons.Tree;
        /**
         * Gets current value of property {@link #getHeight height}.
         *
         * Tree height
         *
         * Default value is `auto`.
         */
        getHeight(): sap.ui.core.CSSSize;
        /**
         * Returns a metadata object for class sap.ui.commons.Tree.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getMinWidth minWidth}.
         *
         * Minimal width for the Tree. Can be useful when, for example, the width is specified in percentage, to
         * avoid the tree to become too narrow when container is resize
         */
        getMinWidth(): sap.ui.core.CSSSize;
        /**
         * @SINCE 1.19
         *
         * Returns the node with the given context, or null if no such node currently exists.
         */
        getNodeByContext(
          /**
           * The context of the node to be retrieved
           */
          oContext: sap.ui.model.Context
        ): sap.ui.commons.TreeNode;
        /**
         * Gets content of aggregation {@link #getNodes nodes}.
         *
         * First level nodes
         */
        getNodes(): sap.ui.commons.TreeNode[];
        /**
         * Gets current value of property {@link #getSelectionMode selectionMode}.
         *
         * Selection mode of the Tree.
         *
         * Default value is `Legacy`.
         */
        getSelectionMode(): sap.ui.commons.TreeSelectionMode;
        /**
         * Gets current value of property {@link #getShowHeader showHeader}.
         *
         * Tree Header is display. If false, the tree will be in a transparent mode
         *
         * Default value is `true`.
         */
        getShowHeader(): boolean;
        /**
         * Gets current value of property {@link #getShowHeaderIcons showHeaderIcons}.
         *
         * Show Header icons (e.g. Expand/Collapse all). Only consider if showHeader is true
         *
         * Default value is `true`.
         */
        getShowHeaderIcons(): boolean;
        /**
         * Gets current value of property {@link #getShowHorizontalScrollbar showHorizontalScrollbar}.
         *
         * Display horizontal scrollbar. If false, the overflow content will be hidden
         *
         * Default value is `false`.
         */
        getShowHorizontalScrollbar(): boolean;
        /**
         * Gets current value of property {@link #getTitle title}.
         *
         * Tree title
         */
        getTitle(): string;
        /**
         * Gets current value of property {@link #getWidth width}.
         *
         * Tree width
         *
         * Default value is `auto`.
         */
        getWidth(): sap.ui.core.CSSSize;
        /**
         * Checks for the provided `sap.ui.commons.TreeNode` in the aggregation {@link #getNodes nodes}. and returns
         * its index if found or -1 otherwise.
         */
        indexOfNode(
          /**
           * The node whose index is looked for
           */
          oNode: sap.ui.commons.TreeNode
        ): number;
        /**
         * Inserts a node into the aggregation {@link #getNodes nodes}.
         */
        insertNode(
          /**
           * The node to insert; if empty, nothing is inserted
           */
          oNode: sap.ui.commons.TreeNode,
          /**
           * The `0`-based index the node should be inserted at; for a negative value of `iIndex`, the node is inserted
           * at position 0; for a value greater than the current size of the aggregation, the node is inserted at
           * the last position
           */
          iIndex: number
        ): sap.ui.commons.Tree;
        /**
         * Removes all the controls from the aggregation {@link #getNodes nodes}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllNodes(): sap.ui.commons.TreeNode[];
        /**
         * Removes a node from the aggregation {@link #getNodes nodes}.
         */
        removeNode(
          /**
           * The node to remove or its index or id
           */
          vNode: number | string | sap.ui.commons.TreeNode
        ): sap.ui.commons.TreeNode;
        /**
         * Sets a new value for property {@link #getHeight height}.
         *
         * Tree height
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
        ): sap.ui.commons.Tree;
        /**
         * Sets a new value for property {@link #getMinWidth minWidth}.
         *
         * Minimal width for the Tree. Can be useful when, for example, the width is specified in percentage, to
         * avoid the tree to become too narrow when container is resize
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setMinWidth(
          /**
           * New value for property `minWidth`
           */
          sMinWidth: sap.ui.core.CSSSize
        ): sap.ui.commons.Tree;
        /**
         * Sets a new value for property {@link #getSelectionMode selectionMode}.
         *
         * Selection mode of the Tree.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Legacy`.
         */
        setSelectionMode(
          /**
           * New value for property `selectionMode`
           */
          sSelectionMode: sap.ui.commons.TreeSelectionMode
        ): sap.ui.commons.Tree;
        /**
         * Sets a new value for property {@link #getShowHeader showHeader}.
         *
         * Tree Header is display. If false, the tree will be in a transparent mode
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setShowHeader(
          /**
           * New value for property `showHeader`
           */
          bShowHeader: boolean
        ): sap.ui.commons.Tree;
        /**
         * Sets a new value for property {@link #getShowHeaderIcons showHeaderIcons}.
         *
         * Show Header icons (e.g. Expand/Collapse all). Only consider if showHeader is true
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setShowHeaderIcons(
          /**
           * New value for property `showHeaderIcons`
           */
          bShowHeaderIcons: boolean
        ): sap.ui.commons.Tree;
        /**
         * Sets a new value for property {@link #getShowHorizontalScrollbar showHorizontalScrollbar}.
         *
         * Display horizontal scrollbar. If false, the overflow content will be hidden
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setShowHorizontalScrollbar(
          /**
           * New value for property `showHorizontalScrollbar`
           */
          bShowHorizontalScrollbar: boolean
        ): sap.ui.commons.Tree;
        /**
         * Sets a new value for property {@link #getTitle title}.
         *
         * Tree title
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setTitle(
          /**
           * New value for property `title`
           */
          sTitle: string
        ): sap.ui.commons.Tree;
        /**
         * Sets a new value for property {@link #getWidth width}.
         *
         * Tree width
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
        ): sap.ui.commons.Tree;
        /**
         * Unbinds aggregation {@link #getNodes nodes} from model data.
         */
        unbindNodes(): sap.ui.commons.Tree;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.commons.Tree`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.Tree` itself.
         *
         * Event is fired when a tree node is selected.
         */
        attachSelect(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.Tree` itself
           */
          oListener?: object
        ): sap.ui.commons.Tree;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:selectionChange selectionChange} event of this
         * `sap.ui.commons.Tree`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.Tree` itself.
         *
         * fired when the selection of the tree has been changed
         */
        attachSelectionChange(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.Tree` itself
           */
          oListener?: object
        ): sap.ui.commons.Tree;
      }
      /**
       * @deprecated (since 1.38) - replaced by {@link sap.m.Tree}
       *
       * Tree node element
       */
      class TreeNode extends sap.ui.core.Element {
        /**
         * Constructor for a new TreeNode.
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
          mSettings?: TreeNodeOpts
        );

        /**
         * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
         */
        addAriaDescribedBy(
          /**
           * The ariaDescribedBy to add; if empty, nothing is inserted
           */
          vAriaDescribedBy: sap.ui.core.ID | sap.ui.core.Control
        ): sap.ui.commons.TreeNode;
        /**
         * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
         */
        addAriaLabelledBy(
          /**
           * The ariaLabelledBy to add; if empty, nothing is inserted
           */
          vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control
        ): sap.ui.commons.TreeNode;
        /**
         * Adds some node to the aggregation {@link #getNodes nodes}.
         */
        addNode(
          /**
           * The node to add; if empty, nothing is inserted
           */
          oNode: sap.ui.commons.TreeNode
        ): sap.ui.commons.TreeNode;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:selected selected} event of this `sap.ui.commons.TreeNode`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.TreeNode` itself.
         *
         * Node is selected
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
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.TreeNode` itself
           */
          oListener?: object
        ): sap.ui.commons.TreeNode;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:toggleOpenState toggleOpenState} event of this
         * `sap.ui.commons.TreeNode`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.TreeNode` itself.
         *
         * Node state has changed.
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
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.TreeNode` itself
           */
          oListener?: object
        ): sap.ui.commons.TreeNode;
        /**
         * Collapses the node.
         */
        collapse(
          /**
           * Propagates collapse to node's children
           */
          bCollapseChildren: boolean,
          /**
           * Disables the collapse finished handler
           */
          bDisableCollapseFinishedHandler: boolean
        ): void;
        /**
         * Destroys all the nodes in the aggregation {@link #getNodes nodes}.
         */
        destroyNodes(): sap.ui.commons.TreeNode;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:selected selected} event of this `sap.ui.commons.TreeNode`.
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
        ): sap.ui.commons.TreeNode;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:toggleOpenState toggleOpenState} event of
         * this `sap.ui.commons.TreeNode`.
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
        ): sap.ui.commons.TreeNode;
        /**
         * Expands the node.
         */
        expand(
          /**
           * Propagates expand to node's children
           */
          bExpandChildren: boolean,
          /**
           * Disables the expand finished handler
           */
          bDisableExpandFinishedHandler: boolean
        ): void;
        /**
         * Creates a new subclass of class sap.ui.commons.TreeNode with name `sClassName` and enriches it with the
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
          mParameters?: object
        ): sap.ui.commons.TreeNode;
        /**
         * Fires event {@link #event:toggleOpenState toggleOpenState} to attached listeners.
         */
        fireToggleOpenState(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * Node has been opened if true
             */
            opened?: boolean;
          }
        ): sap.ui.commons.TreeNode;
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
         * Node is expanded
         *
         * Default value is `true`.
         */
        getExpanded(): boolean;
        /**
         * Gets current value of property {@link #getHasExpander hasExpander}.
         *
         * Should the node has an expander.
         *
         * Default value is `false`.
         */
        getHasExpander(): boolean;
        /**
         * Gets current value of property {@link #getIcon icon}.
         *
         * Icon to display in front of the node
         */
        getIcon(): sap.ui.core.URI;
        /**
         * Gets current value of property {@link #getIsSelected isSelected}.
         *
         * Node is selected
         *
         * Default value is `false`.
         */
        getIsSelected(): boolean;
        /**
         * Returns a metadata object for class sap.ui.commons.TreeNode.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets content of aggregation {@link #getNodes nodes}.
         *
         * Subnodes for the current node
         */
        getNodes(): sap.ui.commons.TreeNode[];
        /**
         * Gets current value of property {@link #getSelectable selectable}.
         *
         * The node is selectable. If true, clicking on the node text triggers "selected" event
         *
         * Default value is `true`.
         */
        getSelectable(): boolean;
        /**
         * Gets current value of property {@link #getText text}.
         *
         * Node text
         */
        getText(): string;
        /**
         * Checks for the provided `sap.ui.commons.TreeNode` in the aggregation {@link #getNodes nodes}. and returns
         * its index if found or -1 otherwise.
         */
        indexOfNode(
          /**
           * The node whose index is looked for
           */
          oNode: sap.ui.commons.TreeNode
        ): number;
        /**
         * Inserts a node into the aggregation {@link #getNodes nodes}.
         */
        insertNode(
          /**
           * The node to insert; if empty, nothing is inserted
           */
          oNode: sap.ui.commons.TreeNode,
          /**
           * The `0`-based index the node should be inserted at; for a negative value of `iIndex`, the node is inserted
           * at position 0; for a value greater than the current size of the aggregation, the node is inserted at
           * the last position
           */
          iIndex: number
        ): sap.ui.commons.TreeNode;
        /**
         * Removes all the controls in the association named {@link #getAriaDescribedBy ariaDescribedBy}.
         */
        removeAllAriaDescribedBy(): sap.ui.core.ID[];
        /**
         * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
         */
        removeAllAriaLabelledBy(): sap.ui.core.ID[];
        /**
         * Removes all the controls from the aggregation {@link #getNodes nodes}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllNodes(): sap.ui.commons.TreeNode[];
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
         * Removes a node from the aggregation {@link #getNodes nodes}.
         */
        removeNode(
          /**
           * The node to remove or its index or id
           */
          vNode: number | string | sap.ui.commons.TreeNode
        ): sap.ui.commons.TreeNode;
        /**
         * Select the node, and if any, deselects the previously selected node
         */
        select(bSuppressEvent: boolean): void;
        /**
         * Sets a new value for property {@link #getExpanded expanded}.
         *
         * Node is expanded
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
        ): sap.ui.commons.TreeNode;
        /**
         * Sets a new value for property {@link #getHasExpander hasExpander}.
         *
         * Should the node has an expander.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setHasExpander(
          /**
           * New value for property `hasExpander`
           */
          bHasExpander: boolean
        ): sap.ui.commons.TreeNode;
        /**
         * Sets a new value for property {@link #getIcon icon}.
         *
         * Icon to display in front of the node
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setIcon(
          /**
           * New value for property `icon`
           */
          sIcon: sap.ui.core.URI
        ): sap.ui.commons.TreeNode;
        /**
         * Redefinition of Setter for property `isSelected` for validation purpose
         *
         * Default value is empty/`undefined`
         */
        setIsSelected(
          /**
           * new value for property `isSelected`
           */
          bIsSelected: boolean
        ): sap.ui.commons.TreeNode;
        /**
         * Redefinition of Setter for property `selectable` for validation purpose.
         *
         * Default value is `true`
         */
        setSelectable(
          /**
           * new value for property `selectable`
           */
          bSelectable: boolean
        ): sap.ui.commons.TreeNode;
        /**
         * Sets a new value for property {@link #getText text}.
         *
         * Node text
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setText(
          /**
           * New value for property `text`
           */
          sText: string
        ): sap.ui.commons.TreeNode;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:selected selected} event of this `sap.ui.commons.TreeNode`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.TreeNode` itself.
         *
         * Node is selected
         */
        attachSelected(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.TreeNode` itself
           */
          oListener?: object
        ): sap.ui.commons.TreeNode;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:toggleOpenState toggleOpenState} event of this
         * `sap.ui.commons.TreeNode`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.TreeNode` itself.
         *
         * Node state has changed.
         */
        attachToggleOpenState(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.TreeNode` itself
           */
          oListener?: object
        ): sap.ui.commons.TreeNode;
      }
      /**
       * @SINCE 1.7.2
       * @deprecated (since 1.38)
       *
       * TriStateCheckBox to reflect mixed state for checkboxes. The control can display three states, namely
       * checked, unchecked and mixed. However, mixed state cannot be directly reached by user interaction on
       * the particular control. It can be only set by the control's public toggle function, to make a behaviour
       * possible which is e.g. required in checkbox trees.
       */
      class TriStateCheckBox extends sap.ui.core.Control {
        /**
         * Constructor for a new TriStateCheckBox.
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
          mSettings?: TriStateCheckBoxOpts
        );

        /**
         * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.ui.commons.TriStateCheckBox`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.TriStateCheckBox` itself.
         *
         * Event is triggered when the control status is changed by the user by flagging or unflagging the checkbox.
         */
        attachChange(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.TriStateCheckBox` itself
           */
          oListener?: object
        ): sap.ui.commons.TriStateCheckBox;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:change change} event of this `sap.ui.commons.TriStateCheckBox`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachChange(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.commons.TriStateCheckBox;
        /**
         * Creates a new subclass of class sap.ui.commons.TriStateCheckBox with name `sClassName` and enriches it
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
         * Fires event {@link #event:change change} to attached listeners.
         */
        fireChange(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * Checks whether the box is flagged or not flagged.
             */
            selectionState?: string;
          }
        ): sap.ui.commons.TriStateCheckBox;
        /**
         * Gets current value of property {@link #getEditable editable}.
         *
         * Specifies whether the user shall be allowed to flag the check box
         *
         * Default value is `true`.
         */
        getEditable(): boolean;
        /**
         * Gets current value of property {@link #getEnabled enabled}.
         *
         * Using this property, the control could be disabled, if required.
         *
         * Default value is `true`.
         */
        getEnabled(): boolean;
        /**
         * Returns a metadata object for class sap.ui.commons.TriStateCheckBox.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getSelectionState selectionState}.
         *
         * Defines the states of the checkbox
         *
         * Default value is `Unchecked`.
         */
        getSelectionState(): sap.ui.commons.TriStateCheckBoxState;
        /**
         * Gets current value of property {@link #getText text}.
         *
         * Defines the text displayed next to the check box
         */
        getText(): string;
        /**
         * Gets current value of property {@link #getTextDirection textDirection}.
         *
         * The value can be set to LTR or RTL. Otherwise, the control inherits the text direction from its parent
         * control.
         *
         * Default value is `Inherit`.
         */
        getTextDirection(): sap.ui.core.TextDirection;
        /**
         * Gets current value of property {@link #getValueState valueState}.
         *
         * Accepts the core enumeration ValueState.type that supports 'None', 'Error', 'Warning' and 'Success'.
         *
         * Default value is `None`.
         */
        getValueState(): sap.ui.core.ValueState;
        /**
         * Gets current value of property {@link #getWidth width}.
         *
         * The width can be set to an absolute value. If no value is set, the control width results from the text
         * length.
         */
        getWidth(): sap.ui.core.CSSSize;
        /**
         * Sets a new value for property {@link #getEditable editable}.
         *
         * Specifies whether the user shall be allowed to flag the check box
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
        ): sap.ui.commons.TriStateCheckBox;
        /**
         * Sets a new value for property {@link #getEnabled enabled}.
         *
         * Using this property, the control could be disabled, if required.
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
        ): sap.ui.commons.TriStateCheckBox;
        /**
         * Sets a new value for property {@link #getSelectionState selectionState}.
         *
         * Defines the states of the checkbox
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Unchecked`.
         */
        setSelectionState(
          /**
           * New value for property `selectionState`
           */
          sSelectionState: sap.ui.commons.TriStateCheckBoxState
        ): sap.ui.commons.TriStateCheckBox;
        /**
         * Sets a new value for property {@link #getText text}.
         *
         * Defines the text displayed next to the check box
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setText(
          /**
           * New value for property `text`
           */
          sText: string
        ): sap.ui.commons.TriStateCheckBox;
        /**
         * Sets a new value for property {@link #getTextDirection textDirection}.
         *
         * The value can be set to LTR or RTL. Otherwise, the control inherits the text direction from its parent
         * control.
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
        ): sap.ui.commons.TriStateCheckBox;
        /**
         * Sets a new value for property {@link #getValueState valueState}.
         *
         * Accepts the core enumeration ValueState.type that supports 'None', 'Error', 'Warning' and 'Success'.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `None`.
         */
        setValueState(
          /**
           * New value for property `valueState`
           */
          sValueState: sap.ui.core.ValueState
        ): sap.ui.commons.TriStateCheckBox;
        /**
         * Sets a new value for property {@link #getWidth width}.
         *
         * The width can be set to an absolute value. If no value is set, the control width results from the text
         * length.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setWidth(
          /**
           * New value for property `width`
           */
          sWidth: sap.ui.core.CSSSize
        ): sap.ui.commons.TriStateCheckBox;
        /**
         * Method called whenever a user clicks on a tri-state checkbox
         */
        toggle(
          /**
           * destined selection state of checkbox
           */
          destState: sap.ui.commons.TriStateCheckBoxState
        ): void;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.ui.commons.TriStateCheckBox`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.TriStateCheckBox` itself.
         *
         * Event is triggered when the control status is changed by the user by flagging or unflagging the checkbox.
         */
        attachChange(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.TriStateCheckBox` itself
           */
          oListener?: object
        ): sap.ui.commons.TriStateCheckBox;
      }
      /**
       * @deprecated (since 1.38) - Instead, use the `sap.m.Input` control.
       *
       * A TextField with an attached icon which triggeres an event.
       */
      class ValueHelpField extends sap.ui.commons.TextField {
        /**
         * Constructor for a new ValueHelpField.
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
          mSettings?: ValueHelpFieldOpts
        );

        /**
         * Attaches event handler `fnFunction` to the {@link #event:valueHelpRequest valueHelpRequest} event of
         * this `sap.ui.commons.ValueHelpField`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.ValueHelpField` itself.
         *
         * Event which is fired when the ValueHelp is requested.
         */
        attachValueHelpRequest(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.ValueHelpField` itself
           */
          oListener?: object
        ): sap.ui.commons.ValueHelpField;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:valueHelpRequest valueHelpRequest} event of
         * this `sap.ui.commons.ValueHelpField`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachValueHelpRequest(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.commons.ValueHelpField;
        /**
         * Creates a new subclass of class sap.ui.commons.ValueHelpField with name `sClassName` and enriches it
         * with the information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.commons.TextField.extend}.
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
         * Fires event {@link #event:valueHelpRequest valueHelpRequest} to attached listeners.
         */
        fireValueHelpRequest(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ui.commons.ValueHelpField;
        /**
         * Gets current value of property {@link #getIconDisabledURL iconDisabledURL}.
         *
         * URL of the icon for the value help when disabled. If no parameter is supplied the default icon image
         * will be shown. If an icon font icon is used, this property is ignored.
         */
        getIconDisabledURL(): sap.ui.core.URI;
        /**
         * Gets current value of property {@link #getIconHoverURL iconHoverURL}.
         *
         * URL of the icon for the value help when hovered. If no parameter is supplied the standard icon image
         * will be shown. If an icon font icon is used, this property is ignored.
         */
        getIconHoverURL(): sap.ui.core.URI;
        /**
         * Gets current value of property {@link #getIconURL iconURL}.
         *
         * URL of the standard icon for the value help. If no parameter is supplied the default icon image will
         * be shown. This can be a URI to an image or an icon font URI.
         */
        getIconURL(): sap.ui.core.URI;
        /**
         * Returns a metadata object for class sap.ui.commons.ValueHelpField.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Handle F4 event
         */
        onsapshow(
          /**
           * the occurring event
           */
          oEvent: any
        ): void;
        /**
         * Sets a new value for property {@link #getIconDisabledURL iconDisabledURL}.
         *
         * URL of the icon for the value help when disabled. If no parameter is supplied the default icon image
         * will be shown. If an icon font icon is used, this property is ignored.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setIconDisabledURL(
          /**
           * New value for property `iconDisabledURL`
           */
          sIconDisabledURL: sap.ui.core.URI
        ): sap.ui.commons.ValueHelpField;
        /**
         * Sets a new value for property {@link #getIconHoverURL iconHoverURL}.
         *
         * URL of the icon for the value help when hovered. If no parameter is supplied the standard icon image
         * will be shown. If an icon font icon is used, this property is ignored.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setIconHoverURL(
          /**
           * New value for property `iconHoverURL`
           */
          sIconHoverURL: sap.ui.core.URI
        ): sap.ui.commons.ValueHelpField;
        /**
         * Sets a new value for property {@link #getIconURL iconURL}.
         *
         * URL of the standard icon for the value help. If no parameter is supplied the default icon image will
         * be shown. This can be a URI to an image or an icon font URI.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setIconURL(
          /**
           * New value for property `iconURL`
           */
          sIconURL: sap.ui.core.URI
        ): sap.ui.commons.ValueHelpField;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:valueHelpRequest valueHelpRequest} event of
         * this `sap.ui.commons.ValueHelpField`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.commons.ValueHelpField` itself.
         *
         * Event which is fired when the ValueHelp is requested.
         */
        attachValueHelpRequest(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.commons.ValueHelpField` itself
           */
          oListener?: object
        ): sap.ui.commons.ValueHelpField;
      }
      /**
       * @deprecated (since 1.38)
       *
       * different styles for a button.
       */
      enum ButtonStyle {
        /**
         * Accept button (normally green).
         */
        Accept,
        /**
         * default style (no special styling).
         */
        Default,
        /**
         * Button is emphasized.
         */
        Emph,
        /**
         * Reject button (normally red).
         */
        Reject
      }
      /**
       * @deprecated (since 1.48.0) - Moved to sap.ui.unified library. Please use this one.
       *
       * different styles for a ColorPicker.
       */
      enum ColorPickerMode {}
      /**
       * @deprecated (since 1.38)
       *
       * Enumeration of possible HorizontalDivider height settings.
       */
      enum HorizontalDividerHeight {
        /**
         * Divider gets a large top and bottom margin.
         */
        Large,
        /**
         * Divider gets a medium top and bottom margin.
         */
        Medium,
        /**
         * Divider gets no top and bottom margin.
         */
        Ruleheight,
        /**
         * Divider gets a small top and bottom margin.
         */
        Small
      }
      /**
       * @deprecated (since 1.38)
       *
       * Enumeration of possible HorizontalDivider types.
       */
      enum HorizontalDividerType {
        /**
         * Type Area
         */
        Area,
        /**
         * Type Page
         */
        Page
      }
      /**
       * @deprecated (since 1.38)
       *
       * Available label display modes.
       */
      enum LabelDesign {
        /**
         * Displays the label in bold.
         */
        Bold,
        /**
         * Displays the label in normal mode.
         */
        Standard
      }
      /**
       * @deprecated (since 1.38)
       *
       * Determines the visual design of a MenuBar. The feature might be not supported by all themes.
       */
      enum MenuBarDesign {
        /**
         * The MenuBar appears in header design.
         */
        Header,
        /**
         * The MenuBar appears in standard design.
         */
        Standard
      }
      /**
       * @deprecated (since 1.38)
       *
       * [Enter description for MessageType]
       */
      enum MessageType {
        /**
         * Error message
         */
        Error,
        /**
         * Successful message
         */
        Success,
        /**
         * Warning message
         */
        Warning
      }
      /**
       * @deprecated (since 1.38)
       *
       * Distinct paginator event types
       */
      enum PaginatorEvent {
        /**
         * First page event
         */
        First,
        /**
         * Go to page event
         */
        Goto,
        /**
         * Last page event
         */
        Last,
        /**
         * Next page event
         */
        Next,
        /**
         * Previous page event
         */
        Previous
      }
      /**
       * @deprecated (since 1.38)
       *
       * Possible values for the visualization of float values in the RatingIndicator Control.
       */
      enum RatingIndicatorVisualMode {
        /**
         * Values are not rounded.
         */
        Continuous,
        /**
         * Values are rounded to the nearest integer value (e.g. 1.7 -> 2).
         */
        Full,
        /**
         * Values are rounded to the nearest half value (e.g. 1.7 -> 1.5).
         */
        Half
      }
      /**
       * @deprecated (since 1.38)
       *
       * Determines the visual design of a RowRepeater.
       */
      enum RowRepeaterDesign {
        /**
         * The RowRepeater will be displayed without header, toolbar or footer. Background will be transparent.
         */
        BareShell,
        /**
         * The RowRepeater header and footer elements, as well as the row container background, appear solid.
         */
        Standard,
        /**
         * The RowRepeater header and footer elements, as well as the row container background, appear transparent.
         */
        Transparent
      }
      /**
       * @deprecated (since 1.38)
       *
       * Semantic Colors of a text.
       */
      enum TextViewColor {
        /**
         * Critical color
         */
        Critical,
        /**
         * Default color
         */
        Default,
        /**
         * Negative color
         */
        Negative,
        /**
         * Positive color
         */
        Positive
      }
      /**
       * @deprecated (since 1.38)
       *
       * Designs for TextView.
       */
      enum TextViewDesign {
        /**
         * Displays the text in bold letters
         */
        Bold,
        /**
         * Displays the text in header 1 letters.
         */
        H1,
        /**
         * Displays the text in header 2 letters.
         */
        H2,
        /**
         * Displays the text in header 3 letters.
         */
        H3,
        /**
         * Displays the text in header 4 letters.
         */
        H4,
        /**
         * Displays the text in header 5 letters.
         */
        H5,
        /**
         * Displays the text in header 6 letters.
         */
        H6,
        /**
         * Displays the text in italic letters
         */
        Italic,
        /**
         * Displays the text in monospace letters.
         */
        Monospace,
        /**
         * Displays the text in smaller letters.
         */
        Small,
        /**
         * Displays the text in standard letters.
         */
        Standard,
        /**
         * underlined Text
         */
        Underline
      }
      /**
       * @deprecated (since 1.38)
       *
       * Determines the visual design of a Toolbar.
       */
      enum ToolbarDesign {
        /**
         * The included controls have a very light appearance. The feature might be not supported by all themes.
         */
        Flat,
        /**
         * The toolbar elements such as buttons for example have their normal visual design, and the toolbar appears
         * solid. The feature might be not supported by all themes.
         */
        Standard,
        /**
         * The controls included in the toolbar have a normal visual design where the toolbar appears transparent.
         * The feature might be not supported by all themes.
         */
        Transparent
      }
      /**
       * @deprecated (since 1.38)
       *
       * Design of the Toolbar Separator.
       */
      enum ToolbarSeparatorDesign {
        /**
         * 100% height Separator before and after specific controls
         */
        FullHeight,
        /**
         * Standard Separator between controls
         */
        Standard
      }
      /**
       * @deprecated (since 1.38)
       *
       * Selection mode of the tree
       */
      enum TreeSelectionMode {
        /**
         * Behavior of the former Tree. It is possible to select a plurality of nodes via the API.
         */
        Legacy,
        /**
         * Select multiple rows at a time.
         */
        Multi,
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
       * @SINCE 1.7.2
       * @deprecated (since 1.38)
       *
       * States for TriStateCheckBox
       */
      enum TriStateCheckBoxState {
        /**
         * checked value for tri-state checkbox
         */
        Checked,
        /**
         * mixed state for tri-state checkbox
         */
        Mixed,
        /**
         * unchecked, default value for tri-state checkbox
         */
        Unchecked
      }
    }
  }

  interface IUI5DefineDependencyNames {
    "sap/ui/commons/form/Form": undefined;

    "sap/ui/commons/form/FormContainer": undefined;

    "sap/ui/commons/form/FormElement": undefined;

    "sap/ui/commons/form/FormLayout": undefined;

    "sap/ui/commons/form/GridContainerData": undefined;

    "sap/ui/commons/form/GridElementData": undefined;

    "sap/ui/commons/form/GridLayout": undefined;

    "sap/ui/commons/form/ResponsiveLayout": undefined;

    "sap/ui/commons/form/SimpleForm": undefined;

    "sap/ui/commons/layout/AbsoluteLayout": undefined;

    "sap/ui/commons/layout/BorderLayout": undefined;

    "sap/ui/commons/layout/BorderLayoutArea": undefined;

    "sap/ui/commons/layout/HorizontalLayout": undefined;

    "sap/ui/commons/layout/MatrixLayout": undefined;

    "sap/ui/commons/layout/MatrixLayoutCell": undefined;

    "sap/ui/commons/layout/MatrixLayoutRow": undefined;

    "sap/ui/commons/layout/PositionContainer": undefined;

    "sap/ui/commons/layout/ResponsiveFlowLayout": undefined;

    "sap/ui/commons/layout/ResponsiveFlowLayoutData": undefined;

    "sap/ui/commons/layout/VerticalLayout": undefined;

    "sap/ui/commons/Accordion": undefined;

    "sap/ui/commons/AccordionSection": undefined;

    "sap/ui/commons/ApplicationHeader": undefined;

    "sap/ui/commons/Area": undefined;

    "sap/ui/commons/AutoComplete": undefined;

    "sap/ui/commons/Button": undefined;

    "sap/ui/commons/Callout": undefined;

    "sap/ui/commons/CalloutBase": undefined;

    "sap/ui/commons/Carousel": undefined;

    "sap/ui/commons/CheckBox": undefined;

    "sap/ui/commons/ColorPicker": undefined;

    "sap/ui/commons/ComboBox": undefined;

    "sap/ui/commons/DatePicker": undefined;

    "sap/ui/commons/Dialog": undefined;

    "sap/ui/commons/DropdownBox": undefined;

    "sap/ui/commons/FileUploader": undefined;

    "sap/ui/commons/FileUploaderParameter": undefined;

    "sap/ui/commons/FormattedTextView": undefined;

    "sap/ui/commons/HorizontalDivider": undefined;

    "sap/ui/commons/Image": undefined;

    "sap/ui/commons/ImageMap": undefined;

    "sap/ui/commons/InPlaceEdit": undefined;

    "sap/ui/commons/Label": undefined;

    "sap/ui/commons/Link": undefined;

    "sap/ui/commons/ListBox": undefined;

    "sap/ui/commons/Menu": undefined;

    "sap/ui/commons/MenuBar": undefined;

    "sap/ui/commons/MenuButton": undefined;

    "sap/ui/commons/MenuItem": undefined;

    "sap/ui/commons/MenuItemBase": undefined;

    "sap/ui/commons/MenuTextFieldItem": undefined;

    "sap/ui/commons/Message": undefined;

    "sap/ui/commons/MessageBar": undefined;

    "sap/ui/commons/MessageList": undefined;

    "sap/ui/commons/MessageToast": undefined;

    "sap/ui/commons/Paginator": undefined;

    "sap/ui/commons/Panel": undefined;

    "sap/ui/commons/PasswordField": undefined;

    "sap/ui/commons/ProgressIndicator": undefined;

    "sap/ui/commons/RadioButton": undefined;

    "sap/ui/commons/RadioButtonGroup": undefined;

    "sap/ui/commons/RangeSlider": undefined;

    "sap/ui/commons/RatingIndicator": undefined;

    "sap/ui/commons/ResponsiveContainer": undefined;

    "sap/ui/commons/ResponsiveContainerRange": undefined;

    "sap/ui/commons/RichTooltip": undefined;

    "sap/ui/commons/RoadMap": undefined;

    "sap/ui/commons/RoadMapStep": undefined;

    "sap/ui/commons/RowRepeater": undefined;

    "sap/ui/commons/RowRepeaterFilter": undefined;

    "sap/ui/commons/RowRepeaterSorter": undefined;

    "sap/ui/commons/SearchField": undefined;

    "sap/ui/commons/SearchProvider": undefined;

    "sap/ui/commons/SegmentedButton": undefined;

    "sap/ui/commons/Slider": undefined;

    "sap/ui/commons/Splitter": undefined;

    "sap/ui/commons/Tab": undefined;

    "sap/ui/commons/TabStrip": undefined;

    "sap/ui/commons/TextArea": undefined;

    "sap/ui/commons/TextField": undefined;

    "sap/ui/commons/TextView": undefined;

    "sap/ui/commons/Title": undefined;

    "sap/ui/commons/ToggleButton": undefined;

    "sap/ui/commons/Toolbar": undefined;

    "sap/ui/commons/ToolbarSeparator": undefined;

    "sap/ui/commons/Tree": undefined;

    "sap/ui/commons/TreeNode": undefined;

    "sap/ui/commons/TriStateCheckBox": undefined;

    "sap/ui/commons/ValueHelpField": undefined;

    "sap/ui/commons/FormattedTextViewControl": undefined;

    "sap/ui/commons/ToolbarItem": undefined;
  }
}
