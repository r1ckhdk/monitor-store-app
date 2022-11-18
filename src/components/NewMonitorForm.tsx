import { useState } from 'react'
import { MonitorType, NewMonitorFormProps, BRAND_NAMES, SCREEN_SIZES, BrandNameType, ScreenSizeType } from '../types/Monitor'


export const NewMonitorForm: React.FC<NewMonitorFormProps> = ({ onAddItem }) => {

  // Estranho tipar o useState dessa forma?
  const [productNumber, setProductNumber] = useState<MonitorType["productNumber"]>()
  const [brand, setBrand] = useState<BrandNameType>()
  const [screenSize, setScreenSize] = useState<ScreenSizeType>()
  const [price, setPrice] = useState<string>()
  const [quantity, setQuantity] = useState<string>()
  

  const createMonitor = () => {


    if (productNumber !== undefined &&
      brand !== undefined &&
      screenSize !== undefined &&
      price !== undefined &&
      quantity !== undefined
      ) {
      const newMonitor: MonitorType = {
        productNumber: productNumber,
        brand: brand,
        screenSize: screenSize,
        price: +price,
        quantity: +quantity
      }

      onAddItem(newMonitor)
    }
    

  }

  return (
    <fieldset>
      <legend>Add to inventory</legend>

      <label htmlFor='productNumber'>Product Number: </label>
      <input
        type='text'
        name='productNumber'
        value={productNumber}
        onChange={(event) => setProductNumber(event.target.value)}/>
      <br />

      <label htmlFor='brand'>Brand: </label>
      <select 
        name='brand'
        onChange={(event) => setBrand(event.target.value as BrandNameType)}>
        <option value='' >-- Select --</option>
        {BRAND_NAMES.map(brand => <option value={brand}>{brand}</option>) }
      </select>
      <br />

      <label htmlFor='screenSize'>Screen Size: </label>
      <select
      name='screenSize'
      onChange={(event) => setScreenSize((event.target.value as unknown) as ScreenSizeType)}>
        <option value=''>-- Select --</option>
        {SCREEN_SIZES.map(screenSize => <option value={screenSize}>{screenSize}</option>) }

      </select>
      <br />

      <label htmlFor='price'>Price: </label>
      <input
        type='number'
        name='price'
        value={price}
        onChange={(event) => setPrice(event.target.value)} />
      <br />

      <label htmlFor='quantity'>Quantity: </label>
      <input
        type='number'
        name='quantity'
        value={quantity}
        onChange={(event) => setQuantity(event.target.value)} />
      <br />

      <input
        type='button'
        value='Add Monitor'
        onClick={() => createMonitor()}/>
    </fieldset>
  )
}
