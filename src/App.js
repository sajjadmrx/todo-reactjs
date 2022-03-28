import ToggleTheme from './components/toggleTheme';
import logo from './logo.svg';
import Todo from './views/todo';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Footer from './components/Footer.component';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Todo />
      <ToggleTheme />
      <Footer />
    </div>
  );
}

export default App;
