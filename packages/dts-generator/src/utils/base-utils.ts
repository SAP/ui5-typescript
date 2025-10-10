export function splitName(name: string, separator = ".") {
  const p = name.lastIndexOf(separator);
  return p < 0 ? ["", name] : [name.slice(0, p), name.slice(p + 1)];
}

/*
 * Calculates a derived name from an entity name by first calculating the basename
 * of the entity, then applying the given `createDerivedBasename` transformation and
 * then building a qualified name again from it.
 *
 * The returned object contains the fully qualified name `name`, the derived `basename`
 * and the assumed `exportName` under which the derived entity is exported from the
 * containing module.
 *
 * Examples (based on the $<Entity>Settings transformation):
 * (1) sap.m.Button -->
 *       name: "sap.m.$ButtonSettings"
 *       basename: "$ButtonSettings"
 *       exportName: "$ButtonSettings"
 *
 * (2) module:my/lib//NotificationListGroupItem -->
 *       name: "module:my/lib/NotificationListGroupItem.$NotificationListGroupItemSettings"
 *       basename: "$NotificationListGroupItemSettings"
 *       exportName: "$NotificationListGroupItemSettings"
 *
 * (3) module:my/lib/SegmentedButton.Item
 *       name: "module:my/lib/SegmentedButton.$ItemSettings"
 *       basename: "$ItemSettings"
 *       exportName: "$ItemSettings"
 *
 * (4) module:my/lib/SegmentedButton.Item.SubItem
 *       name: "module:my/lib/SegmentedButton.Item.$SubItemSettings"
 *       basename: "$SubItemSettings"
 *       exportName: "Item.$SubItemSettings"
 */
export function calculateDerivedNames(
  fqn: string,
  createDerivedBasename: (basename: string) => string = (basename) => basename,
): {
  name: string;
  basename: string;
  exportName: string;
} {
  const makeNameAndBasename = (fqn: string) => {
    const [prefix, basename] = splitName(fqn);
    const derivedBasename = createDerivedBasename(basename);
    return [`${prefix}${prefix ? "." : ""}${derivedBasename}`, derivedBasename];
  };

  if (fqn.startsWith("module:")) {
    const [pkgname, moduleAndExport] = splitName(
      fqn.slice("module:".length),
      "/",
    );
    const pos = moduleAndExport.indexOf(".");
    if (pos < 0) {
      // case (2), default export
      const [, settingsName] = makeNameAndBasename(moduleAndExport);
      return {
        name: `${fqn}.${settingsName}`,
        basename: settingsName,
        exportName: settingsName,
      };
    }
    // case (3) and (4), named export
    const moduleBaseName = moduleAndExport.slice(0, pos);
    const exportName = moduleAndExport.slice(pos + 1);
    const [settingsNameWithPrefix, settingsName] =
      makeNameAndBasename(exportName);
    return {
      name: `module:${pkgname}${pkgname ? "/" : ""}${moduleBaseName}.${settingsNameWithPrefix}`,
      basename: settingsName,
      exportName: settingsNameWithPrefix,
    };
  }
  // case (1), global name
  const [fqSettingsName, settingsName] = makeNameAndBasename(fqn);
  return {
    name: fqSettingsName,
    basename: settingsName,
    exportName: settingsName,
  };
}
