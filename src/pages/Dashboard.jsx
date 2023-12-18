import DashboardFilter from "../components/features/dashboard/DashboardFilter"
import DashboardLayout from "../components/features/dashboard/DashboardLayout"
import { Heading, Row } from "../components/ui"

function Dashboard() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </Row>
      <DashboardLayout />
    </>
  )
}

export default Dashboard
