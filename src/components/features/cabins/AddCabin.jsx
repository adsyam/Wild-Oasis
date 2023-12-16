import { Button } from "../../ui"
import Modal from "../../ui/Modal"
import CreateCabinForm from "./CreateCabinForm"

export default function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
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
