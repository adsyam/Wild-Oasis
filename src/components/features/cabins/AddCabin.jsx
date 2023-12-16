import { Button } from "../../ui"
import Modal from "../../ui/Modal"
import CabinTable from "./CabinTable"
import CreateCabinForm from "./CreateCabinForm"

export default function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>

      <Modal.Open opens="table">
        <Button>Show table</Button>
      </Modal.Open>
      <Modal.Window name="table">
        <CabinTable />
      </Modal.Window>
    </Modal>
  )
}

// export default function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false)

//   return (
//     <div>
//       {" "}
//       <Button $variation="primary" onClick={() => setIsOpenModal(!isOpenModal)}>
//         Add new cabin
//       </Button>
//       {isOpenModal && (
//         <Modal onCloseModal={() => setIsOpenModal(false)}>
//           <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   )
// }
