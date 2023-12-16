import { BookingTable } from "../components/features/bookings"
import { Heading, Row } from "../components/ui"

function Bookings() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <p>TEST</p>
      </Row>

      <BookingTable />
    </>
  )
}

export default Bookings
