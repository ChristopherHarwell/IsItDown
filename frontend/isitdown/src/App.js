import logo from './logo.svg';
import './App.css';
import Card from './components/card/Card';
import Axios from 'axios';
import {connect} from 'react-redux';

import { getStatusText, getStatusCode, } from "./actions";



function App(props) {
  return (
    <div className="App">
      {console.log(props)}
      <Card statusCode={props.statusCode} statusText={props.statusText} isDown={props.isDown} returnedUrl={props.returnedUrl} requestedDomain={props.requestedDomain} ></Card>
    </div>
  );
}

const mapStateToProps = (storeState) => ({
  websiteName: storeState.websiteName,
  statusCode: storeState.statusCode,
  statusText: storeState.statusText,
  isDown: storeState.isDown,
  returnedUrl: storeState.returnedUrl,
  requestedDomain: storeState.requestedDomain,
})
export default connect(mapStateToProps, {getStatusCode, getStatusText})(App);
