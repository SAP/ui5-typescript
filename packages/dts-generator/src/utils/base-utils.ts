export function splitName(name: string, separator = ".") {
  const p = name.lastIndexOf(separator);
  return p < 0 ? ["", name] : [name.slice(0, p), name.slice(p + 1)];
}
