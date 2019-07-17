/**
 * This is a Beta version of the OpenUI5 TypeScript Signatures.
 * Significant changes may occur in future versions,
 * including potential breaking changes.
 */
// For Library Version: 1.60.14

declare namespace sap {
  namespace ui {
    /**
     * Unified controls intended for both, mobile and desktop scenarios
     */
    namespace unified {
      /**
       * Controls and helper classes around the calendar control.
       */
      namespace calendar {
        interface DatesRowOpts extends sap.ui.unified.calendar.MonthOpts {
          /**
           * Start date of the row If in rendering phase the date property is not in the range startDate + days, it
           * is set to the start date So after setting the start date the date should be set to be in the range of
           * the start date
           */
          startDate?: object;

          /**
           * number of days displayed
           */
          days?: number;

          /**
           * @SINCE 1.34.0
           *
           * If set the day names are shown in a separate line. If not set the day names are shown inside the single
           * days.
           */
          showDayNamesLine?: boolean;
        }

        interface HeaderOpts extends sap.ui.core.ControlOpts {
          /**
           * @SINCE 1.32.0
           *
           * Text of the first button (normally day)
           */
          textButton0?: string;

          /**
           * @SINCE 1.34.0
           *
           * Additional text of the first button (normally day)
           */
          additionalTextButton0?: string;

          /**
           * @SINCE 1.32.0
           *
           * aria-label of the first button (normally day)
           */
          ariaLabelButton0?: string;

          /**
           * @SINCE 1.32.0
           *
           * If set, the first button will be displayed
           *
           * **Note:** The default is set to false to be compatible to older versions
           */
          visibleButton0?: boolean;

          /**
           * Text of the second button (normally month)
           */
          textButton1?: string;

          /**
           * @SINCE 1.34.0
           *
           * Additional text of the second button (normally month)
           */
          additionalTextButton1?: string;

          /**
           * aria-label of the second button (normally month)
           */
          ariaLabelButton1?: string;

          /**
           * @SINCE 1.32.0
           *
           * If set, the second button will be displayed
           */
          visibleButton1?: boolean;

          /**
           * Text of the third button (normally year)
           */
          textButton2?: string;

          /**
           * @SINCE 1.34.0
           *
           * Additional text of the third button (normally year)
           */
          additionalTextButton2?: string;

          /**
           * aria-label of the third button (normally year)
           */
          ariaLabelButton2?: string;

          /**
           * @SINCE 1.32.0
           *
           * If set, the third button will be displayed
           */
          visibleButton2?: boolean;

          /**
           * Enables the previous button
           */
          enabledPrevious?: boolean;

          /**
           * Enables the Next button
           */
          enabledNext?: boolean;

          /**
           * Previous button pressed
           */
          pressPrevious?: Function;

          /**
           * Next button pressed
           */
          pressNext?: Function;

          /**
           * @SINCE 1.32.0
           *
           * First button pressed (normally day)
           */
          pressButton0?: Function;

          /**
           * Second button pressed (normally month)
           */
          pressButton1?: Function;

          /**
           * Third button pressed (normally year)
           */
          pressButton2?: Function;
        }

        interface MonthOpts extends sap.ui.core.ControlOpts {
          /**
           * A date as JavaScript Date object. The month including this date is rendered and this date is focused
           * initially (if no other focus is set).
           */
          date?: object;

          /**
           * If set, interval selection is allowed
           */
          intervalSelection?: boolean;

          /**
           * If set, only a single date or interval, if intervalSelection is enabled, can be selected
           */
          singleSelection?: boolean;

          /**
           * If set, a header with the month name is shown
           */
          showHeader?: boolean;

          /**
           * @SINCE 1.28.9
           *
           * If set, the first day of the displayed week is this day. Valid values are 0 to 6. If not a valid value
           * is set, the default of the used locale is used.
           */
          firstDayOfWeek?: number;

          /**
           * @SINCE 1.28.9
           *
           * If set, the provided weekdays are displayed as non-working days. Valid values inside the array are 0
           * to 6. If not set, the weekend defined in the locale settings is displayed as non-working days.
           */
          nonWorkingDays?: number[];

          /**
           * @SINCE 1.34.0
           *
           * If set, the calendar type is used for display. If not set, the calendar type of the global configuration
           * is used.
           */
          primaryCalendarType?: sap.ui.core.CalendarType;

          /**
           * @SINCE 1.34.0
           *
           * If set, the days are also displayed in this calendar type If not set, the dates are only displayed in
           * the primary calendar type
           */
          secondaryCalendarType?: sap.ui.core.CalendarType;

          /**
           * @SINCE 1.38.0
           *
           * Width of Month
           */
          width?: sap.ui.core.CSSSize;

          /**
           * @SINCE 1.48
           *
           * Determines whether the week numbers in the months are displayed.
           *
           * **Note:** For Islamic calendars, the week numbers are not displayed regardless of what is set to this
           * property.
           */
          showWeekNumbers?: boolean;

          /**
           * Date selection changed
           */
          select?: Function;

          /**
           * Date focus changed
           */
          focus?: Function;

          /**
           * @SINCE 1.60
           *
           * Fired when a week number selection is changed. By default, choosing the week number will select the corresponding
           * week. If the week has already been selected, choosing the week number will deselect it.
           *
           * The default behavior can be prevented using the `preventDefault` method.
           *
           * **Note:** Works for Gregorian calendars only and when `intervalSelection` is set to `true`.
           */
          weekNumberSelect?: Function;

          /**
           * Date Ranges for selected dates of the DatePicker
           */
          selectedDates?: sap.ui.unified.DateRange[] | sap.ui.unified.DateRange;

          /**
           * `DateRange` with type to visualize special days in the Calendar.
           *
           * **Note:** If one day is assigned to more than one DateTypeRange, only the first one will be used. The
           * only exception is when one of the types is `NonWorking`, then you can have both `NonWorking` and the
           * other type. For example, you can have `NonWorking` + `Type01` but you can't have `Type01` + `Type02`.
           */
          specialDates?:
            | sap.ui.unified.DateTypeRange[]
            | sap.ui.unified.DateTypeRange;

          /**
           * @SINCE 1.38.0
           *
           * Date Ranges for disabled dates
           */
          disabledDates?: sap.ui.unified.DateRange[] | sap.ui.unified.DateRange;

          /**
           * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
           */
          ariaLabelledBy?: sap.ui.core.Control[] | string[];

          /**
           * @SINCE 1.38.5
           *
           * Association to the `CalendarLegend` explaining the colors of the `specialDates`.
           *
           * **Note** The legend does not have to be rendered but must exist, and all required types must be assigned.
           */
          legend?: sap.ui.unified.CalendarLegend | string;
        }

        interface MonthPickerOpts extends sap.ui.core.ControlOpts {
          /**
           * The month is initial focused and selected The value must be between 0 and 11
           */
          month?: number;

          /**
           * @SINCE 1.30.0
           *
           * number of displayed months The value must be between 1 and 12
           */
          months?: number;

          /**
           * @SINCE 1.30.0
           *
           * number of months in each row The value must be between 0 and 12 (0 means just to have all months in one
           * row, independent of the number)
           */
          columns?: number;

          /**
           * @SINCE 1.34.0
           *
           * If set, the calendar type is used for display. If not set, the calendar type of the global configuration
           * is used.
           */
          primaryCalendarType?: sap.ui.core.CalendarType;

          /**
           * Month selection changed
           */
          select?: Function;

          /**
           * @SINCE 1.38.0
           *
           * If less than 12 months are displayed the `pageChange` event is fired if the displayed months are changed
           * by user navigation.
           */
          pageChange?: Function;
        }

        interface MonthsRowOpts extends sap.ui.core.ControlOpts {
          /**
           * A date as JavaScript Date object. The month including this date is rendered and this date is focused
           * initially (if no other focus is set). If the date property is not in the range `startDate` + `months`
           * in the rendering phase, it is set to the `startDate`. So after setting the `startDate` the date should
           * be set to be in the visible range.
           */
          date?: object;

          /**
           * Start date, as JavaScript Date object, of the row. The month of this date is the first month of the displayed
           * row.
           */
          startDate?: object;

          /**
           * Number of months displayed
           */
          months?: number;

          /**
           * If set, interval selection is allowed
           */
          intervalSelection?: boolean;

          /**
           * If set, only a single month or interval, if intervalSelection is enabled, can be selected
           *
           * **Note:** Selection of multiple intervals is not supported in the current version.
           */
          singleSelection?: boolean;

          /**
           * If set, a header with the years is shown to visualize what month belongs to what year.
           */
          showHeader?: boolean;

          /**
           * Month selection changed
           */
          select?: Function;

          /**
           * Month focus changed
           */
          focus?: Function;

          /**
           * Date ranges for selected dates. If `singleSelection` is set, only the first entry is used.
           *
           * **Note:** Even if only one day is selected, the whole corresponding month is selected.
           */
          selectedDates?: sap.ui.unified.DateRange[] | sap.ui.unified.DateRange;

          /**
           * Date ranges with type to visualize special months in the row. If one day is assigned to more than one
           * type, only the first one will be used.
           *
           * **Note:** Even if only one day is set as a special day, the whole corresponding month is displayed in
           * this way.
           */
          specialDates?:
            | sap.ui.unified.DateTypeRange[]
            | sap.ui.unified.DateTypeRange;

          /**
           * Association to controls / IDs which label this control (see WAI-ARIA attribute aria-labelledby).
           */
          ariaLabelledBy?: sap.ui.core.Control[] | string[];

          /**
           * @SINCE 1.38.5
           *
           * Association to the `CalendarLegend` explaining the colors of the `specialDates`.
           *
           * **Note** The legend does not have to be rendered but must exist, and all required types must be assigned.
           */
          legend?: sap.ui.unified.CalendarLegend | string;
        }

        interface TimesRowOpts extends sap.ui.core.ControlOpts {
          /**
           * A date as JavaScript Date object. The month including this date is rendered and this date is focused
           * initially (if no other focus is set). If the date property is not in the range `startDate` + `items`
           * in the rendering phase, it is set to the `startDate`. So after setting the `startDate` the date should
           * be set to be in the visible range.
           */
          date?: object;

          /**
           * Start date, as JavaScript Date object, of the row.
           */
          startDate?: object;

          /**
           * Number of time items displayed
           */
          items?: number;

          /**
           * Size of on time interval in minutes, default is 60 minutes.
           *
           * **Note:** the start of the interval calculation is always `startDat` at 00:00.
           *
           * An interval longer than 720 minutes is not allowed. Please use the `DatesRow` instead.
           *
           * A day must be divisible by this interval size. One interval must not include more than one day.
           */
          intervalMinutes?: number;

          /**
           * If set, interval selection is allowed
           */
          intervalSelection?: boolean;

          /**
           * If set, only a single month or interval, if intervalSelection is enabled, can be selected
           *
           * **Note:** Selection of multiple intervals is not supported in the current version.
           */
          singleSelection?: boolean;

          /**
           * If set, a header with the years is shown to visualize what month belongs to what year.
           */
          showHeader?: boolean;

          /**
           * Time selection changed
           */
          select?: Function;

          /**
           * Time focus changed
           */
          focus?: Function;

          /**
           * Date ranges for selected dates. If `singleSelection` is set, only the first entry is used.
           */
          selectedDates?: sap.ui.unified.DateRange[] | sap.ui.unified.DateRange;

          /**
           * Date ranges with type to visualize special item in the row. If one day is assigned to more than one type,
           * only the first one will be used.
           */
          specialDates?:
            | sap.ui.unified.DateTypeRange[]
            | sap.ui.unified.DateTypeRange;

          /**
           * Association to controls / IDs which label this control (see WAI-ARIA attribute aria-labelledby).
           */
          ariaLabelledBy?: sap.ui.core.Control[] | string[];

          /**
           * @SINCE 1.38.5
           *
           * Association to the `CalendarLegend` explaining the colors of the `specialDates`.
           *
           * **Note** The legend does not have to be rendered but must exist, and all required types must be assigned.
           */
          legend?: sap.ui.unified.CalendarLegend | string;
        }

        interface YearPickerOpts extends sap.ui.core.ControlOpts {
          /**
           * @deprecated (since 1.34.0) - replaced by `date` property
           *
           * The year is initial focused and selected The value must be between 0 and 9999
           */
          year?: number;

          /**
           * @SINCE 1.30.0
           *
           * number of displayed years
           */
          years?: number;

          /**
           * @SINCE 1.30.0
           *
           * number of years in each row 0 means just to have all years in one row, independent of the number
           */
          columns?: number;

          /**
           * @SINCE 1.34.0
           *
           * Date as JavaScript Date object. For this date a `YearPicker` is rendered. If a Year is selected the date
           * is updated with the start date of the selected year (depending on the calendar type).
           */
          date?: object;

          /**
           * @SINCE 1.34.0
           *
           * If set, the calendar type is used for display. If not set, the calendar type of the global configuration
           * is used.
           */
          primaryCalendarType?: sap.ui.core.CalendarType;

          /**
           * Month selection changed
           */
          select?: Function;

          /**
           * @SINCE 1.38.0
           *
           * The `pageChange` event is fired if the displayed years are changed by user navigation.
           */
          pageChange?: Function;
        }
        /**
         * @SINCE 1.30.0
         *
         * renders a row of days with ItemNavigation This is used inside the calendar. Not for stand alone usage
         * If used inside the calendar the properties and aggregation are directly taken from the parent (To not
         * duplicate and sync DateRanges and so on...)
         */
        class DatesRow extends sap.ui.unified.calendar.Month {
          /**
           * Constructor for a new calendar/DatesRow.
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
            mSettings?: DatesRowOpts
          );

          /**
           * displays the a given date without setting the focus
           *
           * Property `date` date to be focused or displayed. It must be in the displayed date range beginning with
           * `startDate` and `days` days So set this properties before setting the date.
           */
          // @ts-ignore
          displayDate(
            /**
             * JavaScript date object for focused date.
             */
            oDate: object
          ): sap.ui.unified.calendar.DatesRow;
          /**
           * Creates a new subclass of class sap.ui.unified.calendar.DatesRow with name `sClassName` and enriches
           * it with the information contained in `oClassInfo`.
           *
           * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.unified.calendar.Month.extend}.
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
           * Gets current value of property {@link #getDays days}.
           *
           * number of days displayed
           *
           * Default value is `7`.
           */
          getDays(): number;
          /**
           * Returns a metadata object for class sap.ui.unified.calendar.DatesRow.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.base.Metadata;
          /**
           * @SINCE 1.34.0
           *
           * Gets current value of property {@link #getShowDayNamesLine showDayNamesLine}.
           *
           * If set the day names are shown in a separate line. If not set the day names are shown inside the single
           * days.
           *
           * Default value is `true`.
           */
          getShowDayNamesLine(): boolean;
          /**
           * Gets current value of property {@link #getStartDate startDate}.
           *
           * Start date of the row If in rendering phase the date property is not in the range startDate + days, it
           * is set to the start date So after setting the start date the date should be set to be in the range of
           * the start date
           */
          getStartDate(): object;
          /**
           * Setter for property `date`.
           *
           * Property `date` date to be focused or displayed. It must be in the displayed date range beginning with
           * `startDate` and `days` days So set this properties before setting the date.
           */
          // @ts-ignore
          setDate(
            /**
             * JavaScript date object for start date.
             */
            oDate: object
          ): sap.ui.unified.calendar.DatesRow;
          /**
           * Sets a new value for property {@link #getDays days}.
           *
           * number of days displayed
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `7`.
           */
          setDays(
            /**
             * New value for property `days`
             */
            iDays: number
          ): sap.ui.unified.calendar.DatesRow;
          /**
           * Setter for property `firstDayOfWeek`.
           *
           * Property `firstDayOfWeek` is not supported in `sap.ui.unified.calendar.DatesRow` control.
           */
          // @ts-ignore
          setFirstDayOfWeek(
            /**
             * The first day of the week
             */
            iFirstDayOfWeek: number
          ): sap.ui.unified.calendar.DatesRow;
          /**
           * @SINCE 1.34.0
           *
           * Sets a new value for property {@link #getShowDayNamesLine showDayNamesLine}.
           *
           * If set the day names are shown in a separate line. If not set the day names are shown inside the single
           * days.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `true`.
           */
          setShowDayNamesLine(
            /**
             * New value for property `showDayNamesLine`
             */
            bShowDayNamesLine: boolean
          ): sap.ui.unified.calendar.DatesRow;
          /**
           * Sets a new value for property {@link #getStartDate startDate}.
           *
           * Start date of the row If in rendering phase the date property is not in the range startDate + days, it
           * is set to the start date So after setting the start date the date should be set to be in the range of
           * the start date
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setStartDate(
            /**
             * New value for property `startDate`
             */
            oStartDate: object
          ): sap.ui.unified.calendar.DatesRow;
        }
        /**
         * @SINCE 1.28.0
         *
         * renders a calendar header
         *
         * The calendar header consists of 3 buttons where the text can be set and a previous and a next button.
         * In the normal calendar the first button contains the displayed day, the second button the displayed month
         * and the third button the displayed year.
         *
         * **Note:** This is used inside the calendar. Not for standalone usage
         */
        class Header extends sap.ui.core.Control {
          /**
           * Constructor for a new Header.
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
            mSettings?: HeaderOpts
          );

          /**
           * @SINCE 1.32.0
           *
           * Attaches event handler `fnFunction` to the {@link #event:pressButton0 pressButton0} event of this `sap.ui.unified.calendar.Header`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ui.unified.calendar.Header` itself.
           *
           * First button pressed (normally day)
           */
          attachPressButton0(
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
             * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.Header` itself
             */
            oListener?: object
          ): sap.ui.unified.calendar.Header;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:pressButton1 pressButton1} event of this `sap.ui.unified.calendar.Header`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ui.unified.calendar.Header` itself.
           *
           * Second button pressed (normally month)
           */
          attachPressButton1(
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
             * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.Header` itself
             */
            oListener?: object
          ): sap.ui.unified.calendar.Header;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:pressButton2 pressButton2} event of this `sap.ui.unified.calendar.Header`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ui.unified.calendar.Header` itself.
           *
           * Third button pressed (normally year)
           */
          attachPressButton2(
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
             * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.Header` itself
             */
            oListener?: object
          ): sap.ui.unified.calendar.Header;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:pressNext pressNext} event of this `sap.ui.unified.calendar.Header`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ui.unified.calendar.Header` itself.
           *
           * Next button pressed
           */
          attachPressNext(
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
             * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.Header` itself
             */
            oListener?: object
          ): sap.ui.unified.calendar.Header;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:pressPrevious pressPrevious} event of this `sap.ui.unified.calendar.Header`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ui.unified.calendar.Header` itself.
           *
           * Previous button pressed
           */
          attachPressPrevious(
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
             * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.Header` itself
             */
            oListener?: object
          ): sap.ui.unified.calendar.Header;
          /**
           * @SINCE 1.32.0
           *
           * Detaches event handler `fnFunction` from the {@link #event:pressButton0 pressButton0} event of this `sap.ui.unified.calendar.Header`.
           *
           * The passed function and listener object must match the ones used for event registration.
           */
          detachPressButton0(
            /**
             * The function to be called, when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object on which the given function had to be called
             */
            oListener?: object
          ): sap.ui.unified.calendar.Header;
          /**
           * Detaches event handler `fnFunction` from the {@link #event:pressButton1 pressButton1} event of this `sap.ui.unified.calendar.Header`.
           *
           * The passed function and listener object must match the ones used for event registration.
           */
          detachPressButton1(
            /**
             * The function to be called, when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object on which the given function had to be called
             */
            oListener?: object
          ): sap.ui.unified.calendar.Header;
          /**
           * Detaches event handler `fnFunction` from the {@link #event:pressButton2 pressButton2} event of this `sap.ui.unified.calendar.Header`.
           *
           * The passed function and listener object must match the ones used for event registration.
           */
          detachPressButton2(
            /**
             * The function to be called, when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object on which the given function had to be called
             */
            oListener?: object
          ): sap.ui.unified.calendar.Header;
          /**
           * Detaches event handler `fnFunction` from the {@link #event:pressNext pressNext} event of this `sap.ui.unified.calendar.Header`.
           *
           * The passed function and listener object must match the ones used for event registration.
           */
          detachPressNext(
            /**
             * The function to be called, when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object on which the given function had to be called
             */
            oListener?: object
          ): sap.ui.unified.calendar.Header;
          /**
           * Detaches event handler `fnFunction` from the {@link #event:pressPrevious pressPrevious} event of this
           * `sap.ui.unified.calendar.Header`.
           *
           * The passed function and listener object must match the ones used for event registration.
           */
          detachPressPrevious(
            /**
             * The function to be called, when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object on which the given function had to be called
             */
            oListener?: object
          ): sap.ui.unified.calendar.Header;
          /**
           * Creates a new subclass of class sap.ui.unified.calendar.Header with name `sClassName` and enriches it
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
           * @SINCE 1.32.0
           *
           * Fires event {@link #event:pressButton0 pressButton0} to attached listeners.
           */
          firePressButton0(
            /**
             * Parameters to pass along with the event
             */
            mParameters?: object
          ): sap.ui.unified.calendar.Header;
          /**
           * Fires event {@link #event:pressButton1 pressButton1} to attached listeners.
           */
          firePressButton1(
            /**
             * Parameters to pass along with the event
             */
            mParameters?: object
          ): sap.ui.unified.calendar.Header;
          /**
           * Fires event {@link #event:pressButton2 pressButton2} to attached listeners.
           */
          firePressButton2(
            /**
             * Parameters to pass along with the event
             */
            mParameters?: object
          ): sap.ui.unified.calendar.Header;
          /**
           * Fires event {@link #event:pressNext pressNext} to attached listeners.
           */
          firePressNext(
            /**
             * Parameters to pass along with the event
             */
            mParameters?: object
          ): sap.ui.unified.calendar.Header;
          /**
           * Fires event {@link #event:pressPrevious pressPrevious} to attached listeners.
           */
          firePressPrevious(
            /**
             * Parameters to pass along with the event
             */
            mParameters?: object
          ): sap.ui.unified.calendar.Header;
          /**
           * @SINCE 1.34.0
           *
           * Gets current value of property {@link #getAdditionalTextButton0 additionalTextButton0}.
           *
           * Additional text of the first button (normally day)
           */
          getAdditionalTextButton0(): string;
          /**
           * @SINCE 1.34.0
           *
           * Gets current value of property {@link #getAdditionalTextButton1 additionalTextButton1}.
           *
           * Additional text of the second button (normally month)
           */
          getAdditionalTextButton1(): string;
          /**
           * @SINCE 1.34.0
           *
           * Gets current value of property {@link #getAdditionalTextButton2 additionalTextButton2}.
           *
           * Additional text of the third button (normally year)
           */
          getAdditionalTextButton2(): string;
          /**
           * @SINCE 1.32.0
           *
           * Gets current value of property {@link #getAriaLabelButton0 ariaLabelButton0}.
           *
           * aria-label of the first button (normally day)
           */
          getAriaLabelButton0(): string;
          /**
           * Gets current value of property {@link #getAriaLabelButton1 ariaLabelButton1}.
           *
           * aria-label of the second button (normally month)
           */
          getAriaLabelButton1(): string;
          /**
           * Gets current value of property {@link #getAriaLabelButton2 ariaLabelButton2}.
           *
           * aria-label of the third button (normally year)
           */
          getAriaLabelButton2(): string;
          /**
           * Gets current value of property {@link #getEnabledNext enabledNext}.
           *
           * Enables the Next button
           *
           * Default value is `true`.
           */
          getEnabledNext(): boolean;
          /**
           * Gets current value of property {@link #getEnabledPrevious enabledPrevious}.
           *
           * Enables the previous button
           *
           * Default value is `true`.
           */
          getEnabledPrevious(): boolean;
          /**
           * Returns a metadata object for class sap.ui.unified.calendar.Header.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.base.Metadata;
          /**
           * @SINCE 1.32.0
           *
           * Gets current value of property {@link #getTextButton0 textButton0}.
           *
           * Text of the first button (normally day)
           */
          getTextButton0(): string;
          /**
           * Gets current value of property {@link #getTextButton1 textButton1}.
           *
           * Text of the second button (normally month)
           */
          getTextButton1(): string;
          /**
           * Gets current value of property {@link #getTextButton2 textButton2}.
           *
           * Text of the third button (normally year)
           */
          getTextButton2(): string;
          /**
           * @SINCE 1.32.0
           *
           * Gets current value of property {@link #getVisibleButton0 visibleButton0}.
           *
           * If set, the first button will be displayed
           *
           * **Note:** The default is set to false to be compatible to older versions
           *
           * Default value is `false`.
           */
          getVisibleButton0(): boolean;
          /**
           * @SINCE 1.32.0
           *
           * Gets current value of property {@link #getVisibleButton1 visibleButton1}.
           *
           * If set, the second button will be displayed
           *
           * Default value is `true`.
           */
          getVisibleButton1(): boolean;
          /**
           * @SINCE 1.32.0
           *
           * Gets current value of property {@link #getVisibleButton2 visibleButton2}.
           *
           * If set, the third button will be displayed
           *
           * Default value is `true`.
           */
          getVisibleButton2(): boolean;
          /**
           * @SINCE 1.34.0
           *
           * Sets a new value for property {@link #getAdditionalTextButton0 additionalTextButton0}.
           *
           * Additional text of the first button (normally day)
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setAdditionalTextButton0(
            /**
             * New value for property `additionalTextButton0`
             */
            sAdditionalTextButton0: string
          ): sap.ui.unified.calendar.Header;
          /**
           * @SINCE 1.34.0
           *
           * Sets a new value for property {@link #getAdditionalTextButton1 additionalTextButton1}.
           *
           * Additional text of the second button (normally month)
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setAdditionalTextButton1(
            /**
             * New value for property `additionalTextButton1`
             */
            sAdditionalTextButton1: string
          ): sap.ui.unified.calendar.Header;
          /**
           * @SINCE 1.34.0
           *
           * Sets a new value for property {@link #getAdditionalTextButton2 additionalTextButton2}.
           *
           * Additional text of the third button (normally year)
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setAdditionalTextButton2(
            /**
             * New value for property `additionalTextButton2`
             */
            sAdditionalTextButton2: string
          ): sap.ui.unified.calendar.Header;
          /**
           * @SINCE 1.32.0
           *
           * Sets a new value for property {@link #getAriaLabelButton0 ariaLabelButton0}.
           *
           * aria-label of the first button (normally day)
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setAriaLabelButton0(
            /**
             * New value for property `ariaLabelButton0`
             */
            sAriaLabelButton0: string
          ): sap.ui.unified.calendar.Header;
          /**
           * Sets a new value for property {@link #getAriaLabelButton1 ariaLabelButton1}.
           *
           * aria-label of the second button (normally month)
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setAriaLabelButton1(
            /**
             * New value for property `ariaLabelButton1`
             */
            sAriaLabelButton1: string
          ): sap.ui.unified.calendar.Header;
          /**
           * Sets a new value for property {@link #getAriaLabelButton2 ariaLabelButton2}.
           *
           * aria-label of the third button (normally year)
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setAriaLabelButton2(
            /**
             * New value for property `ariaLabelButton2`
             */
            sAriaLabelButton2: string
          ): sap.ui.unified.calendar.Header;
          /**
           * Sets a new value for property {@link #getEnabledNext enabledNext}.
           *
           * Enables the Next button
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `true`.
           */
          setEnabledNext(
            /**
             * New value for property `enabledNext`
             */
            bEnabledNext: boolean
          ): sap.ui.unified.calendar.Header;
          /**
           * Sets a new value for property {@link #getEnabledPrevious enabledPrevious}.
           *
           * Enables the previous button
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `true`.
           */
          setEnabledPrevious(
            /**
             * New value for property `enabledPrevious`
             */
            bEnabledPrevious: boolean
          ): sap.ui.unified.calendar.Header;
          /**
           * @SINCE 1.32.0
           *
           * Sets a new value for property {@link #getTextButton0 textButton0}.
           *
           * Text of the first button (normally day)
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setTextButton0(
            /**
             * New value for property `textButton0`
             */
            sTextButton0: string
          ): sap.ui.unified.calendar.Header;
          /**
           * Sets a new value for property {@link #getTextButton1 textButton1}.
           *
           * Text of the second button (normally month)
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setTextButton1(
            /**
             * New value for property `textButton1`
             */
            sTextButton1: string
          ): sap.ui.unified.calendar.Header;
          /**
           * Sets a new value for property {@link #getTextButton2 textButton2}.
           *
           * Text of the third button (normally year)
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setTextButton2(
            /**
             * New value for property `textButton2`
             */
            sTextButton2: string
          ): sap.ui.unified.calendar.Header;
          /**
           * @SINCE 1.32.0
           *
           * Sets a new value for property {@link #getVisibleButton0 visibleButton0}.
           *
           * If set, the first button will be displayed
           *
           * **Note:** The default is set to false to be compatible to older versions
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `false`.
           */
          setVisibleButton0(
            /**
             * New value for property `visibleButton0`
             */
            bVisibleButton0: boolean
          ): sap.ui.unified.calendar.Header;
          /**
           * @SINCE 1.32.0
           *
           * Sets a new value for property {@link #getVisibleButton1 visibleButton1}.
           *
           * If set, the second button will be displayed
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `true`.
           */
          setVisibleButton1(
            /**
             * New value for property `visibleButton1`
             */
            bVisibleButton1: boolean
          ): sap.ui.unified.calendar.Header;
          /**
           * @SINCE 1.32.0
           *
           * Sets a new value for property {@link #getVisibleButton2 visibleButton2}.
           *
           * If set, the third button will be displayed
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `true`.
           */
          setVisibleButton2(
            /**
             * New value for property `visibleButton2`
             */
            bVisibleButton2: boolean
          ): sap.ui.unified.calendar.Header;
          /**
           * @SINCE 1.32.0
           *
           * Attaches event handler `fnFunction` to the {@link #event:pressButton0 pressButton0} event of this `sap.ui.unified.calendar.Header`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ui.unified.calendar.Header` itself.
           *
           * First button pressed (normally day)
           */
          attachPressButton0(
            /**
             * The function to be called when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.Header` itself
             */
            oListener?: object
          ): sap.ui.unified.calendar.Header;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:pressButton1 pressButton1} event of this `sap.ui.unified.calendar.Header`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ui.unified.calendar.Header` itself.
           *
           * Second button pressed (normally month)
           */
          attachPressButton1(
            /**
             * The function to be called when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.Header` itself
             */
            oListener?: object
          ): sap.ui.unified.calendar.Header;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:pressButton2 pressButton2} event of this `sap.ui.unified.calendar.Header`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ui.unified.calendar.Header` itself.
           *
           * Third button pressed (normally year)
           */
          attachPressButton2(
            /**
             * The function to be called when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.Header` itself
             */
            oListener?: object
          ): sap.ui.unified.calendar.Header;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:pressNext pressNext} event of this `sap.ui.unified.calendar.Header`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ui.unified.calendar.Header` itself.
           *
           * Next button pressed
           */
          attachPressNext(
            /**
             * The function to be called when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.Header` itself
             */
            oListener?: object
          ): sap.ui.unified.calendar.Header;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:pressPrevious pressPrevious} event of this `sap.ui.unified.calendar.Header`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ui.unified.calendar.Header` itself.
           *
           * Previous button pressed
           */
          attachPressPrevious(
            /**
             * The function to be called when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.Header` itself
             */
            oListener?: object
          ): sap.ui.unified.calendar.Header;
        }
        /**
         * @SINCE 1.28.0
         *
         * renders a month with ItemNavigation This is used inside the calendar. Not for stand alone usage If used
         * inside the calendar the properties and aggregation are directly taken from the parent (To not duplicate
         * and sync DateRanges and so on...)
         */
        class Month extends sap.ui.core.Control {
          /**
           * Constructor for a new calendar/Month.
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
            mSettings?: MonthOpts
          );

          /**
           * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
           */
          addAriaLabelledBy(
            /**
             * The ariaLabelledBy to add; if empty, nothing is inserted
             */
            vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control
          ): sap.ui.unified.calendar.Month;
          /**
           * @SINCE 1.38.0
           *
           * Adds some disabledDate to the aggregation {@link #getDisabledDates disabledDates}.
           */
          addDisabledDate(
            /**
             * The disabledDate to add; if empty, nothing is inserted
             */
            oDisabledDate: sap.ui.unified.DateRange
          ): sap.ui.unified.calendar.Month;
          /**
           * Adds some selectedDate to the aggregation {@link #getSelectedDates selectedDates}.
           */
          addSelectedDate(
            /**
             * The selectedDate to add; if empty, nothing is inserted
             */
            oSelectedDate: sap.ui.unified.DateRange
          ): sap.ui.unified.calendar.Month;
          /**
           * Adds some specialDate to the aggregation {@link #getSpecialDates specialDates}.
           */
          addSpecialDate(
            /**
             * The specialDate to add; if empty, nothing is inserted
             */
            oSpecialDate: sap.ui.unified.DateTypeRange
          ): sap.ui.unified.calendar.Month;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:focus focus} event of this `sap.ui.unified.calendar.Month`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ui.unified.calendar.Month` itself.
           *
           * Date focus changed
           */
          attachFocus(
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
             * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.Month` itself
             */
            oListener?: object
          ): sap.ui.unified.calendar.Month;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.calendar.Month`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ui.unified.calendar.Month` itself.
           *
           * Date selection changed
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
             * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.Month` itself
             */
            oListener?: object
          ): sap.ui.unified.calendar.Month;
          /**
           * @SINCE 1.60
           *
           * Attaches event handler `fnFunction` to the {@link #event:weekNumberSelect weekNumberSelect} event of
           * this `sap.ui.unified.calendar.Month`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ui.unified.calendar.Month` itself.
           *
           * Fired when a week number selection is changed. By default, choosing the week number will select the corresponding
           * week. If the week has already been selected, choosing the week number will deselect it.
           *
           * The default behavior can be prevented using the `preventDefault` method.
           *
           * **Note:** Works for Gregorian calendars only and when `intervalSelection` is set to `true`.
           */
          attachWeekNumberSelect(
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
             * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.Month` itself
             */
            oListener?: object
          ): sap.ui.unified.calendar.Month;
          /**
           * checks if a date is focusable in the current rendered output. So if not rendered or in other month it
           * is not focusable.
           */
          checkDateFocusable(
            /**
             * JavaScript date object for focused date.
             */
            oDate: object
          ): boolean;
          /**
           * @SINCE 1.38.0
           *
           * Destroys all the disabledDates in the aggregation {@link #getDisabledDates disabledDates}.
           */
          destroyDisabledDates(): sap.ui.unified.calendar.Month;
          /**
           * Destroys all the selectedDates in the aggregation {@link #getSelectedDates selectedDates}.
           */
          destroySelectedDates(): sap.ui.unified.calendar.Month;
          /**
           * Destroys all the specialDates in the aggregation {@link #getSpecialDates specialDates}.
           */
          destroySpecialDates(): sap.ui.unified.calendar.Month;
          /**
           * Detaches event handler `fnFunction` from the {@link #event:focus focus} event of this `sap.ui.unified.calendar.Month`.
           *
           * The passed function and listener object must match the ones used for event registration.
           */
          detachFocus(
            /**
             * The function to be called, when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object on which the given function had to be called
             */
            oListener?: object
          ): sap.ui.unified.calendar.Month;
          /**
           * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.ui.unified.calendar.Month`.
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
          ): sap.ui.unified.calendar.Month;
          /**
           * @SINCE 1.60
           *
           * Detaches event handler `fnFunction` from the {@link #event:weekNumberSelect weekNumberSelect} event of
           * this `sap.ui.unified.calendar.Month`.
           *
           * The passed function and listener object must match the ones used for event registration.
           */
          detachWeekNumberSelect(
            /**
             * The function to be called, when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object on which the given function had to be called
             */
            oListener?: object
          ): sap.ui.unified.calendar.Month;
          /**
           * displays the month of a given date without setting the focus
           */
          displayDate(
            /**
             * JavaScript date object for focused date.
             */
            oDate: object
          ): sap.ui.unified.calendar.Month;
          /**
           * Creates a new subclass of class sap.ui.unified.calendar.Month with name `sClassName` and enriches it
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
           * Fires event {@link #event:focus focus} to attached listeners.
           */
          fireFocus(
            /**
             * Parameters to pass along with the event
             */
            mParameters?: {
              /**
               * focused date
               */
              date?: object;
              /**
               * focused date is in an other month that the displayed one
               */
              otherMonth?: boolean;
              /**
               * focused date is set to the same as before (date in other month clicked)
               */
              restoreOldDate?: boolean;
            }
          ): sap.ui.unified.calendar.Month;
          /**
           * Fires event {@link #event:select select} to attached listeners.
           */
          fireSelect(
            /**
             * Parameters to pass along with the event
             */
            mParameters?: object
          ): sap.ui.unified.calendar.Month;
          /**
           * @SINCE 1.60
           *
           * Fires event {@link #event:weekNumberSelect weekNumberSelect} to attached listeners.
           *
           * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event
           * object.
           */
          fireWeekNumberSelect(
            /**
             * Parameters to pass along with the event
             */
            mParameters?: {
              /**
               * The selected week number.
               */
              weekNumber?: number;
              /**
               * The days of the corresponding week that are selected or deselected.
               *
               * **Note:** Will be set to `null` if that week is being deselected.
               */
              weekDays?: sap.ui.unified.DateRange;
            }
          ): boolean;
          /**
           * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
           * ariaLabelledBy}.
           */
          getAriaLabelledBy(): sap.ui.core.ID[];
          /**
           * Gets current value of property {@link #getDate date}.
           *
           * A date as JavaScript Date object. The month including this date is rendered and this date is focused
           * initially (if no other focus is set).
           */
          getDate(): object;
          /**
           * @SINCE 1.38.0
           *
           * Gets content of aggregation {@link #getDisabledDates disabledDates}.
           *
           * Date Ranges for disabled dates
           */
          getDisabledDates(): sap.ui.unified.DateRange[];
          /**
           * @SINCE 1.28.9
           *
           * Gets current value of property {@link #getFirstDayOfWeek firstDayOfWeek}.
           *
           * If set, the first day of the displayed week is this day. Valid values are 0 to 6. If not a valid value
           * is set, the default of the used locale is used.
           *
           * Default value is `-1`.
           */
          getFirstDayOfWeek(): number;
          /**
           * Gets current value of property {@link #getIntervalSelection intervalSelection}.
           *
           * If set, interval selection is allowed
           *
           * Default value is `false`.
           */
          getIntervalSelection(): boolean;
          /**
           * @SINCE 1.38.5
           *
           * ID of the element which is the current target of the association {@link #getLegend legend}, or `null`.
           */
          getLegend(): sap.ui.core.ID;
          /**
           * Returns a metadata object for class sap.ui.unified.calendar.Month.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.base.Metadata;
          /**
           * @SINCE 1.28.9
           *
           * Gets current value of property {@link #getNonWorkingDays nonWorkingDays}.
           *
           * If set, the provided weekdays are displayed as non-working days. Valid values inside the array are 0
           * to 6. If not set, the weekend defined in the locale settings is displayed as non-working days.
           */
          getNonWorkingDays(): number[];
          /**
           * @SINCE 1.34.0
           *
           * Gets current value of property {@link #getPrimaryCalendarType primaryCalendarType}.
           *
           * If set, the calendar type is used for display. If not set, the calendar type of the global configuration
           * is used.
           */
          getPrimaryCalendarType(): sap.ui.core.CalendarType;
          /**
           * @SINCE 1.34.0
           *
           * Gets current value of property {@link #getSecondaryCalendarType secondaryCalendarType}.
           *
           * If set, the days are also displayed in this calendar type If not set, the dates are only displayed in
           * the primary calendar type
           */
          getSecondaryCalendarType(): sap.ui.core.CalendarType;
          /**
           * Gets content of aggregation {@link #getSelectedDates selectedDates}.
           *
           * Date Ranges for selected dates of the DatePicker
           */
          getSelectedDates(): sap.ui.unified.DateRange[];
          /**
           * Gets current value of property {@link #getShowHeader showHeader}.
           *
           * If set, a header with the month name is shown
           *
           * Default value is `false`.
           */
          getShowHeader(): boolean;
          /**
           * @SINCE 1.48
           *
           * Gets current value of property {@link #getShowWeekNumbers showWeekNumbers}.
           *
           * Determines whether the week numbers in the months are displayed.
           *
           * **Note:** For Islamic calendars, the week numbers are not displayed regardless of what is set to this
           * property.
           *
           * Default value is `true`.
           */
          getShowWeekNumbers(): boolean;
          /**
           * Gets current value of property {@link #getSingleSelection singleSelection}.
           *
           * If set, only a single date or interval, if intervalSelection is enabled, can be selected
           *
           * Default value is `true`.
           */
          getSingleSelection(): boolean;
          /**
           * Gets content of aggregation {@link #getSpecialDates specialDates}.
           *
           * `DateRange` with type to visualize special days in the Calendar.
           *
           * **Note:** If one day is assigned to more than one DateTypeRange, only the first one will be used. The
           * only exception is when one of the types is `NonWorking`, then you can have both `NonWorking` and the
           * other type. For example, you can have `NonWorking` + `Type01` but you can't have `Type01` + `Type02`.
           */
          getSpecialDates(): sap.ui.unified.DateTypeRange[];
          /**
           * @SINCE 1.38.0
           *
           * Gets current value of property {@link #getWidth width}.
           *
           * Width of Month
           */
          getWidth(): sap.ui.core.CSSSize;
          /**
           * @SINCE 1.38.0
           *
           * Checks for the provided `sap.ui.unified.DateRange` in the aggregation {@link #getDisabledDates disabledDates}.
           * and returns its index if found or -1 otherwise.
           */
          indexOfDisabledDate(
            /**
             * The disabledDate whose index is looked for
             */
            oDisabledDate: sap.ui.unified.DateRange
          ): number;
          /**
           * Checks for the provided `sap.ui.unified.DateRange` in the aggregation {@link #getSelectedDates selectedDates}.
           * and returns its index if found or -1 otherwise.
           */
          indexOfSelectedDate(
            /**
             * The selectedDate whose index is looked for
             */
            oSelectedDate: sap.ui.unified.DateRange
          ): number;
          /**
           * Checks for the provided `sap.ui.unified.DateTypeRange` in the aggregation {@link #getSpecialDates specialDates}.
           * and returns its index if found or -1 otherwise.
           */
          indexOfSpecialDate(
            /**
             * The specialDate whose index is looked for
             */
            oSpecialDate: sap.ui.unified.DateTypeRange
          ): number;
          /**
           * @SINCE 1.38.0
           *
           * Inserts a disabledDate into the aggregation {@link #getDisabledDates disabledDates}.
           */
          insertDisabledDate(
            /**
             * The disabledDate to insert; if empty, nothing is inserted
             */
            oDisabledDate: sap.ui.unified.DateRange,
            /**
             * The `0`-based index the disabledDate should be inserted at; for a negative value of `iIndex`, the disabledDate
             * is inserted at position 0; for a value greater than the current size of the aggregation, the disabledDate
             * is inserted at the last position
             */
            iIndex: number
          ): sap.ui.unified.calendar.Month;
          /**
           * Inserts a selectedDate into the aggregation {@link #getSelectedDates selectedDates}.
           */
          insertSelectedDate(
            /**
             * The selectedDate to insert; if empty, nothing is inserted
             */
            oSelectedDate: sap.ui.unified.DateRange,
            /**
             * The `0`-based index the selectedDate should be inserted at; for a negative value of `iIndex`, the selectedDate
             * is inserted at position 0; for a value greater than the current size of the aggregation, the selectedDate
             * is inserted at the last position
             */
            iIndex: number
          ): sap.ui.unified.calendar.Month;
          /**
           * Inserts a specialDate into the aggregation {@link #getSpecialDates specialDates}.
           */
          insertSpecialDate(
            /**
             * The specialDate to insert; if empty, nothing is inserted
             */
            oSpecialDate: sap.ui.unified.DateTypeRange,
            /**
             * The `0`-based index the specialDate should be inserted at; for a negative value of `iIndex`, the specialDate
             * is inserted at position 0; for a value greater than the current size of the aggregation, the specialDate
             * is inserted at the last position
             */
            iIndex: number
          ): sap.ui.unified.calendar.Month;
          /**
           * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
           */
          removeAllAriaLabelledBy(): sap.ui.core.ID[];
          /**
           * @SINCE 1.38.0
           *
           * Removes all the controls from the aggregation {@link #getDisabledDates disabledDates}.
           *
           * Additionally, it unregisters them from the hosting UIArea.
           */
          removeAllDisabledDates(): sap.ui.unified.DateRange[];
          /**
           * Removes all the controls from the aggregation {@link #getSelectedDates selectedDates}.
           *
           * Additionally, it unregisters them from the hosting UIArea.
           */
          removeAllSelectedDates(): sap.ui.unified.DateRange[];
          /**
           * Removes all the controls from the aggregation {@link #getSpecialDates specialDates}.
           *
           * Additionally, it unregisters them from the hosting UIArea.
           */
          removeAllSpecialDates(): sap.ui.unified.DateTypeRange[];
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
           * @SINCE 1.38.0
           *
           * Removes a disabledDate from the aggregation {@link #getDisabledDates disabledDates}.
           */
          removeDisabledDate(
            /**
             * The disabledDate to remove or its index or id
             */
            vDisabledDate: number | string | sap.ui.unified.DateRange
          ): sap.ui.unified.DateRange;
          /**
           * Removes a selectedDate from the aggregation {@link #getSelectedDates selectedDates}.
           */
          removeSelectedDate(
            /**
             * The selectedDate to remove or its index or id
             */
            vSelectedDate: number | string | sap.ui.unified.DateRange
          ): sap.ui.unified.DateRange;
          /**
           * Removes a specialDate from the aggregation {@link #getSpecialDates specialDates}.
           */
          removeSpecialDate(
            /**
             * The specialDate to remove or its index or id
             */
            vSpecialDate: number | string | sap.ui.unified.DateTypeRange
          ): sap.ui.unified.DateTypeRange;
          /**
           * Sets a new value for property {@link #getDate date}.
           *
           * A date as JavaScript Date object. The month including this date is rendered and this date is focused
           * initially (if no other focus is set).
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setDate(
            /**
             * New value for property `date`
             */
            oDate: object
          ): sap.ui.unified.calendar.Month;
          /**
           * @SINCE 1.28.9
           *
           * Sets a new value for property {@link #getFirstDayOfWeek firstDayOfWeek}.
           *
           * If set, the first day of the displayed week is this day. Valid values are 0 to 6. If not a valid value
           * is set, the default of the used locale is used.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `-1`.
           */
          setFirstDayOfWeek(
            /**
             * New value for property `firstDayOfWeek`
             */
            iFirstDayOfWeek: number
          ): sap.ui.unified.calendar.Month;
          /**
           * Sets a new value for property {@link #getIntervalSelection intervalSelection}.
           *
           * If set, interval selection is allowed
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `false`.
           */
          setIntervalSelection(
            /**
             * New value for property `intervalSelection`
             */
            bIntervalSelection: boolean
          ): sap.ui.unified.calendar.Month;
          /**
           * @SINCE 1.38.5
           *
           * Sets the associated {@link #getLegend legend}.
           */
          setLegend(
            /**
             * ID of an element which becomes the new target of this legend association; alternatively, an element instance
             * may be given
             */
            oLegend: sap.ui.core.ID | sap.ui.unified.CalendarLegend
          ): sap.ui.unified.calendar.Month;
          /**
           * @SINCE 1.28.9
           *
           * Sets a new value for property {@link #getNonWorkingDays nonWorkingDays}.
           *
           * If set, the provided weekdays are displayed as non-working days. Valid values inside the array are 0
           * to 6. If not set, the weekend defined in the locale settings is displayed as non-working days.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setNonWorkingDays(
            /**
             * New value for property `nonWorkingDays`
             */
            sNonWorkingDays: number[]
          ): sap.ui.unified.calendar.Month;
          /**
           * @SINCE 1.34.0
           *
           * Sets a new value for property {@link #getPrimaryCalendarType primaryCalendarType}.
           *
           * If set, the calendar type is used for display. If not set, the calendar type of the global configuration
           * is used.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setPrimaryCalendarType(
            /**
             * New value for property `primaryCalendarType`
             */
            sPrimaryCalendarType: sap.ui.core.CalendarType
          ): sap.ui.unified.calendar.Month;
          /**
           * @SINCE 1.34.0
           *
           * Sets a new value for property {@link #getSecondaryCalendarType secondaryCalendarType}.
           *
           * If set, the days are also displayed in this calendar type If not set, the dates are only displayed in
           * the primary calendar type
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setSecondaryCalendarType(
            /**
             * New value for property `secondaryCalendarType`
             */
            sSecondaryCalendarType: sap.ui.core.CalendarType
          ): sap.ui.unified.calendar.Month;
          /**
           * Sets a new value for property {@link #getShowHeader showHeader}.
           *
           * If set, a header with the month name is shown
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
          ): sap.ui.unified.calendar.Month;
          /**
           * @SINCE 1.48
           *
           * Sets a new value for property {@link #getShowWeekNumbers showWeekNumbers}.
           *
           * Determines whether the week numbers in the months are displayed.
           *
           * **Note:** For Islamic calendars, the week numbers are not displayed regardless of what is set to this
           * property.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `true`.
           */
          setShowWeekNumbers(
            /**
             * New value for property `showWeekNumbers`
             */
            bShowWeekNumbers: boolean
          ): sap.ui.unified.calendar.Month;
          /**
           * Sets a new value for property {@link #getSingleSelection singleSelection}.
           *
           * If set, only a single date or interval, if intervalSelection is enabled, can be selected
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `true`.
           */
          setSingleSelection(
            /**
             * New value for property `singleSelection`
             */
            bSingleSelection: boolean
          ): sap.ui.unified.calendar.Month;
          /**
           * @SINCE 1.38.0
           *
           * Sets a new value for property {@link #getWidth width}.
           *
           * Width of Month
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setWidth(
            /**
             * New value for property `width`
             */
            sWidth: sap.ui.core.CSSSize
          ): sap.ui.unified.calendar.Month;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:focus focus} event of this `sap.ui.unified.calendar.Month`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ui.unified.calendar.Month` itself.
           *
           * Date focus changed
           */
          attachFocus(
            /**
             * The function to be called when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.Month` itself
             */
            oListener?: object
          ): sap.ui.unified.calendar.Month;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.calendar.Month`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ui.unified.calendar.Month` itself.
           *
           * Date selection changed
           */
          attachSelect(
            /**
             * The function to be called when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.Month` itself
             */
            oListener?: object
          ): sap.ui.unified.calendar.Month;
          /**
           * @SINCE 1.60
           *
           * Attaches event handler `fnFunction` to the {@link #event:weekNumberSelect weekNumberSelect} event of
           * this `sap.ui.unified.calendar.Month`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ui.unified.calendar.Month` itself.
           *
           * Fired when a week number selection is changed. By default, choosing the week number will select the corresponding
           * week. If the week has already been selected, choosing the week number will deselect it.
           *
           * The default behavior can be prevented using the `preventDefault` method.
           *
           * **Note:** Works for Gregorian calendars only and when `intervalSelection` is set to `true`.
           */
          attachWeekNumberSelect(
            /**
             * The function to be called when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.Month` itself
             */
            oListener?: object
          ): sap.ui.unified.calendar.Month;
        }
        /**
         * @SINCE 1.28.0
         *
         * renders a MonthPicker with ItemNavigation This is used inside the calendar. Not for stand alone usage
         */
        class MonthPicker extends sap.ui.core.Control {
          /**
           * Constructor for a new MonthPicker.
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
            mSettings?: MonthPickerOpts
          );

          /**
           * @SINCE 1.38.0
           *
           * Attaches event handler `fnFunction` to the {@link #event:pageChange pageChange} event of this `sap.ui.unified.calendar.MonthPicker`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ui.unified.calendar.MonthPicker` itself.
           *
           * If less than 12 months are displayed the `pageChange` event is fired if the displayed months are changed
           * by user navigation.
           */
          attachPageChange(
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
             * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.MonthPicker`
             * itself
             */
            oListener?: object
          ): sap.ui.unified.calendar.MonthPicker;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.calendar.MonthPicker`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ui.unified.calendar.MonthPicker` itself.
           *
           * Month selection changed
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
             * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.MonthPicker`
             * itself
             */
            oListener?: object
          ): sap.ui.unified.calendar.MonthPicker;
          /**
           * @SINCE 1.38.0
           *
           * Detaches event handler `fnFunction` from the {@link #event:pageChange pageChange} event of this `sap.ui.unified.calendar.MonthPicker`.
           *
           * The passed function and listener object must match the ones used for event registration.
           */
          detachPageChange(
            /**
             * The function to be called, when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object on which the given function had to be called
             */
            oListener?: object
          ): sap.ui.unified.calendar.MonthPicker;
          /**
           * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.ui.unified.calendar.MonthPicker`.
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
          ): sap.ui.unified.calendar.MonthPicker;
          /**
           * Creates a new subclass of class sap.ui.unified.calendar.MonthPicker with name `sClassName` and enriches
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
           * @SINCE 1.38.0
           *
           * Fires event {@link #event:pageChange pageChange} to attached listeners.
           */
          firePageChange(
            /**
             * Parameters to pass along with the event
             */
            mParameters?: object
          ): sap.ui.unified.calendar.MonthPicker;
          /**
           * Fires event {@link #event:select select} to attached listeners.
           */
          fireSelect(
            /**
             * Parameters to pass along with the event
             */
            mParameters?: object
          ): sap.ui.unified.calendar.MonthPicker;
          /**
           * @SINCE 1.30.0
           *
           * Gets current value of property {@link #getColumns columns}.
           *
           * number of months in each row The value must be between 0 and 12 (0 means just to have all months in one
           * row, independent of the number)
           *
           * Default value is `3`.
           */
          getColumns(): number;
          /**
           * Returns a metadata object for class sap.ui.unified.calendar.MonthPicker.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.base.Metadata;
          /**
           * Gets current value of property {@link #getMonth month}.
           *
           * The month is initial focused and selected The value must be between 0 and 11
           *
           * Default value is `0`.
           */
          getMonth(): number;
          /**
           * @SINCE 1.30.0
           *
           * Gets current value of property {@link #getMonths months}.
           *
           * number of displayed months The value must be between 1 and 12
           *
           * Default value is `12`.
           */
          getMonths(): number;
          /**
           * @SINCE 1.34.0
           *
           * Gets current value of property {@link #getPrimaryCalendarType primaryCalendarType}.
           *
           * If set, the calendar type is used for display. If not set, the calendar type of the global configuration
           * is used.
           */
          getPrimaryCalendarType(): sap.ui.core.CalendarType;
          /**
           * displays the next page
           */
          nextPage(): sap.ui.unified.calendar.MonthPicker;
          /**
           * displays the previous page
           */
          previousPage(): sap.ui.unified.calendar.MonthPicker;
          /**
           * @SINCE 1.30.0
           *
           * Sets a new value for property {@link #getColumns columns}.
           *
           * number of months in each row The value must be between 0 and 12 (0 means just to have all months in one
           * row, independent of the number)
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `3`.
           */
          setColumns(
            /**
             * New value for property `columns`
             */
            iColumns: number
          ): sap.ui.unified.calendar.MonthPicker;
          /**
           * sets a minimum and maximum month
           */
          setMinMax(
            /**
             * minimum month as integer (starting with 0)
             */
            iMin?: number,
            /**
             * maximum month as integer (starting with 0)
             */
            iMax?: number
          ): sap.ui.unified.calendar.MonthPicker;
          /**
           * Sets a new value for property {@link #getMonth month}.
           *
           * The month is initial focused and selected The value must be between 0 and 11
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `0`.
           */
          setMonth(
            /**
             * New value for property `month`
             */
            iMonth: number
          ): sap.ui.unified.calendar.MonthPicker;
          /**
           * @SINCE 1.30.0
           *
           * Sets a new value for property {@link #getMonths months}.
           *
           * number of displayed months The value must be between 1 and 12
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `12`.
           */
          setMonths(
            /**
             * New value for property `months`
             */
            iMonths: number
          ): sap.ui.unified.calendar.MonthPicker;
          /**
           * @SINCE 1.34.0
           *
           * Sets a new value for property {@link #getPrimaryCalendarType primaryCalendarType}.
           *
           * If set, the calendar type is used for display. If not set, the calendar type of the global configuration
           * is used.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setPrimaryCalendarType(
            /**
             * New value for property `primaryCalendarType`
             */
            sPrimaryCalendarType: sap.ui.core.CalendarType
          ): sap.ui.unified.calendar.MonthPicker;
          /**
           * @SINCE 1.38.0
           *
           * Attaches event handler `fnFunction` to the {@link #event:pageChange pageChange} event of this `sap.ui.unified.calendar.MonthPicker`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ui.unified.calendar.MonthPicker` itself.
           *
           * If less than 12 months are displayed the `pageChange` event is fired if the displayed months are changed
           * by user navigation.
           */
          attachPageChange(
            /**
             * The function to be called when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.MonthPicker`
             * itself
             */
            oListener?: object
          ): sap.ui.unified.calendar.MonthPicker;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.calendar.MonthPicker`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ui.unified.calendar.MonthPicker` itself.
           *
           * Month selection changed
           */
          attachSelect(
            /**
             * The function to be called when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.MonthPicker`
             * itself
             */
            oListener?: object
          ): sap.ui.unified.calendar.MonthPicker;
        }
        /**
         * @SINCE 1.32.0
         *
         * Renders a row of months using ItemNavigation. There is no paging or navigation outside the rendered area
         * implemented. This is done inside the CalendarMonthInterval. If used inside the CalendarMonthInterval
         * the properties and aggregation are directly taken from the parent (to not duplicate and synchronize DateRanges
         * and so on...).
         *
         * The MontsRow works with JavaScript Date objects, but only the month and the year are used to display
         * and interact. As representation for a month, the 1st of the month will always be returned in the API.
         */
        class MonthsRow extends sap.ui.core.Control {
          /**
           * Constructor for a new `MonthsRow`. It shows a calendar with month granularity
           *
           * **Note:** This is used inside the CalendarMonthInterval, not for standalone usage.
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
            mSettings?: MonthsRowOpts
          );

          /**
           * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
           */
          addAriaLabelledBy(
            /**
             * The ariaLabelledBy to add; if empty, nothing is inserted
             */
            vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control
          ): sap.ui.unified.calendar.MonthsRow;
          /**
           * Adds some selectedDate to the aggregation {@link #getSelectedDates selectedDates}.
           */
          addSelectedDate(
            /**
             * The selectedDate to add; if empty, nothing is inserted
             */
            oSelectedDate: sap.ui.unified.DateRange
          ): sap.ui.unified.calendar.MonthsRow;
          /**
           * Adds some specialDate to the aggregation {@link #getSpecialDates specialDates}.
           */
          addSpecialDate(
            /**
             * The specialDate to add; if empty, nothing is inserted
             */
            oSpecialDate: sap.ui.unified.DateTypeRange
          ): sap.ui.unified.calendar.MonthsRow;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:focus focus} event of this `sap.ui.unified.calendar.MonthsRow`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ui.unified.calendar.MonthsRow` itself.
           *
           * Month focus changed
           */
          attachFocus(
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
             * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.MonthsRow` itself
             */
            oListener?: object
          ): sap.ui.unified.calendar.MonthsRow;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.calendar.MonthsRow`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ui.unified.calendar.MonthsRow` itself.
           *
           * Month selection changed
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
             * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.MonthsRow` itself
             */
            oListener?: object
          ): sap.ui.unified.calendar.MonthsRow;
          /**
           * Checks if a date is focusable in the current rendered output. This means that if it is not rendered,
           * it is not focusable.
           */
          checkDateFocusable(
            /**
             * JavaScript Date object for focused date.
             */
            oDateTime: object
          ): boolean;
          /**
           * Destroys all the selectedDates in the aggregation {@link #getSelectedDates selectedDates}.
           */
          destroySelectedDates(): sap.ui.unified.calendar.MonthsRow;
          /**
           * Destroys all the specialDates in the aggregation {@link #getSpecialDates specialDates}.
           */
          destroySpecialDates(): sap.ui.unified.calendar.MonthsRow;
          /**
           * Detaches event handler `fnFunction` from the {@link #event:focus focus} event of this `sap.ui.unified.calendar.MonthsRow`.
           *
           * The passed function and listener object must match the ones used for event registration.
           */
          detachFocus(
            /**
             * The function to be called, when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object on which the given function had to be called
             */
            oListener?: object
          ): sap.ui.unified.calendar.MonthsRow;
          /**
           * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.ui.unified.calendar.MonthsRow`.
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
          ): sap.ui.unified.calendar.MonthsRow;
          /**
           * Displays the month of a given date without setting the focus
           */
          displayDate(
            /**
             * JavaScript Date object for focused date.
             */
            oDate: object
          ): sap.ui.unified.calendar.MonthsRow;
          /**
           * Creates a new subclass of class sap.ui.unified.calendar.MonthsRow with name `sClassName` and enriches
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
           * Fires event {@link #event:focus focus} to attached listeners.
           */
          fireFocus(
            /**
             * Parameters to pass along with the event
             */
            mParameters?: {
              /**
               * First date, as JavaScript Date object, of the month that is focused.
               */
              date?: object;
              /**
               * If set, the focused date is not rendered yet. (This happens by navigating out of the visible area.)
               */
              notVisible?: boolean;
            }
          ): sap.ui.unified.calendar.MonthsRow;
          /**
           * Fires event {@link #event:select select} to attached listeners.
           */
          fireSelect(
            /**
             * Parameters to pass along with the event
             */
            mParameters?: object
          ): sap.ui.unified.calendar.MonthsRow;
          /**
           * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
           * ariaLabelledBy}.
           */
          getAriaLabelledBy(): sap.ui.core.ID[];
          /**
           * Gets current value of property {@link #getDate date}.
           *
           * A date as JavaScript Date object. The month including this date is rendered and this date is focused
           * initially (if no other focus is set). If the date property is not in the range `startDate` + `months`
           * in the rendering phase, it is set to the `startDate`. So after setting the `startDate` the date should
           * be set to be in the visible range.
           */
          getDate(): object;
          /**
           * Gets current value of property {@link #getIntervalSelection intervalSelection}.
           *
           * If set, interval selection is allowed
           *
           * Default value is `false`.
           */
          getIntervalSelection(): boolean;
          /**
           * @SINCE 1.38.5
           *
           * ID of the element which is the current target of the association {@link #getLegend legend}, or `null`.
           */
          getLegend(): sap.ui.core.ID;
          /**
           * Returns a metadata object for class sap.ui.unified.calendar.MonthsRow.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.base.Metadata;
          /**
           * Gets current value of property {@link #getMonths months}.
           *
           * Number of months displayed
           *
           * Default value is `12`.
           */
          getMonths(): number;
          /**
           * Gets content of aggregation {@link #getSelectedDates selectedDates}.
           *
           * Date ranges for selected dates. If `singleSelection` is set, only the first entry is used.
           *
           * **Note:** Even if only one day is selected, the whole corresponding month is selected.
           */
          getSelectedDates(): sap.ui.unified.DateRange[];
          /**
           * Gets current value of property {@link #getShowHeader showHeader}.
           *
           * If set, a header with the years is shown to visualize what month belongs to what year.
           *
           * Default value is `false`.
           */
          getShowHeader(): boolean;
          /**
           * Gets current value of property {@link #getSingleSelection singleSelection}.
           *
           * If set, only a single month or interval, if intervalSelection is enabled, can be selected
           *
           * **Note:** Selection of multiple intervals is not supported in the current version.
           *
           * Default value is `true`.
           */
          getSingleSelection(): boolean;
          /**
           * Gets content of aggregation {@link #getSpecialDates specialDates}.
           *
           * Date ranges with type to visualize special months in the row. If one day is assigned to more than one
           * type, only the first one will be used.
           *
           * **Note:** Even if only one day is set as a special day, the whole corresponding month is displayed in
           * this way.
           */
          getSpecialDates(): sap.ui.unified.DateTypeRange[];
          /**
           * Gets current value of property {@link #getStartDate startDate}.
           *
           * Start date, as JavaScript Date object, of the row. The month of this date is the first month of the displayed
           * row.
           */
          getStartDate(): object;
          /**
           * Checks for the provided `sap.ui.unified.DateRange` in the aggregation {@link #getSelectedDates selectedDates}.
           * and returns its index if found or -1 otherwise.
           */
          indexOfSelectedDate(
            /**
             * The selectedDate whose index is looked for
             */
            oSelectedDate: sap.ui.unified.DateRange
          ): number;
          /**
           * Checks for the provided `sap.ui.unified.DateTypeRange` in the aggregation {@link #getSpecialDates specialDates}.
           * and returns its index if found or -1 otherwise.
           */
          indexOfSpecialDate(
            /**
             * The specialDate whose index is looked for
             */
            oSpecialDate: sap.ui.unified.DateTypeRange
          ): number;
          /**
           * Inserts a selectedDate into the aggregation {@link #getSelectedDates selectedDates}.
           */
          insertSelectedDate(
            /**
             * The selectedDate to insert; if empty, nothing is inserted
             */
            oSelectedDate: sap.ui.unified.DateRange,
            /**
             * The `0`-based index the selectedDate should be inserted at; for a negative value of `iIndex`, the selectedDate
             * is inserted at position 0; for a value greater than the current size of the aggregation, the selectedDate
             * is inserted at the last position
             */
            iIndex: number
          ): sap.ui.unified.calendar.MonthsRow;
          /**
           * Inserts a specialDate into the aggregation {@link #getSpecialDates specialDates}.
           */
          insertSpecialDate(
            /**
             * The specialDate to insert; if empty, nothing is inserted
             */
            oSpecialDate: sap.ui.unified.DateTypeRange,
            /**
             * The `0`-based index the specialDate should be inserted at; for a negative value of `iIndex`, the specialDate
             * is inserted at position 0; for a value greater than the current size of the aggregation, the specialDate
             * is inserted at the last position
             */
            iIndex: number
          ): sap.ui.unified.calendar.MonthsRow;
          /**
           * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
           */
          removeAllAriaLabelledBy(): sap.ui.core.ID[];
          /**
           * Removes all the controls from the aggregation {@link #getSelectedDates selectedDates}.
           *
           * Additionally, it unregisters them from the hosting UIArea.
           */
          removeAllSelectedDates(): sap.ui.unified.DateRange[];
          /**
           * Removes all the controls from the aggregation {@link #getSpecialDates specialDates}.
           *
           * Additionally, it unregisters them from the hosting UIArea.
           */
          removeAllSpecialDates(): sap.ui.unified.DateTypeRange[];
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
           * Removes a selectedDate from the aggregation {@link #getSelectedDates selectedDates}.
           */
          removeSelectedDate(
            /**
             * The selectedDate to remove or its index or id
             */
            vSelectedDate: number | string | sap.ui.unified.DateRange
          ): sap.ui.unified.DateRange;
          /**
           * Removes a specialDate from the aggregation {@link #getSpecialDates specialDates}.
           */
          removeSpecialDate(
            /**
             * The specialDate to remove or its index or id
             */
            vSpecialDate: number | string | sap.ui.unified.DateTypeRange
          ): sap.ui.unified.DateTypeRange;
          /**
           * Sets a new value for property {@link #getDate date}.
           *
           * A date as JavaScript Date object. The month including this date is rendered and this date is focused
           * initially (if no other focus is set). If the date property is not in the range `startDate` + `months`
           * in the rendering phase, it is set to the `startDate`. So after setting the `startDate` the date should
           * be set to be in the visible range.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setDate(
            /**
             * New value for property `date`
             */
            oDate: object
          ): sap.ui.unified.calendar.MonthsRow;
          /**
           * Sets a new value for property {@link #getIntervalSelection intervalSelection}.
           *
           * If set, interval selection is allowed
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `false`.
           */
          setIntervalSelection(
            /**
             * New value for property `intervalSelection`
             */
            bIntervalSelection: boolean
          ): sap.ui.unified.calendar.MonthsRow;
          /**
           * @SINCE 1.38.5
           *
           * Sets the associated {@link #getLegend legend}.
           */
          setLegend(
            /**
             * ID of an element which becomes the new target of this legend association; alternatively, an element instance
             * may be given
             */
            oLegend: sap.ui.core.ID | sap.ui.unified.CalendarLegend
          ): sap.ui.unified.calendar.MonthsRow;
          /**
           * Sets a new value for property {@link #getMonths months}.
           *
           * Number of months displayed
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `12`.
           */
          setMonths(
            /**
             * New value for property `months`
             */
            iMonths: number
          ): sap.ui.unified.calendar.MonthsRow;
          /**
           * Sets a new value for property {@link #getShowHeader showHeader}.
           *
           * If set, a header with the years is shown to visualize what month belongs to what year.
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
          ): sap.ui.unified.calendar.MonthsRow;
          /**
           * Sets a new value for property {@link #getSingleSelection singleSelection}.
           *
           * If set, only a single month or interval, if intervalSelection is enabled, can be selected
           *
           * **Note:** Selection of multiple intervals is not supported in the current version.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `true`.
           */
          setSingleSelection(
            /**
             * New value for property `singleSelection`
             */
            bSingleSelection: boolean
          ): sap.ui.unified.calendar.MonthsRow;
          /**
           * Sets a new value for property {@link #getStartDate startDate}.
           *
           * Start date, as JavaScript Date object, of the row. The month of this date is the first month of the displayed
           * row.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setStartDate(
            /**
             * New value for property `startDate`
             */
            oStartDate: object
          ): sap.ui.unified.calendar.MonthsRow;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:focus focus} event of this `sap.ui.unified.calendar.MonthsRow`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ui.unified.calendar.MonthsRow` itself.
           *
           * Month focus changed
           */
          attachFocus(
            /**
             * The function to be called when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.MonthsRow` itself
             */
            oListener?: object
          ): sap.ui.unified.calendar.MonthsRow;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.calendar.MonthsRow`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ui.unified.calendar.MonthsRow` itself.
           *
           * Month selection changed
           */
          attachSelect(
            /**
             * The function to be called when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.MonthsRow` itself
             */
            oListener?: object
          ): sap.ui.unified.calendar.MonthsRow;
        }
        /**
         * @SINCE 1.32.0
         *
         * Renders a row of time items using ItemNavigation. There is no paging or navigation outside the rendered
         * area implemented. This is done inside the CalendarTimeInterval. If used inside the CalendarTimeInterval
         * the properties and aggregation are directly taken from the parent (to not duplicate and synchronize DateRanges
         * and so on...).
         *
         * The TimesRow works with JavaScript Date objects.
         */
        class TimesRow extends sap.ui.core.Control {
          /**
           * Constructor for a new `TimesRow`. It shows a calendar with time granularity (normally hours)
           *
           * **Note:** This is used inside the CalendarTimeInterval, not for standalone usage.
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
            mSettings?: TimesRowOpts
          );

          /**
           * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
           */
          addAriaLabelledBy(
            /**
             * The ariaLabelledBy to add; if empty, nothing is inserted
             */
            vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control
          ): sap.ui.unified.calendar.TimesRow;
          /**
           * Adds some selectedDate to the aggregation {@link #getSelectedDates selectedDates}.
           */
          addSelectedDate(
            /**
             * The selectedDate to add; if empty, nothing is inserted
             */
            oSelectedDate: sap.ui.unified.DateRange
          ): sap.ui.unified.calendar.TimesRow;
          /**
           * Adds some specialDate to the aggregation {@link #getSpecialDates specialDates}.
           */
          addSpecialDate(
            /**
             * The specialDate to add; if empty, nothing is inserted
             */
            oSpecialDate: sap.ui.unified.DateTypeRange
          ): sap.ui.unified.calendar.TimesRow;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:focus focus} event of this `sap.ui.unified.calendar.TimesRow`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ui.unified.calendar.TimesRow` itself.
           *
           * Time focus changed
           */
          attachFocus(
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
             * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.TimesRow` itself
             */
            oListener?: object
          ): sap.ui.unified.calendar.TimesRow;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.calendar.TimesRow`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ui.unified.calendar.TimesRow` itself.
           *
           * Time selection changed
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
             * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.TimesRow` itself
             */
            oListener?: object
          ): sap.ui.unified.calendar.TimesRow;
          /**
           * Checks if a date is focusable in the current rendered output. This means that if it is not rendered,
           * it is not focusable.
           */
          checkDateFocusable(
            /**
             * JavaScript Date object for focused date.
             */
            oDate: object
          ): boolean;
          /**
           * Destroys all the selectedDates in the aggregation {@link #getSelectedDates selectedDates}.
           */
          destroySelectedDates(): sap.ui.unified.calendar.TimesRow;
          /**
           * Destroys all the specialDates in the aggregation {@link #getSpecialDates specialDates}.
           */
          destroySpecialDates(): sap.ui.unified.calendar.TimesRow;
          /**
           * Detaches event handler `fnFunction` from the {@link #event:focus focus} event of this `sap.ui.unified.calendar.TimesRow`.
           *
           * The passed function and listener object must match the ones used for event registration.
           */
          detachFocus(
            /**
             * The function to be called, when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object on which the given function had to be called
             */
            oListener?: object
          ): sap.ui.unified.calendar.TimesRow;
          /**
           * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.ui.unified.calendar.TimesRow`.
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
          ): sap.ui.unified.calendar.TimesRow;
          /**
           * Displays the given date without setting the focus
           */
          displayDate(
            /**
             * JavaScript Date object for focused date.
             */
            oDate: object
          ): sap.ui.unified.calendar.TimesRow;
          /**
           * Creates a new subclass of class sap.ui.unified.calendar.TimesRow with name `sClassName` and enriches
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
           * Fires event {@link #event:focus focus} to attached listeners.
           */
          fireFocus(
            /**
             * Parameters to pass along with the event
             */
            mParameters?: {
              /**
               * date, as JavaScript Date object, of the focused time.
               */
              date?: object;
              /**
               * If set, the focused date is not rendered yet. (This happens by navigating out of the visible area.)
               */
              notVisible?: boolean;
            }
          ): sap.ui.unified.calendar.TimesRow;
          /**
           * Fires event {@link #event:select select} to attached listeners.
           */
          fireSelect(
            /**
             * Parameters to pass along with the event
             */
            mParameters?: object
          ): sap.ui.unified.calendar.TimesRow;
          /**
           * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
           * ariaLabelledBy}.
           */
          getAriaLabelledBy(): sap.ui.core.ID[];
          /**
           * Gets current value of property {@link #getDate date}.
           *
           * A date as JavaScript Date object. The month including this date is rendered and this date is focused
           * initially (if no other focus is set). If the date property is not in the range `startDate` + `items`
           * in the rendering phase, it is set to the `startDate`. So after setting the `startDate` the date should
           * be set to be in the visible range.
           */
          getDate(): object;
          /**
           * Gets current value of property {@link #getIntervalMinutes intervalMinutes}.
           *
           * Size of on time interval in minutes, default is 60 minutes.
           *
           * **Note:** the start of the interval calculation is always `startDat` at 00:00.
           *
           * An interval longer than 720 minutes is not allowed. Please use the `DatesRow` instead.
           *
           * A day must be divisible by this interval size. One interval must not include more than one day.
           *
           * Default value is `60`.
           */
          getIntervalMinutes(): number;
          /**
           * Gets current value of property {@link #getIntervalSelection intervalSelection}.
           *
           * If set, interval selection is allowed
           *
           * Default value is `false`.
           */
          getIntervalSelection(): boolean;
          /**
           * Gets current value of property {@link #getItems items}.
           *
           * Number of time items displayed
           *
           * Default value is `12`.
           */
          getItems(): number;
          /**
           * @SINCE 1.38.5
           *
           * ID of the element which is the current target of the association {@link #getLegend legend}, or `null`.
           */
          getLegend(): sap.ui.core.ID;
          /**
           * Returns a metadata object for class sap.ui.unified.calendar.TimesRow.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.base.Metadata;
          /**
           * Gets content of aggregation {@link #getSelectedDates selectedDates}.
           *
           * Date ranges for selected dates. If `singleSelection` is set, only the first entry is used.
           */
          getSelectedDates(): sap.ui.unified.DateRange[];
          /**
           * Gets current value of property {@link #getShowHeader showHeader}.
           *
           * If set, a header with the years is shown to visualize what month belongs to what year.
           *
           * Default value is `false`.
           */
          getShowHeader(): boolean;
          /**
           * Gets current value of property {@link #getSingleSelection singleSelection}.
           *
           * If set, only a single month or interval, if intervalSelection is enabled, can be selected
           *
           * **Note:** Selection of multiple intervals is not supported in the current version.
           *
           * Default value is `true`.
           */
          getSingleSelection(): boolean;
          /**
           * Gets content of aggregation {@link #getSpecialDates specialDates}.
           *
           * Date ranges with type to visualize special item in the row. If one day is assigned to more than one type,
           * only the first one will be used.
           */
          getSpecialDates(): sap.ui.unified.DateTypeRange[];
          /**
           * Gets current value of property {@link #getStartDate startDate}.
           *
           * Start date, as JavaScript Date object, of the row.
           */
          getStartDate(): object;
          /**
           * Checks for the provided `sap.ui.unified.DateRange` in the aggregation {@link #getSelectedDates selectedDates}.
           * and returns its index if found or -1 otherwise.
           */
          indexOfSelectedDate(
            /**
             * The selectedDate whose index is looked for
             */
            oSelectedDate: sap.ui.unified.DateRange
          ): number;
          /**
           * Checks for the provided `sap.ui.unified.DateTypeRange` in the aggregation {@link #getSpecialDates specialDates}.
           * and returns its index if found or -1 otherwise.
           */
          indexOfSpecialDate(
            /**
             * The specialDate whose index is looked for
             */
            oSpecialDate: sap.ui.unified.DateTypeRange
          ): number;
          /**
           * Inserts a selectedDate into the aggregation {@link #getSelectedDates selectedDates}.
           */
          insertSelectedDate(
            /**
             * The selectedDate to insert; if empty, nothing is inserted
             */
            oSelectedDate: sap.ui.unified.DateRange,
            /**
             * The `0`-based index the selectedDate should be inserted at; for a negative value of `iIndex`, the selectedDate
             * is inserted at position 0; for a value greater than the current size of the aggregation, the selectedDate
             * is inserted at the last position
             */
            iIndex: number
          ): sap.ui.unified.calendar.TimesRow;
          /**
           * Inserts a specialDate into the aggregation {@link #getSpecialDates specialDates}.
           */
          insertSpecialDate(
            /**
             * The specialDate to insert; if empty, nothing is inserted
             */
            oSpecialDate: sap.ui.unified.DateTypeRange,
            /**
             * The `0`-based index the specialDate should be inserted at; for a negative value of `iIndex`, the specialDate
             * is inserted at position 0; for a value greater than the current size of the aggregation, the specialDate
             * is inserted at the last position
             */
            iIndex: number
          ): sap.ui.unified.calendar.TimesRow;
          /**
           * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
           */
          removeAllAriaLabelledBy(): sap.ui.core.ID[];
          /**
           * Removes all the controls from the aggregation {@link #getSelectedDates selectedDates}.
           *
           * Additionally, it unregisters them from the hosting UIArea.
           */
          removeAllSelectedDates(): sap.ui.unified.DateRange[];
          /**
           * Removes all the controls from the aggregation {@link #getSpecialDates specialDates}.
           *
           * Additionally, it unregisters them from the hosting UIArea.
           */
          removeAllSpecialDates(): sap.ui.unified.DateTypeRange[];
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
           * Removes a selectedDate from the aggregation {@link #getSelectedDates selectedDates}.
           */
          removeSelectedDate(
            /**
             * The selectedDate to remove or its index or id
             */
            vSelectedDate: number | string | sap.ui.unified.DateRange
          ): sap.ui.unified.DateRange;
          /**
           * Removes a specialDate from the aggregation {@link #getSpecialDates specialDates}.
           */
          removeSpecialDate(
            /**
             * The specialDate to remove or its index or id
             */
            vSpecialDate: number | string | sap.ui.unified.DateTypeRange
          ): sap.ui.unified.DateTypeRange;
          /**
           * Sets a new value for property {@link #getDate date}.
           *
           * A date as JavaScript Date object. The month including this date is rendered and this date is focused
           * initially (if no other focus is set). If the date property is not in the range `startDate` + `items`
           * in the rendering phase, it is set to the `startDate`. So after setting the `startDate` the date should
           * be set to be in the visible range.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setDate(
            /**
             * New value for property `date`
             */
            oDate: object
          ): sap.ui.unified.calendar.TimesRow;
          /**
           * Sets a new value for property {@link #getIntervalMinutes intervalMinutes}.
           *
           * Size of on time interval in minutes, default is 60 minutes.
           *
           * **Note:** the start of the interval calculation is always `startDat` at 00:00.
           *
           * An interval longer than 720 minutes is not allowed. Please use the `DatesRow` instead.
           *
           * A day must be divisible by this interval size. One interval must not include more than one day.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `60`.
           */
          setIntervalMinutes(
            /**
             * New value for property `intervalMinutes`
             */
            iIntervalMinutes: number
          ): sap.ui.unified.calendar.TimesRow;
          /**
           * Sets a new value for property {@link #getIntervalSelection intervalSelection}.
           *
           * If set, interval selection is allowed
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `false`.
           */
          setIntervalSelection(
            /**
             * New value for property `intervalSelection`
             */
            bIntervalSelection: boolean
          ): sap.ui.unified.calendar.TimesRow;
          /**
           * Sets a new value for property {@link #getItems items}.
           *
           * Number of time items displayed
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `12`.
           */
          setItems(
            /**
             * New value for property `items`
             */
            iItems: number
          ): sap.ui.unified.calendar.TimesRow;
          /**
           * @SINCE 1.38.5
           *
           * Sets the associated {@link #getLegend legend}.
           */
          setLegend(
            /**
             * ID of an element which becomes the new target of this legend association; alternatively, an element instance
             * may be given
             */
            oLegend: sap.ui.core.ID | sap.ui.unified.CalendarLegend
          ): sap.ui.unified.calendar.TimesRow;
          /**
           * Sets a new value for property {@link #getShowHeader showHeader}.
           *
           * If set, a header with the years is shown to visualize what month belongs to what year.
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
          ): sap.ui.unified.calendar.TimesRow;
          /**
           * Sets a new value for property {@link #getSingleSelection singleSelection}.
           *
           * If set, only a single month or interval, if intervalSelection is enabled, can be selected
           *
           * **Note:** Selection of multiple intervals is not supported in the current version.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `true`.
           */
          setSingleSelection(
            /**
             * New value for property `singleSelection`
             */
            bSingleSelection: boolean
          ): sap.ui.unified.calendar.TimesRow;
          /**
           * Sets a new value for property {@link #getStartDate startDate}.
           *
           * Start date, as JavaScript Date object, of the row.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setStartDate(
            /**
             * New value for property `startDate`
             */
            oStartDate: object
          ): sap.ui.unified.calendar.TimesRow;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:focus focus} event of this `sap.ui.unified.calendar.TimesRow`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ui.unified.calendar.TimesRow` itself.
           *
           * Time focus changed
           */
          attachFocus(
            /**
             * The function to be called when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.TimesRow` itself
             */
            oListener?: object
          ): sap.ui.unified.calendar.TimesRow;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.calendar.TimesRow`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ui.unified.calendar.TimesRow` itself.
           *
           * Time selection changed
           */
          attachSelect(
            /**
             * The function to be called when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.TimesRow` itself
             */
            oListener?: object
          ): sap.ui.unified.calendar.TimesRow;
        }
        /**
         * @SINCE 1.28.0
         *
         * renders a YearPicker with ItemNavigation This is used inside the calendar. Not for stand alone usage
         */
        class YearPicker extends sap.ui.core.Control {
          /**
           * Constructor for a new YearPicker.
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
            mSettings?: YearPickerOpts
          );

          /**
           * @SINCE 1.38.0
           *
           * Attaches event handler `fnFunction` to the {@link #event:pageChange pageChange} event of this `sap.ui.unified.calendar.YearPicker`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ui.unified.calendar.YearPicker` itself.
           *
           * The `pageChange` event is fired if the displayed years are changed by user navigation.
           */
          attachPageChange(
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
             * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.YearPicker`
             * itself
             */
            oListener?: object
          ): sap.ui.unified.calendar.YearPicker;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.calendar.YearPicker`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ui.unified.calendar.YearPicker` itself.
           *
           * Month selection changed
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
             * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.YearPicker`
             * itself
             */
            oListener?: object
          ): sap.ui.unified.calendar.YearPicker;
          /**
           * @SINCE 1.38.0
           *
           * Detaches event handler `fnFunction` from the {@link #event:pageChange pageChange} event of this `sap.ui.unified.calendar.YearPicker`.
           *
           * The passed function and listener object must match the ones used for event registration.
           */
          detachPageChange(
            /**
             * The function to be called, when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object on which the given function had to be called
             */
            oListener?: object
          ): sap.ui.unified.calendar.YearPicker;
          /**
           * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.ui.unified.calendar.YearPicker`.
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
          ): sap.ui.unified.calendar.YearPicker;
          /**
           * Creates a new subclass of class sap.ui.unified.calendar.YearPicker with name `sClassName` and enriches
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
           * @SINCE 1.38.0
           *
           * Fires event {@link #event:pageChange pageChange} to attached listeners.
           */
          firePageChange(
            /**
             * Parameters to pass along with the event
             */
            mParameters?: object
          ): sap.ui.unified.calendar.YearPicker;
          /**
           * Fires event {@link #event:select select} to attached listeners.
           */
          fireSelect(
            /**
             * Parameters to pass along with the event
             */
            mParameters?: object
          ): sap.ui.unified.calendar.YearPicker;
          /**
           * @SINCE 1.30.0
           *
           * Gets current value of property {@link #getColumns columns}.
           *
           * number of years in each row 0 means just to have all years in one row, independent of the number
           *
           * Default value is `4`.
           */
          getColumns(): number;
          /**
           * @SINCE 1.34.0
           *
           * Gets current value of property {@link #getDate date}.
           *
           * Date as JavaScript Date object. For this date a `YearPicker` is rendered. If a Year is selected the date
           * is updated with the start date of the selected year (depending on the calendar type).
           */
          getDate(): object;
          /**
           * @SINCE 1.38.0
           *
           * return the first date of the first rendered year **Note:** If the YearPicker is not rendered no date
           * is returned
           */
          getFirstRenderedDate(): object;
          /**
           * Returns a metadata object for class sap.ui.unified.calendar.YearPicker.
           */
          // @ts-ignore
          static getMetadata(): sap.ui.base.Metadata;
          /**
           * @SINCE 1.34.0
           *
           * Gets current value of property {@link #getPrimaryCalendarType primaryCalendarType}.
           *
           * If set, the calendar type is used for display. If not set, the calendar type of the global configuration
           * is used.
           */
          getPrimaryCalendarType(): sap.ui.core.CalendarType;
          /**
           * @deprecated (since 1.34.0) - replaced by `date` property
           *
           * Gets current value of property {@link #getYear year}.
           *
           * The year is initial focused and selected The value must be between 0 and 9999
           *
           * Default value is `2000`.
           */
          getYear(): number;
          /**
           * @SINCE 1.30.0
           *
           * Gets current value of property {@link #getYears years}.
           *
           * number of displayed years
           *
           * Default value is `20`.
           */
          getYears(): number;
          /**
           * displays the next page
           */
          nextPage(): sap.ui.unified.calendar.YearPicker;
          /**
           * displays the previous page
           */
          previousPage(): sap.ui.unified.calendar.YearPicker;
          /**
           * @SINCE 1.30.0
           *
           * Sets a new value for property {@link #getColumns columns}.
           *
           * number of years in each row 0 means just to have all years in one row, independent of the number
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `4`.
           */
          setColumns(
            /**
             * New value for property `columns`
             */
            iColumns: number
          ): sap.ui.unified.calendar.YearPicker;
          /**
           * @SINCE 1.34.0
           *
           * Sets a new value for property {@link #getDate date}.
           *
           * Date as JavaScript Date object. For this date a `YearPicker` is rendered. If a Year is selected the date
           * is updated with the start date of the selected year (depending on the calendar type).
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setDate(
            /**
             * New value for property `date`
             */
            oDate: object
          ): sap.ui.unified.calendar.YearPicker;
          /**
           * @SINCE 1.34.0
           *
           * Sets a new value for property {@link #getPrimaryCalendarType primaryCalendarType}.
           *
           * If set, the calendar type is used for display. If not set, the calendar type of the global configuration
           * is used.
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           */
          setPrimaryCalendarType(
            /**
             * New value for property `primaryCalendarType`
             */
            sPrimaryCalendarType: sap.ui.core.CalendarType
          ): sap.ui.unified.calendar.YearPicker;
          /**
           * @deprecated (since 1.34.0) - replaced by `date` property
           *
           * Sets a new value for property {@link #getYear year}.
           *
           * The year is initial focused and selected The value must be between 0 and 9999
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `2000`.
           */
          setYear(
            /**
             * New value for property `year`
             */
            iYear: number
          ): sap.ui.unified.calendar.YearPicker;
          /**
           * @SINCE 1.30.0
           *
           * Sets a new value for property {@link #getYears years}.
           *
           * number of displayed years
           *
           * When called with a value of `null` or `undefined`, the default value of the property will be restored.
           *
           * Default value is `20`.
           */
          setYears(
            /**
             * New value for property `years`
             */
            iYears: number
          ): sap.ui.unified.calendar.YearPicker;
          /**
           * @SINCE 1.38.0
           *
           * Attaches event handler `fnFunction` to the {@link #event:pageChange pageChange} event of this `sap.ui.unified.calendar.YearPicker`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ui.unified.calendar.YearPicker` itself.
           *
           * The `pageChange` event is fired if the displayed years are changed by user navigation.
           */
          attachPageChange(
            /**
             * The function to be called when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.YearPicker`
             * itself
             */
            oListener?: object
          ): sap.ui.unified.calendar.YearPicker;
          /**
           * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.calendar.YearPicker`.
           *
           * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
           * otherwise it will be bound to this `sap.ui.unified.calendar.YearPicker` itself.
           *
           * Month selection changed
           */
          attachSelect(
            /**
             * The function to be called when the event occurs
             */
            fnFunction: Function,
            /**
             * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.YearPicker`
             * itself
             */
            oListener?: object
          ): sap.ui.unified.calendar.YearPicker;
        }
      }
      /**
       * Marker interface for controls that process instances of `window.Blob`, such as `window.File`. The implementation
       * of this Interface should implement the following Interface methods:
       * 	 - `getProcessedBlobsFromArray`
       */
      interface IProcessableBlobs {
        /**
         * @SINCE 1.52
         *
         * Allows to process Blobs before they get uploaded. This API can be used to create custom Blobs and upload
         * these custom Blobs instead of the received/initials Blobs in the parameter `aBlobs`. One use case could
         * be to create and upload zip archives based on the passed Blobs. The default implementation of this API
         * should simply resolve with the received Blobs (parameter `aBlobs`).
         */
        getProcessedBlobsFromArray(
          /**
           * The initial Blobs which can be used to determine a new array of Blobs for further processing.
           */
          aBlobs: Blob[]
        ): Promise<any>;
      }

      interface CalendarOpts extends sap.ui.core.ControlOpts {
        /**
         * If set, interval selection is allowed
         */
        intervalSelection?: boolean;

        /**
         * If set, only a single date or interval, if intervalSelection is enabled, can be selected
         */
        singleSelection?: boolean;

        /**
         * @SINCE 1.28.0
         *
         * Determines the number of months displayed.
         *
         * As of version 1.50, the duplicated dates are not displayed if there are multiple months.
         *
         * **Note:** On phones, only one month is displayed.
         */
        months?: number;

        /**
         * @SINCE 1.28.9
         *
         * If set, the first day of the displayed week is this day. Valid values are 0 to 6. If not a valid value
         * is set, the default of the used locale is used.
         */
        firstDayOfWeek?: number;

        /**
         * @SINCE 1.28.9
         *
         * If set, the provided weekdays are displayed as non-working days. Valid values inside the array are 0
         * to 6. If not set, the weekend defined in the locale settings is displayed as non-working days.
         *
         * **Note:** Keep in mind that this property sets only weekly-recurring days as non-working. If you need
         * specific dates or dates ranges, such as national holidays, use the `specialDates` aggregation to set
         * them. Both the non-working days (from property) and dates (from aggregation) are visualized the same.
         */
        nonWorkingDays?: number[];

        /**
         * @SINCE 1.34.0
         *
         * If set, the calendar type is used for display. If not set, the calendar type of the global configuration
         * is used.
         */
        primaryCalendarType?: sap.ui.core.CalendarType;

        /**
         * @SINCE 1.34.0
         *
         * If set, the days are also displayed in this calendar type If not set, the dates are only displayed in
         * the primary calendar type
         */
        secondaryCalendarType?: sap.ui.core.CalendarType;

        /**
         * @SINCE 1.38.0
         *
         * Width of Calendar
         *
         * **Note:** There is a theme depending minimum width, so the calendar can not be set smaller.
         */
        width?: sap.ui.core.CSSSize;

        /**
         * @SINCE 1.38.0
         *
         * Minimum date that can be shown and selected in the Calendar. This must be a JavaScript date object.
         *
         * **Note:** if the date is inside of a month the complete month is displayed, but dates outside the valid
         * range can not be selected.
         *
         * **Note:** If the `minDate` is set to be after the `maxDate`, the `maxDate` is set to the end of the month
         * of the `minDate`.
         */
        minDate?: object;

        /**
         * @SINCE 1.38.0
         *
         * Maximum date that can be shown and selected in the Calendar. This must be a JavaScript date object.
         *
         * **Note:** if the date is inside of a month the complete month is displayed, but dates outside the valid
         * range can not be selected.
         *
         * **Note:** If the `maxDate` is set to be before the `minDate`, the `minDate` is set to the begin of the
         * month of the `maxDate`.
         */
        maxDate?: object;

        /**
         * @SINCE 1.48
         *
         * Determines whether the week numbers in the months are displayed.
         *
         * **Note:** For Islamic calendars, the week numbers are not displayed regardless of what is set to this
         * property.
         */
        showWeekNumbers?: boolean;

        /**
         * Date selection changed
         */
        select?: Function;

        /**
         * Date selection was cancelled
         */
        cancel?: Function;

        /**
         * @SINCE 1.34.0
         *
         * `startDate` was changed while navigation in `Calendar`
         *
         * Use `getStartDate` function to determine the current start date
         */
        startDateChange?: Function;

        /**
         * @SINCE 1.56
         *
         * Week number selection changed. By default, clicking on the week number will select the corresponding
         * week. If the week has already been selected, clicking the week number will deselect it.
         *
         * The default behavior can be prevented using the `preventDefault` method.
         *
         * **Note** Works for Gregorian calendars only and when `intervalSelection` is set to 'true'.
         */
        weekNumberSelect?: Function;

        /**
         * Dates or date ranges for selected dates.
         *
         * To set a single date (instead of a range), set only the `startDate` property of the {@link sap.ui.unified.DateRange}
         * class.
         */
        selectedDates?: sap.ui.unified.DateRange[] | sap.ui.unified.DateRange;

        /**
         * @SINCE 1.24.0
         *
         * Dates or date ranges with type, to visualize special days in the `Calendar`. If one day is assigned to
         * more than one Type, only the first one will be used.
         *
         * To set a single date (instead of a range), set only the `startDate` property of the {@link sap.ui.unified.DateRange}
         * class.
         *
         * **Note:** Keep in mind that the `NonWorking` type is for marking specific dates or date ranges as non-working,
         * where if you need a weekly-reccuring non-working days (weekend), you should use the `nonWorkingDays`
         * property. Both the non-working days (from property) and dates (from aggregation) are visualized the same.
         */
        specialDates?:
          | sap.ui.unified.DateTypeRange[]
          | sap.ui.unified.DateTypeRange;

        /**
         * @SINCE 1.38.0
         *
         * Dates or date ranges for disabled dates.
         *
         * To set a single date (instead of a range), set only the `startDate` property of the {@link sap.ui.unified.DateRange}
         * class.
         */
        disabledDates?: sap.ui.unified.DateRange[] | sap.ui.unified.DateRange;

        /**
         * @SINCE 1.28.0
         *
         * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
         */
        ariaLabelledBy?: sap.ui.core.Control[] | string[];

        /**
         * @SINCE 1.38.5
         *
         * Association to the `CalendarLegend` explaining the colors of the `specialDates`.
         *
         * **Note** The legend does not have to be rendered but must exist, and all required types must be assigned.
         */
        legend?: sap.ui.unified.CalendarLegend | string;
      }

      interface CalendarAppointmentOpts
        extends sap.ui.unified.DateTypeRangeOpts {
        /**
         * Title of the appointment.
         */
        title?: string;

        /**
         * Text of the appointment.
         */
        text?: string;

        /**
         * Icon of the Appointment. (e.g. picture of the person)
         *
         * URI of an image or an icon registered in sap.ui.core.IconPool.
         */
        icon?: sap.ui.core.URI;

        /**
         * Indicates if the icon is tentative.
         */
        tentative?: boolean;

        /**
         * Indicates if the icon is selected.
         */
        selected?: boolean;

        /**
         * Can be used as identifier of the appointment
         */
        key?: string;

        /**
         * @SINCE 1.46.0
         *
         * Overrides the color derived from the `type` property. This property will work only with full hex color
         * with pound symbol, e.g.: #FF0000.
         */
        color?: sap.ui.core.CSSColor;
      }

      interface CalendarDateIntervalOpts extends sap.ui.unified.CalendarOpts {
        /**
         * Start date of the Interval
         */
        startDate?: object;

        /**
         * number of days displayed on phones the maximum rendered number of days is 8.
         */
        days?: number;

        /**
         * @SINCE 1.34.0
         *
         * If set the day names are shown in a separate line. If not set the day names are shown inside the single
         * days.
         */
        showDayNamesLine?: boolean;

        /**
         * @SINCE 1.34.0
         *
         * If set, the month- and yearPicker opens on a popup
         */
        pickerPopup?: boolean;
      }

      interface CalendarLegendOpts extends sap.ui.core.ControlOpts {
        /**
         * @SINCE 1.54
         *
         * Determines the standard items related to the calendar days, such as, today, selected, working and non-working.
         * Values must be one of `sap.ui.unified.StandardCalendarLegendItem`. Note: for versions 1.50 and 1.52,
         * this property was defined in the the subclass `sap.m.PlanningCalendarLegend`
         */
        standardItems?: string[];

        /**
         * Defines the width of the created columns in which the items are arranged.
         */
        columnWidth?: sap.ui.core.CSSSize;

        /**
         * Items to be displayed.
         */
        items?:
          | sap.ui.unified.CalendarLegendItem[]
          | sap.ui.unified.CalendarLegendItem;
      }

      interface CalendarLegendItemOpts extends sap.ui.core.ElementOpts {
        /**
         * Text to be displayed for the item.
         */
        text?: string;

        /**
         * @SINCE 1.28.9
         *
         * Type of the item. If not set the type is automatically determined from the order of the items in the
         * CalendarLegend.
         */
        type?: sap.ui.unified.CalendarDayType;

        /**
         * @SINCE 1.46.0
         *
         * Overrides the color derived from the `type` property.
         */
        color?: sap.ui.core.CSSColor;
      }

      interface CalendarMonthIntervalOpts extends sap.ui.core.ControlOpts {
        /**
         * Width of the `CalendarMonthInterval`. The width of the single months depends on this width.
         */
        width?: sap.ui.core.CSSSize;

        /**
         * Start date of the Interval as JavaScript Date object. The month of this Date will be the first month
         * in the displayed row.
         */
        startDate?: object;

        /**
         * If set, interval selection is allowed
         */
        intervalSelection?: boolean;

        /**
         * If set, only a single date or interval, if `intervalSelection` is enabled, can be selected
         *
         * **Note:** Selection of multiple intervals is not supported in the current version.
         */
        singleSelection?: boolean;

        /**
         * Number of months displayed
         *
         * **Note:** On phones, the maximum number of months displayed in the row is always 6.
         */
        months?: number;

        /**
         * @SINCE 1.34.0
         *
         * If set, the yearPicker opens on a popup
         */
        pickerPopup?: boolean;

        /**
         * @SINCE 1.38.0
         *
         * Minimum date that can be shown and selected in the Calendar. This must be a JavaScript date object.
         *
         * **Note:** If the `minDate` is set to be after the `maxDate`, the `maxDate` is set to the end of the month
         * of the `minDate`.
         */
        minDate?: object;

        /**
         * @SINCE 1.38.0
         *
         * Maximum date that can be shown and selected in the Calendar. This must be a JavaScript date object.
         *
         * **Note:** If the `maxDate` is set to be before the `minDate`, the `minDate` is set to the begin of the
         * month of the `maxDate`.
         */
        maxDate?: object;

        /**
         * Month selection changed
         */
        select?: Function;

        /**
         * Month selection was cancelled
         */
        cancel?: Function;

        /**
         * @SINCE 1.34.0
         *
         * `startDate` was changed while navigation in `CalendarMonthInterval`
         */
        startDateChange?: Function;

        /**
         * Date ranges for selected dates of the `CalendarMonthInterval`.
         *
         * If `singleSelection` is set, only the first entry is used.
         *
         * **Note:** Even if only one day is selected, the whole corresponding month is selected.
         */
        selectedDates?: sap.ui.unified.DateRange[] | sap.ui.unified.DateRange;

        /**
         * Date ranges with type to visualize special months in the `CalendarMonthInterval`. If one day is assigned
         * to more than one type, only the first one will be used.
         *
         * **Note:** Even if only one day is set as a special day, the whole corresponding month is displayed in
         * this way.
         */
        specialDates?:
          | sap.ui.unified.DateTypeRange[]
          | sap.ui.unified.DateTypeRange;

        /**
         * Association to controls / IDs which label this control (see WAI-ARIA attribute aria-labelledby).
         */
        ariaLabelledBy?: sap.ui.core.Control[] | string[];

        /**
         * @SINCE 1.38.5
         *
         * Association to the `CalendarLegend` explaining the colors of the `specialDates`.
         *
         * **Note** The legend does not have to be rendered but must exist, and all required types must be assigned.
         */
        legend?: sap.ui.unified.CalendarLegend | string;
      }

      interface CalendarRowOpts extends sap.ui.core.ControlOpts {
        /**
         * Start date, as JavaScript Date object, of the row. As default, the current date is used.
         */
        startDate?: object;

        /**
         * Number of displayed intervals. The size of the intervals is defined with `intervalType`
         */
        intervals?: number;

        /**
         * Type of the intervals of the row. The default is one hour.
         */
        intervalType?: sap.ui.unified.CalendarIntervalType;

        /**
         * If set, subintervals are shown.
         *
         * If the interval type is `Hour`, quarter hours are shown.
         *
         * If the interval type is `Day`, hours are shown.
         *
         * If the interval type is `Month`, days are shown.
         */
        showSubIntervals?: boolean;

        /**
         * If set, interval headers are shown like specified in `showEmptyIntervalHeaders`.
         *
         * If not set, no interval headers are shown even if `intervalHeaders` are assigned.
         */
        showIntervalHeaders?: boolean;

        /**
         * @SINCE 1.38.0
         *
         * If set, interval headers are shown even if no `intervalHeaders` are assigned to the visible time frame.
         *
         * If not set, no interval headers are shown if no `intervalHeaders` are assigned.
         *
         * **Note:** This property is only used if `showIntervalHeaders` is set to true.
         */
        showEmptyIntervalHeaders?: boolean;

        /**
         * If set, the provided weekdays are displayed as non-working days. Valid values inside the array are 0
         * to 6. (Other values will just be ignored.)
         *
         * If not set, the weekend defined in the locale settings is displayed as non-working days.
         *
         * **Note:** The non working days are only visualized if `intervalType` is set to day.
         */
        nonWorkingDays?: number[];

        /**
         * If set, the provided hours are displayed as non-working hours. Valid values inside the array are 0 to
         * 23. (Other values will just be ignored.)
         *
         * **Note:** The non working hours are only visualized if `intervalType` is set to hour.
         */
        nonWorkingHours?: number[];

        /**
         * Width of the row
         */
        width?: sap.ui.core.CSSSize;

        /**
         * Height of the row
         */
        height?: sap.ui.core.CSSSize;

        /**
         * If set, the `CalendarRow` checks for resize by itself.
         *
         * If a lot of `CalendarRow` controls are used in one container control (like `PlanningCalendar`). the resize
         * checks should be done only by this container control. Then the container control should call `handleResize`
         * of the `CalendarRow` if a resize happens.
         */
        checkResize?: boolean;

        /**
         * If set the `CalendarRow` triggers a periodic update to visualize the current time.
         *
         * If a lot of `CalendarRow` controls are used in one container control (like `PlanningCalendar`) the periodic
         * update should be triggered only by this container control. Then the container control should call `updateCurrentTimeVisualization`
         * of the `CalendarRow` to update the visualization.
         */
        updateCurrentTime?: boolean;

        /**
         * Defines the mode in which the overlapping appointments are displayed.
         *
         * **Note:** This property takes effect, only if the `intervalType` of the current calendar view is set
         * to `sap.ui.unified.CalendarIntervalType.Month`. On phone devices this property is ignored, and the default
         * value is applied.
         */
        groupAppointmentsMode?: sap.ui.unified.GroupAppointmentsMode;

        /**
         * @SINCE 1.38.0
         *
         * If set the appointments without text (only title) are rendered with a smaller height.
         *
         * **Note:** On phone devices this property is ignored, appointments are always rendered in full height
         * to allow touching.
         */
        appointmentsReducedHeight?: boolean;

        /**
         * @SINCE 1.40.0
         *
         * Defines the visualization of the `CalendarAppoinment`
         *
         * **Note:** The real visualization depends on the used theme.
         */
        appointmentsVisualization?: sap.ui.unified.CalendarAppointmentVisualization;

        /**
         * Fired if an appointment was selected
         */
        select?: Function;

        /**
         * `startDate` was changed while navigating in `CalendarRow`
         */
        startDateChange?: Function;

        /**
         * The `CalendarRow` should be left while navigating. (Arrow up or arrow down.) The caller should determine
         * the next control to be focused
         */
        leaveRow?: Function;

        /**
         * @SINCE 1.38.0
         *
         * Fired if an interval was selected
         */
        intervalSelect?: Function;

        /**
         * Appointments to be displayed in the row. Appointments outside the visible time frame are not rendered.
         *
         * **Note:** For performance reasons, only appointments in the visible time range or nearby should be assigned.
         */
        appointments?:
          | sap.ui.unified.CalendarAppointment[]
          | sap.ui.unified.CalendarAppointment;

        /**
         * Appointments to be displayed in the top of the intervals. The `intervalHeaders` are used to visualize
         * public holidays and similar things.
         *
         * Appointments outside the visible time frame are not rendered.
         *
         * The `intervalHeaders` always fill whole intervals. If they are shorter than one interval, they are not
         * displayed.
         *
         * **Note:** For performance reasons, only appointments in the visible time range or nearby should be assigned.
         */
        intervalHeaders?:
          | sap.ui.unified.CalendarAppointment[]
          | sap.ui.unified.CalendarAppointment;

        /**
         * Association to controls / IDs which label this control (see WAI-ARIA attribute aria-labelledby).
         *
         * **Note** These labels are also assigned to the appointments.
         */
        ariaLabelledBy?: sap.ui.core.Control[] | string[];

        /**
         * @SINCE 1.40.0
         *
         * Association to the `CalendarLegend` explaining the colors of the `Appointments`.
         *
         * **Note** The legend does not have to be rendered but must exist, and all required types must be assigned.
         */
        legend?: sap.ui.unified.CalendarLegend | string;
      }

      interface CalendarTimeIntervalOpts extends sap.ui.core.ControlOpts {
        /**
         * Width of the `CalendarTimeInterval`. The width of the single months depends on this width.
         */
        width?: sap.ui.core.CSSSize;

        /**
         * Start date of the Interval as JavaScript Date object. The time interval corresponding to this Date and
         * `items` and `intervalMinutes` will be the first time in the displayed row.
         */
        startDate?: object;

        /**
         * If set, interval selection is allowed
         */
        intervalSelection?: boolean;

        /**
         * If set, only a single date or interval, if `intervalSelection` is enabled, can be selected
         *
         * **Note:** Selection of multiple intervals is not supported in the current version.
         */
        singleSelection?: boolean;

        /**
         * Number of time items displayed. Default is 12.
         *
         * **Note:** On phones, the maximum number of items displayed in the row is always 6.
         */
        items?: number;

        /**
         * Size of on time interval in minutes, default is 60 minutes.
         *
         * **Note:** the start of the interval calculation is always on the corresponding date at 00:00.
         *
         * An interval longer than 720 minutes is not allowed. Please use the `CalendarDateInterval` instead.
         *
         * A day must be divisible by this interval size. One interval must not include more than one day.
         */
        intervalMinutes?: number;

        /**
         * @SINCE 1.34.0
         *
         * If set, the day-, month- and yearPicker opens on a popup
         */
        pickerPopup?: boolean;

        /**
         * @SINCE 1.38.0
         *
         * Minimum date that can be shown and selected in the Calendar. This must be a JavaScript date object.
         *
         * **Note:** If the `minDate` is set to be after the `maxDate`, the `maxDate` is set to the end of the month
         * of the `minDate`.
         */
        minDate?: object;

        /**
         * @SINCE 1.38.0
         *
         * Maximum date that can be shown and selected in the Calendar. This must be a JavaScript date object.
         *
         * **Note:** If the `maxDate` is set to be before the `minDate`, the `minDate` is set to the begin of the
         * month of the `maxDate`.
         */
        maxDate?: object;

        /**
         * Time selection changed
         */
        select?: Function;

        /**
         * Time selection was cancelled
         */
        cancel?: Function;

        /**
         * @SINCE 1.34.0
         *
         * `startDate` was changed while navigation in `CalendarTimeInterval`
         */
        startDateChange?: Function;

        /**
         * Date ranges for selected items of the `CalendarTimeInterval`.
         *
         * If `singleSelection` is set, only the first entry is used.
         */
        selectedDates?: sap.ui.unified.DateRange[] | sap.ui.unified.DateRange;

        /**
         * Date ranges with type to visualize special items in the `CalendarTimeInterval`. If one interval is assigned
         * to more than one type, only the first one will be used.
         */
        specialDates?:
          | sap.ui.unified.DateTypeRange[]
          | sap.ui.unified.DateTypeRange;

        /**
         * Association to controls / IDs which label this control (see WAI-ARIA attribute aria-labelledby).
         */
        ariaLabelledBy?: sap.ui.core.Control[] | string[];

        /**
         * @SINCE 1.38.5
         *
         * Association to the `CalendarLegend` explaining the colors of the `specialDates`.
         *
         * **Note** The legend does not have to be rendered but must exist, and all required types must be assigned.
         */
        legend?: sap.ui.unified.CalendarLegend | string;
      }

      interface ColorPickerOpts extends sap.ui.core.ControlOpts {
        /**
         * @SINCE 1.48.0
         *
         * Determines the input parameter that can be a string of type HEX, RGB, HSV, or a CSS color name:
         *
         * 	 - HEX - #FFFFFF
         * 	 - RGB - rgb(255,255,255)
         * 	 - HSV - hsv(360,100,100)
         * 	 - CSS - red  **Note:** The output parameter is an RGB string of the current color.
         */
        colorString?: string;

        /**
         * @SINCE 1.48.0
         *
         * Determines the color mode of the `ColorPicker`.
         */
        mode?: sap.ui.unified.ColorPickerMode;

        /**
         * @SINCE 1.58
         *
         * Determines the display mode of the `ColorPicker` among three types - Default, Large and Simplified
         */
        displayMode?: sap.ui.unified.ColorPickerDisplayMode;

        /**
         * @SINCE 1.48.0
         *
         * Fired when the value is changed by user action.
         *
         * **Note:** When the user action is mouse dragging, the `change` event fires on the mouseup event.
         */
        change?: Function;

        /**
         * @SINCE 1.48.0
         *
         * Fired when the value is changed during the mouse move.
         *
         * **Note:** When the user action is mouse move, the `liveChange` event is fired during the mousedown event.
         */
        liveChange?: Function;
      }

      interface ColorPickerPopoverOpts extends sap.ui.core.ControlOpts {
        /**
         * @SINCE 1.60.0
         *
         * Determines the input parameter that can be a string of type HEX, RGB, HSV, or a CSS color name:
         *
         * 	 - HEX - #FFFFFF
         * 	 - RGB - rgb(255,255,255)
         * 	 - HSV - hsv(360,100,100)
         * 	 - CSS - red  **Note:** The output parameter is an RGB string of the current color.
         */
        colorString?: string;

        /**
         * @SINCE 1.60.0
         *
         * Determines the color mode of the `ColorPicker`.
         */
        mode?: sap.ui.unified.ColorPickerMode;

        /**
         * @SINCE 1.60.0
         *
         * Determines the display mode of the `ColorPicker` among three types - Default, Large and Simplified
         */
        displayMode?: sap.ui.unified.ColorPickerDisplayMode;

        /**
         * @SINCE 1.60.0
         *
         * Fired when the submit button of the popover is clicked.
         */
        change?: Function;
      }

      interface ContentSwitcherOpts extends sap.ui.core.ControlOpts {
        /**
         * Set the used animation when changing content. This just sets a CSS-class named "sapUiUnifiedACSwitcherAnimation"
         * + this value on the root element of the control. The animation has to be implemented in CSS. This also
         * enables applications to implement their own animations via CSS by reacting to the parent class. See the
         * types sap.ui.unified.ContentSwitcherAnimation for default implementations.
         */
        animation?: string;

        /**
         * The number of the currently active content (1 or 2).
         */
        activeContent?: number;

        /**
         * The controls that should be shown in the first content
         */
        content1?: sap.ui.core.Control[] | sap.ui.core.Control;

        /**
         * The controls that should be shown in the second content
         */
        content2?: sap.ui.core.Control[] | sap.ui.core.Control;
      }

      interface CurrencyOpts extends sap.ui.core.ControlOpts {
        /**
         * Determines the currency value.
         */
        value?: number;

        /**
         * @SINCE 1.54
         *
         * Determines the currency value as a string.
         *
         * String value is useful if you want to store really big values. If there are more than 21 digits before
         * the decimal point or if the number starts with “0.” followed by more than five zeros, it is represented
         * in exponential form. In these cases use the `stringValue` property to keep the number in decimal format.
         *
         * **Note:** If set, it will take precedence over the `value` property.
         */
        stringValue?: string;

        /**
         * Determines the displayed currency code (ISO 4217).
         *
         * **Note:** If a * character is set instead of currency code, only the character itself will be rendered,
         * ignoring the `value` property.
         */
        currency?: string;

        /**
         * Defines the space that is available for the precision of the various currencies.
         */
        maxPrecision?: number;

        /**
         * Displays the currency symbol instead of the ISO currency code.
         */
        useSymbol?: boolean;
      }

      interface DateRangeOpts extends sap.ui.core.ElementOpts {
        /**
         * Start date for a date range. This must be a JavaScript date object.
         */
        startDate?: object;

        /**
         * End date for a date range. If empty only a single date is presented by this DateRange element. This must
         * be a JavaScript date object.
         */
        endDate?: object;
      }

      interface DateTypeRangeOpts extends sap.ui.unified.DateRangeOpts {
        /**
         * Type of the date range.
         */
        type?: sap.ui.unified.CalendarDayType;
      }

      interface FileUploaderOpts extends sap.ui.core.ControlOpts {
        /**
         * Value of the path for file upload.
         */
        value?: string;

        /**
         * Disabled controls have different colors, depending on customer settings.
         */
        enabled?: boolean;

        /**
         * Used when URL address is on a remote server.
         */
        uploadUrl?: sap.ui.core.URI;

        /**
         * Unique control name for identification on the server side after sending data to the server.
         */
        name?: string;

        /**
         * Specifies the displayed control width.
         */
        width?: sap.ui.core.CSSSize;

        /**
         * If set to "true", the upload immediately starts after file selection. With the default setting, the upload
         * needs to be explicitly triggered.
         */
        uploadOnChange?: boolean;

        /**
         * Additional data that is sent to the back end service. Data will be transmitted as value of a hidden input
         * where the name is derived from the name property with suffix -data.
         */
        additionalData?: string;

        /**
         * If the FileUploader is configured to upload the file directly after the file is selected it is not allowed
         * to upload a file with the same name again. If a user should be allowed to upload a file with the same
         * name again this parameter has to be "true". A typical use case would be if the files have different paths.
         */
        sameFilenameAllowed?: boolean;

        /**
         * The Button text can be overwritten using this property.
         */
        buttonText?: string;

        /**
         * The chosen files will be checked against an array of file types. If at least one file does not fit the
         * file type restriction the upload is prevented. Example: ["jpg", "png", "bmp"].
         */
        fileType?: string[];

        /**
         * Allows multiple files to be chosen and uploaded from the same folder. This property is not supported
         * by Internet Explorer 9.
         *
         * **Note:** Keep in mind that the various operating systems for mobile devices can react differently to
         * the property so that fewer upload functions may be available in some cases.
         */
        multiple?: boolean;

        /**
         * A file size limit in megabytes which prevents the upload if at least one file exceeds it. This property
         * is not supported by Internet Explorer 9.
         */
        maximumFileSize?: number;

        /**
         * The chosen files will be checked against an array of mime types. If at least one file does not fit the
         * mime type restriction the upload is prevented. This property is not supported by Internet Explorer 9.
         * Example: mimeType ["image/png", "image/jpeg"].
         */
        mimeType?: string[];

        /**
         * If set to "true", the request will be sent as XHR request instead of a form submit. This property is
         * not supported by Internet Explorer 9.
         */
        sendXHR?: boolean;

        /**
         * Placeholder for the text field.
         */
        placeholder?: string;

        /**
         * Style of the button. "Transparent, "Accept", "Reject", or "Emphasized" is allowed.
         */
        style?: string;

        /**
         * If set to "true", the FileUploader will be rendered as Button only, without showing the InputField.
         */
        buttonOnly?: boolean;

        /**
         * If set to "false", the request will be sent as file only request instead of a multipart/form-data request.
         * Only one file could be uploaded using this type of request. Required for sending such a request is to
         * set the property "sendXHR" to "true". This property is not supported by Internet Explorer 9.
         */
        useMultipart?: boolean;

        /**
         * @SINCE 1.24.0
         *
         * The maximum length of a filename which the FileUploader will accept. If the maximum filename length is
         * exceeded, the corresponding Event 'filenameLengthExceed' is fired.
         */
        maximumFilenameLength?: number;

        /**
         * @SINCE 1.24.0
         *
         * Visualizes warnings or errors related to the text field. Possible values: Warning, Error, Success, None.
         */
        valueState?: sap.ui.core.ValueState;

        /**
         * @SINCE 1.52
         *
         * Custom text for the value state message pop-up.
         *
         * **Note:** If not specified, a default text, based on the value state type, will be used instead.
         */
        valueStateText?: string;

        /**
         * @SINCE 1.26.0
         *
         * Icon to be displayed as graphical element within the button. This can be a URI to an image or an icon
         * font URI.
         */
        icon?: sap.ui.core.URI;

        /**
         * @SINCE 1.26.0
         *
         * Icon to be displayed as graphical element within the button when it is hovered (only if also a base icon
         * was specified). If not specified the base icon is used. If an icon font icon is used, this property is
         * ignored.
         */
        iconHovered?: sap.ui.core.URI;

        /**
         * @SINCE 1.26.0
         *
         * Icon to be displayed as graphical element within the button when it is selected (only if also a base
         * icon was specified). If not specified the base or hovered icon is used. If an icon font icon is used,
         * this property is ignored.
         */
        iconSelected?: sap.ui.core.URI;

        /**
         * @SINCE 1.26.0
         *
         * If set to true (default), the display sequence is 1. icon 2. control text.
         */
        iconFirst?: boolean;

        /**
         * @SINCE 1.26.0
         *
         * If set to true, the button is displayed without any text.
         */
        iconOnly?: boolean;

        /**
         * Event is fired when the value of the file path has been changed.
         */
        change?: Function;

        /**
         * Event is fired as soon as the upload request is completed (either successful or unsuccessful). To see
         * if the upload request was successful, check the 'state' parameter for a value 2xx. The uploads actual
         * progress can be retrieved via the 'uploadProgress' Event. However this covers only the client side of
         * the Upload process and does not give any success status from the server.
         */
        uploadComplete?: Function;

        /**
         * Event is fired when the type of a file does not match the mimeType or fileType property.
         */
        typeMissmatch?: Function;

        /**
         * Event is fired when the size of a file is above the maximumFileSize property. This event is not supported
         * by Internet Explorer 9 (same restriction as for the property maximumFileSize).
         */
        fileSizeExceed?: Function;

        /**
         * Event is fired when the file is allowed for upload on client side.
         */
        fileAllowed?: Function;

        /**
         * @SINCE 1.24.0
         *
         * Event is fired after the upload has started and before the upload is completed and contains progress
         * information related to the running upload. Depending on file size, band width and used browser the event
         * is fired once or multiple times. This is event is only supported with property sendXHR set to true, i.e.
         * the event is not supported in Internet Explorer 9.
         */
        uploadProgress?: Function;

        /**
         * @SINCE 1.24.0
         *
         * Event is fired after the current upload has been aborted. This is event is only supported with property
         * sendXHR set to true, i.e. the event is not supported in Internet Explorer 9.
         */
        uploadAborted?: Function;

        /**
         * @SINCE 1.24.0
         *
         * Event is fired, if the filename of a chosen file is longer than the value specified with the maximumFilenameLength
         * property.
         */
        filenameLengthExceed?: Function;

        /**
         * @SINCE 1.30.0
         *
         * Event is fired before an upload is started.
         */
        uploadStart?: Function;

        /**
         * @SINCE 1.12.2
         *
         * The parameters for the FileUploader which are rendered as a hidden inputfield.
         */
        parameters?:
          | sap.ui.unified.FileUploaderParameter[]
          | sap.ui.unified.FileUploaderParameter;

        /**
         * The header parameters for the FileUploader which are only submitted with XHR requests. Header parameters
         * are not supported by Internet Explorer 9.
         */
        headerParameters?:
          | sap.ui.unified.FileUploaderParameter[]
          | sap.ui.unified.FileUploaderParameter;

        /**
         * @SINCE 1.52
         *
         * Settings for the `XMLHttpRequest` object. **Note:** This aggregation is only used when the `sendXHR`
         * property is set to `true`.
         */
        xhrSettings?: sap.ui.unified.FileUploaderXHRSettings;
      }

      interface FileUploaderParameterOpts extends sap.ui.core.ElementOpts {
        /**
         * @SINCE 1.12.2
         *
         * The name of the hidden inputfield.
         */
        name?: string;

        /**
         * @SINCE 1.12.2
         *
         * The value of the hidden inputfield.
         */
        value?: string;
      }

      interface FileUploaderXHRSettingsOpts extends sap.ui.core.ElementOpts {
        /**
         * @SINCE 1.52
         *
         * Determines the value of the `XMLHttpRequest.withCredentials` property
         */
        withCredentials?: boolean;
      }

      interface MenuOpts extends sap.ui.core.ControlOpts {
        /**
         * When a menu is disabled none of its items can be selected by the user. The enabled property of an item
         * (@link sap.ui.unified.MenuItemBase#getEnabled) has no effect when the menu of the item is disabled.
         */
        enabled?: boolean;

        /**
         * @deprecated (since 1.27.0) - replaced by `ariaLabelledBy` association
         *
         * Accessible label / description of the menu for assistive technologies like screenreaders.
         */
        ariaDescription?: string;

        /**
         * The maximum number of items which are displayed before an overflow mechanism takes effect. A value smaller
         * than 1 means an infinite number of visible items. The overall height of the menu is limited by the height
         * of the screen. If the maximum possible height is reached, an overflow takes effect, even if the maximum
         * number of visible items is not yet reached.
         */
        maxVisibleItems?: number;

        /**
         * @SINCE 1.25.0
         *
         * The keyboard can be used to navigate through the items of a menu. Beside the arrow keys for single steps
         * and the Home / End keys for jumping to the first / last item, the Page Up / Page
         * Down keys can be used to jump an arbitrary number of items up or down. This number can be defined
         * via the `pageSize` property. For values smaller than 1, paging behaves in a similar way to when using
         * the Home / End keys. If the value equals 1, the paging behavior is similar to that of the
         * arrow keys.
         */
        pageSize?: number;

        /**
         * Fired on the root menu of a menu hierarchy whenever a user selects an item within the menu or within
         * one of its direct or indirect submenus. **Note:** There is also a select event available for each single
         * menu item. This event and the event of the menu items are redundant.
         */
        itemSelect?: Function;

        /**
         * The available actions to be displayed as items of the menu.
         */
        items?: sap.ui.unified.MenuItemBase[] | sap.ui.unified.MenuItemBase;

        /**
         * @SINCE 1.26.3
         *
         * Reference to accessible labels (ids of existing DOM elements or controls) for assistive technologies
         * like screenreaders.
         */
        ariaLabelledBy?: sap.ui.core.Control[] | string[];
      }

      interface MenuItemOpts extends sap.ui.unified.MenuItemBaseOpts {
        /**
         * Defines the text which should be displayed on the item.
         */
        text?: string;

        /**
         * Defines the icon of the {@link sap.ui.core.IconPool sap.ui.core.IconPool} or an image which should be
         * displayed on the item.
         */
        icon?: sap.ui.core.URI;

        /**
         * Association to controls / IDs which label this control (see WAI-ARIA attribute aria-labelledby).
         */
        ariaLabelledBy?: sap.ui.core.Control[] | string[];
      }

      interface MenuItemBaseOpts extends sap.ui.core.ElementOpts {
        /**
         * When an item is disabled the item can not be selected by the user. The enabled property of the item has
         * no effect when the menu of the item is disabled ({@link sap.ui.unified.Menu#getEnabled Menu#getEnabled}).
         */
        enabled?: boolean;

        /**
         * Invisible items do not appear in the menu.
         */
        visible?: boolean;

        /**
         * Defines whether a visual separator should be rendered before the item. **Note:** If an item is invisible
         * also the separator of this item is not shown.
         */
        startsSection?: boolean;

        /**
         * Fired when the item is selected by the user. **Note:** The event is also available for items which have
         * a submenu. In general, applications must not handle event in this case because the user selection opens
         * the sub menu.
         */
        select?: Function;

        /**
         * An optional submenu of the item which is opened when the item is selected by the user.
         */
        submenu?: sap.ui.unified.Menu;
      }

      interface MenuTextFieldItemOpts extends sap.ui.unified.MenuItemBaseOpts {
        /**
         * Defines the label of the text field of the item.
         */
        label?: string;

        /**
         * Defines the icon of the {@link sap.ui.core.IconPool sap.ui.core.IconPool} or an image which should be
         * displayed on the item.
         */
        icon?: sap.ui.core.URI;

        /**
         * Defines the value of the text field of the item.
         */
        value?: string;

        /**
         * Defines the value state of the text field of the item. This allows you to visualize e.g. warnings or
         * errors.
         */
        valueState?: sap.ui.core.ValueState;
      }

      interface ShellOpts extends sap.ui.unified.ShellLayoutOpts {
        /**
         * The application icon. If a custom header is set this property has no effect.
         */
        icon?: sap.ui.core.URI;

        /**
         * @deprecated (since 1.16.3) - Curtain is deprecated and replaced by ShellOverlay mechanism.
         *
         * Shows / Hides the curtain.
         */
        showCurtain?: boolean;

        /**
         * @deprecated (since 1.16.3) - Curtain is deprecated and replaced by ShellOverlay mechanism.
         *
         * Shows / Hides the side pane on the curtain.
         */
        showCurtainPane?: boolean;

        /**
         * @SINCE 1.18
         *
         * If set to false, the search area (aggregation 'search') is hidden. If a custom header is set this property
         * has no effect.
         */
        searchVisible?: boolean;

        /**
         * The content to appear in the curtain area.
         */
        curtainContent?: sap.ui.core.Control[] | sap.ui.core.Control;

        /**
         * The content to appear in the pane area of the curtain.
         */
        curtainPaneContent?: sap.ui.core.Control[] | sap.ui.core.Control;

        /**
         * The buttons shown in the begin (left in left-to-right case) of the Shell header. Currently max. 3 visible
         * buttons are supported. If a custom header is set this aggregation has no effect.
         */
        headItems?:
          | sap.ui.unified.ShellHeadItem[]
          | sap.ui.unified.ShellHeadItem;

        /**
         * The buttons shown in the end (right in left-to-right case) of the Shell header. Currently max. 3 visible
         * buttons are supported (when user is set only 1). If a custom header is set this aggregation has no effect.
         */
        headEndItems?:
          | sap.ui.unified.ShellHeadItem[]
          | sap.ui.unified.ShellHeadItem;

        /**
         * Experimental (This aggregation might change in future!): The search control which should be displayed
         * in the shell header. If a custom header is set this aggregation has no effect.
         */
        search?: sap.ui.core.Control;

        /**
         * @SINCE 1.22.0
         *
         * The user item which is rendered in the shell header beside the items. If a custom header is set this
         * aggregation has no effect.
         */
        user?: sap.ui.unified.ShellHeadUserItem;
      }

      interface ShellHeadItemOpts extends sap.ui.core.ElementOpts {
        /**
         * @deprecated (since 1.18) - Dividers are not supported anymore.
         *
         * If set to true, a divider is displayed before the item.
         */
        startsSection?: boolean;

        /**
         * @SINCE 1.22.5
         *
         * If set to true, a separator is displayed after the item.
         */
        showSeparator?: boolean;

        /**
         * Defines the toggle state in case the item represents a toggle button (see also property `toggleEnabled`).
         */
        selected?: boolean;

        /**
         * @SINCE 1.34.3
         *
         * If set to true, the item represents a toggle button. The `selected` property can the be used to define
         * the toggle state. Otherwise the item is displayed as action button. In this case the `selected` property
         * is ignored.
         */
        toggleEnabled?: boolean;

        /**
         * @deprecated (since 1.18) - Markers should not be used anymore.
         *
         * If set to true, a theme dependent marker is shown on the item.
         */
        showMarker?: boolean;

        /**
         * The icon of the item, either defined in the sap.ui.core.IconPool or a URI to a custom image. An icon
         * must be set.
         */
        icon?: sap.ui.core.URI;

        /**
         * @SINCE 1.18
         *
         * Invisible items are not shown on the UI.
         */
        visible?: boolean;

        /**
         * Event is fired when the user presses the item.
         */
        press?: Function;

        /**
         * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
         */
        ariaLabelledBy?: sap.ui.core.Control[] | string[];
      }

      interface ShellHeadUserItemOpts extends sap.ui.core.ElementOpts {
        /**
         * The name of the user.
         */
        username?: string;

        /**
         * @SINCE 1.27.0
         *
         * The user item is intended to be used for user settings. Normally these settings are done via a Menu or
         * Dialog. If this property is set to true an indicator for such a popup mechanismn is shown in the item.
         */
        showPopupIndicator?: boolean;

        /**
         * An image of the user, normally a URI to an image but also an icon from the sap.ui.core.IconPool is possible.
         */
        image?: sap.ui.core.URI;

        /**
         * Event is fired when the user presses the button.
         */
        press?: Function;

        /**
         * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
         */
        ariaLabelledBy?: sap.ui.core.Control[] | string[];
      }

      interface ShellLayoutOpts extends sap.ui.core.ControlOpts {
        /**
         * Shows / Hides the side pane.
         */
        showPane?: boolean;

        /**
         * Whether the header can be hidden (manually or automatically). This feature is only available when touch
         * events are supported.
         */
        headerHiding?: boolean;

        /**
         * If set to false, no header (and no items, search, ...) is shown.
         */
        headerVisible?: boolean;

        /**
         * The content to appear in the main canvas.
         */
        content?: sap.ui.core.Control[] | sap.ui.core.Control;

        /**
         * The content to appear in the pane area.
         */
        paneContent?: sap.ui.core.Control[] | sap.ui.core.Control;

        /**
         * The control to appear in the header area.
         */
        header?: sap.ui.core.Control;
      }

      interface ShellOverlayOpts extends sap.ui.core.ControlOpts {
        /**
         * Fired when the overlay was closed.
         */
        closed?: Function;

        /**
         * The content to appear in the overlay.
         */
        content?: sap.ui.core.Control[] | sap.ui.core.Control;

        /**
         * Experimental (This aggregation might change in future!): The search control which should be displayed
         * in the overlay header.
         */
        search?: sap.ui.core.Control;

        /**
         * Reference to the sap.ui.unified.Shell or sap.ui.unified.ShellLayout control.
         */
        shell?: sap.ui.unified.ShellLayout | string;

        /**
         * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
         */
        ariaLabelledBy?: sap.ui.core.Control[] | string[];
      }

      interface SplitContainerOpts extends sap.ui.core.ControlOpts {
        /**
         * Shows / Hides the secondary area.
         */
        showSecondaryContent?: boolean;

        /**
         * The width if the secondary content. The height is always 100%.
         */
        secondaryContentSize?: sap.ui.core.CSSSize;

        /**
         * @deprecated (since 1.22) - Only available for backwards compatibility.
         *
         * Do not use. Use secondaryContentSize instead.
         */
        secondaryContentWidth?: sap.ui.core.CSSSize;

        /**
         * @SINCE 1.22.0
         *
         * Whether to show the secondary content on the left ("Horizontal", default) or on the top ("Vertical").
         */
        orientation?: sap.ui.core.Orientation;

        /**
         * The content to appear in the main area.
         */
        content?: sap.ui.core.Control[] | sap.ui.core.Control;

        /**
         * The content to appear in the secondary area.
         */
        secondaryContent?: sap.ui.core.Control[] | sap.ui.core.Control;
      }
      /**
       * @SINCE 1.22.0
       *
       * Basic Calendar. This calendar is used for DatePickers
       */
      class Calendar extends sap.ui.core.Control {
        /**
         * Constructor for a new Calendar.
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
          mSettings?: CalendarOpts
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
        ): sap.ui.unified.Calendar;
        /**
         * @SINCE 1.38.0
         *
         * Adds some disabledDate to the aggregation {@link #getDisabledDates disabledDates}.
         */
        addDisabledDate(
          /**
           * The disabledDate to add; if empty, nothing is inserted
           */
          oDisabledDate: sap.ui.unified.DateRange
        ): sap.ui.unified.Calendar;
        /**
         * Adds some selectedDate to the aggregation {@link #getSelectedDates selectedDates}.
         */
        addSelectedDate(
          /**
           * The selectedDate to add; if empty, nothing is inserted
           */
          oSelectedDate: sap.ui.unified.DateRange
        ): sap.ui.unified.Calendar;
        /**
         * @SINCE 1.24.0
         *
         * Adds some specialDate to the aggregation {@link #getSpecialDates specialDates}.
         */
        addSpecialDate(
          /**
           * The specialDate to add; if empty, nothing is inserted
           */
          oSpecialDate: sap.ui.unified.DateTypeRange
        ): sap.ui.unified.Calendar;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:cancel cancel} event of this `sap.ui.unified.Calendar`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.Calendar` itself.
         *
         * Date selection was cancelled
         */
        attachCancel(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.Calendar` itself
           */
          oListener?: object
        ): sap.ui.unified.Calendar;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.Calendar`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.Calendar` itself.
         *
         * Date selection changed
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
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.Calendar` itself
           */
          oListener?: object
        ): sap.ui.unified.Calendar;
        /**
         * @SINCE 1.34.0
         *
         * Attaches event handler `fnFunction` to the {@link #event:startDateChange startDateChange} event of this
         * `sap.ui.unified.Calendar`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.Calendar` itself.
         *
         * `startDate` was changed while navigation in `Calendar`
         *
         * Use `getStartDate` function to determine the current start date
         */
        attachStartDateChange(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.Calendar` itself
           */
          oListener?: object
        ): sap.ui.unified.Calendar;
        /**
         * @SINCE 1.56
         *
         * Attaches event handler `fnFunction` to the {@link #event:weekNumberSelect weekNumberSelect} event of
         * this `sap.ui.unified.Calendar`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.Calendar` itself.
         *
         * Week number selection changed. By default, clicking on the week number will select the corresponding
         * week. If the week has already been selected, clicking the week number will deselect it.
         *
         * The default behavior can be prevented using the `preventDefault` method.
         *
         * **Note** Works for Gregorian calendars only and when `intervalSelection` is set to 'true'.
         */
        attachWeekNumberSelect(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.Calendar` itself
           */
          oListener?: object
        ): sap.ui.unified.Calendar;
        /**
         * @SINCE 1.38.0
         *
         * Destroys all the disabledDates in the aggregation {@link #getDisabledDates disabledDates}.
         */
        destroyDisabledDates(): sap.ui.unified.Calendar;
        /**
         * Destroys all the selectedDates in the aggregation {@link #getSelectedDates selectedDates}.
         */
        destroySelectedDates(): sap.ui.unified.Calendar;
        /**
         * @SINCE 1.24.0
         *
         * Destroys all the specialDates in the aggregation {@link #getSpecialDates specialDates}.
         */
        destroySpecialDates(): sap.ui.unified.Calendar;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:cancel cancel} event of this `sap.ui.unified.Calendar`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachCancel(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.unified.Calendar;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.ui.unified.Calendar`.
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
        ): sap.ui.unified.Calendar;
        /**
         * @SINCE 1.34.0
         *
         * Detaches event handler `fnFunction` from the {@link #event:startDateChange startDateChange} event of
         * this `sap.ui.unified.Calendar`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachStartDateChange(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.unified.Calendar;
        /**
         * @SINCE 1.56
         *
         * Detaches event handler `fnFunction` from the {@link #event:weekNumberSelect weekNumberSelect} event of
         * this `sap.ui.unified.Calendar`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachWeekNumberSelect(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.unified.Calendar;
        /**
         * @SINCE 1.28.0
         *
         * Displays a date in the calendar but don't set the focus.
         */
        displayDate(
          /**
           * JavaScript date object for focused date.
           */
          oDate: Object
        ): sap.ui.unified.Calendar;
        /**
         * Creates a new subclass of class sap.ui.unified.Calendar with name `sClassName` and enriches it with the
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
         * Fires event {@link #event:cancel cancel} to attached listeners.
         */
        fireCancel(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ui.unified.Calendar;
        /**
         * Fires event {@link #event:select select} to attached listeners.
         */
        fireSelect(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ui.unified.Calendar;
        /**
         * @SINCE 1.34.0
         *
         * Fires event {@link #event:startDateChange startDateChange} to attached listeners.
         */
        fireStartDateChange(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ui.unified.Calendar;
        /**
         * @SINCE 1.56
         *
         * Fires event {@link #event:weekNumberSelect weekNumberSelect} to attached listeners.
         *
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event
         * object.
         */
        fireWeekNumberSelect(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The selected week number.
             */
            weekNumber?: number;
            /**
             * The days of the corresponding week that are selected or deselected.
             */
            weekDays?: sap.ui.unified.DateRange;
          }
        ): boolean;
        /**
         * Sets the focused date of the calendar.
         */
        focusDate(
          /**
           * JavaScript date object for focused date.
           */
          oDate: Object
        ): sap.ui.unified.Calendar;
        /**
         * @SINCE 1.28.0
         *
         * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
         * ariaLabelledBy}.
         */
        getAriaLabelledBy(): sap.ui.core.ID[];
        /**
         * @SINCE 1.38.0
         *
         * Gets content of aggregation {@link #getDisabledDates disabledDates}.
         *
         * Dates or date ranges for disabled dates.
         *
         * To set a single date (instead of a range), set only the `startDate` property of the {@link sap.ui.unified.DateRange}
         * class.
         */
        getDisabledDates(): sap.ui.unified.DateRange[];
        /**
         * @SINCE 1.28.9
         *
         * Gets current value of property {@link #getFirstDayOfWeek firstDayOfWeek}.
         *
         * If set, the first day of the displayed week is this day. Valid values are 0 to 6. If not a valid value
         * is set, the default of the used locale is used.
         *
         * Default value is `-1`.
         */
        getFirstDayOfWeek(): number;
        /**
         * Gets current value of property {@link #getIntervalSelection intervalSelection}.
         *
         * If set, interval selection is allowed
         *
         * Default value is `false`.
         */
        getIntervalSelection(): boolean;
        /**
         * @SINCE 1.38.5
         *
         * ID of the element which is the current target of the association {@link #getLegend legend}, or `null`.
         */
        getLegend(): sap.ui.core.ID;
        /**
         * @SINCE 1.38.0
         *
         * Gets current value of property {@link #getMaxDate maxDate}.
         *
         * Maximum date that can be shown and selected in the Calendar. This must be a JavaScript date object.
         *
         * **Note:** if the date is inside of a month the complete month is displayed, but dates outside the valid
         * range can not be selected.
         *
         * **Note:** If the `maxDate` is set to be before the `minDate`, the `minDate` is set to the begin of the
         * month of the `maxDate`.
         */
        getMaxDate(): object;
        /**
         * Returns a metadata object for class sap.ui.unified.Calendar.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * @SINCE 1.38.0
         *
         * Gets current value of property {@link #getMinDate minDate}.
         *
         * Minimum date that can be shown and selected in the Calendar. This must be a JavaScript date object.
         *
         * **Note:** if the date is inside of a month the complete month is displayed, but dates outside the valid
         * range can not be selected.
         *
         * **Note:** If the `minDate` is set to be after the `maxDate`, the `maxDate` is set to the end of the month
         * of the `minDate`.
         */
        getMinDate(): object;
        /**
         * @SINCE 1.28.0
         *
         * Gets current value of property {@link #getMonths months}.
         *
         * Determines the number of months displayed.
         *
         * As of version 1.50, the duplicated dates are not displayed if there are multiple months.
         *
         * **Note:** On phones, only one month is displayed.
         *
         * Default value is `1`.
         */
        getMonths(): number;
        /**
         * @SINCE 1.28.9
         *
         * Gets current value of property {@link #getNonWorkingDays nonWorkingDays}.
         *
         * If set, the provided weekdays are displayed as non-working days. Valid values inside the array are 0
         * to 6. If not set, the weekend defined in the locale settings is displayed as non-working days.
         *
         * **Note:** Keep in mind that this property sets only weekly-recurring days as non-working. If you need
         * specific dates or dates ranges, such as national holidays, use the `specialDates` aggregation to set
         * them. Both the non-working days (from property) and dates (from aggregation) are visualized the same.
         */
        getNonWorkingDays(): number[];
        /**
         * @SINCE 1.34.0
         *
         * Gets current value of property {@link #getPrimaryCalendarType primaryCalendarType}.
         *
         * If set, the calendar type is used for display. If not set, the calendar type of the global configuration
         * is used.
         */
        getPrimaryCalendarType(): sap.ui.core.CalendarType;
        /**
         * @SINCE 1.34.0
         *
         * Gets current value of property {@link #getSecondaryCalendarType secondaryCalendarType}.
         *
         * If set, the days are also displayed in this calendar type If not set, the dates are only displayed in
         * the primary calendar type
         */
        getSecondaryCalendarType(): sap.ui.core.CalendarType;
        /**
         * Gets content of aggregation {@link #getSelectedDates selectedDates}.
         *
         * Dates or date ranges for selected dates.
         *
         * To set a single date (instead of a range), set only the `startDate` property of the {@link sap.ui.unified.DateRange}
         * class.
         */
        getSelectedDates(): sap.ui.unified.DateRange[];
        /**
         * @SINCE 1.48
         *
         * Gets current value of property {@link #getShowWeekNumbers showWeekNumbers}.
         *
         * Determines whether the week numbers in the months are displayed.
         *
         * **Note:** For Islamic calendars, the week numbers are not displayed regardless of what is set to this
         * property.
         *
         * Default value is `true`.
         */
        getShowWeekNumbers(): boolean;
        /**
         * Gets current value of property {@link #getSingleSelection singleSelection}.
         *
         * If set, only a single date or interval, if intervalSelection is enabled, can be selected
         *
         * Default value is `true`.
         */
        getSingleSelection(): boolean;
        /**
         * @SINCE 1.24.0
         *
         * Gets content of aggregation {@link #getSpecialDates specialDates}.
         *
         * Dates or date ranges with type, to visualize special days in the `Calendar`. If one day is assigned to
         * more than one Type, only the first one will be used.
         *
         * To set a single date (instead of a range), set only the `startDate` property of the {@link sap.ui.unified.DateRange}
         * class.
         *
         * **Note:** Keep in mind that the `NonWorking` type is for marking specific dates or date ranges as non-working,
         * where if you need a weekly-reccuring non-working days (weekend), you should use the `nonWorkingDays`
         * property. Both the non-working days (from property) and dates (from aggregation) are visualized the same.
         */
        getSpecialDates(): sap.ui.unified.DateTypeRange[];
        /**
         * @SINCE 1.34.1
         *
         * Returns the first day of the displayed month.
         *
         * There might be some days of the previous month shown, but they can not be focused.
         */
        getStartDate(): Object;
        /**
         * @SINCE 1.38.0
         *
         * Gets current value of property {@link #getWidth width}.
         *
         * Width of Calendar
         *
         * **Note:** There is a theme depending minimum width, so the calendar can not be set smaller.
         */
        getWidth(): sap.ui.core.CSSSize;
        /**
         * @SINCE 1.38.0
         *
         * Checks for the provided `sap.ui.unified.DateRange` in the aggregation {@link #getDisabledDates disabledDates}.
         * and returns its index if found or -1 otherwise.
         */
        indexOfDisabledDate(
          /**
           * The disabledDate whose index is looked for
           */
          oDisabledDate: sap.ui.unified.DateRange
        ): number;
        /**
         * Checks for the provided `sap.ui.unified.DateRange` in the aggregation {@link #getSelectedDates selectedDates}.
         * and returns its index if found or -1 otherwise.
         */
        indexOfSelectedDate(
          /**
           * The selectedDate whose index is looked for
           */
          oSelectedDate: sap.ui.unified.DateRange
        ): number;
        /**
         * @SINCE 1.24.0
         *
         * Checks for the provided `sap.ui.unified.DateTypeRange` in the aggregation {@link #getSpecialDates specialDates}.
         * and returns its index if found or -1 otherwise.
         */
        indexOfSpecialDate(
          /**
           * The specialDate whose index is looked for
           */
          oSpecialDate: sap.ui.unified.DateTypeRange
        ): number;
        /**
         * @SINCE 1.38.0
         *
         * Inserts a disabledDate into the aggregation {@link #getDisabledDates disabledDates}.
         */
        insertDisabledDate(
          /**
           * The disabledDate to insert; if empty, nothing is inserted
           */
          oDisabledDate: sap.ui.unified.DateRange,
          /**
           * The `0`-based index the disabledDate should be inserted at; for a negative value of `iIndex`, the disabledDate
           * is inserted at position 0; for a value greater than the current size of the aggregation, the disabledDate
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.unified.Calendar;
        /**
         * Inserts a selectedDate into the aggregation {@link #getSelectedDates selectedDates}.
         */
        insertSelectedDate(
          /**
           * The selectedDate to insert; if empty, nothing is inserted
           */
          oSelectedDate: sap.ui.unified.DateRange,
          /**
           * The `0`-based index the selectedDate should be inserted at; for a negative value of `iIndex`, the selectedDate
           * is inserted at position 0; for a value greater than the current size of the aggregation, the selectedDate
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.unified.Calendar;
        /**
         * @SINCE 1.24.0
         *
         * Inserts a specialDate into the aggregation {@link #getSpecialDates specialDates}.
         */
        insertSpecialDate(
          /**
           * The specialDate to insert; if empty, nothing is inserted
           */
          oSpecialDate: sap.ui.unified.DateTypeRange,
          /**
           * The `0`-based index the specialDate should be inserted at; for a negative value of `iIndex`, the specialDate
           * is inserted at position 0; for a value greater than the current size of the aggregation, the specialDate
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.unified.Calendar;
        /**
         * @SINCE 1.28.0
         *
         * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
         */
        removeAllAriaLabelledBy(): sap.ui.core.ID[];
        /**
         * @SINCE 1.38.0
         *
         * Removes all the controls from the aggregation {@link #getDisabledDates disabledDates}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllDisabledDates(): sap.ui.unified.DateRange[];
        /**
         * Removes all the controls from the aggregation {@link #getSelectedDates selectedDates}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllSelectedDates(): sap.ui.unified.DateRange[];
        /**
         * @SINCE 1.24.0
         *
         * Removes all the controls from the aggregation {@link #getSpecialDates specialDates}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllSpecialDates(): sap.ui.unified.DateTypeRange[];
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
         * @SINCE 1.38.0
         *
         * Removes a disabledDate from the aggregation {@link #getDisabledDates disabledDates}.
         */
        removeDisabledDate(
          /**
           * The disabledDate to remove or its index or id
           */
          vDisabledDate: number | string | sap.ui.unified.DateRange
        ): sap.ui.unified.DateRange;
        /**
         * Removes a selectedDate from the aggregation {@link #getSelectedDates selectedDates}.
         */
        removeSelectedDate(
          /**
           * The selectedDate to remove or its index or id
           */
          vSelectedDate: number | string | sap.ui.unified.DateRange
        ): sap.ui.unified.DateRange;
        /**
         * @SINCE 1.24.0
         *
         * Removes a specialDate from the aggregation {@link #getSpecialDates specialDates}.
         */
        removeSpecialDate(
          /**
           * The specialDate to remove or its index or id
           */
          vSpecialDate: number | string | sap.ui.unified.DateTypeRange
        ): sap.ui.unified.DateTypeRange;
        /**
         * @SINCE 1.28.9
         *
         * Sets a new value for property {@link #getFirstDayOfWeek firstDayOfWeek}.
         *
         * If set, the first day of the displayed week is this day. Valid values are 0 to 6. If not a valid value
         * is set, the default of the used locale is used.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `-1`.
         */
        setFirstDayOfWeek(
          /**
           * New value for property `firstDayOfWeek`
           */
          iFirstDayOfWeek: number
        ): sap.ui.unified.Calendar;
        /**
         * Sets a new value for property {@link #getIntervalSelection intervalSelection}.
         *
         * If set, interval selection is allowed
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setIntervalSelection(
          /**
           * New value for property `intervalSelection`
           */
          bIntervalSelection: boolean
        ): sap.ui.unified.Calendar;
        /**
         * @SINCE 1.38.5
         *
         * Sets the associated {@link #getLegend legend}.
         */
        setLegend(
          /**
           * ID of an element which becomes the new target of this legend association; alternatively, an element instance
           * may be given
           */
          oLegend: sap.ui.core.ID | sap.ui.unified.CalendarLegend
        ): sap.ui.unified.Calendar;
        /**
         * Sets a maximum date for the calendar.
         */
        setMaxDate(
          /**
           * a JavaScript date
           */
          oDate: Date
        ): sap.ui.unified.Calendar;
        /**
         * Sets a minimum date for the calendar.
         */
        setMinDate(
          /**
           * a JavaScript date
           */
          oDate: Date
        ): sap.ui.unified.Calendar;
        /**
         * @SINCE 1.28.0
         *
         * Sets a new value for property {@link #getMonths months}.
         *
         * Determines the number of months displayed.
         *
         * As of version 1.50, the duplicated dates are not displayed if there are multiple months.
         *
         * **Note:** On phones, only one month is displayed.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `1`.
         */
        setMonths(
          /**
           * New value for property `months`
           */
          iMonths: number
        ): sap.ui.unified.Calendar;
        /**
         * @SINCE 1.28.9
         *
         * Sets a new value for property {@link #getNonWorkingDays nonWorkingDays}.
         *
         * If set, the provided weekdays are displayed as non-working days. Valid values inside the array are 0
         * to 6. If not set, the weekend defined in the locale settings is displayed as non-working days.
         *
         * **Note:** Keep in mind that this property sets only weekly-recurring days as non-working. If you need
         * specific dates or dates ranges, such as national holidays, use the `specialDates` aggregation to set
         * them. Both the non-working days (from property) and dates (from aggregation) are visualized the same.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setNonWorkingDays(
          /**
           * New value for property `nonWorkingDays`
           */
          sNonWorkingDays: number[]
        ): sap.ui.unified.Calendar;
        /**
         * @SINCE 1.34.0
         *
         * Sets a new value for property {@link #getPrimaryCalendarType primaryCalendarType}.
         *
         * If set, the calendar type is used for display. If not set, the calendar type of the global configuration
         * is used.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setPrimaryCalendarType(
          /**
           * New value for property `primaryCalendarType`
           */
          sPrimaryCalendarType: sap.ui.core.CalendarType
        ): sap.ui.unified.Calendar;
        /**
         * @SINCE 1.34.0
         *
         * Sets a new value for property {@link #getSecondaryCalendarType secondaryCalendarType}.
         *
         * If set, the days are also displayed in this calendar type If not set, the dates are only displayed in
         * the primary calendar type
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setSecondaryCalendarType(
          /**
           * New value for property `secondaryCalendarType`
           */
          sSecondaryCalendarType: sap.ui.core.CalendarType
        ): sap.ui.unified.Calendar;
        /**
         * @SINCE 1.48
         *
         * Sets a new value for property {@link #getShowWeekNumbers showWeekNumbers}.
         *
         * Determines whether the week numbers in the months are displayed.
         *
         * **Note:** For Islamic calendars, the week numbers are not displayed regardless of what is set to this
         * property.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setShowWeekNumbers(
          /**
           * New value for property `showWeekNumbers`
           */
          bShowWeekNumbers: boolean
        ): sap.ui.unified.Calendar;
        /**
         * Sets a new value for property {@link #getSingleSelection singleSelection}.
         *
         * If set, only a single date or interval, if intervalSelection is enabled, can be selected
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setSingleSelection(
          /**
           * New value for property `singleSelection`
           */
          bSingleSelection: boolean
        ): sap.ui.unified.Calendar;
        /**
         * @SINCE 1.38.0
         *
         * Sets a new value for property {@link #getWidth width}.
         *
         * Width of Calendar
         *
         * **Note:** There is a theme depending minimum width, so the calendar can not be set smaller.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setWidth(
          /**
           * New value for property `width`
           */
          sWidth: sap.ui.core.CSSSize
        ): sap.ui.unified.Calendar;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:cancel cancel} event of this `sap.ui.unified.Calendar`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.Calendar` itself.
         *
         * Date selection was cancelled
         */
        attachCancel(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.Calendar` itself
           */
          oListener?: object
        ): sap.ui.unified.Calendar;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.Calendar`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.Calendar` itself.
         *
         * Date selection changed
         */
        attachSelect(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.Calendar` itself
           */
          oListener?: object
        ): sap.ui.unified.Calendar;
        /**
         * @SINCE 1.34.0
         *
         * Attaches event handler `fnFunction` to the {@link #event:startDateChange startDateChange} event of this
         * `sap.ui.unified.Calendar`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.Calendar` itself.
         *
         * `startDate` was changed while navigation in `Calendar`
         *
         * Use `getStartDate` function to determine the current start date
         */
        attachStartDateChange(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.Calendar` itself
           */
          oListener?: object
        ): sap.ui.unified.Calendar;
        /**
         * @SINCE 1.56
         *
         * Attaches event handler `fnFunction` to the {@link #event:weekNumberSelect weekNumberSelect} event of
         * this `sap.ui.unified.Calendar`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.Calendar` itself.
         *
         * Week number selection changed. By default, clicking on the week number will select the corresponding
         * week. If the week has already been selected, clicking the week number will deselect it.
         *
         * The default behavior can be prevented using the `preventDefault` method.
         *
         * **Note** Works for Gregorian calendars only and when `intervalSelection` is set to 'true'.
         */
        attachWeekNumberSelect(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.Calendar` itself
           */
          oListener?: object
        ): sap.ui.unified.Calendar;
      }
      /**
       * @SINCE 1.34.0
       *
       * An appointment for use in a `PlanningCalendar` or similar. The rendering must be done in the Row collecting
       * the appointments. (Because there are different visualizations possible.)
       *
       * Applications could inherit from this element to add own fields.
       */
      class CalendarAppointment extends sap.ui.unified.DateTypeRange {
        /**
         * Constructor for a new `CalendarAppointment`.
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
          mSettings?: CalendarAppointmentOpts
        );

        /**
         * Creates a new subclass of class sap.ui.unified.CalendarAppointment with name `sClassName` and enriches
         * it with the information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.unified.DateTypeRange.extend}.
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
         * @SINCE 1.46.0
         *
         * Gets current value of property {@link #getColor color}.
         *
         * Overrides the color derived from the `type` property. This property will work only with full hex color
         * with pound symbol, e.g.: #FF0000.
         */
        getColor(): sap.ui.core.CSSColor;
        /**
         * Gets current value of property {@link #getIcon icon}.
         *
         * Icon of the Appointment. (e.g. picture of the person)
         *
         * URI of an image or an icon registered in sap.ui.core.IconPool.
         */
        getIcon(): sap.ui.core.URI;
        /**
         * Gets current value of property {@link #getKey key}.
         *
         * Can be used as identifier of the appointment
         */
        getKey(): string;
        /**
         * Returns a metadata object for class sap.ui.unified.CalendarAppointment.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getSelected selected}.
         *
         * Indicates if the icon is selected.
         *
         * Default value is `false`.
         */
        getSelected(): boolean;
        /**
         * Gets current value of property {@link #getTentative tentative}.
         *
         * Indicates if the icon is tentative.
         *
         * Default value is `false`.
         */
        getTentative(): boolean;
        /**
         * Gets current value of property {@link #getText text}.
         *
         * Text of the appointment.
         */
        getText(): string;
        /**
         * Gets current value of property {@link #getTitle title}.
         *
         * Title of the appointment.
         */
        getTitle(): string;
        /**
         * @SINCE 1.46.0
         *
         * Sets a new value for property {@link #getColor color}.
         *
         * Overrides the color derived from the `type` property. This property will work only with full hex color
         * with pound symbol, e.g.: #FF0000.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setColor(
          /**
           * New value for property `color`
           */
          sColor: sap.ui.core.CSSColor
        ): sap.ui.unified.CalendarAppointment;
        /**
         * Sets a new value for property {@link #getIcon icon}.
         *
         * Icon of the Appointment. (e.g. picture of the person)
         *
         * URI of an image or an icon registered in sap.ui.core.IconPool.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setIcon(
          /**
           * New value for property `icon`
           */
          sIcon: sap.ui.core.URI
        ): sap.ui.unified.CalendarAppointment;
        /**
         * Sets a new value for property {@link #getKey key}.
         *
         * Can be used as identifier of the appointment
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setKey(
          /**
           * New value for property `key`
           */
          sKey: string
        ): sap.ui.unified.CalendarAppointment;
        /**
         * Sets a new value for property {@link #getSelected selected}.
         *
         * Indicates if the icon is selected.
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
        ): sap.ui.unified.CalendarAppointment;
        /**
         * Sets a new value for property {@link #getTentative tentative}.
         *
         * Indicates if the icon is tentative.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setTentative(
          /**
           * New value for property `tentative`
           */
          bTentative: boolean
        ): sap.ui.unified.CalendarAppointment;
        /**
         * Sets a new value for property {@link #getText text}.
         *
         * Text of the appointment.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setText(
          /**
           * New value for property `text`
           */
          sText: string
        ): sap.ui.unified.CalendarAppointment;
        /**
         * Sets a new value for property {@link #getTitle title}.
         *
         * Title of the appointment.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setTitle(
          /**
           * New value for property `title`
           */
          sTitle: string
        ): sap.ui.unified.CalendarAppointment;
      }
      /**
       * @SINCE 1.30.0
       *
       * Calendar with dates displayed in one line.
       */
      class CalendarDateInterval extends sap.ui.unified.Calendar {
        /**
         * Constructor for a new `CalendarDateInterval`.
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
          mSettings?: CalendarDateIntervalOpts
        );

        /**
         * If more than this number of days are displayed, start and end month are displayed on the button.
         */
        _getDaysLarge(): number;
        /**
         * Creates a new subclass of class sap.ui.unified.CalendarDateInterval with name `sClassName` and enriches
         * it with the information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.unified.Calendar.extend}.
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
         * Gets current value of property {@link #getDays days}.
         *
         * number of days displayed on phones the maximum rendered number of days is 8.
         *
         * Default value is `7`.
         */
        getDays(): number;
        /**
         * Returns a metadata object for class sap.ui.unified.CalendarDateInterval.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * @SINCE 1.34.0
         *
         * Gets current value of property {@link #getPickerPopup pickerPopup}.
         *
         * If set, the month- and yearPicker opens on a popup
         *
         * Default value is `false`.
         */
        getPickerPopup(): boolean;
        /**
         * @SINCE 1.34.0
         *
         * Gets current value of property {@link #getShowDayNamesLine showDayNamesLine}.
         *
         * If set the day names are shown in a separate line. If not set the day names are shown inside the single
         * days.
         *
         * Default value is `true`.
         */
        getShowDayNamesLine(): boolean;
        /**
         * Gets current value of property {@link #getStartDate startDate}.
         *
         * Start date of the Interval
         */
        // @ts-ignore
        getStartDate(): object;
        /**
         * Sets a new value for property {@link #getDays days}.
         *
         * number of days displayed on phones the maximum rendered number of days is 8.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `7`.
         */
        setDays(
          /**
           * New value for property `days`
           */
          iDays: number
        ): sap.ui.unified.CalendarDateInterval;
        /**
         * Setter for property `firstDayOfWeek`.
         *
         * Property `firstDayOfWeek` is not supported in `sap.ui.unified.CalendarDateInterval` control.
         */
        // @ts-ignore
        setFirstDayOfWeek(
          /**
           * First day of the week
           */
          iFirstDayOfWeek?: number
        ): sap.ui.unified.CalendarDateInterval;
        /**
         * Setter for property `months`.
         *
         * Property `months` is not supported in `sap.ui.unified.CalendarDateInterval` control.
         */
        // @ts-ignore
        setMonths(
          /**
           * How many months to be displayed
           */
          iMonths: number
        ): sap.ui.unified.CalendarDateInterval;
        /**
         * @SINCE 1.34.0
         *
         * Sets a new value for property {@link #getPickerPopup pickerPopup}.
         *
         * If set, the month- and yearPicker opens on a popup
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setPickerPopup(
          /**
           * New value for property `pickerPopup`
           */
          bPickerPopup: boolean
        ): sap.ui.unified.CalendarDateInterval;
        /**
         * @SINCE 1.34.0
         *
         * Sets a new value for property {@link #getShowDayNamesLine showDayNamesLine}.
         *
         * If set the day names are shown in a separate line. If not set the day names are shown inside the single
         * days.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setShowDayNamesLine(
          /**
           * New value for property `showDayNamesLine`
           */
          bShowDayNamesLine: boolean
        ): sap.ui.unified.CalendarDateInterval;
        /**
         * Sets a new value for property {@link #getStartDate startDate}.
         *
         * Start date of the Interval
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setStartDate(
          /**
           * New value for property `startDate`
           */
          oStartDate: object
        ): sap.ui.unified.CalendarDateInterval;
      }
      /**
       * @SINCE 1.24.0
       *
       * A legend for the Calendar Control. Displays special dates colors with their corresponding description.
       * The aggregation specialDates can be set herefor.
       */
      class CalendarLegend extends sap.ui.core.Control {
        /**
         * Constructor for a new CalendarLegend.
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
          mSettings?: CalendarLegendOpts
        );

        /**
         * Adds some item to the aggregation {@link #getItems items}.
         */
        addItem(
          /**
           * The item to add; if empty, nothing is inserted
           */
          oItem: sap.ui.unified.CalendarLegendItem
        ): sap.ui.unified.CalendarLegend;
        /**
         * Destroys all the items in the aggregation {@link #getItems items}.
         */
        destroyItems(): sap.ui.unified.CalendarLegend;
        /**
         * Creates a new subclass of class sap.ui.unified.CalendarLegend with name `sClassName` and enriches it
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
         * Gets current value of property {@link #getColumnWidth columnWidth}.
         *
         * Defines the width of the created columns in which the items are arranged.
         *
         * Default value is `120px`.
         */
        getColumnWidth(): sap.ui.core.CSSSize;
        /**
         * Gets content of aggregation {@link #getItems items}.
         *
         * Items to be displayed.
         */
        getItems(): sap.ui.unified.CalendarLegendItem[];
        /**
         * Returns a metadata object for class sap.ui.unified.CalendarLegend.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * @SINCE 1.54
         *
         * Gets current value of property {@link #getStandardItems standardItems}.
         *
         * Determines the standard items related to the calendar days, such as, today, selected, working and non-working.
         * Values must be one of `sap.ui.unified.StandardCalendarLegendItem`. Note: for versions 1.50 and 1.52,
         * this property was defined in the the subclass `sap.m.PlanningCalendarLegend`
         *
         * Default value is `Today,Selected,WorkingDay,NonWorkingDay`.
         */
        getStandardItems(): string[];
        /**
         * Checks for the provided `sap.ui.unified.CalendarLegendItem` in the aggregation {@link #getItems items}.
         * and returns its index if found or -1 otherwise.
         */
        indexOfItem(
          /**
           * The item whose index is looked for
           */
          oItem: sap.ui.unified.CalendarLegendItem
        ): number;
        /**
         * Inserts a item into the aggregation {@link #getItems items}.
         */
        insertItem(
          /**
           * The item to insert; if empty, nothing is inserted
           */
          oItem: sap.ui.unified.CalendarLegendItem,
          /**
           * The `0`-based index the item should be inserted at; for a negative value of `iIndex`, the item is inserted
           * at position 0; for a value greater than the current size of the aggregation, the item is inserted at
           * the last position
           */
          iIndex: number
        ): sap.ui.unified.CalendarLegend;
        /**
         * Removes all the controls from the aggregation {@link #getItems items}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllItems(): sap.ui.unified.CalendarLegendItem[];
        /**
         * Removes a item from the aggregation {@link #getItems items}.
         */
        removeItem(
          /**
           * The item to remove or its index or id
           */
          vItem: number | string | sap.ui.unified.CalendarLegendItem
        ): sap.ui.unified.CalendarLegendItem;
        /**
         * Sets a new value for property {@link #getColumnWidth columnWidth}.
         *
         * Defines the width of the created columns in which the items are arranged.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `120px`.
         */
        setColumnWidth(
          /**
           * New value for property `columnWidth`
           */
          sColumnWidth: sap.ui.core.CSSSize
        ): sap.ui.unified.CalendarLegend;
        /**
         * @SINCE 1.54
         *
         * Sets a new value for property {@link #getStandardItems standardItems}.
         *
         * Determines the standard items related to the calendar days, such as, today, selected, working and non-working.
         * Values must be one of `sap.ui.unified.StandardCalendarLegendItem`. Note: for versions 1.50 and 1.52,
         * this property was defined in the the subclass `sap.m.PlanningCalendarLegend`
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Today,Selected,WorkingDay,NonWorkingDay`.
         */
        setStandardItems(
          /**
           * New value for property `standardItems`
           */
          sStandardItems: string[]
        ): sap.ui.unified.CalendarLegend;
      }
      /**
       * @SINCE 1.24.0
       *
       * Item to be displayed in a CalendarLegend.
       */
      class CalendarLegendItem extends sap.ui.core.Element {
        /**
         * Constructor for a new CalendarLegendItem.
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
          mSettings?: CalendarLegendItemOpts
        );

        /**
         * Creates a new subclass of class sap.ui.unified.CalendarLegendItem with name `sClassName` and enriches
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
         * @SINCE 1.46.0
         *
         * Gets current value of property {@link #getColor color}.
         *
         * Overrides the color derived from the `type` property.
         */
        getColor(): sap.ui.core.CSSColor;
        /**
         * Returns a metadata object for class sap.ui.unified.CalendarLegendItem.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getText text}.
         *
         * Text to be displayed for the item.
         */
        getText(): string;
        /**
         * @SINCE 1.28.9
         *
         * Gets current value of property {@link #getType type}.
         *
         * Type of the item. If not set the type is automatically determined from the order of the items in the
         * CalendarLegend.
         *
         * Default value is `None`.
         */
        getType(): sap.ui.unified.CalendarDayType;
        /**
         * @SINCE 1.46.0
         *
         * Sets a new value for property {@link #getColor color}.
         *
         * Overrides the color derived from the `type` property.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setColor(
          /**
           * New value for property `color`
           */
          sColor: sap.ui.core.CSSColor
        ): sap.ui.unified.CalendarLegendItem;
        /**
         * Sets a new value for property {@link #getText text}.
         *
         * Text to be displayed for the item.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setText(
          /**
           * New value for property `text`
           */
          sText: string
        ): sap.ui.unified.CalendarLegendItem;
        /**
         * @SINCE 1.28.9
         *
         * Sets a new value for property {@link #getType type}.
         *
         * Type of the item. If not set the type is automatically determined from the order of the items in the
         * CalendarLegend.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `None`.
         */
        setType(
          /**
           * New value for property `type`
           */
          sType: sap.ui.unified.CalendarDayType
        ): sap.ui.unified.CalendarLegendItem;
      }
      /**
       * @SINCE 1.32.0
       *
       * Calendar with granularity of months displayed in one line.
       *
       * **Note:** JavaScript Date objects are used to set and return the months, mark them as selected or as
       * a special type. But the date part of the Date object is not used. If a Date object is returned the date
       * will be set to the 1st of the corresponding month.
       */
      class CalendarMonthInterval extends sap.ui.core.Control {
        /**
         * Constructor for a new `CalendarMonthInterval`.
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
          mSettings?: CalendarMonthIntervalOpts
        );

        /**
         * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
         */
        addAriaLabelledBy(
          /**
           * The ariaLabelledBy to add; if empty, nothing is inserted
           */
          vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control
        ): sap.ui.unified.CalendarMonthInterval;
        /**
         * Adds some selectedDate to the aggregation {@link #getSelectedDates selectedDates}.
         */
        addSelectedDate(
          /**
           * The selectedDate to add; if empty, nothing is inserted
           */
          oSelectedDate: sap.ui.unified.DateRange
        ): sap.ui.unified.CalendarMonthInterval;
        /**
         * Adds some specialDate to the aggregation {@link #getSpecialDates specialDates}.
         */
        addSpecialDate(
          /**
           * The specialDate to add; if empty, nothing is inserted
           */
          oSpecialDate: sap.ui.unified.DateTypeRange
        ): sap.ui.unified.CalendarMonthInterval;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:cancel cancel} event of this `sap.ui.unified.CalendarMonthInterval`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.CalendarMonthInterval` itself.
         *
         * Month selection was cancelled
         */
        attachCancel(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.CalendarMonthInterval`
           * itself
           */
          oListener?: object
        ): sap.ui.unified.CalendarMonthInterval;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.CalendarMonthInterval`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.CalendarMonthInterval` itself.
         *
         * Month selection changed
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
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.CalendarMonthInterval`
           * itself
           */
          oListener?: object
        ): sap.ui.unified.CalendarMonthInterval;
        /**
         * @SINCE 1.34.0
         *
         * Attaches event handler `fnFunction` to the {@link #event:startDateChange startDateChange} event of this
         * `sap.ui.unified.CalendarMonthInterval`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.CalendarMonthInterval` itself.
         *
         * `startDate` was changed while navigation in `CalendarMonthInterval`
         */
        attachStartDateChange(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.CalendarMonthInterval`
           * itself
           */
          oListener?: object
        ): sap.ui.unified.CalendarMonthInterval;
        /**
         * Destroys all the selectedDates in the aggregation {@link #getSelectedDates selectedDates}.
         */
        destroySelectedDates(): sap.ui.unified.CalendarMonthInterval;
        /**
         * Destroys all the specialDates in the aggregation {@link #getSpecialDates specialDates}.
         */
        destroySpecialDates(): sap.ui.unified.CalendarMonthInterval;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:cancel cancel} event of this `sap.ui.unified.CalendarMonthInterval`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachCancel(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.unified.CalendarMonthInterval;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.ui.unified.CalendarMonthInterval`.
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
        ): sap.ui.unified.CalendarMonthInterval;
        /**
         * @SINCE 1.34.0
         *
         * Detaches event handler `fnFunction` from the {@link #event:startDateChange startDateChange} event of
         * this `sap.ui.unified.CalendarMonthInterval`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachStartDateChange(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.unified.CalendarMonthInterval;
        /**
         * Displays a month in the `CalendarMonthInterval` but doesn't set the focus.
         */
        displayDate(
          /**
           * JavaScript date object for displayed date. (The month of this date will be displayed.)
           */
          oDatetime: Object
        ): sap.ui.unified.CalendarMonthInterval;
        /**
         * Creates a new subclass of class sap.ui.unified.CalendarMonthInterval with name `sClassName` and enriches
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
         * Fires event {@link #event:cancel cancel} to attached listeners.
         */
        fireCancel(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ui.unified.CalendarMonthInterval;
        /**
         * Fires event {@link #event:select select} to attached listeners.
         */
        fireSelect(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ui.unified.CalendarMonthInterval;
        /**
         * @SINCE 1.34.0
         *
         * Fires event {@link #event:startDateChange startDateChange} to attached listeners.
         */
        fireStartDateChange(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ui.unified.CalendarMonthInterval;
        /**
         * Sets the focused month of the `CalendarMonthInterval`.
         */
        focusDate(
          /**
           * JavaScript date object for focused date. (The month of this date will be focused.)
           */
          oDatetime: Object
        ): sap.ui.unified.Calendar;
        /**
         * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
         * ariaLabelledBy}.
         */
        getAriaLabelledBy(): sap.ui.core.ID[];
        /**
         * Gets current value of property {@link #getIntervalSelection intervalSelection}.
         *
         * If set, interval selection is allowed
         *
         * Default value is `false`.
         */
        getIntervalSelection(): boolean;
        /**
         * @SINCE 1.38.5
         *
         * ID of the element which is the current target of the association {@link #getLegend legend}, or `null`.
         */
        getLegend(): sap.ui.core.ID;
        /**
         * @SINCE 1.38.0
         *
         * Gets current value of property {@link #getMaxDate maxDate}.
         *
         * Maximum date that can be shown and selected in the Calendar. This must be a JavaScript date object.
         *
         * **Note:** If the `maxDate` is set to be before the `minDate`, the `minDate` is set to the begin of the
         * month of the `maxDate`.
         */
        getMaxDate(): object;
        /**
         * Returns a metadata object for class sap.ui.unified.CalendarMonthInterval.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * @SINCE 1.38.0
         *
         * Gets current value of property {@link #getMinDate minDate}.
         *
         * Minimum date that can be shown and selected in the Calendar. This must be a JavaScript date object.
         *
         * **Note:** If the `minDate` is set to be after the `maxDate`, the `maxDate` is set to the end of the month
         * of the `minDate`.
         */
        getMinDate(): object;
        /**
         * Gets current value of property {@link #getMonths months}.
         *
         * Number of months displayed
         *
         * **Note:** On phones, the maximum number of months displayed in the row is always 6.
         *
         * Default value is `12`.
         */
        getMonths(): number;
        /**
         * @SINCE 1.34.0
         *
         * Gets current value of property {@link #getPickerPopup pickerPopup}.
         *
         * If set, the yearPicker opens on a popup
         *
         * Default value is `false`.
         */
        getPickerPopup(): boolean;
        /**
         * Gets content of aggregation {@link #getSelectedDates selectedDates}.
         *
         * Date ranges for selected dates of the `CalendarMonthInterval`.
         *
         * If `singleSelection` is set, only the first entry is used.
         *
         * **Note:** Even if only one day is selected, the whole corresponding month is selected.
         */
        getSelectedDates(): sap.ui.unified.DateRange[];
        /**
         * Gets current value of property {@link #getSingleSelection singleSelection}.
         *
         * If set, only a single date or interval, if `intervalSelection` is enabled, can be selected
         *
         * **Note:** Selection of multiple intervals is not supported in the current version.
         *
         * Default value is `true`.
         */
        getSingleSelection(): boolean;
        /**
         * Gets content of aggregation {@link #getSpecialDates specialDates}.
         *
         * Date ranges with type to visualize special months in the `CalendarMonthInterval`. If one day is assigned
         * to more than one type, only the first one will be used.
         *
         * **Note:** Even if only one day is set as a special day, the whole corresponding month is displayed in
         * this way.
         */
        getSpecialDates(): sap.ui.unified.DateTypeRange[];
        /**
         * Gets current value of property {@link #getStartDate startDate}.
         *
         * Start date of the Interval as JavaScript Date object. The month of this Date will be the first month
         * in the displayed row.
         */
        getStartDate(): object;
        /**
         * Gets current value of property {@link #getWidth width}.
         *
         * Width of the `CalendarMonthInterval`. The width of the single months depends on this width.
         */
        getWidth(): sap.ui.core.CSSSize;
        /**
         * Checks for the provided `sap.ui.unified.DateRange` in the aggregation {@link #getSelectedDates selectedDates}.
         * and returns its index if found or -1 otherwise.
         */
        indexOfSelectedDate(
          /**
           * The selectedDate whose index is looked for
           */
          oSelectedDate: sap.ui.unified.DateRange
        ): number;
        /**
         * Checks for the provided `sap.ui.unified.DateTypeRange` in the aggregation {@link #getSpecialDates specialDates}.
         * and returns its index if found or -1 otherwise.
         */
        indexOfSpecialDate(
          /**
           * The specialDate whose index is looked for
           */
          oSpecialDate: sap.ui.unified.DateTypeRange
        ): number;
        /**
         * Inserts a selectedDate into the aggregation {@link #getSelectedDates selectedDates}.
         */
        insertSelectedDate(
          /**
           * The selectedDate to insert; if empty, nothing is inserted
           */
          oSelectedDate: sap.ui.unified.DateRange,
          /**
           * The `0`-based index the selectedDate should be inserted at; for a negative value of `iIndex`, the selectedDate
           * is inserted at position 0; for a value greater than the current size of the aggregation, the selectedDate
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.unified.CalendarMonthInterval;
        /**
         * Inserts a specialDate into the aggregation {@link #getSpecialDates specialDates}.
         */
        insertSpecialDate(
          /**
           * The specialDate to insert; if empty, nothing is inserted
           */
          oSpecialDate: sap.ui.unified.DateTypeRange,
          /**
           * The `0`-based index the specialDate should be inserted at; for a negative value of `iIndex`, the specialDate
           * is inserted at position 0; for a value greater than the current size of the aggregation, the specialDate
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.unified.CalendarMonthInterval;
        /**
         * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
         */
        removeAllAriaLabelledBy(): sap.ui.core.ID[];
        /**
         * Removes all the controls from the aggregation {@link #getSelectedDates selectedDates}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllSelectedDates(): sap.ui.unified.DateRange[];
        /**
         * Removes all the controls from the aggregation {@link #getSpecialDates specialDates}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllSpecialDates(): sap.ui.unified.DateTypeRange[];
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
         * Removes a selectedDate from the aggregation {@link #getSelectedDates selectedDates}.
         */
        removeSelectedDate(
          /**
           * The selectedDate to remove or its index or id
           */
          vSelectedDate: number | string | sap.ui.unified.DateRange
        ): sap.ui.unified.DateRange;
        /**
         * Removes a specialDate from the aggregation {@link #getSpecialDates specialDates}.
         */
        removeSpecialDate(
          /**
           * The specialDate to remove or its index or id
           */
          vSpecialDate: number | string | sap.ui.unified.DateTypeRange
        ): sap.ui.unified.DateTypeRange;
        /**
         * Sets a new value for property {@link #getIntervalSelection intervalSelection}.
         *
         * If set, interval selection is allowed
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setIntervalSelection(
          /**
           * New value for property `intervalSelection`
           */
          bIntervalSelection: boolean
        ): sap.ui.unified.CalendarMonthInterval;
        /**
         * @SINCE 1.38.5
         *
         * Sets the associated {@link #getLegend legend}.
         */
        setLegend(
          /**
           * ID of an element which becomes the new target of this legend association; alternatively, an element instance
           * may be given
           */
          oLegend: sap.ui.core.ID | sap.ui.unified.CalendarLegend
        ): sap.ui.unified.CalendarMonthInterval;
        /**
         * @SINCE 1.38.0
         *
         * Sets a new value for property {@link #getMaxDate maxDate}.
         *
         * Maximum date that can be shown and selected in the Calendar. This must be a JavaScript date object.
         *
         * **Note:** If the `maxDate` is set to be before the `minDate`, the `minDate` is set to the begin of the
         * month of the `maxDate`.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setMaxDate(
          /**
           * New value for property `maxDate`
           */
          oMaxDate: object
        ): sap.ui.unified.CalendarMonthInterval;
        /**
         * @SINCE 1.38.0
         *
         * Sets a new value for property {@link #getMinDate minDate}.
         *
         * Minimum date that can be shown and selected in the Calendar. This must be a JavaScript date object.
         *
         * **Note:** If the `minDate` is set to be after the `maxDate`, the `maxDate` is set to the end of the month
         * of the `minDate`.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setMinDate(
          /**
           * New value for property `minDate`
           */
          oMinDate: object
        ): sap.ui.unified.CalendarMonthInterval;
        /**
         * Sets a new value for property {@link #getMonths months}.
         *
         * Number of months displayed
         *
         * **Note:** On phones, the maximum number of months displayed in the row is always 6.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `12`.
         */
        setMonths(
          /**
           * New value for property `months`
           */
          iMonths: number
        ): sap.ui.unified.CalendarMonthInterval;
        /**
         * @SINCE 1.34.0
         *
         * Sets a new value for property {@link #getPickerPopup pickerPopup}.
         *
         * If set, the yearPicker opens on a popup
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setPickerPopup(
          /**
           * New value for property `pickerPopup`
           */
          bPickerPopup: boolean
        ): sap.ui.unified.CalendarMonthInterval;
        /**
         * Sets a new value for property {@link #getSingleSelection singleSelection}.
         *
         * If set, only a single date or interval, if `intervalSelection` is enabled, can be selected
         *
         * **Note:** Selection of multiple intervals is not supported in the current version.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setSingleSelection(
          /**
           * New value for property `singleSelection`
           */
          bSingleSelection: boolean
        ): sap.ui.unified.CalendarMonthInterval;
        /**
         * Sets a new value for property {@link #getStartDate startDate}.
         *
         * Start date of the Interval as JavaScript Date object. The month of this Date will be the first month
         * in the displayed row.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setStartDate(
          /**
           * New value for property `startDate`
           */
          oStartDate: object
        ): sap.ui.unified.CalendarMonthInterval;
        /**
         * Sets a new value for property {@link #getWidth width}.
         *
         * Width of the `CalendarMonthInterval`. The width of the single months depends on this width.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setWidth(
          /**
           * New value for property `width`
           */
          sWidth: sap.ui.core.CSSSize
        ): sap.ui.unified.CalendarMonthInterval;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:cancel cancel} event of this `sap.ui.unified.CalendarMonthInterval`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.CalendarMonthInterval` itself.
         *
         * Month selection was cancelled
         */
        attachCancel(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.CalendarMonthInterval`
           * itself
           */
          oListener?: object
        ): sap.ui.unified.CalendarMonthInterval;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.CalendarMonthInterval`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.CalendarMonthInterval` itself.
         *
         * Month selection changed
         */
        attachSelect(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.CalendarMonthInterval`
           * itself
           */
          oListener?: object
        ): sap.ui.unified.CalendarMonthInterval;
        /**
         * @SINCE 1.34.0
         *
         * Attaches event handler `fnFunction` to the {@link #event:startDateChange startDateChange} event of this
         * `sap.ui.unified.CalendarMonthInterval`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.CalendarMonthInterval` itself.
         *
         * `startDate` was changed while navigation in `CalendarMonthInterval`
         */
        attachStartDateChange(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.CalendarMonthInterval`
           * itself
           */
          oListener?: object
        ): sap.ui.unified.CalendarMonthInterval;
      }
      /**
       * @SINCE 1.34.0
       *
       * A calendar row with a header and appointments. The Appointments will be placed in the defined interval.
       */
      class CalendarRow extends sap.ui.core.Control {
        /**
         * Constructor for a new `CalendarRow`.
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
          mSettings?: CalendarRowOpts
        );

        /**
         * Adds some appointment to the aggregation {@link #getAppointments appointments}.
         */
        addAppointment(
          /**
           * The appointment to add; if empty, nothing is inserted
           */
          oAppointment: sap.ui.unified.CalendarAppointment
        ): sap.ui.unified.CalendarRow;
        /**
         * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
         */
        addAriaLabelledBy(
          /**
           * The ariaLabelledBy to add; if empty, nothing is inserted
           */
          vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control
        ): sap.ui.unified.CalendarRow;
        /**
         * Adds some intervalHeader to the aggregation {@link #getIntervalHeaders intervalHeaders}.
         */
        addIntervalHeader(
          /**
           * The intervalHeader to add; if empty, nothing is inserted
           */
          oIntervalHeader: sap.ui.unified.CalendarAppointment
        ): sap.ui.unified.CalendarRow;
        /**
         * @SINCE 1.38.0
         *
         * Attaches event handler `fnFunction` to the {@link #event:intervalSelect intervalSelect} event of this
         * `sap.ui.unified.CalendarRow`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.CalendarRow` itself.
         *
         * Fired if an interval was selected
         */
        attachIntervalSelect(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.CalendarRow` itself
           */
          oListener?: object
        ): sap.ui.unified.CalendarRow;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:leaveRow leaveRow} event of this `sap.ui.unified.CalendarRow`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.CalendarRow` itself.
         *
         * The `CalendarRow` should be left while navigating. (Arrow up or arrow down.) The caller should determine
         * the next control to be focused
         */
        attachLeaveRow(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.CalendarRow` itself
           */
          oListener?: object
        ): sap.ui.unified.CalendarRow;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.CalendarRow`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.CalendarRow` itself.
         *
         * Fired if an appointment was selected
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
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.CalendarRow` itself
           */
          oListener?: object
        ): sap.ui.unified.CalendarRow;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:startDateChange startDateChange} event of this
         * `sap.ui.unified.CalendarRow`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.CalendarRow` itself.
         *
         * `startDate` was changed while navigating in `CalendarRow`
         */
        attachStartDateChange(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.CalendarRow` itself
           */
          oListener?: object
        ): sap.ui.unified.CalendarRow;
        /**
         * Destroys all the appointments in the aggregation {@link #getAppointments appointments}.
         */
        destroyAppointments(): sap.ui.unified.CalendarRow;
        /**
         * Destroys all the intervalHeaders in the aggregation {@link #getIntervalHeaders intervalHeaders}.
         */
        destroyIntervalHeaders(): sap.ui.unified.CalendarRow;
        /**
         * @SINCE 1.38.0
         *
         * Detaches event handler `fnFunction` from the {@link #event:intervalSelect intervalSelect} event of this
         * `sap.ui.unified.CalendarRow`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachIntervalSelect(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.unified.CalendarRow;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:leaveRow leaveRow} event of this `sap.ui.unified.CalendarRow`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachLeaveRow(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.unified.CalendarRow;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.ui.unified.CalendarRow`.
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
        ): sap.ui.unified.CalendarRow;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:startDateChange startDateChange} event of
         * this `sap.ui.unified.CalendarRow`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachStartDateChange(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.unified.CalendarRow;
        /**
         * Creates a new subclass of class sap.ui.unified.CalendarRow with name `sClassName` and enriches it with
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
         * @SINCE 1.38.0
         *
         * Fires event {@link #event:intervalSelect intervalSelect} to attached listeners.
         */
        fireIntervalSelect(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * Interval start date as JavaScript date object
             */
            startDate?: object;
            /**
             * Interval end date as JavaScript date object
             */
            endDate?: object;
            /**
             * If set, the selected interval is a subinterval
             */
            subInterval?: boolean;
          }
        ): sap.ui.unified.CalendarRow;
        /**
         * Fires event {@link #event:leaveRow leaveRow} to attached listeners.
         */
        fireLeaveRow(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The type of the event that triggers this `leaveRow`
             */
            type?: string;
          }
        ): sap.ui.unified.CalendarRow;
        /**
         * Fires event {@link #event:select select} to attached listeners.
         */
        fireSelect(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * selected appointment
             */
            appointment?: sap.ui.unified.CalendarAppointment;
            /**
             * selected appointments in case a group appointment is selected
             */
            appointments?: sap.ui.unified.CalendarAppointment[];
            /**
             * If set, the appointment was selected by multiple selection (e.g. shift + mouse click). So more than the
             * current appointment could be selected.
             */
            multiSelect?: boolean;
            /**
             * Gives the ID of the DOM element of the clicked appointment
             */
            domRefId?: string;
          }
        ): sap.ui.unified.CalendarRow;
        /**
         * Fires event {@link #event:startDateChange startDateChange} to attached listeners.
         */
        fireStartDateChange(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ui.unified.CalendarRow;
        /**
         * Focus the given `CalendarAppointment` in the `CalendarRow`.
         */
        focusAppointment(
          /**
           * Appointment to be focused.
           */
          oAppointment: sap.ui.unified.CalendarAppointment
        ): sap.ui.unified.CalendarRow;
        /**
         * Focus the `CalendarAppointment` in the `CalendarRow` that is nearest to the given date.
         */
        focusNearestAppointment(
          /**
           * Javascript Date object.
           */
          oDate: object
        ): sap.ui.unified.CalendarRow;
        /**
         * Gets content of aggregation {@link #getAppointments appointments}.
         *
         * Appointments to be displayed in the row. Appointments outside the visible time frame are not rendered.
         *
         * **Note:** For performance reasons, only appointments in the visible time range or nearby should be assigned.
         */
        getAppointments(): sap.ui.unified.CalendarAppointment[];
        /**
         * @SINCE 1.38.0
         *
         * Gets current value of property {@link #getAppointmentsReducedHeight appointmentsReducedHeight}.
         *
         * If set the appointments without text (only title) are rendered with a smaller height.
         *
         * **Note:** On phone devices this property is ignored, appointments are always rendered in full height
         * to allow touching.
         *
         * Default value is `false`.
         */
        getAppointmentsReducedHeight(): boolean;
        /**
         * @SINCE 1.40.0
         *
         * Gets current value of property {@link #getAppointmentsVisualization appointmentsVisualization}.
         *
         * Defines the visualization of the `CalendarAppoinment`
         *
         * **Note:** The real visualization depends on the used theme.
         *
         * Default value is `Standard`.
         */
        getAppointmentsVisualization(): sap.ui.unified.CalendarAppointmentVisualization;
        /**
         * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
         * ariaLabelledBy}.
         */
        getAriaLabelledBy(): sap.ui.core.ID[];
        /**
         * Gets current value of property {@link #getCheckResize checkResize}.
         *
         * If set, the `CalendarRow` checks for resize by itself.
         *
         * If a lot of `CalendarRow` controls are used in one container control (like `PlanningCalendar`). the resize
         * checks should be done only by this container control. Then the container control should call `handleResize`
         * of the `CalendarRow` if a resize happens.
         *
         * Default value is `true`.
         */
        getCheckResize(): boolean;
        /**
         * Returns the focused `CalendarAppointment` of the `CalendarRow`.
         *
         * The focus must not really be on the `CalendarAppointment`, it have just to be the one that has the focus
         * when the `CalendarRow` was focused last time.
         */
        getFocusedAppointment(): sap.ui.unified.CalendarAppointment;
        /**
         * Gets current value of property {@link #getGroupAppointmentsMode groupAppointmentsMode}.
         *
         * Defines the mode in which the overlapping appointments are displayed.
         *
         * **Note:** This property takes effect, only if the `intervalType` of the current calendar view is set
         * to `sap.ui.unified.CalendarIntervalType.Month`. On phone devices this property is ignored, and the default
         * value is applied.
         *
         * Default value is `Collapsed`.
         */
        getGroupAppointmentsMode(): sap.ui.unified.GroupAppointmentsMode;
        /**
         * Gets current value of property {@link #getHeight height}.
         *
         * Height of the row
         */
        getHeight(): sap.ui.core.CSSSize;
        /**
         * Gets content of aggregation {@link #getIntervalHeaders intervalHeaders}.
         *
         * Appointments to be displayed in the top of the intervals. The `intervalHeaders` are used to visualize
         * public holidays and similar things.
         *
         * Appointments outside the visible time frame are not rendered.
         *
         * The `intervalHeaders` always fill whole intervals. If they are shorter than one interval, they are not
         * displayed.
         *
         * **Note:** For performance reasons, only appointments in the visible time range or nearby should be assigned.
         */
        getIntervalHeaders(): sap.ui.unified.CalendarAppointment[];
        /**
         * Gets current value of property {@link #getIntervals intervals}.
         *
         * Number of displayed intervals. The size of the intervals is defined with `intervalType`
         *
         * Default value is `12`.
         */
        getIntervals(): number;
        /**
         * Gets current value of property {@link #getIntervalType intervalType}.
         *
         * Type of the intervals of the row. The default is one hour.
         *
         * Default value is `Hour`.
         */
        getIntervalType(): sap.ui.unified.CalendarIntervalType;
        /**
         * @SINCE 1.40.0
         *
         * ID of the element which is the current target of the association {@link #getLegend legend}, or `null`.
         */
        getLegend(): sap.ui.core.ID;
        /**
         * Returns a metadata object for class sap.ui.unified.CalendarRow.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getNonWorkingDays nonWorkingDays}.
         *
         * If set, the provided weekdays are displayed as non-working days. Valid values inside the array are 0
         * to 6. (Other values will just be ignored.)
         *
         * If not set, the weekend defined in the locale settings is displayed as non-working days.
         *
         * **Note:** The non working days are only visualized if `intervalType` is set to day.
         */
        getNonWorkingDays(): number[];
        /**
         * Gets current value of property {@link #getNonWorkingHours nonWorkingHours}.
         *
         * If set, the provided hours are displayed as non-working hours. Valid values inside the array are 0 to
         * 23. (Other values will just be ignored.)
         *
         * **Note:** The non working hours are only visualized if `intervalType` is set to hour.
         */
        getNonWorkingHours(): number[];
        /**
         * @SINCE 1.38.0
         *
         * Gets current value of property {@link #getShowEmptyIntervalHeaders showEmptyIntervalHeaders}.
         *
         * If set, interval headers are shown even if no `intervalHeaders` are assigned to the visible time frame.
         *
         * If not set, no interval headers are shown if no `intervalHeaders` are assigned.
         *
         * **Note:** This property is only used if `showIntervalHeaders` is set to true.
         *
         * Default value is `true`.
         */
        getShowEmptyIntervalHeaders(): boolean;
        /**
         * Gets current value of property {@link #getShowIntervalHeaders showIntervalHeaders}.
         *
         * If set, interval headers are shown like specified in `showEmptyIntervalHeaders`.
         *
         * If not set, no interval headers are shown even if `intervalHeaders` are assigned.
         *
         * Default value is `true`.
         */
        getShowIntervalHeaders(): boolean;
        /**
         * Gets current value of property {@link #getShowSubIntervals showSubIntervals}.
         *
         * If set, subintervals are shown.
         *
         * If the interval type is `Hour`, quarter hours are shown.
         *
         * If the interval type is `Day`, hours are shown.
         *
         * If the interval type is `Month`, days are shown.
         *
         * Default value is `false`.
         */
        getShowSubIntervals(): boolean;
        /**
         * Gets current value of property {@link #getStartDate startDate}.
         *
         * Start date, as JavaScript Date object, of the row. As default, the current date is used.
         */
        getStartDate(): object;
        /**
         * Gets current value of property {@link #getUpdateCurrentTime updateCurrentTime}.
         *
         * If set the `CalendarRow` triggers a periodic update to visualize the current time.
         *
         * If a lot of `CalendarRow` controls are used in one container control (like `PlanningCalendar`) the periodic
         * update should be triggered only by this container control. Then the container control should call `updateCurrentTimeVisualization`
         * of the `CalendarRow` to update the visualization.
         *
         * Default value is `true`.
         */
        getUpdateCurrentTime(): boolean;
        /**
         * Gets current value of property {@link #getWidth width}.
         *
         * Width of the row
         */
        getWidth(): sap.ui.core.CSSSize;
        /**
         * After a resize of the `CalendarRow`, some calculations for appointment sizes are needed.
         *
         * For this, each `CalendarRow` can trigger the resize check for it's own DOM. But if multiple `CalendarRow`s
         * are used in one container (e.g. `PlanningCalendar`), it is better if the container triggers the resize
         * check once and then calls this function of each `CalendarRow`.
         */
        handleResize(
          /**
           * The event object of the resize handler.
           */
          oEvent: any
        ): sap.ui.unified.CalendarRow;
        /**
         * Checks for the provided `sap.ui.unified.CalendarAppointment` in the aggregation {@link #getAppointments
         * appointments}. and returns its index if found or -1 otherwise.
         */
        indexOfAppointment(
          /**
           * The appointment whose index is looked for
           */
          oAppointment: sap.ui.unified.CalendarAppointment
        ): number;
        /**
         * Checks for the provided `sap.ui.unified.CalendarAppointment` in the aggregation {@link #getIntervalHeaders
         * intervalHeaders}. and returns its index if found or -1 otherwise.
         */
        indexOfIntervalHeader(
          /**
           * The intervalHeader whose index is looked for
           */
          oIntervalHeader: sap.ui.unified.CalendarAppointment
        ): number;
        /**
         * Inserts a appointment into the aggregation {@link #getAppointments appointments}.
         */
        insertAppointment(
          /**
           * The appointment to insert; if empty, nothing is inserted
           */
          oAppointment: sap.ui.unified.CalendarAppointment,
          /**
           * The `0`-based index the appointment should be inserted at; for a negative value of `iIndex`, the appointment
           * is inserted at position 0; for a value greater than the current size of the aggregation, the appointment
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.unified.CalendarRow;
        /**
         * Inserts a intervalHeader into the aggregation {@link #getIntervalHeaders intervalHeaders}.
         */
        insertIntervalHeader(
          /**
           * The intervalHeader to insert; if empty, nothing is inserted
           */
          oIntervalHeader: sap.ui.unified.CalendarAppointment,
          /**
           * The `0`-based index the intervalHeader should be inserted at; for a negative value of `iIndex`, the intervalHeader
           * is inserted at position 0; for a value greater than the current size of the aggregation, the intervalHeader
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.unified.CalendarRow;
        /**
         * Removes all the controls from the aggregation {@link #getAppointments appointments}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllAppointments(): sap.ui.unified.CalendarAppointment[];
        /**
         * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
         */
        removeAllAriaLabelledBy(): sap.ui.core.ID[];
        /**
         * Removes all the controls from the aggregation {@link #getIntervalHeaders intervalHeaders}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllIntervalHeaders(): sap.ui.unified.CalendarAppointment[];
        /**
         * Removes a appointment from the aggregation {@link #getAppointments appointments}.
         */
        removeAppointment(
          /**
           * The appointment to remove or its index or id
           */
          vAppointment: number | string | sap.ui.unified.CalendarAppointment
        ): sap.ui.unified.CalendarAppointment;
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
         * Removes a intervalHeader from the aggregation {@link #getIntervalHeaders intervalHeaders}.
         */
        removeIntervalHeader(
          /**
           * The intervalHeader to remove or its index or id
           */
          vIntervalHeader: number | string | sap.ui.unified.CalendarAppointment
        ): sap.ui.unified.CalendarAppointment;
        /**
         * @SINCE 1.38.0
         *
         * Sets a new value for property {@link #getAppointmentsReducedHeight appointmentsReducedHeight}.
         *
         * If set the appointments without text (only title) are rendered with a smaller height.
         *
         * **Note:** On phone devices this property is ignored, appointments are always rendered in full height
         * to allow touching.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setAppointmentsReducedHeight(
          /**
           * New value for property `appointmentsReducedHeight`
           */
          bAppointmentsReducedHeight: boolean
        ): sap.ui.unified.CalendarRow;
        /**
         * @SINCE 1.40.0
         *
         * Sets a new value for property {@link #getAppointmentsVisualization appointmentsVisualization}.
         *
         * Defines the visualization of the `CalendarAppoinment`
         *
         * **Note:** The real visualization depends on the used theme.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Standard`.
         */
        setAppointmentsVisualization(
          /**
           * New value for property `appointmentsVisualization`
           */
          sAppointmentsVisualization: sap.ui.unified.CalendarAppointmentVisualization
        ): sap.ui.unified.CalendarRow;
        /**
         * Sets a new value for property {@link #getCheckResize checkResize}.
         *
         * If set, the `CalendarRow` checks for resize by itself.
         *
         * If a lot of `CalendarRow` controls are used in one container control (like `PlanningCalendar`). the resize
         * checks should be done only by this container control. Then the container control should call `handleResize`
         * of the `CalendarRow` if a resize happens.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setCheckResize(
          /**
           * New value for property `checkResize`
           */
          bCheckResize: boolean
        ): sap.ui.unified.CalendarRow;
        /**
         * Sets a new value for property {@link #getGroupAppointmentsMode groupAppointmentsMode}.
         *
         * Defines the mode in which the overlapping appointments are displayed.
         *
         * **Note:** This property takes effect, only if the `intervalType` of the current calendar view is set
         * to `sap.ui.unified.CalendarIntervalType.Month`. On phone devices this property is ignored, and the default
         * value is applied.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Collapsed`.
         */
        setGroupAppointmentsMode(
          /**
           * New value for property `groupAppointmentsMode`
           */
          sGroupAppointmentsMode: sap.ui.unified.GroupAppointmentsMode
        ): sap.ui.unified.CalendarRow;
        /**
         * Sets a new value for property {@link #getHeight height}.
         *
         * Height of the row
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setHeight(
          /**
           * New value for property `height`
           */
          sHeight: sap.ui.core.CSSSize
        ): sap.ui.unified.CalendarRow;
        /**
         * Sets a new value for property {@link #getIntervals intervals}.
         *
         * Number of displayed intervals. The size of the intervals is defined with `intervalType`
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `12`.
         */
        setIntervals(
          /**
           * New value for property `intervals`
           */
          iIntervals: number
        ): sap.ui.unified.CalendarRow;
        /**
         * Sets a new value for property {@link #getIntervalType intervalType}.
         *
         * Type of the intervals of the row. The default is one hour.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Hour`.
         */
        setIntervalType(
          /**
           * New value for property `intervalType`
           */
          sIntervalType: sap.ui.unified.CalendarIntervalType
        ): sap.ui.unified.CalendarRow;
        /**
         * @SINCE 1.40.0
         *
         * Sets the associated {@link #getLegend legend}.
         */
        setLegend(
          /**
           * ID of an element which becomes the new target of this legend association; alternatively, an element instance
           * may be given
           */
          oLegend: sap.ui.core.ID | sap.ui.unified.CalendarLegend
        ): sap.ui.unified.CalendarRow;
        /**
         * Sets a new value for property {@link #getNonWorkingDays nonWorkingDays}.
         *
         * If set, the provided weekdays are displayed as non-working days. Valid values inside the array are 0
         * to 6. (Other values will just be ignored.)
         *
         * If not set, the weekend defined in the locale settings is displayed as non-working days.
         *
         * **Note:** The non working days are only visualized if `intervalType` is set to day.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setNonWorkingDays(
          /**
           * New value for property `nonWorkingDays`
           */
          sNonWorkingDays: number[]
        ): sap.ui.unified.CalendarRow;
        /**
         * Sets a new value for property {@link #getNonWorkingHours nonWorkingHours}.
         *
         * If set, the provided hours are displayed as non-working hours. Valid values inside the array are 0 to
         * 23. (Other values will just be ignored.)
         *
         * **Note:** The non working hours are only visualized if `intervalType` is set to hour.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setNonWorkingHours(
          /**
           * New value for property `nonWorkingHours`
           */
          sNonWorkingHours: number[]
        ): sap.ui.unified.CalendarRow;
        /**
         * @SINCE 1.38.0
         *
         * Sets a new value for property {@link #getShowEmptyIntervalHeaders showEmptyIntervalHeaders}.
         *
         * If set, interval headers are shown even if no `intervalHeaders` are assigned to the visible time frame.
         *
         * If not set, no interval headers are shown if no `intervalHeaders` are assigned.
         *
         * **Note:** This property is only used if `showIntervalHeaders` is set to true.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setShowEmptyIntervalHeaders(
          /**
           * New value for property `showEmptyIntervalHeaders`
           */
          bShowEmptyIntervalHeaders: boolean
        ): sap.ui.unified.CalendarRow;
        /**
         * Sets a new value for property {@link #getShowIntervalHeaders showIntervalHeaders}.
         *
         * If set, interval headers are shown like specified in `showEmptyIntervalHeaders`.
         *
         * If not set, no interval headers are shown even if `intervalHeaders` are assigned.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setShowIntervalHeaders(
          /**
           * New value for property `showIntervalHeaders`
           */
          bShowIntervalHeaders: boolean
        ): sap.ui.unified.CalendarRow;
        /**
         * Sets a new value for property {@link #getShowSubIntervals showSubIntervals}.
         *
         * If set, subintervals are shown.
         *
         * If the interval type is `Hour`, quarter hours are shown.
         *
         * If the interval type is `Day`, hours are shown.
         *
         * If the interval type is `Month`, days are shown.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setShowSubIntervals(
          /**
           * New value for property `showSubIntervals`
           */
          bShowSubIntervals: boolean
        ): sap.ui.unified.CalendarRow;
        /**
         * Sets a new value for property {@link #getStartDate startDate}.
         *
         * Start date, as JavaScript Date object, of the row. As default, the current date is used.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setStartDate(
          /**
           * New value for property `startDate`
           */
          oStartDate: object
        ): sap.ui.unified.CalendarRow;
        /**
         * Sets a new value for property {@link #getUpdateCurrentTime updateCurrentTime}.
         *
         * If set the `CalendarRow` triggers a periodic update to visualize the current time.
         *
         * If a lot of `CalendarRow` controls are used in one container control (like `PlanningCalendar`) the periodic
         * update should be triggered only by this container control. Then the container control should call `updateCurrentTimeVisualization`
         * of the `CalendarRow` to update the visualization.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setUpdateCurrentTime(
          /**
           * New value for property `updateCurrentTime`
           */
          bUpdateCurrentTime: boolean
        ): sap.ui.unified.CalendarRow;
        /**
         * Sets a new value for property {@link #getWidth width}.
         *
         * Width of the row
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setWidth(
          /**
           * New value for property `width`
           */
          sWidth: sap.ui.core.CSSSize
        ): sap.ui.unified.CalendarRow;
        /**
         * If the current time is in the visible output of the `CalendarRow`, the indicator for the current time
         * must be positioned.
         *
         * For this, each `CalendarRow` can trigger a timer. But if multiple `CalendarRow`s are used in one container
         * (e.G. `PlanningCalendar`), it is better if the container triggers the interval once and then calls this
         * function of each `CalendarRow`.
         */
        updateCurrentTimeVisualization(): sap.ui.unified.CalendarRow;
        /**
         * @SINCE 1.38.0
         *
         * Attaches event handler `fnFunction` to the {@link #event:intervalSelect intervalSelect} event of this
         * `sap.ui.unified.CalendarRow`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.CalendarRow` itself.
         *
         * Fired if an interval was selected
         */
        attachIntervalSelect(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.CalendarRow` itself
           */
          oListener?: object
        ): sap.ui.unified.CalendarRow;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:leaveRow leaveRow} event of this `sap.ui.unified.CalendarRow`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.CalendarRow` itself.
         *
         * The `CalendarRow` should be left while navigating. (Arrow up or arrow down.) The caller should determine
         * the next control to be focused
         */
        attachLeaveRow(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.CalendarRow` itself
           */
          oListener?: object
        ): sap.ui.unified.CalendarRow;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.CalendarRow`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.CalendarRow` itself.
         *
         * Fired if an appointment was selected
         */
        attachSelect(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.CalendarRow` itself
           */
          oListener?: object
        ): sap.ui.unified.CalendarRow;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:startDateChange startDateChange} event of this
         * `sap.ui.unified.CalendarRow`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.CalendarRow` itself.
         *
         * `startDate` was changed while navigating in `CalendarRow`
         */
        attachStartDateChange(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.CalendarRow` itself
           */
          oListener?: object
        ): sap.ui.unified.CalendarRow;
      }
      /**
       * @SINCE 1.32.0
       *
       * Calendar with granularity of time items displayed in one line.
       */
      class CalendarTimeInterval extends sap.ui.core.Control {
        /**
         * Constructor for a new `CalendarTimeInterval`.
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
          mSettings?: CalendarTimeIntervalOpts
        );

        /**
         * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
         */
        addAriaLabelledBy(
          /**
           * The ariaLabelledBy to add; if empty, nothing is inserted
           */
          vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control
        ): sap.ui.unified.CalendarTimeInterval;
        /**
         * Adds some selectedDate to the aggregation {@link #getSelectedDates selectedDates}.
         */
        addSelectedDate(
          /**
           * The selectedDate to add; if empty, nothing is inserted
           */
          oSelectedDate: sap.ui.unified.DateRange
        ): sap.ui.unified.CalendarTimeInterval;
        /**
         * Adds some specialDate to the aggregation {@link #getSpecialDates specialDates}.
         */
        addSpecialDate(
          /**
           * The specialDate to add; if empty, nothing is inserted
           */
          oSpecialDate: sap.ui.unified.DateTypeRange
        ): sap.ui.unified.CalendarTimeInterval;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:cancel cancel} event of this `sap.ui.unified.CalendarTimeInterval`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.CalendarTimeInterval` itself.
         *
         * Time selection was cancelled
         */
        attachCancel(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.CalendarTimeInterval`
           * itself
           */
          oListener?: object
        ): sap.ui.unified.CalendarTimeInterval;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.CalendarTimeInterval`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.CalendarTimeInterval` itself.
         *
         * Time selection changed
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
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.CalendarTimeInterval`
           * itself
           */
          oListener?: object
        ): sap.ui.unified.CalendarTimeInterval;
        /**
         * @SINCE 1.34.0
         *
         * Attaches event handler `fnFunction` to the {@link #event:startDateChange startDateChange} event of this
         * `sap.ui.unified.CalendarTimeInterval`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.CalendarTimeInterval` itself.
         *
         * `startDate` was changed while navigation in `CalendarTimeInterval`
         */
        attachStartDateChange(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.CalendarTimeInterval`
           * itself
           */
          oListener?: object
        ): sap.ui.unified.CalendarTimeInterval;
        /**
         * Destroys all the selectedDates in the aggregation {@link #getSelectedDates selectedDates}.
         */
        destroySelectedDates(): sap.ui.unified.CalendarTimeInterval;
        /**
         * Destroys all the specialDates in the aggregation {@link #getSpecialDates specialDates}.
         */
        destroySpecialDates(): sap.ui.unified.CalendarTimeInterval;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:cancel cancel} event of this `sap.ui.unified.CalendarTimeInterval`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachCancel(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.unified.CalendarTimeInterval;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.ui.unified.CalendarTimeInterval`.
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
        ): sap.ui.unified.CalendarTimeInterval;
        /**
         * @SINCE 1.34.0
         *
         * Detaches event handler `fnFunction` from the {@link #event:startDateChange startDateChange} event of
         * this `sap.ui.unified.CalendarTimeInterval`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachStartDateChange(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.unified.CalendarTimeInterval;
        /**
         * Displays an item in the `CalendarTimeInterval` but doesn't set the focus.
         */
        displayDate(
          /**
           * JavaScript date object for displayed item.
           */
          oDate: object
        ): sap.ui.unified.Calendar;
        /**
         * Creates a new subclass of class sap.ui.unified.CalendarTimeInterval with name `sClassName` and enriches
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
         * Fires event {@link #event:cancel cancel} to attached listeners.
         */
        fireCancel(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ui.unified.CalendarTimeInterval;
        /**
         * Fires event {@link #event:select select} to attached listeners.
         */
        fireSelect(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ui.unified.CalendarTimeInterval;
        /**
         * @SINCE 1.34.0
         *
         * Fires event {@link #event:startDateChange startDateChange} to attached listeners.
         */
        fireStartDateChange(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ui.unified.CalendarTimeInterval;
        /**
         * Sets the focused item of the `CalendarTimeInterval`.
         */
        focusDate(
          /**
           * JavaScript date object for focused item.
           */
          oDate: object
        ): sap.ui.unified.Calendar;
        /**
         * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
         * ariaLabelledBy}.
         */
        getAriaLabelledBy(): sap.ui.core.ID[];
        /**
         * Gets current value of property {@link #getIntervalMinutes intervalMinutes}.
         *
         * Size of on time interval in minutes, default is 60 minutes.
         *
         * **Note:** the start of the interval calculation is always on the corresponding date at 00:00.
         *
         * An interval longer than 720 minutes is not allowed. Please use the `CalendarDateInterval` instead.
         *
         * A day must be divisible by this interval size. One interval must not include more than one day.
         *
         * Default value is `60`.
         */
        getIntervalMinutes(): number;
        /**
         * Gets current value of property {@link #getIntervalSelection intervalSelection}.
         *
         * If set, interval selection is allowed
         *
         * Default value is `false`.
         */
        getIntervalSelection(): boolean;
        /**
         * Gets current value of property {@link #getItems items}.
         *
         * Number of time items displayed. Default is 12.
         *
         * **Note:** On phones, the maximum number of items displayed in the row is always 6.
         *
         * Default value is `12`.
         */
        getItems(): number;
        /**
         * @SINCE 1.38.5
         *
         * ID of the element which is the current target of the association {@link #getLegend legend}, or `null`.
         */
        getLegend(): sap.ui.core.ID;
        /**
         * @SINCE 1.38.0
         *
         * Gets current value of property {@link #getMaxDate maxDate}.
         *
         * Maximum date that can be shown and selected in the Calendar. This must be a JavaScript date object.
         *
         * **Note:** If the `maxDate` is set to be before the `minDate`, the `minDate` is set to the begin of the
         * month of the `maxDate`.
         */
        getMaxDate(): object;
        /**
         * Returns a metadata object for class sap.ui.unified.CalendarTimeInterval.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * @SINCE 1.38.0
         *
         * Gets current value of property {@link #getMinDate minDate}.
         *
         * Minimum date that can be shown and selected in the Calendar. This must be a JavaScript date object.
         *
         * **Note:** If the `minDate` is set to be after the `maxDate`, the `maxDate` is set to the end of the month
         * of the `minDate`.
         */
        getMinDate(): object;
        /**
         * @SINCE 1.34.0
         *
         * Gets current value of property {@link #getPickerPopup pickerPopup}.
         *
         * If set, the day-, month- and yearPicker opens on a popup
         *
         * Default value is `false`.
         */
        getPickerPopup(): boolean;
        /**
         * Gets content of aggregation {@link #getSelectedDates selectedDates}.
         *
         * Date ranges for selected items of the `CalendarTimeInterval`.
         *
         * If `singleSelection` is set, only the first entry is used.
         */
        getSelectedDates(): sap.ui.unified.DateRange[];
        /**
         * Gets current value of property {@link #getSingleSelection singleSelection}.
         *
         * If set, only a single date or interval, if `intervalSelection` is enabled, can be selected
         *
         * **Note:** Selection of multiple intervals is not supported in the current version.
         *
         * Default value is `true`.
         */
        getSingleSelection(): boolean;
        /**
         * Gets content of aggregation {@link #getSpecialDates specialDates}.
         *
         * Date ranges with type to visualize special items in the `CalendarTimeInterval`. If one interval is assigned
         * to more than one type, only the first one will be used.
         */
        getSpecialDates(): sap.ui.unified.DateTypeRange[];
        /**
         * Gets current value of property {@link #getStartDate startDate}.
         *
         * Start date of the Interval as JavaScript Date object. The time interval corresponding to this Date and
         * `items` and `intervalMinutes` will be the first time in the displayed row.
         */
        getStartDate(): object;
        /**
         * Gets current value of property {@link #getWidth width}.
         *
         * Width of the `CalendarTimeInterval`. The width of the single months depends on this width.
         */
        getWidth(): sap.ui.core.CSSSize;
        /**
         * Checks for the provided `sap.ui.unified.DateRange` in the aggregation {@link #getSelectedDates selectedDates}.
         * and returns its index if found or -1 otherwise.
         */
        indexOfSelectedDate(
          /**
           * The selectedDate whose index is looked for
           */
          oSelectedDate: sap.ui.unified.DateRange
        ): number;
        /**
         * Checks for the provided `sap.ui.unified.DateTypeRange` in the aggregation {@link #getSpecialDates specialDates}.
         * and returns its index if found or -1 otherwise.
         */
        indexOfSpecialDate(
          /**
           * The specialDate whose index is looked for
           */
          oSpecialDate: sap.ui.unified.DateTypeRange
        ): number;
        /**
         * Inserts a selectedDate into the aggregation {@link #getSelectedDates selectedDates}.
         */
        insertSelectedDate(
          /**
           * The selectedDate to insert; if empty, nothing is inserted
           */
          oSelectedDate: sap.ui.unified.DateRange,
          /**
           * The `0`-based index the selectedDate should be inserted at; for a negative value of `iIndex`, the selectedDate
           * is inserted at position 0; for a value greater than the current size of the aggregation, the selectedDate
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.unified.CalendarTimeInterval;
        /**
         * Inserts a specialDate into the aggregation {@link #getSpecialDates specialDates}.
         */
        insertSpecialDate(
          /**
           * The specialDate to insert; if empty, nothing is inserted
           */
          oSpecialDate: sap.ui.unified.DateTypeRange,
          /**
           * The `0`-based index the specialDate should be inserted at; for a negative value of `iIndex`, the specialDate
           * is inserted at position 0; for a value greater than the current size of the aggregation, the specialDate
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.unified.CalendarTimeInterval;
        /**
         * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
         */
        removeAllAriaLabelledBy(): sap.ui.core.ID[];
        /**
         * Removes all the controls from the aggregation {@link #getSelectedDates selectedDates}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllSelectedDates(): sap.ui.unified.DateRange[];
        /**
         * Removes all the controls from the aggregation {@link #getSpecialDates specialDates}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllSpecialDates(): sap.ui.unified.DateTypeRange[];
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
         * Removes a selectedDate from the aggregation {@link #getSelectedDates selectedDates}.
         */
        removeSelectedDate(
          /**
           * The selectedDate to remove or its index or id
           */
          vSelectedDate: number | string | sap.ui.unified.DateRange
        ): sap.ui.unified.DateRange;
        /**
         * Removes a specialDate from the aggregation {@link #getSpecialDates specialDates}.
         */
        removeSpecialDate(
          /**
           * The specialDate to remove or its index or id
           */
          vSpecialDate: number | string | sap.ui.unified.DateTypeRange
        ): sap.ui.unified.DateTypeRange;
        /**
         * Sets a new value for property {@link #getIntervalMinutes intervalMinutes}.
         *
         * Size of on time interval in minutes, default is 60 minutes.
         *
         * **Note:** the start of the interval calculation is always on the corresponding date at 00:00.
         *
         * An interval longer than 720 minutes is not allowed. Please use the `CalendarDateInterval` instead.
         *
         * A day must be divisible by this interval size. One interval must not include more than one day.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `60`.
         */
        setIntervalMinutes(
          /**
           * New value for property `intervalMinutes`
           */
          iIntervalMinutes: number
        ): sap.ui.unified.CalendarTimeInterval;
        /**
         * Sets a new value for property {@link #getIntervalSelection intervalSelection}.
         *
         * If set, interval selection is allowed
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setIntervalSelection(
          /**
           * New value for property `intervalSelection`
           */
          bIntervalSelection: boolean
        ): sap.ui.unified.CalendarTimeInterval;
        /**
         * Sets a new value for property {@link #getItems items}.
         *
         * Number of time items displayed. Default is 12.
         *
         * **Note:** On phones, the maximum number of items displayed in the row is always 6.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `12`.
         */
        setItems(
          /**
           * New value for property `items`
           */
          iItems: number
        ): sap.ui.unified.CalendarTimeInterval;
        /**
         * @SINCE 1.38.5
         *
         * Sets the associated {@link #getLegend legend}.
         */
        setLegend(
          /**
           * ID of an element which becomes the new target of this legend association; alternatively, an element instance
           * may be given
           */
          oLegend: sap.ui.core.ID | sap.ui.unified.CalendarLegend
        ): sap.ui.unified.CalendarTimeInterval;
        /**
         * @SINCE 1.38.0
         *
         * Sets a new value for property {@link #getMaxDate maxDate}.
         *
         * Maximum date that can be shown and selected in the Calendar. This must be a JavaScript date object.
         *
         * **Note:** If the `maxDate` is set to be before the `minDate`, the `minDate` is set to the begin of the
         * month of the `maxDate`.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setMaxDate(
          /**
           * New value for property `maxDate`
           */
          oMaxDate: object
        ): sap.ui.unified.CalendarTimeInterval;
        /**
         * @SINCE 1.38.0
         *
         * Sets a new value for property {@link #getMinDate minDate}.
         *
         * Minimum date that can be shown and selected in the Calendar. This must be a JavaScript date object.
         *
         * **Note:** If the `minDate` is set to be after the `maxDate`, the `maxDate` is set to the end of the month
         * of the `minDate`.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setMinDate(
          /**
           * New value for property `minDate`
           */
          oMinDate: object
        ): sap.ui.unified.CalendarTimeInterval;
        /**
         * @SINCE 1.34.0
         *
         * Sets a new value for property {@link #getPickerPopup pickerPopup}.
         *
         * If set, the day-, month- and yearPicker opens on a popup
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setPickerPopup(
          /**
           * New value for property `pickerPopup`
           */
          bPickerPopup: boolean
        ): sap.ui.unified.CalendarTimeInterval;
        /**
         * Sets a new value for property {@link #getSingleSelection singleSelection}.
         *
         * If set, only a single date or interval, if `intervalSelection` is enabled, can be selected
         *
         * **Note:** Selection of multiple intervals is not supported in the current version.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setSingleSelection(
          /**
           * New value for property `singleSelection`
           */
          bSingleSelection: boolean
        ): sap.ui.unified.CalendarTimeInterval;
        /**
         * Sets a new value for property {@link #getStartDate startDate}.
         *
         * Start date of the Interval as JavaScript Date object. The time interval corresponding to this Date and
         * `items` and `intervalMinutes` will be the first time in the displayed row.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setStartDate(
          /**
           * New value for property `startDate`
           */
          oStartDate: object
        ): sap.ui.unified.CalendarTimeInterval;
        /**
         * Sets a new value for property {@link #getWidth width}.
         *
         * Width of the `CalendarTimeInterval`. The width of the single months depends on this width.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setWidth(
          /**
           * New value for property `width`
           */
          sWidth: sap.ui.core.CSSSize
        ): sap.ui.unified.CalendarTimeInterval;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:cancel cancel} event of this `sap.ui.unified.CalendarTimeInterval`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.CalendarTimeInterval` itself.
         *
         * Time selection was cancelled
         */
        attachCancel(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.CalendarTimeInterval`
           * itself
           */
          oListener?: object
        ): sap.ui.unified.CalendarTimeInterval;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.CalendarTimeInterval`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.CalendarTimeInterval` itself.
         *
         * Time selection changed
         */
        attachSelect(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.CalendarTimeInterval`
           * itself
           */
          oListener?: object
        ): sap.ui.unified.CalendarTimeInterval;
        /**
         * @SINCE 1.34.0
         *
         * Attaches event handler `fnFunction` to the {@link #event:startDateChange startDateChange} event of this
         * `sap.ui.unified.CalendarTimeInterval`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.CalendarTimeInterval` itself.
         *
         * `startDate` was changed while navigation in `CalendarTimeInterval`
         */
        attachStartDateChange(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.CalendarTimeInterval`
           * itself
           */
          oListener?: object
        ): sap.ui.unified.CalendarTimeInterval;
      }
      /**
       * @SINCE 1.48.0
       *
       * Enables the user to select a color. The color can be defined using HEX, RGB, or HSV values or a CSS color
       * name.
       *
       * **Note:** Keep in mind that this control needs either `sap.m` or `sap.ui.commons` library to be loaded
       * in order to work as it depends on controls available in one or the other library.
       */
      class ColorPicker extends sap.ui.core.Control {
        /**
         * Constructor for a new `ColorPicker`.
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
          mSettings?: ColorPickerOpts
        );

        /**
         * @SINCE 1.48.0
         *
         * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.ui.unified.ColorPicker`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.ColorPicker` itself.
         *
         * Fired when the value is changed by user action.
         *
         * **Note:** When the user action is mouse dragging, the `change` event fires on the mouseup event.
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
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.ColorPicker` itself
           */
          oListener?: object
        ): sap.ui.unified.ColorPicker;
        /**
         * @SINCE 1.48.0
         *
         * Attaches event handler `fnFunction` to the {@link #event:liveChange liveChange} event of this `sap.ui.unified.ColorPicker`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.ColorPicker` itself.
         *
         * Fired when the value is changed during the mouse move.
         *
         * **Note:** When the user action is mouse move, the `liveChange` event is fired during the mousedown event.
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
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.ColorPicker` itself
           */
          oListener?: object
        ): sap.ui.unified.ColorPicker;
        /**
         * @SINCE 1.48.0
         *
         * Detaches event handler `fnFunction` from the {@link #event:change change} event of this `sap.ui.unified.ColorPicker`.
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
        ): sap.ui.unified.ColorPicker;
        /**
         * @SINCE 1.48.0
         *
         * Detaches event handler `fnFunction` from the {@link #event:liveChange liveChange} event of this `sap.ui.unified.ColorPicker`.
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
        ): sap.ui.unified.ColorPicker;
        /**
         * Creates a new subclass of class sap.ui.unified.ColorPicker with name `sClassName` and enriches it with
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
         * @SINCE 1.48.0
         *
         * Fires event {@link #event:change change} to attached listeners.
         */
        fireChange(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * Parameter containing the RED value (0-255).
             */
            r?: number;
            /**
             * Parameter containing the GREEN value (0-255).
             */
            g?: number;
            /**
             * Parameter containing the BLUE value (0-255).
             */
            b?: number;
            /**
             * Parameter containing the HUE value (0-360).
             */
            h?: number;
            /**
             * Parameter containing the SATURATION value (0-100).
             */
            s?: number;
            /**
             * Parameter containing the VALUE value (0-100).
             */
            v?: number;
            /**
             * Parameter containing the LIGHTNESS value (0-100).
             */
            l?: number;
            /**
             * Parameter containing the Hexadecimal string (#FFFFFF).
             */
            hex?: string;
            /**
             * Parameter containing the alpha value (transparency).
             */
            alpha?: string;
          }
        ): sap.ui.unified.ColorPicker;
        /**
         * @SINCE 1.48.0
         *
         * Fires event {@link #event:liveChange liveChange} to attached listeners.
         */
        fireLiveChange(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * Parameter containing the RED value (0-255).
             */
            r?: number;
            /**
             * Parameter containing the GREEN value (0-255).
             */
            g?: number;
            /**
             * Parameter containing the BLUE value (0-255).
             */
            b?: number;
            /**
             * Parameter containing the HUE value (0-360).
             */
            h?: number;
            /**
             * Parameter containing the SATURATION value (0-100).
             */
            s?: number;
            /**
             * Parameter containing the VALUE value (0-100).
             */
            v?: number;
            /**
             * Parameter containing the LIGHTNESS value (0-100).
             */
            l?: number;
            /**
             * Parameter containing the Hexadecimal string (#FFFFFF).
             */
            hex?: string;
            /**
             * Parameter containing the alpha value (transparency).
             */
            alpha?: string;
          }
        ): sap.ui.unified.ColorPicker;
        /**
         * @SINCE 1.48.0
         *
         * Gets current value of property {@link #getColorString colorString}.
         *
         * Determines the input parameter that can be a string of type HEX, RGB, HSV, or a CSS color name:
         *
         * 	 - HEX - #FFFFFF
         * 	 - RGB - rgb(255,255,255)
         * 	 - HSV - hsv(360,100,100)
         * 	 - CSS - red  **Note:** The output parameter is an RGB string of the current color.
         */
        getColorString(): string;
        /**
         * @SINCE 1.58
         *
         * Gets current value of property {@link #getDisplayMode displayMode}.
         *
         * Determines the display mode of the `ColorPicker` among three types - Default, Large and Simplified
         *
         * Default value is `Default`.
         */
        getDisplayMode(): sap.ui.unified.ColorPickerDisplayMode;
        /**
         * Returns a metadata object for class sap.ui.unified.ColorPicker.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * @SINCE 1.48.0
         *
         * Gets current value of property {@link #getMode mode}.
         *
         * Determines the color mode of the `ColorPicker`.
         *
         * Default value is `HSV`.
         */
        getMode(): sap.ui.unified.ColorPickerMode;
        /**
         * @SINCE 1.48.0
         *
         * Gets current RGB values.
         */
        getRGB(): object;
        /**
         * @SINCE 1.48.0
         *
         * Checks the validity of the CSS color string.
         */
        isColor(
          /**
           * CSS color string to be validated
           */
          sColorString: string
        ): boolean;
        /**
         * @SINCE 1.48.0
         *
         * Sets a new value for property {@link #getColorString colorString}.
         *
         * Determines the input parameter that can be a string of type HEX, RGB, HSV, or a CSS color name:
         *
         * 	 - HEX - #FFFFFF
         * 	 - RGB - rgb(255,255,255)
         * 	 - HSV - hsv(360,100,100)
         * 	 - CSS - red  **Note:** The output parameter is an RGB string of the current color.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setColorString(
          /**
           * New value for property `colorString`
           */
          sColorString: string
        ): sap.ui.unified.ColorPicker;
        /**
         * Setter for `displayMode` property.
         */
        setDisplayMode(
          /**
           * control displayMode enum
           */
          sDisplayMode: sap.ui.unified.ColorPickerDisplayMode
        ): void;
        /**
         * Setter for `mode` property.
         */
        setMode(
          /**
           * control mode enum
           */
          sMode: sap.ui.unified.ColorPickerMode,
          /**
           * should control invalidation be suppressed
           */
          bSuppressInvalidate: boolean
        ): void;
        /**
         * @SINCE 1.48.0
         *
         * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.ui.unified.ColorPicker`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.ColorPicker` itself.
         *
         * Fired when the value is changed by user action.
         *
         * **Note:** When the user action is mouse dragging, the `change` event fires on the mouseup event.
         */
        attachChange(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.ColorPicker` itself
           */
          oListener?: object
        ): sap.ui.unified.ColorPicker;
        /**
         * @SINCE 1.48.0
         *
         * Attaches event handler `fnFunction` to the {@link #event:liveChange liveChange} event of this `sap.ui.unified.ColorPicker`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.ColorPicker` itself.
         *
         * Fired when the value is changed during the mouse move.
         *
         * **Note:** When the user action is mouse move, the `liveChange` event is fired during the mousedown event.
         */
        attachLiveChange(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.ColorPicker` itself
           */
          oListener?: object
        ): sap.ui.unified.ColorPicker;
      }
      /**
       * @SINCE 1.60
       *
       * A thin wrapper over {@link sap.ui.unified.ColorPicker} allowing the latter to be used in a popover.
       */
      class ColorPickerPopover extends sap.ui.core.Control {
        /**
         * Constructor for a new `ColorPickerPopover`.
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
          mSettings?: ColorPickerPopoverOpts
        );

        /**
         * @SINCE 1.60.0
         *
         * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.ui.unified.ColorPickerPopover`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.ColorPickerPopover` itself.
         *
         * Fired when the submit button of the popover is clicked.
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
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.ColorPickerPopover` itself
           */
          oListener?: object
        ): sap.ui.unified.ColorPickerPopover;
        /**
         * Closes the `ColorPickerPopover`.
         */
        close(): sap.ui.core.Control;
        /**
         * @SINCE 1.60.0
         *
         * Detaches event handler `fnFunction` from the {@link #event:change change} event of this `sap.ui.unified.ColorPickerPopover`.
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
        ): sap.ui.unified.ColorPickerPopover;
        /**
         * Creates a new subclass of class sap.ui.unified.ColorPickerPopover with name `sClassName` and enriches
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
         * @SINCE 1.60.0
         *
         * Fires event {@link #event:change change} to attached listeners.
         */
        fireChange(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * Parameter containing the RED value (0-255).
             */
            r?: number;
            /**
             * Parameter containing the GREEN value (0-255).
             */
            g?: number;
            /**
             * Parameter containing the BLUE value (0-255).
             */
            b?: number;
            /**
             * Parameter containing the HUE value (0-360).
             */
            h?: number;
            /**
             * Parameter containing the SATURATION value (0-100).
             */
            s?: number;
            /**
             * Parameter containing the VALUE value (0-100).
             */
            v?: number;
            /**
             * Parameter containing the LIGHTNESS value (0-100).
             */
            l?: number;
            /**
             * Parameter containing the Hexadecimal string (#FFFFFF).
             */
            hex?: string;
            /**
             * Parameter containing the alpha value (transparency).
             */
            alpha?: string;
          }
        ): sap.ui.unified.ColorPickerPopover;
        /**
         * @SINCE 1.60.0
         *
         * Gets current value of property {@link #getColorString colorString}.
         *
         * Determines the input parameter that can be a string of type HEX, RGB, HSV, or a CSS color name:
         *
         * 	 - HEX - #FFFFFF
         * 	 - RGB - rgb(255,255,255)
         * 	 - HSV - hsv(360,100,100)
         * 	 - CSS - red  **Note:** The output parameter is an RGB string of the current color.
         */
        getColorString(): string;
        /**
         * @SINCE 1.60.0
         *
         * Gets current value of property {@link #getDisplayMode displayMode}.
         *
         * Determines the display mode of the `ColorPicker` among three types - Default, Large and Simplified
         *
         * Default value is `Default`.
         */
        getDisplayMode(): sap.ui.unified.ColorPickerDisplayMode;
        /**
         * Returns a metadata object for class sap.ui.unified.ColorPickerPopover.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * @SINCE 1.60.0
         *
         * Gets current value of property {@link #getMode mode}.
         *
         * Determines the color mode of the `ColorPicker`.
         *
         * Default value is `HSV`.
         */
        getMode(): sap.ui.unified.ColorPickerMode;
        /**
         * Opens the `ColorPickerPopover`. The popover is positioned relative to the control parameter on tablet
         * or desktop and is full screen on phone. Therefore the openBy parameter is only used on tablet or desktop
         * and is ignored on phone.
         */
        openBy(
          /**
           * When this control is displayed on tablet or desktop, the `ColorPickerPopover` is positioned relative
           * to this control
           */
          openBy: Object
        ): Object;
        /**
         * @SINCE 1.60.0
         *
         * Sets a new value for property {@link #getColorString colorString}.
         *
         * Determines the input parameter that can be a string of type HEX, RGB, HSV, or a CSS color name:
         *
         * 	 - HEX - #FFFFFF
         * 	 - RGB - rgb(255,255,255)
         * 	 - HSV - hsv(360,100,100)
         * 	 - CSS - red  **Note:** The output parameter is an RGB string of the current color.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setColorString(
          /**
           * New value for property `colorString`
           */
          sColorString: string
        ): sap.ui.unified.ColorPickerPopover;
        /**
         * @SINCE 1.60.0
         *
         * Sets a new value for property {@link #getDisplayMode displayMode}.
         *
         * Determines the display mode of the `ColorPicker` among three types - Default, Large and Simplified
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Default`.
         */
        setDisplayMode(
          /**
           * New value for property `displayMode`
           */
          sDisplayMode: sap.ui.unified.ColorPickerDisplayMode
        ): sap.ui.unified.ColorPickerPopover;
        /**
         * @SINCE 1.60.0
         *
         * Sets a new value for property {@link #getMode mode}.
         *
         * Determines the color mode of the `ColorPicker`.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `HSV`.
         */
        setMode(
          /**
           * New value for property `mode`
           */
          sMode: sap.ui.unified.ColorPickerMode
        ): sap.ui.unified.ColorPickerPopover;
        /**
         * @SINCE 1.60.0
         *
         * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.ui.unified.ColorPickerPopover`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.ColorPickerPopover` itself.
         *
         * Fired when the submit button of the popover is clicked.
         */
        attachChange(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.ColorPickerPopover` itself
           */
          oListener?: object
        ): sap.ui.unified.ColorPickerPopover;
      }
      /**
       * @SINCE 1.16.0
       * @deprecated (since 1.44.0)
       * @EXPERIMENTAL (since 1.16.0)
       *
       * Switches between two control areas and animates it via CSS transitions
       */
      class ContentSwitcher extends sap.ui.core.Control {
        /**
         * Constructor for a new ContentSwitcher.
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
          mSettings?: ContentSwitcherOpts
        );

        /**
         * Adds some content1 to the aggregation {@link #getContent1 content1}.
         */
        addContent1(
          /**
           * The content1 to add; if empty, nothing is inserted
           */
          oContent1: sap.ui.core.Control
        ): sap.ui.unified.ContentSwitcher;
        /**
         * Adds some content2 to the aggregation {@link #getContent2 content2}.
         */
        addContent2(
          /**
           * The content2 to add; if empty, nothing is inserted
           */
          oContent2: sap.ui.core.Control
        ): sap.ui.unified.ContentSwitcher;
        /**
         * Destroys all the content1 in the aggregation {@link #getContent1 content1}.
         */
        destroyContent1(): sap.ui.unified.ContentSwitcher;
        /**
         * Destroys all the content2 in the aggregation {@link #getContent2 content2}.
         */
        destroyContent2(): sap.ui.unified.ContentSwitcher;
        /**
         * Creates a new subclass of class sap.ui.unified.ContentSwitcher with name `sClassName` and enriches it
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
         * Gets current value of property {@link #getActiveContent activeContent}.
         *
         * The number of the currently active content (1 or 2).
         *
         * Default value is `1`.
         */
        getActiveContent(): number;
        /**
         * Gets current value of property {@link #getAnimation animation}.
         *
         * Set the used animation when changing content. This just sets a CSS-class named "sapUiUnifiedACSwitcherAnimation"
         * + this value on the root element of the control. The animation has to be implemented in CSS. This also
         * enables applications to implement their own animations via CSS by reacting to the parent class. See the
         * types sap.ui.unified.ContentSwitcherAnimation for default implementations.
         *
         * Default value is `None`.
         */
        getAnimation(): string;
        /**
         * Gets content of aggregation {@link #getContent1 content1}.
         *
         * The controls that should be shown in the first content
         */
        getContent1(): sap.ui.core.Control[];
        /**
         * Gets content of aggregation {@link #getContent2 content2}.
         *
         * The controls that should be shown in the second content
         */
        getContent2(): sap.ui.core.Control[];
        /**
         * Returns a metadata object for class sap.ui.unified.ContentSwitcher.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContent1 content1}. and returns
         * its index if found or -1 otherwise.
         */
        indexOfContent1(
          /**
           * The content1 whose index is looked for
           */
          oContent1: sap.ui.core.Control
        ): number;
        /**
         * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContent2 content2}. and returns
         * its index if found or -1 otherwise.
         */
        indexOfContent2(
          /**
           * The content2 whose index is looked for
           */
          oContent2: sap.ui.core.Control
        ): number;
        /**
         * Inserts a content1 into the aggregation {@link #getContent1 content1}.
         */
        insertContent1(
          /**
           * The content1 to insert; if empty, nothing is inserted
           */
          oContent1: sap.ui.core.Control,
          /**
           * The `0`-based index the content1 should be inserted at; for a negative value of `iIndex`, the content1
           * is inserted at position 0; for a value greater than the current size of the aggregation, the content1
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.unified.ContentSwitcher;
        /**
         * Inserts a content2 into the aggregation {@link #getContent2 content2}.
         */
        insertContent2(
          /**
           * The content2 to insert; if empty, nothing is inserted
           */
          oContent2: sap.ui.core.Control,
          /**
           * The `0`-based index the content2 should be inserted at; for a negative value of `iIndex`, the content2
           * is inserted at position 0; for a value greater than the current size of the aggregation, the content2
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.unified.ContentSwitcher;
        /**
         * Removes all the controls from the aggregation {@link #getContent1 content1}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllContent1(): sap.ui.core.Control[];
        /**
         * Removes all the controls from the aggregation {@link #getContent2 content2}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllContent2(): sap.ui.core.Control[];
        /**
         * Removes a content1 from the aggregation {@link #getContent1 content1}.
         */
        removeContent1(
          /**
           * The content1 to remove or its index or id
           */
          vContent1: number | string | sap.ui.core.Control
        ): sap.ui.core.Control;
        /**
         * Removes a content2 from the aggregation {@link #getContent2 content2}.
         */
        removeContent2(
          /**
           * The content2 to remove or its index or id
           */
          vContent2: number | string | sap.ui.core.Control
        ): sap.ui.core.Control;
        /**
         * Sets a new value for property {@link #getActiveContent activeContent}.
         *
         * The number of the currently active content (1 or 2).
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `1`.
         */
        setActiveContent(
          /**
           * New value for property `activeContent`
           */
          iActiveContent: number
        ): sap.ui.unified.ContentSwitcher;
        /**
         * Sets a new value for property {@link #getAnimation animation}.
         *
         * Set the used animation when changing content. This just sets a CSS-class named "sapUiUnifiedACSwitcherAnimation"
         * + this value on the root element of the control. The animation has to be implemented in CSS. This also
         * enables applications to implement their own animations via CSS by reacting to the parent class. See the
         * types sap.ui.unified.ContentSwitcherAnimation for default implementations.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `None`.
         */
        setAnimation(
          /**
           * New value for property `animation`
           */
          sAnimation: string
        ): sap.ui.unified.ContentSwitcher;
        /**
         * Changes the currently active content to the other one. If content 1 is active, content 2 will be activated
         * and the other way around.
         */
        switchContent(): void;
      }
      /**
       * @SINCE 1.21.1
       *
       * A text view which displays currency values and aligns them at the decimal point.
       *
       * Overview:
       *
       * The currency control consists of an amount, which is formatted automatically according to the user’s
       * locale (using delimiter symbols for the decimal point and thousand separators) and to the currency set
       * for this specific number (number of decimal places).
       *
       * The currency is expressed as a three-letter code.
       *
       * Usage:
       *
       * When to use
       * 	 - To display amounts with different currencies in a vertical layout, such as in a table, list, or form,
       * 			and it is important that the user is able to compare the amounts.
       *
       * When not to use
       * 	 - To display amounts with the same currency in a table. Use the {@link sap.m.ObjectNumber} instead.
       *
       * 	 - to display a number with a unit of measurement that is not a currency. Use the {@link sap.m.ObjectNumber}
       * 			instead.
       * 	 - To display an amount in a structure other than a list, table, or form.
       *
       * Responsive behavior:
       *
       * The control supports amounts smaller than 100 trillion, which still fit on a phone screen in portrait
       * mode. For larger amounts, the unit of measurement wraps to the next line, which makes it difficult to
       * compare the amounts.
       */
      class Currency extends sap.ui.core.Control {
        /**
         * Constructor for a new `Currency`.
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
          mSettings?: CurrencyOpts
        );

        /**
         * Creates a new subclass of class sap.ui.unified.Currency with name `sClassName` and enriches it with the
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
        getAccessibilityInfo(): Object;
        /**
         * Gets current value of property {@link #getCurrency currency}.
         *
         * Determines the displayed currency code (ISO 4217).
         *
         * **Note:** If a * character is set instead of currency code, only the character itself will be rendered,
         * ignoring the `value` property.
         */
        getCurrency(): string;
        /**
         * Get symbol of the currency, if available.
         */
        getCurrencySymbol(): string;
        /**
         * The formatted value.
         */
        getFormattedValue(): string;
        /**
         * Gets current value of property {@link #getMaxPrecision maxPrecision}.
         *
         * Defines the space that is available for the precision of the various currencies.
         *
         * Default value is `3`.
         */
        getMaxPrecision(): number;
        /**
         * Returns a metadata object for class sap.ui.unified.Currency.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * @SINCE 1.54
         *
         * Gets current value of property {@link #getStringValue stringValue}.
         *
         * Determines the currency value as a string.
         *
         * String value is useful if you want to store really big values. If there are more than 21 digits before
         * the decimal point or if the number starts with “0.” followed by more than five zeros, it is represented
         * in exponential form. In these cases use the `stringValue` property to keep the number in decimal format.
         *
         * **Note:** If set, it will take precedence over the `value` property.
         */
        getStringValue(): string;
        /**
         * Gets current value of property {@link #getUseSymbol useSymbol}.
         *
         * Displays the currency symbol instead of the ISO currency code.
         *
         * Default value is `true`.
         */
        getUseSymbol(): boolean;
        /**
         * Gets current value of property {@link #getValue value}.
         *
         * Determines the currency value.
         *
         * Default value is `0`.
         */
        getValue(): number;
        /**
         * Initializes the control.
         */
        // @ts-ignore
        init(): void;
        /**
         * Sets a new value for property {@link #getCurrency currency}.
         *
         * Determines the displayed currency code (ISO 4217).
         *
         * **Note:** If a * character is set instead of currency code, only the character itself will be rendered,
         * ignoring the `value` property.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setCurrency(
          /**
           * New value for property `currency`
           */
          sCurrency: string
        ): sap.ui.unified.Currency;
        /**
         * Sets a new value for property {@link #getMaxPrecision maxPrecision}.
         *
         * Defines the space that is available for the precision of the various currencies.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `3`.
         */
        setMaxPrecision(
          /**
           * New value for property `maxPrecision`
           */
          iMaxPrecision: number
        ): sap.ui.unified.Currency;
        /**
         * @SINCE 1.54
         *
         * Sets a new value for property {@link #getStringValue stringValue}.
         *
         * Determines the currency value as a string.
         *
         * String value is useful if you want to store really big values. If there are more than 21 digits before
         * the decimal point or if the number starts with “0.” followed by more than five zeros, it is represented
         * in exponential form. In these cases use the `stringValue` property to keep the number in decimal format.
         *
         * **Note:** If set, it will take precedence over the `value` property.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setStringValue(
          /**
           * New value for property `stringValue`
           */
          sStringValue: string
        ): sap.ui.unified.Currency;
        /**
         * Sets a new value for property {@link #getUseSymbol useSymbol}.
         *
         * Displays the currency symbol instead of the ISO currency code.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setUseSymbol(
          /**
           * New value for property `useSymbol`
           */
          bUseSymbol: boolean
        ): sap.ui.unified.Currency;
        /**
         * Sets a new value for property {@link #getValue value}.
         *
         * Determines the currency value.
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
        ): sap.ui.unified.Currency;
      }
      /**
       * @SINCE 1.22.0
       *
       * Date range for use in DatePicker
       */
      class DateRange extends sap.ui.core.Element {
        /**
         * Constructor for a new DateRange.
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
          mSettings?: DateRangeOpts
        );

        /**
         * Creates a new subclass of class sap.ui.unified.DateRange with name `sClassName` and enriches it with
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
         * Gets current value of property {@link #getEndDate endDate}.
         *
         * End date for a date range. If empty only a single date is presented by this DateRange element. This must
         * be a JavaScript date object.
         */
        getEndDate(): object;
        /**
         * Returns a metadata object for class sap.ui.unified.DateRange.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getStartDate startDate}.
         *
         * Start date for a date range. This must be a JavaScript date object.
         */
        getStartDate(): object;
        /**
         * Sets a new value for property {@link #getEndDate endDate}.
         *
         * End date for a date range. If empty only a single date is presented by this DateRange element. This must
         * be a JavaScript date object.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setEndDate(
          /**
           * New value for property `endDate`
           */
          oEndDate: object
        ): sap.ui.unified.DateRange;
        /**
         * Sets a new value for property {@link #getStartDate startDate}.
         *
         * Start date for a date range. This must be a JavaScript date object.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setStartDate(
          /**
           * New value for property `startDate`
           */
          oStartDate: object
        ): sap.ui.unified.DateRange;
      }
      /**
       * @SINCE 1.24.0
       *
       * Date range with calendar day type information. Used to visualize special days in the Calendar.
       */
      class DateTypeRange extends sap.ui.unified.DateRange {
        /**
         * Constructor for a new DateTypeRange.
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
          mSettings?: DateTypeRangeOpts
        );

        /**
         * Creates a new subclass of class sap.ui.unified.DateTypeRange with name `sClassName` and enriches it with
         * the information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.unified.DateRange.extend}.
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
         * Returns a metadata object for class sap.ui.unified.DateTypeRange.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getType type}.
         *
         * Type of the date range.
         *
         * Default value is `Type01`.
         */
        getType(): sap.ui.unified.CalendarDayType;
        /**
         * Sets a new value for property {@link #getType type}.
         *
         * Type of the date range.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `Type01`.
         */
        setType(
          /**
           * New value for property `type`
           */
          sType: sap.ui.unified.CalendarDayType
        ): sap.ui.unified.DateTypeRange;
      }
      /**
       * The framework generates an input field and a button with text "Browse ...". The API supports features
       * such as on change uploads (the upload starts immediately after a file has been selected), file uploads
       * with explicit calls, adjustable control sizes, text display after uploads, or tooltips containing complete
       * file paths.
       */
      class FileUploader extends sap.ui.core.Control
        implements sap.ui.unified.IProcessableBlobs {
        /**
         * Constructor for a new `FileUploader`.
         *
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
         * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
         * of the syntax of the settings object.
         * See:
         * 	{@link fiori:https://experience.sap.com/fiori-design-web/upload-collection/ Upload Collection}
         */
        constructor(
          /**
           * ID for the new control, generated automatically if no ID is given
           */
          sId?: string,
          /**
           * Initial settings for the new control
           */
          mSettings?: FileUploaderOpts
        );

        /**
         * @SINCE 1.24.0
         *
         * Aborts the currently running upload.
         */
        abort(
          /**
           * The name of the parameter within the `headerParameters` aggregation to be checked.
           *
           * **Note:** aborts the request, sent with a header parameter with the provided name. The parameter is taken
           * into account if the sHeaderParameterValue parameter is provided too.
           */
          sHeaderParameterName: string,
          /**
           * The value of the parameter within the `headerParameters` aggregation to be checked.
           *
           * **Note:** aborts the request, sent with a header parameter with the provided value. The parameter is
           * taken into account if the sHeaderParameterName parameter is provided too.
           */
          sHeaderParameterValue: string
        ): void;
        /**
         * Adds some headerParameter to the aggregation {@link #getHeaderParameters headerParameters}.
         */
        addHeaderParameter(
          /**
           * The headerParameter to add; if empty, nothing is inserted
           */
          oHeaderParameter: sap.ui.unified.FileUploaderParameter
        ): sap.ui.unified.FileUploader;
        /**
         * @SINCE 1.12.2
         *
         * Adds some parameter to the aggregation {@link #getParameters parameters}.
         */
        addParameter(
          /**
           * The parameter to add; if empty, nothing is inserted
           */
          oParameter: sap.ui.unified.FileUploaderParameter
        ): sap.ui.unified.FileUploader;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.ui.unified.FileUploader`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
         *
         * Event is fired when the value of the file path has been changed.
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
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.FileUploader` itself
           */
          oListener?: object
        ): sap.ui.unified.FileUploader;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:fileAllowed fileAllowed} event of this `sap.ui.unified.FileUploader`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
         *
         * Event is fired when the file is allowed for upload on client side.
         */
        attachFileAllowed(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.FileUploader` itself
           */
          oListener?: object
        ): sap.ui.unified.FileUploader;
        /**
         * @SINCE 1.24.0
         *
         * Attaches event handler `fnFunction` to the {@link #event:filenameLengthExceed filenameLengthExceed} event
         * of this `sap.ui.unified.FileUploader`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
         *
         * Event is fired, if the filename of a chosen file is longer than the value specified with the maximumFilenameLength
         * property.
         */
        attachFilenameLengthExceed(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.FileUploader` itself
           */
          oListener?: object
        ): sap.ui.unified.FileUploader;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:fileSizeExceed fileSizeExceed} event of this
         * `sap.ui.unified.FileUploader`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
         *
         * Event is fired when the size of a file is above the maximumFileSize property. This event is not supported
         * by Internet Explorer 9 (same restriction as for the property maximumFileSize).
         */
        attachFileSizeExceed(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.FileUploader` itself
           */
          oListener?: object
        ): sap.ui.unified.FileUploader;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:typeMissmatch typeMissmatch} event of this `sap.ui.unified.FileUploader`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
         *
         * Event is fired when the type of a file does not match the mimeType or fileType property.
         */
        attachTypeMissmatch(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.FileUploader` itself
           */
          oListener?: object
        ): sap.ui.unified.FileUploader;
        /**
         * @SINCE 1.24.0
         *
         * Attaches event handler `fnFunction` to the {@link #event:uploadAborted uploadAborted} event of this `sap.ui.unified.FileUploader`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
         *
         * Event is fired after the current upload has been aborted. This is event is only supported with property
         * sendXHR set to true, i.e. the event is not supported in Internet Explorer 9.
         */
        attachUploadAborted(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.FileUploader` itself
           */
          oListener?: object
        ): sap.ui.unified.FileUploader;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:uploadComplete uploadComplete} event of this
         * `sap.ui.unified.FileUploader`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
         *
         * Event is fired as soon as the upload request is completed (either successful or unsuccessful). To see
         * if the upload request was successful, check the 'state' parameter for a value 2xx. The uploads actual
         * progress can be retrieved via the 'uploadProgress' Event. However this covers only the client side of
         * the Upload process and does not give any success status from the server.
         */
        attachUploadComplete(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.FileUploader` itself
           */
          oListener?: object
        ): sap.ui.unified.FileUploader;
        /**
         * @SINCE 1.24.0
         *
         * Attaches event handler `fnFunction` to the {@link #event:uploadProgress uploadProgress} event of this
         * `sap.ui.unified.FileUploader`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
         *
         * Event is fired after the upload has started and before the upload is completed and contains progress
         * information related to the running upload. Depending on file size, band width and used browser the event
         * is fired once or multiple times. This is event is only supported with property sendXHR set to true, i.e.
         * the event is not supported in Internet Explorer 9.
         */
        attachUploadProgress(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.FileUploader` itself
           */
          oListener?: object
        ): sap.ui.unified.FileUploader;
        /**
         * @SINCE 1.30.0
         *
         * Attaches event handler `fnFunction` to the {@link #event:uploadStart uploadStart} event of this `sap.ui.unified.FileUploader`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
         *
         * Event is fired before an upload is started.
         */
        attachUploadStart(
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
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.FileUploader` itself
           */
          oListener?: object
        ): sap.ui.unified.FileUploader;
        /**
         * @SINCE 1.25.0
         *
         * Clears the content of the `FileUploader`.
         *
         * **Note:** The attached additional data however is retained.
         */
        clear(): sap.ui.unified.FileUploader;
        /**
         * Destroys all the headerParameters in the aggregation {@link #getHeaderParameters headerParameters}.
         */
        destroyHeaderParameters(): sap.ui.unified.FileUploader;
        /**
         * @SINCE 1.12.2
         *
         * Destroys all the parameters in the aggregation {@link #getParameters parameters}.
         */
        destroyParameters(): sap.ui.unified.FileUploader;
        /**
         * @SINCE 1.52
         *
         * Destroys the xhrSettings in the aggregation {@link #getXhrSettings xhrSettings}.
         */
        destroyXhrSettings(): sap.ui.unified.FileUploader;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:change change} event of this `sap.ui.unified.FileUploader`.
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
        ): sap.ui.unified.FileUploader;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:fileAllowed fileAllowed} event of this `sap.ui.unified.FileUploader`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachFileAllowed(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.unified.FileUploader;
        /**
         * @SINCE 1.24.0
         *
         * Detaches event handler `fnFunction` from the {@link #event:filenameLengthExceed filenameLengthExceed}
         * event of this `sap.ui.unified.FileUploader`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachFilenameLengthExceed(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.unified.FileUploader;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:fileSizeExceed fileSizeExceed} event of this
         * `sap.ui.unified.FileUploader`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachFileSizeExceed(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.unified.FileUploader;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:typeMissmatch typeMissmatch} event of this
         * `sap.ui.unified.FileUploader`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachTypeMissmatch(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.unified.FileUploader;
        /**
         * @SINCE 1.24.0
         *
         * Detaches event handler `fnFunction` from the {@link #event:uploadAborted uploadAborted} event of this
         * `sap.ui.unified.FileUploader`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachUploadAborted(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.unified.FileUploader;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:uploadComplete uploadComplete} event of this
         * `sap.ui.unified.FileUploader`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachUploadComplete(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.unified.FileUploader;
        /**
         * @SINCE 1.24.0
         *
         * Detaches event handler `fnFunction` from the {@link #event:uploadProgress uploadProgress} event of this
         * `sap.ui.unified.FileUploader`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachUploadProgress(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.unified.FileUploader;
        /**
         * @SINCE 1.30.0
         *
         * Detaches event handler `fnFunction` from the {@link #event:uploadStart uploadStart} event of this `sap.ui.unified.FileUploader`.
         *
         * The passed function and listener object must match the ones used for event registration.
         */
        detachUploadStart(
          /**
           * The function to be called, when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object on which the given function had to be called
           */
          oListener?: object
        ): sap.ui.unified.FileUploader;
        /**
         * Creates a new subclass of class sap.ui.unified.FileUploader with name `sClassName` and enriches it with
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
             * New file path value.
             */
            newValue?: string;
            /**
             * Files.
             */
            files?: object[];
          }
        ): sap.ui.unified.FileUploader;
        /**
         * Fires event {@link #event:fileAllowed fileAllowed} to attached listeners.
         */
        fireFileAllowed(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ui.unified.FileUploader;
        /**
         * @SINCE 1.24.0
         *
         * Fires event {@link #event:filenameLengthExceed filenameLengthExceed} to attached listeners.
         */
        fireFilenameLengthExceed(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The filename, which is longer than specified by the value of the property maximumFilenameLength.
             */
            fileName?: string;
          }
        ): sap.ui.unified.FileUploader;
        /**
         * Fires event {@link #event:fileSizeExceed fileSizeExceed} to attached listeners.
         */
        fireFileSizeExceed(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The name of a file to be uploaded.
             */
            fileName?: string;
            /**
             * The size in MB of a file to be uploaded.
             */
            fileSize?: string;
          }
        ): sap.ui.unified.FileUploader;
        /**
         * Fires event {@link #event:typeMissmatch typeMissmatch} to attached listeners.
         */
        fireTypeMissmatch(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The name of a file to be uploaded.
             */
            fileName?: string;
            /**
             * The file ending of a file to be uploaded.
             */
            fileType?: string;
            /**
             * The MIME type of a file to be uploaded.
             */
            mimeType?: string;
          }
        ): sap.ui.unified.FileUploader;
        /**
         * @SINCE 1.24.0
         *
         * Fires event {@link #event:uploadAborted uploadAborted} to attached listeners.
         */
        fireUploadAborted(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The name of a file to be uploaded.
             */
            fileName?: string;
            /**
             * Http-Request-Headers. Required for receiving "header" is to set the property "sendXHR" to true. This
             * property is not supported by Internet Explorer 9.
             */
            requestHeaders?: object[];
          }
        ): sap.ui.unified.FileUploader;
        /**
         * Fires event {@link #event:uploadComplete uploadComplete} to attached listeners.
         */
        fireUploadComplete(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The name of a file to be uploaded.
             */
            fileName?: string;
            /**
             * Response message which comes from the server. On the server side this response has to be put within the
             * "body" tags of the response document of the iFrame. It can consist of a return code and an
             * optional message. This does not work in cross-domain scenarios.
             */
            response?: string;
            /**
             * ReadyState of the XHR request. Required for receiving a readyState is to set the property "sendXHR" to
             * "true". This property is not supported by Internet Explorer 9.
             */
            readyStateXHR?: string;
            /**
             * Status of the XHR request. Required for receiving a status is to set the property "sendXHR" to "true".
             * This property is not supported by Internet Explorer 9.
             */
            status?: string;
            /**
             * Http-Response which comes from the server. Required for receiving "responseRaw" is to set the property
             * "sendXHR" to true. This property is not supported by Internet Explorer 9.
             */
            responseRaw?: string;
            /**
             * Http-Response-Headers which come from the server. provided as a JSON-map, i.e. each header-field is reflected
             * by a property in the header-object, with the property value reflecting the header-field's content. Required
             * for receiving "header" is to set the property "sendXHR" to true. This property is not supported by Internet
             * Explorer 9.
             */
            headers?: object;
            /**
             * Http-Request-Headers. Required for receiving "header" is to set the property "sendXHR" to true. This
             * property is not supported by Internet Explorer 9.
             */
            requestHeaders?: object[];
          }
        ): sap.ui.unified.FileUploader;
        /**
         * @SINCE 1.24.0
         *
         * Fires event {@link #event:uploadProgress uploadProgress} to attached listeners.
         */
        fireUploadProgress(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * Indicates whether or not the relative upload progress can be calculated out of loaded and total.
             */
            lengthComputable?: boolean;
            /**
             * The number of bytes of the file which have been uploaded by to the time the event was fired.
             */
            loaded?: number;
            /**
             * The total size of the file to be uploaded in byte.
             */
            total?: number;
            /**
             * The name of a file to be uploaded.
             */
            fileName?: string;
            /**
             * Http-Request-Headers. Required for receiving "header" is to set the property "sendXHR" to true. This
             * property is not supported by Internet Explorer 9.
             */
            requestHeaders?: object[];
          }
        ): sap.ui.unified.FileUploader;
        /**
         * @SINCE 1.30.0
         *
         * Fires event {@link #event:uploadStart uploadStart} to attached listeners.
         */
        fireUploadStart(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The name of a file to be uploaded.
             */
            fileName?: string;
            /**
             * Http-Request-Headers. Required for receiving "header" is to set the property "sendXHR" to true. This
             * property is not supported by Internet Explorer 9.
             */
            requestHeaders?: object[];
          }
        ): sap.ui.unified.FileUploader;
        /**
         * Gets current value of property {@link #getAdditionalData additionalData}.
         *
         * Additional data that is sent to the back end service. Data will be transmitted as value of a hidden input
         * where the name is derived from the name property with suffix -data.
         */
        getAdditionalData(): string;
        /**
         * Gets current value of property {@link #getButtonOnly buttonOnly}.
         *
         * If set to "true", the FileUploader will be rendered as Button only, without showing the InputField.
         *
         * Default value is `false`.
         */
        getButtonOnly(): boolean;
        /**
         * Gets current value of property {@link #getButtonText buttonText}.
         *
         * The Button text can be overwritten using this property.
         */
        getButtonText(): string;
        /**
         * Gets current value of property {@link #getEnabled enabled}.
         *
         * Disabled controls have different colors, depending on customer settings.
         *
         * Default value is `true`.
         */
        getEnabled(): boolean;
        /**
         * Gets current value of property {@link #getFileType fileType}.
         *
         * The chosen files will be checked against an array of file types. If at least one file does not fit the
         * file type restriction the upload is prevented. Example: ["jpg", "png", "bmp"].
         */
        getFileType(): string[];
        /**
         * Gets content of aggregation {@link #getHeaderParameters headerParameters}.
         *
         * The header parameters for the FileUploader which are only submitted with XHR requests. Header parameters
         * are not supported by Internet Explorer 9.
         */
        getHeaderParameters(): sap.ui.unified.FileUploaderParameter[];
        /**
         * @SINCE 1.26.0
         *
         * Gets current value of property {@link #getIcon icon}.
         *
         * Icon to be displayed as graphical element within the button. This can be a URI to an image or an icon
         * font URI.
         *
         * Default value is `empty string`.
         */
        getIcon(): sap.ui.core.URI;
        /**
         * @SINCE 1.26.0
         *
         * Gets current value of property {@link #getIconFirst iconFirst}.
         *
         * If set to true (default), the display sequence is 1. icon 2. control text.
         *
         * Default value is `true`.
         */
        getIconFirst(): boolean;
        /**
         * @SINCE 1.26.0
         *
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
         * @SINCE 1.26.0
         *
         * Gets current value of property {@link #getIconOnly iconOnly}.
         *
         * If set to true, the button is displayed without any text.
         *
         * Default value is `false`.
         */
        getIconOnly(): boolean;
        /**
         * @SINCE 1.26.0
         *
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
         * @SINCE 1.24.0
         *
         * Gets current value of property {@link #getMaximumFilenameLength maximumFilenameLength}.
         *
         * The maximum length of a filename which the FileUploader will accept. If the maximum filename length is
         * exceeded, the corresponding Event 'filenameLengthExceed' is fired.
         */
        getMaximumFilenameLength(): number;
        /**
         * Gets current value of property {@link #getMaximumFileSize maximumFileSize}.
         *
         * A file size limit in megabytes which prevents the upload if at least one file exceeds it. This property
         * is not supported by Internet Explorer 9.
         */
        getMaximumFileSize(): number;
        /**
         * Returns a metadata object for class sap.ui.unified.FileUploader.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getMimeType mimeType}.
         *
         * The chosen files will be checked against an array of mime types. If at least one file does not fit the
         * mime type restriction the upload is prevented. This property is not supported by Internet Explorer 9.
         * Example: mimeType ["image/png", "image/jpeg"].
         */
        getMimeType(): string[];
        /**
         * Gets current value of property {@link #getMultiple multiple}.
         *
         * Allows multiple files to be chosen and uploaded from the same folder. This property is not supported
         * by Internet Explorer 9.
         *
         * **Note:** Keep in mind that the various operating systems for mobile devices can react differently to
         * the property so that fewer upload functions may be available in some cases.
         *
         * Default value is `false`.
         */
        getMultiple(): boolean;
        /**
         * Gets current value of property {@link #getName name}.
         *
         * Unique control name for identification on the server side after sending data to the server.
         */
        getName(): string;
        /**
         * @SINCE 1.12.2
         *
         * Gets content of aggregation {@link #getParameters parameters}.
         *
         * The parameters for the FileUploader which are rendered as a hidden inputfield.
         */
        getParameters(): sap.ui.unified.FileUploaderParameter[];
        /**
         * Gets current value of property {@link #getPlaceholder placeholder}.
         *
         * Placeholder for the text field.
         */
        getPlaceholder(): string;
        /**
         * @SINCE 1.52
         *
         * Allows to process Blobs before they get uploaded. This API can be used to create custom Blobs and upload
         * these custom Blobs instead of the received/initials Blobs in the parameter `aBlobs`. One use case could
         * be to create and upload zip archives based on the passed Blobs. The default implementation of this API
         * should simply resolve with the received Blobs (parameter `aBlobs`).
         *
         * This API is only supported in case `sendXHR` is `true`. This means only IE10+ is supported, while IE9
         * and below is not.
         *
         * This is a default implementation of the interface `sap.ui.unified.IProcessableBlobs`.
         */
        getProcessedBlobsFromArray(
          /**
           * The initial Blobs which can be used to determine/calculate a new array of Blobs for further processing.
           */
          aBlobs: Blob[]
        ): Promise<any>;
        /**
         * Gets current value of property {@link #getSameFilenameAllowed sameFilenameAllowed}.
         *
         * If the FileUploader is configured to upload the file directly after the file is selected it is not allowed
         * to upload a file with the same name again. If a user should be allowed to upload a file with the same
         * name again this parameter has to be "true". A typical use case would be if the files have different paths.
         *
         * Default value is `false`.
         */
        getSameFilenameAllowed(): boolean;
        /**
         * Gets current value of property {@link #getSendXHR sendXHR}.
         *
         * If set to "true", the request will be sent as XHR request instead of a form submit. This property is
         * not supported by Internet Explorer 9.
         *
         * Default value is `false`.
         */
        getSendXHR(): boolean;
        /**
         * Gets current value of property {@link #getStyle style}.
         *
         * Style of the button. "Transparent, "Accept", "Reject", or "Emphasized" is allowed.
         */
        getStyle(): string;
        /**
         * Gets current value of property {@link #getUploadOnChange uploadOnChange}.
         *
         * If set to "true", the upload immediately starts after file selection. With the default setting, the upload
         * needs to be explicitly triggered.
         *
         * Default value is `false`.
         */
        getUploadOnChange(): boolean;
        /**
         * Gets current value of property {@link #getUploadUrl uploadUrl}.
         *
         * Used when URL address is on a remote server.
         *
         * Default value is `empty string`.
         */
        getUploadUrl(): sap.ui.core.URI;
        /**
         * Gets current value of property {@link #getUseMultipart useMultipart}.
         *
         * If set to "false", the request will be sent as file only request instead of a multipart/form-data request.
         * Only one file could be uploaded using this type of request. Required for sending such a request is to
         * set the property "sendXHR" to "true". This property is not supported by Internet Explorer 9.
         *
         * Default value is `true`.
         */
        getUseMultipart(): boolean;
        /**
         * Gets current value of property {@link #getValue value}.
         *
         * Value of the path for file upload.
         *
         * Default value is `empty string`.
         */
        getValue(): string;
        /**
         * @SINCE 1.24.0
         *
         * Gets current value of property {@link #getValueState valueState}.
         *
         * Visualizes warnings or errors related to the text field. Possible values: Warning, Error, Success, None.
         *
         * Default value is `None`.
         */
        getValueState(): sap.ui.core.ValueState;
        /**
         * @SINCE 1.52
         *
         * Gets current value of property {@link #getValueStateText valueStateText}.
         *
         * Custom text for the value state message pop-up.
         *
         * **Note:** If not specified, a default text, based on the value state type, will be used instead.
         */
        getValueStateText(): string;
        /**
         * Gets current value of property {@link #getWidth width}.
         *
         * Specifies the displayed control width.
         *
         * Default value is `empty string`.
         */
        getWidth(): sap.ui.core.CSSSize;
        /**
         * @SINCE 1.52
         *
         * Gets content of aggregation {@link #getXhrSettings xhrSettings}.
         *
         * Settings for the `XMLHttpRequest` object. **Note:** This aggregation is only used when the `sendXHR`
         * property is set to `true`.
         */
        getXhrSettings(): sap.ui.unified.FileUploaderXHRSettings;
        /**
         * Checks for the provided `sap.ui.unified.FileUploaderParameter` in the aggregation {@link #getHeaderParameters
         * headerParameters}. and returns its index if found or -1 otherwise.
         */
        indexOfHeaderParameter(
          /**
           * The headerParameter whose index is looked for
           */
          oHeaderParameter: sap.ui.unified.FileUploaderParameter
        ): number;
        /**
         * @SINCE 1.12.2
         *
         * Checks for the provided `sap.ui.unified.FileUploaderParameter` in the aggregation {@link #getParameters
         * parameters}. and returns its index if found or -1 otherwise.
         */
        indexOfParameter(
          /**
           * The parameter whose index is looked for
           */
          oParameter: sap.ui.unified.FileUploaderParameter
        ): number;
        /**
         * Inserts a headerParameter into the aggregation {@link #getHeaderParameters headerParameters}.
         */
        insertHeaderParameter(
          /**
           * The headerParameter to insert; if empty, nothing is inserted
           */
          oHeaderParameter: sap.ui.unified.FileUploaderParameter,
          /**
           * The `0`-based index the headerParameter should be inserted at; for a negative value of `iIndex`, the
           * headerParameter is inserted at position 0; for a value greater than the current size of the aggregation,
           * the headerParameter is inserted at the last position
           */
          iIndex: number
        ): sap.ui.unified.FileUploader;
        /**
         * @SINCE 1.12.2
         *
         * Inserts a parameter into the aggregation {@link #getParameters parameters}.
         */
        insertParameter(
          /**
           * The parameter to insert; if empty, nothing is inserted
           */
          oParameter: sap.ui.unified.FileUploaderParameter,
          /**
           * The `0`-based index the parameter should be inserted at; for a negative value of `iIndex`, the parameter
           * is inserted at position 0; for a value greater than the current size of the aggregation, the parameter
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.unified.FileUploader;
        /**
         * Removes all the controls from the aggregation {@link #getHeaderParameters headerParameters}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllHeaderParameters(): sap.ui.unified.FileUploaderParameter[];
        /**
         * @SINCE 1.12.2
         *
         * Removes all the controls from the aggregation {@link #getParameters parameters}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllParameters(): sap.ui.unified.FileUploaderParameter[];
        /**
         * Removes a headerParameter from the aggregation {@link #getHeaderParameters headerParameters}.
         */
        removeHeaderParameter(
          /**
           * The headerParameter to remove or its index or id
           */
          vHeaderParameter:
            | number
            | string
            | sap.ui.unified.FileUploaderParameter
        ): sap.ui.unified.FileUploaderParameter;
        /**
         * @SINCE 1.12.2
         *
         * Removes a parameter from the aggregation {@link #getParameters parameters}.
         */
        removeParameter(
          /**
           * The parameter to remove or its index or id
           */
          vParameter: number | string | sap.ui.unified.FileUploaderParameter
        ): sap.ui.unified.FileUploaderParameter;
        /**
         * Sets a new value for property {@link #getAdditionalData additionalData}.
         *
         * Additional data that is sent to the back end service. Data will be transmitted as value of a hidden input
         * where the name is derived from the name property with suffix -data.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setAdditionalData(
          /**
           * New value for property `additionalData`
           */
          sAdditionalData: string
        ): sap.ui.unified.FileUploader;
        /**
         * Sets a new value for property {@link #getButtonOnly buttonOnly}.
         *
         * If set to "true", the FileUploader will be rendered as Button only, without showing the InputField.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setButtonOnly(
          /**
           * New value for property `buttonOnly`
           */
          bButtonOnly: boolean
        ): sap.ui.unified.FileUploader;
        /**
         * Sets a new value for property {@link #getButtonText buttonText}.
         *
         * The Button text can be overwritten using this property.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setButtonText(
          /**
           * New value for property `buttonText`
           */
          sButtonText: string
        ): sap.ui.unified.FileUploader;
        /**
         * Sets a new value for property {@link #getEnabled enabled}.
         *
         * Disabled controls have different colors, depending on customer settings.
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
        ): sap.ui.unified.FileUploader;
        /**
         * Sets a new value for property {@link #getFileType fileType}.
         *
         * The chosen files will be checked against an array of file types. If at least one file does not fit the
         * file type restriction the upload is prevented. Example: ["jpg", "png", "bmp"].
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setFileType(
          /**
           * New value for property `fileType`
           */
          sFileType: string[]
        ): sap.ui.unified.FileUploader;
        /**
         * @SINCE 1.26.0
         *
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
        ): sap.ui.unified.FileUploader;
        /**
         * @SINCE 1.26.0
         *
         * Sets a new value for property {@link #getIconFirst iconFirst}.
         *
         * If set to true (default), the display sequence is 1. icon 2. control text.
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
        ): sap.ui.unified.FileUploader;
        /**
         * @SINCE 1.26.0
         *
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
        ): sap.ui.unified.FileUploader;
        /**
         * @SINCE 1.26.0
         *
         * Sets a new value for property {@link #getIconOnly iconOnly}.
         *
         * If set to true, the button is displayed without any text.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setIconOnly(
          /**
           * New value for property `iconOnly`
           */
          bIconOnly: boolean
        ): sap.ui.unified.FileUploader;
        /**
         * @SINCE 1.26.0
         *
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
        ): sap.ui.unified.FileUploader;
        /**
         * @SINCE 1.24.0
         *
         * Sets a new value for property {@link #getMaximumFilenameLength maximumFilenameLength}.
         *
         * The maximum length of a filename which the FileUploader will accept. If the maximum filename length is
         * exceeded, the corresponding Event 'filenameLengthExceed' is fired.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setMaximumFilenameLength(
          /**
           * New value for property `maximumFilenameLength`
           */
          iMaximumFilenameLength: number
        ): sap.ui.unified.FileUploader;
        /**
         * Sets a new value for property {@link #getMaximumFileSize maximumFileSize}.
         *
         * A file size limit in megabytes which prevents the upload if at least one file exceeds it. This property
         * is not supported by Internet Explorer 9.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setMaximumFileSize(
          /**
           * New value for property `maximumFileSize`
           */
          fMaximumFileSize: number
        ): sap.ui.unified.FileUploader;
        /**
         * Sets a new value for property {@link #getMimeType mimeType}.
         *
         * The chosen files will be checked against an array of mime types. If at least one file does not fit the
         * mime type restriction the upload is prevented. This property is not supported by Internet Explorer 9.
         * Example: mimeType ["image/png", "image/jpeg"].
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setMimeType(
          /**
           * New value for property `mimeType`
           */
          sMimeType: string[]
        ): sap.ui.unified.FileUploader;
        /**
         * Sets a new value for property {@link #getMultiple multiple}.
         *
         * Allows multiple files to be chosen and uploaded from the same folder. This property is not supported
         * by Internet Explorer 9.
         *
         * **Note:** Keep in mind that the various operating systems for mobile devices can react differently to
         * the property so that fewer upload functions may be available in some cases.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setMultiple(
          /**
           * New value for property `multiple`
           */
          bMultiple: boolean
        ): sap.ui.unified.FileUploader;
        /**
         * Sets a new value for property {@link #getName name}.
         *
         * Unique control name for identification on the server side after sending data to the server.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setName(
          /**
           * New value for property `name`
           */
          sName: string
        ): sap.ui.unified.FileUploader;
        /**
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
        ): sap.ui.unified.FileUploader;
        /**
         * Sets a new value for property {@link #getSameFilenameAllowed sameFilenameAllowed}.
         *
         * If the FileUploader is configured to upload the file directly after the file is selected it is not allowed
         * to upload a file with the same name again. If a user should be allowed to upload a file with the same
         * name again this parameter has to be "true". A typical use case would be if the files have different paths.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setSameFilenameAllowed(
          /**
           * New value for property `sameFilenameAllowed`
           */
          bSameFilenameAllowed: boolean
        ): sap.ui.unified.FileUploader;
        /**
         * Sets a new value for property {@link #getSendXHR sendXHR}.
         *
         * If set to "true", the request will be sent as XHR request instead of a form submit. This property is
         * not supported by Internet Explorer 9.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setSendXHR(
          /**
           * New value for property `sendXHR`
           */
          bSendXHR: boolean
        ): sap.ui.unified.FileUploader;
        /**
         * Sets a new value for property {@link #getStyle style}.
         *
         * Style of the button. "Transparent, "Accept", "Reject", or "Emphasized" is allowed.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setStyle(
          /**
           * New value for property `style`
           */
          sStyle: string
        ): sap.ui.unified.FileUploader;
        /**
         * Sets a new value for property {@link #getUploadOnChange uploadOnChange}.
         *
         * If set to "true", the upload immediately starts after file selection. With the default setting, the upload
         * needs to be explicitly triggered.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setUploadOnChange(
          /**
           * New value for property `uploadOnChange`
           */
          bUploadOnChange: boolean
        ): sap.ui.unified.FileUploader;
        /**
         * Sets a new value for property {@link #getUploadUrl uploadUrl}.
         *
         * Used when URL address is on a remote server.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `empty string`.
         */
        setUploadUrl(
          /**
           * New value for property `uploadUrl`
           */
          sUploadUrl: sap.ui.core.URI
        ): sap.ui.unified.FileUploader;
        /**
         * Sets a new value for property {@link #getUseMultipart useMultipart}.
         *
         * If set to "false", the request will be sent as file only request instead of a multipart/form-data request.
         * Only one file could be uploaded using this type of request. Required for sending such a request is to
         * set the property "sendXHR" to "true". This property is not supported by Internet Explorer 9.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setUseMultipart(
          /**
           * New value for property `useMultipart`
           */
          bUseMultipart: boolean
        ): sap.ui.unified.FileUploader;
        /**
         * Sets a new value for property {@link #getValue value}.
         *
         * Value of the path for file upload.
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
        ): sap.ui.unified.FileUploader;
        /**
         * @SINCE 1.24.0
         *
         * Sets a new value for property {@link #getValueState valueState}.
         *
         * Visualizes warnings or errors related to the text field. Possible values: Warning, Error, Success, None.
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
        ): sap.ui.unified.FileUploader;
        /**
         * @SINCE 1.52
         *
         * Sets a new value for property {@link #getValueStateText valueStateText}.
         *
         * Custom text for the value state message pop-up.
         *
         * **Note:** If not specified, a default text, based on the value state type, will be used instead.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setValueStateText(
          /**
           * New value for property `valueStateText`
           */
          sValueStateText: string
        ): sap.ui.unified.FileUploader;
        /**
         * Sets a new value for property {@link #getWidth width}.
         *
         * Specifies the displayed control width.
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
        ): sap.ui.unified.FileUploader;
        /**
         * @SINCE 1.52
         *
         * Sets the aggregated {@link #getXhrSettings xhrSettings}.
         */
        setXhrSettings(
          /**
           * The xhrSettings to set
           */
          oXhrSettings: sap.ui.unified.FileUploaderXHRSettings
        ): sap.ui.unified.FileUploader;
        /**
         * Starts the upload (as defined by uploadUrl).
         */
        upload(
          /**
           * Set to `true` to allow pre-processing of the files before sending the request. As a result, the `upload`
           * method becomes asynchronous. See {@link sap.ui.unified.IProcessableBlobs} for more information. **Note:**
           * This parameter is only taken into account when `sendXHR` is set to `true`.
           */
          bPreProcessFiles?: boolean
        ): void;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.ui.unified.FileUploader`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
         *
         * Event is fired when the value of the file path has been changed.
         */
        attachChange(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.FileUploader` itself
           */
          oListener?: object
        ): sap.ui.unified.FileUploader;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:fileAllowed fileAllowed} event of this `sap.ui.unified.FileUploader`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
         *
         * Event is fired when the file is allowed for upload on client side.
         */
        attachFileAllowed(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.FileUploader` itself
           */
          oListener?: object
        ): sap.ui.unified.FileUploader;
        /**
         * @SINCE 1.24.0
         *
         * Attaches event handler `fnFunction` to the {@link #event:filenameLengthExceed filenameLengthExceed} event
         * of this `sap.ui.unified.FileUploader`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
         *
         * Event is fired, if the filename of a chosen file is longer than the value specified with the maximumFilenameLength
         * property.
         */
        attachFilenameLengthExceed(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.FileUploader` itself
           */
          oListener?: object
        ): sap.ui.unified.FileUploader;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:fileSizeExceed fileSizeExceed} event of this
         * `sap.ui.unified.FileUploader`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
         *
         * Event is fired when the size of a file is above the maximumFileSize property. This event is not supported
         * by Internet Explorer 9 (same restriction as for the property maximumFileSize).
         */
        attachFileSizeExceed(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.FileUploader` itself
           */
          oListener?: object
        ): sap.ui.unified.FileUploader;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:typeMissmatch typeMissmatch} event of this `sap.ui.unified.FileUploader`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
         *
         * Event is fired when the type of a file does not match the mimeType or fileType property.
         */
        attachTypeMissmatch(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.FileUploader` itself
           */
          oListener?: object
        ): sap.ui.unified.FileUploader;
        /**
         * @SINCE 1.24.0
         *
         * Attaches event handler `fnFunction` to the {@link #event:uploadAborted uploadAborted} event of this `sap.ui.unified.FileUploader`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
         *
         * Event is fired after the current upload has been aborted. This is event is only supported with property
         * sendXHR set to true, i.e. the event is not supported in Internet Explorer 9.
         */
        attachUploadAborted(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.FileUploader` itself
           */
          oListener?: object
        ): sap.ui.unified.FileUploader;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:uploadComplete uploadComplete} event of this
         * `sap.ui.unified.FileUploader`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
         *
         * Event is fired as soon as the upload request is completed (either successful or unsuccessful). To see
         * if the upload request was successful, check the 'state' parameter for a value 2xx. The uploads actual
         * progress can be retrieved via the 'uploadProgress' Event. However this covers only the client side of
         * the Upload process and does not give any success status from the server.
         */
        attachUploadComplete(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.FileUploader` itself
           */
          oListener?: object
        ): sap.ui.unified.FileUploader;
        /**
         * @SINCE 1.24.0
         *
         * Attaches event handler `fnFunction` to the {@link #event:uploadProgress uploadProgress} event of this
         * `sap.ui.unified.FileUploader`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
         *
         * Event is fired after the upload has started and before the upload is completed and contains progress
         * information related to the running upload. Depending on file size, band width and used browser the event
         * is fired once or multiple times. This is event is only supported with property sendXHR set to true, i.e.
         * the event is not supported in Internet Explorer 9.
         */
        attachUploadProgress(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.FileUploader` itself
           */
          oListener?: object
        ): sap.ui.unified.FileUploader;
        /**
         * @SINCE 1.30.0
         *
         * Attaches event handler `fnFunction` to the {@link #event:uploadStart uploadStart} event of this `sap.ui.unified.FileUploader`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
         *
         * Event is fired before an upload is started.
         */
        attachUploadStart(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.FileUploader` itself
           */
          oListener?: object
        ): sap.ui.unified.FileUploader;
      }
      /**
       * Represents a parameter for the FileUploader which is rendered as a hidden inputfield.
       */
      class FileUploaderParameter extends sap.ui.core.Element {
        /**
         * Constructor for a new FileUploaderParameter.
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
          mSettings?: FileUploaderParameterOpts
        );

        /**
         * Creates a new subclass of class sap.ui.unified.FileUploaderParameter with name `sClassName` and enriches
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
         * Returns a metadata object for class sap.ui.unified.FileUploaderParameter.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * @SINCE 1.12.2
         *
         * Gets current value of property {@link #getName name}.
         *
         * The name of the hidden inputfield.
         */
        getName(): string;
        /**
         * @SINCE 1.12.2
         *
         * Gets current value of property {@link #getValue value}.
         *
         * The value of the hidden inputfield.
         */
        getValue(): string;
        /**
         * @SINCE 1.12.2
         *
         * Sets a new value for property {@link #getName name}.
         *
         * The name of the hidden inputfield.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setName(
          /**
           * New value for property `name`
           */
          sName: string
        ): sap.ui.unified.FileUploaderParameter;
        /**
         * @SINCE 1.12.2
         *
         * Sets a new value for property {@link #getValue value}.
         *
         * The value of the hidden inputfield.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setValue(
          /**
           * New value for property `value`
           */
          sValue: string
        ): sap.ui.unified.FileUploaderParameter;
      }
      /**
       * @SINCE 1.52
       *
       * Properties for the `XMLHttpRequest` object used for file uploads.
       */
      class FileUploaderXHRSettings extends sap.ui.core.Element {
        /**
         * Constructor for a new FileUploaderXHRSettings.
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
          mSettings?: FileUploaderXHRSettingsOpts
        );

        /**
         * Creates a new subclass of class sap.ui.unified.FileUploaderXHRSettings with name `sClassName` and enriches
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
         * Returns a metadata object for class sap.ui.unified.FileUploaderXHRSettings.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * @SINCE 1.52
         *
         * Gets current value of property {@link #getWithCredentials withCredentials}.
         *
         * Determines the value of the `XMLHttpRequest.withCredentials` property
         *
         * Default value is `false`.
         */
        getWithCredentials(): boolean;
        /**
         * @SINCE 1.52
         *
         * Sets a new value for property {@link #getWithCredentials withCredentials}.
         *
         * Determines the value of the `XMLHttpRequest.withCredentials` property
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setWithCredentials(
          /**
           * New value for property `withCredentials`
           */
          bWithCredentials: boolean
        ): sap.ui.unified.FileUploaderXHRSettings;
      }
      /**
       * @SINCE 1.21.0
       *
       * A menu is an interactive element which provides a choice of different actions to the user. These actions
       * (items) can also be organized in submenus. Like other dialog-like controls, the menu is not rendered
       * within the control hierarchy. Instead it can be opened at a specified position via a function call.
       */
      class Menu extends sap.ui.core.Control
        implements sap.ui.core.IContextMenu {
        /**
         * Constructor for a new Menu control.
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
          mSettings?: MenuOpts
        );

        /**
         * @SINCE 1.26.3
         *
         * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
         */
        addAriaLabelledBy(
          /**
           * The ariaLabelledBy to add; if empty, nothing is inserted
           */
          vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control
        ): sap.ui.unified.Menu;
        /**
         * Adds some item to the aggregation {@link #getItems items}.
         */
        addItem(
          /**
           * The item to add; if empty, nothing is inserted
           */
          oItem: sap.ui.unified.MenuItemBase
        ): sap.ui.unified.Menu;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:itemSelect itemSelect} event of this `sap.ui.unified.Menu`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.Menu` itself.
         *
         * Fired on the root menu of a menu hierarchy whenever a user selects an item within the menu or within
         * one of its direct or indirect submenus. **Note:** There is also a select event available for each single
         * menu item. This event and the event of the menu items are redundant.
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
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.Menu` itself
           */
          oListener?: object
        ): sap.ui.unified.Menu;
        /**
         * Closes the menu.
         */
        close(): void;
        /**
         * Destroys all the items in the aggregation {@link #getItems items}.
         */
        destroyItems(): sap.ui.unified.Menu;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:itemSelect itemSelect} event of this `sap.ui.unified.Menu`.
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
        ): sap.ui.unified.Menu;
        /**
         * Creates a new subclass of class sap.ui.unified.Menu with name `sClassName` and enriches it with the information
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
         * Fires event {@link #event:itemSelect itemSelect} to attached listeners.
         */
        fireItemSelect(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The action (item) which was selected by the user.
             */
            item?: sap.ui.unified.MenuItemBase;
          }
        ): sap.ui.unified.Menu;
        /**
         * @deprecated (since 1.27.0) - replaced by `ariaLabelledBy` association
         *
         * Gets current value of property {@link #getAriaDescription ariaDescription}.
         *
         * Accessible label / description of the menu for assistive technologies like screenreaders.
         */
        getAriaDescription(): string;
        /**
         * @SINCE 1.26.3
         *
         * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
         * ariaLabelledBy}.
         */
        getAriaLabelledBy(): sap.ui.core.ID[];
        /**
         * Gets current value of property {@link #getEnabled enabled}.
         *
         * When a menu is disabled none of its items can be selected by the user. The enabled property of an item
         * (@link sap.ui.unified.MenuItemBase#getEnabled) has no effect when the menu of the item is disabled.
         *
         * Default value is `true`.
         */
        getEnabled(): boolean;
        /**
         * Gets content of aggregation {@link #getItems items}.
         *
         * The available actions to be displayed as items of the menu.
         */
        getItems(): sap.ui.unified.MenuItemBase[];
        /**
         * Gets current value of property {@link #getMaxVisibleItems maxVisibleItems}.
         *
         * The maximum number of items which are displayed before an overflow mechanism takes effect. A value smaller
         * than 1 means an infinite number of visible items. The overall height of the menu is limited by the height
         * of the screen. If the maximum possible height is reached, an overflow takes effect, even if the maximum
         * number of visible items is not yet reached.
         *
         * Default value is `0`.
         */
        getMaxVisibleItems(): number;
        /**
         * Returns a metadata object for class sap.ui.unified.Menu.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * @SINCE 1.25.0
         *
         * Gets current value of property {@link #getPageSize pageSize}.
         *
         * The keyboard can be used to navigate through the items of a menu. Beside the arrow keys for single steps
         * and the Home / End keys for jumping to the first / last item, the Page Up / Page
         * Down keys can be used to jump an arbitrary number of items up or down. This number can be defined
         * via the `pageSize` property. For values smaller than 1, paging behaves in a similar way to when using
         * the Home / End keys. If the value equals 1, the paging behavior is similar to that of the
         * arrow keys.
         *
         * Default value is `5`.
         */
        getPageSize(): number;
        /**
         * Checks for the provided `sap.ui.unified.MenuItemBase` in the aggregation {@link #getItems items}. and
         * returns its index if found or -1 otherwise.
         */
        indexOfItem(
          /**
           * The item whose index is looked for
           */
          oItem: sap.ui.unified.MenuItemBase
        ): number;
        /**
         * Inserts a item into the aggregation {@link #getItems items}.
         */
        insertItem(
          /**
           * The item to insert; if empty, nothing is inserted
           */
          oItem: sap.ui.unified.MenuItemBase,
          /**
           * The `0`-based index the item should be inserted at; for a negative value of `iIndex`, the item is inserted
           * at position 0; for a value greater than the current size of the aggregation, the item is inserted at
           * the last position
           */
          iIndex: number
        ): sap.ui.unified.Menu;
        /**
         * Opens the menu at the specified position.
         *
         * The position of the menu is defined relative to an element in the visible DOM by specifying the docking
         * location of the menu and of the related element.
         *
         * See {@link sap.ui.core.Popup#open Popup#open} for further details about popup positioning.
         */
        open(
          /**
           * Indicates whether or not the first item shall be highlighted when the menu is opened (keyboard case)
           */
          bWithKeyboard: boolean,
          /**
           * The element which will get the focus back again after the menu was closed
           */
          oOpenerRef: sap.ui.core.Element | any,
          /**
           * The reference docking location of the menu for positioning the menu on the screen
           */
          my: sap.ui.core.Dock,
          /**
           * The 'of' element's reference docking location for positioning the menu on the screen
           */
          at: sap.ui.core.Dock,
          /**
           * The menu is positioned relatively to this element based on the given dock locations
           */
          of: sap.ui.core.Element | any,
          /**
           * The offset relative to the docking point, specified as a string with space-separated pixel values (e.g.
           * "10 0" to move the popup 10 pixels to the right)
           */
          offset?: string,
          /**
           * The collision defines how the position of the menu should be adjusted in case it overflows the window
           * in some direction
           */
          collision?: sap.ui.core.Collision
        ): void;
        /**
         * @SINCE 1.26.3
         *
         * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
         */
        removeAllAriaLabelledBy(): sap.ui.core.ID[];
        /**
         * Removes all the controls from the aggregation {@link #getItems items}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllItems(): sap.ui.unified.MenuItemBase[];
        /**
         * @SINCE 1.26.3
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
         * Removes a item from the aggregation {@link #getItems items}.
         */
        removeItem(
          /**
           * The item to remove or its index or id
           */
          vItem: number | string | sap.ui.unified.MenuItemBase
        ): sap.ui.unified.MenuItemBase;
        /**
         * @deprecated (since 1.27.0) - replaced by `ariaLabelledBy` association
         *
         * Sets a new value for property {@link #getAriaDescription ariaDescription}.
         *
         * Accessible label / description of the menu for assistive technologies like screenreaders.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setAriaDescription(
          /**
           * New value for property `ariaDescription`
           */
          sAriaDescription: string
        ): sap.ui.unified.Menu;
        /**
         * Sets a new value for property {@link #getEnabled enabled}.
         *
         * When a menu is disabled none of its items can be selected by the user. The enabled property of an item
         * (@link sap.ui.unified.MenuItemBase#getEnabled) has no effect when the menu of the item is disabled.
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
        ): sap.ui.unified.Menu;
        /**
         * Sets a new value for property {@link #getMaxVisibleItems maxVisibleItems}.
         *
         * The maximum number of items which are displayed before an overflow mechanism takes effect. A value smaller
         * than 1 means an infinite number of visible items. The overall height of the menu is limited by the height
         * of the screen. If the maximum possible height is reached, an overflow takes effect, even if the maximum
         * number of visible items is not yet reached.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `0`.
         */
        setMaxVisibleItems(
          /**
           * New value for property `maxVisibleItems`
           */
          iMaxVisibleItems: number
        ): sap.ui.unified.Menu;
        /**
         * @SINCE 1.25.0
         *
         * Sets a new value for property {@link #getPageSize pageSize}.
         *
         * The keyboard can be used to navigate through the items of a menu. Beside the arrow keys for single steps
         * and the Home / End keys for jumping to the first / last item, the Page Up / Page
         * Down keys can be used to jump an arbitrary number of items up or down. This number can be defined
         * via the `pageSize` property. For values smaller than 1, paging behaves in a similar way to when using
         * the Home / End keys. If the value equals 1, the paging behavior is similar to that of the
         * arrow keys.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `5`.
         */
        setPageSize(
          /**
           * New value for property `pageSize`
           */
          iPageSize: number
        ): sap.ui.unified.Menu;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:itemSelect itemSelect} event of this `sap.ui.unified.Menu`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.Menu` itself.
         *
         * Fired on the root menu of a menu hierarchy whenever a user selects an item within the menu or within
         * one of its direct or indirect submenus. **Note:** There is also a select event available for each single
         * menu item. This event and the event of the menu items are redundant.
         */
        attachItemSelect(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.Menu` itself
           */
          oListener?: object
        ): sap.ui.unified.Menu;
      }
      /**
       * @SINCE 1.21.0
       *
       * Standard item to be used inside a menu. A menu item represents an action which can be selected by the
       * user in the menu or it can provide a submenu to organize the actions hierarchically.
       */
      class MenuItem extends sap.ui.unified.MenuItemBase {
        /**
         * Constructor for a new MenuItem element.
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
          mSettings?: MenuItemOpts
        );

        /**
         * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
         */
        addAriaLabelledBy(
          /**
           * The ariaLabelledBy to add; if empty, nothing is inserted
           */
          vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control
        ): sap.ui.unified.MenuItem;
        /**
         * Creates a new subclass of class sap.ui.unified.MenuItem with name `sClassName` and enriches it with the
         * information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.unified.MenuItemBase.extend}.
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
         * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
         * ariaLabelledBy}.
         */
        getAriaLabelledBy(): sap.ui.core.ID[];
        /**
         * Gets current value of property {@link #getIcon icon}.
         *
         * Defines the icon of the {@link sap.ui.core.IconPool sap.ui.core.IconPool} or an image which should be
         * displayed on the item.
         *
         * Default value is `empty string`.
         */
        getIcon(): sap.ui.core.URI;
        /**
         * Returns a metadata object for class sap.ui.unified.MenuItem.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getText text}.
         *
         * Defines the text which should be displayed on the item.
         *
         * Default value is `empty string`.
         */
        getText(): string;
        /**
         * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
         */
        removeAllAriaLabelledBy(): sap.ui.core.ID[];
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
         * Sets a new value for property {@link #getIcon icon}.
         *
         * Defines the icon of the {@link sap.ui.core.IconPool sap.ui.core.IconPool} or an image which should be
         * displayed on the item.
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
        ): sap.ui.unified.MenuItem;
        /**
         * Sets a new value for property {@link #getText text}.
         *
         * Defines the text which should be displayed on the item.
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
        ): sap.ui.unified.MenuItem;
      }
      /**
       * @SINCE 1.21.0
       *
       * Abstract base class for menu item which provides common properties and events for all concrete item implementations.
       */
      class MenuItemBase extends sap.ui.core.Element {
        /**
         * Abstract base class `MenuItemBase` for menu item elements. Please use concrete subclasses.
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
          mSettings?: MenuItemBaseOpts
        );

        /**
         * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.MenuItemBase`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.MenuItemBase` itself.
         *
         * Fired when the item is selected by the user. **Note:** The event is also available for items which have
         * a submenu. In general, applications must not handle event in this case because the user selection opens
         * the sub menu.
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
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.MenuItemBase` itself
           */
          oListener?: object
        ): sap.ui.unified.MenuItemBase;
        /**
         * Destroys the submenu in the aggregation {@link #getSubmenu submenu}.
         */
        destroySubmenu(): sap.ui.unified.MenuItemBase;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.ui.unified.MenuItemBase`.
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
        ): sap.ui.unified.MenuItemBase;
        /**
         * Creates a new subclass of class sap.ui.unified.MenuItemBase with name `sClassName` and enriches it with
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
         * Fires event {@link #event:select select} to attached listeners.
         */
        fireSelect(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: {
            /**
             * The current item
             */
            item?: sap.ui.unified.MenuItemBase;
          }
        ): sap.ui.unified.MenuItemBase;
        /**
         * Gets current value of property {@link #getEnabled enabled}.
         *
         * When an item is disabled the item can not be selected by the user. The enabled property of the item has
         * no effect when the menu of the item is disabled ({@link sap.ui.unified.Menu#getEnabled Menu#getEnabled}).
         *
         * Default value is `true`.
         */
        getEnabled(): boolean;
        /**
         * Returns a metadata object for class sap.ui.unified.MenuItemBase.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getStartsSection startsSection}.
         *
         * Defines whether a visual separator should be rendered before the item. **Note:** If an item is invisible
         * also the separator of this item is not shown.
         *
         * Default value is `false`.
         */
        getStartsSection(): boolean;
        /**
         * Gets content of aggregation {@link #getSubmenu submenu}.
         *
         * An optional submenu of the item which is opened when the item is selected by the user.
         */
        getSubmenu(): sap.ui.unified.Menu;
        /**
         * Gets current value of property {@link #getVisible visible}.
         *
         * Invisible items do not appear in the menu.
         *
         * Default value is `true`.
         */
        getVisible(): boolean;
        /**
         * Changes the visual hover state of the menu item.
         *
         * Subclasses may override this function.
         */
        hover(
          /**
           * Specifies whether the item is currently hovered or not.
           */
          bHovered: boolean,
          /**
           * The menu to which this item belongs
           */
          oMenu: sap.ui.unified.Menu
        ): void;
        /**
         * Informs the item that the item HTML is now applied to the DOM.
         *
         * Subclasses may override this function.
         */
        onAfterRendering(): void;
        /**
         * Event handler which is called whenever the submenu of the item is opened or closed.
         *
         * Subclasses may override this function.
         */
        onSubmenuToggle(
          /**
           * Specifies whether the submenu of the item is opened or closed
           */
          bOpened: boolean
        ): void;
        /**
         * Produces the HTML of an item and writes it to render-output-buffer during the rendering of the corresponding
         * menu.
         *
         * Subclasses may override this function.
         */
        render(
          /**
           * The `RenderManager` that can be used for writing to the render-output-buffer
           */
          oRenderManager: sap.ui.core.RenderManager,
          /**
           * The item which should be rendered
           */
          oItem: sap.ui.unified.MenuItemBase,
          /**
           * The menu to which this item belongs
           */
          oMenu: sap.ui.unified.Menu
        ): void;
        /**
         * Sets a new value for property {@link #getEnabled enabled}.
         *
         * When an item is disabled the item can not be selected by the user. The enabled property of the item has
         * no effect when the menu of the item is disabled ({@link sap.ui.unified.Menu#getEnabled Menu#getEnabled}).
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
        ): sap.ui.unified.MenuItemBase;
        /**
         * Sets a new value for property {@link #getStartsSection startsSection}.
         *
         * Defines whether a visual separator should be rendered before the item. **Note:** If an item is invisible
         * also the separator of this item is not shown.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setStartsSection(
          /**
           * New value for property `startsSection`
           */
          bStartsSection: boolean
        ): sap.ui.unified.MenuItemBase;
        /**
         * Sets the aggregated {@link #getSubmenu submenu}.
         */
        setSubmenu(
          /**
           * The submenu to set
           */
          oSubmenu: sap.ui.unified.Menu
        ): sap.ui.unified.MenuItemBase;
        /**
         * Sets a new value for property {@link #getVisible visible}.
         *
         * Invisible items do not appear in the menu.
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
        ): sap.ui.unified.MenuItemBase;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.MenuItemBase`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.MenuItemBase` itself.
         *
         * Fired when the item is selected by the user. **Note:** The event is also available for items which have
         * a submenu. In general, applications must not handle event in this case because the user selection opens
         * the sub menu.
         */
        attachSelect(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.MenuItemBase` itself
           */
          oListener?: object
        ): sap.ui.unified.MenuItemBase;
      }
      /**
       * @SINCE 1.21.0
       *
       * Special menu item which contains a label and a text field. This menu item is e.g. helpful for filter
       * implementations. The aggregation `submenu` (inherited from parent class) is not supported for this type
       * of menu item.
       */
      class MenuTextFieldItem extends sap.ui.unified.MenuItemBase {
        /**
         * Constructor for a new MenuTextFieldItem element.
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
          mSettings?: MenuTextFieldItemOpts
        );

        /**
         * @deprecated (since 1.21) - the aggregation `submenu` (inherited from parent class) is not supported for
         * this type of menu item.
         *
         * The aggregation `submenu` (inherited from parent class) is not supported for this type of menu item.
         */
        // @ts-ignore
        destroySubmenu(): sap.ui.unified.MenuTextFieldItem;
        /**
         * Creates a new subclass of class sap.ui.unified.MenuTextFieldItem with name `sClassName` and enriches
         * it with the information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.unified.MenuItemBase.extend}.
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
         * Defines the icon of the {@link sap.ui.core.IconPool sap.ui.core.IconPool} or an image which should be
         * displayed on the item.
         */
        getIcon(): sap.ui.core.URI;
        /**
         * Gets current value of property {@link #getLabel label}.
         *
         * Defines the label of the text field of the item.
         */
        getLabel(): string;
        /**
         * Returns a metadata object for class sap.ui.unified.MenuTextFieldItem.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * @deprecated (since 1.21) - the aggregation `submenu` (inherited from parent class) is not supported for
         * this type of menu item.
         *
         * The aggregation `submenu` (inherited from parent class) is not supported for this type of menu item.
         */
        // @ts-ignore
        getSubmenu(): sap.ui.unified.Menu;
        /**
         * Gets current value of property {@link #getValue value}.
         *
         * Defines the value of the text field of the item.
         */
        getValue(): string;
        /**
         * Gets current value of property {@link #getValueState valueState}.
         *
         * Defines the value state of the text field of the item. This allows you to visualize e.g. warnings or
         * errors.
         *
         * Default value is `None`.
         */
        getValueState(): sap.ui.core.ValueState;
        /**
         * Sets a new value for property {@link #getIcon icon}.
         *
         * Defines the icon of the {@link sap.ui.core.IconPool sap.ui.core.IconPool} or an image which should be
         * displayed on the item.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setIcon(
          /**
           * New value for property `icon`
           */
          sIcon: sap.ui.core.URI
        ): sap.ui.unified.MenuTextFieldItem;
        /**
         * Sets a new value for property {@link #getLabel label}.
         *
         * Defines the label of the text field of the item.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setLabel(
          /**
           * New value for property `label`
           */
          sLabel: string
        ): sap.ui.unified.MenuTextFieldItem;
        /**
         * @deprecated (since 1.21) - the aggregation `submenu` (inherited from parent class) is not supported for
         * this type of menu item.
         *
         * The aggregation `submenu` (inherited from parent class) is not supported for this type of menu item.
         */
        // @ts-ignore
        setSubmenu(
          /**
           * The menu to which the sap.ui.unified.Submenu should be set
           */
          oMenu: sap.ui.unified.Menu
        ): sap.ui.unified.MenuTextFieldItem;
        /**
         * Sets a new value for property {@link #getValue value}.
         *
         * Defines the value of the text field of the item.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setValue(
          /**
           * New value for property `value`
           */
          sValue: string
        ): sap.ui.unified.MenuTextFieldItem;
        /**
         * Sets a new value for property {@link #getValueState valueState}.
         *
         * Defines the value state of the text field of the item. This allows you to visualize e.g. warnings or
         * errors.
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
        ): sap.ui.unified.MenuTextFieldItem;
      }
      /**
       * @SINCE 1.15.1
       * @deprecated (since 1.44.0)
       *
       * The shell control is meant as root control (full-screen) of an application. It was build as root control
       * of the Fiori Launchpad application and provides the basic capabilities for this purpose. Do not use this
       * control within applications which run inside the Fiori Lauchpad and do not use it for other scenarios
       * than the root control usecase.
       */
      class Shell extends sap.ui.unified.ShellLayout {
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
         * Adds some curtainContent to the aggregation {@link #getCurtainContent curtainContent}.
         */
        addCurtainContent(
          /**
           * The curtainContent to add; if empty, nothing is inserted
           */
          oCurtainContent: sap.ui.core.Control
        ): sap.ui.unified.Shell;
        /**
         * Adds some curtainPaneContent to the aggregation {@link #getCurtainPaneContent curtainPaneContent}.
         */
        addCurtainPaneContent(
          /**
           * The curtainPaneContent to add; if empty, nothing is inserted
           */
          oCurtainPaneContent: sap.ui.core.Control
        ): sap.ui.unified.Shell;
        /**
         * Adds some headEndItem to the aggregation {@link #getHeadEndItems headEndItems}.
         */
        addHeadEndItem(
          /**
           * The headEndItem to add; if empty, nothing is inserted
           */
          oHeadEndItem: sap.ui.unified.ShellHeadItem
        ): sap.ui.unified.Shell;
        /**
         * Adds some headItem to the aggregation {@link #getHeadItems headItems}.
         */
        addHeadItem(
          /**
           * The headItem to add; if empty, nothing is inserted
           */
          oHeadItem: sap.ui.unified.ShellHeadItem
        ): sap.ui.unified.Shell;
        /**
         * Destroys all the curtainContent in the aggregation {@link #getCurtainContent curtainContent}.
         */
        destroyCurtainContent(): sap.ui.unified.Shell;
        /**
         * Destroys all the curtainPaneContent in the aggregation {@link #getCurtainPaneContent curtainPaneContent}.
         */
        destroyCurtainPaneContent(): sap.ui.unified.Shell;
        /**
         * Destroys all the headEndItems in the aggregation {@link #getHeadEndItems headEndItems}.
         */
        destroyHeadEndItems(): sap.ui.unified.Shell;
        /**
         * Destroys the header in the aggregation named `header`, but only if a custom header is set. The default
         * header can not be destroyed.
         */
        // @ts-ignore
        destroyHeader(): sap.ui.unified.Shell;
        /**
         * Destroys all the headItems in the aggregation {@link #getHeadItems headItems}.
         */
        destroyHeadItems(): sap.ui.unified.Shell;
        /**
         * Destroys the search in the aggregation {@link #getSearch search}.
         */
        destroySearch(): sap.ui.unified.Shell;
        /**
         * @SINCE 1.22.0
         *
         * Destroys the user in the aggregation {@link #getUser user}.
         */
        destroyUser(): sap.ui.unified.Shell;
        /**
         * Creates a new subclass of class sap.ui.unified.Shell with name `sClassName` and enriches it with the
         * information contained in `oClassInfo`.
         *
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.unified.ShellLayout.extend}.
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
         * Gets content of aggregation {@link #getCurtainContent curtainContent}.
         *
         * The content to appear in the curtain area.
         */
        getCurtainContent(): sap.ui.core.Control[];
        /**
         * Gets content of aggregation {@link #getCurtainPaneContent curtainPaneContent}.
         *
         * The content to appear in the pane area of the curtain.
         */
        getCurtainPaneContent(): sap.ui.core.Control[];
        /**
         * Gets content of aggregation {@link #getHeadEndItems headEndItems}.
         *
         * The buttons shown in the end (right in left-to-right case) of the Shell header. Currently max. 3 visible
         * buttons are supported (when user is set only 1). If a custom header is set this aggregation has no effect.
         */
        getHeadEndItems(): sap.ui.unified.ShellHeadItem[];
        /**
         * Gets content of aggregation {@link #getHeadItems headItems}.
         *
         * The buttons shown in the begin (left in left-to-right case) of the Shell header. Currently max. 3 visible
         * buttons are supported. If a custom header is set this aggregation has no effect.
         */
        getHeadItems(): sap.ui.unified.ShellHeadItem[];
        /**
         * Gets current value of property {@link #getIcon icon}.
         *
         * The application icon. If a custom header is set this property has no effect.
         */
        getIcon(): sap.ui.core.URI;
        /**
         * Returns a metadata object for class sap.ui.unified.Shell.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets content of aggregation {@link #getSearch search}.
         *
         * Experimental (This aggregation might change in future!): The search control which should be displayed
         * in the shell header. If a custom header is set this aggregation has no effect.
         */
        getSearch(): sap.ui.core.Control;
        /**
         * @SINCE 1.18
         *
         * Gets current value of property {@link #getSearchVisible searchVisible}.
         *
         * If set to false, the search area (aggregation 'search') is hidden. If a custom header is set this property
         * has no effect.
         *
         * Default value is `true`.
         */
        getSearchVisible(): boolean;
        /**
         * @deprecated (since 1.16.3) - Curtain is deprecated and replaced by ShellOverlay mechanism.
         *
         * Gets current value of property {@link #getShowCurtain showCurtain}.
         *
         * Shows / Hides the curtain.
         */
        getShowCurtain(): boolean;
        /**
         * @deprecated (since 1.16.3) - Curtain is deprecated and replaced by ShellOverlay mechanism.
         *
         * Gets current value of property {@link #getShowCurtainPane showCurtainPane}.
         *
         * Shows / Hides the side pane on the curtain.
         */
        getShowCurtainPane(): boolean;
        /**
         * @SINCE 1.22.0
         *
         * Gets content of aggregation {@link #getUser user}.
         *
         * The user item which is rendered in the shell header beside the items. If a custom header is set this
         * aggregation has no effect.
         */
        getUser(): sap.ui.unified.ShellHeadUserItem;
        /**
         * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getCurtainContent curtainContent}.
         * and returns its index if found or -1 otherwise.
         */
        indexOfCurtainContent(
          /**
           * The curtainContent whose index is looked for
           */
          oCurtainContent: sap.ui.core.Control
        ): number;
        /**
         * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getCurtainPaneContent curtainPaneContent}.
         * and returns its index if found or -1 otherwise.
         */
        indexOfCurtainPaneContent(
          /**
           * The curtainPaneContent whose index is looked for
           */
          oCurtainPaneContent: sap.ui.core.Control
        ): number;
        /**
         * Checks for the provided `sap.ui.unified.ShellHeadItem` in the aggregation {@link #getHeadEndItems headEndItems}.
         * and returns its index if found or -1 otherwise.
         */
        indexOfHeadEndItem(
          /**
           * The headEndItem whose index is looked for
           */
          oHeadEndItem: sap.ui.unified.ShellHeadItem
        ): number;
        /**
         * Checks for the provided `sap.ui.unified.ShellHeadItem` in the aggregation {@link #getHeadItems headItems}.
         * and returns its index if found or -1 otherwise.
         */
        indexOfHeadItem(
          /**
           * The headItem whose index is looked for
           */
          oHeadItem: sap.ui.unified.ShellHeadItem
        ): number;
        /**
         * Inserts a curtainContent into the aggregation {@link #getCurtainContent curtainContent}.
         */
        insertCurtainContent(
          /**
           * The curtainContent to insert; if empty, nothing is inserted
           */
          oCurtainContent: sap.ui.core.Control,
          /**
           * The `0`-based index the curtainContent should be inserted at; for a negative value of `iIndex`, the curtainContent
           * is inserted at position 0; for a value greater than the current size of the aggregation, the curtainContent
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.unified.Shell;
        /**
         * Inserts a curtainPaneContent into the aggregation {@link #getCurtainPaneContent curtainPaneContent}.
         */
        insertCurtainPaneContent(
          /**
           * The curtainPaneContent to insert; if empty, nothing is inserted
           */
          oCurtainPaneContent: sap.ui.core.Control,
          /**
           * The `0`-based index the curtainPaneContent should be inserted at; for a negative value of `iIndex`, the
           * curtainPaneContent is inserted at position 0; for a value greater than the current size of the aggregation,
           * the curtainPaneContent is inserted at the last position
           */
          iIndex: number
        ): sap.ui.unified.Shell;
        /**
         * Inserts a headEndItem into the aggregation {@link #getHeadEndItems headEndItems}.
         */
        insertHeadEndItem(
          /**
           * The headEndItem to insert; if empty, nothing is inserted
           */
          oHeadEndItem: sap.ui.unified.ShellHeadItem,
          /**
           * The `0`-based index the headEndItem should be inserted at; for a negative value of `iIndex`, the headEndItem
           * is inserted at position 0; for a value greater than the current size of the aggregation, the headEndItem
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.unified.Shell;
        /**
         * Inserts a headItem into the aggregation {@link #getHeadItems headItems}.
         */
        insertHeadItem(
          /**
           * The headItem to insert; if empty, nothing is inserted
           */
          oHeadItem: sap.ui.unified.ShellHeadItem,
          /**
           * The `0`-based index the headItem should be inserted at; for a negative value of `iIndex`, the headItem
           * is inserted at position 0; for a value greater than the current size of the aggregation, the headItem
           * is inserted at the last position
           */
          iIndex: number
        ): sap.ui.unified.Shell;
        /**
         * Removes all the controls from the aggregation {@link #getCurtainContent curtainContent}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllCurtainContent(): sap.ui.core.Control[];
        /**
         * Removes all the controls from the aggregation {@link #getCurtainPaneContent curtainPaneContent}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllCurtainPaneContent(): sap.ui.core.Control[];
        /**
         * Removes all the controls from the aggregation {@link #getHeadEndItems headEndItems}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllHeadEndItems(): sap.ui.unified.ShellHeadItem[];
        /**
         * Removes all the controls from the aggregation {@link #getHeadItems headItems}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllHeadItems(): sap.ui.unified.ShellHeadItem[];
        /**
         * Removes a curtainContent from the aggregation {@link #getCurtainContent curtainContent}.
         */
        removeCurtainContent(
          /**
           * The curtainContent to remove or its index or id
           */
          vCurtainContent: number | string | sap.ui.core.Control
        ): sap.ui.core.Control;
        /**
         * Removes a curtainPaneContent from the aggregation {@link #getCurtainPaneContent curtainPaneContent}.
         */
        removeCurtainPaneContent(
          /**
           * The curtainPaneContent to remove or its index or id
           */
          vCurtainPaneContent: number | string | sap.ui.core.Control
        ): sap.ui.core.Control;
        /**
         * Removes a headEndItem from the aggregation {@link #getHeadEndItems headEndItems}.
         */
        removeHeadEndItem(
          /**
           * The headEndItem to remove or its index or id
           */
          vHeadEndItem: number | string | sap.ui.unified.ShellHeadItem
        ): sap.ui.unified.ShellHeadItem;
        /**
         * Removes a headItem from the aggregation {@link #getHeadItems headItems}.
         */
        removeHeadItem(
          /**
           * The headItem to remove or its index or id
           */
          vHeadItem: number | string | sap.ui.unified.ShellHeadItem
        ): sap.ui.unified.ShellHeadItem;
        /**
         * Setter for the aggregated `header`.
         */
        // @ts-ignore
        setHeader(
          /**
           * The Control which should be rendered within the Shell header or `null` to render the default Shell header.
           */
          oHeader: sap.ui.core.Control
        ): sap.ui.unified.Shell;
        /**
         * Sets a new value for property {@link #getIcon icon}.
         *
         * The application icon. If a custom header is set this property has no effect.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setIcon(
          /**
           * New value for property `icon`
           */
          sIcon: sap.ui.core.URI
        ): sap.ui.unified.Shell;
        /**
         * Sets the aggregated {@link #getSearch search}.
         */
        setSearch(
          /**
           * The search to set
           */
          oSearch: sap.ui.core.Control
        ): sap.ui.unified.Shell;
        /**
         * @SINCE 1.18
         *
         * Sets a new value for property {@link #getSearchVisible searchVisible}.
         *
         * If set to false, the search area (aggregation 'search') is hidden. If a custom header is set this property
         * has no effect.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setSearchVisible(
          /**
           * New value for property `searchVisible`
           */
          bSearchVisible: boolean
        ): sap.ui.unified.Shell;
        /**
         * @deprecated (since 1.16.3) - Curtain is deprecated and replaced by ShellOverlay mechanism.
         *
         * Sets a new value for property {@link #getShowCurtain showCurtain}.
         *
         * Shows / Hides the curtain.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setShowCurtain(
          /**
           * New value for property `showCurtain`
           */
          bShowCurtain: boolean
        ): sap.ui.unified.Shell;
        /**
         * @deprecated (since 1.16.3) - Curtain is deprecated and replaced by ShellOverlay mechanism.
         *
         * Sets a new value for property {@link #getShowCurtainPane showCurtainPane}.
         *
         * Shows / Hides the side pane on the curtain.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setShowCurtainPane(
          /**
           * New value for property `showCurtainPane`
           */
          bShowCurtainPane: boolean
        ): sap.ui.unified.Shell;
        /**
         * @SINCE 1.22.0
         *
         * Sets the aggregated {@link #getUser user}.
         */
        setUser(
          /**
           * The user to set
           */
          oUser: sap.ui.unified.ShellHeadUserItem
        ): sap.ui.unified.Shell;
      }
      /**
       * @SINCE 1.15.1
       * @deprecated (since 1.44.0)
       *
       * Header Action item of the Shell.
       */
      class ShellHeadItem extends sap.ui.core.Element {
        /**
         * Constructor for a new ShellHeadItem.
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
          mSettings?: ShellHeadItemOpts
        );

        /**
         * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
         */
        addAriaLabelledBy(
          /**
           * The ariaLabelledBy to add; if empty, nothing is inserted
           */
          vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control
        ): sap.ui.unified.ShellHeadItem;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.unified.ShellHeadItem`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.ShellHeadItem` itself.
         *
         * Event is fired when the user presses the item.
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
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.ShellHeadItem` itself
           */
          oListener?: object
        ): sap.ui.unified.ShellHeadItem;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.ui.unified.ShellHeadItem`.
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
        ): sap.ui.unified.ShellHeadItem;
        /**
         * Creates a new subclass of class sap.ui.unified.ShellHeadItem with name `sClassName` and enriches it with
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
        ): sap.ui.unified.ShellHeadItem;
        /**
         * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
         * ariaLabelledBy}.
         */
        getAriaLabelledBy(): sap.ui.core.ID[];
        /**
         * Gets current value of property {@link #getIcon icon}.
         *
         * The icon of the item, either defined in the sap.ui.core.IconPool or a URI to a custom image. An icon
         * must be set.
         */
        getIcon(): sap.ui.core.URI;
        /**
         * Returns a metadata object for class sap.ui.unified.ShellHeadItem.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets current value of property {@link #getSelected selected}.
         *
         * Defines the toggle state in case the item represents a toggle button (see also property `toggleEnabled`).
         *
         * Default value is `false`.
         */
        getSelected(): boolean;
        /**
         * @deprecated (since 1.18) - Markers should not be used anymore.
         *
         * Gets current value of property {@link #getShowMarker showMarker}.
         *
         * If set to true, a theme dependent marker is shown on the item.
         *
         * Default value is `false`.
         */
        getShowMarker(): boolean;
        /**
         * @SINCE 1.22.5
         *
         * Gets current value of property {@link #getShowSeparator showSeparator}.
         *
         * If set to true, a separator is displayed after the item.
         *
         * Default value is `true`.
         */
        getShowSeparator(): boolean;
        /**
         * @deprecated (since 1.18) - Dividers are not supported anymore.
         *
         * Gets current value of property {@link #getStartsSection startsSection}.
         *
         * If set to true, a divider is displayed before the item.
         *
         * Default value is `false`.
         */
        getStartsSection(): boolean;
        /**
         * @SINCE 1.34.3
         *
         * Gets current value of property {@link #getToggleEnabled toggleEnabled}.
         *
         * If set to true, the item represents a toggle button. The `selected` property can the be used to define
         * the toggle state. Otherwise the item is displayed as action button. In this case the `selected` property
         * is ignored.
         *
         * Default value is `true`.
         */
        getToggleEnabled(): boolean;
        /**
         * @SINCE 1.18
         *
         * Gets current value of property {@link #getVisible visible}.
         *
         * Invisible items are not shown on the UI.
         *
         * Default value is `true`.
         */
        getVisible(): boolean;
        /**
         * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
         */
        removeAllAriaLabelledBy(): sap.ui.core.ID[];
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
         * Sets a new value for property {@link #getIcon icon}.
         *
         * The icon of the item, either defined in the sap.ui.core.IconPool or a URI to a custom image. An icon
         * must be set.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setIcon(
          /**
           * New value for property `icon`
           */
          sIcon: sap.ui.core.URI
        ): sap.ui.unified.ShellHeadItem;
        /**
         * Sets a new value for property {@link #getSelected selected}.
         *
         * Defines the toggle state in case the item represents a toggle button (see also property `toggleEnabled`).
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
        ): sap.ui.unified.ShellHeadItem;
        /**
         * @deprecated (since 1.18) - Markers should not be used anymore.
         *
         * Sets a new value for property {@link #getShowMarker showMarker}.
         *
         * If set to true, a theme dependent marker is shown on the item.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setShowMarker(
          /**
           * New value for property `showMarker`
           */
          bShowMarker: boolean
        ): sap.ui.unified.ShellHeadItem;
        /**
         * @SINCE 1.22.5
         *
         * Sets a new value for property {@link #getShowSeparator showSeparator}.
         *
         * If set to true, a separator is displayed after the item.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setShowSeparator(
          /**
           * New value for property `showSeparator`
           */
          bShowSeparator: boolean
        ): sap.ui.unified.ShellHeadItem;
        /**
         * @deprecated (since 1.18) - Dividers are not supported anymore.
         *
         * Sets a new value for property {@link #getStartsSection startsSection}.
         *
         * If set to true, a divider is displayed before the item.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setStartsSection(
          /**
           * New value for property `startsSection`
           */
          bStartsSection: boolean
        ): sap.ui.unified.ShellHeadItem;
        /**
         * @SINCE 1.34.3
         *
         * Sets a new value for property {@link #getToggleEnabled toggleEnabled}.
         *
         * If set to true, the item represents a toggle button. The `selected` property can the be used to define
         * the toggle state. Otherwise the item is displayed as action button. In this case the `selected` property
         * is ignored.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setToggleEnabled(
          /**
           * New value for property `toggleEnabled`
           */
          bToggleEnabled: boolean
        ): sap.ui.unified.ShellHeadItem;
        /**
         * @SINCE 1.18
         *
         * Sets a new value for property {@link #getVisible visible}.
         *
         * Invisible items are not shown on the UI.
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
        ): sap.ui.unified.ShellHeadItem;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.unified.ShellHeadItem`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.ShellHeadItem` itself.
         *
         * Event is fired when the user presses the item.
         */
        attachPress(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.ShellHeadItem` itself
           */
          oListener?: object
        ): sap.ui.unified.ShellHeadItem;
      }
      /**
       * @SINCE 1.22.0
       * @deprecated (since 1.44.0)
       *
       * User Header Action Item of the Shell.
       */
      class ShellHeadUserItem extends sap.ui.core.Element {
        /**
         * Constructor for a new ShellHeadUserItem.
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
          mSettings?: ShellHeadUserItemOpts
        );

        /**
         * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
         */
        addAriaLabelledBy(
          /**
           * The ariaLabelledBy to add; if empty, nothing is inserted
           */
          vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control
        ): sap.ui.unified.ShellHeadUserItem;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.unified.ShellHeadUserItem`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.ShellHeadUserItem` itself.
         *
         * Event is fired when the user presses the button.
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
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.ShellHeadUserItem` itself
           */
          oListener?: object
        ): sap.ui.unified.ShellHeadUserItem;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.ui.unified.ShellHeadUserItem`.
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
        ): sap.ui.unified.ShellHeadUserItem;
        /**
         * Creates a new subclass of class sap.ui.unified.ShellHeadUserItem with name `sClassName` and enriches
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
         * Fires event {@link #event:press press} to attached listeners.
         */
        firePress(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ui.unified.ShellHeadUserItem;
        /**
         * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
         * ariaLabelledBy}.
         */
        getAriaLabelledBy(): sap.ui.core.ID[];
        /**
         * Gets current value of property {@link #getImage image}.
         *
         * An image of the user, normally a URI to an image but also an icon from the sap.ui.core.IconPool is possible.
         */
        getImage(): sap.ui.core.URI;
        /**
         * Returns a metadata object for class sap.ui.unified.ShellHeadUserItem.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * @SINCE 1.27.0
         *
         * Gets current value of property {@link #getShowPopupIndicator showPopupIndicator}.
         *
         * The user item is intended to be used for user settings. Normally these settings are done via a Menu or
         * Dialog. If this property is set to true an indicator for such a popup mechanismn is shown in the item.
         *
         * Default value is `true`.
         */
        getShowPopupIndicator(): boolean;
        /**
         * Gets current value of property {@link #getUsername username}.
         *
         * The name of the user.
         *
         * Default value is `empty string`.
         */
        getUsername(): string;
        /**
         * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
         */
        removeAllAriaLabelledBy(): sap.ui.core.ID[];
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
         * Sets a new value for property {@link #getImage image}.
         *
         * An image of the user, normally a URI to an image but also an icon from the sap.ui.core.IconPool is possible.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setImage(
          /**
           * New value for property `image`
           */
          sImage: sap.ui.core.URI
        ): sap.ui.unified.ShellHeadUserItem;
        /**
         * @SINCE 1.27.0
         *
         * Sets a new value for property {@link #getShowPopupIndicator showPopupIndicator}.
         *
         * The user item is intended to be used for user settings. Normally these settings are done via a Menu or
         * Dialog. If this property is set to true an indicator for such a popup mechanismn is shown in the item.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setShowPopupIndicator(
          /**
           * New value for property `showPopupIndicator`
           */
          bShowPopupIndicator: boolean
        ): sap.ui.unified.ShellHeadUserItem;
        /**
         * Sets a new value for property {@link #getUsername username}.
         *
         * The name of the user.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `empty string`.
         */
        setUsername(
          /**
           * New value for property `username`
           */
          sUsername: string
        ): sap.ui.unified.ShellHeadUserItem;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.unified.ShellHeadUserItem`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.ShellHeadUserItem` itself.
         *
         * Event is fired when the user presses the button.
         */
        attachPress(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.ShellHeadUserItem` itself
           */
          oListener?: object
        ): sap.ui.unified.ShellHeadUserItem;
      }
      /**
       * @SINCE 1.25.0
       * @deprecated (since 1.44.0)
       *
       * The shell layout is the base for the shell control which is meant as root control (full-screen) of an
       * application. It was build as root control of the Fiori Launchpad application and provides the basic capabilities
       * for this purpose. Do not use this control within applications which run inside the Fiori Lauchpad and
       * do not use it for other scenarios than the root control usecase.
       */
      class ShellLayout extends sap.ui.core.Control {
        /**
         * Constructor for a new ShellLayout.
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
          mSettings?: ShellLayoutOpts
        );

        /**
         * Adds some content to the aggregation {@link #getContent content}.
         */
        addContent(
          /**
           * The content to add; if empty, nothing is inserted
           */
          oContent: sap.ui.core.Control
        ): sap.ui.unified.ShellLayout;
        /**
         * Adds some paneContent to the aggregation {@link #getPaneContent paneContent}.
         */
        addPaneContent(
          /**
           * The paneContent to add; if empty, nothing is inserted
           */
          oPaneContent: sap.ui.core.Control
        ): sap.ui.unified.ShellLayout;
        /**
         * Destroys all the content in the aggregation {@link #getContent content}.
         */
        destroyContent(): sap.ui.unified.ShellLayout;
        /**
         * Destroys the header in the aggregation {@link #getHeader header}.
         */
        destroyHeader(): sap.ui.unified.ShellLayout;
        /**
         * Destroys all the paneContent in the aggregation {@link #getPaneContent paneContent}.
         */
        destroyPaneContent(): sap.ui.unified.ShellLayout;
        /**
         * Creates a new subclass of class sap.ui.unified.ShellLayout with name `sClassName` and enriches it with
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
         * Gets content of aggregation {@link #getContent content}.
         *
         * The content to appear in the main canvas.
         */
        getContent(): sap.ui.core.Control[];
        /**
         * Gets content of aggregation {@link #getHeader header}.
         *
         * The control to appear in the header area.
         */
        getHeader(): sap.ui.core.Control;
        /**
         * Gets current value of property {@link #getHeaderHiding headerHiding}.
         *
         * Whether the header can be hidden (manually or automatically). This feature is only available when touch
         * events are supported.
         *
         * Default value is `false`.
         */
        getHeaderHiding(): boolean;
        /**
         * Gets current value of property {@link #getHeaderVisible headerVisible}.
         *
         * If set to false, no header (and no items, search, ...) is shown.
         *
         * Default value is `true`.
         */
        getHeaderVisible(): boolean;
        /**
         * Returns a metadata object for class sap.ui.unified.ShellLayout.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets content of aggregation {@link #getPaneContent paneContent}.
         *
         * The content to appear in the pane area.
         */
        getPaneContent(): sap.ui.core.Control[];
        /**
         * Gets current value of property {@link #getShowPane showPane}.
         *
         * Shows / Hides the side pane.
         *
         * Default value is `false`.
         */
        getShowPane(): boolean;
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
        ): sap.ui.unified.ShellLayout;
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
        ): sap.ui.unified.ShellLayout;
        /**
         * Removes all the controls from the aggregation {@link #getContent content}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllContent(): sap.ui.core.Control[];
        /**
         * Removes all the controls from the aggregation {@link #getPaneContent paneContent}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllPaneContent(): sap.ui.core.Control[];
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
         * Removes a paneContent from the aggregation {@link #getPaneContent paneContent}.
         */
        removePaneContent(
          /**
           * The paneContent to remove or its index or id
           */
          vPaneContent: number | string | sap.ui.core.Control
        ): sap.ui.core.Control;
        /**
         * Sets the aggregated {@link #getHeader header}.
         */
        setHeader(
          /**
           * The header to set
           */
          oHeader: sap.ui.core.Control
        ): sap.ui.unified.ShellLayout;
        /**
         * Sets a new value for property {@link #getHeaderHiding headerHiding}.
         *
         * Whether the header can be hidden (manually or automatically). This feature is only available when touch
         * events are supported.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setHeaderHiding(
          /**
           * New value for property `headerHiding`
           */
          bHeaderHiding: boolean
        ): sap.ui.unified.ShellLayout;
        /**
         * Sets a new value for property {@link #getHeaderVisible headerVisible}.
         *
         * If set to false, no header (and no items, search, ...) is shown.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `true`.
         */
        setHeaderVisible(
          /**
           * New value for property `headerVisible`
           */
          bHeaderVisible: boolean
        ): sap.ui.unified.ShellLayout;
        /**
         * Sets a new value for property {@link #getShowPane showPane}.
         *
         * Shows / Hides the side pane.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `false`.
         */
        setShowPane(
          /**
           * New value for property `showPane`
           */
          bShowPane: boolean
        ): sap.ui.unified.ShellLayout;
      }
      /**
       * @SINCE 1.16.3
       * @deprecated (since 1.44.0)
       *
       * ShellOverlay to be opened in front of an sap.ui.unified.Shell
       */
      class ShellOverlay extends sap.ui.core.Control {
        /**
         * Constructor for a new ShellOverlay.
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
          mSettings?: ShellOverlayOpts
        );

        /**
         * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
         */
        addAriaLabelledBy(
          /**
           * The ariaLabelledBy to add; if empty, nothing is inserted
           */
          vAriaLabelledBy: sap.ui.core.ID | sap.ui.core.Control
        ): sap.ui.unified.ShellOverlay;
        /**
         * Adds some content to the aggregation {@link #getContent content}.
         */
        addContent(
          /**
           * The content to add; if empty, nothing is inserted
           */
          oContent: sap.ui.core.Control
        ): sap.ui.unified.ShellOverlay;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:closed closed} event of this `sap.ui.unified.ShellOverlay`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.ShellOverlay` itself.
         *
         * Fired when the overlay was closed.
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
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.ShellOverlay` itself
           */
          oListener?: object
        ): sap.ui.unified.ShellOverlay;
        /**
         * Closes the ShellOverlay.
         */
        close(): void;
        /**
         * Destroys all the content in the aggregation {@link #getContent content}.
         */
        destroyContent(): sap.ui.unified.ShellOverlay;
        /**
         * Destroys the search in the aggregation {@link #getSearch search}.
         */
        destroySearch(): sap.ui.unified.ShellOverlay;
        /**
         * Detaches event handler `fnFunction` from the {@link #event:closed closed} event of this `sap.ui.unified.ShellOverlay`.
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
        ): sap.ui.unified.ShellOverlay;
        /**
         * Creates a new subclass of class sap.ui.unified.ShellOverlay with name `sClassName` and enriches it with
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
         * Fires event {@link #event:closed closed} to attached listeners.
         */
        fireClosed(
          /**
           * Parameters to pass along with the event
           */
          mParameters?: object
        ): sap.ui.unified.ShellOverlay;
        /**
         * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
         * ariaLabelledBy}.
         */
        getAriaLabelledBy(): sap.ui.core.ID[];
        /**
         * Gets content of aggregation {@link #getContent content}.
         *
         * The content to appear in the overlay.
         */
        getContent(): sap.ui.core.Control[];
        /**
         * Returns a metadata object for class sap.ui.unified.ShellOverlay.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * Gets content of aggregation {@link #getSearch search}.
         *
         * Experimental (This aggregation might change in future!): The search control which should be displayed
         * in the overlay header.
         */
        getSearch(): sap.ui.core.Control;
        /**
         * ID of the element which is the current target of the association {@link #getShell shell}, or `null`.
         */
        getShell(): sap.ui.core.ID;
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
        ): sap.ui.unified.ShellOverlay;
        /**
         * Opens the ShellOverlay.
         */
        open(): void;
        /**
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
         * Sets the aggregated {@link #getSearch search}.
         */
        setSearch(
          /**
           * The search to set
           */
          oSearch: sap.ui.core.Control
        ): sap.ui.unified.ShellOverlay;
        /**
         * Sets the associated {@link #getShell shell}.
         */
        setShell(
          /**
           * ID of an element which becomes the new target of this shell association; alternatively, an element instance
           * may be given
           */
          oShell: sap.ui.core.ID | sap.ui.unified.ShellLayout
        ): sap.ui.unified.ShellOverlay;
        /**
         * Attaches event handler `fnFunction` to the {@link #event:closed closed} event of this `sap.ui.unified.ShellOverlay`.
         *
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
         * otherwise it will be bound to this `sap.ui.unified.ShellOverlay` itself.
         *
         * Fired when the overlay was closed.
         */
        attachClosed(
          /**
           * The function to be called when the event occurs
           */
          fnFunction: Function,
          /**
           * Context object to call the event handler with. Defaults to this `sap.ui.unified.ShellOverlay` itself
           */
          oListener?: object
        ): sap.ui.unified.ShellOverlay;
      }
      /**
       * @SINCE 1.15.0
       * @deprecated (since 1.44.0)
       * @EXPERIMENTAL (since 1.15.0)
       *
       * Provides a main content and a secondary content area
       */
      class SplitContainer extends sap.ui.core.Control {
        /**
         * Constructor for a new SplitContainer.
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
          mSettings?: SplitContainerOpts
        );

        /**
         * Adds some content to the aggregation {@link #getContent content}.
         */
        addContent(
          /**
           * The content to add; if empty, nothing is inserted
           */
          oContent: sap.ui.core.Control
        ): sap.ui.unified.SplitContainer;
        /**
         * Adds some secondaryContent to the aggregation {@link #getSecondaryContent secondaryContent}.
         */
        addSecondaryContent(
          /**
           * The secondaryContent to add; if empty, nothing is inserted
           */
          oSecondaryContent: sap.ui.core.Control
        ): sap.ui.unified.SplitContainer;
        /**
         * Destroys all the content in the aggregation {@link #getContent content}.
         */
        destroyContent(): sap.ui.unified.SplitContainer;
        /**
         * Destroys all the secondaryContent in the aggregation {@link #getSecondaryContent secondaryContent}.
         */
        destroySecondaryContent(): sap.ui.unified.SplitContainer;
        /**
         * Creates a new subclass of class sap.ui.unified.SplitContainer with name `sClassName` and enriches it
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
         * Gets content of aggregation {@link #getContent content}.
         *
         * The content to appear in the main area.
         */
        getContent(): sap.ui.core.Control[];
        /**
         * Returns a metadata object for class sap.ui.unified.SplitContainer.
         */
        // @ts-ignore
        static getMetadata(): sap.ui.base.Metadata;
        /**
         * @SINCE 1.22.0
         *
         * Gets current value of property {@link #getOrientation orientation}.
         *
         * Whether to show the secondary content on the left ("Horizontal", default) or on the top ("Vertical").
         *
         * Default value is `Horizontal`.
         */
        getOrientation(): sap.ui.core.Orientation;
        /**
         * Gets content of aggregation {@link #getSecondaryContent secondaryContent}.
         *
         * The content to appear in the secondary area.
         */
        getSecondaryContent(): sap.ui.core.Control[];
        /**
         * Gets current value of property {@link #getSecondaryContentSize secondaryContentSize}.
         *
         * The width if the secondary content. The height is always 100%.
         *
         * Default value is `250px`.
         */
        getSecondaryContentSize(): sap.ui.core.CSSSize;
        /**
         * @deprecated (since 1.22) - Only available for backwards compatibility.
         *
         * Gets current value of property {@link #getSecondaryContentWidth secondaryContentWidth}.
         *
         * Do not use. Use secondaryContentSize instead.
         *
         * Default value is `250px`.
         */
        getSecondaryContentWidth(): sap.ui.core.CSSSize;
        /**
         * Gets current value of property {@link #getShowSecondaryContent showSecondaryContent}.
         *
         * Shows / Hides the secondary area.
         */
        getShowSecondaryContent(): boolean;
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
         * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getSecondaryContent secondaryContent}.
         * and returns its index if found or -1 otherwise.
         */
        indexOfSecondaryContent(
          /**
           * The secondaryContent whose index is looked for
           */
          oSecondaryContent: sap.ui.core.Control
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
        ): sap.ui.unified.SplitContainer;
        /**
         * Inserts a secondaryContent into the aggregation {@link #getSecondaryContent secondaryContent}.
         */
        insertSecondaryContent(
          /**
           * The secondaryContent to insert; if empty, nothing is inserted
           */
          oSecondaryContent: sap.ui.core.Control,
          /**
           * The `0`-based index the secondaryContent should be inserted at; for a negative value of `iIndex`, the
           * secondaryContent is inserted at position 0; for a value greater than the current size of the aggregation,
           * the secondaryContent is inserted at the last position
           */
          iIndex: number
        ): sap.ui.unified.SplitContainer;
        /**
         * Removes all the controls from the aggregation {@link #getContent content}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllContent(): sap.ui.core.Control[];
        /**
         * Removes all the controls from the aggregation {@link #getSecondaryContent secondaryContent}.
         *
         * Additionally, it unregisters them from the hosting UIArea.
         */
        removeAllSecondaryContent(): sap.ui.core.Control[];
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
         * Removes a secondaryContent from the aggregation {@link #getSecondaryContent secondaryContent}.
         */
        removeSecondaryContent(
          /**
           * The secondaryContent to remove or its index or id
           */
          vSecondaryContent: number | string | sap.ui.core.Control
        ): sap.ui.core.Control;
        /**
         * @SINCE 1.22.0
         *
         * Sets a new value for property {@link #getOrientation orientation}.
         *
         * Whether to show the secondary content on the left ("Horizontal", default) or on the top ("Vertical").
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
        ): sap.ui.unified.SplitContainer;
        /**
         * Sets a new value for property {@link #getSecondaryContentSize secondaryContentSize}.
         *
         * The width if the secondary content. The height is always 100%.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `250px`.
         */
        setSecondaryContentSize(
          /**
           * New value for property `secondaryContentSize`
           */
          sSecondaryContentSize: sap.ui.core.CSSSize
        ): sap.ui.unified.SplitContainer;
        /**
         * @deprecated (since 1.22) - Only available for backwards compatibility.
         *
         * Sets a new value for property {@link #getSecondaryContentWidth secondaryContentWidth}.
         *
         * Do not use. Use secondaryContentSize instead.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         *
         * Default value is `250px`.
         */
        setSecondaryContentWidth(
          /**
           * New value for property `secondaryContentWidth`
           */
          sSecondaryContentWidth: sap.ui.core.CSSSize
        ): sap.ui.unified.SplitContainer;
        /**
         * Sets a new value for property {@link #getShowSecondaryContent showSecondaryContent}.
         *
         * Shows / Hides the secondary area.
         *
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         */
        setShowSecondaryContent(
          /**
           * New value for property `showSecondaryContent`
           */
          bShowSecondaryContent: boolean
        ): sap.ui.unified.SplitContainer;
      }
      /**
       * @SINCE 1.40.0
       *
       * Visualization types for {@link sap.ui.unified.CalendarAppointment}.
       */
      enum CalendarAppointmentVisualization {
        /**
         * Visualization with fill color depending on the used theme.
         */
        Filled,
        /**
         * Standard visualization with no fill color.
         */
        Standard
      }
      /**
       * @SINCE 1.24.0
       *
       * Types of a calendar day used for visualization.
       */
      enum CalendarDayType {
        /**
         * No special type is used.
         */
        None,
        /**
         * Non-working dates.
         */
        NonWorking,
        /**
         * The semantic meaning must be defined by the app. It can be displayed in a legend.
         */
        Type01,
        /**
         * The semantic meaning must be defined by the app. It can be displayed in a legend.
         */
        Type02,
        /**
         * The semantic meaning must be defined by the app. It can be displayed in a legend.
         */
        Type03,
        /**
         * The semantic meaning must be defined by the app. It can be displayed in a legend.
         */
        Type04,
        /**
         * The semantic meaning must be defined by the app. It can be displayed in a legend.
         */
        Type05,
        /**
         * The semantic meaning must be defined by the app. It can be displayed in a legend.
         */
        Type06,
        /**
         * The semantic meaning must be defined by the app. It can be displayed in a legend.
         */
        Type07,
        /**
         * The semantic meaning must be defined by the app. It can be displayed in a legend.
         */
        Type08,
        /**
         * The semantic meaning must be defined by the app. It can be displayed in a legend.
         */
        Type09,
        /**
         * The semantic meaning must be defined by the app. It can be displayed in a legend.
         */
        Type10,
        /**
         * @SINCE 1.50
         *
         * The semantic meaning must be defined by the app. It can be displayed in a legend.
         */
        Type11,
        /**
         * @SINCE 1.50
         *
         * The semantic meaning must be defined by the app. It can be displayed in a legend.
         */
        Type12,
        /**
         * @SINCE 1.50
         *
         * The semantic meaning must be defined by the app. It can be displayed in a legend.
         */
        Type13,
        /**
         * @SINCE 1.50
         *
         * The semantic meaning must be defined by the app. It can be displayed in a legend.
         */
        Type14,
        /**
         * @SINCE 1.50
         *
         * The semantic meaning must be defined by the app. It can be displayed in a legend.
         */
        Type15,
        /**
         * @SINCE 1.50
         *
         * The semantic meaning must be defined by the app. It can be displayed in a legend.
         */
        Type16,
        /**
         * @SINCE 1.50
         *
         * The semantic meaning must be defined by the app. It can be displayed in a legend.
         */
        Type17,
        /**
         * @SINCE 1.50
         *
         * The semantic meaning must be defined by the app. It can be displayed in a legend.
         */
        Type18,
        /**
         * @SINCE 1.50
         *
         * The semantic meaning must be defined by the app. It can be displayed in a legend.
         */
        Type19,
        /**
         * @SINCE 1.50
         *
         * The semantic meaning must be defined by the app. It can be displayed in a legend.
         */
        Type20
      }
      /**
       * @SINCE 1.34.0
       *
       * Interval types in a `CalendarRow`.
       */
      enum CalendarIntervalType {
        /**
         * Intervals have the size of one day.
         */
        Day,
        /**
         * Intervals have the size of one hour.
         */
        Hour,
        /**
         * Intervals have the size of one month.
         */
        Month
      }
      /**
       * @SINCE 1.58.0
       *
       * Types of a color picker display mode
       */
      enum ColorPickerDisplayMode {
        /**
         * Default display mode.
         */
        Default,
        /**
         * Large display mode.
         */
        Large,
        /**
         * Simplified display mode.
         */
        Simplified
      }
      /**
       * different styles for a ColorPicker.
       */
      enum ColorPickerMode {
        /**
         * Color picker works with HSL values.
         */
        HSL,
        /**
         * Color picker works with HSV values.
         */
        HSV
      }
      /**
       * @SINCE 1.16.0
       * @EXPERIMENTAL (since 1.16.0)
       *
       * Predefined animations for the ContentSwitcher
       */
      enum ContentSwitcherAnimation {
        /**
         * Content is faded (opacity change).
         */
        Fade,
        /**
         * No animation. Content is switched instantly.
         */
        None,
        /**
         * The new content rotates in. (Just like one of those old newspaper-animations.)
         */
        Rotate,
        /**
         * The new content slides in from the left while the old content slides out to the left at the same time.
         */
        SlideOver,
        /**
         * The new slides in from the left (to the right).
         */
        SlideRight,
        /**
         * The new content is "zoomed in" from the center and grows to fill the full content area.
         */
        ZoomIn,
        /**
         * The old content is "zoomed out", i.e. shrinks to a point at the center of the content area.
         */
        ZoomOut
      }
      /**
       * @SINCE 1.48.0
       *
       * Types of display mode for overlapping appointments.
       */
      enum GroupAppointmentsMode {
        /**
         * Overlapping appointments are displayed as a collapsed group appointment.
         */
        Collapsed,
        /**
         * Overlapping appointments are displayed individually (expanded from a group).
         */
        Expanded
      }
      /**
       * @SINCE 1.50
       *
       * Standard day types visualized in a {@link sap.m.PlanningCalendarLegend}, which correspond to days in
       * a {@link sap.ui.unified.Calendar}.
       */
      enum StandardCalendarLegendItem {
        /**
         * Type used for visualization of the non-working days.
         */
        NonWorkingDay,
        /**
         * Type used for visualization of the currently selected day.
         */
        Selected,
        /**
         * Type used for visualization of the current date.
         */
        Today,
        /**
         * Type used for visualization of the regular work days.
         */
        WorkingDay
      }
    }
  }

  interface IUI5DefineDependencyNames {
    "sap/ui/unified/calendar/DatesRow": undefined;

    "sap/ui/unified/calendar/Header": undefined;

    "sap/ui/unified/calendar/Month": undefined;

    "sap/ui/unified/calendar/MonthPicker": undefined;

    "sap/ui/unified/calendar/MonthsRow": undefined;

    "sap/ui/unified/calendar/TimesRow": undefined;

    "sap/ui/unified/calendar/YearPicker": undefined;

    "sap/ui/unified/Calendar": undefined;

    "sap/ui/unified/CalendarAppointment": undefined;

    "sap/ui/unified/CalendarDateInterval": undefined;

    "sap/ui/unified/CalendarLegend": undefined;

    "sap/ui/unified/CalendarLegendItem": undefined;

    "sap/ui/unified/CalendarMonthInterval": undefined;

    "sap/ui/unified/CalendarRow": undefined;

    "sap/ui/unified/CalendarTimeInterval": undefined;

    "sap/ui/unified/ColorPicker": undefined;

    "sap/ui/unified/ColorPickerPopover": undefined;

    "sap/ui/unified/ContentSwitcher": undefined;

    "sap/ui/unified/Currency": undefined;

    "sap/ui/unified/DateRange": undefined;

    "sap/ui/unified/DateTypeRange": undefined;

    "sap/ui/unified/FileUploader": undefined;

    "sap/ui/unified/FileUploaderParameter": undefined;

    "sap/ui/unified/FileUploaderXHRSettings": undefined;

    "sap/ui/unified/Menu": undefined;

    "sap/ui/unified/MenuItem": undefined;

    "sap/ui/unified/MenuItemBase": undefined;

    "sap/ui/unified/MenuTextFieldItem": undefined;

    "sap/ui/unified/Shell": undefined;

    "sap/ui/unified/ShellHeadItem": undefined;

    "sap/ui/unified/ShellHeadUserItem": undefined;

    "sap/ui/unified/ShellLayout": undefined;

    "sap/ui/unified/ShellOverlay": undefined;

    "sap/ui/unified/SplitContainer": undefined;

    "sap/ui/unified/IProcessableBlobs": undefined;
  }
}
