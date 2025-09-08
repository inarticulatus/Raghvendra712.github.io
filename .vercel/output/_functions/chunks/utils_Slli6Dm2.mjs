function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(date);
}
function createSlug(title) {
  return title.trim().replace(/[^A-Za-z0-9 ]/g, "").replace(/\s+/g, "-").replace(/^-+|-+$/g, "").toLowerCase();
}

export { createSlug as c, formatDate as f };
