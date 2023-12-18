import { useQuery } from "@tanstack/react-query"
import { subDays } from "date-fns"
import { useSearchParams } from "react-router-dom"
import { getStaysAfterDate } from "../../../services/apiBookings"

export default function useRecentStays() {
  const [searchParams] = useSearchParams()

  const numDays = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"))

  const currentDate = new Date()

  const queryDate = subDays(currentDate, numDays).toISOString()
  // subDays substracts the days from the 1st argument

  //   console.log("Query date:", queryDate)
  // Query date: 2023-12-11T13:28:26.984Z

  const { isLoading, data: stays } = useQuery({
    queryFn: () => getStaysAfterDate(queryDate),
    queryKey: ["stays", `last-${numDays}`],
  })

  const confirmedStays = stays?.filter(
    (stay) => stay.status === "checked-in" || stay.status === "checked-out"
  )

  return { isLoading, stays, confirmedStays, numDays }
}
