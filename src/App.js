import Data, { totalReward } from "./components/Data";
import TableRow from "./components/TableRow";
import "./App.css";

function App() {
  const displayData = () => {
    return Data.map((data, index) => {
      return <TableRow key={index} data={data} />;
    });
  };

  return (
    <div className="App">
      <table>
        <tr>
          <th>Transaction Description</th>
          <th>Month</th>
          <th>Transaction Amount</th>
          <th>Reward points</th>
        </tr>
        {displayData()}
        <tr>
          <td colspan="3"> Total reward points: </td>
          <td>{`${totalReward()}`}</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
