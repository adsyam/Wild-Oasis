import { useSearchParams } from "react-router-dom"
import Menus from "../../ui/Menus"
import Spinner from "../../ui/Spinner"
import Table from "../../ui/Table"
import CabinRow from "./CabinRow"
import useCabins from "./useCabins"

export default function CabinTable() {
  const { isLoading, cabins } = useCabins()
  const [searchParams] = useSearchParams()

  if (isLoading) return <Spinner />

  const filterValue = searchParams.get("discount") || "all"

  const filterConditions = {
    all: () => cabins,
    "no-discount": () => cabins.filter((cabin) => cabin.discount === 0),
    "with-discount": () => cabins.filter((cabin) => cabin.discount > 0),
  }

  const filteredCabins = filterConditions[filterValue]()

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header role="row">
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={filteredCabins}
          render={(cabin) => {
            return <CabinRow key={cabin.id} cabin={cabin} />
          }}
        />
      </Table>
    </Menus>
  )
}
