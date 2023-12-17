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
import useSettings from "../settings/useSettings"
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
  const [addBreakfast, setAddBreakfast] = useState(false)
  const { booking = {}, isLoading } = useBooking()
  const { settings, isLoading: isLoadingSettings } = useSettings()

  useEffect(() => {
    setConfirmPaid(booking?.is_paid ?? false)
  }, [booking?.is_paid])

  const moveBack = useMoveBack()
  const { checkin, isCheckingin } = useCheckin()

  if (isLoading || isLoadingSettings) return <Spinner />

  const {
    id: bookingId,
    guests,
    total_price,
    number_of_guests,
    has_breakfast,
    number_of_nights,
  } = booking

  const optionalBreakfastPrice =
    settings.breakfast_price * number_of_nights * number_of_guests

  function handleCheckin() {
    if (!confirmPaid) return

    if (addBreakfast) {
      checkin({
        bookingId,
        breakfast: {
          has_breakfast: true,
          extras_price: optionalBreakfastPrice,
          total_price: total_price + optionalBreakfastPrice,
        },
      })
    } else {
      checkin({ bookingId, breakfast: {} })
    }
  }

  function breakfastToggle() {
    setAddBreakfast(!addBreakfast)
    setConfirmPaid(false)
  }

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack} disabled={isCheckingin}>
          &larr; Back
        </ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      {!has_breakfast && (
        <Box>
          <Checkbox
            checked={addBreakfast}
            onChange={breakfastToggle}
            id="breakfast"
          >
            Want to add breakfast for {formatCurrency(optionalBreakfastPrice)}?
          </Checkbox>
        </Box>
      )}

      <Box>
        <Checkbox
          checked={confirmPaid}
          onChange={() => setConfirmPaid(!confirmPaid)}
          disabled={confirmPaid || isCheckingin}
          id="confirm"
        >
          I confirm that {guests.full_name} has paid the total amount of{" "}
          {!addBreakfast
            ? formatCurrency(total_price)
            : `${formatCurrency(
                total_price + optionalBreakfastPrice
              )} (${formatCurrency(total_price)} + ${formatCurrency(
                optionalBreakfastPrice
              )})`}
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
