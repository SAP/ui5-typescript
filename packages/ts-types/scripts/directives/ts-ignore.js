const KNOWN_ISSUES = {
  TEMP_MISSING_LIBRARIES: "Temporary ignore until other libraries are compiled",
  GENERAL_STATIC_INHERITANCE_MISMATCH: "static inheritance overwrite mistmatch",
  STATIC_GET_META_DATA: 'static "getMetadata" inheritance issue'
};

/**
 * For these Fully Qualified (currently only **classes**) Names a
 * "// @ts-ignore" comment would be generated.
 *
 * This directive is used to brute force "solve" hard problems.
 * Only use this as a last resort...
 */
const fqnToIgnore = {
  // "sap.f.GridList": KNOWN_ISSUES.TEMP_MISSING_LIBRARIES,

  // STATIC getMetadata overwrite mismatch.
  "sap.ui.core.util.ExportType": KNOWN_ISSUES.STATIC_GET_META_DATA,
  "sap.ui.core.util.ExportColumn": KNOWN_ISSUES.STATIC_GET_META_DATA,
  "sap.ui.core.util.ExportRow": KNOWN_ISSUES.STATIC_GET_META_DATA,
  "sap.ui.core.util.MockServer": KNOWN_ISSUES.STATIC_GET_META_DATA,
  "sap.ui.core.Popup": KNOWN_ISSUES.STATIC_GET_META_DATA,
  "sap.ui.core.UIArea": KNOWN_ISSUES.STATIC_GET_META_DATA,
  "sap.ui.core.Fragment": KNOWN_ISSUES.STATIC_GET_META_DATA,
  "sap.ui.core.hyphenation.Hyphenation": KNOWN_ISSUES.STATIC_GET_META_DATA,
  "sap.ui.app.Application": KNOWN_ISSUES.STATIC_GET_META_DATA,
  "sap.ui.test.actions.Action": KNOWN_ISSUES.STATIC_GET_META_DATA,
  "sap.ui.test.matchers.Matcher": KNOWN_ISSUES.STATIC_GET_META_DATA,
  "sap.ui.core.tmpl.Template": KNOWN_ISSUES.STATIC_GET_META_DATA,
  "sap.ui.layout.cssgrid.GridSettings": KNOWN_ISSUES.STATIC_GET_META_DATA,
  "sap.ui.layout.cssgrid.GridLayoutBase": KNOWN_ISSUES.STATIC_GET_META_DATA,
  "sap.ui.table.TablePersoController": KNOWN_ISSUES.STATIC_GET_META_DATA,
  "sap.m.TablePersoController": KNOWN_ISSUES.STATIC_GET_META_DATA,
  "sap.m.TablePersoDialog": KNOWN_ISSUES.STATIC_GET_META_DATA,
  "sap.m.TablePersoProvider": KNOWN_ISSUES.STATIC_GET_META_DATA,
  "sap.m.CarouselLayout": KNOWN_ISSUES.STATIC_GET_META_DATA,
  "sap.ui.rta.Client": KNOWN_ISSUES.STATIC_GET_META_DATA,
  "sap.ui.core.UIComponent": KNOWN_ISSUES.STATIC_GET_META_DATA,
  "sap.ui.table.plugins.SelectionPlugin": KNOWN_ISSUES.STATIC_GET_META_DATA,
  "sap.f.GridContainerSettings": KNOWN_ISSUES.STATIC_GET_META_DATA,

  // General Static Inheritance issues
  "sap.ui.core.mvc.XMLView": KNOWN_ISSUES.GENERAL_STATIC_INHERITANCE_MISMATCH,

  // Interface implementation related issues
  "sap.f.GridList.getGridLayoutConfiguration":
    "error TS2416: Property 'getGridLayoutConfiguration' in type 'GridList' is not assignable to the same property in base type 'IGridConfigurable'. " +
    "  Type 'undefined' is not assignable to type '() => GridLayoutBase'",
  "sap.ui.layout.cssgrid.CSSGrid":
    "error TS2420: Class 'CSSGrid' incorrectly implements interface 'IGridConfigurable'." +
    "Type 'CSSGrid' is missing the following properties from type 'IGridConfigurable': getGridDomRefs, getGridLayoutConfiguration",
  "sap.f.GridList":
    "error TS2420: Class 'GridList' incorrectly implements interface 'IGridConfigurable'." +
    "Type 'GridList' is missing the following properties from type 'IGridConfigurable': getGridDomRefs, getGridLayoutConfiguration",
  "sap.ui.base.Event":
    "error TS2420: Class 'Event' incorrectly implements interface 'Poolable'.",
  "sap.m.ResponsiveScale":
    "error TS2420: Class 'ResponsiveScale' incorrectly implements interface 'IScale'." +
    "  Type 'ResponsiveScale' is missing the following properties from type 'IScale': calcNumberOfTickmarks, getLabel, handleResize"
};

module.exports = {
  fqnToIgnore
};
