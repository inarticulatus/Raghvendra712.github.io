export function formatDate(date: Date){
    return new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(date)
}

export function createSlug(title: string) {
  return (
    title
      // remove leading & trailing whitespace
      .trim()
      // remove special characters
      .replace(/[^A-Za-z0-9 ]/g, '')
      // replace spaces
      .replace(/\s+/g, '-')
      // remove leading & trailing separtors
      .replace(/^-+|-+$/g, '')
      // output lowercase
      .toLowerCase()
  )
}