import { formatDistance, parseISO } from "date-fns"
import { differenceInDays } from "date-fns/esm"

// We want to make this function work for both Date objects and strings (which come from Supabase)
export const subtractDates = (dateStr1, dateStr2) =>
  differenceInDays(parseISO(String(dateStr1)), parseISO(String(dateStr2)))

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  })
    .replace("about ", "")
    .replace("in", "In")

export const getToday = function (options = {}) {
  const today = new Date()

  if (options?.end) {
    // Set to the last second of the day
    today.setUTCHours(23, 59, 59, 999)
  } else {
    today.setUTCHours(0, 0, 0, 0)
  }

  const isoString = today.toISOString()

//   console.log("isoString:", isoString)
  // isoString: 2023-12-18T23:59:59.999Z

//   console.log(
//     "isoString return:",
//     isoString.substring(0, isoString.length - 1) + "+00"
//   )
//   isoString return: 2023-12-18T23:59:59.999+00

  return isoString.substring(0, isoString.length - 1) + "+00"
}

export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    value
  )
