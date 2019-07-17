/**
 * This is a Beta version of the OpenUI5 TypeScript Signatures.
 * Significant changes may occur in future versions,
 * including potential breaking changes.
 */
// For Library Version: 1.60.14

declare namespace sap {
  namespace ui {
    /**
     * Suite controls library.
     */
    namespace suite {
      interface TaskCircleOpts extends sap.ui.core.ControlOpts {
        /**
         * Current value of the task circle to be displayed. In dependency of the parameters maxValue and minValue
         * it controls the size of the circle.
         */
        value?: number;

        /**
         * Upper limit of the displayed values. Default is 100.
         */
        maxValue?: number;

        /**
         * Lower limit of the displayed values. Default is 0.
         */
        minValue?: number;

        /**
         * Color of the circle. The default color is red.
         */
        color?: sap.ui.suite.TaskCircleColor;

        /**
         * Event is fired when the user clicks the control.
         */
        press?: Function;

        /**
         * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
         */
        ariaLabelledBy?: sap.ui.core.Control[] | string[];

        /**
         * Association to controls / ids which describe this control (see WAI-ARIA attribute aria-describedby).
         */
        ariaDescribedBy?: sap.ui.core.Control[] | string[];
      }

      interface VerticalProgressIndicatorOpts extends sap.ui.core.ControlOpts {
        /**
         * The numerical value between 0 and 100 which determines the height of the vertical bar. Values higher
         * than 100 will be displayed as 100%, values lower than zero will be displayed as 0%.
         */
        percentage?: number;

        /**
         * Event is fired when the user clicks the control.
         */
        press?: Function;

        /**
         * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
         */
        ariaLabelledBy?: sap.ui.core.Control[] | string[];

