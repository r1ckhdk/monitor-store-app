import { MonitorFilters } from './MonitorFilters'
import { MonitorInventory } from './MonitorInventory'
import { NewMonitorForm } from './NewMonitorForm'
import { MonitorStoreProps } from '../types/MonitorStore'
import { MonitorType } from '../types/Monitor'
import { useState } from 'react'


export const MonitorStore: React.FC<MonitorStoreProps> = ({ storeName }) => {

  const [monitors, setMonitors] = useState<MonitorType[]>([])

  const handleMonitor = (newMonitor: MonitorType) => {
    setMonitors(previous => [...previous, newMonitor])
    console.log('Novo item: ', newMonitor);
  }
  return (
    <>
      <h1>{storeName}</h1>

      <NewMonitorForm onAddItem={handleMonitor}/>
      <MonitorFilters />
      <MonitorInventory monitors={monitors}/>
    </>
  )
}