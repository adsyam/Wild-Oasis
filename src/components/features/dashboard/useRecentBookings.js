import { useQuery } from "@tanstack/react-query"
import { subDays } from "date-fns"
import { useSearchParams } from "react-router-dom"
import { getBookingsAfterDate } from "../../../services/apiBookings"

export default function useRecentBookings() {
  const [searchParams] = useSearchParams()

  const numDays = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"))

  const currentDate = new Date()

  const queryDate = subDays(currentDate, numDays).toISOString()
  // subDays substracts the days from the 1st argument

//   console.log("Query date:", queryDate)
  // Query date: 2023-12-11T13:28:26.984Z

  const { isLoading, data: bookings } = useQuery({
    queryFn: () => getBookingsAfterDate(queryDate),
    queryKey: ["bookings", `last-${numDays}`],
  })

  return { isLoading, bookings }
}
