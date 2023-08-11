import './App.css';
import Home from './screens/home/home';
import Main from "./screens/main/main.jsx";
import Store from "./screens/store/store.jsx";
import Shows from "./screens/shows/shows.jsx";
import EndView from "./screens/end/screen_end.jsx" ;

function App() {
  return (
    <div className="App">    

      <Main />
      <Home />
      <Store />
      <Shows />
      <EndView />
      
     
    </div>
  );
}

export default App;
