sap.ui.define(
  // try autocomplete here
  ["sap/gantt/GanttChart", "sap/ui/layout/cssgrid/GridItemLayoutData"],
  /**
   * @param {typeof sap.gantt.GanttChartContainer} GanttChart
   * @param {typeof sap.ui.layout.cssgrid.GridItemLayoutData} GridItemLayoutData
   */
  function(GanttChart, GridItemLayoutData) {
    var x = new GanttChart("bamba", {});
    x.attachHo;

    var y = new GridItemLayoutData("bisli", { gridColumn: 6 });
    y.getGridColumn;
  }
);
