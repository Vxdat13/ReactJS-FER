// import logo from './logo.svg';
// import './App.css';
// import Navigation from './components/Navigation/Navigation';
// import Player from './components/Player/Players';
// import Footer from './components/Footer/Footer';

// function App() {
//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//     <div className='App'>
//       <Navigation/>
//       <Player/>
//       <Footer/>
//     </div>
//   );
// }

// export default App;

import'./App.css';
import Navigation from './components/Navigation';
import Player from './components/Players';
import Footer from './components/Footer';
function App(){
  return(
    <div className='App'>
      <Navigation/>
      <Player/>
      <Footer/>

    </div>
  );
}
export default App;