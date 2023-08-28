
import './App.css';
import Conditional from './Conditional';
import Controlled from './Controlled';
import List from './List';
import Test from './Test';
import Uncontrolled from './Uncontrolled';

function App() {
  return (
    <>
    <h1>react fragment</h1>
    <h1>react fragment</h1>
    <h1>react fragment</h1>

    <table>
      <tbody>

      <tr>
        <Test />

      </tr>
      </tbody>
    </table>
    <Controlled name={6} />
    <Uncontrolled />
   <List />
   <Conditional />

    </>
  );
}

export default App;
