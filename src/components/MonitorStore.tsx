import { MonitorFilters } from './MonitorFilters'
import { MonitorInventory } from './MonitorInventory'
import { NewMonitorForm } from './NewMonitorForm'

export const BRAND_NAMES = ['Dell', 'HP', 'IBM', 'Lenovo'] as const
export const SCREEN_SIZES = [17, 19, 21, 23, 25] as const

// BRAND_NAMES.push('LG')
// BRAND_NAMES.pop('HP')

type BrandNameType = typeof BRAND_NAMES[number]
type ScreenSizeType = typeof SCREEN_SIZES[number]

export type MonitorType = {
  productNumber: string
  brand: BrandNameType
  screenSize: ScreenSizeType
  price: number
  quantity: number
}

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