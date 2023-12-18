import styled from "styled-components"
import { Spinner } from "../../ui"
import useCabins from "../cabins/useCabins"
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

  if (isLoadingBookings || isLoadingStays || isLoadingCabins) return <Spinner />

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />
      <div>Today&#39;s activity</div>
      <div>Chart stay durations</div>
      <SalesChart numDays={numDays} bookings={bookings} />
    </StyledDashboardLayout>
  )
}
