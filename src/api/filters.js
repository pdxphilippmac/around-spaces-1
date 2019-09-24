export const filters = [
  {
    name: "distance",
    options: ["< 2min", "< 5min", "< 10min"]
  },
  {
    name: "category",
    options: ["japanese", "sushi", "wraps", "bowls", "burritos", "salad"]
  },
  {
    name: "rating",
    options: ["*****", "****", "***", "**", "*"]
  }
];

export function getCategoryOptions() {
  return filters.find(filter => filter.name === "category").options;
}
