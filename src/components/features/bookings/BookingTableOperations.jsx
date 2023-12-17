import { TableOperations } from "../../ui"
import Filter from "../../ui/Filter"
import SortBy from "../../ui/SortBy"

function BookingTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "All" },
          { value: "checked-out", label: "Checked out" },
          { value: "checked-in", label: "Checked in" },
          { value: "unconfirmed", label: "Unconfirmed" },
        ]}
      />

      <SortBy
        options={[
          { value: "start_date-desc", label: "Sort by date (newest first)" },
          { value: "start_date-asc", label: "Sort by date (oldest first)" },
          {
            value: "total_price-desc",
            label: "Sort by amount (high-low)",
          },
          { value: "total_price-asc", label: "Sort by amount (low-high)" },
        ]}
      />
    </TableOperations>
  )
}

export default BookingTableOperations
