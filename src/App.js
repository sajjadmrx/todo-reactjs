import ToggleTheme from './components/toggleTheme';
import logo from './logo.svg';
import Todo from './views/todo';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Todo />
      <ToggleTheme />
    </div>
  );
}

export default App;
