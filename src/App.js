import { Provider } from 'react-redux';
import './App.css';
import LeftSide from './Components/LeftSide/LeftSide';
import RightSide from './Components/RightSide/RightSide';
import store from './Redux/store'

function App() {
  return (
    <Provider store = {store}>
      <div className='outer'>
        <LeftSide />
        <RightSide />
      </div>
    </Provider>
  );
}

export default App;
