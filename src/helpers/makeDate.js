export const makeDate = (dateObj) => {
  const zeeDate = new Date(dateObj.seconds * 1000).toLocaleDateString(
    "en-us",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  )
  return zeeDate
}