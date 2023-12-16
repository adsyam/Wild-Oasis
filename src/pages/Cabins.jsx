import AddCabin from "../components/features/cabins/AddCabin"
import CabinTable from "../components/features/cabins/CabinTable"
import CabinTableOperations from "../components/features/cabins/CabinTableOperations"
import { Heading, Row } from "../components/ui"

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </Row>

      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  )
}

export default Cabins
