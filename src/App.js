import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/Navbar';
import FormDisabledInputExample from './component/form/FormDisabledInputExample';
import Main from './component/main/Main';

function App() {
  return (
    <div className="App">
      <h1>hello world</h1>
      <Navbar/>
      <FormDisabledInputExample/>
      <Main/>
     
    </div>
  );
}

export default App;
