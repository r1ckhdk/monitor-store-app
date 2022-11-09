type NewMonitorFormProps = {}

export const NewMonitorForm: React.FC<NewMonitorFormProps> = () => {
  return (
    <fieldset>
      <legend>Add to inventory</legend>

      <label htmlFor='productNumber'>Product Number: </label>
      <input type='text' name='productNumber' />
      <br />

      <label htmlFor='brand'>Brand: </label>
      <select name='brand'>
        <option value=''>-- Select --</option>
      </select>
      <br />

      <label htmlFor='screenSize'>Screen Size: </label>
      <select name='screenSize'>
        <option value=''>-- Select --</option>
      </select>
      <br />

      <label htmlFor='price'>Price: </label>
      <input type='number' name='price' />
      <br />

      <label htmlFor='quantity'>Quantity: </label>
      <input type='number' name='quantity' />
      <br />

      <input type='button' value='Add Monitor' />
    </fieldset>
  )
}
