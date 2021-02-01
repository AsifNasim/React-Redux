import './App.css';
import { Provider } from 'react-redux'
import CakeContainer from './components/CakeContainer';
import store from './redux/store'
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import TableOfFiveContainer from './components/TableOfFiveContainer'
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';

function App() {
  return (
    // we pass store as a prop
    // the store in the curly bracket is the store that we have import from redux/store
    <Provider store = {store}>
      <div className="App">
          <ItemContainer cake/>
          <ItemContainer/>
          <CakeContainer/>
          <HooksCakeContainer/>
          <IceCreamContainer/>
          <NewCakeContainer/>
          <TableOfFiveContainer/>
      </div>
    </Provider>
  );
}

export default App;
