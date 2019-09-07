import React from 'react';
import {Provider} from 'react-redux';
import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Publication from './component/Publication';
import store from './redux/store';

function App() {
  return (
	  <Provider store={store}>
  <div className = "App contenedor" >
		<Navbar/>
 
		<Publication/>
 
		<Footer/>
    </div>
	</Provider>
  );
}

export default App;
