import { MonitorType } from "../types/Monitor"

type MonitorInventoryProps = {monitors: MonitorType[]}


export const MonitorInventory: React.FC<MonitorInventoryProps> = ({monitors}) => {


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
          {monitors.map((monitor: MonitorType) => <tr>
            <td>{monitor.productNumber}</td>
            <td>{monitor.brand}</td>
            <td>{monitor.screenSize}</td>
            <td>{monitor.price}</td>
            <td>{monitor.quantity}</td>
          </tr>)}
          
        </tbody>
      </table>

      <input type='button' value={`Sell P1234 Monitor`} />
    </>
  )
}
