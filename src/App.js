import './App.css';
import CounterRedux from './components/CounterRedux/counterRedux';
import CounterReduxToolkit from './components/CounterReduxToolkit/counterReduxToolkit';

function App() {
  return (
    <div className="App">
      <CounterRedux />
      <br/>
      <CounterReduxToolkit/>
    </div>
  );
}

export default App;
