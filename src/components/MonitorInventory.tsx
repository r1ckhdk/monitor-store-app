type MonitorInventoryProps = {}

export const MonitorInventory: React.FC<MonitorInventoryProps> = () => {
  return (
    <>
      <br />

      <table border={1} cellPadding='3' style={{ fontSize: 12 }}>
        <thead>
          <tr>
            <th>Product Number</th>
            <th>Brand</th>
            <th>Screen Size</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>P1234</td>
            <td>HP</td>
            <td>25</td>
            <td>120.00</td>
            <td>30</td>
          </tr>
          <tr>
            <td>P4321</td>
            <td>Lenovo</td>
            <td>21</td>
            <td>100.00</td>
            <td>50</td>
          </tr>
        </tbody>
      </table>

      <input type='button' value={`Sell P1234 Monitor`} />
    </>
  )
}
