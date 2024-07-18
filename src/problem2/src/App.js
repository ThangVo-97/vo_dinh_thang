import { Provider } from 'react-redux'
import store from '../src/redux/store'
import CurrencyContainer from './container/CurrencyContainer';


function App() {
  
  return (
    <Provider store={store}>
      <CurrencyContainer />
    </Provider>
  );
}

export default App;
