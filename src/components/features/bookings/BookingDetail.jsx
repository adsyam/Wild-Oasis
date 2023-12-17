import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { useMoveBack } from "../../../hooks/useMoveBack"
import {
  Button,
  ButtonGroup,
  ButtonText,
  Heading,
  Row,
  Spinner,
  Tag,
} from "../../ui"
import BookingDataBox from "./BookingDataBox"
import useBooking from "./useBooking"

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`

export default function BookingDetail() {
  const { isLoading, booking = {} } = useBooking()

  const { status, id: bookingId } = booking

  const moveBack = useMoveBack()
  const navigate = useNavigate()

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  }

  if (isLoading) return <Spinner />

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {status === "unconfirmed" && (
          <Button onClick={() => navigate(`/checkin/${bookingId}`)}>
            Check in
          </Button>
        )}
        <Button $variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  )
}
