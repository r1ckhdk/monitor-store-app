import { MonitorFilters } from './MonitorFilters'
import { MonitorInventory } from './MonitorInventory'
import { NewMonitorForm } from './NewMonitorForm'

type MonitorStoreProps = {
  storeName: string
}

export const MonitorStore: React.FC<MonitorStoreProps> = ({ storeName }) => {
  return (
    <>
      <h1>{storeName}</h1>

      <NewMonitorForm />
      <MonitorFilters />
      <MonitorInventory />
    </>
  )
}
