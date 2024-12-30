const compactNunmberFormatter = new Intl.NumberFormat("en-US", {
  notation: "compact",
});

export function formatCompactNumber(number: number) {
  return compactNunmberFormatter.format(number);
}