        /**
         * Association to controls / ids which describe this control (see WAI-ARIA attribute aria-describedby).
         */
        ariaDescribedBy?: sap.ui.core.Control[] | string[];
      }
      /**
       * @EXPERIMENTAL (since 1.2)
       *
       * This control shows a circle which radius and color depends on the given parameters
       */
      class TaskCircle extends sap.ui.core.Control {
        /**
         * Constructor for a new TaskCircle.
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
          mSettings?: TaskCircleOpts
        );

        /**
         * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
         */
        addAriaDescribedBy(
          /**
           * The ariaDescribedBy to add; if empty, nothing is inserted
           */
          vAriaDescribedBy: sap.ui.core.ID | sap.ui.core.Control
        ): sap.ui.suite.TaskCircle;
        /**
         * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
         */
        addAriaLabelledBy(
          /**
           * The ariaLabelledBy to add; if empty, nothing is inserted
           */
          vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control
        ): sap.ui.suite.TaskCircle;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.suite.TaskCircle`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.suite.TaskCircle` itself.
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
           * Context object to call the event handler with. Defaults to this `sap.ui.suite.TaskCircle` itself
           */
          oListener?: object
        ): sap.ui.suite.TaskCircle;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.ui.suite.TaskCircle`.
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
        ): sap.ui.suite.TaskCircle;
        /**
         * Creates a new subclass of class sap.ui.suite.TaskCircle with name `sClassName` and enriches it with the
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
        ): sap.ui.suite.TaskCircle;
        /**
         * Puts the focus to the control.
         */
        // @ts-ignore
        focus(): void;
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
         * Gets current value of property {@link #getColor color}.
         *
         * Color of the circle. The default color is red.
         *
         * Default value is `Gray`.
         */
        getColor(): sap.ui.suite.TaskCircleColor;
        /**
         * Gets current value of property {@link #getMaxValue maxValue}.
         *
         * Upper limit of the displayed values. Default is 100.
         *
         * Default value is `100`.
         */
        getMaxValue(): number;
        /**
         * Returns a metadata object for class sap.ui.suite.TaskCircle.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getMinValue minValue}.
         *
         * Lower limit of the displayed values. Default is 0.
         *
         * Default value is `0`.
         */
        getMinValue(): number;
        /**
         * Gets current value of property {@link #getValue value}.
         *
         * Current value of the task circle to be displayed. In dependency of the parameters maxValue and minValue
         * it controls the size of the circle.
         *
         * Default value is `0`.
         */
        getValue(): number;
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
         * Sets a new value for property {@link #getColor color}.
         *
         * Color of the circle. The default color is red.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Gray`.
         */
        setColor(
          /**
           * New value for property `color`
           */
          sColor: sap.ui.suite.TaskCircleColor
        ): sap.ui.suite.TaskCircle;
        /**
         * Sets a new value for property {@link #getMaxValue maxValue}.
         *
         * Upper limit of the displayed values. Default is 100.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `100`.
         */
        setMaxValue(
          /**
           * New value for property `maxValue`
           */
          iMaxValue: number
        ): sap.ui.suite.TaskCircle;
        /**
         * Sets a new value for property {@link #getMinValue minValue}.
         *
         * Lower limit of the displayed values. Default is 0.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `0`.
         */
        setMinValue(
          /**
           * New value for property `minValue`
           */
          iMinValue: number
        ): sap.ui.suite.TaskCircle;
        /**
         * Sets a new value for property {@link #getValue value}.
         *
         * Current value of the task circle to be displayed. In dependency of the parameters maxValue and minValue
         * it controls the size of the circle.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `0`.
         */
        setValue(
          /**
           * New value for property `value`
           */
          iValue: number
        ): sap.ui.suite.TaskCircle;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.suite.TaskCircle`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.suite.TaskCircle` itself.
         *
         * Event is fired when the user clicks the control.
         */
        attachPress(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.suite.TaskCircle` itself
           */
          oListener?: object
        ): sap.ui.suite.TaskCircle;
      }
      /**
       * @EXPERIMENTAL (since 1.2)
       *
       * This control shows a vertical progress bar in dependency of the given percentage. Only values between
       * 0 and 100 are valid.
       */
      class VerticalProgressIndicator extends sap.ui.core.Control {
        /**
         * Constructor for a new VerticalProgressIndicator.
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
          mSettings?: VerticalProgressIndicatorOpts
        );

        /**
         * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
         */
        addAriaDescribedBy(
          /**
           * The ariaDescribedBy to add; if empty, nothing is inserted
           */
          vAriaDescribedBy: sap.ui.core.ID | sap.ui.core.Control
        ): sap.ui.suite.VerticalProgressIndicator;
        /**
         * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
         */
        addAriaLabelledBy(
          /**
           * The ariaLabelledBy to add; if empty, nothing is inserted
           */
          vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control
        ): sap.ui.suite.VerticalProgressIndicator;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.suite.VerticalProgressIndicator`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.suite.VerticalProgressIndicator` itself.
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
           * Context object to call the event handler with. Defaults to this `sap.ui.suite.VerticalProgressIndicator`
           * itself
           */
          oListener?: object
        ): sap.ui.suite.VerticalProgressIndicator;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.ui.suite.VerticalProgressIndicator`.
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
        ): sap.ui.suite.VerticalProgressIndicator;
        /**
         * Creates a new subclass of class sap.ui.suite.VerticalProgressIndicator with name `sClassName` and enriches
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
         * Fires event {@link #event:press press} to attached listeners.
         */
        firePress(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ui.suite.VerticalProgressIndicator;
        /**
         * Puts the focus to the control.
         */
        // @ts-ignore
        focus(): void;
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
         * Returns a metadata object for class sap.ui.suite.VerticalProgressIndicator.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getPercentage percentage}.
         *
         * The numerical value between 0 and 100 which determines the height of the vertical bar. Values higher
         * than 100 will be displayed as 100%, values lower than zero will be displayed as 0%.
         */
        getPercentage(): number;
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
         * Property setter for the Percentage, which determines the height of the vertical bar. Values higher than
         * 100 will be displayed as 100%, values lower than zero will be displayed as 0%. A new rendering is not
         * necessary, only the bar will be moved
         */
        setPercentage(
          iPercentage: number
        ): sap.ui.suite.VerticalProgressIndicator;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.suite.VerticalProgressIndicator`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.suite.VerticalProgressIndicator` itself.
         *
         * Event is fired when the user clicks the control.
         */
        attachPress(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.suite.VerticalProgressIndicator`
           * itself
           */
          oListener?: object
        ): sap.ui.suite.VerticalProgressIndicator;
      }
      /**
       * Defined color values for the Task Circle Control
       */
      enum TaskCircleColor {
        /**
         * Default value
         */
        Gray,
        /**
         * Green
         */
        Green,
        /**
         * Red
         */
        Red,
        /**
         * Yellow
         */
        Yellow
      }
    }
  }

  interface IUI5DefineDependencyNames {
    "sap/ui/suite/TaskCircle": undefined;

    "sap/ui/suite/VerticalProgressIndicator": undefined;
  }
}
