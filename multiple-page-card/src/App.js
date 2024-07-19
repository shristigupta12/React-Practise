import './App.css';
import { Home } from './pages/Home';
import { Navbar } from './components/section/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
