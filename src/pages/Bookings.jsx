import {
  BookingTable,
  BookingTableOperations,
} from "../components/features/bookings"
import { Heading, Row } from "../components/ui"

function Bookings() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <BookingTableOperations />
      </Row>

      <BookingTable />
    </>
  )
}

export default Bookings
