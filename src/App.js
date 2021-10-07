import logo from './logo.svg';
import './App.css';
import { Landing } from './pages/Landing';
import 'semantic-ui-css/semantic.min.css'
import RouterPrincipal from './router-principal';

function App() {
  return (
    <div className="App">
      <RouterPrincipal/>
    </div>
  );
}

export default App;
