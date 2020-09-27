import React from 'react';
import './App.css';
import Board from './containers/Board';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';

const store = configureStore();

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Board />
      </div>
    </Provider>
  );
}

export default App;
