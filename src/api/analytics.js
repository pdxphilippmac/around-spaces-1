export default function postAnalytics(restaurant) {
  return fetch("http://localhost:3333/analytics", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(restaurant)
  });
}

export const analytics = [
  {
    id: "",
    timestamp: Date.now()
  }
];
