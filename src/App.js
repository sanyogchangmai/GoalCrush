import './App.css';
// import Fixtures from './Components/Fixtures/Fixtures';
import Livescore from './Components/Livescore/Livescore';
import Navbar from './Components/Navbar/Navbar';
import Options from './Components/Options/Options';
import Standings from './Components/Standings/Standings';
import{ BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import Players from './Components/Players/Players';
import News from './Components/News/News';
import Fix from './Components/Fix/Fix';
import Nav from './Components/Nav/Nav';
import Lineup from './Components/Lineup/Lineup';
import Recent from './Components/Recent/Recent';
import Stats from './Components/Stats/Stats';

function App() {
   
  return (
    <div className="App">

      <Router>
      <div className="App h-screen">

      <Navbar/>
      <Nav/>

      <div className="content">
        <Switch>

        <Route exact path="/">
          <News/>
        </Route>

        {/* <Route exact path="/livescore">
          <Livescore/>
        </Route> */}

        <Route exact path="/livescore">
          <Options/>
          <Livescore/>
        </Route>

        {/* <Route exact path="/fixtures">
          <Options/>
          <Fixtures/>
        </Route> */}

        <Route exact path="/lineup/:id">
          <Lineup/>
        </Route>


        <Route exact path="/standings">
          <Options/>
          <Standings/>
        </Route>

        <Route exact path="/top-players">
          <Players/>
        </Route>

        <Route exact path="/fix">
          <Options/>
          <Fix/>
        </Route>

        <Route exact path="/recent">
          <Options/>
          <Recent/>
        </Route>

        <Route exact path="/stats/:id">
          <Stats/>
        </Route>

        </Switch>
        </div> 

        </div>
      </Router>

    </div>
  );
}

export default App;
