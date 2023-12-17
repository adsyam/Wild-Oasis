import { useEffect, useState } from "react"
import styled from "styled-components"
import { useMoveBack } from "../../../hooks/useMoveBack"
import { formatCurrency } from "../../../utils/helpers"
import {
  Button,
  ButtonGroup,
  ButtonText,
  Checkbox,
  Heading,
  Row,
  Spinner,
} from "../../ui"
import { BookingDataBox } from "../bookings"
import useBooking from "../bookings/useBooking"
import useCheckin from "./useCheckin"

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`

function CheckinBooking() {
  const [confirmPaid, setConfirmPaid] = useState(false)

  const { booking = {}, isLoading } = useBooking()

  useEffect(() => {
    setConfirmPaid(booking?.is_paid ?? false)
  }, [booking?.is_paid])

  const moveBack = useMoveBack()
  const { checkin, isCheckingin } = useCheckin()

  const {
    id: bookingId,
    guests,
    total_price,
    number_of_guests,
    has_breakfast,
    num_of_nights,
  } = booking

  function handleCheckin() {
    if (!confirmPaid) return
    checkin(bookingId)
  }

  if (isLoading) return <Spinner />

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack} disabled={isCheckingin}>
          &larr; Back
        </ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <Box>
        <Checkbox
          checked={confirmPaid}
          onChange={() => setConfirmPaid(!confirmPaid)}
          id="confirm"
          disabled={confirmPaid || isCheckingin}
        >
          I confirm that {guests.full_name} has paid the total amount of{" "}
          {formatCurrency(total_price)}
        </Checkbox>
      </Box>

      <ButtonGroup>
        <Button onClick={handleCheckin} disabled={!confirmPaid || isCheckingin}>
          Check in booking #{bookingId}
        </Button>
        <Button
          $variation="secondary"
          onClick={moveBack}
          disabled={isCheckingin}
        >
          Back
        </Button>
      </ButtonGroup>
    </>
  )
}

export default CheckinBooking
