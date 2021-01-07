import logo from './logo.svg';
import './App.css';
import Card from './components/card/Card';
import Axios from 'axios';



function App() {
  return (
    <div className="App">
      <Card statusCode={200} statusText={"OK"} isDown={false} returnedUrl={"https://www.someurl.com"} requestedDomain={"someurl"} ></Card>
    </div>
  );
}

export default App;
