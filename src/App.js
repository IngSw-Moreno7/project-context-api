import './App.css';
import { Context } from './context/Context';
import { AppRouter } from './routing/AppRouter';

function App() {

  const clients = {
    id: 100,
    name: 'Paola Andrea',
    last_name: 'Moreno',
    phone: '1234567890',
    city: 'Bogotá D.C'
  }

  return (
    <div className="App">
        <Context.Provider value={clients}>
          <AppRouter />
        </Context.Provider>

      </div>
  );
}

export default App;
