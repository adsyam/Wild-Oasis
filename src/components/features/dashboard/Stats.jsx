import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2"
import { formatCurrency } from "../../../utils/helpers"
import Stat from "./Stat"

export default function Stats({
  bookings,
  confirmedStays,
  numDays,
  cabinCount,
}) {
  const numBookings = bookings.length

  const totalSales = bookings.reduce((acc, cur) => acc + cur.total_price, 0)

  const checkins = confirmedStays.length

  const occupancyRate =
    confirmedStays.reduce((acc, cur) => acc + cur.number_of_nights, 0) /
    (numDays * cabinCount)

  return (
    <>
      <Stat
        icon={<HiOutlineBriefcase />}
        value={numBookings}
        title="bookings"
        color="blue"
      />
      <Stat
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(totalSales)}
        title="Sales"
        color="green"
      />
      <Stat
        icon={<HiOutlineCalendarDays />}
        value={checkins}
        title="Check ins"
        color="indigo"
      />
      <Stat
        icon={<HiOutlineChartBar />}
        value={Math.round(occupancyRate * 100) + "%"}
        title="Occupancy rate"
        color="yellow"
      />
    </>
  )
}
