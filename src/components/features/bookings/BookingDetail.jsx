import styled from "styled-components"
import useMoveBack from "../../../hooks/useMoveBack"
import { Button, ButtonGroup, ButtonText, Heading, Row, Tag } from "../../ui"
import BookingDataBox from "./BookingDataBox"

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`

export default function BookingDetail() {
  const booking = {}
  const status = "checked-in"

  const moveBack = useMoveBack()

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  }

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #X</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        <Button $variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  )
}
