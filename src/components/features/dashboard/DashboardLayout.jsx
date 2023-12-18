import styled from "styled-components"
import { Spinner } from "../../ui"
import useCabins from "../cabins/useCabins"
import TodayActivity from "../check-in-out/TodayActivity"
import DurationChart from "./DurationChart"
import SalesChart from "./SalesChart"
import Stats from "./Stats"
import useRecentBookings from "./useRecentBookings"
import useRecentStays from "./useRecentStays"

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`

export default function DashboardLayout() {
  const { bookings, isLoading: isLoadingBookings } = useRecentBookings()

  const {
    stays,
    isLoading: isLoadingStays,
    confirmedStays,
    numDays,
  } = useRecentStays()

  const { cabins, isLoading: isLoadingCabins } = useCabins()

  //   console.log(
  //     "confirmedStays:",
  //     confirmedStays.map((c) => c.number_of_nights)
  //   )

  if (isLoadingBookings || isLoadingStays || isLoadingCabins) return <Spinner />

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />
      <TodayActivity />
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart numDays={numDays} bookings={bookings} />
    </StyledDashboardLayout>
  )
}
