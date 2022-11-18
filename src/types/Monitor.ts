export const BRAND_NAMES = ['Dell', 'HP', 'IBM', 'Lenovo'] as const
export const SCREEN_SIZES = [17, 19, 21, 23, 25] as const


// Preciso dar export nesses types ou somente no MonitorType?
export type BrandNameType = typeof BRAND_NAMES[number]
export type ScreenSizeType = typeof SCREEN_SIZES[number]

export type MonitorType = {
  productNumber: string
  brand: BrandNameType
  screenSize: ScreenSizeType
  price: number
  quantity: number
}


export type NewMonitorFormProps = {
  onAddItem: Function
}
